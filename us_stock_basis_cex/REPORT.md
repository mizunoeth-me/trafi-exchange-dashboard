# 美股 Top10 基差与资金费率分析（仅 CEX）

范围：Binance、Bybit、OKX、Bitget、Gate.io。排名、市场配对、基差、资金费率及覆盖率均只计 CEX。
选样快照：2026-09-18T06:19:32.597373+00:00；与原版使用同一批快照，仅改变平台范围。CEX 第十名为 MRVL，原版 GOOGL 不在本版 Top10。

生成时间：2026-09-23T00:21:13.324040+00:00
研究窗口：2026-08-23T04:00:00+00:00 至 2026-09-22T04:00:00+00:00（右端不含）。

## 样本与口径

仅 Binance、Bybit、OKX、Bitget、Gate.io：沿用原版同一批滚动24h快照，重新汇总 CEX 现货+合约成交额选 Top10；USDT/USDC按USD平价，仅用于选样；OKX合约用基础单位成交量×最新价估算。名单冻结，排名是本系统覆盖的平台成交额，不是美国证券交易所全市场成交额。
OKX 合约成交额估算与稳定币平价会影响边界排名；不把滚动24h快照逐次相加。

| 排名 | 标的 | 现货24h（百万） | 合约24h（百万） | 估算部分（百万） | 有历史/市场数 |
| --- | --- | ---: | ---: | ---: | ---: |
| 1 | SNDK | 23.24 | 2761.27 | 778.71 | 8/9 |
| 2 | SPCX | 19.77 | 1667.33 | 156.22 | 12/13 |
| 3 | MU | 8.69 | 544.89 | 79.47 | 8/9 |
| 4 | CRCL | 46.15 | 488.27 | 78.59 | 11/12 |
| 5 | SKHY | 4.76 | 403.62 | 62.97 | 9/10 |
| 6 | MSTR | 20.67 | 303.72 | 35.55 | 10/11 |
| 7 | INTC | 5.86 | 250.89 | 30.41 | 8/9 |
| 8 | NVDA | 10.09 | 230.64 | 18.75 | 11/12 |
| 9 | TSLA | 6.06 | 164.32 | 23.95 | 11/12 |
| 10 | AAPL | 4.16 | 149.45 | 5.59 | 11/12 |

## 两类基差的时段表现

以下选取每个标的、每类比较中绝对基差P95较高的至多两组可比配对，便于定位值得查看的案例，并非全部配对排名。完整数据见 session_stats.csv。
正值表示第一条腿（合约A或本所合约）溢价；现货—合约的分母是现货。这里使用两腿同一5分钟内均有成交的收盘价，不代表两笔成交同时发生。

| 标的 | 类别 | 配对 A / B | 常规盘基差中位数 bps | 非常规盘基差中位数 bps | 常规/非常规绝对P95 | 有效覆盖率 |
| --- | --- | --- | ---: | ---: | --- | --- |
| SNDK | 合约跨平台 | binance / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | 0.17 | 0.54 | 5.29 / 6.10 | 100.0% / 100.0% |
| SNDK | 合约跨平台 | bybit / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | 0.38 | 0.52 | 5.28 / 6.04 | 100.0% / 100.0% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 4.59 | 4.26 | 10.74 / 10.47 | 99.9% / 92.8% |
| SPCX | 合约跨平台 | bitget / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 3.88 | 3.40 | 8.56 / 8.51 | 100.0% / 99.4% |
| SPCX | 合约跨平台 | bybit / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 3.47 | 2.79 | 7.35 / 7.40 | 100.0% / 99.5% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.07 | 4.01 | 12.75 / 10.72 | 99.4% / 78.7% |
| MU | 合约跨平台 | bybit / futures / MUUSDT ↔ gateio / futures / MU_USDT | 3.53 | 3.21 | 8.55 / 8.18 | 100.0% / 99.8% |
| MU | 合约跨平台 | bitget / futures / MUUSDT ↔ gateio / futures / MU_USDT | 3.67 | 3.90 | 7.78 / 7.87 | 100.0% / 99.2% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 6.98 | 6.92 | 14.53 / 12.84 | 99.4% / 87.9% |
| CRCL | 合约跨平台 | gateio / futures / CRCL_USDT ↔ okx / futures / CRCL-USDT-SWAP | 3.70 | 3.27 | 18.76 / 23.60 | 58.8% / 61.5% |
| CRCL | 合约跨平台 | binance / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -4.48 | -3.32 | 16.92 / 22.53 | 58.8% / 61.6% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 2.47 | 2.93 | 14.66 / 13.03 | 100.0% / 93.3% |
| MSTR | 合约跨平台 | bybit / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -3.29 | -3.65 | 26.58 / 24.48 | 59.2% / 61.7% |
| MSTR | 合约跨平台 | binance / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -3.77 | -3.75 | 25.15 / 21.68 | 59.2% / 61.7% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 5.27 | 3.02 | 17.51 / 16.22 | 100.0% / 99.6% |
| INTC | 合约跨平台 | bitget / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | -0.97 | 0.00 | 7.99 / 9.96 | 99.9% / 95.3% |
| INTC | 合约跨平台 | bybit / futures / INTCUSDT ↔ okx / futures / INTC-USDT-SWAP | 2.70 | 3.28 | 7.75 / 8.38 | 100.0% / 98.5% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 7.47 | 7.27 | 17.82 / 16.84 | 95.3% / 74.6% |
| NVDA | 合约跨平台 | binance / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 1.13 | 2.23 | 19.31 / 19.13 | 58.2% / 61.5% |
| NVDA | 合约跨平台 | bybit / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 0.47 | 0.94 | 17.84 / 16.64 | 58.2% / 61.2% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 5.46 | 5.40 | 13.34 / 11.22 | 93.1% / 72.0% |
| TSLA | 合约跨平台 | binance / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | -1.38 | -1.96 | 23.68 / 13.22 | 57.7% / 60.7% |
| TSLA | 合约跨平台 | gateio / futures / TSLA_USDT ↔ okx / futures / TSLA-USDT-SWAP | 2.20 | 2.19 | 23.18 / 12.82 | 57.7% / 60.0% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 7.16 | 6.75 | 15.09 / 12.58 | 97.9% / 69.8% |
| AAPL | 合约跨平台 | binance / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | 5.53 | 4.50 | 16.48 / 13.87 | 55.9% / 59.4% |
| AAPL | 合约跨平台 | bybit / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | 1.80 | 2.10 | 16.77 / 13.70 | 55.9% / 59.0% |
| AAPL | 本所现货—合约 | okx / futures / AAPL-USDT-SWAP ↔ okx / spot / XAAPL-USDT | 4.27 | 3.90 | 13.42 / 9.75 | 88.2% / 59.9% |

## 可比配对的整体特征

- 跨平台合约：70 组配对同时达到两类时段的描述性门槛，其中 39 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.69 bps 变为非常规盘 1.77 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：7 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 5.71 bps 变为非常规盘 4.87 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| AAPL | binance / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| AAPL | bitget / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| AAPL | bybit / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| AAPL | gateio / futures / AAPL_USDT | 0.00000 | 0.00000 | 63.1% / 64.7% |
| AAPL | okx / futures / AAPL-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| CRCL | binance / futures / CRCLUSDT | 0.01132 | 0.00000 | 100.0% / 99.3% |
| CRCL | bitget / futures / CRCLUSDT | 0.01915 | 0.00000 | 100.0% / 99.3% |
| CRCL | bybit / futures / CRCLUSDT | 0.00478 | 0.00000 | 100.0% / 99.3% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00280 | 63.1% / 64.7% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00710 | 0.00000 | 100.0% / 99.3% |
| INTC | binance / futures / INTCUSDT | 0.00541 | 0.00000 | 100.0% / 99.3% |
| INTC | bitget / futures / INTCUSDT | 0.01100 | 0.00000 | 100.0% / 99.3% |
| INTC | bybit / futures / INTCUSDT | 0.00944 | 0.00437 | 100.0% / 99.3% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | binance / futures / MSTRUSDT | 0.00458 | 0.00028 | 100.0% / 99.3% |
| MSTR | bitget / futures / MSTRUSDT | 0.00560 | 0.00000 | 100.0% / 99.3% |
| MSTR | bybit / futures / MSTRUSDT | 0.00605 | 0.00275 | 100.0% / 99.3% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00970 | 63.1% / 64.7% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00316 | 0.00017 | 100.0% / 99.3% |
| MU | binance / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | bitget / futures / MUUSDT | 0.01170 | 0.00000 | 100.0% / 99.3% |
| MU | bybit / futures / MUUSDT | 0.00097 | 0.00000 | 100.0% / 99.3% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | okx / futures / MU-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | binance / futures / NVDAUSDT | 0.01065 | 0.00000 | 96.9% / 99.3% |
| NVDA | bitget / futures / NVDAUSDT | 0.00800 | 0.00000 | 100.0% / 99.3% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 63.1% / 64.7% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bitget / futures / SNDKUSDT | 0.00640 | 0.00000 | 100.0% / 99.3% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bitget / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | binance / futures / TSLAUSDT | 0.00131 | 0.00000 | 100.0% / 99.3% |
| TSLA | bitget / futures / TSLAUSDT | 0.00045 | 0.00000 | 100.0% / 99.3% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 63.1% / 64.7% |
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
- `../us_stock_spot_perp_session_basis_20260914/data/basis.sqlite3`：K线、结算、实时盘口缓存；`../us_stock_spot_perp_session_basis_20260914/data/raw/*.json.gz`：带请求参数与采集时间的公共接口证据。
- 看板：“美股基差与费率”页，支持选股、选平台对、7/30日、时段及可比/参考筛选，页面可导出所选配对的原始明细。
- 运行：`python3 -m analysis.us_stock_basis.collect --scope cex`（断点续采），`python3 -m analysis.us_stock_basis.build --scope cex`（构建），`python3 -m analysis.us_stock_basis.live --watch`（分钟盘口）。
