(() => {
  'use strict';

  const PAGE_SIZE = 100;
  const state = { payload: null, filtered: [], page: 1, loading: false };
  const typeLabels = { earnings: '财报', dividends: '分红', splits: '拆股' };
  const timeLabels = { pre_market: '盘前', after_hours: '盘后', not_supplied: '时间未提供' };

  const originalSwitchTab = window.switchTab;
  window.switchTab = function localSwitchTab(idx, el) {
    originalSwitchTab(idx, el);
    if (idx === 7) {
      document.getElementById('symbol-controls').style.display = 'none';
      if (!state.payload && !state.loading) loadCalendar();
    }
  };

  function addDays(iso, days) {
    const d = new Date(`${iso}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function money(value, digits = 2) {
    if (value === null || value === undefined || value === '') return '—';
    return `$${Number(value).toLocaleString('en-US', { maximumFractionDigits: digits })}`;
  }

  function displayTime(row) {
    if (row.event_type === 'earnings') return timeLabels[row.report_time] || row.report_time || '—';
    if (row.event_type === 'dividends') return '除息日';
    return row.split_ratio || '—';
  }

  function displayValue(row) {
    if (row.event_type === 'earnings') return `EPS 预期 ${money(row.eps_forecast)}`;
    if (row.event_type === 'dividends') return `每股 ${money(row.dividend_rate, 6)}`;
    if (row.new_shares == null || row.old_shares == null) return '拆股';
    return row.new_shares >= row.old_shares ? '正向拆股' : '反向拆股';
  }

  function displayDetails(row) {
    if (row.event_type === 'earnings') {
      const estimates = row.estimate_count == null ? '' : ` · ${row.estimate_count} 个估值`;
      return `${row.fiscal_period || '财季未提供'}${estimates}`;
    }
    if (row.event_type === 'dividends') {
      const parts = [];
      if (row.payment_date) parts.push(`支付 ${row.payment_date}`);
      if (row.record_date) parts.push(`登记 ${row.record_date}`);
      if (row.indicated_annual_dividend != null) parts.push(`历史年化 ${money(row.indicated_annual_dividend, 6)}`);
      return parts.join(' · ') || '—';
    }
    if (row.new_shares != null && row.old_shares != null) return `新 ${row.new_shares} : 旧 ${row.old_shares}`;
    return '—';
  }

  function td(text, className = '') {
    const cell = document.createElement('td');
    cell.textContent = text == null || text === '' ? '—' : String(text);
    if (className) cell.className = className;
    return cell;
  }

  function marketsFor(row, marketType) {
    return state.payload?.markets?.[row.symbol]?.[marketType] || [];
  }

  function populateMarketFilters() {
    for (const marketType of ['spot', 'futures']) {
      const select = document.getElementById(`event-calendar-${marketType}`);
      const previous = select.value;
      const exchanges = new Set();
      for (const row of state.payload?.events || []) {
        for (const market of marketsFor(row, marketType)) exchanges.add(market.exchange);
      }
      const fixedOptions = marketType === 'spot'
        ? [['', '全部'], ['has', '有现货'], ['none', '无现货']]
        : [['', '全部'], ['has', '有合约'], ['none', '无合约']];
      select.replaceChildren(...fixedOptions.map(([value, label]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        return option;
      }));
      for (const exchange of [...exchanges].sort()) {
        const option = document.createElement('option');
        option.value = `exchange:${exchange}`;
        option.textContent = exchange.toUpperCase();
        select.appendChild(option);
      }
      if ([...select.options].some(option => option.value === previous)) select.value = previous;
    }
  }

  function matchesMarketFilter(row, marketType, filter) {
    if (!filter) return true;
    const markets = marketsFor(row, marketType);
    if (filter === 'has') return markets.length > 0;
    if (filter === 'none') return markets.length === 0;
    if (filter.startsWith('exchange:')) {
      const exchange = filter.slice('exchange:'.length);
      return markets.some(market => market.exchange === exchange);
    }
    return true;
  }

  function marketCoverageScore(row) {
    const spot = marketsFor(row, 'spot');
    const futures = marketsFor(row, 'futures');
    return {
      coverage: Number(spot.length > 0) + Number(futures.length > 0),
      pairs: spot.length + futures.length,
    };
  }

  function marketCell(row, marketType) {
    const cell = document.createElement('td');
    cell.className = 'event-markets';
    const markets = marketsFor(row, marketType);
    if (!markets.length) {
      const empty = document.createElement('span');
      empty.className = 'event-market-empty';
      empty.textContent = '未收录';
      cell.appendChild(empty);
      return cell;
    }
    const list = document.createElement('div');
    list.className = 'event-market-list';
    for (const market of markets) {
      const chip = document.createElement('span');
      chip.className = `event-market-chip ${marketType}`;
      const exchange = document.createElement('span');
      exchange.className = 'exchange';
      exchange.textContent = market.exchange;
      const pair = document.createElement('span');
      pair.textContent = market.symbol;
      chip.append(exchange, pair);
      const descriptor = marketType === 'spot' ? market.product_type : market.contract_type;
      chip.title = [descriptor, market.timestamp ? `快照 ${market.timestamp}` : ''].filter(Boolean).join(' · ');
      list.appendChild(chip);
    }
    cell.appendChild(list);
    return cell;
  }

  function renderTable() {
    const tbody = document.querySelector('#event-calendar-table tbody');
    tbody.innerHTML = '';
    const pageCount = Math.max(1, Math.ceil(state.filtered.length / PAGE_SIZE));
    state.page = Math.min(Math.max(1, state.page), pageCount);
    const start = (state.page - 1) * PAGE_SIZE;
    const rows = state.filtered.slice(start, start + PAGE_SIZE);
    for (const row of rows) {
      const tr = document.createElement('tr');
      tr.appendChild(td(row.event_date));
      const typeCell = document.createElement('td');
      const badge = document.createElement('span');
      badge.className = `event-calendar-badge ${row.event_type}`;
      badge.textContent = typeLabels[row.event_type] || row.event_type;
      typeCell.appendChild(badge);
      tr.appendChild(typeCell);
      tr.appendChild(td(row.symbol, 'event-symbol'));
      tr.appendChild(td(row.company_name, 'event-company'));
      tr.appendChild(marketCell(row, 'spot'));
      tr.appendChild(marketCell(row, 'futures'));
      tr.appendChild(td(displayTime(row)));
      tr.appendChild(td(displayValue(row)));
      tr.appendChild(td(displayDetails(row)));
      tbody.appendChild(tr);
    }
    if (!rows.length) {
      const tr = document.createElement('tr');
      const cell = td('当前筛选条件下没有事件', 'na');
      cell.colSpan = 9;
      tr.appendChild(cell);
      tbody.appendChild(tr);
    }
    document.getElementById('event-calendar-page').textContent = `第 ${state.page} / ${pageCount} 页`;
    document.getElementById('event-calendar-prev').disabled = state.page <= 1;
    document.getElementById('event-calendar-next').disabled = state.page >= pageCount;
    document.getElementById('event-calendar-result').textContent = `匹配 ${state.filtered.length.toLocaleString()} 条 · 每页 ${PAGE_SIZE} 条`;
  }

  function applyFilters(resetPage = true) {
    if (!state.payload) return;
    const q = document.getElementById('event-calendar-search').value.trim().toUpperCase();
    const type = document.getElementById('event-calendar-type').value;
    const range = document.getElementById('event-calendar-range').value;
    const spotFilter = document.getElementById('event-calendar-spot').value;
    const futuresFilter = document.getElementById('event-calendar-futures').value;
    const today = state.payload.today;
    const end = range === 'all' ? null : addDays(today, Number(range));
    state.filtered = state.payload.events.filter(row => {
      if (type && row.event_type !== type) return false;
      if (range !== 'all' && (row.event_date < today || row.event_date > end)) return false;
      if (!matchesMarketFilter(row, 'spot', spotFilter)) return false;
      if (!matchesMarketFilter(row, 'futures', futuresFilter)) return false;
      const marketText = [...marketsFor(row, 'spot'), ...marketsFor(row, 'futures')]
        .map(market => `${market.exchange} ${market.symbol}`).join(' ');
      if (q && !`${row.symbol || ''} ${row.company_name || ''} ${marketText}`.toUpperCase().includes(q)) return false;
      return true;
    });
    state.filtered.sort((a, b) => {
      const aScore = marketCoverageScore(a);
      const bScore = marketCoverageScore(b);
      return bScore.coverage - aScore.coverage
        || String(a.event_date).localeCompare(String(b.event_date))
        || bScore.pairs - aScore.pairs
        || String(a.event_type).localeCompare(String(b.event_type))
        || String(a.symbol).localeCompare(String(b.symbol));
    });
    if (resetPage) state.page = 1;
    renderTable();
  }

  function renderMeta() {
    const payload = state.payload;
    const upcoming = { earnings: 0, dividends: 0, splits: 0 };
    payload.events.forEach(row => {
      if (row.event_date >= payload.today && upcoming[row.event_type] !== undefined) upcoming[row.event_type] += 1;
    });
    document.getElementById('event-kpi-earnings').textContent = upcoming.earnings.toLocaleString();
    document.getElementById('event-kpi-dividends').textContent = upcoming.dividends.toLocaleString();
    document.getElementById('event-kpi-splits').textContent = upcoming.splits.toLocaleString();
    document.getElementById('event-kpi-window').textContent = `${payload.window.from} → ${payload.window.to}`;
    const run = payload.latest_run;
    document.getElementById('event-calendar-status').textContent = `采集 ${run?.status || payload.status}`;
    const marketTs = payload.market_data_ts || {};
    const newestMarketTs = [marketTs.spot, marketTs.futures].filter(Boolean).sort().at(-1);
    document.getElementById('event-calendar-updated').textContent = `日历 ${(run?.finished_at || '—').replace('T', ' ').slice(0, 16)} UTC · 市场 ${(newestMarketTs || '—').replace('T', ' ').slice(0, 16)}`;
  }

  async function loadCalendar() {
    if (state.loading) return;
    state.loading = true;
    const errorBox = document.getElementById('event-calendar-error');
    const refresh = document.getElementById('event-calendar-refresh');
    errorBox.style.display = 'none';
    refresh.disabled = true;
    refresh.textContent = '刷新中…';
    try {
      const suffix = `_t=${Date.now()}`;
      const sources = location.hostname.endsWith('.github.io')
        ? [`./us_stock_events.json?${suffix}`]
        : [`/api/calendar/events?${suffix}`, `./us_stock_events.json?${suffix}`];
      let response = null;
      for (const source of sources) {
        try {
          const candidate = await fetch(source);
          if (candidate.ok) { response = candidate; break; }
        } catch (_) {
          // Try the next supported source (live API first, then static snapshot).
        }
      }
      if (!response) throw new Error('实时 API 与静态快照均不可用');
      state.payload = await response.json();
      populateMarketFilters();
      renderMeta();
      applyFilters();
    } catch (error) {
      errorBox.style.display = 'block';
      errorBox.textContent = `事件日历加载失败：${error.message || error}`;
    } finally {
      state.loading = false;
      refresh.disabled = false;
      refresh.textContent = '刷新数据';
    }
  }

  document.getElementById('event-calendar-search').addEventListener('input', () => applyFilters());
  document.getElementById('event-calendar-type').addEventListener('change', () => applyFilters());
  document.getElementById('event-calendar-range').addEventListener('change', () => applyFilters());
  document.getElementById('event-calendar-spot').addEventListener('change', () => applyFilters());
  document.getElementById('event-calendar-futures').addEventListener('change', () => applyFilters());
  document.getElementById('event-calendar-refresh').addEventListener('click', loadCalendar);
  document.getElementById('event-calendar-prev').addEventListener('click', () => { state.page -= 1; renderTable(); });
  document.getElementById('event-calendar-next').addEventListener('click', () => { state.page += 1; renderTable(); });
})();
