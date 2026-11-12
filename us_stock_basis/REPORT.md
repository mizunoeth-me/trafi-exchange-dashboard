# 美股 Top10 基差与资金费率分析

生成时间：2026-11-12T01:50:16.824983+00:00
研究窗口：2026-10-12T04:00:00+00:00 至 2026-11-11T05:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -1.36 | -0.32 | 31.82 / 23.69 | 90.2% / 69.1% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ okx / futures / SNDK-USDT-SWAP | -0.16 | 0.15 | 32.13 / 23.20 | 90.2% / 69.1% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | -0.72 | -1.69 | 12.18 / 11.78 | 99.9% / 95.6% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | -0.68 | -0.68 | 21.52 / 16.47 | 88.1% / 54.3% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ bybit / futures / SPCXUSDT | 0.81 | 1.35 | 21.74 / 16.19 | 88.1% / 54.3% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.09 | 3.71 | 12.06 / 10.16 | 99.3% / 96.2% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | -1.55 | -1.23 | 25.71 / 23.00 | 83.6% / 53.1% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ bitget / futures / MUUSDT | 0.53 | 0.55 | 26.14 / 22.32 | 83.6% / 53.1% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 5.12 | 4.13 | 14.02 / 12.44 | 99.2% / 91.4% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ bitget / futures / CRCLUSDT | -1.10 | 0.00 | 26.61 / 21.92 | 86.2% / 41.3% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -2.43 | -1.23 | 26.63 / 21.95 | 86.2% / 41.4% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 0.00 | -1.26 | 18.03 / 19.62 | 100.0% / 97.0% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ binance / futures / MSTRUSDT | 0.66 | 1.48 | 29.81 / 21.08 | 86.8% / 55.5% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bybit / futures / MSTRUSDT | 0.71 | 1.46 | 31.04 / 21.34 | 86.8% / 55.5% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 3.97 | 2.70 | 11.95 / 10.50 | 100.0% / 98.8% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -2.81 | -2.23 | 18.96 / 16.20 | 68.3% / 37.5% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ bitget / futures / NVDAUSDT | -1.14 | -0.58 | 18.38 / 15.77 | 68.3% / 37.5% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 5.04 | 3.85 | 12.85 / 10.42 | 95.9% / 89.6% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | -2.22 | -2.89 | 29.01 / 27.80 | 80.8% / 42.9% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | 0.00 | 0.00 | 28.34 / 27.15 | 80.8% / 42.8% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 4.25 | 2.15 | 22.33 / 21.69 | 97.7% / 90.9% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bybit / futures / TSLAUSDT | 2.69 | 2.24 | 16.09 / 13.40 | 83.3% / 42.3% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | 2.90 | 2.50 | 15.94 / 13.86 | 83.3% / 42.3% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 4.28 | 4.57 | 13.77 / 10.77 | 95.0% / 75.0% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ gateio / futures / HOOD_USDT | 3.30 | 3.77 | 26.24 / 23.92 | 79.4% / 24.5% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 2.31 | 2.98 | 25.98 / 22.95 | 79.4% / 24.4% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 5.94 | 5.32 | 20.76 / 16.26 | 92.5% / 63.9% |

## 可比配对的整体特征

- 跨平台合约：99 组配对同时达到两类时段的描述性门槛，其中 52 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.97 bps 变为非常规盘 2.03 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：8 组配对同时达到两类时段的描述性门槛，其中 1 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 4.76 bps 变为非常规盘 4.52 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.00240 | 0.00000 | 100.0% / 99.1% |
| CRCL | binance / futures / CRCLUSDT | 0.00596 | 0.00000 | 100.0% / 99.1% |
| CRCL | bitget / futures / CRCLUSDT | 0.01380 | 0.00000 | 100.0% / 99.1% |
| CRCL | bybit / futures / CRCLUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.00717 | 0.00500 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.01080 | 0.00560 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00154 | 0.00120 | 100.0% / 99.1% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | bitget / futures / HOODUSDT | 0.00150 | 0.00000 | 100.0% / 99.1% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00500 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.00320 | 0.00320 | 100.0% / 99.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.1% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| INTC | binance / futures / INTCUSDT | 0.01018 | 0.00375 | 100.0% / 99.1% |
| INTC | bitget / futures / INTCUSDT | 0.01540 | 0.00000 | 100.0% / 99.1% |
| INTC | bybit / futures / INTCUSDT | 0.01108 | 0.00403 | 100.0% / 99.1% |
| INTC | gateio / futures / INTC_USDT | 0.00130 | 0.00000 | 100.0% / 99.1% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00922 | 0.00759 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.01360 | 0.01200 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00693 | 0.00451 | 100.0% / 99.1% |
| MSTR | aster / futures / MSTRUSDT | 0.00016 | 0.00000 | 100.0% / 99.1% |
| MSTR | binance / futures / MSTRUSDT | 0.00237 | 0.00000 | 100.0% / 99.1% |
| MSTR | bitget / futures / MSTRUSDT | 0.02470 | 0.00910 | 100.0% / 99.1% |
| MSTR | bybit / futures / MSTRUSDT | 0.00316 | 0.00075 | 100.0% / 99.1% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00926 | 0.00992 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00148 | 0.00000 | 100.0% / 99.1% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 97.2% / 99.1% |
| MU | aster / futures / MUUSDT | 0.00194 | 0.00000 | 97.2% / 99.1% |
| MU | binance / futures / MUUSDT | 0.00730 | 0.00070 | 97.2% / 99.1% |
| MU | bitget / futures / MUUSDT | 0.01430 | 0.00000 | 100.0% / 99.1% |
| MU | bybit / futures / MUUSDT | 0.00299 | 0.00000 | 100.0% / 99.1% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| MU | hyperliquid / futures / xyz:MU | 0.00653 | 0.00557 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00560 | 0.00560 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00584 | 0.00343 | 100.0% / 99.1% |
| NVDA | aster / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | binance / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | bitget / futures / NVDAUSDT | 0.00400 | 0.00000 | 100.0% / 99.1% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00440 | 0.00320 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | lighter / futures / SKHY | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SNDK | aster / futures / SNDKUSD1 | 0.00312 | 0.00000 | 100.0% / 99.1% |
| SNDK | aster / futures / SNDKUSDT | 0.00701 | 0.00000 | 100.0% / 99.1% |
| SNDK | binance / futures / SNDKUSDT | 0.01275 | 0.00498 | 100.0% / 99.1% |
| SNDK | bitget / futures / SNDKUSDT | 0.02270 | 0.01000 | 100.0% / 99.1% |
| SNDK | bybit / futures / SNDKUSDT | 0.00955 | 0.00294 | 100.0% / 99.1% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00965 | 0.00999 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.01600 | 0.01680 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.01134 | 0.00441 | 100.0% / 99.1% |
| SPCX | aster / futures / SPCXUSD1 | 0.01170 | 0.00000 | 100.0% / 99.1% |
| SPCX | aster / futures / SPCXUSDT | 0.00939 | 0.00128 | 100.0% / 99.1% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | binance / futures / SPCXUSDT | 0.01607 | 0.00918 | 100.0% / 99.1% |
| SPCX | bitget / futures / SPCXUSDT | 0.01600 | 0.00250 | 100.0% / 99.1% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00701 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.01280 | 0.00320 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00757 | 0.00000 | 100.0% / 99.1% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | binance / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | bitget / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.1% |

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
