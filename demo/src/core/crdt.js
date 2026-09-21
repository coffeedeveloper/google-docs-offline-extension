import * as Y from "yjs";
export { Y };
export const encode = (bytes) => {
  // 二进制更新转 Base64 便于 JSON 传输；分块避免大数组展开超过参数数量限制。
  let result = "";
  for (let start = 0; start < bytes.length; start += 8192)
    result += String.fromCharCode(...bytes.subarray(start, start + 8192));
  return btoa(result);
};
export const decode = (value) =>
  Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
export function fromState(state) {
  const doc = new Y.Doc();
  if (state) Y.applyUpdate(doc, decode(state));
  return doc;
}
export const snapshot = (doc) => encode(Y.encodeStateAsUpdate(doc));
// title/body 是方便列表和 React 展示的派生文本，真正的合并依据仍是 CRDT state/update。
export const content = (doc) => ({
  title: doc.getText("title").toString(),
  body: doc.getText("body").toString(),
});

// 用公共前缀/后缀定位单个变化区间，保留未变化字符的 CRDT 身份。
// 这是纯文本输入适配，不是通用 diff；outbox 传 Yjs 更新，而非整篇正文 PUT。
export function replaceText(text, next) {
  const previous = text.toString();
  let prefix = 0,
    suffix = 0;
  while (
    prefix < previous.length &&
    prefix < next.length &&
    previous[prefix] === next[prefix]
  )
    prefix++;
  while (
    suffix < previous.length - prefix &&
    suffix < next.length - prefix &&
    previous.at(-1 - suffix) === next.at(-1 - suffix)
  )
    suffix++;
  const removed = previous.length - prefix - suffix;
  const inserted = next.slice(prefix, next.length - suffix);
  if (removed) text.delete(prefix, removed);
  if (inserted) text.insert(prefix, inserted);
}
