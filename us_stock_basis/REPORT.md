# 美股 Top10 基差与资金费率分析

生成时间：2026-09-23T00:20:43.467857+00:00
研究窗口：2026-08-23T04:00:00+00:00 至 2026-09-22T04:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | 0.54 | 0.88 | 16.96 / 11.48 | 95.6% / 75.8% |
| SNDK | 合约跨平台 | hyperliquid / futures / xyz:SNDK ↔ lighter / futures / SNDK | -6.61 | -6.76 | 12.64 / 12.20 | 82.3% / 85.2% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 4.59 | 4.26 | 10.74 / 10.47 | 99.9% / 92.8% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 4.29 | 4.05 | 17.36 / 11.17 | 89.4% / 41.5% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSD1 ↔ binance / futures / SPCXUSD1 | 0.00 | 0.70 | 84.77 / 10.03 | 99.6% / 56.7% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.07 | 4.01 | 12.75 / 10.72 | 99.4% / 78.7% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | 4.48 | 4.23 | 27.61 / 20.04 | 66.4% / 28.3% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ okx / futures / MU-USDT-SWAP | 1.40 | 1.47 | 26.85 / 18.03 | 66.4% / 28.3% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 6.98 | 6.92 | 14.53 / 12.84 | 99.4% / 87.9% |
| CRCL | 合约跨平台 | hyperliquid / futures / xyz:CRCL ↔ lighter / futures / CRCL | -8.32 | -7.23 | 36.93 / 25.17 | 66.9% / 49.8% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -4.46 | -2.18 | 30.97 / 23.90 | 51.3% / 25.6% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 2.47 | 2.93 | 14.66 / 13.03 | 100.0% / 93.3% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -5.92 | -2.47 | 34.75 / 25.73 | 48.3% / 30.1% |
| MSTR | 合约跨平台 | bybit / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -3.29 | -3.65 | 26.58 / 24.48 | 59.2% / 61.7% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 5.27 | 3.02 | 17.51 / 16.22 | 100.0% / 99.6% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 3.19 | 4.37 | 22.92 / 19.16 | 32.4% / 14.1% |
| NVDA | 合约跨平台 | binance / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 1.13 | 2.23 | 19.31 / 19.13 | 58.2% / 61.5% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 5.46 | 5.40 | 13.34 / 11.22 | 93.1% / 72.0% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | 0.00 | 1.15 | 45.40 / 33.86 | 37.7% / 9.6% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bybit / futures / INTCUSDT | 0.00 | 1.13 | 45.25 / 33.94 | 37.7% / 9.6% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 7.47 | 7.27 | 17.82 / 16.84 | 95.3% / 74.6% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | -0.82 | -0.83 | 24.91 / 17.65 | 40.8% / 10.6% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | 2.55 | 2.09 | 20.76 / 13.60 | 69.6% / 19.4% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 7.16 | 6.75 | 15.09 / 12.58 | 97.9% / 69.8% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bitget / futures / HOODUSDT | -0.93 | -0.84 | 55.23 / 49.89 | 35.1% / 10.2% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 1.61 | 2.45 | 54.60 / 49.83 | 35.1% / 10.4% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 8.58 | 6.53 | 22.72 / 17.00 | 94.9% / 65.0% |

## 可比配对的整体特征

- 跨平台合约：79 组配对同时达到两类时段的描述性门槛，其中 40 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.97 bps 变为非常规盘 1.99 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：7 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 5.71 bps 变为非常规盘 4.87 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.01210 | 0.00000 | 100.0% / 99.3% |
| CRCL | binance / futures / CRCLUSDT | 0.01132 | 0.00000 | 100.0% / 99.3% |
| CRCL | bitget / futures / CRCLUSDT | 0.01915 | 0.00000 | 100.0% / 99.3% |
| CRCL | bybit / futures / CRCLUSDT | 0.00478 | 0.00000 | 100.0% / 99.3% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00280 | 63.1% / 64.7% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.00651 | 0.00766 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.00320 | 0.00320 | 100.0% / 98.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00710 | 0.00000 | 100.0% / 99.3% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | bitget / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 63.1% / 64.7% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00500 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.00840 | 0.00320 | 100.0% / 98.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | binance / futures / INTCUSDT | 0.00541 | 0.00000 | 100.0% / 99.3% |
| INTC | bitget / futures / INTCUSDT | 0.01100 | 0.00000 | 100.0% / 99.3% |
| INTC | bybit / futures / INTCUSDT | 0.00944 | 0.00437 | 100.0% / 99.3% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00500 | 0.00500 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.00320 | 0.00320 | 100.0% / 98.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | aster / futures / MSTRUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | binance / futures / MSTRUSDT | 0.00458 | 0.00028 | 100.0% / 99.3% |
| MSTR | bitget / futures / MSTRUSDT | 0.00560 | 0.00000 | 100.0% / 99.3% |
| MSTR | bybit / futures / MSTRUSDT | 0.00605 | 0.00275 | 100.0% / 99.3% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00970 | 63.1% / 64.7% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00671 | 0.00770 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 98.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00316 | 0.00017 | 100.0% / 99.3% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 85.0% / 87.0% |
| MU | aster / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | binance / futures / MUUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | bitget / futures / MUUSDT | 0.01170 | 0.00000 | 100.0% / 99.3% |
| MU | bybit / futures / MUUSDT | 0.00097 | 0.00000 | 100.0% / 99.3% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | hyperliquid / futures / xyz:MU | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00320 | 0.00320 | 100.0% / 98.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | aster / futures / NVDAUSDT | 0.01081 | 0.00000 | 96.9% / 99.3% |
| NVDA | binance / futures / NVDAUSDT | 0.01065 | 0.00000 | 96.9% / 99.3% |
| NVDA | bitget / futures / NVDAUSDT | 0.00800 | 0.00000 | 100.0% / 99.3% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 63.1% / 64.7% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00320 | 0.00320 | 100.0% / 98.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | lighter / futures / SKHY | 0.00320 | 0.00320 | 100.0% / 98.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bitget / futures / SNDKUSDT | 0.00640 | 0.00000 | 100.0% / 99.3% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.00320 | 0.00320 | 100.0% / 98.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bitget / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | hyperliquid / futures / xyz:SPCX | -0.00470 | 0.00174 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.00320 | 0.00320 | 100.0% / 98.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | binance / futures / TSLAUSDT | 0.00131 | 0.00000 | 100.0% / 99.3% |
| TSLA | bitget / futures / TSLAUSDT | 0.00045 | 0.00000 | 100.0% / 99.3% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 63.1% / 64.7% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 98.8% |
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
