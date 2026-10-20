(() => {
  'use strict';
  const panel = document.getElementById('panel-8');
  if (!panel) return;
  const box = document.createElement('section');
  box.className = 'ub-card ub-section';
  box.id = 'entropy-basis-study';
  box.innerHTML = `
    <h3 style="font-size:17px;margin:0 0 8px">Entropy · 已上市美股历史顶档基差 <span class="ub-tag">NAS / 严格时间筛选</span></h3>
    <p class="ub-muted" id="eb-description">读取历史研究产物中…</p>
    <div class="ub-filters" style="margin:12px 0">
      <label>标的<select id="eb-symbol"></select></label>
      <label>对照腿<select id="eb-pair"></select></label>
      <a class="ub-btn" id="eb-report" style="text-decoration:none;align-self:end" href="us_stock_basis_entropy/REPORT.md">下载研究报告</a>
      <a class="ub-btn" id="eb-export" style="text-decoration:none;align-self:end" href="us_stock_basis_entropy/pair_week_summary.csv">下载汇总 CSV</a>
    </div>
    <div class="ub-note">这里与上方 5 分钟成交收盘价代理是不同证据层：使用 NAS 历史顶档、接收时间回看和 USDC/USDT 同期盘口换算。图表仍是历史毛价差，不是净利润或已成交套利。</div>
    <div class="ub-metrics" id="eb-metrics"></div>
    <div class="ub-grid">
      <div class="ub-card"><h3>5 分钟中位数基差 · bps</h3><div class="ub-chart"><canvas id="eb-basis-chart"></canvas></div></div>
      <div class="ub-card"><h3>双向顶档毛价差 · bps</h3><div class="ub-chart"><canvas id="eb-direction-chart"></canvas></div></div>
    </div>
    <div class="ub-card"><h3>Entropy 连续七个 UTC 日订单与成交概况 · 10 月 11–17 日</h3><div class="ub-table" id="eb-orders"></div></div>
    <div class="ub-card"><h3>固定 30 分钟平仓敏感性 · 历史报价假设，非交易回测</h3><div class="ub-table" id="eb-convergence"></div></div>
    <div class="ub-card"><h3>BSC PancakeSwap V3 现货 · 历史区块双向 Quoter</h3><div class="ub-muted" id="eb-bsc-note"></div><div class="ub-table" id="eb-bsc-table"></div><div class="ub-chart" id="eb-bsc-wrap" style="height:230px;margin-top:12px"><canvas id="eb-bsc-chart"></canvas></div></div>
    <div class="ub-card"><h3>已上市股票全部 Entropy 配对</h3><div class="ub-table" id="eb-table"></div></div>
    <div class="ub-muted" id="eb-foot" style="margin-top:12px"></div>`;
  panel.appendChild(box);
  const $ = id => document.getElementById('eb-' + id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const n = (x, digits=2) => x == null || !Number.isFinite(Number(x)) ? '—' : Number(x).toLocaleString('en-US', {maximumFractionDigits:digits, minimumFractionDigits:digits});
  const pct = x => n(x * 100, 1) + '%';
  const et = new Intl.DateTimeFormat('zh-CN', {timeZone:'America/New_York', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', hour12:false});
  const venueName = {binance_perp:'Binance 股票永续', okx_perp:'OKX 股票永续', binance_spot:'Binance bStock 现货', bsc_spot:'BSC PancakeSwap 现货'};
  let study, basisChart, directionChart, bscChart;
  const metric = (label, value) => `<div class="ub-metric"><span class="ub-muted">${esc(label)}</span><strong>${esc(value)}</strong></div>`;
  function makeChart(canvas, labels, datasets) {
    return new Chart(canvas, {
      type:'line', data:{labels, datasets},
      options:{responsive:true, maintainAspectRatio:false, animation:false, normalized:true,
        interaction:{mode:'index', intersect:false},
        plugins:{legend:{labels:{color:'#c9d1d9'}}},
        scales:{x:{ticks:{color:'#8b949e', maxTicksLimit:9}, grid:{color:'#30363d'}}, y:{ticks:{color:'#8b949e'}, grid:{color:'#30363d'}}}}
    });
  }
  function render() {
    if (!study) return;
    const symbol = $('symbol').value;
    const pairs = study.pairs.filter(x => x.symbol === symbol);
    const selected = $('pair').value;
    $('pair').innerHTML = pairs.map(p => `<option value="${esc(p.venue)}">${esc(venueName[p.venue] || p.venue)}</option>`).join('');
    $('pair').value = pairs.some(p=>p.venue === selected) ? selected : pairs[0]?.venue || '';
    const p = pairs.find(x=>x.venue === $('pair').value);
    if (!p) return;
    const m = p.metrics;
    const conv = study.convergence.filter(x=>x.underlying===symbol && x.pair===$('pair').value && x.horizon_minutes===30);
    $('convergence').innerHTML=`<table><thead><tr><th>方向</th><th>符合条件的 5 分钟入场桶</th><th>30 分钟历史毛收益中位数</th><th>超过假设 12 bps 往返成本的比例</th></tr></thead><tbody>${conv.map(x=>`<tr><td>${x.direction==='sell_entropy_buy_other'?'卖 Entropy / 买对侧':'买 Entropy / 卖对侧'}</td><td>${n(x.observations,0)}</td><td>${n(x.median_gross_bps)} bps</td><td>${pct(x.share_above_12bp_cost)}</td></tr>`).join('')||'<tr><td colspan="4">没有满足深度和完整平仓报价的样本</td></tr>'}</tbody></table>`;
    const bsc=study.bsc;
    bscChart?.destroy(); bscChart=null;
    $('bsc-wrap').hidden=true;
    if(symbol==='SNDK' && bsc?.status==='historical_quoter_15min'){
      $('bsc-note').textContent='每 15 分钟一笔历史区块读数；$100 / $1,000 等值 SNDKB，Quoter 已含池手续费与价格冲击，未含 gas、链上成交确认或平仓。不是逐秒机会覆盖率。';
      $('bsc-table').innerHTML=`<table><thead><tr><th>目标名义额</th><th>有效 / 目标采样</th><th>DEX 双向报价价差中位数</th><th>卖 Entropy / 买 DEX 正毛价差</th><th>买 Entropy / 卖 DEX 正毛价差</th></tr></thead><tbody>${bsc.summary.map(x=>`<tr><td>$${n(x.target_usd,0)}</td><td>${n(x.valid_samples,0)} / ${n(x.target_samples,0)}</td><td>${n(x.median_dex_spread_bps)} bps</td><td>${n(x.sell_entropy_buy_dex_positive,0)} 次</td><td>${n(x.buy_entropy_sell_dex_positive,0)} 次</td></tr>`).join('')}</tbody></table>`;
      $('bsc-wrap').hidden=false;
      bscChart=makeChart($('bsc-chart'),bsc.rows.map(r=>et.format(new Date(r[0]))),[
        {label:'Entropy 买一 USDT',data:bsc.rows.map(r=>r[1]),borderColor:'#58a6ff',borderWidth:1,pointRadius:0,spanGaps:false},
        {label:'Entropy 卖一 USDT',data:bsc.rows.map(r=>r[2]),borderColor:'#a371f7',borderWidth:1,pointRadius:0,spanGaps:false},
        {label:'DEX 卖出 SNDKB',data:bsc.rows.map(r=>r[3]),borderColor:'#7ee2b8',borderWidth:1,pointRadius:0,spanGaps:false},
        {label:'DEX 买入 SNDKB',data:bsc.rows.map(r=>r[4]),borderColor:'#f2a198',borderWidth:1,pointRadius:0,spanGaps:false}
      ]);
    }else{
      $('bsc-note').textContent=symbol==='SNDK'?'BSC 历史固定金额报价尚未完成；不要把缺数据理解为没有机会。':'该标的未找到本研究周可核验的 BSC 直连 USDT 历史报价路径。';
      $('bsc-table').innerHTML='';
    }
    const orderRows = study.entropy_order_7d.filter(x=>x.underlying===symbol);
    $('orders').innerHTML=`<table><thead><tr><th>UTC 日期</th><th>盘口更新</th><th>有更新的分钟</th><th>顶档价差中位数</th><th>双边较小顶档金额中位数</th><th>成交笔数</th><th>成交名义额</th></tr></thead><tbody>${orderRows.map(x=>`<tr><td>${esc(x.day_utc)}</td><td>${n(x.book_updates,0)}</td><td>${pct(x.book_update_minute_share)}</td><td>${n(x.median_spread_bps)} bps</td><td>$${n(x.median_min_top_notional_usd,0)}</td><td>${n(x.trade_count,0)}</td><td>$${n(x.trade_notional_usd,0)}</td></tr>`).join('')}</tbody></table>`;
    $('metrics').innerHTML = [
      metric('同步有效覆盖', pct(m.coverage)),
      metric('中间价基差中位数', n(m.median_mid_bps) + ' bps'),
      metric('买 Entropy / 卖对侧 ≥10 bps', n(m.buy10_seconds,0) + ' 秒'),
      metric('卖 Entropy / 买对侧 ≥10 bps', n(m.sell10_seconds,0) + ' 秒')
    ].join('');
    $('table').innerHTML = `<table><thead><tr><th>标的 / 对照腿</th><th>类型</th><th>有效覆盖</th><th>中位基差</th><th>买 Entropy ≥10 bps</th><th>卖 Entropy ≥10 bps</th><th>开盘5分钟外 ≥20 bps</th></tr></thead><tbody>${study.pairs.map(x => {
      const a=x.metrics;
      return `<tr><td>${esc(x.symbol)} / ${esc(venueName[x.venue]||x.venue)}</td><td>${a.pair_type==='spot_perp'?'期现':'跨所'}</td><td>${pct(a.coverage)}</td><td>${n(a.median_mid_bps)} bps</td><td>${n(a.buy10_seconds,0)} 秒</td><td>${n(a.sell10_seconds,0)} 秒</td><td>${n(a.buy20_seconds_ex_open5+a.sell20_seconds_ex_open5,0)} 秒</td></tr>`;
    }).join('')}</tbody></table>`;
    const labels = p.series.map(r => et.format(new Date(r[0])));
    basisChart?.destroy(); directionChart?.destroy();
    const line=(label, index, color)=>({label, data:p.series.map(r=>r[index]), borderColor:color, borderWidth:1.4, pointRadius:0, spanGaps:false});
    basisChart=makeChart($('basis-chart'), labels,[line('Entropy − 对侧中间价',1,'#58a6ff')]);
    directionChart=makeChart($('direction-chart'), labels,[line('卖 Entropy / 买对侧',2,'#f2a198'),line('买 Entropy / 卖对侧',3,'#7ee2b8')]);
    const t=study.trades.filter(x=>x.underlying===symbol);
    $('foot').textContent=`${symbol} 五个常规交易日 Entropy 成交 ${n(t.reduce((v,x)=>v+x.trades_regular,0),0)} 笔；上表为 1 秒采样的毛价差秒数，连续信号可能因报价新鲜度过滤被切碎。Binance 现货为代币化证券；BSC 结果及缺口见研究报告。`;
  }
  $('symbol').onchange=render;
  $('pair').onchange=render;
  fetch('us_stock_basis_entropy.json').then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}).then(data=>{
    study=data;
    $('description').textContent=data.window+' · '+data.method;
    $('symbol').innerHTML=[...new Set(data.pairs.map(x=>x.symbol))].map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('');
    render();
  }).catch(e=>{$('description').textContent='Entropy 研究数据加载失败：'+e.message;});
})();
