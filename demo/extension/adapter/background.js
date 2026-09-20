import { ExtensionController } from "@offline-docs/extension-runtime/background/extension-controller.js";
import { createUrl } from "@offline-docs/extension-runtime/background/runtime-api.js";
import { writeLocalState } from "@offline-docs/extension-runtime/background/offline-state.js";

// Reuse the actual reconstructed controller, manager, state, alarm and wire codec.
// Only the website origin and startup telemetry differ from the Google build.
class DemoExtensionController extends ExtensionController {
  getDocsOrigin() {
    return createUrl(DEMO_ORIGIN);
  }
  reportStartup() {
    /* No Google telemetry or demo analytics. */
  }
  async load() {
    await super.load();
    await writeLocalState({
      docsDomain: new URL(DEMO_ORIGIN).host,
      demoSource: DEMO_RUNTIME_HASH,
    });
  }
}
self.window = self;
new DemoExtensionController().load();
