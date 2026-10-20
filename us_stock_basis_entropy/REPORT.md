# Entropy 已上市美股跨所／期现基差研究

研究周：订单与成交为 **2026-10-11 00:00 至 10-18 00:00 UTC**（连续七天）；套利筛查只用 **2026-10-12 至 10-16 美东 09:30–16:00 常规盘**。生成日期：2026-10-20。`io:ANTH` 等 Pre-IPO、盘前、盘后均不纳入机会统计。

## 结论

1. **可研究，不等于已证实净套利。** NAS 有 Entropy `io:SNDK / io:NBIS / io:IONQ / io:GPRO`、Binance/OKX 同底层永续的同期历史顶档；前三者中的 SNDK、NBIS、GPRO 还有 Binance bStock 现货。按接收时间、报价年龄、盘口容量和 USDC/USDT 换汇过滤后，SNDK 与 NBIS 的跨所合约腿具有较好的同步覆盖，出现少量可进一步前向验证的双向毛价差信号。没有足够证据把它们直接称为可执行的净套利。
2. **货币换算是决定性的。** Entropy 股票永续以 USDC 报价，CEX 对照腿以 USDT 报价。研究周 Binance `USDCUSDT` 中间价溢价中位数约 **10.15 bps**。若错把二者当 1:1，SNDK 对 Binance 永续的中位基差约 **−12.66 bps**；用同期 USDC/USDT 盘口换算后约 **−2.63 bps**。所有下表数值均已换算，双向毛价差使用 FX 买一／卖一，不只用中间价。
3. **期现更弱。** SNDK 对 Binance `SNDKB` 现货同步覆盖 96.38%，但可直接建仓的“卖 Entropy 永续、买 bStock”在顶档金额 ≥$100 且毛价差 ≥10 bps 时仅出现 **601 个采样秒**；开盘前 5 分钟排除后，≥20 bps 仅 **19 秒**。在事后固定 30 分钟平仓的敏感性检验中，该方向毛收益中位数 **5.64 bps**，低于假设的 12 bps 往返成本。NBIS 方向更弱；GPRO 现货同步覆盖仅 4.09%，不宜下机会结论。bStock 是代币化证券，不是美国证券交易所原生股票。
4. **BSC 直连池未显示可规模化机会。** 对官方 SNDKB 合约与 PancakeSwap V3 `SNDKB/USDT` 池，按历史区块每 15 分钟调用 QuoterV2，129/130 个目标时点有两腿可比价格，$100、$1,000 等值各 129 条双向报价。$100 档 DEX 买卖价差中位数 **56.46 bps**；“卖 Entropy／买 DEX”仅 9 次正毛价差，最大 **7.02 bps**。$1,000 档 DEX 买卖价差中位数 **114.08 bps**，两个方向 **均无正毛价差**。这是 15 分钟抽样，不能排除抽样间短暂事件；也未计 gas、链上确认或跨平台出入金。
5. **OKX 现货缺同期盘口。** NAS 有 OKX 股票永续，但未找到 `XSNDK-USDT` 等同周现货 book ticker；旧 SQLite 的 K 线不能代替它。故 OKX 期现腿标为“缺数据”，不能解释为“没有机会”。

## 一周订单与成交

以下为 Entropy 四个已上市美股合约的七个 UTC 日总计。盘口更新是历史 book ticker 事件数，不是委托单数；“更新分钟”表示该分钟至少有一次更新，不等于每秒都有可执行盘口。价差与双边较小顶档金额为七个日度中位数的中位数。

| 标的 | 顶档更新 | 更新分钟占比 | 顶档价差中位数 | 双边较小顶档金额中位数 | 成交笔数 | 成交名义额 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| SNDK | 2,606,009 | 100% | 0.71 bps | $500 | 1,103,369 | $349.98m |
| NBIS | 1,142,436 | 100% | 2.39 bps | $149 | 167,987 | $34.02m |
| IONQ | 226,740 | 95% | 16.21 bps | $149 | 9,848 | $1.17m |
| GPRO | 186,184 | 81% | 25.62 bps | $148 | 4,497 | $0.56m |

SNDK 最活跃；10 月 12–16 日常规盘累计 291,678 笔成交，七日每日记录见 [`entropy_order_7d.csv`](entropy_order_7d.csv)。GPRO 的价差和稀疏报价说明单看偶发高 bps 会高估策略质量。

## 常规盘双向基差

方向定义：`买 Entropy / 卖对侧` 为 `对侧 bid − Entropy ask × USDCUSDT ask`；`卖 Entropy / 买对侧` 为 `Entropy bid × USDCUSDT bid − 对侧 ask`。两个方向均除以买入腿价格，以 bps 表示；mid 基差另列。候选秒数要求同期两腿及 FX 报价在**历史接收时刻之前**已收到、接收年龄 ≤2 秒、来源年龄 ≤5 秒、买卖价有效，且顶档与 FX 转换的较小金额 ≥$100。以下 ≥10 bps 数是 1 秒网格的**毛价差秒数**，不是独立交易次数，也未扣费用。≥20 bps 列排除了每日 09:30–09:34 美东开盘段。

| 标的 | 对照腿 | 同步覆盖 | mid 中位基差 | 买 Entropy ≥10 bps | 卖 Entropy ≥10 bps | ≥20 bps 且排除开盘 5 分钟 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| SNDK | Binance 永续 | 99.90% | −2.63 | 1,513 秒 | 169 秒 | 47 秒 |
| SNDK | OKX 永续 | 99.91% | −3.89 | 2,254 秒 | 110 秒 | 51 秒 |
| SNDK | Binance bStock 现货 | 96.38% | +2.64 | 147 秒* | 601 秒 | 27 秒 |
| NBIS | Binance 永续 | 95.18% | −0.84 | 439 秒 | 381 秒 | 43 秒 |
| NBIS | OKX 永续 | 92.23% | −3.40 | 955 秒 | 140 秒 | 22 秒 |
| NBIS | Binance bStock 现货 | 85.44% | +5.60 | 21 秒* | 533 秒 | 28 秒 |
| IONQ | Binance / OKX 永续 | 38.88% / 39.38% | −9.42 / −10.07 | 292 / 273 秒 | 48 / 116 秒 | 23 / 47 秒 |
| GPRO | Binance / OKX 永续 | 14.61% / 11.68% | +1.10 / +2.05 | 1,108 / 127 秒 | 1,156 / 163 秒 | 729 / 87 秒 |
| GPRO | Binance bStock 现货 | 4.09% | +3.03 | 29 秒* | 368 秒 | 30 秒 |

`*` 现货腿的“买 Entropy／卖现货”需要预先持有 bStock 或有可核验借券与交割安排，不能按无库存的普通期现套利处理。GPRO、IONQ 的同步覆盖不足；GPRO 的高毛价差更可能受到稀疏盘口、宽价差及小容量影响，不能按秒数排序为首选策略。完整逐日和逐秒序列见 [`pair_daily.csv`](pair_daily.csv)、[`pair_week_summary.csv`](pair_week_summary.csv) 和 `series/*.parquet`。

### 固定持有期敏感性，不是交易回测

为检验价差是否只是瞬时开仓幻觉，从每个 5 分钟桶选最早一个 ≥10 bps、≥$100 的候选秒，排除开盘前 5 分钟；若 30 分钟后两腿仍有有效顶档且平仓侧顶档 ≥$100，按反向 bid/ask 和同期 FX 计算事后毛收益。没有模拟下单延迟、排队、冲击、多档成交、真实手续费或资金费率；“12 bps 成本”仅作统一敏感性阈值，**不是该账户实收费率**。

| 配对与方向 | 合格入场桶 | 30 分钟毛收益中位数 | 毛收益 >12 bps 的比例 |
| --- | ---: | ---: | ---: |
| SNDK／Binance 永续：卖 Entropy | 22 | 14.66 bps | 68.2% |
| SNDK／OKX 永续：卖 Entropy | 26 | 17.54 bps | 88.5% |
| SNDK／Binance 永续：买 Entropy | 108 | 6.04 bps | 10.2% |
| SNDK／OKX 永续：买 Entropy | 139 | 5.25 bps | 7.9% |
| SNDK／Binance 现货：卖 Entropy | 37 | 5.64 bps | 24.3% |
| NBIS／Binance 现货：卖 Entropy | 22 | 1.44 bps | 4.5% |

这提示优先前向验证 **SNDK 合约跨所的“卖 Entropy、买 Binance/OKX 永续”价差回落**，但只有在具体账户费率、FX 对冲、下单延迟、双腿成交和资金费率都过关时才可能成为策略。结果有信号选择偏差；不同入场桶的持仓会重叠，不能把表中比例当作独立交易胜率。原始样本见 `fixed_horizon_convergence.csv`。

## BSC 历史双向报价

池：PancakeSwap V3 `0xE4B5403f5103b02d1E8193B0D7D76D49F3F8ad77`，核对历史区块 token0 为官方 `SNDKB`、token1 为 BSC USDT、池费率为 2,500／1,000,000（0.25%）。按 Entropy 同期每股价格换算 $100 和 $1,000 的 SNDKB 数量，使用 QuoterV2 的精确输入／精确输出在 **采样时刻至少提前 5 秒的历史区块**上读出卖出现货所得和买入现货所需 USDT。129 个有效时点的 `uiMultiplier()` 均为 1；没有使用恒定乘积公式臆测 V3 深度。Quoter 报价已含池费与池内价格冲击，未含 gas、MEV、提交至上链延迟或交易失败风险。

| 现货名义额 | 有效／目标样本 | DEX 双向价差中位数 | 卖 Entropy／买 DEX 正毛价差 | 买 Entropy／卖 DEX 正毛价差 |
| --- | ---: | ---: | ---: | ---: |
| $100 | 129／130 | 56.46 bps | 9 次；峰值 7.02 bps | 1 次；峰值 13.85 bps* |
| $1,000 | 129／130 | 114.08 bps | 0 次 | 0 次 |

`*` 该方向还要先有 SNDKB 库存或借券路径。$100 可建仓方向的最高毛价差仅 7.02 bps，且仍需平仓和支付其他费用；**未发现足以支持可规模化期现套利的证据**。15 分钟采样不等于连续监测，不能断言所有秒级事件都不存在。原始结果及区块号在 [`bsc_sndkb_pancake_v3_15min.csv`](bsc_sndkb_pancake_v3_15min.csv)。NBISB、GPROB 在旧 DEX 池候选清单中未有同周可核验的直连 USDT 路径，本次不凭跨币种间接池做未验证报价。

## 资金费率、费用与风险边界

- Entropy 官方 `fundingHistory` 在五个常规盘所在的完整 UTC 日内各有 120 次每小时结算；SNDK、NBIS、IONQ、GPRO 的**事后累计费率**分别约 19.73、45.63、37.86、5.60 bps。旧 SQLite 中 SNDK Binance、OKX 永续各 15 次结算的事后累计约 18.54、21.16 bps。这些是整个五日的已结算总和，**不能直接扣在 30 分钟案例上，也不能在事前预知**。逐笔见 `funding_events.csv`。
- Entropy [官方费用说明](https://docs.entropy.io/equity-perp-mechanics/fees.md)列 HIP-3 基础 taker 9 bps；Growth Mode 启用时再乘 0.1。当前官方资产目录和 `metaAndAssetCtxs(dex=io)` 快照均显示研究标的启用 Growth Mode，且所示最后费率配置变更早于研究周；但账户等级、平台促销、开平仓角色及当周历史配置仍须逐笔核验。Binance TradFi 永续与 bStock 的优惠亦随账户和活动变化，故本报告不把统一 12 bps 当实收成本。
- 跨所永续并没有到期交割强迫基差收敛；双腿抵押币种、保证金隔离、强平、资金费率、USDC/USDT 换汇及多平台延迟都会改变收益。bStock 亦非原生美股，存在发行人、托管、乘数、赎回、地区资格限制；[Binance 官方条款](https://www.binance.com/en/support/faq/detail/f0c03cd6509a4085b4cce1636f16be38)说明乘数可因公司行动改变。BSC `uiMultiplier` 仅在本次 129 个采样区块核验，不代表所有区块。

## 方法、产物与复现

本研究延续原 [`shfe_gold_xau_basis_20260429.ipynb`](../../../trafi_shfx_market_arb/third_party_review_20260608/scripts/shfe_gold_xau_basis_20260429.ipynb) 的 bid/ask 双向基差，而非用 ask/bid 简单比价或 5 分钟成交收盘价作套利判断。旧 notebook 的 `merge_asof(nearest, tolerance=2s)`适合描述性对齐；这里对机会筛查改为按 NAS `local_timestamp` **向后取最近已收到报价**，同样限制 2 秒，并另设源时间 ≤5 秒，避免“未来报价”进入历史信号。每个条件变化、数据缺失和日级覆盖见审计文件。只取美国常规盘，周末订单仅用于描述。

运行顺序：

```bash
.venv-fix/bin/python analysis/entropy_equity_basis/run_nas_basis.py
.venv-fix/bin/python analysis/entropy_equity_basis/simulate_basis_convergence.py
python3 analysis/entropy_equity_basis/run_bsc_history.py
.venv-fix/bin/python analysis/entropy_equity_basis/build_outputs.py
```

NAS 原文件绝不修改。`run_meta.json` 列出每个输入 Parquet；`quote_quality.csv`、`pair_daily.csv`、`candidate_events.csv`、`fixed_horizon_summary.csv`、`bsc_run_meta.json` 提供复算审计。主要图像：[SNDK 跨所／期现基差](charts/SNDK_basis.png)、[BSC 固定金额历史报价](charts/SNDK_bsc_route_quotes.png)；其他标的在 `charts/`。结果已按旧版美股基差面板的深色卡片、筛选、双向基差和覆盖率布局接入 [`dashboard/index.html#stock-basis`](../../../../dashboard/index.html#stock-basis)；该面板将历史盘口研究与原 5 分钟成交代理明确分开。

主要外部依据：[Entropy 股票资产目录](https://docs.entropy.io/asset-directory/equity-assets.md)、[Entropy 股票永续规则](https://docs.entropy.io/market-types/equity-perpetuals.md)、[Binance SNDKB 上市公告](https://www.binance.com/en/support/announcement/detail/5646e3f9ea6b4c989cb76aa18bd99245)、[Binance NBISB 上市公告](https://www.binance.com/en/support/announcement/detail/6a55706a042c4a7ebedc2a0899744088)、[Binance GPROB 上市公告](https://www.binance.com/en/support/announcement/detail/da7f14dd847f436ea92330a024ce0245)、[PancakeSwap V3 官方部署地址](https://github.com/pancakeswap/pancake-v3-contracts/blob/main/deployments/bscMainnet.json)。
