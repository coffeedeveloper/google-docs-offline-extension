// 兼容旧命令：固定来源范围已移入 provenance；始终生成可读版，不能覆盖回压缩命名。
// 升级原始版本需单独审阅来源范围、符号映射、字段 ABI 和测试，不自动猜测新边界。
import { generateReadableVendors } from "./readable-vendor.mjs";

await generateReadableVendors({ write: true });
console.log(
  "PASS: regenerated readable vendors from the pinned original ranges.",
);
