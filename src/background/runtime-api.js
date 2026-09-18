/** Compatibility boundary: opaque Closure/protobuf/telemetry internals stay here. */
import * as legacy from "../vendor/background-runtime.js";

export const LegacyPromise = legacy.X;
export const Disposable = legacy.W;
export const createDeferred = legacy.Hg;
export const asLegacyPromise = legacy.Ag;
export const rejectOptedOut = legacy.Bg;
export const normalizeError = legacy.T;
export const attachErrorContext = legacy.rb;
export const ownDisposable = legacy.dg;
export const EventHandler = legacy.Yi;
export const createSessionId = legacy.qf;
export const schedule = legacy.Ri;
export const waitForOffscreenStartup = legacy.Si;
export const serialize = legacy.Mc;
export const readType = legacy.zd;
export const readNumber = legacy.xd;
export const readString = legacy.yd;
export const readOptionalString = legacy.wd;
export const readBoolean = (message) => !!legacy.td(message, 2);
export const readNested = legacy.I;
export const setString = legacy.Ad;
export const setNumber = legacy.Bd;
export const setNested = legacy.sd;
export const setBoolean = (message, field, value) =>
  legacy.ad(message, field, legacy.sc(value));
export const readEchoType = (message) => legacy.vc(legacy.H(message, 1));
export const hasStringField = (message, field) =>
  legacy.Bc(legacy.H(message, field)) != null;

export const Messages = Object.freeze({
  Error: legacy.em,
  FrameResponse: legacy.fm,
  DomainPolicyResponse: legacy.gm,
  WebsiteResponse: legacy.hm,
  OffscreenResponse: legacy.jm,
  FrameConfiguration: legacy.vm,
  FrameConnection: legacy.wm,
  Alarm: legacy.xm,
  FrameRequest: legacy.ym,
  UserChange: legacy.zm,
  OffscreenRequest: legacy.Am,
  EnableOffline: legacy.Wm,
  DomainPolicyRequest: legacy.Xm,
  WebsiteRequest: legacy.Ym,
});
export const getOffscreenError = (response) => response.wa();
export const getFrameResponse = (response) => response.Ma();

export function createUrl(value) {
  return new legacy.Th(value);
}
export const setPath = legacy.Wh;
export const setQuery = legacy.gi;
export const setScheme = legacy.Uh;

export class SampledLogger {
  constructor(samplePercentage) {
    this.raw = new legacy.bm(samplePercentage);
  }
  bind(reporter) {
    this.raw.j = reporter;
  }
  info(error, context) {
    return legacy.cm(this.raw, error, context);
  }
  error(error, context) {
    return legacy.dm(this.raw, error, context);
  }
}

export function initializeConsoleLogging() {
  const logger = new legacy.Zm();
  legacy.$m(logger);
  return logger;
}

export function createErrorReporter(errorUrl, reportNonFatalErrors, sessionId) {
  const options = new legacy.zl();
  options.J = false;
  options.A = true;
  options.j = errorUrl;
  options.o = true;
  options.l = legacy.nh();
  options.D = false;
  options.v = legacy.Wl;
  const reporter = new legacy.yl(options);
  reporter.o.sessionTypeName = "offline-event-page";
  reporter.o.reportsNonFatalErrors = String(reportNonFatalErrors);
  reporter.o.sid = String(sessionId);
  return reporter;
}
export const reporterContext = (reporter) => reporter.o;
export const reportError = legacy.Kl;
export const protectCallback = legacy.Ll;
export const monitorPromise = legacy.Ml;
export const unwrapMessageEvent = (event) => event.j;
