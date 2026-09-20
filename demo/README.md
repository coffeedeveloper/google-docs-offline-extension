# Offline Docs Demo · React

文件列表 + 纯文本编辑 + 离线刷新 + 持久化队列 + 重连合并 + 扩展后台同步。已合并到父级 pnpm workspace，共享 [扩展源码](../src/README.md)，无需独立仓库或手动复制运行库。

界面使用 React 19.3.0 / React DOM，列表、编辑器、设置页均为 JSX 组件，不再拼接 HTML 或注册全局点击代理。React 与应用一起打包到离线外壳，不使用 CDN。具体分层见 [React 迁移说明](docs/REACT.md)。

## 运行与加载

Node.js 24、pnpm 10.28.1；以下命令均在**仓库根目录**执行：

```sh
pnpm install --frozen-lockfile
pnpm build:demo
pnpm start
```

1. Chrome 开发者模式加载本仓库的 **`demo/extension/dist/`**。
2. 打开 **http://localhost:4173**，点击「启用离线」，确认 iframe 握手完成。
3. 打开或新建文档，编辑后观察本地保存状态及待同步数量。

Demo 扩展 ID 为 `ikiiibboenfblpmpholjlkmbbnkichpo`，可以与 Google 原版并存，不需要 Google 账号。根目录的 `extension/` 是 Google 验证目标，不能代替 Demo 目标。不要把 localhost URL 换成 `127.0.0.1`。

隔离浏览器入口（需先启动服务）：

```sh
pnpm exec playwright install chromium
pnpm demo:chrome
```

仅使用 `demo/.profiles/demo-chrome/`，不复制正常 Chrome 凭据。全新克隆需先构建；`demo/dist/` 和 `demo/extension/dist/` 不纳入 Git。

## 确实复用同一份扩展

`@offline-docs/demo` 通过 `workspace:*` 依赖 `@offline-docs/extension-runtime`：

- adapter 继承共享 `ExtensionController`；原 `OffscreenManager`、heartbeat、状态和数组 codec 实际参与运行。
- offscreen 入口直接解析到父级 `src/offscreen/index.js`，使用共享 iframe、消息路由与生命周期管理。
- 网站发送 type 2 启用、type 4 转发；本地 iframe 双 MessageChannel 握手后才解除原 `frameReady`。
- 没有扩展时仍可保存本地编辑，但不偷偷改用前台上传来伪装扩展同步成功。
- 不再保留一份 `extension/upstream/`；共享代码修改后，两个目标都会在下一次构建中使用它。

仅 Demo 适配层修改 origin、关闭启动遥测、增加精确 sender origin / frame origin + source 检查。使用独立公钥和本地 CSP，不声明 Google 的 `content_capabilities`。运行库文件不会被 Demo 构建重写。

构建信息 `demo/extension/build-info.json` 记录共享源码指纹与实际 bundle 输入；浏览器内 `demoSource` 与之对应。详细机制见 [架构说明](docs/ARCHITECTURE.md)、[双目标指南](../docs/WORKSPACE.md)。

## 亲手验证

1. 启用离线，打开「离线文档工作原理」或新建文档。
2. 开启「演示断网」，输入唯一标记，等待保存到设备；刷新验证正文与待同步队列仍在。
3. 关闭「演示断网」，等待服务端 ACK、队列归零。
4. 先完成外壳与文档准备，再停止开发服务；刷新、编辑、再次刷新，重启服务后观察上传。
5. 两标签打开同一文档，离线分别添加标记，再联网验证两者保留。

「演示断网」是前台和 iframe 共同遵守的 IDB 开关，不等于系统断网。停止 HTTP 服务是另一个真实传输失败实验，也不等于浏览器进程重启。

页面关闭后原 alarm 可以重建 offscreen 并上传；默认 5 分钟心跳、60 秒空闲/1 小时上限仍保留。前台打开时额外每 15 秒请求同步，不代表扩展无限保活或关闭 Chrome 后还能运行。

## 文件与数据

```text
demo/
  src/app.jsx               React createRoot 入口与自动化 API
  src/react/                列表、编辑、设置和通用 JSX 组件
  src/application.js        UI 无关的状态、编辑动作、路由、持久化协调
  src/core/                 IDB、Yjs、同步引擎与扩展协议
  src/frame.js              网站同源 iframe；仍由扩展持有
  src/service-worker.js     网页离线外壳缓存
  public/                   HTML / CSS / SVG 源文件
  server/                   loopback HTTP 服务与幂等存储
  extension/adapter/        继承共享控制器的本地适配
  extension/demo-public-key.txt  稳定公钥（不是私钥）
  extension/dist/           生成的 Demo 扩展
  extension/build-info.json  生成的来源指纹与构建输入
  dist/                     生成的网页资源
  tests/                    单元及真实浏览器集成验证
```

浏览器数据库为 `OfflineDocsDemo-v1`，含 `documents`、`outbox`、`meta`、`events`。服务端默认数据在 `demo/.data/server-documents.json`。旧独立 Demo 的服务端数据和 profile **没有迁入**，原目录仍保留。相同浏览器 profile 下相同 origin 的旧网页数据可能继续使用；严格隔离实验应使用测试 profile。

## 测试

在仓库根目录：

```sh
pnpm check
# 先停止占用 4173 的开发服务；测试自建临时服务和 profile
pnpm test:integration
```

当前 7 项 Demo 单元/来源/隔离测试、8 条核心离线集成路径及 4 组 React 交互回归的范围见 [验证说明](docs/VALIDATION.md)。React 新增测试实际点击、输入和导航，覆盖焦点/光标及组合输入事件；不代替全平台视觉、辅助技术或系统输入法验收。此前合并工程的结果保留于 [迁移验证记录](../docs/WORKSPACE-VALIDATION.md)。

## 范围与限制

- 纯文本 Yjs CRDT，不是 Google 私有协同协议；没有真实账号认证、共享、权限撤回、富文本或附件。
- 服务仅监听本机，不要暴露公网或放入真实敏感文档。
- 「固定」是保留意图，尚未实现自动配额回收；取消固定不删除未上传修改。
- 本地文档与 outbox 同事务提交；失败不显示保存成功，保留内存编辑供重试。没有证明断电级硬件持久性。
- 服务端完整 JSON 替换、全量 CRDT 快照和未裁剪回执只适合研究；没有生产级迁移、跨版本兼容、大规模或长离线验收。
- 可选 WebMCP 接口仅 feature-detect，未验证真实客户端调用。
- 共享原始运行库权利归原权利人，本项目不新增其开源许可，不应发布品牌仿冒扩展。

Google 调查报告位于 [docs/google-docs-offline-investigate.md](../docs/google-docs-offline-investigate.md)。Demo 的成功不能替代真实 Google 账号下的离线编辑与重连验收。
