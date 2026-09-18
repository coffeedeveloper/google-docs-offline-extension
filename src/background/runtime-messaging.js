import {
  createDeferred,
  Messages,
  serialize,
  getOffscreenError,
  readString,
  normalizeError,
  attachErrorContext,
  readNumber,
} from "./runtime-api.js";

/** One request/one reply on chrome.runtime; preserves missing-response errors. */
export function sendOffscreenRequest(request) {
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
    const error = getOffscreenError(response);
    if (error)
      reply.reject(Error("Error from Offscreen page:" + readString(error, 1)));
    else reply.resolve(response);
  });
  return reply.promise.catch((error) => {
    error = normalizeError(error);
    attachErrorContext(
      error,
      "offscreenDocumentRequestType",
      readNumber(request, 1).toString(),
    );
    throw error;
  });
}
