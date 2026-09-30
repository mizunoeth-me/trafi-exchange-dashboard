# 美股 Top10 基差与资金费率分析

生成时间：2026-09-30T12:28:01.064649+00:00
研究窗口：2026-08-31T04:00:00+00:00 至 2026-09-30T04:00:00+00:00（右端不含）。

## 样本与口径

最新滚动24h各平台现货+合约成交额；USDT/USDC按USD平价，仅用于选样；OKX合约用基础单位成交量×最新价估算。名单冻结，排名是本系统覆盖的平台成交额，不是美国证券交易所全市场成交额。
OKX 合约成交额估算与稳定币平价会影响边界排名；不把滚动24h快照逐次相加。

| 排名 | 标的 | 现货24h（百万） | 合约24h（百万） | 估算部分（百万） | 有历史/市场数 |
| --- | --- | ---: | ---: | ---: | ---: |
| 1 | SNDK | 23.24 | 2917.44 | 778.71 | 12/13 |
| 2 | SPCX | 19.77 | 1751.84 | 156.22 | 16/17 |
| 3 | MU | 8.69 | 668.84 | 79.47 | 12/13 |
| 4 | CRCL | 46.15 | 523.44 | 78.59 | 14/15 |
| 5 | SKHY | 4.76 | 404.77 | 62.97 | 11/12 |
| 6 | MSTR | 20.67 | 316.05 | 35.55 | 13/14 |
| 7 | NVDA | 10.09 | 304.25 | 18.75 | 14/15 |
| 8 | INTC | 5.86 | 293.73 | 30.41 | 11/12 |
| 9 | TSLA | 6.06 | 189.91 | 23.95 | 14/15 |
| 10 | HOOD | 5.52 | 173.13 | 6.72 | 14/15 |

## 两类基差的时段表现

以下选取每个标的、每类比较中绝对基差P95较高的至多两组可比配对，便于定位值得查看的案例，并非全部配对排名。完整数据见 session_stats.csv。
正值表示第一条腿（合约A或本所合约）溢价；现货—合约的分母是现货。这里使用两腿同一5分钟内均有成交的收盘价，不代表两笔成交同时发生。

| 标的 | 类别 | 配对 A / B | 常规盘基差中位数 bps | 非常规盘基差中位数 bps | 常规/非常规绝对P95 | 有效覆盖率 |
| --- | --- | --- | ---: | ---: | --- | --- |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ okx / futures / SNDK-USDT-SWAP | -0.21 | 0.34 | 17.22 / 11.10 | 95.9% / 72.8% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ bitget / futures / SNDKUSDT | -1.20 | -0.70 | 16.90 / 11.04 | 95.9% / 72.8% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 5.71 | 4.96 | 12.81 / 11.00 | 99.9% / 89.3% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 2.80 | 2.66 | 17.05 / 10.06 | 85.8% / 35.7% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ okx / futures / SPCX-USDT-SWAP | 0.32 | 0.00 | 16.35 / 9.68 | 85.8% / 35.7% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.68 | 4.04 | 12.84 / 10.93 | 99.5% / 79.1% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | 3.80 | 3.91 | 27.81 / 19.19 | 65.7% / 23.2% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ okx / futures / MU-USDT-SWAP | 1.55 | 1.78 | 26.92 / 17.53 | 65.7% / 23.2% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 7.23 | 6.95 | 15.06 / 13.04 | 98.5% / 88.1% |
| CRCL | 合约跨平台 | hyperliquid / futures / xyz:CRCL ↔ lighter / futures / CRCL | -5.48 | -6.42 | 32.97 / 23.38 | 86.2% / 67.9% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -4.31 | -1.12 | 30.72 / 22.06 | 72.7% / 41.3% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 3.93 | 3.30 | 15.07 / 13.46 | 99.9% / 95.4% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -4.39 | -2.52 | 30.38 / 23.82 | 73.3% / 47.1% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bitget / futures / MSTRUSDT | -1.25 | -0.77 | 24.78 / 21.33 | 86.3% / 53.9% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 5.83 | 3.81 | 16.58 / 11.48 | 100.0% / 99.5% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 3.08 | 3.66 | 20.14 / 17.69 | 46.9% / 19.6% |
| NVDA | 合约跨平台 | binance / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 1.82 | 2.25 | 14.39 / 16.84 | 84.0% / 88.4% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 6.14 | 5.94 | 13.70 / 11.50 | 92.2% / 72.0% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | -1.01 | -0.85 | 41.44 / 31.70 | 43.3% / 13.2% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bybit / futures / INTCUSDT | 0.00 | 2.04 | 42.00 / 30.52 | 43.3% / 13.3% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 7.54 | 7.46 | 18.47 / 17.24 | 95.4% / 77.9% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | -1.36 | -1.10 | 24.42 / 16.48 | 54.8% / 16.1% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | 1.13 | 1.12 | 20.76 / 13.94 | 65.3% / 19.5% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 7.79 | 7.61 | 15.09 / 12.89 | 98.2% / 69.0% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bitget / futures / HOODUSDT | -1.72 | -1.66 | 44.96 / 38.56 | 44.6% / 16.0% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ okx / futures / HOOD-USDT-SWAP | 0.85 | 2.45 | 44.03 / 37.83 | 44.6% / 16.2% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 8.52 | 6.93 | 21.90 / 16.98 | 94.8% / 69.2% |

## 可比配对的整体特征

- 跨平台合约：102 组配对同时达到两类时段的描述性门槛，其中 53 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 2.24 bps 变为非常规盘 2.32 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：7 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 6.24 bps 变为非常规盘 5.04 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.01674 | 0.00505 | 100.0% / 99.3% |
| CRCL | binance / futures / CRCLUSDT | 0.01465 | 0.00322 | 100.0% / 99.3% |
| CRCL | bitget / futures / CRCLUSDT | 0.02580 | 0.00000 | 100.0% / 99.3% |
| CRCL | bybit / futures / CRCLUSDT | 0.00754 | 0.00461 | 100.0% / 99.3% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00280 | 88.6% / 91.7% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.01031 | 0.01031 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.00400 | 0.00320 | 100.0% / 99.1% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.01197 | 0.00547 | 100.0% / 99.3% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | bitget / futures / HOODUSDT | 0.00620 | 0.00000 | 100.0% / 99.3% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 88.6% / 91.7% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00725 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.01440 | 0.00880 | 100.0% / 99.1% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | binance / futures / INTCUSDT | 0.00358 | 0.00000 | 100.0% / 99.3% |
| INTC | bitget / futures / INTCUSDT | 0.01300 | 0.00000 | 100.0% / 99.3% |
| INTC | bybit / futures / INTCUSDT | 0.00169 | 0.00058 | 100.0% / 99.3% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00998 | 0.00500 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.01120 | 0.00320 | 100.0% / 99.1% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | aster / futures / MSTRUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | binance / futures / MSTRUSDT | 0.01094 | 0.00047 | 100.0% / 99.3% |
| MSTR | bitget / futures / MSTRUSDT | 0.01840 | 0.00000 | 100.0% / 99.3% |
| MSTR | bybit / futures / MSTRUSDT | 0.01588 | 0.00723 | 100.0% / 99.3% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00670 | 88.6% / 91.7% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00898 | 0.00923 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.1% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.01180 | 0.00586 | 100.0% / 99.3% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | aster / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | binance / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | bitget / futures / MUUSDT | 0.01150 | 0.00000 | 100.0% / 99.3% |
| MU | bybit / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | hyperliquid / futures / xyz:MU | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00320 | 0.00320 | 100.0% / 99.1% |
| MU | okx / futures / MU-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | aster / futures / NVDAUSDT | 0.01081 | 0.00000 | 97.1% / 99.3% |
| NVDA | binance / futures / NVDAUSDT | 0.01427 | 0.00348 | 97.1% / 99.3% |
| NVDA | bitget / futures / NVDAUSDT | 0.01540 | 0.00000 | 100.0% / 99.3% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 88.6% / 91.7% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00320 | 0.00320 | 100.0% / 99.1% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00643 | 0.00000 | 100.0% / 99.3% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | lighter / futures / SKHY | 0.00320 | 0.00320 | 100.0% / 99.1% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bitget / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.00320 | 0.00320 | 100.0% / 99.1% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bitget / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | hyperliquid / futures / xyz:SPCX | -0.00005 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.00320 | 0.00320 | 100.0% / 99.1% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | binance / futures / TSLAUSDT | 0.00098 | 0.00000 | 100.0% / 99.3% |
| TSLA | bitget / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 88.6% / 91.7% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.1% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |

本窗口本地事件库记录：NVDA 2026-09-10 除息。事件库不是完整性保证。

## 数据边界与结论强度

- 已结算资金费率来自独立官方历史接口，当前/指示费率与其分开展示。历史8h等效费率的周期依据连续结算间隔推断，间隔异常保留空值；不把缺失结算补零。
- 比较费率差时，将两平台实际结算费率按推断适用区间分配到共同半小时，属于事后分析，不代表当时可预知的费率。
- 未取得完整历史盘口；历史主图为成交K线代理。严格盘口基差仅对源时间和两腿时差均不超过60秒的已采集快照计算；页面支持严格盘口历史模式，按网格前已经收到的报价计算，样本从本次采集开始。
- OKX UTS 官方按每股 scaled quantity 报价，可与本所股票合约比较；其他代币份额/rebase历史未确认时保留为参考。SKHY 涉及 ADR 与原股身份核验，本次保守列入参考，不作严格排名。
- Bitget rToken K线市场成交语义尚未核验，暂不拿参考市场K线替代平台交易历史；其他接口失败、历史限长与零成交区间见 coverage.csv。
- 周末/假日标签描述底层美股市场。每个有成交K线只能证明该区间存在成交，不能证明全程可交易；逐平台精确停盘状态尚未确认时显示未知。
- 时段门槛为至少30点、覆盖率70%、普通时段至少5个交易日或周末至少2个周末；假日仅事件观察。页面完整列出门槛与样本数。
- 公司行动历史与所有代币份额尚未完整核验；不据此宣称无风险套利或给出净收益。
- 仅实现7/30日窗口，90日历史未采集；开收盘曲线按5分钟粒度，断档会切断持续事件。

## 复算与交付

- `derived/market_mapping.csv`：配对与价格单位状态；`derived/ranking_audit.csv`：选样底表。
- `derived/aligned_basis.csv.gz`：完整同K线配对价格与基差；`derived/session_stats.csv`：逐配对、逐时段统计。
- `derived/funding_settlements.csv`：实际结算、推断周期与等效费率；`derived/basis_events.csv`：30bps事件及删失原因。
- `data/basis.sqlite3`：K线、结算、实时盘口缓存；`data/raw/*.json.gz`：带请求参数与采集时间的公共接口证据。
- 看板：“美股基差与费率”页，支持选股、选平台对、7/30日、时段及可比/参考筛选，页面可导出所选配对的原始明细。
- 运行：`python3 -m analysis.us_stock_basis.collect`（断点续采），`python3 -m analysis.us_stock_basis.build`（构建），`python3 -m analysis.us_stock_basis.live --watch`（分钟盘口）。
