# 美股 Top10 基差与资金费率分析

生成时间：2026-11-06T14:48:01.448502+00:00
研究窗口：2026-10-07T04:00:00+00:00 至 2026-11-06T05:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -2.29 | -1.71 | 25.96 / 20.82 | 87.7% / 67.5% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ okx / futures / SNDK-USDT-SWAP | -0.69 | -0.43 | 25.38 / 19.95 | 87.7% / 67.5% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 0.00 | -0.86 | 11.49 / 11.42 | 95.3% / 89.2% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | -1.34 | -1.35 | 19.34 / 13.71 | 84.4% / 50.7% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ bybit / futures / SPCXUSDT | 0.61 | 0.65 | 18.39 / 13.77 | 84.4% / 50.6% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.33 | 3.47 | 12.02 / 9.43 | 94.8% / 90.7% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | -1.10 | -1.14 | 22.59 / 20.59 | 77.3% / 44.7% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ bybit / futures / MUUSDT | 0.81 | 0.74 | 22.40 / 19.87 | 77.3% / 44.7% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 5.45 | 4.56 | 13.05 / 11.92 | 94.7% / 84.1% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -2.46 | -1.25 | 23.69 / 19.61 | 83.7% / 43.9% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ bitget / futures / CRCLUSDT | -1.16 | 0.00 | 23.63 / 19.89 | 83.7% / 43.7% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 1.18 | 0.00 | 14.08 / 20.22 | 95.4% / 93.2% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bitget / futures / MSTRUSDT | -1.32 | -0.74 | 28.39 / 20.55 | 80.6% / 52.6% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ okx / futures / MSTR-USDT-SWAP | 0.70 | 1.36 | 27.95 / 20.80 | 80.6% / 52.6% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.03 | 2.08 | 11.60 / 10.22 | 95.5% / 96.2% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ bitget / futures / NVDAUSDT | -0.97 | -0.93 | 15.56 / 12.15 | 61.5% / 31.3% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -2.40 | -1.91 | 16.24 / 12.46 | 61.5% / 31.3% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 5.57 | 5.05 | 12.94 / 10.65 | 89.9% / 83.2% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | -3.15 | -2.01 | 29.41 / 26.07 | 74.7% / 36.0% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ okx / futures / INTC-USDT-SWAP | 0.00 | 0.00 | 28.61 / 24.66 | 74.7% / 36.0% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 5.34 | 4.19 | 20.64 / 21.62 | 92.7% / 83.8% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | 3.23 | 2.92 | 15.34 / 12.68 | 77.2% / 39.4% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bybit / futures / TSLAUSDT | 2.46 | 2.11 | 15.00 / 12.19 | 77.2% / 39.4% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 4.81 | 5.06 | 13.99 / 10.69 | 90.0% / 70.5% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ gateio / futures / HOOD_USDT | 1.97 | 1.93 | 26.10 / 20.99 | 73.0% / 23.6% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 2.08 | 2.43 | 26.27 / 20.27 | 73.0% / 23.3% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 6.03 | 5.17 | 20.36 / 15.09 | 86.6% / 58.5% |

## 可比配对的整体特征

- 跨平台合约：99 组配对同时达到两类时段的描述性门槛，其中 48 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.98 bps 变为非常规盘 1.97 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：8 组配对同时达到两类时段的描述性门槛，其中 2 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 4.86 bps 变为非常规盘 4.83 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.00240 | 0.00000 | 95.5% / 96.1% |
| CRCL | binance / futures / CRCLUSDT | 0.00482 | 0.00000 | 95.5% / 96.1% |
| CRCL | bitget / futures / CRCLUSDT | 0.01620 | 0.00000 | 95.5% / 96.1% |
| CRCL | bybit / futures / CRCLUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.00728 | 0.00573 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.00560 | 0.00320 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00195 | 0.00000 | 95.5% / 96.1% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| HOOD | bitget / futures / HOODUSDT | 0.00480 | 0.00000 | 100.0% / 99.1% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00500 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.00320 | 0.00320 | 100.0% / 99.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 95.5% / 96.1% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| INTC | binance / futures / INTCUSDT | 0.01183 | 0.00375 | 95.5% / 96.1% |
| INTC | bitget / futures / INTCUSDT | 0.02190 | 0.00000 | 95.5% / 96.1% |
| INTC | bybit / futures / INTCUSDT | 0.01440 | 0.00864 | 95.5% / 96.1% |
| INTC | gateio / futures / INTC_USDT | 0.00390 | 0.00370 | 95.5% / 96.1% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00939 | 0.00600 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.01440 | 0.00960 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00818 | 0.00435 | 95.5% / 96.1% |
| MSTR | aster / futures / MSTRUSDT | 0.00077 | 0.00000 | 95.5% / 96.1% |
| MSTR | binance / futures / MSTRUSDT | 0.00237 | 0.00000 | 95.5% / 96.1% |
| MSTR | bitget / futures / MSTRUSDT | 0.02710 | 0.00800 | 100.0% / 99.1% |
| MSTR | bybit / futures / MSTRUSDT | 0.00570 | 0.00184 | 95.5% / 96.1% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00814 | 0.01055 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00102 | 0.00000 | 95.5% / 96.1% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 92.7% / 96.1% |
| MU | aster / futures / MUUSDT | 0.00000 | 0.00000 | 92.7% / 96.1% |
| MU | binance / futures / MUUSDT | 0.00000 | 0.00000 | 92.7% / 96.1% |
| MU | bitget / futures / MUUSDT | 0.01470 | 0.00000 | 100.0% / 99.1% |
| MU | bybit / futures / MUUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| MU | hyperliquid / futures / xyz:MU | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00038 | 0.00003 | 95.5% / 96.1% |
| NVDA | aster / futures / NVDAUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| NVDA | binance / futures / NVDAUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| NVDA | bitget / futures / NVDAUSDT | 0.00535 | 0.00000 | 100.0% / 99.1% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SKHY | lighter / futures / SKHY | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SNDK | aster / futures / SNDKUSDT | 0.00060 | 0.00000 | 95.5% / 96.1% |
| SNDK | binance / futures / SNDKUSDT | 0.00543 | 0.00000 | 100.0% / 99.1% |
| SNDK | bitget / futures / SNDKUSDT | 0.01970 | 0.00390 | 95.5% / 96.1% |
| SNDK | bybit / futures / SNDKUSDT | 0.00806 | 0.00264 | 95.5% / 96.1% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00882 | 0.01025 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.01440 | 0.01440 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.01010 | 0.00371 | 95.5% / 96.1% |
| SPCX | aster / futures / SPCXUSD1 | 0.01108 | 0.00000 | 95.5% / 96.1% |
| SPCX | aster / futures / SPCXUSDT | 0.00676 | 0.00000 | 95.5% / 96.1% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | binance / futures / SPCXUSDT | 0.01607 | 0.00607 | 95.5% / 96.1% |
| SPCX | bitget / futures / SPCXUSDT | 0.01830 | 0.00700 | 100.0% / 99.1% |
| SPCX | bybit / futures / SPCXUSDT | 0.00098 | 0.00000 | 95.5% / 96.1% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00714 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.01280 | 0.00320 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00680 | 0.00000 | 95.5% / 96.1% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| TSLA | binance / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | bitget / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 95.5% / 96.1% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 95.5% / 96.1% |

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
