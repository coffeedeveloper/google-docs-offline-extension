# Google Docs Offline 可读扩展工程

基于用户本机 Google Docs Offline **1.110.1** 还原。直接加载目录为 [`extension/`](extension/)。保留原始文件名、全局作用域、协议、manifest、公钥及全部运行资源；关键业务函数附中文注释。

这是一份可审计的可读副本，不是 Google 原始开发源码。没有 source map，不能恢复原始变量名、TypeScript 或模块划分。大部分通用 Closure 运行时代码仍保留短符号；从 [源码职责导航](docs/CODE_MAP.md) 阅读实际离线业务，避免从数千行运行时代码开头读起。

## 研究报告

完整中文报告已保存到：

[`google-docs-offline-investigate.md`](</Users/ellison/Library/Mobile Documents/iCloud~md~obsidian/Documents/cattery/Offline/google-docs-offline-investigate.md>)

报告说明扩展与网页 Service Worker 的区别、GoogleDocs IndexedDB、待同步操作队列、同设备文档锁、账号/企业策略、Zoom Docs 分阶段实施建议，以及本次实测与未验证项。

## 工程结构

```text
extension/                 可直接 Load unpacked 的可读扩展（88 个文件）
original/                  本机运行资源基线（请勿修改）
scripts/build.mjs          确定性格式化及中文注释生成
scripts/annotations.mjs    关键函数的职责标注
scripts/verify.mjs         原始哈希、token、AST、资源及 ID 检查
scripts/browser-smoke.mjs  两个隔离 profile 的真实 Chromium 扩展回归
tests/                    相同输入下原始/可读代码的差分行为测试
docs/CODE_MAP.md           关键函数源码导航
docs/PROTOCOL.md           消息协议与职责说明
docs/PRACTICE.md           本次实验及后续完整验证步骤
research/downloads/       官方 CRX、页面引用的公开 Google JS
research/official-extension/ 官方 CRX 解压样本
research/readable/         调查用格式化样本，非运行入口
research/validation/       自动验证记录与实验说明
research/baseline-sha256.json  原始运行资源的 SHA-256 清单
```

`original/` 取自 `/Users/ellison/Projects/google-docs-offline-origin-extension`。仅排除 `.DS_Store` 与 Chrome 商店安装校验目录 `_metadata/`；后者验证原始文件字节，不适用于格式化后的 unpacked 工程。没有删除或修改用户源目录。图标、本地化、HTML、JSON 均按本机文件逐字节保留。官方 CRX 中的三个 JS 与本机样本逐字节一致。

## 构建与检查

Node.js 24 下验证通过，依赖版本固定在 `package-lock.json`。构建只处理本地 `original/`，不依赖 Google 服务。

```sh
npm ci --ignore-scripts
npm run check
```

`npm run build` 会重新生成 `extension/`，直接修改其中 JS 的内容会被覆盖。研究注释修改 `scripts/annotations.mjs`；业务逻辑修改应另建分支或派生工程，一旦改变 token / AST，等价验证应失败。

真实浏览器回归：

```sh
npx playwright install chromium
npm run test:browser
```

浏览器测试运行 Chrome for Testing，使用两个新临时 profile、合成账号及拦截页面。代理指向本机未提供服务的端口以阻断 Google 网络；不登录、不访问真实文档，不接触用户 Chrome profile。临时 profile 路径记录于验证 JSON，浏览器在测试结束后关闭。

## 已验证的一致性

| 层级 | 结果 |
| --- | --- |
| 原始文件完整性 | 88 个运行资源有固定 SHA-256 基线 |
| JavaScript | 3 个文件可执行 token 文本/顺序一致；忽略位置和 raw 字段后的 AST 一致，包含 EmptyStatement |
| 其它资源 | 85 个文件逐字节一致，包括 manifest、HTML、全部本地化及图标 |
| 扩展标识 | manifest key 派生 ID 为 `ghbmnnjooekpmoecnnnilnnbdlolhkhi` |
| 差分行为测试 | 13 项通过；状态、消息、策略、alarm、iframe、关闭及 MessageChannel |
| Chromium 原生扩展 API | 原始/可读版均通过；外部消息、能力探测、offscreen、heartbeat、退出清理的结果一致 |

详见 [静态验证](research/validation/static-equivalence.json)、[原生浏览器验证](research/validation/browser-smoke.json)、[验证说明](research/validation/RESULTS.md)。

格式化会改变源代码文本、错误堆栈行列和 `Function.prototype.toString()` 的结果，不能承诺这些调试信息逐字节相同。以上检查针对执行逻辑与观测到的业务行为；Google 账号下完整的离线编辑、并发冲突、重连上传还需要独立端到端验证。

## 手动加载

1. 在单独的 Chrome 测试 profile 打开 `chrome://extensions/`，启用开发者模式。
2. 点击 Load unpacked，选择本工程的 **`extension/`** 目录。
3. 确认版本为 1.110.1，ID 为 `ghbmnnjooekpmoecnnnilnnbdlolhkhi`。
4. 使用专用测试 Google 账号，启用离线并准备测试文档；按 [实践指南](docs/PRACTICE.md) 验证。

公钥来自本机 manifest，仅用于保持 ID，不是 Google 私钥或发布凭据。相同 ID 不应与原版在同一 profile 中混用；本次没有替换用户已安装扩展。`content_capabilities` 是 Chromium stable 白名单功能，普通 Zoom 扩展不能照搬；保留 Google ID 的本地研究也不是获得 Zoom 产品权限的方案。

## 包外依赖与复用范围

扩展加载的 `https://docs.google.com/offline/extension/frame`、网页编辑器、网页 Service Worker 和 Google 后端都不包含在此工程。工程可运行扩展自身逻辑，但不是独立离线编辑器。Zoom Docs 应复用报告中的设计思想，在自己的 origin、账号与协同协议下实现。

Google 原始代码和资源的权利归原权利人。本工程没有为其增加开源许可，也不应将保留 Google 品牌和 ID 的研究副本作为自己的扩展发布。
