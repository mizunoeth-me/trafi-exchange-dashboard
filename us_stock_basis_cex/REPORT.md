# 美股 Top10 基差与资金费率分析（仅 CEX）

范围：Binance、Bybit、OKX、Bitget、Gate.io。排名、市场配对、基差、资金费率及覆盖率均只计 CEX。
选样快照：2026-09-18T06:19:32.597373+00:00；与原版使用同一批快照，仅改变平台范围。CEX 第十名为 MRVL，原版 GOOGL 不在本版 Top10。

生成时间：2026-10-15T18:40:12.203075+00:00
研究窗口：2026-09-15T04:00:00+00:00 至 2026-10-15T04:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | binance / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -2.36 | -2.27 | 5.18 / 5.48 | 81.8% / 79.5% |
| SNDK | 合约跨平台 | bybit / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -1.07 | -0.28 | 4.98 / 4.97 | 81.8% / 79.5% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 6.35 | 5.68 | 13.10 / 11.69 | 81.6% / 65.8% |
| SPCX | 合约跨平台 | bitget / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 1.35 | 2.00 | 7.14 / 6.72 | 81.8% / 78.3% |
| SPCX | 合约跨平台 | bitget / futures / SPCXUSDT ↔ okx / futures / SPCX-USDT-SWAP | 1.31 | 1.35 | 4.74 / 6.69 | 81.8% / 78.3% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.77 | 3.58 | 13.21 / 9.85 | 81.4% / 63.1% |
| MU | 合约跨平台 | bitget / futures / MUUSDT ↔ gateio / futures / MU_USDT | 1.67 | 1.75 | 6.89 / 6.59 | 81.8% / 78.9% |
| MU | 合约跨平台 | bybit / futures / MUUSDT ↔ gateio / futures / MU_USDT | 1.17 | 1.40 | 5.81 / 5.65 | 81.8% / 79.5% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 6.46 | 6.22 | 14.96 / 12.60 | 80.1% / 69.1% |
| CRCL | 合约跨平台 | binance / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -4.88 | -3.52 | 14.31 / 9.84 | 81.8% / 79.5% |
| CRCL | 合约跨平台 | bybit / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -3.40 | -2.38 | 13.29 / 10.49 | 81.8% / 79.5% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 2.47 | 1.20 | 14.07 / 13.02 | 81.6% / 77.9% |
| MSTR | 合约跨平台 | bitget / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -1.22 | 1.53 | 9.69 / 10.40 | 81.8% / 79.5% |
| MSTR | 合约跨平台 | bitget / futures / MSTRUSDT ↔ okx / futures / MSTR-USDT-SWAP | 2.14 | 3.25 | 6.71 / 9.91 | 81.8% / 79.5% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.60 | 3.06 | 13.60 / 10.31 | 81.8% / 78.8% |
| INTC | 合约跨平台 | bitget / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | 0.00 | 0.92 | 7.11 / 15.95 | 81.8% / 78.7% |
| INTC | 合约跨平台 | bitget / futures / INTCUSDT ↔ okx / futures / INTC-USDT-SWAP | 2.48 | 3.44 | 7.23 / 14.62 | 81.8% / 78.7% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 6.89 | 6.49 | 17.11 / 15.38 | 79.2% / 64.5% |
| NVDA | 合约跨平台 | bitget / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 2.22 | 2.81 | 6.37 / 6.75 | 81.8% / 76.7% |
| NVDA | 合约跨平台 | bitget / futures / NVDAUSDT ↔ bybit / futures / NVDAUSDT | 1.33 | 2.13 | 4.37 / 5.15 | 81.8% / 76.5% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 6.53 | 6.23 | 13.21 / 11.64 | 76.1% / 60.6% |
| TSLA | 合约跨平台 | binance / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | -0.57 | -1.07 | 8.82 / 9.87 | 81.8% / 76.1% |
| TSLA | 合约跨平台 | bitget / futures / TSLAUSDT ↔ okx / futures / TSLA-USDT-SWAP | 0.81 | 1.10 | 7.79 / 9.42 | 81.8% / 75.4% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 6.99 | 6.72 | 14.10 / 11.86 | 78.4% / 51.0% |
| AAPL | 合约跨平台 | bitget / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | 3.30 | 3.30 | 8.94 / 8.56 | 81.8% / 69.9% |
| AAPL | 合约跨平台 | binance / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | 2.68 | 2.34 | 9.02 / 8.26 | 81.8% / 79.1% |
| AAPL | 本所现货—合约 | okx / futures / AAPL-USDT-SWAP ↔ okx / spot / XAAPL-USDT | 5.45 | 4.85 | 12.75 / 10.27 | 70.4% / 43.2% |

## 可比配对的整体特征

- 跨平台合约：87 组配对同时达到两类时段的描述性门槛，其中 51 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.80 bps 变为非常规盘 2.04 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：2 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 4.88 bps 变为非常规盘 4.00 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| AAPL | binance / futures / AAPLUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| AAPL | bitget / futures / AAPLUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| AAPL | bybit / futures / AAPLUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| AAPL | gateio / futures / AAPL_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| AAPL | okx / futures / AAPL-USDT-SWAP | 0.00000 | 0.00000 | 81.8% / 78.9% |
| CRCL | binance / futures / CRCLUSDT | 0.02477 | 0.00997 | 81.8% / 78.9% |
| CRCL | bitget / futures / CRCLUSDT | 0.03260 | 0.00000 | 90.9% / 93.2% |
| CRCL | bybit / futures / CRCLUSDT | 0.01542 | 0.01095 | 86.4% / 86.0% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00160 | 100.0% / 99.3% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.01863 | 0.01344 | 81.8% / 78.9% |
| INTC | binance / futures / INTCUSDT | 0.01309 | 0.00529 | 95.5% / 96.3% |
| INTC | bitget / futures / INTCUSDT | 0.02630 | 0.00000 | 81.8% / 78.9% |
| INTC | bybit / futures / INTCUSDT | 0.01095 | 0.00561 | 86.4% / 81.9% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00281 | 0.00073 | 81.8% / 78.9% |
| MSTR | binance / futures / MSTRUSDT | 0.01047 | 0.00555 | 81.8% / 78.9% |
| MSTR | bitget / futures / MSTRUSDT | 0.02870 | 0.00000 | 81.8% / 78.9% |
| MSTR | bybit / futures / MSTRUSDT | 0.01731 | 0.01257 | 86.4% / 81.9% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00799 | 0.00095 | 81.8% / 78.9% |
| MU | binance / futures / MUUSDT | 0.00683 | 0.00000 | 81.8% / 78.9% |
| MU | bitget / futures / MUUSDT | 0.01170 | 0.00000 | 81.8% / 78.9% |
| MU | bybit / futures / MUUSDT | 0.00000 | 0.00000 | 86.4% / 81.9% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | okx / futures / MU-USDT-SWAP | 0.00273 | 0.00000 | 81.8% / 78.9% |
| NVDA | binance / futures / NVDAUSDT | 0.01437 | 0.00856 | 81.8% / 78.9% |
| NVDA | bitget / futures / NVDAUSDT | 0.01820 | 0.00000 | 81.8% / 78.9% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00425 | 0.00000 | 81.8% / 78.9% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 90.9% / 93.2% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SNDK | bitget / futures / SNDKUSDT | 0.00110 | 0.00000 | 81.8% / 78.9% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 90.9% / 93.2% |
| SPCX | bitget / futures / SPCXUSDT | 0.01460 | 0.00000 | 95.5% / 96.3% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 81.8% / 78.9% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 81.8% / 78.9% |
| TSLA | binance / futures / TSLAUSDT | 0.00075 | 0.00000 | 81.8% / 78.9% |
| TSLA | bitget / futures / TSLAUSDT | 0.00090 | 0.00000 | 81.8% / 78.9% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 86.4% / 81.9% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 81.8% / 78.9% |

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
- `../us_stock_spot_perp_session_basis_20260914/data/basis.sqlite3`：K线、结算、实时盘口缓存；`../us_stock_spot_perp_session_basis_20260914/data/raw/*.json.gz`：带请求参数与采集时间的公共接口证据。
- 看板：“美股基差与费率”页，支持选股、选平台对、7/30日、时段及可比/参考筛选，页面可导出所选配对的原始明细。
- 运行：`python3 -m analysis.us_stock_basis.collect --scope cex`（断点续采），`python3 -m analysis.us_stock_basis.build --scope cex`（构建），`python3 -m analysis.us_stock_basis.live --watch`（分钟盘口）。
