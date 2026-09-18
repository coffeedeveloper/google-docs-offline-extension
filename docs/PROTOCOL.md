# 协议与执行上下文

数字字段来自编译后的消息结构。这里是经代码和回归验证得到的部分协议，不是完整 Google .proto。字段位置按 1 起算描述，示例数组按 JavaScript 的 0 起算访问。

| 上下文 | 入口 | 角色 |
| --- | --- | --- |
| Google 网页 | `chrome.runtime.sendMessage(extensionId, array)` | 外部请求，由 manifest externally_connectable 限定域名 |
| 扩展 worker | `dn`, `en`, `dn.prototype.wb` | 状态/企业策略/隐藏页协调 |
| 隐藏 DOM 页 | `Jm`, `Jm.prototype.U`, `Mm` | DOM 与 Google iframe 生命周期 |
| Google 同源 iframe | `/offline/extension/frame?ouid=...` | 包外业务页面，MessageChannel 通信 |

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

## 为什么保持 bundle

两个大 JS 文件有不同的短符号映射、共享全局辅助函数及原始初始化时序。直接拆模块、改为 ES modules、全局重命名、改 Promise 实现或者调整 callback 返回值都会引入语义风险。本工程只改变注释和空白，验证器同时检查 token 顺序和 AST。

分析某个函数时，先确认文件：例如 `Dm` 在 worker 中是 offscreen 管理器，在 offscreen bundle 中是 1 小时关闭计时器。
