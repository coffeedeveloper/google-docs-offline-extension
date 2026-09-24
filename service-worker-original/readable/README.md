# 语义化阅读副本

先看 [总阅读指南](../../docs/READABLE-RESEARCH.md)。这里不是仅格式化：已确认的业务符号和关键参数已重命名，并加入中文职责说明。未知运行库保留原名。

完整 bundle 保留初始化顺序；`sections/` 是便于阅读的业务切片，**不能直接 import 或独立运行**。

## Docs 通用入口路由

完整代码：[docs-offline-root.js](docs-offline-root.js)。8 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。

- [入口识别、本地文档查找与编辑器跳转](sections/docs-offline-root/root-routing.js) · [完整上下文](docs-offline-root.js#L17045)

## Docs 公共离线资源

完整代码：[docs-offline-common.js](docs-offline-common.js)。23 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。

- [版本准备、完成标记与失败处理入口](sections/docs-offline-common/manifest-update.js) · [完整上下文](docs-offline-common.js#L17035)
- [公共清单入口、缓存键与缓存读取](sections/docs-offline-common/common-cache-routing.js) · [完整上下文](docs-offline-common.js#L17893)
- [更新、删除、存活与版本查询控制面](sections/docs-offline-common/cache-control-messages.js) · [完整上下文](docs-offline-common.js#L18923)

## Docs 编辑器离线启动

完整代码：[docs-editor.js](docs-editor.js)。19 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。

- [延迟本地兜底与网络竞争](sections/docs-editor/network-local-race.js) · [完整上下文](docs-editor.js#L21208)
- [文档读取、模型状态与应用 shell 校验](sections/docs-editor/document-launch.js) · [完整上下文](docs-editor.js#L21522)
- [fetch 入口和策略选择](sections/docs-editor/editor-fetch-routing.js) · [完整上下文](docs-editor.js#L21959)

## Drive 列表页冷启动

完整代码：[drive-main.js](drive-main.js)。18 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。

- [列表路由、coldstart/cacheproxy 与策略装配](sections/drive-main/drive-coldstart.js) · [完整上下文](drive-main.js#L13771)
- [CacheFetchService 的资源准备与读取接口](sections/drive-main/drive-cache-service.js) · [完整上下文](drive-main.js#L10951)

## Drive 根入口兜底

完整代码：[drive-root.js](drive-root.js)。7 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。

- [根路径重定向与策略链](sections/drive-root/drive-root-routing.js) · [完整上下文](drive-root.js#L11958)

## Drive cache-proxy 启动边界

完整代码：[drive-cache-proxy.js](drive-cache-proxy.js)。5 个已确认业务符号；全部绑定映射见 [symbols.json](symbols.json)。

- [嵌入页握手与 SharedWorker/Worker 选择；不声称还原全部数据层](sections/drive-cache-proxy/cache-proxy-bootstrap.js) · [完整上下文](drive-cache-proxy.js#L65366)

来源代码的权利与许可证沿用归档说明；切片不是另行授权的独立实现。
