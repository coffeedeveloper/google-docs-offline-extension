/**
 * 人工审阅的语义名称。左侧是后台样本的编译符号，不是跨 bundle 的全局名字。
 * 函数名后的单词依次对应形参；数值算法、wire 字段和对象 ABI 不在这里改写。
 */
export const backgroundNames = `
aa createIdentityFunction
n createNoopFunction
ba createPropertyGetter propertyName
ca createConstantFunction value
p prototypeAlias
da createObjectWithPrototype prototype
ea definePropertyCompat target propertyName descriptor
fa findGlobalObject candidate
ha polyfillGlobal
r installPolyfill qualifiedName factory
ia setPrototypeOfImplementation
ja supportsProtoAssignment
ka prototypeProbe
la prototypeProbeInstance
na setPrototypeOfCompat
v inheritCompiledClass subclass superclass
oa createArrayIteratorNext values
w getIterator iterable
pa iterableToArray iterable
qa assertIteratorResult result
y GeneratorContext
ra enterGenerator context
sa setGeneratorException context error
ta GeneratorPropertyIterator object
ua GeneratorEngine program
va returnFromGenerator engine value
wa advanceDelegatedIterator engine iteratorMethod value resume
xa runGenerator engine
ya GeneratorIterator engine
za runAsyncGenerator iterator
Aa collectRestArguments
Ba createIterableIterator next
Ca hasOwnProperty object key
Da assignProperties target source
Ea checkStringSearchArguments receiver searchValue methodName
Fa createArrayEntryIterator arrayLike mapEntry
Ga closureNamespace
z runtimeGlobal
Ha readClosureFlag flagId fallback
Ia lookupGlobalPath path
Ja getValueType value
Ka isArrayLike value
La isObjectLike value
Na objectUidKey
Oa nextObjectUid
Pa nativeBind callback receiver boundArguments
Qa fallbackBind callback receiver boundArguments
A bindFunction callback receiver boundArguments
Ra partialApply callback boundArguments
Sa evaluateGlobally source
Ta identity value
B inheritClosureClass subclass superclass
Ua ClosureError message cause
Va throwAsynchronously error
Wa trimString text
Xa useUserAgentClientHints
Ya strictArrayValidation
Za userAgentData
$a runtimeNavigator
ab hasUserAgentBrand brand
C userAgentContains token
bb hasUserAgentBrands
cb arrayIndexOf values value
db arraySome values predicate
eb removeArrayValue values value
fb extendArray target values
gb isFirefox
hb isSafariLike
ib base64DecodeTable
jb base64EncodeTables
kb supportsUint8Array
lb supportsBtoa
mb byteStringConstructionToken
nb supportsStructuredClone
ob ByteString value constructionToken
pb emptyByteString
qb emptyByteStringInstance
rb attachErrorContext error key value
sb readErrorContext error
tb incidentCounts
ub reportLimitedIncident incidentKey maximum
vb supportsBigInt
wb supportsNativeSymbols
xb createInternalSymbol description fallback useRegistry
yb arrayFlagsSymbol
zb defaultMessageSymbol
Ab oneofCasesSymbol
Bb unknownFieldsSymbol
Cb unknownFieldIncidentSymbol
Db arrayConstructorIncidentSymbol
Eb messageMarkerSymbol
Fb arrayFlagsDescriptor
Gb defineProperties
D arrayFlagsKey
Hb emptyRepeatedField
Ib emptyRepeatedFieldStorage
Kb addArrayFlags array flags
Jb setArrayFlags array flags
Lb markImmutableMessageArray array
Mb messageMarkerToken
Nb isImmutableMessage message flags
Ob copyOnWriteToken
Pb repeatedFieldModeToken
Qb nestedFieldModeToken
Rb markTypePredicate predicate
Sb isNumberValue
Tb isStringValue
Ub isBooleanValue
Vb isBigIntValue
Wb supportsNativeBigIntValue
Xb normalizeBigInt value
Yb isInt64Representation
dc isSafeInt64Representation
bc minimumSafeIntegerText
Zb minimumSafeIntegerBigInt
cc maximumSafeIntegerText
$b maximumSafeIntegerBigInt
ac decimalMagnitudeWithin value limit
F int64LowWord
ec int64HighWord
fc splitUnsigned64 value
hc splitSigned64 value
jc unsigned64ToDecimal low high
kc padDecimalChunk value
lc signed64WordsToDecimal
ic negate64Words low high
mc bigIntAsIntN
nc isSafeInteger
oc isFiniteNumber
pc truncateNumber
qc coerceSpecialNumber value
rc getTypeDisplayName constructor
sc requireBoolean value
tc decimalNumberPattern
uc isNumericRepresentation value
vc coerceInt32 value
wc coerceNumericInt32 value
xc normalizeInt64String value
yc numberToInt64Representation value
zc numberToInt64String value
Ac coerceInt64 value
Bc coerceString value
Cc coerceMessage value MessageType createDefault parentFlags
Dc createFrozenDefaultMessage MessageType
Ec identityMessageValue value
Fc UnknownFieldSet
Gc forEachUnknownField fields callback
Hc cloneUnknownFields fields
Ic checkUnknownFieldBudget fields fieldNumber
Jc transformMessageArray array flags transformValue forceCopy
Lc toJsonFieldValue value
Nc cloneJsonValue
Kc jsonConversionState
Mc serializeMessage message
G initializeMessageArray array pivot messageId
Oc initializeMessageArrayWithFlags array pivot messageId extraFlags
Pc reportInvalidMessageArray
Qc cloneFieldValue value forceCopy
Tc cloneMessageWrapper message array copyOnWrite
Rc cloneMessageArray array flags immutable forceCopy
Uc mutableMessageCopy message
Vc detachCopyOnWriteArray message
Wc assertMessageMutable message
Xc markArrayContainsMutableValues array flags
Sc freezeMessageArrayIfShareable message array flags
Yc zeroInt64
Zc preserveNullFieldToken
H getMessageField message fieldNumber hasMessageId preserveNull transform
$c getArrayField array fieldNumber hasMessageId transform
ad setMessageField message fieldNumber value
bd setArrayField array flags fieldNumber value
cd prepareRepeatedArray array flags parentArray parentFlags fieldNumber mode converted forceCopy
fd getRepeatedArray array fieldNumber
gd inheritRepeatedArrayFlags flags parentFlags
dd isFrozenRepeatedArray flags
hd coerceByteString value
id clearOneof message fieldNumbers
kd getActiveOneofField message fieldNumbers fieldNumber
ld computeOneofCase message fieldNumbers
nd getOneofCaseCache array
jd setOneofCase array flags fieldNumbers fieldNumber
md computeArrayOneofCase cases array flags fieldNumbers
od getMutableNestedMessage message MessageType fieldNumber
pd getNestedArrayMessage array flags MessageType fieldNumber
qd getNestedMessageOrDefault message MessageType fieldNumber
I readNestedMessage message MessageType fieldNumber
rd readRepeatedMessages message MessageType fieldNumber
sd setNestedMessage message MessageType fieldNumber value
ed copyRepeatedArrayFlags flags parentFlags
td readBooleanField message fieldNumber
ud readCoercedNumberField message fieldNumber fallback
vd readInt64Field message fieldNumber
wd readStringOrDefault message fieldNumber
xd readNumberField message fieldNumber
yd readStringField message fieldNumber
zd readMessageType message
Ad setStringField message fieldNumber value
Bd setNumberField message fieldNumber value
J ArrayMessage array pivot messageId
Cd parseMessageJson MessageType json
Dd readTelemetryBootstrapMessage
Id immutableMessageFromArray message array
Jd createMessageJsonParser MessageType
Kd AnyMessage array
Ld isMutableAnyMessage
Md BooleanFeatureFlag key
Nd IgnoredErrorsFeatureFlag
Qd StringFlagValueMessage array
Rd stringFlagOneofFields
Sd FeatureFlagValueMessage array
Td featureFlagOneofFields
Ud FeatureFlagSetMessage array
Vd FeatureFlagBootstrapMessage array
Wd parseFeatureFlagBootstrap
Pd IgnoredErrorsMessage array
Od parseIgnoredErrors
Xd Int64 low high
Yd int64ToNumber value
$d isZeroInt64 value
Zd negateInt64 value
ee int64FromNumber value
K int64FromWords low high
de INT64_ZERO
be INT64_ONE
ce INT64_NEGATIVE_ONE
fe INT64_MAX
ae INT64_MIN
Fd readWizGlobalData key windowObject
ge featureFlagStoreInstance
he getFeatureFlagStore
ie FeatureFlagStore
je readFeatureFlag store flag
ke ExperimentConfigMessage array
le ignoredErrorsFlag
me crashStorageFlag
ne telemetryIntegrationFlag
oe ExperimentSamplingMessage array
pe getDefaultExperimentSamplingMessage
L JavaObject
P associateNativeError throwable nativeError
Q captureJavaStack throwable
ye wrapJavaThrowable error
Be isJavaThrowable value
Fe boxedIntegerCache
Ge initializeIntegerCache
Pe createIllegalStateException message
ze createNullPointerException
Te javaDoublePattern
Ve javaLongFromNumber value
We javaNumberToInt value
R checkedJavaCast value predicate TargetType
te getConstructor value
Ze getOrCreateClassMetadata constructor key create
qe javaObjectEquals left right
re nextJavaIdentityHash
Ye getJavaClass value
ef boxInteger value
Je createBoxedInteger value
ff isBoxedInteger value
S requireNonNull value
He createIntegerCacheArray
hf createJavaArray dimensions metadata
Ie setJavaArrayElement array index value
M javaString value
jf zeroPadding length
kf JavaClass constructor dimensions
O getJavaClassMetadata constructor dimensions
se getJavaClassName javaClass
mf substringAfterLast text delimiter
lf repeatJavaString text count
we isNativeError value
ve linkNativeErrorToThrowable nativeError throwable
nf XplatException message cause
pf isNativeErrorValue value
qf createSessionId
sf isNativeArray value
uf isNativeObject value
wf isNativeObjectMap value
xf telemetryContextKeys
zf emptyDisposableChildren
yf JavaDisposable
Eh CircularBuffer capacity
xe NativeErrorClass
of NativeErrorValueClass
tf NativeObjectClass
vf NativeObjectMapClass
Af initializeDisposableChildren
Bf toJavaThrowable value
Cf installGlobalErrorListener listener
Df normalizeErrorDetails error
Ef formatErrorStack error seen
Gf getErrorFingerprint error
T normalizeError error context
If normalizeErrorWithContext error context
Hf captureStackTrace excludeFunction
Kf formatCallerChain callback seen
Ff getFunctionName callback
Lf functionNameCache
Mf LogLevel name value
Nf SEVERE_LOG_LEVEL
Of WARNING_LOG_LEVEL
Pf CONFIG_LOG_LEVEL
Qf LogBuffer
Rf logBufferInstance
Sf forEachBufferedLog callback
Tf getLogBuffer
Uf buildUrl scheme userInfo host port path query fragment
Vf urlPartsPattern
Wf forEachQueryParameter query callback
Xf appendEncodedQuery url query
Yf appendQueryValue key value output
Zf encodeQueryPairs pairs startIndex
$f encodeQueryObject parameters
V appendQueryParameters url parameters
ag sanitizeReportUrl
bg disposeIfPossible disposable
cg disposeAll disposables
W Disposable
dg ownDisposable owner child
eg wrapAsyncContext
fg ObjectPool create reset
gg releaseToPool pool item
hg entryPointCallbacks
ig entryPointMonitors
jg entryPointsMonitored
kg registerEntryPoint callback
lg CallbackQueue
mg callbackNodePool
ng CallbackQueueNode
og scheduleMicrotaskFlush
pg microtaskFlushScheduled
qg microtaskQueue
rg enqueueMicrotask callback receiver
sg initializeMicrotaskScheduler
tg flushMicrotasks
ug internalPromiseExecutor
vg isClosureThenable value
X LegacyPromise executor
xg PromiseCallbackNode
yg promiseCallbackPool
zg allocatePromiseCallback onFulfilled onRejected receiver
Ag asLegacyPromise value
Bg rejectOptedOut
Cg resolveThenable value onFulfilled onRejected
Hg createDeferred
Ig PromiseResolver promise resolve reject
Lg cancelPromise promise error
Og appendPromiseCallback promise callback
Jg chainPromise promise onFulfilled onRejected receiver
wg settlePromise promise state value
Dg assimilateThenable value onFulfilled onRejected receiver
Rg callThenSafely thenable thenMethod onFulfilled onRejected receiver
Pg schedulePromiseCallbacks promise
Mg shiftPromiseCallback promise
Ng executePromiseCallback promise callback state value
Sg invokePromiseCallback callback state value
Qg scheduleUnhandledRejection promise error
Tg unhandledRejectionHandler
Kg PromiseCancellationError message
Ug LegacyDeferred
Xg settleDeferred deferred succeeded value
Wg assertDeferredNotFired deferred
$g rethrowError error
ah addDeferredCallback deferred callback receiver
ch addDeferredBoth deferred callback receiver
bh addDeferredCallbacks deferred onSuccess onError receiver
eh hasDeferredErrback deferred
dh deferredConsumedToken
Yg runDeferredCallbacks deferred
hh resolvedDeferred value
Zg DeferredAlreadyCalledError
Vg DeferredCanceledError
gh DeferredUnhandledError error
fh deferredUnhandledErrors
jh isJavaProvider value
lh isFlagService value
mh flagServiceProvider
nh getFlagService
qh parseBooleanFlag value
sh hasClientFlag service key
th readNumericClientFlag service key
uh readStringClientFlag service key
rh checkFlagProviderAgreement service key
yh consumeQpsQuota limiter
Bh isStatisticsSlot value
Fh aggregateStatistics statistics timestamp reducer
Dh endOfStatisticsSlot statistics timestamp
zh resetStatisticsOnClockRollback statistics timestamp
Ah lastCircularBufferItem buffer
Gh circularBufferIndex buffer index
Ih networkStatusByName
Jh offlineNetworkStatus
Y defineNetworkStatus name severity
Kh initializeNetworkStatuses
Mh isObserverPair value
Oh trackObserver tracker observable observer
Ph forEachObjectValue object callback receiver
Qh shallowCloneObject object
Rh objectPrototypeKeys
Sh extendObject target source
Th MutableUrl value
Uh setUrlScheme url scheme decode
Vh setUrlPort url port
Wh setUrlPath url path decode
Xh setUrlQueryData url query decode
gi setUrlQueryParameter url key value
Yh decodeUrlComponent text preserveReserved
$h encodeUrlComponent text pattern preserveEscapes
hi percentEncodeCharacter character
ai schemeAndUserInfoEscapePattern
ci relativePathEscapePattern
bi absolutePathEscapePattern
fi queryEscapePattern
di fragmentEscapePattern
Zh QueryData encodedQuery ignoreCase
ii initializeQueryData query
ki hasQueryParameter query key
ji normalizeQueryKey query key
ei setQueryIgnoreCase query ignoreCase
li reloadAfterError
mi ReloadPrompt
ni BaseEvent type target
oi supportsPassiveEvents
pi BrowserEvent event currentTarget
qi listenableMarkerKey
ri nextListenerKey
si EventListenerRecord listener source type capture receiver
ti clearListenerRecord record
ui ListenerMap source
wi removeListenerRecord map record
vi findListenerIndex listeners listener capture receiver
xi listenerMapKey
yi onEventNameCache
zi nativeListenerCount
Ai listen source type listener options receiver
Di registerNativeListener source type listener once options receiver
Fi createNativeEventProxy
Bi listenOnce source type listener options receiver
Ii unlisten source type listener options receiver
Ji unlistenByKey record
Gi getOnEventName type
Hi dispatchNativeEvent record event
Ei getListenerMap source
Ki listenerWrapperKey
Ci normalizeEventListener listener
Li ErrorEvent type error
Mi documentIdPathPattern
Ni resourceIdPathPattern
Oi hasDocumentPath url
Pi redactDocumentPath url value
Z EventTarget
Qi dispatchListeners target type capture event
Ri schedule callback delay receiver
Si waitForOffscreenStartup
Ti DelayTimer callback delay receiver
Ui BackoffTimer callback initialDelay maximumDelay jitter
Vi restartBackoff timer reset runImmediately
Xi calculateBackoffDelay timer delay
Yi EventHandler receiver
Zi eventHandlerTypeBuffer
$i RetryingLogTransport request endpoint limiter timeout onSuccess options reportFailures
bj flushLogTransport transport
cj sendNextLogEntry transport entry
aj scheduleLogRetry transport
gj BufferedLogTransport request endpoint limiter onSuccess options
dj dropFirstLogEntry transport
hj createFavaServiceId
ij ExperimentSamplingConfig array
jj ExperimentMetadata values
kj isArrayPrototypeIntact
lj knownInjectedErrorMessages
mj knownInjectedErrorPatterns
Ed BootstrapString value
Hd unwrapBootstrapString wrapper
nj CrashClassificationMessage array
oj CrashClientStateMessage array
pj readCrashClassification message
qj crashStateOneofFields
rj CrashSeverityMessage array
sj CrashMetadataMessage array
Gd TelemetryBootstrapMessage array
tj readCrashClientState message
uj BootstrapConfigProvider
vj Size width height
wj EnvironmentInspector
xj isScreenTampered
yj canCreateCanvas
zj isWorkerGlobalScope
Bj probeGlobalProperty key
Dj inspectNativeFunction inspector name getFunction
Ej describeJsType value
Aj automationPropertyProbes
Cj nativeFunctionProbes
Fj nativeFunctionPatterns
Gj injectedUrlPatterns
Hj injectedErrorPatterns
Ij ignoredErrorPatterns
Jj knownExtensionIds
Kj knownExtensionHosts
Lj knownInjectedNames
Mj knownInjectedScripts
Nj knownInjectedUrls
Oj knownInjectedErrorTokens
Pj ErrorClassifier classification code
Qj classifyError classifier error
Rj StackErrorClassifier
Tj KnownErrorClassifier classification code rules
Uj knownErrorRules
Vj ErrorRecord message stack cause severity metadata
Wj formatCauseChain error
Sj formatErrorRecord error
Xj ErrorRecordBuilder
Yj setErrorRecordMessage builder message
Zj buildErrorRecord builder
ak readErrorMessage error
ck readErrorStack error
dk buildErrorCause error depth
ek isErrorLike value
bk stringifyError value
fk createErrorRecord error severity metadata
gk RegexErrorClassifier patterns label classification code
hk matchesAnyPattern text patterns
ik TokenErrorClassifier tokens label classification code matchType
jk includesAnyToken text tokens
kk createTokenClassifier tokens label classification
lk EnvironmentErrorClassifier classification code createInspector
mk defaultErrorClassifiers
nk severeDowngradeCodes
ok ErrorClassificationPipeline classifiers
pk createClassificationPipeline extraClassifiers patterns downgradeEnabled shouldClassify
rk runErrorClassification pipeline error
tk createClassificationMetadata classification error metadata
sk markSevereDowngrade pipeline code
qk compileErrorPatterns patterns
uk TelemetryObserver
vk NoopEnvironmentInspector
wk uuidAlphabet
xk createUuid
yk TelemetryProcessor observer options
zk addTelemetrySessionMetadata processor error severity context
Ak processTelemetryError processor error severity metadata
Bk copyMapEntries target source
Ck recordTelemetryFailure metadata error key
Dk supportedCrashClassifications
Ek supportsCrashClassification
Fk readBooleanFeatureFlag flag
Gk createTelemetryProcessor options observer
Hk NoopTelemetryObserver
Ik createDefaultTelemetryProcessor options
Jk countRelevantStackLines stack
Kk AbortErrorClassifier
Lk topWindowCandidate
Mk topWindowValue
Nk telemetryTopWindow
Ok globalSymbolConstructor
Pk globalErrorMapSymbol
Qk getWizEventHandlers element eventType
Rk parsedActionCache
Sk actionPatternCache
Tk registerClientAction callback
Uk setJsAction element actions
Vk EntryPointProtector errorHandler
Xk protectedFunctionKey protector wrapper
Wk getProtectedFunction protector callback
Yk createProtectedFunction protector callback
Zk handleProtectedError protector error
al protectUnhandledRejections protector
bl protectGlobalTimer protector name
$k ProtectedFunctionError error
cl AbstractXhrFactory
dl xhrFactoryInstance
el NativeXhrFactory
fl XhrIo factory
gl httpSchemePattern
hl methodsWithRequestBody
il activeXhrRequests
jl timeoutXhr request
kl dispatchXhrError request
ml processXhrReadyState request
ll cleanupXhr request disposing
fj isSuccessfulXhr request
ej readXhrStatus request
nl GlobalErrorHandler reportUrl context disabled
pl GlobalErrorEvent error context
ql createGlobalErrorHandler reportUrl context
ol sendErrorReport url payload method context
rl setErrorTransport handler transport
sl LogTimeOrigin
tl logTimeOrigin
ul LogFormatter prefix
vl padTwoDigits value
wl TextLogFormatter prefix
xl formatLogRecord formatter record
yl ErrorReporter options
Bl installErrorReporter reporter
Al addExperimentMetadata reporter values
El reportFatalError reporter error context
Kl reportError reporter error context
Dl normalizeReportedEvent event context
Cl handleReportedEvent reporter event context rethrow contextKey
Ll protectCallback reporter callback receiver
Ml monitorPromise reporter promise
Jl buildReportContext reporter error context
Nl inferErrorMessage error context
Hl enrichReportContext reporter error context fatal
Fl errorReporterInstalled
Gl errorReporterInstallStack
zl ErrorReporterOptions
Il setErrorSeverity error severity
Ol normalizeSeverity severity
Pl NativePromiseResolver
Ql NativeCrashStorage
Rl NoopCrashStorage
Sl crashStorage
Tl severeSeverityNames
Ul CrashTelemetryObserver
Vl persistCrashTelemetry observer
Wl createCrashTelemetryProcessor options
Xl FetchXhrFactory options
Yl FetchXmlHttpRequest fetchScope streamBinaryChunks
am readNextResponseChunk request
$l completeFetchRequest request
Zl notifyReadyStateChange request
bm SampledLogger samplePercentage
cm logSampledInfo logger error context
dm logSampledError logger error context
em ErrorMessage array
fm FrameResponseMessage array
gm DomainPolicyResponseMessage array
hm WebsiteResponseMessage array
im setWebsiteResponseType message type
jm OffscreenResponseMessage array
km createOffscreenResponse type
vm FrameConfigurationMessage array
wm FrameConnectionMessage array
xm AlarmMessage array
ym FrameRequestMessage array
zm UserChangeMessage array
Am OffscreenRequestMessage array
Bm setOffscreenRequestType message type
Cm setOffscreenFrameRequest message request
Wm EnableOfflineMessage array
Xm DomainPolicyRequestMessage array
Ym WebsiteRequestMessage array
Zm ConsoleLogger
$m enableConsoleLogger logger
an runtimeConsole
bn writeConsoleLog consoleObject method message context
cn defaultFetchXhrFactory
`;

// 编译器给两个产物分配不同符号/布局；无法结构配对的差异在这里单独审阅。
export const offscreenOverrides = `
Eg raceLegacyPromises values
Bg resolvedLegacyPromise
Fg settleAllLegacyPromises values
pm createTrustedFrameUrl url
wf trustedTypesFactory
xf trustedTypesPolicy
zf createTrustedTypesPolicy
Af TrustedScriptUrl value
vj createDomElement tagName
Bf setTrustedIframeSource iframe trustedUrl
em parseWebsiteRequest json
Ri waitForFrameTimeout
$i flushBufferedLogs transport
Xl logSampledInfo logger error
Zl ErrorMessage array
$l FrameConnectionMessage array
am createTimestampedFrameConnection
bm FrameRequestMessage array
cm UserChangeMessage array
dm WebsiteRequestMessage array
fm FrameResponseMessage array
gm WebsiteResponseMessage array
hm setWebsiteResponseType message type
lm OffscreenResponseMessage array
mm setOffscreenResponseType message type
wm FrameConfigurationMessage array
xm OffscreenRequestMessage array
ym createOffscreenRequest type
zm createFrameConnectedRequest connection
Am setUserChange message change
`;

export function parseNames(text) {
  return Object.fromEntries(
    text
      .trim()
      .split(/\n/)
      .map((line) => {
        const [compiled, name, ...params] = line.trim().split(/\s+/);
        return [compiled, { name, params }];
      }),
  );
}

/** 核心算法的局部变量按实际用途审阅；同一编译寄存器复用时保留这一事实，不凭空拆变量。 */
export const coreLocals = {
  createDeferred: {
    a: "resolve",
    b: "reject",
    c: "promise",
    d: "resolvePromise",
    e: "rejectPromise",
  },
  LegacyPromise: { b: "promise", c: "settledValue" },
  allocatePromiseCallback: { d: "callbackNode" },
  cancelPromise: {
    c: "parentPromise",
    d: "subscriberCountOrPreviousNode",
    e: "cancelledSubscription",
    f: "previousNode",
    g: "subscription",
  },
  chainPromise: {
    e: "callbackNode",
    f: "resolveChild",
    g: "rejectChild",
    h: "settledValue",
    k: "callbackResult",
  },
  callThenSafely: {
    f: "rejectOnce",
    g: "resolveOnce",
    h: "completed",
    k: "settledValue",
  },
  shiftPromiseCallback: { b: "callbackNode" },
  asLegacyPromise: { b: "promise" },
  rejectOptedOut: { a: "error", b: "resolve", c: "reject" },
  raceLegacyPromises: { b: "resolve", c: "reject", d: "input", e: "index" },
  settleAllLegacyPromises: { b: "resolve", c: "remaining", d: "results" },
  mutableMessageCopy: { b: "backingArray", c: "flags" },
  setMessageField: { d: "backingArray" },
  readRepeatedMessages: {
    d: "modeOrForceCopy",
    e: "parentFlags",
    f: "parentArray",
    g: "immutableOrConverted",
    h: "mode",
    k: "mutableOrFlags",
    l: "originalFlagsOrIndex",
    m: "flagsOrMessage",
    q: "entryOrArray",
    r: "entryOrArray",
    t: "conversionFlags",
    x: "freezeChildren",
    w: "freezeChildren",
    u: "allMutable",
    N: "allImmutable",
    L: "allImmutable",
    E: "readIndex",
    ma: "writeIndex",
    ka: "writeIndex",
    U: "childMessage",
    R: "childMessage",
    Ma: "childImmutable",
    Ja: "childImmutable",
  },
  MutableUrl: { b: "urlParts" },
  initializeQueryData: { b: "encodedKey", c: "queryValue" },
  normalizeErrorDetails: {
    b: "locationOrStack",
    c: "inaccessibleFieldOrMessage",
    d: "lineNumber",
    e: "fileName",
  },
  formatErrorStack: { c: "stackText", d: "causeOrInnerCount", e: "index" },
  buildUrl: { h: "url" },
  forEachQueryParameter: {
    c: "index",
    d: "equalsIndex",
    e: "encodedValue",
    f: "encodedKey",
  },
  appendEncodedQuery: {
    c: "fragmentIndex",
    d: "queryIndex",
    e: "existingQuery",
  },
  negateInt64: { b: "negatedLow" },
  normalizeError: { c: "contextIndex" },
};

// 原型方法的属性名是 ABI；形参/局部变量仍可按词法作用域改名。
export const coreMethods = {
  "LegacyPromise.then": { params: ["onFulfilled", "onRejected", "receiver"] },
  "LegacyPromise.T": {
    params: ["onRejected", "receiver"],
    note: "catch 的后台编译别名；业务适配层依赖该 ABI。",
  },
  "LegacyPromise.ta": {
    params: ["onRejected", "receiver"],
    note: "catch 的隐藏页编译别名；不能只改属性名而遗漏业务调用。",
  },
  "LegacyPromise.cancel": { params: ["reason"] },
  "QueryData.add": {
    params: ["key", "value"],
    locals: { c: "existingValues" },
  },
  "QueryData.set": { params: ["key", "value"] },
  "QueryData.remove": { params: ["key"] },
  "QueryData.get": { params: ["key", "fallback"] },
  "QueryData.la": {
    params: ["key"],
    locals: { b: "values", c: "index" },
    note: "la(key) 返回该 key 的所有值；没有字符串 key 时返回所有参数值，不是只读第一个。",
  },
  "QueryData.xa": {
    params: ["key"],
    locals: { b: "values", c: "index" },
    note: "xa(key) 是后台版读取全部参数值的 ABI；隐藏页对应 la，不可跨 bundle 混用。",
  },
  "QueryData.forEach": {
    params: ["callback", "receiver"],
    locals: { c: "values", d: "key", e: "value" },
  },
  "QueryData.clone": {
    locals: { a: "copy" },
    note: "原实现只复制 Map，不深拷贝每个值数组；不要在等价还原中悄悄改变别名共享行为。",
  },
  "QueryData.toString": {
    locals: {
      a: "parts",
      b: "keys",
      c: "keyIndex",
      d: "keyOrValues",
      e: "encodedKey",
      f: "valueIndex",
      g: "encodedPair",
    },
  },
  "MutableUrl.toString": {
    locals: { a: "parts", b: "schemeOrUserInfo", c: "component" },
  },
  "MutableUrl.resolve": {
    params: ["relativeUrl"],
    locals: {
      b: "resolvedUrl",
      c: "overridesComponent",
      d: "path",
      e: "pathPartsOrSlashIndex",
      f: "segments",
      g: "segmentIndex",
      h: "segment",
    },
    note: "按 scheme → authority → path → query → fragment 逐级决定覆盖范围，并消解 . / ..；不是字符串拼接。",
  },
  "Int64.toString": {
    params: ["radix"],
    note: "超出安全整数范围时分块转十进制/进制，避免先转 Number 丢失精度。",
  },
  "Int64.equals": { params: ["other"] },
  "Int64.compare": { params: ["other"] },
  "Int64.add": {
    params: ["other"],
    locals: {
      b: "leftHighUpper16",
      c: "leftHighLower16",
      d: "leftLowUpper16OrCarry",
      e: "rightHighUpper16",
      f: "rightHighLower16",
      g: "lowUpperSum",
    },
    note: "拆成 16 位片段传播进位，最后按两个 32 位字截断；other 在末段被复用为低 16 位和。",
  },
  "Int64.multiply": {
    params: ["other"],
    note: "16 位部分积逐级累加，只保留 64 位；不能以普通浮点乘法替换。",
  },
  "Int64.div": {
    params: ["divisor"],
    note: "先处理零、最小负数和符号，再用近似商与乘积校正；保留边界溢出行为。",
  },
  "Int64.shiftLeft": { params: ["bits"] },
  "Int64.and": { params: ["other"] },
  "Int64.or": { params: ["other"] },
  "Int64.xor": { params: ["other"] },
};
