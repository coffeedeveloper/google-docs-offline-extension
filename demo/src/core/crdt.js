import * as Y from "yjs";
export { Y };
export const encode = (bytes) => {
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
export const content = (doc) => ({
  title: doc.getText("title").toString(),
  body: doc.getText("body").toString(),
});

// Apply only the changed range, never replace a whole text with a remote snapshot.
// Yjs merges concurrent inserts/deletes; the outbox carries CRDT updates, not text PUTs.
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
