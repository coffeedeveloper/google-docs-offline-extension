# 研究资料脱敏说明

本次审查范围是准备提交的新增研究资料，以及已跟踪文件的新增行；不是对整个 Git 历史的隐私审计。未执行 commit 或 push。

## 已处理的内容

检查了 5 个 Service Worker 启动脚本和 1 个 scheduler frame HTML，其中 4 个 SW 入口和 HTML 含需替换的个人配置。Drive root 入口未发现需要替换的个人字段。

| 类别 | 处理方式 |
| --- | --- |
| OUID、本地账号标识、GAIA ID | `REDACTED_OUID` 或全零字符串；包含内嵌 JSON 和缓存名前缀中的账号部分 |
| 邮箱、头像地址 | `redacted@example.invalid`、`https://example.invalid/redacted-avatar` |
| frame 启动 token | `REDACTED_BOOTSTRAP_TOKEN` |
| 客户端 key 配置 | `REDACTED_PUBLIC_CLIENT_KEY`；保守清理，不据此认定为登录凭据 |
| 遥测会话标识、时间及实验数据 | 标识使用 `REDACTED_TELEMETRY_ID`，`ilcm` 中的数值归零 |
| CSP nonce、输入偏好 | `REDACTED_NONCE`；语言/输入法偏好置空 |

占位值刻意不可用于真实账号。字段名、配置结构、任务开关和周期仍供静态研究，但这不代表脱敏响应可直接运行，也不声称与真实认证场景行为等价。

公开扩展 ID、版本化静态资源地址、构建标签及公共库版权署名保留。公开 URL 中的版本签名不等于账号 token，不做无差别替换。14 个公开 bundle 文件（7 个下载响应和 7 个格式化副本）保持字节不变。

## 清单与验证边界

- [SW 来源清单](../service-worker-original/sources.json) 和 [frame 来源清单](../offscreen-original/sources.json) 的入口 SHA-256、字节数对应当前脱敏副本，不是原始个性化响应。
- 未在仓库中新建未脱敏备份或原值映射表；不记录被替换的个人值。
- 检查语法、清单哈希、公开 bundle 格式化可复现性和归一化 AST 一致性；不执行下载脚本，不连接账号做运行回归。
- 对新增文件和新增行复查账号 ID、邮箱、头像 URL、API key、JWT、私钥、本机用户目录和文档地址等模式，并对命中内容进行分类。公开库中已有的作者署名不是本次账号数据，予以保留。
- 验证摘要见 [隐私检查记录](../research/validation/research-privacy.json)。静态模式检查不能保证识别任意未知格式的敏感数据，后续采集仍须字段级审查。

## 后续采集规则

只保存必要响应，不导出 Cookie、Authorization、完整 HAR 或实际文档同步正文。新的 HTML、worker 启动响应和账号配置先保持本地私有，脱敏后再加入版本控制；新增公开 bundle 也需确认确为匿名可获取的静态资源。

本轮没有清理既有提交、其他目录的原件或浏览器数据。如果未脱敏文件曾被另行分享或提交，需要另行评估凭据失效和历史清理，不能靠修改当前文件撤回已泄露数据。
