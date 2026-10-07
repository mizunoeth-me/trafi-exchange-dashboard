# 美股 Top10 基差与资金费率分析

生成时间：2026-10-07T08:20:37.890952+00:00
研究窗口：2026-09-07T04:00:00+00:00 至 2026-10-07T04:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -2.16 | -1.69 | 16.83 / 11.48 | 95.8% / 67.7% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ okx / futures / SNDK-USDT-SWAP | -0.98 | -0.34 | 16.45 / 11.16 | 95.8% / 67.7% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 5.89 | 5.05 | 12.83 / 11.10 | 99.8% / 84.7% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 1.95 | 1.99 | 16.83 / 10.19 | 87.2% / 33.6% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ okx / futures / SPCX-USDT-SWAP | 1.34 | 1.31 | 15.81 / 9.44 | 87.2% / 33.6% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.08 | 3.14 | 12.84 / 9.41 | 99.6% / 78.1% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | 1.95 | 2.49 | 26.72 / 19.03 | 68.3% / 22.4% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ bitget / futures / MUUSDT | 0.37 | 1.12 | 24.99 / 17.33 | 68.3% / 22.4% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 7.00 | 6.54 | 14.77 / 12.77 | 97.9% / 87.5% |
| CRCL | 合约跨平台 | hyperliquid / futures / xyz:CRCL ↔ lighter / futures / CRCL | -7.48 | -7.90 | 29.34 / 21.63 | 90.4% / 77.0% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -4.34 | -1.20 | 28.19 / 19.74 | 88.3% / 47.9% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 3.38 | 2.39 | 14.44 / 13.07 | 99.8% / 96.4% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bitget / futures / MSTRUSDT | -1.89 | -1.93 | 23.50 / 20.06 | 86.8% / 56.3% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -3.74 | -1.83 | 23.86 / 19.04 | 86.8% / 56.3% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 5.21 | 3.20 | 14.91 / 10.73 | 99.9% / 99.1% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 2.12 | 1.79 | 12.79 / 11.81 | 58.8% / 23.8% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ bybit / futures / NVDAUSDT | 2.16 | 2.12 | 13.19 / 11.04 | 58.8% / 23.8% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 6.51 | 5.99 | 13.60 / 11.61 | 91.9% / 74.5% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | -1.00 | 0.00 | 36.53 / 27.27 | 54.3% / 20.4% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bybit / futures / INTCUSDT | 0.00 | 2.58 | 37.02 / 24.90 | 54.3% / 20.4% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 7.36 | 6.84 | 18.13 / 16.18 | 96.9% / 78.8% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | 0.83 | 0.56 | 19.67 / 13.15 | 66.1% / 19.6% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bybit / futures / TSLAUSDT | 1.37 | 1.61 | 18.58 / 12.01 | 66.1% / 19.8% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 7.62 | 7.31 | 15.04 / 12.80 | 96.9% / 64.9% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 1.76 | 1.78 | 39.09 / 29.14 | 49.1% / 17.7% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ okx / futures / HOOD-USDT-SWAP | 0.87 | 1.76 | 38.56 / 27.03 | 49.1% / 17.8% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 8.22 | 6.95 | 21.65 / 16.84 | 93.0% / 63.7% |

## 可比配对的整体特征

- 跨平台合约：99 组配对同时达到两类时段的描述性门槛，其中 56 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 2.17 bps 变为非常规盘 2.24 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：7 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 5.95 bps 变为非常规盘 5.08 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.02207 | 0.00779 | 100.0% / 99.3% |
| CRCL | binance / futures / CRCLUSDT | 0.02262 | 0.00837 | 100.0% / 99.3% |
| CRCL | bitget / futures / CRCLUSDT | 0.02980 | 0.00000 | 100.0% / 99.3% |
| CRCL | bybit / futures / CRCLUSDT | 0.01095 | 0.00695 | 100.0% / 99.3% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00710 | 100.0% / 99.3% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.01172 | 0.01086 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.01760 | 0.01360 | 100.0% / 99.5% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.01603 | 0.01081 | 100.0% / 99.3% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | bitget / futures / HOODUSDT | 0.00710 | 0.00000 | 100.0% / 99.3% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00597 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.01760 | 0.01040 | 100.0% / 99.5% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | binance / futures / INTCUSDT | 0.00624 | 0.00211 | 100.0% / 99.3% |
| INTC | bitget / futures / INTCUSDT | 0.02190 | 0.00000 | 100.0% / 99.3% |
| INTC | bybit / futures / INTCUSDT | 0.00758 | 0.00044 | 100.0% / 99.3% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | hyperliquid / futures / xyz:INTC | 0.01065 | 0.00781 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.01360 | 0.00960 | 100.0% / 99.5% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | aster / futures / MSTRUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | binance / futures / MSTRUSDT | 0.00859 | 0.00047 | 100.0% / 99.3% |
| MSTR | bitget / futures / MSTRUSDT | 0.02540 | 0.00000 | 100.0% / 99.3% |
| MSTR | bybit / futures / MSTRUSDT | 0.00915 | 0.00859 | 100.0% / 99.3% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00230 | 100.0% / 99.3% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.01229 | 0.00967 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.5% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00964 | 0.00000 | 100.0% / 99.3% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | aster / futures / MUUSDT | 0.00540 | 0.00000 | 100.0% / 99.3% |
| MU | binance / futures / MUUSDT | 0.00799 | 0.00000 | 100.0% / 99.3% |
| MU | bitget / futures / MUUSDT | 0.01290 | 0.00000 | 100.0% / 99.3% |
| MU | bybit / futures / MUUSDT | 0.00306 | 0.00000 | 100.0% / 99.3% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | hyperliquid / futures / xyz:MU | 0.00564 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00320 | 0.00320 | 100.0% / 99.5% |
| MU | okx / futures / MU-USDT-SWAP | 0.00785 | 0.00000 | 100.0% / 99.3% |
| NVDA | aster / futures / NVDAUSDT | 0.01081 | 0.00205 | 97.1% / 99.3% |
| NVDA | binance / futures / NVDAUSDT | 0.01482 | 0.00821 | 97.1% / 99.3% |
| NVDA | bitget / futures / NVDAUSDT | 0.01640 | 0.00000 | 100.0% / 99.3% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00400 | 0.00320 | 100.0% / 99.5% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00643 | 0.00000 | 100.0% / 99.3% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | lighter / futures / SKHY | -0.00320 | 0.00320 | 100.0% / 99.5% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | aster / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bitget / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.00320 | 0.00320 | 100.0% / 99.5% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | aster / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bitget / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.00320 | 0.00320 | 100.0% / 99.5% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | binance / futures / TSLAUSDT | 0.00075 | 0.00000 | 100.0% / 99.3% |
| TSLA | bitget / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.5% |
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
