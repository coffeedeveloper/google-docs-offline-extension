# Google 网页 Service Worker 研究样本

配套分析：[Google Docs / Drive Service Worker 职责与离线链路](../docs/GOOGLE-SERVICE-WORKERS.md)。

此目录是研究归档，不参与本仓库扩展或 Demo 的构建，也不是可独立运行的 Google 离线站点。

## 文件来源与分层

- 根目录的 5 个 `*.js`：用户从 Google 下载的启动脚本，已检查并替换其中的个人配置，不再统称为原始响应字节。文件名中的连字符表示原 URL 的路径分隔，不能据此确定实际注册 scope。
- `dependencies/`：从这些启动脚本引用的版本化 URL 下载的 6 个原始响应体，未格式化、未重命名内部符号。
- `formatted/`：对应的 Prettier 阅读副本，便于定位调查证据。**只是格式化，不是语义化源码还原**，与项目 `src/vendor/` 的语义重构不是一回事。
- `readable/`：独立的语义阅读副本，已确认业务符号/关键变量命名、中文职责说明和按模块阅读切片。见 [入口索引](readable/README.md) 与 [还原边界](../docs/READABLE-RESEARCH.md)。原有 `formatted/` 不变。
- `sources.json`：完整来源 URL、引用入口、关系类型、字节数、SHA-256、格式化参数与归档时间。归档时间不是下载时间；当时未记录精确的请求时间和响应头。

| 简短归档名（两个子目录同名） | 引用它的用户样本 | 关系 |
| --- | --- | --- |
| `docs-editor.js` | `docs.google.com-document-offline-serviceworker.js` | `importScripts` |
| `docs-offline-common.js` | `docs.google.com-offline-common-serviceworker.js` | `importScripts` |
| `docs-offline-root.js` | `docs.google.com-offline-root-serviceworker.js` | `importScripts` |
| `drive-main.js` | `drive.google.com-drive-serviceworker.js` | `importScripts` |
| `drive-root.js` | `drive.google.com-drive-serviceworker_root.js` | `importScripts` |
| `drive-cache-proxy.js` | `drive.google.com-drive-serviceworker_root.js` | `__initData` 中的预缓存资源，不是直接导入的 SW 实现 |

下载使用启动脚本中的确切版本 URL，而非另找一个“最新版本”。长 URL 使用简短文件名归档，以 `sources.json` 为权威映射。格式化参数为 Prettier 3.6.2、`parser: "babel"`、`printWidth: 100`；其余使用默认配置。

## 本次归档校验

- 5 个入口、6 个原始依赖和 6 个格式化副本，共 17 个文件的字节数与 SHA-256 均与清单一致；全部通过 Acorn 8.15.0 语法解析。
- 6 个格式化副本都能由原始依赖和上述 Prettier 参数重新生成，结果逐字节一致。
- 原始依赖与格式化副本的 AST 在忽略源码位置、字面量原始拼写及语句列表中的独立空语句后相同。该检查用于排除格式化引入的结构变化，不是浏览器运行回归或完整行为等价证明。
- 报告的本地文件链接及源码行号范围已检查。入口样本中的个人字段已脱敏，清单哈希已同步更新；未执行这些 Google 脚本。

## 覆盖边界

已归档 5 个入口的直接导入实现，并额外保留下载分析时取得的 cache-proxy bundle。后者仅进行了依赖定位与解析，不代表已经完成其全部业务逻辑调查。

这不是递归下载全部资源：未归档真实 `cachemanifest` 响应、离线 HTML、所有 JS/CSS/字体/图片、`eventbusworker.js`、`synctaskworker.js` 等。后续抓取应记录响应头、来源、版本与账号边界，不应把多个时间点的资源混称为一套可运行快照。

## 隐私和使用限制

**启动样本已按用户要求脱敏。** OUID、邮箱、头像 URL 等个人字段使用占位值；公开扩展 ID、构建版本、资源地址和技术配置保留。清单中的入口哈希对应当前脱敏字节，公开依赖与格式化副本未改动。样本仅供源码研究，不可作为真实账号的启动配置。详见 [研究资料脱敏说明](../docs/RESEARCH-PRIVACY.md)。后续新增响应仍须逐次审查。

Google 原始代码的权利归原权利人。本归档未给这些代码新增开源许可，也不建议复制 Google 的实现、资源或账号标识作为自研产品代码。
