import { ExtensionController } from "./extension-controller.js";

// The original worker provides this alias for its shared runtime.
self.window = self;
new ExtensionController().load();
