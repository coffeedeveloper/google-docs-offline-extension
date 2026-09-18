import {
  LegacyPromise,
  Messages,
  readString,
  setBoolean,
} from "./runtime-api.js";
import { readStorage } from "./offline-state.js";

export function getAllowedDomains() {
  return readStorage(chrome.storage.managed, [
    "allowedDocsOfflineDomains",
  ]).then((values) =>
    values && values.allowedDocsOfflineDomains
      ? values.allowedDocsOfflineDomains
      : [],
  );
}

export function getAutoEnabledDomains() {
  return readStorage(chrome.storage.managed, [
    "autoEnabledDocsOfflineDomains",
  ]).then((values) =>
    values && values.autoEnabledDocsOfflineDomains
      ? values.autoEnabledDocsOfflineDomains
      : [],
  );
}

export function queryDomainPolicy(request) {
  const domain = readString(request, 1);
  // Both reads start immediately; preserve the legacy promise implementation.
  const reads = [getAllowedDomains(), getAutoEnabledDomains()];
  return new LegacyPromise((resolve, reject) => {
    const values = [];
    let outstanding = reads.length;
    reads.forEach((read, index) =>
      read.then((value) => {
        values[index] = value;
        if (--outstanding === 0) resolve(values);
      }, reject),
    );
  }).then(([allowedDomains, autoEnabledDomains]) => {
    const autoEnabled = autoEnabledDomains.indexOf(domain) >= 0;
    const allowed = allowedDomains.indexOf(domain) >= 0 || autoEnabled;
    const response = new Messages.DomainPolicyResponse();
    setBoolean(response, 1, allowed);
    setBoolean(response, 2, autoEnabled);
    return response;
  });
}
