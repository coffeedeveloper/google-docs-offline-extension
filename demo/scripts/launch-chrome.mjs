import { chromium } from "playwright";
import path from "node:path";
import { mkdir } from "node:fs/promises";
await mkdir(".profiles", { recursive: true });
const context = await chromium.launchPersistentContext(
  path.resolve(".profiles/demo-chrome"),
  {
    channel: "chromium",
    headless: false,
    args: [
      `--disable-extensions-except=${path.resolve("extension/dist")}`,
      `--load-extension=${path.resolve("extension/dist")}`,
    ],
  },
);
const page = context.pages()[0] || (await context.newPage());
await page.goto("http://localhost:4173");
console.log(
  "Isolated demo Chrome opened with the adapted reconstructed extension. No Google profile is modified. Close the window to exit.",
);
context.on("close", () => process.exit(0));
