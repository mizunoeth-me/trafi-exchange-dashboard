# 美股 Top10 基差与资金费率分析（仅 CEX）

范围：Binance、Bybit、OKX、Bitget、Gate.io。排名、市场配对、基差、资金费率及覆盖率均只计 CEX。
选样快照：2026-09-18T06:19:32.597373+00:00；与原版使用同一批快照，仅改变平台范围。CEX 第十名为 MRVL，原版 GOOGL 不在本版 Top10。

生成时间：2026-10-12T12:32:30.183567+00:00
研究窗口：2026-09-12T04:00:00+00:00 至 2026-10-12T04:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | binance / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -2.32 | -2.23 | 5.15 / 5.57 | 95.0% / 88.9% |
| SNDK | 合约跨平台 | bybit / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -1.13 | -0.64 | 4.98 / 4.99 | 95.0% / 88.9% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 6.32 | 5.43 | 13.01 / 11.56 | 94.7% / 74.3% |
| SPCX | 合约跨平台 | bitget / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 1.34 | 1.34 | 7.10 / 6.60 | 95.0% / 87.5% |
| SPCX | 合约跨平台 | bitget / futures / SPCXUSDT ↔ okx / futures / SPCX-USDT-SWAP | 1.30 | 1.29 | 4.71 / 6.06 | 95.0% / 87.5% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.70 | 3.35 | 13.03 / 9.71 | 94.5% / 69.2% |
| MU | 合约跨平台 | bitget / futures / MUUSDT ↔ gateio / futures / MU_USDT | 1.77 | 2.29 | 6.75 / 7.02 | 95.0% / 88.1% |
| MU | 合约跨平台 | bybit / futures / MUUSDT ↔ gateio / futures / MU_USDT | 1.35 | 1.59 | 5.83 / 5.65 | 95.0% / 88.8% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 6.46 | 6.17 | 14.78 / 12.32 | 92.8% / 76.8% |
| CRCL | 合约跨平台 | binance / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -4.75 | -3.32 | 14.11 / 10.04 | 95.0% / 88.9% |
| CRCL | 合约跨平台 | bybit / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -3.27 | -2.24 | 13.18 / 9.96 | 95.0% / 88.8% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 2.50 | 2.18 | 14.03 / 12.84 | 94.7% / 86.0% |
| MSTR | 合约跨平台 | bitget / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -1.22 | 0.65 | 9.69 / 10.40 | 95.0% / 88.9% |
| MSTR | 合约跨平台 | bitget / futures / MSTRUSDT ↔ okx / futures / MSTR-USDT-SWAP | 1.91 | 2.61 | 6.69 / 9.42 | 95.0% / 88.9% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.65 | 3.09 | 13.78 / 10.20 | 94.9% / 88.0% |
| INTC | 合约跨平台 | bitget / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | 0.00 | 0.96 | 8.01 / 15.30 | 95.0% / 86.8% |
| INTC | 合约跨平台 | bitget / futures / INTCUSDT ↔ okx / futures / INTC-USDT-SWAP | 2.47 | 3.64 | 7.21 / 14.42 | 95.0% / 86.7% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 7.10 | 6.49 | 17.42 / 15.26 | 91.7% / 70.3% |
| NVDA | 合约跨平台 | bitget / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 2.19 | 2.35 | 6.35 / 6.68 | 95.0% / 85.8% |
| NVDA | 合约跨平台 | bitget / futures / NVDAUSDT ↔ bybit / futures / NVDAUSDT | 1.31 | 2.12 | 4.35 / 5.16 | 95.0% / 85.6% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 6.59 | 6.04 | 13.25 / 11.48 | 88.3% / 66.9% |
| TSLA | 合约跨平台 | binance / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | -0.54 | -0.79 | 8.59 / 9.65 | 95.0% / 84.5% |
| TSLA | 合约跨平台 | bitget / futures / TSLAUSDT ↔ okx / futures / TSLA-USDT-SWAP | 0.79 | 0.83 | 7.77 / 9.19 | 95.0% / 83.6% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 7.05 | 6.98 | 14.22 / 12.24 | 91.2% / 56.2% |
| AAPL | 合约跨平台 | bitget / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | 3.52 | 3.60 | 9.09 / 8.70 | 95.0% / 78.5% |
| AAPL | 合约跨平台 | binance / futures / AAPLUSDT ↔ gateio / futures / AAPL_USDT | 2.95 | 2.69 | 9.20 / 8.33 | 95.0% / 88.2% |
| AAPL | 本所现货—合约 | okx / futures / AAPL-USDT-SWAP ↔ okx / spot / XAAPL-USDT | 5.23 | 4.20 | 12.59 / 10.00 | 81.9% / 50.0% |

## 可比配对的整体特征

- 跨平台合约：90 组配对同时达到两类时段的描述性门槛，其中 59 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.92 bps 变为非常规盘 2.10 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：5 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 6.33 bps 变为非常规盘 5.50 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| AAPL | binance / futures / AAPLUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| AAPL | bitget / futures / AAPLUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| AAPL | bybit / futures / AAPLUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| AAPL | gateio / futures / AAPL_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| AAPL | okx / futures / AAPL-USDT-SWAP | 0.00000 | 0.00000 | 95.0% / 88.2% |
| CRCL | binance / futures / CRCLUSDT | 0.02383 | 0.00732 | 95.0% / 88.2% |
| CRCL | bitget / futures / CRCLUSDT | 0.03320 | 0.00000 | 95.0% / 88.2% |
| CRCL | bybit / futures / CRCLUSDT | 0.01542 | 0.01067 | 95.0% / 88.2% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00800 | 95.0% / 88.2% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.01720 | 0.00968 | 95.0% / 88.2% |
| INTC | binance / futures / INTCUSDT | 0.01028 | 0.00375 | 95.0% / 88.2% |
| INTC | bitget / futures / INTCUSDT | 0.02520 | 0.00000 | 95.0% / 88.2% |
| INTC | bybit / futures / INTCUSDT | 0.01057 | 0.00472 | 95.0% / 88.2% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00304 | 0.00000 | 95.0% / 88.2% |
| MSTR | binance / futures / MSTRUSDT | 0.00859 | 0.00167 | 95.0% / 88.2% |
| MSTR | bitget / futures / MSTRUSDT | 0.02700 | 0.00000 | 95.0% / 88.2% |
| MSTR | bybit / futures / MSTRUSDT | 0.01731 | 0.00994 | 95.0% / 88.2% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00773 | 0.00000 | 95.0% / 88.2% |
| MU | binance / futures / MUUSDT | 0.00785 | 0.00000 | 95.0% / 88.2% |
| MU | bitget / futures / MUUSDT | 0.01190 | 0.00000 | 95.0% / 88.2% |
| MU | bybit / futures / MUUSDT | 0.00082 | 0.00000 | 95.0% / 88.2% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| MU | okx / futures / MU-USDT-SWAP | 0.00525 | 0.00000 | 95.0% / 88.2% |
| NVDA | binance / futures / NVDAUSDT | 0.01482 | 0.00767 | 95.0% / 88.2% |
| NVDA | bitget / futures / NVDAUSDT | 0.01860 | 0.00000 | 95.0% / 88.2% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00520 | 0.00000 | 95.0% / 88.2% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SNDK | bitget / futures / SNDKUSDT | 0.00220 | 0.00000 | 95.0% / 88.2% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SPCX | bitget / futures / SPCXUSDT | 0.00700 | 0.00000 | 95.0% / 88.2% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 95.0% / 88.2% |
| TSLA | binance / futures / TSLAUSDT | 0.00075 | 0.00000 | 95.0% / 88.2% |
| TSLA | bitget / futures / TSLAUSDT | 0.00090 | 0.00000 | 95.0% / 88.2% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 95.0% / 88.2% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 95.0% / 88.2% |

本窗口本地事件库记录：无记录。事件库不是完整性保证。

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
