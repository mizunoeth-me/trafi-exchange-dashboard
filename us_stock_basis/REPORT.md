# 美股 Top10 基差与资金费率分析

生成时间：2026-10-13T06:15:20.663433+00:00
研究窗口：2026-09-13T04:00:00+00:00 至 2026-10-13T04:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -2.54 | -2.27 | 16.68 / 11.52 | 86.8% / 59.0% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ okx / futures / SNDK-USDT-SWAP | -1.15 | -0.69 | 16.38 / 10.98 | 86.8% / 59.0% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 6.32 | 5.59 | 13.01 / 11.64 | 90.2% / 72.0% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 1.23 | 1.31 | 16.18 / 10.08 | 78.8% / 30.6% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ okx / futures / SPCX-USDT-SWAP | 1.36 | 1.35 | 15.73 / 9.34 | 78.8% / 30.6% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.70 | 3.36 | 13.03 / 9.77 | 90.0% / 67.6% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | 1.49 | 1.92 | 24.79 / 18.40 | 65.1% / 20.7% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ bitget / futures / MUUSDT | 0.37 | 1.13 | 23.89 / 17.08 | 65.1% / 20.7% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 6.46 | 6.15 | 14.78 / 12.42 | 88.4% / 75.1% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -3.68 | -2.15 | 25.41 / 19.42 | 82.4% / 45.8% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ bybit / futures / CRCLUSDT | -0.53 | 0.00 | 24.82 / 19.03 | 82.4% / 45.8% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 2.50 | 1.25 | 14.03 / 12.96 | 90.2% / 83.6% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bitget / futures / MSTRUSDT | -1.94 | -2.31 | 23.34 / 19.75 | 80.4% / 54.5% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ binance / futures / MSTRUSDT | 0.00 | 0.65 | 23.38 / 18.88 | 80.4% / 54.5% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.65 | 3.07 | 13.78 / 10.31 | 90.4% / 84.9% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | 2.12 | 1.67 | 12.78 / 10.72 | 53.0% / 21.0% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ bybit / futures / NVDAUSDT | 1.32 | 1.70 | 12.86 / 10.20 | 53.0% / 20.9% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 6.59 | 6.11 | 13.25 / 11.56 | 84.1% / 65.5% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bitget / futures / INTCUSDT | -0.82 | 0.00 | 33.73 / 24.23 | 52.7% / 21.2% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ binance / futures / INTCUSDT | 0.86 | 2.67 | 34.57 / 22.68 | 52.7% / 21.2% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 7.10 | 6.50 | 17.42 / 15.34 | 87.4% / 69.3% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ binance / futures / TSLAUSDT | 1.40 | 1.64 | 18.11 / 11.07 | 59.0% / 17.8% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bitget / futures / TSLAUSDT | 0.52 | 0.00 | 18.93 / 12.55 | 59.0% / 17.6% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 7.05 | 6.88 | 14.22 / 12.08 | 86.9% / 55.3% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bitget / futures / HOODUSDT | -1.84 | -1.81 | 37.94 / 22.39 | 48.9% / 17.5% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 1.78 | 1.79 | 38.15 / 22.77 | 49.0% / 17.8% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 8.03 | 7.07 | 21.02 / 16.72 | 83.8% / 54.2% |

## 可比配对的整体特征

- 跨平台合约：99 组配对同时达到两类时段的描述性门槛，其中 51 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 2.28 bps 变为非常规盘 2.17 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：4 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 5.80 bps 变为非常规盘 4.97 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.02483 | 0.01005 | 90.5% / 85.1% |
| CRCL | binance / futures / CRCLUSDT | 0.02383 | 0.00744 | 90.5% / 85.1% |
| CRCL | bitget / futures / CRCLUSDT | 0.03320 | 0.00000 | 90.5% / 85.1% |
| CRCL | bybit / futures / CRCLUSDT | 0.01542 | 0.01095 | 90.5% / 85.1% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.01213 | 0.01071 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.01760 | 0.01280 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.01720 | 0.01312 | 90.5% / 85.1% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| HOOD | binance / futures / HOODUSDT | 0.00147 | 0.00000 | 90.5% / 85.1% |
| HOOD | bitget / futures / HOODUSDT | 0.01380 | 0.00000 | 90.5% / 85.1% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00593 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.01520 | 0.00320 | 100.0% / 99.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 90.5% / 85.1% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | binance / futures / INTCUSDT | 0.01184 | 0.00462 | 100.0% / 99.3% |
| INTC | bitget / futures / INTCUSDT | 0.02520 | 0.00000 | 90.5% / 85.1% |
| INTC | bybit / futures / INTCUSDT | 0.01057 | 0.00486 | 90.5% / 85.1% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| INTC | hyperliquid / futures / xyz:INTC | 0.01099 | 0.00737 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.01280 | 0.00880 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00304 | 0.00072 | 90.5% / 85.1% |
| MSTR | aster / futures / MSTRUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| MSTR | binance / futures / MSTRUSDT | 0.00859 | 0.00272 | 90.5% / 85.1% |
| MSTR | bitget / futures / MSTRUSDT | 0.02700 | 0.00000 | 90.5% / 85.1% |
| MSTR | bybit / futures / MSTRUSDT | 0.01731 | 0.01089 | 90.5% / 85.1% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.01259 | 0.01094 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00773 | 0.00095 | 90.5% / 85.1% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 90.5% / 85.1% |
| MU | aster / futures / MUUSDT | 0.00540 | 0.00000 | 90.5% / 85.1% |
| MU | binance / futures / MUUSDT | 0.00785 | 0.00000 | 90.5% / 85.1% |
| MU | bitget / futures / MUUSDT | 0.01190 | 0.00000 | 90.5% / 85.1% |
| MU | bybit / futures / MUUSDT | 0.00082 | 0.00000 | 90.5% / 85.1% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| MU | hyperliquid / futures / xyz:MU | 0.00500 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00525 | 0.00000 | 90.5% / 85.1% |
| NVDA | aster / futures / NVDAUSDT | 0.01010 | 0.00222 | 90.5% / 85.1% |
| NVDA | binance / futures / NVDAUSDT | 0.01482 | 0.00890 | 90.5% / 85.1% |
| NVDA | bitget / futures / NVDAUSDT | 0.01860 | 0.00000 | 90.5% / 85.1% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00520 | 0.00000 | 90.5% / 85.1% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SKHY | lighter / futures / SKHY | -0.00400 | 0.00320 | 100.0% / 99.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SNDK | aster / futures / SNDKUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SNDK | binance / futures / SNDKUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SNDK | bitget / futures / SNDKUSDT | 0.00220 | 0.00000 | 90.5% / 85.1% |
| SNDK | bybit / futures / SNDKUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SPCX | aster / futures / SPCXUSD1 | 0.00000 | 0.00000 | 95.2% / 96.3% |
| SPCX | aster / futures / SPCXUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SPCX | binance / futures / SPCXUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SPCX | bitget / futures / SPCXUSDT | 0.00700 | 0.00000 | 90.5% / 85.1% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00000 | 0.00000 | 90.5% / 85.1% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| TSLA | binance / futures / TSLAUSDT | 0.00075 | 0.00000 | 90.5% / 85.1% |
| TSLA | bitget / futures / TSLAUSDT | 0.00090 | 0.00000 | 90.5% / 85.1% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 90.5% / 85.1% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.3% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 90.5% / 85.1% |

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
- `data/basis.sqlite3`：K线、结算、实时盘口缓存；`data/raw/*.json.gz`：带请求参数与采集时间的公共接口证据。
- 看板：“美股基差与费率”页，支持选股、选平台对、7/30日、时段及可比/参考筛选，页面可导出所选配对的原始明细。
- 运行：`python3 -m analysis.us_stock_basis.collect`（断点续采），`python3 -m analysis.us_stock_basis.build`（构建），`python3 -m analysis.us_stock_basis.live --watch`（分钟盘口）。
