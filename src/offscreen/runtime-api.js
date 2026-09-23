/** 隐藏页运行库适配：函数使用语义名称，短属性保留与样本一致的 ABI。 */
import * as runtime from "../vendor/offscreen-runtime.js";

export const Disposable = runtime.Disposable;
export const createDeferred = runtime.createDeferred;
export const asLegacyPromise = runtime.resolvedLegacyPromise;
export const legacyRace = runtime.raceLegacyPromises;
export const normalizeError = runtime.normalizeError;
export const attachErrorContext = runtime.attachErrorContext;
export const ownDisposable = runtime.ownDisposable;
export const EventHandler = runtime.EventHandler;
export const createSessionId = runtime.createSessionId;
export const schedule = runtime.schedule;
export const serialize = runtime.serializeMessage;
export const readNested = runtime.readNestedMessage;
export const readString = runtime.readStringField;
export const readOptionalValue = (message, field) =>
  runtime.coerceString(runtime.getMessageField(message, field));
export const readType = (message) =>
  runtime.coerceInt32(
    runtime.getMessageField(
      message,
      1,
      undefined,
      runtime.preserveNullFieldToken,
    ),
  );
export const readEchoType = (message) =>
  runtime.coerceInt32(runtime.getMessageField(message, 1));
export const readNumber = runtime.readNumberField;
export const setString = runtime.setStringField;
export const setNumber = runtime.setNumberField;
export const setNested = runtime.setNestedMessage;
export const parseWebsiteRequest = runtime.parseWebsiteRequest;
export const getResponseError = (response) => response.xa();
export const unwrapMessageEvent = (event) => event.j;

export const Messages = Object.freeze({
  Error: runtime.ErrorMessage,
  FrameConnection: runtime.FrameConnectionMessage,
  FrameRequest: runtime.FrameRequestMessage,
  UserChange: runtime.UserChangeMessage,
  WebsiteRequest: runtime.WebsiteRequestMessage,
  FrameResponse: runtime.FrameResponseMessage,
  WebsiteResponse: runtime.WebsiteResponseMessage,
  OffscreenResponse: runtime.OffscreenResponseMessage,
  FrameConfiguration: runtime.FrameConfigurationMessage,
  OffscreenRequest: runtime.OffscreenRequestMessage,
});
export const createUrl = (value) => new runtime.MutableUrl(value);
export const setPath = runtime.setUrlPath;

export function queryParameter(url, name, parse, fallback) {
  const values = url.o.la(name);
  return values.length !== 0 ? parse(values[0]) : fallback;
}

export function createGoogleIframe(url) {
  const iframe = runtime.createDomElement("IFRAME");
  iframe.id = "extensionFrame";
  // Retain Google's Trusted Types / safe script URL handling.
  runtime.setTrustedIframeSource(iframe, runtime.createTrustedFrameUrl(url));
  return iframe;
}

export class SampledLogger {
  constructor(samplePercentage) {
    this.raw = new runtime.SampledLogger(samplePercentage);
  }
  bind(reporter) {
    this.raw.j = reporter;
  }
  info(error) {
    return runtime.logSampledInfo(this.raw, error);
  }
  error(error, context) {
    return runtime.logSampledError(this.raw, error, context);
  }
}

export function initializeConsoleLogging() {
  const logger = new runtime.ConsoleLogger();
  runtime.enableConsoleLogger(logger);
  return logger;
}

export function createErrorReporter(
  errorUrl,
  reportNonFatalErrors,
  sessionId,
  version,
  status,
) {
  const options = new runtime.ErrorReporterOptions();
  options.I = false;
  options.G = true;
  options.j = errorUrl;
  options.o = false;
  options.l = runtime.getFlagService();
  options.A = false;
  options.v = runtime.createCrashTelemetryProcessor;
  const reporter = new runtime.ErrorReporter(options);
  reporter.o.sessionTypeName = "offline-off-screen-document";
  reporter.o.reportsNonFatalErrors = String(reportNonFatalErrors);
  reporter.o.sid = sessionId;
  reporter.o.extensionVersion = version;
  reporter.o.optInStatus = status;
  return reporter;
}

export const reportError = runtime.reportError;
export function drainLogsAfterConnectionTimeout(reporter) {
  // 原版是 race：日志排空或额外 14 秒计时任一结束就继续；并非等两者全部完成。
  return runtime.raceLegacyPromises([
    runtime.waitForFrameTimeout(),
    runtime.flushBufferedLogs(reporter.B),
  ]);
}
