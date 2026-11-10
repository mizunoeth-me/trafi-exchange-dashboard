# 美股 Top10 基差与资金费率分析

生成时间：2026-11-10T01:51:52.535333+00:00
研究窗口：2026-10-10T04:00:00+00:00 至 2026-11-09T05:00:00+00:00（右端不含）。

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
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ gateio / futures / SNDK_USDT | -1.58 | -0.80 | 30.15 / 22.72 | 91.3% / 66.9% |
| SNDK | 合约跨平台 | aster / futures / SNDKUSDT ↔ binance / futures / SNDKUSDT | 0.63 | 0.71 | 29.31 / 21.86 | 91.3% / 66.9% |
| SNDK | 本所现货—合约 | okx / futures / SNDK-USDT-SWAP ↔ okx / spot / XSNDK-USDT | -0.78 | -1.72 | 12.02 / 11.68 | 99.9% / 92.3% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ gateio / futures / SPCX_USDT | -1.27 | -1.28 | 20.37 / 15.31 | 88.2% / 50.4% |
| SPCX | 合约跨平台 | aster / futures / SPCXUSDT ↔ bybit / futures / SPCXUSDT | 0.67 | 0.69 | 20.86 / 14.91 | 88.2% / 50.4% |
| SPCX | 本所现货—合约 | okx / futures / SPCX-USDT-SWAP ↔ okx / spot / XSPCX-USDT | 3.94 | 3.52 | 11.52 / 9.49 | 99.4% / 94.3% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ gateio / futures / MU_USDT | -1.53 | -1.36 | 23.90 / 22.09 | 84.2% / 48.8% |
| MU | 合约跨平台 | aster / futures / MUUSDT ↔ binance / futures / MUUSDT | 0.53 | 0.12 | 23.92 / 21.68 | 84.2% / 48.8% |
| MU | 本所现货—合约 | okx / futures / MU-USDT-SWAP ↔ okx / spot / XMU-USDT | 5.15 | 4.08 | 13.81 / 12.15 | 99.2% / 87.6% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ gateio / futures / CRCL_USDT | -2.45 | -1.19 | 26.31 / 20.57 | 86.9% / 41.5% |
| CRCL | 合约跨平台 | aster / futures / CRCLUSDT ↔ okx / futures / CRCL-USDT-SWAP | -1.18 | 0.00 | 25.92 / 20.57 | 86.9% / 41.5% |
| CRCL | 本所现货—合约 | okx / futures / CRCL-USDT-SWAP ↔ okx / spot / XCRCL-USDT | 0.00 | -1.18 | 18.96 / 19.50 | 100.0% / 96.3% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bitget / futures / MSTRUSDT | -0.78 | -0.73 | 29.76 / 20.81 | 86.4% / 52.2% |
| MSTR | 合约跨平台 | aster / futures / MSTRUSDT ↔ bybit / futures / MSTRUSDT | 1.30 | 1.43 | 30.26 / 20.76 | 86.4% / 52.2% |
| MSTR | 本所现货—合约 | okx / futures / MSTR-USDT-SWAP ↔ okx / spot / XMSTR-USDT | 3.65 | 2.08 | 11.76 / 10.30 | 100.0% / 98.7% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ gateio / futures / NVDA_USDT | -2.76 | -1.97 | 18.08 / 14.93 | 65.6% / 33.0% |
| NVDA | 合约跨平台 | aster / futures / NVDAUSDT ↔ bybit / futures / NVDAUSDT | 0.00 | 0.48 | 18.09 / 14.93 | 65.6% / 33.0% |
| NVDA | 本所现货—合约 | okx / futures / NVDA-USDT-SWAP ↔ okx / spot / XNVDA-USDT | 5.29 | 4.16 | 12.97 / 10.42 | 95.4% / 86.8% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ gateio / futures / INTC_USDT | -3.01 | -2.30 | 29.58 / 27.34 | 79.7% / 39.4% |
| INTC | 合约跨平台 | aster / futures / INTCUSDT ↔ okx / futures / INTC-USDT-SWAP | 0.00 | 0.00 | 29.01 / 26.93 | 79.7% / 39.4% |
| INTC | 本所现货—合约 | okx / futures / INTC-USDT-SWAP ↔ okx / spot / XINTC-USDT | 3.99 | 2.25 | 22.64 / 21.49 | 97.5% / 87.3% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ gateio / futures / TSLA_USDT | 2.93 | 2.54 | 15.67 / 13.39 | 84.0% / 39.9% |
| TSLA | 合约跨平台 | aster / futures / TSLAUSDT ↔ bybit / futures / TSLAUSDT | 2.45 | 1.93 | 15.69 / 12.92 | 84.0% / 39.9% |
| TSLA | 本所现货—合约 | okx / futures / TSLA-USDT-SWAP ↔ okx / spot / XTSLA-USDT | 4.46 | 4.71 | 13.66 / 10.65 | 95.4% / 72.2% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ gateio / futures / HOOD_USDT | 3.27 | 3.18 | 26.14 / 23.38 | 78.8% / 23.3% |
| HOOD | 合约跨平台 | aster / futures / HOODUSDT ↔ bybit / futures / HOODUSDT | 2.38 | 2.89 | 26.28 / 22.61 | 78.8% / 23.1% |
| HOOD | 本所现货—合约 | okx / futures / HOOD-USDT-SWAP ↔ okx / spot / XHOOD-USDT | 5.83 | 5.22 | 20.61 / 16.04 | 92.6% / 60.0% |

## 可比配对的整体特征

- 跨平台合约：99 组配对同时达到两类时段的描述性门槛，其中 49 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 1.98 bps 变为非常规盘 2.02 bps；这是本窗口的描述性观察，不是显著性或因果结论。
- 同平台现货—合约：8 组配对同时达到两类时段的描述性门槛，其中 0 组在非常规盘的绝对基差中位数更大。逐配对等权中位数由常规盘 4.90 bps 变为非常规盘 4.59 bps；这是本窗口的描述性观察，不是显著性或因果结论。

## 资金费率的交易时段对比

用连续实际结算间隔推断费率适用区间，并以半小时分配，正确拆分09:30开盘边界。以下为8h等效费率中位数（百分比），不是预测值；覆盖不完整的累计费率不能作同窗口净成本比较。

| 标的 | 平台/合约 | 常规盘8h等效中位数 % | 非常规盘8h等效中位数 % | 覆盖率 常规/非常规 |
| --- | --- | ---: | ---: | --- |
| CRCL | aster / futures / CRCLUSDT | 0.00240 | 0.00000 | 100.0% / 99.2% |
| CRCL | binance / futures / CRCLUSDT | 0.00482 | 0.00000 | 100.0% / 99.2% |
| CRCL | bitget / futures / CRCLUSDT | 0.01400 | 0.00000 | 100.0% / 99.2% |
| CRCL | bybit / futures / CRCLUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| CRCL | gateio / futures / CRCL_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| CRCL | hyperliquid / futures / xyz:CRCL | 0.00582 | 0.00500 | 100.0% / 99.8% |
| CRCL | lighter / futures / CRCL | 0.00960 | 0.00320 | 100.0% / 99.8% |
| CRCL | okx / futures / CRCL-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.2% |
| HOOD | aster / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| HOOD | binance / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| HOOD | bitget / futures / HOODUSDT | 0.00190 | 0.00000 | 100.0% / 99.2% |
| HOOD | bybit / futures / HOODUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| HOOD | gateio / futures / HOOD_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| HOOD | hyperliquid / futures / xyz:HOOD | 0.00500 | 0.00500 | 100.0% / 99.8% |
| HOOD | lighter / futures / HOOD | 0.00320 | 0.00320 | 100.0% / 99.8% |
| HOOD | okx / futures / HOOD-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.2% |
| INTC | aster / futures / INTCUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| INTC | binance / futures / INTCUSDT | 0.01122 | 0.00091 | 100.0% / 99.2% |
| INTC | bitget / futures / INTCUSDT | 0.01780 | 0.00000 | 100.0% / 99.2% |
| INTC | bybit / futures / INTCUSDT | 0.01108 | 0.00552 | 100.0% / 99.2% |
| INTC | gateio / futures / INTC_USDT | 0.00210 | 0.00030 | 100.0% / 99.2% |
| INTC | hyperliquid / futures / xyz:INTC | 0.00936 | 0.00635 | 100.0% / 99.8% |
| INTC | lighter / futures / INTC | 0.01480 | 0.00960 | 100.0% / 99.8% |
| INTC | okx / futures / INTC-USDT-SWAP | 0.00693 | 0.00248 | 100.0% / 99.2% |
| MSTR | aster / futures / MSTRUSDT | 0.00016 | 0.00000 | 100.0% / 99.2% |
| MSTR | binance / futures / MSTRUSDT | 0.00181 | 0.00000 | 100.0% / 99.2% |
| MSTR | bitget / futures / MSTRUSDT | 0.02530 | 0.00000 | 100.0% / 99.2% |
| MSTR | bybit / futures / MSTRUSDT | 0.00316 | 0.00000 | 100.0% / 99.2% |
| MSTR | gateio / futures / MSTR_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| MSTR | hyperliquid / futures / xyz:MSTR | 0.00875 | 0.00909 | 100.0% / 99.8% |
| MSTR | lighter / futures / MSTR | 0.00320 | 0.00320 | 100.0% / 99.8% |
| MSTR | okx / futures / MSTR-USDT-SWAP | 0.00112 | 0.00000 | 100.0% / 99.2% |
| MU | aster / futures / MUUSD1 | 0.00000 | 0.00000 | 96.9% / 99.2% |
| MU | aster / futures / MUUSDT | 0.00161 | 0.00000 | 96.9% / 99.2% |
| MU | binance / futures / MUUSDT | 0.00691 | 0.00000 | 96.9% / 99.2% |
| MU | bitget / futures / MUUSDT | 0.01470 | 0.00000 | 100.0% / 99.2% |
| MU | bybit / futures / MUUSDT | 0.00361 | 0.00000 | 100.0% / 99.2% |
| MU | gateio / futures / MU_USDT | 0.00030 | 0.00000 | 100.0% / 99.2% |
| MU | hyperliquid / futures / xyz:MU | 0.00684 | 0.00500 | 100.0% / 99.8% |
| MU | lighter / futures / MU | 0.00480 | 0.00320 | 100.0% / 99.8% |
| MU | okx / futures / MU-USDT-SWAP | 0.00605 | 0.00190 | 100.0% / 99.2% |
| NVDA | aster / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| NVDA | binance / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| NVDA | bitget / futures / NVDAUSDT | 0.00140 | 0.00000 | 100.0% / 99.2% |
| NVDA | bybit / futures / NVDAUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| NVDA | gateio / futures / NVDA_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| NVDA | hyperliquid / futures / xyz:NVDA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| NVDA | lighter / futures / NVDA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| NVDA | okx / futures / NVDA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SKHY | aster / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SKHY | binance / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SKHY | bitget / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SKHY | bybit / futures / SKHYUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SKHY | gateio / futures / SKHY_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SKHY | lighter / futures / SKHY | 0.00320 | 0.00320 | 100.0% / 99.8% |
| SKHY | okx / futures / SKHY-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SNDK | aster / futures / SNDKUSD1 | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SNDK | aster / futures / SNDKUSDT | 0.00618 | 0.00000 | 100.0% / 99.2% |
| SNDK | binance / futures / SNDKUSDT | 0.00928 | 0.00000 | 100.0% / 99.2% |
| SNDK | bitget / futures / SNDKUSDT | 0.02270 | 0.00060 | 100.0% / 99.2% |
| SNDK | bybit / futures / SNDKUSDT | 0.00994 | 0.00000 | 100.0% / 99.2% |
| SNDK | gateio / futures / SNDK_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SNDK | hyperliquid / futures / xyz:SNDK | 0.01004 | 0.00925 | 100.0% / 99.8% |
| SNDK | lighter / futures / SNDK | 0.01680 | 0.01520 | 100.0% / 99.8% |
| SNDK | okx / futures / SNDK-USDT-SWAP | 0.01134 | 0.00305 | 100.0% / 99.2% |
| SPCX | aster / futures / SPCXUSD1 | 0.01337 | 0.00000 | 100.0% / 99.2% |
| SPCX | aster / futures / SPCXUSDT | 0.01210 | 0.00000 | 100.0% / 99.2% |
| SPCX | binance / futures / SPCXUSD1 | 0.00034 | 0.00000 | 100.0% / 99.2% |
| SPCX | binance / futures / SPCXUSDT | 0.01798 | 0.00607 | 100.0% / 99.2% |
| SPCX | bitget / futures / SPCXUSDT | 0.01870 | 0.00120 | 100.0% / 99.2% |
| SPCX | bybit / futures / SPCXUSDT | 0.00300 | 0.00000 | 100.0% / 99.2% |
| SPCX | gateio / futures / SPCX_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| SPCX | hyperliquid / futures / xyz:SPCX | 0.00763 | 0.00500 | 100.0% / 99.8% |
| SPCX | lighter / futures / SPCX | 0.01520 | 0.00320 | 100.0% / 99.8% |
| SPCX | okx / futures / SPCX-USDT-SWAP | 0.01095 | 0.00000 | 100.0% / 99.2% |
| TSLA | aster / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| TSLA | binance / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| TSLA | bitget / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| TSLA | bybit / futures / TSLAUSDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| TSLA | gateio / futures / TSLA_USDT | 0.00000 | 0.00000 | 100.0% / 99.2% |
| TSLA | hyperliquid / futures / xyz:TSLA | 0.00500 | 0.00500 | 100.0% / 99.8% |
| TSLA | lighter / futures / TSLA | 0.00320 | 0.00320 | 100.0% / 99.8% |
| TSLA | okx / futures / TSLA-USDT-SWAP | 0.00000 | 0.00000 | 100.0% / 99.2% |

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
