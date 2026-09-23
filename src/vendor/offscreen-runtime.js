/**
 * offscreen 运行库：从固定样本按词法绑定语义化还原。
 * 维护入口：src/vendor/README.md；重新生成：pnpm vendor:generate。
 * 保留原算法、执行顺序、短属性 ABI 和许可证；名称不是 Google 原始源码。
 */
"use strict";
/**
 * 编译器兼容层：继承、迭代器、generator 状态机与内建 polyfill。保留特性探测及初始化顺序。
 */
function createIdentityFunction() {
  return function (value) {
    return value;
  };
}
function createNoopFunction() {
  return function () {};
}
function createPropertyGetter(propertyName) {
  return function () {
    return this[propertyName];
  };
}
function createConstantFunction(value) {
  return function () {
    return value;
  };
}
var prototypeAlias,
  createObjectWithPrototype =
    typeof Object.create == "function"
      ? Object.create
      : function (value) {
          function helper() {}
          helper.prototype = value;
          return new helper();
        },
  definePropertyCompat =
    typeof Object.defineProperties == "function"
      ? Object.defineProperty
      : function (value, other, options) {
          if (value == Array.prototype || value == Object.prototype) return value;
          value[other] = options.value;
          return value;
        };
function findGlobalObject(candidate) {
  candidate = [
    "object" == typeof globalThis && globalThis,
    candidate,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var index = 0; index < candidate.length; ++index) {
    var intermediate = candidate[index];
    if (intermediate && intermediate.Math == Math) return intermediate;
  }
  throw Error("Cannot find global object");
}
var polyfillGlobal = findGlobalObject(this);
function installPolyfill(qualifiedName, factory) {
  if (factory)
    a: {
      var polyfillGlobal2 = polyfillGlobal;
      qualifiedName = qualifiedName.split(".");
      for (var index = 0; index < qualifiedName.length - 1; index++) {
        var intermediate = qualifiedName[index];
        if (!(intermediate in polyfillGlobal2)) break a;
        polyfillGlobal2 = polyfillGlobal2[intermediate];
      }
      qualifiedName = qualifiedName[qualifiedName.length - 1];
      index = polyfillGlobal2[qualifiedName];
      factory = factory(index);
      factory != index &&
        factory != null &&
        definePropertyCompat(polyfillGlobal2, qualifiedName, {
          configurable: true,
          writable: true,
          value: factory,
        });
    }
}
var setPrototypeOfImplementation;
if (typeof Object.setPrototypeOf == "function")
  setPrototypeOfImplementation = Object.setPrototypeOf;
else {
  var supportsProtoAssignment;
  a: {
    var prototypeProbe = { a: true },
      prototypeProbeInstance = {};
    try {
      prototypeProbeInstance.__proto__ = prototypeProbe;
      supportsProtoAssignment = prototypeProbeInstance.a;
      break a;
    } catch (caughtError) {}
    supportsProtoAssignment = false;
  }
  setPrototypeOfImplementation = supportsProtoAssignment
    ? function (value, other) {
        value.__proto__ = other;
        if (value.__proto__ !== other) throw new TypeError(value + " is not extensible");
        return value;
      }
    : null;
}
var setPrototypeOfCompat = setPrototypeOfImplementation;
function inheritCompiledClass(subclass, superclass) {
  subclass.prototype = createObjectWithPrototype(superclass.prototype);
  subclass.prototype.constructor = subclass;
  if (setPrototypeOfCompat) setPrototypeOfCompat(subclass, superclass);
  else
    for (var intermediate in superclass)
      if (intermediate != "prototype")
        if (Object.defineProperties) {
          var ownPropertyDescriptor = Object.getOwnPropertyDescriptor(superclass, intermediate);
          ownPropertyDescriptor &&
            Object.defineProperty(subclass, intermediate, ownPropertyDescriptor);
        } else subclass[intermediate] = superclass[intermediate];
  subclass.W = superclass.prototype;
}
function createArrayIteratorNext(values) {
  var index = 0;
  return function () {
    return index < values.length ? { done: false, value: values[index++] } : { done: true };
  };
}
function getIterator(iterable) {
  var intermediate = typeof Symbol != "undefined" && Symbol.iterator && iterable[Symbol.iterator];
  if (intermediate) return intermediate.call(iterable);
  if (typeof iterable.length == "number") return { next: createArrayIteratorNext(iterable) };
  throw Error(String(iterable) + " is not an iterable or ArrayLike");
}
function iterableToArray(iterable) {
  if (!(iterable instanceof Array)) {
    iterable = getIterator(iterable);
    for (var intermediate, values = []; !(intermediate = iterable.next()).done; )
      values.push(intermediate.value);
    iterable = values;
  }
  return iterable;
}
function assertIteratorResult(result) {
  if (!(result instanceof Object))
    throw new TypeError("Iterator result " + result + " is not an object");
}

/**
 * 保留字段 ABI：j=下一状态地址，G=执行中，o=委托迭代器，I=yield 返回值。
 */
function GeneratorContext() {
  this.G = false;
  this.o = null;
  this.I = void 0;
  this.j = 1;
  this.v = this.A = 0;
  this.J = this.l = null;
}
function enterGenerator(context) {
  if (context.G) throw new TypeError("Generator is already running");
  context.G = true;
}
GeneratorContext.prototype.B = function (value) {
  this.I = value;
};
function setGeneratorException(context, error) {
  context.l = { Ia: error, Na: true };
  context.j = context.A || context.v;
}
GeneratorContext.prototype.getNextAddressJsc = createPropertyGetter("j");
GeneratorContext.prototype.getYieldResultJsc = createPropertyGetter("I");
GeneratorContext.prototype.return = function (value) {
  this.l = { return: value };
  this.j = this.v;
};
GeneratorContext.prototype["return"] = GeneratorContext.prototype.return;
GeneratorContext.prototype.S = function (value) {
  this.l = { ga: value };
  this.v < value ? ((this.j = value), (this.l = null)) : (this.j = this.v);
};
GeneratorContext.prototype.jumpThroughFinallyBlocks = GeneratorContext.prototype.S;
GeneratorContext.prototype.F = function (value, other) {
  this.j = other;
  return { value: value };
};
GeneratorContext.prototype.yield = GeneratorContext.prototype.F;
GeneratorContext.prototype.ea = function (iterator, other) {
  iterator = getIterator(iterator);
  var iteration = iterator.next();
  assertIteratorResult(iteration);
  if (iteration.done) {
    this.I = iteration.value;
    this.j = other;
  } else return ((this.o = iterator), this.F(iteration.value, other));
};
GeneratorContext.prototype.yieldAll = GeneratorContext.prototype.ea;
GeneratorContext.prototype.ga = function (value) {
  this.j = value;
};
GeneratorContext.prototype.jumpTo = GeneratorContext.prototype.ga;
GeneratorContext.prototype.U = function () {
  this.j = 0;
};
GeneratorContext.prototype.jumpToEnd = GeneratorContext.prototype.U;
GeneratorContext.prototype.O = function (value, other) {
  this.A = value;
  other != void 0 && (this.v = other);
};
GeneratorContext.prototype.setCatchFinallyBlocks = GeneratorContext.prototype.O;
GeneratorContext.prototype.da = function (value) {
  this.A = 0;
  this.v = value || 0;
};
GeneratorContext.prototype.setFinallyBlock = GeneratorContext.prototype.da;
GeneratorContext.prototype.V = function (value, other) {
  this.j = value;
  this.A = other || 0;
};
GeneratorContext.prototype.leaveTryBlock = GeneratorContext.prototype.V;
GeneratorContext.prototype.L = function (value) {
  this.A = value || 0;
  value = this.l.Ia;
  this.l = null;
  return value;
};
GeneratorContext.prototype.enterCatchBlock = GeneratorContext.prototype.L;
GeneratorContext.prototype.M = function (value, other, options) {
  options ? (this.J[options] = this.l) : (this.J = [this.l]);
  this.A = value || 0;
  this.v = other || 0;
  this.l = null;
};
GeneratorContext.prototype.enterFinallyBlock = GeneratorContext.prototype.M;
GeneratorContext.prototype.R = function (value, other) {
  other = this.J.splice(other || 0)[0];
  (other = this.l = this.l || other)
    ? other.Na
      ? (this.j = this.A || this.v)
      : other.ga != void 0 && this.v < other.ga
        ? ((this.j = other.ga), (this.l = null))
        : (this.j = this.v)
    : (this.j = value);
};
GeneratorContext.prototype.leaveFinallyBlock = GeneratorContext.prototype.R;
GeneratorContext.prototype.P = function (value) {
  return new GeneratorPropertyIterator(value);
};
GeneratorContext.prototype.forIn = GeneratorContext.prototype.P;
function GeneratorPropertyIterator(object) {
  this.o = object;
  this.j = [];
  for (var intermediate in object) this.j.push(intermediate);
  this.j.reverse();
}
GeneratorPropertyIterator.prototype.l = function () {
  for (; this.j.length > 0; ) {
    var intermediate = this.j.pop();
    if (intermediate in this.o) return intermediate;
  }
  return null;
};
GeneratorPropertyIterator.prototype.getNext = GeneratorPropertyIterator.prototype.l;
function GeneratorEngine(program) {
  this.j = new GeneratorContext();
  this.l = program;
}
function returnFromGenerator(engine, value) {
  enterGenerator(engine.j);
  var intermediate = engine.j.o;
  if (intermediate)
    return advanceDelegatedIterator(
      engine,
      "return" in intermediate
        ? intermediate["return"]
        : function (value2) {
            return { value: value2, done: true };
          },
      value,
      engine.j.return,
    );
  engine.j.return(value);
  return runGenerator(engine);
}
function advanceDelegatedIterator(engine, iteratorMethod, value, resume) {
  try {
    var intermediate = iteratorMethod.call(engine.j.o, value);
    assertIteratorResult(intermediate);
    if (!intermediate.done) return ((engine.j.G = false), intermediate);
    var value2 = intermediate.value;
  } catch (caughtError) {
    return (
      (engine.j.o = null),
      setGeneratorException(engine.j, caughtError),
      runGenerator(engine)
    );
  }
  engine.j.o = null;
  resume.call(engine.j, value2);
  return runGenerator(engine);
}
function runGenerator(engine) {
  for (; engine.j.j; )
    try {
      var iterator = engine.l(engine.j);
      if (iterator) return ((engine.j.G = false), { value: iterator.value, done: false });
    } catch (caughtError) {
      {
        engine.j.I = void 0;
        setGeneratorException(engine.j, caughtError);
      }
    }
  engine.j.G = false;
  if (engine.j.l) {
    iterator = engine.j.l;
    engine.j.l = null;
    if (iterator.Na) throw iterator.Ia;
    return { value: iterator.return, done: true };
  }
  return { value: void 0, done: true };
}
function GeneratorIterator(engine) {
  this.next = function (value) {
    enterGenerator(engine.j);
    engine.j.o
      ? (value = advanceDelegatedIterator(engine, engine.j.o.next, value, engine.j.B))
      : (engine.j.B(value), (value = runGenerator(engine)));
    return value;
  };
  this.throw = function (value) {
    enterGenerator(engine.j);
    if (engine.j.o) {
      var intermediate = engine.j.o["throw"];
      if (intermediate)
        var intermediate2 = advanceDelegatedIterator(engine, intermediate, value, engine.j.B);
      else {
        value = engine.j.o;
        engine.j.o = null;
        try {
          {
            value["return"] &&
              ((intermediate2 = value["return"]()), assertIteratorResult(intermediate2));
            setGeneratorException(
              engine.j,
              new TypeError("The iterator does not provide a 'throw' method."),
            );
          }
        } catch (caughtError) {
          setGeneratorException(engine.j, caughtError);
        }
        intermediate2 = runGenerator(engine);
      }
    } else {
      setGeneratorException(engine.j, value);
      intermediate2 = runGenerator(engine);
    }
    return intermediate2;
  };
  this.return = function (value) {
    return returnFromGenerator(engine, value);
  };
  this[Symbol.iterator] = function () {
    return this;
  };
}
function runAsyncGenerator(iterator) {
  function helper(helper3) {
    return iterator.next(helper3);
  }
  function helper2(helper3) {
    return iterator.throw(helper3);
  }
  return new Promise(function (callback, other) {
    function helper3(helper4) {
      helper4.done
        ? callback(helper4.value)
        : Promise.resolve(helper4.value).then(helper, helper2).then(helper3, other);
    }
    helper3(iterator.next());
  });
}
installPolyfill("globalThis", function (value) {
  return value || polyfillGlobal;
});
installPolyfill("Symbol", function (value) {
  function helper(helper3) {
    if (this instanceof helper) throw new TypeError("Symbol is not a constructor");
    return new helper2(intermediate + (helper3 || "") + "_" + index++, helper3);
  }
  function helper2(helper3, helper4) {
    this.j = helper3;
    definePropertyCompat(this, "description", {
      configurable: true,
      writable: true,
      value: helper4,
    });
  }
  if (value) return value;
  helper2.prototype.toString = createPropertyGetter("j");
  var intermediate = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
    index = 0;
  return helper;
});
installPolyfill("Symbol.iterator", function (value) {
  if (value) return value;
  value = Symbol("Symbol.iterator");
  definePropertyCompat(Array.prototype, value, {
    configurable: true,
    writable: true,
    value: function () {
      return createIterableIterator(createArrayIteratorNext(this));
    },
  });
  return value;
});
function createIterableIterator(next) {
  next = { next: next };
  next[Symbol.iterator] = function () {
    return this;
  };
  return next;
}
installPolyfill("Promise", function (value) {
  function helper(helper4) {
    this.j = 0;
    this.o = void 0;
    this.l = [];
    this.I = false;
    var intermediate = this.v();
    try {
      helper4(intermediate.resolve, intermediate.reject);
    } catch (caughtError) {
      intermediate.reject(caughtError);
    }
  }
  function helper2() {
    this.j = null;
  }
  function helper3(helper4) {
    return helper4 instanceof helper
      ? helper4
      : new helper(function (callback) {
          callback(helper4);
        });
  }
  if (value) return value;
  helper2.prototype.l = function (value2) {
    if (this.j == null) {
      this.j = [];
      var instance = this;
      this.o(function () {
        instance.A();
      });
    }
    this.j.push(value2);
  };
  var setTimeout2 = polyfillGlobal.setTimeout;
  helper2.prototype.o = function (value2) {
    setTimeout2(value2, 0);
  };
  helper2.prototype.A = function () {
    for (; this.j && this.j.length; ) {
      var intermediate = this.j;
      this.j = [];
      for (var index = 0; index < intermediate.length; ++index) {
        var callback = intermediate[index];
        intermediate[index] = null;
        try {
          callback();
        } catch (caughtError) {
          this.v(caughtError);
        }
      }
    }
    this.j = null;
  };
  helper2.prototype.v = function (value2) {
    this.o(function () {
      throw value2;
    });
  };
  helper.prototype.v = function () {
    function helper4(helper5) {
      return function (value2) {
        intermediate || ((intermediate = true), helper5.call(instance, value2));
      };
    }
    var instance = this,
      intermediate = false;
    return { resolve: helper4(this.M), reject: helper4(this.A) };
  };
  helper.prototype.M = function (value2) {
    if (value2 === this) this.A(new TypeError("A Promise cannot resolve to itself"));
    else if (value2 instanceof helper) this.O(value2);
    else {
      a: switch (typeof value2) {
        case "object":
          var intermediate = value2 != null;
          break a;
        case "function":
          intermediate = true;
          break a;
        default:
          intermediate = false;
      }
      intermediate ? this.L(value2) : this.G(value2);
    }
  };
  helper.prototype.L = function (value2) {
    var intermediate = void 0;
    try {
      intermediate = value2.then;
    } catch (caughtError) {
      this.A(caughtError);
      return;
    }
    typeof intermediate == "function" ? this.P(intermediate, value2) : this.G(value2);
  };
  helper.prototype.A = function (value2) {
    this.B(2, value2);
  };
  helper.prototype.G = function (value2) {
    this.B(1, value2);
  };
  helper.prototype.B = function (value2, other) {
    if (this.j != 0)
      throw Error(
        "Cannot settle(" + value2 + ", " + other + "): Promise already settled in state" + this.j,
      );
    this.j = value2;
    this.o = other;
    this.j === 2 && this.R();
    this.F();
  };
  helper.prototype.R = function () {
    var instance = this;
    setTimeout2(function () {
      if (instance.J()) {
        var console = polyfillGlobal.console;
        typeof console !== "undefined" && console.error(instance.o);
      }
    }, 1);
  };
  helper.prototype.J = function () {
    if (this.I) return false;
    var CustomEvent = polyfillGlobal.CustomEvent,
      Event = polyfillGlobal.Event,
      dispatchEvent = polyfillGlobal.dispatchEvent;
    if (typeof dispatchEvent === "undefined") return true;
    typeof CustomEvent === "function"
      ? (CustomEvent = new CustomEvent("unhandledrejection", { cancelable: true }))
      : typeof Event === "function"
        ? (CustomEvent = new Event("unhandledrejection", { cancelable: true }))
        : ((CustomEvent = polyfillGlobal.document.createEvent("CustomEvent")),
          CustomEvent.initCustomEvent("unhandledrejection", false, true, CustomEvent));
    CustomEvent.promise = this;
    CustomEvent.reason = this.o;
    return dispatchEvent(CustomEvent);
  };
  helper.prototype.F = function () {
    if (this.l != null) {
      for (var index = 0; index < this.l.length; ++index) helper22.l(this.l[index]);
      this.l = null;
    }
  };
  var helper22 = new helper2();
  helper.prototype.O = function (value2) {
    var intermediate = this.v();
    value2.ja(intermediate.resolve, intermediate.reject);
  };
  helper.prototype.P = function (value2, other) {
    var intermediate = this.v();
    try {
      value2.call(other, intermediate.resolve, intermediate.reject);
    } catch (caughtError) {
      intermediate.reject(caughtError);
    }
  };
  helper.prototype.then = function (value2, other) {
    function helper4(helper6, helper7) {
      return typeof helper6 == "function"
        ? function (value3) {
            try {
              callback(helper6(value3));
            } catch (caughtError) {
              callback2(caughtError);
            }
          }
        : helper7;
    }
    var callback,
      callback2,
      helper5 = new helper(function (value3, other2) {
        callback = value3;
        callback2 = other2;
      });
    this.ja(helper4(value2, callback), helper4(other, callback2));
    return helper5;
  };
  helper.prototype.catch = function (value2) {
    return this.then(void 0, value2);
  };
  helper.prototype.ja = function (callback, callback2) {
    function helper4() {
      switch (instance.j) {
        case 1:
          callback(instance.o);
          break;
        case 2:
          callback2(instance.o);
          break;
        default:
          throw Error("Unexpected state: " + instance.j);
      }
    }
    var instance = this;
    this.l == null ? helper22.l(helper4) : this.l.push(helper4);
    this.I = true;
  };
  helper.resolve = helper3;
  helper.reject = function (value2) {
    return new helper(function (value3, callback) {
      callback(value2);
    });
  };
  helper.race = function (value2) {
    return new helper(function (value3, other) {
      for (
        var iterator = getIterator(value2), iteration = iterator.next();
        !iteration.done;
        iteration = iterator.next()
      )
        helper3(iteration.value).ja(value3, other);
    });
  };
  helper.all = function (value2) {
    var iterator = getIterator(value2),
      iteration = iterator.next();
    return iteration.done
      ? helper3([])
      : new helper(function (callback, other) {
          function helper4(helper5) {
            return function (value3) {
              values[helper5] = value3;
              index--;
              index == 0 && callback(values);
            };
          }
          var values = [],
            index = 0;
          do {
            values.push(void 0);
            index++;
            helper3(iteration.value).ja(helper4(values.length - 1), other);
            iteration = iterator.next();
          } while (!iteration.done);
        });
  };
  return helper;
});
/**
 * function hasOwnProperty() { [native code] }
 * function hasOwnProperty() { [native code] }
 * 保留字段 ABI：function hasOwnProperty() { [native code] }
 */
function hasOwnProperty(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}
var assignProperties =
  typeof Object.assign == "function"
    ? Object.assign
    : function (value, other) {
        if (value == null) throw new TypeError("No nullish arg");
        value = Object(value);
        for (var index = 1; index < arguments.length; index++) {
          var intermediate = arguments[index];
          if (intermediate)
            for (var intermediate2 in intermediate)
              hasOwnProperty(intermediate, intermediate2) &&
                (value[intermediate2] = intermediate[intermediate2]);
        }
        return value;
      };
installPolyfill("Object.assign", function (value) {
  return value || assignProperties;
});
installPolyfill("Symbol.dispose", function (value) {
  return value ? value : Symbol("Symbol.dispose");
});
installPolyfill("Array.prototype.find", function (value) {
  return value
    ? value
    : function (value2, other) {
        a: {
          var instance = this;
          instance instanceof String && (instance = String(instance));
          for (var length = instance.length, index = 0; index < length; index++) {
            var intermediate = instance[index];
            if (value2.call(other, intermediate, index, instance)) {
              value2 = intermediate;
              break a;
            }
          }
          value2 = void 0;
        }
        return value2;
      };
});
installPolyfill("WeakMap", function (value) {
  function helper(helper6) {
    this.j = (intermediate2 += Math.random() + 1).toString();
    if (helper6) {
      helper6 = getIterator(helper6);
      for (var intermediate3; !(intermediate3 = helper6.next()).done; ) {
        intermediate3 = intermediate3.value;
        this.set(intermediate3[0], intermediate3[1]);
      }
    }
  }
  function helper2() {}
  function helper3(helper6) {
    var intermediate3 = typeof helper6;
    return (intermediate3 === "object" && helper6 !== null) || intermediate3 === "function";
  }
  function helper4(helper6) {
    if (!hasOwnProperty(helper6, intermediate)) {
      var helper22 = new helper2();
      definePropertyCompat(helper6, intermediate, { value: helper22 });
    }
  }
  function helper5(helper6) {
    var callback = Object[helper6];
    callback &&
      (Object[helper6] = function (value2) {
        if (value2 instanceof helper2) return value2;
        Object.isExtensible(value2) && helper4(value2);
        return callback(value2);
      });
  }
  if (
    (function () {
      if (!value || !Object.seal) return false;
      try {
        var intermediate3 = Object.seal({}),
          intermediate4 = Object.seal({}),
          value2 = new value([
            [intermediate3, 2],
            [intermediate4, 3],
          ]);
        if (value2.get(intermediate3) != 2 || value2.get(intermediate4) != 3) return false;
        value2.delete(intermediate3);
        value2.set(intermediate4, 4);
        return !value2.has(intermediate3) && value2.get(intermediate4) == 4;
      } catch (caughtError) {
        return false;
      }
    })()
  )
    return value;
  var intermediate = "$jscomp_hidden_" + Math.random();
  helper5("freeze");
  helper5("preventExtensions");
  helper5("seal");
  var intermediate2 = 0;
  helper.prototype.set = function (value2, other) {
    if (!helper3(value2)) throw Error("Invalid WeakMap key");
    helper4(value2);
    if (!hasOwnProperty(value2, intermediate)) throw Error("WeakMap key fail: " + value2);
    value2[intermediate][this.j] = other;
    return this;
  };
  helper.prototype.get = function (value2) {
    return helper3(value2) && hasOwnProperty(value2, intermediate)
      ? value2[intermediate][this.j]
      : void 0;
  };
  helper.prototype.has = function (value2) {
    return (
      helper3(value2) &&
      hasOwnProperty(value2, intermediate) &&
      hasOwnProperty(value2[intermediate], this.j)
    );
  };
  helper.prototype.delete = function (value2) {
    return helper3(value2) &&
      hasOwnProperty(value2, intermediate) &&
      hasOwnProperty(value2[intermediate], this.j)
      ? delete value2[intermediate][this.j]
      : false;
  };
  return helper;
});
installPolyfill("Map", function (value) {
  function helper() {
    var record = {};
    return (record.previous = record.next = record.head = record);
  }
  function helper2(helper5, helper6) {
    var iterator = helper5[1];
    return createIterableIterator(function () {
      if (iterator) {
        for (; iterator.head != helper5[1]; ) iterator = iterator.previous;
        for (; iterator.next != iterator.head; )
          return ((iterator = iterator.next), { done: false, value: helper6(iterator) });
        iterator = null;
      }
      return { done: true, value: void 0 };
    });
  }
  function helper3(helper5, helper6) {
    var intermediate = helper6 && typeof helper6;
    intermediate == "object" || intermediate == "function"
      ? weakMap.has(helper6)
        ? (intermediate = weakMap.get(helper6))
        : ((intermediate = "" + ++index), weakMap.set(helper6, intermediate))
      : (intermediate = "p_" + helper6);
    var intermediate2 = helper5[0][intermediate];
    if (intermediate2 && hasOwnProperty(helper5[0], intermediate))
      for (helper5 = 0; helper5 < intermediate2.length; helper5++) {
        var intermediate3 = intermediate2[helper5];
        if (
          (helper6 !== helper6 && intermediate3.key !== intermediate3.key) ||
          helper6 === intermediate3.key
        )
          return { id: intermediate, list: intermediate2, index: helper5, entry: intermediate3 };
      }
    return { id: intermediate, list: intermediate2, index: -1, entry: void 0 };
  }
  function helper4(helper5) {
    this[0] = {};
    this[1] = helper();
    this.size = 0;
    if (helper5) {
      helper5 = getIterator(helper5);
      for (var intermediate; !(intermediate = helper5.next()).done; ) {
        intermediate = intermediate.value;
        this.set(intermediate[0], intermediate[1]);
      }
    }
  }
  if (
    (function () {
      if (
        !value ||
        typeof value != "function" ||
        !value.prototype.entries ||
        typeof Object.seal != "function"
      )
        return false;
      try {
        var intermediate = Object.seal({ x: 4 }),
          value2 = new value(getIterator([[intermediate, "s"]]));
        if (
          value2.get(intermediate) != "s" ||
          value2.size != 1 ||
          value2.get({ x: 4 }) ||
          value2.set({ x: 4 }, "t") != value2 ||
          value2.size != 2
        )
          return false;
        var iterator = value2.entries(),
          iteration = iterator.next();
        if (iteration.done || iteration.value[0] != intermediate || iteration.value[1] != "s")
          return false;
        iteration = iterator.next();
        return iteration.done ||
          iteration.value[0].x != 4 ||
          iteration.value[1] != "t" ||
          !iterator.next().done
          ? false
          : true;
      } catch (caughtError) {
        return false;
      }
    })()
  )
    return value;
  var weakMap = new WeakMap();
  helper4.prototype.set = function (value2, other) {
    value2 = value2 === 0 ? 0 : value2;
    var intermediate = helper3(this, value2);
    intermediate.list || (intermediate.list = this[0][intermediate.id] = []);
    intermediate.entry
      ? (intermediate.entry.value = other)
      : ((intermediate.entry = {
          next: this[1],
          previous: this[1].previous,
          head: this[1],
          key: value2,
          value: other,
        }),
        intermediate.list.push(intermediate.entry),
        (this[1].previous.next = intermediate.entry),
        (this[1].previous = intermediate.entry),
        this.size++);
    return this;
  };
  helper4.prototype.delete = function (value2) {
    value2 = helper3(this, value2);
    return value2.entry && value2.list
      ? (value2.list.splice(value2.index, 1),
        value2.list.length || delete this[0][value2.id],
        (value2.entry.previous.next = value2.entry.next),
        (value2.entry.next.previous = value2.entry.previous),
        (value2.entry.head = null),
        this.size--,
        true)
      : false;
  };
  helper4.prototype.clear = function () {
    this[0] = {};
    this[1] = this[1].previous = helper();
    this.size = 0;
  };
  helper4.prototype.has = function (value2) {
    return !!helper3(this, value2).entry;
  };
  helper4.prototype.get = function (value2) {
    return (value2 = helper3(this, value2).entry) && value2.value;
  };
  helper4.prototype.entries = function () {
    return helper2(this, function (value2) {
      return [value2.key, value2.value];
    });
  };
  helper4.prototype.keys = function () {
    return helper2(this, function (value2) {
      return value2.key;
    });
  };
  helper4.prototype.values = function () {
    return helper2(this, function (value2) {
      return value2.value;
    });
  };
  helper4.prototype.forEach = function (value2, other) {
    for (var iterator = this.entries(), intermediate; !(intermediate = iterator.next()).done; ) {
      intermediate = intermediate.value;
      value2.call(other, intermediate[1], intermediate[0], this);
    }
  };
  helper4.prototype[Symbol.iterator] = helper4.prototype.entries;
  var index = 0;
  return helper4;
});
installPolyfill("Set", function (value) {
  function helper(helper2) {
    this.j = new Map();
    if (helper2) {
      helper2 = getIterator(helper2);
      for (var intermediate; !(intermediate = helper2.next()).done; ) this.add(intermediate.value);
    }
    this.size = this.j.size;
  }
  if (
    (function () {
      if (
        !value ||
        typeof value != "function" ||
        !value.prototype.entries ||
        typeof Object.seal != "function"
      )
        return false;
      try {
        var intermediate = Object.seal({ x: 4 }),
          value2 = new value(getIterator([intermediate]));
        if (
          !value2.has(intermediate) ||
          value2.size != 1 ||
          value2.add(intermediate) != value2 ||
          value2.size != 1 ||
          value2.add({ x: 4 }) != value2 ||
          value2.size != 2
        )
          return false;
        var iterator = value2.entries(),
          iteration = iterator.next();
        if (
          iteration.done ||
          iteration.value[0] != intermediate ||
          iteration.value[1] != intermediate
        )
          return false;
        iteration = iterator.next();
        return iteration.done ||
          iteration.value[0] == intermediate ||
          iteration.value[0].x != 4 ||
          iteration.value[1] != iteration.value[0]
          ? false
          : iterator.next().done;
      } catch (caughtError) {
        return false;
      }
    })()
  )
    return value;
  helper.prototype.add = function (value2) {
    value2 = value2 === 0 ? 0 : value2;
    this.j.set(value2, value2);
    this.size = this.j.size;
    return this;
  };
  helper.prototype.delete = function (value2) {
    value2 = this.j.delete(value2);
    this.size = this.j.size;
    return value2;
  };
  helper.prototype.clear = function () {
    this.j.clear();
    this.size = 0;
  };
  helper.prototype.has = function (value2) {
    return this.j.has(value2);
  };
  helper.prototype.entries = function () {
    return this.j.entries();
  };
  helper.prototype.values = function () {
    return this.j.values();
  };
  helper.prototype.keys = helper.prototype.values;
  helper.prototype[Symbol.iterator] = helper.prototype.values;
  helper.prototype.forEach = function (value2, other) {
    var instance = this;
    this.j.forEach(function (value3) {
      return value2.call(other, value3, value3, instance);
    });
  };
  return helper;
});
installPolyfill("Object.values", function (value) {
  return value
    ? value
    : function (value2) {
        var values = [],
          intermediate;
        for (intermediate in value2)
          hasOwnProperty(value2, intermediate) && values.push(value2[intermediate]);
        return values;
      };
});
installPolyfill("Object.is", function (value) {
  return value
    ? value
    : function (value2, other) {
        return value2 === other
          ? value2 !== 0 || 1 / value2 === 1 / other
          : value2 !== value2 && other !== other;
      };
});
installPolyfill("Array.prototype.includes", function (value) {
  return value
    ? value
    : function (value2, index) {
        var instance = this;
        instance instanceof String && (instance = String(instance));
        var length = instance.length;
        index = index || 0;
        for (index < 0 && (index = Math.max(index + length, 0)); index < length; index++) {
          var intermediate = instance[index];
          if (intermediate === value2 || Object.is(intermediate, value2)) return true;
        }
        return false;
      };
});
function checkStringSearchArguments(receiver, searchValue, methodName) {
  if (receiver == null)
    throw new TypeError(
      "The 'this' value for String.prototype." + methodName + " must not be null or undefined",
    );
  if (searchValue instanceof RegExp)
    throw new TypeError(
      "First argument to String.prototype." + methodName + " must not be a regular expression",
    );
  return receiver + "";
}
installPolyfill("String.prototype.includes", function (value) {
  return value
    ? value
    : function (value2, other) {
        return (
          checkStringSearchArguments(this, value2, "includes").indexOf(value2, other || 0) !== -1
        );
      };
});
installPolyfill("Array.from", function (value) {
  return value
    ? value
    : function (iterator, other, options) {
        other = other != null ? other : createIdentityFunction();
        var values = [],
          intermediate =
            typeof Symbol != "undefined" && Symbol.iterator && iterator[Symbol.iterator];
        if (typeof intermediate == "function") {
          iterator = intermediate.call(iterator);
          for (var index = 0; !(intermediate = iterator.next()).done; )
            values.push(other.call(options, intermediate.value, index++));
        } else
          for (intermediate = iterator.length, index = 0; index < intermediate; index++)
            values.push(other.call(options, iterator[index], index));
        return values;
      };
});
installPolyfill("Object.entries", function (value) {
  return value
    ? value
    : function (value2) {
        var values = [],
          intermediate;
        for (intermediate in value2)
          hasOwnProperty(value2, intermediate) && values.push([intermediate, value2[intermediate]]);
        return values;
      };
});
installPolyfill("Number.isFinite", function (value) {
  return value
    ? value
    : function (value2) {
        return typeof value2 !== "number"
          ? false
          : !isNaN(value2) && value2 !== Infinity && value2 !== -Infinity;
      };
});
installPolyfill("Number.MAX_SAFE_INTEGER", createConstantFunction(9007199254740991));
installPolyfill("Number.MIN_SAFE_INTEGER", createConstantFunction(-9007199254740991));
installPolyfill("Number.isInteger", function (value) {
  return value
    ? value
    : function (value2) {
        return Number.isFinite(value2) ? value2 === Math.floor(value2) : false;
      };
});
installPolyfill("Number.isSafeInteger", function (value) {
  return value
    ? value
    : function (value2) {
        return Number.isInteger(value2) && Math.abs(value2) <= Number.MAX_SAFE_INTEGER;
      };
});
installPolyfill("String.prototype.startsWith", function (value) {
  return value
    ? value
    : function (value2, index) {
        var intermediate = checkStringSearchArguments(this, value2, "startsWith");
        value2 += "";
        var length = intermediate.length,
          length2 = value2.length;
        index = Math.max(0, Math.min(index | 0, intermediate.length));
        for (var index2 = 0; index2 < length2 && index < length; )
          if (intermediate[index++] != value2[index2++]) return false;
        return index2 >= length2;
      };
});
function createArrayEntryIterator(arrayLike, mapEntry) {
  arrayLike instanceof String && (arrayLike += "");
  var index = 0,
    intermediate = false,
    record = {
      next: function () {
        if (!intermediate && index < arrayLike.length) {
          var intermediate2 = index++;
          return { value: mapEntry(intermediate2, arrayLike[intermediate2]), done: false };
        }
        intermediate = true;
        return { done: true, value: void 0 };
      },
    };
  record[Symbol.iterator] = function () {
    return record;
  };
  return record;
}
installPolyfill("Array.prototype.entries", function (value) {
  return value
    ? value
    : function () {
        return createArrayEntryIterator(this, function (value2, other) {
          return [value2, other];
        });
      };
});
installPolyfill("Math.trunc", function (value) {
  return value
    ? value
    : function (value2) {
        value2 = Number(value2);
        if (isNaN(value2) || value2 === Infinity || value2 === -Infinity || value2 === 0)
          return value2;
        var intermediate = Math.floor(Math.abs(value2));
        return value2 < 0 ? -intermediate : intermediate;
      };
});
installPolyfill("Number.isNaN", function (value) {
  return value
    ? value
    : function (value2) {
        return typeof value2 === "number" && isNaN(value2);
      };
});
installPolyfill("Array.prototype.keys", function (value) {
  return value
    ? value
    : function () {
        return createArrayEntryIterator(this, createIdentityFunction());
      };
});
installPolyfill("Array.prototype.values", function (value) {
  return value
    ? value
    : function () {
        return createArrayEntryIterator(this, function (value2, other) {
          return other;
        });
      };
});
installPolyfill("Math.imul", function (value) {
  return value
    ? value
    : function (value2, other) {
        value2 = Number(value2);
        other = Number(other);
        var intermediate = value2 & 65535,
          intermediate2 = other & 65535;
        return (
          (intermediate * intermediate2 +
            (((((value2 >>> 16) & 65535) * intermediate2 +
              intermediate * ((other >>> 16) & 65535)) <<
              16) >>>
              0)) |
          0
        );
      };
});
installPolyfill("String.prototype.repeat", function (value) {
  return value
    ? value
    : function (value2) {
        var intermediate = checkStringSearchArguments(this, null, "repeat");
        if (value2 < 0 || value2 > 1342177279) throw new RangeError("Invalid count value");
        value2 |= 0;
        for (var intermediate2 = ""; value2; )
          if ((value2 & 1 && (intermediate2 += intermediate), (value2 >>>= 1)))
            intermediate += intermediate;
        return intermediate2;
      };
});
installPolyfill("String.prototype.matchAll", function (value) {
  return value
    ? value
    : function (value2) {
        if (value2 instanceof RegExp && !value2.global)
          throw new TypeError(
            "RegExp passed into String.prototype.matchAll() must have global tag.",
          );
        var regExp = new RegExp(value2, value2 instanceof RegExp ? void 0 : "g");
        value2 instanceof RegExp && (regExp.lastIndex = value2.lastIndex);
        var instance = this,
          intermediate = false,
          record = {
            next: function () {
              if (intermediate) return { value: void 0, done: true };
              var intermediate2 = regExp.exec(instance);
              if (!intermediate2) return ((intermediate = true), { value: void 0, done: true });
              intermediate2[0] === "" && (regExp.lastIndex += 1);
              return { value: intermediate2, done: false };
            },
          };
        record[Symbol.iterator] = function () {
          return record;
        };
        return record;
      };
});
installPolyfill("Promise.prototype.finally", function (value) {
  return value
    ? value
    : function (callback) {
        return this.then(
          function (value2) {
            return Promise.resolve(callback()).then(function () {
              return value2;
            });
          },
          function (value2) {
            return Promise.resolve(callback()).then(function () {
              throw value2;
            });
          },
        );
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var closureNamespace = closureNamespace || {},
  runtimeGlobal = this || self;
/**
 * 基础工具与环境能力：Closure flags、类型判断、绑定、浏览器识别。
 */
function readClosureFlag(flagId, fallback) {
  var intermediate = lookupGlobalPath("CLOSURE_FLAGS");
  flagId = intermediate && intermediate[flagId];
  return flagId != null ? flagId : fallback;
}
function lookupGlobalPath(path) {
  path = path.split(".");
  for (var runtimeGlobal2 = runtimeGlobal, index = 0; index < path.length; index++)
    if (((runtimeGlobal2 = runtimeGlobal2[path[index]]), runtimeGlobal2 == null)) return null;
  return runtimeGlobal2;
}
function getValueType(value) {
  var intermediate = typeof value;
  return intermediate != "object"
    ? intermediate
    : value
      ? Array.isArray(value)
        ? "array"
        : intermediate
      : "null";
}
function isArrayLike(value) {
  var valueType = getValueType(value);
  return valueType == "array" || (valueType == "object" && typeof value.length == "number");
}
function isObjectLike(value) {
  var intermediate = typeof value;
  return (intermediate == "object" && value != null) || intermediate == "function";
}
var objectUidKey = "closure_uid_" + ((Math.random() * 1e9) >>> 0),
  nextObjectUid = 0;
function nativeBind(callback, receiver, boundArguments) {
  return callback.call.apply(callback.bind, arguments);
}
function fallbackBind(callback, receiver, boundArguments) {
  if (!callback) throw Error();
  if (arguments.length > 2) {
    var intermediate = Array.prototype.slice.call(arguments, 2);
    return function () {
      var intermediate2 = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(intermediate2, intermediate);
      return callback.apply(receiver, intermediate2);
    };
  }
  return function () {
    return callback.apply(receiver, arguments);
  };
}
function bindFunction(callback, receiver, boundArguments) {
  bindFunction =
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1
      ? nativeBind
      : fallbackBind;
  return bindFunction.apply(null, arguments);
}
function partialApply(callback, boundArguments) {
  var intermediate = Array.prototype.slice.call(arguments, 1);
  return function () {
    var values = intermediate.slice();
    values.push.apply(values, arguments);
    return callback.apply(this, values);
  };
}
function evaluateGlobally(source) {
  (0, eval)(source);
}
function identity(value) {
  return value;
}
function inheritClosureClass(subclass, superclass) {
  function helper() {}
  helper.prototype = superclass.prototype;
  subclass.W = superclass.prototype;
  subclass.prototype = new helper();
  subclass.prototype.constructor = subclass;
  subclass.zc = function (value, other, options) {
    for (
      var intermediate = Array(arguments.length - 2), index = 2;
      index < arguments.length;
      index++
    )
      intermediate[index - 2] = arguments[index];
    return superclass.prototype[other].apply(value, intermediate);
  };
}
function ClosureError(message, cause) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, ClosureError);
  else {
    var stack = Error().stack;
    stack && (this.stack = stack);
  }
  message && (this.message = String(message));
  cause !== void 0 && (this.cause = cause);
  this.j = true;
}
inheritClosureClass(ClosureError, Error);
ClosureError.prototype.name = "CustomError";
function throwAsynchronously(error) {
  runtimeGlobal.setTimeout(function () {
    throw error;
  }, 0);
}
var trimString = String.prototype.trim
  ? function (value) {
      return value.trim();
    }
  : function (value) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(value)[1];
    };
var useUserAgentClientHints = readClosureFlag(610401301, false),
  strictArrayValidation = readClosureFlag(748402147, true);
var userAgentData,
  runtimeNavigator = runtimeGlobal.navigator;
userAgentData = runtimeNavigator ? runtimeNavigator.userAgentData || null : null;
function hasUserAgentBrand(brand) {
  if (!useUserAgentClientHints || !userAgentData) return false;
  for (var index = 0; index < userAgentData.brands.length; index++) {
    var brand2 = userAgentData.brands[index].brand;
    if (brand2 && brand2.indexOf(brand) != -1) return true;
  }
  return false;
}
function userAgentContains(token) {
  var intermediate;
  a: {
    if ((intermediate = runtimeGlobal.navigator))
      if ((intermediate = intermediate.userAgent)) break a;
    intermediate = "";
  }
  return intermediate.indexOf(token) != -1;
}
function hasUserAgentBrands() {
  return useUserAgentClientHints ? !!userAgentData && userAgentData.brands.length > 0 : false;
}
function arraySome(values, predicate) {
  return Array.prototype.some.call(values, predicate, void 0);
}
function removeArrayValue(values, value) {
  value = Array.prototype.indexOf.call(values, value, void 0);
  var intermediate;
  (intermediate = value >= 0) && Array.prototype.splice.call(values, value, 1);
  return intermediate;
}
function extendArray(target, values) {
  for (var index = 1; index < arguments.length; index++) {
    var intermediate = arguments[index];
    if (isArrayLike(intermediate)) {
      var intermediate2 = target.length || 0,
        intermediate3 = intermediate.length || 0;
      target.length = intermediate2 + intermediate3;
      for (var index2 = 0; index2 < intermediate3; index2++)
        target[intermediate2 + index2] = intermediate[index2];
    } else target.push(intermediate);
  }
}
var isFirefox = userAgentContains("Firefox") || userAgentContains("FxiOS"),
  isSafariLike =
    userAgentContains("Safari") &&
    !(
      (hasUserAgentBrands()
        ? hasUserAgentBrand("Chromium")
        : ((userAgentContains("Chrome") || userAgentContains("CriOS")) &&
            (hasUserAgentBrands() || !userAgentContains("Edge"))) ||
          userAgentContains("Silk")) ||
      (hasUserAgentBrands() ? 0 : userAgentContains("Coast")) ||
      (hasUserAgentBrands() ? 0 : userAgentContains("Opera")) ||
      (hasUserAgentBrands() ? 0 : userAgentContains("Edge")) ||
      (hasUserAgentBrands() ? hasUserAgentBrand("Microsoft Edge") : userAgentContains("Edg/")) ||
      (hasUserAgentBrands() ? hasUserAgentBrand("Opera") : userAgentContains("OPR")) ||
      userAgentContains("Firefox") ||
      userAgentContains("FxiOS") ||
      userAgentContains("Silk") ||
      userAgentContains("Android")
    ) &&
    !(
      (userAgentContains("iPhone") && !userAgentContains("iPod") && !userAgentContains("iPad")) ||
      userAgentContains("iPad") ||
      userAgentContains("iPod")
    );
var base64DecodeTable = {},
  base64EncodeTables = null;
var supportsUint8Array = typeof Uint8Array !== "undefined",
  supportsBtoa = typeof btoa === "function",
  byteStringConstructionToken = {},
  supportsStructuredClone = typeof structuredClone != "undefined";
/**
 * 数组消息运行时：字节串、64 位整数转换、内部 flags、copy-on-write、oneof 与 JSON。数值位掩码不是业务枚举。
 */
function ByteString(value, constructionToken) {
  if (constructionToken !== byteStringConstructionToken) throw Error("illegal external caller");
  this.j = value;
  if (value != null && value.length === 0)
    throw Error("ByteString should be constructed with non-empty values");
}
function emptyByteString() {
  return (
    emptyByteStringInstance ||
    (emptyByteStringInstance = new ByteString(null, byteStringConstructionToken))
  );
}
var emptyByteStringInstance;
function attachErrorContext(error, key, value) {
  error.__closure__error__context__984382 || (error.__closure__error__context__984382 = {});
  error.__closure__error__context__984382[key] = value;
}
function readErrorContext(error) {
  return error.__closure__error__context__984382 || {};
}
var incidentCounts = void 0;
function reportLimitedIncident(incidentKey, maximum) {
  if (incidentKey != null) {
    var intermediate;
    var intermediate2 =
      (intermediate = incidentCounts) != null ? intermediate : (incidentCounts = {});
    intermediate = intermediate2[incidentKey] || 0;
    intermediate >= maximum ||
      ((intermediate2[incidentKey] = intermediate + 1),
      (incidentKey = Error()),
      attachErrorContext(incidentKey, "severity", "incident"),
      throwAsynchronously(incidentKey));
  }
}
function supportsBigInt() {
  return typeof BigInt === "function";
}
var supportsNativeSymbols = typeof Symbol === "function" && typeof Symbol() === "symbol";
function createInternalSymbol(description, fallback, useRegistry) {
  return typeof Symbol === "function" && typeof Symbol() === "symbol"
    ? (useRegistry === void 0 ? 0 : useRegistry) && Symbol.for && description
      ? Symbol.for(description)
      : description != null
        ? Symbol(description)
        : Symbol()
    : fallback;
}
var arrayFlagsSymbol = createInternalSymbol("jas", void 0, true),
  defaultMessageSymbol = createInternalSymbol(void 0, "0di"),
  oneofCasesSymbol = createInternalSymbol(void 0, "1oa"),
  unknownFieldsSymbol = createInternalSymbol(void 0, Symbol()),
  unknownFieldIncidentSymbol = createInternalSymbol(void 0, "0ubs"),
  arrayConstructorIncidentSymbol = createInternalSymbol(void 0, "0actk"),
  messageMarkerSymbol = createInternalSymbol("m_m", "Cc", true);
Math.max.apply(
  Math,
  iterableToArray(
    Object.values({
      Zb: 1,
      Wb: 2,
      Tb: 4,
      kc: 8,
      vc: 16,
      ec: 32,
      Fb: 64,
      Rb: 128,
      Pb: 256,
      sc: 512,
      Qb: 1024,
      Sb: 2048,
      fc: 4096,
      ac: 8192,
    }),
  ),
);
var arrayFlagsDescriptor = {
    qb: { value: 0, configurable: true, writable: true, enumerable: false },
  },
  defineProperties = Object.defineProperties,
  arrayFlagsKey = supportsNativeSymbols ? arrayFlagsSymbol : "qb",
  emptyRepeatedField,
  emptyRepeatedFieldStorage = [];
setArrayFlags(emptyRepeatedFieldStorage, 7);
emptyRepeatedField = Object.freeze(emptyRepeatedFieldStorage);
function addArrayFlags(array, flags) {
  supportsNativeSymbols || arrayFlagsKey in array || defineProperties(array, arrayFlagsDescriptor);
  array[arrayFlagsKey] |= flags;
}
function setArrayFlags(array, flags) {
  supportsNativeSymbols || arrayFlagsKey in array || defineProperties(array, arrayFlagsDescriptor);
  array[arrayFlagsKey] = flags;
}
function markImmutableMessageArray(array) {
  addArrayFlags(array, 34);
  return array;
}
var messageMarkerToken = {};
function isImmutableMessage(message, flags) {
  return flags === void 0
    ? message.j !== copyOnWriteToken && !!(2 & (message.C[arrayFlagsKey] | 0))
    : !!(2 & flags) && message.j !== copyOnWriteToken;
}
var copyOnWriteToken = {},
  repeatedFieldModeToken = Object.freeze({}),
  nestedFieldModeToken = Object.freeze({});
function markTypePredicate(predicate) {
  predicate.Bc = true;
  return predicate;
}
var isNumberValue = markTypePredicate(function (value) {
    return typeof value === "number";
  }),
  isStringValue = markTypePredicate(function (value) {
    return typeof value === "string";
  }),
  isBooleanValue = markTypePredicate(function (value) {
    return typeof value === "boolean";
  }),
  isBigIntValue = markTypePredicate(function (value) {
    return typeof value === "bigint";
  });
var supportsNativeBigIntValue =
  typeof runtimeGlobal.BigInt === "function" && typeof runtimeGlobal.BigInt(0) === "bigint";
function normalizeBigInt(value) {
  var value2 = value;
  if (isStringValue(value2)) {
    if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(value2)) throw Error(String(value2));
  } else if (isNumberValue(value2) && !Number.isSafeInteger(value2)) throw Error(String(value2));
  return supportsNativeBigIntValue
    ? BigInt(value)
    : (value = isBooleanValue(value)
        ? value
          ? "1"
          : "0"
        : isStringValue(value)
          ? value.trim() || "0"
          : String(value));
}
var isInt64Representation = markTypePredicate(function (value) {
    return supportsNativeBigIntValue
      ? isBigIntValue(value)
      : isStringValue(value) && /^(?:-?[1-9]\d*|0)$/.test(value);
  }),
  isSafeInt64Representation = markTypePredicate(function (value) {
    return supportsNativeBigIntValue
      ? value >= minimumSafeIntegerBigInt && value <= maximumSafeIntegerBigInt
      : value[0] === "-"
        ? decimalMagnitudeWithin(value, minimumSafeIntegerText)
        : decimalMagnitudeWithin(value, maximumSafeIntegerText);
  }),
  minimumSafeIntegerText = Number.MIN_SAFE_INTEGER.toString(),
  minimumSafeIntegerBigInt = supportsNativeBigIntValue ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
  maximumSafeIntegerText = Number.MAX_SAFE_INTEGER.toString(),
  maximumSafeIntegerBigInt = supportsNativeBigIntValue ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
function decimalMagnitudeWithin(value, limit) {
  if (value.length > limit.length) return false;
  if (value.length < limit.length || value === limit) return true;
  for (var index = 0; index < value.length; index++) {
    var intermediate = value[index],
      intermediate2 = limit[index];
    if (intermediate > intermediate2) return false;
    if (intermediate < intermediate2) return true;
  }
}
var int64LowWord = 0,
  int64HighWord = 0;
function splitUnsigned64(value) {
  var intermediate = value >>> 0;
  int64LowWord = intermediate;
  int64HighWord = ((value - intermediate) / 4294967296) >>> 0;
}
function splitSigned64(value) {
  if (value < 0) {
    splitUnsigned64(0 - value);
    var iterator = getIterator(negate64Words(int64LowWord, int64HighWord));
    value = iterator.next().value;
    iterator = iterator.next().value;
    int64LowWord = value >>> 0;
    int64HighWord = iterator >>> 0;
  } else splitUnsigned64(value);
}
function unsigned64ToDecimal(low, high) {
  high >>>= 0;
  low >>>= 0;
  if (high <= 2097151) var intermediate = "" + (4294967296 * high + low);
  else
    supportsBigInt()
      ? (intermediate = "" + ((BigInt(high) << BigInt(32)) | BigInt(low)))
      : ((intermediate = ((low >>> 24) | (high << 8)) & 16777215),
        (high = (high >> 16) & 65535),
        (low = (low & 16777215) + intermediate * 6777216 + high * 6710656),
        (intermediate += high * 8147497),
        (high *= 2),
        low >= 1e7 && ((intermediate += (low / 1e7) >>> 0), (low %= 1e7)),
        intermediate >= 1e7 && ((high += (intermediate / 1e7) >>> 0), (intermediate %= 1e7)),
        (intermediate = high + padDecimalChunk(intermediate) + padDecimalChunk(low)));
  return intermediate;
}
function padDecimalChunk(value) {
  value = String(value);
  return "0000000".slice(value.length) + value;
}
function signed64WordsToDecimal() {
  var int64LowWord2 = int64LowWord,
    int64HighWord2 = int64HighWord;
  int64HighWord2 & 2147483648
    ? supportsBigInt()
      ? (int64LowWord2 =
          "" + ((BigInt(int64HighWord2 | 0) << BigInt(32)) | BigInt(int64LowWord2 >>> 0)))
      : ((int64HighWord2 = getIterator(negate64Words(int64LowWord2, int64HighWord2))),
        (int64LowWord2 = int64HighWord2.next().value),
        (int64HighWord2 = int64HighWord2.next().value),
        (int64LowWord2 = "-" + unsigned64ToDecimal(int64LowWord2, int64HighWord2)))
    : (int64LowWord2 = unsigned64ToDecimal(int64LowWord2, int64HighWord2));
  return int64LowWord2;
}
function negate64Words(low, high) {
  high = ~high;
  low ? (low = ~low + 1) : (high += 1);
  return [low, high];
}
var bigIntAsIntN = typeof BigInt === "function" ? BigInt.asIntN : void 0,
  isSafeInteger = Number.isSafeInteger,
  isFiniteNumber = Number.isFinite,
  truncateNumber = Math.trunc;
function coerceSpecialNumber(value) {
  if (value == null || typeof value === "number") return value;
  if (value === "NaN" || value === "Infinity" || value === "-Infinity") return Number(value);
}
function getTypeDisplayName(constructor) {
  return constructor.displayName || constructor.name || "unknown type name";
}
var decimalNumberPattern = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function isNumericRepresentation(value) {
  switch (typeof value) {
    case "bigint":
      return true;
    case "number":
      return isFiniteNumber(value);
    case "string":
      return decimalNumberPattern.test(value);
    default:
      return false;
  }
}
function coerceInt32(value) {
  return value == null ? value : isFiniteNumber(value) ? value | 0 : void 0;
}
function coerceNumericInt32(value) {
  if (value == null) return value;
  if (typeof value === "string" && value) value = +value;
  else if (typeof value !== "number") return;
  return isFiniteNumber(value) ? value | 0 : void 0;
}
function normalizeInt64String(value) {
  var length = value.length;
  if (
    value[0] === "-"
      ? length < 20 || (length === 20 && value <= "-9223372036854775808")
      : length < 19 || (length === 19 && value <= "9223372036854775807")
  )
    return value;
  if (value.length < 16) splitSigned64(Number(value));
  else if (supportsBigInt()) {
    value = BigInt(value);
    int64LowWord = Number(value & BigInt(4294967295)) >>> 0;
    int64HighWord = Number((value >> BigInt(32)) & BigInt(4294967295));
  } else {
    length = +(value[0] === "-");
    int64HighWord = int64LowWord = 0;
    for (
      var length2 = value.length,
        intermediate = 0 + length,
        intermediate2 = ((length2 - length) % 6) + length;
      intermediate2 <= length2;
      intermediate = intermediate2, intermediate2 += 6
    ) {
      intermediate = Number(value.slice(intermediate, intermediate2));
      int64HighWord *= 1e6;
      int64LowWord = int64LowWord * 1e6 + intermediate;
      int64LowWord >= 4294967296 &&
        ((int64HighWord += Math.trunc(int64LowWord / 4294967296)),
        (int64HighWord >>>= 0),
        (int64LowWord >>>= 0));
    }
    length &&
      ((length = getIterator(negate64Words(int64LowWord, int64HighWord))),
      (value = length.next().value),
      (length = length.next().value),
      (int64LowWord = value),
      (int64HighWord = length));
  }
  return signed64WordsToDecimal();
}
function numberToInt64Representation(value) {
  isNumericRepresentation(value);
  value = truncateNumber(value);
  if (!isSafeInteger(value)) {
    splitSigned64(value);
    var int64LowWord2 = int64LowWord,
      int64HighWord2 = int64HighWord;
    if ((value = int64HighWord2 & 2147483648)) {
      int64LowWord2 = (~int64LowWord2 + 1) >>> 0;
      int64HighWord2 = ~int64HighWord2 >>> 0;
      int64LowWord2 == 0 && (int64HighWord2 = (int64HighWord2 + 1) >>> 0);
    }
    var intermediate = int64HighWord2 * 4294967296 + (int64LowWord2 >>> 0);
    int64LowWord2 = Number.isSafeInteger(intermediate)
      ? intermediate
      : unsigned64ToDecimal(int64LowWord2, int64HighWord2);
    value =
      typeof int64LowWord2 === "number"
        ? value
          ? -int64LowWord2
          : int64LowWord2
        : value
          ? "-" + int64LowWord2
          : int64LowWord2;
  }
  return value;
}
function numberToInt64String(value) {
  isNumericRepresentation(value);
  value = truncateNumber(value);
  isSafeInteger(value)
    ? (value = String(value))
    : (splitSigned64(value), (value = signed64WordsToDecimal()));
  return value;
}
function coerceInt64(value) {
  var intermediate = typeof value;
  if (value == null) return value;
  if (intermediate === "bigint") return normalizeBigInt(bigIntAsIntN(64, value));
  if (isNumericRepresentation(value))
    return (
      intermediate === "string"
        ? ((intermediate = truncateNumber(Number(value))),
          isSafeInteger(intermediate)
            ? (value = normalizeBigInt(intermediate))
            : ((intermediate = value.indexOf(".")),
              intermediate !== -1 && (value = value.substring(0, intermediate)),
              (value = supportsBigInt()
                ? normalizeBigInt(bigIntAsIntN(64, BigInt(value)))
                : normalizeBigInt(normalizeInt64String(value)))))
        : (value = isSafeInteger(value)
            ? normalizeBigInt(numberToInt64Representation(value))
            : normalizeBigInt(numberToInt64String(value))),
      value
    );
}
function coerceString(value) {
  return value == null || typeof value === "string" ? value : void 0;
}
function coerceMessage(value, MessageType, createDefault, parentFlags) {
  if (value != null && value[messageMarkerSymbol] === messageMarkerToken) return value;
  if (!Array.isArray(value))
    return createDefault
      ? parentFlags & 2
        ? MessageType[defaultMessageSymbol] ||
          (MessageType[defaultMessageSymbol] = createFrozenDefaultMessage(MessageType))
        : new MessageType()
      : void 0;
  createDefault = value[arrayFlagsKey] | 0;
  parentFlags = createDefault | (parentFlags & 32) | (parentFlags & 2);
  parentFlags !== createDefault && setArrayFlags(value, parentFlags);
  return new MessageType(value);
}
function createFrozenDefaultMessage(MessageType) {
  MessageType = new MessageType();
  markImmutableMessageArray(MessageType.C);
  return MessageType;
}
function identityMessageValue(value) {
  return value;
}
function UnknownFieldSet() {}
function forEachUnknownField(fields, callback) {
  for (var intermediate in fields)
    !isNaN(intermediate) && callback(fields, +intermediate, fields[intermediate]);
}
function cloneUnknownFields(fields) {
  var unknownFieldSet = new UnknownFieldSet();
  forEachUnknownField(fields, function (value, other, options) {
    unknownFieldSet[other] = Array.prototype.slice.call(options);
  });
  unknownFieldSet.j = fields.j;
  return unknownFieldSet;
}
function checkUnknownFieldBudget(fields, fieldNumber) {
  fieldNumber < 100 || reportLimitedIncident(unknownFieldIncidentSymbol, 1);
}
function transformMessageArray(array, flags, transformValue, forceCopy) {
  var intermediate = forceCopy !== void 0;
  forceCopy = !!forceCopy;
  var intermediate2 = identity(unknownFieldsSymbol),
    intermediate3;
  !intermediate &&
    supportsNativeSymbols &&
    intermediate2 &&
    (intermediate3 = array[intermediate2]) &&
    forEachUnknownField(intermediate3, checkUnknownFieldBudget);
  intermediate2 = [];
  var length = array.length;
  intermediate3 = 4294967295;
  var intermediate4 = false,
    intermediate5 = !!(flags & 64),
    intermediate6 = intermediate5 ? (flags & 128 ? 0 : -1) : void 0;
  if (!(flags & 1)) {
    var intermediate7 = length && array[length - 1];
    intermediate7 != null &&
    typeof intermediate7 === "object" &&
    intermediate7.constructor === Object
      ? (length--, (intermediate3 = length))
      : (intermediate7 = void 0);
    if (intermediate5 && !(flags & 128) && !intermediate) {
      intermediate4 = true;
      var index;
      intermediate3 =
        ((index = jsonConversionState) != null ? index : identityMessageValue)(
          intermediate3 - intermediate6,
          intermediate6,
          array,
          intermediate7,
          void 0,
        ) + intermediate6;
    }
  }
  flags = void 0;
  for (index = 0; index < length; index++) {
    var intermediate8 = array[index];
    if (intermediate8 != null && (intermediate8 = transformValue(intermediate8, forceCopy)) != null)
      if (intermediate5 && index >= intermediate3) {
        var intermediate9 = index - intermediate6,
          intermediate10 = void 0;
        ((intermediate10 = flags) != null ? intermediate10 : (flags = {}))[intermediate9] =
          intermediate8;
      } else intermediate2[index] = intermediate8;
  }
  if (intermediate7)
    for (var intermediate11 in intermediate7) {
      length = intermediate7[intermediate11];
      length != null &&
        (length = transformValue(length, forceCopy)) != null &&
        ((index = +intermediate11),
        (intermediate8 = void 0),
        intermediate5 &&
        !Number.isNaN(index) &&
        (intermediate8 = index + intermediate6) < intermediate3
          ? (intermediate2[intermediate8] = length)
          : ((index = void 0),
            (((index = flags) != null ? index : (flags = {}))[intermediate11] = length)));
    }
  flags && (intermediate4 ? intermediate2.push(flags) : (intermediate2[intermediate3] = flags));
  intermediate &&
    identity(unknownFieldsSymbol) &&
    (array = (transformValue = identity(unknownFieldsSymbol)) ? array[transformValue] : void 0) &&
    array instanceof UnknownFieldSet &&
    (intermediate2[unknownFieldsSymbol] = cloneUnknownFields(array));
  return intermediate2;
}
function toJsonFieldValue(value) {
  switch (typeof value) {
    case "number":
      return Number.isFinite(value) ? value : "" + value;
    case "bigint":
      return isSafeInt64Representation(value) ? Number(value) : "" + value;
    case "boolean":
      return value ? 1 : 0;
    case "object":
      if (Array.isArray(value)) {
        var intermediate = value[arrayFlagsKey] | 0;
        return value.length === 0 && intermediate & 1
          ? void 0
          : transformMessageArray(value, intermediate, toJsonFieldValue);
      }
      if (value != null && value[messageMarkerSymbol] === messageMarkerToken)
        return serializeMessage(value);
      if (value instanceof ByteString) {
        intermediate = value.j;
        if (intermediate == null) value = "";
        else if (typeof intermediate === "string") value = intermediate;
        else {
          if (supportsBtoa) {
            for (
              var intermediate2 = "",
                intermediate3 = 0,
                intermediate4 = intermediate.length - 10240;
              intermediate3 < intermediate4;

            )
              intermediate2 += String.fromCharCode.apply(
                null,
                intermediate.subarray(intermediate3, (intermediate3 += 10240)),
              );
            intermediate2 += String.fromCharCode.apply(
              null,
              intermediate3 ? intermediate.subarray(intermediate3) : intermediate,
            );
            intermediate = btoa(intermediate2);
          } else {
            intermediate2 === void 0 && (intermediate2 = 0);
            if (!base64EncodeTables) {
              base64EncodeTables = {};
              intermediate3 =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
              intermediate4 = ["+/=", "+/", "-_=", "-_.", "-_"];
              for (var index = 0; index < 5; index++) {
                var values = intermediate3.concat(intermediate4[index].split(""));
                base64DecodeTable[index] = values;
                for (var index2 = 0; index2 < values.length; index2++) {
                  var intermediate5 = values[index2];
                  base64EncodeTables[intermediate5] === void 0 &&
                    (base64EncodeTables[intermediate5] = index2);
                }
              }
            }
            intermediate2 = base64DecodeTable[intermediate2];
            intermediate3 = Array(Math.floor(intermediate.length / 3));
            intermediate4 = intermediate2[64] || "";
            for (index = values = 0; values < intermediate.length - 2; values += 3) {
              var intermediate6 = intermediate[values],
                intermediate7 = intermediate[values + 1];
              intermediate5 = intermediate[values + 2];
              index2 = intermediate2[intermediate6 >> 2];
              intermediate6 = intermediate2[((intermediate6 & 3) << 4) | (intermediate7 >> 4)];
              intermediate7 = intermediate2[((intermediate7 & 15) << 2) | (intermediate5 >> 6)];
              intermediate5 = intermediate2[intermediate5 & 63];
              intermediate3[index++] = "" + index2 + intermediate6 + intermediate7 + intermediate5;
            }
            index2 = 0;
            intermediate5 = intermediate4;
            switch (intermediate.length - values) {
              case 2: {
                index2 = intermediate[values + 1];
                intermediate5 = intermediate2[(index2 & 15) << 2] || intermediate4;
              }
              case 1: {
                intermediate = intermediate[values];
                intermediate3[index] =
                  "" +
                  intermediate2[intermediate >> 2] +
                  intermediate2[((intermediate & 3) << 4) | (index2 >> 4)] +
                  intermediate5 +
                  intermediate4;
              }
            }
            intermediate = intermediate3.join("");
          }
          value = value.j = intermediate;
        }
        return value;
      }
      return;
  }
  return value;
}
var cloneJsonValue = supportsStructuredClone
    ? structuredClone
    : function (value) {
        return transformMessageArray(value, 0, toJsonFieldValue);
      },
  jsonConversionState;
/**
 * 导出 wire 数组副本；非有限数、BigInt、字节串与嵌套消息按原规则转换。
 */
function serializeMessage(message) {
  message = message.C;
  return transformMessageArray(message, message[arrayFlagsKey] | 0, toJsonFieldValue);
}
function initializeMessageArray(array, pivot, messageId) {
  return initializeMessageArrayWithFlags(array, pivot, messageId, 2048);
}
function initializeMessageArrayWithFlags(array, pivot, messageId, extraFlags) {
  extraFlags = extraFlags === void 0 ? 0 : extraFlags;
  if (array == null) {
    var intermediate = 32;
    messageId ? ((array = [messageId]), (intermediate |= 128)) : (array = []);
    pivot && (intermediate = (intermediate & -16760833) | ((pivot & 1023) << 14));
  } else {
    if (!Array.isArray(array)) throw Error("narr");
    intermediate = array[arrayFlagsKey] | 0;
    if (strictArrayValidation && 1 & intermediate) throw Error("rfarr");
    2048 & intermediate && !(2 & intermediate) && reportInvalidMessageArray();
    if (intermediate & 256) throw Error("farr");
    if (intermediate & 64)
      return (
        (intermediate | extraFlags) !== intermediate &&
          setArrayFlags(array, intermediate | extraFlags),
        array
      );
    if (messageId && ((intermediate |= 128), messageId !== array[0])) throw Error("mid");
    a: {
      messageId = array;
      intermediate |= 64;
      var length = messageId.length;
      if (length) {
        var intermediate2 = length - 1,
          intermediate3 = messageId[intermediate2];
        if (
          intermediate3 != null &&
          typeof intermediate3 === "object" &&
          intermediate3.constructor === Object
        ) {
          pivot = intermediate & 128 ? 0 : -1;
          intermediate2 -= pivot;
          if (intermediate2 >= 1024) throw Error("pvtlmt");
          for (var intermediate4 in intermediate3) {
            length = +intermediate4;
            length < intermediate2 &&
              ((messageId[length + pivot] = intermediate3[intermediate4]),
              delete intermediate3[intermediate4]);
          }
          intermediate = (intermediate & -16760833) | ((intermediate2 & 1023) << 14);
          break a;
        }
      }
      if (pivot) {
        intermediate4 = Math.max(pivot, length - (intermediate & 128 ? 0 : -1));
        if (intermediate4 > 1024) throw Error("spvt");
        intermediate = (intermediate & -16760833) | ((intermediate4 & 1023) << 14);
      }
    }
  }
  setArrayFlags(array, intermediate | 64 | extraFlags);
  return array;
}
function reportInvalidMessageArray() {
  if (strictArrayValidation) throw Error("carr");
  reportLimitedIncident(arrayConstructorIncidentSymbol, 5);
}
function cloneFieldValue(value, forceCopy) {
  if (typeof value !== "object") return value;
  if (Array.isArray(value)) {
    var intermediate = value[arrayFlagsKey] | 0;
    value.length === 0 && intermediate & 1
      ? (value = void 0)
      : intermediate & 2 ||
        (!forceCopy || 4096 & intermediate || 16 & intermediate
          ? (value = cloneMessageArray(
              value,
              intermediate,
              false,
              forceCopy && !(intermediate & 16),
            ))
          : (addArrayFlags(value, 34), intermediate & 4 && Object.freeze(value)));
    return value;
  }
  if (value != null && value[messageMarkerSymbol] === messageMarkerToken)
    return (
      (forceCopy = value.C),
      (intermediate = forceCopy[arrayFlagsKey] | 0),
      isImmutableMessage(value, intermediate)
        ? value
        : freezeMessageArrayIfShareable(value, forceCopy, intermediate)
          ? cloneMessageWrapper(value, forceCopy)
          : cloneMessageArray(forceCopy, intermediate)
    );
  if (value instanceof ByteString) return value;
}
function cloneMessageWrapper(message, array, copyOnWrite) {
  message = new message.constructor(array);
  copyOnWrite && (message.j = copyOnWriteToken);
  message.l = copyOnWriteToken;
  return message;
}
function cloneMessageArray(array, flags, immutable, forceCopy) {
  forceCopy != null || (forceCopy = !!(34 & flags));
  array = transformMessageArray(array, flags, cloneFieldValue, forceCopy);
  forceCopy = 32;
  immutable && (forceCopy |= 2);
  flags = (flags & 16769217) | forceCopy;
  setArrayFlags(array, flags);
  return array;
}
function mutableMessageCopy(message) {
  var backingArray = message.C,
    flags = backingArray[arrayFlagsKey] | 0;
  return isImmutableMessage(message, flags)
    ? freezeMessageArrayIfShareable(message, backingArray, flags)
      ? cloneMessageWrapper(message, backingArray, true)
      : new message.constructor(cloneMessageArray(backingArray, flags, false))
    : message;
}
function detachCopyOnWriteArray(message) {
  if (message.j !== copyOnWriteToken) return false;
  var backingOrStateValue = message.C;
  backingOrStateValue = cloneMessageArray(
    backingOrStateValue,
    backingOrStateValue[arrayFlagsKey] | 0,
  );
  addArrayFlags(backingOrStateValue, 2048);
  message.C = backingOrStateValue;
  message.j = void 0;
  message.l = void 0;
  return true;
}
function assertMessageMutable(message) {
  if (!detachCopyOnWriteArray(message) && isImmutableMessage(message, message.C[arrayFlagsKey] | 0))
    throw Error();
}
function markArrayContainsMutableValues(array, flags) {
  flags === void 0 && (flags = array[arrayFlagsKey] | 0);
  flags & 32 && !(flags & 4096) && setArrayFlags(array, flags | 4096);
}
function freezeMessageArrayIfShareable(message, array, flags) {
  return flags & 2
    ? true
    : flags & 32 && !(flags & 4096)
      ? (setArrayFlags(array, flags | 2), (message.j = copyOnWriteToken), true)
      : false;
}
var zeroInt64 = normalizeBigInt(0),
  preserveNullFieldToken = {};
/**
 * 字段号从 1 开始；尾部普通对象可承载稀疏字段。保留 null/undefined 与读取时转换的差异。
 */
function getMessageField(message, fieldNumber, hasMessageId, preserveNull, transform) {
  Object.isExtensible(message);
  fieldNumber = getArrayField(message.C, fieldNumber, hasMessageId, transform);
  if (fieldNumber !== null || (preserveNull && message.l !== copyOnWriteToken)) return fieldNumber;
}
function getArrayField(array, fieldNumber, hasMessageId, transform) {
  if (fieldNumber === -1) return null;
  var intermediate = fieldNumber + (hasMessageId ? 0 : -1),
    intermediate2 = array.length - 1;
  if (!(intermediate2 < 1 + (hasMessageId ? 0 : -1))) {
    if (intermediate >= intermediate2) {
      var intermediate3 = array[intermediate2];
      if (
        intermediate3 != null &&
        typeof intermediate3 === "object" &&
        intermediate3.constructor === Object
      ) {
        hasMessageId = intermediate3[fieldNumber];
        var intermediate4 = true;
      } else if (intermediate === intermediate2) hasMessageId = intermediate3;
      else return;
    } else hasMessageId = array[intermediate];
    if (transform && hasMessageId != null) {
      transform = transform(hasMessageId);
      if (transform == null) return transform;
      if (!Object.is(transform, hasMessageId))
        return (
          intermediate4
            ? (intermediate3[fieldNumber] = transform)
            : (array[intermediate] = transform),
          transform
        );
    }
    return hasMessageId;
  }
}
/**
 * 先检查可变性/分离共享数组，再写字段；不能绕过 copy-on-write 直接给 backing array 赋值。
 */
function setMessageField(message, fieldNumber, value) {
  assertMessageMutable(message);
  var backingArray = message.C;
  setArrayField(backingArray, backingArray[arrayFlagsKey] | 0, fieldNumber, value);
  return message;
}
function setArrayField(array, flags, fieldNumber, value) {
  var intermediate = fieldNumber + -1,
    intermediate2 = array.length - 1;
  if (intermediate2 >= 0 && intermediate >= intermediate2) {
    var intermediate3 = array[intermediate2];
    if (
      intermediate3 != null &&
      typeof intermediate3 === "object" &&
      intermediate3.constructor === Object
    )
      return ((intermediate3[fieldNumber] = value), flags);
  }
  if (intermediate <= intermediate2) return ((array[intermediate] = value), flags);
  if (value !== void 0) {
    var intermediate4;
    intermediate2 =
      (((intermediate4 = flags) != null ? intermediate4 : (flags = array[arrayFlagsKey] | 0)) >>
        14) &
        1023 || 536870912;
    fieldNumber >= intermediate2
      ? value != null &&
        ((intermediate = {}),
        (array[intermediate2 + -1] = ((intermediate[fieldNumber] = value), intermediate)))
      : (array[intermediate] = value);
  }
  return flags;
}
function prepareRepeatedArray(
  array,
  flags,
  parentArray,
  parentFlags,
  fieldNumber,
  mode,
  converted,
  forceCopy,
) {
  var flags2 = flags;
  mode === 1 || (mode !== 4 ? 0 : 2 & flags || (!(16 & flags) && 32 & parentFlags))
    ? isFrozenRepeatedArray(flags) ||
      ((flags |=
        !array.length ||
        (converted && !(4096 & flags)) ||
        (32 & parentFlags && !(4096 & flags || 16 & flags))
          ? 2
          : 256),
      flags !== flags2 && setArrayFlags(array, flags),
      Object.freeze(array))
    : (mode === 2 &&
        isFrozenRepeatedArray(flags) &&
        ((array = Array.prototype.slice.call(array)),
        (flags2 = 0),
        (flags = copyRepeatedArrayFlags(flags, parentFlags)),
        (parentFlags = setArrayField(parentArray, parentFlags, fieldNumber, array))),
      isFrozenRepeatedArray(flags) ||
        (forceCopy || (flags |= 16), flags !== flags2 && setArrayFlags(array, flags)));
  2 & flags ||
    !(4096 & flags || 16 & flags) ||
    markArrayContainsMutableValues(parentArray, parentFlags);
  return array;
}
function getRepeatedArray(array, fieldNumber) {
  array = getArrayField(array, fieldNumber);
  return Array.isArray(array) ? array : emptyRepeatedField;
}
function inheritRepeatedArrayFlags(flags, parentFlags) {
  2 & parentFlags && (flags |= 2);
  return flags | 1;
}
function isFrozenRepeatedArray(flags) {
  return (!!(2 & flags) && !!(4 & flags)) || !!(256 & flags);
}
function coerceByteString(value) {
  return value == null
    ? value
    : typeof value === "string"
      ? value
        ? new ByteString(value, byteStringConstructionToken)
        : emptyByteString()
      : value.constructor === ByteString
        ? value
        : supportsUint8Array && value != null && value instanceof Uint8Array
          ? value.length
            ? new ByteString(new Uint8Array(value), byteStringConstructionToken)
            : emptyByteString()
          : void 0;
}
function clearOneof(message, fieldNumbers) {
  assertMessageMutable(message);
  var backingOrStateValue = message.C;
  setOneofCase(backingOrStateValue, backingOrStateValue[arrayFlagsKey] | 0, fieldNumbers, 0);
  return message;
}
function getActiveOneofField(message, fieldNumbers, fieldNumber) {
  return computeOneofCase(message, fieldNumbers) === fieldNumber ? fieldNumber : -1;
}
function computeOneofCase(message, fieldNumbers) {
  message = message.C;
  return computeArrayOneofCase(getOneofCaseCache(message), message, void 0, fieldNumbers);
}
function getOneofCaseCache(array) {
  if (supportsNativeSymbols) {
    var intermediate;
    return (intermediate = array[oneofCasesSymbol]) != null
      ? intermediate
      : (array[oneofCasesSymbol] = new Map());
  }
  if (oneofCasesSymbol in array) return array[oneofCasesSymbol];
  intermediate = new Map();
  Object.defineProperty(array, oneofCasesSymbol, { value: intermediate });
  return intermediate;
}
function setOneofCase(array, flags, fieldNumbers, fieldNumber) {
  fieldNumber === 0 || fieldNumbers.includes(fieldNumber);
  var oneofCaseCache = getOneofCaseCache(array),
    arrayOneofCase = computeArrayOneofCase(oneofCaseCache, array, flags, fieldNumbers);
  arrayOneofCase !== fieldNumber &&
    (arrayOneofCase && setArrayField(array, flags, arrayOneofCase),
    oneofCaseCache.set(fieldNumbers, fieldNumber));
}
function computeArrayOneofCase(cases, array, flags, fieldNumbers) {
  var value = cases.get(fieldNumbers);
  if (value != null) return value;
  for (var index = (value = 0); index < fieldNumbers.length; index++) {
    var intermediate = fieldNumbers[index];
    getArrayField(array, intermediate) != null &&
      (value !== 0 && (flags = setArrayField(array, flags, value)), (value = intermediate));
  }
  cases.set(fieldNumbers, value);
  return value;
}
function getMutableNestedMessage(message, MessageType, fieldNumber) {
  assertMessageMutable(message);
  message = message.C;
  var intermediate = message[arrayFlagsKey] | 0,
    arrayField = getArrayField(message, fieldNumber),
    intermediate2 = void 0 === nestedFieldModeToken;
  MessageType = coerceMessage(arrayField, MessageType, !intermediate2, intermediate);
  if (!intermediate2 || MessageType)
    return (
      (MessageType = mutableMessageCopy(MessageType)),
      arrayField !== MessageType &&
        ((intermediate = setArrayField(message, intermediate, fieldNumber, MessageType)),
        markArrayContainsMutableValues(message, intermediate)),
      MessageType
    );
}
function getNestedArrayMessage(array, flags, MessageType, fieldNumber) {
  var intermediate = false;
  fieldNumber = getArrayField(array, fieldNumber, void 0, function (value) {
    var message = coerceMessage(value, MessageType, false, flags);
    intermediate = message !== value && message != null;
    return message;
  });
  if (fieldNumber != null)
    return (
      intermediate &&
        !isImmutableMessage(fieldNumber) &&
        markArrayContainsMutableValues(array, flags),
      fieldNumber
    );
}
function getNestedMessageOrDefault(message, MessageType, fieldNumber) {
  message = message.C;
  return (
    getNestedArrayMessage(message, message[arrayFlagsKey] | 0, MessageType, fieldNumber) ||
    MessageType[defaultMessageSymbol] ||
    (MessageType[defaultMessageSymbol] = createFrozenDefaultMessage(MessageType))
  );
}
function readNestedMessage(message, MessageType, fieldNumber) {
  var backingOrStateValue = message.C,
    intermediate = backingOrStateValue[arrayFlagsKey] | 0;
  MessageType = getNestedArrayMessage(backingOrStateValue, intermediate, MessageType, fieldNumber);
  if (MessageType == null) return MessageType;
  intermediate = backingOrStateValue[arrayFlagsKey] | 0;
  if (!isImmutableMessage(message, intermediate)) {
    var intermediate2 = mutableMessageCopy(MessageType);
    intermediate2 !== MessageType &&
      (detachCopyOnWriteArray(message) &&
        ((backingOrStateValue = message.C),
        (intermediate = backingOrStateValue[arrayFlagsKey] | 0)),
      (MessageType = intermediate2),
      (intermediate = setArrayField(backingOrStateValue, intermediate, fieldNumber, MessageType)),
      markArrayContainsMutableValues(backingOrStateValue, intermediate));
  }
  return MessageType;
}

/**
 * 遍历并转换子消息，同时维护数组 flags；不能用 map() 替换而丢掉冻结/共享状态。
 */
function readRepeatedMessages(message, MessageType, fieldNumber) {
  var modeOrForceCopy = void 0 === repeatedFieldModeToken ? 2 : 4,
    parentFlags = message.C,
    parentArray = parentFlags;
  parentFlags = parentFlags[arrayFlagsKey] | 0;
  var immutableOrConverted = isImmutableMessage(message, parentFlags),
    mode = immutableOrConverted ? 1 : modeOrForceCopy;
  modeOrForceCopy = mode === 3;
  var mutableOrFlags = !immutableOrConverted;
  (mode === 2 || mutableOrFlags) &&
    detachCopyOnWriteArray(message) &&
    ((parentArray = message.C), (parentFlags = parentArray[arrayFlagsKey] | 0));
  message = getRepeatedArray(parentArray, fieldNumber);
  var originalFlagsOrIndex = message === emptyRepeatedField ? 7 : message[arrayFlagsKey] | 0,
    flagsOrMessage = inheritRepeatedArrayFlags(originalFlagsOrIndex, parentFlags);
  if ((immutableOrConverted = !(4 & flagsOrMessage))) {
    var entryOrArray = message,
      conversionFlags = parentFlags,
      freezeChildren = !!(2 & flagsOrMessage);
    freezeChildren && (conversionFlags |= 2);
    for (
      var allMutable = !freezeChildren, allImmutable = true, readIndex = 0, writeIndex = 0;
      readIndex < entryOrArray.length;
      readIndex++
    ) {
      var childMessage = coerceMessage(
        entryOrArray[readIndex],
        MessageType,
        false,
        conversionFlags,
      );
      if (childMessage instanceof MessageType) {
        if (!freezeChildren) {
          var childImmutable = isImmutableMessage(childMessage);
          allMutable && (allMutable = !childImmutable);
          allImmutable && (allImmutable = childImmutable);
        }
        entryOrArray[writeIndex++] = childMessage;
      }
    }
    writeIndex < readIndex && (entryOrArray.length = writeIndex);
    flagsOrMessage |= 4;
    flagsOrMessage = allImmutable ? flagsOrMessage & -4097 : flagsOrMessage | 4096;
    flagsOrMessage = allMutable ? flagsOrMessage | 8 : flagsOrMessage & -9;
  }
  flagsOrMessage !== originalFlagsOrIndex &&
    (setArrayFlags(message, flagsOrMessage), 2 & flagsOrMessage && Object.freeze(message));
  if (
    mutableOrFlags &&
    !(
      8 & flagsOrMessage ||
      (!message.length &&
        (mode === 1 ||
          (mode !== 4 ? 0 : 2 & flagsOrMessage || (!(16 & flagsOrMessage) && 32 & parentFlags))))
    )
  ) {
    isFrozenRepeatedArray(flagsOrMessage) &&
      ((message = Array.prototype.slice.call(message)),
      (flagsOrMessage = copyRepeatedArrayFlags(flagsOrMessage, parentFlags)),
      (parentFlags = setArrayField(parentArray, parentFlags, fieldNumber, message)));
    MessageType = message;
    mutableOrFlags = flagsOrMessage;
    for (
      originalFlagsOrIndex = 0;
      originalFlagsOrIndex < MessageType.length;
      originalFlagsOrIndex++
    ) {
      entryOrArray = MessageType[originalFlagsOrIndex];
      flagsOrMessage = mutableMessageCopy(entryOrArray);
      entryOrArray !== flagsOrMessage && (MessageType[originalFlagsOrIndex] = flagsOrMessage);
    }
    mutableOrFlags |= 8;
    flagsOrMessage = mutableOrFlags = MessageType.length
      ? mutableOrFlags | 4096
      : mutableOrFlags & -4097;
    setArrayFlags(message, flagsOrMessage);
  }
  return (message = prepareRepeatedArray(
    message,
    flagsOrMessage,
    parentArray,
    parentFlags,
    fieldNumber,
    mode,
    immutableOrConverted,
    modeOrForceCopy,
  ));
}
function setNestedMessage(message, MessageType, fieldNumber, value) {
  if (value != null) {
    if (!(value instanceof MessageType))
      throw Error(
        "Expected instanceof " +
          getTypeDisplayName(MessageType) +
          " but got " +
          (value && getTypeDisplayName(value.constructor)),
      );
  } else value = void 0;
  setMessageField(message, fieldNumber, value);
  value && !isImmutableMessage(value) && markArrayContainsMutableValues(message.C);
  return message;
}
function copyRepeatedArrayFlags(flags, parentFlags) {
  return (flags = (2 & parentFlags ? flags | 2 : flags & -3) & -273);
}
function readBooleanField(message, fieldNumber) {
  var intermediate = intermediate === void 0 ? false : intermediate;
  message = getMessageField(message, fieldNumber);
  message =
    message == null || typeof message === "boolean"
      ? message
      : typeof message === "number"
        ? !!message
        : void 0;
  return message != null ? message : intermediate;
}
function readCoercedNumberField(message, fieldNumber, fallback) {
  fallback = fallback === void 0 ? 0 : fallback;
  var intermediate;
  return (intermediate = coerceNumericInt32(getMessageField(message, fieldNumber))) != null
    ? intermediate
    : fallback;
}
function readInt64Field(message, fieldNumber) {
  var intermediate = intermediate === void 0 ? zeroInt64 : intermediate;
  message = getMessageField(message, fieldNumber, void 0, void 0, coerceInt64);
  return message != null ? message : intermediate;
}
function readStringOrDefault(message, fieldNumber) {
  var intermediate = intermediate === void 0 ? "" : intermediate;
  var intermediate2;
  return (intermediate2 = coerceString(getMessageField(message, fieldNumber))) != null
    ? intermediate2
    : intermediate;
}
function readNumberField(message, fieldNumber) {
  var intermediate = intermediate === void 0 ? 0 : intermediate;
  var intermediate2;
  return (intermediate2 = coerceInt32(getMessageField(message, fieldNumber))) != null
    ? intermediate2
    : intermediate;
}
function readStringField(message, fieldNumber) {
  return coerceString(getMessageField(message, fieldNumber, void 0, preserveNullFieldToken));
}
function setStringField(message, fieldNumber, value) {
  if (value != null && typeof value !== "string") throw Error();
  return setMessageField(message, fieldNumber, value);
}
function setNumberField(message, fieldNumber, value) {
  if (value != null) {
    if (!isFiniteNumber(value))
      throw (
        (message = Error("enum")),
        attachErrorContext(message, "severity", "warning"),
        message
      );
    value |= 0;
  }
  return setMessageField(message, fieldNumber, value);
}
/**
 * 消息基类与配置消息：数组索引和字段类型是 wire 契约，不能改为普通对象覆盖。
 * 保留字段 ABI：后台 B / offscreen C 是 backing array；j/l 是共享和可变性标记，不是用户数据字段名。
 */
function ArrayMessage(array, pivot, messageId) {
  this.C = initializeMessageArray(array, pivot, messageId);
}
ArrayMessage.prototype.toJSON = function () {
  return serializeMessage(this);
};
function parseMessageJson(MessageType, json) {
  if (json == null || json == "") return new MessageType();
  json = JSON.parse(json);
  if (!Array.isArray(json)) throw Error("dnarr");
  addArrayFlags(json, 32);
  return new MessageType(json);
}
ArrayMessage.prototype.clone = function () {
  var backingOrStateValue = this.C,
    intermediate = backingOrStateValue[arrayFlagsKey] | 0;
  return freezeMessageArrayIfShareable(this, backingOrStateValue, intermediate)
    ? cloneMessageWrapper(this, backingOrStateValue, true)
    : new this.constructor(cloneMessageArray(backingOrStateValue, intermediate, false));
};
function readTelemetryBootstrapMessage() {
  var runtimeGlobal2 = runtimeGlobal;
  runtimeGlobal2 = runtimeGlobal2 === void 0 ? window : runtimeGlobal2;
  var bootstrapString = new BootstrapString(readWizGlobalData("K1cgmc", runtimeGlobal2));
  runtimeGlobal2 = TelemetryBootstrapMessage;
  var telemetryBootstrapMessage = new TelemetryBootstrapMessage();
  bootstrapString = unwrapBootstrapString(bootstrapString);
  runtimeGlobal2 =
    bootstrapString === null
      ? telemetryBootstrapMessage
      : parseMessageJson(runtimeGlobal2, "[" + bootstrapString.substring(4));
  telemetryBootstrapMessage = runtimeGlobal2.C;
  bootstrapString = telemetryBootstrapMessage[arrayFlagsKey] | 0;
  return isImmutableMessage(runtimeGlobal2, bootstrapString)
    ? runtimeGlobal2
    : freezeMessageArrayIfShareable(runtimeGlobal2, telemetryBootstrapMessage, bootstrapString)
      ? cloneMessageWrapper(runtimeGlobal2, telemetryBootstrapMessage)
      : new runtimeGlobal2.constructor(
          cloneMessageArray(telemetryBootstrapMessage, bootstrapString, true),
        );
}
ArrayMessage.prototype[messageMarkerSymbol] = messageMarkerToken;
ArrayMessage.prototype.toString = function () {
  return this.C.toString();
};
function immutableMessageFromArray(message, array) {
  if (array == null) {
    array = message.constructor;
    array =
      array[defaultMessageSymbol] ||
      (array[defaultMessageSymbol] = createFrozenDefaultMessage(array));
  } else {
    message = message.constructor;
    if (!Array.isArray(array)) throw Error();
    if (Object.isFrozen(array) || Object.isSealed(array) || !Object.isExtensible(array))
      throw Error();
    array = new message(markImmutableMessageArray(array));
  }
  return array;
}
function createMessageJsonParser(MessageType) {
  return function (value) {
    return parseMessageJson(MessageType, value);
  };
}
function AnyMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(AnyMessage, ArrayMessage);
AnyMessage.prototype.getTypeName = function () {
  return readStringOrDefault(this, 1).split("/").pop();
};
var isMutableAnyMessage = (function (value) {
  return markTypePredicate(function (value2) {
    return value2 instanceof value && !isImmutableMessage(value2);
  });
})(AnyMessage);
function BooleanFeatureFlag(key) {
  var intermediate = 2;
  intermediate = intermediate === void 0 ? 2 : intermediate;
  this.key = key;
  this.defaultValue = false;
  this.phase = intermediate;
  this.flagNameForDebugging = void 0;
}
BooleanFeatureFlag.prototype.ctor = function (value) {
  return typeof value === "boolean" ? value : this.defaultValue;
};
function IgnoredErrorsFeatureFlag() {
  var ignoredErrors = parseIgnoredErrors(
      '[["feature named `pageObserver` was not found","feature named `hover` was not found"]]',
    ),
    IgnoredErrorsMessage2 = IgnoredErrorsMessage,
    intermediate = 2;
  intermediate = intermediate === void 0 ? 2 : intermediate;
  this.key = "45696263";
  this.defaultValue = ignoredErrors;
  this.j = IgnoredErrorsMessage2;
  this.phase = intermediate;
  this.flagNameForDebugging = void 0;
}
IgnoredErrorsFeatureFlag.prototype.ctor = function (value) {
  if (typeof value === "string" && value) return parseMessageJson(this.j, value);
  if (!isMutableAnyMessage(value)) return this.defaultValue.clone();
  var intermediate;
  try {
    var intermediate2,
      intermediate3 = this.j,
      intermediate4 = (intermediate2 = value.getTypeName()) != null ? intermediate2 : "";
    if (readStringOrDefault(value, 1).split("/").pop() != intermediate4) var intermediate5 = null;
    else {
      var intermediate6 =
          typeof intermediate3 === "function" ? intermediate3 : intermediate3.constructor,
        backingOrStateValue = value.C,
        intermediate7 = backingOrStateValue[arrayFlagsKey] | 0,
        arrayField = getArrayField(backingOrStateValue, 2);
      detachCopyOnWriteArray(value) &&
        ((backingOrStateValue = value.C), (intermediate7 = backingOrStateValue[arrayFlagsKey] | 0));
      value = backingOrStateValue;
      if (
        arrayField != null &&
        !(
          Array.isArray(arrayField) ||
          (arrayField != null && arrayField[messageMarkerSymbol] === messageMarkerToken)
        )
      )
        throw Error(
          "saw an invalid value of type '" + getValueType(arrayField) + "' in the Any.value field",
        );
      var message = coerceMessage(arrayField, intermediate6, true, intermediate7);
      if (!(message instanceof intermediate6))
        throw Error(
          "incorrect type in any value: got " +
            message.constructor.displayName +
            ", expected " +
            intermediate6.displayName,
        );
      (intermediate6 = !!(2 & intermediate7)) || (message = mutableMessageCopy(message));
      arrayField !== message &&
        (setArrayField(value, intermediate7, 2, message),
        intermediate6 || markArrayContainsMutableValues(value));
      intermediate5 = message;
    }
  } catch (caughtError) {
    intermediate5 = null;
  }
  return (intermediate = intermediate5) != null ? intermediate : this.defaultValue.clone();
};
function StringFlagValueMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(StringFlagValueMessage, ArrayMessage);
StringFlagValueMessage.prototype.clearValue = function () {
  return clearOneof(this, stringFlagOneofFields);
};
var stringFlagOneofFields = [1, 2];
function FeatureFlagValueMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(FeatureFlagValueMessage, ArrayMessage);
FeatureFlagValueMessage.prototype.clearValue = function () {
  return clearOneof(this, featureFlagOneofFields);
};
var featureFlagOneofFields = [2, 3, 4, 5, 6, 8];
function FeatureFlagSetMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(FeatureFlagSetMessage, ArrayMessage);
FeatureFlagSetMessage.prototype.La = function () {
  var messageField = getMessageField(this, 3, void 0, void 0, coerceByteString);
  return messageField == null ? emptyByteString() : messageField;
};
function FeatureFlagBootstrapMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(FeatureFlagBootstrapMessage, ArrayMessage);
var parseFeatureFlagBootstrap = createMessageJsonParser(FeatureFlagBootstrapMessage);
function IgnoredErrorsMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(IgnoredErrorsMessage, ArrayMessage);
var parseIgnoredErrors = createMessageJsonParser(IgnoredErrorsMessage);
/**
 * 64 位整数：以两个 32 位字运算，保留溢出、符号扩展和十进制转换路径。
 */
function Int64(low, high) {
  this.K = low | 0;
  this.H = high | 0;
}
function int64ToNumber(value) {
  return value.H * 4294967296 + (value.K >>> 0);
}
prototypeAlias = Int64.prototype;
prototypeAlias.isSafeInteger = function () {
  var intermediate = this.H >> 21;
  return intermediate == 0 || (intermediate == -1 && !(this.K == 0 && this.H == -2097152));
};

/** 超出安全整数范围时分块转十进制/进制，避免先转 Number 丢失精度。 */
prototypeAlias.toString = function (radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix) throw Error("radix out of range: " + radix);
  if (this.isSafeInteger()) {
    var intermediate = int64ToNumber(this);
    return radix == 10 ? "" + intermediate : intermediate.toString(radix);
  }
  intermediate = 14 - (radix >> 2);
  var intermediate2 = Math.pow(radix, intermediate),
    intermediate3 = int64FromWords(intermediate2, intermediate2 / 4294967296);
  intermediate2 = this.div(intermediate3);
  var Math2 = Math,
    abs = Math2.abs;
  intermediate3 = intermediate2.multiply(intermediate3);
  intermediate3 = this.add(negateInt64(intermediate3));
  Math2 = abs.call(Math2, int64ToNumber(intermediate3));
  abs = radix == 10 ? "" + Math2 : Math2.toString(radix);
  abs.length < intermediate && (abs = "0000000000000".slice(abs.length - intermediate) + abs);
  Math2 = int64ToNumber(intermediate2);
  return (radix == 10 ? Math2 : Math2.toString(radix)) + abs;
};
function isZeroInt64(value) {
  return value.K == 0 && value.H == 0;
}
prototypeAlias.ya = function () {
  return this.K ^ this.H;
};
prototypeAlias.equals = function (other) {
  return other == null ? false : this.K == other.K && this.H == other.H;
};
prototypeAlias.compare = function (other) {
  return this.H == other.H
    ? this.K == other.K
      ? 0
      : this.K >>> 0 > other.K >>> 0
        ? 1
        : -1
    : this.H > other.H
      ? 1
      : -1;
};
function negateInt64(value) {
  var negatedLow = (~value.K + 1) | 0;
  return int64FromWords(negatedLow, (~value.H + !negatedLow) | 0);
}
/** 拆成 16 位片段传播进位，最后按两个 32 位字截断；other 在末段被复用为低 16 位和。 */
prototypeAlias.add = function (other) {
  var leftHighUpper16 = this.H >>> 16,
    leftHighLower16 = this.H & 65535,
    leftLowUpper16OrCarry = this.K >>> 16,
    rightHighUpper16 = other.H >>> 16,
    rightHighLower16 = other.H & 65535,
    lowUpperSum = other.K >>> 16;
  other = (this.K & 65535) + (other.K & 65535);
  lowUpperSum = (other >>> 16) + (leftLowUpper16OrCarry + lowUpperSum);
  leftLowUpper16OrCarry = lowUpperSum >>> 16;
  leftLowUpper16OrCarry += leftHighLower16 + rightHighLower16;
  return int64FromWords(
    ((lowUpperSum & 65535) << 16) | (other & 65535),
    ((((leftLowUpper16OrCarry >>> 16) + (leftHighUpper16 + rightHighUpper16)) & 65535) << 16) |
      (leftLowUpper16OrCarry & 65535),
  );
};

/** 16 位部分积逐级累加，只保留 64 位；不能以普通浮点乘法替换。 */
prototypeAlias.multiply = function (other) {
  if (isZeroInt64(this)) return this;
  if (isZeroInt64(other)) return other;
  var intermediate = this.H >>> 16,
    intermediate2 = this.H & 65535,
    intermediate3 = this.K >>> 16,
    intermediate4 = this.K & 65535,
    intermediate5 = other.H >>> 16,
    intermediate6 = other.H & 65535,
    intermediate7 = other.K >>> 16;
  other = other.K & 65535;
  var intermediate8 = intermediate4 * other;
  var intermediate9 = (intermediate8 >>> 16) + intermediate3 * other;
  var intermediate10 = intermediate9 >>> 16;
  intermediate9 = (intermediate9 & 65535) + intermediate4 * intermediate7;
  intermediate10 += intermediate9 >>> 16;
  intermediate10 += intermediate2 * other;
  var intermediate11 = intermediate10 >>> 16;
  intermediate10 = (intermediate10 & 65535) + intermediate3 * intermediate7;
  intermediate11 += intermediate10 >>> 16;
  intermediate10 = (intermediate10 & 65535) + intermediate4 * intermediate6;
  intermediate11 =
    (intermediate11 +
      (intermediate10 >>> 16) +
      (intermediate * other +
        intermediate2 * intermediate7 +
        intermediate3 * intermediate6 +
        intermediate4 * intermediate5)) &
    65535;
  return int64FromWords(
    ((intermediate9 & 65535) << 16) | (intermediate8 & 65535),
    (intermediate11 << 16) | (intermediate10 & 65535),
  );
};

/** 先处理零、最小负数和符号，再用近似商与乘积校正；保留边界溢出行为。 */
prototypeAlias.div = function (divisor) {
  if (isZeroInt64(divisor)) throw Error("division by zero");
  if (this.H < 0) {
    if (this.equals(INT64_MIN)) {
      if (divisor.equals(INT64_ONE) || divisor.equals(INT64_NEGATIVE_ONE)) return INT64_MIN;
      if (divisor.equals(INT64_MIN)) return INT64_ONE;
      var intermediate = this.H;
      intermediate = int64FromWords((this.K >>> 1) | (intermediate << 31), intermediate >> 1);
      intermediate = intermediate.div(divisor).shiftLeft(1);
      if (intermediate.equals(INT64_ZERO)) return divisor.H < 0 ? INT64_ONE : INT64_NEGATIVE_ONE;
      var intermediate2 = divisor.multiply(intermediate);
      intermediate2 = this.add(negateInt64(intermediate2));
      return intermediate.add(intermediate2.div(divisor));
    }
    return divisor.H < 0
      ? negateInt64(this).div(negateInt64(divisor))
      : negateInt64(negateInt64(this).div(divisor));
  }
  if (isZeroInt64(this)) return INT64_ZERO;
  if (divisor.H < 0)
    return divisor.equals(INT64_MIN) ? INT64_ZERO : negateInt64(this.div(negateInt64(divisor)));
  intermediate = INT64_ZERO;
  for (intermediate2 = this; intermediate2.compare(divisor) >= 0; ) {
    var intermediate3 = Math.max(
        1,
        Math.floor(int64ToNumber(intermediate2) / int64ToNumber(divisor)),
      ),
      intermediate4 = Math.ceil(Math.log(intermediate3) / Math.LN2);
    intermediate4 = intermediate4 <= 48 ? 1 : Math.pow(2, intermediate4 - 48);
    for (
      var intermediate5 = int64FromNumber(intermediate3),
        intermediate6 = intermediate5.multiply(divisor);
      intermediate6.H < 0 || intermediate6.compare(intermediate2) > 0;

    ) {
      intermediate3 -= intermediate4;
      intermediate5 = int64FromNumber(intermediate3);
      intermediate6 = intermediate5.multiply(divisor);
    }
    isZeroInt64(intermediate5) && (intermediate5 = INT64_ONE);
    intermediate = intermediate.add(intermediate5);
    intermediate2 = intermediate2.add(negateInt64(intermediate6));
  }
  return intermediate;
};
prototypeAlias.and = function (other) {
  return int64FromWords(this.K & other.K, this.H & other.H);
};
prototypeAlias.or = function (other) {
  return int64FromWords(this.K | other.K, this.H | other.H);
};
prototypeAlias.xor = function (other) {
  return int64FromWords(this.K ^ other.K, this.H ^ other.H);
};
prototypeAlias.shiftLeft = function (bits) {
  bits &= 63;
  if (bits == 0) return this;
  var intermediate = this.K;
  return bits < 32
    ? int64FromWords(intermediate << bits, (this.H << bits) | (intermediate >>> (32 - bits)))
    : int64FromWords(0, intermediate << (bits - 32));
};
function int64FromNumber(value) {
  return value > 0
    ? value >= 0x7fffffffffffffff
      ? INT64_MAX
      : new Int64(value, value / 4294967296)
    : value < 0
      ? value <= -0x7fffffffffffffff
        ? INT64_MIN
        : negateInt64(new Int64(-value, -value / 4294967296))
      : INT64_ZERO;
}
function int64FromWords(low, high) {
  return new Int64(low, high);
}
var INT64_ZERO = int64FromWords(0, 0),
  INT64_ONE = int64FromWords(1, 0),
  INT64_NEGATIVE_ONE = int64FromWords(-1, -1),
  INT64_MAX = int64FromWords(4294967295, 2147483647),
  INT64_MIN = int64FromWords(0, 2147483648);
function readWizGlobalData(key, windowObject) {
  windowObject = windowObject === void 0 ? window : windowObject;
  windowObject = windowObject === void 0 ? window : windowObject;
  return (windowObject = windowObject.WIZ_global_data) && key in windowObject
    ? windowObject[key]
    : null;
}
var featureFlagStoreInstance;
function getFeatureFlagStore() {
  return (featureFlagStoreInstance = featureFlagStoreInstance || new FeatureFlagStore());
}
function FeatureFlagStore() {
  var intermediate = null;
  var wizGlobalData = readWizGlobalData("TSDtV", window);
  if ((wizGlobalData = typeof wizGlobalData !== "string" ? null : wizGlobalData)) {
    intermediate = parseFeatureFlagBootstrap("[" + wizGlobalData.substring(4));
    intermediate = readRepeatedMessages(intermediate, FeatureFlagSetMessage, 1)[0];
  }
  if (intermediate) {
    wizGlobalData = getIterator(readRepeatedMessages(intermediate, FeatureFlagValueMessage, 2));
    var iteration = wizGlobalData.next(),
      intermediate2;
    try {
      for (; !iteration.done; iteration = wizGlobalData.next()) {
        var value = iteration.value,
          backingOrStateValue = value.C;
        if (
          getNestedArrayMessage(
            backingOrStateValue,
            backingOrStateValue[arrayFlagsKey] | 0,
            AnyMessage,
            getActiveOneofField(value, featureFlagOneofFields, 6),
          ) !== void 0
        )
          throw Error();
      }
    } finally {
      iteration &&
        !iteration.done &&
        (intermediate2 = wizGlobalData.return) &&
        intermediate2.call(wizGlobalData);
    }
  }
  var intermediate3;
  if (intermediate) {
    intermediate2 = {};
    value = getIterator(readRepeatedMessages(intermediate, FeatureFlagValueMessage, 2));
    backingOrStateValue = value.next();
    try {
      for (; !backingOrStateValue.done; backingOrStateValue = value.next()) {
        var value2 = backingOrStateValue.value,
          intermediate4 = readInt64Field(value2, 1).toString();
        switch (computeOneofCase(value2, featureFlagOneofFields)) {
          case 3:
            intermediate2[intermediate4] = readBooleanField(
              value2,
              getActiveOneofField(value2, featureFlagOneofFields, 3),
            );
            break;
          case 2:
            var int64Field = readInt64Field(
              value2,
              getActiveOneofField(value2, featureFlagOneofFields, 2),
            );
            isInt64Representation(int64Field);
            isSafeInt64Representation(int64Field);
            var intermediate5 = isSafeInt64Representation(int64Field)
              ? Number(int64Field)
              : String(int64Field);
            intermediate2[intermediate4] = intermediate5;
            break;
          case 4:
            wizGlobalData = void 0;
            iteration = value2;
            var activeOneofField = getActiveOneofField(value2, featureFlagOneofFields, 4),
              intermediate6 = void 0;
            intermediate6 = intermediate6 === void 0 ? 0 : intermediate6;
            var intermediate7 =
              (wizGlobalData = getMessageField(
                iteration,
                activeOneofField,
                void 0,
                void 0,
                coerceSpecialNumber,
              )) != null
                ? wizGlobalData
                : intermediate6;
            intermediate2[intermediate4] = intermediate7;
            break;
          case 5:
            intermediate2[intermediate4] = readStringOrDefault(
              value2,
              getActiveOneofField(value2, featureFlagOneofFields, 5),
            );
            break;
          case 6:
            intermediate2[intermediate4] = readNestedMessage(
              value2,
              AnyMessage,
              getActiveOneofField(value2, featureFlagOneofFields, 6),
            );
            break;
          case 8:
            var nestedMessageOrDefault = getNestedMessageOrDefault(
              value2,
              StringFlagValueMessage,
              getActiveOneofField(value2, featureFlagOneofFields, 8),
            );
            switch (computeOneofCase(nestedMessageOrDefault, stringFlagOneofFields)) {
              case 1:
                intermediate2[intermediate4] = readStringOrDefault(
                  nestedMessageOrDefault,
                  getActiveOneofField(nestedMessageOrDefault, stringFlagOneofFields, 1),
                );
                break;
              default:
                throw Error(
                  "case " + computeOneofCase(nestedMessageOrDefault, stringFlagOneofFields),
                );
            }
            break;
          default:
            throw Error("case " + computeOneofCase(value2, featureFlagOneofFields));
        }
      }
    } finally {
      backingOrStateValue &&
        !backingOrStateValue.done &&
        (intermediate3 = value.return) &&
        intermediate3.call(value);
    }
    intermediate3 = intermediate2;
  } else intermediate3 = {};
  this.j = intermediate3;
  this.l = intermediate ? intermediate.La() : null;
}
function readFeatureFlag(store, flag) {
  return flag.phase !== 1 && flag.key in store.j ? flag.ctor(store.j[flag.key]) : flag.defaultValue;
}
FeatureFlagStore.prototype.La = createPropertyGetter("l");
function ExperimentConfigMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(ExperimentConfigMessage, ArrayMessage);
var ignoredErrorsFlag = new IgnoredErrorsFeatureFlag();
var crashStorageFlag = new BooleanFeatureFlag("45723104");
var telemetryIntegrationFlag = new BooleanFeatureFlag("45765314");
function ExperimentSamplingMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(ExperimentSamplingMessage, ArrayMessage);
var getDefaultExperimentSamplingMessage = (function (value) {
  return function () {
    return (
      value[defaultMessageSymbol] ||
      (value[defaultMessageSymbol] = createFrozenDefaultMessage(value))
    );
  };
})(ExperimentSamplingMessage);
Object.create(null);
/**
 * Java 转译兼容层：类型元数据、装箱整数、异常与数组类型检查。
 */
function JavaObject() {}
JavaObject.prototype.equals = function (value) {
  return javaObjectEquals(this, value);
};
JavaObject.prototype.ya = function () {
  return (
    this.A ||
    (Object.defineProperties(this, {
      A: { value: (nextJavaIdentityHash = (nextJavaIdentityHash + 1) | 0), enumerable: false },
    }),
    this.A)
  );
};
JavaObject.prototype.toString = function () {
  return (
    javaString(getJavaClassName(getJavaClassMetadata(getConstructor(this)))) +
    "@" +
    javaString((this.ya() >>> 0).toString(16))
  );
};
JavaObject.prototype.D = ["java.lang.Object", 0];
function JavaThrowable() {}
inheritCompiledClass(JavaThrowable, JavaObject);
function associateNativeError(throwable, nativeError) {
  throwable.j = nativeError;
  linkNativeErrorToThrowable(nativeError, throwable);
}
function captureJavaStack(throwable) {
  isNativeError(throwable.j) &&
    (Error.captureStackTrace
      ? Error.captureStackTrace(checkedJavaCast(throwable.j, isNativeError, NativeErrorClass))
      : (checkedJavaCast(throwable.j, isNativeError, NativeErrorClass).stack = Error().stack));
}
JavaThrowable.prototype.toString = function () {
  var javaClassName = getJavaClassName(getJavaClassMetadata(getConstructor(this))),
    intermediate = this.l;
  return intermediate == null
    ? javaClassName
    : javaString(javaClassName) + ": " + javaString(intermediate);
};
function wrapJavaThrowable(error) {
  if (error != null) {
    var intermediate = error.Za;
    if (intermediate != null) return intermediate;
  }
  error instanceof TypeError
    ? (intermediate = createNullPointerException())
    : ((intermediate = new JavaJsException()),
      captureJavaStack(intermediate),
      associateNativeError(intermediate, Error(intermediate)));
  intermediate.l = error == null ? "null" : error.toString();
  associateNativeError(intermediate, error);
  return intermediate;
}
function isJavaThrowable(value) {
  return value instanceof JavaThrowable;
}
JavaThrowable.prototype.D = ["java.lang.Throwable", 0];
function JavaException() {}
inheritCompiledClass(JavaException, JavaThrowable);
JavaException.prototype.D = ["java.lang.Exception", 0];
function JavaRuntimeException() {}
inheritCompiledClass(JavaRuntimeException, JavaException);
JavaRuntimeException.prototype.D = ["java.lang.RuntimeException", 0];
function JavaIndexOutOfBoundsException() {}
inheritCompiledClass(JavaIndexOutOfBoundsException, JavaRuntimeException);
JavaIndexOutOfBoundsException.prototype.D = ["java.lang.IndexOutOfBoundsException", 0];
var boxedIntegerCache;
function initializeIntegerCache() {
  initializeIntegerCache = createNoopFunction();
  for (
    var integerCacheArray = createIntegerCacheArray(), intermediate = 0;
    intermediate < 256;
    intermediate = (intermediate + 1) | 0
  )
    setJavaArrayElement(
      integerCacheArray,
      intermediate,
      createBoxedInteger((intermediate - 128) | 0),
    );
  boxedIntegerCache = integerCacheArray;
}
function JavaArithmeticException() {}
inheritCompiledClass(JavaArithmeticException, JavaRuntimeException);
JavaArithmeticException.prototype.D = ["java.lang.ArithmeticException", 0];
function JavaArrayStoreException() {}
inheritCompiledClass(JavaArrayStoreException, JavaRuntimeException);
JavaArrayStoreException.prototype.D = ["java.lang.ArrayStoreException", 0];
function JavaClassCastException() {}
inheritCompiledClass(JavaClassCastException, JavaRuntimeException);
JavaClassCastException.prototype.D = ["java.lang.ClassCastException", 0];
function JavaIllegalArgumentException() {}
inheritCompiledClass(JavaIllegalArgumentException, JavaRuntimeException);
JavaIllegalArgumentException.prototype.D = ["java.lang.IllegalArgumentException", 0];
function JavaIllegalStateException() {}
inheritCompiledClass(JavaIllegalStateException, JavaRuntimeException);
function createIllegalStateException(message) {
  var javaIllegalStateException = new JavaIllegalStateException();
  javaIllegalStateException.l = message;
  captureJavaStack(javaIllegalStateException);
  associateNativeError(javaIllegalStateException, Error(javaIllegalStateException));
  return javaIllegalStateException;
}
JavaIllegalStateException.prototype.D = ["java.lang.IllegalStateException", 0];
function JavaJsException() {}
inheritCompiledClass(JavaJsException, JavaRuntimeException);
JavaJsException.prototype.D = ["java.lang.JsException", 0];
function JavaNullPointerException() {}
inheritCompiledClass(JavaNullPointerException, JavaJsException);
function createNullPointerException() {
  var javaNullPointerException = new JavaNullPointerException();
  captureJavaStack(javaNullPointerException);
  associateNativeError(javaNullPointerException, new TypeError(javaNullPointerException));
  return javaNullPointerException;
}
JavaNullPointerException.prototype.D = ["java.lang.NullPointerException", 0];
function JavaStringIndexOutOfBoundsException() {}
inheritCompiledClass(JavaStringIndexOutOfBoundsException, JavaIndexOutOfBoundsException);
JavaStringIndexOutOfBoundsException.prototype.D = ["java.lang.StringIndexOutOfBoundsException", 0];
function JavaNumber() {}
var javaDoublePattern;
inheritCompiledClass(JavaNumber, JavaObject);
JavaNumber.prototype.D = ["java.lang.Number", 0];
function JavaDouble() {}
inheritCompiledClass(JavaDouble, JavaNumber);
JavaDouble.prototype.D = ["java.lang.Double", 0];
function javaLongFromNumber(value) {
  return int64FromNumber(value);
}
function javaNumberToInt(value) {
  if (!isFinite(value))
    throw (
      (value = new JavaArithmeticException()),
      captureJavaStack(value),
      associateNativeError(value, Error(value)),
      value.j
    );
  return value | 0;
}
function JavaBoolean() {}
inheritCompiledClass(JavaBoolean, JavaObject);
JavaBoolean.prototype.D = ["java.lang.Boolean", 0];
function checkedJavaCast(value, predicate, TargetType) {
  if (value != null && !predicate(value))
    throw (
      (value =
        javaString(getJavaClassName(getJavaClass(value))) +
        " cannot be cast to " +
        javaString(getJavaClassName(getJavaClassMetadata(TargetType)))),
      (predicate = new JavaClassCastException()),
      (predicate.l = value),
      captureJavaStack(predicate),
      associateNativeError(predicate, Error(predicate)),
      predicate.j
    );
  return value;
}
function getConstructor(value) {
  return value.constructor;
}
function getOrCreateClassMetadata(constructor, key, create) {
  if (Object.prototype.hasOwnProperty.call(constructor.prototype, key))
    return constructor.prototype[key];
  create = create();
  return (constructor.prototype[key] = create);
}
function javaObjectEquals(left, right) {
  return Object.is(left, right) || (left == null && right == null);
}
var nextJavaIdentityHash = 0;
function getJavaClass(value) {
  switch (requireNonNull(typeof value)) {
    case "number":
      return getJavaClassMetadata(JavaDouble);
    case "boolean":
      return getJavaClassMetadata(JavaBoolean);
    case "string":
      return getJavaClassMetadata(JavaString);
    case "function":
      return getJavaClassMetadata(NativenativefunctionType);
  }
  if (value instanceof Int64) value = getJavaClassMetadata(JavaLong);
  else if (value instanceof JavaObject) value = getJavaClassMetadata(getConstructor(value));
  else if (Array.isArray(value))
    value = (value = value.ra)
      ? getJavaClassMetadata(value.ba, value.aa)
      : getJavaClassMetadata(JavaObject, 1);
  else if (value != null) value = getJavaClassMetadata(NativenativeobjectType);
  else throw new TypeError("null.getClass()");
  return value;
}
function NativenativefunctionType() {}
NativenativefunctionType.prototype.D = ["<native function>", 1];
function NativenativeobjectType() {}
inheritCompiledClass(NativenativeobjectType, JavaObject);
NativenativeobjectType.prototype.D = ["<native object>", 0];
function JavaInteger() {
  this.X = 0;
}
inheritCompiledClass(JavaInteger, JavaNumber);
function boxInteger(value) {
  value > -129 && value < 128
    ? (initializeIntegerCache(), (value = boxedIntegerCache[(value + 128) | 0]))
    : (value = createBoxedInteger(value));
  return value;
}
function createBoxedInteger(value) {
  var javaInteger = new JavaInteger();
  javaInteger.X = value;
  return javaInteger;
}
JavaInteger.prototype.equals = function (value) {
  return isBoxedInteger(value) && checkedJavaCast(value, isBoxedInteger, JavaInteger).X == this.X;
};
JavaInteger.prototype.ya = createPropertyGetter("X");
JavaInteger.prototype.toString = function () {
  return "" + this.X;
};
function isBoxedInteger(value) {
  return value instanceof JavaInteger;
}
JavaInteger.prototype.D = ["java.lang.Integer", 0];
function JavaLong() {}
inheritCompiledClass(JavaLong, JavaNumber);
JavaLong.prototype.D = ["java.lang.Long", 0];
function JavaNumberFormatException() {}
inheritCompiledClass(JavaNumberFormatException, JavaIllegalArgumentException);
JavaNumberFormatException.prototype.D = ["java.lang.NumberFormatException", 0];
function requireNonNull(value) {
  if (value == null) throw createNullPointerException().j;
  return value;
}
function createIntegerCacheArray() {
  var values = [256];
  return createJavaArray(values, { ba: JavaInteger, oa: isBoxedInteger, aa: values.length });
}
function createJavaArray(dimensions, metadata) {
  var intermediate = dimensions[0];
  if (intermediate == null) return null;
  var array = new globalThis.Array(intermediate);
  metadata && (array.ra = metadata);
  if (dimensions.length > 1) {
    dimensions = dimensions.slice(1);
    metadata = metadata && { ba: metadata.ba, oa: metadata.oa, aa: metadata.aa - 1 };
    for (var index = 0; index < intermediate; index++)
      array[index] = createJavaArray(dimensions, metadata);
  } else if (metadata && ((dimensions = metadata.ba.Cb), dimensions !== void 0))
    for (metadata = 0; metadata < intermediate; metadata++) array[metadata] = dimensions;
  return array;
}
function setJavaArrayElement(array, index, value) {
  var intermediate;
  if (!(intermediate = value == null))
    a: {
      var intermediate2 = array.ra;
      if (intermediate2)
        if (intermediate2.aa > 1) {
          intermediate = intermediate2.ba;
          var callback = intermediate2.oa;
          intermediate2 = intermediate2.aa - 1;
          if (value != null && Array.isArray(value)) {
            var intermediate3 = value.ra || { ba: JavaObject, aa: 1 },
              intermediate4 = intermediate3.aa;
            intermediate4 == intermediate2
              ? ((intermediate2 = intermediate3.ba),
                (intermediate =
                  intermediate2 === intermediate
                    ? true
                    : (intermediate && intermediate.prototype.Qa) ||
                        (intermediate2 && intermediate2.prototype.Qa)
                      ? false
                      : callback(intermediate2.prototype)))
              : (intermediate = intermediate4 > intermediate2 ? JavaObject == intermediate : false);
          } else intermediate = false;
          if (!intermediate) {
            intermediate = false;
            break a;
          }
        } else if (value != null && !intermediate2.oa(value)) {
          intermediate = false;
          break a;
        }
      intermediate = true;
    }
  if (!intermediate)
    throw (
      (array = new JavaArrayStoreException()),
      captureJavaStack(array),
      associateNativeError(array, Error(array)),
      array.j
    );
  array[index] = value;
}
function JavaString() {}
inheritCompiledClass(JavaString, JavaObject);
function javaString(value) {
  return value == null ? "null" : value.toString();
}
function zeroPadding(length) {
  if (!(length >= 0))
    throw (
      (length = new JavaIllegalArgumentException()),
      captureJavaStack(length),
      associateNativeError(length, Error(length)),
      length.j
    );
  return "0".repeat(length);
}
JavaString.prototype.D = ["java.lang.String", 0];
function JavaClass(constructor, dimensions) {
  this.j = constructor;
  this.l = dimensions;
}
inheritCompiledClass(JavaClass, JavaObject);
function getJavaClassMetadata(constructor, dimensions) {
  var intermediate = dimensions || 0;
  return getOrCreateClassMetadata(constructor, "$$class/" + intermediate, function () {
    return new JavaClass(constructor, intermediate);
  });
}
function getJavaClassName(javaClass) {
  return javaClass.l != 0
    ? javaString(repeatJavaString("[", javaClass.l)) +
        javaString(
          javaClass.j.prototype.D[1] == 3
            ? javaClass.j.prototype.D[2]
            : "L" + javaString(javaClass.j.prototype.D[0]) + ";",
        )
    : javaClass.j.prototype.D[0];
}
function substringAfterLast(text, delimiter) {
  delimiter = (text.lastIndexOf(delimiter) + 1) | 0;
  var intermediate = (text.length + 1) | 0;
  if (delimiter < 0 || delimiter >= intermediate)
    throw (
      (text = new JavaStringIndexOutOfBoundsException()),
      (text.l = "Index: " + delimiter + ", Size: " + intermediate),
      captureJavaStack(text),
      associateNativeError(text, Error(text)),
      text.j
    );
  return text.substr(delimiter);
}
JavaClass.prototype.toString = function () {
  return (
    String(
      this.l == 0 && this.j.prototype.D[1] == 1
        ? "interface "
        : this.l == 0 && this.j.prototype.D[1] == 3
          ? ""
          : "class ",
    ) + javaString(getJavaClassName(this))
  );
};
function repeatJavaString(text, count) {
  for (
    var intermediate = "", intermediate2 = 0;
    intermediate2 < count;
    intermediate2 = (intermediate2 + 1) | 0
  )
    intermediate = javaString(intermediate) + javaString(text);
  return intermediate;
}
JavaClass.prototype.D = ["java.lang.Class", 0];
function NativeErrorClass() {}
function isNativeError(value) {
  return value instanceof Error;
}
NativeErrorClass.prototype.D = ["Error", 0];
function linkNativeErrorToThrowable(nativeError, throwable) {
  if (nativeError instanceof Object)
    try {
      {
        nativeError.Za = throwable;
        Object.defineProperties(nativeError, {
          cause: {
            get: function () {
              return throwable.o && throwable.o.j;
            },
          },
        });
      }
    } catch (caughtError) {}
}
function XplatException(message, cause) {
  this.o = cause;
  this.l = message;
  captureJavaStack(this);
  associateNativeError(this, Error(this));
}
inheritCompiledClass(XplatException, JavaRuntimeException);
polyfillGlobal.Object.defineProperties(XplatException.prototype, {
  error: {
    configurable: true,
    enumerable: true,
    get: function () {
      var intermediate = Error(),
        intermediate2 = this.j;
      intermediate.fileName = intermediate2.fileName;
      intermediate.lineNumber = intermediate2.lineNumber;
      intermediate.columnNumber = intermediate2.columnNumber;
      intermediate.message = intermediate2.message;
      intermediate.name = intermediate2.name;
      intermediate.stack = intermediate2.stack;
      intermediate.toSource = intermediate2.toSource;
      intermediate.cause = intermediate2.cause;
      for (var intermediate3 in intermediate2)
        intermediate3.indexOf("__java$") != 0 &&
          (intermediate[intermediate3] = intermediate2[intermediate3]);
      return intermediate;
    },
  },
});
XplatException.prototype.getMessage = createPropertyGetter("l");
XplatException.prototype.D = ["com.google.apps.docs.xplat.base.XplatException", 0];
function NativeErrorValueClass() {}
function isNativeErrorValue(value) {
  return value instanceof Error;
}
NativeErrorValueClass.prototype.D = ["Error", 0];
function createSessionId() {
  var callback =
    callback == null
      ? function (value) {
          return Math.max(Math.min(Math.floor(Math.random() * value), 2147483647), -2147483648) | 0;
        }
      : callback;
  var intermediate = (callback(2147483647) >>> 0).toString(16);
  intermediate =
    javaString(zeroPadding(Math.max(0, (8 - intermediate.length) | 0))) + javaString(intermediate);
  callback = (callback(2147483647) >>> 0).toString(16);
  return javaString(callback) + javaString(intermediate);
}
function NativeArrayType() {}
function isNativeArray(value) {
  return value instanceof Array;
}
NativeArrayType.prototype.D = ["Array", 0];
function NativeObjectClass() {}
function isNativeObject(value) {
  return value instanceof Object;
}
NativeObjectClass.prototype.D = ["Object", 0];
function NativeObjectMapClass() {}
function isNativeObjectMap(value) {
  return value instanceof Object;
}
NativeObjectMapClass.prototype.D = ["Object", 0];
var telemetryContextKeys = {
  bc: "build-label",
  Db: "buildLabel",
  Eb: "clientLog",
  Ib: "docId",
  dc: "mobile-app-version",
  rc: "severity",
  oc: "reportSeverity",
  wc: "severity-unprefixed",
  Ub: "isArrayPrototypeIntact",
  Vb: "isEditorElementAttached",
  Nb: "documentCharacterSet",
  Xb: "isModuleLoadFailure",
  nc: "reportName",
  cc: "locale",
  Gb: "createdOnServer",
  jc: "numUnsavedCommands",
  Hb: "cspViolationContext",
  mc: "relatedToBrowserExtension",
  yc: "workerError",
  Jb: "docosPostLimitExceeded",
  Kb: "docosPostLimitType",
  Lb: "docosReactionLimitExceeded",
  Mb: "docosReactionLimitType",
  lc: "origin",
  qc: "saveTakingTooLongOnClient",
  tc: "truncatedCommentNotificationsCount",
  uc: "truncatedCommentNotificationsFromPayload",
  hc: "nonfatalReason",
  xc: "usesModuleSetsServing",
  Yb: "isNestedDrawingsEnabled",
  Ob: "embeddedDrawingState",
};
function JavaDisposable() {
  this.j = false;
}
var emptyDisposableChildren;
inheritCompiledClass(JavaDisposable, JavaObject);
prototypeAlias = JavaDisposable.prototype;
prototypeAlias.dispose = function () {
  if (this.j) var intermediate = null;
  else {
    this.j = true;
    intermediate = this.v == null ? emptyDisposableChildren : this.v;
    this.v = null;
  }
  if (intermediate != null) {
    this.sa();
    if (intermediate.length != 0)
      for (var index = 0; index < intermediate.length; index++) intermediate[index].dispose();
    intermediate = getJavaClassMetadata(getConstructor(this));
    substringAfterLast(
      substringAfterLast(
        javaString(intermediate.j.prototype.D[0]) +
          javaString(repeatJavaString("[]", intermediate.l)),
        ".",
      ),
      "$",
    );
  }
};
prototypeAlias.na = createPropertyGetter("j");
prototypeAlias.sa = createNoopFunction();
prototypeAlias.toString = function () {
  return JavaObject.prototype.toString.call(this) || "";
};
function initializeDisposableChildren() {
  initializeDisposableChildren = createNoopFunction();
  emptyDisposableChildren = checkedJavaCast([], isNativeArray, NativeArrayType);
}
prototypeAlias.D = ["com.google.apps.xplat.disposable.Disposable", 0];
function toJavaThrowable(value) {
  if (value == null)
    return (
      (value = new JavaThrowable()),
      captureJavaStack(value),
      associateNativeError(value, Error(value)),
      value
    );
  if (isJavaThrowable(value)) return checkedJavaCast(value, isJavaThrowable, JavaThrowable);
  if (isNativeErrorValue(value))
    return (
      (value = checkedJavaCast(value, isNativeErrorValue, NativeErrorValueClass)),
      wrapJavaThrowable(value)
    );
  value = new JavaIllegalArgumentException();
  value.l = "Unsupported type cannot be used to create a Throwable.";
  captureJavaStack(value);
  associateNativeError(value, Error(value));
  throw value.j;
} /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var trustedTypesFactory = globalThis.trustedTypes,
  trustedTypesPolicy;
/**
 * 保留 goog#html 策略及创建失败后的行为；不能为了可读性改成绕过 Trusted Types。
 */
function createTrustedTypesPolicy() {
  var intermediate = null;
  if (!trustedTypesFactory) return intermediate;
  try {
    var identityFunction = createIdentityFunction();
    intermediate = trustedTypesFactory.createPolicy("goog#html", {
      createHTML: identityFunction,
      createScript: identityFunction,
      createScriptURL: identityFunction,
    });
  } catch (caughtError) {}
  return intermediate;
}
function TrustedScriptUrl(value) {
  this.j = value;
}
TrustedScriptUrl.prototype.toString = function () {
  return this.j + "";
};
/**
 * 只接受原 TrustedScriptUrl 包装类型，保持原校验和 iframe.src 写入顺序。
 */
function setTrustedIframeSource(iframe, trustedUrl) {
  if (trustedUrl instanceof TrustedScriptUrl) trustedUrl = trustedUrl.j;
  else throw Error("");
  iframe.src = trustedUrl.toString();
}
/**
 * 错误与日志基础设施：错误归一化、cause 链、堆栈与日志等级。
 */
function installGlobalErrorListener(listener) {
  var onerror = runtimeGlobal.onerror;
  runtimeGlobal.onerror = function (value, other, options, context, extra) {
    onerror && onerror(value, other, options, context, extra);
    listener({
      message: value,
      fileName: other,
      line: options,
      lineNumber: options,
      Ac: context,
      error: extra,
    });
    return true;
  };
}
function normalizeErrorDetails(error) {
  var locationOrStack = lookupGlobalPath("window.location.href");
  error == null && (error = 'Unknown Error of type "null/undefined"');
  if (typeof error === "string")
    return {
      message: error,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: locationOrStack,
      stack: "Not available",
    };
  var inaccessibleFieldOrMessage = false;
  try {
    var lineNumber = error.lineNumber || error.line || "Not available";
  } catch (caughtError) {
    {
      lineNumber = "Not available";
      inaccessibleFieldOrMessage = true;
    }
  }
  try {
    var fileName =
      error.fileName ||
      error.filename ||
      error.sourceURL ||
      runtimeGlobal.$googDebugFname ||
      locationOrStack;
  } catch (caughtError) {
    {
      fileName = "Not available";
      inaccessibleFieldOrMessage = true;
    }
  }
  locationOrStack = formatErrorStack(error);
  return !inaccessibleFieldOrMessage &&
    error.lineNumber &&
    error.fileName &&
    error.stack &&
    error.message &&
    error.name
    ? {
        message: error.message,
        name: error.name,
        lineNumber: error.lineNumber,
        fileName: error.fileName,
        stack: locationOrStack,
      }
    : ((inaccessibleFieldOrMessage = error.message),
      inaccessibleFieldOrMessage == null &&
        ((inaccessibleFieldOrMessage =
          error.constructor && error.constructor instanceof Function
            ? 'Unknown Error of type "' +
              (error.constructor.name
                ? error.constructor.name
                : getFunctionName(error.constructor)) +
              '"'
            : "Unknown Error of unknown type"),
        typeof error.toString === "function" &&
          Object.prototype.toString !== error.toString &&
          (inaccessibleFieldOrMessage += ": " + error.toString())),
      {
        message: inaccessibleFieldOrMessage,
        name: error.name || "UnknownError",
        lineNumber: lineNumber,
        fileName: fileName,
        stack: locationOrStack || "Not available",
      });
}
function formatErrorStack(error, seen) {
  seen || (seen = {});
  seen[getErrorFingerprint(error)] = true;
  var stackText = error.stack || "",
    causeOrInnerCount = error.cause;
  causeOrInnerCount &&
    !seen[getErrorFingerprint(causeOrInnerCount)] &&
    ((stackText += "\nCaused by: "),
    (causeOrInnerCount.stack &&
      causeOrInnerCount.stack.indexOf(causeOrInnerCount.toString()) == 0) ||
      (stackText +=
        typeof causeOrInnerCount === "string"
          ? causeOrInnerCount
          : causeOrInnerCount.message + "\n"),
    (stackText += formatErrorStack(causeOrInnerCount, seen)));
  error = error.errors;
  if (Array.isArray(error)) {
    causeOrInnerCount = 1;
    var index;
    for (index = 0; index < error.length && !(causeOrInnerCount > 4); index++)
      seen[getErrorFingerprint(error[index])] ||
        ((stackText += "\nInner error " + causeOrInnerCount++ + ": "),
        (error[index].stack && error[index].stack.indexOf(error[index].toString()) == 0) ||
          (stackText +=
            typeof error[index] === "string" ? error[index] : error[index].message + "\n"),
        (stackText += formatErrorStack(error[index], seen)));
    index < error.length && (stackText += "\n... " + (error.length - index) + " more inner errors");
  }
  return stackText;
}
function getErrorFingerprint(error) {
  var intermediate = "";
  typeof error.toString === "function" && (intermediate = "" + error);
  return intermediate + error.stack;
}
function normalizeError(error, context) {
  error instanceof Error ||
    ((error = Error(error)),
    Error.captureStackTrace && Error.captureStackTrace(error, normalizeError));
  error.stack || (error.stack = captureStackTrace(normalizeError));
  if (context) {
    for (var contextIndex = 0; error["message" + contextIndex]; ) ++contextIndex;
    error["message" + contextIndex] = String(context);
  }
  return error;
}
function normalizeErrorWithContext(error, context) {
  error = normalizeError(error);
  if (context)
    for (var intermediate in context)
      attachErrorContext(error, intermediate, context[intermediate]);
  return error;
}
function captureStackTrace(excludeFunction) {
  var intermediate = Error();
  if (Error.captureStackTrace) {
    Error.captureStackTrace(intermediate, excludeFunction || captureStackTrace);
    intermediate = String(intermediate.stack);
  } else {
    try {
      throw intermediate;
    } catch (caughtError) {
      intermediate = caughtError;
    }
    intermediate = (intermediate = intermediate.stack) ? String(intermediate) : null;
  }
  intermediate ||
    (intermediate = formatCallerChain(excludeFunction || arguments.callee.caller, []));
  return intermediate;
}
function formatCallerChain(callback, seen) {
  var values = [];
  if (Array.prototype.indexOf.call(seen, callback, void 0) >= 0)
    values.push("[...circular reference...]");
  else if (callback && seen.length < 50) {
    values.push(getFunctionName(callback) + "(");
    for (
      var arguments2 = callback.arguments, index = 0;
      arguments2 && index < arguments2.length;
      index++
    ) {
      index > 0 && values.push(", ");
      var intermediate = arguments2[index];
      switch (typeof intermediate) {
        case "object":
          intermediate = intermediate ? "object" : "null";
          break;
        case "string":
          break;
        case "number":
          intermediate = String(intermediate);
          break;
        case "boolean":
          intermediate = intermediate ? "true" : "false";
          break;
        case "function":
          intermediate = (intermediate = getFunctionName(intermediate)) ? intermediate : "[fn]";
          break;
        default:
          intermediate = typeof intermediate;
      }
      intermediate.length > 40 && (intermediate = intermediate.slice(0, 40) + "...");
      values.push(intermediate);
    }
    seen.push(callback);
    values.push(")\n");
    try {
      values.push(formatCallerChain(callback.caller, seen));
    } catch (caughtError) {
      values.push("[exception trying to get caller]\n");
    }
  } else callback ? values.push("[...long stack...]") : values.push("[end]");
  return values.join("");
}
function getFunctionName(callback) {
  if (functionNameCache[callback]) return functionNameCache[callback];
  callback = String(callback);
  if (!functionNameCache[callback]) {
    var intermediate = /function\s+([^\(]+)/m.exec(callback);
    functionNameCache[callback] = intermediate ? intermediate[1] : "[Anonymous]";
  }
  return functionNameCache[callback];
}
var functionNameCache = {};
function LogLevel(name, value) {
  this.name = name;
  this.value = value;
}
LogLevel.prototype.toString = createPropertyGetter("name");
var SEVERE_LOG_LEVEL = new LogLevel("SEVERE", 1e3),
  WARNING_LOG_LEVEL = new LogLevel("WARNING", 900),
  CONFIG_LOG_LEVEL = new LogLevel("CONFIG", 700);
function LogBuffer() {
  this.clear();
}
var logBufferInstance;
function forEachBufferedLog(callback) {
  var logBuffer = getLogBuffer(),
    intermediate = logBuffer.j;
  if (intermediate[0]) {
    var intermediate2 = logBuffer.l;
    logBuffer = logBuffer.o ? intermediate2 : -1;
    do {
      logBuffer = (logBuffer + 1) % 0;
      callback(intermediate[logBuffer]);
    } while (logBuffer !== intermediate2);
  }
}
LogBuffer.prototype.clear = function () {
  this.j = [];
  this.l = -1;
  this.o = false;
};
function getLogBuffer() {
  logBufferInstance || (logBufferInstance = new LogBuffer());
  return logBufferInstance;
}
/**
 * URL 编解码工具：保留重复参数、编码和 fragment 行为。
 */
function buildUrl(scheme, userInfo, host, port, path, query, fragment) {
  var url = "";
  scheme && (url += scheme + ":");
  host &&
    ((url += "//"),
    userInfo && (url += userInfo + "@"),
    (url += host),
    port && (url += ":" + port));
  path && (url += path);
  query && (url += "?" + query);
  fragment && (url += "#" + fragment);
  return url;
}
var urlPartsPattern = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
);
function forEachQueryParameter(query, callback) {
  if (query) {
    query = query.split("&");
    for (var index = 0; index < query.length; index++) {
      var equalsIndex = query[index].indexOf("="),
        encodedValue = null;
      if (equalsIndex >= 0) {
        var encodedKey = query[index].substring(0, equalsIndex);
        encodedValue = query[index].substring(equalsIndex + 1);
      } else encodedKey = query[index];
      callback(
        encodedKey,
        encodedValue ? decodeURIComponent(encodedValue.replace(/\+/g, " ")) : "",
      );
    }
  }
}
function appendEncodedQuery(url, query) {
  if (!query) return url;
  var fragmentIndex = url.indexOf("#");
  fragmentIndex < 0 && (fragmentIndex = url.length);
  var queryIndex = url.indexOf("?");
  if (queryIndex < 0 || queryIndex > fragmentIndex) {
    queryIndex = fragmentIndex;
    var existingQuery = "";
  } else existingQuery = url.substring(queryIndex + 1, fragmentIndex);
  url = [url.slice(0, queryIndex), existingQuery, url.slice(fragmentIndex)];
  fragmentIndex = url[1];
  url[1] = query ? (fragmentIndex ? fragmentIndex + "&" + query : query) : fragmentIndex;
  return url[0] + (url[1] ? "?" + url[1] : "") + url[2];
}
function appendQueryValue(key, value, output) {
  if (Array.isArray(value))
    for (var index = 0; index < value.length; index++)
      appendQueryValue(key, String(value[index]), output);
  else
    value != null &&
      output.push(key + (value === "" ? "" : "=" + encodeURIComponent(String(value))));
}
function encodeQueryPairs(pairs, startIndex) {
  var values = [];
  for (startIndex = startIndex || 0; startIndex < pairs.length; startIndex += 2)
    appendQueryValue(pairs[startIndex], pairs[startIndex + 1], values);
  return values.join("&");
}
function encodeQueryObject(parameters) {
  var values = [],
    intermediate;
  for (intermediate in parameters) appendQueryValue(intermediate, parameters[intermediate], values);
  return values.join("&");
}
function appendQueryParameters(url, parameters) {
  var intermediate =
    arguments.length == 2 ? encodeQueryPairs(arguments[1], 0) : encodeQueryPairs(arguments, 1);
  return appendEncodedQuery(url, intermediate);
}
var sanitizeReportUrl;
sanitizeReportUrl = function (value) {
  if (!value) return value;
  value = (typeof value === "object" ? value.href : value).match(urlPartsPattern);
  var intermediate = value[1];
  return intermediate !== "http" && intermediate !== "https"
    ? intermediate || ""
    : buildUrl(value[1], "", value[3], value[4], value[5], value[6], "");
};
function disposeIfPossible(disposable) {
  disposable && typeof disposable.dispose == "function" && disposable.dispose();
}
function disposeAll(disposables) {
  for (var index = 0, length = arguments.length; index < length; ++index) {
    var intermediate = arguments[index];
    isArrayLike(intermediate)
      ? disposeAll.apply(null, intermediate)
      : disposeIfPossible(intermediate);
  }
}
/**
 * 生命周期与微任务：析构钩子、对象池、回调队列、AsyncContext 传播。
 * 保留字段 ABI：I=已销毁，G=析构回调队列，N=析构钩子，na=已销毁查询。
 */
function Disposable() {
  this.I = this.I;
  this.G = this.G;
}
Disposable.prototype.I = false;
Disposable.prototype.na = createPropertyGetter("I");
Disposable.prototype.dispose = function () {
  this.I || ((this.I = true), this.N());
};
Disposable.prototype[Symbol.dispose] = function () {
  this.dispose();
};
/**
 * 已销毁的 owner 立即释放 child，否则按原顺序登记析构回调。N 是保留的内部析构 ABI。
 */
function ownDisposable(owner, child) {
  child = partialApply(disposeIfPossible, child);
  owner.I ? child() : (owner.G || (owner.G = []), owner.G.push(child));
}
Disposable.prototype.N = function () {
  if (this.G) for (; this.G.length; ) this.G.shift()();
};
var wrapAsyncContext =
  typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function"
    ? function (value) {
        return value && AsyncContext.Snapshot.wrap(value);
      }
    : createIdentityFunction();
/**
 * 保留字段 ABI：o=创建函数，v=重置函数，j=空闲链表，l=空闲数量。
 */
function ObjectPool(create, reset) {
  this.o = create;
  this.v = reset;
  this.l = 0;
  this.j = null;
}
ObjectPool.prototype.get = function () {
  if (this.l > 0) {
    this.l--;
    var iterator = this.j;
    this.j = iterator.next;
    iterator.next = null;
  } else iterator = this.o();
  return iterator;
};
function releaseToPool(pool, item) {
  pool.v(item);
  pool.l < 100 && (pool.l++, (item.next = pool.j), (pool.j = item));
}
var entryPointCallbacks = [],
  entryPointMonitors = [],
  entryPointsMonitored = false;
function registerEntryPoint(callback) {
  entryPointCallbacks[entryPointCallbacks.length] = callback;
  if (entryPointsMonitored)
    for (var index = 0; index < entryPointMonitors.length; index++)
      callback(bindFunction(entryPointMonitors[index].j, entryPointMonitors[index]));
}
registerEntryPoint(createNoopFunction());
function CallbackQueue() {
  this.l = this.j = null;
}
CallbackQueue.prototype.add = function (value, other) {
  var value2 = callbackNodePool.get();
  value2.set(value, other);
  this.l ? (this.l.next = value2) : (this.j = value2);
  this.l = value2;
};
CallbackQueue.prototype.remove = function () {
  var iterator = null;
  this.j &&
    ((iterator = this.j),
    (this.j = this.j.next),
    this.j || (this.l = null),
    (iterator.next = null));
  return iterator;
};
var callbackNodePool = new ObjectPool(
  function () {
    return new CallbackQueueNode();
  },
  function (value) {
    return value.reset();
  },
);
function CallbackQueueNode() {
  this.next = this.scope = this.j = null;
}
CallbackQueueNode.prototype.set = function (value, other) {
  this.j = value;
  this.scope = other;
  this.next = null;
};
CallbackQueueNode.prototype.reset = function () {
  this.next = this.scope = this.j = null;
};
var scheduleMicrotaskFlush,
  microtaskFlushScheduled = false,
  microtaskQueue = new CallbackQueue();
function enqueueMicrotask(callback, receiver) {
  scheduleMicrotaskFlush || initializeMicrotaskScheduler();
  microtaskFlushScheduled || (scheduleMicrotaskFlush(), (microtaskFlushScheduled = true));
  microtaskQueue.add(callback, receiver);
}
function initializeMicrotaskScheduler() {
  var intermediate = Promise.resolve(void 0);
  scheduleMicrotaskFlush = function () {
    intermediate.then(flushMicrotasks);
  };
}
function flushMicrotasks() {
  for (var intermediate; (intermediate = microtaskQueue.remove()); ) {
    try {
      intermediate.j.call(intermediate.scope);
    } catch (caughtError) {
      throwAsynchronously(caughtError);
    }
    releaseToPool(callbackNodePool, intermediate);
  }
  microtaskFlushScheduled = false;
}
function internalPromiseExecutor() {}
function isClosureThenable(value) {
  if (!value) return false;
  try {
    return !!value.$goog_Thenable;
  } catch (caughtError) {
    return false;
  }
}
/**
 * Closure Promise：thenable 同化、取消传播、回调对象池和未处理拒绝。不是原生 Promise 的简单别名。
 * 保留字段 ABI：j=状态(0 pending/1 同化中/2 fulfilled/3 rejected)，I=结果，o=父链，l/v=回调队首/队尾，G=回调已排程，A=未处理拒绝。
 */
function LegacyPromise(executor) {
  this.j = 0;
  this.I = void 0;
  this.v = this.l = this.o = null;
  this.A = this.G = false;
  if (executor != internalPromiseExecutor)
    try {
      var promise = this;
      executor.call(
        void 0,
        function (settledValue) {
          settlePromise(promise, 2, settledValue);
        },
        function (settledValue) {
          settlePromise(promise, 3, settledValue);
        },
      );
    } catch (caughtError) {
      settlePromise(this, 3, caughtError);
    }
}
function PromiseCallbackNode() {
  this.next = this.o = this.l = this.v = this.j = null;
  this.A = false;
}
PromiseCallbackNode.prototype.reset = function () {
  this.o = this.l = this.v = this.j = null;
  this.A = false;
};
var promiseCallbackPool = new ObjectPool(
  function () {
    return new PromiseCallbackNode();
  },
  function (value) {
    value.reset();
  },
);
function allocatePromiseCallback(onFulfilled, onRejected, receiver) {
  var callbackNode = promiseCallbackPool.get();
  callbackNode.v = onFulfilled;
  callbackNode.l = onRejected;
  callbackNode.o = receiver;
  return callbackNode;
}

/**
 * 这个 offscreen 特化版本只产生已兑现 undefined 的 Promise；传入参数也不作为返回值。
 */
function resolvedLegacyPromise() {
  var legacyPromise = new LegacyPromise(internalPromiseExecutor);
  settlePromise(legacyPromise, 2);
  return legacyPromise;
}
function resolveThenable(value, onFulfilled, onRejected) {
  assimilateThenable(value, onFulfilled, onRejected, null) ||
    enqueueMicrotask(partialApply(onFulfilled, value));
}
/**
 * 编译产物实际是竞速：任一输入兑现即兑现，任一拒绝即拒绝；不是 Promise.all。空输入兑现 undefined。
 */
function raceLegacyPromises(values) {
  return new LegacyPromise(function (resolve, reject) {
    values.length || resolve(void 0);
    for (var input, index = 0; index < values.length; index++) {
      input = values[index];
      resolveThenable(input, resolve, reject);
    }
  });
}
/**
 * 等待全部输入结束，输出原有的成功标记/value 或失败标记/reason 数组。
 */
function settleAllLegacyPromises(values) {
  return new LegacyPromise(function (resolve) {
    var remaining = values.length,
      results = [];
    if (remaining)
      for (
        var callback = function (value, other, options) {
            remaining--;
            results[value] = other ? { kb: true, value: options } : { kb: false, reason: options };
            remaining == 0 && resolve(results);
          },
          intermediate,
          index = 0;
        index < values.length;
        index++
      ) {
        intermediate = values[index];
        resolveThenable(
          intermediate,
          partialApply(callback, index, true),
          partialApply(callback, index, false),
        );
      }
    else resolve(results);
  });
}
/**
 * 返回自定义 Promise 和它的 resolve/reject，保留原微任务及取消语义。
 */
function createDeferred() {
  var resolve,
    reject,
    promise = new LegacyPromise(function (resolvePromise, rejectPromise) {
      resolve = resolvePromise;
      reject = rejectPromise;
    });
  return new PromiseResolver(promise, resolve, reject);
}
LegacyPromise.prototype.then = function (onFulfilled, onRejected, receiver) {
  return chainPromise(
    this,
    wrapAsyncContext(typeof onFulfilled === "function" ? onFulfilled : null),
    wrapAsyncContext(typeof onRejected === "function" ? onRejected : null),
    receiver,
  );
};
LegacyPromise.prototype.$goog_Thenable = true;
prototypeAlias = LegacyPromise.prototype;
/** catch 的隐藏页编译别名；不能只改属性名而遗漏业务调用。 */
prototypeAlias.ta = function (onRejected, receiver) {
  return chainPromise(this, null, wrapAsyncContext(onRejected), receiver);
};
prototypeAlias.Ra = LegacyPromise.prototype.ta;
prototypeAlias.cancel = function (reason) {
  if (this.j == 0) {
    var promiseCancellationError = new PromiseCancellationError(reason);
    enqueueMicrotask(function () {
      cancelPromise(this, promiseCancellationError);
    }, this);
  }
};

/**
 * 取消向父 Promise 传播受有效订阅数量约束，不能直接把父链全部拒绝。
 */
function cancelPromise(promise, error) {
  if (promise.j == 0)
    if (promise.o) {
      var parentPromise = promise.o;
      if (parentPromise.l) {
        for (
          var subscriberCountOrPreviousNode = 0,
            cancelledSubscription = null,
            previousNode = null,
            subscription = parentPromise.l;
          subscription &&
          (subscription.A ||
            (subscriberCountOrPreviousNode++,
            subscription.j == promise && (cancelledSubscription = subscription),
            !(cancelledSubscription && subscriberCountOrPreviousNode > 1)));
          subscription = subscription.next
        )
          cancelledSubscription || (previousNode = subscription);
        cancelledSubscription &&
          (parentPromise.j == 0 && subscriberCountOrPreviousNode == 1
            ? cancelPromise(parentPromise, error)
            : (previousNode
                ? ((subscriberCountOrPreviousNode = previousNode),
                  subscriberCountOrPreviousNode.next == parentPromise.v &&
                    (parentPromise.v = subscriberCountOrPreviousNode),
                  (subscriberCountOrPreviousNode.next = subscriberCountOrPreviousNode.next.next))
                : shiftPromiseCallback(parentPromise),
              executePromiseCallback(parentPromise, cancelledSubscription, 3, error)));
      }
      promise.o = null;
    } else settlePromise(promise, 3, error);
}
function appendPromiseCallback(promise, callback) {
  promise.l || (promise.j != 2 && promise.j != 3) || schedulePromiseCallbacks(promise);
  promise.v ? (promise.v.next = callback) : (promise.l = callback);
  promise.v = callback;
}
function chainPromise(promise, onFulfilled, onRejected, receiver) {
  var callbackNode = allocatePromiseCallback(null, null, null);
  callbackNode.j = new LegacyPromise(function (resolveChild, rejectChild) {
    callbackNode.v = onFulfilled
      ? function (settledValue) {
          try {
            var callbackResult = onFulfilled.call(receiver, settledValue);
            resolveChild(callbackResult);
          } catch (caughtError) {
            rejectChild(caughtError);
          }
        }
      : resolveChild;
    callbackNode.l = onRejected
      ? function (settledValue) {
          try {
            var callbackResult = onRejected.call(receiver, settledValue);
            callbackResult === void 0 && settledValue instanceof PromiseCancellationError
              ? rejectChild(settledValue)
              : resolveChild(callbackResult);
          } catch (caughtError) {
            rejectChild(caughtError);
          }
        }
      : rejectChild;
  });
  callbackNode.j.o = promise;
  appendPromiseCallback(promise, callbackNode);
  return callbackNode.j;
}
prototypeAlias.zb = function (value) {
  this.j = 0;
  settlePromise(this, 2, value);
};
prototypeAlias.Ab = function (value) {
  this.j = 0;
  settlePromise(this, 3, value);
};

/**
 * 只允许 pending 状态推进；拒绝自解析，再同化 thenable，最后排队执行回调。
 */
function settlePromise(promise, state, value) {
  promise.j == 0 &&
    (promise === value &&
      ((state = 3), (value = new TypeError("Promise cannot resolve to itself"))),
    (promise.j = 1),
    assimilateThenable(value, promise.zb, promise.Ab, promise) ||
      ((promise.I = value),
      (promise.j = state),
      (promise.o = null),
      schedulePromiseCallbacks(promise),
      state != 3 ||
        value instanceof PromiseCancellationError ||
        scheduleUnhandledRejection(promise, value)));
}
function assimilateThenable(value, onFulfilled, onRejected, receiver) {
  if (value instanceof LegacyPromise)
    return (
      appendPromiseCallback(
        value,
        allocatePromiseCallback(
          onFulfilled || internalPromiseExecutor,
          onRejected || null,
          receiver,
        ),
      ),
      true
    );
  if (isClosureThenable(value)) return (value.then(onFulfilled, onRejected, receiver), true);
  if (isObjectLike(value))
    try {
      var then = value.then;
      if (typeof then === "function")
        return (callThenSafely(value, then, onFulfilled, onRejected, receiver), true);
    } catch (caughtError) {
      return (onRejected.call(receiver, caughtError), true);
    }
  return false;
}

/**
 * 恶意/异常 thenable 可能多次调用或抛错；共享完成标记保证只采纳第一次结果。
 */
function callThenSafely(thenable, thenMethod, onFulfilled, onRejected, receiver) {
  function rejectOnce(settledValue) {
    completed || ((completed = true), onRejected.call(receiver, settledValue));
  }
  function resolveOnce(settledValue) {
    completed || ((completed = true), onFulfilled.call(receiver, settledValue));
  }
  var completed = false;
  try {
    thenMethod.call(thenable, resolveOnce, rejectOnce);
  } catch (caughtError) {
    rejectOnce(caughtError);
  }
}
function schedulePromiseCallbacks(promise) {
  promise.G || ((promise.G = true), enqueueMicrotask(promise.jb, promise));
}
function shiftPromiseCallback(promise) {
  var callbackNode = null;
  promise.l &&
    ((callbackNode = promise.l), (promise.l = callbackNode.next), (callbackNode.next = null));
  promise.l || (promise.v = null);
  return callbackNode;
}
prototypeAlias.jb = function () {
  for (var intermediate; (intermediate = shiftPromiseCallback(this)); )
    executePromiseCallback(this, intermediate, this.j, this.I);
  this.G = false;
};
function executePromiseCallback(promise, callback, state, value) {
  if (state == 3 && callback.l && !callback.A)
    for (; promise && promise.A; promise = promise.o) promise.A = false;
  if (callback.j) {
    callback.j.o = null;
    invokePromiseCallback(callback, state, value);
  } else
    try {
      callback.A ? callback.v.call(callback.o) : invokePromiseCallback(callback, state, value);
    } catch (caughtError) {
      unhandledRejectionHandler.call(null, caughtError);
    }
  releaseToPool(promiseCallbackPool, callback);
}
function invokePromiseCallback(callback, state, value) {
  state == 2
    ? callback.v.call(callback.o, value)
    : callback.l && callback.l.call(callback.o, value);
}
function scheduleUnhandledRejection(promise, error) {
  promise.A = true;
  enqueueMicrotask(function () {
    promise.A && unhandledRejectionHandler.call(null, error);
  });
}
var unhandledRejectionHandler = throwAsynchronously;
function PromiseCancellationError(message) {
  ClosureError.call(this, message);
  this.j = false;
}
inheritClosureClass(PromiseCancellationError, ClosureError);
PromiseCancellationError.prototype.name = "cancel";
function PromiseResolver(promise, resolve, reject) {
  this.promise = promise;
  this.resolve = resolve;
  this.reject = reject;
} /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/

/**
 * 旧 Deferred：回调/错误链和取消；与上面的 Promise 是两套独立状态机。
 */
function LegacyDeferred() {
  this.A = [];
  this.v = this.o = false;
  this.l = void 0;
  this.F = this.L = this.I = false;
  this.G = 0;
  this.j = null;
  this.B = 0;
}
LegacyDeferred.prototype.cancel = function (value) {
  if (this.o) this.l instanceof LegacyDeferred && this.l.cancel();
  else {
    if (this.j) {
      var intermediate = this.j;
      delete this.j;
      value
        ? intermediate.cancel(value)
        : (intermediate.B--, intermediate.B <= 0 && intermediate.cancel());
    }
    this.F = true;
    this.o ||
      ((value = new DeferredCanceledError(this)),
      assertDeferredNotFired(this),
      settleDeferred(this, false, value));
  }
};
LegacyDeferred.prototype.J = function (value, other) {
  this.I = false;
  settleDeferred(this, value, other);
};
function settleDeferred(deferred, succeeded, value) {
  deferred.o = true;
  deferred.l = value;
  deferred.v = !succeeded;
  runDeferredCallbacks(deferred);
}
function assertDeferredNotFired(deferred) {
  if (deferred.o) {
    if (!deferred.F) throw new DeferredAlreadyCalledError(deferred);
    deferred.F = false;
  }
}
function rethrowError(error) {
  throw error;
}
function addDeferredCallback(deferred, callback, receiver) {
  return addDeferredCallbacks(deferred, callback, null, receiver);
}
function addDeferredBoth(deferred, callback, receiver) {
  addDeferredCallbacks(
    deferred,
    callback,
    function (value) {
      var intermediate = callback.call(this, value);
      if (intermediate === void 0) throw value;
      return intermediate;
    },
    receiver,
  );
}
function addDeferredCallbacks(deferred, onSuccess, onError, receiver) {
  var intermediate = deferred.o;
  intermediate ||
    (onSuccess === onError
      ? (onSuccess = onError = wrapAsyncContext(onSuccess))
      : ((onSuccess = wrapAsyncContext(onSuccess)), (onError = wrapAsyncContext(onError))));
  deferred.A.push([onSuccess, onError, receiver]);
  intermediate && runDeferredCallbacks(deferred);
  return deferred;
}
LegacyDeferred.prototype.then = function (value, other, options) {
  var callback,
    intermediate,
    legacyPromise = new LegacyPromise(function (value2, other2) {
      intermediate = value2;
      callback = other2;
    });
  addDeferredCallbacks(
    this,
    intermediate,
    function (value2) {
      value2 instanceof DeferredCanceledError ? legacyPromise.cancel() : callback(value2);
      return deferredConsumedToken;
    },
    this,
  );
  return legacyPromise.then(value, other, options);
};
LegacyDeferred.prototype.$goog_Thenable = true;
function hasDeferredErrback(deferred) {
  return arraySome(deferred.A, function (value) {
    return typeof value[1] === "function";
  });
}
var deferredConsumedToken = {};

/**
 * 保留 Deferred 的特殊规则：回调返回 undefined 通常沿用旧值，不能等同于原生 then。
 */
function runDeferredCallbacks(deferred) {
  if (deferred.G && deferred.o && hasDeferredErrback(deferred)) {
    var intermediate = deferred.G,
      intermediate2 = deferredUnhandledErrors[intermediate];
    intermediate2 &&
      (runtimeGlobal.clearTimeout(intermediate2.j), delete deferredUnhandledErrors[intermediate]);
    deferred.G = 0;
  }
  deferred.j && (deferred.j.B--, delete deferred.j);
  intermediate = deferred.l;
  for (var intermediate3 = (intermediate2 = false); deferred.A.length && !deferred.I; ) {
    var intermediate4 = deferred.A.shift(),
      intermediate5 = intermediate4[0],
      intermediate6 = intermediate4[1];
    intermediate4 = intermediate4[2];
    if ((intermediate5 = deferred.v ? intermediate6 : intermediate5))
      try {
        var intermediate7 = intermediate5.call(intermediate4 || null, intermediate);
        intermediate7 === deferredConsumedToken && (intermediate7 = void 0);
        intermediate7 !== void 0 &&
          ((deferred.v =
            deferred.v && (intermediate7 == intermediate || intermediate7 instanceof Error)),
          (deferred.l = intermediate = intermediate7));
        if (
          isClosureThenable(intermediate) ||
          (typeof runtimeGlobal.Promise === "function" &&
            intermediate instanceof runtimeGlobal.Promise)
        ) {
          intermediate3 = true;
          deferred.I = true;
        }
      } catch (caughtError) {
        {
          intermediate = caughtError;
          deferred.v = true;
          hasDeferredErrback(deferred) || (intermediate2 = true);
        }
      }
  }
  deferred.l = intermediate;
  intermediate3 &&
    ((intermediate7 = bindFunction(deferred.J, deferred, true)),
    (intermediate3 = bindFunction(deferred.J, deferred, false)),
    intermediate instanceof LegacyDeferred
      ? (addDeferredCallbacks(intermediate, intermediate7, intermediate3), (intermediate.L = true))
      : intermediate.then(intermediate7, intermediate3));
  intermediate2 &&
    ((intermediate = new DeferredUnhandledError(intermediate)),
    (deferredUnhandledErrors[intermediate.j] = intermediate),
    (deferred.G = intermediate.j));
}
function resolvedDeferred(value) {
  var legacyDeferred = new LegacyDeferred();
  assertDeferredNotFired(legacyDeferred);
  settleDeferred(legacyDeferred, true, value);
  return legacyDeferred;
}
function DeferredAlreadyCalledError() {
  ClosureError.call(this);
}
inheritClosureClass(DeferredAlreadyCalledError, ClosureError);
DeferredAlreadyCalledError.prototype.message = "Deferred has already fired";
DeferredAlreadyCalledError.prototype.name = "AlreadyCalledError";
function DeferredCanceledError() {
  ClosureError.call(this);
}
inheritClosureClass(DeferredCanceledError, ClosureError);
DeferredCanceledError.prototype.message = "Deferred was canceled";
DeferredCanceledError.prototype.name = "CanceledError";
function DeferredUnhandledError(error) {
  this.j = runtimeGlobal.setTimeout(bindFunction(this.o, this), 0);
  this.l = error;
}
DeferredUnhandledError.prototype.o = function () {
  delete deferredUnhandledErrors[this.j];
  rethrowError(this.l);
};
var deferredUnhandledErrors = {};
function Provider() {}
function isJavaProvider(value) {
  return value != null && !!value.Ea;
}
Provider.prototype.Ea = true;
Provider.prototype.D = ["javax.inject.Provider", 1];
function FlagService() {}
function isFlagService(value) {
  return value != null && !!value.Da;
}
FlagService.prototype.Da = true;
FlagService.prototype.D = ["com.google.apps.docs.xplat.flag.FlagService", 1];
var flagServiceProvider;
/**
 * 客户端 flags 与统计：Java 兼容对象、限流、时间窗口与环形队列。
 */
function getFlagService() {
  if (flagServiceProvider == null) {
    var flagServiceImpl = new FlagServiceImpl(null);
    flagServiceProvider = function () {
      return flagServiceImpl;
    };
  }
  var callback;
  return checkedJavaCast(
    ((callback = flagServiceProvider), callback()),
    isFlagService,
    FlagService,
  );
}
function FlagServiceHelper() {}
inheritCompiledClass(FlagServiceHelper, JavaObject);
FlagServiceHelper.prototype.get = function () {
  if (this.l == null) {
    var intermediate = checkedJavaCast(
      runtimeGlobal._docs_flag_initialData,
      isNativeObject,
      NativeObjectClass,
    );
    this.l =
      intermediate != null ? intermediate : checkedJavaCast({}, isNativeObject, NativeObjectClass);
  }
  return this.l;
};
FlagServiceHelper.prototype.j = function () {
  return this.get();
};
FlagServiceHelper.prototype.Ea = true;
FlagServiceHelper.prototype.D = ["com.google.apps.docs.xplat.flag.FlagServiceHelper", 0];
function parseBooleanFlag(value) {
  return typeof value == "string" ? value == "true" || value == "1" : !!value;
}
function FlagServiceImpl(helper) {
  this.j = new FlagServiceHelper();
  this.l = null;
  if (helper != null)
    for (var intermediate in helper) {
      var intermediate2 = intermediate,
        intermediate3 = helper[intermediate];
      if (this.l != null)
        throw createIllegalStateException("Cannot use setClientFlag when comparison is enabled.").j;
      var intermediate4 = checkedJavaCast(this.j.j(), isNativeObject, NativeObjectClass);
      isBoxedInteger(intermediate3)
        ? ((intermediate3 = checkedJavaCast(intermediate3, isBoxedInteger, JavaInteger).X),
          (intermediate4[intermediate2] = intermediate3))
        : (intermediate4[intermediate2] = intermediate3 != null ? intermediate3 : null);
    }
}
inheritCompiledClass(FlagServiceImpl, JavaObject);
FlagServiceImpl.prototype.clear = function () {
  this.j = new FlagServiceHelper();
  this.l = null;
};
FlagServiceImpl.prototype.get = function (value) {
  checkFlagProviderAgreement(this, value);
  return checkedJavaCast(this.j.j(), isNativeObject, NativeObjectClass)[value];
};
function hasClientFlag(service, key) {
  service = checkedJavaCast(service.j.j(), isNativeObject, NativeObjectClass);
  return key in service;
}
function readNumericClientFlag(service, key) {
  checkFlagProviderAgreement(service, key);
  if (!hasClientFlag(service, key) || service.get(key) == null) return NaN;
  try {
    var intermediate = javaString(service.get(key));
    javaDoublePattern == null &&
      (javaDoublePattern = RegExp(
        "^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$",
      ));
    if (!javaDoublePattern.test(intermediate)) {
      var javaNumberFormatException = new JavaNumberFormatException();
      javaNumberFormatException.l = 'For input string: "' + javaString(intermediate) + '"';
      captureJavaStack(javaNumberFormatException);
      associateNativeError(javaNumberFormatException, Error(javaNumberFormatException));
      throw javaNumberFormatException.j;
    }
    return parseFloat(intermediate);
  } catch (caughtError) {
    var intermediate2 = wrapJavaThrowable(caughtError);
    if (intermediate2 instanceof JavaNumberFormatException) return NaN;
    throw intermediate2.j;
  }
}
function readStringClientFlag(service, key) {
  checkFlagProviderAgreement(service, key);
  if (!hasClientFlag(service, key)) return "";
  service = service.get(key);
  if (service == null) return "";
  var intermediate;
  if ((key = "number" === typeof service && ((intermediate = service), true))) {
    key = javaLongFromNumber(requireNonNull(intermediate));
    var intermediate2 = javaLongFromNumber(requireNonNull(intermediate));
    key = key.equals(intermediate2);
  }
  return key ? "" + javaLongFromNumber(requireNonNull(intermediate)) : javaString(service);
}
function checkFlagProviderAgreement(service, key) {
  if (service.l != null) {
    try {
      var intermediate = checkedJavaCast(service.j.j(), isNativeObject, NativeObjectClass)[key];
    } catch (caughtError) {
      var intermediate2 = wrapJavaThrowable(caughtError);
      if (intermediate2 instanceof JavaRuntimeException) intermediate = "injection-failed";
      else throw intermediate2.j;
    }
    try {
      var intermediate3 = service.l;
      if (intermediate3 == null) throw createNullPointerException().j;
      var intermediate4 = checkedJavaCast(
        checkedJavaCast(intermediate3, isJavaProvider, Provider).j(),
        isNativeObject,
        NativeObjectClass,
      )[key];
    } catch (caughtError) {
      var intermediate5 = wrapJavaThrowable(caughtError);
      if (intermediate5 instanceof JavaRuntimeException) intermediate4 = "injection-failed";
      else throw intermediate5.j;
    }
    service = intermediate;
    !(key = javaObjectEquals(service, intermediate4)) &&
      (key = service != null) &&
      (key = service.equals ? service.equals(intermediate4) : Object.is(service, intermediate4));
    if (!key) throw createIllegalStateException("Logging is not supported.").j;
  }
}
FlagServiceImpl.prototype.Da = true;
FlagServiceImpl.prototype.D = ["com.google.apps.docs.xplat.flag.FlagServiceImpl", 0];
function LimitException(helper) {
  XplatException.call(this, helper, null);
  associateNativeError(this, Error(this));
}
inheritCompiledClass(LimitException, XplatException);
LimitException.prototype.D = ["com.google.apps.docs.xplat.net.LimitException", 0];
function QpsLimiter(helper, helper2, helper3, helper4) {
  initializeDisposableChildren();
  this.j = false;
  this.G = helper;
  this.o = helper2;
  this.l = new BasicStat(Math.imul(helper3, 1e3), helper4);
}
inheritCompiledClass(QpsLimiter, JavaDisposable);
function consumeQpsQuota(limiter) {
  if (!(((limiter.l.get(null) + 1) | 0) / requireNonNull(limiter.l.o / 1e3) <= limiter.o))
    throw new LimitException(
      "Query would cause " + javaString(limiter.G) + " to exceed " + limiter.o + " qps.",
    ).j;
  limiter = limiter.l;
  var intermediate = int64ToNumber(int64FromNumber(Date.now()));
  resetStatisticsOnClockRollback(limiter, intermediate);
  var intermediate2 = checkedJavaCast(
    lastCircularBufferItem(limiter.j),
    isStatisticsSlot,
    BasicStatSlot,
  );
  if (intermediate2 == null || requireNonNull(intermediate) >= requireNonNull(intermediate2.l)) {
    intermediate = endOfStatisticsSlot(limiter, requireNonNull(intermediate));
    intermediate2 = new BasicStatSlot();
    intermediate2.l = intermediate;
    intermediate2.j = 0;
    intermediate2.v = 2147483647;
    intermediate2.o = -2147483648;
    limiter.j.add(intermediate2);
  }
  intermediate2.j = (intermediate2.j + 1) | 0;
  intermediate2.v = Math.min(1, intermediate2.v);
  intermediate2.o = Math.max(1, intermediate2.o);
}
QpsLimiter.prototype.D = ["com.google.apps.docs.xplat.net.QpsLimiter", 0];
function BasicStatSlot() {
  this.o = this.v = this.j = 0;
}
inheritCompiledClass(BasicStatSlot, JavaObject);
function isStatisticsSlot(value) {
  return value instanceof BasicStatSlot;
}
BasicStatSlot.prototype.D = ["com.google.apps.docs.xplat.util.BasicStat$Slot", 0];
function BasicStat(helper) {
  this.l = 0;
  this.o = helper;
  this.l = javaNumberToInt(helper / 50);
  this.j = new CircularBuffer(boxInteger(50));
}
inheritCompiledClass(BasicStat, JavaObject);
BasicStat.prototype.get = function (value) {
  return aggregateStatistics(this, value, function (value2, other) {
    value2 = checkedJavaCast(value2, isBoxedInteger, JavaInteger);
    other = checkedJavaCast(other, isStatisticsSlot, BasicStatSlot);
    return boxInteger((value2.X + other.j) | 0);
  });
};
function aggregateStatistics(statistics, timestamp, reducer) {
  timestamp =
    timestamp != null ? requireNonNull(timestamp) : int64ToNumber(int64FromNumber(Date.now()));
  resetStatisticsOnClockRollback(statistics, timestamp);
  var intermediate = 0;
  timestamp = endOfStatisticsSlot(statistics, requireNonNull(timestamp));
  timestamp = requireNonNull(timestamp) - statistics.o;
  for (
    var intermediate2 = (statistics.j.j.length - 1) | 0;
    intermediate2 >= 0;
    intermediate2 = (intermediate2 - 1) | 0
  ) {
    var intermediate3 = checkedJavaCast(
      statistics.j.get(intermediate2),
      isStatisticsSlot,
      BasicStatSlot,
    );
    if (requireNonNull(intermediate3.l) <= timestamp) break;
    intermediate = checkedJavaCast(
      reducer(boxInteger(intermediate), intermediate3),
      isBoxedInteger,
      JavaInteger,
    ).X;
  }
  return intermediate;
}
function endOfStatisticsSlot(statistics, timestamp) {
  return statistics.l * Math.floor(timestamp / statistics.l + 1);
}
function resetStatisticsOnClockRollback(statistics, timestamp) {
  var intermediate = checkedJavaCast(
    lastCircularBufferItem(statistics.j),
    isStatisticsSlot,
    BasicStatSlot,
  );
  intermediate != null &&
    ((intermediate = requireNonNull(intermediate.l) - statistics.l),
    requireNonNull(timestamp) < requireNonNull(intermediate) && statistics.j.clear());
}
BasicStat.prototype.D = ["com.google.apps.docs.xplat.util.BasicStat", 0];
function CircularBuffer(capacity) {
  this.l = this.o = 0;
  capacity != null
    ? "number" === typeof capacity
      ? ((capacity = requireNonNull(capacity)),
        (capacity = Math.max(Math.min(capacity, 2147483647), -2147483648) | 0))
      : (capacity = capacity instanceof Int64 ? requireNonNull(capacity).K : capacity.X)
    : (capacity = 100);
  this.o = capacity;
  this.j = checkedJavaCast([], isNativeArray, NativeArrayType);
}
inheritCompiledClass(CircularBuffer, JavaObject);
prototypeAlias = CircularBuffer.prototype;
prototypeAlias.add = function (value) {
  var intermediate = this.j[this.l];
  this.j[this.l] = value;
  this.l = javaNumberToInt(((this.l + 1) | 0) % this.o);
  return intermediate;
};
prototypeAlias.get = function (value) {
  value = circularBufferIndex(this, value);
  return this.j[value];
};
prototypeAlias.set = function (value, other) {
  value = circularBufferIndex(this, value);
  this.j[value] = other;
};
prototypeAlias.clear = function () {
  this.l = this.j.length = 0;
};
prototypeAlias.la = function () {
  for (
    var length = this.j.length,
      intermediate = (this.j.length - this.j.length) | 0,
      intermediate2 = checkedJavaCast([], isNativeArray, NativeArrayType);
    intermediate < length;
    intermediate = (intermediate + 1) | 0
  ) {
    var intermediate22 = intermediate2,
      value = this.get(intermediate);
    intermediate22.push(value);
  }
  return intermediate2;
};
function lastCircularBufferItem(buffer) {
  return buffer.j.length == 0 ? null : buffer.get((buffer.j.length - 1) | 0);
}
function circularBufferIndex(buffer, index) {
  if (index >= buffer.j.length)
    throw (
      (buffer = new JavaIndexOutOfBoundsException()),
      captureJavaStack(buffer),
      associateNativeError(buffer, Error(buffer)),
      buffer.j
    );
  return buffer.j.length < buffer.o ? index : javaNumberToInt(((buffer.l + index) | 0) % buffer.o);
}
prototypeAlias.D = ["com.google.apps.docs.xplat.util.CircularBuffer", 0];
function StatusState() {
  this.j = 0;
}
var networkStatusByName, offlineNetworkStatus;
inheritCompiledClass(StatusState, JavaObject);
function defineNetworkStatus(name, severity) {
  var statusState = new StatusState();
  statusState.l = name;
  statusState.j = severity;
  networkStatusByName[name] = statusState !== void 0 ? statusState : null;
  return statusState;
}
StatusState.prototype.toString = createPropertyGetter("l");
function initializeNetworkStatuses() {
  initializeNetworkStatuses = createNoopFunction();
  networkStatusByName = checkedJavaCast({}, isNativeObjectMap, NativeObjectMapClass);
  defineNetworkStatus("IDLE", 1);
  defineNetworkStatus("BUSY", 1);
  defineNetworkStatus("RECOVERING", 2);
  offlineNetworkStatus = defineNetworkStatus("OFFLINE", 3);
  defineNetworkStatus("SERVER_DOWN", 3);
  defineNetworkStatus("FORBIDDEN", 4);
  defineNetworkStatus("AUTH_REQUIRED", 4);
  defineNetworkStatus("DELTA_STALE_CLIENT", 4);
  defineNetworkStatus("SESSION_LIMIT_EXCEEDED", 5);
  defineNetworkStatus("LOCKED", 5);
  defineNetworkStatus("INCOMPATIBLE_SERVER", 5);
  defineNetworkStatus("CLIENT_ERROR", 5);
  defineNetworkStatus("CLIENT_FATAL_ERROR", 5);
  defineNetworkStatus("CLIENT_FATAL_ERROR_PENDING_CHANGES", 5);
  defineNetworkStatus("BATCH_CLIENT_ERROR", 3);
  defineNetworkStatus("SAVE_ERROR", 5);
  defineNetworkStatus("DOCUMENT_TOO_LARGE", 5);
  defineNetworkStatus("CSE_BLOCKED_REQUEST", 5);
  defineNetworkStatus("BATCH_SAVE_ERROR", 3);
  defineNetworkStatus("DOCS_EVERYWHERE_IMPORT_ERROR", 5);
  defineNetworkStatus("POST_LIMIT_EXCEEDED_ERROR", 5);
  defineNetworkStatus("DOCS_QUOTA_EXCEEDED_ERROR", 5);
}
StatusState.prototype.D = ["com.google.apps.docs.xplat.net.Status$State", 0];
function EventObserverTrackerObservableObserverPair() {}
inheritCompiledClass(EventObserverTrackerObservableObserverPair, JavaObject);
function isObserverPair(value) {
  return value instanceof EventObserverTrackerObservableObserverPair;
}
EventObserverTrackerObservableObserverPair.prototype.D = [
  "com.google.apps.docsshared.xplat.observable.EventObserverTracker$ObservableObserverPair",
  0,
];
function EventObserverTracker() {
  initializeDisposableChildren();
  this.j = false;
  this.l = checkedJavaCast([], isNativeArray, NativeArrayType);
}
inheritCompiledClass(EventObserverTracker, JavaDisposable);
function trackObserver(tracker, observable, observer) {
  var intermediate;
  a: {
    for (intermediate = 0; intermediate < tracker.l.length; intermediate = (intermediate + 1) | 0) {
      var intermediate2 = checkedJavaCast(
        tracker.l[intermediate],
        isObserverPair,
        EventObserverTrackerObservableObserverPair,
      );
      if (
        javaObjectEquals(intermediate2.l, observer) &&
        javaObjectEquals(intermediate2.j, observable)
      ) {
        intermediate = true;
        break a;
      }
    }
    intermediate = false;
  }
  intermediate ||
    ((tracker = tracker.l),
    (observer = observable.j(observer)),
    (intermediate = new EventObserverTrackerObservableObserverPair()),
    (intermediate.j = observable),
    (intermediate.l = observer),
    tracker.push(intermediate));
}
EventObserverTracker.prototype.sa = function () {
  this.removeAll();
  JavaDisposable.prototype.sa.call(this);
};
EventObserverTracker.prototype.removeAll = function () {
  for (
    var intermediate = checkedJavaCast(
      this.l.pop(),
      isObserverPair,
      EventObserverTrackerObservableObserverPair,
    );
    intermediate != null;

  ) {
    intermediate.j.l(intermediate.l);
    intermediate = checkedJavaCast(
      this.l.pop(),
      isObserverPair,
      EventObserverTrackerObservableObserverPair,
    );
  }
};
EventObserverTracker.prototype.D = [
  "com.google.apps.docsshared.xplat.observable.EventObserverTracker",
  0,
];
function forEachObjectValue(object, callback, receiver) {
  for (var intermediate in object)
    callback.call(receiver, object[intermediate], intermediate, object);
}
function shallowCloneObject(object) {
  var record = {},
    intermediate;
  for (intermediate in object) record[intermediate] = object[intermediate];
  return record;
}
var objectPrototypeKeys =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " ",
  );
function extendObject(target, source) {
  for (var intermediate, intermediate2, index = 1; index < arguments.length; index++) {
    intermediate2 = arguments[index];
    for (intermediate in intermediate2) target[intermediate] = intermediate2[intermediate];
    for (var index2 = 0; index2 < objectPrototypeKeys.length; index2++) {
      intermediate = objectPrototypeKeys[index2];
      Object.prototype.hasOwnProperty.call(intermediate2, intermediate) &&
        (target[intermediate] = intermediate2[intermediate]);
    }
  }
}
/**
 * 可变 URL 与 QueryData：延迟解析、多值参数、大小写策略和相对路径解析。
 * 保留字段 ABI：v=scheme，I=userInfo，j=host，B=port，l=path，o=QueryData，G=fragment，A=参数忽略大小写。
 */
function MutableUrl(value) {
  this.j = this.I = this.v = "";
  this.B = null;
  this.G = this.l = "";
  this.A = false;
  var urlParts;
  value instanceof MutableUrl
    ? ((this.A = value.A),
      setUrlScheme(this, value.v),
      (this.I = value.I),
      (this.j = value.j),
      setUrlPort(this, value.B),
      setUrlPath(this, value.l),
      setUrlQueryData(this, value.o.clone()),
      (this.G = value.G))
    : value && (urlParts = String(value).match(urlPartsPattern))
      ? ((this.A = false),
        setUrlScheme(this, urlParts[1] || "", true),
        (this.I = decodeUrlComponent(urlParts[2] || "")),
        (this.j = decodeUrlComponent(urlParts[3] || "", true)),
        setUrlPort(this, urlParts[4]),
        setUrlPath(this, urlParts[5] || "", true),
        setUrlQueryData(this, urlParts[6] || "", true),
        (this.G = decodeUrlComponent(urlParts[7] || "")))
      : ((this.A = false), (this.o = new QueryData(null, this.A)));
}
MutableUrl.prototype.toString = function () {
  var parts = [],
    schemeOrUserInfo = this.v;
  schemeOrUserInfo &&
    parts.push(encodeUrlComponent(schemeOrUserInfo, schemeAndUserInfoEscapePattern, true), ":");
  var component = this.j;
  if (component || schemeOrUserInfo == "file") {
    parts.push("//");
    (schemeOrUserInfo = this.I) &&
      parts.push(encodeUrlComponent(schemeOrUserInfo, schemeAndUserInfoEscapePattern, true), "@");
    parts.push(encodeURIComponent(String(component)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
    component = this.B;
    component != null && parts.push(":", String(component));
  }
  if ((component = this.l)) {
    this.j && component.charAt(0) != "/" && parts.push("/");
    parts.push(
      encodeUrlComponent(
        component,
        component.charAt(0) == "/" ? absolutePathEscapePattern : relativePathEscapePattern,
        true,
      ),
    );
  }
  (component = this.o.toString()) && parts.push("?", component);
  (component = this.G) && parts.push("#", encodeUrlComponent(component, fragmentEscapePattern));
  return parts.join("");
};

/** 按 scheme → authority → path → query → fragment 逐级决定覆盖范围，并消解 . / ..；不是字符串拼接。 */
MutableUrl.prototype.resolve = function (relativeUrl) {
  var resolvedUrl = this.clone(),
    overridesComponent = !!relativeUrl.v;
  overridesComponent
    ? setUrlScheme(resolvedUrl, relativeUrl.v)
    : (overridesComponent = !!relativeUrl.I);
  overridesComponent ? (resolvedUrl.I = relativeUrl.I) : (overridesComponent = !!relativeUrl.j);
  overridesComponent
    ? (resolvedUrl.j = relativeUrl.j)
    : (overridesComponent = relativeUrl.B != null);
  var path = relativeUrl.l;
  if (overridesComponent) setUrlPort(resolvedUrl, relativeUrl.B);
  else if ((overridesComponent = !!relativeUrl.l)) {
    if (path.charAt(0) != "/")
      if (this.j && !this.l) path = "/" + path;
      else {
        var pathPartsOrSlashIndex = resolvedUrl.l.lastIndexOf("/");
        pathPartsOrSlashIndex != -1 &&
          (path = resolvedUrl.l.slice(0, pathPartsOrSlashIndex + 1) + path);
      }
    pathPartsOrSlashIndex = path;
    if (pathPartsOrSlashIndex == ".." || pathPartsOrSlashIndex == ".") path = "";
    else if (
      pathPartsOrSlashIndex.indexOf("./") != -1 ||
      pathPartsOrSlashIndex.indexOf("/.") != -1
    ) {
      path = pathPartsOrSlashIndex.lastIndexOf("/", 0) == 0;
      pathPartsOrSlashIndex = pathPartsOrSlashIndex.split("/");
      for (var segments = [], segmentIndex = 0; segmentIndex < pathPartsOrSlashIndex.length; ) {
        var segment = pathPartsOrSlashIndex[segmentIndex++];
        segment == "."
          ? path && segmentIndex == pathPartsOrSlashIndex.length && segments.push("")
          : segment == ".."
            ? ((segments.length > 1 || (segments.length == 1 && segments[0] != "")) &&
                segments.pop(),
              path && segmentIndex == pathPartsOrSlashIndex.length && segments.push(""))
            : (segments.push(segment), (path = true));
      }
      path = segments.join("/");
    } else path = pathPartsOrSlashIndex;
  }
  overridesComponent
    ? setUrlPath(resolvedUrl, path)
    : (overridesComponent = relativeUrl.o.toString() !== "");
  overridesComponent
    ? setUrlQueryData(resolvedUrl, relativeUrl.o.clone())
    : (overridesComponent = !!relativeUrl.G);
  overridesComponent && (resolvedUrl.G = relativeUrl.G);
  return resolvedUrl;
};
MutableUrl.prototype.clone = function () {
  return new MutableUrl(this);
};
function setUrlScheme(url, scheme, decode) {
  url.v = decode ? decodeUrlComponent(scheme, true) : scheme;
  url.v && (url.v = url.v.replace(/:$/, ""));
}
function setUrlPort(url, port) {
  if (port) {
    port = Number(port);
    if (isNaN(port) || port < 0) throw Error("Bad port number " + port);
    url.B = port;
  } else url.B = null;
}
function setUrlPath(url, path, decode) {
  url.l = decode ? decodeUrlComponent(path, true) : path;
  return url;
}
function setUrlQueryData(url, query, decode) {
  query instanceof QueryData
    ? ((url.o = query), setQueryIgnoreCase(url.o, url.A))
    : (decode || (query = encodeUrlComponent(query, queryEscapePattern)),
      (url.o = new QueryData(query, url.A)));
}
function decodeUrlComponent(text, preserveReserved) {
  return text
    ? preserveReserved
      ? decodeURI(text.replace(/%25/g, "%2525"))
      : decodeURIComponent(text)
    : "";
}
function encodeUrlComponent(text, pattern, preserveEscapes) {
  return typeof text === "string"
    ? ((text = encodeURI(text).replace(pattern, percentEncodeCharacter)),
      preserveEscapes && (text = text.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      text)
    : null;
}
function percentEncodeCharacter(character) {
  character = character.charCodeAt(0);
  return "%" + ((character >> 4) & 15).toString(16) + (character & 15).toString(16);
}
var schemeAndUserInfoEscapePattern = /[#\/\?@]/g,
  relativePathEscapePattern = /[#\?:]/g,
  absolutePathEscapePattern = /[#\?]/g,
  queryEscapePattern = /[#\?@]/g,
  fragmentEscapePattern = /#/g;

/**
 * 保留字段 ABI：j=参数 Map，l=值总数，o=编码字符串缓存，v=忽略键大小写。
 */
function QueryData(encodedQuery, ignoreCase) {
  this.l = this.j = null;
  this.o = encodedQuery || null;
  this.v = !!ignoreCase;
}
function initializeQueryData(query) {
  query.j ||
    ((query.j = new Map()),
    (query.l = 0),
    query.o &&
      forEachQueryParameter(query.o, function (encodedKey, queryValue) {
        query.add(decodeURIComponent(encodedKey.replace(/\+/g, " ")), queryValue);
      }));
}
prototypeAlias = QueryData.prototype;
prototypeAlias.add = function (key, value) {
  initializeQueryData(this);
  this.o = null;
  key = normalizeQueryKey(this, key);
  var existingValues = this.j.get(key);
  existingValues || this.j.set(key, (existingValues = []));
  existingValues.push(value);
  this.l = this.l + 1;
  return this;
};
prototypeAlias.remove = function (key) {
  initializeQueryData(this);
  key = normalizeQueryKey(this, key);
  return this.j.has(key)
    ? ((this.o = null), (this.l = this.l - this.j.get(key).length), this.j.delete(key))
    : false;
};
prototypeAlias.clear = function () {
  this.j = this.o = null;
  this.l = 0;
};
function hasQueryParameter(query, key) {
  initializeQueryData(query);
  key = normalizeQueryKey(query, key);
  return query.j.has(key);
}
prototypeAlias.forEach = function (callback, receiver) {
  initializeQueryData(this);
  this.j.forEach(function (value, other) {
    value.forEach(function (value2) {
      callback.call(receiver, value2, other, this);
    }, this);
  }, this);
};
/** la(key) 返回该 key 的所有值；没有字符串 key 时返回所有参数值，不是只读第一个。 */
prototypeAlias.la = function (key) {
  initializeQueryData(this);
  var values = [];
  if (typeof key === "string")
    hasQueryParameter(this, key) &&
      (values = values.concat(this.j.get(normalizeQueryKey(this, key))));
  else {
    key = Array.from(this.j.values());
    for (var index = 0; index < key.length; index++) values = values.concat(key[index]);
  }
  return values;
};
prototypeAlias.set = function (key, value) {
  initializeQueryData(this);
  this.o = null;
  key = normalizeQueryKey(this, key);
  hasQueryParameter(this, key) && (this.l = this.l - this.j.get(key).length);
  this.j.set(key, [value]);
  this.l = this.l + 1;
  return this;
};
prototypeAlias.get = function (key, fallback) {
  if (!key) return fallback;
  key = this.la(key);
  return key.length > 0 ? String(key[0]) : fallback;
};
prototypeAlias.toString = function () {
  if (this.o) return this.o;
  if (!this.j) return "";
  for (
    var parts = [], keys = Array.from(this.j.keys()), keyIndex = 0;
    keyIndex < keys.length;
    keyIndex++
  ) {
    var keyOrValues = keys[keyIndex],
      encodedKey = encodeURIComponent(String(keyOrValues));
    keyOrValues = this.la(keyOrValues);
    for (var valueIndex = 0; valueIndex < keyOrValues.length; valueIndex++) {
      var encodedPair = encodedKey;
      keyOrValues[valueIndex] !== "" &&
        (encodedPair += "=" + encodeURIComponent(String(keyOrValues[valueIndex])));
      parts.push(encodedPair);
    }
  }
  return (this.o = parts.join("&"));
};
/** 原实现只复制 Map，不深拷贝每个值数组；不要在等价还原中悄悄改变别名共享行为。 */
prototypeAlias.clone = function () {
  var copy = new QueryData();
  copy.o = this.o;
  this.j && ((copy.j = new Map(this.j)), (copy.l = this.l));
  return copy;
};
function normalizeQueryKey(query, key) {
  key = String(key);
  query.v && (key = key.toLowerCase());
  return key;
}
function setQueryIgnoreCase(query, ignoreCase) {
  ignoreCase &&
    !query.v &&
    (initializeQueryData(query),
    (query.o = null),
    query.j.forEach(function (value, other) {
      var intermediate = other.toLowerCase();
      if (
        other != intermediate &&
        (this.remove(other), this.remove(intermediate), value.length > 0)
      ) {
        this.o = null;
        other = this.j;
        var set = other.set;
        intermediate = normalizeQueryKey(this, intermediate);
        var length = value.length;
        if (length > 0) {
          for (var intermediate2 = Array(length), index = 0; index < length; index++)
            intermediate2[index] = value[index];
          length = intermediate2;
        } else length = [];
        set.call(other, intermediate, length);
        this.l = this.l + value.length;
      }
    }, query));
  query.v = ignoreCase;
}
function reloadAfterError() {
  var window2 = runtimeGlobal.window;
  window2.onbeforeunload = createNoopFunction();
  window2.location.reload();
}
function ReloadPrompt() {
  this.j = function () {
    reloadAfterError();
  };
}
ReloadPrompt.prototype.notify = function () {
  window.confirm(
    "This error has been reported to Google and we'll look into it as soon as possible. Please reload this page to continue.",
  ) && this.j();
};
/**
 * 事件系统：原生事件包装、监听器索引、once/capture 与资源释放。
 */
function BaseEvent(type, target) {
  this.type = type;
  this.currentTarget = this.target = target;
  this.defaultPrevented = this.l = false;
}
BaseEvent.prototype.stopPropagation = function () {
  this.l = true;
};
BaseEvent.prototype.preventDefault = function () {
  this.defaultPrevented = true;
};
var supportsPassiveEvents = (function () {
  if (!runtimeGlobal.addEventListener || !Object.defineProperty) return false;
  var intermediate = false,
    intermediate2 = Object.defineProperty({}, "passive", {
      get: function () {
        intermediate = true;
      },
    });
  try {
    var noopFunction = createNoopFunction();
    runtimeGlobal.addEventListener("test", noopFunction, intermediate2);
    runtimeGlobal.removeEventListener("test", noopFunction, intermediate2);
  } catch (caughtError) {}
  return intermediate;
})();
function BrowserEvent(event, currentTarget) {
  BaseEvent.call(this, event ? event.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.button =
    this.screenY =
    this.screenX =
    this.clientY =
    this.clientX =
    this.offsetY =
    this.offsetX =
      0;
  this.key = "";
  this.charCode = this.keyCode = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.timeStamp = 0;
  this.j = null;
  event && this.init(event, currentTarget);
}
inheritClosureClass(BrowserEvent, BaseEvent);
BrowserEvent.prototype.init = function (value, other) {
  var intermediate = (this.type = value.type),
    intermediate2 =
      value.changedTouches && value.changedTouches.length ? value.changedTouches[0] : null;
  this.target = value.target || value.srcElement;
  this.currentTarget = other;
  other = value.relatedTarget;
  other ||
    (intermediate == "mouseover"
      ? (other = value.fromElement)
      : intermediate == "mouseout" && (other = value.toElement));
  this.relatedTarget = other;
  intermediate2
    ? ((this.clientX =
        intermediate2.clientX !== void 0 ? intermediate2.clientX : intermediate2.pageX),
      (this.clientY =
        intermediate2.clientY !== void 0 ? intermediate2.clientY : intermediate2.pageY),
      (this.screenX = intermediate2.screenX || 0),
      (this.screenY = intermediate2.screenY || 0))
    : ((this.offsetX = value.offsetX),
      (this.offsetY = value.offsetY),
      (this.clientX = value.clientX !== void 0 ? value.clientX : value.pageX),
      (this.clientY = value.clientY !== void 0 ? value.clientY : value.pageY),
      (this.screenX = value.screenX || 0),
      (this.screenY = value.screenY || 0));
  this.button = value.button;
  this.keyCode = value.keyCode || 0;
  this.key = value.key || "";
  this.charCode = value.charCode || (intermediate == "keypress" ? value.keyCode : 0);
  this.ctrlKey = value.ctrlKey;
  this.altKey = value.altKey;
  this.shiftKey = value.shiftKey;
  this.metaKey = value.metaKey;
  this.pointerId = value.pointerId || 0;
  this.pointerType = value.pointerType;
  this.state = value.state;
  this.timeStamp = value.timeStamp;
  this.j = value;
  value.defaultPrevented && BrowserEvent.W.preventDefault.call(this);
};
BrowserEvent.prototype.stopPropagation = function () {
  BrowserEvent.W.stopPropagation.call(this);
  this.j.stopPropagation ? this.j.stopPropagation() : (this.j.cancelBubble = true);
};
BrowserEvent.prototype.preventDefault = function () {
  BrowserEvent.W.preventDefault.call(this);
  var intermediate = this.j;
  intermediate.preventDefault ? intermediate.preventDefault() : (intermediate.returnValue = false);
};
var listenableMarkerKey = "closure_listenable_" + ((Math.random() * 1e6) | 0);
var nextListenerKey = 0;
function EventListenerRecord(listener, source, type, capture, receiver) {
  this.listener = listener;
  this.proxy = null;
  this.src = source;
  this.type = type;
  this.capture = !!capture;
  this.handler = receiver;
  this.key = ++nextListenerKey;
  this.removed = this.ia = false;
}
function clearListenerRecord(record) {
  record.removed = true;
  record.listener = null;
  record.proxy = null;
  record.src = null;
  record.handler = null;
}
function ListenerMap(source) {
  this.src = source;
  this.j = {};
  this.l = 0;
}
ListenerMap.prototype.add = function (value, other, options, context, extra) {
  var intermediate = value.toString();
  value = this.j[intermediate];
  value || ((value = this.j[intermediate] = []), this.l++);
  var intermediate2 = findListenerIndex(value, other, context, extra);
  intermediate2 > -1
    ? ((other = value[intermediate2]), options || (other.ia = false))
    : ((other = new EventListenerRecord(other, this.src, intermediate, !!context, extra)),
      (other.ia = options),
      value.push(other));
  return other;
};
ListenerMap.prototype.remove = function (value, other, options, context) {
  value = value.toString();
  if (!(value in this.j)) return false;
  var intermediate = this.j[value];
  other = findListenerIndex(intermediate, other, options, context);
  return other > -1
    ? (clearListenerRecord(intermediate[other]),
      Array.prototype.splice.call(intermediate, other, 1),
      intermediate.length == 0 && (delete this.j[value], this.l--),
      true)
    : false;
};
function removeListenerRecord(map, record) {
  var type = record.type;
  type in map.j &&
    removeArrayValue(map.j[type], record) &&
    (clearListenerRecord(record), map.j[type].length == 0 && (delete map.j[type], map.l--));
}
ListenerMap.prototype.removeAll = function (value) {
  value = value && value.toString();
  var index = 0,
    intermediate;
  for (intermediate in this.j)
    if (!value || intermediate == value) {
      for (
        var intermediate2 = this.j[intermediate], index2 = 0;
        index2 < intermediate2.length;
        index2++
      ) {
        ++index;
        clearListenerRecord(intermediate2[index2]);
      }
      delete this.j[intermediate];
      this.l--;
    }
  return index;
};
function findListenerIndex(listeners, listener, capture, receiver) {
  for (var index = 0; index < listeners.length; ++index) {
    var intermediate = listeners[index];
    if (
      !intermediate.removed &&
      intermediate.listener == listener &&
      intermediate.capture == !!capture &&
      intermediate.handler == receiver
    )
      return index;
  }
  return -1;
}
var listenerMapKey = "closure_lm_" + ((Math.random() * 1e6) | 0),
  onEventNameCache = {},
  nativeListenerCount = 0;
function listen(source, type, listener, options, receiver) {
  if (options && options.once) return listenOnce(source, type, listener, options, receiver);
  if (Array.isArray(type)) {
    for (var index = 0; index < type.length; index++)
      listen(source, type[index], listener, options, receiver);
    return null;
  }
  listener = normalizeEventListener(listener);
  return source && source[listenableMarkerKey]
    ? source.listen(type, listener, isObjectLike(options) ? !!options.capture : !!options, receiver)
    : registerNativeListener(source, type, listener, false, options, receiver);
}
function registerNativeListener(source, type, listener, once, options, receiver) {
  if (!type) throw Error("Invalid event type");
  var intermediate = isObjectLike(options) ? !!options.capture : !!options,
    listenerMap = getListenerMap(source);
  listenerMap || (source[listenerMapKey] = listenerMap = new ListenerMap(source));
  listener = listenerMap.add(type, listener, once, intermediate, receiver);
  if (listener.proxy) return listener;
  once = createNativeEventProxy();
  listener.proxy = once;
  once.src = source;
  once.listener = listener;
  if (source.addEventListener) {
    supportsPassiveEvents || (options = intermediate);
    options === void 0 && (options = false);
    source.addEventListener(type.toString(), once, options);
  } else if (source.attachEvent) source.attachEvent(getOnEventName(type.toString()), once);
  else if (source.addListener && source.removeListener) source.addListener(once);
  else throw Error("addEventListener and attachEvent are unavailable.");
  nativeListenerCount++;
  return listener;
}
function createNativeEventProxy() {
  function helper(helper2) {
    return dispatchNativeEvent2.call(helper.src, helper.listener, helper2);
  }
  var dispatchNativeEvent2 = dispatchNativeEvent;
  return helper;
}
function listenOnce(source, type, listener, options, receiver) {
  if (Array.isArray(type)) {
    for (var index = 0; index < type.length; index++)
      listenOnce(source, type[index], listener, options, receiver);
    return null;
  }
  listener = normalizeEventListener(listener);
  return source && source[listenableMarkerKey]
    ? source.l.add(
        String(type),
        listener,
        true,
        isObjectLike(options) ? !!options.capture : !!options,
        receiver,
      )
    : registerNativeListener(source, type, listener, true, options, receiver);
}
function unlisten(source, type, listener, options, receiver) {
  if (Array.isArray(type))
    for (var index = 0; index < type.length; index++)
      unlisten(source, type[index], listener, options, receiver);
  else
    ((options = isObjectLike(options) ? !!options.capture : !!options),
    (listener = normalizeEventListener(listener)),
    source && source[listenableMarkerKey])
      ? source.l.remove(String(type), listener, options, receiver)
      : source &&
        (source = getListenerMap(source)) &&
        ((type = source.j[type.toString()]),
        (source = -1),
        type && (source = findListenerIndex(type, listener, options, receiver)),
        (listener = source > -1 ? type[source] : null) && unlistenByKey(listener));
}
function unlistenByKey(record) {
  if (typeof record !== "number" && record && !record.removed) {
    var src = record.src;
    if (src && src[listenableMarkerKey]) removeListenerRecord(src.l, record);
    else {
      var type = record.type,
        proxy = record.proxy;
      src.removeEventListener
        ? src.removeEventListener(type, proxy, record.capture)
        : src.detachEvent
          ? src.detachEvent(getOnEventName(type), proxy)
          : src.addListener && src.removeListener && src.removeListener(proxy);
      nativeListenerCount--;
      (type = getListenerMap(src))
        ? (removeListenerRecord(type, record),
          type.l == 0 && ((type.src = null), (src[listenerMapKey] = null)))
        : clearListenerRecord(record);
    }
  }
}
function getOnEventName(type) {
  return type in onEventNameCache ? onEventNameCache[type] : (onEventNameCache[type] = "on" + type);
}
function dispatchNativeEvent(record, event) {
  if (record.removed) record = true;
  else {
    event = new BrowserEvent(event, this);
    var listener = record.listener,
      intermediate = record.handler || record.src;
    record.ia && unlistenByKey(record);
    record = listener.call(intermediate, event);
  }
  return record;
}
function getListenerMap(source) {
  source = source[listenerMapKey];
  return source instanceof ListenerMap ? source : null;
}
var listenerWrapperKey = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
function normalizeEventListener(listener) {
  if (typeof listener === "function") return listener;
  listener[listenerWrapperKey] ||
    (listener[listenerWrapperKey] = function (value) {
      return listener.handleEvent(value);
    });
  return listener[listenerWrapperKey];
}
registerEntryPoint(function (callback) {
  dispatchNativeEvent = callback(dispatchNativeEvent);
});
function ErrorEvent(type, error) {
  BaseEvent.call(this, type);
  this.error = error;
}
inheritCompiledClass(ErrorEvent, BaseEvent);
var documentIdPathPattern = /\/d\/([^\/]+)/,
  resourceIdPathPattern = /\/r\/([^\/]+)/;
function hasDocumentPath(url) {
  url = url.match(urlPartsPattern)[5] || null;
  return documentIdPathPattern.test(url);
}
function redactDocumentPath(url, value) {
  if (hasDocumentPath(url)) {
    hasDocumentPath(url);
    url = url.match(urlPartsPattern);
    var intermediate = url[5];
    intermediate = intermediate.replace(value, "");
    value = buildUrl(url[1], url[2], url[3], url[4], intermediate, url[6], url[7]);
  } else value = url;
  return value;
}
function EventTarget() {
  Disposable.call(this);
  this.l = new ListenerMap(this);
  this.Sa = this;
  this.R = null;
}
inheritClosureClass(EventTarget, Disposable);
EventTarget.prototype[listenableMarkerKey] = true;
prototypeAlias = EventTarget.prototype;
prototypeAlias.addEventListener = function (value, other, options, context) {
  listen(this, value, other, options, context);
};
prototypeAlias.removeEventListener = function (value, other, options, context) {
  unlisten(this, value, other, options, context);
};
prototypeAlias.dispatchEvent = function (value) {
  var intermediate = this.R;
  if (intermediate) {
    var values = [];
    for (var index = 1; intermediate; intermediate = intermediate.R) {
      values.push(intermediate);
      ++index;
    }
  }
  intermediate = this.Sa;
  index = value.type || value;
  if (typeof value === "string") value = new BaseEvent(value, intermediate);
  else if (value instanceof BaseEvent) value.target = value.target || intermediate;
  else {
    var value2 = value;
    value = new BaseEvent(index, intermediate);
    extendObject(value, value2);
  }
  value2 = true;
  var index2;
  if (values)
    for (index2 = values.length - 1; !value.l && index2 >= 0; index2--) {
      var intermediate2 = (value.currentTarget = values[index2]);
      value2 = dispatchListeners(intermediate2, index, true, value) && value2;
    }
  value.l ||
    ((intermediate2 = value.currentTarget = intermediate),
    (value2 = dispatchListeners(intermediate2, index, true, value) && value2),
    value.l || (value2 = dispatchListeners(intermediate2, index, false, value) && value2));
  if (values)
    for (index2 = 0; !value.l && index2 < values.length; index2++) {
      intermediate2 = value.currentTarget = values[index2];
      value2 = dispatchListeners(intermediate2, index, false, value) && value2;
    }
  return value2;
};
prototypeAlias.N = function () {
  EventTarget.W.N.call(this);
  this.l && this.l.removeAll(void 0);
  this.R = null;
};
prototypeAlias.listen = function (value, other, options, context) {
  return this.l.add(String(value), other, false, options, context);
};
function dispatchListeners(target, type, capture, event) {
  type = target.l.j[String(type)];
  if (!type) return true;
  type = type.concat();
  for (var intermediate = true, index = 0; index < type.length; ++index) {
    var intermediate2 = type[index];
    if (intermediate2 && !intermediate2.removed && intermediate2.capture == capture) {
      var listener = intermediate2.listener,
        intermediate3 = intermediate2.handler || intermediate2.src;
      intermediate2.ia && removeListenerRecord(target.l, intermediate2);
      intermediate = listener.call(intermediate3, event) !== false && intermediate;
    }
  }
  return intermediate && !event.defaultPrevented;
}
/**
 * 计时与日志发送：延迟、抖动退避、缓冲队列和错误重试。不是文档 outbox。
 */
function schedule(callback, delay) {
  if (typeof callback !== "function")
    if (callback && typeof callback.handleEvent == "function")
      callback = bindFunction(callback.handleEvent, callback);
    else throw Error("Invalid listener argument");
  return Number(delay) > 2147483647 ? -1 : runtimeGlobal.setTimeout(callback, delay || 0);
}
function waitForFrameTimeout() {
  var intermediate = null;
  return new LegacyPromise(function (callback, callback2) {
    intermediate = schedule(function () {
      callback(void 0);
    }, 14e3);
    intermediate == -1 && callback2(Error("Failed to schedule timer."));
  }).ta(function (value) {
    runtimeGlobal.clearTimeout(intermediate);
    throw value;
  });
}
function DelayTimer(callback, delay, receiver) {
  Disposable.call(this);
  this.j = callback;
  this.o = delay || 0;
  this.l = receiver;
  this.v = bindFunction(this.hb, this);
}
inheritClosureClass(DelayTimer, Disposable);
prototypeAlias = DelayTimer.prototype;
prototypeAlias.ha = 0;
prototypeAlias.N = function () {
  DelayTimer.W.N.call(this);
  this.stop();
  delete this.j;
  delete this.l;
};
prototypeAlias.start = function (value) {
  this.stop();
  this.ha = schedule(this.v, value !== void 0 ? value : this.o);
};
prototypeAlias.stop = function () {
  this.isActive() && runtimeGlobal.clearTimeout(this.ha);
  this.ha = 0;
};
prototypeAlias.isActive = function () {
  return this.ha != 0;
};
prototypeAlias.hb = function () {
  this.ha = 0;
  this.j && this.j.call(this.l);
};
function BackoffTimer(callback, initialDelay, maximumDelay, jitter) {
  Disposable.call(this);
  this.o = jitter != null ? jitter : 0.15;
  this.A = callback;
  this.v = initialDelay;
  this.F = maximumDelay;
  this.j = new DelayTimer(this.ub, void 0, this);
  this.B = Number.NEGATIVE_INFINITY;
  this.l = 0;
}
inheritCompiledClass(BackoffTimer, Disposable);
prototypeAlias = BackoffTimer.prototype;
prototypeAlias.isActive = function () {
  return this.j.isActive();
};
prototypeAlias.start = function () {
  restartBackoff(this, false, false);
};
function restartBackoff(timer, reset, runImmediately) {
  reset && (timer.j.stop(), calculateBackoffDelay(timer, timer.v));
  timer.isActive() ||
    ((reset = Math.max(0, timer.B + timer.l - Date.now())),
    reset == 0 &&
      (runImmediately ? (reset = calculateBackoffDelay(timer, timer.v)) : (timer.l = 0)),
    timer.j.start(reset));
}
prototypeAlias.stop = function () {
  this.j.stop();
};
function calculateBackoffDelay(timer, delay) {
  delay > 0 &&
    timer.o != 0 &&
    (delay = Math.floor(delay * (1 - timer.o + Math.random() * timer.o * 2)));
  return (timer.l = delay);
}
prototypeAlias.ub = function () {
  this.B = Date.now();
  calculateBackoffDelay(this, Math.min(Math.max(this.l * 2, this.v), this.F));
  this.A();
};
prototypeAlias.N = function () {
  this.j.dispose();
  delete this.j;
  delete this.A;
  Disposable.prototype.N.call(this);
};
function EventHandler(receiver) {
  Disposable.call(this);
  this.l = receiver;
  this.j = {};
}
inheritClosureClass(EventHandler, Disposable);
var eventHandlerTypeBuffer = [];
EventHandler.prototype.listen = function (value, other, options, context) {
  Array.isArray(other) ||
    (other && (eventHandlerTypeBuffer[0] = other.toString()), (other = eventHandlerTypeBuffer));
  for (var index = 0; index < other.length; index++) {
    var intermediate = listen(
      value,
      other[index],
      options || this.handleEvent,
      context || false,
      this.l || this,
    );
    if (!intermediate) break;
    this.j[intermediate.key] = intermediate;
  }
  return this;
};
EventHandler.prototype.removeAll = function () {
  forEachObjectValue(
    this.j,
    function (value, other) {
      this.j.hasOwnProperty(other) && unlistenByKey(value);
    },
    this,
  );
  this.j = {};
};
EventHandler.prototype.N = function () {
  EventHandler.W.N.call(this);
  this.removeAll();
};
EventHandler.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function RetryingLogTransport(
  request,
  endpoint,
  limiter,
  timeout,
  onSuccess,
  options,
  reportFailures,
) {
  reportFailures = reportFailures === void 0 ? true : reportFailures;
  Disposable.call(this);
  var instance = this;
  this.j = request;
  this.j.O = 1e4;
  this.da = endpoint;
  this.o = options;
  this.l = new BackoffTimer(
    function () {
      return instance.za();
    },
    3e4,
    36e5,
  );
  this.A = 0;
  this.F = null;
  this.S = new QpsLimiter("errorsender", 1, 8, timeout);
  ownDisposable(this, this.S);
  this.R = false;
  this.L = null;
  this.B = new Set();
  this.J = new EventHandler(this);
  this.ea = limiter || 10;
  this.U = onSuccess || null;
  this.J.listen(this.j, "complete", this.pb);
  this.J.listen(this.j, "ready", this.za);
  this.P = null;
  this.M = new EventObserverTracker();
  ownDisposable(this, this.M);
  this.o &&
    trackObserver(this.M, this.o.l(), function () {
      instance.o.getState().j >= 3 &&
        (instance.P = (initializeNetworkStatuses(), offlineNetworkStatus));
      instance.o.getState().j >= 3 ||
        instance.P !== (initializeNetworkStatuses(), offlineNetworkStatus) ||
        scheduleLogRetry(instance);
    });
  this.O = reportFailures;
  this.V = {};
}
inheritCompiledClass(RetryingLogTransport, Disposable);
prototypeAlias = RetryingLogTransport.prototype;
prototypeAlias.send = function (value, other, options, context) {
  parseBooleanFlag(this.da.get("docs-dafjera")) &&
    (value = redactDocumentPath(
      redactDocumentPath(value, resourceIdPathPattern),
      documentIdPathPattern,
    ));
  var intermediate = addDeferredCallback(
    addDeferredCallback(
      resolvedDeferred(this.v.length),
      function (value2) {
        if (!(value2 >= this.ea))
          return (
            this.O &&
              (value = appendQueryParameters(
                value,
                "errorSender_enqueueTimeMs",
                Date.now().toString(),
              )),
            (value2 = {}),
            (value2.u = value),
            (value2.m = other),
            (value2.c = options),
            (value2.h = context),
            this.enqueue(value2)
          );
      },
      this,
    ),
    this.za,
    this,
  );
  addDeferredBoth(
    intermediate,
    function () {
      this.B.delete(intermediate);
    },
    this,
  );
  this.B.add(intermediate);
};
function flushBufferedLogs(transport) {
  return settleAllLegacyPromises(Array.from(transport.B.values())).then(createNoopFunction());
}
prototypeAlias.za = function () {
  var intermediate = this.o && this.o.getState().j >= 3,
    intermediate2 = this.na() || this.j.isActive() || this.l.isActive() || this.R;
  return intermediate || intermediate2 ? resolvedDeferred() : flushLogTransport(this);
};
function flushLogTransport(transport) {
  return (function () {
    return addDeferredCallback(
      resolvedDeferred(transport.v[0] !== void 0 ? transport.v[0] : null),
      function (value) {
        return sendNextLogEntry(transport, value);
      },
    );
  })();
}
function sendNextLogEntry(transport, entry) {
  if (transport.l.isActive() || transport.j.isActive() || transport.R) return resolvedDeferred();
  if (!entry) return (transport.l.stop(), resolvedDeferred());
  if (entry.u.length > 4e3) return dropFirstLogEntry(transport);
  try {
    consumeQpsQuota(transport.S);
    transport.L = new LegacyDeferred();
    var intermediate = entry.u;
    transport.U != null &&
      (intermediate = appendQueryParameters(intermediate, "reportingSessionId", transport.U));
    transport.A > 0 &&
      (intermediate = appendQueryParameters(intermediate, "retryCount", transport.A));
    transport.F != null &&
      (intermediate = appendQueryParameters(intermediate, "previousErrorSendStatus", transport.F));
    transport.O &&
      ((intermediate = appendQueryParameters(
        intermediate,
        "errorSender_sendTimeMs",
        Date.now().toString(),
      )),
      (intermediate = appendQueryParameters(intermediate, "errorSenderType", transport.Ka())),
      entry.errorSender_frontIndex &&
        (intermediate = appendQueryParameters(
          intermediate,
          "errorSender_frontIndex",
          entry.errorSender_frontIndex,
        )),
      entry.errorSender_nextIndex &&
        (intermediate = appendQueryParameters(
          intermediate,
          "errorSender_nextIndex",
          entry.errorSender_nextIndex,
        )),
      entry.errorSender_queueSize &&
        (intermediate = appendQueryParameters(
          intermediate,
          "errorSender_queueSize",
          entry.errorSender_queueSize,
        )));
    transport.V = entry;
    var intermediate2 = entry.m,
      intermediate3 = entry.c,
      intermediate4 = entry.h;
    return addDeferredCallback(
      addDeferredCallback(dropFirstLogEntry(transport), function () {
        transport.j.send(intermediate, intermediate2, intermediate3, intermediate4);
      }),
      function () {
        return transport.L;
      },
    );
  } catch (caughtError) {
    if (toJavaThrowable(caughtError) instanceof LimitException) transport.R = true;
    else
      throw normalizeErrorWithContext(caughtError, {
        "docs-origin-class": "docs.debug.ErrorSender",
      });
  }
  return resolvedDeferred();
}
prototypeAlias.pb = function () {
  var xhrStatus = readXhrStatus(this.j),
    intermediate = this.L,
    intermediate2 = isSuccessfulXhr(this.j) || (xhrStatus >= 400 && xhrStatus <= 500),
    intermediate3 = this.A > 3;
  intermediate2 || intermediate3
    ? ((this.A = 0),
      (this.F = null),
      this.l.stop(),
      addDeferredCallback(resolvedDeferred(), function () {
        assertDeferredNotFired(intermediate);
        settleDeferred(intermediate, true);
      }))
    : (this.A++,
      (this.F = xhrStatus === -1 ? this.j.B : xhrStatus),
      scheduleLogRetry(this),
      this.enqueue(this.V),
      assertDeferredNotFired(intermediate),
      settleDeferred(intermediate, true));
};
function scheduleLogRetry(transport) {
  transport.A != 1 || transport.l.isActive()
    ? transport.l.start()
    : restartBackoff(transport.l, true, true);
}
prototypeAlias.N = function () {
  disposeAll(this.J, this.l, this.j, this.M);
  this.B.clear();
  Disposable.prototype.N.call(this);
};
prototypeAlias.Ka = createConstantFunction("BaseErrorSender");
function BufferedLogTransport(request, endpoint, limiter, onSuccess, options) {
  RetryingLogTransport.call(this, request, endpoint, limiter, void 0, onSuccess, options, void 0);
  this.v = [];
}
inheritCompiledClass(BufferedLogTransport, RetryingLogTransport);
BufferedLogTransport.prototype.enqueue = function (value) {
  this.v.push(value);
  return resolvedDeferred();
};
function dropFirstLogEntry(transport) {
  transport.v.shift();
  return resolvedDeferred();
}
BufferedLogTransport.prototype.Ka = createConstantFunction("MemoryErrorSender");
BufferedLogTransport.prototype.N = function () {
  delete this.v;
  RetryingLogTransport.prototype.N.call(this);
};
function createFavaServiceId() {
  var intermediate = intermediate === void 0 ? false : intermediate;
  if (intermediate === void 0 ? 0 : intermediate)
    throw Error("A module ID must be set on the Fava ServiceId a in order to modify extra edges.");
}
createFavaServiceId.prototype.toString = createConstantFunction("a");
new createFavaServiceId();
function ExperimentSamplingConfig(array) {
  this.j = immutableMessageFromArray(getDefaultExperimentSamplingMessage(), cloneJsonValue(array));
  array = readCoercedNumberField(this.j, 1);
  this.l = Math.floor(Math.random() * 100) < array;
}
ExperimentSamplingConfig.prototype.toString = function () {
  var intermediate =
      "{bool=" +
      !(this.l ? !readBooleanField(this.j, 5) : !readBooleanField(this.j, 2)) +
      ', string="',
    intermediate2 = this.l ? readStringField(this.j, 6) : readStringOrDefault(this.j, 3);
  intermediate = intermediate + (intermediate2 != null ? String(intermediate2) : "") + '", int=';
  intermediate2 = this.l
    ? coerceNumericInt32(getMessageField(this.j, 7, void 0, preserveNullFieldToken))
    : readCoercedNumberField(this.j, 4, -1);
  return intermediate + (intermediate2 != null ? Number(intermediate2) : -1) + "}";
};
function ExperimentMetadata(values) {
  this.j = new Map();
  this.l = [];
  if ((values = values.get("docs-cei"))) {
    var intermediate = values.i;
    intermediate && extendArray(this.l, intermediate);
    values = values.cf || {};
    for (var intermediate2 in values)
      this.j.set(intermediate2, new ExperimentSamplingConfig(values[intermediate2]));
  }
}
ExperimentMetadata.prototype.get = function (value) {
  return this.j.get(value) || null;
};
function isArrayPrototypeIntact() {
  for (var intermediate in Array.prototype) return false;
  return true;
}
var knownInjectedErrorMessages = [
    'window[("_callback_" + expid)] is not a function',
    "Cannot read properties of null (reading 'readyState')",
    "request failed on client side",
  ],
  knownInjectedErrorPatterns = [/(undefined|constructor).*YT|YT.*(undefined|constructor)/];
function BootstrapString(value) {
  this.j = value;
}
function unwrapBootstrapString(wrapper) {
  var intermediate = wrapper.j;
  if (intermediate == null) return null;
  if (typeof intermediate === "string") return intermediate;
  throw new TypeError(
    "Invalid string data <K1cgmc>: " + wrapper.j + " (typeof " + typeof wrapper.j + ")",
  );
}
BootstrapString.prototype.toString = function () {
  var intermediate = unwrapBootstrapString(this);
  if (intermediate === null) throw Error("Data K1cgmc not defined.");
  return intermediate;
};
function CrashClassificationMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(CrashClassificationMessage, ArrayMessage);
CrashClassificationMessage.prototype.qa = function (value) {
  setStringField(this, 7, value);
};
function CrashClientStateMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(CrashClientStateMessage, ArrayMessage);
function readCrashClassification(message) {
  return getNestedMessageOrDefault(
    message,
    CrashClassificationMessage,
    getActiveOneofField(message, crashStateOneofFields, 4),
  );
}
var crashStateOneofFields = [4, 5];
function CrashSeverityMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(CrashSeverityMessage, ArrayMessage);
function CrashMetadataMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(CrashMetadataMessage, ArrayMessage);
function TelemetryBootstrapMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(TelemetryBootstrapMessage, ArrayMessage);
function readCrashClientState(message) {
  return getNestedMessageOrDefault(message, CrashClientStateMessage, 1);
}
function BootstrapConfigProvider() {
  this.j = readTelemetryBootstrapMessage();
}
BootstrapConfigProvider.prototype.fa = function () {
  var map = new Map(),
    intermediate,
    intermediate2 =
      (intermediate = this.j) == null
        ? void 0
        : readCrashClassification(readCrashClientState(intermediate));
  if (intermediate2 == null ? 0 : coerceInt32(getMessageField(intermediate2, 2)) != null) {
    var callback;
    (intermediate =
      (callback = readNumberField(intermediate2, 2)) == null ? void 0 : callback.toString()) &&
      map.set("canaryanalysisservertestgroup", intermediate);
    if (intermediate2 == null) var intermediate3 = void 0;
    else if ((intermediate2 = readNestedMessage(intermediate2, ExperimentConfigMessage, 3)) == null)
      intermediate3 = void 0;
    else {
      callback = Number;
      intermediate3 = intermediate3 === void 0 ? "0" : intermediate3;
      intermediate = getMessageField(intermediate2, 1, void 0, void 0, coerceInt64);
      var intermediate4 = intermediate4 === void 0 ? false : intermediate4;
      var intermediate5 = typeof intermediate;
      intermediate == null
        ? (intermediate4 = intermediate)
        : intermediate5 === "bigint"
          ? (intermediate4 = String(bigIntAsIntN(64, intermediate)))
          : isNumericRepresentation(intermediate)
            ? intermediate5 === "string"
              ? ((intermediate4 = intermediate),
                isNumericRepresentation(intermediate4),
                (intermediate = truncateNumber(Number(intermediate4))),
                isSafeInteger(intermediate)
                  ? (intermediate4 = String(intermediate))
                  : ((intermediate = intermediate4.indexOf(".")),
                    intermediate !== -1 &&
                      (intermediate4 = intermediate4.substring(0, intermediate)),
                    (intermediate4 = normalizeInt64String(intermediate4))))
              : (intermediate4 = intermediate4
                  ? numberToInt64String(intermediate)
                  : numberToInt64Representation(intermediate))
            : (intermediate4 = void 0);
      intermediate3 = callback(intermediate4 != null ? intermediate4 : intermediate3);
      intermediate2 = readCoercedNumberField(intermediate2, 2);
      intermediate3 = new Date(intermediate3 * 1e3 + intermediate2 / 1e6).valueOf().toString();
    }
    intermediate3 && map.set("serverstarttimemillis", intermediate3);
  }
  var intermediate6, intermediate7;
  (intermediate3 =
    (intermediate6 = this.j) == null
      ? void 0
      : (intermediate7 = readNestedMessage(intermediate6, CrashClientStateMessage, 1)) == null
        ? void 0
        : readNumberField(intermediate7, 6)) && map.set("clientApp", String(intermediate3));
  return map;
};
function Size(width, height) {
  this.width = width;
  this.height = height;
}
prototypeAlias = Size.prototype;
prototypeAlias.clone = function () {
  return new Size(this.width, this.height);
};
prototypeAlias.aspectRatio = function () {
  return this.width / this.height;
};
prototypeAlias.ceil = function () {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
prototypeAlias.floor = function () {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
prototypeAlias.round = function () {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
function createDomElement(tagName) {
  var document2 = document;
  tagName = String(tagName);
  document2.contentType === "application/xhtml+xml" && (tagName = tagName.toLowerCase());
  return document2.createElement(tagName);
}
/**
 * 遥测环境检查与错误分类：保留原有检测、规则及采样，不增加新的数据收集。
 */
function EnvironmentInspector() {
  function helper() {}
  this.j = helper.call.bind(helper.toString);
}
EnvironmentInspector.prototype.fa = function () {
  var map = new Map();
  isScreenTampered() && map.set("apps_telemetry.screen_tampered", "true");
  a: {
    var iterator = getIterator(Array.prototype),
      iteration = iterator.next(),
      intermediate;
    try {
      for (; !iteration.done; iteration = iterator.next()) {
        var intermediate2 = true;
        break a;
      }
    } finally {
      iteration &&
        !iteration.done &&
        (intermediate = iterator.return) &&
        intermediate.call(iterator);
    }
    intermediate2 = false;
  }
  intermediate2 && map.set("apps_telemetry.array_prototype_tampered", "true");
  canCreateCanvas() || map.set("apps_telemetry.canvas_creation_broken", "true");
  !isWorkerGlobalScope() &&
    runtimeGlobal.navigator &&
    runtimeGlobal.navigator.webdriver &&
    map.set("apps_telemetry.webdriver", "true");
  intermediate2 = false;
  iterator = getIterator(automationPropertyProbes);
  iteration = iterator.next();
  var intermediate3;
  try {
    for (; !iteration.done; iteration = iterator.next()) {
      var value = iteration.value,
        intermediate4 = probeGlobalProperty(value.key);
      intermediate4 === 0
        ? (map.set("apps_telemetry.automation_property_present." + value.T, "true"),
          (intermediate2 = true))
        : intermediate4 === 2 &&
          map.set("apps_telemetry.automation_property_check_failed." + value.T, "true");
    }
  } finally {
    iteration &&
      !iteration.done &&
      (intermediate3 = iterator.return) &&
      intermediate3.call(iterator);
  }
  intermediate2 && map.set("apps_telemetry.automation_detected", "true");
  intermediate3 = false;
  value = getIterator(nativeFunctionProbes);
  intermediate4 = value.next();
  var intermediate5;
  try {
    for (; !intermediate4.done; intermediate4 = value.next()) {
      var value2 = intermediate4.value,
        intermediate6 = value2.T,
        intermediate7 = inspectNativeFunction(this, value2.name, value2.Ja);
      if (!intermediate7.ca) {
        var reason = intermediate7.reason;
        map.set("apps_telemetry.native_function_tampering." + intermediate6 + ".reason", reason);
        reason === "non_function_type" &&
          map.set(
            "apps_telemetry.native_function_tampering." + intermediate6 + ".type",
            intermediate7.type,
          );
        intermediate3 = true;
      }
    }
  } finally {
    intermediate4 &&
      !intermediate4.done &&
      (intermediate5 = value.return) &&
      intermediate5.call(value);
  }
  intermediate3 && map.set("apps_telemetry.native_function_tampering_detected", "true");
  return map;
};
function isScreenTampered() {
  if (isWorkerGlobalScope()) return false;
  var screen = runtimeGlobal.screen,
    intermediate = !(screen instanceof Screen);
  if (isSafariLike || isFirefox) return intermediate;
  try {
    var noopFunction = createNoopFunction();
    screen.addEventListener("change", noopFunction);
    screen.removeEventListener("change", noopFunction);
  } catch (caughtError) {
    intermediate = true;
  }
  return intermediate;
}
function canCreateCanvas() {
  function helper(helper2) {
    try {
      var size = new Size(1, 500);
      return (
        (helper2
          ? createDomElement("CANVAS")
          : new OffscreenCanvas(size.width, size.height)
        ).getContext("2d") != null
      );
    } catch (caughtError) {
      return false;
    }
  }
  return helper(false) && (isWorkerGlobalScope() || helper(true));
}
function isWorkerGlobalScope() {
  return (
    "WorkerGlobalScope" in runtimeGlobal &&
    typeof runtimeGlobal.WorkerGlobalScope === "function" &&
    self instanceof runtimeGlobal.WorkerGlobalScope
  );
}
function probeGlobalProperty(key) {
  if (isWorkerGlobalScope() || !runtimeGlobal) return 1;
  try {
    if (key in runtimeGlobal || (runtimeGlobal.document && key in runtimeGlobal.document)) return 0;
  } catch (caughtError) {
    return 2;
  }
  return 1;
}
function inspectNativeFunction(inspector, name, getFunction) {
  try {
    var function2 = getFunction();
  } catch (caughtError) {
    return { ca: false, reason: "not_reachable" };
  }
  getFunction = describeJsType(function2);
  if (getFunction !== "function")
    return { ca: false, reason: "non_function_type", type: getFunction };
  try {
    var intermediate = inspector.j(function2);
  } catch (caughtError) {
    return { ca: false, reason: "to_string_failed" };
  }
  inspector = nativeFunctionPatterns.exec(intermediate);
  return inspector
    ? (inspector = inspector[1])
      ? inspector !== name
        ? { ca: false, reason: "likely_wrong_native_function" }
        : { ca: true }
      : { ca: false, reason: "likely_bound_function" }
    : { ca: false, reason: "likely_non_native_source" };
}
function describeJsType(value) {
  switch (typeof value) {
    case "function":
      return "function";
    case "undefined":
      return "undefined";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object":
      return value === null ? "null" : "object";
    case "symbol":
      return "symbol";
    case "bigint":
      return "bigint";
    default:
      return "unknown";
  }
}
var automationPropertyProbes = [
    { key: "Cypress", T: "cypress" },
    { key: "$cdc_asdjflasutopfhvcZLmcfl_", T: "selenium" },
    { key: "$wdc_", T: "chrome_driver" },
    { key: "domAutomationController", T: "chromium_automation" },
    { key: "callPhantom", T: "phantomjs" },
    { key: "windmill", T: "windmill" },
    { key: "____LocationIntercept", T: "awesomium" },
    { key: "awesomium", T: "awesomium" },
    { key: "ubot", T: "ubot" },
    { key: "cefsharp_CreatePromise", T: "cefsharp" },
    { key: "__nightmare", T: "nightmare" },
  ],
  nativeFunctionProbes = [
    {
      name: "getOwnPropertyDescriptor",
      Ja: function () {
        return Object.getOwnPropertyDescriptor;
      },
      T: "Object.getOwnPropertyDescriptor",
    },
    {
      name: "addEventListener",
      Ja: function () {
        return runtimeGlobal.addEventListener;
      },
      T: "global.addEventListener",
    },
  ],
  nativeFunctionPatterns = /^function\s*(?:\s([a-zA-Z_$][\w$]+))?\(\) \{\s+\[native code\]\s+\}$/;
var injectedUrlPatterns = [],
  injectedErrorPatterns = [],
  ignoredErrorPatterns = [
    RegExp("^_0x[a-f0-9]{6} is not defined$"),
    RegExp("[Zz]otero"),
    RegExp('^Not found$|^Unknown Error of type "string": Not found$'),
  ],
  knownExtensionIds =
    "egfdjlfmgnehecnclamagfafdccgfndp mndnfokpggljbaajbnioimlmbfngpief mlkejohendkgipaomdopolhpbihbhfnf kgonammgkackdilhodbgbmodpepjocdp klbcgckkldhdhonijdbnhhaiedfkllef pmehocpgjmkenlokgjfkaichfjdhpeol cjlaeehoipngghikfjogbdkpbdgebppb ghbmnnjooekpmoecnnnilnnbdlolhkhi lmjegmlicamnimmfhcmpkclmigmmcbeh gmbmikajjgmnabiglmofipeabaddhgne lpcaedmchfhocbbapmcbpinfpgnhiddi gbkeegbaiigmenfmjfclcdgdpimamgkj adokjfanaflbkibffcbhihgihpgijcei iklnnbgdcppplombffihcijanngoeifm".split(
      " ",
    ),
  knownExtensionHosts = [
    RegExp("chrome-extension://([^/]+)", "g"),
    RegExp("moz-extension://([^/]+)", "g"),
    RegExp("ms-browser-extension://([^/]+)", "g"),
    RegExp("webkit-masked-url://([^/]+)", "g"),
    RegExp("safari-web-extension://([^/]+)", "g"),
  ],
  knownInjectedNames = [
    RegExp("^Permission denied$"),
    RegExp("index out of range: \\d+ \\+ \\d+ > \\d+"),
    RegExp("getReadMode(Config|Render|Extract)"),
  ],
  knownInjectedScripts = [
    RegExp("at file:///|@file:///|phantomjs|node:electron|py-scrap|eval code|Program Files"),
    RegExp("_0x[a-f0-9]+.*anonymous"),
  ],
  knownInjectedUrls = [
    RegExp("Script https://meet\\.google\\.com/.*meetsw.*load failed"),
    RegExp("A bad HTTP response code \\(\\d+\\) was received when fetching the script"),
  ],
  knownInjectedErrorTokens = [
    RegExp("Error loading.*Consecutive load failures"),
    RegExp("Failed to load module.*Consecutive load failures"),
  ];
function ErrorClassifier(classification, code) {
  this.ua = classification;
  this.ka = code;
}
function classifyError(classifier, error) {
  return (error = classifier.j(error))
    ? { ua: classifier.ua, ka: classifier.ka, Ba: error.toUpperCase() }
    : null;
}
function StackErrorClassifier() {
  ErrorClassifier.call(this, 1, 1);
}
inheritCompiledClass(StackErrorClassifier, ErrorClassifier);
StackErrorClassifier.prototype.j = function (value) {
  a: {
    value = formatErrorRecord(value);
    var intermediate = false,
      iterator = getIterator(knownExtensionHosts),
      iteration = iterator.next(),
      intermediate2;
    try {
      for (; !iteration.done; iteration = iterator.next()) {
        var intermediate3 = value.matchAll(iteration.value),
          iterator2 = getIterator(intermediate3),
          iteration2 = iterator2.next(),
          intermediate4;
        try {
          for (; !iteration2.done; iteration2 = iterator2.next()) {
            var intermediate5 = iteration2.value[1];
            if (intermediate5) {
              if (knownExtensionIds.includes(intermediate5)) {
                var intermediate6 = false;
                break a;
              }
              intermediate = true;
            }
          }
        } finally {
          iteration2 &&
            !iteration2.done &&
            (intermediate4 = iterator2.return) &&
            intermediate4.call(iterator2);
        }
      }
    } finally {
      iteration &&
        !iteration.done &&
        (intermediate2 = iterator.return) &&
        intermediate2.call(iterator);
    }
    intermediate6 = intermediate;
  }
  return intermediate6 ? "warning" : null;
};
function KnownErrorClassifier(classification, code, rules) {
  rules = rules === void 0 ? knownErrorRules : rules;
  ErrorClassifier.call(this, classification, code);
  this.l = rules;
}
inheritCompiledClass(KnownErrorClassifier, ErrorClassifier);
KnownErrorClassifier.prototype.j = function (value) {
  var intermediate =
      typeof value.l.get("apps_telemetry.cross_origin_scripts") === "string"
        ? value.l.get("apps_telemetry.cross_origin_scripts")
        : "",
    intermediate2 = value.l.get("apps_telemetry.native_function_tampering_detected") === "true",
    intermediate3 = formatErrorRecord(value),
    intermediate4 = intermediate3.includes("blob:"),
    iterator = getIterator(this.l),
    iteration = iterator.next(),
    intermediate5;
  try {
    for (; !iteration.done; iteration = iterator.next()) {
      var value2 = iteration.value,
        errorMessage = value2.errorMessage,
        intermediate6 = value2.Ca,
        intermediate7 = intermediate6 === void 0 ? [] : intermediate6,
        intermediate8 = value2.Y,
        intermediate9 = intermediate8 === void 0 ? [] : intermediate8,
        intermediate10 = value2.pa,
        intermediate11 = intermediate10 === void 0 ? false : intermediate10,
        intermediate12 = value2.Ha,
        intermediate13 = value2.rb,
        intermediate14 = intermediate13 === void 0 ? false : intermediate13;
      if (
        (intermediate12 === void 0 ? 0 : intermediate12)
          ? value.message === errorMessage
          : intermediate3.includes(errorMessage)
      ) {
        var intermediate15 = intermediate7.some(function (value3) {
            return intermediate.includes(value3);
          }),
          intermediate16 = intermediate9.some(function (value3) {
            return value.j.includes(value3);
          });
        intermediate7 = intermediate11 && intermediate4;
        intermediate14 = intermediate14 && intermediate2;
        if (intermediate15 || intermediate16 || intermediate7 || intermediate14) return "warning";
      }
    }
  } finally {
    iteration &&
      !iteration.done &&
      (intermediate5 = iterator.return) &&
      intermediate5.call(iterator);
  }
  return null;
};
var knownErrorRules = [
  {
    errorMessage: "Cannot read properties of undefined (reading 'addListener')",
    pa: true,
    Ca: ["infird.com"],
  },
  {
    errorMessage: "browser_polyfill_default(...).runtime.getManifest is not a function",
    pa: true,
    Ca: ["infird.com"],
  },
  { errorMessage: 'fileName":', Ca: ["walkme.com"] },
  { errorMessage: "] is not a function", pa: true },
  { errorMessage: "(reading 'toLowerCase')", pa: true, Y: ["__aiNetCmd__"] },
  { errorMessage: "Cannot read properties of undefined", Y: ["recaptcha"] },
  { errorMessage: "a is not defined", Ha: true, Y: ["<anonymous>"] },
  { errorMessage: "i is not defined", Ha: true, Y: ["<anonymous>"] },
  { errorMessage: "Failed to fetch", Y: ["__DLD__", "frontend.min.js"] },
  { errorMessage: "Maximum call stack size exceeded", rb: true },
  { errorMessage: "Unexpected end of JSON input", Y: ["facebook.net"] },
];
/**
 * 错误记录与分类流水线：cause 深度限制、元数据和严重程度调整。
 */
function ErrorRecord(message, stack, cause, severity, metadata) {
  metadata = metadata === void 0 ? new Map() : metadata;
  this.message = message;
  this.j = stack;
  this.cause = cause;
  this.o = severity;
  this.l = metadata;
}
function formatCauseChain(error) {
  return (error = error.cause)
    ? error.message + "\n" + error.j + "\n" + formatCauseChain(error)
    : "";
}
function formatErrorRecord(error) {
  return error.message + "\n" + error.j + "\n" + formatCauseChain(error);
}
function ErrorRecordBuilder() {
  this.o = this.j = this.message = "";
  this.l = new Map();
}
function setErrorRecordMessage(builder, message) {
  builder.message = message;
  return builder;
}
function buildErrorRecord(builder) {
  return new ErrorRecord(builder.message, builder.j, builder.cause, builder.o, builder.l);
}
function readErrorMessage(error) {
  return error instanceof Error || (error && error.message !== void 0)
    ? error.message
    : stringifyError(error);
}
function readErrorStack(error) {
  return error instanceof Error || (error && error.stack !== void 0) ? error.stack || "" : "";
}
function buildErrorCause(error, depth) {
  var intermediate = error && error.cause !== void 0;
  if (depth >= 3 || !intermediate) return null;
  intermediate = new ErrorRecordBuilder();
  error = error.cause;
  if (isErrorLike(error)) {
    if (
      (setErrorRecordMessage(intermediate, readErrorMessage(error)),
      (intermediate.j = readErrorStack(error)),
      (depth = buildErrorCause(error, depth + 1)))
    )
      intermediate.cause = depth;
  } else setErrorRecordMessage(intermediate, stringifyError(error));
  return buildErrorRecord(intermediate);
}
function isErrorLike(value) {
  return value instanceof Error || (!!value && value.message !== void 0 && value.stack !== void 0);
}
function stringifyError(value) {
  try {
    return isErrorLike(value)
      ? value.message + "\n" + value.stack
      : value && value instanceof Object
        ? JSON.stringify(value)
        : String(value);
  } catch (caughtError) {
    return String(value);
  }
}
function createErrorRecord(error, severity, metadata) {
  metadata = metadata === void 0 ? new Map() : metadata;
  var intermediate = setErrorRecordMessage(new ErrorRecordBuilder(), readErrorMessage(error));
  intermediate.j = readErrorStack(error);
  intermediate.l = metadata;
  if ((error = buildErrorCause(error, 0))) intermediate.cause = error;
  severity && (intermediate.o = severity);
  return buildErrorRecord(intermediate);
}
function RegexErrorClassifier(patterns, label, classification, code) {
  ErrorClassifier.call(this, classification, code);
  this.l = patterns;
  this.o = label;
}
inheritCompiledClass(RegexErrorClassifier, ErrorClassifier);
RegexErrorClassifier.prototype.j = function (value) {
  var intermediate = formatCauseChain(value);
  return matchesAnyPattern(value.message, this.l) ||
    matchesAnyPattern(value.j, this.o) ||
    matchesAnyPattern(intermediate, this.l) ||
    matchesAnyPattern(intermediate, this.o)
    ? "warning"
    : null;
};
function matchesAnyPattern(text, patterns) {
  patterns = getIterator(patterns);
  var iteration = patterns.next(),
    intermediate;
  try {
    for (; !iteration.done; iteration = patterns.next())
      if (iteration.value.test(text)) return true;
  } finally {
    iteration && !iteration.done && (intermediate = patterns.return) && intermediate.call(patterns);
  }
  return false;
}
function TokenErrorClassifier(tokens, label, classification, code, matchType) {
  ErrorClassifier.call(this, classification, code);
  this.l = tokens;
  this.Y = label;
  this.matchType = matchType;
}
inheritCompiledClass(TokenErrorClassifier, ErrorClassifier);
TokenErrorClassifier.prototype.j = function (value) {
  switch (this.matchType) {
    case 0:
      a: {
        var message = value.message,
          iterator = getIterator(this.l);
        value = iterator.next();
        var iterator2;
        try {
          for (; !value.done; value = iterator.next())
            if (message === value.value) {
              var intermediate = true;
              break a;
            }
        } finally {
          value && !value.done && (iterator2 = iterator.return) && iterator2.call(iterator);
        }
        intermediate = false;
      }
      return intermediate ? "warning" : null;
    case 1:
      a: {
        intermediate = value.message;
        iterator2 = getIterator(this.l);
        value = iterator2.next();
        try {
          for (; !value.done; value = iterator2.next())
            if (intermediate.startsWith(value.value)) {
              message = true;
              break a;
            }
        } finally {
          value && !value.done && (iterator = iterator2.return) && iterator.call(iterator2);
        }
        message = false;
      }
      return message ? "warning" : null;
    case 2:
      return (
        (intermediate = formatErrorRecord(value)),
        includesAnyToken(intermediate, this.l) || includesAnyToken(intermediate, this.Y)
          ? "warning"
          : null
      );
    default:
      return null;
  }
};
function includesAnyToken(text, tokens) {
  tokens = getIterator(tokens);
  var iteration = tokens.next(),
    intermediate;
  try {
    for (; !iteration.done; iteration = tokens.next())
      if (text.includes(iteration.value)) return true;
  } finally {
    iteration && !iteration.done && (intermediate = tokens.return) && intermediate.call(tokens);
  }
  return false;
}
function createTokenClassifier(tokens, label, classification) {
  return new TokenErrorClassifier(tokens, label, classification, 0, 2);
}
function EnvironmentErrorClassifier(classification, code, createInspector) {
  ErrorClassifier.call(this, classification, code);
  this.l = createInspector();
}
inheritCompiledClass(EnvironmentErrorClassifier, ErrorClassifier);
EnvironmentErrorClassifier.prototype.j = function () {
  return this.l ? null : "unsupported_severe";
};
var defaultErrorClassifiers = [
    new StackErrorClassifier(),
    createTokenClassifier(
      "Trusted Type;TrustedHTML;TrustedScript;cannot communicate with background;zaloJSV2;kaspersky-labs;@user-script;Object Not Found Matching Id;contextChanged;Not implemented on this platform;Extension context invalidated;neurosurgeonundergo;realTimeClData;Failed to execute 'querySelectorAll' on 'Document';Promise.all(...).then(...).catch(...).finally is not a function;Error executing Chrome API, chrome.tabs;Identifier 'originalPrompt' has already been declared;User rejected the request;Could not inject ethereum provider because it's not your default extension;Cannot redefine property: googletag;Can't find variable: HTMLDialogElement;Identifier 'listenerName' has already been declared;Cannot read properties of undefined (reading 'info');Permission denied to access property \"type\";Error: Promise timed out;Request timeout ToolbarStatus;Can't find variable: nc;imtgo;ton is not a function;__renderMessageNode is not defined;Cannot redefine property: ethereum;unknown action:;Receiving end does not exist;get-frame-manager-configuration;Key not found;'isAWS';Identifier 'contentScriptListenerRegistered' has already been declared;window.ethereum.selectedAddress;extDomain is not defined;No Listener: tabs:outgoing.message.ready;This script should only be loaded in a browser extension;Identifier 'initCoreHelpers' has already been declared;undefined is not an object (evaluating 't.tab.customFillData');No tab with id:;The browser is shutting down.;User mapping loading timeout;Internal JSON-RPC error;TOKEN_EXPIRED;A listener indicated an asynchronous response by returning true;You must authenticate your request with an API key".split(
        ";",
      ),
      "puppeteer;kaspersky-labs;@user-script;jsQuilting;linkbolic;neurosurgeonundergo;tlscdn;https://cdnjs.cloudflare.com/ajax/libs/mathjax/;secured-pixel.com;Can't find variable: nc;imtgo;_simulateEvent;goguardian".split(
        ";",
      ),
      1,
    ),
    new RegexErrorClassifier(ignoredErrorPatterns, injectedErrorPatterns, 1, 0),
    createTokenClassifier(
      "status is 0, navigator.onLine =;Network sync is disabled. Aborting a network request of int type;The service is currently unavailable.;Internal error encountered.;data does not exist in AF cache;There was an error during the transport or processing of this request;Failed to load gapi;Rpc failed due to xhr error. error code: 6, error:  [0];An interceptor has requested that the request be retried;8,\"generic\";A network error occurred;NetworkError: Connection failure due to HTTP 401;NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope';NetworkError: Load failed".split(
        ";",
      ),
      injectedUrlPatterns,
      2,
    ),
    new RegexErrorClassifier([], injectedErrorPatterns, 2, 0),
    new RegexErrorClassifier(knownInjectedNames, knownInjectedScripts, 3, 0),
    createTokenClassifier(
      "Kg is not defined;uncaught error;The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.;Illegal invocation;Script error;zCommon;can't access dead object;Java exception was raised during method invocation;pauseVideo is not a function;ResizeObserver loop;wallet must has at least one account;xbrowser is not defined;jQuery is not defined;Cannot read properties of null (reading 'requestAnimationFrame');Class extends value undefined is not a constructor or null;GM3TooltipService: No tooltip with id;Mole was disposed;getInitialTopicListResponse is missing for stream rendering;getPeopleById call preempted;The operation is insecure;class heritage;The play() request was interrupted;args.site.enabledFeatures is undefined;frappe is not defined;Cannot set properties of undefined (setting 'hidden');Identifier 'checkOngoingMeeting' has already been declared;AutofillCallbackHandler;invalid wire type;zp_token;isReCreate;HTMLOUT is not defined;Shopify root is null;CanvasMaskingStrategy_Redact;_chromeNamespace;feature named `performanceMetrics`;feature named `webCompat`;Cannot redefine property: webdriver;reCAPTCHA Timeout;feature named `pageObserver` was not found;feature named `hover` was not found;Request timeout appSettingsDistributor.getValue;TimeoutError: operation timed out;Sink type mismatch violation blocked by CSP;__firefox__;: Java object is gone;Cannot read properties of undefined (reading 'domInteractive');: t is not defined;sendMessage(). Tab not found.;Can't find variable: __gCrWeb;WKWebView API client did not respond to this postMessage;The provider is disconnected from all chains;The user aborted a request.;Task was cancelled.;lettersVoicesDistributor".split(
        ";",
      ),
      ["postUserData", "inline.cdn.mcas.ms", "evaluating 'n.standardSelectors'"],
      3,
    ),
    new RegexErrorClassifier(knownInjectedUrls, injectedErrorPatterns, 5, 0),
    createTokenClassifier(
      "Service worker registration is disabled by MDA;An unknown error occurred when fetching the script;Operation has been aborted;Timed out while trying to start the Service Worker;The Service Worker system has shutdown;The user denied permission to use Service Worker;The script resource is behind a redirect, which is disallowed;The document is in an invalid state;ServiceWorker script evaluation failed;ServiceWorker cannot be started;Failed to access storage;Worker disallowed;encountered an error during installation".split(
        ";",
      ),
      injectedUrlPatterns,
      5,
    ),
    new RegexErrorClassifier(knownInjectedErrorTokens, knownInjectedErrorTokens, 4, 0),
    createTokenClassifier(
      [
        "Timeout reached for loading script https://www.gstatic.com/_/apps-fileview/_/js/",
        "Error while loading script https://www.gstatic.com/_/apps-fileview/_/js/",
      ],
      injectedUrlPatterns,
      4,
    ),
  ],
  severeDowngradeCodes = new Set(["SEVERE", "SEVERE_AFTER_INITIAL", "UNKNOWN", "FATAL", ""]);
function ErrorClassificationPipeline(classifiers) {
  this.l = classifiers;
  this.j = false;
}
function createClassificationPipeline(
  extraClassifiers,
  patterns,
  downgradeEnabled,
  shouldClassify,
) {
  var values = [Error("uncaught error").message];
  downgradeEnabled = downgradeEnabled === void 0 ? false : downgradeEnabled;
  shouldClassify = shouldClassify === void 0 ? createConstantFunction(true) : shouldClassify;
  var values2 = [];
  patterns.length > 0 && values2.push(compileErrorPatterns(patterns));
  values2.push.apply(values2, iterableToArray(defaultErrorClassifiers));
  extraClassifiers = getIterator(extraClassifiers);
  patterns = extraClassifiers.next();
  var intermediate;
  try {
    for (; !patterns.done; patterns = extraClassifiers.next()) values2.push(patterns.value);
  } finally {
    patterns &&
      !patterns.done &&
      (intermediate = extraClassifiers.return) &&
      intermediate.call(extraClassifiers);
  }
  values.length > 0 && values2.push(new TokenErrorClassifier(values, [], 3, 5, 0));
  values2.push(new KnownErrorClassifier(3, 0));
  downgradeEnabled && values2.push(new EnvironmentErrorClassifier(8, 0, shouldClassify));
  return new ErrorClassificationPipeline(values2);
}
function runErrorClassification(pipeline, error) {
  var intermediate = "missing",
    map = new Map(),
    intermediate2 = true;
  try {
    intermediate = error.o;
    pipeline.j && map.set("apps_telemetry.after_downgraded_severe", "true");
    var iterator = getIterator(pipeline.l),
      iteration = iterator.next(),
      intermediate3;
    try {
      for (; !iteration.done; iteration = iterator.next()) {
        var value = iteration.value;
        try {
          var intermediate4 = classifyError(value, error);
          if (intermediate4) {
            var intermediate5 = intermediate,
              intermediate6 = markSevereDowngrade(pipeline, intermediate)
                ? intermediate4.Ba
                : intermediate;
            createClassificationMetadata(intermediate4, intermediate5, intermediate6).forEach(
              function (value2, other) {
                map.set(other, value2);
              },
            );
            intermediate = intermediate6;
            break;
          }
        } catch (caughtError) {
          intermediate2 = false;
          var errorRecord = createErrorRecord(caughtError, intermediate);
          map.set(
            "apps_telemetry.handling_error",
            formatErrorRecord(errorRecord) + "\n\nclassifier: " + value.constructor.name,
          );
        }
      }
    } finally {
      iteration &&
        !iteration.done &&
        (intermediate3 = iterator.return) &&
        intermediate3.call(iterator);
    }
  } catch (caughtError) {
    {
      intermediate2 = false;
      pipeline = createErrorRecord(caughtError, intermediate);
      map.set("apps_telemetry.handling_error", formatErrorRecord(pipeline));
    }
  }
  map.set("apps_telemetry.processed", String(intermediate2));
  return { Ba: intermediate, wa: map };
}
function createClassificationMetadata(classification, error, metadata) {
  var map = new Map();
  map.set("apps_telemetry.classification", classification.ua.toString());
  map.set(
    "apps_telemetry.classification_code",
    classification.ka ? classification.ka.toString() : "",
  );
  map.set("apps_telemetry.incoming_severity", error);
  map.set("apps_telemetry.outgoing_severity", metadata);
  return map;
}
function markSevereDowngrade(pipeline, code) {
  return severeDowngradeCodes.has(code.toUpperCase()) ? (pipeline.j = true) : false;
}
function compileErrorPatterns(patterns) {
  var values = [];
  patterns = getIterator(patterns);
  var iteration = patterns.next(),
    intermediate;
  try {
    for (; !iteration.done; iteration = patterns.next()) values.push(new RegExp(iteration.value));
  } finally {
    iteration && !iteration.done && (intermediate = patterns.return) && intermediate.call(patterns);
  }
  return new RegexErrorClassifier(values, values, 7, 0);
}
function TelemetryObserver() {}
TelemetryObserver.prototype.fa = function () {
  if (
    "WorkerGlobalScope" in runtimeGlobal &&
    typeof runtimeGlobal.WorkerGlobalScope === "function" &&
    self instanceof runtimeGlobal.WorkerGlobalScope
  )
    return new Map();
  try {
    var intermediate = Array.from(document.querySelectorAll("script"))
      .filter(this.l)
      .slice(0, 30)
      .map(this.j)
      .join("\n");
  } catch (caughtError) {
    intermediate = "Error getting cross-origin scripts";
  }
  return new Map().set("apps_telemetry.cross_origin_scripts", intermediate);
};
TelemetryObserver.prototype.l = function (value) {
  var regExp = new RegExp(/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)*google\.com(?:$|[\/#?])/);
  return (value = value.getAttribute("src"))
    ? !(value.startsWith("/") || regExp.test(value))
    : false;
};
TelemetryObserver.prototype.j = function (value) {
  return value.innerHTML
    ? value.outerHTML.slice(0, value.outerHTML.indexOf(value.innerHTML))
    : value.outerHTML;
};
function NoopEnvironmentInspector() {}
NoopEnvironmentInspector.prototype.fa = function () {
  try {
    var intermediate = performance
      .getEntriesByType("resource")
      .slice(-5)
      .map(function (value) {
        return sanitizeReportUrl(value.name);
      })
      .join("\n");
  } catch (caughtError) {
    intermediate = "Error getting last 5 resources";
  }
  return new Map().set("apps_telemetry.resources", intermediate);
}; /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var uuidAlphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
function createUuid() {
  var values = [],
    index;
  values[8] = values[13] = values[18] = values[23] = "-";
  values[14] = "4";
  for (index = 0; index < 36; index++)
    if (!values[index]) {
      var intermediate = 0 | (Math.random() * 16);
      values[index] = uuidAlphabet[index == 19 ? (intermediate & 3) | 8 : intermediate];
    }
  return values.join("");
}
function TelemetryProcessor(observer, options) {
  var intermediate = options === void 0 ? {} : options;
  options = intermediate.va;
  options = options === void 0 ? [] : options;
  var intermediate2 = intermediate.sb;
  intermediate2 = intermediate2 === void 0 ? [] : intermediate2;
  var intermediate3 = intermediate.Ga;
  intermediate3 = intermediate3 === void 0 ? [] : intermediate3;
  var intermediate4 = intermediate.Bb;
  var sessionId = intermediate.sessionId;
  sessionId = sessionId === void 0 ? createUuid() : sessionId;
  intermediate = intermediate.xb;
  this.o = createClassificationPipeline(
    options,
    intermediate2,
    intermediate4 === void 0 ? false : intermediate4,
    intermediate === void 0 ? createConstantFunction(true) : intermediate,
  );
  this.j = [new EnvironmentInspector(), new TelemetryObserver(), new NoopEnvironmentInspector()];
  this.j.push.apply(this.j, iterableToArray(intermediate3));
  this.sessionId = sessionId;
  var intermediate5;
  this.v = (intermediate5 = runtimeGlobal.performance) == null ? void 0 : intermediate5.timeOrigin;
  this.l = observer;
  this.l.qa(sessionId);
}
function addTelemetrySessionMetadata(processor, error, severity, context) {
  context["apps_telemetry.session_id"] = processor.sessionId;
  context["apps_telemetry.session_start_time_ms"] = String(processor.v);
  "apps_telemetry.processed" in context && (context["apps_telemetry.multi_processed"] = "true");
  var intermediate = processor.fa();
  (processor = processTelemetryError(processor, error, severity, intermediate)) &&
    copyMapEntries(intermediate, processor.wa);
  intermediate.forEach(function (value, other) {
    context[other] = value;
  });
  var intermediate2;
  return (intermediate2 = processor == null ? void 0 : processor.Ba) != null
    ? intermediate2
    : severity;
}
function processTelemetryError(processor, error, severity, metadata) {
  var intermediate = null,
    intermediate2 = null;
  try {
    {
      intermediate = createErrorRecord(error, severity, metadata);
      intermediate2 = runErrorClassification(processor.o, intermediate);
    }
  } catch (caughtError) {
    return (recordTelemetryFailure(metadata, caughtError, "apps_telemetry.processed"), null);
  }
  processor.l.Oa(intermediate, intermediate2);
  return intermediate2;
}
TelemetryProcessor.prototype.fa = function () {
  var map = new Map();
  try {
    var iterator = getIterator(this.j),
      iteration = iterator.next(),
      intermediate;
    try {
      for (; !iteration.done; iteration = iterator.next())
        iteration.value.fa().forEach(function (value, other) {
          map.set(other, value);
        });
    } finally {
      iteration &&
        !iteration.done &&
        (intermediate = iterator.return) &&
        intermediate.call(iterator);
    }
  } catch (caughtError) {
    recordTelemetryFailure(map, caughtError, "apps_telemetry.annotated");
  }
  return map;
};
function copyMapEntries(target, source) {
  source.forEach(function (value, other) {
    target.set(other, value);
  });
}
function recordTelemetryFailure(metadata, error, key) {
  metadata.set(key, "false");
  metadata.set("apps_telemetry.handling_error", stringifyError(error));
}
var supportedCrashClassifications = new Set([1, 6, 7, 2, 0]);
function supportsCrashClassification() {
  var crashClassification = readCrashClassification(
      readCrashClientState(readTelemetryBootstrapMessage()),
    ),
    numberField = readNumberField(crashClassification, 1),
    numberField2 = readNumberField(crashClassification, 5);
  return [numberField, numberField2].every(function (value) {
    return supportedCrashClassifications.has(value);
  });
}
function readBooleanFeatureFlag(flag) {
  try {
    return readFeatureFlag(getFeatureFlagStore(), flag);
  } catch (caughtError) {
    return false;
  }
}
function createTelemetryProcessor(options, observer) {
  var intermediate = (options = options === void 0 ? {} : options);
  options = intermediate.Ga;
  options = options === void 0 ? [] : options;
  var intermediate2 = intermediate.va;
  intermediate2 = intermediate2 === void 0 ? [] : intermediate2;
  var intermediate3 = intermediate.wb;
  intermediate3 = intermediate3 === void 0 ? [] : intermediate3;
  var intermediate4 = intermediate.tb;
  intermediate4 = intermediate4 === void 0 ? [] : intermediate4;
  var intermediate5 = intermediate.Dc;
  intermediate5 = intermediate5 === void 0 ? [] : intermediate5;
  var intermediate6 = intermediate.Ec;
  intermediate6 = intermediate6 === void 0 ? [] : intermediate6;
  intermediate = intermediate.sessionId;
  intermediate = intermediate === void 0 ? void 0 : intermediate;
  try {
    var featureFlag = readFeatureFlag(getFeatureFlagStore(), ignoredErrorsFlag),
      index = void 0 === repeatedFieldModeToken ? 2 : 4,
      intermediate7 = void 0,
      backingOrStateValue = featureFlag.C,
      intermediate8 = backingOrStateValue[arrayFlagsKey] | 0,
      intermediate9 = isImmutableMessage(featureFlag, intermediate8) ? 1 : index;
    intermediate7 = !!intermediate7 || intermediate9 === 3;
    intermediate9 === 2 &&
      detachCopyOnWriteArray(featureFlag) &&
      ((backingOrStateValue = featureFlag.C),
      (intermediate8 = backingOrStateValue[arrayFlagsKey] | 0));
    var repeatedArray = getRepeatedArray(backingOrStateValue, 1),
      intermediate10 = repeatedArray === emptyRepeatedField ? 7 : repeatedArray[arrayFlagsKey] | 0,
      intermediate11 = inheritRepeatedArrayFlags(intermediate10, intermediate8);
    if ((featureFlag = 4 & intermediate11 ? false : true)) {
      4 & intermediate11 &&
        ((repeatedArray = Array.prototype.slice.call(repeatedArray)),
        (intermediate10 = 0),
        (intermediate11 = copyRepeatedArrayFlags(intermediate11, intermediate8)),
        (intermediate8 = setArrayField(backingOrStateValue, intermediate8, 1, repeatedArray)));
      for (var index2 = (index = 0); index < repeatedArray.length; index++) {
        var string = coerceString(repeatedArray[index]);
        string != null && (repeatedArray[index2++] = string);
      }
      index2 < index && (repeatedArray.length = index2);
      string = intermediate11 |= 4;
      string &= -513;
      intermediate11 = string & -1025;
      intermediate11 &= -4097;
    }
    intermediate11 !== intermediate10 &&
      (setArrayFlags(repeatedArray, intermediate11),
      2 & intermediate11 && Object.freeze(repeatedArray));
    var intermediate12 = (repeatedArray = prepareRepeatedArray(
      repeatedArray,
      intermediate11,
      backingOrStateValue,
      intermediate8,
      1,
      intermediate9,
      featureFlag,
      intermediate7,
    ));
  } catch (caughtError) {
    intermediate12 = [];
  }
  backingOrStateValue = readBooleanFeatureFlag(telemetryIntegrationFlag);
  intermediate8 = [];
  intermediate9 = intermediate8.concat;
  repeatedArray = [];
  intermediate3.length > 0 && repeatedArray.push(createTokenClassifier(intermediate3, [], 6));
  intermediate4.length > 0 && repeatedArray.push(new RegexErrorClassifier(intermediate4, [], 6, 0));
  intermediate5.length > 0 &&
    repeatedArray.push(new TokenErrorClassifier(intermediate5, [], 6, 5, 0));
  intermediate6.length > 0 &&
    repeatedArray.push(new TokenErrorClassifier(intermediate6, [], 6, 5, 1));
  return new TelemetryProcessor(observer, {
    va: intermediate9.call(
      intermediate8,
      iterableToArray(repeatedArray),
      iterableToArray(intermediate2),
    ),
    sb: intermediate12,
    Ga: [new BootstrapConfigProvider()].concat(iterableToArray(options)),
    Bb: backingOrStateValue,
    sessionId: intermediate,
    xb: supportsCrashClassification,
  });
}
function NoopTelemetryObserver() {}
NoopTelemetryObserver.prototype.Oa = createNoopFunction();
NoopTelemetryObserver.prototype.qa = createNoopFunction();
function createDefaultTelemetryProcessor(options) {
  options = options === void 0 ? {} : options;
  return createTelemetryProcessor(options, new NoopTelemetryObserver());
}
function countRelevantStackLines(stack) {
  return stack
    ? stack.split("\n").filter(function (value) {
        return value.trim() && !value.includes("signal is aborted without reason");
      }).length
    : 0;
}
function AbortErrorClassifier() {
  ErrorClassifier.call(this, 3, 0);
}
inheritCompiledClass(AbortErrorClassifier, ErrorClassifier);
AbortErrorClassifier.prototype.j = function (value) {
  a: {
    for (; value; ) {
      var intermediate = value.message.includes("signal is aborted without reason"),
        intermediate2 = countRelevantStackLines(value.j) === 2;
      if (!intermediate || !intermediate2) {
        value = false;
        break a;
      }
      value = value.cause;
    }
    value = true;
  }
  return value ? "warning" : null;
};
try {
  var topWindowCandidate,
    topWindowValue,
    telemetryTopWindow =
      (topWindowValue = (topWindowCandidate = window) == null ? void 0 : topWindowCandidate.top) !=
      null
        ? topWindowValue
        : runtimeGlobal;
  telemetryTopWindow.U3bHHf != null || (telemetryTopWindow.U3bHHf = 0);
  telemetryTopWindow.U3bHHf++;
} catch (caughtError) {
  {
    runtimeGlobal.U3bHHf != null || (runtimeGlobal.U3bHHf = 0);
    runtimeGlobal.U3bHHf++;
  }
}
var globalSymbolConstructor;
if (
  runtimeGlobal == null
    ? 0
    : (globalSymbolConstructor = runtimeGlobal.Symbol) == null
      ? 0
      : globalSymbolConstructor.for
) {
  var globalErrorMapSymbol = Symbol.for("google.goem");
  runtimeGlobal[globalErrorMapSymbol] || (runtimeGlobal[globalErrorMapSymbol] = new WeakMap());
}
"#".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
function getWizEventHandlers(element, eventType) {
  var __wiz = element.__wiz;
  __wiz || (__wiz = element.__wiz = {});
  return __wiz[eventType.toString()];
} /*

 Copyright 2024 Google, Inc
 SPDX-License-Identifier: MIT
*/
var parsedActionCache = {};
var actionPatternCache = {};
function registerClientAction(callback) {
  var body = document.body,
    intermediate = trimString(body.getAttribute("jsaction") || "");
  var values = ["u0pjoe"];
  var iterator = getIterator(values),
    iteration = iterator.next(),
    intermediate2;
  try {
    for (; !iteration.done; iteration = iterator.next()) {
      var value = iteration.value;
      var intermediate3 = intermediate;
      if (intermediate3) {
        var intermediate4 = parsedActionCache[intermediate3];
        if (intermediate4) var intermediate5 = !!intermediate4[value.toString()];
        else {
          var intermediate6 = actionPatternCache[value.toString()];
          intermediate6 ||
            ((intermediate6 = new RegExp("(^\\s*" + value + "\\s*:|[\\s;]" + value + "\\s*:)")),
            (actionPatternCache[value.toString()] = intermediate6));
          intermediate5 = intermediate6.test(intermediate3);
        }
      } else intermediate5 = false;
      intermediate5 ||
        (intermediate && !/;$/.test(intermediate) && (intermediate += ";"),
        (intermediate += value + ":.CLIENT"),
        setJsAction(body, intermediate));
      var wizEventHandlers = getWizEventHandlers(body, value);
      wizEventHandlers
        ? wizEventHandlers.push(callback)
        : (body.__wiz[value.toString()] = [callback]);
    }
  } finally {
    iteration &&
      !iteration.done &&
      (intermediate2 = iterator.return) &&
      intermediate2.call(iterator);
  }
  return { et: values, eb: callback, el: body };
}
function setJsAction(element, actions) {
  element.setAttribute("jsaction", actions);
  "__jsaction" in element && delete element.__jsaction;
}
/**
 * 错误保护与网络传输：全局回调保护、XHR 状态机、错误报告。
 */
function EntryPointProtector(errorHandler) {
  Disposable.call(this);
  this.l = errorHandler;
}
inheritClosureClass(EntryPointProtector, Disposable);
EntryPointProtector.prototype.j = function (value) {
  return getProtectedFunction(this, value);
};
function protectedFunctionKey(protector, wrapper) {
  protector =
    (Object.prototype.hasOwnProperty.call(protector, objectUidKey) && protector[objectUidKey]) ||
    (protector[objectUidKey] = ++nextObjectUid);
  return (wrapper ? "__wrapper_" : "__protected_") + protector + "__";
}
function getProtectedFunction(protector, callback) {
  var intermediate = protectedFunctionKey(protector, true);
  callback[intermediate] ||
    ((callback[intermediate] = createProtectedFunction(protector, callback))[
      protectedFunctionKey(protector, false)
    ] = callback);
  return callback[intermediate];
}
function createProtectedFunction(protector, callback) {
  function helper() {
    if (protector.na()) return callback.apply(this, arguments);
    try {
      return callback.apply(this, arguments);
    } catch (caughtError) {
      handleProtectedError(protector, caughtError);
    }
  }
  helper[protectedFunctionKey(protector, false)] = callback;
  return helper;
}
function handleProtectedError(protector, error) {
  if (
    !(
      (error &&
        typeof error === "object" &&
        typeof error.message === "string" &&
        error.message.indexOf("Error in protected function: ") == 0) ||
      (typeof error === "string" && error.indexOf("Error in protected function: ") == 0)
    )
  )
    throw (protector.l(error), new ProtectedFunctionError(error));
}
function protectUnhandledRejections(protector) {
  var intermediate = intermediate || runtimeGlobal.window || runtimeGlobal.globalThis;
  "onunhandledrejection" in intermediate &&
    (intermediate.onunhandledrejection = function (value) {
      handleProtectedError(
        protector,
        value && value.reason ? value.reason : Error("uncaught error"),
      );
    });
}
function protectGlobalTimer(protector, name) {
  var intermediate = runtimeGlobal.window || runtimeGlobal.globalThis,
    callback = intermediate[name];
  if (!callback) throw Error(name + " not on global?");
  intermediate[name] = function (value, other) {
    typeof value === "string" && (value = partialApply(evaluateGlobally, value));
    value && (arguments[0] = value = getProtectedFunction(protector, value));
    if (callback.apply) return callback.apply(this, arguments);
    var value2 = value;
    if (arguments.length > 2) {
      var intermediate2 = Array.prototype.slice.call(arguments, 2);
      value2 = function () {
        value.apply(this, intermediate2);
      };
    }
    return callback(value2, other);
  };
  intermediate[name][protectedFunctionKey(protector, false)] = callback;
}
EntryPointProtector.prototype.N = function () {
  var intermediate = runtimeGlobal.window || runtimeGlobal.globalThis;
  var setTimeout2 = intermediate.setTimeout;
  setTimeout2 = setTimeout2[protectedFunctionKey(this, false)] || setTimeout2;
  intermediate.setTimeout = setTimeout2;
  setTimeout2 = intermediate.setInterval;
  setTimeout2 = setTimeout2[protectedFunctionKey(this, false)] || setTimeout2;
  intermediate.setInterval = setTimeout2;
  EntryPointProtector.W.N.call(this);
};
function ProtectedFunctionError(error) {
  ClosureError.call(
    this,
    "Error in protected function: " +
      (error && error.message ? String(error.message) : String(error)),
    error,
  );
  (error = error && error.stack) && typeof error === "string" && (this.stack = error);
}
inheritClosureClass(ProtectedFunctionError, ClosureError);
function XhrIo() {
  EventTarget.call(this);
  this.headers = new Map();
  this.o = false;
  this.j = null;
  this.M = "";
  this.B = 0;
  this.A = this.L = this.F = this.J = false;
  this.O = 0;
  this.v = null;
  this.P = "";
  this.S = false;
}
inheritClosureClass(XhrIo, EventTarget);
var httpSchemePattern = /^https?$/i,
  methodsWithRequestBody = ["POST", "PUT"],
  activeXhrRequests = [];
prototypeAlias = XhrIo.prototype;
prototypeAlias.fb = function () {
  this.dispose();
  removeArrayValue(activeXhrRequests, this);
};
prototypeAlias.send = function (value, iterator, options, context) {
  if (this.j)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" + this.M + "; newUri=" + value,
    );
  iterator = iterator ? iterator.toUpperCase() : "GET";
  this.M = value;
  this.B = 0;
  this.J = false;
  this.o = true;
  this.j = new XMLHttpRequest();
  this.j.onreadystatechange = wrapAsyncContext(bindFunction(this.Pa, this));
  try {
    {
      this.L = true;
      this.j.open(iterator, String(value), true);
      this.L = false;
    }
  } catch (caughtError) {
    timeoutXhr(this);
    return;
  }
  value = options || "";
  options = new Map(this.headers);
  if (context)
    if (Object.getPrototypeOf(context) === Object.prototype)
      for (var iterator2 in context) options.set(iterator2, context[iterator2]);
    else if (typeof context.keys === "function" && typeof context.get === "function") {
      iterator2 = getIterator(context.keys());
      var iteration = iterator2.next(),
        intermediate;
      try {
        for (; !iteration.done; iteration = iterator2.next()) {
          var value2 = iteration.value;
          options.set(value2, context.get(value2));
        }
      } finally {
        iteration &&
          !iteration.done &&
          (intermediate = iterator2.return) &&
          intermediate.call(iterator2);
      }
    } else throw Error("Unknown input type for opt_headers: " + String(context));
  context = Array.from(options.keys()).find(function (value5) {
    return "content-type" == value5.toLowerCase();
  });
  intermediate = runtimeGlobal.FormData && value instanceof runtimeGlobal.FormData;
  !(Array.prototype.indexOf.call(methodsWithRequestBody, iterator, void 0) >= 0) ||
    context ||
    intermediate ||
    options.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  iterator = getIterator(options);
  context = iterator.next();
  var intermediate2;
  try {
    for (; !context.done; context = iterator.next()) {
      var iterator3 = getIterator(context.value),
        value3 = iterator3.next().value,
        value4 = iterator3.next().value;
      this.j.setRequestHeader(value3, value4);
    }
  } finally {
    context && !context.done && (intermediate2 = iterator.return) && intermediate2.call(iterator);
  }
  this.P && (this.j.responseType = this.P);
  "withCredentials" in this.j &&
    this.j.withCredentials !== this.S &&
    (this.j.withCredentials = this.S);
  try {
    {
      this.v && (clearTimeout(this.v), (this.v = null));
      this.O > 0 && (this.v = setTimeout(this.yb.bind(this), this.O));
      this.F = true;
      this.j.send(value);
      this.F = false;
    }
  } catch (caughtError) {
    timeoutXhr(this);
  }
};
prototypeAlias.yb = function () {
  typeof closureNamespace != "undefined" &&
    this.j &&
    ((this.B = 8), this.dispatchEvent("timeout"), this.abort(8));
};
function timeoutXhr(request) {
  request.o = false;
  request.j && ((request.A = true), request.j.abort(), (request.A = false));
  request.B = 5;
  dispatchXhrError(request);
  cleanupXhr(request);
}
function dispatchXhrError(request) {
  request.J ||
    ((request.J = true), request.dispatchEvent("complete"), request.dispatchEvent("error"));
}
prototypeAlias.abort = function (value) {
  this.j &&
    this.o &&
    ((this.o = false),
    (this.A = true),
    this.j.abort(),
    (this.A = false),
    (this.B = value || 7),
    this.dispatchEvent("complete"),
    this.dispatchEvent("abort"),
    cleanupXhr(this));
};
prototypeAlias.N = function () {
  this.j &&
    (this.o && ((this.o = false), (this.A = true), this.j.abort(), (this.A = false)),
    cleanupXhr(this, true));
  XhrIo.W.N.call(this);
};
prototypeAlias.Pa = function () {
  this.na() || (this.L || this.F || this.A ? processXhrReadyState(this) : this.Aa());
};
prototypeAlias.Aa = function () {
  processXhrReadyState(this);
};
function processXhrReadyState(request) {
  if (request.o && typeof closureNamespace != "undefined")
    if (request.F && (request.j ? request.j.readyState : 0) == 4)
      setTimeout(request.Pa.bind(request), 0);
    else if (
      (request.dispatchEvent("readystatechange"), (request.j ? request.j.readyState : 0) == 4)
    ) {
      request.o = false;
      try {
        isSuccessfulXhr(request)
          ? (request.dispatchEvent("complete"), request.dispatchEvent("success"))
          : ((request.B = 6), dispatchXhrError(request));
      } finally {
        cleanupXhr(request);
      }
    }
}
function cleanupXhr(request, disposing) {
  if (request.j) {
    request.v && (clearTimeout(request.v), (request.v = null));
    var intermediate = request.j;
    request.j = null;
    disposing || request.dispatchEvent("ready");
    try {
      intermediate.onreadystatechange = null;
    } catch (caughtError) {}
  }
}
prototypeAlias.isActive = function () {
  return !!this.j;
};
function isSuccessfulXhr(request) {
  var xhrStatus = readXhrStatus(request);
  a: switch (xhrStatus) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
      var intermediate = true;
      break a;
    default:
      intermediate = false;
  }
  if (!intermediate) {
    if ((xhrStatus = xhrStatus === 0)) {
      request = String(request.M).match(urlPartsPattern)[1] || null;
      !request &&
        runtimeGlobal.self &&
        runtimeGlobal.self.location &&
        (request = runtimeGlobal.self.location.protocol.slice(0, -1));
      xhrStatus = !httpSchemePattern.test(request ? request.toLowerCase() : "");
    }
    intermediate = xhrStatus;
  }
  return intermediate;
}
function readXhrStatus(request) {
  try {
    return (request.j ? request.j.readyState : 0) > 2 ? request.j.status : -1;
  } catch (caughtError) {
    return -1;
  }
}
registerEntryPoint(function (callback) {
  XhrIo.prototype.Aa = callback(XhrIo.prototype.Aa);
});
function GlobalErrorHandler(reportUrl, context, disabled) {
  EventTarget.call(this);
  this.A = context || null;
  this.v = {};
  this.B = sendErrorReport;
  this.J = reportUrl;
  if (!disabled) {
    this.j = null;
    this.j = new EntryPointProtector(bindFunction(this.o, this));
    protectGlobalTimer(this.j, "setTimeout");
    protectGlobalTimer(this.j, "setInterval");
    reportUrl = this.j;
    context = runtimeGlobal.window || runtimeGlobal.globalThis;
    disabled = [
      "requestAnimationFrame",
      "mozRequestAnimationFrame",
      "webkitAnimationFrame",
      "msRequestAnimationFrame",
    ];
    for (var index = 0; index < disabled.length; index++) {
      var intermediate = disabled[index];
      disabled[index] in context && protectGlobalTimer(reportUrl, intermediate);
    }
    reportUrl = this.j;
    entryPointsMonitored = true;
    context = bindFunction(reportUrl.j, reportUrl);
    for (disabled = 0; disabled < entryPointCallbacks.length; disabled++)
      entryPointCallbacks[disabled](context);
    entryPointMonitors.push(reportUrl);
  }
}
inheritClosureClass(GlobalErrorHandler, EventTarget);
function GlobalErrorEvent(error, context) {
  BaseEvent.call(this, "c");
  this.error = error;
  this.Z = context;
}
inheritClosureClass(GlobalErrorEvent, BaseEvent);
function createGlobalErrorHandler(reportUrl, context) {
  return new GlobalErrorHandler(reportUrl, context, void 0);
}
function sendErrorReport(url, payload, method, context) {
  if (context instanceof Map) {
    var record = {};
    context = getIterator(context);
    var iteration = context.next(),
      intermediate;
    try {
      for (; !iteration.done; iteration = context.next()) {
        var iterator = getIterator(iteration.value),
          value = iterator.next().value,
          value2 = iterator.next().value;
        record[value] = value2;
      }
    } finally {
      iteration && !iteration.done && (intermediate = context.return) && intermediate.call(context);
    }
  } else record = context;
  intermediate = new XhrIo();
  activeXhrRequests.push(intermediate);
  intermediate.l.add("ready", intermediate.fb, true, void 0, void 0);
  intermediate.send(url, payload, method, record);
}
function setErrorTransport(handler, transport) {
  handler.B = transport;
}
GlobalErrorHandler.prototype.o = function (value, other) {
  value = value.error || value;
  other = other ? shallowCloneObject(other) : {};
  value instanceof Error && extendObject(other, readErrorContext(value));
  var errorDetails = normalizeErrorDetails(value);
  if (this.A)
    try {
      this.A(errorDetails, other, value);
    } catch (caughtError) {}
  var intermediate = errorDetails.message.substring(0, 1900);
  if (!(value instanceof ClosureError) || value.j) {
    var fileName = errorDetails.fileName,
      lineNumber = errorDetails.lineNumber;
    value = errorDetails.stack;
    try {
      var intermediate2 = appendQueryParameters(
        this.J,
        "script",
        fileName,
        "error",
        intermediate,
        "line",
        lineNumber,
      );
      a: {
        for (var intermediate3 in this.v) {
          var intermediate4 = false;
          break a;
        }
        intermediate4 = true;
      }
      if (!intermediate4) {
        intermediate4 = intermediate2;
        var intermediate5 = encodeQueryObject(this.v);
        intermediate2 = appendEncodedQuery(intermediate4, intermediate5);
      }
      intermediate5 = {};
      intermediate5.trace = value;
      if (other)
        for (var intermediate6 in other)
          intermediate5["context." + intermediate6] = other[intermediate6];
      var intermediate7 = encodeQueryObject(intermediate5);
      this.B(intermediate2, "POST", intermediate7, this.F);
    } catch (caughtError) {}
  }
  try {
    this.dispatchEvent(new GlobalErrorEvent(errorDetails, other));
  } catch (caughtError) {}
};
GlobalErrorHandler.prototype.N = function () {
  disposeIfPossible(this.j);
  GlobalErrorHandler.W.N.call(this);
};
function LogTimeOrigin() {
  this.j = Date.now();
}
var logTimeOrigin = null;
LogTimeOrigin.prototype.set = function (value) {
  this.j = value;
};
LogTimeOrigin.prototype.reset = function () {
  this.set(Date.now());
};
LogTimeOrigin.prototype.get = createPropertyGetter("j");
function LogFormatter(prefix) {
  this.v = prefix || "";
  logTimeOrigin || (logTimeOrigin = new LogTimeOrigin());
  this.A = logTimeOrigin;
}
LogFormatter.prototype.j = true;
LogFormatter.prototype.l = true;
LogFormatter.prototype.o = false;
function padTwoDigits(value) {
  return value < 10 ? "0" + value : String(value);
}
function TextLogFormatter(prefix) {
  LogFormatter.call(this, prefix);
}
inheritClosureClass(TextLogFormatter, LogFormatter);
function formatLogRecord(formatter, record) {
  var values = [];
  values.push(formatter.v, " ");
  if (formatter.l) {
    var push = values.push,
      date = new Date(record.o());
    push.call(
      values,
      "[",
      padTwoDigits(date.getFullYear() - 2e3) +
        padTwoDigits(date.getMonth() + 1) +
        padTwoDigits(date.getDate()) +
        " " +
        padTwoDigits(date.getHours()) +
        ":" +
        padTwoDigits(date.getMinutes()) +
        ":" +
        padTwoDigits(date.getSeconds()) +
        "." +
        padTwoDigits(Math.floor(date.getMilliseconds() / 10)),
      "] ",
    );
  }
  push = values.push;
  date = formatter.A.get();
  date = (record.o() - date) / 1e3;
  var intermediate = date.toFixed(3),
    index = 0;
  if (date < 1) index = 2;
  else
    for (; date < 100; ) {
      index++;
      date *= 10;
    }
  for (; index-- > 0; ) intermediate = " " + intermediate;
  push.call(values, "[", intermediate, "s] ");
  values.push("[", record.l(), "] ");
  values.push(record.getMessage());
  formatter.o &&
    ((record = record.j()),
    record !== void 0 &&
      values.push("\n", record instanceof Error ? record.message : String(record)));
  formatter.j && values.push("\n");
  return values.join("");
}
/**
 * 错误报告编排：上下文、实验信息、采样、受保护回调及 crash storage。
 */
function ErrorReporter(options) {
  options = options === void 0 ? new ErrorReporterOptions() : options;
  EventTarget.call(this);
  var instance = this;
  this.P = {};
  this.j = null;
  this.o = {};
  this.M = new EventHandler(this);
  this.ib = options.I;
  this.S = options.L;
  this.Wa = options.J;
  this.gb = options.G;
  this.Xa = options.M;
  var intermediate = options.l;
  this.Ua = (options.v || createDefaultTelemetryProcessor)({
    wb: knownInjectedErrorMessages,
    tb: knownInjectedErrorPatterns,
    va: [new AbortErrorClassifier()],
  });
  this.cb = options.R;
  this.U = new ReloadPrompt();
  var xhrIo = new XhrIo();
  addExperimentMetadata(this, intermediate);
  this.B = new BufferedLogTransport(xhrIo, intermediate, void 0, void 0, void 0);
  ownDisposable(this, this.B);
  this.v = options.j
    ? options.j
    : readStringClientFlag(intermediate, "docs-sup") +
      readStringClientFlag(intermediate, "docs-jepp") +
      "/jserror";
  if ((xhrIo = readStringClientFlag(intermediate, "jobset")))
    this.v = appendQueryParameters(this.v, "jobset", xhrIo);
  if ((xhrIo = readStringClientFlag(intermediate, "docs-ci")))
    this.v = appendQueryParameters(this.v, "id", xhrIo);
  xhrIo = readStringClientFlag(intermediate, "docs-pid");
  parseBooleanFlag(intermediate.get("docs-eaotx")) &&
    xhrIo &&
    (this.v = appendQueryParameters(this.v, "ouid", xhrIo));
  this.ea = readNumericClientFlag(intermediate, "docs-srmoe") || 0;
  this.ab = parseBooleanFlag(intermediate.get("docs-oesf"));
  this.Fa = readNumericClientFlag(intermediate, "docs-srmour") || 0;
  this.bb = parseBooleanFlag(intermediate.get("docs-oursf"));
  xhrIo = options.A || (this.Fa > 0 && Math.random() < this.Fa);
  this.Ya = parseBooleanFlag(intermediate.get("docs-wesf"));
  installErrorReporter(this);
  unhandledRejectionHandler = function (value) {
    return handleReportedEvent(instance, value, "promise rejection");
  };
  var intermediate2 = readNumericClientFlag(intermediate, "docs-srmdue") || 0;
  if (intermediate2 > 0 && Math.random() < intermediate2) {
    var booleanFlag = parseBooleanFlag(intermediate.get("docs-duesf"));
    rethrowError = function (value) {
      handleReportedEvent(
        instance,
        value,
        "deferred error",
        booleanFlag,
        "isDeferredUnhandledErrback",
      );
    };
  } else rethrowError = createNoopFunction();
  intermediate2 = readNumericClientFlag(intermediate, "docs-srmxue") || 0;
  intermediate2 = intermediate2 > 0 && Math.random() < intermediate2;
  intermediate.get("docs-xduesf");
  intermediate2 && initializeDisposableChildren();
  xhrIo &&
    ((xhrIo = new EntryPointProtector(function (value) {
      value = normalizeReportedEvent(value, "native promise rejection");
      var record = {};
      record = ((record.isUnhandledRejection = "true"), record);
      instance.bb ? reportFatalError(instance, value, record) : instance.info(value, record);
    })),
    protectUnhandledRejections(xhrIo),
    ownDisposable(this, xhrIo));
  this.L = null;
  typeof document !== "undefined" &&
    document.body &&
    (this.L = registerClientAction(function (iterator) {
      var record = {};
      record = ((record.isWizError = "true"), record);
      iterator = getIterator(iterator.data.errors);
      var iteration = iterator.next(),
        intermediate3;
      try {
        for (; !iteration.done; iteration = iterator.next()) {
          var error = iteration.value.error;
          instance.Ya ? reportFatalError(instance, error, record) : instance.info(error, record);
        }
      } finally {
        iteration &&
          !iteration.done &&
          (intermediate3 = iterator.return) &&
          intermediate3.call(iterator);
      }
    }));
  this.O = options.o;
  this.F = false;
  this.J = true;
  this.A = false;
  this.da = readStringClientFlag(intermediate, "docs-jern");
  this.Va = options.F;
  this.Ta = options.B.concat(Object.values(telemetryContextKeys));
}
inheritCompiledClass(ErrorReporter, EventTarget);
function installErrorReporter(reporter) {
  var intermediate = intermediate === void 0 ? false : intermediate;
  if (errorReporterInstalled) {
    if (errorReporterInstallStack != null)
      throw Error('ErrorReporter already installed. at "' + errorReporterInstallStack.stack + '"');
    throw Error("ErrorReporter already installed.");
  }
  errorReporterInstalled = true;
  errorReporterInstallStack = Error();
  reporter.j = createGlobalErrorHandler(reporter.v, function (value, other, options) {
    return enrichReportContext(reporter, value, other, options);
  });
  var record = {};
  reporter.Wa && (record["X-No-Abort"] = "1");
  reporter.j.F = record;
  setErrorTransport(reporter.j, function (value, other, options, context) {
    reporter.J && reporter.B.send(value, other, options, context);
  });
  if (reporter.ea > 0 && Math.random() < reporter.ea) {
    record = {};
    var intermediate2 = ((record.isWindowOnError = "true"), record);
    reporter.ab
      ? installGlobalErrorListener(function (value) {
          reportFatalError(
            reporter,
            value.error instanceof Error ? value.error : Error(value.message),
            intermediate2,
          );
        })
      : installGlobalErrorListener(function (value) {
          reporter.log(
            value.error instanceof Error ? value.error : Error(value.message),
            intermediate2,
          );
        });
  }
  reporter.M.listen(reporter.j, "c", function (value) {
    var intermediate3 = intermediate;
    intermediate3 = intermediate3 === void 0 ? false : intermediate3;
    value.Z.severity = value.Z["severity-unprefixed"] || value.Z.severity;
    var severity = value.Z.severity;
    (severity = severity == "fatal" || severity == "postmortem") &&
      !reporter.gb &&
      (reporter.ib && !intermediate3
        ? reporter.U.notify(value, value.Z)
        : reporter.U.notify(void 0, value.Z));
    reporter.dispatchEvent(new ErrorEvent(severity ? "a" : "b", value.error, value.Z));
  });
}
function addExperimentMetadata(reporter, values) {
  values = new ExperimentMetadata(values);
  var intermediate = values.j,
    intermediate2;
  for (intermediate2 in intermediate) {
    var intermediate3 = intermediate[intermediate2];
    intermediate3 && (reporter.o["expflag-" + intermediate2] = intermediate3.toString());
  }
  reporter.o.experimentIds = values.l.join(",");
}
function reportFatalError(reporter, error, context) {
  reporter.A = false;
  setErrorSeverity(error, "fatal");
  if (!reporter.j) {
    if (error instanceof XplatException) throw error.j;
    throw normalizeErrorWithContext(error);
  }
  reporter.j.o(error, buildReportContext(reporter, error, context));
  if (reporter.Xa) {
    context = buildReportContext(reporter, error, context);
    context.is_forceFatal = 1;
    var intermediate = error instanceof XplatException ? error.j : error;
    enrichReportContext(reporter, intermediate, context);
    error = normalizeErrorWithContext(intermediate);
    reporter = ", context:" + JSON.stringify(buildReportContext(reporter, intermediate, context));
    error.message += reporter;
    throw error;
  }
}
function reportError(reporter, error, context) {
  reporter.A = false;
  setErrorSeverity(error, "warning");
  reporter.j && reporter.j.o(error, buildReportContext(reporter, error, context));
}
ErrorReporter.prototype.info = function (value, other, options) {
  this.A = options || false;
  setErrorSeverity(value, "incident");
  this.j && this.j.o(value, buildReportContext(this, value, other));
};
ErrorReporter.prototype.log = function (value, other, options) {
  this.A = !!options;
  setErrorSeverity(value, "incident");
  this.j && this.j.o(value, buildReportContext(this, value, other));
};
function normalizeReportedEvent(event, context) {
  if (event && typeof event === "object" && event.type === "error") {
    var error = event.error;
    event = JSON.stringify({
      error: error && error.message ? error.message : "Missing error cause.",
      stack: error && error.stack ? error.stack : "Missing error cause.",
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      type: event.type,
    });
    context = Error("Unhandled " + context + " with ErrorEvent: " + event);
  } else
    context =
      typeof event === "string"
        ? Error("Unhandled " + context + " with: " + event)
        : typeof event === "number"
          ? Error("Unhandled " + context + " with number: " + event)
          : event == null
            ? Error("Unhandled " + context + ' with "null/undefined"')
            : event;
  return context;
}
function handleReportedEvent(reporter, event, context, rethrow, contextKey) {
  rethrow = rethrow === void 0 ? true : rethrow;
  event = normalizeReportedEvent(event, context);
  context = {};
  contextKey && (context[contextKey] = "true");
  rethrow ? throwAsynchronously(event) : reporter.info(event, context);
}
function buildReportContext(reporter, error, context) {
  error instanceof XplatException && (error = error.j);
  context = context ? shallowCloneObject(context) : {};
  context.severity = readErrorContext(error).severity;
  (error = error && error.reportSeverity) && (context.reportSeverity = error);
  reporter.S && (context.errorGroupId = reporter.S);
  return context;
}
function inferErrorMessage(error, context) {
  if (
    error &&
    typeof error === "object" &&
    !error.message &&
    error.constructor &&
    error.constructor instanceof Function &&
    (error.constructor.name ? error.constructor.name : getFunctionName(error.constructor)) ===
      "Object"
  ) {
    context.unknownErrorToStringResult = Object.prototype.toString.call(error);
    for (
      var JSON2 = JSON,
        stringify = JSON2.stringify,
        record = {},
        intermediate = Object.keys(error),
        index = 0,
        index2 = 0;
      index2 < intermediate.length && index < 10;
      index2++
    ) {
      var intermediate2 = intermediate[index2];
      try {
        typeof error[intermediate2] !== "function" &&
          ((record[intermediate2] = String(error[intermediate2]).substring(0, 100)), index++);
      } catch (caughtError) {}
    }
    context.unknownErrorContent = stringify.call(JSON2, record);
  }
}
function enrichReportContext(reporter, error, context, fatal) {
  var intermediate = reporter.F;
  try {
    reporter.V(error, context, fatal);
  } catch (caughtError) {
    throw (
      intermediate && !reporter.O && (reporter.J = false),
      (reporter.F = true),
      (context.provideLogDataError = caughtError.message),
      context.severity || (context.severity = "fatal"),
      normalizeErrorWithContext(caughtError)
    );
  } finally {
    if (
      ((context["severity-unprefixed"] = context.severity || "fatal"),
      (context.severity = "" + context["severity-unprefixed"]),
      !reporter.Va)
    )
      for (var intermediate2 in context)
        typeof context[intermediate2] === "number" ||
          context[intermediate2] instanceof Number ||
          typeof context[intermediate2] === "boolean" ||
          context[intermediate2] instanceof Boolean ||
          reporter.Ta.includes(intermediate2) ||
          (intermediate2 in context && delete context[intermediate2]);
  }
}
ErrorReporter.prototype.V = function (value, other, options) {
  inferErrorMessage(options || value, other);
  for (var intermediate in this.P)
    try {
      other[intermediate] = this.P[intermediate](value);
    } catch (caughtError) {}
  other.errorReportTimeMs || (other.errorReportTimeMs = Date.now().toString());
  Object.assign(other, this.o);
  if ((getLogBuffer(), 0) > 0) {
    var textLogFormatter = new TextLogFormatter(),
      intermediate2 = "";
    forEachBufferedLog(function (value2) {
      intermediate2 += formatLogRecord(textLogFormatter, value2);
    });
    other.clientLog = intermediate2;
  }
  options = other.severity || "fatal";
  (intermediate = other.reportSeverity || (value && value.reportSeverity)) &&
    (intermediate = normalizeSeverity(intermediate.toLowerCase())) &&
    (options = intermediate);
  this.cb || (options = addTelemetrySessionMetadata(this.Ua, value, options, other));
  this.da && (other.reportName = this.da + "_" + options);
  other.isArrayPrototypeIntact = isArrayPrototypeIntact().toString();
  if (!("WorkerGlobalScope" in runtimeGlobal && self instanceof runtimeGlobal.WorkerGlobalScope)) {
    try {
      var intermediate3 = !!document.getElementById("docs-editor");
    } catch (caughtError) {
      intermediate3 = false;
    }
    other.isEditorElementAttached = intermediate3.toString();
  }
  other.documentCharacterSet = document.characterSet;
  other.origin = String(runtimeGlobal.origin);
  intermediate3 = value.stack || "";
  if (intermediate3.trim().length == 0 || intermediate3 == "Not available") {
    other["stacklessError-reportingStack"] = captureStackTrace(ErrorReporter.prototype.V);
    [value.message]
      .concat(iterableToArray(Object.keys(other)), iterableToArray(Object.values(other)))
      .some(function (value2) {
        return value2 && value2.includes("<eye3");
      }) || (other.eye3Hint = "<eye3-stackless title='Stackless JS Error - " + value.name + "'/>");
  }
  this.F && !this.O
    ? ((this.J = this.A),
      options == "fatal"
        ? (options = "postmortem")
        : options == "incident" && (options = "warningafterdeath"))
    : options == "fatal" && (this.F = true);
  this.A = false;
  other.severity = options;
};
ErrorReporter.prototype.N = function () {
  errorReporterInstalled = false;
  if (this.L) {
    var intermediate = this.L,
      iterator = getIterator(intermediate.et),
      iteration = iterator.next(),
      intermediate2;
    try {
      for (; !iteration.done; iteration = iterator.next()) {
        var value = iteration.value,
          wizEventHandlers = getWizEventHandlers(intermediate.el, value);
        if (
          wizEventHandlers &&
          (removeArrayValue(wizEventHandlers, intermediate.eb), !wizEventHandlers.length)
        ) {
          var intermediate3 = intermediate.el,
            intermediate4 = trimString(intermediate3.getAttribute("jsaction") || ""),
            intermediate5 = value + ":.CLIENT";
          intermediate4 = intermediate4.replace(intermediate5 + ";", "");
          intermediate4 = intermediate4.replace(intermediate5, "");
          setJsAction(intermediate3, intermediate4);
        }
      }
    } finally {
      iteration &&
        !iteration.done &&
        (intermediate2 = iterator.return) &&
        intermediate2.call(iterator);
    }
  }
  disposeAll(this.M, this.j, this.B);
  EventTarget.prototype.N.call(this);
};
var errorReporterInstalled = false,
  errorReporterInstallStack = null;
function ErrorReporterOptions() {
  this.L = this.l = void 0;
  this.G = this.M = this.I = false;
  this.j = void 0;
  this.J = this.o = false;
  this.F = true;
  this.B = [];
  this.R = this.A = false;
  this.v = void 0;
}
function setErrorSeverity(error, severity) {
  error instanceof XplatException && (error = error.j);
  attachErrorContext(error, "severity", severity);
}
function normalizeSeverity(severity) {
  if (!severity) return null;
  switch (severity) {
    case "severe":
    case "fatal":
      return "fatal";
    case "warning":
      return "warning";
    case "info":
    case "unknown":
    case "incident":
      return "incident";
    case "postmortem":
      return "postmortem";
    case "warningafterdeath":
      return "warningafterdeath";
    default:
      return null;
  }
}
function NativePromiseResolver() {
  var instance = this;
  this.promise = new Promise(function (value, other) {
    instance.resolve = value;
    instance.reject = other;
  });
}
/**
 * 等待原生 crashReport 初始化期间暂存少量元数据；这不是文档正文数据库。
 */
function NativeCrashStorage() {
  this.o = window.crashReport;
  this.v = new NativePromiseResolver();
  this.j = 0;
  this.l = new Map();
}
NativeCrashStorage.prototype.initialize = function (value) {
  value = value === void 0 ? 10240 : value;
  var instance = this,
    iterator,
    intermediate,
    intermediate2,
    intermediate3,
    iterator2,
    intermediate4,
    intermediate5,
    intermediate6,
    intermediate7,
    intermediate8,
    intermediate9,
    intermediate10;
  return runAsyncGenerator(
    new GeneratorIterator(
      new GeneratorEngine(function (iterator3) {
        switch (iterator3.j) {
          case 1:
            if (instance.j !== 0) return iterator3.return(instance.v.promise);
            instance.j = 1;
            iterator3.O(2, 3);
            return iterator3.F(instance.o.initialize(value), 5);
          case 5:
            instance.v.resolve();
            instance.j = 2;
            iterator = getIterator(instance.l);
            intermediate = iterator.next();
            try {
              for (; !intermediate.done; intermediate = iterator.next()) {
                intermediate3 = intermediate.value;
                iterator2 = getIterator(intermediate3);
                intermediate4 = iterator2.next().value;
                intermediate5 = iterator2.next().value;
                intermediate6 = intermediate4;
                intermediate7 = intermediate5;
                intermediate8 = void 0;
                instance.set(
                  intermediate6,
                  (intermediate8 = intermediate7) != null ? intermediate8 : "",
                );
              }
            } finally {
              intermediate &&
                !intermediate.done &&
                (intermediate2 = iterator.return) &&
                intermediate2.call(iterator);
            }
          case 3:
            iterator3.M();
            instance.l.clear();
            iterator3.R(4);
            break;
          case 2:
            intermediate9 = iterator3.L();
            instance.j = 3;
            intermediate10 = Error("Failed to initialize crash storage", { cause: intermediate9 });
            intermediate10.reportSeverity = "warning";
            instance.v.reject(intermediate10);
            iterator3.ga(3);
            break;
          case 4:
            return iterator3.return(instance.v.promise);
        }
      }),
    ),
  );
};
NativeCrashStorage.prototype.Ma = function () {
  return this.j !== 0;
};
NativeCrashStorage.prototype.set = function (value, other) {
  if (this.j !== 3)
    if (this.j !== 2)
      this.l.size < 100 || this.l.has(value)
        ? this.l.set(value, other)
        : this.l.set("cache_full", "true");
    else
      try {
        this.o.set(value, other);
      } catch (caughtError) {}
};
NativeCrashStorage.prototype.delete = function (value) {
  if (this.j !== 3)
    if (this.j !== 2) this.l.delete(value);
    else
      try {
        typeof this.o.delete === "function" ? this.o.delete(value) : this.o.remove(value);
      } catch (caughtError) {}
};
function NoopCrashStorage() {
  this.j = false;
}
NoopCrashStorage.prototype.initialize = function () {
  this.j = true;
  return Promise.resolve();
};
NoopCrashStorage.prototype.Ma = createPropertyGetter("j");
NoopCrashStorage.prototype.set = createNoopFunction();
NoopCrashStorage.prototype.delete = createNoopFunction();
var crashStorage = new NoopCrashStorage();
var severeSeverityNames = ["SEVERE", "FATAL"];
function CrashTelemetryObserver() {
  this.l = this.o = 1;
  this.j = new TelemetryBootstrapMessage();
}
CrashTelemetryObserver.prototype.Oa = function (value, other) {
  var intermediate = other == null ? void 0 : other.wa.get("apps_telemetry.outgoing_severity");
  value = intermediate != null ? intermediate : value.o;
  if ((value = this.o === 1 && !!value && severeSeverityNames.includes(value.toUpperCase())))
    this.o = 2;
  other = other == null ? void 0 : other.wa.get("apps_telemetry.incoming_severity");
  if (
    (intermediate =
      this.l === 1 &&
      !!other &&
      !!intermediate &&
      other.toUpperCase() !== intermediate.toUpperCase())
  )
    this.l = 2;
  if (value || intermediate) {
    intermediate = getMutableNestedMessage(this.j, CrashMetadataMessage, 3);
    other = new CrashSeverityMessage();
    other = setNumberField(other, 1, this.o);
    other = setNumberField(other, 2, this.l);
    setNestedMessage(intermediate, CrashSeverityMessage, 5, other);
    persistCrashTelemetry(this);
  }
};
CrashTelemetryObserver.prototype.qa = function (value) {
  a: {
    var mutableNestedMessage = getMutableNestedMessage(this.j, CrashClientStateMessage, 1);
    var crashStateOneofFields2 = crashStateOneofFields;
    assertMessageMutable(mutableNestedMessage);
    if (void 0 === nestedFieldModeToken) {
      if (getActiveOneofField(mutableNestedMessage, crashStateOneofFields2, 4) !== 4) {
        mutableNestedMessage = void 0;
        break a;
      }
    } else setOneofCase(mutableNestedMessage.C, void 0, crashStateOneofFields2, 4);
    mutableNestedMessage = getMutableNestedMessage(
      mutableNestedMessage,
      CrashClassificationMessage,
      4,
    );
  }
  mutableNestedMessage.qa(value);
  persistCrashTelemetry(this);
};
function persistCrashTelemetry(observer) {
  var crashStorage2 = crashStorage,
    set = crashStorage2.set;
  observer = JSON.stringify(serializeMessage(observer.j));
  set.call(crashStorage2, "appsTelemetryCrashReportData", observer);
}
function createCrashTelemetryProcessor(options) {
  options = options === void 0 ? {} : options;
  if (!crashStorage.Ma()) {
    try {
      var booleanFeatureFlag = readBooleanFeatureFlag(crashStorageFlag);
    } catch (caughtError) {
      booleanFeatureFlag = false;
    }
    crashStorage =
      booleanFeatureFlag && window.crashReport ? new NativeCrashStorage() : new NoopCrashStorage();
    crashStorage.initialize();
  }
  return createTelemetryProcessor(options, new CrashTelemetryObserver());
}
function FetchXmlHttpRequest(fetchScope, streamBinaryChunks) {
  EventTarget.call(this);
  this.V = fetchScope;
  this.O = streamBinaryChunks;
  this.L = void 0;
  this.status = this.readyState = 0;
  this.responseType = this.v = this.o = this.statusText = "";
  this.onreadystatechange = null;
  this.M = new Headers();
  this.A = null;
  this.S = "GET";
  this.U = "";
  this.j = false;
  this.P = this.B = this.F = null;
  this.J = new AbortController();
}
inheritClosureClass(FetchXmlHttpRequest, EventTarget);
prototypeAlias = FetchXmlHttpRequest.prototype;
prototypeAlias.open = function (value, other) {
  if (this.readyState != 0) throw (this.abort(), Error("Error reopening a connection"));
  this.S = value;
  this.U = other;
  this.readyState = 1;
  notifyReadyStateChange(this);
};
prototypeAlias.send = function (value) {
  if (this.readyState != 1) throw (this.abort(), Error("need to call open() first. "));
  if (this.J.signal.aborted) throw (this.abort(), Error("Request was aborted."));
  this.j = true;
  var record = {
    headers: this.M,
    method: this.S,
    credentials: this.L,
    cache: void 0,
    signal: this.J.signal,
  };
  value && (record.body = value);
  (this.V || runtimeGlobal)
    .fetch(new Request(this.U, record))
    .then(this.ob.bind(this), this.ma.bind(this));
};
prototypeAlias.abort = function () {
  this.o = this.v = "";
  this.M = new Headers();
  this.status = 0;
  this.J.abort("Request was aborted.");
  this.B && this.B.cancel("Request was aborted.").catch(createNoopFunction());
  this.readyState >= 1 &&
    this.j &&
    this.readyState != 4 &&
    ((this.j = false), completeFetchRequest(this));
  this.readyState = 0;
};
prototypeAlias.ob = function (value) {
  if (
    this.j &&
    ((this.F = value),
    this.A ||
      ((this.status = this.F.status),
      (this.statusText = this.F.statusText),
      (this.A = value.headers),
      (this.readyState = 2),
      notifyReadyStateChange(this)),
    this.j && ((this.readyState = 3), notifyReadyStateChange(this), this.j))
  )
    if (this.responseType === "arraybuffer")
      value.arrayBuffer().then(this.mb.bind(this), this.ma.bind(this));
    else if (value.body && runtimeGlobal.ReadableStream) {
      this.B = value.body.getReader();
      if (this.O) {
        if (this.responseType)
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.o = [];
      } else {
        this.o = this.v = "";
        this.P = new TextDecoder();
      }
      readNextResponseChunk(this);
    } else value.text().then(this.nb.bind(this), this.ma.bind(this));
};
function readNextResponseChunk(request) {
  request.B.read().then(request.lb.bind(request)).catch(request.ma.bind(request));
}
prototypeAlias.lb = function (value) {
  if (this.j) {
    if (this.O && value.value) this.o.push(value.value);
    else if (!this.O) {
      var intermediate = value.value ? value.value : new Uint8Array(0);
      if ((intermediate = this.P.decode(intermediate, { stream: !value.done })))
        this.o = this.v += intermediate;
    }
    value.done ? completeFetchRequest(this) : notifyReadyStateChange(this);
    this.readyState == 3 && readNextResponseChunk(this);
  }
};
prototypeAlias.nb = function (value) {
  this.j && ((this.o = this.v = value), completeFetchRequest(this));
};
prototypeAlias.mb = function (value) {
  this.j && ((this.o = value), completeFetchRequest(this));
};
prototypeAlias.ma = function () {
  this.j && completeFetchRequest(this);
};
function completeFetchRequest(request) {
  request.readyState = 4;
  request.F = null;
  request.B = null;
  request.P = null;
  notifyReadyStateChange(request);
}
prototypeAlias.setRequestHeader = function (value, other) {
  this.M.append(value, other);
};
prototypeAlias.getResponseHeader = function (value) {
  return this.A ? this.A.get(value.toLowerCase()) || "" : "";
};
prototypeAlias.getAllResponseHeaders = function () {
  if (!this.A) return "";
  for (
    var values = [], iterator = this.A.entries(), iteration = iterator.next();
    !iteration.done;

  ) {
    iteration = iteration.value;
    values.push(iteration[0] + ": " + iteration[1]);
    iteration = iterator.next();
  }
  return values.join("\r\n");
};
function notifyReadyStateChange(request) {
  request.onreadystatechange && request.onreadystatechange.call(request);
}
Object.defineProperty(FetchXmlHttpRequest.prototype, "withCredentials", {
  get: function () {
    return this.L === "include";
  },
  set: function (value) {
    this.L = value ? "include" : "same-origin";
  },
});
/**
 * 扩展专用运行库：采样日志、跨上下文数组消息和控制台输出。
 * 保留字段 ABI：j=ErrorReporter，l=错误采样命中，o=信息采样命中。
 */
function SampledLogger(samplePercentage) {
  this.j = null;
  this.l = samplePercentage < 1;
  this.o = samplePercentage < 0.01;
}
/**
 * 采样阈值来自原实现（0.01），不是按百分数再除以 100；保持调用条件与上下文字段。
 */
function logSampledInfo(logger, error) {
  var intermediate = intermediate === void 0 ? {} : intermediate;
  logger.o &&
    ((intermediate.sampling_samplePercentage = (0.01).toString()),
    logger.j.info(error, intermediate));
}
/**
 * 采样阈值来自原实现（1）；报告通道是 telemetry，不是文档上传通道。
 */
function logSampledError(logger, error, context) {
  context = context === void 0 ? {} : context;
  logger.l &&
    ((context.sampling_samplePercentage = (1).toString()), reportError(logger.j, error, context));
}
function ErrorMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(ErrorMessage, ArrayMessage);
ErrorMessage.prototype.getMessage = function () {
  return readStringOrDefault(this, 1);
};
function FrameConnectionMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(FrameConnectionMessage, ArrayMessage);
function createTimestampedFrameConnection() {
  var frameConnectionMessage = new FrameConnectionMessage();
  return setStringField(frameConnectionMessage, 2, Date.now().toString());
}
function FrameRequestMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(FrameRequestMessage, ArrayMessage);
function UserChangeMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(UserChangeMessage, ArrayMessage);
function WebsiteRequestMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(WebsiteRequestMessage, ArrayMessage);
var parseWebsiteRequest = createMessageJsonParser(WebsiteRequestMessage);
function FrameResponseMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(FrameResponseMessage, ArrayMessage);
function WebsiteResponseMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(WebsiteResponseMessage, ArrayMessage);
function setWebsiteResponseType(message, type) {
  return setNumberField(message, 1, type);
}
WebsiteResponseMessage.prototype.xa = function () {
  return readNestedMessage(this, ErrorMessage, 5);
};
function OffscreenResponseMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(OffscreenResponseMessage, ArrayMessage);
function setOffscreenResponseType(message, type) {
  return setNumberField(message, 1, type);
}
OffscreenResponseMessage.prototype.xa = function () {
  return readNestedMessage(this, ErrorMessage, 3);
};

/**
 * URL 包装沿用原 Trusted Types 分支，不额外扩大可嵌入来源。
 */
function createTrustedFrameUrl(url) {
  url = url === null ? "null" : url === void 0 ? "undefined" : url;
  var intermediate;
  trustedTypesPolicy === void 0 && (trustedTypesPolicy = createTrustedTypesPolicy());
  url = (intermediate = trustedTypesPolicy) ? intermediate.createScriptURL(url) : url;
  return new TrustedScriptUrl(url);
}
function FrameConfigurationMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(FrameConfigurationMessage, ArrayMessage);
function OffscreenRequestMessage(array) {
  this.C = initializeMessageArray(array);
}
inheritCompiledClass(OffscreenRequestMessage, ArrayMessage);
function createOffscreenRequest(type) {
  var offscreenRequestMessage = new OffscreenRequestMessage();
  return setNumberField(offscreenRequestMessage, 1, type);
}
function createFrameConnectedRequest(connection) {
  var offscreenRequest = createOffscreenRequest(3);
  return setNestedMessage(offscreenRequest, FrameConnectionMessage, 4, connection);
}
function setUserChange(message, change) {
  return setNestedMessage(message, UserChangeMessage, 6, change);
}
function ConsoleLogger() {
  bindFunction(this.o, this);
  this.j = new TextLogFormatter();
  this.j.l = false;
  this.j.o = false;
  this.l = this.j.j = false;
  this.v = {};
}
function enableConsoleLogger(logger) {
  1 != logger.l && (logger.l = true);
}
ConsoleLogger.prototype.o = function (value) {
  function helper(helper2) {
    if (helper2) {
      if (helper2.value >= SEVERE_LOG_LEVEL.value) return "error";
      if (helper2.value >= WARNING_LOG_LEVEL.value) return "warn";
      if (helper2.value >= CONFIG_LOG_LEVEL.value) return "log";
    }
    return "debug";
  }
  if (!this.v[value.l()]) {
    var intermediate = formatLogRecord(this.j, value),
      runtimeConsole2 = runtimeConsole;
    if (runtimeConsole2) {
      var intermediate2 = helper(value.v());
      writeConsoleLog(runtimeConsole2, intermediate2, intermediate, value.j());
    }
  }
};
var runtimeConsole = runtimeGlobal.console;
function writeConsoleLog(consoleObject, method, message, context) {
  if (consoleObject[method]) consoleObject[method](message, context === void 0 ? "" : context);
  else consoleObject.log(message, context === void 0 ? "" : context);
}
export {
  Disposable,
  createDeferred,
  resolvedLegacyPromise,
  raceLegacyPromises,
  normalizeError,
  attachErrorContext,
  ownDisposable,
  MutableUrl,
  setUrlPath,
  EventHandler,
  createSessionId,
  schedule,
  waitForFrameTimeout,
  flushBufferedLogs,
  createDomElement,
  setTrustedIframeSource,
  createTrustedFrameUrl,
  SampledLogger,
  logSampledInfo,
  logSampledError,
  ErrorMessage,
  FrameConnectionMessage,
  FrameRequestMessage,
  UserChangeMessage,
  WebsiteRequestMessage,
  parseWebsiteRequest,
  FrameResponseMessage,
  WebsiteResponseMessage,
  OffscreenResponseMessage,
  FrameConfigurationMessage,
  OffscreenRequestMessage,
  serializeMessage,
  readNestedMessage,
  getMessageField,
  coerceInt32,
  coerceString,
  preserveNullFieldToken,
  readStringField,
  readStringOrDefault,
  readNumberField,
  setStringField,
  setNumberField,
  setNestedMessage,
  ErrorReporterOptions,
  ErrorReporter,
  getFlagService,
  createCrashTelemetryProcessor,
  reportError,
  ConsoleLogger,
  enableConsoleLogger,
};
