import { ExtensionController } from "@offline-docs/extension-runtime/background/extension-controller.js";
import { createUrl } from "@offline-docs/extension-runtime/background/runtime-api.js";
import { writeLocalState } from "@offline-docs/extension-runtime/background/offline-state.js";

// 继承真实共享控制器，不另写一份“看起来相似”的后台流程。
// 本文件只覆盖网站 origin、启动遥测和诊断标记；权限/来源校验在 Demo 构建层另作适配。
class DemoExtensionController extends ExtensionController {
  getDocsOrigin() {
    return createUrl(DEMO_ORIGIN);
  }
  reportStartup() {
    /* Demo 不发送 Google 启动遥测，也不收集演示分析数据。 */
  }
  async load() {
    await super.load();
    await writeLocalState({
      docsDomain: new URL(DEMO_ORIGIN).host,
      demoSource: DEMO_RUNTIME_HASH,
      // 指纹来自实际共享源码，集成测试据此确认浏览器加载的是当前构建，而非旧扩展。
    });
  }
}
self.window = self;
new DemoExtensionController().load();
