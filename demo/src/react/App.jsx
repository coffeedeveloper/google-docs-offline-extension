import { useSyncExternalStore } from "react";
import { getSnapshot, subscribe } from "../application.js";
import { EditorPage } from "./EditorPage.jsx";
import { ListPage } from "./ListPage.jsx";
import { SetupPage } from "./SetupPage.jsx";
import { RouteLink } from "./common.jsx";

export function App() {
  const state = useSyncExternalStore(subscribe, getSnapshot);
  let page;
  if (state.loading) page = <main className="loading">正在打开本地文档…</main>;
  else if (state.fatalError)
    page = (
      <main className="setup">
        <h1>无法打开本地存储</h1>
        <p role="alert">{state.fatalError}</p>
        <p>请检查浏览器是否允许 IndexedDB。不要清除有未同步修改的数据。</p>
      </main>
    );
  else if (state.routeError)
    page = (
      <main className="setup">
        <h1>暂时无法打开文档</h1>
        <p role="alert">{state.routeError}</p>
        <p>离线时只能打开已缓存的文档；待同步修改不会因此被删除。</p>
        <RouteLink href="/">返回文件列表</RouteLink>
      </main>
    );
  else if (state.pathname === "/setup") page = <SetupPage state={state} />;
  else if (state.editor)
    page = <EditorPage key={state.editor.id} state={state} />;
  else page = <ListPage state={state} />;
  return (
    <>
      {page}
      {state.toast && (
        <div className="toast" role="status">
          {state.toast}
        </div>
      )}
    </>
  );
}
