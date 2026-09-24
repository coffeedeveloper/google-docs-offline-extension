# Google Docs Offline：模块化重构与离线文档 Demo

基于本机 Google Docs Offline **1.110.1**。现已将离线文档 Demo 合并为 **pnpm workspace**：共享 `src/`，分别构建 Google 和本地 Demo 验证版。

## 快速开始与构建目标

要求 Node.js 24、pnpm 10.28.1，在仓库根目录执行：

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

| 验证目标 | 单独构建 | Chrome 加载目录 | 扩展 ID |
| --- | --- | --- | --- |
| Google Docs 官方替代验证 | `pnpm build:google` | `extension/` | `ghbmnnjooekpmoecnnnilnnbdlolhkhi` |
| 本地 Demo | `pnpm build:demo` | `demo/extension/dist/` | `ikiiibboenfblpmpholjlkmbbnkichpo` |

Demo 页面位于 `http://localhost:4173`，使用 React 组件实现文件列表、编辑页和设置页，保留离线持久化、重连及后台同步。两个目标权限和输出分离，不是在一个 manifest 中同时放开 Google 与 localhost。

完整命令、正常 Chrome 替代验证、隔离测试与数据迁移说明见 [统一工程指南](docs/WORKSPACE.md)；Demo 用法见 [demo/README.md](demo/README.md)。原独立 Demo 目录及其数据保留不动。

上一版只是格式化和职责注释，不满足可维护源码的要求。当前版本已经把业务控制流重写为命名明确的 ES modules：账号状态、企业策略、后台调度、隐藏页面管理、iframe 握手与消息转发分别维护，构建后执行这些模块，不是“另写一份示意代码，实际仍执行原来的业务 bundle”。

命名和模块边界是根据控制流重建的，不是 Google 原始源码。`src/vendor/` 中的 Closure runtime、数组协议、遥测和安全 URL 库也已进行语义命名、局部变量还原及中文职责/状态机说明；兼容性敏感的短属性 ABI 保留。业务模块通过 `runtime-api.js` 使用它们，详见 [运行库阅读与维护指南](src/vendor/README.md)。

## 从哪里读

完整研究报告：[Google Docs Offline 技术调查与自研文档系统实施建议](docs/google-docs-offline-investigate.md)。包含架构与源码证据、无 Service Worker 的能力边界、真实 Google 验证状态，以及使用本重构扩展的 Offline Docs Demo 实践。

想先理解设计动机，可读 [为什么需要 Offscreen：关闭文档后同步的具体案例](docs/OFFSCREEN.md)，再对照下面的源码入口。

如果关注禁用网页 SW 后如何保留原 URL 离线访问，见 [替代方案与 CDP 录制/回放设计](docs/OFFLINE-WITHOUT-SERVICE-WORKER.md)。这是尚未实现的研究方案，不是当前扩展已支持的功能。

Google 网页 SW 的具体职责与源码链路见 [Docs / Drive Service Worker 调查](docs/GOOGLE-SERVICE-WORKERS.md)：入口路由、清单驱动缓存、版本完整性、本地文档启动，以及自研设计建议。下载的实现脚本、阅读副本及来源校验记录位于 [service-worker-original/](service-worker-original/README.md)；入口样本已脱敏，哈希对应当前副本，详见 [脱敏说明](docs/RESEARCH-PRIVACY.md)。

后续研究重点见 [离线设计研究路线](docs/OFFLINE-RESEARCH-ROADMAP.md)。[Extension frame 连接侧专题](docs/EXTENSION-FRAME.md) 梳理隐藏页定位、双端口握手与公共 API；随后依据用户 HTML 完成的 [Scheduler frame 主实现分析](docs/SCHEDULER-FRAME.md) 进一步解释任务目录、调度、Worker/iframe 执行器与失败处理。样本位于 [offscreen-original/](offscreen-original/README.md)，具体任务内部的上传 ACK 仍待研究。

希望直接阅读 Google 网页端业务代码，可从 [readable 研究代码指南](docs/READABLE-RESEARCH.md) 进入：独立完整副本、语义命名、中文注释及按职责划分的阅读切片。生成与校验分别运行 `pnpm research:generate`、`pnpm research:check`；不参与扩展或 Demo 构建。

更接近正常业务工程的版本见 [人类可读业务层](research/human-readable/README.md)：具名状态和参数、模块化调度器、15 类任务的声明式目录、缓存提交与文档启动逻辑，配有原函数对照测试。快速验证：`pnpm research:test:human`。这是一部分已确认业务的手工重构，不是完整 Google 运行时替代品。

1. [源码导航与旧符号对照](docs/CODE_MAP.md)：先看职责，再按用例跟调用链。
2. [ExtensionController](src/background/extension-controller.js)：网页请求如何改变状态、调度隐藏页。
3. [OffscreenManager](src/background/offscreen-manager.js)：创建、握手门闩、重试和重建。
4. [OffscreenController](src/offscreen/offscreen-controller.js) 与 [GoogleIframeManager](src/offscreen/iframe-manager.js)：Google iframe 的 DOM、端口与生命周期。
5. [消息协议](docs/PROTOCOL.md)：数字类型和数组字段的含义。
6. [运行库设计与还原边界](src/vendor/README.md)：Promise 取消链、消息 copy-on-write、安全 URL、字段 ABI 和一致性检查。

## 工程结构

```text
src/
  package.json      @offline-docs/extension-runtime，共享运行库 workspace 包
  background/       账号状态、企业策略、heartbeat、offscreen 协调、总控制器
  offscreen/        Google iframe、连接计数、空闲关闭、消息路由、总控制器
  page/             网页扩展能力探测
  shared/           消息类型、状态与时间常量
  vendor/           语义化运行库与协议实现，附职责章节、中文注释及原始符号映射
extension/          src 构建出的 3 个 JS + source maps，及原始 manifest/资源
original/           用户样本的不可修改约定基线
scripts/            构建、vendor 提取、校验、真实浏览器回归
demo/               @offline-docs/demo：网页、服务、适配层、端到端实验
  public/           HTML / CSS / SVG 源资源
  extension/dist/   Demo 专用扩展构建产物（不入 Git）
  dist/             Demo 网页构建产物（不入 Git）
pnpm-workspace.yaml workspace 配置；单一 pnpm-lock.yaml 锁定依赖
tests/              原版与重构版在相同输入下的差分测试
docs/               完整研究报告、源码导航、协议、实践指南
research/           研究样本、来源记录、验证结果与上一版历史记录
```

`original/` 来源为 `/Users/ellison/Projects/google-docs-offline-origin-extension`，源目录未修改。仅排除 Finder `.DS_Store` 和商店 `_metadata/` 安装校验文件。85 个非 JS 资源逐字节保留，包括 manifest、公钥、HTML、图标和本地化。

## 构建、修改与验证

Node.js 24 下验证；依赖固定在 lockfile：

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test:browser
```

若缺少测试浏览器，先执行 `pnpm exec playwright install chromium`。

- 修改业务：编辑 `src/background/`、`src/offscreen/` 等模块，补充对照测试。
- `pnpm build`：构建两个目标；`pnpm build:google` 将三个 Google 入口打包成经典 IIFE，保留原 manifest 入口；输出未压缩并附 source map。
- `pnpm vendor:generate` / `pnpm vendor:check`：重新生成可读运行库 / 只检查生成结果和绑定结构；命名规则见 `scripts/vendor-names.mjs`。
- `pnpm verify`：验证原始哈希、资源、vendor 的词法绑定归一化 AST、生成映射、构建可复现性、source map 内容与扩展 ID。**不要求重构业务的 AST 与压缩原版相同。**
- `pnpm test:google`：22 项扩展行为对照 + 20 项运行库/还原器测试；`pnpm test` 另包含 7 项 Demo 数据、来源与适配隔离测试。
- `pnpm test:integration`：构建并验证 Demo 的 8 条核心离线链路及 4 组 React 控件交互，需先停止 4173 开发服务。
- `pnpm test:all`：顺序运行构建/单元检查和两个浏览器测试套件。
- `pnpm test:browser`：两个隔离 profile 中测试真实 Chromium 扩展 API；使用合成页面和账号，不登录 Google，也不访问用户文档。

不要直接修改 `extension/` 的 JS，它们会在构建时覆盖。构建图和兼容层约定见 [src/README.md](src/README.md)。

当前 [静态构建校验](research/validation/modular-build.json)、[浏览器回归](research/validation/browser-smoke.json) 均通过；[验证说明](research/validation/RESULTS.md) 说明覆盖范围。上一版的 AST/token 全文件一致记录只作为历史资料，不适用于当前模块化版本。

## 加载与边界

在**单独的 Chrome 测试 profile** 打开 `chrome://extensions/`，启用开发者模式，Load unpacked 选择 `extension/`。保留公钥使 ID 仍为 `ghbmnnjooekpmoecnnnilnnbdlolhkhi`，不要在用户正式 profile 中与原版混用。本次没有替换已安装扩展。

扩展和运行库差分测试、真实浏览器回归提供已覆盖路径的行为证据，不是所有执行路径的形式化等价证明。重构改变函数名、诊断堆栈、`toString()` 及可能的时序性能；完整 Google 离线编辑、并发合并和重连上传仍需按 [实践指南](docs/PRACTICE.md) 单独验收。

扩展依赖包外的 Google iframe、网页 Service Worker、Docs 编辑器和后端。它不是独立离线编辑器。自研文档系统应复用设计原则，不应复用 Google ID；`content_capabilities` 的 Chromium stable 白名单能力也不能直接照搬。

配套实践现位于 [demo/](demo/README.md)，通过 `workspace:*` 直接使用本项目当前源码，不再维护复制快照。独立仓库 `8486658` 仅是迁移来源和历史验证基线。Demo 通过不代表真实 Google 服务端已验证，覆盖范围见 [迁移验证](docs/WORKSPACE-VALIDATION.md) 和研究报告第 7、13 节。

Google 原始代码与资源的权利归原权利人；本工程未为它们新增开源许可，不应以自己的扩展发布该研究副本。
