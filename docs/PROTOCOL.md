# 协议与执行上下文

数字字段来自编译后的消息结构。这里是经代码和回归验证得到的部分协议，不是完整 Google .proto。字段位置按 1 起算描述，示例数组按 JavaScript 的 0 起算访问。

| 上下文 | 入口 | 角色 |
| --- | --- | --- |
| Google 网页 | `chrome.runtime.sendMessage(extensionId, array)` | 外部请求，由 manifest externally_connectable 限定域名 |
| 扩展 worker | `ExtensionController.onWebsiteMessage` / `dispatch` | 状态/企业策略/隐藏页协调 |
| 隐藏 DOM 页 | `OffscreenController` / `FrameMessageRouter` | DOM 与 Google iframe 生命周期 |
| Google origin iframe | `/offline/extension/frame?ouid=...` | 包外业务页面，与 Google 网页同源，与扩展跨源；MessageChannel 通信 |

所有“类型名”均为研究者按控制流给出的描述。

## 网页 → worker

| type | payload 字段 | 作用 |
| --- | --- | --- |
| 1 | 字段 7：连接信息 | 保存 OUID/连接时间，解除 frame ready 门闩 |
| 2 | 字段 8：`[ouid, forceHeartbeat]` | 保存启用状态，确保 frame，启动 heartbeat |
| 3 | 字段 3：可选账号信息 | 无账号时退出；有账号时处理账号不匹配 |
| 4 | 字段 4：frame request | 转发给 offscreen / frame |
| 5 | 字段 5：`[domain]` | 企业策略查询 |

例如测试用的策略查询：

```js
[5, null, null, null, ['synthetic.example']]
```

响应字段 4 包含 `[allowed, autoEnabled]`，本版本线上消息序列化结果是数字 `0/1`，不是 JavaScript `false/true`。原始与可读版均已实测；不要在重写时无意改变这种协议表现。

启用请求：

```js
[2, null, null, null, null, null, null, ['synthetic-user', true]]
```

退出请求为 `[3]`。未知 type 产生错误 envelope，外部响应字段 5 中包含错误消息。以上请求仅用于测试夹具；不要在真实用户环境发送任意账号标识。

## worker ↔ offscreen

worker 发出的 type 1 / 6 的字段 2 含 `[ouid, origin, version, optInStatus]`，分别表示重建和确保 iframe。type 4 转发 frame 请求；type 5 移除 iframe。offscreen 的 type 3 回传握手数据，type 7 回传用户变化。

双方 Chrome `onMessage` 监听返回 `true` 以延迟响应。数组构造函数可能在收到的数据上附加内部标记；测试模拟 Chrome 序列化时必须克隆输入，不能复用同一个被内部消息对象接管的数组。

## 字段阅读约定

业务中 `setNested(response, Messages.FrameResponse, 4, value)` 的 `4` 是协议字段号，不是数组下标。`readType()` 读取字段 1；`readEchoType()` 保留原版回显读取路径，不应随意统一替换。

| 消息 | 关键字段（1 起算） |
| --- | --- |
| WebsiteRequest | 1 type；3 UserChange；4 FrameRequest；5 DomainPolicyRequest；7 FrameConnection；8 EnableOffline |
| WebsiteResponse | 1 type；3 FrameResponse；4 DomainPolicyResponse；5 Error |
| OffscreenRequest | 1 type；2 FrameConfiguration；4 FrameConnection；5 FrameRequest；6 UserChange |
| OffscreenResponse | 1 type；3 Error；4 FrameResponse |
| FrameConfiguration | 1 OUID；2 Docs origin；3 扩展版本；4 optInStatus |
| FrameConnection | 1 OUID；2 时间戳字符串 |
| EnableOffline | 1 OUID；2 forceHeartbeat |
| FrameRequest 的 alarm 形式 | 1 type = 0；2 Alarm，后者字段 1 为 alarm 名 |

## 重构怎样保留通信行为

业务已拆为 ES modules，esbuild 生成保持 manifest 入口不变的经典 IIFE。消息类型用 `shared/message-types.js` 命名；构造器、数组内部标记、可选值读取与布尔编码留在原始 codec，由 `runtime-api.js` 提供可读接口。

不同通道上的相同数字不一定含义相同，例如外部 type 3 是账号变化，而内部 type 3 是握手。不得合并为一个含混的大枚举。

## FrameRequest 的网页侧实现补充（2026-09-24）

从实际 HTML 引用的 `912208950-frame_bin.js` 确认：type 0 分派 alarm（明确处理 heartbeat）；type 2 为文档 ID 列表构造 `multi_doc_sync` Worker 任务；type 3 在满足条件时启动一轮周期任务调度。type 2 的参数位于字段 3，嵌套消息字段 1 为文档 ID 列表；type 3 不等于强制上传全部文档。

这些是版本化网页源码的静态证据，未在真实账号中发送测试指令。回包不等于服务端已确认全部修改，详见 [Scheduler frame 分析](SCHEDULER-FRAME.md)。

这里刻意没有把数组协议替换成 JSON 对象，也没有新增或收紧原版消息来源检查。面向自研文档系统的独立实现应明确校验 origin/source、账号、文档权限与版本；这属于另一个产品设计任务，不应混入本次行为保持重构。
