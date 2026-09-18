# Google Docs Offline：可阅读的模块化重构

基于本机 Google Docs Offline **1.110.1**。**阅读、修改 `src/`；Chrome 加载 `extension/`。**

上一版只是格式化和职责注释，不满足可维护源码的要求。当前版本已经把业务控制流重写为命名明确的 ES modules：账号状态、企业策略、后台调度、隐藏页面管理、iframe 握手与消息转发分别维护，构建后执行这些模块，不是“另写一份示意代码，实际仍执行原来的业务 bundle”。

命名和模块边界是根据控制流重建的，不是 Google 原始源码。通用 Closure runtime、数组协议编解码、遥测和安全 URL 库仍保留编译符号，隔离在 `src/vendor/`，业务模块通过 `runtime-api.js` 的语义接口使用它们。

## 从哪里读

1. [源码导航与旧符号对照](docs/CODE_MAP.md)：先看职责，再按用例跟调用链。
2. [ExtensionController](src/background/extension-controller.js)：网页请求如何改变状态、调度隐藏页。
3. [OffscreenManager](src/background/offscreen-manager.js)：创建、握手门闩、重试和重建。
4. [OffscreenController](src/offscreen/offscreen-controller.js) 与 [GoogleIframeManager](src/offscreen/iframe-manager.js)：Google iframe 的 DOM、端口与生命周期。
5. [消息协议](docs/PROTOCOL.md)：数字类型和数组字段的含义。

## 工程结构

```text
src/
  background/       账号状态、企业策略、heartbeat、offscreen 协调、总控制器
  offscreen/        Google iframe、连接计数、空闲关闭、消息路由、总控制器
  page/             网页扩展能力探测
  shared/           消息类型、状态与时间常量
  vendor/           可追溯提取的编译运行库与协议实现（非业务阅读入口）
extension/          src 构建出的 3 个 JS + source maps，及原始 manifest/资源
original/           用户样本的不可修改约定基线
scripts/            构建、vendor 提取、校验、真实浏览器回归
tests/              原版与重构版在相同输入下的差分测试
docs/               源码导航、协议、实践指南
research/           研究样本、来源记录、验证结果与上一版历史记录
```

`original/` 来源为 `/Users/ellison/Projects/google-docs-offline-origin-extension`，源目录未修改。仅排除 Finder `.DS_Store` 和商店 `_metadata/` 安装校验文件。85 个非 JS 资源逐字节保留，包括 manifest、公钥、HTML、图标和本地化。

## 构建、修改与验证

Node.js 24 下验证；依赖固定在 lockfile：

```sh
npm ci --ignore-scripts
npm run check
npm run test:browser
```

若缺少测试浏览器，先执行 `npx playwright install chromium`。

- 修改业务：编辑 `src/background/`、`src/offscreen/` 等模块，补充对照测试。
- `npm run build`：esbuild 将三个入口打包成经典 IIFE，保留原来的 manifest 入口，不要求改成 module worker；输出未压缩并附 source map。
- `npm run verify`：验证原始哈希、资源、vendor 提取的 token、构建可复现性、source map 内容与扩展 ID。**不再要求重构业务的 AST 与压缩原版相同。**
- `npm test`：22 项原版/重构版行为对照，比较响应、状态和 API 调用轨迹。
- `npm run test:browser`：两个隔离 profile 中测试真实 Chromium 扩展 API；使用合成页面和账号，不登录 Google，也不访问用户文档。

不要直接修改 `extension/` 的 JS，它们会在构建时覆盖。构建图和兼容层约定见 [src/README.md](src/README.md)。

当前 [静态构建校验](research/validation/modular-build.json)、[浏览器回归](research/validation/browser-smoke.json) 均通过；[验证说明](research/validation/RESULTS.md) 说明覆盖范围。上一版的 AST/token 全文件一致记录只作为历史资料，不适用于当前模块化版本。

## 加载与边界

在**单独的 Chrome 测试 profile** 打开 `chrome://extensions/`，启用开发者模式，Load unpacked 选择 `extension/`。保留公钥使 ID 仍为 `ghbmnnjooekpmoecnnnilnnbdlolhkhi`，不要在用户正式 profile 中与原版混用。本次没有替换已安装扩展。

22 项差分测试和真实浏览器回归提供已覆盖路径的行为证据，不是所有执行路径的形式化等价证明。重构改变函数名、作用域、堆栈、`toString()` 及可能的时序性能；完整 Google 离线编辑、并发合并和重连上传仍需按 [实践指南](docs/PRACTICE.md) 单独验收。

扩展依赖包外的 Google iframe、网页 Service Worker、Docs 编辑器和后端。它不是独立离线编辑器。Zoom Docs 应复用设计原则，不应复用 Google ID；`content_capabilities` 的 Chromium stable 白名单能力也不能直接照搬。

完整研究报告：[`google-docs-offline-investigate.md`](</Users/ellison/Library/Mobile Documents/iCloud~md~obsidian/Documents/cattery/Offline/google-docs-offline-investigate.md>)。

Google 原始代码与资源的权利归原权利人；本工程未为它们新增开源许可，不应以自己的扩展发布该研究副本。
