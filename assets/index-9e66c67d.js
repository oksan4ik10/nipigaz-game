(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const s = {};
    return (
      l.integrity && (s.integrity = l.integrity),
      l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const s = n(l);
    fetch(l.href, s);
  }
})();
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var d8 = { exports: {} },
  D4 = {},
  C8 = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gt = Symbol.for("react.element"),
  hl = Symbol.for("react.portal"),
  ml = Symbol.for("react.fragment"),
  vl = Symbol.for("react.strict_mode"),
  yl = Symbol.for("react.profiler"),
  gl = Symbol.for("react.provider"),
  xl = Symbol.for("react.context"),
  wl = Symbol.for("react.forward_ref"),
  kl = Symbol.for("react.suspense"),
  jl = Symbol.for("react.memo"),
  Ml = Symbol.for("react.lazy"),
  _6 = Symbol.iterator;
function Ll(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_6 && e[_6]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var p8 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  h8 = Object.assign,
  m8 = {};
function j3(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = m8),
    (this.updater = n || p8);
}
j3.prototype.isReactComponent = {};
j3.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
j3.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function v8() {}
v8.prototype = j3.prototype;
function fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = m8),
    (this.updater = n || p8);
}
var dr = (fr.prototype = new v8());
dr.constructor = fr;
h8(dr, j3.prototype);
dr.isPureReactComponent = !0;
var Z6 = Array.isArray,
  y8 = Object.prototype.hasOwnProperty,
  Cr = { current: null },
  g8 = { key: !0, ref: !0, __self: !0, __source: !0 };
function x8(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      y8.call(t, r) && !g8.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: gt,
    type: e,
    key: s,
    ref: o,
    props: l,
    _owner: Cr.current,
  };
}
function Sl(e, t) {
  return {
    $$typeof: gt,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function pr(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gt;
}
function Al(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var E6 = /\/+/g;
function Ln(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Al("" + e.key)
    : t.toString(36);
}
function Ht(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gt:
          case hl:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ln(o, 0) : r),
      Z6(l)
        ? ((n = ""),
          e != null && (n = e.replace(E6, "$&/") + "/"),
          Ht(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (pr(l) &&
            (l = Sl(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(E6, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Z6(e)))
    for (var u = 0; u < e.length; u++) {
      s = e[u];
      var a = r + Ln(s, u);
      o += Ht(s, t, n, a, l);
    }
  else if (((a = Ll(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Ln(s, u++)), (o += Ht(s, t, n, a, l));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function St(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ht(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function _l(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var D1 = { current: null },
  Yt = { transition: null },
  Zl = {
    ReactCurrentDispatcher: D1,
    ReactCurrentBatchConfig: Yt,
    ReactCurrentOwner: Cr,
  };
Y.Children = {
  map: St,
  forEach: function (e, t, n) {
    St(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      St(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      St(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!pr(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = j3;
Y.Fragment = ml;
Y.Profiler = yl;
Y.PureComponent = fr;
Y.StrictMode = vl;
Y.Suspense = kl;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zl;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = h8({}, e.props),
    l = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Cr.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      y8.call(t, a) &&
        !g8.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: gt, type: e.type, key: l, ref: s, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: xl,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gl, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = x8;
Y.createFactory = function (e) {
  var t = x8.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: wl, render: e };
};
Y.isValidElement = pr;
Y.lazy = function (e) {
  return { $$typeof: Ml, _payload: { _status: -1, _result: e }, _init: _l };
};
Y.memo = function (e, t) {
  return { $$typeof: jl, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Yt.transition;
  Yt.transition = {};
  try {
    e();
  } finally {
    Yt.transition = t;
  }
};
Y.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Y.useCallback = function (e, t) {
  return D1.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return D1.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return D1.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return D1.current.useEffect(e, t);
};
Y.useId = function () {
  return D1.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return D1.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return D1.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return D1.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return D1.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return D1.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return D1.current.useRef(e);
};
Y.useState = function (e) {
  return D1.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return D1.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return D1.current.useTransition();
};
Y.version = "18.2.0";
C8.exports = Y;
var R = C8.exports;
const ze = pl(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var El = R,
  Nl = Symbol.for("react.element"),
  Tl = Symbol.for("react.fragment"),
  Pl = Object.prototype.hasOwnProperty,
  Ol = El.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rl = { key: !0, ref: !0, __self: !0, __source: !0 };
function w8(e, t, n) {
  var r,
    l = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Pl.call(t, r) && !Rl.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Nl,
    type: e,
    key: s,
    ref: o,
    props: l,
    _owner: Ol.current,
  };
}
D4.Fragment = Tl;
D4.jsx = w8;
D4.jsxs = w8;
d8.exports = D4;
var i = d8.exports,
  d5 = {},
  k8 = { exports: {} },
  J1 = {},
  j8 = { exports: {} },
  M8 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, D) {
    var H = N.length;
    N.push(D);
    e: for (; 0 < H; ) {
      var l1 = (H - 1) >>> 1,
        C1 = N[l1];
      if (0 < l(C1, D)) (N[l1] = D), (N[H] = C1), (H = l1);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var D = N[0],
      H = N.pop();
    if (H !== D) {
      N[0] = H;
      e: for (var l1 = 0, C1 = N.length, B2 = C1 >>> 1; l1 < B2; ) {
        var we = 2 * (l1 + 1) - 1,
          _3 = N[we],
          fe = we + 1,
          He = N[fe];
        if (0 > l(_3, H))
          fe < C1 && 0 > l(He, _3)
            ? ((N[l1] = He), (N[fe] = H), (l1 = fe))
            : ((N[l1] = _3), (N[we] = H), (l1 = we));
        else if (fe < C1 && 0 > l(He, H)) (N[l1] = He), (N[fe] = H), (l1 = fe);
        else break e;
      }
    }
    return D;
  }
  function l(N, D) {
    var H = N.sortIndex - D.sortIndex;
    return H !== 0 ? H : N.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    c = [],
    p = 1,
    f = null,
    C = 3,
    v = !1,
    g = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= N)
        r(c), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(c);
    }
  }
  function x(N) {
    if (((w = !1), h(N), !g))
      if (n(a) !== null) (g = !0), X(S);
      else {
        var D = n(c);
        D !== null && G(x, D.startTime - N);
      }
  }
  function S(N, D) {
    (g = !1), w && ((w = !1), m(M), (M = -1)), (v = !0);
    var H = C;
    try {
      for (
        h(D), f = n(a);
        f !== null && (!(f.expirationTime > D) || (N && !E()));

      ) {
        var l1 = f.callback;
        if (typeof l1 == "function") {
          (f.callback = null), (C = f.priorityLevel);
          var C1 = l1(f.expirationTime <= D);
          (D = e.unstable_now()),
            typeof C1 == "function" ? (f.callback = C1) : f === n(a) && r(a),
            h(D);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var B2 = !0;
      else {
        var we = n(c);
        we !== null && G(x, we.startTime - D), (B2 = !1);
      }
      return B2;
    } finally {
      (f = null), (C = H), (v = !1);
    }
  }
  var L = !1,
    _ = null,
    M = -1,
    k = 5,
    j = -1;
  function E() {
    return !(e.unstable_now() - j < k);
  }
  function O() {
    if (_ !== null) {
      var N = e.unstable_now();
      j = N;
      var D = !0;
      try {
        D = _(!0, N);
      } finally {
        D ? F() : ((L = !1), (_ = null));
      }
    } else L = !1;
  }
  var F;
  if (typeof d == "function")
    F = function () {
      d(O);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      B = I.port2;
    (I.port1.onmessage = O),
      (F = function () {
        B.postMessage(null);
      });
  } else
    F = function () {
      P(O, 0);
    };
  function X(N) {
    (_ = N), L || ((L = !0), F());
  }
  function G(N, D) {
    M = P(function () {
      N(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), X(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (k = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return C;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = C;
      }
      var H = C;
      C = D;
      try {
        return N();
      } finally {
        C = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, D) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var H = C;
      C = N;
      try {
        return D();
      } finally {
        C = H;
      }
    }),
    (e.unstable_scheduleCallback = function (N, D, H) {
      var l1 = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? l1 + H : l1))
          : (H = l1),
        N)
      ) {
        case 1:
          var C1 = -1;
          break;
        case 2:
          C1 = 250;
          break;
        case 5:
          C1 = 1073741823;
          break;
        case 4:
          C1 = 1e4;
          break;
        default:
          C1 = 5e3;
      }
      return (
        (C1 = H + C1),
        (N = {
          id: p++,
          callback: D,
          priorityLevel: N,
          startTime: H,
          expirationTime: C1,
          sortIndex: -1,
        }),
        H > l1
          ? ((N.sortIndex = H),
            t(c, N),
            n(a) === null &&
              N === n(c) &&
              (w ? (m(M), (M = -1)) : (w = !0), G(x, H - l1)))
          : ((N.sortIndex = C1), t(a, N), g || v || ((g = !0), X(S))),
        N
      );
    }),
    (e.unstable_shouldYield = E),
    (e.unstable_wrapCallback = function (N) {
      var D = C;
      return function () {
        var H = C;
        C = D;
        try {
          return N.apply(this, arguments);
        } finally {
          C = H;
        }
      };
    });
})(M8);
j8.exports = M8;
var zl = j8.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L8 = R,
  q1 = zl;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var S8 = new Set(),
  J3 = {};
function U2(e, t) {
  p3(e, t), p3(e + "Capture", t);
}
function p3(e, t) {
  for (J3[e] = t, e = 0; e < t.length; e++) S8.add(t[e]);
}
var Ue = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  C5 = Object.prototype.hasOwnProperty,
  Il =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  N6 = {},
  T6 = {};
function Dl(e) {
  return C5.call(T6, e)
    ? !0
    : C5.call(N6, e)
    ? !1
    : Il.test(e)
    ? (T6[e] = !0)
    : ((N6[e] = !0), !1);
}
function Fl(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ul(e, t, n, r) {
  if (t === null || typeof t > "u" || Fl(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function F1(e, t, n, r, l, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Z1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Z1[e] = new F1(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Z1[t] = new F1(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Z1[e] = new F1(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Z1[e] = new F1(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Z1[e] = new F1(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Z1[e] = new F1(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Z1[e] = new F1(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Z1[e] = new F1(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Z1[e] = new F1(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hr = /[\-:]([a-z])/g;
function mr(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hr, mr);
    Z1[t] = new F1(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hr, mr);
    Z1[t] = new F1(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hr, mr);
  Z1[t] = new F1(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Z1[e] = new F1(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Z1.xlinkHref = new F1(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Z1[e] = new F1(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vr(e, t, n, r) {
  var l = Z1.hasOwnProperty(t) ? Z1[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ul(t, n, l, r) && (n = null),
    r || l === null
      ? Dl(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qe = L8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  At = Symbol.for("react.element"),
  H2 = Symbol.for("react.portal"),
  Y2 = Symbol.for("react.fragment"),
  yr = Symbol.for("react.strict_mode"),
  p5 = Symbol.for("react.profiler"),
  A8 = Symbol.for("react.provider"),
  _8 = Symbol.for("react.context"),
  gr = Symbol.for("react.forward_ref"),
  h5 = Symbol.for("react.suspense"),
  m5 = Symbol.for("react.suspense_list"),
  xr = Symbol.for("react.memo"),
  Ge = Symbol.for("react.lazy"),
  Z8 = Symbol.for("react.offscreen"),
  P6 = Symbol.iterator;
function Z3(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (P6 && e[P6]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var c1 = Object.assign,
  Sn;
function F3(e) {
  if (Sn === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sn = (t && t[1]) || "";
    }
  return (
    `
` +
    Sn +
    e
  );
}
var An = !1;
function _n(e, t) {
  if (!e || An) return "";
  An = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = l.length - 1,
          u = s.length - 1;
        1 <= o && 0 <= u && l[o] !== s[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== s[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== s[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (An = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? F3(e) : "";
}
function Vl(e) {
  switch (e.tag) {
    case 5:
      return F3(e.type);
    case 16:
      return F3("Lazy");
    case 13:
      return F3("Suspense");
    case 19:
      return F3("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _n(e.type, !1)), e;
    case 11:
      return (e = _n(e.type.render, !1)), e;
    case 1:
      return (e = _n(e.type, !0)), e;
    default:
      return "";
  }
}
function v5(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Y2:
      return "Fragment";
    case H2:
      return "Portal";
    case p5:
      return "Profiler";
    case yr:
      return "StrictMode";
    case h5:
      return "Suspense";
    case m5:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _8:
        return (e.displayName || "Context") + ".Consumer";
      case A8:
        return (e._context.displayName || "Context") + ".Provider";
      case gr:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xr:
        return (
          (t = e.displayName || null), t !== null ? t : v5(e.type) || "Memo"
        );
      case Ge:
        (t = e._payload), (e = e._init);
        try {
          return v5(e(t));
        } catch {}
    }
  return null;
}
function Bl(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return v5(t);
    case 8:
      return t === yr ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function C2(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function E8(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $l(e) {
  var t = E8(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _t(e) {
  e._valueTracker || (e._valueTracker = $l(e));
}
function N8(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = E8(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function s4(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function y5(e, t) {
  var n = t.checked;
  return c1({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function O6(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = C2(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function T8(e, t) {
  (t = t.checked), t != null && vr(e, "checked", t, !1);
}
function g5(e, t) {
  T8(e, t);
  var n = C2(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? x5(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && x5(e, t.type, C2(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function R6(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function x5(e, t, n) {
  (t !== "number" || s4(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var U3 = Array.isArray;
function s3(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + C2(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function w5(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return c1({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function z6(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (U3(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: C2(n) };
}
function P8(e, t) {
  var n = C2(t.value),
    r = C2(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function I6(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function O8(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function k5(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? O8(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Zt,
  R8 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Zt = Zt || document.createElement("div"),
          Zt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zt.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function et(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var W3 = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Wl = ["Webkit", "ms", "Moz", "O"];
Object.keys(W3).forEach(function (e) {
  Wl.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (W3[t] = W3[e]);
  });
});
function z8(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (W3.hasOwnProperty(e) && W3[e])
    ? ("" + t).trim()
    : t + "px";
}
function I8(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = z8(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ql = c1(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function j5(e, t) {
  if (t) {
    if (Ql[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function M5(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var L5 = null;
function wr(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var S5 = null,
  i3 = null,
  o3 = null;
function D6(e) {
  if ((e = kt(e))) {
    if (typeof S5 != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = $4(t)), S5(e.stateNode, e.type, t));
  }
}
function D8(e) {
  i3 ? (o3 ? o3.push(e) : (o3 = [e])) : (i3 = e);
}
function F8() {
  if (i3) {
    var e = i3,
      t = o3;
    if (((o3 = i3 = null), D6(e), t)) for (e = 0; e < t.length; e++) D6(t[e]);
  }
}
function U8(e, t) {
  return e(t);
}
function V8() {}
var Zn = !1;
function B8(e, t, n) {
  if (Zn) return e(t, n);
  Zn = !0;
  try {
    return U8(e, t, n);
  } finally {
    (Zn = !1), (i3 !== null || o3 !== null) && (V8(), F8());
  }
}
function tt(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $4(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var A5 = !1;
if (Ue)
  try {
    var E3 = {};
    Object.defineProperty(E3, "passive", {
      get: function () {
        A5 = !0;
      },
    }),
      window.addEventListener("test", E3, E3),
      window.removeEventListener("test", E3, E3);
  } catch {
    A5 = !1;
  }
function Hl(e, t, n, r, l, s, o, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Q3 = !1,
  i4 = null,
  o4 = !1,
  _5 = null,
  Yl = {
    onError: function (e) {
      (Q3 = !0), (i4 = e);
    },
  };
function Xl(e, t, n, r, l, s, o, u, a) {
  (Q3 = !1), (i4 = null), Hl.apply(Yl, arguments);
}
function Gl(e, t, n, r, l, s, o, u, a) {
  if ((Xl.apply(this, arguments), Q3)) {
    if (Q3) {
      var c = i4;
      (Q3 = !1), (i4 = null);
    } else throw Error(T(198));
    o4 || ((o4 = !0), (_5 = c));
  }
}
function V2(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $8(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function F6(e) {
  if (V2(e) !== e) throw Error(T(188));
}
function Kl(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = V2(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var s = l.alternate;
    if (s === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === s.child) {
      for (s = l.child; s; ) {
        if (s === n) return F6(l), e;
        if (s === r) return F6(l), t;
        s = s.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = l), (r = s);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = s);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = s);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = s.child; u; ) {
          if (u === n) {
            (o = !0), (n = s), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = s), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function W8(e) {
  return (e = Kl(e)), e !== null ? Q8(e) : null;
}
function Q8(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Q8(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var H8 = q1.unstable_scheduleCallback,
  U6 = q1.unstable_cancelCallback,
  ql = q1.unstable_shouldYield,
  bl = q1.unstable_requestPaint,
  h1 = q1.unstable_now,
  Jl = q1.unstable_getCurrentPriorityLevel,
  kr = q1.unstable_ImmediatePriority,
  Y8 = q1.unstable_UserBlockingPriority,
  u4 = q1.unstable_NormalPriority,
  es = q1.unstable_LowPriority,
  X8 = q1.unstable_IdlePriority,
  F4 = null,
  _e = null;
function ts(e) {
  if (_e && typeof _e.onCommitFiberRoot == "function")
    try {
      _e.onCommitFiberRoot(F4, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ye = Math.clz32 ? Math.clz32 : ls,
  ns = Math.log,
  rs = Math.LN2;
function ls(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ns(e) / rs) | 0)) | 0;
}
var Et = 64,
  Nt = 4194304;
function V3(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function a4(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = V3(u)) : ((s &= o), s !== 0 && (r = V3(s)));
  } else (o = n & ~l), o !== 0 ? (r = V3(o)) : s !== 0 && (r = V3(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ye(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ss(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function is(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - ye(s),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = ss(u, t))
      : a <= t && (e.expiredLanes |= u),
      (s &= ~u);
  }
}
function Z5(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function G8() {
  var e = Et;
  return (Et <<= 1), !(Et & 4194240) && (Et = 64), e;
}
function En(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xt(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ye(t)),
    (e[t] = n);
}
function os(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ye(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function jr(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ye(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var b = 0;
function K8(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var q8,
  Mr,
  b8,
  J8,
  e0,
  E5 = !1,
  Tt = [],
  r2 = null,
  l2 = null,
  s2 = null,
  nt = new Map(),
  rt = new Map(),
  qe = [],
  us =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function V6(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      r2 = null;
      break;
    case "dragenter":
    case "dragleave":
      l2 = null;
      break;
    case "mouseover":
    case "mouseout":
      s2 = null;
      break;
    case "pointerover":
    case "pointerout":
      nt.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rt.delete(t.pointerId);
  }
}
function N3(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = kt(t)), t !== null && Mr(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function as(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (r2 = N3(r2, e, t, n, r, l)), !0;
    case "dragenter":
      return (l2 = N3(l2, e, t, n, r, l)), !0;
    case "mouseover":
      return (s2 = N3(s2, e, t, n, r, l)), !0;
    case "pointerover":
      var s = l.pointerId;
      return nt.set(s, N3(nt.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (s = l.pointerId), rt.set(s, N3(rt.get(s) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function t0(e) {
  var t = A2(e.target);
  if (t !== null) {
    var n = V2(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $8(n)), t !== null)) {
          (e.blockedOn = t),
            e0(e.priority, function () {
              b8(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xt(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = N5(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (L5 = r), n.target.dispatchEvent(r), (L5 = null);
    } else return (t = kt(n)), t !== null && Mr(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function B6(e, t, n) {
  Xt(e) && n.delete(t);
}
function cs() {
  (E5 = !1),
    r2 !== null && Xt(r2) && (r2 = null),
    l2 !== null && Xt(l2) && (l2 = null),
    s2 !== null && Xt(s2) && (s2 = null),
    nt.forEach(B6),
    rt.forEach(B6);
}
function T3(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    E5 ||
      ((E5 = !0),
      q1.unstable_scheduleCallback(q1.unstable_NormalPriority, cs)));
}
function lt(e) {
  function t(l) {
    return T3(l, e);
  }
  if (0 < Tt.length) {
    T3(Tt[0], e);
    for (var n = 1; n < Tt.length; n++) {
      var r = Tt[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    r2 !== null && T3(r2, e),
      l2 !== null && T3(l2, e),
      s2 !== null && T3(s2, e),
      nt.forEach(t),
      rt.forEach(t),
      n = 0;
    n < qe.length;
    n++
  )
    (r = qe[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((n = qe[0]), n.blockedOn === null); )
    t0(n), n.blockedOn === null && qe.shift();
}
var u3 = Qe.ReactCurrentBatchConfig,
  c4 = !0;
function fs(e, t, n, r) {
  var l = b,
    s = u3.transition;
  u3.transition = null;
  try {
    (b = 1), Lr(e, t, n, r);
  } finally {
    (b = l), (u3.transition = s);
  }
}
function ds(e, t, n, r) {
  var l = b,
    s = u3.transition;
  u3.transition = null;
  try {
    (b = 4), Lr(e, t, n, r);
  } finally {
    (b = l), (u3.transition = s);
  }
}
function Lr(e, t, n, r) {
  if (c4) {
    var l = N5(e, t, n, r);
    if (l === null) Un(e, t, r, f4, n), V6(e, r);
    else if (as(l, e, t, n, r)) r.stopPropagation();
    else if ((V6(e, r), t & 4 && -1 < us.indexOf(e))) {
      for (; l !== null; ) {
        var s = kt(l);
        if (
          (s !== null && q8(s),
          (s = N5(e, t, n, r)),
          s === null && Un(e, t, r, f4, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else Un(e, t, r, null, n);
  }
}
var f4 = null;
function N5(e, t, n, r) {
  if (((f4 = null), (e = wr(r)), (e = A2(e)), e !== null))
    if (((t = V2(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $8(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (f4 = e), null;
}
function n0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jl()) {
        case kr:
          return 1;
        case Y8:
          return 4;
        case u4:
        case es:
          return 16;
        case X8:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var e2 = null,
  Sr = null,
  Gt = null;
function r0() {
  if (Gt) return Gt;
  var e,
    t = Sr,
    n = t.length,
    r,
    l = "value" in e2 ? e2.value : e2.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[s - r]; r++);
  return (Gt = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Kt(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pt() {
  return !0;
}
function $6() {
  return !1;
}
function ee(e) {
  function t(n, r, l, s, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(s) : s[u]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Pt
        : $6),
      (this.isPropagationStopped = $6),
      this
    );
  }
  return (
    c1(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pt));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pt));
      },
      persist: function () {},
      isPersistent: Pt,
    }),
    t
  );
}
var M3 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ar = ee(M3),
  wt = c1({}, M3, { view: 0, detail: 0 }),
  Cs = ee(wt),
  Nn,
  Tn,
  P3,
  U4 = c1({}, wt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _r,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== P3 &&
            (P3 && e.type === "mousemove"
              ? ((Nn = e.screenX - P3.screenX), (Tn = e.screenY - P3.screenY))
              : (Tn = Nn = 0),
            (P3 = e)),
          Nn);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tn;
    },
  }),
  W6 = ee(U4),
  ps = c1({}, U4, { dataTransfer: 0 }),
  hs = ee(ps),
  ms = c1({}, wt, { relatedTarget: 0 }),
  Pn = ee(ms),
  vs = c1({}, M3, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ys = ee(vs),
  gs = c1({}, M3, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xs = ee(gs),
  ws = c1({}, M3, { data: 0 }),
  Q6 = ee(ws),
  ks = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  js = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ms = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ls(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ms[e]) ? !!t[e] : !1;
}
function _r() {
  return Ls;
}
var Ss = c1({}, wt, {
    key: function (e) {
      if (e.key) {
        var t = ks[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Kt(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? js[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _r,
    charCode: function (e) {
      return e.type === "keypress" ? Kt(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Kt(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  As = ee(Ss),
  _s = c1({}, U4, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  H6 = ee(_s),
  Zs = c1({}, wt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _r,
  }),
  Es = ee(Zs),
  Ns = c1({}, M3, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ts = ee(Ns),
  Ps = c1({}, U4, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Os = ee(Ps),
  Rs = [9, 13, 27, 32],
  Zr = Ue && "CompositionEvent" in window,
  H3 = null;
Ue && "documentMode" in document && (H3 = document.documentMode);
var zs = Ue && "TextEvent" in window && !H3,
  l0 = Ue && (!Zr || (H3 && 8 < H3 && 11 >= H3)),
  Y6 = String.fromCharCode(32),
  X6 = !1;
function s0(e, t) {
  switch (e) {
    case "keyup":
      return Rs.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function i0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var X2 = !1;
function Is(e, t) {
  switch (e) {
    case "compositionend":
      return i0(t);
    case "keypress":
      return t.which !== 32 ? null : ((X6 = !0), Y6);
    case "textInput":
      return (e = t.data), e === Y6 && X6 ? null : e;
    default:
      return null;
  }
}
function Ds(e, t) {
  if (X2)
    return e === "compositionend" || (!Zr && s0(e, t))
      ? ((e = r0()), (Gt = Sr = e2 = null), (X2 = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return l0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fs = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function G6(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fs[e.type] : t === "textarea";
}
function o0(e, t, n, r) {
  D8(r),
    (t = d4(t, "onChange")),
    0 < t.length &&
      ((n = new Ar("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Y3 = null,
  st = null;
function Us(e) {
  y0(e, 0);
}
function V4(e) {
  var t = q2(e);
  if (N8(t)) return e;
}
function Vs(e, t) {
  if (e === "change") return t;
}
var u0 = !1;
if (Ue) {
  var On;
  if (Ue) {
    var Rn = "oninput" in document;
    if (!Rn) {
      var K6 = document.createElement("div");
      K6.setAttribute("oninput", "return;"),
        (Rn = typeof K6.oninput == "function");
    }
    On = Rn;
  } else On = !1;
  u0 = On && (!document.documentMode || 9 < document.documentMode);
}
function q6() {
  Y3 && (Y3.detachEvent("onpropertychange", a0), (st = Y3 = null));
}
function a0(e) {
  if (e.propertyName === "value" && V4(st)) {
    var t = [];
    o0(t, st, e, wr(e)), B8(Us, t);
  }
}
function Bs(e, t, n) {
  e === "focusin"
    ? (q6(), (Y3 = t), (st = n), Y3.attachEvent("onpropertychange", a0))
    : e === "focusout" && q6();
}
function $s(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return V4(st);
}
function Ws(e, t) {
  if (e === "click") return V4(t);
}
function Qs(e, t) {
  if (e === "input" || e === "change") return V4(t);
}
function Hs(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xe = typeof Object.is == "function" ? Object.is : Hs;
function it(e, t) {
  if (xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!C5.call(t, l) || !xe(e[l], t[l])) return !1;
  }
  return !0;
}
function b6(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function J6(e, t) {
  var n = b6(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = b6(n);
  }
}
function c0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? c0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function f0() {
  for (var e = window, t = s4(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = s4(e.document);
  }
  return t;
}
function Er(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ys(e) {
  var t = f0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    c0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Er(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          s = Math.min(r.start, l);
        (r = r.end === void 0 ? s : Math.min(r.end, l)),
          !e.extend && s > r && ((l = r), (r = s), (s = l)),
          (l = J6(n, s));
        var o = J6(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Xs = Ue && "documentMode" in document && 11 >= document.documentMode,
  G2 = null,
  T5 = null,
  X3 = null,
  P5 = !1;
function e9(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  P5 ||
    G2 == null ||
    G2 !== s4(r) ||
    ((r = G2),
    "selectionStart" in r && Er(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (X3 && it(X3, r)) ||
      ((X3 = r),
      (r = d4(T5, "onSelect")),
      0 < r.length &&
        ((t = new Ar("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = G2))));
}
function Ot(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var K2 = {
    animationend: Ot("Animation", "AnimationEnd"),
    animationiteration: Ot("Animation", "AnimationIteration"),
    animationstart: Ot("Animation", "AnimationStart"),
    transitionend: Ot("Transition", "TransitionEnd"),
  },
  zn = {},
  d0 = {};
Ue &&
  ((d0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete K2.animationend.animation,
    delete K2.animationiteration.animation,
    delete K2.animationstart.animation),
  "TransitionEvent" in window || delete K2.transitionend.transition);
function B4(e) {
  if (zn[e]) return zn[e];
  if (!K2[e]) return e;
  var t = K2[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in d0) return (zn[e] = t[n]);
  return e;
}
var C0 = B4("animationend"),
  p0 = B4("animationiteration"),
  h0 = B4("animationstart"),
  m0 = B4("transitionend"),
  v0 = new Map(),
  t9 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function v2(e, t) {
  v0.set(e, t), U2(t, [e]);
}
for (var In = 0; In < t9.length; In++) {
  var Dn = t9[In],
    Gs = Dn.toLowerCase(),
    Ks = Dn[0].toUpperCase() + Dn.slice(1);
  v2(Gs, "on" + Ks);
}
v2(C0, "onAnimationEnd");
v2(p0, "onAnimationIteration");
v2(h0, "onAnimationStart");
v2("dblclick", "onDoubleClick");
v2("focusin", "onFocus");
v2("focusout", "onBlur");
v2(m0, "onTransitionEnd");
p3("onMouseEnter", ["mouseout", "mouseover"]);
p3("onMouseLeave", ["mouseout", "mouseover"]);
p3("onPointerEnter", ["pointerout", "pointerover"]);
p3("onPointerLeave", ["pointerout", "pointerover"]);
U2(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
U2(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
U2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
U2(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
U2(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
U2(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var B3 =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qs = new Set("cancel close invalid load scroll toggle".split(" ").concat(B3));
function n9(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Gl(r, t, void 0, e), (e.currentTarget = null);
}
function y0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), a !== s && l.isPropagationStopped())) break e;
          n9(l, u, c), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            a !== s && l.isPropagationStopped())
          )
            break e;
          n9(l, u, c), (s = a);
        }
    }
  }
  if (o4) throw ((e = _5), (o4 = !1), (_5 = null), e);
}
function n1(e, t) {
  var n = t[D5];
  n === void 0 && (n = t[D5] = new Set());
  var r = e + "__bubble";
  n.has(r) || (g0(t, e, 2, !1), n.add(r));
}
function Fn(e, t, n) {
  var r = 0;
  t && (r |= 4), g0(n, e, r, t);
}
var Rt = "_reactListening" + Math.random().toString(36).slice(2);
function ot(e) {
  if (!e[Rt]) {
    (e[Rt] = !0),
      S8.forEach(function (n) {
        n !== "selectionchange" && (qs.has(n) || Fn(n, !1, e), Fn(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rt] || ((t[Rt] = !0), Fn("selectionchange", !1, t));
  }
}
function g0(e, t, n, r) {
  switch (n0(t)) {
    case 1:
      var l = fs;
      break;
    case 4:
      l = ds;
      break;
    default:
      l = Lr;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !A5 ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Un(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = A2(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  B8(function () {
    var c = s,
      p = wr(n),
      f = [];
    e: {
      var C = v0.get(e);
      if (C !== void 0) {
        var v = Ar,
          g = e;
        switch (e) {
          case "keypress":
            if (Kt(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = As;
            break;
          case "focusin":
            (g = "focus"), (v = Pn);
            break;
          case "focusout":
            (g = "blur"), (v = Pn);
            break;
          case "beforeblur":
          case "afterblur":
            v = Pn;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = W6;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = hs;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Es;
            break;
          case C0:
          case p0:
          case h0:
            v = ys;
            break;
          case m0:
            v = Ts;
            break;
          case "scroll":
            v = Cs;
            break;
          case "wheel":
            v = Os;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = xs;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = H6;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          m = w ? (C !== null ? C + "Capture" : null) : C;
        w = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              m !== null && ((x = tt(d, m)), x != null && w.push(ut(d, x, h)))),
            P)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((C = new v(C, g, null, n, p)), f.push({ event: C, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((C = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          C &&
            n !== L5 &&
            (g = n.relatedTarget || n.fromElement) &&
            (A2(g) || g[Ve]))
        )
          break e;
        if (
          (v || C) &&
          ((C =
            p.window === p
              ? p
              : (C = p.ownerDocument)
              ? C.defaultView || C.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = c),
              (g = g ? A2(g) : null),
              g !== null &&
                ((P = V2(g)), g !== P || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = c)),
          v !== g)
        ) {
          if (
            ((w = W6),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = H6),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (P = v == null ? C : q2(v)),
            (h = g == null ? C : q2(g)),
            (C = new w(x, d + "leave", v, n, p)),
            (C.target = P),
            (C.relatedTarget = h),
            (x = null),
            A2(p) === c &&
              ((w = new w(m, d + "enter", g, n, p)),
              (w.target = h),
              (w.relatedTarget = P),
              (x = w)),
            (P = x),
            v && g)
          )
            t: {
              for (w = v, m = g, d = 0, h = w; h; h = W2(h)) d++;
              for (h = 0, x = m; x; x = W2(x)) h++;
              for (; 0 < d - h; ) (w = W2(w)), d--;
              for (; 0 < h - d; ) (m = W2(m)), h--;
              for (; d--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = W2(w)), (m = W2(m));
              }
              w = null;
            }
          else w = null;
          v !== null && r9(f, C, v, w, !1),
            g !== null && P !== null && r9(f, P, g, w, !0);
        }
      }
      e: {
        if (
          ((C = c ? q2(c) : window),
          (v = C.nodeName && C.nodeName.toLowerCase()),
          v === "select" || (v === "input" && C.type === "file"))
        )
          var S = Vs;
        else if (G6(C))
          if (u0) S = Qs;
          else {
            S = $s;
            var L = Bs;
          }
        else
          (v = C.nodeName) &&
            v.toLowerCase() === "input" &&
            (C.type === "checkbox" || C.type === "radio") &&
            (S = Ws);
        if (S && (S = S(e, c))) {
          o0(f, S, n, p);
          break e;
        }
        L && L(e, C, c),
          e === "focusout" &&
            (L = C._wrapperState) &&
            L.controlled &&
            C.type === "number" &&
            x5(C, "number", C.value);
      }
      switch (((L = c ? q2(c) : window), e)) {
        case "focusin":
          (G6(L) || L.contentEditable === "true") &&
            ((G2 = L), (T5 = c), (X3 = null));
          break;
        case "focusout":
          X3 = T5 = G2 = null;
          break;
        case "mousedown":
          P5 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (P5 = !1), e9(f, n, p);
          break;
        case "selectionchange":
          if (Xs) break;
        case "keydown":
        case "keyup":
          e9(f, n, p);
      }
      var _;
      if (Zr)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        X2
          ? s0(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (l0 &&
          n.locale !== "ko" &&
          (X2 || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && X2 && (_ = r0())
            : ((e2 = p),
              (Sr = "value" in e2 ? e2.value : e2.textContent),
              (X2 = !0))),
        (L = d4(c, M)),
        0 < L.length &&
          ((M = new Q6(M, e, null, n, p)),
          f.push({ event: M, listeners: L }),
          _ ? (M.data = _) : ((_ = i0(n)), _ !== null && (M.data = _)))),
        (_ = zs ? Is(e, n) : Ds(e, n)) &&
          ((c = d4(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new Q6("onBeforeInput", "beforeinput", null, n, p)),
            f.push({ event: p, listeners: c }),
            (p.data = _)));
    }
    y0(f, t);
  });
}
function ut(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function d4(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = tt(e, n)),
      s != null && r.unshift(ut(e, s, l)),
      (s = tt(e, t)),
      s != null && r.push(ut(e, s, l))),
      (e = e.return);
  }
  return r;
}
function W2(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function r9(e, t, n, r, l) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((a = tt(n, s)), a != null && o.unshift(ut(n, a, u)))
        : l || ((a = tt(n, s)), a != null && o.push(ut(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var bs = /\r\n?/g,
  Js = /\u0000|\uFFFD/g;
function l9(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bs,
      `
`
    )
    .replace(Js, "");
}
function zt(e, t, n) {
  if (((t = l9(t)), l9(e) !== t && n)) throw Error(T(425));
}
function C4() {}
var O5 = null,
  R5 = null;
function z5(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var I5 = typeof setTimeout == "function" ? setTimeout : void 0,
  ei = typeof clearTimeout == "function" ? clearTimeout : void 0,
  s9 = typeof Promise == "function" ? Promise : void 0,
  ti =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof s9 < "u"
      ? function (e) {
          return s9.resolve(null).then(e).catch(ni);
        }
      : I5;
function ni(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vn(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), lt(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  lt(t);
}
function i2(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function i9(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var L3 = Math.random().toString(36).slice(2),
  Se = "__reactFiber$" + L3,
  at = "__reactProps$" + L3,
  Ve = "__reactContainer$" + L3,
  D5 = "__reactEvents$" + L3,
  ri = "__reactListeners$" + L3,
  li = "__reactHandles$" + L3;
function A2(e) {
  var t = e[Se];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ve] || n[Se])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = i9(e); e !== null; ) {
          if ((n = e[Se])) return n;
          e = i9(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kt(e) {
  return (
    (e = e[Se] || e[Ve]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function q2(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function $4(e) {
  return e[at] || null;
}
var F5 = [],
  b2 = -1;
function y2(e) {
  return { current: e };
}
function r1(e) {
  0 > b2 || ((e.current = F5[b2]), (F5[b2] = null), b2--);
}
function t1(e, t) {
  b2++, (F5[b2] = e.current), (e.current = t);
}
var p2 = {},
  O1 = y2(p2),
  W1 = y2(!1),
  O2 = p2;
function h3(e, t) {
  var n = e.type.contextTypes;
  if (!n) return p2;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    s;
  for (s in n) l[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Q1(e) {
  return (e = e.childContextTypes), e != null;
}
function p4() {
  r1(W1), r1(O1);
}
function o9(e, t, n) {
  if (O1.current !== p2) throw Error(T(168));
  t1(O1, t), t1(W1, n);
}
function x0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(T(108, Bl(e) || "Unknown", l));
  return c1({}, n, r);
}
function h4(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || p2),
    (O2 = O1.current),
    t1(O1, e),
    t1(W1, W1.current),
    !0
  );
}
function u9(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = x0(e, t, O2)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      r1(W1),
      r1(O1),
      t1(O1, e))
    : r1(W1),
    t1(W1, n);
}
var Re = null,
  W4 = !1,
  Bn = !1;
function w0(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
function si(e) {
  (W4 = !0), w0(e);
}
function g2() {
  if (!Bn && Re !== null) {
    Bn = !0;
    var e = 0,
      t = b;
    try {
      var n = Re;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Re = null), (W4 = !1);
    } catch (l) {
      throw (Re !== null && (Re = Re.slice(e + 1)), H8(kr, g2), l);
    } finally {
      (b = t), (Bn = !1);
    }
  }
  return null;
}
var J2 = [],
  e3 = 0,
  m4 = null,
  v4 = 0,
  le = [],
  se = 0,
  R2 = null,
  Ie = 1,
  De = "";
function M2(e, t) {
  (J2[e3++] = v4), (J2[e3++] = m4), (m4 = e), (v4 = t);
}
function k0(e, t, n) {
  (le[se++] = Ie), (le[se++] = De), (le[se++] = R2), (R2 = e);
  var r = Ie;
  e = De;
  var l = 32 - ye(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - ye(t) + l;
  if (30 < s) {
    var o = l - (l % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ie = (1 << (32 - ye(t) + l)) | (n << l) | r),
      (De = s + e);
  } else (Ie = (1 << s) | (n << l) | r), (De = e);
}
function Nr(e) {
  e.return !== null && (M2(e, 1), k0(e, 1, 0));
}
function Tr(e) {
  for (; e === m4; )
    (m4 = J2[--e3]), (J2[e3] = null), (v4 = J2[--e3]), (J2[e3] = null);
  for (; e === R2; )
    (R2 = le[--se]),
      (le[se] = null),
      (De = le[--se]),
      (le[se] = null),
      (Ie = le[--se]),
      (le[se] = null);
}
var K1 = null,
  G1 = null,
  o1 = !1,
  he = null;
function j0(e, t) {
  var n = ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function a9(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (K1 = e), (G1 = i2(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (K1 = e), (G1 = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = R2 !== null ? { id: Ie, overflow: De } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (K1 = e),
            (G1 = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function U5(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function V5(e) {
  if (o1) {
    var t = G1;
    if (t) {
      var n = t;
      if (!a9(e, t)) {
        if (U5(e)) throw Error(T(418));
        t = i2(n.nextSibling);
        var r = K1;
        t && a9(e, t)
          ? j0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (o1 = !1), (K1 = e));
      }
    } else {
      if (U5(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (o1 = !1), (K1 = e);
    }
  }
}
function c9(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  K1 = e;
}
function It(e) {
  if (e !== K1) return !1;
  if (!o1) return c9(e), (o1 = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !z5(e.type, e.memoizedProps))),
    t && (t = G1))
  ) {
    if (U5(e)) throw (M0(), Error(T(418)));
    for (; t; ) j0(e, t), (t = i2(t.nextSibling));
  }
  if ((c9(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              G1 = i2(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      G1 = null;
    }
  } else G1 = K1 ? i2(e.stateNode.nextSibling) : null;
  return !0;
}
function M0() {
  for (var e = G1; e; ) e = i2(e.nextSibling);
}
function m3() {
  (G1 = K1 = null), (o1 = !1);
}
function Pr(e) {
  he === null ? (he = [e]) : he.push(e);
}
var ii = Qe.ReactCurrentBatchConfig;
function Ce(e, t) {
  if (e && e.defaultProps) {
    (t = c1({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var y4 = y2(null),
  g4 = null,
  t3 = null,
  Or = null;
function Rr() {
  Or = t3 = g4 = null;
}
function zr(e) {
  var t = y4.current;
  r1(y4), (e._currentValue = t);
}
function B5(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function a3(e, t) {
  (g4 = e),
    (Or = t3 = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($1 = !0), (e.firstContext = null));
}
function ue(e) {
  var t = e._currentValue;
  if (Or !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), t3 === null)) {
      if (g4 === null) throw Error(T(308));
      (t3 = e), (g4.dependencies = { lanes: 0, firstContext: e });
    } else t3 = t3.next = e;
  return t;
}
var _2 = null;
function Ir(e) {
  _2 === null ? (_2 = [e]) : _2.push(e);
}
function L0(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ir(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Be(e, r)
  );
}
function Be(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ke = !1;
function Dr(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function S0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Fe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function o2(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ir(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Be(e, n)
  );
}
function qt(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jr(e, n);
  }
}
function f9(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (l = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (l = s = t) : (s = s.next = t);
    } else l = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function x4(e, t, n, r) {
  var l = e.updateQueue;
  Ke = !1;
  var s = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      c = a.next;
    (a.next = null), o === null ? (s = c) : (o.next = c), (o = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== o &&
        (u === null ? (p.firstBaseUpdate = c) : (u.next = c),
        (p.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = l.baseState;
    (o = 0), (p = c = a = null), (u = s);
    do {
      var C = u.lane,
        v = u.eventTime;
      if ((r & C) === C) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            w = u;
          switch (((C = t), (v = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                f = g.call(v, f, C);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (C = typeof g == "function" ? g.call(v, f, C) : g),
                C == null)
              )
                break e;
              f = c1({}, f, C);
              break e;
            case 2:
              Ke = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (C = l.effects),
          C === null ? (l.effects = [u]) : C.push(u));
      } else
        (v = {
          eventTime: v,
          lane: C,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((c = p = v), (a = f)) : (p = p.next = v),
          (o |= C);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (C = u),
          (u = C.next),
          (C.next = null),
          (l.lastBaseUpdate = C),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = f),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    (I2 |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function d9(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(T(191, l));
        l.call(r);
      }
    }
}
var A0 = new L8.Component().refs;
function $5(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : c1({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Q4 = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? V2(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = I1(),
      l = a2(e),
      s = Fe(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = o2(e, s, l)),
      t !== null && (ge(t, e, l, r), qt(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = I1(),
      l = a2(e),
      s = Fe(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = o2(e, s, l)),
      t !== null && (ge(t, e, l, r), qt(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = I1(),
      r = a2(e),
      l = Fe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = o2(e, l, r)),
      t !== null && (ge(t, e, r, n), qt(t, e, r));
  },
};
function C9(e, t, n, r, l, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !it(n, r) || !it(l, s)
      : !0
  );
}
function _0(e, t, n) {
  var r = !1,
    l = p2,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ue(s))
      : ((l = Q1(t) ? O2 : O1.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? h3(e, l) : p2)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Q4),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function p9(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Q4.enqueueReplaceState(t, t.state, null);
}
function W5(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = A0), Dr(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (l.context = ue(s))
    : ((s = Q1(t) ? O2 : O1.current), (l.context = h3(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && ($5(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Q4.enqueueReplaceState(l, l.state, null),
      x4(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function O3(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === A0 && (u = l.refs = {}),
              o === null ? delete u[s] : (u[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Dt(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function h9(e) {
  var t = e._init;
  return t(e._payload);
}
function Z0(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function l(m, d) {
    return (m = c2(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, d, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((m.flags |= 2), d) : h)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, d, h, x) {
    return d === null || d.tag !== 6
      ? ((d = Gn(h, m.mode, x)), (d.return = m), d)
      : ((d = l(d, h)), (d.return = m), d);
  }
  function a(m, d, h, x) {
    var S = h.type;
    return S === Y2
      ? p(m, d, h.props.children, x, h.key)
      : d !== null &&
        (d.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Ge &&
            h9(S) === d.type))
      ? ((x = l(d, h.props)), (x.ref = O3(m, d, h)), (x.return = m), x)
      : ((x = r4(h.type, h.key, h.props, null, m.mode, x)),
        (x.ref = O3(m, d, h)),
        (x.return = m),
        x);
  }
  function c(m, d, h, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Kn(h, m.mode, x)), (d.return = m), d)
      : ((d = l(d, h.children || [])), (d.return = m), d);
  }
  function p(m, d, h, x, S) {
    return d === null || d.tag !== 7
      ? ((d = T2(h, m.mode, x, S)), (d.return = m), d)
      : ((d = l(d, h)), (d.return = m), d);
  }
  function f(m, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Gn("" + d, m.mode, h)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case At:
          return (
            (h = r4(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = O3(m, null, d)),
            (h.return = m),
            h
          );
        case H2:
          return (d = Kn(d, m.mode, h)), (d.return = m), d;
        case Ge:
          var x = d._init;
          return f(m, x(d._payload), h);
      }
      if (U3(d) || Z3(d))
        return (d = T2(d, m.mode, h, null)), (d.return = m), d;
      Dt(m, d);
    }
    return null;
  }
  function C(m, d, h, x) {
    var S = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : u(m, d, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case At:
          return h.key === S ? a(m, d, h, x) : null;
        case H2:
          return h.key === S ? c(m, d, h, x) : null;
        case Ge:
          return (S = h._init), C(m, d, S(h._payload), x);
      }
      if (U3(h) || Z3(h)) return S !== null ? null : p(m, d, h, x, null);
      Dt(m, h);
    }
    return null;
  }
  function v(m, d, h, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(h) || null), u(d, m, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case At:
          return (m = m.get(x.key === null ? h : x.key) || null), a(d, m, x, S);
        case H2:
          return (m = m.get(x.key === null ? h : x.key) || null), c(d, m, x, S);
        case Ge:
          var L = x._init;
          return v(m, d, h, L(x._payload), S);
      }
      if (U3(x) || Z3(x)) return (m = m.get(h) || null), p(d, m, x, S, null);
      Dt(d, x);
    }
    return null;
  }
  function g(m, d, h, x) {
    for (
      var S = null, L = null, _ = d, M = (d = 0), k = null;
      _ !== null && M < h.length;
      M++
    ) {
      _.index > M ? ((k = _), (_ = null)) : (k = _.sibling);
      var j = C(m, _, h[M], x);
      if (j === null) {
        _ === null && (_ = k);
        break;
      }
      e && _ && j.alternate === null && t(m, _),
        (d = s(j, d, M)),
        L === null ? (S = j) : (L.sibling = j),
        (L = j),
        (_ = k);
    }
    if (M === h.length) return n(m, _), o1 && M2(m, M), S;
    if (_ === null) {
      for (; M < h.length; M++)
        (_ = f(m, h[M], x)),
          _ !== null &&
            ((d = s(_, d, M)), L === null ? (S = _) : (L.sibling = _), (L = _));
      return o1 && M2(m, M), S;
    }
    for (_ = r(m, _); M < h.length; M++)
      (k = v(_, m, M, h[M], x)),
        k !== null &&
          (e && k.alternate !== null && _.delete(k.key === null ? M : k.key),
          (d = s(k, d, M)),
          L === null ? (S = k) : (L.sibling = k),
          (L = k));
    return (
      e &&
        _.forEach(function (E) {
          return t(m, E);
        }),
      o1 && M2(m, M),
      S
    );
  }
  function w(m, d, h, x) {
    var S = Z3(h);
    if (typeof S != "function") throw Error(T(150));
    if (((h = S.call(h)), h == null)) throw Error(T(151));
    for (
      var L = (S = null), _ = d, M = (d = 0), k = null, j = h.next();
      _ !== null && !j.done;
      M++, j = h.next()
    ) {
      _.index > M ? ((k = _), (_ = null)) : (k = _.sibling);
      var E = C(m, _, j.value, x);
      if (E === null) {
        _ === null && (_ = k);
        break;
      }
      e && _ && E.alternate === null && t(m, _),
        (d = s(E, d, M)),
        L === null ? (S = E) : (L.sibling = E),
        (L = E),
        (_ = k);
    }
    if (j.done) return n(m, _), o1 && M2(m, M), S;
    if (_ === null) {
      for (; !j.done; M++, j = h.next())
        (j = f(m, j.value, x)),
          j !== null &&
            ((d = s(j, d, M)), L === null ? (S = j) : (L.sibling = j), (L = j));
      return o1 && M2(m, M), S;
    }
    for (_ = r(m, _); !j.done; M++, j = h.next())
      (j = v(_, m, M, j.value, x)),
        j !== null &&
          (e && j.alternate !== null && _.delete(j.key === null ? M : j.key),
          (d = s(j, d, M)),
          L === null ? (S = j) : (L.sibling = j),
          (L = j));
    return (
      e &&
        _.forEach(function (O) {
          return t(m, O);
        }),
      o1 && M2(m, M),
      S
    );
  }
  function P(m, d, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Y2 &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case At:
          e: {
            for (var S = h.key, L = d; L !== null; ) {
              if (L.key === S) {
                if (((S = h.type), S === Y2)) {
                  if (L.tag === 7) {
                    n(m, L.sibling),
                      (d = l(L, h.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  L.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Ge &&
                    h9(S) === L.type)
                ) {
                  n(m, L.sibling),
                    (d = l(L, h.props)),
                    (d.ref = O3(m, L, h)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, L);
                break;
              } else t(m, L);
              L = L.sibling;
            }
            h.type === Y2
              ? ((d = T2(h.props.children, m.mode, x, h.key)),
                (d.return = m),
                (m = d))
              : ((x = r4(h.type, h.key, h.props, null, m.mode, x)),
                (x.ref = O3(m, d, h)),
                (x.return = m),
                (m = x));
          }
          return o(m);
        case H2:
          e: {
            for (L = h.key; d !== null; ) {
              if (d.key === L)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(m, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = Kn(h, m.mode, x)), (d.return = m), (m = d);
          }
          return o(m);
        case Ge:
          return (L = h._init), P(m, d, L(h._payload), x);
      }
      if (U3(h)) return g(m, d, h, x);
      if (Z3(h)) return w(m, d, h, x);
      Dt(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = l(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = Gn(h, m.mode, x)), (d.return = m), (m = d)),
        o(m))
      : n(m, d);
  }
  return P;
}
var v3 = Z0(!0),
  E0 = Z0(!1),
  jt = {},
  Ze = y2(jt),
  ct = y2(jt),
  ft = y2(jt);
function Z2(e) {
  if (e === jt) throw Error(T(174));
  return e;
}
function Fr(e, t) {
  switch ((t1(ft, t), t1(ct, e), t1(Ze, jt), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : k5(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = k5(t, e));
  }
  r1(Ze), t1(Ze, t);
}
function y3() {
  r1(Ze), r1(ct), r1(ft);
}
function N0(e) {
  Z2(ft.current);
  var t = Z2(Ze.current),
    n = k5(t, e.type);
  t !== n && (t1(ct, e), t1(Ze, n));
}
function Ur(e) {
  ct.current === e && (r1(Ze), r1(ct));
}
var u1 = y2(0);
function w4(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $n = [];
function Vr() {
  for (var e = 0; e < $n.length; e++)
    $n[e]._workInProgressVersionPrimary = null;
  $n.length = 0;
}
var bt = Qe.ReactCurrentDispatcher,
  Wn = Qe.ReactCurrentBatchConfig,
  z2 = 0,
  a1 = null,
  g1 = null,
  k1 = null,
  k4 = !1,
  G3 = !1,
  dt = 0,
  oi = 0;
function E1() {
  throw Error(T(321));
}
function Br(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xe(e[n], t[n])) return !1;
  return !0;
}
function $r(e, t, n, r, l, s) {
  if (
    ((z2 = s),
    (a1 = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (bt.current = e === null || e.memoizedState === null ? fi : di),
    (e = n(r, l)),
    G3)
  ) {
    s = 0;
    do {
      if (((G3 = !1), (dt = 0), 25 <= s)) throw Error(T(301));
      (s += 1),
        (k1 = g1 = null),
        (t.updateQueue = null),
        (bt.current = Ci),
        (e = n(r, l));
    } while (G3);
  }
  if (
    ((bt.current = j4),
    (t = g1 !== null && g1.next !== null),
    (z2 = 0),
    (k1 = g1 = a1 = null),
    (k4 = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Wr() {
  var e = dt !== 0;
  return (dt = 0), e;
}
function Le() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return k1 === null ? (a1.memoizedState = k1 = e) : (k1 = k1.next = e), k1;
}
function ae() {
  if (g1 === null) {
    var e = a1.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = g1.next;
  var t = k1 === null ? a1.memoizedState : k1.next;
  if (t !== null) (k1 = t), (g1 = e);
  else {
    if (e === null) throw Error(T(310));
    (g1 = e),
      (e = {
        memoizedState: g1.memoizedState,
        baseState: g1.baseState,
        baseQueue: g1.baseQueue,
        queue: g1.queue,
        next: null,
      }),
      k1 === null ? (a1.memoizedState = k1 = e) : (k1 = k1.next = e);
  }
  return k1;
}
function Ct(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qn(e) {
  var t = ae(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = g1,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = s.next), (s.next = o);
    }
    (r.baseQueue = l = s), (n.pending = null);
  }
  if (l !== null) {
    (s = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      c = s;
    do {
      var p = c.lane;
      if ((z2 & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((u = a = f), (o = r)) : (a = a.next = f),
          (a1.lanes |= p),
          (I2 |= p);
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? (o = r) : (a.next = u),
      xe(r, t.memoizedState) || ($1 = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (a1.lanes |= s), (I2 |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hn(e) {
  var t = ae(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== l);
    xe(s, t.memoizedState) || ($1 = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function T0() {}
function P0(e, t) {
  var n = a1,
    r = ae(),
    l = t(),
    s = !xe(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), ($1 = !0)),
    (r = r.queue),
    Qr(z0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (k1 !== null && k1.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      pt(9, R0.bind(null, n, r, l, t), void 0, null),
      j1 === null)
    )
      throw Error(T(349));
    z2 & 30 || O0(n, t, l);
  }
  return l;
}
function O0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = a1.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (a1.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function R0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), I0(t) && D0(e);
}
function z0(e, t, n) {
  return n(function () {
    I0(t) && D0(e);
  });
}
function I0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xe(e, n);
  } catch {
    return !0;
  }
}
function D0(e) {
  var t = Be(e, 1);
  t !== null && ge(t, e, 1, -1);
}
function m9(e) {
  var t = Le();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ct,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ci.bind(null, a1, e)),
    [t.memoizedState, e]
  );
}
function pt(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = a1.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (a1.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function F0() {
  return ae().memoizedState;
}
function Jt(e, t, n, r) {
  var l = Le();
  (a1.flags |= e),
    (l.memoizedState = pt(1 | t, n, void 0, r === void 0 ? null : r));
}
function H4(e, t, n, r) {
  var l = ae();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (g1 !== null) {
    var o = g1.memoizedState;
    if (((s = o.destroy), r !== null && Br(r, o.deps))) {
      l.memoizedState = pt(t, n, s, r);
      return;
    }
  }
  (a1.flags |= e), (l.memoizedState = pt(1 | t, n, s, r));
}
function v9(e, t) {
  return Jt(8390656, 8, e, t);
}
function Qr(e, t) {
  return H4(2048, 8, e, t);
}
function U0(e, t) {
  return H4(4, 2, e, t);
}
function V0(e, t) {
  return H4(4, 4, e, t);
}
function B0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), H4(4, 4, B0.bind(null, t, e), n)
  );
}
function Hr() {}
function W0(e, t) {
  var n = ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Br(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Q0(e, t) {
  var n = ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Br(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function H0(e, t, n) {
  return z2 & 21
    ? (xe(n, t) || ((n = G8()), (a1.lanes |= n), (I2 |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($1 = !0)), (e.memoizedState = n));
}
function ui(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wn.transition;
  Wn.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), (Wn.transition = r);
  }
}
function Y0() {
  return ae().memoizedState;
}
function ai(e, t, n) {
  var r = a2(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    X0(e))
  )
    G0(t, n);
  else if (((n = L0(e, t, n, r)), n !== null)) {
    var l = I1();
    ge(n, e, r, l), K0(n, t, r);
  }
}
function ci(e, t, n) {
  var r = a2(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (X0(e)) G0(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = s(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), xe(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Ir(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = L0(e, t, l, r)),
      n !== null && ((l = I1()), ge(n, e, r, l), K0(n, t, r));
  }
}
function X0(e) {
  var t = e.alternate;
  return e === a1 || (t !== null && t === a1);
}
function G0(e, t) {
  G3 = k4 = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function K0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jr(e, n);
  }
}
var j4 = {
    readContext: ue,
    useCallback: E1,
    useContext: E1,
    useEffect: E1,
    useImperativeHandle: E1,
    useInsertionEffect: E1,
    useLayoutEffect: E1,
    useMemo: E1,
    useReducer: E1,
    useRef: E1,
    useState: E1,
    useDebugValue: E1,
    useDeferredValue: E1,
    useTransition: E1,
    useMutableSource: E1,
    useSyncExternalStore: E1,
    useId: E1,
    unstable_isNewReconciler: !1,
  },
  fi = {
    readContext: ue,
    useCallback: function (e, t) {
      return (Le().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ue,
    useEffect: v9,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Jt(4194308, 4, B0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Jt(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Jt(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Le();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Le();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ai.bind(null, a1, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Le();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: m9,
    useDebugValue: Hr,
    useDeferredValue: function (e) {
      return (Le().memoizedState = e);
    },
    useTransition: function () {
      var e = m9(!1),
        t = e[0];
      return (e = ui.bind(null, e[1])), (Le().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = a1,
        l = Le();
      if (o1) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), j1 === null)) throw Error(T(349));
        z2 & 30 || O0(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        v9(z0.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        pt(9, R0.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Le(),
        t = j1.identifierPrefix;
      if (o1) {
        var n = De,
          r = Ie;
        (n = (r & ~(1 << (32 - ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = dt++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = oi++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  di = {
    readContext: ue,
    useCallback: W0,
    useContext: ue,
    useEffect: Qr,
    useImperativeHandle: $0,
    useInsertionEffect: U0,
    useLayoutEffect: V0,
    useMemo: Q0,
    useReducer: Qn,
    useRef: F0,
    useState: function () {
      return Qn(Ct);
    },
    useDebugValue: Hr,
    useDeferredValue: function (e) {
      var t = ae();
      return H0(t, g1.memoizedState, e);
    },
    useTransition: function () {
      var e = Qn(Ct)[0],
        t = ae().memoizedState;
      return [e, t];
    },
    useMutableSource: T0,
    useSyncExternalStore: P0,
    useId: Y0,
    unstable_isNewReconciler: !1,
  },
  Ci = {
    readContext: ue,
    useCallback: W0,
    useContext: ue,
    useEffect: Qr,
    useImperativeHandle: $0,
    useInsertionEffect: U0,
    useLayoutEffect: V0,
    useMemo: Q0,
    useReducer: Hn,
    useRef: F0,
    useState: function () {
      return Hn(Ct);
    },
    useDebugValue: Hr,
    useDeferredValue: function (e) {
      var t = ae();
      return g1 === null ? (t.memoizedState = e) : H0(t, g1.memoizedState, e);
    },
    useTransition: function () {
      var e = Hn(Ct)[0],
        t = ae().memoizedState;
      return [e, t];
    },
    useMutableSource: T0,
    useSyncExternalStore: P0,
    useId: Y0,
    unstable_isNewReconciler: !1,
  };
function g3(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Vl(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (s) {
    l =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yn(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Q5(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var pi = typeof WeakMap == "function" ? WeakMap : Map;
function q0(e, t, n) {
  (n = Fe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      L4 || ((L4 = !0), (tr = r)), Q5(e, t);
    }),
    n
  );
}
function b0(e, t, n) {
  (n = Fe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Q5(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Q5(e, t),
          typeof r != "function" &&
            (u2 === null ? (u2 = new Set([this])) : u2.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function y9(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pi();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = _i.bind(null, e, t, n)), t.then(e, e));
}
function g9(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function x9(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Fe(-1, 1)), (t.tag = 2), o2(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hi = Qe.ReactCurrentOwner,
  $1 = !1;
function R1(e, t, n, r) {
  t.child = e === null ? E0(t, null, n, r) : v3(t, e.child, n, r);
}
function w9(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    a3(t, l),
    (r = $r(e, t, n, r, s, l)),
    (n = Wr()),
    e !== null && !$1
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        $e(e, t, l))
      : (o1 && n && Nr(t), (t.flags |= 1), R1(e, t, r, l), t.child)
  );
}
function k9(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !e6(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), J0(e, t, s, r, l))
      : ((e = r4(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : it), n(o, r) && e.ref === t.ref)
    )
      return $e(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = c2(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function J0(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (it(s, r) && e.ref === t.ref)
      if ((($1 = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && ($1 = !0);
      else return (t.lanes = e.lanes), $e(e, t, l);
  }
  return H5(e, t, n, r, l);
}
function e7(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        t1(r3, X1),
        (X1 |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          t1(r3, X1),
          (X1 |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        t1(r3, X1),
        (X1 |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      t1(r3, X1),
      (X1 |= r);
  return R1(e, t, l, n), t.child;
}
function t7(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function H5(e, t, n, r, l) {
  var s = Q1(n) ? O2 : O1.current;
  return (
    (s = h3(t, s)),
    a3(t, l),
    (n = $r(e, t, n, r, s, l)),
    (r = Wr()),
    e !== null && !$1
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        $e(e, t, l))
      : (o1 && r && Nr(t), (t.flags |= 1), R1(e, t, n, l), t.child)
  );
}
function j9(e, t, n, r, l) {
  if (Q1(n)) {
    var s = !0;
    h4(t);
  } else s = !1;
  if ((a3(t, l), t.stateNode === null))
    e4(e, t), _0(t, n, r), W5(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ue(c))
      : ((c = Q1(n) ? O2 : O1.current), (c = h3(t, c)));
    var p = n.getDerivedStateFromProps,
      f =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== c) && p9(t, o, r, c)),
      (Ke = !1);
    var C = t.memoizedState;
    (o.state = C),
      x4(t, r, o, l),
      (a = t.memoizedState),
      u !== r || C !== a || W1.current || Ke
        ? (typeof p == "function" && ($5(t, n, p, r), (a = t.memoizedState)),
          (u = Ke || C9(t, n, u, r, C, a, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      S0(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Ce(t.type, u)),
      (o.props = c),
      (f = t.pendingProps),
      (C = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ue(a))
        : ((a = Q1(n) ? O2 : O1.current), (a = h3(t, a)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== f || C !== a) && p9(t, o, r, a)),
      (Ke = !1),
      (C = t.memoizedState),
      (o.state = C),
      x4(t, r, o, l);
    var g = t.memoizedState;
    u !== f || C !== g || W1.current || Ke
      ? (typeof v == "function" && ($5(t, n, v, r), (g = t.memoizedState)),
        (c = Ke || C9(t, n, c, r, C, g, a) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && C === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && C === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = a),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && C === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && C === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Y5(e, t, n, r, s, l);
}
function Y5(e, t, n, r, l, s) {
  t7(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && u9(t, n, !1), $e(e, t, s);
  (r = t.stateNode), (hi.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = v3(t, e.child, null, s)), (t.child = v3(t, null, u, s)))
      : R1(e, t, u, s),
    (t.memoizedState = r.state),
    l && u9(t, n, !0),
    t.child
  );
}
function n7(e) {
  var t = e.stateNode;
  t.pendingContext
    ? o9(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && o9(e, t.context, !1),
    Fr(e, t.containerInfo);
}
function M9(e, t, n, r, l) {
  return m3(), Pr(l), (t.flags |= 256), R1(e, t, n, r), t.child;
}
var X5 = { dehydrated: null, treeContext: null, retryLane: 0 };
function G5(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function r7(e, t, n) {
  var r = t.pendingProps,
    l = u1.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    t1(u1, l & 1),
    e === null)
  )
    return (
      V5(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = G4(o, r, 0, null)),
              (e = T2(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = G5(n)),
              (t.memoizedState = X5),
              e)
            : Yr(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return mi(e, t, o, r, u, l, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = c2(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (s = c2(u, s)) : ((s = T2(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? G5(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = X5),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = c2(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Yr(e, t) {
  return (
    (t = G4({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ft(e, t, n, r) {
  return (
    r !== null && Pr(r),
    v3(t, e.child, null, n),
    (e = Yr(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mi(e, t, n, r, l, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yn(Error(T(422)))), Ft(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (l = t.mode),
        (r = G4({ mode: "visible", children: r.children }, l, 0, null)),
        (s = T2(s, l, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && v3(t, e.child, null, o),
        (t.child.memoizedState = G5(o)),
        (t.memoizedState = X5),
        s);
  if (!(t.mode & 1)) return Ft(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (s = Error(T(419))), (r = Yn(s, r, void 0)), Ft(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), $1 || u)) {
    if (((r = j1), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), Be(e, l), ge(r, e, l, -1));
    }
    return Jr(), (r = Yn(Error(T(421)))), Ft(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zi.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (G1 = i2(l.nextSibling)),
      (K1 = t),
      (o1 = !0),
      (he = null),
      e !== null &&
        ((le[se++] = Ie),
        (le[se++] = De),
        (le[se++] = R2),
        (Ie = e.id),
        (De = e.overflow),
        (R2 = t)),
      (t = Yr(t, r.children)),
      (t.flags |= 4096),
      t);
}
function L9(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), B5(e.return, t, n);
}
function Xn(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = l));
}
function l7(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((R1(e, t, r.children, n), (r = u1.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && L9(e, n, t);
        else if (e.tag === 19) L9(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((t1(u1, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && w4(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Xn(t, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && w4(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Xn(t, !0, n, null, s);
        break;
      case "together":
        Xn(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function e4(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $e(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (I2 |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = c2(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = c2(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vi(e, t, n) {
  switch (t.tag) {
    case 3:
      n7(t), m3();
      break;
    case 5:
      N0(t);
      break;
    case 1:
      Q1(t.type) && h4(t);
      break;
    case 4:
      Fr(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      t1(y4, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (t1(u1, u1.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? r7(e, t, n)
          : (t1(u1, u1.current & 1),
            (e = $e(e, t, n)),
            e !== null ? e.sibling : null);
      t1(u1, u1.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return l7(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        t1(u1, u1.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), e7(e, t, n);
  }
  return $e(e, t, n);
}
var s7, K5, i7, o7;
s7 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
K5 = function () {};
i7 = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Z2(Ze.current);
    var s = null;
    switch (n) {
      case "input":
        (l = y5(e, l)), (r = y5(e, r)), (s = []);
        break;
      case "select":
        (l = c1({}, l, { value: void 0 })),
          (r = c1({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (l = w5(e, l)), (r = w5(e, r)), (s = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = C4);
    }
    j5(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (J3.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== u && (a != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (s = s || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (J3.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && n1("scroll", e),
                  s || u === a || (s = []))
                : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
o7 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function R3(e, t) {
  if (!o1)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function N1(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yi(e, t, n) {
  var r = t.pendingProps;
  switch ((Tr(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return N1(t), null;
    case 1:
      return Q1(t.type) && p4(), N1(t), null;
    case 3:
      return (
        (r = t.stateNode),
        y3(),
        r1(W1),
        r1(O1),
        Vr(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (It(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), he !== null && (lr(he), (he = null)))),
        K5(e, t),
        N1(t),
        null
      );
    case 5:
      Ur(t);
      var l = Z2(ft.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        i7(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return N1(t), null;
        }
        if (((e = Z2(Ze.current)), It(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Se] = t), (r[at] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              n1("cancel", r), n1("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              n1("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < B3.length; l++) n1(B3[l], r);
              break;
            case "source":
              n1("error", r);
              break;
            case "img":
            case "image":
            case "link":
              n1("error", r), n1("load", r);
              break;
            case "details":
              n1("toggle", r);
              break;
            case "input":
              O6(r, s), n1("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                n1("invalid", r);
              break;
            case "textarea":
              z6(r, s), n1("invalid", r);
          }
          j5(n, s), (l = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var u = s[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (s.suppressHydrationWarning !== !0 &&
                      zt(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (s.suppressHydrationWarning !== !0 &&
                      zt(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : J3.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  n1("scroll", r);
            }
          switch (n) {
            case "input":
              _t(r), R6(r, s, !0);
              break;
            case "textarea":
              _t(r), I6(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = C4);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = O8(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Se] = t),
            (e[at] = r),
            s7(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = M5(n, r)), n)) {
              case "dialog":
                n1("cancel", e), n1("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                n1("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < B3.length; l++) n1(B3[l], e);
                l = r;
                break;
              case "source":
                n1("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                n1("error", e), n1("load", e), (l = r);
                break;
              case "details":
                n1("toggle", e), (l = r);
                break;
              case "input":
                O6(e, r), (l = y5(e, r)), n1("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = c1({}, r, { value: void 0 })),
                  n1("invalid", e);
                break;
              case "textarea":
                z6(e, r), (l = w5(e, r)), n1("invalid", e);
                break;
              default:
                l = r;
            }
            j5(n, l), (u = l);
            for (s in u)
              if (u.hasOwnProperty(s)) {
                var a = u[s];
                s === "style"
                  ? I8(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && R8(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && et(e, a)
                    : typeof a == "number" && et(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (J3.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && n1("scroll", e)
                      : a != null && vr(e, s, a, o));
              }
            switch (n) {
              case "input":
                _t(e), R6(e, r, !1);
                break;
              case "textarea":
                _t(e), I6(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + C2(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? s3(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      s3(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = C4);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return N1(t), null;
    case 6:
      if (e && t.stateNode != null) o7(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Z2(ft.current)), Z2(Ze.current), It(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Se] = t),
            (s = r.nodeValue !== n) && ((e = K1), e !== null))
          )
            switch (e.tag) {
              case 3:
                zt(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zt(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Se] = t),
            (t.stateNode = r);
      }
      return N1(t), null;
    case 13:
      if (
        (r1(u1),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (o1 && G1 !== null && t.mode & 1 && !(t.flags & 128))
          M0(), m3(), (t.flags |= 98560), (s = !1);
        else if (((s = It(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317));
            s[Se] = t;
          } else
            m3(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          N1(t), (s = !1);
        } else he !== null && (lr(he), (he = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || u1.current & 1 ? x1 === 0 && (x1 = 3) : Jr())),
          t.updateQueue !== null && (t.flags |= 4),
          N1(t),
          null);
    case 4:
      return (
        y3(), K5(e, t), e === null && ot(t.stateNode.containerInfo), N1(t), null
      );
    case 10:
      return zr(t.type._context), N1(t), null;
    case 17:
      return Q1(t.type) && p4(), N1(t), null;
    case 19:
      if ((r1(u1), (s = t.memoizedState), s === null)) return N1(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) R3(s, !1);
        else {
          if (x1 !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = w4(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    R3(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return t1(u1, (u1.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            h1() > x3 &&
            ((t.flags |= 128), (r = !0), R3(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = w4(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              R3(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !o1)
            )
              return N1(t), null;
          } else
            2 * h1() - s.renderingStartTime > x3 &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), R3(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = h1()),
          (t.sibling = null),
          (n = u1.current),
          t1(u1, r ? (n & 1) | 2 : n & 1),
          t)
        : (N1(t), null);
    case 22:
    case 23:
      return (
        br(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? X1 & 1073741824 && (N1(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : N1(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function gi(e, t) {
  switch ((Tr(t), t.tag)) {
    case 1:
      return (
        Q1(t.type) && p4(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        y3(),
        r1(W1),
        r1(O1),
        Vr(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ur(t), null;
    case 13:
      if (
        (r1(u1), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        m3();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return r1(u1), null;
    case 4:
      return y3(), null;
    case 10:
      return zr(t.type._context), null;
    case 22:
    case 23:
      return br(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ut = !1,
  P1 = !1,
  xi = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function n3(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        d1(e, t, r);
      }
    else n.current = null;
}
function q5(e, t, n) {
  try {
    n();
  } catch (r) {
    d1(e, t, r);
  }
}
var S9 = !1;
function wi(e, t) {
  if (((O5 = c4), (e = f0()), Er(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            c = 0,
            p = 0,
            f = e,
            C = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (l !== 0 && f.nodeType !== 3) || (u = o + l),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (C = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (C === n && ++c === l && (u = o),
                C === s && ++p === r && (a = o),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = C), (C = f.parentNode);
            }
            f = v;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (R5 = { focusedElem: e, selectionRange: n }, c4 = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    P = g.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ce(t.type, w),
                      P
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (x) {
          d1(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (g = S9), (S9 = !1), g;
}
function K3(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        (l.destroy = void 0), s !== void 0 && q5(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Y4(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function b5(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function u7(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), u7(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Se], delete t[at], delete t[D5], delete t[ri], delete t[li])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function a7(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function A9(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || a7(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function J5(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = C4));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (J5(e, t, n), e = e.sibling; e !== null; ) J5(e, t, n), (e = e.sibling);
}
function er(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (er(e, t, n), e = e.sibling; e !== null; ) er(e, t, n), (e = e.sibling);
}
var A1 = null,
  pe = !1;
function Ye(e, t, n) {
  for (n = n.child; n !== null; ) c7(e, t, n), (n = n.sibling);
}
function c7(e, t, n) {
  if (_e && typeof _e.onCommitFiberUnmount == "function")
    try {
      _e.onCommitFiberUnmount(F4, n);
    } catch {}
  switch (n.tag) {
    case 5:
      P1 || n3(n, t);
    case 6:
      var r = A1,
        l = pe;
      (A1 = null),
        Ye(e, t, n),
        (A1 = r),
        (pe = l),
        A1 !== null &&
          (pe
            ? ((e = A1),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : A1.removeChild(n.stateNode));
      break;
    case 18:
      A1 !== null &&
        (pe
          ? ((e = A1),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vn(e.parentNode, n)
              : e.nodeType === 1 && Vn(e, n),
            lt(e))
          : Vn(A1, n.stateNode));
      break;
    case 4:
      (r = A1),
        (l = pe),
        (A1 = n.stateNode.containerInfo),
        (pe = !0),
        Ye(e, t, n),
        (A1 = r),
        (pe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !P1 &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && q5(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ye(e, t, n);
      break;
    case 1:
      if (
        !P1 &&
        (n3(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          d1(n, t, u);
        }
      Ye(e, t, n);
      break;
    case 21:
      Ye(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((P1 = (r = P1) || n.memoizedState !== null), Ye(e, t, n), (P1 = r))
        : Ye(e, t, n);
      break;
    default:
      Ye(e, t, n);
  }
}
function _9(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xi()),
      t.forEach(function (r) {
        var l = Ei.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function de(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (A1 = u.stateNode), (pe = !1);
              break e;
            case 3:
              (A1 = u.stateNode.containerInfo), (pe = !0);
              break e;
            case 4:
              (A1 = u.stateNode.containerInfo), (pe = !0);
              break e;
          }
          u = u.return;
        }
        if (A1 === null) throw Error(T(160));
        c7(s, o, l), (A1 = null), (pe = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        d1(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) f7(t, e), (t = t.sibling);
}
function f7(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((de(t, e), ke(e), r & 4)) {
        try {
          K3(3, e, e.return), Y4(3, e);
        } catch (w) {
          d1(e, e.return, w);
        }
        try {
          K3(5, e, e.return);
        } catch (w) {
          d1(e, e.return, w);
        }
      }
      break;
    case 1:
      de(t, e), ke(e), r & 512 && n !== null && n3(n, n.return);
      break;
    case 5:
      if (
        (de(t, e),
        ke(e),
        r & 512 && n !== null && n3(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          et(l, "");
        } catch (w) {
          d1(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && s.type === "radio" && s.name != null && T8(l, s),
              M5(u, o);
            var c = M5(u, s);
            for (o = 0; o < a.length; o += 2) {
              var p = a[o],
                f = a[o + 1];
              p === "style"
                ? I8(l, f)
                : p === "dangerouslySetInnerHTML"
                ? R8(l, f)
                : p === "children"
                ? et(l, f)
                : vr(l, p, f, c);
            }
            switch (u) {
              case "input":
                g5(l, s);
                break;
              case "textarea":
                P8(l, s);
                break;
              case "select":
                var C = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? s3(l, !!s.multiple, v, !1)
                  : C !== !!s.multiple &&
                    (s.defaultValue != null
                      ? s3(l, !!s.multiple, s.defaultValue, !0)
                      : s3(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[at] = s;
          } catch (w) {
            d1(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((de(t, e), ke(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (w) {
          d1(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (de(t, e), ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          lt(t.containerInfo);
        } catch (w) {
          d1(e, e.return, w);
        }
      break;
    case 4:
      de(t, e), ke(e);
      break;
    case 13:
      de(t, e),
        ke(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Kr = h1())),
        r & 4 && _9(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((P1 = (c = P1) || p), de(t, e), (P1 = c)) : de(t, e),
        ke(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (V = e, p = e.child; p !== null; ) {
            for (f = V = p; V !== null; ) {
              switch (((C = V), (v = C.child), C.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  K3(4, C, C.return);
                  break;
                case 1:
                  n3(C, C.return);
                  var g = C.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = C), (n = C.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      d1(r, n, w);
                    }
                  }
                  break;
                case 5:
                  n3(C, C.return);
                  break;
                case 22:
                  if (C.memoizedState !== null) {
                    E9(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = C), (V = v)) : E9(f);
            }
            p = p.sibling;
          }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((u = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = z8("display", o)));
              } catch (w) {
                d1(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (p === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (w) {
                d1(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            p === f && (p = null), (f = f.return);
          }
          p === f && (p = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      de(t, e), ke(e), r & 4 && _9(e);
      break;
    case 21:
      break;
    default:
      de(t, e), ke(e);
  }
}
function ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (a7(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (et(l, ""), (r.flags &= -33));
          var s = A9(e);
          er(e, s, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = A9(e);
          J5(e, u, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (a) {
      d1(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ki(e, t, n) {
  (V = e), d7(e);
}
function d7(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var l = V,
      s = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ut;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || P1;
        u = Ut;
        var c = P1;
        if (((Ut = o), (P1 = a) && !c))
          for (V = l; V !== null; )
            (o = V),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? N9(l)
                : a !== null
                ? ((a.return = o), (V = a))
                : N9(l);
        for (; s !== null; ) (V = s), d7(s), (s = s.sibling);
        (V = l), (Ut = u), (P1 = c);
      }
      Z9(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (V = s)) : Z9(e);
  }
}
function Z9(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              P1 || Y4(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !P1)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ce(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && d9(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                d9(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var f = p.dehydrated;
                    f !== null && lt(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        P1 || (t.flags & 512 && b5(t));
      } catch (C) {
        d1(t, t.return, C);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function E9(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function N9(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Y4(4, t);
          } catch (a) {
            d1(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              d1(t, l, a);
            }
          }
          var s = t.return;
          try {
            b5(t);
          } catch (a) {
            d1(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            b5(t);
          } catch (a) {
            d1(t, o, a);
          }
      }
    } catch (a) {
      d1(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (V = u);
      break;
    }
    V = t.return;
  }
}
var ji = Math.ceil,
  M4 = Qe.ReactCurrentDispatcher,
  Xr = Qe.ReactCurrentOwner,
  oe = Qe.ReactCurrentBatchConfig,
  K = 0,
  j1 = null,
  y1 = null,
  _1 = 0,
  X1 = 0,
  r3 = y2(0),
  x1 = 0,
  ht = null,
  I2 = 0,
  X4 = 0,
  Gr = 0,
  q3 = null,
  B1 = null,
  Kr = 0,
  x3 = 1 / 0,
  Oe = null,
  L4 = !1,
  tr = null,
  u2 = null,
  Vt = !1,
  t2 = null,
  S4 = 0,
  b3 = 0,
  nr = null,
  t4 = -1,
  n4 = 0;
function I1() {
  return K & 6 ? h1() : t4 !== -1 ? t4 : (t4 = h1());
}
function a2(e) {
  return e.mode & 1
    ? K & 2 && _1 !== 0
      ? _1 & -_1
      : ii.transition !== null
      ? (n4 === 0 && (n4 = G8()), n4)
      : ((e = b),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : n0(e.type))),
        e)
    : 1;
}
function ge(e, t, n, r) {
  if (50 < b3) throw ((b3 = 0), (nr = null), Error(T(185)));
  xt(e, n, r),
    (!(K & 2) || e !== j1) &&
      (e === j1 && (!(K & 2) && (X4 |= n), x1 === 4 && be(e, _1)),
      H1(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((x3 = h1() + 500), W4 && g2()));
}
function H1(e, t) {
  var n = e.callbackNode;
  is(e, t);
  var r = a4(e, e === j1 ? _1 : 0);
  if (r === 0)
    n !== null && U6(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && U6(n), t === 1))
      e.tag === 0 ? si(T9.bind(null, e)) : w0(T9.bind(null, e)),
        ti(function () {
          !(K & 6) && g2();
        }),
        (n = null);
    else {
      switch (K8(r)) {
        case 1:
          n = kr;
          break;
        case 4:
          n = Y8;
          break;
        case 16:
          n = u4;
          break;
        case 536870912:
          n = X8;
          break;
        default:
          n = u4;
      }
      n = x7(n, C7.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function C7(e, t) {
  if (((t4 = -1), (n4 = 0), K & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (c3() && e.callbackNode !== n) return null;
  var r = a4(e, e === j1 ? _1 : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = A4(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var s = h7();
    (j1 !== e || _1 !== t) && ((Oe = null), (x3 = h1() + 500), N2(e, t));
    do
      try {
        Si();
        break;
      } catch (u) {
        p7(e, u);
      }
    while (1);
    Rr(),
      (M4.current = s),
      (K = l),
      y1 !== null ? (t = 0) : ((j1 = null), (_1 = 0), (t = x1));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Z5(e)), l !== 0 && ((r = l), (t = rr(e, l)))), t === 1)
    )
      throw ((n = ht), N2(e, 0), be(e, r), H1(e, h1()), n);
    if (t === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Mi(l) &&
          ((t = A4(e, r)),
          t === 2 && ((s = Z5(e)), s !== 0 && ((r = s), (t = rr(e, s)))),
          t === 1))
      )
        throw ((n = ht), N2(e, 0), be(e, r), H1(e, h1()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          L2(e, B1, Oe);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((t = Kr + 500 - h1()), 10 < t))
          ) {
            if (a4(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              I1(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = I5(L2.bind(null, e, B1, Oe), t);
            break;
          }
          L2(e, B1, Oe);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - ye(r);
            (s = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~s);
          }
          if (
            ((r = l),
            (r = h1() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ji(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = I5(L2.bind(null, e, B1, Oe), r);
            break;
          }
          L2(e, B1, Oe);
          break;
        case 5:
          L2(e, B1, Oe);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return H1(e, h1()), e.callbackNode === n ? C7.bind(null, e) : null;
}
function rr(e, t) {
  var n = q3;
  return (
    e.current.memoizedState.isDehydrated && (N2(e, t).flags |= 256),
    (e = A4(e, t)),
    e !== 2 && ((t = B1), (B1 = n), t !== null && lr(t)),
    e
  );
}
function lr(e) {
  B1 === null ? (B1 = e) : B1.push.apply(B1, e);
}
function Mi(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!xe(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function be(e, t) {
  for (
    t &= ~Gr,
      t &= ~X4,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ye(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function T9(e) {
  if (K & 6) throw Error(T(327));
  c3();
  var t = a4(e, 0);
  if (!(t & 1)) return H1(e, h1()), null;
  var n = A4(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Z5(e);
    r !== 0 && ((t = r), (n = rr(e, r)));
  }
  if (n === 1) throw ((n = ht), N2(e, 0), be(e, t), H1(e, h1()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    L2(e, B1, Oe),
    H1(e, h1()),
    null
  );
}
function qr(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((x3 = h1() + 500), W4 && g2());
  }
}
function D2(e) {
  t2 !== null && t2.tag === 0 && !(K & 6) && c3();
  var t = K;
  K |= 1;
  var n = oe.transition,
    r = b;
  try {
    if (((oe.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (oe.transition = n), (K = t), !(K & 6) && g2();
  }
}
function br() {
  (X1 = r3.current), r1(r3);
}
function N2(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ei(n)), y1 !== null))
    for (n = y1.return; n !== null; ) {
      var r = n;
      switch ((Tr(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && p4();
          break;
        case 3:
          y3(), r1(W1), r1(O1), Vr();
          break;
        case 5:
          Ur(r);
          break;
        case 4:
          y3();
          break;
        case 13:
          r1(u1);
          break;
        case 19:
          r1(u1);
          break;
        case 10:
          zr(r.type._context);
          break;
        case 22:
        case 23:
          br();
      }
      n = n.return;
    }
  if (
    ((j1 = e),
    (y1 = e = c2(e.current, null)),
    (_1 = X1 = t),
    (x1 = 0),
    (ht = null),
    (Gr = X4 = I2 = 0),
    (B1 = q3 = null),
    _2 !== null)
  ) {
    for (t = 0; t < _2.length; t++)
      if (((n = _2[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = l), (r.next = o);
        }
        n.pending = r;
      }
    _2 = null;
  }
  return e;
}
function p7(e, t) {
  do {
    var n = y1;
    try {
      if ((Rr(), (bt.current = j4), k4)) {
        for (var r = a1.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        k4 = !1;
      }
      if (
        ((z2 = 0),
        (k1 = g1 = a1 = null),
        (G3 = !1),
        (dt = 0),
        (Xr.current = null),
        n === null || n.return === null)
      ) {
        (x1 = 1), (ht = t), (y1 = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = _1),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            p = u,
            f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var C = p.alternate;
            C
              ? ((p.updateQueue = C.updateQueue),
                (p.memoizedState = C.memoizedState),
                (p.lanes = C.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = g9(o);
          if (v !== null) {
            (v.flags &= -257),
              x9(v, o, u, s, t),
              v.mode & 1 && y9(s, c, t),
              (t = v),
              (a = c);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              y9(s, c, t), Jr();
              break e;
            }
            a = Error(T(426));
          }
        } else if (o1 && u.mode & 1) {
          var P = g9(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              x9(P, o, u, s, t),
              Pr(g3(a, u));
            break e;
          }
        }
        (s = a = g3(a, u)),
          x1 !== 4 && (x1 = 2),
          q3 === null ? (q3 = [s]) : q3.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = q0(s, a, t);
              f9(s, m);
              break e;
            case 1:
              u = a;
              var d = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (u2 === null || !u2.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var x = b0(s, u, t);
                f9(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      v7(n);
    } catch (S) {
      (t = S), y1 === n && n !== null && (y1 = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function h7() {
  var e = M4.current;
  return (M4.current = j4), e === null ? j4 : e;
}
function Jr() {
  (x1 === 0 || x1 === 3 || x1 === 2) && (x1 = 4),
    j1 === null || (!(I2 & 268435455) && !(X4 & 268435455)) || be(j1, _1);
}
function A4(e, t) {
  var n = K;
  K |= 2;
  var r = h7();
  (j1 !== e || _1 !== t) && ((Oe = null), N2(e, t));
  do
    try {
      Li();
      break;
    } catch (l) {
      p7(e, l);
    }
  while (1);
  if ((Rr(), (K = n), (M4.current = r), y1 !== null)) throw Error(T(261));
  return (j1 = null), (_1 = 0), x1;
}
function Li() {
  for (; y1 !== null; ) m7(y1);
}
function Si() {
  for (; y1 !== null && !ql(); ) m7(y1);
}
function m7(e) {
  var t = g7(e.alternate, e, X1);
  (e.memoizedProps = e.pendingProps),
    t === null ? v7(e) : (y1 = t),
    (Xr.current = null);
}
function v7(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = gi(n, t)), n !== null)) {
        (n.flags &= 32767), (y1 = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (x1 = 6), (y1 = null);
        return;
      }
    } else if (((n = yi(n, t, X1)), n !== null)) {
      y1 = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      y1 = t;
      return;
    }
    y1 = t = e;
  } while (t !== null);
  x1 === 0 && (x1 = 5);
}
function L2(e, t, n) {
  var r = b,
    l = oe.transition;
  try {
    (oe.transition = null), (b = 1), Ai(e, t, n, r);
  } finally {
    (oe.transition = l), (b = r);
  }
  return null;
}
function Ai(e, t, n, r) {
  do c3();
  while (t2 !== null);
  if (K & 6) throw Error(T(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (os(e, s),
    e === j1 && ((y1 = j1 = null), (_1 = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vt ||
      ((Vt = !0),
      x7(u4, function () {
        return c3(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = oe.transition), (oe.transition = null);
    var o = b;
    b = 1;
    var u = K;
    (K |= 4),
      (Xr.current = null),
      wi(e, n),
      f7(n, e),
      Ys(R5),
      (c4 = !!O5),
      (R5 = O5 = null),
      (e.current = n),
      ki(n),
      bl(),
      (K = u),
      (b = o),
      (oe.transition = s);
  } else e.current = n;
  if (
    (Vt && ((Vt = !1), (t2 = e), (S4 = l)),
    (s = e.pendingLanes),
    s === 0 && (u2 = null),
    ts(n.stateNode),
    H1(e, h1()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (L4) throw ((L4 = !1), (e = tr), (tr = null), e);
  return (
    S4 & 1 && e.tag !== 0 && c3(),
    (s = e.pendingLanes),
    s & 1 ? (e === nr ? b3++ : ((b3 = 0), (nr = e))) : (b3 = 0),
    g2(),
    null
  );
}
function c3() {
  if (t2 !== null) {
    var e = K8(S4),
      t = oe.transition,
      n = b;
    try {
      if (((oe.transition = null), (b = 16 > e ? 16 : e), t2 === null))
        var r = !1;
      else {
        if (((e = t2), (t2 = null), (S4 = 0), K & 6)) throw Error(T(331));
        var l = K;
        for (K |= 4, V = e.current; V !== null; ) {
          var s = V,
            o = s.child;
          if (V.flags & 16) {
            var u = s.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (V = c; V !== null; ) {
                  var p = V;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      K3(8, p, s);
                  }
                  var f = p.child;
                  if (f !== null) (f.return = p), (V = f);
                  else
                    for (; V !== null; ) {
                      p = V;
                      var C = p.sibling,
                        v = p.return;
                      if ((u7(p), p === c)) {
                        V = null;
                        break;
                      }
                      if (C !== null) {
                        (C.return = v), (V = C);
                        break;
                      }
                      V = v;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var P = w.sibling;
                    (w.sibling = null), (w = P);
                  } while (w !== null);
                }
              }
              V = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (V = o);
          else
            e: for (; V !== null; ) {
              if (((s = V), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    K3(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (V = m);
                break e;
              }
              V = s.return;
            }
        }
        var d = e.current;
        for (V = d; V !== null; ) {
          o = V;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (V = h);
          else
            e: for (o = d; V !== null; ) {
              if (((u = V), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Y4(9, u);
                  }
                } catch (S) {
                  d1(u, u.return, S);
                }
              if (u === o) {
                V = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (V = x);
                break e;
              }
              V = u.return;
            }
        }
        if (
          ((K = l), g2(), _e && typeof _e.onPostCommitFiberRoot == "function")
        )
          try {
            _e.onPostCommitFiberRoot(F4, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (oe.transition = t);
    }
  }
  return !1;
}
function P9(e, t, n) {
  (t = g3(n, t)),
    (t = q0(e, t, 1)),
    (e = o2(e, t, 1)),
    (t = I1()),
    e !== null && (xt(e, 1, t), H1(e, t));
}
function d1(e, t, n) {
  if (e.tag === 3) P9(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        P9(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (u2 === null || !u2.has(r)))
        ) {
          (e = g3(n, e)),
            (e = b0(t, e, 1)),
            (t = o2(t, e, 1)),
            (e = I1()),
            t !== null && (xt(t, 1, e), H1(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _i(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = I1()),
    (e.pingedLanes |= e.suspendedLanes & n),
    j1 === e &&
      (_1 & n) === n &&
      (x1 === 4 || (x1 === 3 && (_1 & 130023424) === _1 && 500 > h1() - Kr)
        ? N2(e, 0)
        : (Gr |= n)),
    H1(e, t);
}
function y7(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nt), (Nt <<= 1), !(Nt & 130023424) && (Nt = 4194304))
      : (t = 1));
  var n = I1();
  (e = Be(e, t)), e !== null && (xt(e, t, n), H1(e, n));
}
function Zi(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), y7(e, n);
}
function Ei(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), y7(e, n);
}
var g7;
g7 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || W1.current) $1 = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ($1 = !1), vi(e, t, n);
      $1 = !!(e.flags & 131072);
    }
  else ($1 = !1), o1 && t.flags & 1048576 && k0(t, v4, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      e4(e, t), (e = t.pendingProps);
      var l = h3(t, O1.current);
      a3(t, n), (l = $r(null, t, r, e, l, n));
      var s = Wr();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Q1(r) ? ((s = !0), h4(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Dr(t),
            (l.updater = Q4),
            (t.stateNode = l),
            (l._reactInternals = t),
            W5(t, r, e, n),
            (t = Y5(null, t, r, !0, s, n)))
          : ((t.tag = 0), o1 && s && Nr(t), R1(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (e4(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ti(r)),
          (e = Ce(r, e)),
          l)
        ) {
          case 0:
            t = H5(null, t, r, e, n);
            break e;
          case 1:
            t = j9(null, t, r, e, n);
            break e;
          case 11:
            t = w9(null, t, r, e, n);
            break e;
          case 14:
            t = k9(null, t, r, Ce(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ce(r, l)),
        H5(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ce(r, l)),
        j9(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((n7(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          S0(e, t),
          x4(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (l = g3(Error(T(423)), t)), (t = M9(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = g3(Error(T(424)), t)), (t = M9(e, t, r, n, l));
            break e;
          } else
            for (
              G1 = i2(t.stateNode.containerInfo.firstChild),
                K1 = t,
                o1 = !0,
                he = null,
                n = E0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((m3(), r === l)) {
            t = $e(e, t, n);
            break e;
          }
          R1(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        N0(t),
        e === null && V5(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = l.children),
        z5(r, l) ? (o = null) : s !== null && z5(r, s) && (t.flags |= 32),
        t7(e, t),
        R1(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && V5(t), null;
    case 13:
      return r7(e, t, n);
    case 4:
      return (
        Fr(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = v3(t, null, r, n)) : R1(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ce(r, l)),
        w9(e, t, r, l, n)
      );
    case 7:
      return R1(e, t, t.pendingProps, n), t.child;
    case 8:
      return R1(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return R1(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (o = l.value),
          t1(y4, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (xe(s.value, o)) {
            if (s.children === l.children && !W1.current) {
              t = $e(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var u = s.dependencies;
              if (u !== null) {
                o = s.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Fe(-1, n & -n)), (a.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (c.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      B5(s.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(T(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  B5(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        R1(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        a3(t, n),
        (l = ue(l)),
        (r = r(l)),
        (t.flags |= 1),
        R1(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ce(r, t.pendingProps)),
        (l = Ce(r.type, l)),
        k9(e, t, r, l, n)
      );
    case 15:
      return J0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ce(r, l)),
        e4(e, t),
        (t.tag = 1),
        Q1(r) ? ((e = !0), h4(t)) : (e = !1),
        a3(t, n),
        _0(t, r, l),
        W5(t, r, l, n),
        Y5(null, t, r, !0, e, n)
      );
    case 19:
      return l7(e, t, n);
    case 22:
      return e7(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function x7(e, t) {
  return H8(e, t);
}
function Ni(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ie(e, t, n, r) {
  return new Ni(e, t, n, r);
}
function e6(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ti(e) {
  if (typeof e == "function") return e6(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gr)) return 11;
    if (e === xr) return 14;
  }
  return 2;
}
function c2(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function r4(e, t, n, r, l, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) e6(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Y2:
        return T2(n.children, l, s, t);
      case yr:
        (o = 8), (l |= 8);
        break;
      case p5:
        return (
          (e = ie(12, n, t, l | 2)), (e.elementType = p5), (e.lanes = s), e
        );
      case h5:
        return (e = ie(13, n, t, l)), (e.elementType = h5), (e.lanes = s), e;
      case m5:
        return (e = ie(19, n, t, l)), (e.elementType = m5), (e.lanes = s), e;
      case Z8:
        return G4(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case A8:
              o = 10;
              break e;
            case _8:
              o = 9;
              break e;
            case gr:
              o = 11;
              break e;
            case xr:
              o = 14;
              break e;
            case Ge:
              (o = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ie(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function T2(e, t, n, r) {
  return (e = ie(7, e, r, t)), (e.lanes = n), e;
}
function G4(e, t, n, r) {
  return (
    (e = ie(22, e, r, t)),
    (e.elementType = Z8),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gn(e, t, n) {
  return (e = ie(6, e, null, t)), (e.lanes = n), e;
}
function Kn(e, t, n) {
  return (
    (t = ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pi(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = En(0)),
    (this.expirationTimes = En(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = En(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function t6(e, t, n, r, l, s, o, u, a) {
  return (
    (e = new Pi(e, t, n, u, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ie(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Dr(s),
    e
  );
}
function Oi(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: H2,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function w7(e) {
  if (!e) return p2;
  e = e._reactInternals;
  e: {
    if (V2(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Q1(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Q1(n)) return x0(e, n, t);
  }
  return t;
}
function k7(e, t, n, r, l, s, o, u, a) {
  return (
    (e = t6(n, r, !0, e, l, s, o, u, a)),
    (e.context = w7(null)),
    (n = e.current),
    (r = I1()),
    (l = a2(n)),
    (s = Fe(r, l)),
    (s.callback = t ?? null),
    o2(n, s, l),
    (e.current.lanes = l),
    xt(e, l, r),
    H1(e, r),
    e
  );
}
function K4(e, t, n, r) {
  var l = t.current,
    s = I1(),
    o = a2(l);
  return (
    (n = w7(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Fe(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = o2(l, t, o)),
    e !== null && (ge(e, l, o, s), qt(e, l, o)),
    o
  );
}
function _4(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function O9(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function n6(e, t) {
  O9(e, t), (e = e.alternate) && O9(e, t);
}
function Ri() {
  return null;
}
var j7 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function r6(e) {
  this._internalRoot = e;
}
q4.prototype.render = r6.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  K4(e, t, null, null);
};
q4.prototype.unmount = r6.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    D2(function () {
      K4(null, e, null, null);
    }),
      (t[Ve] = null);
  }
};
function q4(e) {
  this._internalRoot = e;
}
q4.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = J8();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qe.length && t !== 0 && t < qe[n].priority; n++);
    qe.splice(n, 0, e), n === 0 && t0(e);
  }
};
function l6(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function b4(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function R9() {}
function zi(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = _4(o);
        s.call(c);
      };
    }
    var o = k7(t, r, e, 0, null, !1, !1, "", R9);
    return (
      (e._reactRootContainer = o),
      (e[Ve] = o.current),
      ot(e.nodeType === 8 ? e.parentNode : e),
      D2(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = _4(a);
      u.call(c);
    };
  }
  var a = t6(e, 0, !1, null, null, !1, !1, "", R9);
  return (
    (e._reactRootContainer = a),
    (e[Ve] = a.current),
    ot(e.nodeType === 8 ? e.parentNode : e),
    D2(function () {
      K4(t, a, n, r);
    }),
    a
  );
}
function J4(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = _4(o);
        u.call(a);
      };
    }
    K4(t, o, e, l);
  } else o = zi(n, t, e, l, r);
  return _4(o);
}
q8 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = V3(t.pendingLanes);
        n !== 0 &&
          (jr(t, n | 1), H1(t, h1()), !(K & 6) && ((x3 = h1() + 500), g2()));
      }
      break;
    case 13:
      D2(function () {
        var r = Be(e, 1);
        if (r !== null) {
          var l = I1();
          ge(r, e, 1, l);
        }
      }),
        n6(e, 1);
  }
};
Mr = function (e) {
  if (e.tag === 13) {
    var t = Be(e, 134217728);
    if (t !== null) {
      var n = I1();
      ge(t, e, 134217728, n);
    }
    n6(e, 134217728);
  }
};
b8 = function (e) {
  if (e.tag === 13) {
    var t = a2(e),
      n = Be(e, t);
    if (n !== null) {
      var r = I1();
      ge(n, e, t, r);
    }
    n6(e, t);
  }
};
J8 = function () {
  return b;
};
e0 = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
S5 = function (e, t, n) {
  switch (t) {
    case "input":
      if ((g5(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = $4(r);
            if (!l) throw Error(T(90));
            N8(r), g5(r, l);
          }
        }
      }
      break;
    case "textarea":
      P8(e, n);
      break;
    case "select":
      (t = n.value), t != null && s3(e, !!n.multiple, t, !1);
  }
};
U8 = qr;
V8 = D2;
var Ii = { usingClientEntryPoint: !1, Events: [kt, q2, $4, D8, F8, qr] },
  z3 = {
    findFiberByHostInstance: A2,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Di = {
    bundleType: z3.bundleType,
    version: z3.version,
    rendererPackageName: z3.rendererPackageName,
    rendererConfig: z3.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = W8(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: z3.findFiberByHostInstance || Ri,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Bt = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bt.isDisabled && Bt.supportsFiber)
    try {
      (F4 = Bt.inject(Di)), (_e = Bt);
    } catch {}
}
J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ii;
J1.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!l6(t)) throw Error(T(200));
  return Oi(e, t, null, n);
};
J1.createRoot = function (e, t) {
  if (!l6(e)) throw Error(T(299));
  var n = !1,
    r = "",
    l = j7;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = t6(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ve] = t.current),
    ot(e.nodeType === 8 ? e.parentNode : e),
    new r6(t)
  );
};
J1.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = W8(t)), (e = e === null ? null : e.stateNode), e;
};
J1.flushSync = function (e) {
  return D2(e);
};
J1.hydrate = function (e, t, n) {
  if (!b4(t)) throw Error(T(200));
  return J4(null, e, t, !0, n);
};
J1.hydrateRoot = function (e, t, n) {
  if (!l6(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    o = j7;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = k7(t, null, e, 1, n ?? null, l, !1, s, o)),
    (e[Ve] = t.current),
    ot(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new q4(t);
};
J1.render = function (e, t, n) {
  if (!b4(t)) throw Error(T(200));
  return J4(null, e, t, !1, n);
};
J1.unmountComponentAtNode = function (e) {
  if (!b4(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (D2(function () {
        J4(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ve] = null);
        });
      }),
      !0)
    : !1;
};
J1.unstable_batchedUpdates = qr;
J1.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!b4(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return J4(e, t, n, !1, r);
};
J1.version = "18.2.0-next-9e3b772b8-20220608";
function M7() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M7);
    } catch (e) {
      console.error(e);
    }
}
M7(), (k8.exports = J1);
var L7 = k8.exports,
  z9 = L7;
(d5.createRoot = z9.createRoot), (d5.hydrateRoot = z9.hydrateRoot);
var S7 = { exports: {} },
  A7 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var w3 = R;
function Fi(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ui = typeof Object.is == "function" ? Object.is : Fi,
  Vi = w3.useState,
  Bi = w3.useEffect,
  $i = w3.useLayoutEffect,
  Wi = w3.useDebugValue;
function Qi(e, t) {
  var n = t(),
    r = Vi({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    s = r[1];
  return (
    $i(
      function () {
        (l.value = n), (l.getSnapshot = t), qn(l) && s({ inst: l });
      },
      [e, n, t]
    ),
    Bi(
      function () {
        return (
          qn(l) && s({ inst: l }),
          e(function () {
            qn(l) && s({ inst: l });
          })
        );
      },
      [e]
    ),
    Wi(n),
    n
  );
}
function qn(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ui(e, n);
  } catch {
    return !0;
  }
}
function Hi(e, t) {
  return t();
}
var Yi =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Hi
    : Qi;
A7.useSyncExternalStore =
  w3.useSyncExternalStore !== void 0 ? w3.useSyncExternalStore : Yi;
S7.exports = A7;
var Xi = S7.exports,
  _7 = { exports: {} },
  Z7 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var en = R,
  Gi = Xi;
function Ki(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qi = typeof Object.is == "function" ? Object.is : Ki,
  bi = Gi.useSyncExternalStore,
  Ji = en.useRef,
  eo = en.useEffect,
  to = en.useMemo,
  no = en.useDebugValue;
Z7.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var s = Ji(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = to(
    function () {
      function a(v) {
        if (!c) {
          if (((c = !0), (p = v), (v = r(v)), l !== void 0 && o.hasValue)) {
            var g = o.value;
            if (l(g, v)) return (f = g);
          }
          return (f = v);
        }
        if (((g = f), qi(p, v))) return g;
        var w = r(v);
        return l !== void 0 && l(g, w) ? g : ((p = v), (f = w));
      }
      var c = !1,
        p,
        f,
        C = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        C === null
          ? void 0
          : function () {
              return a(C());
            },
      ];
    },
    [t, n, r, l]
  );
  var u = bi(e, s[0], s[1]);
  return (
    eo(
      function () {
        (o.hasValue = !0), (o.value = u);
      },
      [u]
    ),
    no(u),
    u
  );
};
_7.exports = Z7;
var ro = _7.exports;
function lo(e) {
  e();
}
let E7 = lo;
const so = (e) => (E7 = e),
  io = () => E7,
  I9 = Symbol.for("react-redux-context"),
  D9 = typeof globalThis < "u" ? globalThis : {};
function oo() {
  var e;
  if (!R.createContext) return {};
  const t = (e = D9[I9]) != null ? e : (D9[I9] = new Map());
  let n = t.get(R.createContext);
  return n || ((n = R.createContext(null)), t.set(R.createContext, n)), n;
}
const h2 = oo();
function s6(e = h2) {
  return function () {
    return R.useContext(e);
  };
}
const N7 = s6(),
  uo = () => {
    throw new Error("uSES not initialized!");
  };
let T7 = uo;
const ao = (e) => {
    T7 = e;
  },
  co = (e, t) => e === t;
function fo(e = h2) {
  const t = e === h2 ? N7 : s6(e);
  return function (r, l = {}) {
    const {
        equalityFn: s = co,
        stabilityCheck: o = void 0,
        noopCheck: u = void 0,
      } = typeof l == "function" ? { equalityFn: l } : l,
      {
        store: a,
        subscription: c,
        getServerState: p,
        stabilityCheck: f,
        noopCheck: C,
      } = t();
    R.useRef(!0);
    const v = R.useCallback(
        {
          [r.name](w) {
            return r(w);
          },
        }[r.name],
        [r, f, o]
      ),
      g = T7(c.addNestedSub, a.getState, p || a.getState, v, s);
    return R.useDebugValue(g), g;
  };
}
const Co = fo();
var P7 = { exports: {} },
  J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var M1 = typeof Symbol == "function" && Symbol.for,
  i6 = M1 ? Symbol.for("react.element") : 60103,
  o6 = M1 ? Symbol.for("react.portal") : 60106,
  tn = M1 ? Symbol.for("react.fragment") : 60107,
  nn = M1 ? Symbol.for("react.strict_mode") : 60108,
  rn = M1 ? Symbol.for("react.profiler") : 60114,
  ln = M1 ? Symbol.for("react.provider") : 60109,
  sn = M1 ? Symbol.for("react.context") : 60110,
  u6 = M1 ? Symbol.for("react.async_mode") : 60111,
  on = M1 ? Symbol.for("react.concurrent_mode") : 60111,
  un = M1 ? Symbol.for("react.forward_ref") : 60112,
  an = M1 ? Symbol.for("react.suspense") : 60113,
  po = M1 ? Symbol.for("react.suspense_list") : 60120,
  cn = M1 ? Symbol.for("react.memo") : 60115,
  fn = M1 ? Symbol.for("react.lazy") : 60116,
  ho = M1 ? Symbol.for("react.block") : 60121,
  mo = M1 ? Symbol.for("react.fundamental") : 60117,
  vo = M1 ? Symbol.for("react.responder") : 60118,
  yo = M1 ? Symbol.for("react.scope") : 60119;
function te(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case i6:
        switch (((e = e.type), e)) {
          case u6:
          case on:
          case tn:
          case rn:
          case nn:
          case an:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case sn:
              case un:
              case fn:
              case cn:
              case ln:
                return e;
              default:
                return t;
            }
        }
      case o6:
        return t;
    }
  }
}
function O7(e) {
  return te(e) === on;
}
J.AsyncMode = u6;
J.ConcurrentMode = on;
J.ContextConsumer = sn;
J.ContextProvider = ln;
J.Element = i6;
J.ForwardRef = un;
J.Fragment = tn;
J.Lazy = fn;
J.Memo = cn;
J.Portal = o6;
J.Profiler = rn;
J.StrictMode = nn;
J.Suspense = an;
J.isAsyncMode = function (e) {
  return O7(e) || te(e) === u6;
};
J.isConcurrentMode = O7;
J.isContextConsumer = function (e) {
  return te(e) === sn;
};
J.isContextProvider = function (e) {
  return te(e) === ln;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === i6;
};
J.isForwardRef = function (e) {
  return te(e) === un;
};
J.isFragment = function (e) {
  return te(e) === tn;
};
J.isLazy = function (e) {
  return te(e) === fn;
};
J.isMemo = function (e) {
  return te(e) === cn;
};
J.isPortal = function (e) {
  return te(e) === o6;
};
J.isProfiler = function (e) {
  return te(e) === rn;
};
J.isStrictMode = function (e) {
  return te(e) === nn;
};
J.isSuspense = function (e) {
  return te(e) === an;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === tn ||
    e === on ||
    e === rn ||
    e === nn ||
    e === an ||
    e === po ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === fn ||
        e.$$typeof === cn ||
        e.$$typeof === ln ||
        e.$$typeof === sn ||
        e.$$typeof === un ||
        e.$$typeof === mo ||
        e.$$typeof === vo ||
        e.$$typeof === yo ||
        e.$$typeof === ho))
  );
};
J.typeOf = te;
P7.exports = J;
var go = P7.exports,
  R7 = go,
  xo = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  wo = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  z7 = {};
z7[R7.ForwardRef] = xo;
z7[R7.Memo] = wo;
var e1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a6 = Symbol.for("react.element"),
  c6 = Symbol.for("react.portal"),
  dn = Symbol.for("react.fragment"),
  Cn = Symbol.for("react.strict_mode"),
  pn = Symbol.for("react.profiler"),
  hn = Symbol.for("react.provider"),
  mn = Symbol.for("react.context"),
  ko = Symbol.for("react.server_context"),
  vn = Symbol.for("react.forward_ref"),
  yn = Symbol.for("react.suspense"),
  gn = Symbol.for("react.suspense_list"),
  xn = Symbol.for("react.memo"),
  wn = Symbol.for("react.lazy"),
  jo = Symbol.for("react.offscreen"),
  I7;
I7 = Symbol.for("react.module.reference");
function ce(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case a6:
        switch (((e = e.type), e)) {
          case dn:
          case pn:
          case Cn:
          case yn:
          case gn:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ko:
              case mn:
              case vn:
              case wn:
              case xn:
              case hn:
                return e;
              default:
                return t;
            }
        }
      case c6:
        return t;
    }
  }
}
e1.ContextConsumer = mn;
e1.ContextProvider = hn;
e1.Element = a6;
e1.ForwardRef = vn;
e1.Fragment = dn;
e1.Lazy = wn;
e1.Memo = xn;
e1.Portal = c6;
e1.Profiler = pn;
e1.StrictMode = Cn;
e1.Suspense = yn;
e1.SuspenseList = gn;
e1.isAsyncMode = function () {
  return !1;
};
e1.isConcurrentMode = function () {
  return !1;
};
e1.isContextConsumer = function (e) {
  return ce(e) === mn;
};
e1.isContextProvider = function (e) {
  return ce(e) === hn;
};
e1.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === a6;
};
e1.isForwardRef = function (e) {
  return ce(e) === vn;
};
e1.isFragment = function (e) {
  return ce(e) === dn;
};
e1.isLazy = function (e) {
  return ce(e) === wn;
};
e1.isMemo = function (e) {
  return ce(e) === xn;
};
e1.isPortal = function (e) {
  return ce(e) === c6;
};
e1.isProfiler = function (e) {
  return ce(e) === pn;
};
e1.isStrictMode = function (e) {
  return ce(e) === Cn;
};
e1.isSuspense = function (e) {
  return ce(e) === yn;
};
e1.isSuspenseList = function (e) {
  return ce(e) === gn;
};
e1.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === dn ||
    e === pn ||
    e === Cn ||
    e === yn ||
    e === gn ||
    e === jo ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === wn ||
        e.$$typeof === xn ||
        e.$$typeof === hn ||
        e.$$typeof === mn ||
        e.$$typeof === vn ||
        e.$$typeof === I7 ||
        e.getModuleId !== void 0))
  );
};
e1.typeOf = ce;
function Mo() {
  const e = io();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        l = t;
      for (; l; ) r.push(l), (l = l.next);
      return r;
    },
    subscribe(r) {
      let l = !0,
        s = (n = { callback: r, next: null, prev: n });
      return (
        s.prev ? (s.prev.next = s) : (t = s),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            s.next ? (s.next.prev = s.prev) : (n = s.prev),
            s.prev ? (s.prev.next = s.next) : (t = s.next));
        }
      );
    },
  };
}
const F9 = { notify() {}, get: () => [] };
function Lo(e, t) {
  let n,
    r = F9;
  function l(f) {
    return a(), r.subscribe(f);
  }
  function s() {
    r.notify();
  }
  function o() {
    p.onStateChange && p.onStateChange();
  }
  function u() {
    return !!n;
  }
  function a() {
    n || ((n = t ? t.addNestedSub(o) : e.subscribe(o)), (r = Mo()));
  }
  function c() {
    n && (n(), (n = void 0), r.clear(), (r = F9));
  }
  const p = {
    addNestedSub: l,
    notifyNestedSubs: s,
    handleChangeWrapper: o,
    isSubscribed: u,
    trySubscribe: a,
    tryUnsubscribe: c,
    getListeners: () => r,
  };
  return p;
}
const So =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ao = So ? R.useLayoutEffect : R.useEffect;
function _o({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  noopCheck: s = "once",
}) {
  const o = R.useMemo(() => {
      const c = Lo(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: s,
      };
    }, [e, r, l, s]),
    u = R.useMemo(() => e.getState(), [e]);
  Ao(() => {
    const { subscription: c } = o;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      u !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [o, u]);
  const a = t || h2;
  return R.createElement(a.Provider, { value: o }, n);
}
function D7(e = h2) {
  const t = e === h2 ? N7 : s6(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Zo = D7();
function Eo(e = h2) {
  const t = e === h2 ? Zo : D7(e);
  return function () {
    return t().dispatch;
  };
}
const No = Eo();
ao(ro.useSyncExternalStoreWithSelector);
so(L7.unstable_batchedUpdates);
const F7 = "" + new URL("logo-2083e589.svg", import.meta.url).href,
  To = "" + new URL("orientation-232b6c72.svg", import.meta.url).href;
function Po() {
  const [e, t] = R.useState(!1),
    n = () => {
      t(!0);
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: "orientation " + (e ? "active" : "no-active"),
      children: [
        i.jsx("div", {
          className: "orientation__logo",
          children: i.jsx("img", {
            src: F7,
            alt: "logo",
            className: "main__logo-img",
          }),
        }),
        i.jsxs("div", {
          className: "orientation__vertical",
          children: [
            i.jsx("img", {
              src: To,
              alt: "orientation",
              className: "orientation__img",
            }),
            i.jsxs("h2", {
              className: "orientation__title",
              children: [
                "Поверни телефон, чтобы ",
                e ? "продолжить" : "начать",
                " игру",
              ],
            }),
          ],
        }),
        i.jsx("button", {
          className: "main__btn btn",
          onClick: n,
          children: "НАЧАТЬ",
        }),
      ],
    }),
  });
}
function me(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (l) {
              return "'" + l + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function m2(e) {
  return !!e && !!e[i1];
}
function We(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var l = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        l === Object ||
        (typeof l == "function" && Function.toString.call(l) === Bo)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[H9] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[H9]) ||
      f6(e) ||
      d6(e))
  );
}
function F2(e, t, n) {
  n === void 0 && (n = !1),
    S3(e) === 0
      ? (n ? Object.keys : d3)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, l) {
          return t(l, r, e);
        });
}
function S3(e) {
  var t = e[i1];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : f6(e)
    ? 2
    : d6(e)
    ? 3
    : 0;
}
function f3(e, t) {
  return S3(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Oo(e, t) {
  return S3(e) === 2 ? e.get(t) : e[t];
}
function U7(e, t, n) {
  var r = S3(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function V7(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function f6(e) {
  return Uo && e instanceof Map;
}
function d6(e) {
  return Vo && e instanceof Set;
}
function S2(e) {
  return e.o || e.t;
}
function C6(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = $7(e);
  delete t[i1];
  for (var n = d3(t), r = 0; r < n.length; r++) {
    var l = n[r],
      s = t[l];
    s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) &&
        (t[l] = {
          configurable: !0,
          writable: !0,
          enumerable: s.enumerable,
          value: e[l],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function p6(e, t) {
  return (
    t === void 0 && (t = !1),
    h6(e) ||
      m2(e) ||
      !We(e) ||
      (S3(e) > 1 && (e.set = e.add = e.clear = e.delete = Ro),
      Object.freeze(e),
      t &&
        F2(
          e,
          function (n, r) {
            return p6(r, !0);
          },
          !0
        )),
    e
  );
}
function Ro() {
  me(2);
}
function h6(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ee(e) {
  var t = ur[e];
  return t || me(18, e), t;
}
function zo(e, t) {
  ur[e] || (ur[e] = t);
}
function sr() {
  return mt;
}
function bn(e, t) {
  t && (Ee("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Z4(e) {
  ir(e), e.p.forEach(Io), (e.p = null);
}
function ir(e) {
  e === mt && (mt = e.l);
}
function U9(e) {
  return (mt = { p: [], l: mt, h: e, m: !0, _: 0 });
}
function Io(e) {
  var t = e[i1];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function Jn(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || Ee("ES5").S(t, e, r),
    r
      ? (n[i1].P && (Z4(t), me(4)),
        We(e) && ((e = E4(t, e)), t.l || N4(t, e)),
        t.u && Ee("Patches").M(n[i1].t, e, t.u, t.s))
      : (e = E4(t, n, [])),
    Z4(t),
    t.u && t.v(t.u, t.s),
    e !== B7 ? e : void 0
  );
}
function E4(e, t, n) {
  if (h6(t)) return t;
  var r = t[i1];
  if (!r)
    return (
      F2(
        t,
        function (u, a) {
          return V9(e, r, t, u, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return N4(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var l = r.i === 4 || r.i === 5 ? (r.o = C6(r.k)) : r.o,
      s = l,
      o = !1;
    r.i === 3 && ((s = new Set(l)), l.clear(), (o = !0)),
      F2(s, function (u, a) {
        return V9(e, r, l, u, a, n, o);
      }),
      N4(e, l, !1),
      n && e.u && Ee("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function V9(e, t, n, r, l, s, o) {
  if (m2(l)) {
    var u = E4(e, l, s && t && t.i !== 3 && !f3(t.R, r) ? s.concat(r) : void 0);
    if ((U7(n, r, u), !m2(u))) return;
    e.m = !1;
  } else o && n.add(l);
  if (We(l) && !h6(l)) {
    if (!e.h.D && e._ < 1) return;
    E4(e, l), (t && t.A.l) || N4(e, l);
  }
}
function N4(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && p6(t, n);
}
function e5(e, t) {
  var n = e[i1];
  return (n ? S2(n) : e)[t];
}
function B9(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Je(e) {
  e.P || ((e.P = !0), e.l && Je(e.l));
}
function t5(e) {
  e.o || (e.o = C6(e.t));
}
function or(e, t, n) {
  var r = f6(t)
    ? Ee("MapSet").F(t, n)
    : d6(t)
    ? Ee("MapSet").T(t, n)
    : e.O
    ? (function (l, s) {
        var o = Array.isArray(l),
          u = {
            i: o ? 1 : 0,
            A: s ? s.A : sr(),
            P: !1,
            I: !1,
            R: {},
            l: s,
            t: l,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = u,
          c = vt;
        o && ((a = [u]), (c = $3));
        var p = Proxy.revocable(a, c),
          f = p.revoke,
          C = p.proxy;
        return (u.k = C), (u.j = f), C;
      })(t, n)
    : Ee("ES5").J(t, n);
  return (n ? n.A : sr()).p.push(r), r;
}
function Do(e) {
  return (
    m2(e) || me(22, e),
    (function t(n) {
      if (!We(n)) return n;
      var r,
        l = n[i1],
        s = S3(n);
      if (l) {
        if (!l.P && (l.i < 4 || !Ee("ES5").K(l))) return l.t;
        (l.I = !0), (r = $9(n, s)), (l.I = !1);
      } else r = $9(n, s);
      return (
        F2(r, function (o, u) {
          (l && Oo(l.t, o) === u) || U7(r, o, t(u));
        }),
        s === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function $9(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return C6(e);
}
function Fo() {
  function e(s, o) {
    var u = l[s];
    return (
      u
        ? (u.enumerable = o)
        : (l[s] = u =
            {
              configurable: !0,
              enumerable: o,
              get: function () {
                var a = this[i1];
                return vt.get(a, s);
              },
              set: function (a) {
                var c = this[i1];
                vt.set(c, s, a);
              },
            }),
      u
    );
  }
  function t(s) {
    for (var o = s.length - 1; o >= 0; o--) {
      var u = s[o][i1];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && Je(u);
            break;
          case 4:
            n(u) && Je(u);
        }
    }
  }
  function n(s) {
    for (var o = s.t, u = s.k, a = d3(u), c = a.length - 1; c >= 0; c--) {
      var p = a[c];
      if (p !== i1) {
        var f = o[p];
        if (f === void 0 && !f3(o, p)) return !0;
        var C = u[p],
          v = C && C[i1];
        if (v ? v.t !== f : !V7(C, f)) return !0;
      }
    }
    var g = !!o[i1];
    return a.length !== d3(o).length + (g ? 0 : 1);
  }
  function r(s) {
    var o = s.k;
    if (o.length !== s.t.length) return !0;
    var u = Object.getOwnPropertyDescriptor(o, o.length - 1);
    if (u && !u.get) return !0;
    for (var a = 0; a < o.length; a++) if (!o.hasOwnProperty(a)) return !0;
    return !1;
  }
  var l = {};
  zo("ES5", {
    J: function (s, o) {
      var u = Array.isArray(s),
        a = (function (p, f) {
          if (p) {
            for (var C = Array(f.length), v = 0; v < f.length; v++)
              Object.defineProperty(C, "" + v, e(v, !0));
            return C;
          }
          var g = $7(f);
          delete g[i1];
          for (var w = d3(g), P = 0; P < w.length; P++) {
            var m = w[P];
            g[m] = e(m, p || !!g[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), g);
        })(u, s),
        c = {
          i: u ? 5 : 4,
          A: o ? o.A : sr(),
          P: !1,
          I: !1,
          R: {},
          l: o,
          t: s,
          k: a,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(a, i1, { value: c, writable: !0 }), a;
    },
    S: function (s, o, u) {
      u
        ? m2(o) && o[i1].A === s && t(s.p)
        : (s.u &&
            (function a(c) {
              if (c && typeof c == "object") {
                var p = c[i1];
                if (p) {
                  var f = p.t,
                    C = p.k,
                    v = p.R,
                    g = p.i;
                  if (g === 4)
                    F2(C, function (h) {
                      h !== i1 &&
                        (f[h] !== void 0 || f3(f, h)
                          ? v[h] || a(C[h])
                          : ((v[h] = !0), Je(p)));
                    }),
                      F2(f, function (h) {
                        C[h] !== void 0 || f3(C, h) || ((v[h] = !1), Je(p));
                      });
                  else if (g === 5) {
                    if ((r(p) && (Je(p), (v.length = !0)), C.length < f.length))
                      for (var w = C.length; w < f.length; w++) v[w] = !1;
                    else for (var P = f.length; P < C.length; P++) v[P] = !0;
                    for (
                      var m = Math.min(C.length, f.length), d = 0;
                      d < m;
                      d++
                    )
                      C.hasOwnProperty(d) || (v[d] = !0),
                        v[d] === void 0 && a(C[d]);
                  }
                }
              }
            })(s.p[0]),
          t(s.p));
    },
    K: function (s) {
      return s.i === 4 ? n(s) : r(s);
    },
  });
}
var W9,
  mt,
  m6 = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  Uo = typeof Map < "u",
  Vo = typeof Set < "u",
  Q9 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  B7 = m6
    ? Symbol.for("immer-nothing")
    : (((W9 = {})["immer-nothing"] = !0), W9),
  H9 = m6 ? Symbol.for("immer-draftable") : "__$immer_draftable",
  i1 = m6 ? Symbol.for("immer-state") : "__$immer_state",
  Bo = "" + Object.prototype.constructor,
  d3 =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  $7 =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        d3(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  ur = {},
  vt = {
    get: function (e, t) {
      if (t === i1) return e;
      var n = S2(e);
      if (!f3(n, t))
        return (function (l, s, o) {
          var u,
            a = B9(s, o);
          return a
            ? "value" in a
              ? a.value
              : (u = a.get) === null || u === void 0
              ? void 0
              : u.call(l.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !We(r)
        ? r
        : r === e5(e.t, t)
        ? (t5(e), (e.o[t] = or(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in S2(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(S2(e));
    },
    set: function (e, t, n) {
      var r = B9(S2(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var l = e5(S2(e), t),
          s = l == null ? void 0 : l[i1];
        if (s && s.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (V7(n, l) && (n !== void 0 || f3(e.t, t))) return !0;
        t5(e), Je(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        e5(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), t5(e), Je(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = S2(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      me(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      me(12);
    },
  },
  $3 = {};
F2(vt, function (e, t) {
  $3[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  ($3.deleteProperty = function (e, t) {
    return $3.set.call(this, e, t, void 0);
  }),
  ($3.set = function (e, t, n) {
    return vt.set.call(this, e[0], t, n, e[0]);
  });
var $o = (function () {
    function e(n) {
      var r = this;
      (this.O = Q9),
        (this.D = !0),
        (this.produce = function (l, s, o) {
          if (typeof l == "function" && typeof s != "function") {
            var u = s;
            s = l;
            var a = r;
            return function (w) {
              var P = this;
              w === void 0 && (w = u);
              for (
                var m = arguments.length, d = Array(m > 1 ? m - 1 : 0), h = 1;
                h < m;
                h++
              )
                d[h - 1] = arguments[h];
              return a.produce(w, function (x) {
                var S;
                return (S = s).call.apply(S, [P, x].concat(d));
              });
            };
          }
          var c;
          if (
            (typeof s != "function" && me(6),
            o !== void 0 && typeof o != "function" && me(7),
            We(l))
          ) {
            var p = U9(r),
              f = or(r, l, void 0),
              C = !0;
            try {
              (c = s(f)), (C = !1);
            } finally {
              C ? Z4(p) : ir(p);
            }
            return typeof Promise < "u" && c instanceof Promise
              ? c.then(
                  function (w) {
                    return bn(p, o), Jn(w, p);
                  },
                  function (w) {
                    throw (Z4(p), w);
                  }
                )
              : (bn(p, o), Jn(c, p));
          }
          if (!l || typeof l != "object") {
            if (
              ((c = s(l)) === void 0 && (c = l),
              c === B7 && (c = void 0),
              r.D && p6(c, !0),
              o)
            ) {
              var v = [],
                g = [];
              Ee("Patches").M(l, c, v, g), o(v, g);
            }
            return c;
          }
          me(21, l);
        }),
        (this.produceWithPatches = function (l, s) {
          if (typeof l == "function")
            return function (c) {
              for (
                var p = arguments.length, f = Array(p > 1 ? p - 1 : 0), C = 1;
                C < p;
                C++
              )
                f[C - 1] = arguments[C];
              return r.produceWithPatches(c, function (v) {
                return l.apply(void 0, [v].concat(f));
              });
            };
          var o,
            u,
            a = r.produce(l, s, function (c, p) {
              (o = c), (u = p);
            });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then(function (c) {
                return [c, o, u];
              })
            : [a, o, u];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        We(n) || me(8), m2(n) && (n = Do(n));
        var r = U9(this),
          l = or(this, n, void 0);
        return (l[i1].C = !0), ir(r), l;
      }),
      (t.finishDraft = function (n, r) {
        var l = n && n[i1],
          s = l.A;
        return bn(s, r), Jn(void 0, s);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Q9 && me(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var l;
        for (l = r.length - 1; l >= 0; l--) {
          var s = r[l];
          if (s.path.length === 0 && s.op === "replace") {
            n = s.value;
            break;
          }
        }
        l > -1 && (r = r.slice(l + 1));
        var o = Ee("Patches").$;
        return m2(n)
          ? o(n, r)
          : this.produce(n, function (u) {
              return o(u, r);
            });
      }),
      e
    );
  })(),
  b1 = new $o(),
  W7 = b1.produce;
b1.produceWithPatches.bind(b1);
b1.setAutoFreeze.bind(b1);
b1.setUseProxies.bind(b1);
b1.applyPatches.bind(b1);
b1.createDraft.bind(b1);
b1.finishDraft.bind(b1);
function yt(e) {
  "@babel/helpers - typeof";
  return (
    (yt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yt(e)
  );
}
function Wo(e, t) {
  if (yt(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (yt(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qo(e) {
  var t = Wo(e, "string");
  return yt(t) === "symbol" ? t : String(t);
}
function Ho(e, t, n) {
  return (
    (t = Qo(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Y9(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function X9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Y9(Object(n), !0).forEach(function (r) {
          Ho(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Y9(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function T1(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var G9 = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  n5 = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  T4 = {
    INIT: "@@redux/INIT" + n5(),
    REPLACE: "@@redux/REPLACE" + n5(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + n5();
    },
  };
function Yo(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Q7(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(T1(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(T1(1));
    return n(Q7)(e, t);
  }
  if (typeof e != "function") throw new Error(T1(2));
  var l = e,
    s = t,
    o = [],
    u = o,
    a = !1;
  function c() {
    u === o && (u = o.slice());
  }
  function p() {
    if (a) throw new Error(T1(3));
    return s;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(T1(4));
    if (a) throw new Error(T1(5));
    var P = !0;
    return (
      c(),
      u.push(w),
      function () {
        if (P) {
          if (a) throw new Error(T1(6));
          (P = !1), c();
          var d = u.indexOf(w);
          u.splice(d, 1), (o = null);
        }
      }
    );
  }
  function C(w) {
    if (!Yo(w)) throw new Error(T1(7));
    if (typeof w.type > "u") throw new Error(T1(8));
    if (a) throw new Error(T1(9));
    try {
      (a = !0), (s = l(s, w));
    } finally {
      a = !1;
    }
    for (var P = (o = u), m = 0; m < P.length; m++) {
      var d = P[m];
      d();
    }
    return w;
  }
  function v(w) {
    if (typeof w != "function") throw new Error(T1(10));
    (l = w), C({ type: T4.REPLACE });
  }
  function g() {
    var w,
      P = f;
    return (
      (w = {
        subscribe: function (d) {
          if (typeof d != "object" || d === null) throw new Error(T1(11));
          function h() {
            d.next && d.next(p());
          }
          h();
          var x = P(h);
          return { unsubscribe: x };
        },
      }),
      (w[G9] = function () {
        return this;
      }),
      w
    );
  }
  return (
    C({ type: T4.INIT }),
    (r = { dispatch: C, subscribe: f, getState: p, replaceReducer: v }),
    (r[G9] = g),
    r
  );
}
function Xo(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: T4.INIT });
    if (typeof r > "u") throw new Error(T1(12));
    if (typeof n(void 0, { type: T4.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(T1(13));
  });
}
function H7(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var s = Object.keys(n),
    o;
  try {
    Xo(n);
  } catch (u) {
    o = u;
  }
  return function (a, c) {
    if ((a === void 0 && (a = {}), o)) throw o;
    for (var p = !1, f = {}, C = 0; C < s.length; C++) {
      var v = s[C],
        g = n[v],
        w = a[v],
        P = g(w, c);
      if (typeof P > "u") throw (c && c.type, new Error(T1(14)));
      (f[v] = P), (p = p || P !== w);
    }
    return (p = p || s.length !== Object.keys(a).length), p ? f : a;
  };
}
function P4() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, l) {
        return function () {
          return r(l.apply(void 0, arguments));
        };
      });
}
function Go() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        s = function () {
          throw new Error(T1(15));
        },
        o = {
          getState: l.getState,
          dispatch: function () {
            return s.apply(void 0, arguments);
          },
        },
        u = t.map(function (a) {
          return a(o);
        });
      return (
        (s = P4.apply(void 0, u)(l.dispatch)),
        X9(X9({}, l), {}, { dispatch: s })
      );
    };
  };
}
function Y7(e) {
  var t = function (r) {
    var l = r.dispatch,
      s = r.getState;
    return function (o) {
      return function (u) {
        return typeof u == "function" ? u(l, s, e) : o(u);
      };
    };
  };
  return t;
}
var X7 = Y7();
X7.withExtraArgument = Y7;
const K9 = X7;
var G7 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, l) {
                r.__proto__ = l;
              }) ||
            function (r, l) {
              for (var s in l)
                Object.prototype.hasOwnProperty.call(l, s) && (r[s] = l[s]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  Ko =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (s[0] & 1) throw s[1];
            return s[1];
          },
          trys: [],
          ops: [],
        },
        r,
        l,
        s,
        o;
      return (
        (o = { next: u(0), throw: u(1), return: u(2) }),
        typeof Symbol == "function" &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function u(c) {
        return function (p) {
          return a([c, p]);
        };
      }
      function a(c) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              l &&
                (s =
                  c[0] & 2
                    ? l.return
                    : c[0]
                    ? l.throw || ((s = l.return) && s.call(l), 0)
                    : l.next) &&
                !(s = s.call(l, c[1])).done)
            )
              return s;
            switch (((l = 0), s && (c = [c[0] & 2, s.value]), c[0])) {
              case 0:
              case 1:
                s = c;
                break;
              case 4:
                return n.label++, { value: c[1], done: !1 };
              case 5:
                n.label++, (l = c[1]), (c = [0]);
                continue;
              case 7:
                (c = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((s = n.trys),
                  !(s = s.length > 0 && s[s.length - 1]) &&
                    (c[0] === 6 || c[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (c[0] === 3 && (!s || (c[1] > s[0] && c[1] < s[3]))) {
                  n.label = c[1];
                  break;
                }
                if (c[0] === 6 && n.label < s[1]) {
                  (n.label = s[1]), (s = c);
                  break;
                }
                if (s && n.label < s[2]) {
                  (n.label = s[2]), n.ops.push(c);
                  break;
                }
                s[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            c = t.call(e, n);
          } catch (p) {
            (c = [6, p]), (l = 0);
          } finally {
            r = s = 0;
          }
        if (c[0] & 5) throw c[1];
        return { value: c[0] ? c[1] : void 0, done: !0 };
      }
    },
  k3 =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, l = e.length; n < r; n++, l++) e[l] = t[n];
      return e;
    },
  qo = Object.defineProperty,
  bo = Object.defineProperties,
  Jo = Object.getOwnPropertyDescriptors,
  q9 = Object.getOwnPropertySymbols,
  eu = Object.prototype.hasOwnProperty,
  tu = Object.prototype.propertyIsEnumerable,
  b9 = function (e, t, n) {
    return t in e
      ? qo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  f2 = function (e, t) {
    for (var n in t || (t = {})) eu.call(t, n) && b9(e, n, t[n]);
    if (q9)
      for (var r = 0, l = q9(t); r < l.length; r++) {
        var n = l[r];
        tu.call(t, n) && b9(e, n, t[n]);
      }
    return e;
  },
  r5 = function (e, t) {
    return bo(e, Jo(t));
  },
  nu = function (e, t, n) {
    return new Promise(function (r, l) {
      var s = function (a) {
          try {
            u(n.next(a));
          } catch (c) {
            l(c);
          }
        },
        o = function (a) {
          try {
            u(n.throw(a));
          } catch (c) {
            l(c);
          }
        },
        u = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(s, o);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  ru =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? P4
              : P4.apply(null, arguments);
        };
function lu(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var su = (function (e) {
    G7(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var l = e.apply(this, n) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, k3([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, k3([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  iu = (function (e) {
    G7(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var l = e.apply(this, n) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, k3([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, k3([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function ar(e) {
  return We(e) ? W7(e, function () {}) : e;
}
function ou(e) {
  return typeof e == "boolean";
}
function uu() {
  return function (t) {
    return au(t);
  };
}
function au(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new su();
  return (
    n && (ou(n) ? r.push(K9) : r.push(K9.withExtraArgument(n.extraArgument))), r
  );
}
var cu = !0;
function fu(e) {
  var t = uu(),
    n = e || {},
    r = n.reducer,
    l = r === void 0 ? void 0 : r,
    s = n.middleware,
    o = s === void 0 ? t() : s,
    u = n.devTools,
    a = u === void 0 ? !0 : u,
    c = n.preloadedState,
    p = c === void 0 ? void 0 : c,
    f = n.enhancers,
    C = f === void 0 ? void 0 : f,
    v;
  if (typeof l == "function") v = l;
  else if (lu(l)) v = H7(l);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var g = o;
  typeof g == "function" && (g = g(t));
  var w = Go.apply(void 0, g),
    P = P4;
  a && (P = ru(f2({ trace: !cu }, typeof a == "object" && a)));
  var m = new iu(w),
    d = m;
  Array.isArray(C) ? (d = k3([w], C)) : typeof C == "function" && (d = C(m));
  var h = P.apply(void 0, d);
  return Q7(v, p, h);
}
function d2(e, t) {
  function n() {
    for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
    if (t) {
      var s = t.apply(void 0, r);
      if (!s) throw new Error("prepareAction did not return an object");
      return f2(
        f2({ type: e, payload: s.payload }, "meta" in s && { meta: s.meta }),
        "error" in s && { error: s.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function K7(e) {
  var t = {},
    n = [],
    r,
    l = {
      addCase: function (s, o) {
        var u = typeof s == "string" ? s : s.type;
        if (u in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[u] = o), l;
      },
      addMatcher: function (s, o) {
        return n.push({ matcher: s, reducer: o }), l;
      },
      addDefaultCase: function (s) {
        return (r = s), l;
      },
    };
  return e(l), [t, n, r];
}
function du(e) {
  return typeof e == "function";
}
function Cu(e, t, n, r) {
  n === void 0 && (n = []);
  var l = typeof t == "function" ? K7(t) : [t, n, r],
    s = l[0],
    o = l[1],
    u = l[2],
    a;
  if (du(e))
    a = function () {
      return ar(e());
    };
  else {
    var c = ar(e);
    a = function () {
      return c;
    };
  }
  function p(f, C) {
    f === void 0 && (f = a());
    var v = k3(
      [s[C.type]],
      o
        .filter(function (g) {
          var w = g.matcher;
          return w(C);
        })
        .map(function (g) {
          var w = g.reducer;
          return w;
        })
    );
    return (
      v.filter(function (g) {
        return !!g;
      }).length === 0 && (v = [u]),
      v.reduce(function (g, w) {
        if (w)
          if (m2(g)) {
            var P = g,
              m = w(P, C);
            return m === void 0 ? g : m;
          } else {
            if (We(g))
              return W7(g, function (d) {
                return w(d, C);
              });
            var m = w(g, C);
            if (m === void 0) {
              if (g === null) return g;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return m;
          }
        return g;
      }, f)
    );
  }
  return (p.getInitialState = a), p;
}
function pu(e, t) {
  return e + "/" + t;
}
function kn(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : ar(e.initialState),
    r = e.reducers || {},
    l = Object.keys(r),
    s = {},
    o = {},
    u = {};
  l.forEach(function (p) {
    var f = r[p],
      C = pu(t, p),
      v,
      g;
    "reducer" in f ? ((v = f.reducer), (g = f.prepare)) : (v = f),
      (s[p] = v),
      (o[C] = v),
      (u[p] = g ? d2(C, g) : d2(C));
  });
  function a() {
    var p =
        typeof e.extraReducers == "function"
          ? K7(e.extraReducers)
          : [e.extraReducers],
      f = p[0],
      C = f === void 0 ? {} : f,
      v = p[1],
      g = v === void 0 ? [] : v,
      w = p[2],
      P = w === void 0 ? void 0 : w,
      m = f2(f2({}, C), o);
    return Cu(n, function (d) {
      for (var h in m) d.addCase(h, m[h]);
      for (var x = 0, S = g; x < S.length; x++) {
        var L = S[x];
        d.addMatcher(L.matcher, L.reducer);
      }
      P && d.addDefaultCase(P);
    });
  }
  var c;
  return {
    name: t,
    reducer: function (p, f) {
      return c || (c = a()), c(p, f);
    },
    actions: u,
    caseReducers: s,
    getInitialState: function () {
      return c || (c = a()), c.getInitialState();
    },
  };
}
var hu = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  mu = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += hu[(Math.random() * 64) | 0];
    return t;
  },
  vu = ["name", "message", "stack", "code"],
  l5 = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  J9 = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  yu = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = vu; n < r.length; n++) {
        var l = r[n];
        typeof e[l] == "string" && (t[l] = e[l]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, r) {
    var l = d2(t + "/fulfilled", function (c, p, f, C) {
        return {
          payload: c,
          meta: r5(f2({}, C || {}), {
            arg: f,
            requestId: p,
            requestStatus: "fulfilled",
          }),
        };
      }),
      s = d2(t + "/pending", function (c, p, f) {
        return {
          payload: void 0,
          meta: r5(f2({}, f || {}), {
            arg: p,
            requestId: c,
            requestStatus: "pending",
          }),
        };
      }),
      o = d2(t + "/rejected", function (c, p, f, C, v) {
        return {
          payload: C,
          error: ((r && r.serializeError) || yu)(c || "Rejected"),
          meta: r5(f2({}, v || {}), {
            arg: f,
            requestId: p,
            rejectedWithValue: !!C,
            requestStatus: "rejected",
            aborted: (c == null ? void 0 : c.name) === "AbortError",
            condition: (c == null ? void 0 : c.name) === "ConditionError",
          }),
        };
      }),
      u =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function c() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (c.prototype.abort = function () {}), c;
            })();
    function a(c) {
      return function (p, f, C) {
        var v = r != null && r.idGenerator ? r.idGenerator(c) : mu(),
          g = new u(),
          w;
        function P(d) {
          (w = d), g.abort();
        }
        var m = (function () {
          return nu(this, null, function () {
            var d, h, x, S, L, _, M;
            return Ko(this, function (k) {
              switch (k.label) {
                case 0:
                  return (
                    k.trys.push([0, 4, , 5]),
                    (S =
                      (d = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : d.call(r, c, { getState: f, extra: C })),
                    xu(S) ? [4, S] : [3, 2]
                  );
                case 1:
                  (S = k.sent()), (k.label = 2);
                case 2:
                  if (S === !1 || g.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (L = new Promise(function (j, E) {
                      return g.signal.addEventListener("abort", function () {
                        return E({
                          name: "AbortError",
                          message: w || "Aborted",
                        });
                      });
                    })),
                    p(
                      s(
                        v,
                        c,
                        (h = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : h.call(
                              r,
                              { requestId: v, arg: c },
                              { getState: f, extra: C }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        L,
                        Promise.resolve(
                          n(c, {
                            dispatch: p,
                            getState: f,
                            extra: C,
                            requestId: v,
                            signal: g.signal,
                            abort: P,
                            rejectWithValue: function (j, E) {
                              return new l5(j, E);
                            },
                            fulfillWithValue: function (j, E) {
                              return new J9(j, E);
                            },
                          })
                        ).then(function (j) {
                          if (j instanceof l5) throw j;
                          return j instanceof J9
                            ? l(j.payload, v, c, j.meta)
                            : l(j, v, c);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (x = k.sent()), [3, 5];
                case 4:
                  return (
                    (_ = k.sent()),
                    (x =
                      _ instanceof l5
                        ? o(null, v, c, _.payload, _.meta)
                        : o(_, v, c)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (M =
                      r &&
                      !r.dispatchConditionRejection &&
                      o.match(x) &&
                      x.meta.condition),
                    M || p(x),
                    [2, x]
                  );
              }
            });
          });
        })();
        return Object.assign(m, {
          abort: P,
          requestId: v,
          arg: c,
          unwrap: function () {
            return m.then(gu);
          },
        });
      };
    }
    return Object.assign(a, {
      pending: s,
      rejected: o,
      fulfilled: l,
      typePrefix: t,
    });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function gu(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function xu(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var v6 = "listenerMiddleware";
d2(v6 + "/add");
d2(v6 + "/removeAll");
d2(v6 + "/remove");
var e8;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
Fo();
const wu = {
    arrQuestions: [
      [100, 200, 300, 400],
      [100, 200, 300, 400],
      [100, 200, 300, 400],
      [100, 200, 300, 400],
    ],
  },
  q7 = kn({
    name: "questions",
    initialState: wu,
    reducers: {
      removePoints(e, t) {
        e.arrQuestions[t.payload[0]][t.payload[1]] = 0;
      },
    },
  }),
  ku = q7.reducer,
  { removePoints: ju } = q7.actions,
  Mu = { activeQuestion: [0, 0] },
  b7 = kn({
    name: "active",
    initialState: Mu,
    reducers: {
      saveActive(e, t) {
        e.activeQuestion = t.payload;
      },
    },
  }),
  Lu = b7.reducer,
  { saveActive: J7 } = b7.actions,
  Su = { points: 0 },
  el = kn({
    name: "points",
    initialState: Su,
    reducers: {
      setPoints(e, t) {
        e.points += t.payload;
      },
    },
  }),
  Au = el.reducer,
  { setPoints: _u } = el.actions,
  Zu = { checkAnswer: "wait" },
  tl = kn({
    name: "checkAnswer",
    initialState: Zu,
    reducers: {
      setCheckAnswer(e, t) {
        e.checkAnswer = t.payload;
      },
    },
  }),
  Eu = tl.reducer,
  { setCheckAnswer: q } = tl.actions,
  Nu = H7({
    arrQuestionsReducer: ku,
    activeQuestion: Lu,
    points: Au,
    checkAnswerReducer: Eu,
  }),
  Tu = () => fu({ reducer: Nu }),
  L1 = () => No(),
  P2 = Co;
function Pu(e) {
  const { arrQuestions: t } = P2((s) => s.arrQuestionsReducer),
    n = L1(),
    r = ["деятельность", "география", "цифры", "работа у нас"],
    l = (s) => {
      t[s[0]][s[1]] !== 0 && (e.openTask(!0), n(J7(s)));
    };
  return i.jsx(i.Fragment, {
    children: i.jsx("div", {
      className: "main__game game",
      children: t.map((s, o) =>
        s.map((u, a) =>
          a === 0
            ? i.jsxs(
                R.Fragment,
                {
                  children: [
                    i.jsx("div", {
                      className: "game__category",
                      children: r[o],
                    }),
                    i.jsx("div", {
                      className: "game__item" + (u === 0 ? " disable" : ""),
                      onClick: () => l([o, a]),
                      children: (a + 1) * 100,
                    }),
                  ],
                },
                o + " " + a
              )
            : i.jsx(
                "div",
                {
                  className: "game__item" + (u === 0 ? " disable" : ""),
                  onClick: () => l([o, a]),
                  children: (a + 1) * 100,
                },
                o + " " + a
              )
        )
      ),
    }),
  });
}
function Ou(e) {
  const { tasksEnd: t } = e,
    { points: n } = P2((r) => r.points);
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: "main__points points",
      children: [
        i.jsx("img", { src: F7, alt: "logo", className: "points__logo" }),
        i.jsxs("div", {
          className: "points__balance " + (t ? "end" : ""),
          children: [
            i.jsx("p", { className: "points__title", children: "БАЛАНС" }),
            i.jsx("span", { className: "points__num", children: n }),
          ],
        }),
      ],
    }),
  });
}
const Ru = "_task__info_1woj1_1",
  zu = "_task_1woj1_1",
  Iu = "_list_1woj1_97",
  x2 = { task__info: Ru, task: zu, list: Iu },
  Du = "_opacityTask_1ukh4_1",
  Fu = { opacityTask: Du },
  U1 = () =>
    i.jsx(i.Fragment, {
      children: i.jsx("div", { className: Fu.opacityTask }),
    });
function Uu(e) {
  const [t, n] = R.useState(1),
    r = L1(),
    { selectAnswer: l, checkClick: s } = e,
    o = (u) => {
      u.preventDefault();
      const a = u.currentTarget;
      n(+a.value), l(!0), a.value === "2" ? r(q("true")) : r(q("false"));
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: x2.task__info,
      children: [
        s && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Размести ползунок около верного ответае",
        }),
        i.jsxs("div", {
          className: x2.task,
          children: [
            i.jsx("input", {
              type: "range",
              min: "1",
              max: "4",
              step: "1",
              defaultValue: "1",
              list: "list",
              onChange: o,
            }),
            i.jsxs("ul", {
              id: "list",
              className: x2.list,
              children: [
                i.jsx("li", {
                  className: x2.item,
                  style: t === 1 ? { opacity: "1" } : { opacity: ".5" },
                  children: "Управление проектированием",
                }),
                i.jsx("li", {
                  className: x2.item,
                  style: t === 2 ? { opacity: "1" } : { opacity: ".5" },
                  children: "Управление выпуском продукции",
                }),
                i.jsx("li", {
                  className: x2.item,
                  style: t === 3 ? { opacity: "1" } : { opacity: ".5" },
                  children: "Управление строительством",
                }),
                i.jsx("li", {
                  className: x2.item,
                  style: t === 4 ? { opacity: "1" } : { opacity: ".5" },
                  children: "Управление поставками и логистикой",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Vu = "_taskInfo_at5wk_1",
  Bu = "_task_at5wk_1",
  $u = "_taskAnswer_at5wk_29",
  Wu = "_danger_at5wk_71",
  Qu = "_cart_at5wk_77",
  $t = { taskInfo: Vu, task: Bu, taskAnswer: $u, danger: Wu, cart: Qu },
  Hu = "" + new URL("cart-4b20c114.png", import.meta.url).href;
function Yu(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    l = R.useRef(null);
  let s = 0,
    o = 0;
  R.useEffect(() => {
    if (l.current) {
      const L = l.current.getBoundingClientRect();
      (s = L.left), (o = L.top);
    }
  });
  const [u, a] = R.useState([
      { value: "EPC", check: !1 },
      { value: "САПР", check: !1 },
      { value: "UGC", check: !1 },
      { value: "BIM", check: !1 },
    ]),
    [c, p] = R.useState("-1");
  let f;
  const C = R.useRef(!1),
    v = () => {
      if (f) {
        if (f.style.position === "absolute") return;
        (f.style.left = "auto"),
          (f.style.top = "auto"),
          (f.style.transform = "none"),
          (f.style.position = "absolute");
        let L = f.offsetLeft - f.offsetWidth;
        L < 0 && (L = f.offsetLeft);
        const _ = f.offsetTop;
        (f.style.zIndex = "1"),
          (f.style.left = L + "px"),
          (f.style.top = _ + "px");
      }
    },
    g = (L) => {
      (f = L.target), (C.current = !0), v();
    },
    w = (L) => {
      (document.body.style.overflow = "hidden"),
        (f = L.changedTouches[0].target),
        v();
    },
    P = (L) => {
      C.current && d(L.pageY, L.pageX, "mouse");
    },
    m = (L) => {
      const _ = L.changedTouches[0];
      d(_.clientY, _.clientX, "");
    },
    d = (L, _, M) => {
      if (f) {
        if (f.style.top === "50%") return;
        let k, j;
        if (
          (M === "phone"
            ? ((j = L - o - f.offsetHeight / 2),
              (k = _ - s - f.offsetWidth / 2))
            : ((j = L - o - f.offsetHeight / 2 + 5),
              (k = _ - s - f.offsetWidth / 2)),
          j > 14 && j < 112 && (f.style.top = j + "px"),
          k > 0 && k < 270 && (f.style.left = k + "px"),
          j > 14 && j < 140 && k > 90 && k < 170)
        ) {
          const E = f.getAttribute("data-value");
          E &&
            c !== E &&
            (a(
              u.map(
                (O, F) => (F + "" === E ? (O.check = !0) : (O.check = !1), O)
              )
            ),
            t(q(E === "2" ? "true" : "false")),
            p(E)),
            n(!0),
            E === "1" && (f.style.fontSize = "20px"),
            (f.style.color = "#008C95"),
            (f.style.top = "50%"),
            (f.style.left = "50%"),
            (f.style.transform = "translateX(-50%) translateY(-50%)");
        } else (f.style.color = "#fff"), (f.style.fontSize = "25px");
      }
    },
    h = () => {
      (C.current = !1), S();
    },
    x = () => {
      (document.body.style.overflow = "auto"), S();
    },
    S = () => {
      if (f && f.style.top !== "50%" && f.style.left !== "50%") {
        f.style.position = "static";
        return;
      }
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: $t.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Перетащи выбранный вариант ответа в корзину",
        }),
        i.jsxs("div", {
          className: $t.task,
          ref: l,
          children: [
            u.map((L, _) =>
              i.jsx(
                "div",
                {
                  className: $t.taskAnswer,
                  children: i.jsx("span", {
                    onMouseDown: (M) => g(M),
                    onMouseMove: (M) => P(M),
                    onMouseUp: () => h(),
                    onTouchStart: (M) => w(M),
                    onTouchMove: (M) => m(M),
                    onTouchEnd: () => x(),
                    "data-value": _,
                    style: {
                      color: L.check
                        ? r
                          ? c === "2"
                            ? "#008C95"
                            : "#C00000"
                          : "#008C95"
                        : "#fff",
                      position: L.check ? "absolute" : "static",
                      fontSize: c === "1" && _ === 1 ? "20px" : "25px",
                    },
                    children: L.value,
                  }),
                },
                _
              )
            ),
            i.jsx("div", {
              className: $t.cart,
              children: i.jsx("img", { src: Hu, alt: "cart" }),
            }),
          ],
        }),
      ],
    }),
  });
}
var Mt = (e) => e.type === "checkbox",
  l3 = (e) => e instanceof Date,
  z1 = (e) => e == null;
const nl = (e) => typeof e == "object";
var w1 = (e) => !z1(e) && !Array.isArray(e) && nl(e) && !l3(e),
  Xu = (e) =>
    w1(e) && e.target ? (Mt(e.target) ? e.target.checked : e.target.value) : e,
  Gu = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Ku = (e, t) => e.has(Gu(t)),
  qu = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return w1(t) && t.hasOwnProperty("isPrototypeOf");
  },
  y6 =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Xe(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(y6 && (e instanceof Blob || e instanceof FileList)) &&
    (n || w1(e))
  )
    if (((t = n ? [] : {}), !n && !qu(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Xe(e[r]));
  else return e;
  return t;
}
var Lt = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  v1 = (e) => e === void 0,
  $ = (e, t, n) => {
    if (!t || !w1(e)) return n;
    const r = Lt(t.split(/[,[\].]+?/)).reduce((l, s) => (z1(l) ? l : l[s]), e);
    return v1(r) || r === e ? (v1(e[t]) ? n : e[t]) : r;
  };
const t8 = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  ve = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Ne = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
ze.createContext(null);
var bu = (e, t, n, r = !0) => {
    const l = { defaultValues: t._defaultValues };
    for (const s in e)
      Object.defineProperty(l, s, {
        get: () => {
          const o = s;
          return (
            t._proxyFormState[o] !== ve.all &&
              (t._proxyFormState[o] = !r || ve.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return l;
  },
  re = (e) => w1(e) && !Object.keys(e).length,
  Ju = (e, t, n, r) => {
    n(e);
    const { name: l, ...s } = e;
    return (
      re(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((o) => t[o] === (!r || ve.all))
    );
  },
  s5 = (e) => (Array.isArray(e) ? e : [e]);
function ea(e) {
  const t = ze.useRef(e);
  (t.current = e),
    ze.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var Ae = (e) => typeof e == "string",
  ta = (e, t, n, r, l) =>
    Ae(e)
      ? (r && t.watch.add(e), $(n, e, l))
      : Array.isArray(e)
      ? e.map((s) => (r && t.watch.add(s), $(n, s)))
      : (r && (t.watchAll = !0), n),
  g6 = (e) => /^\w*$/.test(e),
  rl = (e) => Lt(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function s1(e, t, n) {
  let r = -1;
  const l = g6(t) ? [t] : rl(t),
    s = l.length,
    o = s - 1;
  for (; ++r < s; ) {
    const u = l[r];
    let a = n;
    if (r !== o) {
      const c = e[u];
      a = w1(c) || Array.isArray(c) ? c : isNaN(+l[r + 1]) ? {} : [];
    }
    (e[u] = a), (e = e[u]);
  }
  return e;
}
var na = (e, t, n, r, l) =>
  t
    ? {
        ...n[e],
        types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: l || !0 },
      }
    : {};
const cr = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const l = $(e, r);
    if (l) {
      const { _f: s, ...o } = l;
      if (s && t(s.name)) {
        if (s.ref.focus) {
          s.ref.focus();
          break;
        } else if (s.refs && s.refs[0].focus) {
          s.refs[0].focus();
          break;
        }
      } else w1(o) && cr(o, t);
    }
  }
};
var n8 = (e) => ({
    isOnSubmit: !e || e === ve.onSubmit,
    isOnBlur: e === ve.onBlur,
    isOnChange: e === ve.onChange,
    isOnAll: e === ve.all,
    isOnTouch: e === ve.onTouched,
  }),
  r8 = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      )),
  ra = (e, t, n) => {
    const r = Lt($(e, n));
    return s1(r, "root", t[n]), s1(e, n, r), e;
  },
  C3 = (e) => typeof e == "boolean",
  x6 = (e) => e.type === "file",
  n2 = (e) => typeof e == "function",
  O4 = (e) => {
    if (!y6) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  l4 = (e) => Ae(e),
  w6 = (e) => e.type === "radio",
  R4 = (e) => e instanceof RegExp;
const l8 = { value: !1, isValid: !1 },
  s8 = { value: !0, isValid: !0 };
var ll = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !v1(e[0].attributes.value)
        ? v1(e[0].value) || e[0].value === ""
          ? s8
          : { value: e[0].value, isValid: !0 }
        : s8
      : l8;
  }
  return l8;
};
const i8 = { isValid: !1, value: null };
var sl = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        i8
      )
    : i8;
function o8(e, t, n = "validate") {
  if (l4(e) || (Array.isArray(e) && e.every(l4)) || (C3(e) && !e))
    return { type: n, message: l4(e) ? e : "", ref: t };
}
var Q2 = (e) => (w1(e) && !R4(e) ? e : { value: e, message: "" }),
  u8 = async (e, t, n, r, l) => {
    const {
        ref: s,
        refs: o,
        required: u,
        maxLength: a,
        minLength: c,
        min: p,
        max: f,
        pattern: C,
        validate: v,
        name: g,
        valueAsNumber: w,
        mount: P,
        disabled: m,
      } = e._f,
      d = $(t, g);
    if (!P || m) return {};
    const h = o ? o[0] : s,
      x = (O) => {
        r &&
          h.reportValidity &&
          (h.setCustomValidity(C3(O) ? "" : O || ""), h.reportValidity());
      },
      S = {},
      L = w6(s),
      _ = Mt(s),
      M = L || _,
      k =
        ((w || x6(s)) && v1(s.value) && v1(d)) ||
        (O4(s) && s.value === "") ||
        d === "" ||
        (Array.isArray(d) && !d.length),
      j = na.bind(null, g, n, S),
      E = (O, F, I, B = Ne.maxLength, X = Ne.minLength) => {
        const G = O ? F : I;
        S[g] = { type: O ? B : X, message: G, ref: s, ...j(O ? B : X, G) };
      };
    if (
      l
        ? !Array.isArray(d) || !d.length
        : u &&
          ((!M && (k || z1(d))) ||
            (C3(d) && !d) ||
            (_ && !ll(o).isValid) ||
            (L && !sl(o).isValid))
    ) {
      const { value: O, message: F } = l4(u)
        ? { value: !!u, message: u }
        : Q2(u);
      if (
        O &&
        ((S[g] = {
          type: Ne.required,
          message: F,
          ref: h,
          ...j(Ne.required, F),
        }),
        !n)
      )
        return x(F), S;
    }
    if (!k && (!z1(p) || !z1(f))) {
      let O, F;
      const I = Q2(f),
        B = Q2(p);
      if (!z1(d) && !isNaN(d)) {
        const X = s.valueAsNumber || (d && +d);
        z1(I.value) || (O = X > I.value), z1(B.value) || (F = X < B.value);
      } else {
        const X = s.valueAsDate || new Date(d),
          G = (H) => new Date(new Date().toDateString() + " " + H),
          N = s.type == "time",
          D = s.type == "week";
        Ae(I.value) &&
          d &&
          (O = N ? G(d) > G(I.value) : D ? d > I.value : X > new Date(I.value)),
          Ae(B.value) &&
            d &&
            (F = N
              ? G(d) < G(B.value)
              : D
              ? d < B.value
              : X < new Date(B.value));
      }
      if ((O || F) && (E(!!O, I.message, B.message, Ne.max, Ne.min), !n))
        return x(S[g].message), S;
    }
    if ((a || c) && !k && (Ae(d) || (l && Array.isArray(d)))) {
      const O = Q2(a),
        F = Q2(c),
        I = !z1(O.value) && d.length > +O.value,
        B = !z1(F.value) && d.length < +F.value;
      if ((I || B) && (E(I, O.message, F.message), !n))
        return x(S[g].message), S;
    }
    if (C && !k && Ae(d)) {
      const { value: O, message: F } = Q2(C);
      if (
        R4(O) &&
        !d.match(O) &&
        ((S[g] = { type: Ne.pattern, message: F, ref: s, ...j(Ne.pattern, F) }),
        !n)
      )
        return x(F), S;
    }
    if (v) {
      if (n2(v)) {
        const O = await v(d, t),
          F = o8(O, h);
        if (F && ((S[g] = { ...F, ...j(Ne.validate, F.message) }), !n))
          return x(F.message), S;
      } else if (w1(v)) {
        let O = {};
        for (const F in v) {
          if (!re(O) && !n) break;
          const I = o8(await v[F](d, t), h, F);
          I &&
            ((O = { ...I, ...j(F, I.message) }), x(I.message), n && (S[g] = O));
        }
        if (!re(O) && ((S[g] = { ref: h, ...O }), !n)) return S;
      }
    }
    return x(!0), S;
  };
function la(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = v1(e) ? r++ : e[t[r++]];
  return e;
}
function sa(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !v1(e[t])) return !1;
  return !0;
}
function S1(e, t) {
  const n = Array.isArray(t) ? t : g6(t) ? [t] : rl(t),
    r = n.length === 1 ? e : la(e, n),
    l = n.length - 1,
    s = n[l];
  return (
    r && delete r[s],
    l !== 0 &&
      ((w1(r) && re(r)) || (Array.isArray(r) && sa(r))) &&
      S1(e, n.slice(0, -1)),
    e
  );
}
function i5() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const s of e) s.next && s.next(l);
    },
    subscribe: (l) => (
      e.push(l),
      {
        unsubscribe: () => {
          e = e.filter((s) => s !== l);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
}
var z4 = (e) => z1(e) || !nl(e);
function E2(e, t) {
  if (z4(e) || z4(t)) return e === t;
  if (l3(e) && l3(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const l of n) {
    const s = e[l];
    if (!r.includes(l)) return !1;
    if (l !== "ref") {
      const o = t[l];
      if (
        (l3(s) && l3(o)) ||
        (w1(s) && w1(o)) ||
        (Array.isArray(s) && Array.isArray(o))
          ? !E2(s, o)
          : s !== o
      )
        return !1;
    }
  }
  return !0;
}
var il = (e) => e.type === "select-multiple",
  ia = (e) => w6(e) || Mt(e),
  o5 = (e) => O4(e) && e.isConnected,
  ol = (e) => {
    for (const t in e) if (n2(e[t])) return !0;
    return !1;
  };
function I4(e, t = {}) {
  const n = Array.isArray(e);
  if (w1(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (w1(e[r]) && !ol(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), I4(e[r], t[r]))
        : z1(e[r]) || (t[r] = !0);
  return t;
}
function ul(e, t, n) {
  const r = Array.isArray(e);
  if (w1(e) || r)
    for (const l in e)
      Array.isArray(e[l]) || (w1(e[l]) && !ol(e[l]))
        ? v1(t) || z4(n[l])
          ? (n[l] = Array.isArray(e[l]) ? I4(e[l], []) : { ...I4(e[l]) })
          : ul(e[l], z1(t) ? {} : t[l], n[l])
        : (n[l] = !E2(e[l], t[l]));
  return n;
}
var u5 = (e, t) => ul(e, t, I4(t)),
  al = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    v1(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && Ae(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function a5(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return x6(t)
      ? t.files
      : w6(t)
      ? sl(e.refs).value
      : il(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : Mt(t)
      ? ll(e.refs).value
      : al(v1(t.value) ? e.ref.value : t.value, e);
}
var oa = (e, t, n, r) => {
    const l = {};
    for (const s of e) {
      const o = $(t, s);
      o && s1(l, s, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: l,
      shouldUseNativeValidation: r,
    };
  },
  I3 = (e) =>
    v1(e)
      ? e
      : R4(e)
      ? e.source
      : w1(e)
      ? R4(e.value)
        ? e.value.source
        : e.value
      : e,
  ua = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function a8(e, t, n) {
  const r = $(e, n);
  if (r || g6(n)) return { error: r, name: n };
  const l = n.split(".");
  for (; l.length; ) {
    const s = l.join("."),
      o = $(t, s),
      u = $(e, s);
    if (o && !Array.isArray(o) && n !== s) return { name: n };
    if (u && u.type) return { name: s, error: u };
    l.pop();
  }
  return { name: n };
}
var aa = (e, t, n, r, l) =>
    l.isOnAll
      ? !1
      : !n && l.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : l.isOnBlur)
      ? !e
      : (n ? r.isOnChange : l.isOnChange)
      ? e
      : !0,
  ca = (e, t) => !Lt($(e, t)).length && S1(e, t);
const fa = {
  mode: ve.onSubmit,
  reValidateMode: ve.onChange,
  shouldFocusError: !0,
};
function da(e = {}, t) {
  let n = { ...fa, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: n2(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {},
    },
    l = {},
    s =
      w1(n.defaultValues) || w1(n.values)
        ? Xe(n.defaultValues || n.values) || {}
        : {},
    o = n.shouldUnregister ? {} : Xe(s),
    u = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    p = 0;
  const f = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    C = { values: i5(), array: i5(), state: i5() },
    v = e.resetOptions && e.resetOptions.keepDirtyValues,
    g = n8(n.mode),
    w = n8(n.reValidateMode),
    P = n.criteriaMode === ve.all,
    m = (y) => (A) => {
      clearTimeout(p), (p = setTimeout(y, A));
    },
    d = async (y) => {
      if (f.isValid || y) {
        const A = n.resolver ? re((await k()).errors) : await E(l, !0);
        A !== r.isValid && C.state.next({ isValid: A });
      }
    },
    h = (y) => f.isValidating && C.state.next({ isValidating: y }),
    x = (y, A = [], Z, W, U = !0, z = !0) => {
      if (W && Z) {
        if (((u.action = !0), z && Array.isArray($(l, y)))) {
          const Q = Z($(l, y), W.argA, W.argB);
          U && s1(l, y, Q);
        }
        if (z && Array.isArray($(r.errors, y))) {
          const Q = Z($(r.errors, y), W.argA, W.argB);
          U && s1(r.errors, y, Q), ca(r.errors, y);
        }
        if (f.touchedFields && z && Array.isArray($(r.touchedFields, y))) {
          const Q = Z($(r.touchedFields, y), W.argA, W.argB);
          U && s1(r.touchedFields, y, Q);
        }
        f.dirtyFields && (r.dirtyFields = u5(s, o)),
          C.state.next({
            name: y,
            isDirty: F(y, A),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else s1(o, y, A);
    },
    S = (y, A) => {
      s1(r.errors, y, A), C.state.next({ errors: r.errors });
    },
    L = (y, A, Z, W) => {
      const U = $(l, y);
      if (U) {
        const z = $(o, y, v1(Z) ? $(s, y) : Z);
        v1(z) || (W && W.defaultChecked) || A
          ? s1(o, y, A ? z : a5(U._f))
          : X(y, z),
          u.mount && d();
      }
    },
    _ = (y, A, Z, W, U) => {
      let z = !1,
        Q = !1;
      const f1 = { name: y };
      if (!Z || W) {
        f.isDirty &&
          ((Q = r.isDirty),
          (r.isDirty = f1.isDirty = F()),
          (z = Q !== f1.isDirty));
        const p1 = E2($(s, y), A);
        (Q = $(r.dirtyFields, y)),
          p1 ? S1(r.dirtyFields, y) : s1(r.dirtyFields, y, !0),
          (f1.dirtyFields = r.dirtyFields),
          (z = z || (f.dirtyFields && Q !== !p1));
      }
      if (Z) {
        const p1 = $(r.touchedFields, y);
        p1 ||
          (s1(r.touchedFields, y, Z),
          (f1.touchedFields = r.touchedFields),
          (z = z || (f.touchedFields && p1 !== Z)));
      }
      return z && U && C.state.next(f1), z ? f1 : {};
    },
    M = (y, A, Z, W) => {
      const U = $(r.errors, y),
        z = f.isValid && C3(A) && r.isValid !== A;
      if (
        (e.delayError && Z
          ? ((c = m(() => S(y, Z))), c(e.delayError))
          : (clearTimeout(p),
            (c = null),
            Z ? s1(r.errors, y, Z) : S1(r.errors, y)),
        (Z ? !E2(U, Z) : U) || !re(W) || z)
      ) {
        const Q = {
          ...W,
          ...(z && C3(A) ? { isValid: A } : {}),
          errors: r.errors,
          name: y,
        };
        (r = { ...r, ...Q }), C.state.next(Q);
      }
      h(!1);
    },
    k = async (y) =>
      n.resolver(
        o,
        n.context,
        oa(y || a.mount, l, n.criteriaMode, n.shouldUseNativeValidation)
      ),
    j = async (y) => {
      const { errors: A } = await k();
      if (y)
        for (const Z of y) {
          const W = $(A, Z);
          W ? s1(r.errors, Z, W) : S1(r.errors, Z);
        }
      else r.errors = A;
      return A;
    },
    E = async (y, A, Z = { valid: !0 }) => {
      for (const W in y) {
        const U = y[W];
        if (U) {
          const { _f: z, ...Q } = U;
          if (z) {
            const f1 = a.array.has(z.name),
              p1 = await u8(U, o, P, n.shouldUseNativeValidation && !A, f1);
            if (p1[z.name] && ((Z.valid = !1), A)) break;
            !A &&
              ($(p1, z.name)
                ? f1
                  ? ra(r.errors, p1, z.name)
                  : s1(r.errors, z.name, p1[z.name])
                : S1(r.errors, z.name));
          }
          Q && (await E(Q, A, Z));
        }
      }
      return Z.valid;
    },
    O = () => {
      for (const y of a.unMount) {
        const A = $(l, y);
        A &&
          (A._f.refs ? A._f.refs.every((Z) => !o5(Z)) : !o5(A._f.ref)) &&
          fe(y);
      }
      a.unMount = new Set();
    },
    F = (y, A) => (y && A && s1(o, y, A), !E2(l1(), s)),
    I = (y, A, Z) =>
      ta(y, a, { ...(u.mount ? o : v1(A) ? s : Ae(y) ? { [y]: A } : A) }, Z, A),
    B = (y) => Lt($(u.mount ? o : s, y, e.shouldUnregister ? $(s, y, []) : [])),
    X = (y, A, Z = {}) => {
      const W = $(l, y);
      let U = A;
      if (W) {
        const z = W._f;
        z &&
          (!z.disabled && s1(o, y, al(A, z)),
          (U = O4(z.ref) && z1(A) ? "" : A),
          il(z.ref)
            ? [...z.ref.options].forEach(
                (Q) => (Q.selected = U.includes(Q.value))
              )
            : z.refs
            ? Mt(z.ref)
              ? z.refs.length > 1
                ? z.refs.forEach(
                    (Q) =>
                      (!Q.defaultChecked || !Q.disabled) &&
                      (Q.checked = Array.isArray(U)
                        ? !!U.find((f1) => f1 === Q.value)
                        : U === Q.value)
                  )
                : z.refs[0] && (z.refs[0].checked = !!U)
              : z.refs.forEach((Q) => (Q.checked = Q.value === U))
            : x6(z.ref)
            ? (z.ref.value = "")
            : ((z.ref.value = U),
              z.ref.type || C.values.next({ name: y, values: { ...o } })));
      }
      (Z.shouldDirty || Z.shouldTouch) &&
        _(y, U, Z.shouldTouch, Z.shouldDirty, !0),
        Z.shouldValidate && H(y);
    },
    G = (y, A, Z) => {
      for (const W in A) {
        const U = A[W],
          z = `${y}.${W}`,
          Q = $(l, z);
        (a.array.has(y) || !z4(U) || (Q && !Q._f)) && !l3(U)
          ? G(z, U, Z)
          : X(z, U, Z);
      }
    },
    N = (y, A, Z = {}) => {
      const W = $(l, y),
        U = a.array.has(y),
        z = Xe(A);
      s1(o, y, z),
        U
          ? (C.array.next({ name: y, values: { ...o } }),
            (f.isDirty || f.dirtyFields) &&
              Z.shouldDirty &&
              C.state.next({
                name: y,
                dirtyFields: u5(s, o),
                isDirty: F(y, z),
              }))
          : W && !W._f && !z1(z)
          ? G(y, z, Z)
          : X(y, z, Z),
        r8(y, a) && C.state.next({ ...r }),
        C.values.next({ name: y, values: { ...o } }),
        !u.mount && t();
    },
    D = async (y) => {
      const A = y.target;
      let Z = A.name,
        W = !0;
      const U = $(l, Z),
        z = () => (A.type ? a5(U._f) : Xu(y));
      if (U) {
        let Q, f1;
        const p1 = z(),
          $2 = y.type === t8.BLUR || y.type === t8.FOCUS_OUT,
          fl =
            (!ua(U._f) && !n.resolver && !$(r.errors, Z) && !U._f.deps) ||
            aa($2, $(r.touchedFields, Z), r.isSubmitted, w, g),
          jn = r8(Z, a, $2);
        s1(o, Z, p1),
          $2
            ? (U._f.onBlur && U._f.onBlur(y), c && c(0))
            : U._f.onChange && U._f.onChange(y);
        const Mn = _(Z, p1, $2, !1),
          dl = !re(Mn) || jn;
        if (
          (!$2 && C.values.next({ name: Z, type: y.type, values: { ...o } }),
          fl)
        )
          return (
            f.isValid && d(), dl && C.state.next({ name: Z, ...(jn ? {} : Mn) })
          );
        if ((!$2 && jn && C.state.next({ ...r }), h(!0), n.resolver)) {
          const { errors: S6 } = await k([Z]),
            Cl = a8(r.errors, l, Z),
            A6 = a8(S6, l, Cl.name || Z);
          (Q = A6.error), (Z = A6.name), (f1 = re(S6));
        } else
          (Q = (await u8(U, o, P, n.shouldUseNativeValidation))[Z]),
            (W = isNaN(p1) || p1 === $(o, Z, p1)),
            W && (Q ? (f1 = !1) : f.isValid && (f1 = await E(l, !0)));
        W && (U._f.deps && H(U._f.deps), M(Z, f1, Q, Mn));
      }
    },
    H = async (y, A = {}) => {
      let Z, W;
      const U = s5(y);
      if ((h(!0), n.resolver)) {
        const z = await j(v1(y) ? y : U);
        (Z = re(z)), (W = y ? !U.some((Q) => $(z, Q)) : Z);
      } else
        y
          ? ((W = (
              await Promise.all(
                U.map(async (z) => {
                  const Q = $(l, z);
                  return await E(Q && Q._f ? { [z]: Q } : Q);
                })
              )
            ).every(Boolean)),
            !(!W && !r.isValid) && d())
          : (W = Z = await E(l));
      return (
        C.state.next({
          ...(!Ae(y) || (f.isValid && Z !== r.isValid) ? {} : { name: y }),
          ...(n.resolver || !y ? { isValid: Z } : {}),
          errors: r.errors,
          isValidating: !1,
        }),
        A.shouldFocus &&
          !W &&
          cr(l, (z) => z && $(r.errors, z), y ? U : a.mount),
        W
      );
    },
    l1 = (y) => {
      const A = { ...s, ...(u.mount ? o : {}) };
      return v1(y) ? A : Ae(y) ? $(A, y) : y.map((Z) => $(A, Z));
    },
    C1 = (y, A) => ({
      invalid: !!$((A || r).errors, y),
      isDirty: !!$((A || r).dirtyFields, y),
      isTouched: !!$((A || r).touchedFields, y),
      error: $((A || r).errors, y),
    }),
    B2 = (y) => {
      y && s5(y).forEach((A) => S1(r.errors, A)),
        C.state.next({ errors: y ? r.errors : {} });
    },
    we = (y, A, Z) => {
      const W = ($(l, y, { _f: {} })._f || {}).ref;
      s1(r.errors, y, { ...A, ref: W }),
        C.state.next({ name: y, errors: r.errors, isValid: !1 }),
        Z && Z.shouldFocus && W && W.focus && W.focus();
    },
    _3 = (y, A) =>
      n2(y)
        ? C.values.subscribe({ next: (Z) => y(I(void 0, A), Z) })
        : I(y, A, !0),
    fe = (y, A = {}) => {
      for (const Z of y ? s5(y) : a.mount)
        a.mount.delete(Z),
          a.array.delete(Z),
          A.keepValue || (S1(l, Z), S1(o, Z)),
          !A.keepError && S1(r.errors, Z),
          !A.keepDirty && S1(r.dirtyFields, Z),
          !A.keepTouched && S1(r.touchedFields, Z),
          !n.shouldUnregister && !A.keepDefaultValue && S1(s, Z);
      C.values.next({ values: { ...o } }),
        C.state.next({ ...r, ...(A.keepDirty ? { isDirty: F() } : {}) }),
        !A.keepIsValid && d();
    },
    He = (y, A = {}) => {
      let Z = $(l, y);
      const W = C3(A.disabled);
      return (
        s1(l, y, {
          ...(Z || {}),
          _f: {
            ...(Z && Z._f ? Z._f : { ref: { name: y } }),
            name: y,
            mount: !0,
            ...A,
          },
        }),
        a.mount.add(y),
        Z
          ? W && s1(o, y, A.disabled ? void 0 : $(o, y, a5(Z._f)))
          : L(y, !0, A.value),
        {
          ...(W ? { disabled: A.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!A.required,
                min: I3(A.min),
                max: I3(A.max),
                minLength: I3(A.minLength),
                maxLength: I3(A.maxLength),
                pattern: I3(A.pattern),
              }
            : {}),
          name: y,
          onChange: D,
          onBlur: D,
          ref: (U) => {
            if (U) {
              He(y, A), (Z = $(l, y));
              const z =
                  (v1(U.value) &&
                    U.querySelectorAll &&
                    U.querySelectorAll("input,select,textarea")[0]) ||
                  U,
                Q = ia(z),
                f1 = Z._f.refs || [];
              if (Q ? f1.find((p1) => p1 === z) : z === Z._f.ref) return;
              s1(l, y, {
                _f: {
                  ...Z._f,
                  ...(Q
                    ? {
                        refs: [
                          ...f1.filter(o5),
                          z,
                          ...(Array.isArray($(s, y)) ? [{}] : []),
                        ],
                        ref: { type: z.type, name: y },
                      }
                    : { ref: z }),
                },
              }),
                L(y, !1, void 0, z);
            } else
              (Z = $(l, y, {})),
                Z._f && (Z._f.mount = !1),
                (n.shouldUnregister || A.shouldUnregister) &&
                  !(Ku(a.array, y) && u.action) &&
                  a.unMount.add(y);
          },
        }
      );
    },
    k6 = () => n.shouldFocusError && cr(l, (y) => y && $(r.errors, y), a.mount),
    j6 = (y, A) => async (Z) => {
      Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
      let W = Xe(o);
      if ((C.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: U, values: z } = await k();
        (r.errors = U), (W = z);
      } else await E(l);
      S1(r.errors, "root"),
        re(r.errors)
          ? (C.state.next({ errors: {} }), await y(W, Z))
          : (A && (await A({ ...r.errors }, Z)), k6(), setTimeout(k6)),
        C.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: re(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors,
        });
    },
    cl = (y, A = {}) => {
      $(l, y) &&
        (v1(A.defaultValue)
          ? N(y, $(s, y))
          : (N(y, A.defaultValue), s1(s, y, A.defaultValue)),
        A.keepTouched || S1(r.touchedFields, y),
        A.keepDirty ||
          (S1(r.dirtyFields, y),
          (r.isDirty = A.defaultValue ? F(y, $(s, y)) : F())),
        A.keepError || (S1(r.errors, y), f.isValid && d()),
        C.state.next({ ...r }));
    },
    M6 = (y, A = {}) => {
      const Z = y || s,
        W = Xe(Z),
        U = y && !re(y) ? W : s;
      if ((A.keepDefaultValues || (s = Z), !A.keepValues)) {
        if (A.keepDirtyValues || v)
          for (const z of a.mount)
            $(r.dirtyFields, z) ? s1(U, z, $(o, z)) : N(z, $(U, z));
        else {
          if (y6 && v1(y))
            for (const z of a.mount) {
              const Q = $(l, z);
              if (Q && Q._f) {
                const f1 = Array.isArray(Q._f.refs) ? Q._f.refs[0] : Q._f.ref;
                if (O4(f1)) {
                  const p1 = f1.closest("form");
                  if (p1) {
                    p1.reset();
                    break;
                  }
                }
              }
            }
          l = {};
        }
        (o = e.shouldUnregister ? (A.keepDefaultValues ? Xe(s) : {}) : Xe(U)),
          C.array.next({ values: { ...U } }),
          C.values.next({ values: { ...U } });
      }
      (a = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        !u.mount && t(),
        (u.mount = !f.isValid || !!A.keepIsValid),
        (u.watch = !!e.shouldUnregister),
        C.state.next({
          submitCount: A.keepSubmitCount ? r.submitCount : 0,
          isDirty: A.keepDirty
            ? r.isDirty
            : !!(A.keepDefaultValues && !E2(y, s)),
          isSubmitted: A.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: A.keepDirtyValues
            ? r.dirtyFields
            : A.keepDefaultValues && y
            ? u5(s, y)
            : {},
          touchedFields: A.keepTouched ? r.touchedFields : {},
          errors: A.keepErrors ? r.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1,
        });
    },
    L6 = (y, A) => M6(n2(y) ? y(o) : y, A);
  return {
    control: {
      register: He,
      unregister: fe,
      getFieldState: C1,
      handleSubmit: j6,
      setError: we,
      _executeSchema: k,
      _getWatch: I,
      _getDirty: F,
      _updateValid: d,
      _removeUnmounted: O,
      _updateFieldArray: x,
      _getFieldArray: B,
      _reset: M6,
      _resetDefaultValues: () =>
        n2(n.defaultValues) &&
        n.defaultValues().then((y) => {
          L6(y, n.resetOptions), C.state.next({ isLoading: !1 });
        }),
      _updateFormState: (y) => {
        r = { ...r, ...y };
      },
      _subjects: C,
      _proxyFormState: f,
      get _fields() {
        return l;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return u;
      },
      set _state(y) {
        u = y;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(y) {
        a = y;
      },
      get _formState() {
        return r;
      },
      set _formState(y) {
        r = y;
      },
      get _options() {
        return n;
      },
      set _options(y) {
        n = { ...n, ...y };
      },
    },
    trigger: H,
    register: He,
    handleSubmit: j6,
    watch: _3,
    setValue: N,
    getValues: l1,
    reset: L6,
    resetField: cl,
    clearErrors: B2,
    unregister: fe,
    setError: we,
    setFocus: (y, A = {}) => {
      const Z = $(l, y),
        W = Z && Z._f;
      if (W) {
        const U = W.refs ? W.refs[0] : W.ref;
        U.focus && (U.focus(), A.shouldSelect && U.select());
      }
    },
    getFieldState: C1,
  };
}
function A3(e = {}) {
  const t = ze.useRef(),
    n = ze.useRef(),
    [r, l] = ze.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: n2(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: n2(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current ||
    (t.current = { ...da(e, () => l((o) => ({ ...o }))), formState: r });
  const s = t.current.control;
  return (
    (s._options = e),
    ea({
      subject: s._subjects.state,
      next: (o) => {
        Ju(o, s._proxyFormState, s._updateFormState, !0) &&
          l({ ...s._formState });
      },
    }),
    ze.useEffect(() => {
      e.values && !E2(e.values, n.current)
        ? (s._reset(e.values, s._options.resetOptions), (n.current = e.values))
        : s._resetDefaultValues();
    }, [e.values, s]),
    ze.useEffect(() => {
      s._state.mount || (s._updateValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted();
    }),
    (t.current.formState = bu(r, s)),
    t.current
  );
}
const Ca = "_taskInfo_16yfz_1",
  pa = "_form_16yfz_9",
  ha = "_label_16yfz_21",
  ma = "_input_16yfz_43",
  m1 = { taskInfo: Ca, form: pa, label: ha, input: ma };
function va(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: s } = A3(),
    o = () => {
      const { name1: u, name2: a, name3: c, name4: p } = s();
      if (!u && !a && !c && !p) {
        n(!1);
        return;
      }
      n(!0), t(q(u && a && c && !p ? "true" : "false"));
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: m1.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Нажми на огоньки около верных вариантов ответа",
        }),
        i.jsxs("form", {
          className: m1.form,
          onChange: o,
          children: [
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 1,
                  ...l("name1"),
                }),
                "Проектирование моделей в 3D",
              ],
            }),
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 2,
                  ...l("name2"),
                }),
                "VR-технологии для обучения сотрудников",
              ],
            }),
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 3,
                  ...l("name3"),
                }),
                "AR-очки для удаленной совместной работы",
              ],
            }),
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 4,
                  ...l("name4"),
                }),
                "Нейросети для создания проектной документации",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const ya = "_taskInfo_zbjsx_1",
  ga = "_form_zbjsx_9",
  xa = "_label_zbjsx_19",
  wa = "_input_zbjsx_37",
  je = { taskInfo: ya, form: ga, label: xa, input: wa };
function ka(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: s, setValue: o } = A3(),
    u = (x) => {
      x.preventDefault();
    };
  let a = null,
    c = null,
    p = 0;
  const f = (x) => {
      (c = x.target), (document.body.style.overflow = "hidden"), v();
    },
    C = (x) => {
      (c = x.target), v();
    },
    v = () => {
      o("name1", ""),
        (p = 0),
        c && (a = c.closest("label")),
        a && a.style.setProperty("--var-width", "0%");
    },
    g = (x) => {
      const S = x.target;
      P(S);
    },
    w = (x) => {
      const S = x.target;
      P(S);
    },
    P = (x) => {
      a &&
        c &&
        x === c &&
        a &&
        (p === 0 && o("name1", c.getAttribute("data-value")),
        (p += 3),
        p > 100 && (p = 100),
        a.style.setProperty("--var-width", `${p}%`));
    },
    m = (x) => {
      document.body.style.overflow = "auto";
      const S = x.target;
      h(S);
    },
    d = (x) => {
      const S = x.target;
      h(S);
    },
    h = (x) => {
      if (c) {
        if (x !== c || p < 5) {
          o("name1", ""), n(!1);
          return;
        }
        if (a) {
          a.style.setProperty("--var-width", "100%");
          const { name1: S } = s();
          n(!0), t(q(S === "2" ? "true" : "false"));
        }
      }
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: je.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Вычеркни выбранный ответ",
        }),
        i.jsxs("form", {
          className: je.form,
          onMouseDown: (x) => C(x),
          onMouseMove: (x) => w(x),
          onMouseUp: (x) => d(x),
          onChange: (x) => u(x),
          onTouchStart: (x) => f(x),
          onTouchMove: (x) => g(x),
          onTouchEnd: (x) => m(x),
          children: [
            i.jsxs("label", {
              className: je.label,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: je.input,
                  value: 1,
                  ...l("name1"),
                }),
                i.jsx("span", {
                  "data-value": "1",
                  children: "Водоснабжение и канализация",
                }),
              ],
            }),
            i.jsxs("label", {
              className: je.label,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: je.input,
                  value: 2,
                  ...l("name1"),
                }),
                i.jsx("span", {
                  "data-value": "2",
                  children: "Машиностроение и робототехника",
                }),
              ],
            }),
            i.jsxs("label", {
              className: je.label,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: je.input,
                  value: 3,
                  ...l("name1"),
                }),
                i.jsx("span", {
                  "data-value": "3",
                  children: "Генплан и транспорт",
                }),
              ],
            }),
            i.jsxs("label", {
              className: je.label,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: je.input,
                  value: 4,
                  ...l("name1"),
                }),
                i.jsx("span", {
                  "data-value": "4",
                  children: "Связь, безопасность и телекоммуникации",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const ja = "_taskInfo_vmqlr_1",
  Ma = "_task_vmqlr_1",
  La = "_taskAnswer_vmqlr_23",
  Sa = "_answer_vmqlr_43",
  Aa = "_zero_vmqlr_63",
  _a = "_taskZeros_vmqlr_75",
  Za = "_none_vmqlr_115",
  Ea = "_success_vmqlr_121",
  Na = "_danger_vmqlr_127",
  Y1 = {
    taskInfo: ja,
    task: Ma,
    taskAnswer: La,
    answer: Sa,
    zero: Aa,
    taskZeros: _a,
    none: Za,
    success: Ea,
    danger: Na,
  };
function Ta(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    [l, s] = R.useState([
      { value: "амбов", answer: !1 },
      { value: "юмень", answer: !1 },
      { value: "ольятти", answer: !1 },
      { value: "омск", answer: !1 },
    ]),
    [o, u] = R.useState({ value: "", answer: !1 }),
    [a, c] = R.useState(!1),
    p = R.useRef(null);
  let f = 0,
    C = 0;
  R.useEffect(() => {
    if (p.current) {
      const k = p.current.getBoundingClientRect();
      (f = k.left), (C = k.top);
    }
  });
  let v;
  const g = R.useRef(!1),
    w = (k) => {
      (document.body.style.overflow = "hidden"),
        (v = k.changedTouches[0].target),
        m();
    },
    P = (k) => {
      (v = k.target), (g.current = !0), m();
    },
    m = () => {
      if (v) {
        (v.style.left = "auto"),
          (v.style.top = "auto"),
          (v.style.position = "absolute");
        const k = v.offsetLeft,
          j = v.offsetTop;
        (v.style.left = k + "px"), (v.style.top = j + "px");
      }
    },
    d = (k) => {
      const j = k.changedTouches[0];
      x(j.clientY, j.clientX);
    },
    h = (k) => {
      g.current && x(k.pageY, k.pageX);
    },
    x = (k, j) => {
      if (v) {
        const E = k - C - v.offsetHeight / 2,
          O = j - f - v.offsetWidth / 2;
        E > 14 && E < 112 && (v.style.top = E + "px"),
          O > 0 && O < 270 && (v.style.left = O + "px"),
          E > 45 &&
            E < 85 &&
            O > 60 &&
            O < 227 &&
            ((v.style.top = 59.5 + "px"), (v.style.left = "139px"));
      }
    },
    S = (k) => {
      (document.body.style.overflow = "auto"), _(k);
    },
    L = () => {
      (g.current = !1), v && ((v.style.position = "static"), v.style.top);
    },
    _ = (k) => {
      (v && ((v.style.position = "static"), v.style.top !== "59.5px")) ||
        (n(!0),
        s(l.map((j, E) => (E === k ? (j.answer = !0) : (j.answer = !1), j))),
        u(l[k]),
        k === 1 ? (t(q("true")), c(!0)) : (t(q("false")), c(!1)));
    },
    M = (k, j) => {
      g.current && k.target === v && _(j);
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: Y1.taskInfo,
      ref: p,
      children: [
        r && i.jsx(U1, {}),
        i.jsxs("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: [
            "Перетащи часть слова к первой букве так,",
            i.jsx("br", {}),
            " чтобы получилось название верного города",
          ],
        }),
        i.jsx("div", {
          className: Y1.task,
          children: i.jsxs("div", {
            className: Y1.taskAnswer,
            children: [
              i.jsx("span", { children: "Т" }),
              i.jsx("div", {
                className: Y1.answer,
                children: i.jsx("div", {
                  className:
                    Y1.zero +
                    " " +
                    (o.answer ? "" : Y1.none) +
                    " " +
                    (r ? (a ? Y1.success : Y1.danger) : ""),
                  children: o.value,
                }),
              }),
            ],
          }),
        }),
        i.jsx("div", {
          className: Y1.taskZeros,
          children: l.map((k, j) =>
            i.jsx(
              "div",
              {
                children: i.jsx("div", {
                  onMouseOut: (E) => M(E, j),
                  onMouseDown: (E) => P(E),
                  onMouseMove: (E) => h(E),
                  onMouseUp: () => L(),
                  onTouchStart: (E) => w(E),
                  onTouchMove: (E) => d(E),
                  onTouchEnd: () => S(j),
                  className:
                    Y1.zero +
                    " " +
                    (k.answer ? Y1.none : "") +
                    " " +
                    (r ? (a ? Y1.success : Y1.danger) : ""),
                  children: k.value,
                }),
              },
              k.value
            )
          ),
        }),
      ],
    }),
  });
}
const Pa = "_taskInfo_7n64m_1",
  Oa = "_task_7n64m_1",
  Ra = "_map_7n64m_23",
  za = "_towns_7n64m_37",
  Ia = "_town_7n64m_37",
  Da = "_answer_7n64m_63",
  Fa = "_name_7n64m_79",
  w2 = {
    taskInfo: Pa,
    task: Oa,
    map: Ra,
    towns: za,
    town: Ia,
    answer: Da,
    name: Fa,
  };
function Ua(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    l = [
      { top: 0, left: 0 },
      { top: 0, left: 0 },
      { top: 0, left: 0 },
      { top: 0, left: 0 },
    ],
    s = R.useRef(null),
    o = R.useRef(null),
    u = R.useRef(null),
    a = R.useRef(null),
    c = R.useRef(null);
  R.useEffect(() => {
    if (s.current) {
      const I = s.current.getBoundingClientRect();
      if (((w = I.left), (P = I.top), o.current)) {
        const B = o.current.getBoundingClientRect();
        (l[0].top = B.top + B.height / 2 - I.top - 21.5),
          (l[0].left = Math.ceil(B.left + B.width / 2 - I.left - 10));
      }
      if (u.current) {
        const B = u.current.getBoundingClientRect();
        (l[1].top = B.top + B.height / 2 - I.top - 21.5),
          (l[1].left = Math.ceil(B.left + B.width / 2 - I.left - 10));
      }
      if (a.current) {
        const B = a.current.getBoundingClientRect();
        (l[2].top = B.top + B.height / 2 - I.top - 21.5),
          (l[2].left = Math.ceil(B.left + B.width / 2 - I.left - 10));
      }
      if (c.current) {
        const B = c.current.getBoundingClientRect();
        (l[3].top = B.top + B.height / 2 - I.top - 21.5),
          (l[3].left = Math.ceil(B.left + B.width / 2 - I.left - 10));
      }
    }
  });
  const [p, f] = R.useState([
      { name: "Санкт-Петербург", check: !1 },
      { name: "Москва", check: !1 },
      { name: "Ростов-на-Дону", check: !1 },
      { name: "Краснодар", check: !1 },
    ]),
    C = R.useRef("transparent"),
    [v, g] = R.useState(!1);
  let w = 0,
    P = 0,
    m = 0,
    d;
  const h = R.useRef(!1),
    x = (I) => {
      document.body.style.overflow = "hidden";
      const B = I.changedTouches[0],
        X = I.changedTouches[0].target;
      L(X, B.clientX, B.clientY);
    },
    S = (I) => {
      const B = I.target;
      (h.current = !0), L(B, I.pageX, I.pageY);
    },
    L = (I, B, X) => {
      if (((d = I.closest("svg")), (C.current = "transparent"), d)) {
        (d.style.position = "absolute"), (m = d.width.animVal.value);
        const G = X - P,
          N = B - w - m / 2;
        (d.style.left = N + "px"), (d.style.top = G + "px");
      }
    },
    _ = (I) => {
      const B = I.changedTouches[0];
      k(B.clientX, B.clientY);
    },
    M = (I) => {
      h.current && k(I.pageX, I.pageY);
    },
    k = (I, B) => {
      const X = B - P;
      let N = I - w - m / 2;
      N < 32 ? (N = 33) : N > 300 && (N = 299);
      let D = X;
      D < -15 ? (D = -15) : D > 112 && (D = 112),
        (C.current = "transparent"),
        d &&
          (N > 32 && N < 300
            ? (d.style.left = N + "px")
            : (d.style.left = "299px"),
          D > -15 && D < 112 && (d.style.top = D + "px"));
    },
    j = () => {
      (document.body.style.overflow = "auto"), F();
    },
    E = () => {
      (h.current = !1), F();
    },
    O = () => {
      h.current && ((h.current = !1), F());
    },
    F = () => {
      if (d) {
        const I = parseInt(d.style.left),
          B = parseInt(d.style.top);
        let X = -3;
        l.forEach((G, N) => {
          G.left + 4 >= I &&
            G.left - 4 <= I &&
            G.top + 19 >= B &&
            G.top - 7 <= B &&
            (n(!0),
            (C.current = "#fff"),
            (X = N),
            X === 3 ? (t(q("true")), g(!0)) : (t(q("false")), g(!1)),
            d &&
              ((d.style.left = G.left + "px"), (d.style.top = G.top + "px")));
        }),
          X === -3 && n(!1),
          f(p.map((G, N) => (X === N ? (G.check = !0) : (G.check = !1), G)));
      }
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: w2.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsxs("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: ["Перетащи кнопку ", i.jsx("br", {}), "на верный город"],
        }),
        i.jsxs("div", {
          className: w2.task,
          ref: s,
          children: [
            i.jsx("div", {
              className: w2.map,
              children: i.jsxs("svg", {
                onMouseLeave: () => O(),
                onMouseDown: (I) => S(I),
                onMouseMove: (I) => M(I),
                onMouseUp: () => E(),
                onTouchStart: (I) => x(I),
                onTouchMove: (I) => _(I),
                onTouchEnd: () => j(),
                width: "20",
                height: "43",
                viewBox: "0 0 20 43",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  i.jsx("path", {
                    d: "M10 42.4463C13.115 42.4463 15.6402 41.9333 15.6402 41.3005C15.6402 40.6677 13.115 40.1547 10 40.1547C6.885 40.1547 4.35979 40.6677 4.35979 41.3005C4.35979 41.9333 6.885 42.4463 10 42.4463Z",
                    fill: "white",
                    fillOpacity: 0.5,
                  }),
                  i.jsx("path", {
                    d: "M8.22972 39.5961L7.25865 15.434H12.7442L11.7731 39.5961C11.7359 40.5471 10.951 41.3005 9.99999 41.3005C9.04897 41.3005 8.26696 40.5471 8.22972 39.5961Z",
                    fill: r ? (v ? "#DEFF7B" : "#EEA7A7") : "#9CE4E8",
                  }),
                  i.jsx("path", {
                    d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
                    fill: "white",
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              className: w2.towns,
              children: p.map((I, B) =>
                i.jsxs(
                  "div",
                  {
                    className: w2.town,
                    children: [
                      i.jsx("span", {
                        style: {
                          background: I.check ? C.current : "transparent",
                        },
                        className: w2.answer,
                        ref: B === 0 ? o : B === 1 ? u : B === 2 ? a : c,
                      }),
                      i.jsx("span", { className: w2.name, children: I.name }),
                    ],
                  },
                  B
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
const Va = "_taskInfo_kqup8_1",
  Ba = "_clock_kqup8_21",
  $a = "_numbers_kqup8_39",
  Wa = "_check_kqup8_61",
  Qa = "_arrows_kqup8_149",
  Ha = "_minutes_kqup8_171",
  Ya = "_hour_kqup8_187",
  Te = {
    taskInfo: Va,
    clock: Ba,
    numbers: $a,
    check: Wa,
    arrows: Qa,
    minutes: Ha,
    hour: Ya,
  },
  Xa = "" + new URL("hour-d47865e3.svg", import.meta.url).href;
function Ga(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    l = R.useRef(0),
    s = R.useRef(50),
    o = { transformOrigin: `${s.current}% 50%` },
    u = R.useRef([
      { value: 1, check: !1, deg: 120 },
      { value: 2, check: !1, deg: 150 },
      { value: 3, check: !1, deg: 180 },
      { value: 4, check: !1, deg: 210 },
      { value: 5, check: !1, deg: 240 },
      { value: 6, check: !1, deg: 270 },
      { value: 7, check: !1, deg: 300 },
      { value: 8, check: !1, deg: 330 },
      { value: 9, check: !0, deg: 0 },
      { value: 10, check: !1, deg: 30 },
      { value: 11, check: !1, deg: 60 },
      { value: 12, check: !1, deg: 90 },
    ]),
    [a, c] = R.useState(0),
    [p, f] = R.useState(0),
    [C, v] = R.useState(0);
  let g;
  const w = R.useRef(!1),
    P = R.useRef(!1),
    m = (M) => {
      const k = M.changedTouches[0],
        j = k.target;
      d(j, k.clientX, k.clientY), (document.body.style.overflow = "hidden");
    },
    d = (M, k, j) => {
      (g = M.closest(`.${Te.hour}`)), c(k), f(j);
    },
    h = (M) => {
      const k = M.changedTouches[0],
        j = k.target;
      S(j, k.clientX, k.clientY);
    },
    x = (M) => {
      if (!w.current) return;
      const k = M.target;
      S(k, M.pageX, M.pageY);
    },
    S = (M, k, j) => {
      g = M.closest(`.${Te.hour}`);
      const E = k,
        O = j;
      l.current > 180 ? (s.current = 55) : (s.current = 53);
      let F, I;
      l.current >= 0 ? (I = l.current % 360) : (I = 360 + (l.current % 360));
      const B = Math.floor(I / 30);
      I % 30 > 15 ? (F = B * 30 + 30) : (F = B * 30),
        F === 360 && (F = 0),
        F !== C &&
          ((u.current = u.current.map(
            (N) => (N.deg === F ? (N.check = !0) : (N.check = !1), N)
          )),
          v(F));
      const X = I % 360,
        G = X >= 0 && X < 90 ? 1 : X >= 90 && X < 180 ? 2 : X >= 270 ? 4 : 3;
      (G === 1 && a <= E && p >= O) ||
      (G === 2 && a <= E && p <= O) ||
      (G === 3 && a >= E && p <= O) ||
      (G === 4 && a >= E && p >= O)
        ? (l.current = l.current + 2)
        : (l.current = l.current - 2),
        g && g.style.setProperty("--rotate", `${l.current}deg`),
        t(q(C === 180 ? "true" : "false")),
        c(E),
        f(O);
    },
    L = () => {
      (document.body.style.overflow = "auto"), n(!0);
    },
    _ = (M) => {
      if (!P.current) {
        n(!0);
        const k = M.target;
        d(k, M.pageX, M.pageY), (w.current = !0), (P.current = !0);
      }
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: Te.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsxs("div", {
          className: Te.clock,
          children: [
            i.jsx("div", {
              className: Te.numbers,
              children: u.current.map((M, k) =>
                i.jsx(
                  "span",
                  {
                    "data-value": M.value,
                    className: M.check ? Te.check : "",
                    children: M.value,
                  },
                  k
                )
              ),
            }),
            i.jsx("div", {
              className: Te.arrows,
              style: o,
              children: i.jsx("div", {
                className: Te.hour,
                onMouseEnter: (M) => _(M),
                onMouseMove: (M) => x(M),
                onTouchStart: (M) => m(M),
                onTouchMove: (M) => h(M),
                onTouchEnd: () => L(),
                children: i.jsx("img", { src: Xa, alt: "hour" }),
              }),
            }),
            i.jsx("div", {
              className: Te.minutes,
              children: i.jsxs("svg", {
                width: "63",
                height: "95",
                viewBox: "0 0 63 95",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  i.jsx("path", {
                    d: "M30.9235 83.1408C30.0093 83.1408 29.3999 82.5314 29.3999 81.6172C29.3999 80.7031 30.0093 80.0936 30.9235 80.0936C31.8376 80.0936 32.4471 80.7031 32.4471 81.6172C32.4471 82.5314 31.8376 83.1408 30.9235 83.1408Z",
                    fill: "#008C95",
                  }),
                  i.jsx("path", {
                    d: "M33.0875 78.4396C32.9139 78.6901 32.7019 78.7284 32.4898 78.7668C31.9406 78.7568 31.3146 78.3227 31.1126 77.8118C30.7855 77.2141 30.2463 76.6548 29.6586 76.4328C29.3214 76.3843 28.9842 76.3359 28.7722 76.3743C28.7722 76.3743 28.7338 76.1623 28.8206 76.0371L28.5474 17.0745C28.5574 16.5252 28.8663 15.8124 29.2136 15.3116C29.3004 15.1864 29.3872 15.0612 29.3872 15.0612L30.207 14.1464C30.4674 13.7708 31.0167 13.7808 31.3055 14.1665L32.2203 14.9862C32.6343 15.4587 33.125 16.3552 33.0281 17.0297L33.348 78.064C33.2612 78.1892 33.1743 78.3144 33.0875 78.4396Z",
                    fill: r ? "rgba(255, 255, 255, .3)" : "#299EA6",
                  }),
                  i.jsx("path", {
                    d: "M30.7579 0.197183L30.905 0.157751C31.386 0.186618 31.612 0.441517 31.7303 0.883015L31.7773 89.3583C31.7485 89.8392 31.4936 90.0652 31.0521 90.1835C30.5711 90.1547 30.3451 89.8998 30.2268 89.4583L30.1798 0.983019C30.2086 0.502087 30.4635 0.276049 30.7579 0.197183Z",
                    fill: "#66BABF",
                    fillOpacity: r ? ".3" : "1",
                  }),
                  i.jsx("path", {
                    d: "M30.5424 81.8026C30.6896 81.7632 30.8367 81.7238 30.9839 81.6843C31.7592 81.6343 32.5844 82.3596 32.4873 83.1743L32.4197 92.3409C32.4697 93.1161 31.7445 93.9414 30.9298 93.8442C30.1545 93.8942 29.3292 93.1689 29.4264 92.3543L29.4939 83.1877C29.2968 82.4518 29.9537 81.9603 30.5424 81.8026Z",
                    fill: "#66BABF",
                    fillOpacity: r ? ".3" : "1",
                  }),
                ],
              }),
            }),
          ],
        }),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Передвинь часовую стрелку в верное положение",
        }),
      ],
    }),
  });
}
const Ka = "_taskInfo_smbtj_1",
  qa = "_task_smbtj_1",
  ba = "_label_smbtj_21",
  Ja = "_input_smbtj_41",
  ec = "_answer_smbtj_47",
  D3 = { taskInfo: Ka, task: qa, label: ba, input: Ja, answer: ec },
  tc = (e) => {
    const { value: t, color: n } = e;
    switch (t) {
      case 0:
        return i.jsx(i.Fragment, {
          children: i.jsxs("svg", {
            width: "21",
            height: "30",
            viewBox: "0 0 21 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              i.jsx("circle", { cx: "16", cy: "5", r: "5", fill: n }),
              i.jsx("path", {
                d: "M16 5.5L1 29",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          }),
        });
      case 1:
        return i.jsx(i.Fragment, {
          children: i.jsxs("svg", {
            width: "18",
            height: "68",
            viewBox: "0 0 18 68",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              i.jsx("circle", { cx: "5", cy: "5", r: "5", fill: n }),
              i.jsx("path", {
                d: "M5 5.5L16.5 67",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          }),
        });
      case 2:
        return i.jsx(i.Fragment, {
          children: i.jsxs("svg", {
            width: "21",
            height: "42",
            viewBox: "0 0 21 42",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              i.jsx("circle", { cx: "16", cy: "5", r: "5", fill: n }),
              i.jsx("path", {
                d: "M16 5.5L1 40.5",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          }),
        });
      case 3:
        return i.jsx(i.Fragment, {
          children: i.jsxs("svg", {
            width: "11",
            height: "36",
            viewBox: "0 0 11 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              i.jsx("circle", { cx: "6", cy: "5", r: "5", fill: n }),
              i.jsx("path", {
                d: "M6 5.5L1 34.5",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          }),
        });
    }
  },
  nc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABZCAYAAABsbDn0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaWSURBVHgB7Zx7iFVFHMd/u2qomW1oD8PyUamRSBa6mlrmo1IUNK0Ukgr9Q6kILMrsgYhl9KKHSSRkWUilZJnlHxo+iqw0LShFqdRKS420NN86fX47Z+3u3de59+6ZmePuB77MvWfP3TPnd+Z1fvObESkAY8w49Bs6gnagrehL9CoqkvoMBphrquY4erLeGogbb492m5rZhG6S+gQ33BgtNPH4B01HZ8jpDjfZCa03ufORpIzGcU/k5q4kmYhGoPMldw5KyqjROBikJ8kRNBxNQWdK/syTlFGhN4l6lxnoLHQhGiV1w27Upqio6KSkFYwzxSTDO5JmuIHJxo5PkuBWSSHFZPxiNJXPT6FGkgyDucZlkjbI9J3GDSfRGjTApGTkXERGl5EOEnccRlvQe2g12kBDfUBCBON8a/yyB81BnSQwtOQcIm0q/tHxVDdK0RYJhGJ0EXoC/SR+2ROSYZRTDSMlqD3JJvFXio6h3hjoGwmE4vIPZGobSW+0QvzQROzIPFwoQSONdTP4YC0aLYFQnH2AErQIteRjd7RU3NICbZO0wJNcFj1V7fLfQAdMMsxC50maMNYdOgo1jr6vMMlwnwRGzsN4bkKdVs2k7tmHSkMb5+RKUh69ErQY45dIIORjnO8lOXSsc7z8C4aaZOyrxSXigXyMsxj9LcmgvWSbjO8XoAloc9TW3YA6Ru1gO9Q2+twD9Q+iQScTC0xyHES3Rdd53OTGXjRUfGLsUzpqkmUV+szkziE0UuqAvJ1OZEAd8OukYjUIhR9Qr0L9RPm0OWVw4Z0kX0mYXIHGS4EU5K6k9PQg+ULiTw5qT/QJ6oo6SrLsR12ih+gHDNQnque1cQJNiH7TFH1ukmeV+IZMPGqsA70m7o/OLTW2tztm3DBOfEMmhqB91WTwYdQcPWbcsx9NNLYD8WqgDqZyaMorqAl62/jlF8mROp8/MnZOqlSsV08b6pWoM9og/ulBA71OQsPYCT3fvJ5LnvMe5+TBQvHPzRgotp/a2bQsmWpNskf8s5KqdX2cE52VHDL0J8lr4p9ePKhr45zoslops8WOXH2i83JTMVCt9+7UOJSe70hCmLS7TuzsSo04DwWJivSnkkOwZkL8ijrxwA5Xd4LraqV8jZaIfzRGYIapIT7aSxBRVN+1inUV/wyj9Hxc1R+8RVhhIK3zWsV09DxJ/LEN9anKteE9/MzY1w2d7vEZI3Q3xpmdfdBHm1MBMmVI/hC/jDHRjG4m3o0TCP1Q3+yDoRinlfjnjuwDQYS86uuy+GcrVbyCX9t7yTF2NY4rNFjhA3Q045iux9DghZnZJ/sepSoPijt0pkQjx2aJjV5dL9YJp6PlpKa488PYuW/XvIlihdD4Ljm9xT3alNyDgdS3tJR2Zld1J3ptkMlgO5KNqLn4QaeLB2GgKmduvTbIZGo7yUviDw3Q1DjHmeic7D+G8Pqg9T+E9Z86Sh+WGSTuw5+j4SE6C1kSXV+70gESBn+hvhhok7gGw4wwycf1FMrL5flNvOQYu6ZCF56oS0BdE4WsMHbFu2hSUssWy8Awt5C8L7bLvgalZVeCc1GjpMc52kXqHHU+i/R9oa8Ww2l31ibalXMBNcyNaLmkBy3dZVXfxTjnX9RF0kVZW+zCONretJX0oOOcNfrBhXE6SLqYUz6X1eAmrYg2AadWKrowTpq2ppqQuWrHhXFCcIHGQVdHf5h5IDHjMABsjfrz8XIJnxfEzpsfEhdgmEdMePyONLprevRdI01vr+4ekqxWOUdvJsxDqDulQ19nXkQ7xPpz3A8zjN0Rbp4Jg12oJeqXkT8NC9YNHwdWdw8u3sqnkUwW/wvqF6GzKTmnjEHeGvH9RHU/cNLNGhvBOR8NE/+0j9yzteJqEKi9wFWSHBp4vVfssEHblCFiQ3t1c7ZsQzwnIUHJGWqSY2ct177L2L3IxqKrUS8JDTLV01gv/48xb1o3HXoajUfzTeVFJ7qT7uro88Rarj1Nz5XQIZOd0fasG9UtIHSZ0RJjt4d4C3XL+E0rtC7LMIOjv6lPeitK1KvpBG6iJNLzWiWM3R+j1lV7nDMwwzjPZhzXdee6u26d+6Z9vJXPFTvLqU9+AVpN7/FzjN9tlv8jwDIDLXWDxmJJo4eBJ9oCPYM2oI2m8i4qsTcz4twx0W/GZB0Pr5GNAxkfnWWM5eheY5c+6mbSY3P4X02i/9FfTie4oUvRA6bAYCVjh/yl0kBlTIwFHQ00UBlKTrPTYkyTdv4DfNhw5wOwyIEAAAAASUVORK5CYII=",
  rc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABBCAYAAAB2FzKyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQtSURBVHgB7ZuLddpQDIZFTgagE9QjkAnqbkAmaDIBdIKQCaATkE5AO4HZgHQCuxPQTPBX4l4Hx28bY8uY7xwdg/ELWdLVlWUixQAYszgsMxaPZY8jPotLLTGijhFF8GLCMmaRz59j34tYjEajZ+oL9s4/2Tu9tNYwjvy2sMspy85u1xSeVbh++EIfYn/et67i4egye3x0n6ZZw9yIMWnGKksDPss30gqMa+2gh8aUdUMNAWPu/1gC0sMLGhoZT1YUjBVt+KPPsmdxSRdrdB2zYALnOYNzU2zoRGrnUXzyKS+WVC7X0cAd51uvVJNTXG9G/VFSQCZ+1uY2+oWtZMxazz0gb/NARkEO9Yc//L8COoHb2Pc1K0KWv1nAB/8Z/ZF/W/PigfqHxNHJKa53iFEw+caczBwrSkDGZFcsUyt9RhQVpjDPVaxsxEoSBS1peARkAnyp2CXBfELDxGHxym4cup7s5FrRO0c6D79YHossK5FHsdIWvHiiYRGw3OcF+7Q8CjQ8HJYdcibR7xbFG0kCKaOaS8NF3O8ubTQc4ViKPXk+dCFsWVFf4yvF9cSK1nQlxE1becPak2SydsZ6gQRpKxsr3F0QqWlCqCjdxfh2+Zu28qqoJKlh6Op6SbZpK8MpzBCTzCw+pU1nwnqUmNs53W9M/XDvbdac76Ao/vGOzgwbraQhM9LNW9YPrcUovhlS99LeTBGQFmCaNbQiJWM9IYIvZg69zwNLF/NaAebhqQ+duPHr7bSRjC8orFo4pIvX+ADXacJpK4pS0ghIFxPYZrhwReetiYK1LIkNGnOtLct3LVOYL6Q3IXVZllqaXX1qjx/2fJLXOSW235KG/A+mx7MNJB1ZxM6dl9N5aLE9OxeYLuK22CAlmcSxlz0qqpLOLhpjffSlzVqwd81H85TN9vvxgBfGDZpGHmBWmUf6qGBdXaUHb9QsUkOSkanKEyWHxVdtXXxxL2iONSLBF8atq064d0XW1feauViSPMA9TjXM4/B7qobMDHyYXrFULkFRiV4B/r6lekmizO820DIyolnX2yEj70H9ZNZHLNnsyqKCCtsWvTZymFBnKOuR6lUmHDLvDXYLyg/jcmclOJdJTsWywjdFV5Fz1Qnubc49s4EpBRexwvHFyKp19n2N80XR0Z6JfAvxEIsPMPOxqq+3xY+xKrmfDmsSMhQlipjm7FPVhRax/csqW0+zL8yDhfc7CNMWWWY/D+XxUvYvmmPqsSaBL8iFrQ+hZEnD/smqjDOOk5We6GodR+QN9gr7FI18fsq6ecHxovvosqa6INvtxDLFQtNGNq/gmFHr6v+LCMh2u/fJLIyVpimx0HLRp2JeHhnWkijtRqzOh6kqzKCprHtukBzW5xnbORdjHVXBR7c7xCO6kiTidv5graUMVkGrQcWaqrBypFliQQr4D1tzcAMLLY9wAAAAAElFTkSuQmCC",
  lc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAA+CAYAAADZAm74AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYgSURBVHgB7ZxrbBRVGIa/LaVAvRS8cFG8gw2IgrWNosYLQjUm3kkhGjWEH0ZDMcoPookBCZgIWE00QU1AY4hIFMF6ISgmBLyBgShKBYMiIoJiCxYrItDP9/VM7brZbmdmZy8zc57kyXR3Z3Y659uZM+c754yIC1T1TLgaThZLcYBg9IVb1dACzxdL4UEgntH/85BYCguCMAgeTgnMB7y0iaVwIAA1mp698GSx5B8U/FlwjXbNjWLJGaUdf6Cgy7F4EB6AC+E0eHWGbY+IJbcgKMfDN50z4QjcopnZBU8US25BIT+s3lgplpxS4iyvEG8MFUtOKcWv/yQsLxZvrHazklNvVcIEbIF7EonEYbF0C8+Y6+A54o39KPR6+BSsTP4Ar0uc5QgstsFNcCPcAQ/i/c/gXV19MT4rg7fBUyXOsBKHO9U/DTABh8ApsA3+DFszbLM1w/9zn7POHjgbjoZ9JW7wcqPmLssvG+Cz8JCHbZ6DiZT/4xq4HK5Is/52uAiOkriAg+0Jv9H8M007L3v3wH0utmESdaTEBRzsJM0/R+FG+KqatpNbZkkM6Gj5F6Kx2ANWObqF2YZXJAaU4Bd4FZZPSzjoCWORo+MZc4GYdkZYeAQ/Jp5tS9Am2isRhZXvaRIuBsIGyF7VsyWiMDDnSTipgOMlojAwNRJehiS/UNNYngEHSshhHdNLwksPBOFCLHkLzTs25vwYrFq8PybMeTmmUvZheYqEk2OOZWk+2wK/hvvhMrgWgfqbH+CY+2PRGzbjvTbJEnzfACwq8V1rJSAYmL8k3GeNGxS+CxfAS+D9kMFh4NhbuwIO5msU7kHxgJrU0jtwLBwXWHDUXSok6hxzll+oh3FzWHcAnAnbne0bYYUEACv/18TS0WHIPNxCFG5ZdxtgnWosPoYzpLMdeJM47SzYHz7K9aD3KxI2WqeWVF5S04jNVG6zM2z/Efwh6TXPpHLxAOuYl7G8VyyprIdT4SF4Jxwn5s7vF/gnnCCdZ5obXoRTIC+V5aiLPs+0MgNzPZYcXBGmtEy+4I0Rbxz6SDCsgleKKeubEZwPu1qRgWFj7CsJ7y1zWOG4iQkITku6D3kqsr/fjhHLP7y9Zl/UGek+ZGBqJX0DzZJ7WI3Up/uAgbHzXQpL2hFKDMwcuE5MRWfJPyNxOTsh9c0SVD5NYgaPzxdLIeCo1mUIzh2aNHLovz+cqE2HnPfCZB9zR+x2tndr+WMpnAvbMrZd1KTUn4eXiyVfsEppythyxWWO7ZsxYtLmlvzAO+Q1rlr7Tp7nAcjp5OyIKhVLrtgJazylYdRkXZk/mieWoGkXk59rwJXqDc/5MQSHeSP2eh4nlqD4UUxDc1VHd7iX7Oi/YENmWzeLxSsbxNxEvZ70HhOkjbAa5dqYPEbBb13xPRwt0eRLMen9agmOJbAeBd+MK842Zx83wPfh3MAGjeDLn9ToUuscYxWcDIfBfrAPHAHfgpy4xWcdNKkpCz5rZ552djEns0M9dpIRX30w2FGdmMZQ1PgOVuEX3CoeUTOlhJ1nF0FOtLpUzICPOfi+BeIRv4HhL+BbeLpEi5koxMclAJxA9XLqZM94rvwJdsau1cckeuyWgEAZtfsNCvEVGIfFMLABbkXCJikSfAcGvwbeudwuRXQwWcIRmbukSMjmjGFwmrGYBI9K8HwCf5X8oY5FQRA5r+1iMgGDJDhYQJzSt0hMf0U/eBm8RczQIfa6en02QXeUSpRygGoemLBbg+V3zfyQhmFOGyJIOKW+t0SJAAuJzwqYBQdrynMA0uyTj1vhuOGfNDu4z5XwWokaOKipap6IkS2NHnfNfQ9X0wr3A1vwo2BPiSpqRr4PhWPhYk2fnsgE168TH2C7+eqPiRIncMCcpv62y8LhZeRuOFx8oiavxcmyf6h7eIbHb1gwDnp8NwXDM4TPoAlk0pSaqQ8cCtTqMjC/SRzBgVeoyaymckDNpWeidjPVwed+l6o7lktcwcE/kaZANquPNLiHfbKu46O06rTruzZe9s6VuKLmOWYvqGmXdPCeupixFeD/wHbWrWr6VqbDT2HQjdPAyUvlh4Lg4EFOo2M+an02Wde48A+YayawA/FbIwAAAABJRU5ErkJggg==",
  sc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABWCAYAAACARLW6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASBSURBVHgB3ZvhddpADIBFXv+XTlBnA3eCOhOETJBsEDJB3AmSTkA6AXQCkglIJrA7AXQCVeJk4hgTG5Bkp997x5mzsa3TnU6nOwA6BBGvKS0ojSkN4SNDAkT4ljtQ4BN0R1L5zlr6S3k2GAx+cQFrkLIVpd9UtpKyK84oPVGKKOV0LocuoZdK8H3mlLLSdz4e7vgdn0ugS6Tf7Muy4dy6D56AIxj6zS0dxrA/w4ZzYz5w6UNSe/zAW7DjK394GQUWZAz/A6SdK7SH+1DEz/PQUA62zCgN3Uw3bg+gmqTV53lYuQTsuK8WeDS5Q0x0WyakpRc+oCaXcu4hkKXTOZLETfszCXVj2uQKy+ME+4KZmYb45hC0swI/VkcJJBpgt59N5xObTgyOIg+kkVx2TJPL5T556V55KWdief4A2lSemN2U0oiTlA0ln1bMaIY6LOWZ7GHHDe+3xLbetgiT1TyMyw7xmNuQggVSO1YvvYsJWIGhiXmSoYJVPNkhTETZJfjxSOnMzB9z1k4KVmCwWpe4bb2smIMlGDSToR/2zRqDqV6iLXz/ORq4RnWewjnYOpTMuIi9mUG1FaPtZKzgHjzgB6Ft/8nQOyCIIWhuJUwEXYChs2qy9BTGI6Yw9gymb6wchqnBd9CNAeTm1mwXaOMdWAZI3hUmRn1S6ICiySWgyw01NZ/xpgLPw4sp9aJUznNzLotgP/h3FyTMI/QR3G/GOseu+kxbsP3KwWYFrbdgWHJvw+IjaOYW200hUugzGCI9d9iOBfQZPGxiN5XfDSXvT9PDEKk8FtsYQQtOpHZ5ELyG48nrCkV7kRwnaGkR6eYPqMdsxzMK1yqTfGolFE8feHTPQYeZaJxffL0ZSTRT9K1IcvbsU7AGj/e4lyVNRHJP7pt1M+EFGkz8qhO8l5prWIM/IYRruUl9o/QD6ima0TOlcwxGgnd41PVP1tocLWNzNTXJNT6quU4zOpRpCjWovGjhYefrk7JHrU4gyjLQ5bSzfW8YXCMtVPvSoUGSEegRa96vlUBUg5NKLb6ALr5TD3xrji2CKefgBQaLZr3WyvdX0dLgHUHW4wT4NIcVWbgvoMCuNdaEsin4tW2bYCSGGMIcfTE129zMEvAl1RxQNwJhcD88l/KZHJSHgHXkVFT+AP6ob/MvNDSGbtAeoDcC+Q1sb5mBMoVAZ9ANOShTtnI34E8EyqwF4o4pyx/P4EsEylTHoeYtjrqoeyJVgf6AL2ZGoSsSUKYqUC75A/iQgyUYwrSxHMfirGZowyN0ATb/AfBQTDbMtulDbMotrJ/J0kvjznqOzVFtcrQ0pfQZgiVkr/xYk9vJsn8tuB0oafpLZh0JGLC32cYw1ahqZ5e2ckqnsN1kZ73ay4DNlm+zVCnXl2PmGRpuNztUQ1HDZXx+VYqNl/OLzv+7XQXbrfpdljQ0lL7kPcVvB7ZfxpxUro+gT0i/aCvMZm0Jw+CsGeDXAV8Xf4uN5HXw7uKr3mmjDnz17Yq+keL2ONNVfGJ/MJjjtFKWSDNcYN/3/lT5CE3pH52K0SNl2+kcAAAAAElFTkSuQmCC";
function ic(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: s } = A3(),
    o = () => {
      n(!0);
      const { name1: c } = s();
      t(q(c === "2" ? "true" : "false"));
    },
    u = [nc, rc, lc, sc],
    a = [
      { nameRU: "Астрахань", nameEN: "Astrakhan" },
      { nameRU: "Казань", nameEN: "Kazan" },
      { nameRU: "Нижневартовск", nameEN: "Nizhnevartovsk" },
      { nameRU: "Комсомольск-на-Амуре", nameEN: "Komsomolsk-na-Amure" },
    ];
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: D3.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Выбери верный силуэт региона",
        }),
        i.jsx("form", {
          onChange: o,
          className: D3.task,
          children: a.map((c, p) =>
            i.jsxs(
              "label",
              {
                className: D3.label,
                children: [
                  i.jsx("input", {
                    type: "radio",
                    className: D3.input,
                    value: p,
                    ...l("name1"),
                  }),
                  i.jsxs("div", {
                    className: D3.answer,
                    children: [
                      i.jsx("img", { src: u[p], alt: c.nameEN }),
                      i.jsx("span", { children: c.nameRU }),
                      i.jsx(tc, {
                        value: p,
                        color: r
                          ? s().name1 === "2"
                            ? "#99CC00"
                            : "#CC0000"
                          : "#008C95",
                      }),
                    ],
                  }),
                ],
              },
              p
            )
          ),
        }),
      ],
    }),
  });
}
const oc = "_task__info_ejqpt_1",
  uc = "_form_ejqpt_9",
  ac = "_numbers_ejqpt_23",
  cc = "_numbersActive_ejqpt_23",
  fc = "_userAnswer_ejqpt_57",
  dc = "_range_ejqpt_65",
  Cc = "_progress_ejqpt_207",
  k2 = {
    task__info: oc,
    form: uc,
    numbers: ac,
    numbersActive: cc,
    userAnswer: fc,
    range: dc,
    progress: Cc,
  };
function pc(e) {
  const [t, n] = R.useState(!0),
    r = L1(),
    { selectAnswer: l, checkClick: s } = e,
    [o, u] = R.useState("0%"),
    [a, c] = R.useState("0"),
    p = (f) => {
      const C = f.currentTarget;
      u(C.value + "%"),
        c(C.value),
        n(!1),
        l(!0),
        C.value === "50" ? r(q("true")) : r(q("false"));
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: k2.task__info,
      children: [
        s && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        i.jsxs("form", {
          className: k2.form,
          children: [
            i.jsxs("div", {
              className: t ? k2.numbers : k2.numbersActive,
              children: [
                i.jsx("span", {
                  style: t ? { display: "block" } : { display: "none" },
                  children: "0",
                }),
                i.jsx("span", {
                  style: t ? { display: "none" } : { display: "block" },
                  className: k2.userAnswer,
                  children: a,
                }),
                i.jsx("span", {
                  style: t ? { display: "block" } : { display: "none" },
                  children: "100",
                }),
              ],
            }),
            i.jsxs("div", {
              className: k2.progress,
              children: [
                i.jsx("input", {
                  type: "range",
                  className: k2.range,
                  min: "0",
                  max: "100",
                  step: "10",
                  defaultValue: "0",
                  onChange: p,
                }),
                i.jsx("span", { style: { width: o } }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const hc = "_taskInfo_ekrwu_1",
  mc = "_task_ekrwu_1",
  vc = "_taskAnswer_ekrwu_23",
  yc = "_answer_ekrwu_45",
  gc = "_zero_ekrwu_63",
  xc = "_taskZeros_ekrwu_75",
  wc = "_none_ekrwu_113",
  kc = "_success_ekrwu_119",
  jc = "_danger_ekrwu_125",
  Pe = {
    taskInfo: hc,
    task: mc,
    taskAnswer: vc,
    answer: yc,
    zero: gc,
    taskZeros: xc,
    none: wc,
    success: kc,
    danger: jc,
  };
function Mc(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    l = [
      { value: "0", answer: !1 },
      { value: "00", answer: !1 },
      { value: "000", answer: !1 },
      { value: "0000", answer: !1 },
    ],
    [s, o] = R.useState(!1),
    u = R.useRef(null),
    a = R.useRef(null),
    c = { top: 0, left: 0, bottom: 0, right: 0 };
  let p = 0,
    f = 0;
  R.useEffect(() => {
    if (u.current) {
      const j = u.current.getBoundingClientRect();
      (p = j.left), (f = j.top);
    }
    if (a.current) {
      const j = a.current.getBoundingClientRect();
      (c.top = Math.round(j.top - f)),
        (c.left = Math.round(j.left - p)),
        (c.bottom = Math.round(c.top + j.height)),
        (c.right = Math.round(c.left + j.width));
    }
  });
  let C;
  const [v, g] = R.useState(null),
    w = R.useRef(!1),
    P = (j) => {
      (document.body.style.overflow = "hidden"),
        (C = j.changedTouches[0].target),
        d();
    },
    m = (j) => {
      (C = j.target), (w.current = !0), d();
    },
    d = () => {
      if (C) {
        if (C.style.position === "absolute") return;
        C.style.position = "absolute";
        const j = C.offsetLeft,
          E = C.offsetTop;
        (C.style.left = j + "px"), (C.style.top = E + "px");
      }
    },
    h = (j) => {
      const E = j.changedTouches[0];
      S(E.clientY, E.clientX);
    },
    x = (j) => {
      w.current && S(j.pageY, j.pageX);
    },
    S = (j, E) => {
      if (C) {
        const O = j - f - C.offsetHeight / 2,
          F = E - p - C.offsetWidth / 2;
        O > 14 && O < 112 && (C.style.top = O + "px"),
          F > 0 && F < 270 && (C.style.left = F + "px"),
          c.top - 10 < O &&
            c.bottom + 10 > O &&
            c.left - 30 < F &&
            c.right + 30 > F &&
            ((C.style.left = c.left + "px"),
            (C.style.top = c.top + "px"),
            v &&
              v !== C &&
              ((v.style.position = "static"),
              (v.style.left = "auto"),
              (v.style.top = "auto")));
      }
    },
    L = (j) => {
      (document.body.style.overflow = "auto"), M(j);
    },
    _ = (j) => {
      (w.current = !1), M(j);
    },
    M = (j) => {
      if (C && (C.offsetTop !== c.top || C.offsetLeft !== c.left)) {
        (C.style.left = "auto"),
          (C.style.top = "auto"),
          (C.style.position = "static");
        return;
      }
      n(!0),
        C && g(C),
        j === 1 ? (t(q("true")), o(!0)) : (t(q("false")), o(!1));
    },
    k = (j) => {
      w.current && ((w.current = !1), M(j));
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: Pe.taskInfo,
      ref: u,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Перетащи верное количество нулей в ячейку",
        }),
        i.jsx("div", {
          className: Pe.task,
          children: i.jsxs("div", {
            className: Pe.taskAnswer,
            children: [
              i.jsx("span", { children: "1" }),
              i.jsx("div", { className: Pe.answer, ref: a }),
              i.jsx("span", { children: "+" }),
            ],
          }),
        }),
        i.jsx("div", {
          className: Pe.taskZeros,
          children: l.map((j, E) =>
            i.jsx(
              "div",
              {
                children: i.jsx("div", {
                  onMouseLeave: () => k(E),
                  onMouseDown: (O) => m(O),
                  onMouseMove: (O) => x(O),
                  onMouseUp: () => _(E),
                  onTouchStart: (O) => P(O),
                  onTouchMove: (O) => h(O),
                  onTouchEnd: () => L(E),
                  className:
                    Pe.zero +
                    " " +
                    (j.answer ? Pe.none : "") +
                    " " +
                    (r ? (s ? Pe.success : Pe.danger) : ""),
                  style: E === 3 ? { width: "128px" } : { width: "auto" },
                  children: j.value,
                }),
              },
              j.value
            )
          ),
        }),
      ],
    }),
  });
}
const Lc = "_taskInfo_4jowp_1",
  Sc = "_form_4jowp_11",
  Ac = "_input_4jowp_25",
  _c = "_value1_4jowp_41",
  Zc = "_value2_4jowp_47",
  Ec = "_value3_4jowp_53",
  Nc = "_value4_4jowp_59",
  Tc = "_label_4jowp_65",
  V1 = {
    taskInfo: Lc,
    form: Sc,
    input: Ac,
    value1: _c,
    value2: Zc,
    value3: Ec,
    value4: Nc,
    label: Tc,
  },
  Wt = (e) =>
    i.jsx(i.Fragment, {
      children: i.jsx("svg", {
        id: e.id,
        width: "89",
        height: "92",
        viewBox: "0 0 89 92",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: i.jsx("path", {
          d: "M38.5932 0.217043C37.2909 0.325565 36.0972 0.542609 34.9035 0.759652C32.4075 1.19374 30.02 1.95339 27.6325 2.93009C25.3535 3.79826 23.0746 4.992 21.0127 6.29426C19.9275 6.94539 18.9508 7.70504 17.8655 8.4647C16.8889 9.22435 15.9122 9.984 14.9355 10.7437C12.9821 12.3715 11.2457 14.1078 9.50938 15.9527C6.1452 19.6424 3.43216 23.9833 1.69581 28.6497C0.827637 31.0372 0.285028 33.5332 0.0679848 36.1377C-0.149059 38.7423 0.176507 41.3468 0.719115 43.8428C1.37025 46.4473 2.34694 48.8348 3.54068 51.0052C4.73442 53.1757 6.1452 55.2376 7.88155 57.0824C9.07529 58.4932 10.3775 59.687 11.6798 60.8807C12.765 62.183 13.8502 63.4852 15.044 64.679C15.9122 65.5471 16.8889 66.4153 17.8655 67.175C18.8422 67.9346 19.8189 68.8028 20.7956 69.5624C22.8575 71.0817 24.9195 72.384 27.1984 73.5777C29.4774 74.7715 31.7563 75.7482 34.2523 76.3993C35.4461 76.7249 36.7483 77.0504 37.9421 77.376C39.2443 77.593 40.4381 77.8101 41.7403 77.9186C43.0426 78.0271 44.2363 78.0271 45.5386 77.9186C46.7323 77.8101 48.0346 77.593 49.2283 77.2675C50.4221 76.9419 51.6158 76.5078 52.8095 76.0737C54.0033 75.5311 55.0885 74.9885 56.1737 74.4459C58.3442 73.2522 60.4061 71.7329 62.2509 70.105C63.2276 69.3454 64.2043 68.4772 65.0725 67.609C65.9407 66.7409 66.9174 65.7642 67.7855 64.896C68.3282 64.3534 68.7622 63.7023 69.3048 63.1597C69.4134 63.0511 69.4134 62.7256 69.3048 62.617C69.1963 62.5085 68.8708 62.5085 68.7622 62.617C67.3515 64.0278 65.9407 65.4386 64.5299 66.8494C63.8788 67.5005 63.1191 68.1516 62.3595 68.8028C61.5998 69.4539 60.8402 70.105 60.0805 70.6477C60.0805 70.6477 60.189 70.6477 60.189 70.5391C58.9953 71.4073 57.8015 72.2755 56.4993 73.1437C55.197 73.9033 53.8948 74.663 52.484 75.2056C51.5073 75.6397 50.6391 75.9652 49.6624 76.1823C48.6857 76.5078 47.6005 76.6163 46.5153 76.8334H46.6238C45.5386 76.9419 44.4534 77.0504 43.2596 77.0504C42.0659 77.0504 40.9807 76.9419 39.7869 76.8334C38.2676 76.6163 36.6398 76.2908 35.1205 75.8567C33.6012 75.4226 32.0819 74.88 30.5626 74.2289C28.8262 73.4692 27.0899 72.601 25.3535 71.6243C23.6172 70.5391 21.9894 69.4539 20.4701 68.2602C19.0593 67.175 17.757 66.0897 16.4548 64.896C17.4315 65.4386 18.4082 65.9812 19.3849 66.5238C20.4701 67.0664 21.6638 67.609 22.8575 68.0431C24.0513 68.4772 25.245 69.0198 26.4388 69.3454C27.6325 69.7795 28.9348 70.105 30.1285 70.4306C31.4308 70.7562 32.6245 71.0817 33.9268 71.2988C36.5313 71.7329 39.1358 71.9499 41.6318 71.9499C42.9341 71.9499 44.2363 71.9499 45.5386 71.8414C46.8409 71.7329 48.1431 71.5158 49.4454 71.4073C50.7476 71.1903 51.9414 70.9732 53.2436 70.7562C54.5459 70.4306 55.7396 70.105 56.9334 69.671C59.3209 68.8028 61.4913 67.7176 63.6617 66.4153C65.7236 65.113 67.7855 63.5937 69.5219 61.9659C71.3668 60.2296 72.9946 58.3847 74.4054 56.3228C75.8162 54.2609 77.1184 52.199 78.0951 49.92C79.0718 47.641 79.8315 45.2536 80.3741 42.7576C81.3508 37.657 81.3508 32.448 79.94 27.456C79.2888 25.0685 78.3122 22.681 77.0099 20.4021C76.4673 19.3169 75.8162 18.2317 75.0565 17.255C74.2969 16.2783 73.5372 15.3016 72.669 14.3249C71.8008 13.4567 70.9327 12.5885 69.956 11.8289C69.5219 10.4181 68.4367 9.65843 67.3515 9.0073C65.2895 7.59652 63.0106 6.5113 60.6231 5.42609C57.0419 4.0153 53.2436 2.93009 49.3369 2.38748C49.3369 2.27896 49.2283 2.17043 49.1198 2.17043C49.1198 2.17043 49.1198 2.17043 49.2283 2.17043C49.0113 2.06191 48.7942 1.84487 48.5772 1.73635C48.3602 1.62783 48.1431 1.41078 47.9261 1.30226C47.709 1.19374 47.3835 1.08522 47.1664 0.868174C46.8409 0.759652 46.6238 0.65113 46.2982 0.542609C45.7556 0.325565 45.1045 0.217043 44.5619 0.217043C43.6937 0.108522 43.0426 0 42.3915 0C42.2829 0 42.1744 0 42.0659 0C40.8722 0 39.6784 0.108522 38.5932 0.217043ZM40.8722 0.759652C41.9574 0.759652 43.0426 0.759652 44.1278 0.868174C44.8875 0.976696 45.7556 1.19374 46.5153 1.41078C46.9494 1.62783 47.492 1.84487 47.9261 2.17043C47.9261 2.17043 47.9261 2.17043 48.0346 2.17043C47.2749 2.06191 46.4068 1.95339 45.6471 1.95339C43.0426 1.73635 40.5466 1.73635 37.9421 1.95339C36.6398 2.06191 35.3375 2.27896 34.1438 2.496C32.9501 2.71304 31.6478 3.03861 30.4541 3.4727C29.2603 3.90678 28.0666 4.34087 26.8729 4.88348C25.6791 5.42609 24.5939 5.9687 23.5087 6.61983C21.3382 7.81356 19.1678 9.22435 17.2144 10.8522C15.261 12.48 13.5247 14.2163 12.0054 16.1697C10.4861 18.1231 9.07529 20.185 7.99007 22.464C6.79633 24.743 5.92816 27.1304 5.27703 29.5179C4.6259 32.0139 4.19181 34.5099 4.08329 37.1144C3.97477 39.719 4.19181 42.3235 4.6259 44.8195C4.95146 47.424 5.60259 49.92 6.57929 52.3075C7.23042 54.0438 8.09859 55.5631 9.07529 57.191C8.42416 56.4313 7.77303 55.6716 7.1219 54.912C5.49407 52.7416 4.08329 50.4626 3.10659 48.0751C2.23842 45.9047 1.58729 43.5172 1.26172 41.2383C0.936159 39.0678 0.936159 36.8974 1.26172 34.727V34.8355C1.58729 32.231 2.34694 29.735 3.32364 27.3475V27.456C4.6259 24.5259 6.25372 21.7043 8.20712 19.2083C9.6179 17.472 11.1372 15.7357 12.6565 14.2163C14.2843 12.5885 16.0207 11.1777 17.757 9.76696C17.757 9.76696 17.757 9.76696 17.6485 9.87548C19.1678 8.68174 20.7956 7.59652 22.4235 6.61983C24.0513 5.64313 25.6791 4.77496 27.4155 4.0153C30.6711 2.60452 34.2523 1.73635 37.725 1.19374H37.6165C38.7017 0.868174 39.7869 0.759652 40.8722 0.759652ZM47.709 3.79826C49.8795 4.12383 52.0499 4.55791 54.2203 5.10052C56.3908 5.64313 58.5612 6.40278 60.6231 7.27096C60.5146 7.27096 60.5146 7.16243 60.4061 7.16243C63.4447 8.46469 66.3748 10.0925 69.0878 12.1544C69.956 12.9141 70.8242 13.5652 71.6923 14.4334C72.452 15.193 73.2116 16.0612 73.8628 16.9294C74.6224 18.0146 75.3821 19.0998 76.0332 20.2936C76.6843 21.4873 77.3355 22.681 77.8781 23.9833C78.4207 25.177 78.8548 26.4793 79.1803 27.7816C79.5059 29.0838 79.8315 30.4946 80.0485 31.7969C80.3741 34.6184 80.3741 37.5485 80.0485 40.3701V40.2616C79.8315 41.7809 79.6144 43.1917 79.1803 44.6024C78.8548 46.0132 78.3122 47.424 77.7695 48.8348C76.5758 51.6563 75.0565 54.2609 73.1031 56.6483C71.2582 59.0358 69.1963 61.0977 66.8089 62.9426C64.2043 65.0045 61.2742 66.6323 58.2356 67.9346C57.476 68.2602 56.6078 68.5857 55.8482 68.8028C54.98 69.1283 54.1118 69.3454 53.2436 69.5624C51.5073 69.9965 49.7709 70.2136 48.0346 70.4306H48.1431C47.1664 70.5391 46.1897 70.6476 45.1045 70.7562C44.0193 70.8647 43.0426 70.8647 41.9574 70.8647C39.8955 70.8647 37.8335 70.7562 35.6631 70.4306C34.5779 70.3221 33.4927 70.105 32.2989 69.7795C31.2137 69.5624 30.1285 69.2369 28.9348 68.9113C27.8496 68.5857 26.7643 68.2602 25.6791 67.8261C24.5939 67.5005 23.5087 67.0664 22.532 66.6323H22.6405C19.3849 65.2216 16.3462 63.4852 13.5247 61.4233C13.5247 61.4233 13.5247 61.4233 13.4162 61.4233C12.8735 60.8807 12.4395 60.2296 12.0054 59.687C10.269 57.408 8.74972 54.8035 7.66451 52.199C6.47077 49.4859 5.71112 46.5558 5.27703 43.6257C4.84294 40.5871 4.84294 37.44 5.27703 34.4014C5.27703 34.4014 5.27703 34.4014 5.27703 34.2929C5.27703 34.2929 5.27703 34.2929 5.27703 34.4014C5.71112 31.3628 6.47077 28.4327 7.66451 25.6111C8.31564 24.2003 8.96677 22.7896 9.83494 21.4873C10.5946 20.0765 11.5713 18.7743 12.548 17.5805C13.4162 16.4953 14.3929 15.4101 15.3695 14.3249C16.3462 13.3482 17.4315 12.3715 18.6252 11.5033C20.036 10.4181 21.5553 9.44139 23.1831 8.4647C24.7024 7.59652 26.3302 6.72835 28.0666 6.07722C29.3689 5.53461 30.6711 5.10052 32.0819 4.66643C33.4927 4.34087 34.7949 4.0153 36.2057 3.79826C40.1125 3.25565 43.9108 3.25565 47.709 3.79826ZM12.765 17.472L12.6565 17.5805C12.6565 17.472 12.6565 17.472 12.765 17.472Z",
          fill: "none",
          strokeDasharray: "0",
          strokeDashoffset: "0",
          stroke: "white",
          strokeWidth: ".8",
          strokeLinecap: "round",
          children: i.jsx("animate", {
            id: `${e.id}Animate`,
            attributeName: "stroke-dasharray",
            values: "0 382 0 382; 764 0 0 0",
            dur: ".6s",
            repeatCount: "1",
            fill: "freeze",
            calcMode: "linear",
            begin: `${e.id}.click`,
          }),
        }),
      }),
    });
function Pc(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: s, setValue: o } = A3(),
    u = () => {
      const { name1: f } = s();
      n(!0), t(q(f === "2" ? "true" : "false"));
    };
  let a = null;
  const c = (f) => {
      (a = f.target.closest("label")),
        (document.body.style.overflow = "hidden");
    },
    p = (f) => {
      var g;
      if (((document.body.style.overflow = "auto"), !a)) return;
      const C = f.target;
      C.closest("label") === a &&
        (o("name1", (g = C.getAttribute("id")) == null ? void 0 : g.slice(3)),
        u());
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: V1.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Обведи календарь с верным годом",
        }),
        i.jsxs("form", {
          className: V1.form,
          onMouseDown: (f) => c(f),
          onMouseUp: (f) => p(f),
          onChange: u,
          onTouchStart: c,
          onTouchEnd: p,
          children: [
            i.jsxs("label", {
              className: V1.label + " " + V1.value1,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: V1.input,
                  value: 1,
                  ...l("name1"),
                }),
                i.jsx(Wt, { id: "svg1" }),
              ],
            }),
            i.jsxs("label", {
              className: V1.label + " " + V1.value2,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: V1.input,
                  value: 2,
                  ...l("name1"),
                }),
                i.jsx(Wt, { id: "svg2" }),
              ],
            }),
            i.jsxs("label", {
              className: V1.label + " " + V1.value3,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: V1.input,
                  value: 3,
                  ...l("name1"),
                }),
                i.jsx(Wt, { id: "svg3" }),
              ],
            }),
            i.jsxs("label", {
              className: V1.label + " " + V1.value4,
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: V1.input,
                  value: 4,
                  ...l("name1"),
                }),
                i.jsx(Wt, { id: "svg4" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Oc = "_taskInfo_1q1st_1",
  Rc = "_task_1q1st_1",
  zc = "_text_1q1st_21",
  Ic = "_number_1q1st_43",
  j2 = { taskInfo: Oc, task: Rc, text: zc, number: Ic },
  c8 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBrdKNDUAwEIbhixjACDdKR7ABG7CJEdjECEaoDYzwuUYlEvTneJNLCJ5cpEQJARjpjwRqcdTQlwSoZKzHNncfer+IeJ0M+2sH9aTcinHPbceUm3w04bk5FzIIZ3IwG8GWVKhFWn0M4oStzsJHRR4OyGsIbaWJn7BJic3an/6WuWIW37LOKb26+lEnTr0DRgkvV9c09WIAAAAASUVORK5CYII=",
  f8 = (e) => {
    const { value: t, click: n, className: r } = e,
      l = () => {
        const o = t + 1;
        o > 9 || n(o);
      },
      s = () => {
        const o = t - 1;
        o < 0 || n(o);
      };
    return i.jsxs("div", {
      className: r,
      children: [
        i.jsx("img", { src: c8, alt: "arrowUp", onClick: l }),
        t,
        i.jsx("img", { src: c8, alt: "arrowDown", onClick: s }),
      ],
    });
  },
  Dc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7CAYAAADMzlLJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO4SURBVHgB7ZvvVdswFMWvc/ieZIKaCWgnwExAOgHpBGUDwgTABMAEtBMEJqAbxExAOoH6rv0Um5wkyLIhlk5/57woTmzFV3pS9Oc5QaAYY0aSpGKjDV+Ptnxu+ZUkyTJBT6mJo30RO9T0KyphS/2+KYciPt+beBVHoxgrbqjHqZ5GcX/EXsQWmuY01pzkwXOf0ZxC/AE+ELm5FFVNMR3WjmlWnE3/it1AxTn8hMs5W2klXsXVre6WPM5RiXvR9xS3ZMljzziLVzediB2LZajEWaO4J7F7lDWXI3QoWuxC7FVsLvZTa3zv8D6MH6lL5hS6EJtpzfcKrRgfMl5/sCXTVJJbPTzpqwtrjw9fBusfqPC52JNk3lvhnaNtaEE3RyAYP7JNGc1DEk6MHxmvHdQyuWAqbj5DIJhyhOfNgWaSSjIVO0FYtBJva34m9hhg53YGPzjMXv3VcdQWVK2ry2fwY8yXgWTCIWtQw1FTDrge0BK6fSb2G2FxBb95/Bso/gjlbKv3mHI4yxqfogMonm0nR88R0VOUCxcTdAQ7vFFX7d1UqzMp2sN87PrABLvX5LxovZKjoyXe3Cm6Ef1peIs31cwvQ3gUXjSAByKcgwu2vwxh4ide5wB3+IA2+NlQfG4cl6W0fc8QCU1r/hYR4Sxe/2dTRESTmr9AZDiJ1xlUishwrfkMcbH6q8vxfq0G/7e2RrGY4TXIiYX/4h3IESGu4oNY7GgKxXPvfLjrJJnv2z32qKB4RkOMHc69QWQ06fCuEVntO4vXGJlLxEHKF4pne3ba9pECYO3fIxKs+KMG15wjkt5/VfPGMeykiFxMkm+IoAMcaFtmAUybXCjX0QN+IOABkO3w2JGdoiFSAHdijJz8Dg1BQ0Cswk8ZlSHJpYh5RAtqGxfA+wHA20hr79kZH6PlXvwa3I6vdqW5OGnKeJxeTl+5oCJ2Z7rhedMPXOtGYG+R+zs37Vlsy3xuND6nr8j9TU07tornNvCz2BV6jGnnAYtdGbMA2L4WpidxtpswpZd2K76W+bkWwG0fC0HuaWL8WMAFU0Zl0gsYdf0gdmZaxr91hXroq2lOId75MRNTxdtzMGQfKMhRTnPtwwRLVPH35MMDnUw5PsnQDN7XofczNubt0002imKsaaqnpWq2UDYVlP3Mq6DolWgej8f5ydg7OKE2J3iXHQV1jFpBab+yKgy4FZTPAksxkOvdo2XmbVzPukfVv0v1kiU8htAJQcCseRRTLsSO9XiIqoDqhVYQunZvtHnhH6+KNoHFnA+mAAAAAElFTkSuQmCC",
  Fc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7CAYAAADMzlLJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgB7VvhedowED369X+8QZQJygaFCUonqDNBuwF0AtoJCBO0TGA6AXQCiwkgE6h36FRUF7AsGVdW877vRSALR+8sy6c7eQAIpVSGxQQuQ145th0MBgfoIQb0B8ULLEpoji1S8GfJ3PG5dqYuVuOEih+jsDWPHMG8Rz4g3yBNPYEMRUYwxvlJ3/H3W/hHCBX/gJ2XdY3YOEPQxqgah+rJKMY4ZJQ9dGCcTsTXoWIcKslAwvoumcY45rsM+f9RiK8D98/mfeX7lrlGrhrNMXjyofKDgAjA/c+R35B75MK5b9hwpPyQQWQg0cgv3L+pyw+8xEPEYCMUyM2lUfAKEgXNRcgxflwhi3MGeA2JAw0w40FKBhjbE3Ty4gmWARbIsakPGvYqktneBWQAKrHPn0xd6D0/gX7hEfnRPKVCxb+DHoHv9yXy99WnoZArf4ygR6CrrrQjlLXxqJurCJ2dS2DXl1zhYRviaeExh36Bnv2Ttpwc41cL6Afoyr9t08Ojmb9AA3yA+CGRmVnS5qAdgDZPvgZtYYrctBHGonO0FhKjmfpWHp5A5nADYJ/N2v1zaCzBDPvezNagJ9gcWaom6/Yz6KN4GzlyY7usTZDCkpYu3NzHACmt5+eu3ibfKjK1YMaiibeZmngB9qKlBimGsZydrBTFU+By6NIw1QBmnXiaFw5GvIC0IGqO/yH+v8SL+ASxcWmUqvidS6MUxUvXDQ0pil86tBFg+fZ3kAYoyvPk2rjv6/kqvjpGd1rJ2MSE7yYf5wCB3KUifg06D+cK2gm2TkE8DfWxa1SX1/sj5LbP+XmJfKRNkNAMlF847tjqm3gJeogvPUQb0CalY8DjVuLJyfjBpYGE5jjAKeFxCE1YcHKGkpUru7JQ7aBQkaasld6dVf4V6ODKUHjFzruC0onU2bkDpQpDDhED+zdFbi4dLJU/ZhAxsH8Uz6esTnapQan84LNZuRMofY+T6Cd1LZYfID66XLzSe26mSu+7qZ+HPMXvIRLwVabdIQWLnimHzE3Ic94pYBACpXNq5lUVu7yD0177YyQW2PlBvnf1B4x4nyWthIbgq2Eo4LqgDE5vV5jSvJ/zDFrosd7X+QkRTx24Juie2wnoUFATmD05PnvnD5XPVUGSj0noUFATnLvnpVXavjUJoknuGU5Co31nzhk8W6YSynLGL75cYmu6HyVuAAAAAElFTkSuQmCC";
function Uc(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    [l, s] = R.useState(0),
    [o, u] = R.useState(!1),
    a = () => {
      o || (n(!0), u(!0)),
        c === -1 && (c = l),
        p === -1 && (p = C),
        t(q(c === 3 && p === 7 ? "true" : "false"));
    };
  let c = -1,
    p = -1;
  const f = (w) => {
      (c = w), s(w), a();
    },
    [C, v] = R.useState(0),
    g = (w) => {
      (p = w), v(w), a();
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: j2.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Собери верную цифру на кодовом замке",
        }),
        i.jsxs("div", {
          className: j2.task,
          children: [
            i.jsx("img", { src: Dc, alt: "code" }),
            i.jsx("div", { className: j2.number, children: "2" }),
            i.jsx(f8, { click: f, value: l, className: j2.number }),
            i.jsx(f8, { click: g, value: C, className: j2.number }),
            i.jsx("img", { src: Fc, alt: "code", className: j2.code }),
            i.jsxs("p", {
              className: j2.text,
              children: ["МЛРД М", i.jsx("span", { children: "3" })],
            }),
          ],
        }),
      ],
    }),
  });
}
function Vc(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: s } = A3(),
    o = () => {
      const { name1: u, name2: a, name3: c, name4: p } = s();
      if (!u && !a && !c && !p) {
        n(!1);
        return;
      }
      n(!0), t(q(u && a && c && p ? "true" : "false"));
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: m1.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Нажми на огоньки около верных вариантов ответа",
        }),
        i.jsxs("form", {
          className: m1.form,
          onChange: o,
          children: [
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 1,
                  ...l("name1"),
                }),
                "Доступ в электронную библиотеку",
              ],
            }),
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 2,
                  ...l("name2"),
                }),
                "Скидки на авиабилеты и гостиницы",
              ],
            }),
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 3,
                  ...l("name3"),
                }),
                "Корпоративный спорт",
              ],
            }),
            i.jsxs("label", {
              className: m1.label,
              children: [
                i.jsx("input", {
                  type: "checkbox",
                  className: m1.input,
                  value: 4,
                  ...l("name4"),
                }),
                "Обучение за счет компании",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Bc = "_taskInfo_n0eaj_1",
  $c = "_task_n0eaj_1",
  Wc = "_taskAnswer_n0eaj_31",
  Qc = "_danger_n0eaj_71",
  Hc = "_cart_n0eaj_77",
  Qt = { taskInfo: Bc, task: $c, taskAnswer: Wc, danger: Qc, cart: Hc },
  Yc = (e) => {
    const {
      index: t,
      color: n,
      onTouchStart: r,
      onTouchMove: l,
      onTouchEnd: s,
      onMouseDown: o,
      onMouseMove: u,
      onMouseUp: a,
      value: c,
      style: p,
    } = e;
    if (t === 0)
      return i.jsx("div", {
        "data-value": c,
        style: p,
        onMouseUp: a,
        onMouseDown: o,
        onMouseMove: u,
        children: i.jsxs("svg", {
          onTouchStart: r,
          onTouchMove: l,
          onTouchEnd: s,
          width: "65",
          height: "58",
          viewBox: "0 0 65 58",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            i.jsx("path", {
              d: "M63.3012 38.2725L42.7196 37.8553L42.4415 39.9413L63.1622 41.8882L63.3012 38.2725Z",
              fill: n,
            }),
            i.jsx("path", {
              d: "M48.2968 39.3666L48.2968 39.3667C41.7913 48.2005 32.0507 52.3654 23.2086 54.386C16.4573 55.9288 10.3122 56.2099 6.53162 56.3829C5.66766 56.4225 4.92718 56.4563 4.33116 56.4983C4.65052 53.0107 5.49284 46.5886 7.8873 39.617C10.4247 32.2291 14.693 24.2593 21.894 18.4985L21.9006 18.4932L21.9071 18.4877C24.8107 15.9989 29.281 12.6283 35.4882 12.6283C39.6978 12.6283 44.4525 15.2173 48.388 18.078C52.0061 20.7078 54.8429 23.5005 55.7854 24.4955C54.3978 28.9808 52.074 34.2404 48.2968 39.3666Z",
              fill: n,
              stroke: "white",
            }),
            i.jsx("path", {
              d: "M40.4945 42.0274C40.4945 42.0274 45.0837 38.4117 48.6994 41.7493L40.4945 42.0274Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M1.56431 41.5782L1.71469 40.4504L21.2207 40.8485V43.4251L1.56431 41.5782Z",
              fill: n,
              stroke: "white",
            }),
            i.jsx("path", {
              d: "M41.386 41.7759L41.386 41.7759L41.3865 41.783C41.5459 44.1424 40.3947 46.0146 38.4888 47.367C36.5704 48.7281 33.911 49.5378 31.1795 49.716C28.4481 49.8941 25.7041 49.4367 23.6201 48.3285C21.5508 47.228 20.1553 45.5048 19.9949 43.1087C19.8701 40.9754 21.0276 39.2037 22.9636 37.8792C24.9055 36.5507 27.5807 35.7148 30.3152 35.4855C33.0509 35.2561 35.7852 35.6389 37.8483 36.6828C39.8931 37.7175 41.2585 39.3841 41.386 41.7759Z",
              fill: n,
              stroke: "white",
            }),
            i.jsx("path", {
              d: "M23.8069 42.8617C24.2241 49.2587 39.9384 48.1462 39.5212 41.8883C39.104 35.6304 23.3897 37.1601 23.8069 42.8617Z",
              fill: n,
            }),
            i.jsxs("g", {
              opacity: "0.2",
              children: [
                i.jsx("path", {
                  d: "M35.3491 38.1335L27.7005 46.7555C26.3098 46.3383 25.1973 45.782 24.502 44.8086L30.6208 37.8553C32.2896 37.7163 33.9584 37.8553 35.3491 38.1335Z",
                  fill: "white",
                }),
                i.jsx("path", {
                  d: "M39.3819 41.3321L34.6537 46.6165C33.9584 46.7556 33.2631 46.8947 32.4287 47.0337L38.6866 39.9414C39.1038 40.4977 39.2429 40.9149 39.3819 41.3321Z",
                  fill: "white",
                }),
                i.jsx("path", {
                  d: "M29.6476 38.1335L24.224 44.2524C24.085 44.1133 24.085 43.9743 23.9459 43.6962L28.6741 38.2726C29.0913 38.2726 29.3694 38.1335 29.6476 38.1335Z",
                  fill: "white",
                }),
              ],
            }),
            i.jsx("path", {
              d: "M64.4962 41.1755L64.4962 41.1755L64.496 41.1696C64.3834 38.7686 63.1826 37.0114 61.4708 35.8959C59.7745 34.7906 57.5879 34.3188 55.4555 34.4182C53.3231 34.5176 51.1913 35.1906 49.6067 36.4393C48.0089 37.6984 46.9757 39.5409 47.0872 41.9081C47.1637 44.2793 48.3433 45.9726 50.0459 47.0167C51.7294 48.0491 53.9083 48.4416 56.0341 48.2974C58.1612 48.1532 60.2924 47.4682 61.8878 46.2786C63.4932 45.0815 64.5727 43.355 64.4962 41.1755Z",
              fill: n,
              stroke: "white",
            }),
            i.jsx("path", {
              d: "M60.9371 41.332C60.659 35.9085 49.2557 36.4648 49.3947 41.7492C49.6729 47.1728 61.0762 46.1993 60.9371 41.332Z",
              fill: n,
            }),
            i.jsxs("g", {
              opacity: "0.2",
              children: [
                i.jsx("path", {
                  d: "M52.3148 45.0868L58.0165 37.9945C58.99 38.2726 59.8243 38.8289 60.3806 39.6633L55.7915 45.365C54.6789 45.504 53.4274 45.365 52.3148 45.0868Z",
                  fill: "white",
                }),
                i.jsx("path", {
                  d: "M49.3945 42.1664L52.8711 37.7164C53.4274 37.5773 53.9837 37.4382 54.5399 37.4382L49.8117 43.279C49.6726 43.0008 49.5336 42.5836 49.3945 42.1664Z",
                  fill: "white",
                }),
                i.jsx("path", {
                  d: "M56.626 45.2258L60.6589 40.2195C60.7979 40.3585 60.7979 40.4976 60.7979 40.6367L57.1823 45.0868C57.0432 45.0868 56.7651 45.2258 56.626 45.2258Z",
                  fill: "white",
                }),
              ],
            }),
            i.jsx("path", {
              d: "M56.2684 24.6766L57.171 25.1153L56.9776 24.1306C56.2093 20.2191 55.264 16.679 54.1734 13.7941C53.0881 10.9235 51.8389 8.6463 50.4338 7.31521L50.4339 7.31519L50.4293 7.31094C43.8899 1.26913 34.2252 -0.623434 25.2755 1.12071C16.3222 2.86554 7.99355 8.2678 4.15846 16.9322L4.15741 16.9346C2.44687 20.8546 1.57801 27.4053 1.45613 34.6658C1.33393 41.9455 1.96202 50.0108 3.29007 57.0006L4.2735 56.9951C6.68752 43.4767 13.5777 32.4125 22.9011 26.2254C32.2083 20.0491 43.9794 18.7038 56.2684 24.6766Z",
              fill: n,
              stroke: "white",
            }),
            i.jsx("mask", {
              id: "mask0_251_18439",
              style: { maskType: "alpha" },
              maskUnits: "userSpaceOnUse",
              x: "1",
              y: "1",
              width: "56",
              height: "56",
              children: i.jsx("path", {
                d: "M53.238 14.1477C54.2129 16.7265 55.0765 19.8634 55.7997 23.3495C43.5208 17.7198 31.7235 19.1707 22.3481 25.3922C13.3741 31.3474 6.65347 41.6479 3.81723 54.2049C2.81565 47.9336 2.34979 41.0089 2.45599 34.6826C2.57746 27.4464 3.44674 21.0645 5.07343 17.3358C8.74811 9.03498 16.7592 3.79919 25.4668 2.10224C34.1773 0.404727 43.4938 2.26626 49.7484 8.0433C50.9847 9.21581 52.1683 11.3184 53.238 14.1477Z",
                fill: "#C00000",
                stroke: "white",
              }),
            }),
            i.jsxs("g", {
              mask: "url(#mask0_251_18439)",
              children: [
                i.jsx("path", {
                  d: "M42.93 14.2412C42.93 14.2412 38.3372 13.2582 36.4428 14.9679C34.5483 16.6775 32.9528 19.9909 30.3022 20.8308C30.3022 20.8308 35.23 20.5662 37.9439 19.8056C40.6585 19.0569 41.0702 17.0367 41.8153 15.7198C42.5387 14.4396 42.93 14.2412 42.93 14.2412Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M42.2343 14.4915C40.1726 14.1883 38.3015 15.6721 36.7819 16.8769C35.2171 18.1196 33.6754 19.5738 31.8147 20.3713C31.7918 20.3843 31.7657 20.3384 31.7886 20.3254C33.7775 19.2728 35.4233 17.7774 37.1947 16.4173C38.6139 15.3243 40.3482 14.1553 42.2219 14.4803C42.2566 14.4666 42.2579 14.4902 42.2343 14.4915Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M40.7837 17.2059C39.8851 17.6443 38.9521 17.8836 37.9538 18.0081C36.7328 18.1683 35.5409 18.2086 34.386 18.7199C34.3631 18.733 34.337 18.6871 34.3599 18.674C35.2697 18.2232 36.2345 18.1359 37.2341 18.035C38.4334 17.9115 39.6891 17.7376 40.7837 17.2059Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M40.4617 17.8143C39.4191 18.2132 38.3602 18.5301 37.2584 18.7075C36.1094 18.8874 34.9328 18.7733 33.8312 19.1753C33.8194 19.1759 33.807 19.1648 33.8181 19.1523C34.6547 18.6582 35.7867 18.822 36.7266 18.7124C38.0072 18.5609 39.254 18.222 40.4617 17.8143C40.4735 17.8137 40.4729 17.8019 40.4617 17.8143Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M39.5411 18.5022C38.559 18.7086 37.582 19.0094 36.5831 19.1221C36.0893 19.1723 35.5948 19.2106 35.1095 19.2012C34.5529 19.1838 34.0533 19.1279 33.5368 19.4157C33.5138 19.4288 33.4883 19.3947 33.5113 19.3816C34.1722 18.9205 35.1783 19.1621 35.9446 19.1209C37.1707 19.0551 38.3475 18.7318 39.5404 18.4904C39.5398 18.4786 39.5522 18.4898 39.5411 18.5022Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M41.2134 15.7403C40.5343 16.0842 39.811 16.2649 39.074 16.4109C38.2315 16.5743 37.2084 16.6766 36.4401 17.1198C36.406 17.1453 36.3674 17.0882 36.4015 17.0627C37.0316 16.6861 37.8524 16.5592 38.5658 16.4145C39.4548 16.2367 40.3581 16.1055 41.1892 15.7298C41.2122 15.7167 41.2128 15.7285 41.2134 15.7403Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M40.5787 16.2473C39.0877 16.883 37.4141 16.7601 35.9628 17.4764C35.951 17.4771 35.9386 17.4659 35.9504 17.4653C37.3749 16.6912 39.0727 16.8247 40.5663 16.2361C40.5775 16.2237 40.5899 16.2349 40.5787 16.2473Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M40.1198 14.3094C38.5472 14.7486 37.0251 15.9062 36.1542 17.3008C36.1318 17.3256 36.0952 17.3039 36.1057 17.2797C36.986 15.8374 38.4851 14.6928 40.1198 14.3094Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.3697 14.5216C37.1705 15.3072 36.4077 16.294 35.8636 17.6119C35.8643 17.6237 35.8401 17.6132 35.8512 17.6008C36.3691 16.237 37.122 15.2862 38.3573 14.5104C38.3809 14.5092 38.3815 14.521 38.3697 14.5216Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M37.3021 14.8981C35.796 15.913 35.1722 17.5071 34.1741 18.9558C34.1636 18.98 34.1269 18.9583 34.1375 18.9341C35.0735 17.4296 35.7469 15.8801 37.3021 14.8981Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.5417 23.4017C29.5417 23.4017 32.8779 20.7988 35.9213 21.7704C38.9529 22.7426 39.3151 24.8632 39.3151 24.8632C39.3151 24.8632 38.6841 24.3414 37.6955 24.8674C36.7076 25.4051 34.528 26.2079 33.1856 24.7667C31.8431 23.3254 30.7667 22.8748 29.5417 23.4017Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M38.4111 23.8832C36.1779 22.1469 33.3111 22.7028 30.7525 23.053C30.7053 23.0555 30.6891 22.9736 30.7356 22.9593C33.2504 22.2331 36.2444 22.2852 38.4111 23.8832Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M37.301 22.8077C36.5753 22.5038 35.789 22.3924 35.0078 22.3752C34.2148 22.3587 33.538 22.5251 32.7787 22.6959C32.7433 22.6978 32.729 22.6513 32.7643 22.6494C33.6167 22.4499 34.3047 22.2711 35.1945 22.3297C35.9181 22.3736 36.6343 22.5007 37.3122 22.7953C37.3122 22.7953 37.3128 22.8071 37.301 22.8077Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M36.651 22.3696C35.1891 21.7861 33.6644 22.2344 32.2607 22.7354C32.2259 22.7491 32.2116 22.7026 32.2464 22.6889C33.6494 22.1761 35.199 21.7501 36.651 22.3696C36.6628 22.369 36.6622 22.3572 36.651 22.3696Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M33.7816 21.7789C33.1054 21.9571 32.599 22.4335 31.99 22.7618C31.9441 22.7879 31.9049 22.7191 31.9515 22.7048C32.5468 22.3417 33.0793 21.9112 33.7692 21.7677C33.781 21.7671 33.7816 21.7789 33.7816 21.7789Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M35.8204 24.9563C35.1711 24.7547 34.5646 24.468 34.0119 24.0839C33.3866 23.6682 32.8255 22.9062 32.1042 22.6848C32.0682 22.6749 32.0762 22.6035 32.1128 22.6252C32.677 22.7841 33.0449 23.2491 33.479 23.6277C34.1721 24.2053 34.9532 24.6599 35.8204 24.9563Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M35.2825 25.0678C34.7467 24.7774 34.1675 24.5602 33.6862 24.1841C33.0695 23.7088 32.5644 23.1093 31.8171 22.842C31.7811 22.8321 31.8015 22.7719 31.8381 22.7936C32.4408 23.0095 32.8893 23.4347 33.3496 23.8593C33.9334 24.3836 34.5896 24.7149 35.2825 25.0678C35.2943 25.0672 35.2936 25.0554 35.2825 25.0678Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M33.9545 24.9973C33.5075 24.8203 33.2075 24.5172 32.9043 24.1551C32.5005 23.6802 32.0116 23.1626 31.441 22.8859C31.3926 22.8648 31.436 22.7915 31.4844 22.8126C31.9097 23.0262 32.3078 23.395 32.6221 23.7446C33.0247 24.1959 33.3399 24.782 33.9545 24.9973C33.9663 24.9966 33.9656 24.9848 33.9545 24.9973Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M37.6691 24.5969C37.0032 24.5262 36.31 24.3861 35.7672 23.966C35.176 23.5248 34.605 22.7988 33.8961 22.5886C33.8601 22.5787 33.8681 22.5073 33.9048 22.529C34.4342 22.7016 34.8473 23.1286 35.2684 23.4844C35.5895 23.7391 35.8647 24.0199 36.2415 24.2124C36.6792 24.4372 37.1807 24.5285 37.6691 24.5969C37.6809 24.5962 37.692 24.5838 37.6691 24.5969Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.0538 24.4935C37.4207 24.3738 36.7746 24.2311 36.2022 23.919C35.5689 23.5747 35.111 22.9726 34.4554 22.6531C34.4069 22.6321 34.4509 22.5706 34.4876 22.5923C35.0941 22.879 35.5129 23.4121 36.0754 23.7603C36.6746 24.1301 37.3704 24.3174 38.0531 24.4817C38.0767 24.4804 38.0656 24.4928 38.0538 24.4935Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.3146 24.2903C37.4419 23.4504 36.303 23.1569 35.2352 22.6467C35.2227 22.6356 35.2339 22.6232 35.2457 22.6225C36.3141 23.1445 37.4655 23.4492 38.3146 24.2903C38.327 24.3015 38.3264 24.2897 38.3146 24.2903Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.28483 15.363C6.88654 15.4317 6.38657 15.5886 5.97483 15.8471C5.78075 15.9758 5.63509 16.1255 5.50375 16.3217C5.43808 16.4198 5.50019 16.4756 5.40967 16.5514C5.36442 16.5893 5.1981 16.5746 5.12864 16.6019C4.455 16.8273 3.95638 17.6698 4.07562 18.3492C3.70407 18.4755 3.53507 18.8511 3.49512 19.208C3.47178 19.4338 3.50358 19.5858 3.43182 19.7907C3.37058 19.9713 3.3205 20.1395 3.32936 20.3046C3.77789 19.6302 4.46111 20.2438 5.03268 20.3195C5.7594 20.4224 6.18839 20.0447 6.81804 19.8808C6.83204 20.8022 7.3802 22.2034 8.51803 22.0359C8.56923 22.3287 8.5625 22.4236 8.84061 22.5388C7.95731 22.8227 8.8911 23.9193 9.13471 24.2728C9.03612 23.7579 9.66981 23.8894 9.95717 23.9567C10.3643 24.0531 10.8527 24.1214 11.2714 23.9925C12.0853 23.736 13.0969 22.7595 13.2033 21.8789C13.6499 22.2687 14.2851 22.6484 14.8907 22.6986C15.5318 22.747 15.8435 22.3874 16.1247 21.8994C16.917 22.3416 17.8242 21.8436 18.0269 20.9933C18.2493 20.071 17.9772 19.187 17.5377 18.4894C18.312 18.3769 19.0477 18.2073 19.6453 17.6669C20.1977 17.1643 20.4664 16.6651 20.7238 15.9537C21.0313 15.0741 21.1143 13.7573 19.9785 13.5227C19.2368 13.3616 18.6731 13.652 18.0119 13.8884C18.0644 13.1053 17.8475 12.1475 18.5368 11.5548C18.337 11.5773 18.1638 11.4329 17.9844 11.3953C17.7933 11.3582 17.5922 11.3572 17.3813 11.3922C17.2404 11.4116 16.8845 11.608 16.764 11.5672C16.6436 11.5264 16.4956 11.1915 16.3962 11.1022C15.7359 10.4756 14.6491 10.7113 13.9359 11.0806C13.6146 10.6013 13.3579 10.2249 12.9238 9.84627C12.638 9.58968 11.8873 9.03884 11.5545 9.44687C11.4269 9.05174 10.8646 8.92823 10.5067 9.08933C9.99873 9.31759 10.1097 9.84366 9.89168 10.1864C9.70828 9.8534 9.48223 10.2675 9.44457 10.4469C9.06281 9.72253 8.57306 10.7301 8.38657 11.0003C8.07475 10.6978 7.68042 10.3997 7.22278 10.6844C7.21242 10.2712 6.67202 10.3357 6.40214 10.3738C6.48514 10.8186 5.96081 11.4024 5.79307 11.8016C5.57272 12.3218 5.58016 12.9008 5.71602 13.4491C5.94602 14.4299 6.61404 14.7606 7.28483 15.363C7.26125 15.3643 7.2861 15.3866 7.28483 15.363Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.28483 15.363C6.88654 15.4317 6.38657 15.5886 5.97483 15.8471C5.78075 15.9758 5.63509 16.1255 5.50375 16.3217C5.43808 16.4198 5.50019 16.4756 5.40967 16.5514C5.36442 16.5893 5.1981 16.5746 5.12864 16.6019C4.455 16.8273 3.95638 17.6698 4.07562 18.3492C3.70407 18.4755 3.53507 18.8511 3.49512 19.208C3.47178 19.4338 3.50358 19.5858 3.43182 19.7907C3.37058 19.9713 3.3205 20.1395 3.32936 20.3046C3.77789 19.6302 4.46111 20.2438 5.03268 20.3195C5.7594 20.4224 6.18839 20.0447 6.81804 19.8808C6.83204 20.8022 7.3802 22.2034 8.51803 22.0359C8.56923 22.3287 8.5625 22.4236 8.84061 22.5388C7.95731 22.8227 8.8911 23.9193 9.13471 24.2728C9.03612 23.7579 9.66981 23.8894 9.95717 23.9567C10.3643 24.0531 10.8527 24.1214 11.2714 23.9925C12.0853 23.736 13.0969 22.7595 13.2033 21.8789C13.6499 22.2687 14.2851 22.6484 14.8907 22.6986C15.5318 22.747 15.8435 22.3874 16.1247 21.8994C16.917 22.3416 17.8242 21.8436 18.0269 20.9933C18.2493 20.071 17.9772 19.187 17.5377 18.4894C18.312 18.3769 19.0477 18.2073 19.6453 17.6669C20.1977 17.1643 20.4664 16.6651 20.7238 15.9537C21.0313 15.0741 21.1143 13.7573 19.9785 13.5227C19.2368 13.3616 18.6731 13.652 18.0119 13.8884C18.0644 13.1053 17.8475 12.1475 18.5368 11.5548C18.337 11.5773 18.1638 11.4329 17.9844 11.3953C17.7933 11.3582 17.5922 11.3572 17.3813 11.3922C17.2404 11.4116 16.8845 11.608 16.764 11.5672C16.6436 11.5264 16.4956 11.1915 16.3962 11.1022C15.7359 10.4756 14.6491 10.7113 13.9359 11.0806C13.6146 10.6013 13.3579 10.2249 12.9238 9.84627C12.638 9.58968 11.8873 9.03884 11.5545 9.44687C11.4269 9.05174 10.8646 8.92823 10.5067 9.08933C9.99873 9.31759 10.1097 9.84366 9.89168 10.1864C9.70828 9.8534 9.48223 10.2675 9.44457 10.4469C9.06281 9.72253 8.57306 10.7301 8.38657 11.0003C8.07475 10.6978 7.68042 10.3997 7.22278 10.6844C7.21242 10.2712 6.67202 10.3357 6.40214 10.3738C6.48514 10.8186 5.96081 11.4024 5.79307 11.8016C5.57272 12.3218 5.58016 12.9008 5.71602 13.4491C5.94602 14.4299 6.61404 14.7606 7.28483 15.363ZM7.28483 15.363C7.2861 15.3866 7.26125 15.3643 7.28483 15.363Z",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M6.81793 19.8808C6.85424 19.0158 7.88874 17.3641 10.1544 17.5026Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M6.81793 19.8808C6.85424 19.0158 7.88874 17.3641 10.1544 17.5026",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M13.2151 21.8782C13.3894 20.722 13.5053 19.3562 12.353 18.153Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.2151 21.8782C13.3894 20.722 13.5053 19.3562 12.353 18.153",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M12.7147 18.0627C12.7147 18.0627 14.2808 18.6052 15.8414 17.5046C17.4139 16.4034 17.9907 15.0365 18.0112 13.8767",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.7147 18.0627C12.7147 18.0627 14.2808 18.6052 15.8414 17.5046C17.4139 16.4034 17.9907 15.0365 18.0112 13.8767",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M18.5362 11.543C18.5362 11.543 17.6584 11.7083 17.5778 12.4102C17.5778 12.4102 16.7147 12.4093 16.697 13.8408C16.6793 15.2723 16.3437 17.1702 15.4638 17.7377",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M18.5362 11.543C18.5362 11.543 17.6584 11.7083 17.5778 12.4102C17.5778 12.4102 16.7147 12.4093 16.697 13.8408C16.6793 15.2723 16.3437 17.1702 15.4638 17.7377",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M15.8413 17.5046C15.8413 17.5046 16.8988 17.6015 17.537 18.4776Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.8413 17.5046C15.8413 17.5046 16.8988 17.6015 17.537 18.4776",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M12.6118 15.9283C12.6118 15.9283 13.8145 15.4262 14.0779 13.946C14.3406 12.4541 14.1275 11.567 13.8979 11.0354",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.6118 15.9283C12.6118 15.9283 13.8145 15.4262 14.0779 13.946C14.3406 12.4541 14.1275 11.567 13.8979 11.0354",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M8.37468 11.0009C8.17917 11.5434 7.8206 12.7923 8.47335 13.9395C9.1261 15.0868 10.318 16.1459 10.318 16.1459",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M8.37468 11.0009C8.17917 11.5434 7.8206 12.7923 8.47335 13.9395C9.1261 15.0868 10.318 16.1459 10.318 16.1459",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M7.28475 15.363C8.15651 15.3044 9.19441 15.6979 10.0728 16.6439Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.28475 15.363C8.15651 15.3044 9.19441 15.6979 10.0728 16.6439",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M6.39096 10.3862C6.39096 10.3862 7.02678 10.7777 6.85279 11.721C6.67818 12.6526 6.03896 13.7392 6.80288 14.9751",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M6.39096 10.3862C6.39096 10.3862 7.02678 10.7777 6.85279 11.721C6.67818 12.6526 6.03896 13.7392 6.80288 14.9751",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M11.3618 15.5461C11.0776 15.5377 10.6786 15.5946 10.5393 15.8622C10.5065 15.9113 10.5259 16.0521 10.4806 16.09C10.4583 16.1149 10.3633 16.1081 10.3404 16.1212C10.2939 16.1355 10.2486 16.1734 10.2145 16.1989C10.0676 16.325 9.9592 16.5082 10.0053 16.7067C10.0222 16.8004 10.0744 16.8921 10.1142 16.9728C10.154 17.0534 10.2521 17.1191 10.2801 17.2003C10.0153 17.3328 10.2433 17.6161 10.3675 17.7277C10.6154 17.939 10.9655 18.0739 11.2777 18.1635C11.9145 18.354 12.7261 18.2749 13.2331 17.8102C13.6386 17.4338 13.5511 16.9064 13.3149 16.4699C13.1582 16.1945 12.9308 15.923 12.5896 15.9531C12.5925 15.7874 12.2641 15.6159 12.1312 15.5639C11.8792 15.4947 11.6106 15.5564 11.3618 15.5461Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M11.9114 18.2951C12.2444 18.1117 12.4233 17.7001 12.4508 17.3321C12.4569 17.2254 12.4499 17.0957 12.4213 17.0026C12.3522 16.8172 12.3095 16.9022 12.1718 16.9806C12.0801 17.0328 11.9329 16.9343 11.9979 16.8244C12.0853 16.6896 12.257 16.5858 12.4048 16.6961C12.5278 16.7841 12.5392 16.9963 12.5468 17.1378C12.5833 17.5969 12.3623 18.1053 11.9114 18.2951Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.6247 18.2394C11.7541 18.0078 11.8594 17.7657 11.8808 17.5045C11.8955 17.3382 11.825 16.9045 11.5757 17.107C11.4511 17.2083 11.2976 16.9919 11.434 16.89C11.6957 16.6986 11.8957 16.9007 11.945 17.1582C12.0255 17.5558 11.88 17.9301 11.6247 18.2394Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.0883 18.1618C10.7666 17.8953 10.6253 17.4655 10.592 17.0653C10.5806 16.8531 10.5913 16.3914 10.9277 16.4916C11.0599 16.5318 11.0241 16.7465 10.8801 16.7069C10.7119 16.6569 10.749 17.1278 10.7547 17.2339C10.7954 17.5509 10.8975 17.912 11.0883 18.1618C11.1007 18.173 11.1119 18.1606 11.0883 18.1618Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.6297 17.9854C9.79751 17.9 8.84126 17.2657 9.25165 16.3214C9.31479 16.1762 9.54828 16.341 9.42366 16.4422C9.09634 16.7317 9.37556 17.3079 9.63579 17.5304C9.90844 17.764 10.2821 17.8977 10.6284 17.9618C10.652 17.9606 10.6533 17.9841 10.6297 17.9854Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.1114 17.363C9.52364 17.2054 9.2009 15.3784 9.94993 15.4564C10.0691 15.4736 10.0327 15.6766 9.91291 15.6476C9.61375 15.5809 9.62689 16.2659 9.65869 16.4179C9.71115 16.7343 9.81836 17.1896 10.1344 17.35C10.1226 17.3506 10.1114 17.363 10.1114 17.363Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.5784 15.9655C12.6862 15.7706 12.6152 15.5497 12.4537 15.4047C12.3798 15.3496 12.2948 15.3068 12.1998 15.3001C12.1167 15.2927 12.036 15.3325 11.9628 15.2892C11.9261 15.2675 11.8988 15.198 11.9447 15.1719C12.1133 15.0092 12.435 15.2757 12.5487 15.4114C12.6878 15.5813 12.711 15.7929 12.5784 15.9655Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.4864 16.8035C13.6066 16.6197 13.687 16.3553 13.7228 16.1406C13.74 16.0214 13.7535 15.8315 13.677 15.7292C13.6006 15.6269 13.4473 15.6352 13.348 15.5459C13.2859 15.4901 13.3273 15.3815 13.4098 15.3771C13.6804 15.3507 13.8414 15.7086 13.8423 15.945C13.8371 16.2881 13.6736 16.5452 13.4864 16.8035C13.4746 16.8042 13.4871 16.8153 13.4864 16.8035Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.6018 18.1634C12.9001 17.9936 13.0175 17.5381 13.0476 17.2172C13.0703 16.9796 12.9306 16.3604 12.5734 16.5333C12.458 16.5868 12.3647 16.3908 12.4801 16.3373C13.2274 15.9425 13.3567 17.91 12.6018 18.1634Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.0173 17.9756C13.2939 17.8425 13.5145 17.5469 13.642 17.28C13.7696 17.013 13.6955 16.7332 13.8112 16.4669C13.8217 16.4427 13.8689 16.4402 13.8708 16.4755C14.0283 16.9873 13.5924 17.8974 13.0173 17.9756Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.2619 16.3663C13.4621 16.1309 13.5616 15.7827 13.5576 15.4874C13.5523 15.1684 13.3784 15.0122 13.2118 14.7729C13.1478 14.6818 13.2587 14.5457 13.3569 14.6114C13.9666 14.957 13.5829 15.9589 13.2619 16.3663C13.2508 16.3787 13.2632 16.3899 13.2619 16.3663Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M8.53278 21.8697C9.42273 20.8288 9.06375 18.7672 10.6232 18.3052C10.6468 18.3039 10.6599 18.3268 10.6369 18.3399C9.09049 18.8249 9.52021 20.8827 8.53278 21.8697C8.53405 21.8933 8.53341 21.8815 8.53278 21.8697Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M9.0639 22.515C9.8358 21.9179 10.1407 20.9912 10.2682 20.0621C10.3631 19.4068 10.4114 18.7657 10.9172 18.2775C10.9284 18.2651 10.9532 18.2874 10.9421 18.2998C10.2323 18.9527 10.3842 20.0204 10.1468 20.8844C9.95891 21.5684 9.63246 22.0944 9.0639 22.515C9.05211 22.5157 9.06453 22.5268 9.0639 22.515Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.7796 18.3558C10.3576 18.8632 10.0547 19.3879 9.84068 20.026C9.66748 20.5437 9.5545 21.0818 9.3211 21.579C9.31057 21.6032 9.28573 21.5809 9.29689 21.5685C9.55996 20.9632 9.64367 20.3203 9.88316 19.7163C10.0917 19.1967 10.3997 18.7664 10.7796 18.3558C10.779 18.344 10.7908 18.3434 10.7796 18.3558Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.0965 19.1008C12.4585 20.5593 12.2486 22.1548 11.2589 23.3193C11.2366 23.3442 11.1993 23.3107 11.2217 23.2859C11.6169 22.7208 11.9682 22.2172 12.1084 21.5239C12.2664 20.7233 12.2692 19.8955 12.0965 19.1008C12.0723 19.0903 12.0958 19.089 12.0965 19.1008Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.5781 20.3638C12.7622 21.3707 12.4445 22.4991 11.6777 23.1906C11.6553 23.2154 11.6063 23.1826 11.6404 23.1571C12.3719 22.4676 12.7138 21.3497 12.5781 20.3638C12.5775 20.352 12.5775 20.352 12.5781 20.3638Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M9.74071 18.1634C9.00053 18.2505 8.52273 18.82 8.16471 19.4185C8.14303 19.4552 8.09397 19.4223 8.11629 19.3975C8.45998 18.7524 8.97442 18.2046 9.73944 18.1399C9.76302 18.1386 9.76429 18.1622 9.74071 18.1634Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M9.13128 18.7045C8.89005 18.8357 8.71092 19.0227 8.55663 19.2319C8.54611 19.2562 8.50884 19.2227 8.53179 19.2096C8.69786 18.9997 8.88878 18.8121 9.13128 18.7045C9.13065 18.6927 9.13065 18.6927 9.13128 18.7045Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.9392 15.6043C9.98122 14.497 9.15828 12.6023 9.33788 11.1029C9.33661 11.0793 9.38377 11.0768 9.38567 11.1122C9.29366 12.7014 10.0785 14.3263 10.951 15.6036C10.951 15.6036 10.9399 15.616 10.9392 15.6043Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.0311 10.581C10.2226 12.1668 10.3612 14.0865 11.263 15.4686C11.2761 15.4916 11.242 15.5171 11.2289 15.4941C10.3029 14.1014 10.1885 12.1923 10.0311 10.581Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.6683 9.80735C11.8152 10.7808 12.0656 11.7013 12.0605 12.7066C12.0515 13.6411 11.9104 14.5354 11.8183 15.4625C11.8195 15.4861 11.7724 15.4886 11.7829 15.4644C11.8495 14.5032 11.9881 13.5617 11.984 12.6043C11.9793 11.635 11.7779 10.7473 11.6683 9.80735C11.6559 9.7962 11.6677 9.79556 11.6683 9.80735Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.9507 15.5028C11.9786 14.9219 12.0667 14.3615 12.0829 13.7813C12.0866 13.19 12.1027 12.6098 12.1182 12.0178C12.117 11.9942 12.1523 11.9923 12.1654 12.0153C12.2398 13.1817 12.0897 14.3485 11.9507 15.5028Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.5739 15.883C12.9121 15.3565 12.9152 14.7533 12.9655 14.1477C13.0327 13.1982 12.9964 12.3016 12.8514 11.3636C12.8502 11.34 12.8855 11.3381 12.8986 11.361C13.0716 12.3803 13.0992 13.3365 13.024 14.3573C12.9693 14.8805 12.9787 15.4948 12.5739 15.883Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.31686 11.1169C7.33403 12.0973 7.31964 13.1503 7.70037 14.0757C7.93243 14.6544 8.34489 15.0697 8.86028 15.4203C9.27757 15.7053 9.80768 15.8897 10.1258 16.3101C10.1507 16.3324 10.1048 16.3585 10.0799 16.3362C9.64936 15.8036 8.86915 15.5854 8.35985 15.128C8.03751 14.8497 7.80568 14.4957 7.64269 14.1024C7.26069 13.1535 7.2993 12.111 7.31686 11.1169Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.7264 11.7467C15.7265 12.7226 15.4829 14.1308 14.7401 15.2702C14.4892 15.662 13.8561 16.6418 13.3174 16.5171C13.2814 16.5072 13.2906 16.4594 13.3266 16.4693C13.7332 16.5539 14.2171 15.8776 14.4383 15.5938C14.737 15.2113 14.9742 14.7847 15.1754 14.3483C15.5982 13.4152 15.9248 12.4518 16.7264 11.7467Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.4126 11.8463C15.603 12.6228 15.1735 13.6508 14.6949 14.646C14.4293 15.2041 13.965 16.2458 13.2751 16.3893C13.2398 16.3912 13.2254 16.3447 13.2602 16.331C13.7397 16.2343 14.1411 15.5625 14.3566 15.1726C14.5722 14.7826 14.7628 14.3704 14.9535 13.9582C15.3126 13.1586 15.7226 12.4272 16.4126 11.8463Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.4228 17.5992C14.0891 17.457 14.7025 17.2112 15.1835 16.7007C15.5969 16.2528 15.8376 15.6724 16.0437 15.1057C16.0548 15.0932 16.079 15.1038 16.0797 15.1155C15.8545 15.7661 15.5952 16.4421 15.077 16.9192C14.6604 17.3081 14.0087 17.7214 13.4234 17.611C13.4123 17.6234 13.4116 17.6116 13.4228 17.5992Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.486 17.454C14.1826 17.2156 14.7174 16.6075 15.0866 15.9966C15.1089 15.9717 15.1455 15.9934 15.135 16.0176C14.777 16.6162 14.2131 17.344 13.486 17.454C13.4866 17.4658 13.4866 17.4658 13.486 17.454Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.8743 17.4557C16.5196 17.3619 17.0658 16.9661 17.6034 16.6298C18.107 16.319 18.5856 15.9859 19.0513 15.6299C19.0742 15.6168 19.0997 15.6509 19.0767 15.664C18.5107 16.1318 17.8937 16.5315 17.2643 16.92C16.829 17.1798 16.3931 17.4278 15.875 17.4675C15.8638 17.4799 15.8625 17.4563 15.8743 17.4557Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.8755 17.4792C16.2528 17.4589 16.6319 17.474 17.0184 17.406C17.4868 17.3217 17.8912 17.1463 18.3049 16.9231C18.3278 16.9101 18.3651 16.9435 18.331 16.969C17.9521 17.1785 17.5601 17.3651 17.1277 17.4592C16.7058 17.5292 16.2894 17.4806 15.8755 17.4792Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M17.788 15.2248C18.3298 14.7464 18.7926 14.1186 19.5128 13.8789C19.5357 13.8659 19.5618 13.9117 19.5389 13.9248C18.8716 14.268 18.3795 14.791 17.788 15.2248C17.7886 15.2366 17.7886 15.2366 17.788 15.2248Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M17.8326 14.9505C18.2982 14.5945 18.6371 14.0797 19.2183 13.8948C19.2412 13.8818 19.2555 13.9283 19.232 13.9296C18.6886 14.1597 18.3243 14.6404 17.845 14.9617C17.8338 14.9741 17.8208 14.9512 17.8326 14.9505Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M14.5248 18.0838C14.9358 18.2509 15.2609 18.8009 15.4586 19.1804C15.8012 19.836 15.9628 20.6431 16.1075 21.3565C16.1218 21.403 16.0517 21.4186 16.0492 21.3715C15.935 20.7864 15.7638 20.24 15.5684 19.6829C15.4003 19.1954 15.0122 18.3532 14.5149 18.1198C14.4672 18.1105 14.4888 18.0739 14.5248 18.0838Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M14.2902 18.1201C14.6957 18.4057 14.9062 18.5836 15.1326 19.0561C15.4261 19.6788 15.5584 20.3811 15.7012 21.0592C15.7025 21.0827 15.6678 21.0964 15.6665 21.0729C15.4947 20.5146 15.3929 19.9407 15.1981 19.3955C14.9791 18.8397 14.7355 18.4863 14.2902 18.1201C14.2666 18.1213 14.2778 18.1089 14.2902 18.1201Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M14.9446 17.9785C15.5158 18.2671 15.7708 18.8327 15.9905 19.4002C16.0041 19.435 15.9576 19.4493 15.9439 19.4146C15.7399 18.9171 15.4661 18.2224 14.9446 17.9785C14.9335 17.9909 14.9328 17.9792 14.9446 17.9785Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.6785 18.1766C13.7966 18.3949 13.8918 18.6262 13.8698 18.8757C13.8716 18.911 13.8121 18.9024 13.8102 18.867C13.7857 18.6319 13.7377 18.398 13.6438 18.1902C13.6307 18.1673 13.6655 18.1536 13.6785 18.1766Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.2703 17.2363C9.48983 16.7934 8.18213 17.1001 7.38997 17.32C6.38814 17.5984 5.57708 18.1267 4.69528 18.6588C4.64939 18.6849 4.61022 18.6161 4.64432 18.5906C5.64947 17.9337 6.5778 17.3873 7.75772 17.1229C8.48231 16.9658 9.5953 16.776 10.2795 17.1885C10.3162 17.2102 10.2951 17.2586 10.2703 17.2363Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.09241 18.1292C6.4714 17.1684 8.45416 16.2225 10.1384 16.9833C10.1744 16.9932 10.1422 17.0541 10.1174 17.0318C9.26935 16.6517 8.2494 16.8128 7.37345 17.0136C6.53287 17.2124 5.78685 17.6308 5.09241 18.1292Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.97843 19.2166C6.708 18.4917 7.46621 17.8599 8.53521 17.7315C8.55879 17.7303 8.56069 17.7656 8.53711 17.7669C7.52706 17.8921 6.66021 18.4825 5.97843 19.2166C5.96664 19.2173 5.97906 19.2284 5.97843 19.2166Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.89375 16.5374C6.63179 16.1904 7.60877 15.8896 8.39847 16.2847C8.42268 16.2952 8.40037 16.32 8.38795 16.3089C7.62309 15.9361 6.64484 16.2133 5.90617 16.5485C5.89438 16.5492 5.89375 16.5374 5.89375 16.5374Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M23.4155 10.5953C23.4155 10.5953 24.5382 7.28366 26.5635 6.69017C28.5888 6.09668 30.0308 5.4281 30.0308 5.4281C30.0308 5.4281 29.3362 6.36394 28.2861 7.28341C26.4343 8.90801 24.6402 8.08215 23.4155 10.5953Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M29.1306 6.05578C28.433 6.49522 27.7166 6.80561 26.9668 7.15327C26.0669 7.5681 25.323 8.24649 24.5269 8.83309C24.5157 8.84552 24.5026 8.82257 24.5138 8.81015C25.156 8.21998 25.8782 7.57823 26.674 7.20446C27.5044 6.817 28.3536 6.55859 29.1306 6.05578Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.9851 7.18139C27.1932 7.62589 26.2103 7.59591 25.4432 8.06272C25.4321 8.07515 25.419 8.0522 25.4302 8.03978C26.1836 7.53823 27.1665 7.56821 27.9851 7.18139Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.8956 6.70782C26.2215 7.14599 25.5296 7.69153 25.0811 8.36588C25.0699 8.3783 25.0457 8.36778 25.0569 8.35536C25.4892 7.59912 26.1626 7.14916 26.8956 6.70782C26.8949 6.69603 26.8949 6.69603 26.8956 6.70782Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.5253 6.54388C27.0992 6.75592 26.7371 7.05911 26.413 7.40756C26.3907 7.43241 26.3652 7.39831 26.3881 7.38525C26.6868 7.0027 27.0855 6.72119 27.5253 6.54388C27.5246 6.53209 27.5246 6.53209 27.5253 6.54388Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M23.4277 5.75901C23.4277 5.75901 24.5245 3.72568 24.0279 2.40452C23.532 1.09515 22.7018 0.607689 22.2973 -0.541065C22.2973 -0.541065 21.4612 0.402375 22.1597 1.96097C22.8582 3.51957 23.5109 4.00474 23.4962 4.83313C23.481 5.64974 23.4277 5.75901 23.4277 5.75901Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M22.3039 0.0260888C22.4419 0.834466 22.8683 1.50913 23.1917 2.24843C23.4878 2.91827 23.6319 3.61991 23.6469 4.3403C23.6482 4.36388 23.601 4.36642 23.5998 4.34284C23.5654 3.48161 23.3095 2.67956 22.9606 1.90616C22.6794 1.29463 22.3754 0.696163 22.2803 0.0273548C22.2791 0.00377679 22.3027 0.00251079 22.3039 0.0260888Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M23.6728 12.3076C23.6728 12.3076 24.2918 11.5059 25.9813 11.9236C27.6708 12.3412 28.7425 11.8226 29.8554 10.9707C30.9683 10.1188 31.7005 9.00358 32.7273 9.40954C32.7273 9.40954 30.9456 6.83321 28.3304 7.67119C25.7146 8.49738 23.6728 12.3076 23.6728 12.3076Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M31.5639 8.8807C30.134 8.67372 28.696 8.97558 27.378 9.53109C26.7193 9.81474 26.1234 10.166 25.5809 10.6325C25.1061 11.0364 24.6946 11.5196 24.1563 11.844C24.1334 11.8571 24.0961 11.8236 24.119 11.8106C25.1568 10.8799 26.1107 9.93018 27.4294 9.38646C28.725 8.85579 30.1787 8.62404 31.5744 8.85649C31.5751 8.86828 31.5763 8.89186 31.5639 8.8807Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.6467 11.1418C27.6921 10.3182 26.2267 10.5506 25.1649 11.0332C25.1184 11.0476 25.1028 10.9775 25.1376 10.9638C26.1305 10.5203 27.8483 10.1443 28.6467 11.1418Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.5885 10.4055C29.006 9.90477 28.1144 10.0354 27.4109 10.1441C26.6484 10.256 25.8047 10.3959 25.2189 10.9357C25.1848 10.9612 25.1351 10.9166 25.1692 10.8911C25.7661 10.3388 26.6217 10.1983 27.4071 10.0734C28.1342 9.9634 29.0258 9.83277 29.6115 10.3925C29.6239 10.4036 29.601 10.4167 29.5885 10.4055Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.2897 9.81216C29.0674 9.28665 27.3662 9.53169 26.2289 10.1484C26.183 10.1746 26.132 10.1064 26.1779 10.0802C27.3612 9.43738 29.0493 9.16939 30.3003 9.78795C30.3245 9.79847 30.3139 9.82269 30.2897 9.81216Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.9979 9.34848C29.577 8.86909 28.1207 9.49115 26.7528 9.77741C26.7174 9.77931 26.7031 9.73279 26.7385 9.73089C27.4866 9.57248 28.1702 9.31115 28.9326 9.19927C29.6486 9.10171 30.3113 9.11341 30.9979 9.34848C31.0103 9.35964 31.0096 9.34785 30.9979 9.34848Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.4302 8.24409C29.4511 8.28484 28.6802 8.68092 27.9188 9.25384C27.9077 9.26626 27.8946 9.24331 27.9058 9.23089C28.6516 8.58787 29.4368 8.23832 30.4289 8.22051C30.4414 8.23167 30.442 8.24346 30.4302 8.24409Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.2255 8.04864C28.1771 8.34139 26.9846 9.03204 26.4458 10.0068C26.4353 10.031 26.3986 10.0093 26.4092 9.98513C27.0273 8.94699 28.0443 8.28941 29.2242 8.02506C29.2242 8.02506 29.2373 8.04801 29.2255 8.04864Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.2262 8.68796C27.0588 8.87429 26.9281 9.0823 26.8105 9.31325C26.7145 9.50757 26.5832 9.70379 26.5232 9.908C26.5133 9.944 26.4655 9.93474 26.4754 9.89874C26.5699 9.45622 26.9113 8.98862 27.2262 8.68796C27.2255 8.67617 27.2373 8.67553 27.2262 8.68796Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M23.2631 11.5019C23.2631 11.5019 25.0771 7.63299 23.8562 4.93197C22.6464 2.21852 20.3038 2.62806 19.5217 1.27494C19.5217 1.27494 19.1145 2.27812 18.8086 4.06799C18.5028 5.85786 19.5686 7.4322 21.1874 8.51576C22.8069 9.6111 23.3325 10.8125 23.2631 11.5019Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M19.6935 1.83327C19.7658 2.73975 20.2619 3.61166 20.6828 4.40485C21.077 5.14035 21.4705 5.86407 21.8529 6.60021C22.5388 7.92303 23.1408 9.2267 23.4092 10.702C23.4248 10.7721 23.3187 10.7778 23.3031 10.7077C22.9966 8.96252 22.1932 7.43319 21.3644 5.86977C20.719 4.63936 19.7465 3.261 19.6699 1.83453C19.6686 1.81096 19.6922 1.80969 19.6935 1.83327Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.4311 3.54988C19.872 4.49569 20.8927 5.00839 21.4464 5.85356C21.4595 5.8765 21.4254 5.90198 21.4006 5.87967C20.8344 5.02335 19.8962 4.50622 19.4311 3.54988C19.4193 3.55052 19.4304 3.5381 19.4311 3.54988Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.3894 4.09597C19.5281 4.91613 20.3193 5.55938 20.9155 6.09487C21.4124 6.54111 21.9434 6.96187 22.2933 7.53423C22.3064 7.55718 22.2723 7.58265 22.2475 7.56034C21.452 6.39711 19.566 5.62347 19.3659 4.09723C19.377 4.08481 19.3888 4.08418 19.3894 4.09597Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.8219 5.76347C20.2295 6.30908 20.8262 6.63174 21.4117 6.96681C21.8388 7.2158 22.2412 7.44248 22.4787 7.90265C22.4911 7.9138 22.4682 7.92686 22.4557 7.9157C22.1163 7.31913 21.418 7.0847 20.8554 6.73657C20.4401 6.48695 20.0804 6.17521 19.8219 5.76347Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M20.5852 2.36469C21.5619 3.60095 22.1867 5.32902 22.0004 6.92331C21.9905 6.95931 21.9427 6.95005 21.9408 6.91469C22.0851 5.41724 21.5339 3.51969 20.5852 2.36469C20.5734 2.36532 20.5727 2.35353 20.5852 2.36469Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.5501 2.93954C22.4488 4.26275 22.9869 6.13736 22.3959 7.68243C22.3749 7.73085 22.3022 7.69928 22.3227 7.63907C22.8919 6.13063 22.3656 4.25539 21.5265 2.9408C21.5141 2.92965 21.537 2.91659 21.5501 2.93954Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.2197 3.51838C22.5339 4.30547 22.755 5.12121 22.8242 5.96875C22.8946 6.83987 22.6336 7.70514 22.7264 8.55141C22.727 8.5632 22.7034 8.56447 22.7028 8.55268C22.5332 7.81693 22.7986 7.03419 22.7699 6.27906C22.731 5.33531 22.5153 4.40105 22.2072 3.50722C22.2079 3.51901 22.2197 3.51838 22.2197 3.51838Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.8963 4.45157C23.9634 6.04949 23.5702 7.9741 23.1674 9.72188C23.1575 9.75788 23.1091 9.73684 23.1196 9.71263C23.5112 7.97727 23.8815 6.06571 22.8963 4.45157C22.8845 4.4522 22.8838 4.44041 22.8963 4.45157Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M20.7714 7.59233C21.495 8.29832 22.3959 8.78198 23.0966 9.50103C23.109 9.51219 23.0861 9.52524 23.0854 9.51345C22.3624 8.81925 21.4727 8.32316 20.7714 7.59233C20.7484 7.60538 20.7596 7.59296 20.7714 7.59233Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.4474 15.5602C21.4474 15.5602 22.4863 13.329 21.7878 11.7704C21.0893 10.2118 19.7418 10.4379 19.2861 9.65837C19.2861 9.65837 19.0454 10.2388 18.8758 11.2647C18.7063 12.2906 19.311 13.2039 20.243 13.8278C21.1757 14.4635 21.4731 15.1569 21.4474 15.5602Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M19.3858 9.97221C19.4979 10.9593 20.2368 11.9483 20.6975 12.8221C21.0799 13.5582 21.3903 14.2746 21.5407 15.0941C21.5563 15.1642 21.4502 15.1699 21.4346 15.0998C21.2349 14.0228 20.7362 13.1037 20.2351 12.1375C19.8794 11.459 19.4158 10.7509 19.3622 9.97348C19.3616 9.96169 19.3852 9.96042 19.3858 9.97221Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.2261 10.9621C19.4681 11.5048 20.087 11.8026 20.3972 12.2943C20.4102 12.3172 20.3761 12.3427 20.3513 12.3204C20.1717 12.0581 19.9003 11.8481 19.6754 11.6237C19.4996 11.4321 19.3461 11.2157 19.2261 10.9621Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.2079 11.2822C19.3837 12.1359 20.4583 12.5511 20.8866 13.2611C20.8996 13.2841 20.8655 13.3096 20.8407 13.2872C20.3671 12.6151 19.3031 12.1757 19.1843 11.2835C19.1954 11.2711 19.2072 11.2705 19.2079 11.2822Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.4484 12.2388C19.8548 12.7609 20.6765 12.8704 20.9805 13.4689C20.993 13.4801 20.97 13.4931 20.9576 13.482C20.7618 13.1378 20.3533 13.0178 20.0348 12.8103C19.8026 12.6691 19.6032 12.4788 19.4484 12.2388Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.8987 10.2757C20.4703 11.0135 20.8169 11.9643 20.7255 12.9033C20.7274 12.9386 20.6678 12.93 20.6659 12.8946C20.7264 12.0401 20.4324 10.9682 19.8987 10.2757C19.8751 10.2769 19.8869 10.2763 19.8987 10.2757Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M20.4487 10.6127C20.9751 11.3884 21.2796 12.4361 20.9505 13.3523C20.9295 13.4008 20.8457 13.3816 20.8667 13.3332C21.186 12.453 20.905 11.404 20.4258 10.6258C20.4251 10.614 20.4481 10.6009 20.4487 10.6127Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M20.8451 10.946C21.0348 11.3969 21.1656 11.851 21.204 12.3455C21.243 12.8518 21.1275 13.3427 21.1429 13.8503C21.1435 13.8621 21.12 13.8634 21.1193 13.8516C21.0264 13.4428 21.1588 13.0455 21.1484 12.6322C21.141 12.0533 21.0039 11.4813 20.8333 10.9466C20.8215 10.9473 20.8333 10.9466 20.8451 10.946Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.2284 11.4812C21.8462 12.4176 21.6327 13.5049 21.3917 14.5228C21.3819 14.5588 21.3334 14.5378 21.344 14.5135C21.5855 13.5074 21.765 12.4456 21.2284 11.4812Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M20.0017 13.2968C20.4253 13.6997 20.9369 13.9796 21.3494 14.3949C21.3618 14.4061 21.3389 14.4192 21.3382 14.4074C20.9153 14.0163 20.403 13.7246 20.0017 13.2968C19.9782 13.2981 19.9893 13.2857 20.0017 13.2968Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.3371 15.3941C22.3371 15.3941 23.8881 13.4546 25.5115 13.5211C27.123 13.5883 28.0157 14.5808 29.259 14.3958C29.259 14.3958 28.147 15.4841 26.1041 15.31C24.0494 15.1366 23.5531 14.7022 22.3371 15.3941Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M28.7481 14.565C27.8375 14.7794 26.9505 14.5551 26.047 14.4618C25.2023 14.3653 23.798 14.1924 23.1503 14.9011C23.128 14.9259 23.1025 14.8918 23.1254 14.8788C23.594 14.357 24.4664 14.3102 25.1297 14.3337C26.3124 14.3411 27.5383 14.7127 28.7481 14.565C28.7475 14.5532 28.7475 14.5532 28.7481 14.565Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.9772 14.9611C27.2189 14.9309 26.5349 14.743 25.8774 14.3882C25.8532 14.3776 25.8755 14.3528 25.8879 14.364C26.5429 14.6717 27.2505 14.8583 27.9766 14.9494C27.9884 14.9487 27.989 14.9605 27.9772 14.9611Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.2539 14.0424C27.0319 14.0898 26.8072 14.09 26.5851 14.1374C26.3401 14.1978 26.1218 14.316 25.8898 14.3994C25.878 14.4 25.865 14.377 25.8768 14.3764C26.1081 14.2812 26.3258 14.1513 26.5714 14.1027C26.8053 14.0546 27.0306 14.0662 27.2539 14.0424Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.2988 13.869C25.8776 13.9507 25.2993 13.97 25.0242 14.3513C25.0019 14.3761 24.9528 14.3433 24.9869 14.3178C25.2974 13.9346 25.8527 13.9284 26.2988 13.869Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M23.0735 9.51401C23.0784 9.38369 23.1777 9.47294 23.2268 9.50578C23.4851 9.6929 23.4715 10.3202 23.4736 10.5802C23.4881 13.0505 21.7562 15.3662 20.503 17.3488C19.3917 19.111 18.402 20.9376 17.5707 22.8502C17.4964 23.0079 17.2537 22.8909 17.3274 22.7214C18.0863 21.0018 18.9669 19.3466 19.9568 17.7446C20.8481 16.2898 21.8618 14.9112 22.5458 13.3375C22.9469 12.4411 23.2828 11.4299 23.3239 10.4346C23.3349 10.1975 23.3216 9.94996 23.2618 9.71671C23.2481 9.68198 23.1354 9.34516 23.0958 9.48916C23.0853 9.51337 23.0735 9.51401 23.0735 9.51401Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M25.6566 10.4985C24.956 11.1036 24.281 11.7428 23.7047 12.4595C23.1507 13.1514 22.6973 13.956 22.0073 14.5369C21.985 14.5618 21.9471 14.5165 21.9576 14.4923C22.9742 12.948 24.1536 11.5723 25.6442 10.4873C25.6553 10.4749 25.6677 10.4861 25.6566 10.4985Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.5348 14.2712C23.8 14.6771 23.0104 14.9442 22.3662 15.499C21.7562 16.0283 21.1344 16.5582 20.5374 17.1105C20.504 17.1478 20.4543 17.1032 20.4878 17.0659C21.0312 16.3983 21.7697 15.8384 22.4144 15.2954C23.048 14.7648 23.7838 14.5952 24.5224 14.26C24.533 14.2358 24.546 14.2587 24.5348 14.2712Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.026 18.2928C28.189 18.024 28.9795 17.9933 29.2557 18.0731C29.5803 18.1739 29.779 18.3524 29.9593 18.6265C30.3573 18.3332 30.6678 17.95 31.1834 17.8632C31.6406 17.7913 32.3406 17.8365 32.6345 18.2464C32.99 17.6006 33.6545 18.0852 33.7872 18.5746C33.9348 19.1224 33.8868 19.5506 33.7974 20.0874C34.6347 20.2671 34.2894 21.7635 34.0567 22.2726C33.8127 22.7941 33.1577 23.5859 32.6007 23.7813C33.1049 24.1444 33.6763 24.6576 33.1192 25.2905C33.3109 25.3393 33.3329 25.5273 33.3299 25.693C34.164 25.1516 34.9161 26.3881 34.7654 27.1056C34.5851 27.931 33.4356 28.7613 32.611 28.8174C32.6118 30.1533 31.1683 30.5737 30.021 30.5644C28.685 30.5652 26.7407 29.1444 26.2448 27.835C26.2246 28.1199 25.9451 30.1803 25.8257 30.6005C25.5562 31.5253 25.1363 32.2927 24.2233 32.6846C22.9518 33.2258 21.1615 32.4707 21.1152 30.948C20.442 31.6226 19.6142 30.9576 19.5469 30.1455C19.215 30.1278 19.0091 30.2571 18.6813 30.0974C18.3895 29.9475 18.1019 29.6556 17.9334 29.3808C17.5077 28.718 17.536 27.9243 17.6749 27.2075C16.9353 27.3063 16.3104 26.6778 15.9375 26.1185C15.4627 25.4228 14.9605 24.6576 15.2444 23.7793C15.3254 23.5266 15.4462 23.3546 15.6378 23.1788C15.931 22.9148 15.8517 22.9782 15.7135 22.6072C15.4945 22.0515 15.6906 21.5208 16.3527 21.5207C16.2851 20.9213 15.973 20.3942 16.2342 19.7536C16.4428 19.234 16.982 18.7085 17.5218 18.6322C17.4935 17.6642 19.1897 17.987 19.6146 18.4134C19.5107 17.5796 19.5945 16.4992 20.1125 15.7975C20.6187 15.0964 21.0562 15.0965 21.7912 15.3526C21.6888 14.767 22.3258 14.52 22.7607 14.473C22.5899 13.7136 24.9442 12.6414 25.2864 13.5097C25.5407 13.4015 25.7931 13.2579 26.031 13.5052C26.2062 13.685 26.2873 14.0944 26.277 14.3433C26.2711 14.0125 26.4878 13.6462 26.8485 13.7569C27.1973 13.8682 27.5641 14.5343 27.7326 14.809C28.1981 15.5525 28.2361 18.0214 28.026 18.2928Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M26.4592 22.3613C27.1464 21.5086 28.5186 21.7423 28.993 22.6508C29.5245 22.4213 30.3452 22.7319 30.4928 23.2797C30.9421 23.2792 31.2758 23.7697 31.3445 24.168C30.8725 23.744 30.2768 24.3199 29.9383 24.6218C29.6674 24.861 29.1395 25.5987 28.6932 25.4335",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.4592 22.3613C27.1464 21.5086 28.5186 21.7423 28.993 22.6508C29.5245 22.4213 30.3452 22.7319 30.4928 23.2797C30.9421 23.2792 31.2758 23.7697 31.3445 24.168C30.8725 23.744 30.2768 24.3199 29.9383 24.6218C29.6674 24.861 29.1395 25.5987 28.6932 25.4335",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M31.3463 24.2033C31.1442 23.7413 30.3053 23.7509 29.8649 23.9164C29.3557 24.1211 28.997 24.7078 28.4474 24.8201",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M31.3463 24.2033C31.1442 23.7413 30.3053 23.7509 29.8649 23.9164C29.3557 24.1211 28.997 24.7078 28.4474 24.8201",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M26.2212 23.8756C26.8931 23.8395 27.4672 23.9623 28.0422 24.3216C28.226 24.4418 28.497 24.8647 28.6059 25.1308C28.8261 25.7101 28.7675 26.6 28.2592 27.0411C28.2004 26.6068 28.0191 26.5338 27.5835 26.569C27.0425 26.6217 26.5324 26.5899 26.0122 26.3696C25.5646 26.1808 25.1355 25.8965 24.9675 25.4089C24.8698 25.1304 24.7804 24.5677 24.9682 24.3212C25.0251 24.7201 25.0559 25.0731 25.2988 25.4148C25.5673 25.7905 25.9789 25.9694 26.4319 26.0397C26.754 26.0933 28.3312 25.9613 28.2585 27.0293",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.2212 23.8756C26.8931 23.8395 27.4672 23.9623 28.0422 24.3216C28.226 24.4418 28.497 24.8647 28.6059 25.1308C28.8261 25.7101 28.7675 26.6 28.2592 27.0411C28.2004 26.6068 28.0191 26.5338 27.5835 26.569C27.0425 26.6217 26.5324 26.5899 26.0122 26.3696C25.5646 26.1808 25.1355 25.8965 24.9675 25.4089C24.8698 25.1304 24.7804 24.5677 24.9682 24.3212C25.0251 24.7201 25.0559 25.0731 25.2988 25.4148C25.5673 25.7905 25.9789 25.9694 26.4319 26.0397C26.754 26.0933 28.3312 25.9613 28.2585 27.0293",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M24.2436 24.9158C23.7565 24.8711 23.0222 24.6267 22.4831 23.6153C21.9441 22.6038 20.2042 21.4676 19.2163 22.0054C19.2163 22.0054 19.6786 22.0279 19.863 22.1598C20.6864 22.7422 21.0592 23.739 21.895 24.3326C22.3502 24.6628 22.914 25.0345 23.5035 25.0029C23.81 24.9864 24.1158 24.9582 24.4061 24.8598C24.8006 24.7204 24.904 24.4429 24.9734 24.4155",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.2436 24.9158C23.7565 24.8711 23.0222 24.6267 22.4831 23.6153C21.9441 22.6038 20.2042 21.4676 19.2163 22.0054C19.2163 22.0054 19.6786 22.0279 19.863 22.1598C20.6864 22.7422 21.0592 23.739 21.895 24.3326C22.3502 24.6628 22.914 25.0345 23.5035 25.0029C23.81 24.9864 24.1158 24.9582 24.4061 24.8598C24.8006 24.7204 24.904 24.4429 24.9734 24.4155",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M24.8721 21.4298C24.7378 21.1296 24.627 20.8281 24.355 20.6063C24.0823 20.3726 23.7905 20.2228 23.4337 20.1828C23.1718 20.1496 22.9255 20.1865 22.7098 20.3518C22.6416 20.4027 22.5628 20.4779 22.5077 20.5518C22.4749 20.6008 22.4551 20.6728 22.4092 20.6989C22.3445 20.596 22.1633 20.523 22.0546 20.4815C21.8734 20.4085 21.6927 20.3472 21.5029 20.3338C21.0759 20.3094 20.641 20.3564 20.2758 20.6007C19.8653 20.8828 19.2728 21.5176 19.2168 22.0172",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.8721 21.4298C24.7378 21.1296 24.627 20.8281 24.355 20.6063C24.0823 20.3726 23.7905 20.2228 23.4337 20.1828C23.1718 20.1496 22.9255 20.1865 22.7098 20.3518C22.6416 20.4027 22.5628 20.4779 22.5077 20.5518C22.4749 20.6008 22.4551 20.6728 22.4092 20.6989C22.3445 20.596 22.1633 20.523 22.0546 20.4815C21.8734 20.4085 21.6927 20.3472 21.5029 20.3338C21.0759 20.3094 20.641 20.3564 20.2758 20.6007C19.8653 20.8828 19.2728 21.5176 19.2168 22.0172",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M28.026 18.2928C27.5065 18.7464 26.2582 19.4991 26.1398 21.9174Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.026 18.2928C27.5065 18.7464 26.2582 19.4991 26.1398 21.9174",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M19.6283 18.4481C20.113 19.1079 20.7026 20.4004 20.7026 20.4004Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.6283 18.4481C20.113 19.1079 20.7026 20.4004 20.7026 20.4004",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M17.6873 27.2187C18.2437 25.9119 20.1946 24.152 21.9807 24.3871Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M17.6873 27.2187C18.2437 25.9119 20.1946 24.152 21.9807 24.3871",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M26.2579 27.8579C26.0753 27.0992 25.9286 26.3505 25.9286 26.3505Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.2579 27.8579C26.0753 27.0992 25.9286 26.3505 25.9286 26.3505",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M32.613 23.7925C32.0107 23.3637 31.0263 23.0855 30.4785 23.2332Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M32.613 23.7925C32.0107 23.3637 31.0263 23.0855 30.4785 23.2332",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M23.4298 24.0727C23.267 23.9041 23.1049 23.7472 22.9992 23.5401C22.7076 22.9528 22.8121 22.0368 23.3329 21.6069C23.6385 21.354 23.9766 21.2649 24.3595 21.3507C24.4551 21.3693 24.5736 21.3747 24.6593 21.4292C24.7084 21.4621 24.7096 21.4856 24.745 21.4837C24.7686 21.4825 24.8126 21.421 24.8237 21.4086C24.8696 21.3825 24.9273 21.3557 24.9862 21.3526C25.4336 21.3167 26.1319 21.5511 26.1951 22.068C26.4669 22.0652 26.6638 22.2083 26.7956 22.4613C26.9144 22.6914 26.8693 22.954 26.7995 23.1942C26.7092 23.4946 26.5457 23.7517 26.3095 23.9771C25.9264 24.3288 25.1645 24.4524 24.9151 24.4304C24.3807 24.3881 23.6043 24.2406 23.4298 24.0727Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M25.6881 24.2943C26.1938 24.2435 26.5792 23.7144 26.8425 23.3338C26.9745 23.1493 27.0822 22.9544 27.1769 22.7365C27.2512 22.5788 27.3013 22.4106 27.3396 22.243C27.42 21.9786 27.3713 21.7329 27.1694 21.4955C27.0292 21.5267 27.0172 21.3027 27.1606 21.3304C28.2441 21.4732 26.6332 24.279 25.6881 24.2943C25.677 24.3067 25.6764 24.2949 25.6881 24.2943Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M25.9802 24.2312C26.5659 24.1289 26.9077 23.4484 27.0449 22.9208C27.0943 22.7408 27.2161 21.7057 26.8327 21.8327C26.6584 21.8893 26.678 21.5927 26.8226 21.6441C27.3037 21.7956 27.2324 22.4497 27.159 22.8438C27.0367 23.4297 26.6516 24.1834 25.9933 24.2542C25.9697 24.2555 25.9684 24.2319 25.9802 24.2312Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M25.9078 24.1997C26.3905 24.162 26.9325 23.9082 27.3586 23.6962C27.6234 23.5637 27.8112 23.3172 28.0636 23.1736C28.3736 23.0032 28.0792 23.2437 28.0665 23.0079C28.0608 22.9018 28.1991 22.8353 28.2854 22.9016C28.4842 23.0801 27.9727 23.4622 27.8474 23.5517C27.3247 23.9463 26.573 24.2586 25.909 24.2233C25.8973 24.2239 25.8966 24.2121 25.9078 24.1997Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.8804 24.444C24.1869 24.0792 24.0127 23.0364 24.5612 22.463C24.6622 22.363 24.789 22.5218 24.6873 22.61C24.0977 23.0791 24.2806 24.0624 24.8915 24.4316C24.904 24.4427 24.8928 24.4551 24.8804 24.444Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.8326 24.4348C24.3225 24.4031 23.909 24.1889 23.6938 23.7039C23.4643 23.1723 23.5623 22.5759 24.0652 22.2533C24.1793 22.1763 24.2955 22.3592 24.1808 22.4245C23.1935 22.974 23.9055 24.3428 24.8326 24.4348C24.8444 24.4342 24.8438 24.4224 24.8326 24.4348Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.4031 24.3632C23.7726 24.2906 23.349 23.8878 23.2323 23.2556C23.1493 22.8108 23.2094 22.1691 23.6845 21.9899C23.8117 21.9358 23.8833 22.1684 23.7548 22.1989C23.2406 22.3093 23.219 23.008 23.3354 23.4156C23.4936 23.9391 23.8774 24.2614 24.4031 24.3632C24.4149 24.3626 24.4149 24.3626 24.4031 24.3632Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.1039 24.2966C22.8951 24.2433 21.5608 22.2932 22.9264 21.5223C23.0758 21.4433 23.1828 21.6741 23.0321 21.7294C22.3473 21.9672 22.4053 22.8272 22.7049 23.3431C23.0046 23.8591 23.5187 24.1861 24.1039 24.2966Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.9474 24.3695C25.2469 24.2234 25.3564 23.8391 25.3988 23.5295C25.4321 23.2676 25.4291 22.7712 25.1497 22.6325C25.0646 22.5898 25.1284 22.4563 25.2135 22.499C25.8318 22.785 25.592 24.2639 24.9487 24.3931C24.9369 24.3937 24.9362 24.3819 24.9474 24.3695Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.9591 24.3689C25.0839 23.8302 25.0994 23.2382 24.9642 22.7016C24.933 22.5614 25.1452 22.55 25.1292 22.6927C25.0771 23.2631 25.1304 23.8159 24.9709 24.3683C24.9715 24.3801 24.9597 24.3807 24.9591 24.3689Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M25.0192 24.3893C25.6613 24.2365 26.2352 23.0353 25.6657 22.5574C25.5788 22.4794 25.7139 22.3539 25.7897 22.4444C26.3327 23.0891 25.7308 24.2092 25.0192 24.3893Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.949 21.3191C24.8936 21.1684 24.8971 21.0145 24.9838 20.868C25.0483 20.7463 25.2169 20.5835 25.3577 20.5642C25.4861 20.5336 25.5552 20.7191 25.4274 20.7614C25.3691 20.7764 25.2984 20.7802 25.2407 20.8069C25.183 20.8336 25.126 20.8722 25.0813 20.9219C24.9809 21.0337 24.9532 21.177 24.9607 21.3185C24.9607 21.3185 24.9496 21.3309 24.949 21.3191Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M25.834 21.5081C25.8407 21.4131 25.8363 21.3306 25.8312 21.2363C25.8249 21.1184 25.8093 21.0483 25.7001 20.995C25.615 20.9523 25.6664 20.8077 25.7508 20.8386C26.0264 20.9066 25.8946 21.3156 25.834 21.5081Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.1497 21.8812C26.1179 21.7292 26.1096 21.5759 26.089 21.4115C26.0839 21.3172 26.0677 21.2353 26.0391 21.1423C26.0117 21.0728 25.9731 21.0158 25.9687 20.9332C25.9655 20.8743 26.0337 20.8233 26.0828 20.8562C26.2175 20.9435 26.2165 21.1446 26.2241 21.286C26.2231 21.4871 26.1978 21.6776 26.1726 21.8681C26.1739 21.8917 26.1503 21.893 26.1497 21.8812Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.8615 21.2293C24.7488 20.2304 24.8562 19.1487 24.8849 18.1422C24.9143 17.1475 24.9083 16.1547 25.0208 15.1673C25.0201 15.1555 25.0437 15.1543 25.0443 15.1661C24.9933 16.1974 24.9652 17.2157 24.9496 18.2451C24.9402 18.7304 24.9432 19.2268 24.9337 19.712C24.9138 20.2215 24.8349 20.7341 24.8615 21.2293C24.8621 21.241 24.8739 21.2404 24.8615 21.2293Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.5298 15.0519C24.3943 16.0523 24.5567 17.0959 24.5876 18.111C24.6134 19.0318 24.6386 19.9408 24.629 20.8635C24.6296 20.8753 24.6061 20.8766 24.6054 20.8648C24.5876 19.8726 24.5704 18.8922 24.5526 17.9C24.5367 16.9432 24.4383 15.9909 24.5298 15.0519C24.5173 15.0408 24.5291 15.0401 24.5298 15.0519Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.4199 20.6746C21.8789 19.6278 21.6962 18.207 21.5864 17.0424C21.5845 17.0071 21.6434 17.0039 21.6453 17.0393C21.7918 18.2255 21.9576 19.5526 22.431 20.6622C22.4316 20.674 22.4199 20.6746 22.4199 20.6746Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.6523 16.0695C21.5768 16.8657 21.9264 17.6509 22.0742 18.4233C22.2171 19.1013 22.3133 19.7937 22.5957 20.4288C22.6088 20.4518 22.5623 20.4661 22.561 20.4425C22.227 19.7274 22.1126 18.9178 21.9412 18.1467C21.7859 17.4574 21.5959 16.7819 21.6523 16.0695C21.6399 16.0584 21.6516 16.0577 21.6523 16.0695Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.4847 16.4485C26.5 17.3935 26.4681 18.3411 26.3053 19.272C26.1887 19.964 26.0947 20.8558 25.738 21.4779C25.7157 21.5027 25.679 21.481 25.6895 21.4568C26.0613 20.893 26.1272 19.92 26.2339 19.264C26.3967 18.3331 26.4646 17.3954 26.4847 16.4485Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.1341 23.5931C19.6489 23.2354 18.0893 23.0354 16.9631 21.8781C16.9383 21.8558 16.9711 21.8067 16.9966 21.8408C17.6065 22.411 18.3249 22.7981 19.107 23.0517C19.7804 23.2638 20.4817 23.3325 21.1341 23.5931Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.4111 23.9091C20.4288 23.8909 19.4769 23.7765 18.5099 23.6038C17.7099 23.4576 16.8851 23.2891 16.2213 22.8163C16.1964 22.794 16.2293 22.745 16.2541 22.7673C17.6754 23.6959 19.748 23.762 21.4111 23.9091Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.3086 23.7611C19.9364 23.5274 18.4712 23.3223 17.2097 22.7279C17.1731 22.7063 17.2059 22.6572 17.2419 22.6671C18.5703 23.1869 19.9716 23.3008 21.3192 23.7369C21.3316 23.748 21.3322 23.7598 21.3086 23.7611Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.7196 24.9385C22.2152 25.0128 21.8044 25.5078 21.4436 25.8346C21.1169 26.1359 20.8504 26.4576 20.5852 26.8029C20.5635 26.8395 20.5138 26.7949 20.5361 26.77C20.7813 26.2721 21.2339 25.8931 21.6399 25.5285C21.9561 25.2514 22.2815 24.9265 22.7289 24.8907C22.7407 24.89 22.7432 24.9372 22.7196 24.9385Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.6314 24.8368C21.9295 24.7562 21.2564 25.4308 20.7834 25.87C20.1753 26.4347 19.6305 27.0788 19.426 27.8937C19.4161 27.9297 19.3683 27.9204 19.3664 27.8851C19.528 26.9306 20.2123 26.2435 20.9004 25.6273C21.3635 25.2241 21.9611 24.6836 22.6308 24.825C22.6419 24.8126 22.6432 24.8361 22.6314 24.8368Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.8613 24.528C24.53 26.2837 24.1799 27.9105 23.1856 29.4299C23.1527 29.4789 23.0795 29.4356 23.1005 29.3872C23.5446 28.6303 23.9534 27.8753 24.2156 27.0336C24.479 26.2155 24.6463 25.3671 24.8613 24.528Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.912 25.0336C24.9019 26.6066 24.3549 28.0902 23.7223 29.5193C23.7019 29.5795 23.6168 29.5368 23.6372 29.4766C24.1861 28.0283 24.8187 26.5993 24.8884 25.0349C24.8878 25.0231 24.9114 25.0218 24.912 25.0336Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M20.1581 31.1767C20.113 30.7772 20.3323 30.458 20.5025 30.106C20.7589 29.5957 21.0643 29.1182 21.3449 28.6184C21.3771 28.5575 21.4627 28.612 21.4299 28.6611C21.2163 29.0864 20.9785 29.5011 20.7412 29.9277C20.5369 30.3051 20.2407 30.7348 20.2052 31.1742C20.1947 31.1984 20.1593 31.2003 20.1581 31.1767Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.1855 28.2959C20.8732 28.6437 20.6347 29.0467 20.4074 29.4372C20.1801 29.8278 19.905 30.2091 19.8105 30.6516C19.8013 30.6994 19.7181 30.692 19.7267 30.6324C19.9058 29.7834 20.6179 28.953 21.1855 28.2959C21.1849 28.2841 21.1973 28.2953 21.1855 28.2959Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.57 26.5342C28.1762 27.6958 29.3664 28.2822 30.5253 28.7283C30.5737 28.7494 30.5428 28.8338 30.495 28.8245C29.3032 28.4274 28.1068 27.7232 27.5582 26.5349L27.57 26.5342Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.4311 26.5891C28.0577 27.6904 29.0847 28.321 30.1464 28.9379C30.2073 28.9701 30.1528 29.0558 30.1037 29.023C29.0687 28.4637 27.848 27.749 27.3963 26.6027C27.3957 26.591 27.4187 26.5779 27.4311 26.5891Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.2936 26.5437C26.597 27.1304 26.8278 27.6855 27.3247 28.1317C27.7967 28.5557 28.3567 28.8566 28.9056 29.17C28.9298 29.1806 28.9087 29.229 28.8845 29.2185C27.6919 28.5849 26.6518 27.9314 26.2936 26.5437C26.2818 26.5443 26.2929 26.5319 26.2936 26.5437Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.7653 25.4533C29.7935 26.1075 31.421 26.0319 32.5557 25.8055C32.614 25.7905 32.6427 25.8836 32.5837 25.8867C31.4503 26.1368 29.7397 26.205 28.7541 25.4657C28.7417 25.4546 28.7646 25.4415 28.7653 25.4533Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.9885 25.4294C29.9125 25.4626 30.7241 25.3835 31.6099 25.1468C31.6564 25.1325 31.6838 25.2019 31.6373 25.2163C30.7925 25.5572 29.8723 25.5948 28.9898 25.453C28.9662 25.4543 28.965 25.4307 28.9885 25.4294Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.7212 25.5148C29.2219 26.6939 30.6632 27.113 31.7811 27.455C31.8171 27.4649 31.8078 27.5127 31.7718 27.5028C30.6093 27.2105 29.1209 26.7939 28.7094 25.5154C28.7087 25.5036 28.7205 25.503 28.7212 25.5148Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.4179 22.067C28.7107 21.3537 29.171 20.6787 29.6717 20.0962C29.7052 20.0589 29.7431 20.1041 29.7214 20.1408C29.2462 20.7575 28.8193 21.3952 28.4304 22.0781C28.4316 22.1017 28.4192 22.0906 28.4179 22.067Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.2831 21.9795C28.4392 21.1436 28.884 20.3985 29.3424 19.6881C29.3641 19.6515 29.4131 19.6843 29.3908 19.7092C28.9448 20.4307 28.5355 21.1739 28.3067 21.9783C28.2962 22.0025 28.272 21.992 28.2831 21.9795Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.066 21.8967C28.0486 21.3538 28.2957 20.8912 28.518 20.4064C28.7619 19.8849 29.0065 19.3752 29.3969 18.9404C29.4192 18.9156 29.4683 18.9484 29.4342 18.9739C29.1008 19.3701 28.8878 19.8072 28.6643 20.2685C28.4086 20.7906 28.0926 21.2923 28.0889 21.8836C28.0902 21.9072 28.0666 21.9085 28.066 21.8967Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.9899 22.5919C29.4841 21.6669 30.1509 20.8744 30.9668 20.2158C31.0009 20.1903 31.0513 20.2467 31.0178 20.284C30.2503 20.9636 29.5344 21.7233 29.0266 22.6136C29.0043 22.6385 28.9676 22.6168 28.9899 22.5919Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.1213 22.744C31.0852 22.4203 31.8976 21.9156 32.5787 21.1697C32.6122 21.1324 32.6619 21.177 32.6284 21.2143C31.987 22.0409 31.1132 22.5016 30.1238 22.7912C30.1127 22.8036 30.0984 22.7571 30.1213 22.744Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.1866 22.8587C31.0912 22.751 31.8111 22.2867 32.5403 21.7747C32.5861 21.7485 32.6253 21.8174 32.5912 21.8429C31.978 22.3132 31.0388 23.0967 30.1878 22.8823C30.1754 22.8711 30.1748 22.8593 30.1866 22.8587Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.22783 35.4961C4.22783 35.4961 3.54881 34.7404 1.89883 35.2783C0.248841 35.8161 -0.862966 35.3674 -2.02786 34.5906C-3.20455 33.8143 -4.00676 32.746 -4.99783 33.2249C-4.99783 33.2249 -3.39295 30.5258 -0.732749 31.1869C1.92682 31.8363 4.22783 35.4961 4.22783 35.4961Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M-3.88387 32.6094C-2.51848 32.276 -1.04589 32.3979 0.278755 32.847C1.63876 33.2942 2.64368 34.1742 3.75407 35.0368C3.77891 35.0591 3.74481 35.0846 3.7206 35.074C3.21027 34.8177 2.79908 34.426 2.35505 34.0833C1.76259 33.6185 1.12994 33.286 0.418563 33.0286C-0.955768 32.5349 -2.44522 32.3193 -3.8826 32.633C-3.89439 32.6336 -3.89566 32.61 -3.88387 32.6094Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M-0.817675 34.6675C-0.0934064 33.6237 1.65793 33.8725 2.68342 34.2549C2.73184 34.2759 2.69964 34.3368 2.65122 34.3157C1.55437 33.9253 0.0811347 33.7916 -0.817675 34.6675C-0.817042 34.6793 -0.817042 34.6793 -0.817675 34.6675Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M-1.82299 34.0002C-1.29866 33.4164 -0.433631 33.4527 0.279406 33.5208C1.08676 33.5839 1.97789 33.6661 2.63246 34.1866C2.6691 34.2083 2.62447 34.258 2.58784 34.2363C1.99538 33.7715 1.21034 33.6836 0.473728 33.6168C-0.262887 33.5499 -1.23781 33.4486 -1.80993 34.0232C-1.82172 34.0238 -1.83415 34.0126 -1.82299 34.0002Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.9446 44.109C10.9446 44.109 11.6201 45.0186 11.3979 47.9271C11.1758 50.8357 12.0825 52.7496 13.9415 53.903C15.8006 55.0565 17.0029 55.4293 17.2958 56.0402C17.2958 56.0402 17.1635 55.338 17.4319 53.29C17.7002 51.242 17.1935 49.0702 14.9334 47.7136C12.6851 46.3565 11.7599 45.2002 10.9446 44.109Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M16.8018 54.9908C16.5906 54.1391 16.1237 53.372 15.7277 52.6012C15.3701 51.8873 14.9437 51.2127 14.5291 50.5374C13.6092 49.038 12.7252 47.5484 11.9318 45.9831C11.9188 45.9602 11.9529 45.9347 11.9659 45.9576C12.832 47.5545 13.7321 49.1259 14.69 50.6706C15.1301 51.38 15.5341 52.0795 15.9172 52.8274C16.2741 53.5295 16.6533 54.2067 16.8136 54.9902C16.826 55.0014 16.8025 55.0026 16.8018 54.9908Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.1779 54.2504C14.7711 53.9412 14.5997 53.1701 14.516 52.7135C14.3955 52.0106 14.3525 51.209 14.564 50.5237C14.5745 50.4995 14.5987 50.51 14.6 50.5336C14.4299 51.1102 14.5027 51.8039 14.5703 52.4032C14.6361 52.9672 14.8113 53.809 15.2015 54.2492C15.2015 54.2492 15.1903 54.2616 15.1779 54.2504Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M14.3099 53.7177C13.8564 53.1982 13.5782 52.421 13.495 51.7516C13.3904 50.9059 13.4421 49.8864 13.682 49.0695C13.6919 49.0335 13.7403 49.0546 13.7298 49.0788C13.5208 49.8112 13.4666 50.7836 13.5307 51.5368C13.5811 52.2553 13.8532 53.1393 14.3099 53.7177C14.3217 53.7171 14.3217 53.7171 14.3099 53.7177Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.4625 52.9119C13.1967 52.1459 13.0495 51.3853 13.0176 50.5712C12.9813 49.6746 13.1776 48.7064 12.9644 47.8193C12.9632 47.7957 12.9861 47.7827 12.9992 47.8056C13.1818 48.5643 13.0356 49.3643 13.0296 50.1331C13.0212 51.0794 13.1197 52.0318 13.4625 52.9119C13.4631 52.9237 13.4749 52.9231 13.4625 52.9119Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.7218 51.8877C12.5672 51.2102 12.5213 50.5743 12.626 49.8829C12.711 49.2636 13.0618 48.3107 12.8639 47.7065C12.8626 47.683 12.8862 47.6817 12.8986 47.6929C13.0647 48.145 12.8593 48.7236 12.7891 49.1766C12.661 50.0939 12.5775 50.9614 12.7448 51.8746C12.7343 51.8988 12.7225 51.8995 12.7218 51.8877Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.9217 53.2582C16.3616 52.2951 15.6642 51.1976 14.6435 50.6849C14.6069 50.6632 14.6391 50.6024 14.6757 50.624C15.733 51.1584 16.395 52.2579 16.9217 53.2582C16.9223 53.27 16.9335 53.2576 16.9217 53.2582Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M17.0692 52.4818C16.5583 51.7762 16.1667 51.0878 15.4847 50.4978C14.9264 50.0076 14.1975 49.6447 13.6733 49.129C13.636 49.0956 13.6918 49.0335 13.7291 49.0669C13.967 49.3143 14.3438 49.5068 14.6146 49.7051C14.9959 49.9802 15.3424 50.269 15.6902 50.5814C16.3113 51.1392 16.6303 51.7959 17.0692 52.4818Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.6421 51.1333C16.3328 50.878 16.0681 50.573 15.7471 50.3183C15.3403 50.0091 14.9131 49.7601 14.4853 49.4993C14.0457 49.2392 13.5905 48.9089 13.3071 48.4749C13.281 48.429 13.3499 48.3898 13.3753 48.4239C13.7619 49.018 14.4175 49.3374 15.0043 49.6961C15.6519 50.0869 16.1178 50.6176 16.6421 51.1333C16.6539 51.1327 16.665 51.1203 16.6421 51.1333Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.5362 50.2641C16.0024 49.5716 15.3625 48.8847 14.6602 48.3549C13.9703 47.8363 13.2029 47.4164 12.4683 46.9474C12.4317 46.9258 12.4632 46.8531 12.5005 46.8866C13.2351 47.3555 14.0025 47.7754 14.6937 48.3176C15.3966 48.8592 16.0247 49.5467 16.5591 50.251C16.5833 50.2616 16.5492 50.287 16.5362 50.2641Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M3.34882 53.9162C3.34882 53.9162 5.07563 53.2678 7.16687 52.8008C9.25811 52.3338 11.8675 48.9661 9.97143 42.7189C9.97143 42.7189 10.2192 44.6919 9.26592 45.6534C8.3126 46.615 7.0416 45.8438 5.61474 47.8949C4.17546 49.9348 4.43989 51.7768 4.26883 52.5545C4.11439 53.2012 3.34882 53.9162 3.34882 53.9162Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M4.16062 53.3997C4.50685 52.8018 5.17226 52.4232 5.70545 52.0044C6.47609 51.3837 7.21998 50.7053 7.87692 49.9489C9.20195 48.4235 9.76109 46.7264 10.0457 44.7604C10.045 44.7486 10.0686 44.7473 10.0699 44.7709C9.89243 46.5302 9.41075 48.1285 8.30464 49.5476C7.74012 50.2636 7.08991 50.9251 6.40116 51.5296C6.085 51.8067 5.75578 52.0608 5.43898 52.3261C4.99566 52.6573 4.46666 52.934 4.16062 53.3997Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.69908 51.5383C5.03439 51.1775 5.51204 51.0454 5.96422 50.8793C6.62416 50.6192 7.27485 50.4069 7.86762 49.9967C7.86762 49.9967 7.87941 49.9961 7.86826 50.0085C7.55336 50.3092 7.13718 50.4852 6.73216 50.6489C6.09579 50.9077 5.21732 51.0612 4.69908 51.5383C4.69971 51.5501 4.71213 51.5613 4.69908 51.5383Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.8404 50.8687C5.27192 50.5381 5.77188 50.3812 6.27058 50.2007C6.97768 49.9381 7.83701 49.8683 8.38619 49.3068C8.39734 49.2944 8.40977 49.3055 8.39861 49.318C7.48002 50.2658 5.83478 50.0113 4.8404 50.8687C4.82861 50.8693 4.84103 50.8805 4.8404 50.8687Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.19645 50.2347C5.65408 49.95 6.277 49.8811 6.78939 49.7353C7.46429 49.5336 8.19813 49.3286 8.73995 48.8503C8.7511 48.8378 8.76353 48.849 8.75237 48.8614C8.43075 49.257 7.88426 49.4282 7.41966 49.5832C7.08284 49.6959 6.74539 49.7968 6.40794 49.8977C6.01218 50.0135 5.54125 50.0506 5.19645 50.2347C5.18529 50.2471 5.19708 50.2464 5.19645 50.2347Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.37973 48.5814C5.69755 48.115 6.56551 47.9857 7.06484 47.817C7.83152 47.563 9.16977 47.3847 9.66229 46.6489C9.67345 46.6365 9.69766 46.647 9.68651 46.6594C9.40468 47.1357 8.62558 47.3785 8.13803 47.5465C7.66165 47.7022 7.17094 47.8113 6.69519 47.9787C6.28954 48.1305 5.65609 48.2237 5.37973 48.5814C5.38036 48.5932 5.39278 48.6043 5.37973 48.5814Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.8284 48.5692C6.49214 48.3799 7.17084 48.2488 7.81899 47.9894C8.34 47.7841 9.34729 47.3871 9.61416 46.8526C9.62532 46.8402 9.63774 46.8513 9.63837 46.8631C9.40434 47.3486 8.73387 47.6329 8.27244 47.8468C7.47798 48.2442 6.6795 48.3462 5.8284 48.5692Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M8.37379 51.7193C8.80381 51.1405 9.16729 50.4235 9.33035 49.7171C9.40694 49.382 9.41153 49.027 9.40496 48.6845C9.40092 48.3892 9.44697 47.9256 9.31389 47.649C9.30083 47.6261 9.34735 47.6117 9.34862 47.6353C9.58005 48.2022 9.53575 49.1386 9.41414 49.7363C9.27592 50.4649 8.84044 51.1622 8.37379 51.7193C8.37442 51.7311 8.37442 51.7311 8.37379 51.7193Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M8.02248 51.5608C8.45503 51.0292 8.73852 50.3637 8.9519 49.7138C9.13372 49.1366 9.14923 48.5446 9.23483 47.937C9.23357 47.9134 9.26957 47.9233 9.2702 47.9351C9.19037 49.3109 8.99558 50.5273 8.02248 51.5608C8.02311 51.5726 8.03553 51.5838 8.02248 51.5608Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M6.07348 52.694C6.90432 52.0937 7.51387 51.1152 7.76784 50.1202C7.77836 50.096 7.80258 50.1065 7.80384 50.1301C7.61008 51.1455 6.92917 52.116 6.07348 52.694Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.5983 52.8733C6.33736 52.3252 7.11955 51.4793 7.34195 50.5569C7.35184 50.5209 7.39963 50.5302 7.38974 50.5662C7.16923 51.5239 6.39821 52.3574 5.5983 52.8733C5.58714 52.8857 5.58651 52.8739 5.5983 52.8733Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M9.8593 48.7783C10.0411 48.201 10.1044 47.6183 10.0721 47.017C10.0462 46.5337 9.91539 46.0796 9.90122 45.5956C9.89932 45.5603 9.95827 45.5571 9.96017 45.5925C10.1388 46.7179 10.2968 47.6789 9.88288 48.777C9.87236 48.8012 9.84878 48.8025 9.8593 48.7783Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.7574 42.9885C13.7574 42.9885 19.8544 42.9213 22.3883 44.9725C24.9215 47.0119 25.0234 48.9099 25.0782 50.8105C25.1323 52.6992 25.3486 53.6453 25.3486 53.6453C25.3486 53.6453 24.6367 52.2766 23.2584 52.1496C21.8808 52.0344 19.6239 51.3989 18.5898 49.3145C17.5681 47.2412 18.0496 44.3187 13.7574 42.9885Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M24.7634 52.4353C24.1846 50.2437 22.9608 48.3704 21.295 46.8519C20.4745 46.1038 19.576 45.4427 18.6123 44.8915C17.6729 44.3508 16.6959 43.9894 15.6927 43.5822C15.6443 43.5612 15.6758 43.4885 15.7236 43.4978C17.855 43.9981 19.9408 45.4113 21.498 46.8883C23.0669 48.3647 24.3875 50.2801 24.7634 52.4353C24.764 52.4471 24.787 52.434 24.7634 52.4353Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.1864 47.1932C22.4669 45.3347 19.826 44.1523 17.285 44.1705C17.2378 44.1731 17.2216 44.0912 17.2806 44.088C19.8196 44.0345 22.4892 45.3099 24.1864 47.1932Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.6019 44.8609C20.1642 44.2879 18.7962 43.912 17.2334 44.0905C17.1862 44.0931 17.183 44.0341 17.2296 44.0198C18.0051 43.9309 18.7647 43.9847 19.5398 44.1086C20.2796 44.2344 20.9135 44.5905 21.6019 44.8609C21.6137 44.8603 21.6131 44.8485 21.6019 44.8609Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M23.8748 47.7775C22.5208 46.5615 20.9664 45.3562 19.0978 45.1255C19.05 45.1163 19.0574 45.0331 19.117 45.0417C21.0209 45.2705 22.5412 46.5013 23.8748 47.7775C23.8873 47.7886 23.8984 47.7762 23.8748 47.7775Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.7306 50.0606C24.2766 49.0919 23.6403 48.2511 22.8564 47.5247C22.0726 46.7983 21.182 46.0658 20.1386 45.7908C20.1026 45.7809 20.1106 45.7095 20.1473 45.7312C21.2024 46.0056 22.1061 46.761 22.8905 47.4992C23.6632 48.2381 24.312 49.09 24.743 50.0718C24.7542 50.0593 24.7306 50.0606 24.7306 50.0606Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M23.7537 51.6855C23.4276 51.3365 23.2031 50.8993 22.9452 50.4994C22.5977 49.9742 22.2497 49.4372 21.9252 48.8989C21.3011 47.8447 20.5957 46.8185 20.0175 45.7382C19.992 45.7041 20.0491 45.6656 20.0745 45.6997C20.6136 46.7111 21.2804 47.6803 21.8772 48.665C22.1755 49.1574 22.4733 49.638 22.7716 50.1303C23.0942 50.6332 23.3623 51.2218 23.7537 51.6855C23.7655 51.6849 23.7655 51.6849 23.7537 51.6855Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.7319 51.3739C21.0793 49.4409 20.1386 47.115 18.8637 44.9489C18.8382 44.9148 18.8952 44.8763 18.9207 44.9104C20.1957 47.0765 21.1252 49.4148 22.7319 51.3739Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.4481 49.8831C18.9692 48.8921 18.5859 47.9195 18.5382 46.8107C18.4996 46.0916 18.4013 44.7018 17.6024 44.3545C17.5664 44.3446 17.5986 44.2838 17.6234 44.3061C18.2032 44.5351 18.4393 45.4091 18.5398 45.9594C18.6571 46.6034 18.6101 47.268 18.7628 47.91C18.918 48.5993 19.1768 49.2356 19.4481 49.8831Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.9527 49.5959C19.5901 48.7878 19.3435 47.938 19.0497 47.0907C18.7814 46.2775 18.6021 45.1403 18.0349 44.485C18.0094 44.4509 18.054 44.4012 18.0795 44.4353C18.5834 45.0112 18.7513 45.9362 18.9791 46.657C19.291 47.6216 19.5366 48.6725 19.9527 49.5959C19.9534 49.6077 19.9651 49.6071 19.9527 49.5959Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M3.37466 29.0749C3.37466 29.0749 1.11629 24.6679 -1.31596 23.6281C-3.73643 22.5876 -5.14431 23.2307 -6.5267 23.9079C-7.9091 24.5851 -8.66652 24.7912 -8.66652 24.7912C-8.66652 24.7912 -7.41372 24.7831 -6.8071 25.7318C-6.20048 26.6806 -4.8854 28.0524 -3.00779 28.0107C-1.11901 27.9565 0.789374 26.5062 3.37466 29.0749Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M-7.58202 24.7329C-5.85142 24.1552 -3.91019 24.4175 -2.21059 25.0238C-0.619627 25.5887 1.16906 26.533 2.26814 27.8455C2.30603 27.8907 2.2372 27.9299 2.20057 27.9082C1.52052 27.3536 0.886366 26.7729 0.140017 26.3045C-0.58212 25.8468 -1.3594 25.4629 -2.1552 25.1745C-3.90449 24.5236 -5.73455 24.35 -7.56897 24.7559C-7.58076 24.7565 -7.59381 24.7335 -7.58202 24.7329Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M-0.0306414 14.1007C-0.0306414 14.1007 3.74873 16.889 3.72042 19.4443C3.69147 21.9878 2.26604 25.3866 3.38379 27.9276C3.38379 27.9276 0.326784 24.0601 -0.908856 21.5254C-2.1445 18.9907 -0.896527 17.3512 -0.405984 15.9179C0.07467 14.5207 -0.0306414 14.1007 -0.0306414 14.1007Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M0.253211 14.7592C1.61204 15.8449 1.9472 17.6831 2.09413 19.3187C2.30516 21.7074 2.20903 24.1008 2.77246 26.447C2.77436 26.4823 2.73963 26.496 2.72594 26.4613C2.03497 24.3821 2.17279 22.1047 2.03337 19.9485C1.92536 18.1572 1.71521 16.0049 0.242057 14.7717C0.218479 14.7729 0.240788 14.7481 0.253211 14.7592Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M-0.832233 17.667C-0.522629 18.809 0.14737 19.8371 0.813571 20.7945C1.40271 21.6377 2.01353 22.4444 2.28017 23.4468C2.29385 23.4815 2.24733 23.4959 2.23364 23.4611C1.87688 22.3216 1.19217 21.4599 0.525334 20.4907C-0.0657017 19.6121 -0.551271 18.716 -0.832233 17.667Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M-1.06989 18.3063C-0.607033 19.4401 -0.0622824 20.5577 0.630662 21.5727C1.18317 22.3943 2.12344 23.1714 2.31872 24.1659C2.31935 24.1777 2.2964 24.1907 2.29577 24.1789C1.85838 23.0793 0.986315 22.2512 0.354215 21.2683C-0.239987 20.3308 -0.707042 19.3391 -1.06989 18.3063C-1.08168 18.3069 -1.08232 18.2951 -1.06989 18.3063Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M-0.961272 19.4472C-0.362006 20.4791 0.144214 21.5397 0.880516 22.4814C1.36331 23.1058 2.25999 23.7315 2.36388 24.5654C2.36515 24.589 2.32978 24.5909 2.32851 24.5673C2.1402 23.7025 1.17825 22.962 0.655019 22.2453C0.0168269 21.3692 -0.437804 20.3886 -0.961272 19.4472C-0.98485 19.4485 -0.973694 19.4361 -0.961272 19.4472Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M-0.00340396 16.3691C0.483512 17.9509 1.84005 19.2141 2.16381 20.8401C2.17814 20.8866 2.10803 20.9022 2.1055 20.855C1.93088 20.025 1.39206 19.2381 0.951356 18.5169C0.547916 17.8292 0.179845 17.1396 -0.0269798 16.3704C-0.0151908 16.3698 -0.00340396 16.3691 -0.00340396 16.3691Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M0.0404104 17.1827C0.582473 18.6905 1.81605 19.8657 2.17329 21.4545C2.17392 21.4662 2.16213 21.4669 2.1615 21.4551C1.73416 19.8819 0.524793 18.7173 0.0286207 17.1833C0.0161987 17.1721 0.0279884 17.1715 0.0404104 17.1827Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M1.78662 16.2375C2.57562 17.7203 2.71163 19.5929 2.20701 21.2042C2.19712 21.2402 2.14869 21.2192 2.15922 21.195C2.63038 19.6209 2.49309 17.7247 1.78662 16.2375Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M2.78722 17.6972C3.01834 19.139 2.7987 20.3331 2.12309 21.6226C2.12373 21.6344 2.09951 21.6239 2.11067 21.6114C2.73976 20.3362 2.96928 19.1061 2.77543 17.6978C2.76301 17.6866 2.78658 17.6854 2.78722 17.6972Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M3.21035 18.7503C3.49709 20.5675 2.7752 22.0959 2.275 23.7898C2.26448 23.814 2.22848 23.8041 2.23901 23.7799C2.64426 22.0793 3.42636 20.5713 3.21035 18.7503Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.63101 29.575C4.63101 29.575 2.97943 25.6793 4.71525 22.9969C6.43928 20.3151 8.59019 20.5188 8.59019 20.5188C8.59019 20.5188 7.91805 20.9923 8.17734 22.078C8.43725 23.1754 8.64385 25.4816 6.90802 26.4024C5.1604 27.3238 4.44159 28.2492 4.63101 29.575Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M7.40563 21.1379C6.2803 21.9787 5.5948 23.3042 5.19287 24.6263C4.82062 25.8404 4.76792 27.061 4.6104 28.3109C4.60114 28.3587 4.51799 28.3513 4.51546 28.3041C4.45745 25.6825 5.32001 22.8105 7.40563 21.1379C7.40437 21.1143 7.41679 21.1255 7.40563 21.1379Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M6.07666 21.9305C5.59022 22.5596 5.28632 23.2853 5.06621 24.0302C4.83495 24.7874 4.82514 25.4855 4.79618 26.2674C4.79808 26.3027 4.75093 26.3053 4.74903 26.2699C4.77292 25.3937 4.79388 24.6832 5.06787 23.8409C5.30231 23.1426 5.61 22.4876 6.07666 21.9305C6.07539 21.9069 6.08781 21.9181 6.07666 21.9305Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.48906 22.4349C4.55156 23.6912 4.57807 25.2859 4.6932 26.7694C4.6951 26.8048 4.64794 26.8073 4.64604 26.7719C4.51913 25.2891 4.51556 23.6813 5.48906 22.4349Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.1638 25.0599C4.16578 25.7574 4.49469 26.3782 4.64866 27.0438C4.66298 27.0903 4.59351 27.1177 4.57919 27.0712C4.38985 26.4074 4.10747 25.7723 4.14085 25.073C4.15138 25.0488 4.17496 25.0475 4.1638 25.0599Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.76729 23.9087C7.39685 24.4961 6.94072 25.029 6.40943 25.4831C5.85519 25.9503 4.99863 26.2919 4.60651 26.9159C4.58483 26.9526 4.52398 26.9204 4.54566 26.8837C4.86032 26.3584 5.43901 26.1264 5.91706 25.7815C6.64687 25.2812 7.2754 24.6563 7.76729 23.9087Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.73749 24.4542C7.28999 24.9275 6.91575 25.4442 6.39244 25.827C5.78915 26.2613 5.11005 26.6052 4.68257 27.2311C4.66025 27.256 4.61183 27.2349 4.63415 27.2101C4.96376 26.7431 5.42013 26.4349 5.90007 26.1253C6.61936 25.6493 7.16854 25.0877 7.73749 24.4542Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.32051 25.718C6.65938 26.6166 5.37818 26.7563 4.61894 27.5892C4.58547 27.6265 4.52336 27.5707 4.55683 27.5334C4.88035 27.1732 5.32683 26.901 5.75226 26.6771C6.31726 26.4103 6.94754 26.2582 7.32051 25.718Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.90301 22.0334C7.67467 22.625 7.37686 23.244 6.86661 23.6497C6.26585 24.1312 5.39876 24.497 4.97318 25.1583C4.9515 25.1949 4.89065 25.1627 4.91233 25.1261C5.22889 24.6362 5.79199 24.334 6.25888 24.0015C7.02216 23.464 7.52418 22.905 7.8788 22.0229C7.90174 22.0098 7.91416 22.021 7.90301 22.0334Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.90511 21.6313C7.60667 22.2385 7.28528 22.8587 6.80304 23.3457C6.30901 23.8333 5.6497 24.1052 5.19357 24.6381C5.1601 24.6753 5.10978 24.6189 5.14389 24.5934C5.52192 24.1475 6.04103 23.9068 6.48245 23.5402C7.10552 23.0339 7.51742 22.3378 7.89395 21.6437C7.89205 21.6084 7.90448 21.6195 7.90511 21.6313Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M7.7825 21.3306C6.73946 21.9422 6.15666 22.9785 5.40058 23.8703C5.38943 23.8828 5.37637 23.8598 5.38816 23.8592C6.1436 22.9555 6.73882 21.9305 7.7825 21.3306Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M2.33736 24.0702C2.66264 25.9444 3.43273 27.7356 4.21081 29.4555C4.98826 31.1636 6.00314 32.6697 7.09003 34.1956C7.15404 34.2868 7.01827 34.4005 6.94311 34.3217C5.64299 33.0083 4.72407 31.3078 3.96094 29.6463C3.1456 27.8929 2.50076 26.0122 2.33736 24.0702C2.32558 24.0709 2.32558 24.0709 2.33736 24.0702Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M1.13921 26.8539C2.77488 28.0311 4.32724 29.6384 5.11418 31.5233C5.14219 31.6046 5.03799 31.6457 4.98767 31.5892C4.38991 30.8056 3.89381 29.9336 3.27247 29.1512C2.62566 28.3347 1.9218 27.5567 1.13921 26.8539C1.11627 26.8669 1.12742 26.8545 1.13921 26.8539Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.82264 25.8757C4.6637 27.5395 4.72747 29.1676 4.75778 30.833C4.76411 30.9509 4.58728 30.9604 4.58095 30.8425C4.33907 29.2003 4.46075 27.5031 4.82264 25.8757Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.0199 33.9261C22.0199 33.9261 23.0129 34.1447 24.0495 32.753C25.0862 31.3613 26.2413 31.0747 27.6454 31.0229C29.0496 30.9712 30.3239 31.3639 30.8515 30.4015C30.8515 30.4015 31.1136 33.5205 28.5675 34.544C26.0208 35.5556 22.0199 33.9261 22.0199 33.9261Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M30.287 31.5551C29.4411 32.5345 28.3081 33.2338 27.1023 33.6769C25.6416 34.2164 24.2044 34.0926 22.676 34.0328C22.6406 34.0347 22.6381 33.9875 22.6735 33.9856C23.3894 33.8881 24.1063 34.0269 24.8267 34.0119C25.5353 33.9975 26.2245 33.8422 26.8988 33.6287C28.1772 33.2172 29.371 32.5501 30.2752 31.5557C30.2851 31.5197 30.2982 31.5427 30.287 31.5551Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.592 31.6589C26.6126 32.9229 25.0485 33.7399 23.9878 34.0215C23.9412 34.0358 23.9139 33.9663 23.9604 33.952C25.0913 33.6548 26.3861 32.8877 26.592 31.6589C26.5914 31.6471 26.6032 31.6465 26.592 31.6589Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.8076 31.6173C27.7289 32.3545 27.0562 32.8163 26.4726 33.1786C25.7515 33.6193 24.9385 34.1123 24.0728 34.0642C24.0257 34.0667 24.0219 33.996 24.069 33.9934C24.8869 34.0323 25.6317 33.5903 26.307 33.1757C26.9023 32.8127 27.6575 32.3465 27.7833 31.6067C27.7945 31.5943 27.8069 31.6055 27.8076 31.6173Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.7309 31.6387C28.1601 32.899 26.6941 33.7816 25.3715 34.03C25.325 34.0443 25.297 33.9631 25.3435 33.9488C26.6308 33.7023 28.0961 32.8078 28.706 31.6164C28.7172 31.604 28.7414 31.6145 28.7309 31.6387Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.5529 31.5354C29.2041 32.0862 28.7764 32.4875 28.2276 32.8361C27.5195 33.2998 26.7646 33.5531 26.0173 33.948C25.9944 33.961 25.9571 33.9275 25.9912 33.9021C27.2216 33.2567 28.7699 32.807 29.5529 31.5354Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.8197 32.7625C29.0373 33.3839 28.2104 33.6175 27.2281 33.5993C27.2164 33.5999 27.2151 33.5763 27.2269 33.5757C28.1824 33.5362 29.0354 33.3485 29.8073 32.7514C29.8185 32.739 29.8315 32.7619 29.8197 32.7625Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.0062 33.6812C27.9239 34.224 26.7377 34.3705 25.593 33.9708C25.5688 33.9603 25.5787 33.9243 25.6029 33.9348C26.6408 34.3284 28.0126 34.1128 28.9937 33.67C29.0173 33.6687 29.0179 33.6805 29.0062 33.6812Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M27.0617 34.4594C26.6217 34.4121 26.0699 34.2644 25.7129 33.9998C25.688 33.9775 25.7215 33.9402 25.7463 33.9626C26.1139 34.2029 26.6316 34.3761 27.0617 34.4594Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M20.8898 33.7976C20.8898 33.7976 24.7476 35.624 25.5393 38.4781C26.3316 41.344 24.2665 42.519 24.5263 44.0538C24.5263 44.0538 23.5646 43.538 22.2007 42.358C20.8368 41.178 20.6406 39.285 21.202 37.4105C21.7405 35.549 21.3774 34.2916 20.8898 33.7976Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M24.2864 43.5467C23.3836 42.3656 23.2749 40.5625 22.9743 39.148C22.6251 37.4879 22.2666 35.8756 21.4186 34.396C21.3801 34.3389 21.4712 34.2749 21.5098 34.332C22.2807 35.6975 22.6434 37.1677 22.9614 38.6876C23.1348 39.4941 23.2839 40.2901 23.4573 41.0966C23.6313 41.9148 23.7992 42.8398 24.2976 43.5343C24.31 43.5454 24.287 43.5585 24.2864 43.5467Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.9945 42.3864C22.7614 41.3467 23.1339 40.3572 23.0428 39.3216C23.0409 39.2863 23.088 39.2837 23.0899 39.3191C23.1797 40.3311 22.7626 41.3702 22.9945 42.3864Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.6187 41.9928C21.8045 40.7005 22.7588 38.8758 22.6251 37.4879C22.6232 37.4525 22.6704 37.45 22.6723 37.4853C22.7686 38.1777 22.6062 38.8958 22.5126 39.5748C22.3992 40.3257 22.2265 41.2926 22.6299 41.9804C22.6305 41.9921 22.6194 42.0046 22.6187 41.9928Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.8842 40.4241C21.8471 39.9532 21.9174 39.5002 22.0584 39.0433C22.2718 38.3934 22.6534 37.7936 22.5447 37.0901C22.544 37.0783 22.5676 37.077 22.5682 37.0888C22.7829 38.2241 21.8458 39.2676 21.8842 40.4241Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.6353 42.5584C24.6401 41.766 24.4333 40.9968 24.0993 40.2817C23.764 39.543 23.3798 38.7715 22.7934 38.2C22.7685 38.1777 22.8014 38.1287 22.8269 38.1628C23.9853 39.2592 24.5989 40.9997 24.636 42.5702C24.6478 42.5696 24.636 42.5702 24.6353 42.5584Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.9929 41.5106C24.815 39.9595 24.0102 38.182 22.6076 37.3824C22.5592 37.3613 22.6019 37.2763 22.651 37.3091C24.0902 38.1304 24.8603 39.9216 25.0164 41.5093C25.0289 41.5205 25.0053 41.5217 24.9929 41.5106Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M25.1583 40.6268C24.8533 39.7919 24.4554 38.9857 23.9321 38.2689C23.4599 37.6203 22.6893 37.1415 22.3318 36.4277C22.3193 36.4165 22.3423 36.4035 22.3547 36.4146C22.8432 37.1451 23.6039 37.6599 24.1041 38.3897C24.5783 39.0736 24.9142 39.8241 25.1701 40.6261C25.1701 40.6261 25.1589 40.6386 25.1583 40.6268Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M25.0851 39.4839C24.8188 37.6065 23.3338 36.3739 21.9161 35.2914C21.8912 35.2691 21.9247 35.2318 21.9495 35.2541C23.3791 36.336 24.8994 37.5667 25.0851 39.4839Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.4329 38.4031C21.5323 37.3928 21.8838 36.4518 22.0074 35.452C22.0068 35.4402 22.0304 35.4389 22.0317 35.4625C21.9434 36.4604 21.569 37.4145 21.4571 38.4137C21.4571 38.4137 21.4335 38.4149 21.4329 38.4031Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.8663 31.9682C16.8663 31.9682 19.0902 33.0902 19.3531 34.684C19.616 36.2778 18.8341 37.3484 19.2641 38.5313C19.2641 38.5313 17.9645 37.6671 17.7135 35.6352C17.4737 33.5908 17.7976 33.0178 16.8663 31.9682Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M19.003 38.0724C18.6012 37.1954 18.6449 36.2472 18.5471 35.3067C18.4557 34.484 18.3363 33.1425 17.5416 32.6532C17.5173 32.6427 17.539 32.606 17.5632 32.6165C18.1487 32.9516 18.3686 33.7438 18.4965 34.3635C18.7156 35.5814 18.5848 36.8889 19.003 38.0724Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M18.4469 37.4048C18.3238 36.6547 18.3578 35.9672 18.5786 35.2341C18.5891 35.2099 18.6133 35.2204 18.6146 35.244C18.4397 35.9509 18.4082 36.6857 18.4704 37.4035C18.4711 37.4153 18.4593 37.4159 18.4469 37.4048Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.2023 36.5012C19.1084 36.2934 19.0722 36.0589 18.9665 35.8518C18.8601 35.6329 18.6967 35.4525 18.5786 35.2342C18.5662 35.223 18.5891 35.21 18.6016 35.2211C18.7302 35.4152 18.893 35.5838 18.9869 35.7916C19.0821 36.0229 19.1196 36.281 19.2023 36.5012C19.203 36.513 19.203 36.513 19.2023 36.5012Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.1741 35.5333C19.0105 35.1282 18.8746 34.5799 18.4382 34.3787C18.4022 34.3688 18.4344 34.3079 18.4593 34.3302C18.9094 34.5662 19.0328 35.1034 19.1741 35.5333C19.1865 35.5444 19.1859 35.5326 19.1741 35.5333Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M24.8026 35.3254C24.8026 35.3254 26.9424 36.2036 27.4036 37.5267C27.8536 38.8622 27.535 39.7542 27.9507 40.8905C27.9507 40.8905 26.699 40.6976 26.2442 39.055C25.7895 37.4124 25.9835 36.6216 25.4529 35.988C24.9 35.3793 24.8026 35.3254 24.8026 35.3254Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M27.5619 40.474C27.1989 39.8787 27.0567 39.2124 26.8667 38.5369C26.6462 37.733 26.3215 36.9701 25.8126 36.2999C25.7995 36.2769 25.8336 36.2514 25.8467 36.2744C26.2909 36.8417 26.6199 37.4625 26.8222 38.1491C27.0533 38.9289 27.1441 39.7398 27.5724 40.4498C27.5855 40.4728 27.5749 40.497 27.5619 40.474Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.6054 35.6543C26.6054 35.6543 30.0443 36.2854 31.5499 34.8213C33.055 33.3454 34.3527 32.4126 34.3527 32.4126C34.3527 32.4126 33.19 32.5578 31.8794 33.0301C29.5354 33.8536 29.3805 35.8127 26.6054 35.6543Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M33.3507 32.9037C32.5339 33.3259 31.8929 33.9397 31.1408 34.4648C30.4234 34.9762 29.5067 35.2974 28.6817 35.5663C28.6699 35.5669 28.6568 35.544 28.6686 35.5434C29.5344 35.154 30.476 34.8552 31.2498 34.2934C31.9567 33.8062 32.604 33.3103 33.3507 32.9037C33.35 32.8919 33.3624 32.9031 33.3507 32.9037Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M31.8135 33.3409C31.0725 33.8536 30.6354 34.7402 29.8056 35.1394C29.7944 35.1519 29.7813 35.1289 29.7925 35.1165C30.5857 34.6956 31.0228 33.809 31.8135 33.3409Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M31.6888 34.5419C30.9546 34.9597 30.2165 35.3067 29.3547 35.3293C29.3429 35.33 29.3416 35.3064 29.3534 35.3058C30.1649 35.2267 30.9625 34.8883 31.6888 34.5419C31.6999 34.5295 31.6999 34.5295 31.6888 34.5419Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M32.1481 34.0678C31.7618 34.3605 31.3233 34.5614 30.8549 34.6456C30.8314 34.6469 30.8295 34.6115 30.853 34.6103C31.3078 34.4913 31.7481 34.3257 32.1481 34.0678C32.1475 34.056 32.1475 34.056 32.1481 34.0678Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M28.9567 38.0464C28.9567 38.0464 31.8122 38.6024 32.4135 40.9939C33.0142 43.3735 31.7691 45.9468 31.7691 45.9468C31.7691 45.9468 32.0404 45.4948 30.7943 44.7459C29.5363 43.9977 28.2796 42.6109 28.4648 40.5556C28.6382 38.5009 28.9567 38.0464 28.9567 38.0464Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M31.7741 45.3791C31.8099 44.0648 31.8291 42.8815 31.3252 41.6434C30.8213 40.4054 30.0837 39.4401 29.1464 38.4973C29.1091 38.4638 29.1655 38.4135 29.191 38.4476C29.6146 38.8505 29.9991 39.1845 30.3322 39.6632C30.7168 40.2219 31.0556 40.8067 31.3138 41.4312C31.557 41.9975 31.7419 42.5787 31.822 43.1892C31.932 43.9164 31.8409 44.6424 31.7741 45.3791Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.6019 43.2375C29.5205 42.6034 29.5144 42.048 29.6701 41.4249C29.8542 40.6701 30.0756 39.9489 29.8563 39.1685C29.8563 39.1685 29.8675 39.1561 29.8681 39.1679C30.04 39.7261 29.9866 40.2729 29.8755 40.8463C29.6945 41.66 29.4849 42.3807 29.6019 43.2375C29.6025 43.2492 29.6143 43.2486 29.6019 43.2375Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.1058 42.3655C28.888 41.1713 29.7996 40.0937 29.619 38.9329C29.6178 38.9094 29.6643 38.895 29.6656 38.9186C29.7629 39.41 29.6107 39.8792 29.4704 40.3479C29.2799 40.9847 29.0586 41.706 29.1176 42.3649C29.13 42.376 29.1064 42.3773 29.1058 42.3655Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.0695 40.3694C29.176 40.1509 29.2583 39.9218 29.3406 39.6928C29.4445 39.4271 29.5702 39.1248 29.5426 38.8307C29.5407 38.7953 29.5996 38.7921 29.6015 38.8275C29.7001 39.3424 29.3427 39.9528 29.0937 40.38C29.0832 40.4042 29.059 40.3936 29.0695 40.3694Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M31.2855 44.6486C30.7395 43.5074 31.5285 42.1291 31.0762 40.971C31.0756 40.9593 31.0873 40.9586 31.088 40.9704C31.2541 41.4226 31.2504 42.0139 31.2292 42.4998C31.1946 43.1756 30.9559 44.016 31.2855 44.6486C31.2861 44.6604 31.2979 44.6597 31.2855 44.6486Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.7679 43.8133C30.7463 43.4124 30.7118 42.9887 30.7728 42.5834C30.8603 42.0112 31.116 41.4891 30.9894 40.8929C30.9875 40.8575 31.0229 40.8556 31.0248 40.891C31.1245 41.867 30.7978 42.8303 30.7921 43.8238C30.7927 43.8356 30.7691 43.8368 30.7679 43.8133Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M32.3051 42.9386C32.1762 42.5199 32.0008 42.1155 31.7684 41.7496C31.5359 41.3838 31.2378 41.116 30.9601 40.7881C30.9476 40.7769 30.9699 40.7521 30.9824 40.7632C31.6624 41.3179 32.1168 42.0738 32.3163 42.9262C32.3175 42.9497 32.3057 42.9504 32.3051 42.9386Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M32.1567 41.717C31.9801 41.289 31.6979 40.8786 31.3495 40.5544C31.088 40.3083 30.7155 40.1983 30.477 39.9392C30.4646 39.928 30.4869 39.9032 30.4993 39.9143C30.6627 40.0947 30.8917 40.177 31.0886 40.3201C31.2482 40.4298 31.3972 40.5637 31.5352 40.71C31.811 41.0025 31.9956 41.3591 32.1567 41.717C32.1574 41.7288 32.1685 41.7164 32.1567 41.717Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M31.549 40.3072C31.1744 39.9372 30.6573 39.7758 30.1843 39.5529C30.1719 39.5417 30.183 39.5293 30.1948 39.5287C30.7026 39.7379 31.1837 39.8894 31.549 40.3072C31.5496 40.319 31.5607 40.3066 31.549 40.3072Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.7357 38.1518C30.7357 38.1518 31.5128 38.9732 34.414 39.2785C37.3146 39.572 39.0359 40.8038 39.8429 42.8413C40.6498 44.8788 40.7995 46.124 41.3528 46.5199C41.3528 46.5199 40.6892 46.2718 38.6265 46.1697C36.5638 46.0677 34.5065 45.185 33.5824 42.7282C32.6453 40.2483 31.6637 39.1424 30.7357 38.1518Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M40.4064 45.8495C39.718 45.5791 39.1504 45.1366 38.5703 44.683C37.8922 44.1637 37.2488 43.6308 36.6153 43.0618C35.2358 41.8117 33.8365 40.6336 32.379 39.4705C32.3541 39.4482 32.3882 39.4227 32.4013 39.4456C33.8308 40.5275 35.1692 41.6734 36.499 42.8789C37.1083 43.4373 37.7282 43.9716 38.3933 44.4679C39.0459 44.9531 39.6664 45.4991 40.4176 45.8371C40.4294 45.8364 40.4188 45.8606 40.4064 45.8495Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M39.959 44.1238C39.5794 43.6594 38.8052 43.3345 38.2528 43.175C37.6762 43.0049 37.004 42.8164 36.404 42.8722C36.3804 42.8735 36.3785 42.8381 36.4021 42.8369C37.1075 42.7635 37.8734 42.9352 38.5364 43.1716C38.9945 43.3361 39.745 43.6623 39.9701 44.1113C39.9826 44.1225 39.9708 44.1231 39.959 44.1238Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M39.6006 43.1735C39.0837 42.5746 38.222 42.1598 37.4791 41.975C36.7721 41.8002 35.8562 41.6957 35.1389 41.7696C35.1036 41.7715 35.101 41.7244 35.1364 41.7225C36.018 41.6278 37.0787 41.7837 37.921 42.0577C38.5225 42.25 39.1949 42.6632 39.6006 43.1735Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.9568 42.1913C38.1489 41.679 37.2247 41.4212 36.2944 41.2702C35.5429 41.145 34.7269 41.1415 34.0248 40.8364C34.0006 40.8259 34.0229 40.801 34.0353 40.8122C34.8467 41.1706 35.8153 41.154 36.6761 41.3325C37.5003 41.4892 38.2365 41.7689 38.9568 42.1913C38.9686 42.1907 38.9679 42.1789 38.9568 42.1913Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.0801 41.2806C37.1993 40.9496 36.3441 40.8773 35.4208 40.8559C34.9591 40.8452 34.3493 40.9371 33.9345 40.6993C33.9103 40.6887 33.9326 40.6639 33.945 40.6751C34.2859 40.8577 34.732 40.7983 35.0987 40.8023C35.4772 40.8056 35.8564 40.8207 36.2231 40.8247C36.8746 40.8488 37.4749 41.0176 38.0801 41.2806Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.6818 45.6584C37.7925 44.9494 36.8248 44.1028 36.4923 42.9739C36.478 42.9273 36.5481 42.9118 36.5506 42.9589C36.8812 44.0525 37.8384 44.9233 38.6818 45.6584Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M37.8901 45.6654C37.3044 45.1057 36.7139 44.6763 36.2744 43.9787C36.0805 43.6699 35.8984 43.3605 35.7267 43.0268C35.5277 42.6237 35.3833 42.1349 35.1272 41.7703C35.1011 41.7244 35.17 41.6853 35.1954 41.7194C35.6062 42.3239 35.8373 43.1037 36.2146 43.7455C36.6814 44.5126 37.2882 45.0238 37.8901 45.6654Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M36.6253 45.012C36.2505 44.4174 35.82 43.8848 35.5481 43.2255C35.288 42.5655 35.1067 41.8304 34.5595 41.3278C34.5222 41.2943 34.578 41.2322 34.6153 41.2657C34.9885 41.6121 35.2273 42.0959 35.3948 42.5716C35.5746 43.0585 35.742 43.5343 35.9913 43.9938C36.176 44.3504 36.4295 44.6679 36.6371 45.0114C36.6489 45.0108 36.6253 45.012 36.6253 45.012Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M35.7844 44.7617C35.1948 44.1312 34.6586 43.3915 34.2513 42.6331C33.831 41.8517 33.5484 40.992 33.2087 40.1708C33.1944 40.1242 33.2639 40.0969 33.2782 40.1434C33.6042 40.9298 33.8725 41.743 34.2562 42.5028C34.6535 43.2972 35.2153 44.071 35.8178 44.7244C35.8309 44.7473 35.7974 44.7846 35.7844 44.7617Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M41.7412 32.3942C41.7412 32.3942 40.7978 33.9818 39.9697 35.9534C39.1415 37.925 35.3579 39.9017 29.5586 36.9263C29.5586 36.9263 31.4586 37.5218 32.5759 36.7524C33.6933 35.983 33.1582 34.6048 35.4306 33.5488C37.703 32.4928 39.4609 33.0841 40.2514 33.0535C40.9004 33.0305 41.7412 32.3942 41.7412 32.3942Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M41.0823 33.1154C40.6203 33.3175 40.3098 33.7007 39.9372 34.0281C39.5758 34.3431 39.215 34.6699 38.8405 34.9619C38.1375 35.5199 37.3853 36.045 36.604 36.4653C35.0064 37.3196 33.3381 37.5156 31.5459 37.3872C31.5341 37.3878 31.5329 37.3642 31.5447 37.3636C33.5583 37.4328 35.3531 37.1709 37.1049 36.1074C37.9291 35.602 38.7016 35.0167 39.4356 34.3743C39.9446 33.945 40.4329 33.3513 41.0823 33.1154Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M39.1669 33.3364C38.6312 33.708 38.3534 34.4796 38.004 35.0186C37.7426 35.4346 37.4825 35.8742 37.0844 36.1675C37.0844 36.1675 37.0726 36.1681 37.0838 36.1557C37.5883 35.6439 37.9333 35.0224 38.3025 34.4114C38.5409 34.0084 38.7539 33.5714 39.1539 33.3134C39.1775 33.3122 39.1781 33.324 39.1669 33.3364Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.4814 33.3378C37.4497 34.1617 37.4087 35.8191 36.3137 36.5636C36.3019 36.5643 36.3012 36.5525 36.3012 36.5525C36.9511 36.1038 37.1785 35.2758 37.5576 34.6288C37.8283 34.165 38.0747 33.6907 38.4814 33.3378C38.4808 33.326 38.4932 33.3372 38.4814 33.3378Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M37.7965 33.5755C37.5635 33.8599 37.4553 34.2677 37.2956 34.5955C37.1253 34.9475 36.9551 35.2995 36.7606 35.641C36.5234 36.0675 36.2552 36.5785 35.8075 36.8272C35.7957 36.8278 35.7951 36.816 35.7951 36.816C36.3624 36.3718 36.6924 35.692 37.0131 35.0599C37.2472 34.5744 37.4271 33.9618 37.7965 33.5755C37.7959 33.5637 37.8083 33.5748 37.7965 33.5755Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M36.136 33.4756C35.7328 33.6745 35.5163 34.2655 35.3119 34.643C35.0636 35.0819 34.8748 35.5295 34.6382 35.9679C34.3911 36.4304 34.0165 37.1599 33.4831 37.3541C33.4713 37.3547 33.4582 37.3318 33.47 37.3311C34.2906 36.9797 34.6839 35.7171 35.0703 34.987C35.3285 34.512 35.6044 33.7051 36.1235 33.4644C36.1353 33.4638 36.1478 33.4749 36.136 33.4756Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M36.0409 33.9062C35.6898 34.6344 35.4685 35.3557 34.9964 36.0313C34.6779 36.4859 34.2424 37.1832 33.6724 37.3557C33.6606 37.3563 33.6475 37.3333 33.6593 37.3327C34.2641 37.1465 34.8395 36.1934 35.143 35.6806C35.5023 35.1056 35.7412 34.4898 36.0409 33.9062C36.0403 33.8944 36.0521 33.8938 36.0409 33.9062Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.6881 36.9681C38.045 37.3219 37.2927 37.6224 36.5487 37.6387C35.9462 37.6474 35.006 37.5324 34.4919 37.2053C34.4677 37.1947 34.4893 37.1581 34.5135 37.1686C34.747 37.3334 35.1268 37.3603 35.4018 37.4165C35.7723 37.4912 36.1546 37.5653 36.5436 37.5444C37.2752 37.5169 38.0431 37.2865 38.6881 36.9681Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M38.6095 36.6058C37.4084 37.356 36.1779 37.3393 34.8213 37.1757C34.7977 37.177 34.8076 37.141 34.8194 37.1403C35.4232 37.1552 36.0078 37.2539 36.6183 37.1738C37.2995 37.0899 37.9999 36.9223 38.5971 36.5946C38.6083 36.5822 38.6095 36.6058 38.6095 36.6058Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M40.0535 34.8732C39.3245 35.6099 38.2627 36.0925 37.2234 36.1128C37.1998 36.1141 37.1979 36.0787 37.2215 36.0775C38.2341 35.9995 39.299 35.5758 40.0535 34.8732Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M40.3254 34.4329C39.6536 35.131 38.7278 35.7246 37.7381 35.7895C37.7028 35.7914 37.7002 35.7443 37.7356 35.7424C38.6774 35.6682 39.6262 35.0615 40.3254 34.4329Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M35.5357 37.9295C34.3769 38.1454 33.4606 37.8163 32.3886 37.4482C32.3526 37.4384 32.3612 37.3788 32.3972 37.3887C32.864 37.4937 33.2893 37.7073 33.756 37.8123C34.3425 37.9463 34.924 37.986 35.5227 37.9066C35.5456 37.8935 35.5469 37.9171 35.5357 37.9295Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M32.43 39.5388C29.6251 37.0647 26.1096 36.1066 22.7139 34.7401C19.669 33.5203 16.5532 32.0797 14.0595 29.8963C12.9062 28.8942 11.9077 27.6945 11.3459 26.2586C11.2781 26.0968 11.5454 26.0115 11.6015 26.174C12.7152 29.0818 15.6194 30.983 18.2494 32.4024C21.1594 33.9723 24.2649 34.9997 27.3104 36.2313C29.2317 37.003 31.0465 37.9933 32.43 39.5388C32.4424 39.5499 32.4536 39.5375 32.43 39.5388Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M30.2881 39.7245C29.8245 39.0164 29.16 38.5318 28.5612 37.9492C28.0376 37.4453 27.4576 36.9917 27.1156 36.348C27.0895 36.3021 27.1465 36.2635 27.1727 36.3094C27.6344 36.9822 28.3721 37.5101 28.9467 38.0822C29.4697 38.5743 29.9573 39.0684 30.2881 39.7245Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M33.2597 37.3777C31.4213 37.4883 29.6314 37.1824 27.8642 36.6388C27.8282 36.629 27.8251 36.57 27.8722 36.5675C28.7713 36.5783 29.6286 36.9106 30.5012 37.0884C31.4099 37.2761 32.3351 37.3328 33.2584 37.3542C33.2709 37.3653 33.2715 37.3771 33.2597 37.3777Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M29.9861 35.2008C29.1822 35.4213 28.4789 35.7547 27.6269 35.7413C26.7867 35.7273 25.9019 35.763 25.0777 35.6063C25.0417 35.5964 25.0379 35.5256 25.0857 35.5349C25.8918 35.5744 26.7084 35.5896 27.5132 35.6055C28.3776 35.6301 29.1424 35.3407 29.9849 35.1772C29.9966 35.1766 30.0097 35.1996 29.9861 35.2008Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M26.4628 33.8767C25.6365 34.1221 24.7915 34.2384 23.9258 34.1903C23.546 34.1634 23.1762 34.1005 22.8069 34.0494C22.2471 33.973 21.7204 34.0723 21.1632 34.0431C21.1036 34.0344 21.0991 33.9519 21.1581 33.9488C21.9776 33.7983 22.6814 33.9143 23.5018 34.0003C24.4885 34.101 25.4807 34.0832 26.4628 33.8767Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.9322 38.8072C22.6123 37.914 22.3966 36.9797 22.0774 36.0983C21.8565 35.5072 21.55 34.4241 21.0104 34.063C20.9123 33.9973 20.9984 33.839 21.0965 33.9046C21.5995 34.2441 21.7777 34.9203 22.0066 35.4401C22.4787 36.5261 22.6698 37.6626 22.9912 38.804C22.98 38.8165 22.9341 38.8426 22.9322 38.8072Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M18.6272 36.5792C18.5988 34.9491 18.0375 32.8629 16.7258 31.7747C16.6637 31.7189 16.753 31.6196 16.8151 31.6754C18.164 32.797 18.7142 34.8956 18.6508 36.5779C18.6514 36.5897 18.6279 36.591 18.6272 36.5792Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.3769 30.3392C16.8896 29.9807 17.5911 29.612 18.2921 29.4561C18.6426 29.3782 18.9621 29.3846 19.3084 29.4488C19.4878 29.4865 19.4824 29.605 19.6586 29.5837C19.7411 29.5793 19.9196 29.3805 20.012 29.3401C20.9677 28.8632 22.4182 29.2345 23.0198 30.089C23.55 29.8359 24.1404 30.0406 24.5614 30.3963C24.8217 30.6188 24.9615 30.8005 25.2533 30.9503C25.4967 31.0792 25.7512 31.1955 25.9158 31.3995C24.7081 31.1451 24.6295 32.5445 24.1115 33.2462C23.4497 34.133 22.5898 34.191 21.7296 34.6864C22.7049 35.6745 23.61 37.7777 22.2118 38.8222C22.4796 39.1862 22.5797 39.2872 22.4014 39.7106C23.6436 39.0646 23.8314 41.2418 23.9488 41.8857C23.5112 41.2235 22.9642 42.045 22.7251 42.4362C22.3999 42.9857 21.9345 43.5663 21.3485 43.8815C20.2099 44.4747 18.0605 44.5192 17.0109 43.6888C16.9647 44.5899 16.6804 45.681 16.0793 46.3754C15.4447 47.107 14.7335 47.0743 13.8931 46.8356C13.5265 48.1558 12.0254 48.603 10.8761 47.8962C9.64169 47.1467 8.99567 45.9045 8.70521 44.6787C7.74975 45.3802 6.7787 46.0117 5.5638 46.0651C4.41963 46.1147 3.60342 45.8866 2.57161 45.3863C1.29768 44.7808 -0.192329 43.4539 0.75672 41.9724C1.39047 41.0043 2.29672 40.7074 3.26548 40.2534C2.37236 39.4737 1.57118 38.2044 0.20555 38.3132C0.443624 38.1231 0.473055 37.7904 0.625441 37.5458C0.788982 37.2887 1.01463 37.0874 1.27628 36.8961C1.45858 36.768 2.0398 36.5831 2.12588 36.4248C2.22312 36.2541 2.00601 35.7337 2.00704 35.5326C2.03971 34.1594 3.4566 33.2439 4.61905 32.8741C4.45431 32.008 4.32392 31.3411 4.37139 30.4637C4.39932 29.8828 4.60819 28.4883 5.41617 28.5632C5.12643 28.0112 5.60653 27.2643 6.16291 27.057C6.96242 26.754 7.40123 27.4398 8.01133 27.5726C7.85127 27.0137 8.52475 27.2258 8.76875 27.3664C8.38588 26.181 9.99979 26.7328 10.5019 26.8359C10.5136 26.1732 10.6047 25.4471 11.4099 25.2501C10.9719 24.8007 11.6186 24.2931 11.9596 24.0383C12.3331 24.6094 13.5308 24.6752 14.1348 24.9147C14.9325 25.2383 15.5332 25.8563 15.9869 26.6005C16.8024 27.9163 16.4462 28.9877 16.3769 30.3392C16.4017 30.3616 16.4116 30.3256 16.3769 30.3392Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.3769 30.3392C16.8896 29.9807 17.5911 29.612 18.2921 29.4561C18.6426 29.3782 18.9621 29.3846 19.3084 29.4488C19.4878 29.4865 19.4824 29.605 19.6586 29.5837C19.7411 29.5793 19.9196 29.3805 20.012 29.3401C20.9677 28.8632 22.4182 29.2345 23.0198 30.089C23.55 29.8359 24.1404 30.0406 24.5614 30.3963C24.8217 30.6188 24.9615 30.8005 25.2533 30.9503C25.4967 31.0792 25.7512 31.1955 25.9158 31.3995C24.7081 31.1451 24.6295 32.5445 24.1115 33.2462C23.4497 34.133 22.5898 34.191 21.7296 34.6864C22.7049 35.6745 23.61 37.7777 22.2118 38.8222C22.4796 39.1862 22.5797 39.2872 22.4014 39.7106C23.6436 39.0646 23.8314 41.2418 23.9488 41.8857C23.5112 41.2235 22.9642 42.045 22.7251 42.4362C22.3999 42.9857 21.9345 43.5663 21.3485 43.8815C20.2099 44.4747 18.0605 44.5192 17.0109 43.6888C16.9647 44.5899 16.6804 45.681 16.0793 46.3754C15.4447 47.107 14.7335 47.0743 13.8931 46.8356C13.5265 48.1558 12.0254 48.603 10.8761 47.8962C9.64169 47.1467 8.99567 45.9045 8.70521 44.6787C7.74975 45.3802 6.7787 46.0117 5.5638 46.0651C4.41963 46.1147 3.60342 45.8866 2.57161 45.3863C1.29768 44.7808 -0.192329 43.4539 0.75672 41.9724C1.39047 41.0043 2.29672 40.7074 3.26548 40.2534C2.37236 39.4737 1.57118 38.2044 0.20555 38.3132C0.443624 38.1231 0.473055 37.7904 0.625441 37.5458C0.788982 37.2887 1.01463 37.0874 1.27628 36.8961C1.45858 36.768 2.0398 36.5831 2.12588 36.4248C2.22312 36.2541 2.00601 35.7337 2.00704 35.5326C2.03971 34.1594 3.4566 33.2439 4.61905 32.8741C4.45431 32.008 4.32392 31.3411 4.37139 30.4637C4.39932 29.8828 4.60819 28.4883 5.41617 28.5632C5.12643 28.0112 5.60653 27.2643 6.16291 27.057C6.96242 26.754 7.40123 27.4398 8.01133 27.5726C7.85127 27.0137 8.52475 27.2258 8.76875 27.3664C8.38588 26.181 9.99979 26.7328 10.5019 26.8359C10.5136 26.1732 10.6047 25.4471 11.4099 25.2501C10.9719 24.8007 11.6186 24.2931 11.9596 24.0383C12.3331 24.6094 13.5308 24.6752 14.1348 24.9147C14.9325 25.2383 15.5332 25.8563 15.9869 26.6005C16.8024 27.9163 16.4462 28.9877 16.3769 30.3392ZM16.3769 30.3392C16.4116 30.3256 16.4017 30.3616 16.3769 30.3392Z",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M21.7179 34.6872C20.7477 33.7935 17.8753 33.1437 15.5896 35.7138Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.7179 34.6872C20.7477 33.7935 17.8753 33.1437 15.5896 35.7138",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M17.0115 43.7007C15.5715 42.6431 13.9983 41.3088 13.9454 38.7815Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M17.0115 43.7007C15.5715 42.6431 13.9983 41.3088 13.9454 38.7815",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M13.4524 39.068C13.4524 39.068 12.3558 41.3259 9.49768 41.8223C6.63952 42.3186 4.53759 41.4856 3.28969 40.2639",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.4524 39.068C13.4524 39.068 12.3558 41.3259 9.49768 41.8223C6.63952 42.3186 4.53759 41.4856 3.28969 40.2639",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M0.217974 38.3245C0.217974 38.3245 1.33532 37.5551 2.17558 38.2312C2.17558 38.2312 3.10723 37.3063 4.65452 38.8193C6.21424 40.3435 8.60867 42.0002 10.1515 41.669",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M0.217974 38.3245C0.217974 38.3245 1.33532 37.5551 2.17558 38.2312C2.17558 38.2312 3.10723 37.3063 4.65452 38.8193C6.21424 40.3435 8.60867 42.0002 10.1515 41.669",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M9.49835 41.834C9.49835 41.834 8.46527 43.0718 8.71831 44.7016Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M9.49835 41.834C9.49835 41.834 8.46527 43.0718 8.71831 44.7016",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M11.2669 36.679C11.2669 36.679 9.43905 37.4274 7.56001 36.1213C5.68096 34.8153 4.95495 33.6247 4.62707 32.8029",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.2669 36.679C11.2669 36.679 9.43905 37.4274 7.56001 36.1213C5.68096 34.8153 4.95495 33.6247 4.62707 32.8029",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M10.5262 26.8464C11.3152 27.2297 13.045 28.1772 13.5738 30.0996C14.1033 32.0338 13.9613 34.4533 13.9613 34.4533",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.5262 26.8464C11.3152 27.2297 13.045 28.1772 13.5738 30.0996C14.1033 32.0338 13.9613 34.4533 13.9613 34.4533",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M16.3769 30.3394C15.3713 31.2091 14.6848 32.7357 14.7552 34.7064Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.3769 30.3394C15.3713 31.2091 14.6848 32.7357 14.7552 34.7064",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M11.9838 24.0489C11.9838 24.0489 11.7244 25.1624 12.9148 25.9734C14.1051 26.7844 15.9399 27.2652 16.4572 29.4128",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.9838 24.0489C11.9838 24.0489 11.7244 25.1624 12.9148 25.9734C14.1051 26.7844 15.9399 27.2652 16.4572 29.4128",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M12.2009 34.9144C12.5033 34.6026 12.9807 34.2459 13.4252 34.3758C13.5096 34.4067 13.6481 34.5648 13.7307 34.5604C13.7778 34.5578 13.8671 34.4585 13.9136 34.4441C13.983 34.4168 14.0649 34.4005 14.1357 34.3967C14.4298 34.3691 14.7302 34.4594 14.898 34.7223C14.9751 34.8364 15.0193 34.9996 15.0623 35.1391C15.1046 35.2669 15.0787 35.4456 15.1322 35.561C15.5614 35.4079 15.6265 35.9601 15.6057 36.2331C15.5734 36.7314 15.3412 37.2523 15.0929 37.6912C14.608 38.5685 13.6458 39.3651 12.6189 39.3965C11.7812 39.4297 11.3083 38.7694 11.0916 38.0362C10.9602 37.5703 10.9199 37.0404 11.3154 36.7C11.1285 36.5208 11.301 35.9913 11.3964 35.7852C11.5778 35.4208 11.9318 35.189 12.2009 34.9144Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                i.jsx("path", {
                  d: "M14.555 38.4649C13.8597 38.7269 13.0856 38.402 12.6302 37.8471C12.5158 37.6995 12.327 37.485 12.3516 37.2827C12.3861 37.0444 12.6423 36.9716 12.8458 37.0197C12.9532 37.0376 12.9751 37.2256 12.8585 37.2555C12.6829 37.2886 12.4695 37.2764 12.5535 37.5202C12.6095 37.6827 12.7598 37.8401 12.8847 37.9635C13.2965 38.367 13.9725 38.6263 14.555 38.4649C14.5668 38.4643 14.5662 38.4525 14.555 38.4649Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M14.7953 38.0974C14.2356 38.021 13.6558 37.792 13.3456 37.3003C13.1393 36.9803 13.1171 36.5677 13.5868 36.507C13.7512 36.4864 13.7651 36.7458 13.6007 36.7664C13.1422 36.8147 13.4549 37.3536 13.6418 37.5327C13.9648 37.8227 14.3751 37.9781 14.7953 38.0974C14.8071 38.0967 14.8065 38.0849 14.7953 38.0974Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.2681 37.4336C15.2421 36.9502 14.9909 36.4553 14.6989 36.0809C14.5976 35.9562 14.0677 35.3344 13.9172 35.6144C13.8528 35.7361 13.6467 35.6408 13.7222 35.5067C13.9359 35.0814 14.4079 35.5053 14.5968 35.7198C15.0111 36.1705 15.3289 36.8037 15.291 37.4205C15.2923 37.4441 15.2687 37.4454 15.2681 37.4336Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.5727 36.7196C15.8813 36.3011 16.1147 35.8038 16.193 35.2794C16.268 34.696 15.9816 33.7656 15.2587 33.7334C15.093 33.7305 15.138 33.468 15.2709 33.52C16.7637 34.0191 16.3505 35.7911 15.5976 36.7419C15.5864 36.7543 15.5616 36.732 15.5727 36.7196Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.4721 35.5073C15.6583 35.0125 15.2823 34.3943 15.0014 34.0074C14.8603 33.8022 14.0832 32.9808 13.823 33.4204C13.7468 33.5427 13.5866 33.4213 13.6634 33.3107C14.2806 32.4736 15.9037 34.7393 15.4845 35.5184L15.4721 35.5073Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.3494 36.6745C11.0155 36.6215 10.8365 36.371 10.807 36.0415C10.7813 35.7828 10.8478 35.259 11.1505 35.1718C11.2088 35.1569 11.2833 35.2238 11.2511 35.2846C11.1966 35.3703 11.1166 35.4219 11.0503 35.5082C10.9505 35.6318 10.888 35.7889 10.8851 35.9546C10.8439 36.2878 11.013 36.5743 11.3494 36.6745Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.2726 38.5467C10.8183 38.4529 10.3869 38.346 10.0385 38.0218C9.78939 37.7869 9.58407 37.2659 9.87602 36.9783C9.94359 36.9156 10.0529 36.9688 10.0461 37.0638C10.0097 37.2667 9.86344 37.4046 9.92263 37.6261C9.96812 37.8128 10.1302 37.9696 10.278 38.0799C10.537 38.2788 10.9374 38.4701 11.2726 38.5467C11.2732 38.5585 11.2844 38.5461 11.2726 38.5467Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.677 39.0679C13.1002 39.3353 12.2328 38.8144 11.8774 38.3605C11.5984 38.009 11.2011 37.2146 11.8419 37.0383C11.9815 36.9953 12.0518 37.2043 11.9122 37.2473C11.3887 37.4055 11.8103 38.2104 12.0475 38.446C12.4333 38.8036 13.1423 39.2385 13.677 39.0679Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M13.0394 39.3031C12.2618 39.7941 10.9923 39.2711 10.5064 38.5878C10.4815 38.5655 10.515 38.5283 10.551 38.5382C10.9763 38.7518 11.2447 39.1275 11.7134 39.2679C12.1342 39.399 12.6226 39.4673 13.0394 39.3031Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.046 37.8494C10.5334 37.7705 10.0753 37.6059 9.66661 37.2613C9.34427 36.9831 8.96465 36.5187 9.08269 36.0749C9.12289 35.9427 9.28983 35.9692 9.30859 36.0983C9.34356 36.3092 9.31895 36.5115 9.40045 36.7081C9.48258 36.9165 9.62301 37.11 9.79692 37.2662C10.1441 37.5667 10.5942 37.8027 11.046 37.8494C11.0578 37.8487 11.0572 37.8369 11.046 37.8494Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.0158 38.6909C19.9097 38.6621 18.1335 35.9672 15.9611 37.1243C15.9381 37.1374 15.9244 37.1026 15.948 37.1014C18.1074 35.9213 19.9401 38.5659 22.0152 38.6791C22.0263 38.6667 22.0276 38.6902 22.0158 38.6909Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M22.1412 39.9256C20.9555 40.0838 19.9221 39.7728 18.918 39.1292C17.8655 38.4645 16.9528 37.3194 15.6095 37.4033C15.5859 37.4046 15.584 37.3692 15.6076 37.368C16.6568 37.3116 17.4257 37.9797 18.2026 38.5764C19.3366 39.4377 20.6732 40.1108 22.1399 39.902C22.1523 39.9132 22.1529 39.925 22.1412 39.9256Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.8395 37.2845C16.694 37.3451 17.5058 37.4906 18.293 37.8385C19.177 38.2285 19.9657 38.8246 20.8714 39.1779C20.8956 39.1885 20.8733 39.2133 20.8608 39.2022C20.0408 38.9033 19.328 38.3977 18.5395 38.0263C17.666 37.6121 16.8027 37.3865 15.8408 37.3081C15.8284 37.297 15.8277 37.2852 15.8395 37.2845Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.2375 39.5041C15.8218 40.4777 16.6455 41.2847 17.5558 41.9452C18.5153 42.6386 19.5096 42.8808 20.654 43.0558C20.69 43.0657 20.6807 43.1134 20.6454 43.1153C18.3524 42.9074 16.3956 41.4755 15.2264 39.5166C15.2251 39.493 15.2369 39.4923 15.2375 39.5041Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.071 41.3747C16.9522 42.5925 18.5472 43.4527 20.0673 43.3592C20.1027 43.3573 20.1058 43.4163 20.0705 43.4182C18.5162 43.5371 16.9311 42.6409 16.071 41.3747C16.0592 41.3754 16.0592 41.3754 16.071 41.3747Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M16.7261 35.9601C17.6201 35.2145 18.7457 35.2605 19.8028 35.5703C19.8388 35.5801 19.8302 35.6397 19.7942 35.6298C18.7508 35.3548 17.635 35.2728 16.7391 35.983C16.728 35.9955 16.7149 35.9725 16.7261 35.9601Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M17.9757 35.8929C18.359 35.7659 18.7611 35.768 19.1645 35.7936C19.1999 35.7917 19.1906 35.8395 19.1664 35.829C18.7624 35.7916 18.3597 35.7777 17.9757 35.8929C17.9645 35.9054 17.9639 35.8936 17.9757 35.8929Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.6999 34.521C12.3296 32.2472 11.3823 29.5788 9.57251 28.0208C9.54767 27.9985 9.58113 27.9612 9.60598 27.9835C10.4332 28.6367 11.0063 29.6227 11.4814 30.543C12.115 31.774 12.5892 33.12 12.7111 34.5086C12.7124 34.5322 12.7006 34.5328 12.6999 34.521Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M8.31498 28.1593C9.15066 29.1903 9.97328 30.1984 10.6843 31.3307C11.3426 32.3594 12.0418 33.4923 12.2845 34.7089C12.2858 34.7325 12.251 34.7462 12.2498 34.7226C11.9921 33.4477 11.219 32.2596 10.534 31.1732C9.85032 30.1104 9.08918 29.1463 8.31498 28.1593C8.30319 28.1599 8.30319 28.1599 8.31498 28.1593Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M5.71581 29.0791C6.1327 29.577 6.41319 30.1767 6.81892 30.6869C7.32593 31.3218 7.84346 31.9325 8.41804 32.5046C9.44107 33.5019 10.5738 34.3396 11.6408 35.2755C11.6656 35.2978 11.6315 35.3233 11.6185 35.3003C10.4788 34.3329 9.27413 33.4754 8.22372 32.4086C7.74852 31.9257 7.33036 31.4043 6.92399 30.8823C6.4791 30.3032 6.16008 29.6464 5.71581 29.0791Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.5115 35.507C10.8563 34.9747 10.1696 34.515 9.57014 33.9206C8.89682 33.271 8.19066 32.6705 7.57376 31.9706C7.5607 31.9476 7.58301 31.9228 7.59607 31.9457C8.2576 32.5959 8.94208 33.2331 9.60361 33.8833C10.2024 34.4659 10.9016 34.9368 11.5115 35.507C11.5233 35.5064 11.5233 35.5064 11.5115 35.507Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.2619 36.5845C10.2449 36.58 9.43661 35.6185 8.70624 35.0074C7.67901 34.1522 6.85576 33.1323 6.07649 32.051C6.06344 32.028 6.09753 32.0026 6.11059 32.0255C6.82585 33.0157 7.59752 33.9556 8.51548 34.7575C9.30922 35.448 10.1883 36.4057 11.2619 36.5845Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.7842 25.833C12.8451 26.8756 13.9905 27.9491 14.5976 29.3471C14.8675 29.971 14.9979 30.6379 14.9515 31.3143C14.8756 32.3233 14.2718 33.408 14.4075 34.3939C14.4094 34.4292 14.3622 34.4318 14.3603 34.3964C14.2366 33.6345 14.6199 32.8455 14.7693 32.1044C14.9464 31.22 14.9362 30.3693 14.6071 29.5239C14.0204 28.0657 12.8476 26.9227 11.7842 25.833C11.7724 25.8336 11.7835 25.8212 11.7842 25.833Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M2.3831 36.5883C4.13966 36.494 5.66329 37.3462 7.2772 37.898C7.87931 38.1021 8.50183 38.246 9.1435 38.3061C9.61886 38.3515 10.8222 38.5234 11.1028 38.0236C11.1133 37.9994 11.1617 38.0204 11.1512 38.0446C10.9573 38.3979 10.3772 38.3818 10.0346 38.3883C9.47929 38.3945 8.90962 38.3542 8.35973 38.2418C6.31659 37.8431 4.52007 36.5327 2.3831 36.5883C2.37194 36.6007 2.37131 36.5889 2.3831 36.5883Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M2.81966 36.3521C4.18591 36.2551 5.43539 36.6254 6.71351 37.0888C7.40067 37.3357 8.08911 37.6061 8.79605 37.781C9.37142 37.9274 10.5091 38.1974 11.0311 37.791C11.0652 37.7655 11.0913 37.8114 11.0572 37.8369C10.7274 38.0793 10.1335 38.0284 9.75437 38.0133C8.99544 37.9713 8.24743 37.6922 7.53669 37.4466C5.99478 36.9146 4.4838 36.2982 2.81966 36.3521Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.2031 39.3596C11.7421 40.0228 10.7037 40.2795 9.93865 40.3442C8.78586 40.4534 7.70878 39.991 6.69002 39.5137C6.66581 39.5032 6.68812 39.4783 6.70054 39.4895C7.68204 39.9334 8.72248 40.3741 9.82811 40.2674C10.7222 40.1839 11.4739 39.8716 12.1907 39.3484C12.2018 39.336 12.2142 39.3471 12.2031 39.3596Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.9734 39.2656C11.0371 39.8834 9.70468 39.7303 8.67374 39.4664C8.63774 39.4565 8.65878 39.4081 8.68299 39.4186C9.73752 39.6812 10.9836 39.768 11.9734 39.2656C11.9728 39.2538 11.9845 39.2532 11.9734 39.2656Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M9.4271 41.8261C8.80592 42.3678 8.02365 42.5517 7.24139 42.7356C6.19114 42.993 5.13836 43.2032 4.05693 43.3204C4.03336 43.3217 4.03146 43.2863 4.0544 43.2732C5.0874 43.135 6.10545 42.9385 7.10854 42.6836C7.91312 42.4749 8.7575 42.3468 9.41404 41.8031C9.42583 41.8025 9.43825 41.8137 9.4271 41.8261Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M9.43956 41.8372C8.96784 42.3 8.55823 42.8185 7.98651 43.1803C7.44888 43.5166 6.8565 43.7139 6.26349 43.8994C6.22876 43.9131 6.21444 43.8666 6.24917 43.8529C6.84218 43.6674 7.43393 43.4582 7.95976 43.1226C8.50791 42.7621 8.94236 42.2659 9.43956 41.8372C9.43892 41.8254 9.43892 41.8254 9.43956 41.8372Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.96342 41.4864C3.85905 41.6167 2.76813 41.557 1.70127 41.9454C1.66654 41.959 1.65221 41.9125 1.68695 41.8988C2.7258 41.4292 3.86767 41.5571 4.96342 41.4864C4.97521 41.4858 4.97457 41.474 4.96342 41.4864Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M4.63058 41.2324C3.76389 41.3853 2.85906 41.2684 2.02671 41.6205C2.00377 41.6335 1.98945 41.587 2.01302 41.5857C2.84284 41.1865 3.73841 41.3512 4.62994 41.2206C4.64173 41.2199 4.64237 41.2317 4.63058 41.2324Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.5844 41.048C11.408 41.5068 11.606 42.111 11.6909 42.5911C11.7783 43.1185 11.9257 43.4416 12.1527 43.926C12.5383 44.7211 12.9331 45.4684 13.4216 46.1988C13.4471 46.2329 13.39 46.2714 13.3646 46.2373C12.7735 45.3587 12.2638 44.4521 11.8333 43.482C11.6194 43.0206 11.5922 42.5137 11.5066 42.0217C11.4392 41.647 11.3893 41.3777 11.536 41.027C11.5577 40.9904 11.5949 41.0238 11.5844 41.048Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M11.8435 40.8095C11.7857 41.2737 11.6887 41.6691 11.8208 42.1467C11.9092 42.473 12.0448 42.7968 12.1916 43.1081C12.5548 43.9281 13.0905 44.656 13.5114 45.4491C13.5245 45.4721 13.4904 45.4976 13.4773 45.4746C12.9608 44.6629 12.4201 43.8407 12.0537 42.9618C11.905 42.6151 11.7799 42.2671 11.7249 41.9036C11.6563 41.5053 11.7825 41.2148 11.8442 40.8213C11.8311 40.7983 11.8435 40.8095 11.8435 40.8095Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M10.9871 41.3756C10.6902 42.231 11.0977 43.2141 11.4472 43.9993C11.4609 44.034 11.4144 44.0483 11.4007 44.0136C11.0244 43.1707 10.6574 42.2801 10.9871 41.3756C10.9747 41.3645 10.9865 41.3639 10.9871 41.3756Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M12.5912 40.2019C12.715 40.5263 12.8978 40.8475 13.1364 41.1066C13.1612 41.1289 13.1284 41.178 13.1029 41.1439C12.8296 40.8984 12.6574 40.553 12.5558 40.2038C12.5434 40.1926 12.5782 40.1789 12.5912 40.2019Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M15.1309 35.5374C15.2439 34.9993 15.7261 34.5123 16.0956 34.1259C16.6447 33.5644 17.2573 33.0822 17.9326 32.6676C18.5849 32.2661 19.2752 31.9098 20.0059 31.6459C20.8643 31.3397 21.7676 31.2085 22.6672 31.0065C22.7137 30.9922 22.7417 31.0734 22.6952 31.0877C21.1666 31.4654 19.7398 31.7548 18.3519 32.5505C17.7095 32.9161 17.0937 33.3393 16.5296 33.8425C16.0448 34.2823 15.3449 34.8993 15.1911 35.5578C15.1688 35.5826 15.121 35.5734 15.1309 35.5374Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.696 30.9758C20.3112 31.1684 19.0197 31.557 17.8552 32.3289C16.7701 33.0374 15.5765 33.9291 15.1237 35.183C15.1138 35.219 15.0536 35.1986 15.0752 35.162C15.517 33.9205 16.6758 33.0425 17.7367 32.3234C18.9576 31.5012 20.2784 31.2174 21.7071 30.9634C21.6953 30.964 21.7078 30.9752 21.696 30.9758Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M21.9038 33.081C20.3984 33.0082 18.8058 33.2947 17.5919 34.2466C17.5807 34.259 17.5559 34.2367 17.5788 34.2236C18.8374 33.222 20.355 33.0814 21.9038 33.081C21.9156 33.0804 21.915 33.0686 21.9038 33.081Z",
                  fill: n,
                }),
                i.jsx("path", {
                  d: "M19.1208 30.1328C17.9969 30.5597 16.5953 31.3207 16.2113 32.5354C16.2007 32.5596 16.1765 32.5491 16.1753 32.5255C16.5568 31.2636 17.9596 30.5262 19.1195 30.1092C19.1313 30.1086 19.1326 30.1322 19.1208 30.1328Z",
                  fill: n,
                }),
              ],
            }),
          ],
        }),
      });
    if (t === 1)
      return i.jsx("div", {
        "data-value": c,
        style: p,
        onMouseDown: o,
        onMouseMove: u,
        children: i.jsxs("svg", {
          onTouchStart: r,
          onTouchMove: l,
          onTouchEnd: s,
          width: "60",
          height: "60",
          viewBox: "0 0 60 60",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            i.jsx("path", {
              d: "M59.9998 29.9424C60.0574 46.5258 46.641 59.9422 30.0576 59.9998C13.4742 60.0574 0.0577506 46.641 0.000169397 30.0576C-0.0574118 13.4742 13.359 0.0577659 29.9424 0.000184656C46.5258 -0.0573966 59.9998 13.359 59.9998 29.9424Z",
              fill: n,
            }),
            i.jsx("path", {
              d: "M5.00978 27.4089C5.00978 27.4089 3.28234 30.8638 2.4762 35.3551C2.07313 37.6584 2.1883 38.5221 3.91573 40.9981C7.25544 45.7773 8.52223 47.1017 9.67385 46.8714C10.8255 46.6986 16.2381 45.4894 17.8504 45.0863C19.0596 44.7984 19.0596 44.5105 19.5202 42.4376C19.9809 40.3647 20.787 37.428 20.9598 35.8733C21.1325 34.2611 20.9022 34.3186 19.5202 32.5912C18.1383 30.8638 14.7986 26.43 14.1652 25.5663C13.4742 24.7602 13.1287 24.9905 11.574 25.2208C10.0193 25.4511 7.60093 26.0845 6.44931 26.3724C5.2401 26.7179 5.2401 27.0058 5.00978 27.4089Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M7.31298 11.1134C7.31298 11.1134 5.81587 13.0712 4.4915 15.3744C3.80053 16.7564 4.03085 18.7141 4.4915 22.3993C4.95215 26.1421 5.29764 26.1421 6.73717 25.8542C8.11912 25.5663 12.0922 24.7026 13.0711 24.4722C14.1076 24.2419 14.9137 22.4569 15.8926 20.9022C16.8715 19.3475 20.6718 14.3955 21.478 13.5894C22.2265 12.956 21.9962 12.265 21.7659 10.5376C21.5355 8.81015 21.0173 5.18254 20.5567 5.06737C20.096 4.95221 16.4108 4.95221 15.0289 4.83705C13.5893 4.77947 10.1345 7.60095 7.31298 11.1134Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M21.4203 36.046C21.4203 36.046 19.9808 41.8617 19.5202 44.1074C19.2898 45.4318 19.2323 45.7197 21.9386 47.5047C24.6449 49.2897 26.0268 50.3838 26.8906 50.8444C27.7543 51.305 28.5604 51.305 31.0364 50.7292C33.57 50.1534 36.046 49.6352 37.0824 49.1745C38.1189 48.7139 39.6736 45.2014 40.4221 42.8406C41.1707 40.4798 41.7465 38.5796 40.7101 37.7735C39.6736 36.9673 38.4644 35.7005 36.8521 34.5489C35.1823 33.4549 33.8003 31.9578 33.1669 32.2457C32.5335 32.5336 26.0268 34.1458 23.5509 34.8368C22.2841 35.2399 21.4779 35.5278 21.4203 36.046Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M26.4875 59.0786C26.4875 59.0786 27.6967 54.1266 27.8695 52.9174C28.0422 51.7082 28.5029 51.6506 30.2303 51.3627C31.9577 51.0748 36.5066 49.6928 37.3704 49.4049C38.1765 49.117 38.6947 48.9443 40.0767 50.0383C41.4586 51.0748 44.568 53.4356 45.6045 54.1266C46.353 54.6448 42.8406 57.236 38.2341 58.5027C32.8214 59.9423 26.4299 59.8847 26.4875 59.0786Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M22.3993 12.2649C22.3993 12.2649 21.7659 8.69491 21.5356 6.67957C21.3052 4.7218 21.5356 4.95213 24.1267 3.85809C26.6603 2.76404 32.8215 1.38209 34.1459 1.26693C35.4702 1.15177 37.0249 1.55484 40.3646 3.22469C43.7043 4.89455 44.5681 5.47036 44.7408 6.44924C44.9135 7.42812 45.3166 11.977 45.3742 14.05C45.3166 15.4895 44.7984 15.3167 42.38 16.3532C39.8464 17.3897 37.428 18.4261 36.8522 18.7716C36.046 19.1171 34.7217 18.311 32.476 16.8714C30.5182 15.5471 26.4876 13.8196 24.7601 13.3014C23.0327 12.7832 22.572 13.1287 22.3993 12.2649Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M36.3339 20.3839C36.3339 20.3839 35.1247 26.0268 34.4913 28.8483C33.9155 31.6122 34.0882 32.0153 35.7581 33.2821C37.4279 34.5488 39.3281 36.3339 40.307 37.0824C41.3435 37.831 41.9768 38.7523 45.1438 37.831C49.1745 36.6793 50.211 36.3914 51.4777 35.9884C52.7445 35.5853 52.9749 35.0671 53.4355 32.8214C53.8962 30.5757 54.2416 27.1209 54.472 25.2783C54.7023 23.4357 54.3568 23.1478 52.8597 21.6506C51.3626 20.1535 48.5987 17.7927 47.5046 16.6987C46.4106 15.6046 45.662 15.4895 44.3953 16.0077C43.0709 16.4683 39.5584 17.7927 38.2341 18.5413C36.9673 19.2322 36.5066 19.2898 36.3339 20.3839Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M57.9269 22.5145C57.9269 22.5145 55.9691 23.1479 55.3933 23.4358C54.8175 23.7237 54.8751 25.6239 54.6447 27.5816C54.4144 29.5394 53.7234 33.2822 53.2628 34.952C52.9749 35.7582 54.0689 36.3916 54.9902 37.8887C56.4298 40.1919 57.1783 41.4587 57.4662 41.0556C57.7541 40.595 59.827 36.1036 59.7119 28.6757C59.4816 25.2784 58.9057 21.9387 57.9269 22.5145Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M1.61244 38.9826C1.61244 38.9826 1.90035 38.1765 2.13067 38.5795C2.361 38.9826 5.18248 43.6467 7.48573 46.1803C8.29186 46.9864 8.52219 47.1591 8.63735 48.6562C8.75251 50.0958 8.57977 50.4988 7.71605 49.6351C6.90991 48.7714 2.76407 43.5891 1.61244 38.9826Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M36.1036 0.691169C36.1036 0.691169 35.7005 0.576006 35.5278 0.74875C35.355 0.921493 36.3339 1.2094 38.0614 1.95796C39.7888 2.70651 42.4951 4.03088 43.5892 4.83702C44.3377 5.29767 44.6832 5.41283 45.3742 5.12492C46.0652 4.77944 46.2379 4.66427 45.4893 4.2612C44.6832 3.85814 39.7312 1.2094 36.1036 0.691169Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M8.81009 9.90418C8.81009 9.90418 12.2074 6.33414 13.5893 5.58559C14.9713 4.83703 20.2112 5.35526 20.2112 5.35526C20.2112 5.35526 16.526 5.47043 14.7985 5.58559C13.1287 5.58559 8.81009 9.90418 8.81009 9.90418Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M20.2688 38.8098C20.2688 38.8098 19.5202 42.2647 19.0596 43.8194C18.6565 45.3741 17.1594 45.1437 13.359 45.9499C17.3321 44.7407 18.311 44.6255 18.6565 43.5315C19.0596 42.4374 20.2688 38.8098 20.2688 38.8098Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M34.6641 29.7121C34.6641 29.7121 35.9884 22.3417 36.4491 20.6142C36.8522 18.8868 39.9615 17.9079 43.1861 16.6411C43.1861 16.6411 39.5585 18.5413 38.1189 19.4626C36.6794 20.3839 36.7946 21.4779 34.6641 29.7121Z",
              fill: "white",
            }),
          ],
        }),
      });
    if (t === 2)
      return i.jsx("div", {
        "data-value": c,
        style: p,
        onMouseDown: o,
        onMouseMove: u,
        children: i.jsxs("svg", {
          onTouchStart: r,
          onTouchMove: l,
          onTouchEnd: s,
          width: "58",
          height: "59",
          viewBox: "0 0 58 59",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            i.jsx("path", {
              d: "M57.5 29.5C57.5 45.5243 44.7321 58.5 29 58.5C13.2679 58.5 0.500004 45.5243 0.500004 29.5C0.500004 13.4756 13.2679 0.5 29 0.5C44.7321 0.5 57.5 13.4756 57.5 29.5Z",
              fill: n,
              stroke: n,
            }),
            i.jsx("path", {
              d: "M34.313 0.487603C41.3969 1.80038 47.5585 5.73872 51.8384 11.2524C46.1565 13.2028 18.7799 22.9924 14.7214 32.6319C13.7252 34.9949 13.1349 37.2454 12.9135 39.3833C11.327 39.0458 9.92494 38.6332 8.70738 38.2206C9.74046 20.8919 16.1972 11.74 21.4364 7.12651C25.6056 3.45073 31.3982 1.38779 34.313 0.487603ZM29.1107 42.2339C22.986 42.2339 18.0789 41.7839 14.1679 41.0337C14.1679 43.0966 14.6107 45.2346 15.7914 47.2225C18.6692 52.061 25.2366 54.9491 35.2723 55.7368C37.7074 55.9243 39.8473 56.0369 41.729 56.0744C50.8791 51.5359 57.3359 42.2339 58 31.3566C56.5611 34.9574 50.9898 42.2339 29.1107 42.2339ZM4.57507 36.4202C5.38677 36.8703 6.30916 37.3204 7.37914 37.733C8.5229 20.1418 15.201 10.8023 20.6247 6.03878C25.0522 2.17546 29.3321 0.637635 31.3613 0.112524C30.5865 0.0375079 29.8117 0 29.0369 0C19.8868 0 11.6959 4.31341 6.38296 11.0273C5.09161 14.2155 3.57888 21.3045 4.57507 36.4202ZM53.5356 34.9574C56.3397 32.6319 57.5573 28.3935 57.9262 26.8557C57.4466 21.4921 55.5649 16.5785 52.687 12.4151C48.2964 13.9154 19.8499 23.9301 15.9389 33.1945C15.1641 35.0324 14.4262 37.2829 14.2417 39.6459C18.1158 40.3961 22.986 40.8837 29.1476 40.8837C43.4262 40.8837 50.2888 37.658 53.5356 34.9574ZM3.20993 35.5575C2.5827 24.8303 3.20993 18.2289 4.20611 14.178C1.54962 18.679 3.8147e-06 23.8926 3.8147e-06 29.5188C3.8147e-06 30.6065 0.0737952 31.6567 0.184482 32.7069C0.701022 33.4571 1.62341 34.5073 3.20993 35.5575ZM7.34224 39.1958C6.34606 38.8207 5.46056 38.4456 4.68575 38.0331C4.90713 41.4463 5.1285 44.2219 5.31298 46.5474C7.52672 49.7355 10.3308 52.4361 13.5776 54.499C8.26464 48.2727 7.48983 41.0712 7.34224 39.1958ZM35.1616 57.0496C24.6463 56.2244 17.7468 53.1488 14.6476 47.8976C13.3931 45.7972 12.8028 43.3967 12.8397 40.7336C11.327 40.3961 9.96184 40.0585 8.74428 39.6459C9.00255 42.459 10.4046 50.8608 17.8944 56.7495C21.3257 58.2123 25.0891 59 29.0369 59C32.4682 59 35.7519 58.3999 38.8143 57.2746C37.6705 57.2371 36.4529 57.1621 35.1616 57.0496ZM3.80026 44.1093C3.65268 42.0464 3.4682 39.7584 3.32061 37.2829C2.17685 36.5702 1.25446 35.8951 0.553439 35.22C1.14377 38.4081 2.28754 41.3713 3.80026 44.1093Z",
              fill: "white",
            }),
          ],
        }),
      });
    if (t === 3)
      return i.jsx("div", {
        "data-value": c,
        style: p,
        onMouseDown: o,
        onMouseMove: u,
        children: i.jsxs("svg", {
          onTouchStart: r,
          onTouchMove: l,
          onTouchEnd: s,
          width: "86",
          height: "37",
          viewBox: "0 0 86 37",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            i.jsx("path", {
              d: "M84.519 33.3202C84.517 33.3262 84.5151 33.332 84.5131 33.3375C79.5742 34.3537 75.437 34.6662 72.0644 34.921C71.3087 34.9781 70.5913 35.0323 69.9119 35.0908C61.1927 35.7958 25.9012 36.308 15.0845 35.284C10.7708 34.8686 6.46052 33.8663 3.65402 31.9412C2.26063 30.9854 1.2638 29.8201 0.798106 28.4083C0.365485 27.0968 0.373116 25.5177 1.02461 23.6097C2.29247 23.9375 4.3239 24.2073 6.89263 24.4347C9.82133 24.6939 13.499 24.9015 17.6484 25.0672C25.9482 25.3987 36.1551 25.5634 46.0725 25.6356C55.9908 25.7079 65.6236 25.6878 72.7765 25.6497C76.353 25.6306 79.3097 25.607 81.3724 25.5882C82.4037 25.5788 83.2116 25.5706 83.7616 25.5647L84.2608 25.5592C84.4434 26.0751 84.581 26.7431 84.674 27.4934C84.7852 28.3905 84.8286 29.3716 84.8208 30.2858C84.8129 31.2014 84.7536 32.0363 84.6636 32.6412C84.6182 32.9467 84.5676 33.1748 84.519 33.3202Z",
              stroke: "white",
            }),
            i.jsx("path", {
              d: "M62.315 9.30586L62.315 9.30588L62.3196 9.30953C65.4208 11.784 68.0705 12.2597 70.1728 11.5351C72.2457 10.8206 73.6312 8.98966 74.3377 7.17301C75.0003 5.46922 76.1074 3.66527 77.3681 2.86101C77.9786 2.47156 78.59 2.3369 79.2077 2.51372C79.8416 2.69518 80.5753 3.23081 81.3585 4.38259C82.9351 6.70116 84.3173 11.0152 85.0115 15.388C85.3571 17.5646 85.5283 19.7326 85.4722 21.6457C85.4199 23.4297 85.1708 24.9527 84.7093 26.0511L50.7799 29.6795L50.7734 29.6797L50.6945 29.6818L50.3861 29.6897C50.1155 29.6967 49.7178 29.7069 49.2094 29.7196C48.1926 29.7452 46.7329 29.7814 44.9613 29.8235C41.418 29.9078 36.6277 30.0162 31.6388 30.1125C21.646 30.3054 10.8988 30.449 7.74495 30.2578C4.568 30.0653 2.91413 29.5204 2.03357 28.5367C1.15417 27.5542 0.92386 26.0007 1.02059 23.389C1.05866 22.3611 1.73919 21.5844 3.06373 20.9663C4.39218 20.3464 6.24607 19.9505 8.35519 19.6504C9.78689 19.4466 11.3036 19.2908 12.8234 19.1346C13.5394 19.061 14.256 18.9874 14.9647 18.9086C17.1588 18.6649 19.2732 18.3723 20.9575 17.8771C24.3348 16.8934 29.8656 13.9036 35.1743 10.837C37.4822 9.5037 39.7507 8.15445 41.8002 6.9354C44.5003 5.3294 46.8204 3.9494 48.3504 3.1297C49.6503 2.44171 50.7759 2.19428 51.8176 2.25518C52.8633 2.31632 53.8693 2.69072 54.9251 3.31881C55.9855 3.94962 57.0738 4.82249 58.286 5.85933C58.6724 6.18982 59.0719 6.53754 59.4861 6.89795C60.3599 7.65833 61.2986 8.4752 62.315 9.30586Z",
              fill: n,
              stroke: "white",
            }),
            i.jsx("path", {
              d: "M59.9338 27.5455L42.8486 12.6441C43.9405 11.9376 44.904 11.1668 45.9317 10.2676L63.4023 25.4901C62.2461 26.1966 61.09 26.8389 59.9338 27.5455Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M65.7146 23.9486L47.9228 8.4691C48.8863 7.63411 49.914 6.79912 51.0059 6.09259L68.9903 21.829C67.8984 22.4713 66.8065 23.242 65.7146 23.9486Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M33.6637 16.819L49.0147 30.2431C47.7301 30.3073 45.7389 30.3073 43.3624 30.3716L29.7456 18.4248C31.0945 17.9752 32.3791 17.2686 33.6637 16.819Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M52.6115 29.7935L36.554 15.7913C37.1963 15.5344 37.7744 15.2775 38.4167 15.0206C39.1232 14.7636 39.7655 14.4425 40.4078 14.1213L56.2084 27.8666C54.988 28.3804 53.8319 29.2154 52.6115 29.7935Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M62.0534 23.6274C66.7422 20.2232 71.3668 16.0482 74.1929 10.9098C75.2848 8.91869 76.2482 6.73487 77.7898 5.06489C79.0744 3.5876 80.4232 3.33068 81.7078 3.90875C81.7078 3.97298 81.772 3.97298 81.772 4.03721C85.0478 8.85447 87.36 21.6362 85.0478 26.4535C85.0478 26.4535 68.0268 29.4723 50.7489 30.1146C50.7489 30.1789 58.5207 26.1966 62.0534 23.6274Z",
              fill: n,
            }),
            i.jsx("path", {
              d: "M82.2933 6.4227C82.4684 6.63099 82.6774 6.94782 82.9253 7.39934C84.0876 10.2677 84.9728 14.0295 85.329 17.5676C85.5075 19.3404 85.552 21.046 85.4354 22.5459C85.3278 23.9304 85.0849 25.1125 84.7022 26.006C84.6802 26.0098 84.6569 26.0138 84.6322 26.018C84.4154 26.0551 84.0943 26.1094 83.6779 26.178C82.845 26.3151 81.631 26.5094 80.1081 26.7379C77.6301 27.1096 74.3348 27.5715 70.5332 28.0244C76.2676 24.4139 78.6715 17.9469 80.0224 12.9842C80.3172 11.9012 80.5643 10.8796 80.7839 9.97213C80.85 9.69883 80.9136 9.43587 80.9752 9.18471C81.2456 8.0834 81.473 7.2328 81.7082 6.67967C81.8274 6.39942 81.9279 6.24732 81.999 6.17738C82.0041 6.17228 82.0087 6.16805 82.0128 6.16454C82.0545 6.18619 82.1479 6.24974 82.2933 6.4227Z",
              fill: n,
              stroke: "white",
            }),
            i.jsx("path", {
              d: "M58.1353 5.06494C51.9692 9.56104 31.0302 22.3428 27.2407 20.6086C24.2861 19.2598 22.6161 18.1679 21.5884 17.2044C22.8088 16.7548 24.3503 16.1125 25.9561 15.3417C27.1764 16.0483 28.461 16.4979 29.5529 16.241C31.3514 15.7914 47.73 5.51455 53.1896 2.11035C54.8596 2.49573 56.4011 3.58764 58.1353 5.06494Z",
              fill: n,
            }),
            i.jsx("path", {
              d: "M50.9416 6.47804C51.1985 6.99188 52.1619 7.05611 52.9969 6.54227C53.8319 6.09266 54.2815 5.25767 54.0246 4.74383C53.7677 4.22999 52.8042 4.16576 51.9693 4.6796C51.1343 5.12921 50.6847 5.9642 50.9416 6.47804Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M46.1244 9.30409C46.3813 9.7537 47.152 9.81793 47.9228 9.43255C48.6936 9.04717 49.079 8.34064 48.822 7.89103C48.5651 7.44142 47.7943 7.37719 47.0236 7.76257C46.2528 8.14795 45.8675 8.85448 46.1244 9.30409Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M41.564 12.0661C41.8209 12.5157 42.5917 12.5799 43.3625 12.1945C44.1332 11.8091 44.5186 11.1026 44.2617 10.653C44.0048 10.2034 43.234 10.1392 42.4632 10.5245C41.6925 10.9099 41.3071 11.6164 41.564 12.0661Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M36.8109 14.6994C37.0678 15.149 37.8386 15.2133 38.6093 14.8279C39.3801 14.4425 39.7655 13.736 39.5086 13.2864C39.2517 12.8367 38.4809 12.7725 37.7101 13.1579C37.0036 13.6075 36.554 14.2498 36.8109 14.6994Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M31.6084 17.3329C31.8011 17.7825 32.6361 17.9109 33.3426 17.5256C34.1134 17.2044 34.563 16.4979 34.3703 16.0483C34.1776 15.5987 33.3426 15.4702 32.6361 15.8556C31.8653 16.1767 31.4157 16.819 31.6084 17.3329Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M43.812 3.52344C43.2339 3.90882 42.8485 4.10151 43.2339 4.61535L46.06 8.72608C46.4454 9.30415 47.2162 9.43261 47.73 9.04723C48.3081 8.66185 48.4366 7.89109 48.0512 7.37724L45.2251 3.26652C44.9039 2.75268 44.3901 3.20229 43.812 3.52344Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M48.822 0.504581C48.2439 0.889962 47.8586 1.08265 48.2439 1.59649L51.0701 5.70722C51.4554 6.28529 52.2262 6.41375 52.74 6.02837C53.3181 5.64299 53.4466 4.87223 53.0612 4.35839L50.2351 0.247661C49.9139 -0.266179 49.4001 0.119201 48.822 0.504581Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M39.316 6.15682C38.7379 6.47797 38.3525 6.67066 38.7379 7.24873L41.4356 11.4879C41.7567 12.066 42.5275 12.2587 43.1055 11.8733C43.6836 11.5521 43.8763 10.7814 43.4909 10.2033L40.7933 5.96413C40.4721 5.45029 39.894 5.83567 39.316 6.15682Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M34.8841 8.98296C34.3061 9.30411 33.9207 9.4968 34.3061 10.0749L36.6826 14.1214C37.0037 14.6994 37.7745 14.8921 38.3526 14.5067C38.9306 14.1856 39.1233 13.4148 38.7379 12.8368L36.3614 8.79027C35.976 8.21219 35.4622 8.59758 34.8841 8.98296Z",
              fill: "white",
            }),
            i.jsx("path", {
              d: "M29.9383 11.9376C29.3603 12.2587 28.9749 12.4514 29.3603 13.0295L31.5441 16.7548C31.8652 17.3329 32.636 17.5256 33.2141 17.1402C33.7921 16.8191 33.9848 16.0483 33.5995 15.4702L31.4156 11.7449C31.0945 11.2311 30.5164 11.6164 29.9383 11.9376Z",
              fill: "white",
            }),
          ],
        }),
      });
  };
function Xc(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    l = R.useRef(null);
  let s = 0,
    o = 0;
  R.useEffect(() => {
    if (l.current) {
      const L = l.current.getBoundingClientRect();
      (s = L.left), (o = L.top);
    }
  });
  const [u, a] = R.useState([!1, !1, !1, !1]),
    [c, p] = R.useState("-1");
  let f;
  const C = R.useRef(!1),
    v = (L) => {
      if (((f = L.closest("div")), f)) {
        if (f.style.position === "absolute") return;
        (f.style.left = "auto"),
          (f.style.top = "auto"),
          (f.style.transform = "none"),
          (f.style.position = "absolute");
        let _ = f.offsetLeft - f.offsetWidth;
        _ < 0 && (_ = f.offsetLeft);
        let M = f.offsetTop - f.offsetHeight / 2;
        (M < 0 || M === 56) && (M = f.offsetTop),
          (f.style.zIndex = "1"),
          (f.style.left = _ + "px"),
          (f.style.top = M + "px");
      }
    },
    g = (L) => {
      const _ = L.target;
      (C.current = !0), v(_);
    },
    w = (L) => {
      document.body.style.overflow = "hidden";
      const _ = L.changedTouches[0].target;
      v(_);
    },
    P = (L, _) => {
      if (f) {
        if (f.style.top === "30%") return;
        const M = L - o - f.offsetHeight / 2,
          k = _ - s - f.offsetWidth / 2;
        if (
          (M > 14 && M < 112 && (f.style.top = M + "px"),
          k > 0 && k < 270 && (f.style.left = k + "px"),
          M > 20 && M < 70 && k > 120 && k < 145)
        ) {
          const j = f.getAttribute("data-value");
          if (
            ((f.style.top = "30%"),
            (f.style.left = "50%"),
            (f.style.transform = "translateX(-50%) translateY(-50%)"),
            (f.style.height = "18px"),
            (f.style.width = "65px"),
            (f.style.overflow = "hidden"),
            j)
          ) {
            if (u[+j]) return;
            a(u.map((E, O) => (O + "" === j ? (E = !0) : (E = !1), E))),
              j !== "-1" && (t(q(j === "0" ? "true" : "false")), n(!0), p(j));
          }
        }
      }
    },
    m = (L) => {
      C && P(L.pageY, L.pageX);
    },
    d = (L) => {
      const _ = L.changedTouches[0];
      P(_.clientY, _.clientX);
    },
    h = () => {
      if (f) {
        if (f.style.top !== "30%" && f.style.left !== "50%") {
          f.style.position = "static";
          return;
        }
        return;
      }
    },
    x = () => {
      f &&
        f.style.top !== "30%" &&
        f.style.left !== "50%" &&
        (f.style.position = "static");
    },
    S = () => {
      (document.body.style.overflow = "auto"), h();
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: Qt.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Перетащи атрибут выбранного вида спорта в коробку",
        }),
        i.jsxs("div", {
          className: Qt.task,
          ref: l,
          children: [
            u.map((L, _) =>
              i.jsx(
                "div",
                {
                  className: Qt.taskAnswer,
                  children: i.jsx(Yc, {
                    index: _,
                    color: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    onMouseUp: () => x(),
                    onMouseDown: (M) => g(M),
                    onMouseMove: (M) => m(M),
                    onTouchStart: (M) => w(M),
                    onTouchMove: (M) => d(M),
                    onTouchEnd: () => S(),
                    value: _,
                    style: {
                      position: L ? "absolute" : "static",
                      overflow: L ? "hidden" : "visible",
                      width: L ? "65px" : "auto",
                      height: L ? "18px" : "auto",
                      transform: L
                        ? " translateX(-50%) translateY(-50%)"
                        : "none",
                    },
                  }),
                },
                _
              )
            ),
            i.jsx("div", {
              className: Qt.cart,
              children: i.jsxs("svg", {
                width: "93",
                height: "69",
                viewBox: "0 0 93 69",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  i.jsx("path", {
                    d: "M86.9938 3.99925L79.1882 13.431L35.337 9.95075L43.1426 0.518993L86.9938 3.99925Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  i.jsx("path", {
                    d: "M34.91 61.3474V9.8413L78.9793 13.3389V64.845L34.91 61.3474Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  i.jsx("path", {
                    d: "M11.1593 64.8053V13.3073L33.9101 9.88099V61.3789L11.1593 64.8053Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  i.jsx("path", {
                    d: "M24.7019 3.38559L33.8067 9.70838L11.4967 13.0683L2.39185 6.74553L24.7019 3.38559Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  i.jsx("path", {
                    d: "M55.2285 16.9158V68.4219L11.1593 64.9243V13.4182L55.2285 16.9158Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  i.jsx("path", {
                    d: "M54.5044 16.8583L44.899 25.2388L1.22406 21.7725L10.8294 13.392L54.5044 16.8583Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  i.jsx("path", {
                    d: "M78.9793 64.9559L56.2285 68.3822V16.8842L78.9793 13.4579V64.9559Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  i.jsx("path", {
                    d: "M79.4643 13.3849L90.1933 15.6556L69.2643 18.8075L58.5352 16.5368L79.4643 13.3849Z",
                    fill: r ? (c === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Gc = "_taskInfo_sk5qx_1",
  Kc = "_form_sk5qx_11",
  qc = "_label_sk5qx_23",
  bc = "_input_sk5qx_39",
  Me = { taskInfo: Gc, form: Kc, label: qc, input: bc };
function Jc(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, setValue: s } = A3();
  let o, u;
  const a = (h) => {
      h.preventDefault();
    },
    c = R.useRef(!1),
    p = (h) => {
      const x = h.changedTouches[0].target;
      C(x);
    },
    f = (h) => {
      const x = h.target;
      (c.current = !0), C(x);
    },
    C = (h) => {
      (u = 0),
        (o = h.closest("label")),
        o && o.style.setProperty("--var-width", "0%");
    },
    v = () => {
      w();
    },
    g = () => {
      c.current && w();
    },
    w = () => {
      o &&
        (u === 0 && o && s("name1", o.id),
        (u += 3),
        u > 100 && (u = 100),
        o.style.setProperty("--var-width", `${u}%`));
    },
    P = () => {
      m();
    },
    m = () => {
      if (u < 5) {
        s("name1", ""), o && o.style.setProperty("--var-width", "0%"), n(!1);
        return;
      }
      o &&
        (n(!0),
        o.style.setProperty("--var-width", "100%"),
        o.id === "2" ? t(q("true")) : t(q("false")));
    },
    d = () => {
      (c.current = !1), m();
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: Me.taskInfo,
      children: [
        r && i.jsx(U1, {}),
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Подчеркни верный ответ",
        }),
        i.jsxs("form", {
          className: Me.form,
          onClick: (h) => a(h),
          onMouseDown: (h) => f(h),
          onMouseMove: () => g(),
          onMouseUp: () => d(),
          onTouchStart: (h) => p(h),
          onTouchMove: () => v(),
          onTouchEnd: () => P(),
          children: [
            i.jsxs("label", {
              className: Me.label,
              id: "1",
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: Me.input,
                  value: 1,
                  ...l("name1"),
                }),
                i.jsx("span", { children: "Юный инженер" }),
              ],
            }),
            i.jsxs("label", {
              className: Me.label,
              id: "2",
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: Me.input,
                  value: 2,
                  ...l("name1"),
                }),
                i.jsx("span", { children: "Молодой специалист" }),
              ],
            }),
            i.jsxs("label", {
              className: Me.label,
              id: "3",
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: Me.input,
                  value: 3,
                  ...l("name1"),
                }),
                i.jsx("span", { children: "Начинающий эксперт" }),
              ],
            }),
            i.jsxs("label", {
              className: Me.label,
              id: "4",
              children: [
                i.jsx("input", {
                  type: "radio",
                  className: Me.input,
                  value: 4,
                  ...l("name1"),
                }),
                i.jsx("span", { children: "Будущий профессионал" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const ef = "_taskInfo_slgdo_1",
  tf = "_task_slgdo_1",
  nf = "_taskAnswer_slgdo_27",
  rf = "_taskText_slgdo_41",
  lf = "_taskCheck_slgdo_59",
  sf = "_taskCups_slgdo_73",
  ne = {
    taskInfo: ef,
    task: tf,
    taskAnswer: nf,
    taskText: rf,
    taskCheck: lf,
    taskCups: sf,
  },
  c5 = "" + new URL("cup-570ddd6d.svg", import.meta.url).href;
function of(e) {
  const t = L1(),
    { selectAnswer: n, checkClick: r } = e,
    l = R.useRef(null),
    s = R.useRef(null),
    o = R.useRef(null),
    u = R.useRef(null),
    a = R.useRef(null);
  let c = 0,
    p = 0,
    f;
  const C = [
    { top: 0, left: 0 },
    { top: 0, left: 0 },
    { top: 0, left: 0 },
    { top: 0, left: 0 },
  ];
  R.useEffect(() => {
    if (l.current) {
      const k = l.current.getBoundingClientRect();
      (c = k.left), (p = k.top);
    }
    s.current &&
      ((C[0].top = s.current.offsetTop), (C[0].left = s.current.offsetLeft)),
      o.current &&
        ((C[1].top = o.current.offsetTop), (C[1].left = o.current.offsetLeft)),
      u.current &&
        ((C[2].top = u.current.offsetTop), (C[2].left = u.current.offsetLeft)),
      a.current &&
        ((C[3].top = a.current.offsetTop), (C[3].left = a.current.offsetLeft));
  });
  const v = R.useRef([!1, !1, !1, !1]),
    g = R.useRef(!1),
    w = (k) => {
      (document.body.style.overflow = "hidden"),
        (f = k.changedTouches[0].target),
        m();
    },
    P = (k) => {
      k.preventDefault(), (g.current = !0), (f = k.target), m();
    },
    m = () => {
      const k = f.getAttribute("data-index");
      k && (v.current = v.current.map((O, F) => (F === +k ? !1 : O)));
      let j, E;
      f.style.position === "static"
        ? ((E = f.offsetTop),
          (j = f.offsetLeft),
          (f.style.position = "absolute"))
        : ((f.style.position = "absolute"),
          (E = f.offsetTop),
          (j = f.offsetLeft)),
        (f.style.zIndex = "1"),
        (f.style.left = j + "px"),
        (f.style.top = E + "px");
    },
    d = (k) => {
      const j = k.changedTouches[0];
      x(j.clientX, j.clientY);
    },
    h = (k) => {
      g.current && x(k.pageX, k.pageY);
    },
    x = (k, j) => {
      const E = j - p - f.offsetHeight / 2,
        O = k - c - f.offsetWidth / 2;
      (f.style.position = "absolute"),
        (f.style.zIndex = "1"),
        O > 169 && O < 254 && (f.style.left = O + "px"),
        E > 0 && E < 112 && (f.style.top = E + "px");
    },
    S = () => {
      (document.body.style.overflow = "auto"), _();
    },
    L = () => {
      console.log(2323), (g.current = !1), _();
    },
    _ = () => {
      if (!f) return;
      const k = {
          top: parseFloat(f.style.top),
          left: parseFloat(f.style.left),
        },
        j = C.findIndex(
          (O) =>
            O.top - 5 <= k.top && O.top + 5 >= k.top && O.left + 5 >= k.left
        );
      if (j === -1) {
        (f.style.position = "static"),
          (f.style.left = "auto"),
          (f.style.top = "auto"),
          n(!1);
        return;
      }
      f.setAttribute("data-index", j + ""),
        (f.style.top = C[j].top + 2 + "px"),
        (f.style.left = C[j].left + 3 + "px"),
        (v.current = v.current.map((O, F) => (F === j ? !0 : O)));
      let E = 0;
      for (let O = 0; O < v.current.length; O++) {
        const F = v.current[O];
        F && E++, E === 3 && (n(!0), t(q(O === 3 && F ? "false" : "true")));
      }
    },
    M = () => {
      (g.current = !1), _();
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: ne.taskInfo,
      children: [
        i.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Перетяни кубок к выбранным премиям",
        }),
        i.jsxs("div", {
          className: ne.task,
          ref: l,
          children: [
            i.jsxs("div", {
              className: ne.taskAnswer,
              children: [
                i.jsxs("div", {
                  className: ne.taskText,
                  children: [
                    "Лучший работодатель ",
                    i.jsx("span", { children: "Headhunter" }),
                  ],
                }),
                i.jsx("div", { className: ne.taskCheck, ref: s }),
                i.jsxs("div", {
                  className: ne.taskText,
                  children: [
                    "Лучший работодатель ",
                    i.jsx("span", { children: "Forbes" }),
                  ],
                }),
                i.jsx("div", { className: ne.taskCheck, ref: o }),
                i.jsxs("div", {
                  className: ne.taskText,
                  children: [
                    "Лучший работодатель ",
                    i.jsx("span", { children: "FutureToday" }),
                  ],
                }),
                i.jsx("div", { className: ne.taskCheck, ref: u }),
                i.jsxs("div", {
                  className: ne.taskText,
                  children: [
                    "Лучший работодатель ",
                    i.jsx("span", { children: "IMDB" }),
                  ],
                }),
                i.jsx("div", { className: ne.taskCheck, ref: a }),
              ],
            }),
            i.jsxs("div", {
              className: ne.taskCups,
              children: [
                i.jsx("div", {
                  children: i.jsx("img", {
                    src: c5,
                    alt: "cup",
                    className: "taskCup",
                    onMouseOut: () => M(),
                    onMouseUp: () => L(),
                    onMouseDown: (k) => P(k),
                    onMouseMove: (k) => h(k),
                    onTouchStart: (k) => w(k),
                    onTouchMove: (k) => d(k),
                    onTouchEnd: () => S(),
                    draggable: "true",
                  }),
                }),
                i.jsx("div", {
                  children: i.jsx("img", {
                    src: c5,
                    alt: "cup",
                    className: "taskCup",
                    onMouseOut: () => M(),
                    onMouseUp: () => L(),
                    onMouseDown: (k) => P(k),
                    onMouseMove: (k) => h(k),
                    onTouchStart: (k) => w(k),
                    onTouchMove: (k) => d(k),
                    onTouchEnd: () => S(),
                  }),
                }),
                i.jsx("div", {
                  children: i.jsx("img", {
                    src: c5,
                    alt: "cup",
                    className: "taskCup",
                    onMouseOut: () => M(),
                    onMouseUp: () => L(),
                    onMouseDown: (k) => P(k),
                    onMouseMove: (k) => h(k),
                    onTouchStart: (k) => w(k),
                    onTouchMove: (k) => d(k),
                    onTouchEnd: () => S(),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const uf = "_task__info_1e5cd_1",
  af = "_subtitels_1e5cd_17",
  cf = "_points_1e5cd_31",
  f5 = { task__info: uf, subtitels: af, points: cf };
function ff() {
  const e = P2((t) => t.points).points;
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: f5.task__info,
      children: [
        i.jsx("h4", { className: f5.subtitels, children: "Баланс " }),
        i.jsx("p", { className: f5.points, children: e }),
      ],
    }),
  });
}
const df = (e) => {
    switch (P2((n) => n.activeQuestion).activeQuestion.join("")) {
      case "00":
        return i.jsx(Uu, { ...e });
      case "01":
        return i.jsx(Yu, { ...e });
      case "02":
        return i.jsx(va, { ...e });
      case "03":
        return i.jsx(ka, { ...e });
      case "10":
        return i.jsx(Ta, { ...e });
      case "11":
        return i.jsx(Ua, { ...e });
      case "12":
        return i.jsx(Ga, { ...e });
      case "13":
        return i.jsx(ic, { ...e });
      case "20":
        return i.jsx(pc, { ...e });
      case "21":
        return i.jsx(Mc, { ...e });
      case "22":
        return i.jsx(Pc, { ...e });
      case "23":
        return i.jsx(Uc, { ...e });
      case "30":
        return i.jsx(Vc, { ...e });
      case "31":
        return i.jsx(Xc, { ...e });
      case "32":
        return i.jsx(Jc, { ...e });
      case "33":
        return i.jsx(of, { ...e });
      case "44":
        return i.jsx(ff, {});
    }
  },
  Cf = [
    [
      {
        question:
          "Что из перечисленного не относится к услугам, оказываемым НИПИГАЗом?",
        answer:
          "НИПИГАЗ управляет проектированием, поставками, логистикой и строительством масштабных объектов, а их дальнейшее функционирование (в т.ч. выпуск продукции) осуществляют сами Заказчики.",
        sizeAnswer: "13px",
        paddingQuestion: "56px",
        paddingAnswer: "10px",
        paddingAnswerBtm: "24px",
      },
      {
        question: "Какая из аббревиатур не связана с деятельностью НИПИГАЗа?",
        answer:
          "Engineering, procurement, construction (EPC), Система автоматизированного проектирования (САПР) и Building Information Model (BIM) — это про нас, а вот User Generated Content (UGC) — это что-то из области маркетинга :)",
        sizeAnswer: "12.5px",
        paddingQuestion: "80px",
        paddingAnswer: "59px",
        paddingAnswerBtm: "20px",
      },
      {
        question: "Какие из перечисленных технологий используют в НИПИГАЗе?",
        answer:
          "Документация — сложная вещь, поэтому пока что поручить её создание ИИ<br>не получается :(",
        sizeAnswer: "15px",
        paddingQuestion: "10px",
        paddingAnswer: "56px",
      },
      {
        question: "Какого отдела нет в Инжиниринговом центре НИПИГАЗа?",
        answer:
          "НИПИГАЗ проектирует масштабные объекты в области нефтегазопереработки<br>и нефтегазохимии, а авто и роботы –<br>не наш профиль.",
        sizeAnswer: "14px",
        paddingQuestion: "0px",
        paddingAnswer: "60px",
        paddingAnswerBtm: "20px",
      },
    ],
    [
      {
        question: "В каком из перечисленных регионов есть офис НИПИГАЗа?",
        answer:
          "Офисы объединенного Инжинирингового центра НИПИГАЗа располагаются в Краснодаре, Ростове-на-Дону, Москве и Тюмени! Присоединяйся к команде!",
        sizeAnswer: "11.6px",
        paddingQuestion: "56px",
        paddingAnswer: "56px",
        paddingAnswerBtm: "20px",
      },
      {
        question: "В каком городе началась история НИПИГАЗа?",
        answer:
          "Наши истоки – в Краснодаре. Именно здесь был основан головной институт в сфере переработки нефтяного газа &laquo;НИПИгазпереработка&raquo;.",
        sizeAnswer: "13.3px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
        paddingAnswerBtm: "20px",
      },
      {
        question:
          "В московском офисе НИПИГАЗа 9 утра. Сколько времени в офисе НИПИГАЗа<br>в Свободном (Амурская область)?",
        answer:
          "Разница во времени между Москвой<br>и Свободным – 6 часов, но это не мешает команде эффективно коммуницировать.",
        sizeAnswer: "15px",
        paddingQuestion: "10px",
        paddingAnswer: "10px",
      },
      {
        question:
          "Где находится один из первых спроектированных НИПИГАЗом объектов – крупный ГПЗ, запущенный в1974 году?",
        answer:
          "В 1974 году был запущен ГПЗ в Нижневартовске, административном центре Ханты-Мансийского автономного округа — Югры.",
        sizeAnswer: "13.7px",
        paddingQuestion: "0px",
        paddingAnswer: "5px",
      },
    ],
    [
      {
        question: "Какую круглую дату отпраздновал НИПИГАЗ в 2022 году?",
        answer:
          "НИПИГАЗ был основан более 50 лет назад,<br>в 1972 году, но до сих пор удерживает лидерские позиции в отрасли!",
        sizeAnswer: "15px",
        paddingQuestion: "56px",
        paddingAnswer: "20px",
      },
      {
        question: "Какая цифра отражает общее количество проектов НИПИГАЗа?",
        answer:
          "За свою историю НИПИГАЗ принял участие<br>в реализации более 100 масштабных проектов<br>в области нефтегазопереработки и нефтегазохимии в разных регионах нашей страны и за её пределами.",
        sizeAnswer: "12.6px",
        paddingQuestion: "0px",
        paddingAnswer: "40px",
      },
      {
        question:
          "В каком году на Сахалине начал работать первый в России завод по производству сжиженного природного газа (СПГ), спроектированный НИПИГАЗом?",
        answer:
          "18 февраля 2009 года на Сахалине, близ города Корсакова был запущен завод<br>по производству сжиженного природного газа, спроектированный НИПИГАЗом.",
        sizeAnswer: "15px",
        paddingQuestion: "10px",
        paddingAnswer: "20px",
      },
      {
        question:
          "Какова общая мощность объектов<br>по подготовке и переработке нефтяного<br>и природного газа, спроектированных при участии НИПИГАЗа?",
        answer:
          "Это целых 237 КМ3, что равно почти половине объема Черного моря!",
        sizeAnswer: "15px",
        paddingQuestion: "30px",
        paddingAnswer: "40px",
      },
    ],
    [
      {
        question: "Какие из этих льгот есть у сотрудников НИПИГАЗа?",
        answer:
          "Компания заботится о своих сотрудниках<br>и готова поддержать их и в профессиональном развитии, и в хобби, и в отдыхе.",
        sizeAnswer: "14px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
      },
      {
        question: "Какой спортивной секции нет в НИПИГАЗе?",
        answer:
          "В НИПИГАЗе много спортивных команд, а если какой-то пока нет (например, по синхронному плаванию) — можно найти коллег по интересам.",
        sizeAnswer: "14px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
      },
      {
        question:
          "Как называется программа развития выпускников технических вузов НИПИГАЗа?",
        answer:
          "Программа &laquo;Молодой специалист&raquo; — это возможность начать карьеру в одной из ведущих инжиниринговых компаний мира, включиться в крупные проекты<br>и обменяться опытом в компании, которая заботится<br>о своих сотрудниках.",
        sizeAnswer: "12px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
        paddingAnswerBtm: "20px",
      },
      {
        question: "В какие рейтинги входит НИПИГАЗ?",
        answer:
          "Рейтинга работодателей IMDB просто нет — это рейтинг кинолент :)",
        sizeAnswer: "15px",
        paddingQuestion: "0px",
        paddingAnswer: "30px",
      },
    ],
  ],
  pf = (e) => {
    const t = e.check ? "#99CC00" : "#C00000";
    return i.jsx(i.Fragment, {
      children: i.jsxs("svg", {
        width: "26",
        height: "33",
        viewBox: "0 0 26 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          i.jsx("path", {
            d: "M12.9232 2.32848C12.7366 2.32848 12.588 2.1797 12.588 1.99287V0.335605C12.588 0.148773 12.7366 0 12.9232 0C13.1098 0 13.2584 0.148773 13.2584 0.335605V1.99287C13.2584 2.1797 13.1098 2.32848 12.9232 2.32848Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M20.6528 5.53585C20.5664 5.53585 20.48 5.50471 20.4143 5.43897C20.283 5.3075 20.283 5.09645 20.4143 4.96498L21.5857 3.79209C21.717 3.66061 21.9278 3.66061 22.0591 3.79209C22.1904 3.92356 22.1904 4.13461 22.0591 4.26609L20.8877 5.43897C20.8255 5.50471 20.7391 5.53585 20.6528 5.53585Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M4.02208 22.1881C3.9357 22.1881 3.84931 22.157 3.78366 22.0912C3.65235 21.9598 3.65235 21.7487 3.78366 21.6172L4.95503 20.4443C5.08633 20.3129 5.29711 20.3129 5.42842 20.4443C5.55972 20.5758 5.55972 20.7869 5.42842 20.9183L4.25704 22.0912C4.19485 22.1535 4.10846 22.1881 4.02208 22.1881Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M25.511 13.2755H23.8559C23.6693 13.2755 23.5207 13.1267 23.5207 12.9399C23.5207 12.753 23.6693 12.6042 23.8559 12.6042H25.511C25.6976 12.6042 25.8462 12.753 25.8462 12.9399C25.8462 13.1267 25.6941 13.2755 25.511 13.2755Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M1.99029 13.2755H0.335171C0.148581 13.2755 0 13.1267 0 12.9399C0 12.753 0.148581 12.6042 0.335171 12.6042H1.99029C2.17688 12.6042 2.32546 12.753 2.32546 12.9399C2.32546 13.1267 2.17688 13.2755 1.99029 13.2755Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M21.8241 22.1881C21.7377 22.1881 21.6514 22.157 21.5857 22.0912L20.4143 20.9183C20.283 20.7869 20.283 20.5758 20.4143 20.4443C20.5456 20.3129 20.7564 20.3129 20.8877 20.4443L22.0591 21.6172C22.1904 21.7487 22.1904 21.9598 22.0591 22.0912C21.9934 22.1535 21.9105 22.1881 21.8241 22.1881Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M5.19345 5.53585C5.10707 5.53585 5.02068 5.50471 4.95503 5.43897L3.78366 4.26609C3.65235 4.13461 3.65235 3.92356 3.78366 3.79209C3.91496 3.66061 4.12574 3.66061 4.25704 3.79209L5.42842 4.96498C5.55972 5.09645 5.55972 5.3075 5.42842 5.43897C5.36622 5.50471 5.27983 5.53585 5.19345 5.53585Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M17.1456 3.17965C17.1007 3.17965 17.0592 3.17273 17.0177 3.15197C16.8484 3.07931 16.7655 2.8821 16.8381 2.71257L17.4773 1.18332C17.5499 1.01379 17.7468 0.930749 17.9161 1.00341C18.0854 1.07606 18.1684 1.27327 18.0958 1.44281L17.4566 2.97206C17.4013 3.10353 17.2769 3.17965 17.1456 3.17965Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M23.037 9.12719C22.9057 9.12719 22.7813 9.04761 22.726 8.9196C22.6569 8.74661 22.7364 8.55286 22.9092 8.4802L24.4433 7.85051C24.6161 7.78131 24.8096 7.86089 24.8822 8.03388C24.9513 8.20687 24.8718 8.40062 24.699 8.47328L23.1649 9.09951C23.1234 9.11681 23.0819 9.12719 23.037 9.12719Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M1.27504 18.0535C1.14374 18.0535 1.01935 17.974 0.964061 17.8459C0.894954 17.673 0.974427 17.4792 1.1472 17.4065L2.68138 16.7803C2.85415 16.7111 3.04765 16.7907 3.12021 16.9637C3.18932 17.1367 3.10985 17.3304 2.93708 17.4031L1.40289 18.0328C1.36143 18.0466 1.31651 18.0535 1.27504 18.0535Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M24.5331 18.1435C24.4882 18.1435 24.4468 18.1366 24.4053 18.1158L22.878 17.4758C22.7087 17.4031 22.6258 17.2059 22.6983 17.0364C22.7709 16.8668 22.9679 16.7838 23.1372 16.8565L24.6645 17.4965C24.8338 17.5692 24.9167 17.7664 24.8441 17.9359C24.7888 18.064 24.6645 18.1435 24.5331 18.1435Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M2.8404 9.04755C2.79548 9.04755 2.75402 9.04063 2.71255 9.01987L1.18528 8.3798C1.01597 8.30714 0.933037 8.10993 1.0056 7.9404C1.07816 7.77087 1.27512 7.68783 1.44443 7.76049L2.9717 8.40056C3.14102 8.47321 3.22395 8.67043 3.15138 8.83996C3.0961 8.97143 2.9717 9.04755 2.8404 9.04755Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M8.7766 3.14854C8.6453 3.14854 8.5209 3.06896 8.46562 2.94095L7.83674 1.40478C7.76763 1.23178 7.84711 1.03803 8.01988 0.965375C8.19264 0.896178 8.38615 0.975755 8.45871 1.14875L9.08759 2.68492C9.15669 2.85791 9.07722 3.05166 8.90445 3.12432C8.86299 3.13816 8.82152 3.14854 8.7766 3.14854Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M15.8602 28.9174H10.1934C9.87201 28.9174 9.61285 28.6579 9.61285 28.3361C9.61285 28.0143 9.87201 27.7549 10.1934 27.7549H15.8602C16.1815 27.7549 16.4407 28.0143 16.4407 28.3361C16.4407 28.6579 16.1815 28.9174 15.8602 28.9174Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M15.8602 30.7373H10.1934C9.87201 30.7373 9.61285 30.4778 9.61285 30.1561C9.61285 29.8343 9.87201 29.5748 10.1934 29.5748H15.8602C16.1815 29.5748 16.4407 29.8343 16.4407 30.1561C16.4407 30.4778 16.1815 30.7373 15.8602 30.7373Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M11.655 31.4223C11.5133 31.4223 11.4096 31.5503 11.4338 31.6887C11.572 32.4361 12.2251 33 13.0129 33C13.8007 33 14.4538 32.4361 14.592 31.6887C14.6162 31.5503 14.5125 31.4223 14.3709 31.4223H11.655Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M15.2624 27.0283H10.7116C9.92382 27.0283 9.26039 26.4125 9.20165 25.6236C9.00814 23.0564 7.96117 21.4303 6.85545 19.7073C5.64607 17.8286 4.39868 15.8876 4.39868 12.7461C4.39868 8.50429 7.42904 4.93373 11.6031 4.25906C12.5775 4.09991 13.6072 4.11374 14.5782 4.29366C18.6348 5.05136 21.5788 8.60463 21.5788 12.7426C21.5788 15.8841 20.3279 17.8251 19.122 19.7038C18.0128 21.4268 16.9659 23.0529 16.7758 25.6202C16.7136 26.4125 16.0502 27.0283 15.2624 27.0283Z",
            fill: t,
          }),
          i.jsx("path", {
            d: "M8.82503 18.1331C8.65226 18.1331 8.48295 18.0535 8.37238 17.9012C5.26946 13.6318 7.55691 9.62529 7.65712 9.45922C7.81261 9.19281 8.15469 9.10286 8.42075 9.26201C8.68682 9.4177 8.77666 9.76023 8.62117 10.0266C8.53478 10.1754 6.61705 13.5868 9.27769 17.2439C9.46082 17.493 9.40553 17.8424 9.15329 18.0258C9.05309 18.0985 8.93906 18.1331 8.82503 18.1331Z",
            fill: "white",
          }),
        ],
      }),
    });
  };
function hf(e) {
  const { openFirework: t, openTask: n, closePoints: r } = e,
    [l, s] = R.useState(!1),
    [o, u] = R.useState(!1),
    a = L1(),
    c = P2((D) => D.activeQuestion).activeQuestion,
    p = P2((D) => D.arrQuestionsReducer).arrQuestions;
  let f = 0,
    C = "Отличный результат!",
    v = "",
    g = "20px",
    w = "0px",
    P = "0px",
    m = "26px";
  if (c[0] !== 4) {
    f = p[c[0]][c[1]];
    const D = Cf[c[0]][c[1]];
    (v = D.question),
      (C = D.answer),
      (g = D.sizeAnswer),
      (w = D.paddingAnswer),
      (P = D.paddingQuestion),
      (m = D.paddingAnswerBtm ? D.paddingAnswerBtm : "26px");
  }
  const [d, h] = R.useState("15px"),
    x = { fontSize: d },
    [S, L] = R.useState(P),
    [_, M] = R.useState("26px"),
    k = { paddingRight: S, paddingBottom: _ },
    j = P2((D) => D.checkAnswerReducer).checkAnswer,
    [E, O] = R.useState("wait"),
    [F, I] = R.useState(!1),
    B = (D) => {
      I(D);
    },
    [X, G] = R.useState(!1),
    N = () => {
      if (X) {
        if (
          (q("wait"),
          O("wait"),
          t(!1),
          s(!1),
          h("15px"),
          n(!1),
          p.flat().filter((D) => D === 0).length === 16)
        ) {
          a(J7([4, 4])), h("20px"), s(!0), r(), u(!0), n(!0), t(!0);
          return;
        }
        return;
      }
      F &&
        (O(j),
        j === "true" && (t(!0), a(_u(f))),
        a(ju(c)),
        I(!1),
        G(!0),
        s(!0),
        h(g),
        L(w),
        M(m));
    };
  return i.jsx(i.Fragment, {
    children: i.jsx("div", {
      className:
        "main__task task " +
        (E === "wait" ? "" : E === "true" ? "success" : "danger") +
        (o ? "end" : ""),
      children: i.jsxs("div", {
        className: "task__wrapper",
        children: [
          i.jsx("div", {
            className: E === "wait" ? "task__head" : "task__head-answer",
            children: i.jsxs("div", {
              className: "task__heading",
              style: k,
              children: [
                i.jsx("div", {
                  className: "task__points",
                  children:
                    E === "wait"
                      ? (c[1] + 1) * 100
                      : i.jsx(pf, { check: E === "true" }),
                }),
                i.jsx("h3", {
                  className: "task__title " + (l ? "answer" : ""),
                  style: x,
                  dangerouslySetInnerHTML: l ? { __html: C } : { __html: v },
                }),
              ],
            }),
          }),
          i.jsx(df, { selectAnswer: B, checkClick: l }),
          i.jsx("button", {
            className: "btn task__btn",
            onClick: N,
            children: E === "wait" ? "ГОТОВО" : "ОГО",
          }),
        ],
      }),
    }),
  });
}
function mf() {
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: "main__firework active",
      children: [
        i.jsxs("svg", {
          width: "235",
          height: "374",
          viewBox: "0 0 235 374",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            i.jsx("path", {
              d: "M15.3004 302.275L20.9001 302.297L20.8159 324.196L15.2162 324.174L15.3004 302.275Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M51.4064 317.769C53.3714 318.51 55.5618 317.519 56.3027 315.554C57.0436 313.589 56.0527 311.398 54.0878 310.658C52.1228 309.917 49.9324 310.908 49.1915 312.873C48.4506 314.837 49.4414 317.028 51.4064 317.769Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M10.902 283.473L8.51981 280.437C7.89856 280.951 2.33188 284.944 -4.0584 278.366L-6.79035 281.077C0.35922 288.475 7.95987 285.89 10.902 283.473Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M27.0499 292.139L40.1697 285.078L41.9706 288.424L28.8507 295.485L27.0499 292.139Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M20.3769 273.366C22.7162 274.248 25.2932 273.082 26.1752 270.743C27.0573 268.404 25.8915 265.827 23.5523 264.945C21.213 264.063 18.636 265.228 17.754 267.568C16.8719 269.907 18.0377 272.484 20.3769 273.366Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M19.3455 345.543C21.3105 346.284 23.5009 345.293 24.2419 343.328C24.9828 341.363 23.9919 339.173 22.0269 338.432C20.062 337.691 17.8715 338.682 17.1306 340.647C16.3897 342.612 17.3806 344.802 19.3455 345.543Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M36.5806 374.379L34.1984 371.343C33.5771 371.857 28.0105 375.849 21.6202 369.272L18.8882 371.982C26.0378 379.381 33.6385 376.796 36.5806 374.379Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M46.0555 364.272C48.3947 365.154 50.9717 363.988 51.8538 361.649C52.7358 359.309 51.5701 356.732 49.2308 355.85C46.8916 354.968 44.3146 356.134 43.4325 358.473C42.5505 360.813 43.7163 363.39 46.0555 364.272Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M8.81144 234.778L21.9322 227.719L23.7325 231.065L10.6118 238.124L8.81144 234.778Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M63.6906 268.751L63.6905 275.27C65.0833 275.261 76.7397 275.809 78.4437 291.413L84.8938 290.746C83.0411 273.268 70.2098 268.751 63.6906 268.751Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M91.2019 252.238L93.7469 249.416L104.811 259.395L102.266 262.217L91.2019 252.238Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M104.411 217.656L117.528 210.589L119.331 213.934L106.213 221.001L104.411 217.656Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M55.2608 225.067C57.6 225.95 60.177 224.784 61.0591 222.445C61.9411 220.105 60.7753 217.528 58.4361 216.646C56.0969 215.764 53.5199 216.93 52.6378 219.269C51.7911 221.515 52.9216 224.185 55.2608 225.067Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M64.7448 248.949L62.3626 245.914C61.7414 246.428 56.1747 250.42 49.7844 243.843L47.0525 246.553C54.1085 253.916 61.7091 251.331 64.7448 248.949Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M77.4703 111.18C79.8095 112.062 82.3865 110.896 83.2686 108.557C84.1506 106.217 82.9849 103.64 80.6456 102.758C78.3064 101.876 75.7294 103.042 74.8473 105.381C73.8717 107.685 75.1311 110.298 77.4703 111.18Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M65.9467 72.5771L79.0662 65.5125L80.8679 68.8584L67.7484 75.923L65.9467 72.5771Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M120.69 106.529L120.69 113.048C122.083 113.039 133.739 113.587 135.443 129.192L141.894 128.524C140.134 111.082 127.209 106.529 120.69 106.529Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M148.623 100.868L151.168 98.0461L162.232 108.025L159.687 110.847L148.623 100.868Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M139.247 86.0829L152.364 79.0159L154.166 82.3612L141.049 89.4283L139.247 86.0829Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M112.389 62.7875C114.728 63.6695 117.305 62.5037 118.187 60.1645C119.069 57.8253 117.904 55.2483 115.564 54.3662C113.225 53.4842 110.648 54.65 109.766 56.9892C108.884 59.3284 110.05 61.9054 112.389 62.7875Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M121.744 86.7274L119.362 83.6917C118.741 84.2056 113.174 88.1983 106.784 81.6208L104.052 84.3312C111.237 91.6359 118.709 89.1096 121.744 86.7274Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M6.71088 181.984L19.8304 174.919L21.6321 178.265L8.5126 185.33L6.71088 181.984Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M58.8079 23.7744L56.5146 29.8564C57.731 30.3151 68.5252 35.1333 64.4601 50.1657L70.7538 51.8976C75.2085 34.9815 64.8899 26.0677 58.8079 23.7744Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M189.981 112.497L195.581 112.52L195.494 134.42L189.894 134.397L189.981 112.497Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M133.385 244.906C135.35 245.647 137.541 244.657 138.281 242.692C139.022 240.727 138.031 238.536 136.066 237.795C134.102 237.054 131.911 238.045 131.17 240.01C130.336 241.94 131.42 244.166 133.385 244.906Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M194.6 94.7477L192.218 91.712C191.596 92.2258 186.03 96.2186 179.639 89.641L176.907 92.3515C184.092 99.6561 191.658 97.1651 194.6 94.7477Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M212.69 104.042L225.809 96.9766L227.61 100.322L214.492 107.387L212.69 104.042Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M127.816 159.339L127.816 165.858C129.116 165.814 140.865 166.397 142.569 182.002L149.02 181.334C147.167 163.857 134.371 159.246 127.816 159.339Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M164.2 133.977L169.8 133.999L169.713 155.899L164.113 155.877L164.2 133.977Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M144.31 219.447L146.855 216.625L157.92 226.605L155.374 229.427L144.31 219.447Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M165.299 199.256L178.416 192.188L180.218 195.534L167.101 202.601L165.299 199.256Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M15.0328 128.248L15.0327 134.768C16.4255 134.758 28.0818 135.306 29.7858 150.911L36.236 150.244C34.3832 132.766 21.552 128.248 15.0328 128.248Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M42.8921 122.678L45.438 119.857L56.4991 129.84L53.9531 132.661L42.8921 122.678Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M33.5284 107.728L46.6465 100.663L48.4484 104.008L35.3303 111.074L33.5284 107.728Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M16.087 108.447L13.7048 105.411C13.0835 105.925 7.51686 109.918 1.12658 103.34L-1.60538 106.051C5.54419 113.449 13.0513 110.829 16.087 108.447Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M70.5284 183.159L70.5283 189.678C71.9211 189.669 83.5774 190.217 85.2815 205.821L91.7316 205.154C89.9724 187.712 77.0828 183.065 70.5284 183.159Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M98.4365 177.489L100.982 174.668L112.044 184.65L109.498 187.471L98.4365 177.489Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M91.2532 134.971L104.37 127.904L106.173 131.249L93.0555 138.316L91.2532 134.971Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M71.6178 163.264L69.2356 160.228C68.6144 160.742 63.0477 164.735 56.6574 158.157L53.9255 160.868C61.075 168.266 68.5821 165.646 71.6178 163.264Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M78.6226 354.429L78.6225 360.948C80.0154 360.939 91.6717 361.486 93.3757 377.091L99.8259 376.424C98.0667 358.981 85.1418 354.429 78.6226 354.429Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M113.115 351.231L115.66 348.409L126.724 358.388L124.179 361.21L113.115 351.231Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M103.804 336.398L116.921 329.331L118.724 332.676L105.606 339.743L103.804 336.398Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M86.2616 337.003L83.8795 333.967C83.2582 334.481 77.6915 338.474 71.3013 331.896L68.5693 334.607C75.7189 342.005 83.2259 339.385 86.2616 337.003Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M115.715 301.406L115.715 307.925C117.108 307.916 128.764 308.463 130.468 324.068L136.918 323.401C135.159 305.958 122.234 301.406 115.715 301.406Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M148.06 294.743L150.606 291.922L161.667 301.905L159.121 304.726L148.06 294.743Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M138.769 279.89L151.886 272.823L153.688 276.168L140.571 283.235L138.769 279.89Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M121.242 280.512L118.86 277.476C118.239 277.99 112.672 281.983 106.282 275.405L103.55 278.116C110.699 285.514 118.206 282.894 121.242 280.512Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M35.2631 73.4628C39.2865 74.9799 43.7963 72.9398 45.3134 68.9163C46.8305 64.8928 44.7904 60.3831 40.767 58.866C36.7435 57.3489 32.2337 59.3889 30.7166 63.4124C29.1059 67.4006 31.146 71.9104 35.2631 73.4628Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M101.414 164.453C106.841 166.5 112.897 163.76 114.943 158.333C116.99 152.906 114.25 146.85 108.823 144.804C103.396 142.757 97.3402 145.497 95.2939 150.924C93.3411 156.386 96.0807 162.442 101.414 164.453Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M41.5766 206.655C47.0037 208.702 53.0596 205.962 55.106 200.535C57.1523 195.108 54.4128 189.052 48.9857 187.006C43.5587 184.959 37.5027 187.699 35.4564 193.126C33.4101 198.553 36.2432 204.644 41.5766 206.655Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M84.3194 239.551C88.3429 241.068 92.8526 239.028 94.3697 235.004C95.8868 230.981 93.8467 226.471 89.8233 224.954C85.7998 223.437 81.29 225.477 79.7729 229.501C78.2558 233.524 80.2959 238.034 84.3194 239.551Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M39.7451 345.861C43.7686 347.378 48.2783 345.338 49.7954 341.314C51.3125 337.291 49.2725 332.781 45.249 331.264C41.2255 329.747 36.7157 331.787 35.1986 335.811C33.6815 339.834 35.7216 344.344 39.7451 345.861Z",
              fill: "#008C95",
            }),
          ],
        }),
        i.jsxs("svg", {
          width: "411",
          height: "375",
          viewBox: "0 0 411 375",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            i.jsx("path", {
              d: "M375.368 247.631L369.769 247.653L369.858 269.553L375.457 269.53L375.368 247.631Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M353.586 268.608L351.04 265.788L339.979 275.772L342.526 278.593L353.586 268.608Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M339.317 263.238C337.352 263.979 335.162 262.988 334.421 261.023C333.68 259.058 334.671 256.867 336.636 256.126C338.601 255.385 340.791 256.376 341.532 258.341C342.273 260.306 341.282 262.497 339.317 263.238Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M420.193 231.758L417.647 228.937L406.584 238.919L409.13 241.74L420.193 231.758Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M379.822 228.942L382.204 225.906C382.825 226.42 388.392 230.412 394.782 223.835L397.514 226.545C390.364 233.944 382.857 231.324 379.822 228.942Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M363.706 237.628L350.586 230.563L348.785 233.909L361.904 240.974L363.706 237.628Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M370.346 218.835C368.007 219.717 365.43 218.551 364.548 216.212C363.666 213.872 364.832 211.295 367.171 210.413C369.51 209.531 372.087 210.697 372.969 213.036C373.851 215.376 372.686 217.953 370.346 218.835Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M403.638 190.744L401.091 187.923L390.031 197.907L392.577 200.728L403.638 190.744Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M324.328 224.639L318.728 224.66L318.812 246.559L324.412 246.537L324.328 224.639Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M307.423 360.334C305.458 361.075 303.268 360.084 302.527 358.119C301.786 356.154 302.777 353.963 304.742 353.223C306.707 352.482 308.897 353.473 309.638 355.437C310.379 357.402 309.388 359.593 307.423 360.334Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M388.289 328.85L385.743 326.028L374.68 336.01L377.226 338.832L388.289 328.85Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M347.928 326.038L350.31 323.003C350.931 323.516 356.498 327.509 362.888 320.932L365.62 323.642C358.47 331.04 350.87 328.456 347.928 326.038Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M331.793 334.714L318.673 327.649L316.872 330.995L329.991 338.059L331.793 334.714Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M338.452 315.931C336.113 316.813 333.536 315.647 332.654 313.308C331.772 310.969 332.938 308.392 335.277 307.51C337.616 306.628 340.193 307.793 341.075 310.132C341.957 312.472 340.792 315.049 338.452 315.931Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M371.726 287.837L369.179 285.017L358.119 295.001L360.665 297.822L371.726 287.837Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M397.597 313.99L384.478 306.925L382.676 310.271L395.796 317.336L397.597 313.99Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M409.752 269.489L409.752 276.008C408.359 275.999 396.703 276.547 394.999 292.151L388.549 291.484C390.402 274.007 403.233 269.489 409.752 269.489Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M292.42 321.809L286.82 321.831L286.907 343.731L292.507 343.709L292.42 321.809Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M274.414 306.52L276.796 303.484C277.417 303.998 282.984 307.991 289.374 301.413L292.106 304.123C284.957 311.522 277.356 308.937 274.414 306.52Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M258.175 315.127L245.057 308.062L243.255 311.408L256.373 318.473L258.175 315.127Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M264.939 296.413C262.599 297.295 260.022 296.129 259.14 293.79C258.258 291.451 259.424 288.874 261.763 287.991C264.103 287.109 266.68 288.275 267.562 290.614C268.444 292.954 267.278 295.531 264.939 296.413Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M298.239 268.294L295.694 265.472L284.63 275.451L287.175 278.273L298.239 268.294Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M324.081 294.47L310.96 287.408L309.159 290.754L322.279 297.817L324.081 294.47Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M274.723 244.397L269.123 244.419L269.21 266.319L274.81 266.297L274.723 244.397Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M240.53 254.638C238.565 255.378 236.375 254.388 235.634 252.423C234.893 250.458 235.884 248.267 237.849 247.526C239.814 246.785 242.004 247.776 242.745 249.741C243.486 251.706 242.495 253.897 240.53 254.638Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M218.897 302.275L213.297 302.297L213.381 324.196L218.981 324.174L218.897 302.275Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M182.791 317.769C180.826 318.51 178.635 317.519 177.895 315.554C177.154 313.589 178.145 311.398 180.109 310.658C182.074 309.917 184.265 310.908 185.006 312.873C185.747 314.837 184.756 317.028 182.791 317.769Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M223.295 283.473L225.677 280.437C226.299 280.951 231.865 284.944 238.256 278.366L240.988 281.077C233.838 288.475 226.237 285.89 223.295 283.473Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M207.147 292.139L194.028 285.078L192.227 288.424L205.347 295.485L207.147 292.139Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M213.82 273.366C211.481 274.248 208.904 273.082 208.022 270.743C207.14 268.404 208.306 265.827 210.645 264.945C212.984 264.063 215.561 265.228 216.443 267.568C217.325 269.907 216.16 272.484 213.82 273.366Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M272.577 359.205L270.032 356.384L258.968 366.364L261.514 369.186L272.577 359.205Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M249.08 335.259L243.48 335.282L243.567 357.182L249.167 357.16L249.08 335.259Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M214.852 345.543C212.887 346.284 210.696 345.293 209.955 343.328C209.214 341.363 210.205 339.173 212.17 338.432C214.135 337.691 216.326 338.682 217.067 340.647C217.808 342.612 216.817 344.802 214.852 345.543Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M197.617 374.379L199.999 371.343C200.62 371.857 206.187 375.849 212.577 369.272L215.309 371.982C208.159 379.381 200.559 376.796 197.617 374.379Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M188.142 364.272C185.803 365.154 183.226 363.988 182.343 361.649C181.461 359.309 182.627 356.732 184.966 355.85C187.306 354.968 189.883 356.134 190.765 358.473C191.647 360.813 190.481 363.39 188.142 364.272Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M336.29 173.555L330.69 173.579L330.784 195.479L336.384 195.455L336.29 173.555Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M318.553 205.407L316.008 202.585L304.943 212.564L307.489 215.386L318.553 205.407Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M241.45 226.183L243.832 223.148C244.454 223.661 250.02 227.654 256.411 221.077L259.143 223.787C252.087 231.15 244.486 228.565 241.45 226.183Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M225.386 234.778L212.265 227.719L210.465 231.065L223.585 238.124L225.386 234.778Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M291.194 214.089L278.074 207.024L276.273 210.37L289.392 217.435L291.194 214.089Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M170.507 268.751L170.507 275.27C169.114 275.261 157.458 275.809 155.754 291.413L149.303 290.746C151.156 273.268 163.987 268.751 170.507 268.751Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M142.995 252.238L140.45 249.416L129.386 259.395L131.931 262.217L142.995 252.238Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M129.786 217.656L116.669 210.589L114.867 213.934L127.984 221.001L129.786 217.656Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M178.937 225.067C176.597 225.95 174.02 224.784 173.138 222.445C172.256 220.105 173.422 217.528 175.761 216.646C178.1 215.764 180.677 216.93 181.559 219.269C182.406 221.515 181.276 224.185 178.937 225.067Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M169.452 248.949L171.835 245.914C172.456 246.428 178.023 250.42 184.413 243.843L187.145 246.553C180.089 253.916 172.488 251.331 169.452 248.949Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M285.905 188.474L288.287 185.439C288.908 185.953 294.475 189.945 300.865 183.368L303.597 186.078C296.448 193.476 288.847 190.892 285.905 188.474Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M249.175 213.224C246.836 214.107 244.259 212.941 243.377 210.602C242.495 208.262 243.66 205.685 246 204.803C248.339 203.921 250.916 205.087 251.798 207.426C252.774 209.73 251.514 212.342 249.175 213.224Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M156.727 111.18C154.388 112.062 151.811 110.896 150.929 108.557C150.047 106.217 151.212 103.64 153.552 102.758C155.891 101.876 158.468 103.042 159.35 105.381C160.326 107.685 159.066 110.298 156.727 111.18Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M168.25 72.5771L155.131 65.5125L153.329 68.8584L166.449 75.923L168.25 72.5771Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M113.507 106.529L113.507 113.048C112.114 113.039 100.458 113.587 98.7539 129.192L92.3038 128.524C94.063 111.082 106.988 106.529 113.507 106.529Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M85.5739 100.868L83.0289 98.0461L71.9648 108.025L74.5099 110.847L85.5739 100.868Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M94.9507 86.0829L81.8335 79.0159L80.0311 82.3612L93.1484 89.4283L94.9507 86.0829Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M121.808 62.7875C119.469 63.6695 116.892 62.5037 116.01 60.1645C115.128 57.8253 116.294 55.2483 118.633 54.3662C120.972 53.4842 123.549 54.65 124.431 56.9892C125.313 59.3284 124.148 61.9054 121.808 62.7875Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M112.453 86.7274L114.835 83.6917C115.456 84.2056 121.023 88.1983 127.413 81.6208L130.145 84.3312C122.961 91.6359 115.489 89.1096 112.453 86.7274Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M243.544 173.347L245.926 170.312C246.547 170.825 252.114 174.818 258.504 168.241L261.236 170.951C254.18 178.314 246.579 175.729 243.544 173.347Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M227.486 181.984L214.367 174.919L212.565 178.265L225.685 185.33L227.486 181.984Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M251.397 160.447C249.058 161.329 246.481 160.163 245.599 157.824C244.717 155.484 245.883 152.907 248.222 152.025C250.561 151.143 253.138 152.309 254.02 154.648C254.867 156.894 253.736 159.565 251.397 160.447Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M175.389 23.7744L177.683 29.8564C176.466 30.3151 165.672 35.1333 169.737 50.1657L163.443 51.8976C158.989 34.9815 169.307 26.0677 175.389 23.7744Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M44.216 112.497L38.616 112.52L38.7029 134.42L44.303 134.397L44.216 112.497Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M100.812 244.906C98.8472 245.647 96.6568 244.657 95.9159 242.692C95.1749 240.727 96.1658 238.536 98.1308 237.795C100.096 237.054 102.286 238.045 103.027 240.01C103.862 241.94 102.777 244.166 100.812 244.906Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M39.5975 94.7477L41.9797 91.712C42.6009 92.2258 48.1676 96.2186 54.5579 89.641L57.2899 92.3515C50.105 99.6561 42.5396 97.1651 39.5975 94.7477Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M21.5068 104.042L8.38873 96.9766L6.58687 100.322L19.705 107.387L21.5068 104.042Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M106.381 159.339L106.381 165.858C105.082 165.814 93.3318 166.397 91.6278 182.002L85.1776 181.334C87.0304 163.857 99.8264 159.246 106.381 159.339Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M69.9975 133.977L64.3975 133.999L64.4844 155.899L70.0845 155.877L69.9975 133.977Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M89.8869 219.447L87.3418 216.625L76.2778 226.605L78.8228 229.427L89.8869 219.447Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M68.8984 199.256L55.7811 192.188L53.9788 195.534L67.096 202.601L68.8984 199.256Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M219.165 128.248L219.165 134.768C217.772 134.758 206.115 135.306 204.411 150.911L197.961 150.244C199.814 132.766 212.645 128.248 219.165 128.248Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M191.305 122.678L188.759 119.857L177.698 129.84L180.244 132.661L191.305 122.678Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M200.669 107.728L187.551 100.663L185.749 104.008L198.867 111.074L200.669 107.728Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M218.11 108.447L220.492 105.411C221.114 105.925 226.68 109.918 233.071 103.34L235.803 106.051C228.653 113.449 221.146 110.829 218.11 108.447Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M163.669 183.159L163.669 189.678C162.276 189.669 150.62 190.217 148.916 205.821L142.466 205.154C144.225 187.712 157.114 183.065 163.669 183.159Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M135.761 177.489L133.215 174.668L122.154 184.65L124.699 187.471L135.761 177.489Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M142.944 134.971L129.827 127.904L128.025 131.249L141.142 138.316L142.944 134.971Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M162.579 163.264L164.962 160.228C165.583 160.742 171.15 164.735 177.54 158.157L180.272 160.868C173.122 168.266 165.615 165.646 162.579 163.264Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M155.575 354.429L155.575 360.948C154.182 360.939 142.526 361.486 140.822 377.091L134.371 376.424C136.131 358.981 149.055 354.429 155.575 354.429Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M121.082 351.231L118.537 348.409L107.473 358.388L110.018 361.21L121.082 351.231Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M130.393 336.398L117.276 329.331L115.474 332.676L128.591 339.743L130.393 336.398Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M147.936 337.003L150.318 333.967C150.939 334.481 156.506 338.474 162.896 331.896L165.628 334.607C158.478 342.005 150.971 339.385 147.936 337.003Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M118.482 301.406L118.482 307.925C117.089 307.916 105.433 308.463 103.729 324.068L97.2789 323.401C99.0381 305.958 111.963 301.406 118.482 301.406Z",
              fill: "#99CC00",
            }),
            i.jsx("path", {
              d: "M86.1373 294.743L83.5913 291.922L72.5302 301.905L75.0762 304.726L86.1373 294.743Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M95.4285 279.89L82.3112 272.823L80.5089 276.168L93.6261 283.235L95.4285 279.89Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M112.955 280.512L115.337 277.476C115.959 277.99 121.525 281.983 127.916 275.405L130.648 278.116C123.498 285.514 115.991 282.894 112.955 280.512Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M198.934 73.4628C194.911 74.9799 190.401 72.9398 188.884 68.9163C187.367 64.8928 189.407 60.3831 193.43 58.866C197.454 57.3489 201.964 59.3889 203.481 63.4124C205.091 67.4006 203.051 71.9104 198.934 73.4628Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M132.783 164.453C127.356 166.5 121.3 163.76 119.254 158.333C117.208 152.906 119.947 146.85 125.374 144.804C130.801 142.757 136.857 145.497 138.903 150.924C140.856 156.386 138.117 162.442 132.783 164.453Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M192.621 206.655C187.194 208.702 181.138 205.962 179.091 200.535C177.045 195.108 179.785 189.052 185.212 187.006C190.639 184.959 196.695 187.699 198.741 193.126C200.787 198.553 197.954 204.644 192.621 206.655Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M149.878 239.551C145.854 241.068 141.345 239.028 139.828 235.004C138.31 230.981 140.351 226.471 144.374 224.954C148.397 223.437 152.907 225.477 154.424 229.501C155.941 233.524 153.901 238.034 149.878 239.551Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M300.481 249.239C296.457 250.756 291.948 248.716 290.43 244.693C288.913 240.669 290.953 236.159 294.977 234.642C299 233.125 303.51 235.165 305.027 239.189C306.638 243.177 304.598 247.687 300.481 249.239Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M194.452 345.861C190.429 347.378 185.919 345.338 184.402 341.314C182.885 337.291 184.925 332.781 188.948 331.264C192.972 329.747 197.481 331.787 198.999 335.811C200.516 339.834 198.476 344.344 194.452 345.861Z",
              fill: "#008C95",
            }),
            i.jsx("path", {
              d: "M367.866 199.785C362.439 201.831 356.383 199.092 354.337 193.665C352.29 188.238 355.03 182.182 360.457 180.135C365.884 178.089 371.94 180.828 373.986 186.255C376.032 191.682 373.293 197.738 367.866 199.785Z",
              fill: "#008C95",
            }),
          ],
        }),
      ],
    }),
  });
}
function vf() {
  const [e, t] = R.useState(!1),
    [n, r] = R.useState(!1),
    [l, s] = R.useState(!1),
    o = () => {
      s(!0);
    },
    u = (c) => {
      t(c);
    },
    a = (c) => {
      r(c);
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(Po, {}),
      i.jsxs("main", {
        className: "main",
        children: [
          i.jsx(Pu, { openTask: u }),
          i.jsx(Ou, { tasksEnd: l }),
          e && i.jsx(hf, { openFirework: a, openTask: u, closePoints: o }),
          n && i.jsx(mf, {}),
          i.jsx("div", { className: "blur " + (e ? "active" : "") }),
        ],
      }),
    ],
  });
}
const yf = Tu();
d5.createRoot(document.getElementById("root")).render(
  i.jsx(ze.StrictMode, {
    children: i.jsx(_o, { store: yf, children: i.jsx(vf, {}) }),
  })
);
