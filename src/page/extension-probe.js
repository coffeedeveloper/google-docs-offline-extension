// Executed in the website's main world when Docs loads this exposed resource.
(function publishOfflineExtensionCapabilities() {
  window._docs_chrome_extension_exists = true;
  window._docs_chrome_extension_features_version = 2;
  window._docs_chrome_extension_permissions =
    "alarms clipboardRead clipboardWrite storage unlimitedStorage offscreen".split(
      " ",
    );
  window._docs_chrome_extension_manifest_version = 3;
  window._docs_chrome_extension_version = "1.110.1";
}).call(this);
