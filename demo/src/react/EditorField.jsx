import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  beginComposition,
  cancelComposition,
  captureSelection,
  commitComposition,
  editDocument,
  resolveSelection,
  showError,
} from "../application.js";

export function EditorField({ field, value }) {
  const input = useRef(null),
    selection = useRef(null),
    composition = useRef(null);
  const trailingComposition = useRef(null);
  const [draft, setDraft] = useState(null);
  const rememberSelection = () => {
    const node = input.current;
    if (node && !composition.current)
      selection.current = captureSelection(
        field,
        node.selectionStart,
        node.selectionEnd,
      );
  };
  useLayoutEffect(() => {
    const node = input.current;
    if (composition.current || document.activeElement !== node) return;
    const range = resolveSelection(selection.current);
    if (range) node.setSelectionRange(...range);
  }, [value]);
  useEffect(
    () => () => {
      cancelComposition(composition.current);
    },
    [],
  );
  function finishComposition(value) {
    const session = composition.current;
    if (!session) return;
    composition.current = null;
    selection.current = null;
    trailingComposition.current = value;
    setDraft(null);
    void commitComposition(session, value).catch(showError);
  }
  const props = {
    ref: input,
    id: `document-${field}`,
    "aria-label": field === "body" ? "文档正文" : "文档标题",
    value: draft ?? value,
    maxLength: field === "body" ? 100000 : 200,
    onSelect: rememberSelection,
    onCompositionStart: (event) => {
      composition.current = beginComposition(field);
      trailingComposition.current = null;
      setDraft(event.currentTarget.value);
    },
    onCompositionEnd: (event) => finishComposition(event.currentTarget.value),
    onBlur: (event) => finishComposition(event.currentTarget.value),
    onChange: (event) => {
      const next = event.currentTarget.value;
      if (composition.current) {
        setDraft(next);
        return;
      }
      if (trailingComposition.current === next) {
        trailingComposition.current = null;
        return;
      }
      trailingComposition.current = null;
      void editDocument(field, next).catch(showError);
      rememberSelection();
    },
  };
  return field === "body" ? (
    <textarea
      {...props}
      className="document-body"
      spellCheck={false}
      placeholder="从这里开始书写…"
    />
  ) : (
    <input {...props} className="title-input" />
  );
}
