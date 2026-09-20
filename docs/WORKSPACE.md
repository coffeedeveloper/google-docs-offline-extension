# 统一工程与双目标验证

迁移日期：2026-09-20。原独立 Demo（基线 `8486658`）已并入 `demo/`，本仓库是后续开发入口。原目录没有删除，也没有迁入 `.data`、浏览器 profile、依赖目录或 Git 元数据；这次是源码合并，不是合并两个 Git 历史。

## 一份运行库、两个扩展产物

| 目标 | 构建命令（仓库根目录） | Chrome 加载目录 | ID / 网站 |
| --- | --- | --- | --- |
| Google 验证版 | `pnpm build:google` | `extension/` | `ghbmnnjooekpmoecnnnilnnbdlolhkhi`，Google 原域名 |
| Demo 验证版 | `pnpm build:demo` | `demo/extension/dist/` | `ikiiibboenfblpmpholjlkmbbnkichpo`，`http://localhost:4173` |

`pnpm build` 一次构建两者；输出互不覆盖。不是在一个扩展里同时开启 Google 与 localhost 权限，也没有把 Google 公钥给 Demo 使用。

- `src/` 是 workspace 包 `@offline-docs/extension-runtime`，保持原业务与 vendor 代码；Google 构建仍直接从这份源码生成原 manifest 的三个入口。
- `demo/` 是 `@offline-docs/demo`，通过 `workspace:*` 引用运行库。adapter 的 import 和 offscreen 的入口解析都指向 `src/`；不再复制 `extension/upstream/`，不再执行 import-upstream 脚本。
- Demo 专用 origin、启动遥测关闭、sender/frame 校验仍只在 `demo/extension/adapter/` 和 Demo 构建插件中实现。构建不会改写共享源码。
- `demo/extension/build-info.json` 记录当前共享 JS 的逐文件 SHA-256、汇总指纹和 esbuild 实际输入。浏览器内的 `demoSource` 必须与该指纹一致，不再硬编码历史 commit。
- Google 的 `original/`、manifest、公钥、资源和来源记录保持不变；原有 verify / 差分回归继续约束 Google 目标。

包管理采用 [pnpm workspace](https://pnpm.io/workspaces)，统一锁文件 `pnpm-lock.yaml`，固定 pnpm 10.28.1，Node.js 24。工作区只允许 esbuild 的依赖安装脚本，不泛化允许所有第三方脚本。仓库本地 `.pnpm-store/` 被 Git 忽略。

## 首次安装与日常开发

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

访问 `http://localhost:4173`。`pnpm dev` 会先构建 Demo 再启动服务，不是热更新服务器；源码修改后重新构建，扩展修改后还须在 Chrome 扩展页 Reload。

Demo 的 HTML/CSS/SVG 源文件在 `demo/public/`，JS 在 `demo/src/`，生成网页在 `demo/dist/`。生成产物、测试数据和 profile 均忽略 Git；全新克隆必须先构建。Google 的 `extension/` 延续原有可审计产物管理方式。

## Demo 验证流程

1. 执行 `pnpm build:demo`、`pnpm start`。
2. Chrome 开发者模式加载 `demo/extension/dist/`；它可以与 Google 原版并存。
3. 页面启用离线，确认真实 iframe 握手，再测试列表、离线编辑、刷新和重连。
4. 隔离浏览器可使用 `pnpm demo:chrome`（服务需已启动）；首次缺浏览器时运行 `pnpm exec playwright install chromium`。

运行 `pnpm test:integration` 前，先停止自己启动的 4173 开发服务；测试自建临时服务和 profile，不读取旧 Demo 的用户数据。不要切换到 `127.0.0.1` URL，它不是同一 origin。

## Google 官方扩展替代验证流程

Google 目标保留官方 ID，是用于研究验证的 unpacked 重构副本，**没有 Google 的签名或发布资格**。相同 ID 的两个版本不能在同一个 profile 并行使用。

优先选择隔离测试 profile：

```sh
pnpm google:chrome
# 在打开的 Chrome for Testing 中手动登录测试账号；不复制正常 Chrome 凭据。
# 根据启动器输出，在另一个终端运行只读诊断：
node scripts/google-docs-live-inspect.mjs http://127.0.0.1:<port>
```

若明确要在正常 Chrome 替代验证：

1. 先确认已有文档全部同步，并保留必要备份；记录原扩展状态。
2. 手动停用原版，开发者模式加载**本仓库 `extension/`**。如 Chrome 因相同 ID 或企业策略拒绝加载，改用隔离 profile，不为绕过冲突清除站点数据或卸载有待同步状态的扩展。
3. 确认扩展的加载目录、ID、worker 及实际 JS 来源，刷新 Google Docs。仅看到同名卡片或版本号不足以确认加载的是重构版。
4. 使用新建专用测试文档，完成在线基线、离线准备、断网写入、刷新、重连、独立客户端读取。具体步骤见 [PRACTICE](PRACTICE.md)。
5. 切回原版前先确认测试改动已同步；不清空 Google IndexedDB、Cache Storage 或账号数据。

本次迁移不自动操作正常 Chrome 的扩展开关，不自动登录或改写 Google 文档。`pnpm test:browser` 的合成 Google origin 回归不能代替真实 Google 服务端验收。

## 命令与验证范围

| 命令 | 范围 |
| --- | --- |
| `pnpm check` | 两目标构建、Google 来源/资源/确定性验证、差分测试、Demo 数据与共享源码测试 |
| `pnpm test:browser` | 原版和 Google 重构版在隔离 Chromium 的原生 API 对照；阻断 Google 网络 |
| `pnpm test:integration` | 本地 Demo 真扩展握手、离线刷新、ACK、后台重建、并发、存储失败路径 |
| `pnpm test:all` | 顺序执行以上所有检查；需安装测试浏览器并释放 4173 端口 |

历史 `research/validation/` 和 Demo 的 2026-09-18 结果仍保留原证据含义。迁移后新的覆盖范围与运行情况见 [迁移验证记录](WORKSPACE-VALIDATION.md)。

## 数据与回滚边界

旧 Demo 服务端数据还在原目录，新服务默认写 `demo/.data/`；没有静默搬迁或覆盖数据库。同一个 Chrome profile、相同 localhost origin 和相同 Demo ID 可能继续访问原来的浏览器数据，因此需要严格隔离时使用测试 profile。手动指定 `DEMO_DATA_DIR` 前应先停旧服务并备份数据，避免两个进程同时写同一个文件。

npm 锁文件已由 pnpm 锁文件取代；历史版本可从 Git 恢复。原独立 Demo 目录保留作回退参考，后续不要继续在两份工程同时开发。
