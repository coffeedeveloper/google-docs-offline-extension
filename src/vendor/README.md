# 可读运行库：职责、状态机与维护入口

这里是实际参与 Google / Demo 构建的实现，不是另外写的示意代码。两个运行库已经从编译短符号改为语义名称；关键形参、局部变量、原型方法参数和中文说明一起维护。

还原依据是仓库固定的 **1.110.1 原始样本**，不是 Google 原始源码或原 source map。这里保留编译器的部分控制流及寄存器复用；低置信度临时值使用 `intermediate` 等中性名称，不为它们虚构业务含义。

## 先读什么

不要从 polyfill 第一行顺读。先看业务调用，再进入对应的语义函数：

| 关注的问题 | 源码搜索入口 | 职责与关键约束 |
| --- | --- | --- |
| 异步握手为什么不直接用原生 Promise | `createDeferred`、`LegacyPromise`、`chainPromise`、`cancelPromise` | 自定义微任务、thenable 同化、子链取消、未处理拒绝 |
| 隐藏页超时之后等什么 | offscreen `raceLegacyPromises`、`waitForFrameTimeout` | 日志排空和额外 14 秒延迟竞速，不是 all |
| runtime 消息如何变成数组 | `ArrayMessage`、`getMessageField`、`setMessageField`、`serializeMessage` | 字段索引、类型转换、稀疏字段、共享/冻结状态 |
| 为什么不能直接改消息数组 | `mutableMessageCopy`、`readRepeatedMessages` | copy-on-write、子消息包装和 repeated-field flags |
| iframe URL 怎么构造 | `MutableUrl`、`QueryData`、offscreen `createTrustedFrameUrl` / `setTrustedIframeSource` | URL 编码、多值参数、Trusted Types 包装 |
| 谁释放端口相关对象和监听器 | `Disposable`、`ownDisposable`、`EventHandler` | 幂等释放、析构回调顺序与原型钩子 |
| 错误怎么进入报告系统 | `normalizeError`、`ErrorReporter`、`SampledLogger` | 归一化、分类、限流和采样；不是文档同步 |
| 64 位字段为何不用 Number | `Int64`、`splitSigned64`、`unsigned64ToDecimal` | 两个 32 位字、精度、溢出及十进制转换 |

[后台运行库](background-runtime.js) 与 [隐藏页运行库](offscreen-runtime.js) 内有按职责分组的章节注释。业务只通过 [后台适配层](../background/runtime-api.js) / [隐藏页适配层](../offscreen/runtime-api.js) 使用它们。

## 1. Promise：为什么不是换个名字的原生 Promise

以等待 iframe 握手为例：

1. `createDeferred()` 创建 `LegacyPromise`，并返回 `{ promise, resolve, reject }`。
2. 业务保存 resolver，让端口回调决定何时完成；订阅者通过 `then()` 注册回调节点。
3. `settlePromise()` 先拒绝自解析，再通过 `assimilateThenable()` 接管其他 Promise/thenable。`callThenSafely()` 的 `completed` 标记阻止恶意 thenable 多次兑现或先兑现再抛错。
4. 结果进入最终状态后，`schedulePromiseCallbacks()` 把消费回调放进原微任务队列。executor 同步执行，then 回调异步执行。
5. `chainPromise()` 为每个订阅建立子 Promise；`cancelPromise()` 根据父链的有效订阅数量决定传播取消还是只移除当前订阅。不能直接拒绝整条父链。

状态值 `0 / 1 / 2 / 3` 分别表示 pending / 正在同化 / fulfilled / rejected。它们不是发送给网页的业务消息类型。

另有 `LegacyDeferred`，是更老的一套回调链。其回调返回 `undefined` 时往往继续沿用旧值；不要套用原生 Promise 的“下一环得到 undefined”语义。

### 两个容易误读的特化函数

- 隐藏页原 `Eg` 现在叫 `raceLegacyPromises`。任一输入先完成就推进；空数组兑现 `undefined`。握手超时后，`drainLogsAfterConnectionTimeout()` 将日志 flush 与额外 14 秒延迟竞速，flush 提前完成即可继续关闭。
- 隐藏页原 `Bg` 现在叫 `resolvedLegacyPromise`，编译产物只兑现 `undefined`，即使传参也不会采用该参数。后台的 `asLegacyPromise(value)` 则会采用实参，二者不能合并。

`settleAllLegacyPromises()` 才是等待所有结果的帮助函数，成功标记为原有 `kb`，不能擅自改成原生 `Promise.allSettled` 的 `status`。

## 2. 数组消息：wire 数据与内部状态是两层

一个消息对象包装 backing array。普通字段通常从字段号 1 对应的数组位置读取；具体偏移、尾部稀疏对象和 message id 由原 codec 决定。不要直接把它当成普通 JSON 对象。

典型写入链路：

1. `setStringField` / `setNumberField` / `setNestedMessage` 完成类型相关处理。
2. `setMessageField` 检查可变性；共享数组需要按原规则分离。
3. `setArrayField` 写入紧凑位置或尾部稀疏字段对象。
4. `serializeMessage` 将消息转换为 wire 数组，处理嵌套消息、字节串、非有限数字等特殊值。

`getMessageField` 的 `null` / `undefined` 行为、`readRepeatedMessages` 的过滤和冻结行为，都是协议运行库的语义；不能通过统一 `JSON.stringify/parse` 深拷贝替代。内部 flags 的 2、4、8、4096 等位掩码不是业务枚举，此次保留数值和判断顺序。

消息构造器已命名为 `WebsiteRequestMessage`、`OffscreenRequestMessage`、`FrameConfigurationMessage` 等，字段定义继续参考 [协议说明](../../docs/PROTOCOL.md)。隐藏页解析网页/frame 上报 envelope 的函数命名为 `parseWebsiteRequest`，因为它实际解析的是 `WebsiteRequestMessage`，不是内层 `FrameRequestMessage`。

## 3. URL、安全包装与资源释放

`MutableUrl` 分别保存 scheme、authority、path、query、fragment；`resolve()` 按组件覆盖并消解相对路径。`QueryData` 延迟解析 query，并保留重复 key 的多个值。

几个有意保留的细节：

- `get()` 只读首值；后台 `xa()` / 隐藏页 `la()` 返回全部值。不同编译目标的短方法名不通用。
- `QueryData.clone()` 原实现只复制 Map，不深拷贝里面的值数组。本次没有把这种共享行为“优化”掉。
- `createTrustedFrameUrl` 和 `setTrustedIframeSource` 保留 `goog#html` Trusted Types 策略及原包装类型校验；它们不是新增的 URL 来源白名单。
- `Disposable.dispose()` 幂等，释放时调用 `N()`；已销毁 owner 再接收 child 会立即释放 child。改变 `N` 属性名会破坏现有业务子类的覆盖方法。

## 4. 哪些短名称仍然保留

词法变量名与对象属性名不同。变量可以在解析作用域后重命名；对象属性可能被原型、字符串 key、业务子类和跨上下文代码访问，不能用全局替换处理。

| 含义 | 后台属性 | 隐藏页属性 |
| --- | --- | --- |
| Promise 状态 / 结果 | `j` / `J` | `j` / `I` |
| Promise 父链、回调头 / 尾 | `o`、`l` / `v` | `o`、`l` / `v` |
| Promise 回调已排程 / 未处理拒绝 | `A` / `D` | `G` / `A` |
| Disposable 已销毁 / 析构队列 | `J` / `D` | `I` / `G` |
| Disposable 析构钩子 | `N()` | `N()` |
| 消息 backing array | `B` | `C` |
| URL scheme / host / path / query | `v` / `j` / `l` / `o` | 相同 |
| URL userInfo / port / fragment | `J` / `C` / `A` | `I` / `B` / `G` |
| QueryData 读取全部值 | `xa(key)` | `la(key)` |

这些含义也写在对应构造器/方法旁。相同字母在别的类里可以完全不同；例如消息的 `B` 与某个 transport 的 `B` 没有统一意义。

没有把两个目标强行抽成一个共享实现：它们有不同字段布局和编译特化，原型赋值及初始化顺序也需要保留。当前采用 **两份可读运行库 + 职责章节 + 业务适配层**，而不是引入一批互相循环依赖的库模块。

## 5. 还原和维护方式

相关文件：

- [vendor-names.mjs](../../scripts/vendor-names.mjs)：语义全局名称、核心函数形参/局部变量、原型方法说明。
- [vendor-model.mjs](../../scripts/vendor-model.mjs)：词法作用域分析、目标间结构配对、来源校验和 AST 正规形。
- [readable-vendor.mjs](../../scripts/readable-vendor.mjs)：按绑定改名、注释、受限语法展开、可重复生成。
- [vendor-provenance.json](../../research/vendor-provenance.json)：固定样本、抽取区间、原始导出列表及哈希。
- [vendor-symbol-map.json](../../research/vendor-symbol-map.json)：每个作用域内原名 → 可读名；`scope: 0` 是全局，不能脱离 scope 按单个字母查找。
- [vendor.test.mjs](../../tests/vendor.test.mjs)：还原器保护测试和原版/可读运行库的行为对照。

本次后台 682 个全局绑定、隐藏页 678 个全局绑定都有语义名称；计入局部变量，共处理 **5,555 个词法绑定**。这里的“处理”是按绑定安全改名，不表示每个编译临时值都找回了原开发者意图。

```sh
# 修改命名/说明后重新生成；旧 extract-vendor 命令也转入同一流程
pnpm vendor:generate

# 检查生成结果、来源与归一化后的绑定结构；不写文件
pnpm vendor:check

# 构建 Google + Demo、验证资源/映射、运行全部单元/差分测试
pnpm check

# 原生扩展 API 回归；Demo 端到端测试需先释放 4173 端口
pnpm test:browser
pnpm test:integration
```

修改可读源码后，如果希望它可重复生成，应同步修改命名/说明规则；单独编辑生成文件会被 `verify` 识别为漂移。普通 `pnpm build` 不自动重生成 vendor。若要改变算法，应单独建行为变更任务，不能通过更新哈希绕过校验。

## 6. “逻辑正确”的证据与边界

验证是几层组合，不以肉眼看起来相似为依据：

1. **来源不变**：原始文件/抽取区间哈希固定，许可证、资源及 manifest 保留。
2. **结构检查**：按作用域归一化变量名后比较 AST，保留引用绑定、属性、字面量、运算符和执行顺序。仅额外容许 `!0/!1` 展开为布尔量、独立逗号表达式语句展开为顺序表达式块，以及移除语句列表内的冗余分号；条件/return/for 中的逗号表达式不改。
3. **可重复生成**：生成内容、符号映射和构建 source map 与工作区一致；生产入口真实引用这些可读文件。
4. **运行对照**：20 项运行库/还原器测试，加上原有 22 项扩展行为测试和 7 项 Demo 单元测试。另有隔离 Chromium 原生扩展 API 回归与 Demo 离线集成测试。

这些不是全部路径的形式化等价证明。函数名、诊断堆栈、`Function.prototype.toString()`、源码长度和性能会改变；遥测中包含函数名称的诊断文字也可能不同。全部网络失败排列、所有遥测分支和真实 Google 服务端离线协同仍需独立验收。此次没有操作用户正式 Chrome，也没有新增权限、缓存能力或数据收集逻辑。
