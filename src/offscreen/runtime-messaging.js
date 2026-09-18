import {
  createDeferred,
  serialize,
  Messages,
  getResponseError,
  readString,
  normalizeError,
  attachErrorContext,
  readNumber,
} from "./runtime-api.js";

export function sendWorkerRequest(request) {
  const reply = createDeferred();
  chrome.runtime.sendMessage(serialize(request), undefined, (wireResponse) => {
    const runtime = chrome.runtime;
    if (wireResponse === undefined) {
      reply.reject(
        Error(
          "No response from Offscreen page:" +
            (runtime.lastError
              ? runtime.lastError.message
              : "without lastError"),
        ),
      );
      return;
    }
    const response = new Messages.OffscreenResponse(wireResponse);
    const error = getResponseError(response);
    if (error)
      reply.reject(Error("Error from Offscreen page:" + readString(error, 1)));
    else reply.resolve(response);
  });
  // This runtime spells its catch alias Ra. Keep its scheduling semantics.
  return reply.promise.Ra((error) => {
    error = normalizeError(error);
    attachErrorContext(
      error,
      "offscreenDocumentRequestType",
      readNumber(request, 1).toString(),
    );
    throw error;
  });
}
