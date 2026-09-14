# 美股 Top10 基差与资金费率分析

生成时间：2026-09-14T12:20:24.272177+00:00
研究窗口：2026-08-15T04:00:00+00:00 至 2026-09-14T04:00:00+00:00（右端不含）。

## 样本与口径

最新滚动24h各平台现货+合约成交额；USDT/USDC按USD平价，仅用于选样；OKX合约用基础单位成交量×最新价估算。名单冻结，排名是本系统覆盖的平台成交额，不是美国证券交易所全市场成交额。
OKX 合约成交额估算与稳定币平价会影响边界排名；不把滚动24h快照逐次相加。

| 排名 | 标的 | 现货24h（百万） | 合约24h（百万） | 估算部分（百万） | 有历史/市场数 |
| --- | --- | ---: | ---: | ---: | ---: |
| 1 | SNDK | 17.71 | 1568.47 | 426.54 | 11/12 |
| 2 | MU | 9.36 | 462.14 | 77.07 | 11/12 |
| 3 | SKHY | 3.40 | 335.45 | 49.81 | 10/11 |
| 4 | SPCX | 3.72 | 187.23 | 23.81 | 16/17 |
| 5 | NVDA | 4.92 | 134.91 | 10.06 | 13/14 |
| 6 | CRCL | 8.50 | 115.78 | 8.77 | 13/14 |
| 7 | MSTR | 5.95 | 97.06 | 7.73 | 12/13 |
| 8 | INTC | 2.76 | 90.20 | 11.74 | 10/11 |
| 9 | AAPL | 2.00 | 79.53 | 3.14 | 13/14 |
| 10 | GOOGL | 2.02 | 71.11 | 4.84 | 13/14 |

## 两类基差的时段表现

以下选取每个标的、每类比较中绝对基差P95较高的至多两组可比配对，便于定位值得查看的案例，并非全部配对排名。完整数据见 session_stats.csv。
正值表示第一条腿（合约A或本所合约）溢价；现货—合约的分母是现货。这里使用两腿同一5分钟内均有成交的收盘价，不代表两笔成交同时发生。

| 标的 | 类别 | 配对 A / B | 常规盘基差中位数 bps | 非常规盘基差中位数 bps | 常规/非常规绝对P95 | 有效覆盖率 |
| --- | --- | --- | ---: | ---: | --- | --- |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | 1.95 | 2.13 | 15.17 / 11.80 | 98.3% / 78.2% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ bitget / futures / SNDKUSDT | 0.59 | 0.46 | 14.89 / 9.66 | 98.3% / 78.2% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 4.75 | 4.52 | 11.50 / 11.07 | 99.9% / 89.4% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | 5.61 | 4.94 | 30.02 / 21.28 | 69.4% / 33.7% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ okx / futures / MU-USDT-SWAP | 1.13 | 0.97 | 27.65 / 18.70 | 69.4% / 33.7% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 7.09 | 7.21 | 14.10 / 13.12 | 99.9% / 84.1% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSD1 ↔ binance / futures / SPCXUSD1 | 0.00 | 0.71 | 96.69 / 9.94 | 76.0% / 37.4% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 5.02 | 5.01 | 18.31 / 12.39 | 93.3% / 48.3% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.03 | 3.57 | 12.33 / 10.68 | 99.5% / 79.0% |
| NVDA | 合约跨平台 | binance / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -0.44 | 3.66 | 24.26 / 23.85 | 29.7% / 31.2% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 2.21 | 6.75 | 25.47 / 22.54 | 20.9% / 8.1% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 4.15 | 4.59 | 12.79 / 10.77 | 94.1% / 66.5% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -7.21 | -3.26 | 35.12 / 27.45 | 23.6% / 9.6% |
| CRCL | 合约跨平台 | gateio / futures / CRCL_USDT ↔ okx / futures / CRCL-USDT-SWAP | 5.48 | 3.91 | 23.62 / 28.50 | 30.4% / 31.2% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 1.10 | 1.13 | 13.52 / 11.99 | 100.0% / 86.8% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -9.45 | -6.90 | 39.80 / 31.65 | 22.8% / 9.2% |
| MSTR | 合约跨平台 | bybit / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -5.98 | -5.02 | 34.22 / 31.54 | 30.8% / 31.3% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.25 | 2.12 | 17.67 / 17.03 | 100.0% / 92.9% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | 0.97 | 1.04 | 49.66 / 38.11 | 36.4% / 9.0% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ okx / futures / INTC-USDT-SWAP | 2.59 | 3.36 | 47.46 / 36.23 | 36.4% / 9.1% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 6.82 | 6.63 | 16.49 / 16.45 | 96.0% / 72.0% |
| AAPL | 合约跨平台 | aster / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | -0.95 | -4.36 | 24.02 / 24.17 | 15.9% / 4.7% |
| AAPL | 合约跨平台 | bybit / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | -2.22 | -3.76 | 20.17 / 16.19 | 27.3% / 29.1% |
| AAPL | 本所现货—合约 | okx / futures / AAPL-USDT-SWAP ↔ okx / spot / XAAPL-USDT | 6.17 | 5.92 | 14.80 / 11.51 | 90.1% / 59.5% |
| GOOGL | 合约跨平台 | aster / futures / GOOGLUSDT ↔ gateio / futures / GOOGL_USDT | -2.92 | -1.21 | 21.56 / 20.70 | 6.3% / 2.0% |
| GOOGL | 合约跨平台 | aster / futures / GOOGLUSDT ↔ bitget / futures / GOOGLUSDT | 2.93 | 2.35 | 22.00 / 15.83 | 25.5% / 8.6% |
| GOOGL | 本所现货—合约 | okx / futures / GOOGL-USDT-SWAP ↔ okx / spot / XGOOGL-USDT | 8.21 | 7.56 | 15.38 / 14.09 | 91.3% / 58.7% |

## 可比配对的整体特征

- 跨平台合约：75 组配对同时达到两类时段的描述性门槛，其中 48 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.89 bps 变为非常规盘 1.94 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：6 组配对同时达到两类时段的描述性门槛，其中 1 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 5.72 bps 变为非常规盘 4.88 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| AAPL | aster / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| AAPL | binance / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| AAPL | bitget / futures / AAPLUSDT | 0.00360 | 0.00000 | 100.0% / 95.3% |
| AAPL | bybit / futures / AAPLUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| AAPL | gateio / futures / AAPL_USDT | 0.00000 | 0.00000 | 34.8% / 38.4% |
| AAPL | hyperliquid / futures / xyz:AAPL | 0.00217 | 0.00500 | 100.0% / 99.8% |
| AAPL | okx / futures / AAPL-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 95.3% |
| CRCL | aster / futures / CRCLUSDT | 0.00706 | 0.00000 | 100.0% / 95.3% |
| CRCL | binance / futures / CRCLUSDT | 0.00847 | 0.00000 | 100.0% / 95.3% |
| CRCL | bitget / futures / CRCLUSDT | 0.00710 | 0.00000 | 100.0% / 95.3% |
| CRCL | bybit / futures / CRCLUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 34.8% / 38.4% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.00500 | 0.00500 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 95.3% |
| GOOGL | aster / futures / GOOGLUSDT | 0.00609 | 0.00000 | 96.8% / 95.3% |
| GOOGL | binance / futures / GOOGLUSDT | 0.00762 | 0.00000 | 96.8% / 95.3% |
| GOOGL | bitget / futures / GOOGLUSDT | 0.01200 | 0.00000 | 100.0% / 95.3% |
| GOOGL | bybit / futures / GOOGLUSDT | 0.00741 | 0.00000 | 100.0% / 95.3% |
| GOOGL | gateio / futures / GOOGL_USDT | 0.00000 | 0.00000 | 34.8% / 38.4% |
| GOOGL | hyperliquid / futures / xyz:GOOGL | 0.00500 | 0.00500 | 100.0% / 99.8% |
| GOOGL | okx / futures / GOOGL-USDT-SWAP | 0.00564 | 0.00000 | 100.0% / 95.3% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| INTC | binance / futures / INTCUSDT | 0.00358 | 0.00000 | 100.0% / 95.3% |
| INTC | bitget / futures / INTCUSDT | 0.01520 | 0.00000 | 100.0% / 95.3% |
| INTC | bybit / futures / INTCUSDT | 0.00800 | 0.00361 | 100.0% / 95.3% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.01000 | 100.0% / 99.3% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00500 | 0.00500 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00156 | 0.00000 | 100.0% / 95.3% |
| MSTR | aster / futures / MSTRUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| MSTR | binance / futures / MSTRUSDT | 0.00030 | 0.00000 | 100.0% / 95.3% |
| MSTR | bitget / futures / MSTRUSDT | 0.00740 | 0.00000 | 100.0% / 95.3% |
| MSTR | bybit / futures / MSTRUSDT | 0.00407 | 0.00000 | 100.0% / 95.3% |
| MSTR | gateio / futures / MSTR_USDT | 0.00970 | 0.02750 | 34.8% / 38.4% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00470 | 0.00000 | 100.0% / 95.3% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 57.9% / 56.4% |
| MU | aster / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| MU | binance / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| MU | bitget / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| MU | bybit / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | hyperliquid / futures / xyz:MU | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 95.3% |
| NVDA | aster / futures / NVDAUSDT | 0.00000 | 0.00000 | 96.8% / 95.3% |
| NVDA | binance / futures / NVDAUSDT | 0.00000 | 0.00000 | 96.8% / 95.3% |
| NVDA | bitget / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 34.8% / 38.4% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SKHY | gateio / futures / SKHY_USDT | 0.00490 | 0.00000 | 100.0% / 99.3% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 78.9% / 76.9% |
| SNDK | aster / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SNDK | bitget / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SPCX | aster / futures / SPCXUSD1 | 0.00000 | 0.00000 | 78.9% / 76.9% |
| SPCX | aster / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SPCX | bitget / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 95.3% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | hyperliquid / futures / xyz:SPCX | -0.00465 | 0.00055 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 95.3% |

本窗口本地事件库记录：GOOGL 2026-09-04 除息；NVDA 2026-09-10 除息。事件库不是完整性保证。

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
