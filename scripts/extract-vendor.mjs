import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import beautify from "js-beautify";
import { root, baseline, sha256 } from "./common.mjs";

// One-time mechanical extraction of compiler/library and wire-codec code only.
// Business controllers, storage and lifecycle code are implemented in src/.
const specifications = {
  background: {
    file: "service_worker_bin_prod.js",
    // Eg is a compiler-specialized policy read, not a general Promise.all helper.
    // Its replacement lives in background/domain-policy.js; exclude it entirely.
    sections: [
      [null, "function Eg()"],
      ["function Hg()", "function lm(a)"],
      ["function vm(a)", "function Dm(a,b,c)"],
      ["function Wm(a)", "function dn()"],
    ],
    exports:
      "W, X, Hg, Ag, Bg, T, rb, dg, Th, Wh, gi, Uh, Yi, qf, Ri, Si, bm, cm, dm, em, fm, gm, hm, jm, vm, wm, xm, ym, zm, Am, Wm, Xm, Ym, Mc, I, H, vc, Bc, wd, yd, td, xd, zd, Ad, Bd, sd, sc, ad, cb, zl, yl, nh, Wl, Kl, Ll, Ml, Zm, $m",
  },
  offscreen: {
    file: "offscreendocument_main.js",
    sections: [
      [null, "function im(a,b)"],
      ["function lm(a)", "function nm(a)"],
      ["function pm(a)", "function qm(a)"],
      ["function wm(a)", "function Bm()"],
      ["function Fm()", "function Jm()"],
    ],
    exports:
      "X, Gg, Bg, Eg, Hf, nb, dg, Sh, Vh, Wi, kf, Qi, Ri, $i, vj, Bf, pm, Wl, Xl, Yl, Zl, $l, bm, cm, dm, em, fm, gm, lm, wm, xm, Gc, ld, K, pc, vc, Tc, td, rd, sd, ud, vd, nd, wl, vl, mh, Rl, Hl, Fm, Gm",
  },
};
await mkdir(path.join(root, "src/vendor"), { recursive: true });
const record = {};
for (const [name, spec] of Object.entries(specifications)) {
  const original = await readFile(path.join(baseline, spec.file), "utf8");
  const chunks = spec.sections.map(([start, end]) => {
    const first = start === null ? 0 : original.indexOf(start);
    const last = original.indexOf(end, first);
    if (first < 0 || last < first)
      throw Error(`Missing extraction boundary: ${name}: ${start} → ${end}`);
    return { start: first, end: last, text: original.slice(first, last) };
  });
  const body = chunks.map((x) => x.text).join("\n");
  const output =
    "// Generated compiler runtime, telemetry and wire codecs. See ../README.md.\n" +
    beautify.js(body, {
      indent_size: 2,
      wrap_line_length: 110,
      end_with_newline: true,
    }) +
    `\nexport { ${spec.exports} };\n`;
  const file = `src/vendor/${name}-runtime.js`;
  await writeFile(path.join(root, file), output);
  record[file] = {
    original: spec.file,
    originalSha256: sha256(original),
    sha256: sha256(output),
    ranges: chunks.map(({ start, end, text }) => ({
      start,
      end,
      sha256: sha256(text),
    })),
  };
}
await writeFile(
  path.join(root, "research/vendor-provenance.json"),
  JSON.stringify(record, null, 2) + "\n",
);
