# 美股 Top10 基差与资金费率分析（仅 CEX）

范围：Binance、Bybit、OKX、Bitget、Gate.io。排名、市场配对、基差、资金费率及覆盖率均只计 CEX。
选样快照：2026-09-14T02:45:22.834860+00:00；与原版使用同一批快照，仅改变平台范围。CEX 第十名为 MRVL，原版 GOOGL 不在本版 Top10。

生成时间：2026-09-14T12:20:47.373115+00:00
研究窗口：2026-08-14T04:00:00+00:00 至 2026-09-13T04:00:00+00:00（右端不含）。

## 样本与口径

仅 Binance、Bybit、OKX、Bitget、Gate.io：沿用原版同一批滚动24h快照，重新汇总 CEX 现货+合约成交额选 Top10；USDT/USDC按USD平价，仅用于选样；OKX合约用基础单位成交量×最新价估算。名单冻结，排名是本系统覆盖的平台成交额，不是美国证券交易所全市场成交额。
OKX 合约成交额估算与稳定币平价会影响边界排名；不把滚动24h快照逐次相加。

| 排名 | 标的 | 现货24h（百万） | 合约24h（百万） | 估算部分（百万） | 有历史/市场数 |
| --- | --- | ---: | ---: | ---: | ---: |
| 1 | SNDK | 17.71 | 1472.83 | 426.54 | 8/9 |
| 2 | MU | 9.36 | 388.70 | 77.07 | 8/9 |
| 3 | SKHY | 3.40 | 335.01 | 49.81 | 9/10 |
| 4 | SPCX | 3.72 | 164.68 | 23.81 | 12/13 |
| 5 | NVDA | 4.92 | 105.27 | 10.06 | 11/12 |
| 6 | CRCL | 8.50 | 98.47 | 8.77 | 11/12 |
| 7 | MSTR | 5.95 | 92.97 | 7.73 | 10/11 |
| 8 | INTC | 2.76 | 75.14 | 11.74 | 8/9 |
| 9 | AAPL | 2.00 | 72.02 | 3.14 | 11/12 |
| 10 | MRVL | 2.36 | 50.28 | 9.61 | 8/9 |

## 两类基差的时段表现

以下选取每个标的、每类比较中绝对基差P95较高的至多两组可比配对，便于定位值得查看的案例，并非全部配对排名。完整数据见 session_stats.csv。
正值表示第一条腿（合约A或本所合约）溢价；现货—合约的分母是现货。这里使用两腿同一5分钟内均有成交的收盘价，不代表两笔成交同时发生。

| 标的 | 类别 | 配对 A / B | 常规盘基差中位数 bps | 非常规盘基差中位数 bps | 常规/非常规绝对P95 | 有效覆盖率 |
| --- | --- | --- | ---: | ---: | --- | --- |
| SNDK | 合约跨平台 | binance / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | 2.03 | 2.12 | 7.19 / 9.15 | 100.0% / 100.0% |
| SNDK | 合约跨平台 | bybit / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | 1.92 | 1.88 | 7.59 / 8.82 | 100.0% / 100.0% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 4.77 | 4.48 | 11.47 / 11.05 | 99.9% / 93.3% |
| MU | 合约跨平台 | bybit / futures / MUUSDT ↔ gateio / futures / MU_USDT | 4.94 | 4.61 | 10.03 / 10.00 | 100.0% / 99.8% |
| MU | 合约跨平台 | gateio / futures / MU_USDT ↔ okx / futures / MU-USDT-SWAP | -4.34 | -3.76 | 9.12 / 9.55 | 100.0% / 99.9% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 7.05 | 7.24 | 14.10 / 13.21 | 99.9% / 87.8% |
| SPCX | 合约跨平台 | bitget / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 5.00 | 4.27 | 11.32 / 10.37 | 100.0% / 99.7% |
| SPCX | 合约跨平台 | gateio / futures / SPCX_USDT ↔ okx / futures / SPCX-USDT-SWAP | -5.11 | -4.86 | 9.85 / 8.89 | 100.0% / 100.0% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 3.58 | 3.54 | 12.19 / 10.66 | 99.5% / 82.6% |
| NVDA | 合约跨平台 | binance / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -0.44 | 3.66 | 24.26 / 23.85 | 28.2% / 31.5% |
| NVDA | 合约跨平台 | bybit / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -1.82 | 2.15 | 22.53 / 21.31 | 28.2% / 31.5% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 3.99 | 4.52 | 12.76 / 10.64 | 94.1% / 69.2% |
| CRCL | 合约跨平台 | gateio / futures / CRCL_USDT ↔ okx / futures / CRCL-USDT-SWAP | 5.48 | 3.91 | 23.62 / 28.50 | 28.8% / 31.6% |
| CRCL | 合约跨平台 | binance / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -6.43 | -4.03 | 22.69 / 26.55 | 28.8% / 31.6% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 1.13 | 1.15 | 13.90 / 12.03 | 100.0% / 90.5% |
| MSTR | 合约跨平台 | bybit / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -5.98 | -5.02 | 34.22 / 31.54 | 29.2% / 31.7% |
| MSTR | 合约跨平台 | binance / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -6.98 | -5.84 | 34.59 / 28.08 | 29.2% / 31.7% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.24 | 2.12 | 17.63 / 16.90 | 100.0% / 96.7% |
| INTC | 合约跨平台 | bitget / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | 0.00 | 1.11 | 8.61 / 8.93 | 99.9% / 95.0% |
| INTC | 合约跨平台 | bybit / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | 1.08 | 2.13 | 8.94 / 8.88 | 100.0% / 98.2% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 6.79 | 6.57 | 16.54 / 16.34 | 96.1% / 75.2% |
| AAPL | 合约跨平台 | bybit / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | -2.22 | -3.76 | 20.17 / 16.19 | 25.9% / 29.4% |
| AAPL | 合约跨平台 | gateio / futures / AAPL_USDT ↔ okx / futures / AAPL-USDT-SWAP | 2.32 | 3.11 | 20.66 / 15.62 | 25.9% / 29.0% |
| AAPL | 本所现货—合约 | okx / futures / AAPL-USDT-SWAP ↔ okx / spot / XAAPL-USDT | 6.36 | 5.95 | 14.78 / 11.59 | 90.1% / 62.5% |
| MRVL | 合约跨平台 | bitget / futures / MRVLUSDT ↔ gateio / futures / MRVL_USDT | 5.49 | 4.70 | 13.65 / 12.79 | 100.0% / 96.1% |
| MRVL | 合约跨平台 | gateio / futures / MRVL_USDT ↔ okx / futures / MRVL-USDT-SWAP | -4.50 | -3.41 | 13.22 / 12.15 | 100.0% / 99.2% |
| MRVL | 本所现货—合约 | okx / futures / MRVL-USDT-SWAP ↔ okx / spot / XMRVL-USDT | 6.78 | 5.83 | 18.71 / 15.26 | 98.1% / 75.4% |

## 可比配对的整体特征

- 跨平台合约：74 组配对同时达到两类时段的描述性门槛，其中 49 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.91 bps 变为非常规盘 1.95 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：7 组配对同时达到两类时段的描述性门槛，其中 1 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 6.16 bps 变为非常规盘 4.89 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| AAPL | binance / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| AAPL | bitget / futures / AAPLUSDT | 0.00530 | 0.00000 | 100.0% / 99.3% |
| AAPL | bybit / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| AAPL | gateio / futures / AAPL_USDT | 0.00000 | 0.00000 | 33.1% / 34.7% |
| AAPL | okx / futures / AAPL-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| CRCL | binance / futures / CRCLUSDT | 0.00766 | 0.00000 | 100.0% / 99.3% |
| CRCL | bitget / futures / CRCLUSDT | 0.00660 | 0.00000 | 100.0% / 99.3% |
| CRCL | bybit / futures / CRCLUSDT | 0.00136 | 0.00000 | 100.0% / 99.3% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00280 | 33.1% / 34.7% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | binance / futures / INTCUSDT | 0.00188 | 0.00000 | 100.0% / 99.3% |
| INTC | bitget / futures / INTCUSDT | 0.01300 | 0.00000 | 100.0% / 99.3% |
| INTC | bybit / futures / INTCUSDT | 0.00665 | 0.00269 | 100.0% / 99.3% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.01000 | 100.0% / 99.3% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MRVL | binance / futures / MRVLUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MRVL | bitget / futures / MRVLUSDT | 0.00870 | 0.00000 | 100.0% / 99.3% |
| MRVL | bybit / futures / MRVLUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MRVL | gateio / futures / MRVL_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MRVL | okx / futures / MRVL-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | binance / futures / MSTRUSDT | 0.00030 | 0.00000 | 100.0% / 99.3% |
| MSTR | bitget / futures / MSTRUSDT | 0.00740 | 0.00000 | 100.0% / 99.3% |
| MSTR | bybit / futures / MSTRUSDT | 0.00408 | 0.00000 | 100.0% / 99.3% |
| MSTR | gateio / futures / MSTR_USDT | 0.00970 | 0.02840 | 33.1% / 34.7% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00470 | 0.00000 | 100.0% / 99.3% |
| MU | binance / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | bitget / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | bybit / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | okx / futures / MU-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | binance / futures / NVDAUSDT | 0.00000 | 0.00000 | 96.9% / 99.3% |
| NVDA | bitget / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 33.1% / 34.7% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | gateio / futures / SKHY_USDT | 0.00460 | 0.00000 | 100.0% / 99.3% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bitget / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bitget / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |

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
