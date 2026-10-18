# 美股 Top10 基差与资金费率分析

生成时间：2026-10-18T06:31:03.958046+00:00
研究窗口：2026-09-18T04:00:00+00:00 至 2026-10-18T04:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -2.73 | -2.53 | 16.32 / 10.79 | 69.7% / 47.3% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ bitget / futures / SNDKUSDT | -2.09 | -1.79 | 16.04 / 10.74 | 69.7% / 47.3% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 6.38 | 5.78 | 13.37 / 11.74 | 71.2% / 56.5% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 0.58 | 0.58 | 15.89 / 9.18 | 62.0% / 23.2% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ okx / futures / SPCX-USDT-SWAP | 1.33 | 1.34 | 15.58 / 8.93 | 62.0% / 23.2% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 5.13 | 3.93 | 13.31 / 9.78 | 71.0% / 54.5% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | 0.65 | 1.20 | 24.77 / 16.56 | 53.3% / 16.8% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ bitget / futures / MUUSDT | 0.19 | 1.13 | 23.85 / 16.41 | 53.3% / 16.8% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 6.50 | 6.18 | 14.69 / 12.42 | 69.7% / 61.0% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -3.64 | -1.24 | 25.81 / 17.98 | 63.9% / 37.1% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ bitget / futures / CRCLUSDT | -1.20 | -1.21 | 24.66 / 17.99 | 63.9% / 37.1% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 2.47 | 1.19 | 14.04 / 13.10 | 71.2% / 68.1% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bitget / futures / MSTRUSDT | -1.92 | -3.06 | 22.05 / 20.25 | 64.0% / 43.4% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ binance / futures / MSTRUSDT | 0.29 | 0.62 | 22.34 / 19.07 | 64.0% / 43.4% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.49 | 2.58 | 13.49 / 10.02 | 71.4% / 69.0% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 1.73 | 1.33 | 12.22 / 10.39 | 44.9% / 16.9% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ okx / futures / NVDA-USDT-SWAP | 1.73 | 1.35 | 12.42 / 9.60 | 44.9% / 16.9% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 6.51 | 6.05 | 12.85 / 11.55 | 66.8% / 52.9% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | -0.85 | 0.00 | 32.47 / 23.48 | 46.0% / 19.6% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | -0.94 | 0.86 | 33.34 / 21.36 | 46.0% / 19.6% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 7.08 | 6.46 | 17.12 / 14.85 | 69.4% / 56.3% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | -0.28 | -0.27 | 18.96 / 12.37 | 44.1% / 15.1% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ binance / futures / TSLAUSDT | 1.11 | 1.61 | 17.73 / 10.73 | 44.1% / 15.3% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 7.10 | 6.58 | 14.57 / 11.87 | 68.3% / 44.1% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 1.72 | 1.76 | 36.77 / 19.95 | 38.0% / 15.4% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bitget / futures / HOODUSDT | -1.85 | -2.40 | 35.26 / 20.56 | 37.9% / 15.2% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 7.91 | 6.81 | 19.84 / 15.84 | 65.1% / 42.3% |

## 可比配对的整体特征

- 跨平台合约：9 组配对同时达到两类时段的描述性门槛，其中 2 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 3.82 bps 变为非常规盘 3.56 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：没有同时达到常规盘与非常规盘覆盖门槛的配对，不能据此概括稳定规律。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.02207 | 0.00336 | 85.7% / 86.2% |
| CRCL | binance / futures / CRCLUSDT | 0.01948 | 0.00215 | 95.2% / 92.2% |
| CRCL | bitget / futures / CRCLUSDT | 0.03150 | 0.00000 | 81.0% / 83.2% |
| CRCL | bybit / futures / CRCLUSDT | 0.01506 | 0.01067 | 76.2% / 76.1% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.01213 | 0.00840 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.01120 | 0.00480 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.01720 | 0.01312 | 71.4% / 69.0% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 95.2% |
| HOOD | binance / futures / HOODUSDT | 0.00147 | 0.00000 | 100.0% / 95.2% |
| HOOD | bitget / futures / HOODUSDT | 0.02620 | 0.00000 | 71.4% / 69.0% |
| HOOD | bybit / futures / HOODUSDT | 0.00938 | 0.00000 | 76.2% / 72.0% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00500 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.00640 | 0.00320 | 100.0% / 99.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 71.4% / 69.0% |
| INTC | aster / futures / INTCUSDT | 0.00276 | 0.00000 | 90.5% / 89.2% |
| INTC | binance / futures / INTCUSDT | 0.01327 | 0.00455 | 85.7% / 86.2% |
| INTC | bitget / futures / INTCUSDT | 0.02840 | 0.00000 | 71.4% / 69.0% |
| INTC | bybit / futures / INTCUSDT | 0.01059 | 0.00472 | 76.2% / 72.0% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | hyperliquid / futures / xyz:INTC | 0.01044 | 0.00693 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.00800 | 0.00480 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00503 | 0.00159 | 71.4% / 69.0% |
| MSTR | aster / futures / MSTRUSDT | 0.00000 | 0.00000 | 95.2% / 92.2% |
| MSTR | binance / futures / MSTRUSDT | 0.00280 | 0.00000 | 100.0% / 95.2% |
| MSTR | bitget / futures / MSTRUSDT | 0.02900 | 0.00000 | 71.4% / 69.0% |
| MSTR | bybit / futures / MSTRUSDT | 0.01877 | 0.01126 | 76.2% / 76.1% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.01219 | 0.01041 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00773 | 0.00000 | 71.4% / 69.0% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 71.4% / 69.0% |
| MU | aster / futures / MUUSDT | 0.00366 | 0.00000 | 71.4% / 69.0% |
| MU | binance / futures / MUUSDT | 0.00416 | 0.00000 | 92.3% / 92.2% |
| MU | bitget / futures / MUUSDT | 0.00980 | 0.00000 | 71.4% / 69.0% |
| MU | bybit / futures / MUUSDT | 0.00000 | 0.00000 | 76.2% / 72.0% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | hyperliquid / futures / xyz:MU | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00214 | 0.00000 | 71.4% / 69.0% |
| NVDA | aster / futures / NVDAUSDT | 0.00624 | 0.00000 | 90.5% / 89.2% |
| NVDA | binance / futures / NVDAUSDT | 0.01321 | 0.00707 | 95.2% / 92.2% |
| NVDA | bitget / futures / NVDAUSDT | 0.01780 | 0.00000 | 71.4% / 69.0% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 71.4% / 69.0% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00312 | 0.00000 | 71.4% / 69.0% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 81.0% / 83.2% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 76.2% / 72.0% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | lighter / futures / SKHY | -0.00640 | 0.00320 | 100.0% / 99.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 100.0% / 95.2% |
| SNDK | aster / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 95.2% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 95.2% |
| SNDK | bitget / futures / SNDKUSDT | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SPCX | aster / futures / SPCXUSD1 | 0.00000 | 0.00000 | 76.2% / 80.2% |
| SPCX | aster / futures / SPCXUSDT | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 71.4% / 69.0% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 81.0% / 83.2% |
| SPCX | bitget / futures / SPCXUSDT | 0.01500 | 0.00000 | 85.7% / 86.2% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 76.2% / 72.0% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 71.4% / 69.0% |
| TSLA | aster / futures / TSLAUSDT | 0.00116 | 0.00000 | 71.4% / 69.0% |
| TSLA | binance / futures / TSLAUSDT | 0.00000 | 0.00000 | 95.2% / 92.2% |
| TSLA | bitget / futures / TSLAUSDT | 0.01300 | 0.00000 | 71.4% / 69.0% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 76.2% / 72.0% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 71.4% / 69.0% |

本窗口本地事件库记录：MU 2026-10-14 除息。事件库不是完整性保证。

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
