# 美股 Top10 基差与资金费率分析

生成时间：2026-11-18T13:58:06.193561+00:00
研究窗口：2026-10-19T04:00:00+00:00 至 2026-11-18T05:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ okx / futures / SNDK-USDT-SWAP | 0.07 | 0.37 | 36.19 / 25.94 | 86.9% / 64.5% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -0.73 | 0.24 | 36.43 / 26.13 | 86.9% / 64.5% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | 0.00 | -1.51 | 13.10 / 11.80 | 99.9% / 96.3% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSD1 ↔ binance / futures / SPCXUSD1 | -5.52 | -3.41 | 19.35 / 19.25 | 98.8% / 70.9% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | 0.00 | 0.00 | 22.73 / 17.05 | 86.0% / 57.0% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 4.85 | 5.04 | 13.59 / 11.54 | 99.4% / 96.4% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | -0.74 | -0.99 | 28.77 / 24.31 | 81.0% / 54.2% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ bitget / futures / MUUSDT | 1.15 | 1.19 | 28.40 / 23.58 | 81.0% / 54.2% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 5.40 | 5.06 | 15.42 / 14.11 | 99.2% / 91.0% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -1.47 | 0.00 | 28.59 / 23.89 | 81.2% / 42.4% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ bitget / futures / CRCLUSDT | 0.00 | 1.17 | 28.90 / 23.78 | 81.2% / 42.3% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | -1.16 | -1.32 | 17.60 / 16.17 | 99.9% / 97.6% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ gateio / futures / MSTR_USDT | -2.16 | 0.00 | 32.05 / 23.30 | 85.8% / 59.0% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bybit / futures / MSTRUSDT | 0.82 | 1.51 | 33.40 / 22.57 | 85.8% / 59.0% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 4.27 | 4.11 | 12.92 / 15.16 | 99.9% / 98.9% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ bybit / futures / NVDAUSDT | 0.00 | 0.59 | 19.91 / 18.61 | 72.4% / 47.7% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -3.22 | -2.38 | 19.98 / 18.70 | 72.4% / 47.7% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 3.96 | 3.77 | 12.95 / 11.37 | 96.6% / 92.9% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | -2.16 | -2.20 | 29.67 / 27.66 | 75.8% / 44.6% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ bybit / futures / INTCUSDT | 0.00 | -1.07 | 29.08 / 26.86 | 75.8% / 44.6% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 3.72 | 2.24 | 22.35 / 22.02 | 97.8% / 92.1% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bybit / futures / TSLAUSDT | 3.76 | 3.22 | 17.66 / 14.81 | 82.6% / 37.8% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | 3.71 | 3.25 | 17.55 / 14.85 | 82.6% / 37.8% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 4.11 | 4.64 | 14.55 / 11.72 | 94.7% / 73.1% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ gateio / futures / HOOD_USDT | 4.35 | 5.26 | 26.86 / 26.60 | 81.4% / 26.9% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 2.33 | 3.47 | 26.35 / 24.29 | 81.4% / 26.9% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 6.25 | 5.72 | 22.04 / 17.81 | 92.3% / 64.7% |

## 可比配对的整体特征

- 跨平台合约：100 组配对同时达到两类时段的描述性门槛，其中 55 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 2.02 bps 变为非常规盘 2.04 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：8 组配对同时达到两类时段的描述性门槛，其中 2 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 4.91 bps 变为非常规盘 4.83 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.00785 | 0.00000 | 100.0% / 99.1% |
| CRCL | binance / futures / CRCLUSDT | 0.00935 | 0.00192 | 100.0% / 99.1% |
| CRCL | bitget / futures / CRCLUSDT | 0.01345 | 0.00000 | 100.0% / 99.1% |
| CRCL | bybit / futures / CRCLUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.00603 | 0.00500 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.01280 | 0.00960 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00743 | 0.00120 | 100.0% / 99.1% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | bitget / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00500 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.00320 | 0.00320 | 100.0% / 99.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.1% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| INTC | binance / futures / INTCUSDT | 0.00791 | 0.00102 | 100.0% / 99.1% |
| INTC | bitget / futures / INTCUSDT | 0.01060 | 0.00000 | 100.0% / 99.1% |
| INTC | bybit / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| INTC | gateio / futures / INTC_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00801 | 0.00566 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.01280 | 0.01040 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00555 | 0.00005 | 100.0% / 99.1% |
| MSTR | aster / futures / MSTRUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| MSTR | binance / futures / MSTRUSDT | 0.00783 | 0.00000 | 100.0% / 99.1% |
| MSTR | bitget / futures / MSTRUSDT | 0.01980 | 0.00770 | 100.0% / 99.1% |
| MSTR | bybit / futures / MSTRUSDT | 0.00121 | 0.00000 | 100.0% / 99.1% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00736 | 0.00706 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00196 | 0.00000 | 100.0% / 99.1% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 100.0% / 99.1% |
| MU | aster / futures / MUUSDT | 0.00030 | 0.00000 | 100.0% / 99.1% |
| MU | binance / futures / MUUSDT | 0.00730 | 0.00000 | 100.0% / 99.1% |
| MU | bitget / futures / MUUSDT | 0.01000 | 0.00000 | 100.0% / 99.1% |
| MU | bybit / futures / MUUSDT | 0.00007 | 0.00000 | 100.0% / 99.1% |
| MU | gateio / futures / MU_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| MU | hyperliquid / futures / xyz:MU | 0.00544 | 0.00507 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00400 | 0.00640 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00190 | 0.00000 | 100.0% / 99.1% |
| NVDA | aster / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | binance / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | bitget / futures / NVDAUSDT | 0.00940 | 0.00000 | 100.0% / 99.1% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.01040 | 0.00400 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00041 | 0.00000 | 100.0% / 99.1% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SKHY | lighter / futures / SKHY | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SNDK | aster / futures / SNDKUSD1 | 0.00034 | 0.00000 | 100.0% / 99.1% |
| SNDK | aster / futures / SNDKUSDT | 0.01174 | 0.00000 | 100.0% / 99.1% |
| SNDK | binance / futures / SNDKUSDT | 0.01165 | 0.00369 | 100.0% / 99.1% |
| SNDK | bitget / futures / SNDKUSDT | 0.01830 | 0.01170 | 100.0% / 99.1% |
| SNDK | bybit / futures / SNDKUSDT | 0.00744 | 0.00000 | 100.0% / 99.1% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.00890 | 0.01043 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.01600 | 0.01680 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.00924 | 0.00095 | 100.0% / 99.1% |
| SPCX | aster / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | aster / futures / SPCXUSDT | 0.00664 | 0.00000 | 100.0% / 99.1% |
| SPCX | binance / futures / SPCXUSD1 | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | binance / futures / SPCXUSDT | 0.01142 | 0.00430 | 100.0% / 99.1% |
| SPCX | bitget / futures / SPCXUSDT | 0.01000 | 0.00000 | 100.0% / 99.1% |
| SPCX | bybit / futures / SPCXUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00500 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.01080 | 0.00320 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.00393 | 0.00000 | 100.0% / 99.1% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | binance / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | bitget / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.1% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.1% |

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
