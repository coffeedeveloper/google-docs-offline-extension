import { useRef, useState } from "react";
import {
  navigate,
  performAction,
  setNetworkSimulation,
  showError,
} from "../application.js";

export const time = (value) =>
  value
    ? new Date(value).toLocaleString("zh-CN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "—";
export function Icon() {
  return <img src="/icon.svg" alt="" />;
}
export function RouteLink({ href, children, onClick, ...props }) {
  return (
    <a
      {...props}
      href={href}
      data-route
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        event.preventDefault();
        void navigate(href).catch(showError);
      }}
    >
      {children}
    </a>
  );
}
export function Brand() {
  return (
    <RouteLink className="brand" href="/">
      <Icon />
      Offline <span>Docs</span>
    </RouteLink>
  );
}
export function ActionButton({ action, id, children, className = "small" }) {
  const locked = useRef(false);
  const [busy, setBusy] = useState(false);
  return (
    <button
      className={className}
      data-action={action}
      data-id={id}
      disabled={busy}
      onClick={async () => {
        if (locked.current) return;
        locked.current = true;
        setBusy(true);
        try {
          await performAction(action, id);
        } catch (error) {
          showError(error);
        } finally {
          locked.current = false;
          setBusy(false);
        }
      }}
    >
      {children}
    </button>
  );
}
export function ErrorBox({ error }) {
  return (
    <div id="page-error">
      {error && (
        <div role="alert" className="error-box">
          {error} <ActionButton action="retry">重试</ActionButton>
        </div>
      )}
    </div>
  );
}
export function NetworkTag({ state }) {
  return (
    <span
      className={`tag ${state.offline || state.serviceError ? "warn" : "good"}`}
    >
      {state.offline
        ? "离线工作"
        : state.serviceError
          ? "服务暂不可达"
          : "在线"}
    </span>
  );
}
export function OfflineSwitch({ state, className = "" }) {
  const [changingTo, setChangingTo] = useState(null);
  return (
    <label className={`checkbox-label ${className}`}>
      <input
        id="simulate-offline"
        type="checkbox"
        checked={changingTo ?? state.simulated}
        disabled={changingTo !== null}
        onChange={async (event) => {
          const next = event.target.checked;
          setChangingTo(next);
          try {
            await setNetworkSimulation(next);
          } catch (error) {
            showError(error);
          } finally {
            setChangingTo(null);
          }
        }}
      />
      演示断网
    </label>
  );
}
