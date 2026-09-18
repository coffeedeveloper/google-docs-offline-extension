/** The only offscreen module that knows compiled runtime field names. */
import * as legacy from "../vendor/offscreen-runtime.js";

export const Disposable = legacy.X;
export const createDeferred = legacy.Gg;
export const asLegacyPromise = legacy.Bg;
export const legacyAll = legacy.Eg;
export const normalizeError = legacy.Hf;
export const attachErrorContext = legacy.nb;
export const ownDisposable = legacy.dg;
export const EventHandler = legacy.Wi;
export const createSessionId = legacy.kf;
export const schedule = legacy.Qi;
export const serialize = legacy.Gc;
export const readNested = legacy.ld;
export const readString = legacy.td;
export const readOptionalValue = (message, field) =>
  legacy.vc(legacy.K(message, field));
export const readType = (message) =>
  legacy.pc(legacy.K(message, 1, undefined, legacy.Tc));
export const readEchoType = (message) => legacy.pc(legacy.K(message, 1));
export const readNumber = legacy.sd;
export const setString = legacy.ud;
export const setNumber = legacy.vd;
export const setNested = legacy.nd;
export const parseFrameRequest = legacy.em;
export const getResponseError = (response) => response.xa();
export const unwrapMessageEvent = (event) => event.j;

export const Messages = Object.freeze({
  Error: legacy.Zl,
  FrameConnection: legacy.$l,
  FrameRequest: legacy.bm,
  UserChange: legacy.cm,
  WebsiteRequest: legacy.dm,
  FrameResponse: legacy.fm,
  WebsiteResponse: legacy.gm,
  OffscreenResponse: legacy.lm,
  FrameConfiguration: legacy.wm,
  OffscreenRequest: legacy.xm,
});
export const createUrl = (value) => new legacy.Sh(value);
export const setPath = legacy.Vh;

export function queryParameter(url, name, parse, fallback) {
  const values = url.o.la(name);
  return values.length !== 0 ? parse(values[0]) : fallback;
}

export function createGoogleIframe(url) {
  const iframe = legacy.vj("IFRAME");
  iframe.id = "extensionFrame";
  // Retain Google's Trusted Types / safe script URL handling.
  legacy.Bf(iframe, legacy.pm(url));
  return iframe;
}

export class SampledLogger {
  constructor(samplePercentage) {
    this.raw = new legacy.Wl(samplePercentage);
  }
  bind(reporter) {
    this.raw.j = reporter;
  }
  info(error) {
    return legacy.Xl(this.raw, error);
  }
  error(error, context) {
    return legacy.Yl(this.raw, error, context);
  }
}

export function initializeConsoleLogging() {
  const logger = new legacy.Fm();
  legacy.Gm(logger);
  return logger;
}

export function createErrorReporter(
  errorUrl,
  reportNonFatalErrors,
  sessionId,
  version,
  status,
) {
  const options = new legacy.wl();
  options.I = false;
  options.G = true;
  options.j = errorUrl;
  options.o = false;
  options.l = legacy.mh();
  options.A = false;
  options.v = legacy.Rl;
  const reporter = new legacy.vl(options);
  reporter.o.sessionTypeName = "offline-off-screen-document";
  reporter.o.reportsNonFatalErrors = String(reportNonFatalErrors);
  reporter.o.sid = sessionId;
  reporter.o.extensionVersion = version;
  reporter.o.optInStatus = status;
  return reporter;
}

export const reportError = legacy.Hl;
export function drainLogsAfterConnectionTimeout(reporter) {
  // Original code waits for both a further 14-second delay and pending reports.
  return legacy.Eg([legacy.Ri(), legacy.$i(reporter.B)]);
}
