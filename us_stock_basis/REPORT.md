# 美股 Top10 基差与资金费率分析

生成时间：2026-10-27T01:46:39.835654+00:00
研究窗口：2026-09-26T04:00:00+00:00 至 2026-10-26T04:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -2.55 | -2.38 | 19.91 / 16.04 | 94.2% / 68.0% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ bitget / futures / SNDKUSDT | -1.80 | -1.87 | 19.95 / 15.33 | 94.2% / 68.0% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 3.49 | 1.57 | 11.68 / 11.53 | 99.7% / 83.5% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | -0.92 | -1.26 | 15.08 / 11.12 | 95.0% / 45.7% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSD1 ↔ binance / futures / SPCXUSD1 | -1.33 | -0.62 | 18.51 / 11.32 | 99.5% / 64.1% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.70 | 3.36 | 12.84 / 9.51 | 99.4% / 86.4% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | -1.03 | -1.02 | 23.44 / 19.86 | 79.1% / 34.3% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ bitget / futures / MUUSDT | 0.19 | 0.10 | 23.49 / 19.43 | 79.1% / 34.3% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 5.69 | 4.88 | 14.00 / 11.13 | 98.4% / 85.7% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -2.51 | -1.22 | 22.20 / 17.53 | 93.3% / 48.6% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ bitget / futures / CRCLUSDT | -1.17 | -1.16 | 21.47 / 17.52 | 93.3% / 48.4% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 2.36 | 1.17 | 13.26 / 12.94 | 99.7% / 96.7% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bitget / futures / MSTRUSDT | -1.30 | -1.86 | 24.94 / 19.26 | 86.1% / 54.0% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ binance / futures / MSTRUSDT | 0.68 | 1.95 | 25.45 / 18.68 | 86.1% / 54.0% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 3.95 | 1.91 | 12.61 / 9.13 | 99.9% / 99.0% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -0.86 | -0.87 | 13.95 / 10.73 | 70.8% / 30.6% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ okx / futures / NVDA-USDT-SWAP | 0.46 | 0.44 | 14.02 / 10.35 | 70.8% / 30.6% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 5.66 | 5.24 | 13.03 / 11.21 | 92.9% / 79.6% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | 0.00 | 0.00 | 28.29 / 23.04 | 79.4% / 31.8% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | -2.17 | 0.00 | 27.94 / 22.09 | 79.4% / 31.8% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 6.64 | 5.70 | 17.73 / 14.05 | 96.9% / 80.6% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | 1.32 | 1.62 | 14.67 / 11.60 | 76.7% / 35.8% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | 0.26 | 0.53 | 14.16 / 11.77 | 76.7% / 35.7% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 5.28 | 5.37 | 13.34 / 10.44 | 93.5% / 68.8% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 2.60 | 2.52 | 31.35 / 18.74 | 62.6% / 18.5% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ okx / futures / HOOD-USDT-SWAP | 1.84 | 1.95 | 30.86 / 17.96 | 62.7% / 18.7% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 6.84 | 5.97 | 20.65 / 15.18 | 87.7% / 54.2% |

## 可比配对的整体特征

- 跨平台合约：99 组配对同时达到两类时段的描述性门槛，其中 53 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.95 bps 变为非常规盘 2.12 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：7 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 4.87 bps 变为非常规盘 4.43 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.00839 | 0.00000 | 100.0% / 99.3% |
| CRCL | binance / futures / CRCLUSDT | 0.00737 | 0.00000 | 100.0% / 99.3% |
| CRCL | bitget / futures / CRCLUSDT | 0.02190 | 0.00000 | 100.0% / 99.3% |
| CRCL | bybit / futures / CRCLUSDT | 0.00028 | 0.00000 | 100.0% / 99.3% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.00790 | 0.00500 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.00320 | 0.00320 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00213 | 0.00000 | 100.0% / 99.3% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | bitget / futures / HOODUSDT | 0.01530 | 0.00000 | 100.0% / 99.3% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00500 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.00320 | 0.00320 | 100.0% / 99.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | aster / futures / INTCUSDT | 0.00199 | 0.00000 | 100.0% / 99.3% |
| INTC | binance / futures / INTCUSDT | 0.01300 | 0.00313 | 100.0% / 99.3% |
| INTC | bitget / futures / INTCUSDT | 0.02580 | 0.00000 | 100.0% / 99.3% |
| INTC | bybit / futures / INTCUSDT | 0.01488 | 0.00561 | 100.0% / 99.3% |
| INTC | gateio / futures / INTC_USDT | 0.00300 | 0.00000 | 100.0% / 99.3% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00790 | 0.00500 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.00720 | 0.00400 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00916 | 0.00405 | 100.0% / 99.3% |
| MSTR | aster / futures / MSTRUSDT | 0.00016 | 0.00000 | 100.0% / 99.3% |
| MSTR | binance / futures / MSTRUSDT | 0.00068 | 0.00000 | 100.0% / 99.3% |
| MSTR | bitget / futures / MSTRUSDT | 0.02470 | 0.00000 | 100.0% / 99.3% |
| MSTR | bybit / futures / MSTRUSDT | 0.00412 | 0.00157 | 100.0% / 99.3% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00909 | 0.00910 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 96.9% / 99.3% |
| MU | aster / futures / MUUSDT | 0.00535 | 0.00000 | 96.9% / 99.3% |
| MU | binance / futures / MUUSDT | 0.00683 | 0.00000 | 96.9% / 99.3% |
| MU | bitget / futures / MUUSDT | 0.01750 | 0.00000 | 100.0% / 99.3% |
| MU | bybit / futures / MUUSDT | 0.00237 | 0.00000 | 100.0% / 99.3% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | hyperliquid / futures / xyz:MU | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00626 | 0.00000 | 100.0% / 99.3% |
| NVDA | aster / futures / NVDAUSDT | 0.00081 | 0.00000 | 100.0% / 99.3% |
| NVDA | binance / futures / NVDAUSDT | 0.00767 | 0.00000 | 100.0% / 99.3% |
| NVDA | bitget / futures / NVDAUSDT | 0.01290 | 0.00000 | 100.0% / 99.3% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | lighter / futures / SKHY | -0.00320 | 0.00320 | 100.0% / 99.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bitget / futures / SNDKUSDT | 0.02270 | 0.00000 | 100.0% / 99.3% |
| SNDK | bybit / futures / SNDKUSDT | 0.00384 | 0.00000 | 100.0% / 99.3% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.00480 | 0.00320 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00546 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSD1 | 0.00406 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSDT | 0.01096 | 0.00000 | 100.0% / 99.3% |
| SPCX | bitget / futures / SPCXUSDT | 0.01230 | 0.00000 | 100.0% / 99.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00362 | 0.00000 | 100.0% / 99.3% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | binance / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | bitget / futures / TSLAUSDT | 0.00460 | 0.00000 | 100.0% / 99.3% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |

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
