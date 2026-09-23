/** 业务与运行库的兼容边界：语义 API 对外，编译属性 ABI 的访问集中在这里。 */
import * as runtime from "../vendor/background-runtime.js";

export const LegacyPromise = runtime.LegacyPromise;
export const Disposable = runtime.Disposable;
export const createDeferred = runtime.createDeferred;
export const asLegacyPromise = runtime.asLegacyPromise;
export const rejectOptedOut = runtime.rejectOptedOut;
export const normalizeError = runtime.normalizeError;
export const attachErrorContext = runtime.attachErrorContext;
export const ownDisposable = runtime.ownDisposable;
export const EventHandler = runtime.EventHandler;
export const createSessionId = runtime.createSessionId;
export const schedule = runtime.schedule;
export const waitForOffscreenStartup = runtime.waitForOffscreenStartup;
export const serialize = runtime.serializeMessage;
export const readType = runtime.readMessageType;
export const readNumber = runtime.readNumberField;
export const readString = runtime.readStringField;
export const readOptionalString = runtime.readStringOrDefault;
export const readBoolean = (message) => !!runtime.readBooleanField(message, 2);
export const readNested = runtime.readNestedMessage;
export const setString = runtime.setStringField;
export const setNumber = runtime.setNumberField;
export const setNested = runtime.setNestedMessage;
export const setBoolean = (message, field, value) =>
  runtime.setMessageField(message, field, runtime.requireBoolean(value));
export const readEchoType = (message) =>
  runtime.coerceInt32(runtime.getMessageField(message, 1));
export const hasStringField = (message, field) =>
  runtime.coerceString(runtime.getMessageField(message, field)) != null;

export const Messages = Object.freeze({
  Error: runtime.ErrorMessage,
  FrameResponse: runtime.FrameResponseMessage,
  DomainPolicyResponse: runtime.DomainPolicyResponseMessage,
  WebsiteResponse: runtime.WebsiteResponseMessage,
  OffscreenResponse: runtime.OffscreenResponseMessage,
  FrameConfiguration: runtime.FrameConfigurationMessage,
  FrameConnection: runtime.FrameConnectionMessage,
  Alarm: runtime.AlarmMessage,
  FrameRequest: runtime.FrameRequestMessage,
  UserChange: runtime.UserChangeMessage,
  OffscreenRequest: runtime.OffscreenRequestMessage,
  EnableOffline: runtime.EnableOfflineMessage,
  DomainPolicyRequest: runtime.DomainPolicyRequestMessage,
  WebsiteRequest: runtime.WebsiteRequestMessage,
});
export const getOffscreenError = (response) => response.wa();
export const getFrameResponse = (response) => response.Ma();

export function createUrl(value) {
  return new runtime.MutableUrl(value);
}
export const setPath = runtime.setUrlPath;
export const setQuery = runtime.setUrlQueryParameter;
export const setScheme = runtime.setUrlScheme;

export class SampledLogger {
  constructor(samplePercentage) {
    this.raw = new runtime.SampledLogger(samplePercentage);
  }
  bind(reporter) {
    this.raw.j = reporter;
  }
  info(error, context) {
    return runtime.logSampledInfo(this.raw, error, context);
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

export function createErrorReporter(errorUrl, reportNonFatalErrors, sessionId) {
  const options = new runtime.ErrorReporterOptions();
  options.J = false;
  options.A = true;
  options.j = errorUrl;
  options.o = true;
  options.l = runtime.getFlagService();
  options.D = false;
  options.v = runtime.createCrashTelemetryProcessor;
  const reporter = new runtime.ErrorReporter(options);
  reporter.o.sessionTypeName = "offline-event-page";
  reporter.o.reportsNonFatalErrors = String(reportNonFatalErrors);
  reporter.o.sid = String(sessionId);
  return reporter;
}
export const reporterContext = (reporter) => reporter.o;
export const reportError = runtime.reportError;
export const protectCallback = runtime.protectCallback;
export const monitorPromise = runtime.monitorPromise;
export const unwrapMessageEvent = (event) => event.j;
