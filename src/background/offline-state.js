import { LegacyPromise } from "./runtime-api.js";
import { OptInStatus } from "../shared/message-types.js";

/** Control state only. Document bodies live in the Google website's database. */
export function readStorage(storageArea, keys) {
  return new LegacyPromise((resolve, reject) => {
    storageArea.get(keys, (values) => {
      if (chrome.runtime.lastError) reject(Error(chrome.runtime.lastError));
      else resolve(values);
    });
  });
}

export function writeLocalState(values) {
  return new LegacyPromise((resolve, reject) => {
    chrome.storage.local.set(values, () => {
      if (chrome.runtime.lastError) reject(Error(chrome.runtime.lastError));
      else resolve();
    });
  });
}

export function getOptedInUserId() {
  return readStorage(chrome.storage.local, ["optedInUserOuid"]).then(
    (values) => values.optedInUserOuid || null,
  );
}

export function enableOffline(userId) {
  return writeLocalState({ offlineOptedIn: true }).then(() => {
    if (userId) return writeLocalState({ optedInUserOuid: userId });
  });
}

export function disableOffline() {
  return writeLocalState({ offlineOptedIn: false }).then(
    () =>
      new LegacyPromise((resolve, reject) => {
        chrome.storage.local.remove("optedInUserOuid", () => {
          if (chrome.runtime.lastError) reject(Error(chrome.runtime.lastError));
          else resolve();
        });
      }),
  );
}

export function getOptInStatus() {
  return readStorage(chrome.storage.local, ["offlineOptedIn"]).then(
    ({ offlineOptedIn }) => {
      switch (offlineOptedIn) {
        case undefined:
          return OptInStatus.UNKNOWN;
        case true:
          return OptInStatus.ENABLED;
        case false:
          return OptInStatus.DISABLED;
        default:
          throw Error("Cannot handle opt in value " + offlineOptedIn);
      }
    },
  );
}

export function getLastFrameConnectionTime() {
  return readStorage(chrome.storage.local, [
    "lastSuccessfulFrameConnectTime",
  ]).then((values) => values.lastSuccessfulFrameConnectTime || null);
}
