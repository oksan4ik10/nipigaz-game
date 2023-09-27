(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var dt = { exports: {} },
  B6 = {},
  pt = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var M5 = Symbol.for("react.element"),
  Ns = Symbol.for("react.portal"),
  Es = Symbol.for("react.fragment"),
  Ts = Symbol.for("react.strict_mode"),
  Ps = Symbol.for("react.profiler"),
  Rs = Symbol.for("react.provider"),
  Os = Symbol.for("react.context"),
  Is = Symbol.for("react.forward_ref"),
  zs = Symbol.for("react.suspense"),
  Ds = Symbol.for("react.memo"),
  Fs = Symbol.for("react.lazy"),
  N7 = Symbol.iterator;
function Us(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (N7 && e[N7]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ht = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mt = Object.assign,
  xt = {};
function _4(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xt),
    (this.updater = n || ht);
}
_4.prototype.isReactComponent = {};
_4.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_4.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vt() {}
vt.prototype = _4.prototype;
function d8(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xt),
    (this.updater = n || ht);
}
var p8 = (d8.prototype = new vt());
p8.constructor = d8;
mt(p8, _4.prototype);
p8.isPureReactComponent = !0;
var E7 = Array.isArray,
  jt = Object.prototype.hasOwnProperty,
  h8 = { current: null },
  yt = { key: !0, ref: !0, __self: !0, __source: !0 };
function gt(e, t, n) {
  var s,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      jt.call(t, s) && !yt.hasOwnProperty(s) && (l[s] = t[s]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), C = 0; C < a; C++) u[C] = arguments[C + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (s in ((a = e.defaultProps), a)) l[s] === void 0 && (l[s] = a[s]);
  return {
    $$typeof: M5,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: h8.current,
  };
}
function Vs(e, t) {
  return {
    $$typeof: M5,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function m8(e) {
  return typeof e == "object" && e !== null && e.$$typeof === M5;
}
function Bs(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var T7 = /\/+/g;
function A9(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Bs("" + e.key)
    : t.toString(36);
}
function X5(e, t, n, s, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case M5:
          case Ns:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = s === "" ? "." + A9(o, 0) : s),
      E7(l)
        ? ((n = ""),
          e != null && (n = e.replace(T7, "$&/") + "/"),
          X5(l, t, n, "", function (C) {
            return C;
          }))
        : l != null &&
          (m8(l) &&
            (l = Vs(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(T7, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (s = s === "" ? "." : s + ":"), E7(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = s + A9(i, a);
      o += X5(i, t, n, u, l);
    }
  else if (((u = Us(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = s + A9(i, a++)), (o += X5(i, t, n, u, l));
  else if (i === "object")
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
function T5(e, t, n) {
  if (e == null) return e;
  var s = [],
    l = 0;
  return (
    X5(e, s, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    s
  );
}
function $s(e) {
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
var H1 = { current: null },
  G5 = { transition: null },
  Qs = {
    ReactCurrentDispatcher: H1,
    ReactCurrentBatchConfig: G5,
    ReactCurrentOwner: h8,
  };
Y.Children = {
  map: T5,
  forEach: function (e, t, n) {
    T5(
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
      T5(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      T5(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!m8(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = _4;
Y.Fragment = Es;
Y.Profiler = Ps;
Y.PureComponent = d8;
Y.StrictMode = Ts;
Y.Suspense = zs;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qs;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = mt({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = h8.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      jt.call(t, u) &&
        !yt.hasOwnProperty(u) &&
        (s[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) s.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var C = 0; C < u; C++) a[C] = arguments[C + 2];
    s.children = a;
  }
  return { $$typeof: M5, type: e.type, key: l, ref: i, props: s, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Os,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rs, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = gt;
Y.createFactory = function (e) {
  var t = gt.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Is, render: e };
};
Y.isValidElement = m8;
Y.lazy = function (e) {
  return { $$typeof: Fs, _payload: { _status: -1, _result: e }, _init: $s };
};
Y.memo = function (e, t) {
  return { $$typeof: Ds, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = G5.transition;
  G5.transition = {};
  try {
    e();
  } finally {
    G5.transition = t;
  }
};
Y.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Y.useCallback = function (e, t) {
  return H1.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return H1.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return H1.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return H1.current.useEffect(e, t);
};
Y.useId = function () {
  return H1.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return H1.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return H1.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return H1.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return H1.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return H1.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return H1.current.useRef(e);
};
Y.useState = function (e) {
  return H1.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return H1.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return H1.current.useTransition();
};
Y.version = "18.2.0";
pt.exports = Y;
var L = pt.exports;
const $2 = _s(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ws = L,
  bs = Symbol.for("react.element"),
  Hs = Symbol.for("react.fragment"),
  Ys = Object.prototype.hasOwnProperty,
  Xs = Ws.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gs = { key: !0, ref: !0, __self: !0, __source: !0 };
function wt(e, t, n) {
  var s,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (s in t) Ys.call(t, s) && !Gs.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: bs,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Xs.current,
  };
}
B6.Fragment = Hs;
B6.jsx = wt;
B6.jsxs = wt;
dt.exports = B6;
var r = dt.exports,
  de = {},
  kt = { exports: {} },
  c2 = {},
  Mt = { exports: {} },
  Lt = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, V) {
    var D = R.length;
    R.push(V);
    e: for (; 0 < D; ) {
      var u1 = (D - 1) >>> 1,
        j1 = R[u1];
      if (0 < l(j1, V)) (R[u1] = V), (R[D] = j1), (D = u1);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function s(R) {
    if (R.length === 0) return null;
    var V = R[0],
      D = R.pop();
    if (D !== V) {
      R[0] = D;
      e: for (var u1 = 0, j1 = R.length, H3 = j1 >>> 1; u1 < H3; ) {
        var T2 = 2 * (u1 + 1) - 1,
          R4 = R[T2],
          g2 = T2 + 1,
          J2 = R[g2];
        if (0 > l(R4, D))
          g2 < j1 && 0 > l(J2, R4)
            ? ((R[u1] = J2), (R[g2] = D), (u1 = g2))
            : ((R[u1] = R4), (R[T2] = D), (u1 = T2));
        else if (g2 < j1 && 0 > l(J2, D)) (R[u1] = J2), (R[g2] = D), (u1 = g2);
        else break e;
      }
    }
    return V;
  }
  function l(R, V) {
    var D = R.sortIndex - V.sortIndex;
    return D !== 0 ? D : R.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    C = [],
    f = 1,
    d = null,
    c = 3,
    h = !1,
    v = !1,
    y = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var V = n(C); V !== null; ) {
      if (V.callback === null) s(C);
      else if (V.startTime <= R)
        s(C), (V.sortIndex = V.expirationTime), t(u, V);
      else break;
      V = n(C);
    }
  }
  function g(R) {
    if (((y = !1), m(R), !v))
      if (n(u) !== null) (v = !0), Q(S);
      else {
        var V = n(C);
        V !== null && X(g, V.startTime - R);
      }
  }
  function S(R, V) {
    (v = !1), y && ((y = !1), x(T), (T = -1)), (h = !0);
    var D = c;
    try {
      for (
        m(V), d = n(u);
        d !== null && (!(d.expirationTime > V) || (R && !k()));

      ) {
        var u1 = d.callback;
        if (typeof u1 == "function") {
          (d.callback = null), (c = d.priorityLevel);
          var j1 = u1(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof j1 == "function" ? (d.callback = j1) : d === n(u) && s(u),
            m(V);
        } else s(u);
        d = n(u);
      }
      if (d !== null) var H3 = !0;
      else {
        var T2 = n(C);
        T2 !== null && X(g, T2.startTime - V), (H3 = !1);
      }
      return H3;
    } finally {
      (d = null), (c = D), (h = !1);
    }
  }
  var w = !1,
    M = null,
    T = -1,
    N = 5,
    Z = -1;
  function k() {
    return !(e.unstable_now() - Z < N);
  }
  function _() {
    if (M !== null) {
      var R = e.unstable_now();
      Z = R;
      var V = !0;
      try {
        V = M(!0, R);
      } finally {
        V ? I() : ((w = !1), (M = null));
      }
    } else w = !1;
  }
  var I;
  if (typeof p == "function")
    I = function () {
      p(_);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      F = B.port2;
    (B.port1.onmessage = _),
      (I = function () {
        F.postMessage(null);
      });
  } else
    I = function () {
      P(_, 0);
    };
  function Q(R) {
    (M = R), w || ((w = !0), I());
  }
  function X(R, V) {
    T = P(function () {
      R(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), Q(S));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (R) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = c;
      }
      var D = c;
      c = V;
      try {
        return R();
      } finally {
        c = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, V) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var D = c;
      c = R;
      try {
        return V();
      } finally {
        c = D;
      }
    }),
    (e.unstable_scheduleCallback = function (R, V, D) {
      var u1 = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? u1 + D : u1))
          : (D = u1),
        R)
      ) {
        case 1:
          var j1 = -1;
          break;
        case 2:
          j1 = 250;
          break;
        case 5:
          j1 = 1073741823;
          break;
        case 4:
          j1 = 1e4;
          break;
        default:
          j1 = 5e3;
      }
      return (
        (j1 = D + j1),
        (R = {
          id: f++,
          callback: V,
          priorityLevel: R,
          startTime: D,
          expirationTime: j1,
          sortIndex: -1,
        }),
        D > u1
          ? ((R.sortIndex = D),
            t(C, R),
            n(u) === null &&
              R === n(C) &&
              (y ? (x(T), (T = -1)) : (y = !0), X(g, D - u1)))
          : ((R.sortIndex = j1), t(u, R), v || h || ((v = !0), Q(S))),
        R
      );
    }),
    (e.unstable_shouldYield = k),
    (e.unstable_wrapCallback = function (R) {
      var V = c;
      return function () {
        var D = c;
        c = V;
        try {
          return R.apply(this, arguments);
        } finally {
          c = D;
        }
      };
    });
})(Lt);
Mt.exports = Lt;
var qs = Mt.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zt = L,
  a2 = qs;
function O(e) {
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
var At = new Set(),
  s5 = {};
function W3(e, t) {
  y4(e, t), y4(e + "Capture", t);
}
function y4(e, t) {
  for (s5[e] = t, e = 0; e < t.length; e++) At.add(t[e]);
}
var H2 = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  pe = Object.prototype.hasOwnProperty,
  Ks =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  P7 = {},
  R7 = {};
function Js(e) {
  return pe.call(R7, e)
    ? !0
    : pe.call(P7, e)
    ? !1
    : Ks.test(e)
    ? (R7[e] = !0)
    : ((P7[e] = !0), !1);
}
function el(e, t, n, s) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return s
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function tl(e, t, n, s) {
  if (t === null || typeof t > "u" || el(e, t, n, s)) return !0;
  if (s) return !1;
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
function Y1(e, t, n, s, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var z1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    z1[e] = new Y1(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  z1[t] = new Y1(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  z1[e] = new Y1(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  z1[e] = new Y1(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    z1[e] = new Y1(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  z1[e] = new Y1(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  z1[e] = new Y1(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  z1[e] = new Y1(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  z1[e] = new Y1(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var x8 = /[\-:]([a-z])/g;
function v8(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(x8, v8);
    z1[t] = new Y1(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(x8, v8);
    z1[t] = new Y1(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(x8, v8);
  z1[t] = new Y1(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  z1[e] = new Y1(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
z1.xlinkHref = new Y1(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  z1[e] = new Y1(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function j8(e, t, n, s) {
  var l = z1.hasOwnProperty(t) ? z1[t] : null;
  (l !== null
    ? l.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (tl(t, n, l, s) && (n = null),
    s || l === null
      ? Js(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (s = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n))));
}
var K2 = Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  P5 = Symbol.for("react.element"),
  q3 = Symbol.for("react.portal"),
  K3 = Symbol.for("react.fragment"),
  y8 = Symbol.for("react.strict_mode"),
  he = Symbol.for("react.profiler"),
  St = Symbol.for("react.provider"),
  _t = Symbol.for("react.context"),
  g8 = Symbol.for("react.forward_ref"),
  me = Symbol.for("react.suspense"),
  xe = Symbol.for("react.suspense_list"),
  w8 = Symbol.for("react.memo"),
  n3 = Symbol.for("react.lazy"),
  Nt = Symbol.for("react.offscreen"),
  O7 = Symbol.iterator;
function O4(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (O7 && e[O7]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var m1 = Object.assign,
  S9;
function Q4(e) {
  if (S9 === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      S9 = (t && t[1]) || "";
    }
  return (
    `
` +
    S9 +
    e
  );
}
var _9 = !1;
function N9(e, t) {
  if (!e || _9) return "";
  _9 = !0;
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
        } catch (C) {
          var s = C;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (C) {
          s = C;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (C) {
        s = C;
      }
      e();
    }
  } catch (C) {
    if (C && s && typeof C.stack == "string") {
      for (
        var l = C.stack.split(`
`),
          i = s.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (_9 = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Q4(e) : "";
}
function nl(e) {
  switch (e.tag) {
    case 5:
      return Q4(e.type);
    case 16:
      return Q4("Lazy");
    case 13:
      return Q4("Suspense");
    case 19:
      return Q4("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = N9(e.type, !1)), e;
    case 11:
      return (e = N9(e.type.render, !1)), e;
    case 1:
      return (e = N9(e.type, !0)), e;
    default:
      return "";
  }
}
function ve(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case K3:
      return "Fragment";
    case q3:
      return "Portal";
    case he:
      return "Profiler";
    case y8:
      return "StrictMode";
    case me:
      return "Suspense";
    case xe:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _t:
        return (e.displayName || "Context") + ".Consumer";
      case St:
        return (e._context.displayName || "Context") + ".Provider";
      case g8:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case w8:
        return (
          (t = e.displayName || null), t !== null ? t : ve(e.type) || "Memo"
        );
      case n3:
        (t = e._payload), (e = e._init);
        try {
          return ve(e(t));
        } catch {}
    }
  return null;
}
function rl(e) {
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
      return ve(t);
    case 8:
      return t === y8 ? "StrictMode" : "Mode";
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
function k3(e) {
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
function Et(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sl(e) {
  var t = Et(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    s = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (s = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return s;
        },
        setValue: function (o) {
          s = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function R5(e) {
  e._valueTracker || (e._valueTracker = sl(e));
}
function Tt(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = Et(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function a6(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function je(e, t) {
  var n = t.checked;
  return m1({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function I7(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = k3(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Pt(e, t) {
  (t = t.checked), t != null && j8(e, "checked", t, !1);
}
function ye(e, t) {
  Pt(e, t);
  var n = k3(t.value),
    s = t.type;
  if (n != null)
    s === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (s === "submit" || s === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ge(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ge(e, t.type, k3(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function z7(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var s = t.type;
    if (
      !(
        (s !== "submit" && s !== "reset") ||
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
function ge(e, t, n) {
  (t !== "number" || a6(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var W4 = Array.isArray;
function c4(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + k3(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), s && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function we(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return m1({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function D7(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (W4(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: k3(n) };
}
function Rt(e, t) {
  var n = k3(t.value),
    s = k3(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function F7(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ot(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ke(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ot(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var O5,
  It = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, s, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, s, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        O5 = O5 || document.createElement("div"),
          O5.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = O5.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function l5(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var X4 = {
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
  ll = ["Webkit", "ms", "Moz", "O"];
Object.keys(X4).forEach(function (e) {
  ll.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (X4[t] = X4[e]);
  });
});
function zt(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (X4.hasOwnProperty(e) && X4[e])
    ? ("" + t).trim()
    : t + "px";
}
function Dt(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        l = zt(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, l) : (e[n] = l);
    }
}
var il = m1(
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
function Me(e, t) {
  if (t) {
    if (il[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Le(e, t) {
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
var Ze = null;
function k8(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ae = null,
  C4 = null,
  f4 = null;
function U7(e) {
  if ((e = A5(e))) {
    if (typeof Ae != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = H6(t)), Ae(e.stateNode, e.type, t));
  }
}
function Ft(e) {
  C4 ? (f4 ? f4.push(e) : (f4 = [e])) : (C4 = e);
}
function Ut() {
  if (C4) {
    var e = C4,
      t = f4;
    if (((f4 = C4 = null), U7(e), t)) for (e = 0; e < t.length; e++) U7(t[e]);
  }
}
function Vt(e, t) {
  return e(t);
}
function Bt() {}
var E9 = !1;
function $t(e, t, n) {
  if (E9) return e(t, n);
  E9 = !0;
  try {
    return Vt(e, t, n);
  } finally {
    (E9 = !1), (C4 !== null || f4 !== null) && (Bt(), Ut());
  }
}
function i5(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = H6(n);
  if (s === null) return null;
  n = s[t];
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
      (s = !s.disabled) ||
        ((e = e.type),
        (s = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !s);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Se = !1;
if (H2)
  try {
    var I4 = {};
    Object.defineProperty(I4, "passive", {
      get: function () {
        Se = !0;
      },
    }),
      window.addEventListener("test", I4, I4),
      window.removeEventListener("test", I4, I4);
  } catch {
    Se = !1;
  }
function ol(e, t, n, s, l, i, o, a, u) {
  var C = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, C);
  } catch (f) {
    this.onError(f);
  }
}
var G4 = !1,
  u6 = null,
  c6 = !1,
  _e = null,
  al = {
    onError: function (e) {
      (G4 = !0), (u6 = e);
    },
  };
function ul(e, t, n, s, l, i, o, a, u) {
  (G4 = !1), (u6 = null), ol.apply(al, arguments);
}
function cl(e, t, n, s, l, i, o, a, u) {
  if ((ul.apply(this, arguments), G4)) {
    if (G4) {
      var C = u6;
      (G4 = !1), (u6 = null);
    } else throw Error(O(198));
    c6 || ((c6 = !0), (_e = C));
  }
}
function b3(e) {
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
function Qt(e) {
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
function V7(e) {
  if (b3(e) !== e) throw Error(O(188));
}
function Cl(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = b3(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, s = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((s = l.return), s !== null)) {
        n = s;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return V7(l), e;
        if (i === s) return V7(l), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== s.return) (n = l), (s = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (s = i);
          break;
        }
        if (a === s) {
          (o = !0), (s = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (s = l);
            break;
          }
          if (a === s) {
            (o = !0), (s = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(O(189));
      }
    }
    if (n.alternate !== s) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Wt(e) {
  return (e = Cl(e)), e !== null ? bt(e) : null;
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bt(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ht = a2.unstable_scheduleCallback,
  B7 = a2.unstable_cancelCallback,
  fl = a2.unstable_shouldYield,
  dl = a2.unstable_requestPaint,
  g1 = a2.unstable_now,
  pl = a2.unstable_getCurrentPriorityLevel,
  M8 = a2.unstable_ImmediatePriority,
  Yt = a2.unstable_UserBlockingPriority,
  C6 = a2.unstable_NormalPriority,
  hl = a2.unstable_LowPriority,
  Xt = a2.unstable_IdlePriority,
  $6 = null,
  z2 = null;
function ml(e) {
  if (z2 && typeof z2.onCommitFiberRoot == "function")
    try {
      z2.onCommitFiberRoot($6, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var S2 = Math.clz32 ? Math.clz32 : jl,
  xl = Math.log,
  vl = Math.LN2;
function jl(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((xl(e) / vl) | 0)) | 0;
}
var I5 = 64,
  z5 = 4194304;
function b4(e) {
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
function f6(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (s = b4(a)) : ((i &= o), i !== 0 && (s = b4(i)));
  } else (o = n & ~l), o !== 0 ? (s = b4(o)) : i !== 0 && (s = b4(i));
  if (s === 0) return 0;
  if (
    t !== 0 &&
    t !== s &&
    !(t & l) &&
    ((l = s & -s), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((s & 4 && (s |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= s; 0 < t; )
      (n = 31 - S2(t)), (l = 1 << n), (s |= e[n]), (t &= ~l);
  return s;
}
function yl(e, t) {
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
function gl(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - S2(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & s) && (l[o] = yl(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Ne(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gt() {
  var e = I5;
  return (I5 <<= 1), !(I5 & 4194240) && (I5 = 64), e;
}
function T9(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function L5(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - S2(t)),
    (e[t] = n);
}
function wl(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - S2(n),
      i = 1 << l;
    (t[l] = 0), (s[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function L8(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - S2(n),
      l = 1 << s;
    (l & t) | (e[s] & t) && (e[s] |= t), (n &= ~l);
  }
}
var t1 = 0;
function qt(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Kt,
  Z8,
  Jt,
  en,
  tn,
  Ee = !1,
  D5 = [],
  d3 = null,
  p3 = null,
  h3 = null,
  o5 = new Map(),
  a5 = new Map(),
  s3 = [],
  kl =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $7(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      d3 = null;
      break;
    case "dragenter":
    case "dragleave":
      p3 = null;
      break;
    case "mouseover":
    case "mouseout":
      h3 = null;
      break;
    case "pointerover":
    case "pointerout":
      o5.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      a5.delete(t.pointerId);
  }
}
function z4(e, t, n, s, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = A5(t)), t !== null && Z8(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ml(e, t, n, s, l) {
  switch (t) {
    case "focusin":
      return (d3 = z4(d3, e, t, n, s, l)), !0;
    case "dragenter":
      return (p3 = z4(p3, e, t, n, s, l)), !0;
    case "mouseover":
      return (h3 = z4(h3, e, t, n, s, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return o5.set(i, z4(o5.get(i) || null, e, t, n, s, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), a5.set(i, z4(a5.get(i) || null, e, t, n, s, l)), !0
      );
  }
  return !1;
}
function nn(e) {
  var t = P3(e.target);
  if (t !== null) {
    var n = b3(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qt(n)), t !== null)) {
          (e.blockedOn = t),
            tn(e.priority, function () {
              Jt(n);
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
function q5(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Te(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Ze = s), n.target.dispatchEvent(s), (Ze = null);
    } else return (t = A5(n)), t !== null && Z8(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Q7(e, t, n) {
  q5(e) && n.delete(t);
}
function Ll() {
  (Ee = !1),
    d3 !== null && q5(d3) && (d3 = null),
    p3 !== null && q5(p3) && (p3 = null),
    h3 !== null && q5(h3) && (h3 = null),
    o5.forEach(Q7),
    a5.forEach(Q7);
}
function D4(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ee ||
      ((Ee = !0),
      a2.unstable_scheduleCallback(a2.unstable_NormalPriority, Ll)));
}
function u5(e) {
  function t(l) {
    return D4(l, e);
  }
  if (0 < D5.length) {
    D4(D5[0], e);
    for (var n = 1; n < D5.length; n++) {
      var s = D5[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    d3 !== null && D4(d3, e),
      p3 !== null && D4(p3, e),
      h3 !== null && D4(h3, e),
      o5.forEach(t),
      a5.forEach(t),
      n = 0;
    n < s3.length;
    n++
  )
    (s = s3[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < s3.length && ((n = s3[0]), n.blockedOn === null); )
    nn(n), n.blockedOn === null && s3.shift();
}
var d4 = K2.ReactCurrentBatchConfig,
  d6 = !0;
function Zl(e, t, n, s) {
  var l = t1,
    i = d4.transition;
  d4.transition = null;
  try {
    (t1 = 1), A8(e, t, n, s);
  } finally {
    (t1 = l), (d4.transition = i);
  }
}
function Al(e, t, n, s) {
  var l = t1,
    i = d4.transition;
  d4.transition = null;
  try {
    (t1 = 4), A8(e, t, n, s);
  } finally {
    (t1 = l), (d4.transition = i);
  }
}
function A8(e, t, n, s) {
  if (d6) {
    var l = Te(e, t, n, s);
    if (l === null) B9(e, t, s, p6, n), $7(e, s);
    else if (Ml(l, e, t, n, s)) s.stopPropagation();
    else if (($7(e, s), t & 4 && -1 < kl.indexOf(e))) {
      for (; l !== null; ) {
        var i = A5(l);
        if (
          (i !== null && Kt(i),
          (i = Te(e, t, n, s)),
          i === null && B9(e, t, s, p6, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && s.stopPropagation();
    } else B9(e, t, s, null, n);
  }
}
var p6 = null;
function Te(e, t, n, s) {
  if (((p6 = null), (e = k8(s)), (e = P3(e)), e !== null))
    if (((t = b3(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qt(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (p6 = e), null;
}
function rn(e) {
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
      switch (pl()) {
        case M8:
          return 1;
        case Yt:
          return 4;
        case C6:
        case hl:
          return 16;
        case Xt:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var o3 = null,
  S8 = null,
  K5 = null;
function sn() {
  if (K5) return K5;
  var e,
    t = S8,
    n = t.length,
    s,
    l = "value" in o3 ? o3.value : o3.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (s = 1; s <= o && t[n - s] === l[i - s]; s++);
  return (K5 = l.slice(e, 1 < s ? 1 - s : void 0));
}
function J5(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function F5() {
  return !0;
}
function W7() {
  return !1;
}
function C2(e) {
  function t(n, s, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = s),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? F5
        : W7),
      (this.isPropagationStopped = W7),
      this
    );
  }
  return (
    m1(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = F5));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = F5));
      },
      persist: function () {},
      isPersistent: F5,
    }),
    t
  );
}
var N4 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _8 = C2(N4),
  Z5 = m1({}, N4, { view: 0, detail: 0 }),
  Sl = C2(Z5),
  P9,
  R9,
  F4,
  Q6 = m1({}, Z5, {
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
    getModifierState: N8,
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
        : (e !== F4 &&
            (F4 && e.type === "mousemove"
              ? ((P9 = e.screenX - F4.screenX), (R9 = e.screenY - F4.screenY))
              : (R9 = P9 = 0),
            (F4 = e)),
          P9);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : R9;
    },
  }),
  b7 = C2(Q6),
  _l = m1({}, Q6, { dataTransfer: 0 }),
  Nl = C2(_l),
  El = m1({}, Z5, { relatedTarget: 0 }),
  O9 = C2(El),
  Tl = m1({}, N4, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pl = C2(Tl),
  Rl = m1({}, N4, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ol = C2(Rl),
  Il = m1({}, N4, { data: 0 }),
  H7 = C2(Il),
  zl = {
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
  Dl = {
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
  Fl = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ul(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fl[e]) ? !!t[e] : !1;
}
function N8() {
  return Ul;
}
var Vl = m1({}, Z5, {
    key: function (e) {
      if (e.key) {
        var t = zl[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = J5(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Dl[e.keyCode] || "Unidentified"
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
    getModifierState: N8,
    charCode: function (e) {
      return e.type === "keypress" ? J5(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? J5(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bl = C2(Vl),
  $l = m1({}, Q6, {
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
  Y7 = C2($l),
  Ql = m1({}, Z5, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: N8,
  }),
  Wl = C2(Ql),
  bl = m1({}, N4, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hl = C2(bl),
  Yl = m1({}, Q6, {
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
  Xl = C2(Yl),
  Gl = [9, 13, 27, 32],
  E8 = H2 && "CompositionEvent" in window,
  q4 = null;
H2 && "documentMode" in document && (q4 = document.documentMode);
var ql = H2 && "TextEvent" in window && !q4,
  ln = H2 && (!E8 || (q4 && 8 < q4 && 11 >= q4)),
  X7 = String.fromCharCode(32),
  G7 = !1;
function on(e, t) {
  switch (e) {
    case "keyup":
      return Gl.indexOf(t.keyCode) !== -1;
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
function an(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var J3 = !1;
function Kl(e, t) {
  switch (e) {
    case "compositionend":
      return an(t);
    case "keypress":
      return t.which !== 32 ? null : ((G7 = !0), X7);
    case "textInput":
      return (e = t.data), e === X7 && G7 ? null : e;
    default:
      return null;
  }
}
function Jl(e, t) {
  if (J3)
    return e === "compositionend" || (!E8 && on(e, t))
      ? ((e = sn()), (K5 = S8 = o3 = null), (J3 = !1), e)
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
      return ln && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ei = {
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
function q7(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ei[e.type] : t === "textarea";
}
function un(e, t, n, s) {
  Ft(s),
    (t = h6(t, "onChange")),
    0 < t.length &&
      ((n = new _8("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var K4 = null,
  c5 = null;
function ti(e) {
  yn(e, 0);
}
function W6(e) {
  var t = n4(e);
  if (Tt(t)) return e;
}
function ni(e, t) {
  if (e === "change") return t;
}
var cn = !1;
if (H2) {
  var I9;
  if (H2) {
    var z9 = "oninput" in document;
    if (!z9) {
      var K7 = document.createElement("div");
      K7.setAttribute("oninput", "return;"),
        (z9 = typeof K7.oninput == "function");
    }
    I9 = z9;
  } else I9 = !1;
  cn = I9 && (!document.documentMode || 9 < document.documentMode);
}
function J7() {
  K4 && (K4.detachEvent("onpropertychange", Cn), (c5 = K4 = null));
}
function Cn(e) {
  if (e.propertyName === "value" && W6(c5)) {
    var t = [];
    un(t, c5, e, k8(e)), $t(ti, t);
  }
}
function ri(e, t, n) {
  e === "focusin"
    ? (J7(), (K4 = t), (c5 = n), K4.attachEvent("onpropertychange", Cn))
    : e === "focusout" && J7();
}
function si(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return W6(c5);
}
function li(e, t) {
  if (e === "click") return W6(t);
}
function ii(e, t) {
  if (e === "input" || e === "change") return W6(t);
}
function oi(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var E2 = typeof Object.is == "function" ? Object.is : oi;
function C5(e, t) {
  if (E2(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var l = n[s];
    if (!pe.call(t, l) || !E2(e[l], t[l])) return !1;
  }
  return !0;
}
function e0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function t0(e, t) {
  var n = e0(e);
  e = 0;
  for (var s; n; ) {
    if (n.nodeType === 3) {
      if (((s = e + n.textContent.length), e <= t && s >= t))
        return { node: n, offset: t - e };
      e = s;
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
    n = e0(n);
  }
}
function fn(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? fn(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function dn() {
  for (var e = window, t = a6(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = a6(e.document);
  }
  return t;
}
function T8(e) {
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
function ai(e) {
  var t = dn(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    fn(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && T8(n)) {
      if (
        ((t = s.start),
        (e = s.end),
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
          i = Math.min(s.start, l);
        (s = s.end === void 0 ? i : Math.min(s.end, l)),
          !e.extend && i > s && ((l = s), (s = i), (i = l)),
          (l = t0(n, i));
        var o = t0(n, s);
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
          i > s
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
var ui = H2 && "documentMode" in document && 11 >= document.documentMode,
  e4 = null,
  Pe = null,
  J4 = null,
  Re = !1;
function n0(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Re ||
    e4 == null ||
    e4 !== a6(s) ||
    ((s = e4),
    "selectionStart" in s && T8(s)
      ? (s = { start: s.selectionStart, end: s.selectionEnd })
      : ((s = (
          (s.ownerDocument && s.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (s = {
          anchorNode: s.anchorNode,
          anchorOffset: s.anchorOffset,
          focusNode: s.focusNode,
          focusOffset: s.focusOffset,
        })),
    (J4 && C5(J4, s)) ||
      ((J4 = s),
      (s = h6(Pe, "onSelect")),
      0 < s.length &&
        ((t = new _8("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = e4))));
}
function U5(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var t4 = {
    animationend: U5("Animation", "AnimationEnd"),
    animationiteration: U5("Animation", "AnimationIteration"),
    animationstart: U5("Animation", "AnimationStart"),
    transitionend: U5("Transition", "TransitionEnd"),
  },
  D9 = {},
  pn = {};
H2 &&
  ((pn = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete t4.animationend.animation,
    delete t4.animationiteration.animation,
    delete t4.animationstart.animation),
  "TransitionEvent" in window || delete t4.transitionend.transition);
function b6(e) {
  if (D9[e]) return D9[e];
  if (!t4[e]) return e;
  var t = t4[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in pn) return (D9[e] = t[n]);
  return e;
}
var hn = b6("animationend"),
  mn = b6("animationiteration"),
  xn = b6("animationstart"),
  vn = b6("transitionend"),
  jn = new Map(),
  r0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function A3(e, t) {
  jn.set(e, t), W3(t, [e]);
}
for (var F9 = 0; F9 < r0.length; F9++) {
  var U9 = r0[F9],
    ci = U9.toLowerCase(),
    Ci = U9[0].toUpperCase() + U9.slice(1);
  A3(ci, "on" + Ci);
}
A3(hn, "onAnimationEnd");
A3(mn, "onAnimationIteration");
A3(xn, "onAnimationStart");
A3("dblclick", "onDoubleClick");
A3("focusin", "onFocus");
A3("focusout", "onBlur");
A3(vn, "onTransitionEnd");
y4("onMouseEnter", ["mouseout", "mouseover"]);
y4("onMouseLeave", ["mouseout", "mouseover"]);
y4("onPointerEnter", ["pointerout", "pointerover"]);
y4("onPointerLeave", ["pointerout", "pointerover"]);
W3(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
W3(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
W3("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
W3(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
W3(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
W3(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var H4 =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  fi = new Set("cancel close invalid load scroll toggle".split(" ").concat(H4));
function s0(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), cl(s, t, void 0, e), (e.currentTarget = null);
}
function yn(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var s = e[n],
      l = s.event;
    s = s.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = s.length - 1; 0 <= o; o--) {
          var a = s[o],
            u = a.instance,
            C = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          s0(l, a, C), (i = u);
        }
      else
        for (o = 0; o < s.length; o++) {
          if (
            ((a = s[o]),
            (u = a.instance),
            (C = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          s0(l, a, C), (i = u);
        }
    }
  }
  if (c6) throw ((e = _e), (c6 = !1), (_e = null), e);
}
function i1(e, t) {
  var n = t[Fe];
  n === void 0 && (n = t[Fe] = new Set());
  var s = e + "__bubble";
  n.has(s) || (gn(t, e, 2, !1), n.add(s));
}
function V9(e, t, n) {
  var s = 0;
  t && (s |= 4), gn(n, e, s, t);
}
var V5 = "_reactListening" + Math.random().toString(36).slice(2);
function f5(e) {
  if (!e[V5]) {
    (e[V5] = !0),
      At.forEach(function (n) {
        n !== "selectionchange" && (fi.has(n) || V9(n, !1, e), V9(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[V5] || ((t[V5] = !0), V9("selectionchange", !1, t));
  }
}
function gn(e, t, n, s) {
  switch (rn(t)) {
    case 1:
      var l = Zl;
      break;
    case 4:
      l = Al;
      break;
    default:
      l = A8;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Se ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    s
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function B9(e, t, n, s, l) {
  var i = s;
  if (!(t & 1) && !(t & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var o = s.tag;
      if (o === 3 || o === 4) {
        var a = s.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = s.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = P3(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            s = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      s = s.return;
    }
  $t(function () {
    var C = i,
      f = k8(n),
      d = [];
    e: {
      var c = jn.get(e);
      if (c !== void 0) {
        var h = _8,
          v = e;
        switch (e) {
          case "keypress":
            if (J5(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Bl;
            break;
          case "focusin":
            (v = "focus"), (h = O9);
            break;
          case "focusout":
            (v = "blur"), (h = O9);
            break;
          case "beforeblur":
          case "afterblur":
            h = O9;
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
            h = b7;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Nl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Wl;
            break;
          case hn:
          case mn:
          case xn:
            h = Pl;
            break;
          case vn:
            h = Hl;
            break;
          case "scroll":
            h = Sl;
            break;
          case "wheel":
            h = Xl;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Ol;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Y7;
        }
        var y = (t & 4) !== 0,
          P = !y && e === "scroll",
          x = y ? (c !== null ? c + "Capture" : null) : c;
        y = [];
        for (var p = C, m; p !== null; ) {
          m = p;
          var g = m.stateNode;
          if (
            (m.tag === 5 &&
              g !== null &&
              ((m = g),
              x !== null && ((g = i5(p, x)), g != null && y.push(d5(p, g, m)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((c = new h(c, v, null, n, f)), d.push({ event: c, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          c &&
            n !== Ze &&
            (v = n.relatedTarget || n.fromElement) &&
            (P3(v) || v[Y2]))
        )
          break e;
        if (
          (h || c) &&
          ((c =
            f.window === f
              ? f
              : (c = f.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = C),
              (v = v ? P3(v) : null),
              v !== null &&
                ((P = b3(v)), v !== P || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = C)),
          h !== v)
        ) {
          if (
            ((y = b7),
            (g = "onMouseLeave"),
            (x = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Y7),
              (g = "onPointerLeave"),
              (x = "onPointerEnter"),
              (p = "pointer")),
            (P = h == null ? c : n4(h)),
            (m = v == null ? c : n4(v)),
            (c = new y(g, p + "leave", h, n, f)),
            (c.target = P),
            (c.relatedTarget = m),
            (g = null),
            P3(f) === C &&
              ((y = new y(x, p + "enter", v, n, f)),
              (y.target = m),
              (y.relatedTarget = P),
              (g = y)),
            (P = g),
            h && v)
          )
            t: {
              for (y = h, x = v, p = 0, m = y; m; m = X3(m)) p++;
              for (m = 0, g = x; g; g = X3(g)) m++;
              for (; 0 < p - m; ) (y = X3(y)), p--;
              for (; 0 < m - p; ) (x = X3(x)), m--;
              for (; p--; ) {
                if (y === x || (x !== null && y === x.alternate)) break t;
                (y = X3(y)), (x = X3(x));
              }
              y = null;
            }
          else y = null;
          h !== null && l0(d, c, h, y, !1),
            v !== null && P !== null && l0(d, P, v, y, !0);
        }
      }
      e: {
        if (
          ((c = C ? n4(C) : window),
          (h = c.nodeName && c.nodeName.toLowerCase()),
          h === "select" || (h === "input" && c.type === "file"))
        )
          var S = ni;
        else if (q7(c))
          if (cn) S = ii;
          else {
            S = si;
            var w = ri;
          }
        else
          (h = c.nodeName) &&
            h.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (S = li);
        if (S && (S = S(e, C))) {
          un(d, S, n, f);
          break e;
        }
        w && w(e, c, C),
          e === "focusout" &&
            (w = c._wrapperState) &&
            w.controlled &&
            c.type === "number" &&
            ge(c, "number", c.value);
      }
      switch (((w = C ? n4(C) : window), e)) {
        case "focusin":
          (q7(w) || w.contentEditable === "true") &&
            ((e4 = w), (Pe = C), (J4 = null));
          break;
        case "focusout":
          J4 = Pe = e4 = null;
          break;
        case "mousedown":
          Re = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Re = !1), n0(d, n, f);
          break;
        case "selectionchange":
          if (ui) break;
        case "keydown":
        case "keyup":
          n0(d, n, f);
      }
      var M;
      if (E8)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        J3
          ? on(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (ln &&
          n.locale !== "ko" &&
          (J3 || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && J3 && (M = sn())
            : ((o3 = f),
              (S8 = "value" in o3 ? o3.value : o3.textContent),
              (J3 = !0))),
        (w = h6(C, T)),
        0 < w.length &&
          ((T = new H7(T, e, null, n, f)),
          d.push({ event: T, listeners: w }),
          M ? (T.data = M) : ((M = an(n)), M !== null && (T.data = M)))),
        (M = ql ? Kl(e, n) : Jl(e, n)) &&
          ((C = h6(C, "onBeforeInput")),
          0 < C.length &&
            ((f = new H7("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: C }),
            (f.data = M)));
    }
    yn(d, t);
  });
}
function d5(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function h6(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = i5(e, n)),
      i != null && s.unshift(d5(e, i, l)),
      (i = i5(e, t)),
      i != null && s.push(d5(e, i, l))),
      (e = e.return);
  }
  return s;
}
function X3(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function l0(e, t, n, s, l) {
  for (var i = t._reactName, o = []; n !== null && n !== s; ) {
    var a = n,
      u = a.alternate,
      C = a.stateNode;
    if (u !== null && u === s) break;
    a.tag === 5 &&
      C !== null &&
      ((a = C),
      l
        ? ((u = i5(n, i)), u != null && o.unshift(d5(n, u, a)))
        : l || ((u = i5(n, i)), u != null && o.push(d5(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var di = /\r\n?/g,
  pi = /\u0000|\uFFFD/g;
function i0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      di,
      `
`
    )
    .replace(pi, "");
}
function B5(e, t, n) {
  if (((t = i0(t)), i0(e) !== t && n)) throw Error(O(425));
}
function m6() {}
var Oe = null,
  Ie = null;
function ze(e, t) {
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
var De = typeof setTimeout == "function" ? setTimeout : void 0,
  hi = typeof clearTimeout == "function" ? clearTimeout : void 0,
  o0 = typeof Promise == "function" ? Promise : void 0,
  mi =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof o0 < "u"
      ? function (e) {
          return o0.resolve(null).then(e).catch(xi);
        }
      : De;
function xi(e) {
  setTimeout(function () {
    throw e;
  });
}
function $9(e, t) {
  var n = t,
    s = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(l), u5(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = l;
  } while (n);
  u5(t);
}
function m3(e) {
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
function a0(e) {
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
var E4 = Math.random().toString(36).slice(2),
  O2 = "__reactFiber$" + E4,
  p5 = "__reactProps$" + E4,
  Y2 = "__reactContainer$" + E4,
  Fe = "__reactEvents$" + E4,
  vi = "__reactListeners$" + E4,
  ji = "__reactHandles$" + E4;
function P3(e) {
  var t = e[O2];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Y2] || n[O2])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = a0(e); e !== null; ) {
          if ((n = e[O2])) return n;
          e = a0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function A5(e) {
  return (
    (e = e[O2] || e[Y2]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function n4(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function H6(e) {
  return e[p5] || null;
}
var Ue = [],
  r4 = -1;
function S3(e) {
  return { current: e };
}
function a1(e) {
  0 > r4 || ((e.current = Ue[r4]), (Ue[r4] = null), r4--);
}
function l1(e, t) {
  r4++, (Ue[r4] = e.current), (e.current = t);
}
var M3 = {},
  $1 = S3(M3),
  e2 = S3(!1),
  F3 = M3;
function g4(e, t) {
  var n = e.type.contextTypes;
  if (!n) return M3;
  var s = e.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
    return s.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function t2(e) {
  return (e = e.childContextTypes), e != null;
}
function x6() {
  a1(e2), a1($1);
}
function u0(e, t, n) {
  if ($1.current !== M3) throw Error(O(168));
  l1($1, t), l1(e2, n);
}
function wn(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var l in s) if (!(l in t)) throw Error(O(108, rl(e) || "Unknown", l));
  return m1({}, n, s);
}
function v6(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || M3),
    (F3 = $1.current),
    l1($1, e),
    l1(e2, e2.current),
    !0
  );
}
function c0(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(O(169));
  n
    ? ((e = wn(e, t, F3)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      a1(e2),
      a1($1),
      l1($1, e))
    : a1(e2),
    l1(e2, n);
}
var B2 = null,
  Y6 = !1,
  Q9 = !1;
function kn(e) {
  B2 === null ? (B2 = [e]) : B2.push(e);
}
function yi(e) {
  (Y6 = !0), kn(e);
}
function _3() {
  if (!Q9 && B2 !== null) {
    Q9 = !0;
    var e = 0,
      t = t1;
    try {
      var n = B2;
      for (t1 = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (B2 = null), (Y6 = !1);
    } catch (l) {
      throw (B2 !== null && (B2 = B2.slice(e + 1)), Ht(M8, _3), l);
    } finally {
      (t1 = t), (Q9 = !1);
    }
  }
  return null;
}
var s4 = [],
  l4 = 0,
  j6 = null,
  y6 = 0,
  p2 = [],
  h2 = 0,
  U3 = null,
  Q2 = 1,
  W2 = "";
function N3(e, t) {
  (s4[l4++] = y6), (s4[l4++] = j6), (j6 = e), (y6 = t);
}
function Mn(e, t, n) {
  (p2[h2++] = Q2), (p2[h2++] = W2), (p2[h2++] = U3), (U3 = e);
  var s = Q2;
  e = W2;
  var l = 32 - S2(s) - 1;
  (s &= ~(1 << l)), (n += 1);
  var i = 32 - S2(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (s & ((1 << o) - 1)).toString(32)),
      (s >>= o),
      (l -= o),
      (Q2 = (1 << (32 - S2(t) + l)) | (n << l) | s),
      (W2 = i + e);
  } else (Q2 = (1 << i) | (n << l) | s), (W2 = e);
}
function P8(e) {
  e.return !== null && (N3(e, 1), Mn(e, 1, 0));
}
function R8(e) {
  for (; e === j6; )
    (j6 = s4[--l4]), (s4[l4] = null), (y6 = s4[--l4]), (s4[l4] = null);
  for (; e === U3; )
    (U3 = p2[--h2]),
      (p2[h2] = null),
      (W2 = p2[--h2]),
      (p2[h2] = null),
      (Q2 = p2[--h2]),
      (p2[h2] = null);
}
var o2 = null,
  i2 = null,
  d1 = !1,
  L2 = null;
function Ln(e, t) {
  var n = m2(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function C0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (o2 = e), (i2 = m3(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (o2 = e), (i2 = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = U3 !== null ? { id: Q2, overflow: W2 } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = m2(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (o2 = e),
            (i2 = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ve(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Be(e) {
  if (d1) {
    var t = i2;
    if (t) {
      var n = t;
      if (!C0(e, t)) {
        if (Ve(e)) throw Error(O(418));
        t = m3(n.nextSibling);
        var s = o2;
        t && C0(e, t)
          ? Ln(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (d1 = !1), (o2 = e));
      }
    } else {
      if (Ve(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (d1 = !1), (o2 = e);
    }
  }
}
function f0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  o2 = e;
}
function $5(e) {
  if (e !== o2) return !1;
  if (!d1) return f0(e), (d1 = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ze(e.type, e.memoizedProps))),
    t && (t = i2))
  ) {
    if (Ve(e)) throw (Zn(), Error(O(418)));
    for (; t; ) Ln(e, t), (t = m3(t.nextSibling));
  }
  if ((f0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              i2 = m3(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      i2 = null;
    }
  } else i2 = o2 ? m3(e.stateNode.nextSibling) : null;
  return !0;
}
function Zn() {
  for (var e = i2; e; ) e = m3(e.nextSibling);
}
function w4() {
  (i2 = o2 = null), (d1 = !1);
}
function O8(e) {
  L2 === null ? (L2 = [e]) : L2.push(e);
}
var gi = K2.ReactCurrentBatchConfig;
function k2(e, t) {
  if (e && e.defaultProps) {
    (t = m1({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var g6 = S3(null),
  w6 = null,
  i4 = null,
  I8 = null;
function z8() {
  I8 = i4 = w6 = null;
}
function D8(e) {
  var t = g6.current;
  a1(g6), (e._currentValue = t);
}
function $e(e, t, n) {
  for (; e !== null; ) {
    var s = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
        : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function p4(e, t) {
  (w6 = e),
    (I8 = i4 = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (J1 = !0), (e.firstContext = null));
}
function v2(e) {
  var t = e._currentValue;
  if (I8 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), i4 === null)) {
      if (w6 === null) throw Error(O(308));
      (i4 = e), (w6.dependencies = { lanes: 0, firstContext: e });
    } else i4 = i4.next = e;
  return t;
}
var R3 = null;
function F8(e) {
  R3 === null ? (R3 = [e]) : R3.push(e);
}
function An(e, t, n, s) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), F8(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    X2(e, s)
  );
}
function X2(e, t) {
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
var r3 = !1;
function U8(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Sn(e, t) {
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
function b2(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function x3(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), q & 2)) {
    var l = s.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (s.pending = t),
      X2(e, n)
    );
  }
  return (
    (l = s.interleaved),
    l === null ? ((t.next = t), F8(s)) : ((t.next = l.next), (l.next = t)),
    (s.interleaved = t),
    X2(e, n)
  );
}
function e6(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), L8(e, n);
  }
}
function d0(e, t) {
  var n = e.updateQueue,
    s = e.alternate;
  if (s !== null && ((s = s.updateQueue), n === s)) {
    var l = null,
      i = null;
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
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: s.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function k6(e, t, n, s) {
  var l = e.updateQueue;
  r3 = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      C = u.next;
    (u.next = null), o === null ? (i = C) : (o.next = C), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = C) : (a.next = C),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (f = C = u = null), (a = i);
    do {
      var c = a.lane,
        h = a.eventTime;
      if ((s & c) === c) {
        f !== null &&
          (f = f.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((c = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(h, d, c);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (c = typeof v == "function" ? v.call(h, d, c) : v),
                c == null)
              )
                break e;
              d = m1({}, d, c);
              break e;
            case 2:
              r3 = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (c = l.effects),
          c === null ? (l.effects = [a]) : c.push(a));
      } else
        (h = {
          eventTime: h,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((C = f = h), (u = d)) : (f = f.next = h),
          (o |= c);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (c = a),
          (a = c.next),
          (c.next = null),
          (l.lastBaseUpdate = c),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = C),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (B3 |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function p0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        l = s.callback;
      if (l !== null) {
        if (((s.callback = null), (s = n), typeof l != "function"))
          throw Error(O(191, l));
        l.call(s);
      }
    }
}
var _n = new Zt.Component().refs;
function Qe(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : m1({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var X6 = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? b3(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = b1(),
      l = j3(e),
      i = b2(s, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = x3(e, i, l)),
      t !== null && (_2(t, e, l, s), e6(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = b1(),
      l = j3(e),
      i = b2(s, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = x3(e, i, l)),
      t !== null && (_2(t, e, l, s), e6(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = b1(),
      s = j3(e),
      l = b2(n, s);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = x3(e, l, s)),
      t !== null && (_2(t, e, s, n), e6(t, e, s));
  },
};
function h0(e, t, n, s, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !C5(n, s) || !C5(l, i)
      : !0
  );
}
function Nn(e, t, n) {
  var s = !1,
    l = M3,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = v2(i))
      : ((l = t2(t) ? F3 : $1.current),
        (s = t.contextTypes),
        (i = (s = s != null) ? g4(e, l) : M3)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = X6),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function m0(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && X6.enqueueReplaceState(t, t.state, null);
}
function We(e, t, n, s) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = _n), U8(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = v2(i))
    : ((i = t2(t) ? F3 : $1.current), (l.context = g4(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Qe(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && X6.enqueueReplaceState(l, l.state, null),
      k6(e, n, l, s),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function U4(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(O(147, e));
      var l = s,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            a === _n && (a = l.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Q5(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function x0(e) {
  var t = e._init;
  return t(e._payload);
}
function En(e) {
  function t(x, p) {
    if (e) {
      var m = x.deletions;
      m === null ? ((x.deletions = [p]), (x.flags |= 16)) : m.push(p);
    }
  }
  function n(x, p) {
    if (!e) return null;
    for (; p !== null; ) t(x, p), (p = p.sibling);
    return null;
  }
  function s(x, p) {
    for (x = new Map(); p !== null; )
      p.key !== null ? x.set(p.key, p) : x.set(p.index, p), (p = p.sibling);
    return x;
  }
  function l(x, p) {
    return (x = y3(x, p)), (x.index = 0), (x.sibling = null), x;
  }
  function i(x, p, m) {
    return (
      (x.index = m),
      e
        ? ((m = x.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((x.flags |= 2), p) : m)
            : ((x.flags |= 2), p))
        : ((x.flags |= 1048576), p)
    );
  }
  function o(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function a(x, p, m, g) {
    return p === null || p.tag !== 6
      ? ((p = q9(m, x.mode, g)), (p.return = x), p)
      : ((p = l(p, m)), (p.return = x), p);
  }
  function u(x, p, m, g) {
    var S = m.type;
    return S === K3
      ? f(x, p, m.props.children, g, m.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === n3 &&
            x0(S) === p.type))
      ? ((g = l(p, m.props)), (g.ref = U4(x, p, m)), (g.return = x), g)
      : ((g = i6(m.type, m.key, m.props, null, x.mode, g)),
        (g.ref = U4(x, p, m)),
        (g.return = x),
        g);
  }
  function C(x, p, m, g) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = K9(m, x.mode, g)), (p.return = x), p)
      : ((p = l(p, m.children || [])), (p.return = x), p);
  }
  function f(x, p, m, g, S) {
    return p === null || p.tag !== 7
      ? ((p = D3(m, x.mode, g, S)), (p.return = x), p)
      : ((p = l(p, m)), (p.return = x), p);
  }
  function d(x, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = q9("" + p, x.mode, m)), (p.return = x), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case P5:
          return (
            (m = i6(p.type, p.key, p.props, null, x.mode, m)),
            (m.ref = U4(x, null, p)),
            (m.return = x),
            m
          );
        case q3:
          return (p = K9(p, x.mode, m)), (p.return = x), p;
        case n3:
          var g = p._init;
          return d(x, g(p._payload), m);
      }
      if (W4(p) || O4(p))
        return (p = D3(p, x.mode, m, null)), (p.return = x), p;
      Q5(x, p);
    }
    return null;
  }
  function c(x, p, m, g) {
    var S = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : a(x, p, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case P5:
          return m.key === S ? u(x, p, m, g) : null;
        case q3:
          return m.key === S ? C(x, p, m, g) : null;
        case n3:
          return (S = m._init), c(x, p, S(m._payload), g);
      }
      if (W4(m) || O4(m)) return S !== null ? null : f(x, p, m, g, null);
      Q5(x, m);
    }
    return null;
  }
  function h(x, p, m, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (x = x.get(m) || null), a(p, x, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case P5:
          return (x = x.get(g.key === null ? m : g.key) || null), u(p, x, g, S);
        case q3:
          return (x = x.get(g.key === null ? m : g.key) || null), C(p, x, g, S);
        case n3:
          var w = g._init;
          return h(x, p, m, w(g._payload), S);
      }
      if (W4(g) || O4(g)) return (x = x.get(m) || null), f(p, x, g, S, null);
      Q5(p, g);
    }
    return null;
  }
  function v(x, p, m, g) {
    for (
      var S = null, w = null, M = p, T = (p = 0), N = null;
      M !== null && T < m.length;
      T++
    ) {
      M.index > T ? ((N = M), (M = null)) : (N = M.sibling);
      var Z = c(x, M, m[T], g);
      if (Z === null) {
        M === null && (M = N);
        break;
      }
      e && M && Z.alternate === null && t(x, M),
        (p = i(Z, p, T)),
        w === null ? (S = Z) : (w.sibling = Z),
        (w = Z),
        (M = N);
    }
    if (T === m.length) return n(x, M), d1 && N3(x, T), S;
    if (M === null) {
      for (; T < m.length; T++)
        (M = d(x, m[T], g)),
          M !== null &&
            ((p = i(M, p, T)), w === null ? (S = M) : (w.sibling = M), (w = M));
      return d1 && N3(x, T), S;
    }
    for (M = s(x, M); T < m.length; T++)
      (N = h(M, x, T, m[T], g)),
        N !== null &&
          (e && N.alternate !== null && M.delete(N.key === null ? T : N.key),
          (p = i(N, p, T)),
          w === null ? (S = N) : (w.sibling = N),
          (w = N));
    return (
      e &&
        M.forEach(function (k) {
          return t(x, k);
        }),
      d1 && N3(x, T),
      S
    );
  }
  function y(x, p, m, g) {
    var S = O4(m);
    if (typeof S != "function") throw Error(O(150));
    if (((m = S.call(m)), m == null)) throw Error(O(151));
    for (
      var w = (S = null), M = p, T = (p = 0), N = null, Z = m.next();
      M !== null && !Z.done;
      T++, Z = m.next()
    ) {
      M.index > T ? ((N = M), (M = null)) : (N = M.sibling);
      var k = c(x, M, Z.value, g);
      if (k === null) {
        M === null && (M = N);
        break;
      }
      e && M && k.alternate === null && t(x, M),
        (p = i(k, p, T)),
        w === null ? (S = k) : (w.sibling = k),
        (w = k),
        (M = N);
    }
    if (Z.done) return n(x, M), d1 && N3(x, T), S;
    if (M === null) {
      for (; !Z.done; T++, Z = m.next())
        (Z = d(x, Z.value, g)),
          Z !== null &&
            ((p = i(Z, p, T)), w === null ? (S = Z) : (w.sibling = Z), (w = Z));
      return d1 && N3(x, T), S;
    }
    for (M = s(x, M); !Z.done; T++, Z = m.next())
      (Z = h(M, x, T, Z.value, g)),
        Z !== null &&
          (e && Z.alternate !== null && M.delete(Z.key === null ? T : Z.key),
          (p = i(Z, p, T)),
          w === null ? (S = Z) : (w.sibling = Z),
          (w = Z));
    return (
      e &&
        M.forEach(function (_) {
          return t(x, _);
        }),
      d1 && N3(x, T),
      S
    );
  }
  function P(x, p, m, g) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === K3 &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case P5:
          e: {
            for (var S = m.key, w = p; w !== null; ) {
              if (w.key === S) {
                if (((S = m.type), S === K3)) {
                  if (w.tag === 7) {
                    n(x, w.sibling),
                      (p = l(w, m.props.children)),
                      (p.return = x),
                      (x = p);
                    break e;
                  }
                } else if (
                  w.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === n3 &&
                    x0(S) === w.type)
                ) {
                  n(x, w.sibling),
                    (p = l(w, m.props)),
                    (p.ref = U4(x, w, m)),
                    (p.return = x),
                    (x = p);
                  break e;
                }
                n(x, w);
                break;
              } else t(x, w);
              w = w.sibling;
            }
            m.type === K3
              ? ((p = D3(m.props.children, x.mode, g, m.key)),
                (p.return = x),
                (x = p))
              : ((g = i6(m.type, m.key, m.props, null, x.mode, g)),
                (g.ref = U4(x, p, m)),
                (g.return = x),
                (x = g));
          }
          return o(x);
        case q3:
          e: {
            for (w = m.key; p !== null; ) {
              if (p.key === w)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(x, p.sibling),
                    (p = l(p, m.children || [])),
                    (p.return = x),
                    (x = p);
                  break e;
                } else {
                  n(x, p);
                  break;
                }
              else t(x, p);
              p = p.sibling;
            }
            (p = K9(m, x.mode, g)), (p.return = x), (x = p);
          }
          return o(x);
        case n3:
          return (w = m._init), P(x, p, w(m._payload), g);
      }
      if (W4(m)) return v(x, p, m, g);
      if (O4(m)) return y(x, p, m, g);
      Q5(x, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(x, p.sibling), (p = l(p, m)), (p.return = x), (x = p))
          : (n(x, p), (p = q9(m, x.mode, g)), (p.return = x), (x = p)),
        o(x))
      : n(x, p);
  }
  return P;
}
var k4 = En(!0),
  Tn = En(!1),
  S5 = {},
  D2 = S3(S5),
  h5 = S3(S5),
  m5 = S3(S5);
function O3(e) {
  if (e === S5) throw Error(O(174));
  return e;
}
function V8(e, t) {
  switch ((l1(m5, t), l1(h5, e), l1(D2, S5), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ke(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ke(t, e));
  }
  a1(D2), l1(D2, t);
}
function M4() {
  a1(D2), a1(h5), a1(m5);
}
function Pn(e) {
  O3(m5.current);
  var t = O3(D2.current),
    n = ke(t, e.type);
  t !== n && (l1(h5, e), l1(D2, n));
}
function B8(e) {
  h5.current === e && (a1(D2), a1(h5));
}
var p1 = S3(0);
function M6(e) {
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
var W9 = [];
function $8() {
  for (var e = 0; e < W9.length; e++)
    W9[e]._workInProgressVersionPrimary = null;
  W9.length = 0;
}
var t6 = K2.ReactCurrentDispatcher,
  b9 = K2.ReactCurrentBatchConfig,
  V3 = 0,
  h1 = null,
  Z1 = null,
  _1 = null,
  L6 = !1,
  e5 = !1,
  x5 = 0,
  wi = 0;
function D1() {
  throw Error(O(321));
}
function Q8(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!E2(e[n], t[n])) return !1;
  return !0;
}
function W8(e, t, n, s, l, i) {
  if (
    ((V3 = i),
    (h1 = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (t6.current = e === null || e.memoizedState === null ? Zi : Ai),
    (e = n(s, l)),
    e5)
  ) {
    i = 0;
    do {
      if (((e5 = !1), (x5 = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (_1 = Z1 = null),
        (t.updateQueue = null),
        (t6.current = Si),
        (e = n(s, l));
    } while (e5);
  }
  if (
    ((t6.current = Z6),
    (t = Z1 !== null && Z1.next !== null),
    (V3 = 0),
    (_1 = Z1 = h1 = null),
    (L6 = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function b8() {
  var e = x5 !== 0;
  return (x5 = 0), e;
}
function R2() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _1 === null ? (h1.memoizedState = _1 = e) : (_1 = _1.next = e), _1;
}
function j2() {
  if (Z1 === null) {
    var e = h1.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z1.next;
  var t = _1 === null ? h1.memoizedState : _1.next;
  if (t !== null) (_1 = t), (Z1 = e);
  else {
    if (e === null) throw Error(O(310));
    (Z1 = e),
      (e = {
        memoizedState: Z1.memoizedState,
        baseState: Z1.baseState,
        baseQueue: Z1.baseQueue,
        queue: Z1.queue,
        next: null,
      }),
      _1 === null ? (h1.memoizedState = _1 = e) : (_1 = _1.next = e);
  }
  return _1;
}
function v5(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function H9(e) {
  var t = j2(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var s = Z1,
    l = s.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (s.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (s = s.baseState);
    var a = (o = null),
      u = null,
      C = i;
    do {
      var f = C.lane;
      if ((V3 & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
          (s = C.hasEagerState ? C.eagerState : e(s, C.action));
      else {
        var d = {
          lane: f,
          action: C.action,
          hasEagerState: C.hasEagerState,
          eagerState: C.eagerState,
          next: null,
        };
        u === null ? ((a = u = d), (o = s)) : (u = u.next = d),
          (h1.lanes |= f),
          (B3 |= f);
      }
      C = C.next;
    } while (C !== null && C !== i);
    u === null ? (o = s) : (u.next = a),
      E2(s, t.memoizedState) || (J1 = !0),
      (t.memoizedState = s),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (h1.lanes |= i), (B3 |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Y9(e) {
  var t = j2(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    E2(i, t.memoizedState) || (J1 = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, s];
}
function Rn() {}
function On(e, t) {
  var n = h1,
    s = j2(),
    l = t(),
    i = !E2(s.memoizedState, l);
  if (
    (i && ((s.memoizedState = l), (J1 = !0)),
    (s = s.queue),
    H8(Dn.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || i || (_1 !== null && _1.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      j5(9, zn.bind(null, n, s, l, t), void 0, null),
      N1 === null)
    )
      throw Error(O(349));
    V3 & 30 || In(n, t, l);
  }
  return l;
}
function In(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = h1.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (h1.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zn(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), Fn(t) && Un(e);
}
function Dn(e, t, n) {
  return n(function () {
    Fn(t) && Un(e);
  });
}
function Fn(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !E2(e, n);
  } catch {
    return !0;
  }
}
function Un(e) {
  var t = X2(e, 1);
  t !== null && _2(t, e, 1, -1);
}
function v0(e) {
  var t = R2();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: v5,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Li.bind(null, h1, e)),
    [t.memoizedState, e]
  );
}
function j5(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = h1.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (h1.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function Vn() {
  return j2().memoizedState;
}
function n6(e, t, n, s) {
  var l = R2();
  (h1.flags |= e),
    (l.memoizedState = j5(1 | t, n, void 0, s === void 0 ? null : s));
}
function G6(e, t, n, s) {
  var l = j2();
  s = s === void 0 ? null : s;
  var i = void 0;
  if (Z1 !== null) {
    var o = Z1.memoizedState;
    if (((i = o.destroy), s !== null && Q8(s, o.deps))) {
      l.memoizedState = j5(t, n, i, s);
      return;
    }
  }
  (h1.flags |= e), (l.memoizedState = j5(1 | t, n, i, s));
}
function j0(e, t) {
  return n6(8390656, 8, e, t);
}
function H8(e, t) {
  return G6(2048, 8, e, t);
}
function Bn(e, t) {
  return G6(4, 2, e, t);
}
function $n(e, t) {
  return G6(4, 4, e, t);
}
function Qn(e, t) {
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
function Wn(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), G6(4, 4, Qn.bind(null, t, e), n)
  );
}
function Y8() {}
function bn(e, t) {
  var n = j2();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Q8(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hn(e, t) {
  var n = j2();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Q8(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Yn(e, t, n) {
  return V3 & 21
    ? (E2(n, t) || ((n = Gt()), (h1.lanes |= n), (B3 |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (J1 = !0)), (e.memoizedState = n));
}
function ki(e, t) {
  var n = t1;
  (t1 = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = b9.transition;
  b9.transition = {};
  try {
    e(!1), t();
  } finally {
    (t1 = n), (b9.transition = s);
  }
}
function Xn() {
  return j2().memoizedState;
}
function Mi(e, t, n) {
  var s = j3(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Gn(e))
  )
    qn(t, n);
  else if (((n = An(e, t, n, s)), n !== null)) {
    var l = b1();
    _2(n, e, s, l), Kn(n, t, s);
  }
}
function Li(e, t, n) {
  var s = j3(e),
    l = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gn(e)) qn(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), E2(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), F8(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = An(e, t, l, s)),
      n !== null && ((l = b1()), _2(n, e, s, l), Kn(n, t, s));
  }
}
function Gn(e) {
  var t = e.alternate;
  return e === h1 || (t !== null && t === h1);
}
function qn(e, t) {
  e5 = L6 = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Kn(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), L8(e, n);
  }
}
var Z6 = {
    readContext: v2,
    useCallback: D1,
    useContext: D1,
    useEffect: D1,
    useImperativeHandle: D1,
    useInsertionEffect: D1,
    useLayoutEffect: D1,
    useMemo: D1,
    useReducer: D1,
    useRef: D1,
    useState: D1,
    useDebugValue: D1,
    useDeferredValue: D1,
    useTransition: D1,
    useMutableSource: D1,
    useSyncExternalStore: D1,
    useId: D1,
    unstable_isNewReconciler: !1,
  },
  Zi = {
    readContext: v2,
    useCallback: function (e, t) {
      return (R2().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: v2,
    useEffect: j0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        n6(4194308, 4, Qn.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return n6(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return n6(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = R2();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = R2();
      return (
        (t = n !== void 0 ? n(t) : t),
        (s.memoizedState = s.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (s.queue = e),
        (e = e.dispatch = Mi.bind(null, h1, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = R2();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: v0,
    useDebugValue: Y8,
    useDeferredValue: function (e) {
      return (R2().memoizedState = e);
    },
    useTransition: function () {
      var e = v0(!1),
        t = e[0];
      return (e = ki.bind(null, e[1])), (R2().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = h1,
        l = R2();
      if (d1) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), N1 === null)) throw Error(O(349));
        V3 & 30 || In(s, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        j0(Dn.bind(null, s, i, e), [e]),
        (s.flags |= 2048),
        j5(9, zn.bind(null, s, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = R2(),
        t = N1.identifierPrefix;
      if (d1) {
        var n = W2,
          s = Q2;
        (n = (s & ~(1 << (32 - S2(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = x5++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wi++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ai = {
    readContext: v2,
    useCallback: bn,
    useContext: v2,
    useEffect: H8,
    useImperativeHandle: Wn,
    useInsertionEffect: Bn,
    useLayoutEffect: $n,
    useMemo: Hn,
    useReducer: H9,
    useRef: Vn,
    useState: function () {
      return H9(v5);
    },
    useDebugValue: Y8,
    useDeferredValue: function (e) {
      var t = j2();
      return Yn(t, Z1.memoizedState, e);
    },
    useTransition: function () {
      var e = H9(v5)[0],
        t = j2().memoizedState;
      return [e, t];
    },
    useMutableSource: Rn,
    useSyncExternalStore: On,
    useId: Xn,
    unstable_isNewReconciler: !1,
  },
  Si = {
    readContext: v2,
    useCallback: bn,
    useContext: v2,
    useEffect: H8,
    useImperativeHandle: Wn,
    useInsertionEffect: Bn,
    useLayoutEffect: $n,
    useMemo: Hn,
    useReducer: Y9,
    useRef: Vn,
    useState: function () {
      return Y9(v5);
    },
    useDebugValue: Y8,
    useDeferredValue: function (e) {
      var t = j2();
      return Z1 === null ? (t.memoizedState = e) : Yn(t, Z1.memoizedState, e);
    },
    useTransition: function () {
      var e = Y9(v5)[0],
        t = j2().memoizedState;
      return [e, t];
    },
    useMutableSource: Rn,
    useSyncExternalStore: On,
    useId: Xn,
    unstable_isNewReconciler: !1,
  };
function L4(e, t) {
  try {
    var n = "",
      s = t;
    do (n += nl(s)), (s = s.return);
    while (s);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function X9(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function be(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _i = typeof WeakMap == "function" ? WeakMap : Map;
function Jn(e, t, n) {
  (n = b2(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      S6 || ((S6 = !0), (n8 = s)), be(e, t);
    }),
    n
  );
}
function er(e, t, n) {
  (n = b2(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var l = t.value;
    (n.payload = function () {
      return s(l);
    }),
      (n.callback = function () {
        be(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        be(e, t),
          typeof s != "function" &&
            (v3 === null ? (v3 = new Set([this])) : v3.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function y0(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new _i();
    var l = new Set();
    s.set(t, l);
  } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
  l.has(n) || (l.add(n), (e = $i.bind(null, e, t, n)), t.then(e, e));
}
function g0(e) {
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
function w0(e, t, n, s, l) {
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
              : ((t = b2(-1, 1)), (t.tag = 2), x3(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ni = K2.ReactCurrentOwner,
  J1 = !1;
function Q1(e, t, n, s) {
  t.child = e === null ? Tn(t, null, n, s) : k4(t, e.child, n, s);
}
function k0(e, t, n, s, l) {
  n = n.render;
  var i = t.ref;
  return (
    p4(t, l),
    (s = W8(e, t, n, s, i, l)),
    (n = b8()),
    e !== null && !J1
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        G2(e, t, l))
      : (d1 && n && P8(t), (t.flags |= 1), Q1(e, t, s, l), t.child)
  );
}
function M0(e, t, n, s, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !n7(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), tr(e, t, i, s, l))
      : ((e = i6(n.type, null, s, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : C5), n(o, s) && e.ref === t.ref)
    )
      return G2(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = y3(i, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tr(e, t, n, s, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (C5(i, s) && e.ref === t.ref)
      if (((J1 = !1), (t.pendingProps = s = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (J1 = !0);
      else return (t.lanes = e.lanes), G2(e, t, l);
  }
  return He(e, t, n, s, l);
}
function nr(e, t, n) {
  var s = t.pendingProps,
    l = s.children,
    i = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        l1(a4, r2),
        (r2 |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          l1(a4, r2),
          (r2 |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = i !== null ? i.baseLanes : n),
        l1(a4, r2),
        (r2 |= s);
    }
  else
    i !== null ? ((s = i.baseLanes | n), (t.memoizedState = null)) : (s = n),
      l1(a4, r2),
      (r2 |= s);
  return Q1(e, t, l, n), t.child;
}
function rr(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function He(e, t, n, s, l) {
  var i = t2(n) ? F3 : $1.current;
  return (
    (i = g4(t, i)),
    p4(t, l),
    (n = W8(e, t, n, s, i, l)),
    (s = b8()),
    e !== null && !J1
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        G2(e, t, l))
      : (d1 && s && P8(t), (t.flags |= 1), Q1(e, t, n, l), t.child)
  );
}
function L0(e, t, n, s, l) {
  if (t2(n)) {
    var i = !0;
    v6(t);
  } else i = !1;
  if ((p4(t, l), t.stateNode === null))
    r6(e, t), Nn(t, n, s), We(t, n, s, l), (s = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      C = n.contextType;
    typeof C == "object" && C !== null
      ? (C = v2(C))
      : ((C = t2(n) ? F3 : $1.current), (C = g4(t, C)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== s || u !== C) && m0(t, o, s, C)),
      (r3 = !1);
    var c = t.memoizedState;
    (o.state = c),
      k6(t, s, o, l),
      (u = t.memoizedState),
      a !== s || c !== u || e2.current || r3
        ? (typeof f == "function" && (Qe(t, n, f, s), (u = t.memoizedState)),
          (a = r3 || h0(t, n, a, s, c, u, C))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = s),
              (t.memoizedState = u)),
          (o.props = s),
          (o.state = u),
          (o.context = C),
          (s = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (o = t.stateNode),
      Sn(e, t),
      (a = t.memoizedProps),
      (C = t.type === t.elementType ? a : k2(t.type, a)),
      (o.props = C),
      (d = t.pendingProps),
      (c = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = v2(u))
        : ((u = t2(n) ? F3 : $1.current), (u = g4(t, u)));
    var h = n.getDerivedStateFromProps;
    (f =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || c !== u) && m0(t, o, s, u)),
      (r3 = !1),
      (c = t.memoizedState),
      (o.state = c),
      k6(t, s, o, l);
    var v = t.memoizedState;
    a !== d || c !== v || e2.current || r3
      ? (typeof h == "function" && (Qe(t, n, h, s), (v = t.memoizedState)),
        (C = r3 || h0(t, n, C, s, c, v, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(s, v, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(s, v, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = v)),
        (o.props = s),
        (o.state = v),
        (o.context = u),
        (s = C))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return Ye(e, t, n, s, i, l);
}
function Ye(e, t, n, s, l, i) {
  rr(e, t);
  var o = (t.flags & 128) !== 0;
  if (!s && !o) return l && c0(t, n, !1), G2(e, t, i);
  (s = t.stateNode), (Ni.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = k4(t, e.child, null, i)), (t.child = k4(t, null, a, i)))
      : Q1(e, t, a, i),
    (t.memoizedState = s.state),
    l && c0(t, n, !0),
    t.child
  );
}
function sr(e) {
  var t = e.stateNode;
  t.pendingContext
    ? u0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && u0(e, t.context, !1),
    V8(e, t.containerInfo);
}
function Z0(e, t, n, s, l) {
  return w4(), O8(l), (t.flags |= 256), Q1(e, t, n, s), t.child;
}
var Xe = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ge(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lr(e, t, n) {
  var s = t.pendingProps,
    l = p1.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    l1(p1, l & 1),
    e === null)
  )
    return (
      Be(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = s.children),
          (e = s.fallback),
          i
            ? ((s = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(s & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = J6(o, s, 0, null)),
              (e = D3(e, s, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ge(n)),
              (t.memoizedState = Xe),
              e)
            : X8(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Ei(e, t, o, s, a, l, n);
  if (i) {
    (i = s.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: s.children };
    return (
      !(o & 1) && t.child !== l
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = u),
          (t.deletions = null))
        : ((s = y3(l, u)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = y3(a, i)) : ((i = D3(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (s.return = t),
      (s.sibling = i),
      (t.child = s),
      (s = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ge(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xe),
      s
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (s = y3(i, { mode: "visible", children: s.children })),
    !(t.mode & 1) && (s.lanes = n),
    (s.return = t),
    (s.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = s),
    (t.memoizedState = null),
    s
  );
}
function X8(e, t) {
  return (
    (t = J6({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function W5(e, t, n, s) {
  return (
    s !== null && O8(s),
    k4(t, e.child, null, n),
    (e = X8(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ei(e, t, n, s, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = X9(Error(O(422)))), W5(e, t, o, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = s.fallback),
        (l = t.mode),
        (s = J6({ mode: "visible", children: s.children }, l, 0, null)),
        (i = D3(i, l, o, null)),
        (i.flags |= 2),
        (s.return = t),
        (i.return = t),
        (s.sibling = i),
        (t.child = s),
        t.mode & 1 && k4(t, e.child, null, o),
        (t.child.memoizedState = Ge(o)),
        (t.memoizedState = Xe),
        i);
  if (!(t.mode & 1)) return W5(e, t, o, null);
  if (l.data === "$!") {
    if (((s = l.nextSibling && l.nextSibling.dataset), s)) var a = s.dgst;
    return (s = a), (i = Error(O(419))), (s = X9(i, s, void 0)), W5(e, t, o, s);
  }
  if (((a = (o & e.childLanes) !== 0), J1 || a)) {
    if (((s = N1), s !== null)) {
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
      (l = l & (s.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), X2(e, l), _2(s, e, l, -1));
    }
    return t7(), (s = X9(Error(O(421)))), W5(e, t, o, s);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Qi.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (i2 = m3(l.nextSibling)),
      (o2 = t),
      (d1 = !0),
      (L2 = null),
      e !== null &&
        ((p2[h2++] = Q2),
        (p2[h2++] = W2),
        (p2[h2++] = U3),
        (Q2 = e.id),
        (W2 = e.overflow),
        (U3 = t)),
      (t = X8(t, s.children)),
      (t.flags |= 4096),
      t);
}
function A0(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), $e(e.return, t, n);
}
function G9(e, t, n, s, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = s),
      (i.tail = n),
      (i.tailMode = l));
}
function ir(e, t, n) {
  var s = t.pendingProps,
    l = s.revealOrder,
    i = s.tail;
  if ((Q1(e, t, s.children, n), (s = p1.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && A0(e, n, t);
        else if (e.tag === 19) A0(e, n, t);
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
    s &= 1;
  }
  if ((l1(p1, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && M6(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          G9(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && M6(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        G9(t, !0, n, null, i);
        break;
      case "together":
        G9(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function r6(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function G2(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (B3 |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = y3(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = y3(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ti(e, t, n) {
  switch (t.tag) {
    case 3:
      sr(t), w4();
      break;
    case 5:
      Pn(t);
      break;
    case 1:
      t2(t.type) && v6(t);
      break;
    case 4:
      V8(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        l = t.memoizedProps.value;
      l1(g6, s._currentValue), (s._currentValue = l);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (l1(p1, p1.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? lr(e, t, n)
          : (l1(p1, p1.current & 1),
            (e = G2(e, t, n)),
            e !== null ? e.sibling : null);
      l1(p1, p1.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return ir(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        l1(p1, p1.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nr(e, t, n);
  }
  return G2(e, t, n);
}
var or, qe, ar, ur;
or = function (e, t) {
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
qe = function () {};
ar = function (e, t, n, s) {
  var l = e.memoizedProps;
  if (l !== s) {
    (e = t.stateNode), O3(D2.current);
    var i = null;
    switch (n) {
      case "input":
        (l = je(e, l)), (s = je(e, s)), (i = []);
        break;
      case "select":
        (l = m1({}, l, { value: void 0 })),
          (s = m1({}, s, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = we(e, l)), (s = we(e, s)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = m6);
    }
    Me(n, s);
    var o;
    n = null;
    for (C in l)
      if (!s.hasOwnProperty(C) && l.hasOwnProperty(C) && l[C] != null)
        if (C === "style") {
          var a = l[C];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          C !== "dangerouslySetInnerHTML" &&
            C !== "children" &&
            C !== "suppressContentEditableWarning" &&
            C !== "suppressHydrationWarning" &&
            C !== "autoFocus" &&
            (s5.hasOwnProperty(C)
              ? i || (i = [])
              : (i = i || []).push(C, null));
    for (C in s) {
      var u = s[C];
      if (
        ((a = l != null ? l[C] : void 0),
        s.hasOwnProperty(C) && u !== a && (u != null || a != null))
      )
        if (C === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(C, n)), (n = u);
        else
          C === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(C, u))
            : C === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(C, "" + u)
            : C !== "suppressContentEditableWarning" &&
              C !== "suppressHydrationWarning" &&
              (s5.hasOwnProperty(C)
                ? (u != null && C === "onScroll" && i1("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(C, u));
    }
    n && (i = i || []).push("style", n);
    var C = i;
    (t.updateQueue = C) && (t.flags |= 4);
  }
};
ur = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function V4(e, t) {
  if (!d1)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; )
          n.alternate !== null && (s = n), (n = n.sibling);
        s === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function F1(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    s = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags & 14680064),
        (s |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags),
        (s |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= s), (e.childLanes = n), t;
}
function Pi(e, t, n) {
  var s = t.pendingProps;
  switch ((R8(t), t.tag)) {
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
      return F1(t), null;
    case 1:
      return t2(t.type) && x6(), F1(t), null;
    case 3:
      return (
        (s = t.stateNode),
        M4(),
        a1(e2),
        a1($1),
        $8(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          ($5(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), L2 !== null && (l8(L2), (L2 = null)))),
        qe(e, t),
        F1(t),
        null
      );
    case 5:
      B8(t);
      var l = O3(m5.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ar(e, t, n, s, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(O(166));
          return F1(t), null;
        }
        if (((e = O3(D2.current)), $5(t))) {
          (s = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((s[O2] = t), (s[p5] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              i1("cancel", s), i1("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              i1("load", s);
              break;
            case "video":
            case "audio":
              for (l = 0; l < H4.length; l++) i1(H4[l], s);
              break;
            case "source":
              i1("error", s);
              break;
            case "img":
            case "image":
            case "link":
              i1("error", s), i1("load", s);
              break;
            case "details":
              i1("toggle", s);
              break;
            case "input":
              I7(s, i), i1("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!i.multiple }),
                i1("invalid", s);
              break;
            case "textarea":
              D7(s, i), i1("invalid", s);
          }
          Me(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? s.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      B5(s.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    s.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      B5(s.textContent, a, e),
                    (l = ["children", "" + a]))
                : s5.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  i1("scroll", s);
            }
          switch (n) {
            case "input":
              R5(s), z7(s, i, !0);
              break;
            case "textarea":
              R5(s), F7(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (s.onclick = m6);
          }
          (s = l), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ot(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == "string"
                ? (e = o.createElement(n, { is: s.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    s.multiple
                      ? (o.multiple = !0)
                      : s.size && (o.size = s.size)))
              : (e = o.createElementNS(e, n)),
            (e[O2] = t),
            (e[p5] = s),
            or(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Le(n, s)), n)) {
              case "dialog":
                i1("cancel", e), i1("close", e), (l = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                i1("load", e), (l = s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < H4.length; l++) i1(H4[l], e);
                l = s;
                break;
              case "source":
                i1("error", e), (l = s);
                break;
              case "img":
              case "image":
              case "link":
                i1("error", e), i1("load", e), (l = s);
                break;
              case "details":
                i1("toggle", e), (l = s);
                break;
              case "input":
                I7(e, s), (l = je(e, s)), i1("invalid", e);
                break;
              case "option":
                l = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (l = m1({}, s, { value: void 0 })),
                  i1("invalid", e);
                break;
              case "textarea":
                D7(e, s), (l = we(e, s)), i1("invalid", e);
                break;
              default:
                l = s;
            }
            Me(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? Dt(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && It(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && l5(e, u)
                    : typeof u == "number" && l5(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (s5.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && i1("scroll", e)
                      : u != null && j8(e, i, u, o));
              }
            switch (n) {
              case "input":
                R5(e), z7(e, s, !1);
                break;
              case "textarea":
                R5(e), F7(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + k3(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (i = s.value),
                  i != null
                    ? c4(e, !!s.multiple, i, !1)
                    : s.defaultValue != null &&
                      c4(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = m6);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break e;
              case "img":
                s = !0;
                break e;
              default:
                s = !1;
            }
          }
          s && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return F1(t), null;
    case 6:
      if (e && t.stateNode != null) ur(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = O3(m5.current)), O3(D2.current), $5(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[O2] = t),
            (i = s.nodeValue !== n) && ((e = o2), e !== null))
          )
            switch (e.tag) {
              case 3:
                B5(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  B5(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[O2] = t),
            (t.stateNode = s);
      }
      return F1(t), null;
    case 13:
      if (
        (a1(p1),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (d1 && i2 !== null && t.mode & 1 && !(t.flags & 128))
          Zn(), w4(), (t.flags |= 98560), (i = !1);
        else if (((i = $5(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[O2] = t;
          } else
            w4(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          F1(t), (i = !1);
        } else L2 !== null && (l8(L2), (L2 = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || p1.current & 1 ? A1 === 0 && (A1 = 3) : t7())),
          t.updateQueue !== null && (t.flags |= 4),
          F1(t),
          null);
    case 4:
      return (
        M4(), qe(e, t), e === null && f5(t.stateNode.containerInfo), F1(t), null
      );
    case 10:
      return D8(t.type._context), F1(t), null;
    case 17:
      return t2(t.type) && x6(), F1(t), null;
    case 19:
      if ((a1(p1), (i = t.memoizedState), i === null)) return F1(t), null;
      if (((s = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (s) V4(i, !1);
        else {
          if (A1 !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = M6(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    V4(i, !1),
                    s = o.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = s),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return l1(p1, (p1.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            g1() > Z4 &&
            ((t.flags |= 128), (s = !0), V4(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = M6(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              V4(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !d1)
            )
              return F1(t), null;
          } else
            2 * g1() - i.renderingStartTime > Z4 &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), V4(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = g1()),
          (t.sibling = null),
          (n = p1.current),
          l1(p1, s ? (n & 1) | 2 : n & 1),
          t)
        : (F1(t), null);
    case 22:
    case 23:
      return (
        e7(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? r2 & 1073741824 && (F1(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : F1(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Ri(e, t) {
  switch ((R8(t), t.tag)) {
    case 1:
      return (
        t2(t.type) && x6(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        M4(),
        a1(e2),
        a1($1),
        $8(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return B8(t), null;
    case 13:
      if (
        (a1(p1), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        w4();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return a1(p1), null;
    case 4:
      return M4(), null;
    case 10:
      return D8(t.type._context), null;
    case 22:
    case 23:
      return e7(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var b5 = !1,
  B1 = !1,
  Oi = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function o4(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        v1(e, t, s);
      }
    else n.current = null;
}
function Ke(e, t, n) {
  try {
    n();
  } catch (s) {
    v1(e, t, s);
  }
}
var S0 = !1;
function Ii(e, t) {
  if (((Oe = d6), (e = dn()), T8(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var s = n.getSelection && n.getSelection();
        if (s && s.rangeCount !== 0) {
          n = s.anchorNode;
          var l = s.anchorOffset,
            i = s.focusNode;
          s = s.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            C = 0,
            f = 0,
            d = e,
            c = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (l !== 0 && d.nodeType !== 3) || (a = o + l),
                d !== i || (s !== 0 && d.nodeType !== 3) || (u = o + s),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (c = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (c === n && ++C === l && (a = o),
                c === i && ++f === s && (u = o),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = c), (c = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ie = { focusedElem: e, selectionRange: n }, d6 = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    P = v.memoizedState,
                    x = t.stateNode,
                    p = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : k2(t.type, y),
                      P
                    );
                  x.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (g) {
          v1(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (v = S0), (S0 = !1), v;
}
function t5(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var l = (s = s.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ke(t, n, i);
      }
      l = l.next;
    } while (l !== s);
  }
}
function q6(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var s = n.create;
        n.destroy = s();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Je(e) {
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
function cr(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cr(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[O2], delete t[p5], delete t[Fe], delete t[vi], delete t[ji])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cr(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cr(e.return)) return null;
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
function e8(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = m6));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (e8(e, t, n), e = e.sibling; e !== null; ) e8(e, t, n), (e = e.sibling);
}
function t8(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (t8(e, t, n), e = e.sibling; e !== null; ) t8(e, t, n), (e = e.sibling);
}
var R1 = null,
  M2 = !1;
function e3(e, t, n) {
  for (n = n.child; n !== null; ) fr(e, t, n), (n = n.sibling);
}
function fr(e, t, n) {
  if (z2 && typeof z2.onCommitFiberUnmount == "function")
    try {
      z2.onCommitFiberUnmount($6, n);
    } catch {}
  switch (n.tag) {
    case 5:
      B1 || o4(n, t);
    case 6:
      var s = R1,
        l = M2;
      (R1 = null),
        e3(e, t, n),
        (R1 = s),
        (M2 = l),
        R1 !== null &&
          (M2
            ? ((e = R1),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : R1.removeChild(n.stateNode));
      break;
    case 18:
      R1 !== null &&
        (M2
          ? ((e = R1),
            (n = n.stateNode),
            e.nodeType === 8
              ? $9(e.parentNode, n)
              : e.nodeType === 1 && $9(e, n),
            u5(e))
          : $9(R1, n.stateNode));
      break;
    case 4:
      (s = R1),
        (l = M2),
        (R1 = n.stateNode.containerInfo),
        (M2 = !0),
        e3(e, t, n),
        (R1 = s),
        (M2 = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !B1 &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        l = s = s.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ke(n, t, o),
            (l = l.next);
        } while (l !== s);
      }
      e3(e, t, n);
      break;
    case 1:
      if (
        !B1 &&
        (o4(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (a) {
          v1(n, t, a);
        }
      e3(e, t, n);
      break;
    case 21:
      e3(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((B1 = (s = B1) || n.memoizedState !== null), e3(e, t, n), (B1 = s))
        : e3(e, t, n);
      break;
    default:
      e3(e, t, n);
  }
}
function N0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Oi()),
      t.forEach(function (s) {
        var l = Wi.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(l, l));
      });
  }
}
function w2(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var s = 0; s < n.length; s++) {
      var l = n[s];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (R1 = a.stateNode), (M2 = !1);
              break e;
            case 3:
              (R1 = a.stateNode.containerInfo), (M2 = !0);
              break e;
            case 4:
              (R1 = a.stateNode.containerInfo), (M2 = !0);
              break e;
          }
          a = a.return;
        }
        if (R1 === null) throw Error(O(160));
        fr(i, o, l), (R1 = null), (M2 = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (C) {
        v1(l, t, C);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dr(t, e), (t = t.sibling);
}
function dr(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((w2(t, e), P2(e), s & 4)) {
        try {
          t5(3, e, e.return), q6(3, e);
        } catch (y) {
          v1(e, e.return, y);
        }
        try {
          t5(5, e, e.return);
        } catch (y) {
          v1(e, e.return, y);
        }
      }
      break;
    case 1:
      w2(t, e), P2(e), s & 512 && n !== null && o4(n, n.return);
      break;
    case 5:
      if (
        (w2(t, e),
        P2(e),
        s & 512 && n !== null && o4(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          l5(l, "");
        } catch (y) {
          v1(e, e.return, y);
        }
      }
      if (s & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Pt(l, i),
              Le(a, o);
            var C = Le(a, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                d = u[o + 1];
              f === "style"
                ? Dt(l, d)
                : f === "dangerouslySetInnerHTML"
                ? It(l, d)
                : f === "children"
                ? l5(l, d)
                : j8(l, f, d, C);
            }
            switch (a) {
              case "input":
                ye(l, i);
                break;
              case "textarea":
                Rt(l, i);
                break;
              case "select":
                var c = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? c4(l, !!i.multiple, h, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? c4(l, !!i.multiple, i.defaultValue, !0)
                      : c4(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[p5] = i;
          } catch (y) {
            v1(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((w2(t, e), P2(e), s & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (y) {
          v1(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (w2(t, e), P2(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          u5(t.containerInfo);
        } catch (y) {
          v1(e, e.return, y);
        }
      break;
    case 4:
      w2(t, e), P2(e);
      break;
    case 13:
      w2(t, e),
        P2(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (K8 = g1())),
        s & 4 && N0(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((B1 = (C = B1) || f), w2(t, e), (B1 = C)) : w2(t, e),
        P2(e),
        s & 8192)
      ) {
        if (
          ((C = e.memoizedState !== null),
          (e.stateNode.isHidden = C) && !f && e.mode & 1)
        )
          for ($ = e, f = e.child; f !== null; ) {
            for (d = $ = f; $ !== null; ) {
              switch (((c = $), (h = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  t5(4, c, c.return);
                  break;
                case 1:
                  o4(c, c.return);
                  var v = c.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (s = c), (n = c.return);
                    try {
                      (t = s),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      v1(s, n, y);
                    }
                  }
                  break;
                case 5:
                  o4(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    T0(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = c), ($ = h)) : T0(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode),
                  C
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = zt("display", o)));
              } catch (y) {
                v1(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = C ? "" : d.memoizedProps;
              } catch (y) {
                v1(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      w2(t, e), P2(e), s & 4 && N0(e);
      break;
    case 21:
      break;
    default:
      w2(t, e), P2(e);
  }
}
function P2(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cr(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (s.tag) {
        case 5:
          var l = s.stateNode;
          s.flags & 32 && (l5(l, ""), (s.flags &= -33));
          var i = _0(e);
          t8(e, i, l);
          break;
        case 3:
        case 4:
          var o = s.stateNode.containerInfo,
            a = _0(e);
          e8(e, a, o);
          break;
        default:
          throw Error(O(161));
      }
    } catch (u) {
      v1(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zi(e, t, n) {
  ($ = e), pr(e);
}
function pr(e, t, n) {
  for (var s = (e.mode & 1) !== 0; $ !== null; ) {
    var l = $,
      i = l.child;
    if (l.tag === 22 && s) {
      var o = l.memoizedState !== null || b5;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || B1;
        a = b5;
        var C = B1;
        if (((b5 = o), (B1 = u) && !C))
          for ($ = l; $ !== null; )
            (o = $),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? P0(l)
                : u !== null
                ? ((u.return = o), ($ = u))
                : P0(l);
        for (; i !== null; ) ($ = i), pr(i), (i = i.sibling);
        ($ = l), (b5 = a), (B1 = C);
      }
      E0(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), ($ = i)) : E0(e);
  }
}
function E0(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              B1 || q6(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !B1)
                if (n === null) s.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : k2(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    l,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && p0(t, i, s);
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
                p0(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var C = t.alternate;
                if (C !== null) {
                  var f = C.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && u5(d);
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
              throw Error(O(163));
          }
        B1 || (t.flags & 512 && Je(t));
      } catch (c) {
        v1(t, t.return, c);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function T0(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function P0(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            q6(4, t);
          } catch (u) {
            v1(t, n, u);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var l = t.return;
            try {
              s.componentDidMount();
            } catch (u) {
              v1(t, l, u);
            }
          }
          var i = t.return;
          try {
            Je(t);
          } catch (u) {
            v1(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Je(t);
          } catch (u) {
            v1(t, o, u);
          }
      }
    } catch (u) {
      v1(t, t.return, u);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), ($ = a);
      break;
    }
    $ = t.return;
  }
}
var Di = Math.ceil,
  A6 = K2.ReactCurrentDispatcher,
  G8 = K2.ReactCurrentOwner,
  x2 = K2.ReactCurrentBatchConfig,
  q = 0,
  N1 = null,
  L1 = null,
  I1 = 0,
  r2 = 0,
  a4 = S3(0),
  A1 = 0,
  y5 = null,
  B3 = 0,
  K6 = 0,
  q8 = 0,
  n5 = null,
  K1 = null,
  K8 = 0,
  Z4 = 1 / 0,
  V2 = null,
  S6 = !1,
  n8 = null,
  v3 = null,
  H5 = !1,
  a3 = null,
  _6 = 0,
  r5 = 0,
  r8 = null,
  s6 = -1,
  l6 = 0;
function b1() {
  return q & 6 ? g1() : s6 !== -1 ? s6 : (s6 = g1());
}
function j3(e) {
  return e.mode & 1
    ? q & 2 && I1 !== 0
      ? I1 & -I1
      : gi.transition !== null
      ? (l6 === 0 && (l6 = Gt()), l6)
      : ((e = t1),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : rn(e.type))),
        e)
    : 1;
}
function _2(e, t, n, s) {
  if (50 < r5) throw ((r5 = 0), (r8 = null), Error(O(185)));
  L5(e, n, s),
    (!(q & 2) || e !== N1) &&
      (e === N1 && (!(q & 2) && (K6 |= n), A1 === 4 && l3(e, I1)),
      n2(e, s),
      n === 1 && q === 0 && !(t.mode & 1) && ((Z4 = g1() + 500), Y6 && _3()));
}
function n2(e, t) {
  var n = e.callbackNode;
  gl(e, t);
  var s = f6(e, e === N1 ? I1 : 0);
  if (s === 0)
    n !== null && B7(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && B7(n), t === 1))
      e.tag === 0 ? yi(R0.bind(null, e)) : kn(R0.bind(null, e)),
        mi(function () {
          !(q & 6) && _3();
        }),
        (n = null);
    else {
      switch (qt(s)) {
        case 1:
          n = M8;
          break;
        case 4:
          n = Yt;
          break;
        case 16:
          n = C6;
          break;
        case 536870912:
          n = Xt;
          break;
        default:
          n = C6;
      }
      n = wr(n, hr.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hr(e, t) {
  if (((s6 = -1), (l6 = 0), q & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (h4() && e.callbackNode !== n) return null;
  var s = f6(e, e === N1 ? I1 : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = N6(e, s);
  else {
    t = s;
    var l = q;
    q |= 2;
    var i = xr();
    (N1 !== e || I1 !== t) && ((V2 = null), (Z4 = g1() + 500), z3(e, t));
    do
      try {
        Vi();
        break;
      } catch (a) {
        mr(e, a);
      }
    while (1);
    z8(),
      (A6.current = i),
      (q = l),
      L1 !== null ? (t = 0) : ((N1 = null), (I1 = 0), (t = A1));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ne(e)), l !== 0 && ((s = l), (t = s8(e, l)))), t === 1)
    )
      throw ((n = y5), z3(e, 0), l3(e, s), n2(e, g1()), n);
    if (t === 6) l3(e, s);
    else {
      if (
        ((l = e.current.alternate),
        !(s & 30) &&
          !Fi(l) &&
          ((t = N6(e, s)),
          t === 2 && ((i = Ne(e)), i !== 0 && ((s = i), (t = s8(e, i)))),
          t === 1))
      )
        throw ((n = y5), z3(e, 0), l3(e, s), n2(e, g1()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          E3(e, K1, V2);
          break;
        case 3:
          if (
            (l3(e, s), (s & 130023424) === s && ((t = K8 + 500 - g1()), 10 < t))
          ) {
            if (f6(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & s) !== s)) {
              b1(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = De(E3.bind(null, e, K1, V2), t);
            break;
          }
          E3(e, K1, V2);
          break;
        case 4:
          if ((l3(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, l = -1; 0 < s; ) {
            var o = 31 - S2(s);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (s &= ~i);
          }
          if (
            ((s = l),
            (s = g1() - s),
            (s =
              (120 > s
                ? 120
                : 480 > s
                ? 480
                : 1080 > s
                ? 1080
                : 1920 > s
                ? 1920
                : 3e3 > s
                ? 3e3
                : 4320 > s
                ? 4320
                : 1960 * Di(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = De(E3.bind(null, e, K1, V2), s);
            break;
          }
          E3(e, K1, V2);
          break;
        case 5:
          E3(e, K1, V2);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return n2(e, g1()), e.callbackNode === n ? hr.bind(null, e) : null;
}
function s8(e, t) {
  var n = n5;
  return (
    e.current.memoizedState.isDehydrated && (z3(e, t).flags |= 256),
    (e = N6(e, t)),
    e !== 2 && ((t = K1), (K1 = n), t !== null && l8(t)),
    e
  );
}
function l8(e) {
  K1 === null ? (K1 = e) : K1.push.apply(K1, e);
}
function Fi(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var l = n[s],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!E2(i(), l)) return !1;
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
function l3(e, t) {
  for (
    t &= ~q8,
      t &= ~K6,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - S2(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function R0(e) {
  if (q & 6) throw Error(O(327));
  h4();
  var t = f6(e, 0);
  if (!(t & 1)) return n2(e, g1()), null;
  var n = N6(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Ne(e);
    s !== 0 && ((t = s), (n = s8(e, s)));
  }
  if (n === 1) throw ((n = y5), z3(e, 0), l3(e, t), n2(e, g1()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    E3(e, K1, V2),
    n2(e, g1()),
    null
  );
}
function J8(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((Z4 = g1() + 500), Y6 && _3());
  }
}
function $3(e) {
  a3 !== null && a3.tag === 0 && !(q & 6) && h4();
  var t = q;
  q |= 1;
  var n = x2.transition,
    s = t1;
  try {
    if (((x2.transition = null), (t1 = 1), e)) return e();
  } finally {
    (t1 = s), (x2.transition = n), (q = t), !(q & 6) && _3();
  }
}
function e7() {
  (r2 = a4.current), a1(a4);
}
function z3(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), hi(n)), L1 !== null))
    for (n = L1.return; n !== null; ) {
      var s = n;
      switch ((R8(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && x6();
          break;
        case 3:
          M4(), a1(e2), a1($1), $8();
          break;
        case 5:
          B8(s);
          break;
        case 4:
          M4();
          break;
        case 13:
          a1(p1);
          break;
        case 19:
          a1(p1);
          break;
        case 10:
          D8(s.type._context);
          break;
        case 22:
        case 23:
          e7();
      }
      n = n.return;
    }
  if (
    ((N1 = e),
    (L1 = e = y3(e.current, null)),
    (I1 = r2 = t),
    (A1 = 0),
    (y5 = null),
    (q8 = K6 = B3 = 0),
    (K1 = n5 = null),
    R3 !== null)
  ) {
    for (t = 0; t < R3.length; t++)
      if (((n = R3[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var l = s.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (s.next = o);
        }
        n.pending = s;
      }
    R3 = null;
  }
  return e;
}
function mr(e, t) {
  do {
    var n = L1;
    try {
      if ((z8(), (t6.current = Z6), L6)) {
        for (var s = h1.memoizedState; s !== null; ) {
          var l = s.queue;
          l !== null && (l.pending = null), (s = s.next);
        }
        L6 = !1;
      }
      if (
        ((V3 = 0),
        (_1 = Z1 = h1 = null),
        (e5 = !1),
        (x5 = 0),
        (G8.current = null),
        n === null || n.return === null)
      ) {
        (A1 = 1), (y5 = t), (L1 = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = I1),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var C = u,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var c = f.alternate;
            c
              ? ((f.updateQueue = c.updateQueue),
                (f.memoizedState = c.memoizedState),
                (f.lanes = c.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var h = g0(o);
          if (h !== null) {
            (h.flags &= -257),
              w0(h, o, a, i, t),
              h.mode & 1 && y0(i, C, t),
              (t = h),
              (u = C);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              y0(i, C, t), t7();
              break e;
            }
            u = Error(O(426));
          }
        } else if (d1 && a.mode & 1) {
          var P = g0(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              w0(P, o, a, i, t),
              O8(L4(u, a));
            break e;
          }
        }
        (i = u = L4(u, a)),
          A1 !== 4 && (A1 = 2),
          n5 === null ? (n5 = [i]) : n5.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var x = Jn(i, u, t);
              d0(i, x);
              break e;
            case 1:
              a = u;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (v3 === null || !v3.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = er(i, a, t);
                d0(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jr(n);
    } catch (S) {
      (t = S), L1 === n && n !== null && (L1 = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function xr() {
  var e = A6.current;
  return (A6.current = Z6), e === null ? Z6 : e;
}
function t7() {
  (A1 === 0 || A1 === 3 || A1 === 2) && (A1 = 4),
    N1 === null || (!(B3 & 268435455) && !(K6 & 268435455)) || l3(N1, I1);
}
function N6(e, t) {
  var n = q;
  q |= 2;
  var s = xr();
  (N1 !== e || I1 !== t) && ((V2 = null), z3(e, t));
  do
    try {
      Ui();
      break;
    } catch (l) {
      mr(e, l);
    }
  while (1);
  if ((z8(), (q = n), (A6.current = s), L1 !== null)) throw Error(O(261));
  return (N1 = null), (I1 = 0), A1;
}
function Ui() {
  for (; L1 !== null; ) vr(L1);
}
function Vi() {
  for (; L1 !== null && !fl(); ) vr(L1);
}
function vr(e) {
  var t = gr(e.alternate, e, r2);
  (e.memoizedProps = e.pendingProps),
    t === null ? jr(e) : (L1 = t),
    (G8.current = null);
}
function jr(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ri(n, t)), n !== null)) {
        (n.flags &= 32767), (L1 = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (A1 = 6), (L1 = null);
        return;
      }
    } else if (((n = Pi(n, t, r2)), n !== null)) {
      L1 = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      L1 = t;
      return;
    }
    L1 = t = e;
  } while (t !== null);
  A1 === 0 && (A1 = 5);
}
function E3(e, t, n) {
  var s = t1,
    l = x2.transition;
  try {
    (x2.transition = null), (t1 = 1), Bi(e, t, n, s);
  } finally {
    (x2.transition = l), (t1 = s);
  }
  return null;
}
function Bi(e, t, n, s) {
  do h4();
  while (a3 !== null);
  if (q & 6) throw Error(O(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (wl(e, i),
    e === N1 && ((L1 = N1 = null), (I1 = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      H5 ||
      ((H5 = !0),
      wr(C6, function () {
        return h4(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = x2.transition), (x2.transition = null);
    var o = t1;
    t1 = 1;
    var a = q;
    (q |= 4),
      (G8.current = null),
      Ii(e, n),
      dr(n, e),
      ai(Ie),
      (d6 = !!Oe),
      (Ie = Oe = null),
      (e.current = n),
      zi(n),
      dl(),
      (q = a),
      (t1 = o),
      (x2.transition = i);
  } else e.current = n;
  if (
    (H5 && ((H5 = !1), (a3 = e), (_6 = l)),
    (i = e.pendingLanes),
    i === 0 && (v3 = null),
    ml(n.stateNode),
    n2(e, g1()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), s(l.value, { componentStack: l.stack, digest: l.digest });
  if (S6) throw ((S6 = !1), (e = n8), (n8 = null), e);
  return (
    _6 & 1 && e.tag !== 0 && h4(),
    (i = e.pendingLanes),
    i & 1 ? (e === r8 ? r5++ : ((r5 = 0), (r8 = e))) : (r5 = 0),
    _3(),
    null
  );
}
function h4() {
  if (a3 !== null) {
    var e = qt(_6),
      t = x2.transition,
      n = t1;
    try {
      if (((x2.transition = null), (t1 = 16 > e ? 16 : e), a3 === null))
        var s = !1;
      else {
        if (((e = a3), (a3 = null), (_6 = 0), q & 6)) throw Error(O(331));
        var l = q;
        for (q |= 4, $ = e.current; $ !== null; ) {
          var i = $,
            o = i.child;
          if ($.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var C = a[u];
                for ($ = C; $ !== null; ) {
                  var f = $;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      t5(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), ($ = d);
                  else
                    for (; $ !== null; ) {
                      f = $;
                      var c = f.sibling,
                        h = f.return;
                      if ((cr(f), f === C)) {
                        $ = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = h), ($ = c);
                        break;
                      }
                      $ = h;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var P = y.sibling;
                    (y.sibling = null), (y = P);
                  } while (y !== null);
                }
              }
              $ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), ($ = o);
          else
            e: for (; $ !== null; ) {
              if (((i = $), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    t5(9, i, i.return);
                }
              var x = i.sibling;
              if (x !== null) {
                (x.return = i.return), ($ = x);
                break e;
              }
              $ = i.return;
            }
        }
        var p = e.current;
        for ($ = p; $ !== null; ) {
          o = $;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), ($ = m);
          else
            e: for (o = p; $ !== null; ) {
              if (((a = $), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      q6(9, a);
                  }
                } catch (S) {
                  v1(a, a.return, S);
                }
              if (a === o) {
                $ = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), ($ = g);
                break e;
              }
              $ = a.return;
            }
        }
        if (
          ((q = l), _3(), z2 && typeof z2.onPostCommitFiberRoot == "function")
        )
          try {
            z2.onPostCommitFiberRoot($6, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (t1 = n), (x2.transition = t);
    }
  }
  return !1;
}
function O0(e, t, n) {
  (t = L4(n, t)),
    (t = Jn(e, t, 1)),
    (e = x3(e, t, 1)),
    (t = b1()),
    e !== null && (L5(e, 1, t), n2(e, t));
}
function v1(e, t, n) {
  if (e.tag === 3) O0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        O0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (v3 === null || !v3.has(s)))
        ) {
          (e = L4(n, e)),
            (e = er(t, e, 1)),
            (t = x3(t, e, 1)),
            (e = b1()),
            t !== null && (L5(t, 1, e), n2(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $i(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = b1()),
    (e.pingedLanes |= e.suspendedLanes & n),
    N1 === e &&
      (I1 & n) === n &&
      (A1 === 4 || (A1 === 3 && (I1 & 130023424) === I1 && 500 > g1() - K8)
        ? z3(e, 0)
        : (q8 |= n)),
    n2(e, t);
}
function yr(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = z5), (z5 <<= 1), !(z5 & 130023424) && (z5 = 4194304))
      : (t = 1));
  var n = b1();
  (e = X2(e, t)), e !== null && (L5(e, t, n), n2(e, n));
}
function Qi(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yr(e, n);
}
function Wi(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var s = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      s = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  s !== null && s.delete(t), yr(e, n);
}
var gr;
gr = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || e2.current) J1 = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (J1 = !1), Ti(e, t, n);
      J1 = !!(e.flags & 131072);
    }
  else (J1 = !1), d1 && t.flags & 1048576 && Mn(t, y6, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      r6(e, t), (e = t.pendingProps);
      var l = g4(t, $1.current);
      p4(t, n), (l = W8(null, t, s, e, l, n));
      var i = b8();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            t2(s) ? ((i = !0), v6(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            U8(t),
            (l.updater = X6),
            (t.stateNode = l),
            (l._reactInternals = t),
            We(t, s, e, n),
            (t = Ye(null, t, s, !0, i, n)))
          : ((t.tag = 0), d1 && i && P8(t), Q1(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (r6(e, t),
          (e = t.pendingProps),
          (l = s._init),
          (s = l(s._payload)),
          (t.type = s),
          (l = t.tag = Hi(s)),
          (e = k2(s, e)),
          l)
        ) {
          case 0:
            t = He(null, t, s, e, n);
            break e;
          case 1:
            t = L0(null, t, s, e, n);
            break e;
          case 11:
            t = k0(null, t, s, e, n);
            break e;
          case 14:
            t = M0(null, t, s, k2(s.type, e), n);
            break e;
        }
        throw Error(O(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : k2(s, l)),
        He(e, t, s, l, n)
      );
    case 1:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : k2(s, l)),
        L0(e, t, s, l, n)
      );
    case 3:
      e: {
        if ((sr(t), e === null)) throw Error(O(387));
        (s = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Sn(e, t),
          k6(t, s, null, n);
        var o = t.memoizedState;
        if (((s = o.element), i.isDehydrated))
          if (
            ((i = {
              element: s,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = L4(Error(O(423)), t)), (t = Z0(e, t, s, n, l));
            break e;
          } else if (s !== l) {
            (l = L4(Error(O(424)), t)), (t = Z0(e, t, s, n, l));
            break e;
          } else
            for (
              i2 = m3(t.stateNode.containerInfo.firstChild),
                o2 = t,
                d1 = !0,
                L2 = null,
                n = Tn(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((w4(), s === l)) {
            t = G2(e, t, n);
            break e;
          }
          Q1(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Pn(t),
        e === null && Be(t),
        (s = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        ze(s, l) ? (o = null) : i !== null && ze(s, i) && (t.flags |= 32),
        rr(e, t),
        Q1(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Be(t), null;
    case 13:
      return lr(e, t, n);
    case 4:
      return (
        V8(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = k4(t, null, s, n)) : Q1(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : k2(s, l)),
        k0(e, t, s, l, n)
      );
    case 7:
      return Q1(e, t, t.pendingProps, n), t.child;
    case 8:
      return Q1(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Q1(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          l1(g6, s._currentValue),
          (s._currentValue = o),
          i !== null)
        )
          if (E2(i.value, o)) {
            if (i.children === l.children && !e2.current) {
              t = G2(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === s) {
                    if (i.tag === 1) {
                      (u = b2(-1, n & -n)), (u.tag = 2);
                      var C = i.updateQueue;
                      if (C !== null) {
                        C = C.shared;
                        var f = C.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (C.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      $e(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(O(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  $e(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Q1(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (s = t.pendingProps.children),
        p4(t, n),
        (l = v2(l)),
        (s = s(l)),
        (t.flags |= 1),
        Q1(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (l = k2(s, t.pendingProps)),
        (l = k2(s.type, l)),
        M0(e, t, s, l, n)
      );
    case 15:
      return tr(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : k2(s, l)),
        r6(e, t),
        (t.tag = 1),
        t2(s) ? ((e = !0), v6(t)) : (e = !1),
        p4(t, n),
        Nn(t, s, l),
        We(t, s, l, n),
        Ye(null, t, s, !0, e, n)
      );
    case 19:
      return ir(e, t, n);
    case 22:
      return nr(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function wr(e, t) {
  return Ht(e, t);
}
function bi(e, t, n, s) {
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
    (this.mode = s),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function m2(e, t, n, s) {
  return new bi(e, t, n, s);
}
function n7(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hi(e) {
  if (typeof e == "function") return n7(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === g8)) return 11;
    if (e === w8) return 14;
  }
  return 2;
}
function y3(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = m2(e.tag, t, e.key, e.mode)),
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
function i6(e, t, n, s, l, i) {
  var o = 2;
  if (((s = e), typeof e == "function")) n7(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case K3:
        return D3(n.children, l, i, t);
      case y8:
        (o = 8), (l |= 8);
        break;
      case he:
        return (
          (e = m2(12, n, t, l | 2)), (e.elementType = he), (e.lanes = i), e
        );
      case me:
        return (e = m2(13, n, t, l)), (e.elementType = me), (e.lanes = i), e;
      case xe:
        return (e = m2(19, n, t, l)), (e.elementType = xe), (e.lanes = i), e;
      case Nt:
        return J6(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case St:
              o = 10;
              break e;
            case _t:
              o = 9;
              break e;
            case g8:
              o = 11;
              break e;
            case w8:
              o = 14;
              break e;
            case n3:
              (o = 16), (s = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = m2(o, n, t, l)), (t.elementType = e), (t.type = s), (t.lanes = i), t
  );
}
function D3(e, t, n, s) {
  return (e = m2(7, e, s, t)), (e.lanes = n), e;
}
function J6(e, t, n, s) {
  return (
    (e = m2(22, e, s, t)),
    (e.elementType = Nt),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function q9(e, t, n) {
  return (e = m2(6, e, null, t)), (e.lanes = n), e;
}
function K9(e, t, n) {
  return (
    (t = m2(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Yi(e, t, n, s, l) {
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
    (this.eventTimes = T9(0)),
    (this.expirationTimes = T9(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = T9(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function r7(e, t, n, s, l, i, o, a, u) {
  return (
    (e = new Yi(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = m2(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    U8(i),
    e
  );
}
function Xi(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: q3,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kr(e) {
  if (!e) return M3;
  e = e._reactInternals;
  e: {
    if (b3(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (t2(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (t2(n)) return wn(e, n, t);
  }
  return t;
}
function Mr(e, t, n, s, l, i, o, a, u) {
  return (
    (e = r7(n, s, !0, e, l, i, o, a, u)),
    (e.context = kr(null)),
    (n = e.current),
    (s = b1()),
    (l = j3(n)),
    (i = b2(s, l)),
    (i.callback = t ?? null),
    x3(n, i, l),
    (e.current.lanes = l),
    L5(e, l, s),
    n2(e, s),
    e
  );
}
function e9(e, t, n, s) {
  var l = t.current,
    i = b1(),
    o = j3(l);
  return (
    (n = kr(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = b2(i, o)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = x3(l, t, o)),
    e !== null && (_2(e, l, o, i), e6(e, l, o)),
    o
  );
}
function E6(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function I0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function s7(e, t) {
  I0(e, t), (e = e.alternate) && I0(e, t);
}
function Gi() {
  return null;
}
var Lr =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function l7(e) {
  this._internalRoot = e;
}
t9.prototype.render = l7.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  e9(e, t, null, null);
};
t9.prototype.unmount = l7.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $3(function () {
      e9(null, e, null, null);
    }),
      (t[Y2] = null);
  }
};
function t9(e) {
  this._internalRoot = e;
}
t9.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = en();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < s3.length && t !== 0 && t < s3[n].priority; n++);
    s3.splice(n, 0, e), n === 0 && nn(e);
  }
};
function i7(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function n9(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function z0() {}
function qi(e, t, n, s, l) {
  if (l) {
    if (typeof s == "function") {
      var i = s;
      s = function () {
        var C = E6(o);
        i.call(C);
      };
    }
    var o = Mr(t, s, e, 0, null, !1, !1, "", z0);
    return (
      (e._reactRootContainer = o),
      (e[Y2] = o.current),
      f5(e.nodeType === 8 ? e.parentNode : e),
      $3(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof s == "function") {
    var a = s;
    s = function () {
      var C = E6(u);
      a.call(C);
    };
  }
  var u = r7(e, 0, !1, null, null, !1, !1, "", z0);
  return (
    (e._reactRootContainer = u),
    (e[Y2] = u.current),
    f5(e.nodeType === 8 ? e.parentNode : e),
    $3(function () {
      e9(t, u, n, s);
    }),
    u
  );
}
function r9(e, t, n, s, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = E6(o);
        a.call(u);
      };
    }
    e9(t, o, e, l);
  } else o = qi(n, t, e, l, s);
  return E6(o);
}
Kt = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = b4(t.pendingLanes);
        n !== 0 &&
          (L8(t, n | 1), n2(t, g1()), !(q & 6) && ((Z4 = g1() + 500), _3()));
      }
      break;
    case 13:
      $3(function () {
        var s = X2(e, 1);
        if (s !== null) {
          var l = b1();
          _2(s, e, 1, l);
        }
      }),
        s7(e, 1);
  }
};
Z8 = function (e) {
  if (e.tag === 13) {
    var t = X2(e, 134217728);
    if (t !== null) {
      var n = b1();
      _2(t, e, 134217728, n);
    }
    s7(e, 134217728);
  }
};
Jt = function (e) {
  if (e.tag === 13) {
    var t = j3(e),
      n = X2(e, t);
    if (n !== null) {
      var s = b1();
      _2(n, e, t, s);
    }
    s7(e, t);
  }
};
en = function () {
  return t1;
};
tn = function (e, t) {
  var n = t1;
  try {
    return (t1 = e), t();
  } finally {
    t1 = n;
  }
};
Ae = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ye(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var s = n[t];
          if (s !== e && s.form === e.form) {
            var l = H6(s);
            if (!l) throw Error(O(90));
            Tt(s), ye(s, l);
          }
        }
      }
      break;
    case "textarea":
      Rt(e, n);
      break;
    case "select":
      (t = n.value), t != null && c4(e, !!n.multiple, t, !1);
  }
};
Vt = J8;
Bt = $3;
var Ki = { usingClientEntryPoint: !1, Events: [A5, n4, H6, Ft, Ut, J8] },
  B4 = {
    findFiberByHostInstance: P3,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ji = {
    bundleType: B4.bundleType,
    version: B4.version,
    rendererPackageName: B4.rendererPackageName,
    rendererConfig: B4.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: K2.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wt(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: B4.findFiberByHostInstance || Gi,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Y5 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Y5.isDisabled && Y5.supportsFiber)
    try {
      ($6 = Y5.inject(Ji)), (z2 = Y5);
    } catch {}
}
c2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ki;
c2.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!i7(t)) throw Error(O(200));
  return Xi(e, t, null, n);
};
c2.createRoot = function (e, t) {
  if (!i7(e)) throw Error(O(299));
  var n = !1,
    s = "",
    l = Lr;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = r7(e, 1, !1, null, null, n, !1, s, l)),
    (e[Y2] = t.current),
    f5(e.nodeType === 8 ? e.parentNode : e),
    new l7(t)
  );
};
c2.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Wt(t)), (e = e === null ? null : e.stateNode), e;
};
c2.flushSync = function (e) {
  return $3(e);
};
c2.hydrate = function (e, t, n) {
  if (!n9(t)) throw Error(O(200));
  return r9(null, e, t, !0, n);
};
c2.hydrateRoot = function (e, t, n) {
  if (!i7(e)) throw Error(O(405));
  var s = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Lr;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Mr(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Y2] = t.current),
    f5(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new t9(t);
};
c2.render = function (e, t, n) {
  if (!n9(t)) throw Error(O(200));
  return r9(null, e, t, !1, n);
};
c2.unmountComponentAtNode = function (e) {
  if (!n9(e)) throw Error(O(40));
  return e._reactRootContainer
    ? ($3(function () {
        r9(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Y2] = null);
        });
      }),
      !0)
    : !1;
};
c2.unstable_batchedUpdates = J8;
c2.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!n9(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return r9(e, t, n, !1, s);
};
c2.version = "18.2.0-next-9e3b772b8-20220608";
function Zr() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zr);
    } catch (e) {
      console.error(e);
    }
}
Zr(), (kt.exports = c2);
var Ar = kt.exports,
  D0 = Ar;
(de.createRoot = D0.createRoot), (de.hydrateRoot = D0.hydrateRoot);
var Sr = { exports: {} },
  _r = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var A4 = L;
function eo(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var to = typeof Object.is == "function" ? Object.is : eo,
  no = A4.useState,
  ro = A4.useEffect,
  so = A4.useLayoutEffect,
  lo = A4.useDebugValue;
function io(e, t) {
  var n = t(),
    s = no({ inst: { value: n, getSnapshot: t } }),
    l = s[0].inst,
    i = s[1];
  return (
    so(
      function () {
        (l.value = n), (l.getSnapshot = t), J9(l) && i({ inst: l });
      },
      [e, n, t]
    ),
    ro(
      function () {
        return (
          J9(l) && i({ inst: l }),
          e(function () {
            J9(l) && i({ inst: l });
          })
        );
      },
      [e]
    ),
    lo(n),
    n
  );
}
function J9(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !to(e, n);
  } catch {
    return !0;
  }
}
function oo(e, t) {
  return t();
}
var ao =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? oo
    : io;
_r.useSyncExternalStore =
  A4.useSyncExternalStore !== void 0 ? A4.useSyncExternalStore : ao;
Sr.exports = _r;
var uo = Sr.exports,
  Nr = { exports: {} },
  Er = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s9 = L,
  co = uo;
function Co(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fo = typeof Object.is == "function" ? Object.is : Co,
  po = co.useSyncExternalStore,
  ho = s9.useRef,
  mo = s9.useEffect,
  xo = s9.useMemo,
  vo = s9.useDebugValue;
Er.useSyncExternalStoreWithSelector = function (e, t, n, s, l) {
  var i = ho(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = xo(
    function () {
      function u(h) {
        if (!C) {
          if (((C = !0), (f = h), (h = s(h)), l !== void 0 && o.hasValue)) {
            var v = o.value;
            if (l(v, h)) return (d = v);
          }
          return (d = h);
        }
        if (((v = d), fo(f, h))) return v;
        var y = s(h);
        return l !== void 0 && l(v, y) ? v : ((f = h), (d = y));
      }
      var C = !1,
        f,
        d,
        c = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        c === null
          ? void 0
          : function () {
              return u(c());
            },
      ];
    },
    [t, n, s, l]
  );
  var a = po(e, i[0], i[1]);
  return (
    mo(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    vo(a),
    a
  );
};
Nr.exports = Er;
var jo = Nr.exports;
function yo(e) {
  e();
}
let Tr = yo;
const go = (e) => (Tr = e),
  wo = () => Tr,
  F0 = Symbol.for("react-redux-context"),
  U0 = typeof globalThis < "u" ? globalThis : {};
function ko() {
  var e;
  if (!L.createContext) return {};
  const t = (e = U0[F0]) != null ? e : (U0[F0] = new Map());
  let n = t.get(L.createContext);
  return n || ((n = L.createContext(null)), t.set(L.createContext, n)), n;
}
const L3 = ko();
function o7(e = L3) {
  return function () {
    return L.useContext(e);
  };
}
const Pr = o7(),
  Mo = () => {
    throw new Error("uSES not initialized!");
  };
let Rr = Mo;
const Lo = (e) => {
    Rr = e;
  },
  Zo = (e, t) => e === t;
function Ao(e = L3) {
  const t = e === L3 ? Pr : o7(e);
  return function (s, l = {}) {
    const {
        equalityFn: i = Zo,
        stabilityCheck: o = void 0,
        noopCheck: a = void 0,
      } = typeof l == "function" ? { equalityFn: l } : l,
      {
        store: u,
        subscription: C,
        getServerState: f,
        stabilityCheck: d,
        noopCheck: c,
      } = t();
    L.useRef(!0);
    const h = L.useCallback(
        {
          [s.name](y) {
            return s(y);
          },
        }[s.name],
        [s, d, o]
      ),
      v = Rr(C.addNestedSub, u.getState, f || u.getState, h, i);
    return L.useDebugValue(v), v;
  };
}
const So = Ao();
var Or = { exports: {} },
  n1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var E1 = typeof Symbol == "function" && Symbol.for,
  a7 = E1 ? Symbol.for("react.element") : 60103,
  u7 = E1 ? Symbol.for("react.portal") : 60106,
  l9 = E1 ? Symbol.for("react.fragment") : 60107,
  i9 = E1 ? Symbol.for("react.strict_mode") : 60108,
  o9 = E1 ? Symbol.for("react.profiler") : 60114,
  a9 = E1 ? Symbol.for("react.provider") : 60109,
  u9 = E1 ? Symbol.for("react.context") : 60110,
  c7 = E1 ? Symbol.for("react.async_mode") : 60111,
  c9 = E1 ? Symbol.for("react.concurrent_mode") : 60111,
  C9 = E1 ? Symbol.for("react.forward_ref") : 60112,
  f9 = E1 ? Symbol.for("react.suspense") : 60113,
  _o = E1 ? Symbol.for("react.suspense_list") : 60120,
  d9 = E1 ? Symbol.for("react.memo") : 60115,
  p9 = E1 ? Symbol.for("react.lazy") : 60116,
  No = E1 ? Symbol.for("react.block") : 60121,
  Eo = E1 ? Symbol.for("react.fundamental") : 60117,
  To = E1 ? Symbol.for("react.responder") : 60118,
  Po = E1 ? Symbol.for("react.scope") : 60119;
function f2(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case a7:
        switch (((e = e.type), e)) {
          case c7:
          case c9:
          case l9:
          case o9:
          case i9:
          case f9:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case u9:
              case C9:
              case p9:
              case d9:
              case a9:
                return e;
              default:
                return t;
            }
        }
      case u7:
        return t;
    }
  }
}
function Ir(e) {
  return f2(e) === c9;
}
n1.AsyncMode = c7;
n1.ConcurrentMode = c9;
n1.ContextConsumer = u9;
n1.ContextProvider = a9;
n1.Element = a7;
n1.ForwardRef = C9;
n1.Fragment = l9;
n1.Lazy = p9;
n1.Memo = d9;
n1.Portal = u7;
n1.Profiler = o9;
n1.StrictMode = i9;
n1.Suspense = f9;
n1.isAsyncMode = function (e) {
  return Ir(e) || f2(e) === c7;
};
n1.isConcurrentMode = Ir;
n1.isContextConsumer = function (e) {
  return f2(e) === u9;
};
n1.isContextProvider = function (e) {
  return f2(e) === a9;
};
n1.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === a7;
};
n1.isForwardRef = function (e) {
  return f2(e) === C9;
};
n1.isFragment = function (e) {
  return f2(e) === l9;
};
n1.isLazy = function (e) {
  return f2(e) === p9;
};
n1.isMemo = function (e) {
  return f2(e) === d9;
};
n1.isPortal = function (e) {
  return f2(e) === u7;
};
n1.isProfiler = function (e) {
  return f2(e) === o9;
};
n1.isStrictMode = function (e) {
  return f2(e) === i9;
};
n1.isSuspense = function (e) {
  return f2(e) === f9;
};
n1.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === l9 ||
    e === c9 ||
    e === o9 ||
    e === i9 ||
    e === f9 ||
    e === _o ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === p9 ||
        e.$$typeof === d9 ||
        e.$$typeof === a9 ||
        e.$$typeof === u9 ||
        e.$$typeof === C9 ||
        e.$$typeof === Eo ||
        e.$$typeof === To ||
        e.$$typeof === Po ||
        e.$$typeof === No))
  );
};
n1.typeOf = f2;
Or.exports = n1;
var Ro = Or.exports,
  zr = Ro,
  Oo = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Io = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Dr = {};
Dr[zr.ForwardRef] = Oo;
Dr[zr.Memo] = Io;
var s1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var C7 = Symbol.for("react.element"),
  f7 = Symbol.for("react.portal"),
  h9 = Symbol.for("react.fragment"),
  m9 = Symbol.for("react.strict_mode"),
  x9 = Symbol.for("react.profiler"),
  v9 = Symbol.for("react.provider"),
  j9 = Symbol.for("react.context"),
  zo = Symbol.for("react.server_context"),
  y9 = Symbol.for("react.forward_ref"),
  g9 = Symbol.for("react.suspense"),
  w9 = Symbol.for("react.suspense_list"),
  k9 = Symbol.for("react.memo"),
  M9 = Symbol.for("react.lazy"),
  Do = Symbol.for("react.offscreen"),
  Fr;
Fr = Symbol.for("react.module.reference");
function y2(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case C7:
        switch (((e = e.type), e)) {
          case h9:
          case x9:
          case m9:
          case g9:
          case w9:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case zo:
              case j9:
              case y9:
              case M9:
              case k9:
              case v9:
                return e;
              default:
                return t;
            }
        }
      case f7:
        return t;
    }
  }
}
s1.ContextConsumer = j9;
s1.ContextProvider = v9;
s1.Element = C7;
s1.ForwardRef = y9;
s1.Fragment = h9;
s1.Lazy = M9;
s1.Memo = k9;
s1.Portal = f7;
s1.Profiler = x9;
s1.StrictMode = m9;
s1.Suspense = g9;
s1.SuspenseList = w9;
s1.isAsyncMode = function () {
  return !1;
};
s1.isConcurrentMode = function () {
  return !1;
};
s1.isContextConsumer = function (e) {
  return y2(e) === j9;
};
s1.isContextProvider = function (e) {
  return y2(e) === v9;
};
s1.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === C7;
};
s1.isForwardRef = function (e) {
  return y2(e) === y9;
};
s1.isFragment = function (e) {
  return y2(e) === h9;
};
s1.isLazy = function (e) {
  return y2(e) === M9;
};
s1.isMemo = function (e) {
  return y2(e) === k9;
};
s1.isPortal = function (e) {
  return y2(e) === f7;
};
s1.isProfiler = function (e) {
  return y2(e) === x9;
};
s1.isStrictMode = function (e) {
  return y2(e) === m9;
};
s1.isSuspense = function (e) {
  return y2(e) === g9;
};
s1.isSuspenseList = function (e) {
  return y2(e) === w9;
};
s1.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === h9 ||
    e === x9 ||
    e === m9 ||
    e === g9 ||
    e === w9 ||
    e === Do ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === M9 ||
        e.$$typeof === k9 ||
        e.$$typeof === v9 ||
        e.$$typeof === j9 ||
        e.$$typeof === y9 ||
        e.$$typeof === Fr ||
        e.getModuleId !== void 0))
  );
};
s1.typeOf = y2;
function Fo() {
  const e = wo();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let s = t;
        for (; s; ) s.callback(), (s = s.next);
      });
    },
    get() {
      let s = [],
        l = t;
      for (; l; ) s.push(l), (l = l.next);
      return s;
    },
    subscribe(s) {
      let l = !0,
        i = (n = { callback: s, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const V0 = { notify() {}, get: () => [] };
function Uo(e, t) {
  let n,
    s = V0;
  function l(d) {
    return u(), s.subscribe(d);
  }
  function i() {
    s.notify();
  }
  function o() {
    f.onStateChange && f.onStateChange();
  }
  function a() {
    return !!n;
  }
  function u() {
    n || ((n = t ? t.addNestedSub(o) : e.subscribe(o)), (s = Fo()));
  }
  function C() {
    n && (n(), (n = void 0), s.clear(), (s = V0));
  }
  const f = {
    addNestedSub: l,
    notifyNestedSubs: i,
    handleChangeWrapper: o,
    isSubscribed: a,
    trySubscribe: u,
    tryUnsubscribe: C,
    getListeners: () => s,
  };
  return f;
}
const Vo =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Bo = Vo ? L.useLayoutEffect : L.useEffect;
function $o({
  store: e,
  context: t,
  children: n,
  serverState: s,
  stabilityCheck: l = "once",
  noopCheck: i = "once",
}) {
  const o = L.useMemo(() => {
      const C = Uo(e);
      return {
        store: e,
        subscription: C,
        getServerState: s ? () => s : void 0,
        stabilityCheck: l,
        noopCheck: i,
      };
    }, [e, s, l, i]),
    a = L.useMemo(() => e.getState(), [e]);
  Bo(() => {
    const { subscription: C } = o;
    return (
      (C.onStateChange = C.notifyNestedSubs),
      C.trySubscribe(),
      a !== e.getState() && C.notifyNestedSubs(),
      () => {
        C.tryUnsubscribe(), (C.onStateChange = void 0);
      }
    );
  }, [o, a]);
  const u = t || L3;
  return L.createElement(u.Provider, { value: o }, n);
}
function Ur(e = L3) {
  const t = e === L3 ? Pr : o7(e);
  return function () {
    const { store: s } = t();
    return s;
  };
}
const Qo = Ur();
function Wo(e = L3) {
  const t = e === L3 ? Qo : Ur(e);
  return function () {
    return t().dispatch;
  };
}
const bo = Wo();
Lo(jo.useSyncExternalStoreWithSelector);
go(Ar.unstable_batchedUpdates);
const Vr = "" + new URL("logo-2083e589.svg", import.meta.url).href,
  Ho = "" + new URL("orientation-232b6c72.svg", import.meta.url).href;
function Yo() {
  const [e, t] = L.useState(!1),
    n = () => {
      t(!0);
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: "orientation " + (e ? "active" : "no-active"),
      children: [
        r.jsx("div", {
          className: "orientation__logo",
          children: r.jsx("img", {
            src: Vr,
            alt: "logo",
            className: "main__logo-img",
          }),
        }),
        r.jsxs("div", {
          className: "orientation__vertical",
          children: [
            r.jsx("img", {
              src: Ho,
              alt: "orientation",
              className: "orientation__img",
            }),
            r.jsxs("h2", {
              className: "orientation__title",
              children: [
                "Поверни телефон, чтобы ",
                e ? "продолжить" : "начать",
                " игру",
              ],
            }),
          ],
        }),
        r.jsx("button", {
          className: "main__btn btn",
          onClick: n,
          children: "НАЧАТЬ",
        }),
      ],
    }),
  });
}
function Z2(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), s = 1;
    s < t;
    s++
  )
    n[s - 1] = arguments[s];
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
function Z3(e) {
  return !!e && !!e[f1];
}
function q2(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var s = Object.getPrototypeOf(n);
      if (s === null) return !0;
      var l = Object.hasOwnProperty.call(s, "constructor") && s.constructor;
      return (
        l === Object ||
        (typeof l == "function" && Function.toString.call(l) === ra)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Y0] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Y0]) ||
      d7(e) ||
      p7(e))
  );
}
function Q3(e, t, n) {
  n === void 0 && (n = !1),
    T4(e) === 0
      ? (n ? Object.keys : x4)(e).forEach(function (s) {
          (n && typeof s == "symbol") || t(s, e[s], e);
        })
      : e.forEach(function (s, l) {
          return t(l, s, e);
        });
}
function T4(e) {
  var t = e[f1];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : d7(e)
    ? 2
    : p7(e)
    ? 3
    : 0;
}
function m4(e, t) {
  return T4(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Xo(e, t) {
  return T4(e) === 2 ? e.get(t) : e[t];
}
function Br(e, t, n) {
  var s = T4(e);
  s === 2 ? e.set(t, n) : s === 3 ? e.add(n) : (e[t] = n);
}
function $r(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function d7(e) {
  return ta && e instanceof Map;
}
function p7(e) {
  return na && e instanceof Set;
}
function T3(e) {
  return e.o || e.t;
}
function h7(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Wr(e);
  delete t[f1];
  for (var n = x4(t), s = 0; s < n.length; s++) {
    var l = n[s],
      i = t[l];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[l] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[l],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function m7(e, t) {
  return (
    t === void 0 && (t = !1),
    x7(e) ||
      Z3(e) ||
      !q2(e) ||
      (T4(e) > 1 && (e.set = e.add = e.clear = e.delete = Go),
      Object.freeze(e),
      t &&
        Q3(
          e,
          function (n, s) {
            return m7(s, !0);
          },
          !0
        )),
    e
  );
}
function Go() {
  Z2(2);
}
function x7(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function F2(e) {
  var t = u8[e];
  return t || Z2(18, e), t;
}
function qo(e, t) {
  u8[e] || (u8[e] = t);
}
function i8() {
  return g5;
}
function ee(e, t) {
  t && (F2("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function T6(e) {
  o8(e), e.p.forEach(Ko), (e.p = null);
}
function o8(e) {
  e === g5 && (g5 = e.l);
}
function B0(e) {
  return (g5 = { p: [], l: g5, h: e, m: !0, _: 0 });
}
function Ko(e) {
  var t = e[f1];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function te(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    s = e !== void 0 && e !== n;
  return (
    t.h.O || F2("ES5").S(t, e, s),
    s
      ? (n[f1].P && (T6(t), Z2(4)),
        q2(e) && ((e = P6(t, e)), t.l || R6(t, e)),
        t.u && F2("Patches").M(n[f1].t, e, t.u, t.s))
      : (e = P6(t, n, [])),
    T6(t),
    t.u && t.v(t.u, t.s),
    e !== Qr ? e : void 0
  );
}
function P6(e, t, n) {
  if (x7(t)) return t;
  var s = t[f1];
  if (!s)
    return (
      Q3(
        t,
        function (a, u) {
          return $0(e, s, t, a, u, n);
        },
        !0
      ),
      t
    );
  if (s.A !== e) return t;
  if (!s.P) return R6(e, s.t, !0), s.t;
  if (!s.I) {
    (s.I = !0), s.A._--;
    var l = s.i === 4 || s.i === 5 ? (s.o = h7(s.k)) : s.o,
      i = l,
      o = !1;
    s.i === 3 && ((i = new Set(l)), l.clear(), (o = !0)),
      Q3(i, function (a, u) {
        return $0(e, s, l, a, u, n, o);
      }),
      R6(e, l, !1),
      n && e.u && F2("Patches").N(s, n, e.u, e.s);
  }
  return s.o;
}
function $0(e, t, n, s, l, i, o) {
  if (Z3(l)) {
    var a = P6(e, l, i && t && t.i !== 3 && !m4(t.R, s) ? i.concat(s) : void 0);
    if ((Br(n, s, a), !Z3(a))) return;
    e.m = !1;
  } else o && n.add(l);
  if (q2(l) && !x7(l)) {
    if (!e.h.D && e._ < 1) return;
    P6(e, l), (t && t.A.l) || R6(e, l);
  }
}
function R6(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && m7(t, n);
}
function ne(e, t) {
  var n = e[f1];
  return (n ? T3(n) : e)[t];
}
function Q0(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var s = Object.getOwnPropertyDescriptor(n, t);
      if (s) return s;
      n = Object.getPrototypeOf(n);
    }
}
function i3(e) {
  e.P || ((e.P = !0), e.l && i3(e.l));
}
function re(e) {
  e.o || (e.o = h7(e.t));
}
function a8(e, t, n) {
  var s = d7(t)
    ? F2("MapSet").F(t, n)
    : p7(t)
    ? F2("MapSet").T(t, n)
    : e.O
    ? (function (l, i) {
        var o = Array.isArray(l),
          a = {
            i: o ? 1 : 0,
            A: i ? i.A : i8(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: l,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          u = a,
          C = w5;
        o && ((u = [a]), (C = Y4));
        var f = Proxy.revocable(u, C),
          d = f.revoke,
          c = f.proxy;
        return (a.k = c), (a.j = d), c;
      })(t, n)
    : F2("ES5").J(t, n);
  return (n ? n.A : i8()).p.push(s), s;
}
function Jo(e) {
  return (
    Z3(e) || Z2(22, e),
    (function t(n) {
      if (!q2(n)) return n;
      var s,
        l = n[f1],
        i = T4(n);
      if (l) {
        if (!l.P && (l.i < 4 || !F2("ES5").K(l))) return l.t;
        (l.I = !0), (s = W0(n, i)), (l.I = !1);
      } else s = W0(n, i);
      return (
        Q3(s, function (o, a) {
          (l && Xo(l.t, o) === a) || Br(s, o, t(a));
        }),
        i === 3 ? new Set(s) : s
      );
    })(e)
  );
}
function W0(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return h7(e);
}
function ea() {
  function e(i, o) {
    var a = l[i];
    return (
      a
        ? (a.enumerable = o)
        : (l[i] = a =
            {
              configurable: !0,
              enumerable: o,
              get: function () {
                var u = this[f1];
                return w5.get(u, i);
              },
              set: function (u) {
                var C = this[f1];
                w5.set(C, i, u);
              },
            }),
      a
    );
  }
  function t(i) {
    for (var o = i.length - 1; o >= 0; o--) {
      var a = i[o][f1];
      if (!a.P)
        switch (a.i) {
          case 5:
            s(a) && i3(a);
            break;
          case 4:
            n(a) && i3(a);
        }
    }
  }
  function n(i) {
    for (var o = i.t, a = i.k, u = x4(a), C = u.length - 1; C >= 0; C--) {
      var f = u[C];
      if (f !== f1) {
        var d = o[f];
        if (d === void 0 && !m4(o, f)) return !0;
        var c = a[f],
          h = c && c[f1];
        if (h ? h.t !== d : !$r(c, d)) return !0;
      }
    }
    var v = !!o[f1];
    return u.length !== x4(o).length + (v ? 0 : 1);
  }
  function s(i) {
    var o = i.k;
    if (o.length !== i.t.length) return !0;
    var a = Object.getOwnPropertyDescriptor(o, o.length - 1);
    if (a && !a.get) return !0;
    for (var u = 0; u < o.length; u++) if (!o.hasOwnProperty(u)) return !0;
    return !1;
  }
  var l = {};
  qo("ES5", {
    J: function (i, o) {
      var a = Array.isArray(i),
        u = (function (f, d) {
          if (f) {
            for (var c = Array(d.length), h = 0; h < d.length; h++)
              Object.defineProperty(c, "" + h, e(h, !0));
            return c;
          }
          var v = Wr(d);
          delete v[f1];
          for (var y = x4(v), P = 0; P < y.length; P++) {
            var x = y[P];
            v[x] = e(x, f || !!v[x].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), v);
        })(a, i),
        C = {
          i: a ? 5 : 4,
          A: o ? o.A : i8(),
          P: !1,
          I: !1,
          R: {},
          l: o,
          t: i,
          k: u,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(u, f1, { value: C, writable: !0 }), u;
    },
    S: function (i, o, a) {
      a
        ? Z3(o) && o[f1].A === i && t(i.p)
        : (i.u &&
            (function u(C) {
              if (C && typeof C == "object") {
                var f = C[f1];
                if (f) {
                  var d = f.t,
                    c = f.k,
                    h = f.R,
                    v = f.i;
                  if (v === 4)
                    Q3(c, function (m) {
                      m !== f1 &&
                        (d[m] !== void 0 || m4(d, m)
                          ? h[m] || u(c[m])
                          : ((h[m] = !0), i3(f)));
                    }),
                      Q3(d, function (m) {
                        c[m] !== void 0 || m4(c, m) || ((h[m] = !1), i3(f));
                      });
                  else if (v === 5) {
                    if ((s(f) && (i3(f), (h.length = !0)), c.length < d.length))
                      for (var y = c.length; y < d.length; y++) h[y] = !1;
                    else for (var P = d.length; P < c.length; P++) h[P] = !0;
                    for (
                      var x = Math.min(c.length, d.length), p = 0;
                      p < x;
                      p++
                    )
                      c.hasOwnProperty(p) || (h[p] = !0),
                        h[p] === void 0 && u(c[p]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : s(i);
    },
  });
}
var b0,
  g5,
  v7 = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  ta = typeof Map < "u",
  na = typeof Set < "u",
  H0 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Qr = v7
    ? Symbol.for("immer-nothing")
    : (((b0 = {})["immer-nothing"] = !0), b0),
  Y0 = v7 ? Symbol.for("immer-draftable") : "__$immer_draftable",
  f1 = v7 ? Symbol.for("immer-state") : "__$immer_state",
  ra = "" + Object.prototype.constructor,
  x4 =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Wr =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        x4(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  u8 = {},
  w5 = {
    get: function (e, t) {
      if (t === f1) return e;
      var n = T3(e);
      if (!m4(n, t))
        return (function (l, i, o) {
          var a,
            u = Q0(i, o);
          return u
            ? "value" in u
              ? u.value
              : (a = u.get) === null || a === void 0
              ? void 0
              : a.call(l.k)
            : void 0;
        })(e, n, t);
      var s = n[t];
      return e.I || !q2(s)
        ? s
        : s === ne(e.t, t)
        ? (re(e), (e.o[t] = a8(e.A.h, s, e)))
        : s;
    },
    has: function (e, t) {
      return t in T3(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(T3(e));
    },
    set: function (e, t, n) {
      var s = Q0(T3(e), t);
      if (s != null && s.set) return s.set.call(e.k, n), !0;
      if (!e.P) {
        var l = ne(T3(e), t),
          i = l == null ? void 0 : l[f1];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if ($r(n, l) && (n !== void 0 || m4(e.t, t))) return !0;
        re(e), i3(e);
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
        ne(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), re(e), i3(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = T3(e),
        s = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        s && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: s.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Z2(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Z2(12);
    },
  },
  Y4 = {};
Q3(w5, function (e, t) {
  Y4[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Y4.deleteProperty = function (e, t) {
    return Y4.set.call(this, e, t, void 0);
  }),
  (Y4.set = function (e, t, n) {
    return w5.set.call(this, e[0], t, n, e[0]);
  });
var sa = (function () {
    function e(n) {
      var s = this;
      (this.O = H0),
        (this.D = !0),
        (this.produce = function (l, i, o) {
          if (typeof l == "function" && typeof i != "function") {
            var a = i;
            i = l;
            var u = s;
            return function (y) {
              var P = this;
              y === void 0 && (y = a);
              for (
                var x = arguments.length, p = Array(x > 1 ? x - 1 : 0), m = 1;
                m < x;
                m++
              )
                p[m - 1] = arguments[m];
              return u.produce(y, function (g) {
                var S;
                return (S = i).call.apply(S, [P, g].concat(p));
              });
            };
          }
          var C;
          if (
            (typeof i != "function" && Z2(6),
            o !== void 0 && typeof o != "function" && Z2(7),
            q2(l))
          ) {
            var f = B0(s),
              d = a8(s, l, void 0),
              c = !0;
            try {
              (C = i(d)), (c = !1);
            } finally {
              c ? T6(f) : o8(f);
            }
            return typeof Promise < "u" && C instanceof Promise
              ? C.then(
                  function (y) {
                    return ee(f, o), te(y, f);
                  },
                  function (y) {
                    throw (T6(f), y);
                  }
                )
              : (ee(f, o), te(C, f));
          }
          if (!l || typeof l != "object") {
            if (
              ((C = i(l)) === void 0 && (C = l),
              C === Qr && (C = void 0),
              s.D && m7(C, !0),
              o)
            ) {
              var h = [],
                v = [];
              F2("Patches").M(l, C, h, v), o(h, v);
            }
            return C;
          }
          Z2(21, l);
        }),
        (this.produceWithPatches = function (l, i) {
          if (typeof l == "function")
            return function (C) {
              for (
                var f = arguments.length, d = Array(f > 1 ? f - 1 : 0), c = 1;
                c < f;
                c++
              )
                d[c - 1] = arguments[c];
              return s.produceWithPatches(C, function (h) {
                return l.apply(void 0, [h].concat(d));
              });
            };
          var o,
            a,
            u = s.produce(l, i, function (C, f) {
              (o = C), (a = f);
            });
          return typeof Promise < "u" && u instanceof Promise
            ? u.then(function (C) {
                return [C, o, a];
              })
            : [u, o, a];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        q2(n) || Z2(8), Z3(n) && (n = Jo(n));
        var s = B0(this),
          l = a8(this, n, void 0);
        return (l[f1].C = !0), o8(s), l;
      }),
      (t.finishDraft = function (n, s) {
        var l = n && n[f1],
          i = l.A;
        return ee(i, s), te(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !H0 && Z2(20), (this.O = n);
      }),
      (t.applyPatches = function (n, s) {
        var l;
        for (l = s.length - 1; l >= 0; l--) {
          var i = s[l];
          if (i.path.length === 0 && i.op === "replace") {
            n = i.value;
            break;
          }
        }
        l > -1 && (s = s.slice(l + 1));
        var o = F2("Patches").$;
        return Z3(n)
          ? o(n, s)
          : this.produce(n, function (a) {
              return o(a, s);
            });
      }),
      e
    );
  })(),
  u2 = new sa(),
  br = u2.produce;
u2.produceWithPatches.bind(u2);
u2.setAutoFreeze.bind(u2);
u2.setUseProxies.bind(u2);
u2.applyPatches.bind(u2);
u2.createDraft.bind(u2);
u2.finishDraft.bind(u2);
function k5(e) {
  "@babel/helpers - typeof";
  return (
    (k5 =
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
    k5(e)
  );
}
function la(e, t) {
  if (k5(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(e, t || "default");
    if (k5(s) !== "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ia(e) {
  var t = la(e, "string");
  return k5(t) === "symbol" ? t : String(t);
}
function oa(e, t, n) {
  return (
    (t = ia(t)),
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
function X0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t &&
      (s = s.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, s);
  }
  return n;
}
function G0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? X0(Object(n), !0).forEach(function (s) {
          oa(e, s, n[s]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : X0(Object(n)).forEach(function (s) {
          Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(n, s));
        });
  }
  return e;
}
function U1(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var q0 = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  se = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  O6 = {
    INIT: "@@redux/INIT" + se(),
    REPLACE: "@@redux/REPLACE" + se(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + se();
    },
  };
function aa(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Hr(e, t, n) {
  var s;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(U1(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(U1(1));
    return n(Hr)(e, t);
  }
  if (typeof e != "function") throw new Error(U1(2));
  var l = e,
    i = t,
    o = [],
    a = o,
    u = !1;
  function C() {
    a === o && (a = o.slice());
  }
  function f() {
    if (u) throw new Error(U1(3));
    return i;
  }
  function d(y) {
    if (typeof y != "function") throw new Error(U1(4));
    if (u) throw new Error(U1(5));
    var P = !0;
    return (
      C(),
      a.push(y),
      function () {
        if (P) {
          if (u) throw new Error(U1(6));
          (P = !1), C();
          var p = a.indexOf(y);
          a.splice(p, 1), (o = null);
        }
      }
    );
  }
  function c(y) {
    if (!aa(y)) throw new Error(U1(7));
    if (typeof y.type > "u") throw new Error(U1(8));
    if (u) throw new Error(U1(9));
    try {
      (u = !0), (i = l(i, y));
    } finally {
      u = !1;
    }
    for (var P = (o = a), x = 0; x < P.length; x++) {
      var p = P[x];
      p();
    }
    return y;
  }
  function h(y) {
    if (typeof y != "function") throw new Error(U1(10));
    (l = y), c({ type: O6.REPLACE });
  }
  function v() {
    var y,
      P = d;
    return (
      (y = {
        subscribe: function (p) {
          if (typeof p != "object" || p === null) throw new Error(U1(11));
          function m() {
            p.next && p.next(f());
          }
          m();
          var g = P(m);
          return { unsubscribe: g };
        },
      }),
      (y[q0] = function () {
        return this;
      }),
      y
    );
  }
  return (
    c({ type: O6.INIT }),
    (s = { dispatch: c, subscribe: d, getState: f, replaceReducer: h }),
    (s[q0] = v),
    s
  );
}
function ua(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      s = n(void 0, { type: O6.INIT });
    if (typeof s > "u") throw new Error(U1(12));
    if (typeof n(void 0, { type: O6.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(U1(13));
  });
}
function Yr(e) {
  for (var t = Object.keys(e), n = {}, s = 0; s < t.length; s++) {
    var l = t[s];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var i = Object.keys(n),
    o;
  try {
    ua(n);
  } catch (a) {
    o = a;
  }
  return function (u, C) {
    if ((u === void 0 && (u = {}), o)) throw o;
    for (var f = !1, d = {}, c = 0; c < i.length; c++) {
      var h = i[c],
        v = n[h],
        y = u[h],
        P = v(y, C);
      if (typeof P > "u") throw (C && C.type, new Error(U1(14)));
      (d[h] = P), (f = f || P !== y);
    }
    return (f = f || i.length !== Object.keys(u).length), f ? d : u;
  };
}
function I6() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (s) {
        return s;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (s, l) {
        return function () {
          return s(l.apply(void 0, arguments));
        };
      });
}
function ca() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (s) {
    return function () {
      var l = s.apply(void 0, arguments),
        i = function () {
          throw new Error(U1(15));
        },
        o = {
          getState: l.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        a = t.map(function (u) {
          return u(o);
        });
      return (
        (i = I6.apply(void 0, a)(l.dispatch)),
        G0(G0({}, l), {}, { dispatch: i })
      );
    };
  };
}
function Xr(e) {
  var t = function (s) {
    var l = s.dispatch,
      i = s.getState;
    return function (o) {
      return function (a) {
        return typeof a == "function" ? a(l, i, e) : o(a);
      };
    };
  };
  return t;
}
var Gr = Xr();
Gr.withExtraArgument = Xr;
const K0 = Gr;
var qr =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (s, l) {
                s.__proto__ = l;
              }) ||
            function (s, l) {
              for (var i in l)
                Object.prototype.hasOwnProperty.call(l, i) && (s[i] = l[i]);
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
        function s() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((s.prototype = n.prototype), new s());
      };
    })(),
  Ca =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        s,
        l,
        i,
        o;
      return (
        (o = { next: a(0), throw: a(1), return: a(2) }),
        typeof Symbol == "function" &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function a(C) {
        return function (f) {
          return u([C, f]);
        };
      }
      function u(C) {
        if (s) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((s = 1),
              l &&
                (i =
                  C[0] & 2
                    ? l.return
                    : C[0]
                    ? l.throw || ((i = l.return) && i.call(l), 0)
                    : l.next) &&
                !(i = i.call(l, C[1])).done)
            )
              return i;
            switch (((l = 0), i && (C = [C[0] & 2, i.value]), C[0])) {
              case 0:
              case 1:
                i = C;
                break;
              case 4:
                return n.label++, { value: C[1], done: !1 };
              case 5:
                n.label++, (l = C[1]), (C = [0]);
                continue;
              case 7:
                (C = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (C[0] === 6 || C[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (C[0] === 3 && (!i || (C[1] > i[0] && C[1] < i[3]))) {
                  n.label = C[1];
                  break;
                }
                if (C[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = C);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(C);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            C = t.call(e, n);
          } catch (f) {
            (C = [6, f]), (l = 0);
          } finally {
            s = i = 0;
          }
        if (C[0] & 5) throw C[1];
        return { value: C[0] ? C[1] : void 0, done: !0 };
      }
    },
  S4 =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, s = t.length, l = e.length; n < s; n++, l++) e[l] = t[n];
      return e;
    },
  fa = Object.defineProperty,
  da = Object.defineProperties,
  pa = Object.getOwnPropertyDescriptors,
  J0 = Object.getOwnPropertySymbols,
  ha = Object.prototype.hasOwnProperty,
  ma = Object.prototype.propertyIsEnumerable,
  et = function (e, t, n) {
    return t in e
      ? fa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  g3 = function (e, t) {
    for (var n in t || (t = {})) ha.call(t, n) && et(e, n, t[n]);
    if (J0)
      for (var s = 0, l = J0(t); s < l.length; s++) {
        var n = l[s];
        ma.call(t, n) && et(e, n, t[n]);
      }
    return e;
  },
  le = function (e, t) {
    return da(e, pa(t));
  },
  xa = function (e, t, n) {
    return new Promise(function (s, l) {
      var i = function (u) {
          try {
            a(n.next(u));
          } catch (C) {
            l(C);
          }
        },
        o = function (u) {
          try {
            a(n.throw(u));
          } catch (C) {
            l(C);
          }
        },
        a = function (u) {
          return u.done ? s(u.value) : Promise.resolve(u.value).then(i, o);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  va =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? I6
              : I6.apply(null, arguments);
        };
function ja(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var ya = (function (e) {
    qr(t, e);
    function t() {
      for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
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
        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, S4([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, S4([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  ga = (function (e) {
    qr(t, e);
    function t() {
      for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
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
        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, S4([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, S4([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function c8(e) {
  return q2(e) ? br(e, function () {}) : e;
}
function wa(e) {
  return typeof e == "boolean";
}
function ka() {
  return function (t) {
    return Ma(t);
  };
}
function Ma(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var s = new ya();
  return (
    n && (wa(n) ? s.push(K0) : s.push(K0.withExtraArgument(n.extraArgument))), s
  );
}
var La = !0;
function Za(e) {
  var t = ka(),
    n = e || {},
    s = n.reducer,
    l = s === void 0 ? void 0 : s,
    i = n.middleware,
    o = i === void 0 ? t() : i,
    a = n.devTools,
    u = a === void 0 ? !0 : a,
    C = n.preloadedState,
    f = C === void 0 ? void 0 : C,
    d = n.enhancers,
    c = d === void 0 ? void 0 : d,
    h;
  if (typeof l == "function") h = l;
  else if (ja(l)) h = Yr(l);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var v = o;
  typeof v == "function" && (v = v(t));
  var y = ca.apply(void 0, v),
    P = I6;
  u && (P = va(g3({ trace: !La }, typeof u == "object" && u)));
  var x = new ga(y),
    p = x;
  Array.isArray(c) ? (p = S4([y], c)) : typeof c == "function" && (p = c(x));
  var m = P.apply(void 0, p);
  return Hr(h, f, m);
}
function w3(e, t) {
  function n() {
    for (var s = [], l = 0; l < arguments.length; l++) s[l] = arguments[l];
    if (t) {
      var i = t.apply(void 0, s);
      if (!i) throw new Error("prepareAction did not return an object");
      return g3(
        g3({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
      );
    }
    return { type: e, payload: s[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (s) {
      return s.type === e;
    }),
    n
  );
}
function Kr(e) {
  var t = {},
    n = [],
    s,
    l = {
      addCase: function (i, o) {
        var a = typeof i == "string" ? i : i.type;
        if (a in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[a] = o), l;
      },
      addMatcher: function (i, o) {
        return n.push({ matcher: i, reducer: o }), l;
      },
      addDefaultCase: function (i) {
        return (s = i), l;
      },
    };
  return e(l), [t, n, s];
}
function Aa(e) {
  return typeof e == "function";
}
function Sa(e, t, n, s) {
  n === void 0 && (n = []);
  var l = typeof t == "function" ? Kr(t) : [t, n, s],
    i = l[0],
    o = l[1],
    a = l[2],
    u;
  if (Aa(e))
    u = function () {
      return c8(e());
    };
  else {
    var C = c8(e);
    u = function () {
      return C;
    };
  }
  function f(d, c) {
    d === void 0 && (d = u());
    var h = S4(
      [i[c.type]],
      o
        .filter(function (v) {
          var y = v.matcher;
          return y(c);
        })
        .map(function (v) {
          var y = v.reducer;
          return y;
        })
    );
    return (
      h.filter(function (v) {
        return !!v;
      }).length === 0 && (h = [a]),
      h.reduce(function (v, y) {
        if (y)
          if (Z3(v)) {
            var P = v,
              x = y(P, c);
            return x === void 0 ? v : x;
          } else {
            if (q2(v))
              return br(v, function (p) {
                return y(p, c);
              });
            var x = y(v, c);
            if (x === void 0) {
              if (v === null) return v;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return x;
          }
        return v;
      }, d)
    );
  }
  return (f.getInitialState = u), f;
}
function _a(e, t) {
  return e + "/" + t;
}
function _5(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : c8(e.initialState),
    s = e.reducers || {},
    l = Object.keys(s),
    i = {},
    o = {},
    a = {};
  l.forEach(function (f) {
    var d = s[f],
      c = _a(t, f),
      h,
      v;
    "reducer" in d ? ((h = d.reducer), (v = d.prepare)) : (h = d),
      (i[f] = h),
      (o[c] = h),
      (a[f] = v ? w3(c, v) : w3(c));
  });
  function u() {
    var f =
        typeof e.extraReducers == "function"
          ? Kr(e.extraReducers)
          : [e.extraReducers],
      d = f[0],
      c = d === void 0 ? {} : d,
      h = f[1],
      v = h === void 0 ? [] : h,
      y = f[2],
      P = y === void 0 ? void 0 : y,
      x = g3(g3({}, c), o);
    return Sa(n, function (p) {
      for (var m in x) p.addCase(m, x[m]);
      for (var g = 0, S = v; g < S.length; g++) {
        var w = S[g];
        p.addMatcher(w.matcher, w.reducer);
      }
      P && p.addDefaultCase(P);
    });
  }
  var C;
  return {
    name: t,
    reducer: function (f, d) {
      return C || (C = u()), C(f, d);
    },
    actions: a,
    caseReducers: i,
    getInitialState: function () {
      return C || (C = u()), C.getInitialState();
    },
  };
}
var Na = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Ea = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += Na[(Math.random() * 64) | 0];
    return t;
  },
  Ta = ["name", "message", "stack", "code"],
  ie = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  tt = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Pa = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, s = Ta; n < s.length; n++) {
        var l = s[n];
        typeof e[l] == "string" && (t[l] = e[l]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, s) {
    var l = w3(t + "/fulfilled", function (C, f, d, c) {
        return {
          payload: C,
          meta: le(g3({}, c || {}), {
            arg: d,
            requestId: f,
            requestStatus: "fulfilled",
          }),
        };
      }),
      i = w3(t + "/pending", function (C, f, d) {
        return {
          payload: void 0,
          meta: le(g3({}, d || {}), {
            arg: f,
            requestId: C,
            requestStatus: "pending",
          }),
        };
      }),
      o = w3(t + "/rejected", function (C, f, d, c, h) {
        return {
          payload: c,
          error: ((s && s.serializeError) || Pa)(C || "Rejected"),
          meta: le(g3({}, h || {}), {
            arg: d,
            requestId: f,
            rejectedWithValue: !!c,
            requestStatus: "rejected",
            aborted: (C == null ? void 0 : C.name) === "AbortError",
            condition: (C == null ? void 0 : C.name) === "ConditionError",
          }),
        };
      }),
      a =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function C() {
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
              return (C.prototype.abort = function () {}), C;
            })();
    function u(C) {
      return function (f, d, c) {
        var h = s != null && s.idGenerator ? s.idGenerator(C) : Ea(),
          v = new a(),
          y;
        function P(p) {
          (y = p), v.abort();
        }
        var x = (function () {
          return xa(this, null, function () {
            var p, m, g, S, w, M, T;
            return Ca(this, function (N) {
              switch (N.label) {
                case 0:
                  return (
                    N.trys.push([0, 4, , 5]),
                    (S =
                      (p = s == null ? void 0 : s.condition) == null
                        ? void 0
                        : p.call(s, C, { getState: d, extra: c })),
                    Oa(S) ? [4, S] : [3, 2]
                  );
                case 1:
                  (S = N.sent()), (N.label = 2);
                case 2:
                  if (S === !1 || v.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (w = new Promise(function (Z, k) {
                      return v.signal.addEventListener("abort", function () {
                        return k({
                          name: "AbortError",
                          message: y || "Aborted",
                        });
                      });
                    })),
                    f(
                      i(
                        h,
                        C,
                        (m = s == null ? void 0 : s.getPendingMeta) == null
                          ? void 0
                          : m.call(
                              s,
                              { requestId: h, arg: C },
                              { getState: d, extra: c }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        w,
                        Promise.resolve(
                          n(C, {
                            dispatch: f,
                            getState: d,
                            extra: c,
                            requestId: h,
                            signal: v.signal,
                            abort: P,
                            rejectWithValue: function (Z, k) {
                              return new ie(Z, k);
                            },
                            fulfillWithValue: function (Z, k) {
                              return new tt(Z, k);
                            },
                          })
                        ).then(function (Z) {
                          if (Z instanceof ie) throw Z;
                          return Z instanceof tt
                            ? l(Z.payload, h, C, Z.meta)
                            : l(Z, h, C);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (g = N.sent()), [3, 5];
                case 4:
                  return (
                    (M = N.sent()),
                    (g =
                      M instanceof ie
                        ? o(null, h, C, M.payload, M.meta)
                        : o(M, h, C)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (T =
                      s &&
                      !s.dispatchConditionRejection &&
                      o.match(g) &&
                      g.meta.condition),
                    T || f(g),
                    [2, g]
                  );
              }
            });
          });
        })();
        return Object.assign(x, {
          abort: P,
          requestId: h,
          arg: C,
          unwrap: function () {
            return x.then(Ra);
          },
        });
      };
    }
    return Object.assign(u, {
      pending: i,
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
function Ra(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Oa(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var j7 = "listenerMiddleware";
w3(j7 + "/add");
w3(j7 + "/removeAll");
w3(j7 + "/remove");
var nt;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
ea();
const Ia = {
    arrQuestions: [
      [100, 200, 300, 400],
      [100, 200, 300, 400],
      [100, 200, 300, 400],
      [100, 200, 300, 400],
    ],
  },
  Jr = _5({
    name: "questions",
    initialState: Ia,
    reducers: {
      removePoints(e, t) {
        e.arrQuestions[t.payload[0]][t.payload[1]] = 0;
      },
    },
  }),
  za = Jr.reducer,
  { removePoints: Da } = Jr.actions,
  Fa = { activeQuestion: [0, 0] },
  es = _5({
    name: "active",
    initialState: Fa,
    reducers: {
      saveActive(e, t) {
        e.activeQuestion = t.payload;
      },
    },
  }),
  Ua = es.reducer,
  { saveActive: ts } = es.actions,
  Va = { points: 0 },
  ns = _5({
    name: "points",
    initialState: Va,
    reducers: {
      setPoints(e, t) {
        e.points += t.payload;
      },
    },
  }),
  Ba = ns.reducer,
  { setPoints: $a } = ns.actions,
  Qa = { checkAnswer: "wait" },
  rs = _5({
    name: "checkAnswer",
    initialState: Qa,
    reducers: {
      setCheckAnswer(e, t) {
        e.checkAnswer = t.payload;
      },
    },
  }),
  Wa = rs.reducer,
  { setCheckAnswer: G } = rs.actions,
  ba = {
    arrAnswers: [
      [
        { checkAnswer: !1, answer: "2", correct: !1 },
        { checkAnswer: !1, answer: "2", correct: !1 },
        { checkAnswer: !1, answer: "123", correct: !1 },
        { checkAnswer: !1, answer: "2", correct: !1 },
      ],
      [
        { checkAnswer: !1, answer: "1", correct: !1 },
        { checkAnswer: !1, answer: "3", correct: !1 },
        { checkAnswer: !1, answer: "180", correct: !1 },
        { checkAnswer: !1, answer: "2", correct: !1 },
      ],
      [
        { checkAnswer: !1, answer: "50", correct: !1 },
        { checkAnswer: !1, answer: "1", correct: !1 },
        { checkAnswer: !1, answer: "2", correct: !1 },
        { checkAnswer: !1, answer: "37", correct: !1 },
      ],
      [
        { checkAnswer: !1, answer: "1234", correct: !1 },
        { checkAnswer: !1, answer: "0", correct: !1 },
        { checkAnswer: !1, answer: "2", correct: !1 },
        { checkAnswer: !1, answer: "true true true false", correct: !1 },
      ],
    ],
  },
  ss = _5({
    name: "answers",
    initialState: ba,
    reducers: {
      addAnswer(e, t) {
        const { arrAnswer: n, answerInfo: s } = t.payload;
        (e.arrAnswers[n[0]][n[1]].checkAnswer = !0),
          (e.arrAnswers[n[0]][n[1]].correct = s.correct);
      },
    },
  }),
  Ha = ss.reducer,
  { addAnswer: K } = ss.actions,
  Ya = Yr({
    arrQuestionsReducer: za,
    activeQuestion: Ua,
    points: Ba,
    checkAnswerReducer: Wa,
    answersReducer: Ha,
  }),
  Xa = () => Za({ reducer: Ya }),
  T1 = () => bo(),
  N2 = So;
function Ga(e) {
  const { arrQuestions: t } = N2((a) => a.arrQuestionsReducer),
    { openAnswer: n, openTask: s } = e,
    l = T1(),
    i = ["деятельность", "география", "цифры", "работа у нас"],
    o = (a) => {
      if ((l(ts(a)), t[a[0]][a[1]] === 0)) {
        n(!0);
        return;
      }
      s(!0);
    };
  return r.jsx(r.Fragment, {
    children: r.jsx("div", {
      className: "main__game game",
      children: t.map((a, u) =>
        a.map((C, f) =>
          f === 0
            ? r.jsxs(
                L.Fragment,
                {
                  children: [
                    r.jsx("div", {
                      className: "game__category",
                      children: i[u],
                    }),
                    r.jsx("div", {
                      className: "game__item" + (C === 0 ? " disable" : ""),
                      onClick: () => o([u, f]),
                      children: (f + 1) * 100,
                    }),
                  ],
                },
                u + " " + f
              )
            : r.jsx(
                "div",
                {
                  className: "game__item" + (C === 0 ? " disable" : ""),
                  onClick: () => o([u, f]),
                  children: (f + 1) * 100,
                },
                u + " " + f
              )
        )
      ),
    }),
  });
}
function qa(e) {
  const { tasksEnd: t } = e,
    { points: n } = N2((s) => s.points);
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: "main__points points",
      children: [
        r.jsx("img", { src: Vr, alt: "logo", className: "points__logo" }),
        r.jsxs("div", {
          className: "points__balance " + (t ? "end" : ""),
          children: [
            r.jsx("p", { className: "points__title", children: "БАЛАНС" }),
            r.jsx("span", { className: "points__num", children: n }),
          ],
        }),
      ],
    }),
  });
}
const Ka = "_task__info_1woj1_1",
  Ja = "_task_1woj1_1",
  eu = "_list_1woj1_97",
  X1 = { task__info: Ka, task: Ja, list: eu },
  tu = "_opacityTask_1ukh4_1",
  nu = { opacityTask: tu },
  e1 = () =>
    r.jsx(r.Fragment, {
      children: r.jsx("div", { className: nu.opacityTask }),
    });
function ru(e) {
  const [t, n] = L.useState(1),
    s = T1(),
    { selectAnswer: l, checkClick: i, active: o } = e,
    a = L.useRef(!0);
  L.useEffect(() => {
    if (!a.current) return;
    l(!0);
    const C = { arrAnswer: o, answerInfo: { answer: "1", correct: !1 } };
    s(G("false")), s(K(C));
  });
  const u = (C) => {
    C.preventDefault(), (a.current = !1);
    const f = C.currentTarget;
    n(+f.value), l(!0);
    const d = { arrAnswer: o, answerInfo: { answer: f.value, correct: !1 } };
    f.value === "2"
      ? (s(G("true")), (d.answerInfo.correct = !0), s(K(d)))
      : (s(G("false")), s(K(d)));
  };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: X1.task__info,
      children: [
        i && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Размести ползунок около верного ответа",
        }),
        r.jsxs("div", {
          className: X1.task,
          children: [
            r.jsx("input", {
              type: "range",
              min: "1",
              max: "4",
              step: "1",
              defaultValue: "1",
              list: "list",
              onChange: u,
            }),
            r.jsxs("ul", {
              id: "list",
              className: X1.list,
              children: [
                r.jsx("li", {
                  className: X1.item,
                  style: t === 1 ? { opacity: "1" } : { opacity: ".5" },
                  children: "Управление проектированием",
                }),
                r.jsx("li", {
                  className: X1.item,
                  style: t === 2 ? { opacity: "1" } : { opacity: ".5" },
                  children: "Управление выпуском продукции",
                }),
                r.jsx("li", {
                  className: X1.item,
                  style: t === 3 ? { opacity: "1" } : { opacity: ".5" },
                  children: "Управление строительством",
                }),
                r.jsx("li", {
                  className: X1.item,
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
const su = "_taskInfo_at5wk_1",
  lu = "_task_at5wk_1",
  iu = "_taskAnswer_at5wk_29",
  ou = "_danger_at5wk_71",
  au = "_cart_at5wk_77",
  u3 = { taskInfo: su, task: lu, taskAnswer: iu, danger: ou, cart: au },
  ls = "" + new URL("cart-4b20c114.png", import.meta.url).href;
function uu(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    i = L.useRef(null);
  let o = 0,
    a = 0;
  L.useEffect(() => {
    if (i.current) {
      const M = i.current.getBoundingClientRect();
      (o = M.left), (a = M.top);
    }
  });
  const [u, C] = L.useState([
      { value: "EPC", check: !1 },
      { value: "САПР", check: !1 },
      { value: "UGC", check: !1 },
      { value: "BIM", check: !1 },
    ]),
    [f, d] = L.useState("-1");
  let c;
  const h = L.useRef(!1),
    v = () => {
      if (c) {
        if (c.style.position === "absolute") return;
        (c.style.left = "auto"),
          (c.style.top = "auto"),
          (c.style.transform = "none"),
          (c.style.position = "absolute");
        let M = c.offsetLeft - c.offsetWidth;
        M < 0 && (M = c.offsetLeft);
        const T = c.offsetTop;
        (c.style.zIndex = "1"),
          (c.style.left = M + "px"),
          (c.style.top = T + "px");
      }
    },
    y = (M) => {
      (c = M.target), (h.current = !0), v();
    },
    P = (M) => {
      (document.body.style.overflow = "hidden"),
        (c = M.changedTouches[0].target),
        v();
    },
    x = (M) => {
      h.current && m(M.pageY, M.pageX, "mouse");
    },
    p = (M) => {
      const T = M.changedTouches[0];
      m(T.clientY, T.clientX, "");
    },
    m = (M, T, N) => {
      if (c) {
        if (c.style.top === "50%") return;
        let Z, k;
        if (
          (N === "phone"
            ? ((k = M - a - c.offsetHeight / 2),
              (Z = T - o - c.offsetWidth / 2))
            : ((k = M - a - c.offsetHeight / 2 + 5),
              (Z = T - o - c.offsetWidth / 2)),
          k > 14 && k < 112 && (c.style.top = k + "px"),
          Z > 0 && Z < 270 && (c.style.left = Z + "px"),
          k > 14 && k < 140 && Z > 90 && Z < 170)
        ) {
          const _ = c.getAttribute("data-value");
          if (_ && f !== _) {
            C(
              u.map(
                (B, F) => (F + "" === _ ? (B.check = !0) : (B.check = !1), B)
              )
            );
            const I = { arrAnswer: l, answerInfo: { answer: _, correct: !1 } };
            _ === "2"
              ? (t(G("true")), (I.answerInfo.correct = !0), t(K(I)))
              : (t(G("false")), t(K(I))),
              d(_);
          }
          n(!0),
            _ === "1" && (c.style.fontSize = "20px"),
            (c.style.color = "#008C95"),
            (c.style.top = "50%"),
            (c.style.left = "50%"),
            (c.style.transform = "translateX(-50%) translateY(-50%)");
        } else (c.style.color = "#fff"), (c.style.fontSize = "25px");
      }
    },
    g = () => {
      (h.current = !1), w();
    },
    S = () => {
      (document.body.style.overflow = "auto"), w();
    },
    w = () => {
      if (c && c.style.top !== "50%" && c.style.left !== "50%") {
        c.style.position = "static";
        return;
      }
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: u3.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Перетащи выбранный вариант ответа в корзину",
        }),
        r.jsxs("div", {
          className: u3.task,
          ref: i,
          children: [
            u.map((M, T) =>
              r.jsx(
                "div",
                {
                  className: u3.taskAnswer,
                  children: r.jsx("span", {
                    onMouseDown: (N) => y(N),
                    onMouseMove: (N) => x(N),
                    onMouseUp: () => g(),
                    onTouchStart: (N) => P(N),
                    onTouchMove: (N) => p(N),
                    onTouchEnd: () => S(),
                    "data-value": T,
                    style: {
                      color: M.check
                        ? s
                          ? f === "2"
                            ? "#008C95"
                            : "#C00000"
                          : "#008C95"
                        : "#fff",
                      position: M.check ? "absolute" : "static",
                      fontSize: f === "1" && T === 1 ? "20px" : "25px",
                    },
                    children: M.value,
                  }),
                },
                T
              )
            ),
            r.jsx("div", {
              className: u3.cart,
              children: r.jsx("img", { src: ls, alt: "cart" }),
            }),
          ],
        }),
      ],
    }),
  });
}
var N5 = (e) => e.type === "checkbox",
  u4 = (e) => e instanceof Date,
  W1 = (e) => e == null;
const is = (e) => typeof e == "object";
var S1 = (e) => !W1(e) && !Array.isArray(e) && is(e) && !u4(e),
  cu = (e) =>
    S1(e) && e.target ? (N5(e.target) ? e.target.checked : e.target.value) : e,
  Cu = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  fu = (e, t) => e.has(Cu(t)),
  du = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return S1(t) && t.hasOwnProperty("isPrototypeOf");
  },
  y7 =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function t3(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(y7 && (e instanceof Blob || e instanceof FileList)) &&
    (n || S1(e))
  )
    if (((t = n ? [] : {}), !n && !du(e))) t = e;
    else for (const s in e) e.hasOwnProperty(s) && (t[s] = t3(e[s]));
  else return e;
  return t;
}
var E5 = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  M1 = (e) => e === void 0,
  W = (e, t, n) => {
    if (!t || !S1(e)) return n;
    const s = E5(t.split(/[,[\].]+?/)).reduce((l, i) => (W1(l) ? l : l[i]), e);
    return M1(s) || s === e ? (M1(e[t]) ? n : e[t]) : s;
  };
const rt = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  A2 = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  U2 = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
$2.createContext(null);
var pu = (e, t, n, s = !0) => {
    const l = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(l, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== A2.all &&
              (t._proxyFormState[o] = !s || A2.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return l;
  },
  d2 = (e) => S1(e) && !Object.keys(e).length,
  hu = (e, t, n, s) => {
    n(e);
    const { name: l, ...i } = e;
    return (
      d2(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!s || A2.all))
    );
  },
  oe = (e) => (Array.isArray(e) ? e : [e]);
function mu(e) {
  const t = $2.useRef(e);
  (t.current = e),
    $2.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var I2 = (e) => typeof e == "string",
  xu = (e, t, n, s, l) =>
    I2(e)
      ? (s && t.watch.add(e), W(n, e, l))
      : Array.isArray(e)
      ? e.map((i) => (s && t.watch.add(i), W(n, i)))
      : (s && (t.watchAll = !0), n),
  g7 = (e) => /^\w*$/.test(e),
  os = (e) => E5(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function c1(e, t, n) {
  let s = -1;
  const l = g7(t) ? [t] : os(t),
    i = l.length,
    o = i - 1;
  for (; ++s < i; ) {
    const a = l[s];
    let u = n;
    if (s !== o) {
      const C = e[a];
      u = S1(C) || Array.isArray(C) ? C : isNaN(+l[s + 1]) ? {} : [];
    }
    (e[a] = u), (e = e[a]);
  }
  return e;
}
var vu = (e, t, n, s, l) =>
  t
    ? {
        ...n[e],
        types: { ...(n[e] && n[e].types ? n[e].types : {}), [s]: l || !0 },
      }
    : {};
const C8 = (e, t, n) => {
  for (const s of n || Object.keys(e)) {
    const l = W(e, s);
    if (l) {
      const { _f: i, ...o } = l;
      if (i && t(i.name)) {
        if (i.ref.focus) {
          i.ref.focus();
          break;
        } else if (i.refs && i.refs[0].focus) {
          i.refs[0].focus();
          break;
        }
      } else S1(o) && C8(o, t);
    }
  }
};
var st = (e) => ({
    isOnSubmit: !e || e === A2.onSubmit,
    isOnBlur: e === A2.onBlur,
    isOnChange: e === A2.onChange,
    isOnAll: e === A2.all,
    isOnTouch: e === A2.onTouched,
  }),
  lt = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (s) => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length))
      )),
  ju = (e, t, n) => {
    const s = E5(W(e, n));
    return c1(s, "root", t[n]), c1(e, n, s), e;
  },
  v4 = (e) => typeof e == "boolean",
  w7 = (e) => e.type === "file",
  c3 = (e) => typeof e == "function",
  z6 = (e) => {
    if (!y7) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  o6 = (e) => I2(e),
  k7 = (e) => e.type === "radio",
  D6 = (e) => e instanceof RegExp;
const it = { value: !1, isValid: !1 },
  ot = { value: !0, isValid: !0 };
var as = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !M1(e[0].attributes.value)
        ? M1(e[0].value) || e[0].value === ""
          ? ot
          : { value: e[0].value, isValid: !0 }
        : ot
      : it;
  }
  return it;
};
const at = { isValid: !1, value: null };
var us = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        at
      )
    : at;
function ut(e, t, n = "validate") {
  if (o6(e) || (Array.isArray(e) && e.every(o6)) || (v4(e) && !e))
    return { type: n, message: o6(e) ? e : "", ref: t };
}
var G3 = (e) => (S1(e) && !D6(e) ? e : { value: e, message: "" }),
  ct = async (e, t, n, s, l) => {
    const {
        ref: i,
        refs: o,
        required: a,
        maxLength: u,
        minLength: C,
        min: f,
        max: d,
        pattern: c,
        validate: h,
        name: v,
        valueAsNumber: y,
        mount: P,
        disabled: x,
      } = e._f,
      p = W(t, v);
    if (!P || x) return {};
    const m = o ? o[0] : i,
      g = (_) => {
        s &&
          m.reportValidity &&
          (m.setCustomValidity(v4(_) ? "" : _ || ""), m.reportValidity());
      },
      S = {},
      w = k7(i),
      M = N5(i),
      T = w || M,
      N =
        ((y || w7(i)) && M1(i.value) && M1(p)) ||
        (z6(i) && i.value === "") ||
        p === "" ||
        (Array.isArray(p) && !p.length),
      Z = vu.bind(null, v, n, S),
      k = (_, I, B, F = U2.maxLength, Q = U2.minLength) => {
        const X = _ ? I : B;
        S[v] = { type: _ ? F : Q, message: X, ref: i, ...Z(_ ? F : Q, X) };
      };
    if (
      l
        ? !Array.isArray(p) || !p.length
        : a &&
          ((!T && (N || W1(p))) ||
            (v4(p) && !p) ||
            (M && !as(o).isValid) ||
            (w && !us(o).isValid))
    ) {
      const { value: _, message: I } = o6(a)
        ? { value: !!a, message: a }
        : G3(a);
      if (
        _ &&
        ((S[v] = {
          type: U2.required,
          message: I,
          ref: m,
          ...Z(U2.required, I),
        }),
        !n)
      )
        return g(I), S;
    }
    if (!N && (!W1(f) || !W1(d))) {
      let _, I;
      const B = G3(d),
        F = G3(f);
      if (!W1(p) && !isNaN(p)) {
        const Q = i.valueAsNumber || (p && +p);
        W1(B.value) || (_ = Q > B.value), W1(F.value) || (I = Q < F.value);
      } else {
        const Q = i.valueAsDate || new Date(p),
          X = (D) => new Date(new Date().toDateString() + " " + D),
          R = i.type == "time",
          V = i.type == "week";
        I2(B.value) &&
          p &&
          (_ = R ? X(p) > X(B.value) : V ? p > B.value : Q > new Date(B.value)),
          I2(F.value) &&
            p &&
            (I = R
              ? X(p) < X(F.value)
              : V
              ? p < F.value
              : Q < new Date(F.value));
      }
      if ((_ || I) && (k(!!_, B.message, F.message, U2.max, U2.min), !n))
        return g(S[v].message), S;
    }
    if ((u || C) && !N && (I2(p) || (l && Array.isArray(p)))) {
      const _ = G3(u),
        I = G3(C),
        B = !W1(_.value) && p.length > +_.value,
        F = !W1(I.value) && p.length < +I.value;
      if ((B || F) && (k(B, _.message, I.message), !n))
        return g(S[v].message), S;
    }
    if (c && !N && I2(p)) {
      const { value: _, message: I } = G3(c);
      if (
        D6(_) &&
        !p.match(_) &&
        ((S[v] = { type: U2.pattern, message: I, ref: i, ...Z(U2.pattern, I) }),
        !n)
      )
        return g(I), S;
    }
    if (h) {
      if (c3(h)) {
        const _ = await h(p, t),
          I = ut(_, m);
        if (I && ((S[v] = { ...I, ...Z(U2.validate, I.message) }), !n))
          return g(I.message), S;
      } else if (S1(h)) {
        let _ = {};
        for (const I in h) {
          if (!d2(_) && !n) break;
          const B = ut(await h[I](p, t), m, I);
          B &&
            ((_ = { ...B, ...Z(I, B.message) }), g(B.message), n && (S[v] = _));
        }
        if (!d2(_) && ((S[v] = { ref: m, ..._ }), !n)) return S;
      }
    }
    return g(!0), S;
  };
function yu(e, t) {
  const n = t.slice(0, -1).length;
  let s = 0;
  for (; s < n; ) e = M1(e) ? s++ : e[t[s++]];
  return e;
}
function gu(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !M1(e[t])) return !1;
  return !0;
}
function P1(e, t) {
  const n = Array.isArray(t) ? t : g7(t) ? [t] : os(t),
    s = n.length === 1 ? e : yu(e, n),
    l = n.length - 1,
    i = n[l];
  return (
    s && delete s[i],
    l !== 0 &&
      ((S1(s) && d2(s)) || (Array.isArray(s) && gu(s))) &&
      P1(e, n.slice(0, -1)),
    e
  );
}
function ae() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const i of e) i.next && i.next(l);
    },
    subscribe: (l) => (
      e.push(l),
      {
        unsubscribe: () => {
          e = e.filter((i) => i !== l);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
}
var F6 = (e) => W1(e) || !is(e);
function I3(e, t) {
  if (F6(e) || F6(t)) return e === t;
  if (u4(e) && u4(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (const l of n) {
    const i = e[l];
    if (!s.includes(l)) return !1;
    if (l !== "ref") {
      const o = t[l];
      if (
        (u4(i) && u4(o)) ||
        (S1(i) && S1(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !I3(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var cs = (e) => e.type === "select-multiple",
  wu = (e) => k7(e) || N5(e),
  ue = (e) => z6(e) && e.isConnected,
  Cs = (e) => {
    for (const t in e) if (c3(e[t])) return !0;
    return !1;
  };
function U6(e, t = {}) {
  const n = Array.isArray(e);
  if (S1(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || (S1(e[s]) && !Cs(e[s]))
        ? ((t[s] = Array.isArray(e[s]) ? [] : {}), U6(e[s], t[s]))
        : W1(e[s]) || (t[s] = !0);
  return t;
}
function fs(e, t, n) {
  const s = Array.isArray(e);
  if (S1(e) || s)
    for (const l in e)
      Array.isArray(e[l]) || (S1(e[l]) && !Cs(e[l]))
        ? M1(t) || F6(n[l])
          ? (n[l] = Array.isArray(e[l]) ? U6(e[l], []) : { ...U6(e[l]) })
          : fs(e[l], W1(t) ? {} : t[l], n[l])
        : (n[l] = !I3(e[l], t[l]));
  return n;
}
var ce = (e, t) => fs(e, t, U6(t)),
  ds = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: s }) =>
    M1(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && I2(e)
      ? new Date(e)
      : s
      ? s(e)
      : e;
function Ce(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return w7(t)
      ? t.files
      : k7(t)
      ? us(e.refs).value
      : cs(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : N5(t)
      ? as(e.refs).value
      : ds(M1(t.value) ? e.ref.value : t.value, e);
}
var ku = (e, t, n, s) => {
    const l = {};
    for (const i of e) {
      const o = W(t, i);
      o && c1(l, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: l,
      shouldUseNativeValidation: s,
    };
  },
  $4 = (e) =>
    M1(e)
      ? e
      : D6(e)
      ? e.source
      : S1(e)
      ? D6(e.value)
        ? e.value.source
        : e.value
      : e,
  Mu = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Ct(e, t, n) {
  const s = W(e, n);
  if (s || g7(n)) return { error: s, name: n };
  const l = n.split(".");
  for (; l.length; ) {
    const i = l.join("."),
      o = W(t, i),
      a = W(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    l.pop();
  }
  return { name: n };
}
var Lu = (e, t, n, s, l) =>
    l.isOnAll
      ? !1
      : !n && l.isOnTouch
      ? !(t || e)
      : (n ? s.isOnBlur : l.isOnBlur)
      ? !e
      : (n ? s.isOnChange : l.isOnChange)
      ? e
      : !0,
  Zu = (e, t) => !E5(W(e, t)).length && P1(e, t);
const Au = {
  mode: A2.onSubmit,
  reValidateMode: A2.onChange,
  shouldFocusError: !0,
};
function Su(e = {}, t) {
  let n = { ...Au, ...e },
    s = {
      submitCount: 0,
      isDirty: !1,
      isLoading: c3(n.defaultValues),
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
    i =
      S1(n.defaultValues) || S1(n.values)
        ? t3(n.defaultValues || n.values) || {}
        : {},
    o = n.shouldUnregister ? {} : t3(i),
    a = { action: !1, mount: !1, watch: !1 },
    u = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    C,
    f = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    c = { values: ae(), array: ae(), state: ae() },
    h = e.resetOptions && e.resetOptions.keepDirtyValues,
    v = st(n.mode),
    y = st(n.reValidateMode),
    P = n.criteriaMode === A2.all,
    x = (j) => (A) => {
      clearTimeout(f), (f = setTimeout(j, A));
    },
    p = async (j) => {
      if (d.isValid || j) {
        const A = n.resolver ? d2((await N()).errors) : await k(l, !0);
        A !== s.isValid && c.state.next({ isValid: A });
      }
    },
    m = (j) => d.isValidating && c.state.next({ isValidating: j }),
    g = (j, A = [], E, b, U = !0, z = !0) => {
      if (b && E) {
        if (((a.action = !0), z && Array.isArray(W(l, j)))) {
          const H = E(W(l, j), b.argA, b.argB);
          U && c1(l, j, H);
        }
        if (z && Array.isArray(W(s.errors, j))) {
          const H = E(W(s.errors, j), b.argA, b.argB);
          U && c1(s.errors, j, H), Zu(s.errors, j);
        }
        if (d.touchedFields && z && Array.isArray(W(s.touchedFields, j))) {
          const H = E(W(s.touchedFields, j), b.argA, b.argB);
          U && c1(s.touchedFields, j, H);
        }
        d.dirtyFields && (s.dirtyFields = ce(i, o)),
          c.state.next({
            name: j,
            isDirty: I(j, A),
            dirtyFields: s.dirtyFields,
            errors: s.errors,
            isValid: s.isValid,
          });
      } else c1(o, j, A);
    },
    S = (j, A) => {
      c1(s.errors, j, A), c.state.next({ errors: s.errors });
    },
    w = (j, A, E, b) => {
      const U = W(l, j);
      if (U) {
        const z = W(o, j, M1(E) ? W(i, j) : E);
        M1(z) || (b && b.defaultChecked) || A
          ? c1(o, j, A ? z : Ce(U._f))
          : Q(j, z),
          a.mount && p();
      }
    },
    M = (j, A, E, b, U) => {
      let z = !1,
        H = !1;
      const x1 = { name: j };
      if (!E || b) {
        d.isDirty &&
          ((H = s.isDirty),
          (s.isDirty = x1.isDirty = I()),
          (z = H !== x1.isDirty));
        const y1 = I3(W(i, j), A);
        (H = W(s.dirtyFields, j)),
          y1 ? P1(s.dirtyFields, j) : c1(s.dirtyFields, j, !0),
          (x1.dirtyFields = s.dirtyFields),
          (z = z || (d.dirtyFields && H !== !y1));
      }
      if (E) {
        const y1 = W(s.touchedFields, j);
        y1 ||
          (c1(s.touchedFields, j, E),
          (x1.touchedFields = s.touchedFields),
          (z = z || (d.touchedFields && y1 !== E)));
      }
      return z && U && c.state.next(x1), z ? x1 : {};
    },
    T = (j, A, E, b) => {
      const U = W(s.errors, j),
        z = d.isValid && v4(A) && s.isValid !== A;
      if (
        (e.delayError && E
          ? ((C = x(() => S(j, E))), C(e.delayError))
          : (clearTimeout(f),
            (C = null),
            E ? c1(s.errors, j, E) : P1(s.errors, j)),
        (E ? !I3(U, E) : U) || !d2(b) || z)
      ) {
        const H = {
          ...b,
          ...(z && v4(A) ? { isValid: A } : {}),
          errors: s.errors,
          name: j,
        };
        (s = { ...s, ...H }), c.state.next(H);
      }
      m(!1);
    },
    N = async (j) =>
      n.resolver(
        o,
        n.context,
        ku(j || u.mount, l, n.criteriaMode, n.shouldUseNativeValidation)
      ),
    Z = async (j) => {
      const { errors: A } = await N();
      if (j)
        for (const E of j) {
          const b = W(A, E);
          b ? c1(s.errors, E, b) : P1(s.errors, E);
        }
      else s.errors = A;
      return A;
    },
    k = async (j, A, E = { valid: !0 }) => {
      for (const b in j) {
        const U = j[b];
        if (U) {
          const { _f: z, ...H } = U;
          if (z) {
            const x1 = u.array.has(z.name),
              y1 = await ct(U, o, P, n.shouldUseNativeValidation && !A, x1);
            if (y1[z.name] && ((E.valid = !1), A)) break;
            !A &&
              (W(y1, z.name)
                ? x1
                  ? ju(s.errors, y1, z.name)
                  : c1(s.errors, z.name, y1[z.name])
                : P1(s.errors, z.name));
          }
          H && (await k(H, A, E));
        }
      }
      return E.valid;
    },
    _ = () => {
      for (const j of u.unMount) {
        const A = W(l, j);
        A &&
          (A._f.refs ? A._f.refs.every((E) => !ue(E)) : !ue(A._f.ref)) &&
          g2(j);
      }
      u.unMount = new Set();
    },
    I = (j, A) => (j && A && c1(o, j, A), !I3(u1(), i)),
    B = (j, A, E) =>
      xu(j, u, { ...(a.mount ? o : M1(A) ? i : I2(j) ? { [j]: A } : A) }, E, A),
    F = (j) => E5(W(a.mount ? o : i, j, e.shouldUnregister ? W(i, j, []) : [])),
    Q = (j, A, E = {}) => {
      const b = W(l, j);
      let U = A;
      if (b) {
        const z = b._f;
        z &&
          (!z.disabled && c1(o, j, ds(A, z)),
          (U = z6(z.ref) && W1(A) ? "" : A),
          cs(z.ref)
            ? [...z.ref.options].forEach(
                (H) => (H.selected = U.includes(H.value))
              )
            : z.refs
            ? N5(z.ref)
              ? z.refs.length > 1
                ? z.refs.forEach(
                    (H) =>
                      (!H.defaultChecked || !H.disabled) &&
                      (H.checked = Array.isArray(U)
                        ? !!U.find((x1) => x1 === H.value)
                        : U === H.value)
                  )
                : z.refs[0] && (z.refs[0].checked = !!U)
              : z.refs.forEach((H) => (H.checked = H.value === U))
            : w7(z.ref)
            ? (z.ref.value = "")
            : ((z.ref.value = U),
              z.ref.type || c.values.next({ name: j, values: { ...o } })));
      }
      (E.shouldDirty || E.shouldTouch) &&
        M(j, U, E.shouldTouch, E.shouldDirty, !0),
        E.shouldValidate && D(j);
    },
    X = (j, A, E) => {
      for (const b in A) {
        const U = A[b],
          z = `${j}.${b}`,
          H = W(l, z);
        (u.array.has(j) || !F6(U) || (H && !H._f)) && !u4(U)
          ? X(z, U, E)
          : Q(z, U, E);
      }
    },
    R = (j, A, E = {}) => {
      const b = W(l, j),
        U = u.array.has(j),
        z = t3(A);
      c1(o, j, z),
        U
          ? (c.array.next({ name: j, values: { ...o } }),
            (d.isDirty || d.dirtyFields) &&
              E.shouldDirty &&
              c.state.next({
                name: j,
                dirtyFields: ce(i, o),
                isDirty: I(j, z),
              }))
          : b && !b._f && !W1(z)
          ? X(j, z, E)
          : Q(j, z, E),
        lt(j, u) && c.state.next({ ...s }),
        c.values.next({ name: j, values: { ...o } }),
        !a.mount && t();
    },
    V = async (j) => {
      const A = j.target;
      let E = A.name,
        b = !0;
      const U = W(l, E),
        z = () => (A.type ? Ce(U._f) : cu(j));
      if (U) {
        let H, x1;
        const y1 = z(),
          Y3 = j.type === rt.BLUR || j.type === rt.FOCUS_OUT,
          Zs =
            (!Mu(U._f) && !n.resolver && !W(s.errors, E) && !U._f.deps) ||
            Lu(Y3, W(s.touchedFields, E), s.isSubmitted, y, v),
          L9 = lt(E, u, Y3);
        c1(o, E, y1),
          Y3
            ? (U._f.onBlur && U._f.onBlur(j), C && C(0))
            : U._f.onChange && U._f.onChange(j);
        const Z9 = M(E, y1, Y3, !1),
          As = !d2(Z9) || L9;
        if (
          (!Y3 && c.values.next({ name: E, type: j.type, values: { ...o } }),
          Zs)
        )
          return (
            d.isValid && p(), As && c.state.next({ name: E, ...(L9 ? {} : Z9) })
          );
        if ((!Y3 && L9 && c.state.next({ ...s }), m(!0), n.resolver)) {
          const { errors: S7 } = await N([E]),
            Ss = Ct(s.errors, l, E),
            _7 = Ct(S7, l, Ss.name || E);
          (H = _7.error), (E = _7.name), (x1 = d2(S7));
        } else
          (H = (await ct(U, o, P, n.shouldUseNativeValidation))[E]),
            (b = isNaN(y1) || y1 === W(o, E, y1)),
            b && (H ? (x1 = !1) : d.isValid && (x1 = await k(l, !0)));
        b && (U._f.deps && D(U._f.deps), T(E, x1, H, Z9));
      }
    },
    D = async (j, A = {}) => {
      let E, b;
      const U = oe(j);
      if ((m(!0), n.resolver)) {
        const z = await Z(M1(j) ? j : U);
        (E = d2(z)), (b = j ? !U.some((H) => W(z, H)) : E);
      } else
        j
          ? ((b = (
              await Promise.all(
                U.map(async (z) => {
                  const H = W(l, z);
                  return await k(H && H._f ? { [z]: H } : H);
                })
              )
            ).every(Boolean)),
            !(!b && !s.isValid) && p())
          : (b = E = await k(l));
      return (
        c.state.next({
          ...(!I2(j) || (d.isValid && E !== s.isValid) ? {} : { name: j }),
          ...(n.resolver || !j ? { isValid: E } : {}),
          errors: s.errors,
          isValidating: !1,
        }),
        A.shouldFocus &&
          !b &&
          C8(l, (z) => z && W(s.errors, z), j ? U : u.mount),
        b
      );
    },
    u1 = (j) => {
      const A = { ...i, ...(a.mount ? o : {}) };
      return M1(j) ? A : I2(j) ? W(A, j) : j.map((E) => W(A, E));
    },
    j1 = (j, A) => ({
      invalid: !!W((A || s).errors, j),
      isDirty: !!W((A || s).dirtyFields, j),
      isTouched: !!W((A || s).touchedFields, j),
      error: W((A || s).errors, j),
    }),
    H3 = (j) => {
      j && oe(j).forEach((A) => P1(s.errors, A)),
        c.state.next({ errors: j ? s.errors : {} });
    },
    T2 = (j, A, E) => {
      const b = (W(l, j, { _f: {} })._f || {}).ref;
      c1(s.errors, j, { ...A, ref: b }),
        c.state.next({ name: j, errors: s.errors, isValid: !1 }),
        E && E.shouldFocus && b && b.focus && b.focus();
    },
    R4 = (j, A) =>
      c3(j)
        ? c.values.subscribe({ next: (E) => j(B(void 0, A), E) })
        : B(j, A, !0),
    g2 = (j, A = {}) => {
      for (const E of j ? oe(j) : u.mount)
        u.mount.delete(E),
          u.array.delete(E),
          A.keepValue || (P1(l, E), P1(o, E)),
          !A.keepError && P1(s.errors, E),
          !A.keepDirty && P1(s.dirtyFields, E),
          !A.keepTouched && P1(s.touchedFields, E),
          !n.shouldUnregister && !A.keepDefaultValue && P1(i, E);
      c.values.next({ values: { ...o } }),
        c.state.next({ ...s, ...(A.keepDirty ? { isDirty: I() } : {}) }),
        !A.keepIsValid && p();
    },
    J2 = (j, A = {}) => {
      let E = W(l, j);
      const b = v4(A.disabled);
      return (
        c1(l, j, {
          ...(E || {}),
          _f: {
            ...(E && E._f ? E._f : { ref: { name: j } }),
            name: j,
            mount: !0,
            ...A,
          },
        }),
        u.mount.add(j),
        E
          ? b && c1(o, j, A.disabled ? void 0 : W(o, j, Ce(E._f)))
          : w(j, !0, A.value),
        {
          ...(b ? { disabled: A.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!A.required,
                min: $4(A.min),
                max: $4(A.max),
                minLength: $4(A.minLength),
                maxLength: $4(A.maxLength),
                pattern: $4(A.pattern),
              }
            : {}),
          name: j,
          onChange: V,
          onBlur: V,
          ref: (U) => {
            if (U) {
              J2(j, A), (E = W(l, j));
              const z =
                  (M1(U.value) &&
                    U.querySelectorAll &&
                    U.querySelectorAll("input,select,textarea")[0]) ||
                  U,
                H = wu(z),
                x1 = E._f.refs || [];
              if (H ? x1.find((y1) => y1 === z) : z === E._f.ref) return;
              c1(l, j, {
                _f: {
                  ...E._f,
                  ...(H
                    ? {
                        refs: [
                          ...x1.filter(ue),
                          z,
                          ...(Array.isArray(W(i, j)) ? [{}] : []),
                        ],
                        ref: { type: z.type, name: j },
                      }
                    : { ref: z }),
                },
              }),
                w(j, !1, void 0, z);
            } else
              (E = W(l, j, {})),
                E._f && (E._f.mount = !1),
                (n.shouldUnregister || A.shouldUnregister) &&
                  !(fu(u.array, j) && a.action) &&
                  u.unMount.add(j);
          },
        }
      );
    },
    M7 = () => n.shouldFocusError && C8(l, (j) => j && W(s.errors, j), u.mount),
    L7 = (j, A) => async (E) => {
      E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
      let b = t3(o);
      if ((c.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: U, values: z } = await N();
        (s.errors = U), (b = z);
      } else await k(l);
      P1(s.errors, "root"),
        d2(s.errors)
          ? (c.state.next({ errors: {} }), await j(b, E))
          : (A && (await A({ ...s.errors }, E)), M7(), setTimeout(M7)),
        c.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: d2(s.errors),
          submitCount: s.submitCount + 1,
          errors: s.errors,
        });
    },
    Ls = (j, A = {}) => {
      W(l, j) &&
        (M1(A.defaultValue)
          ? R(j, W(i, j))
          : (R(j, A.defaultValue), c1(i, j, A.defaultValue)),
        A.keepTouched || P1(s.touchedFields, j),
        A.keepDirty ||
          (P1(s.dirtyFields, j),
          (s.isDirty = A.defaultValue ? I(j, W(i, j)) : I())),
        A.keepError || (P1(s.errors, j), d.isValid && p()),
        c.state.next({ ...s }));
    },
    Z7 = (j, A = {}) => {
      const E = j || i,
        b = t3(E),
        U = j && !d2(j) ? b : i;
      if ((A.keepDefaultValues || (i = E), !A.keepValues)) {
        if (A.keepDirtyValues || h)
          for (const z of u.mount)
            W(s.dirtyFields, z) ? c1(U, z, W(o, z)) : R(z, W(U, z));
        else {
          if (y7 && M1(j))
            for (const z of u.mount) {
              const H = W(l, z);
              if (H && H._f) {
                const x1 = Array.isArray(H._f.refs) ? H._f.refs[0] : H._f.ref;
                if (z6(x1)) {
                  const y1 = x1.closest("form");
                  if (y1) {
                    y1.reset();
                    break;
                  }
                }
              }
            }
          l = {};
        }
        (o = e.shouldUnregister ? (A.keepDefaultValues ? t3(i) : {}) : t3(U)),
          c.array.next({ values: { ...U } }),
          c.values.next({ values: { ...U } });
      }
      (u = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        !a.mount && t(),
        (a.mount = !d.isValid || !!A.keepIsValid),
        (a.watch = !!e.shouldUnregister),
        c.state.next({
          submitCount: A.keepSubmitCount ? s.submitCount : 0,
          isDirty: A.keepDirty
            ? s.isDirty
            : !!(A.keepDefaultValues && !I3(j, i)),
          isSubmitted: A.keepIsSubmitted ? s.isSubmitted : !1,
          dirtyFields: A.keepDirtyValues
            ? s.dirtyFields
            : A.keepDefaultValues && j
            ? ce(i, j)
            : {},
          touchedFields: A.keepTouched ? s.touchedFields : {},
          errors: A.keepErrors ? s.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1,
        });
    },
    A7 = (j, A) => Z7(c3(j) ? j(o) : j, A);
  return {
    control: {
      register: J2,
      unregister: g2,
      getFieldState: j1,
      handleSubmit: L7,
      setError: T2,
      _executeSchema: N,
      _getWatch: B,
      _getDirty: I,
      _updateValid: p,
      _removeUnmounted: _,
      _updateFieldArray: g,
      _getFieldArray: F,
      _reset: Z7,
      _resetDefaultValues: () =>
        c3(n.defaultValues) &&
        n.defaultValues().then((j) => {
          A7(j, n.resetOptions), c.state.next({ isLoading: !1 });
        }),
      _updateFormState: (j) => {
        s = { ...s, ...j };
      },
      _subjects: c,
      _proxyFormState: d,
      get _fields() {
        return l;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(j) {
        a = j;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return u;
      },
      set _names(j) {
        u = j;
      },
      get _formState() {
        return s;
      },
      set _formState(j) {
        s = j;
      },
      get _options() {
        return n;
      },
      set _options(j) {
        n = { ...n, ...j };
      },
    },
    trigger: D,
    register: J2,
    handleSubmit: L7,
    watch: R4,
    setValue: R,
    getValues: u1,
    reset: A7,
    resetField: Ls,
    clearErrors: H3,
    unregister: g2,
    setError: T2,
    setFocus: (j, A = {}) => {
      const E = W(l, j),
        b = E && E._f;
      if (b) {
        const U = b.refs ? b.refs[0] : b.ref;
        U.focus && (U.focus(), A.shouldSelect && U.select());
      }
    },
    getFieldState: j1,
  };
}
function P4(e = {}) {
  const t = $2.useRef(),
    n = $2.useRef(),
    [s, l] = $2.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: c3(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: c3(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current ||
    (t.current = { ...Su(e, () => l((o) => ({ ...o }))), formState: s });
  const i = t.current.control;
  return (
    (i._options = e),
    mu({
      subject: i._subjects.state,
      next: (o) => {
        hu(o, i._proxyFormState, i._updateFormState, !0) &&
          l({ ...i._formState });
      },
    }),
    $2.useEffect(() => {
      e.values && !I3(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions), (n.current = e.values))
        : i._resetDefaultValues();
    }, [e.values, i]),
    $2.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    (t.current.formState = pu(s, i)),
    t.current
  );
}
const _u = "_taskInfo_16yfz_1",
  Nu = "_form_16yfz_9",
  Eu = "_label_16yfz_21",
  Tu = "_input_16yfz_43",
  J = { taskInfo: _u, form: Nu, label: Eu, input: Tu };
function Pu(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    { register: i, getValues: o } = P4(),
    a = () => {
      const { name1: u, name2: C, name3: f, name4: d } = o();
      if (!u && !C && !f && !d) {
        n(!1);
        return;
      }
      n(!0);
      const c = o();
      let h = "";
      for (const y in c) c[y] && (h += c[y]);
      const v = { arrAnswer: l, answerInfo: { answer: h, correct: !1 } };
      u && C && f && !d
        ? (t(G("true")), (v.answerInfo.correct = !0), t(K(v)))
        : (t(G("false")), t(K(v)));
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: J.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Нажми на огоньки около верных вариантов ответа",
        }),
        r.jsxs("form", {
          className: J.form,
          onChange: a,
          children: [
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 1,
                  ...i("name1"),
                }),
                "Проектирование моделей в 3D",
              ],
            }),
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 2,
                  ...i("name2"),
                }),
                "VR-технологии для обучения сотрудников",
              ],
            }),
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 3,
                  ...i("name3"),
                }),
                "AR-очки для удаленной совместной работы",
              ],
            }),
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 4,
                  ...i("name4"),
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
const Ru = "_taskInfo_zbjsx_1",
  Ou = "_form_zbjsx_9",
  Iu = "_label_zbjsx_19",
  zu = "_input_zbjsx_37",
  w1 = { taskInfo: Ru, form: Ou, label: Iu, input: zu };
function Du(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    { register: i, getValues: o, setValue: a } = P4(),
    u = (w) => {
      w.preventDefault();
    };
  let C = null,
    f = null,
    d = 0;
  const c = L.useRef(!1),
    h = (w) => {
      (f = w.target), (document.body.style.overflow = "hidden"), y();
    },
    v = (w) => {
      (f = w.target), (c.current = !0), y();
    },
    y = () => {
      a("name1", ""),
        (d = 0),
        f && (C = f.closest("label")),
        C && C.style.setProperty("--var-width", "0%");
    },
    P = (w) => {
      const M = w.target;
      p(M);
    },
    x = (w) => {
      if (!c.current) return;
      const M = w.target;
      p(M);
    },
    p = (w) => {
      C &&
        f &&
        w === f &&
        C &&
        (d === 0 && a("name1", f.getAttribute("data-value")),
        (d += 3),
        d > 100 && (d = 100),
        C.style.setProperty("--var-width", `${d}%`));
    },
    m = (w) => {
      document.body.style.overflow = "auto";
      const M = w.target;
      S(M);
    },
    g = (w) => {
      if (!c.current) return;
      const M = w.target;
      S(M), (c.current = !1);
    },
    S = (w) => {
      if (f) {
        if (w.closest("label") !== f.closest("label") || d < 5) {
          a("name1", ""), n(!1);
          return;
        }
        if (C) {
          C.style.setProperty("--var-width", "100%");
          const { name1: M } = o();
          n(!0);
          const T = { arrAnswer: l, answerInfo: { answer: M, correct: !1 } };
          M === "2"
            ? (t(G("true")), (T.answerInfo.correct = !0), t(K(T)))
            : (t(G("false")), t(K(T)));
        }
      }
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: w1.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Вычеркни выбранный ответ",
        }),
        r.jsxs("form", {
          className: w1.form,
          onChange: (w) => u(w),
          children: [
            r.jsxs("label", {
              className: w1.label,
              onMouseDown: (w) => v(w),
              onMouseMove: (w) => x(w),
              onMouseLeave: (w) => g(w),
              onTouchStart: (w) => h(w),
              onTouchMove: (w) => P(w),
              onTouchEnd: (w) => m(w),
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: w1.input,
                  value: 1,
                  ...i("name1"),
                }),
                r.jsx("span", {
                  "data-value": "1",
                  children: "Водоснабжение и канализация",
                }),
              ],
            }),
            r.jsxs("label", {
              className: w1.label,
              onMouseDown: (w) => v(w),
              onMouseMove: (w) => x(w),
              onMouseLeave: (w) => g(w),
              onTouchStart: (w) => h(w),
              onTouchMove: (w) => P(w),
              onTouchEnd: (w) => m(w),
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: w1.input,
                  value: 2,
                  ...i("name1"),
                }),
                r.jsx("span", {
                  "data-value": "2",
                  children: "Машиностроение и робототехника",
                }),
              ],
            }),
            r.jsxs("label", {
              className: w1.label,
              onMouseDown: (w) => v(w),
              onMouseMove: (w) => x(w),
              onMouseLeave: (w) => g(w),
              onTouchStart: (w) => h(w),
              onTouchMove: (w) => P(w),
              onTouchEnd: (w) => m(w),
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: w1.input,
                  value: 3,
                  ...i("name1"),
                }),
                r.jsx("span", {
                  "data-value": "3",
                  children: "Генплан и транспорт",
                }),
              ],
            }),
            r.jsxs("label", {
              className: w1.label,
              onMouseDown: (w) => v(w),
              onMouseMove: (w) => x(w),
              onMouseLeave: (w) => g(w),
              onTouchStart: (w) => h(w),
              onTouchMove: (w) => P(w),
              onTouchEnd: (w) => m(w),
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: w1.input,
                  value: 4,
                  ...i("name1"),
                }),
                r.jsx("span", {
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
const Fu = "_taskInfo_vmqlr_1",
  Uu = "_task_vmqlr_1",
  Vu = "_taskAnswer_vmqlr_23",
  Bu = "_answer_vmqlr_43",
  $u = "_zero_vmqlr_63",
  Qu = "_taskZeros_vmqlr_75",
  Wu = "_none_vmqlr_115",
  bu = "_success_vmqlr_121",
  Hu = "_danger_vmqlr_127",
  o1 = {
    taskInfo: Fu,
    task: Uu,
    taskAnswer: Vu,
    answer: Bu,
    zero: $u,
    taskZeros: Qu,
    none: Wu,
    success: bu,
    danger: Hu,
  };
function Yu(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    [i, o] = L.useState([
      { value: "амбов", answer: !1 },
      { value: "юмень", answer: !1 },
      { value: "ольятти", answer: !1 },
      { value: "омск", answer: !1 },
    ]),
    [a, u] = L.useState({ value: "", answer: !1 }),
    [C, f] = L.useState(!1),
    d = L.useRef(null);
  let c = 0,
    h = 0;
  L.useEffect(() => {
    if (d.current) {
      const Z = d.current.getBoundingClientRect();
      (c = Z.left), (h = Z.top);
    }
  });
  let v;
  const y = L.useRef(!1),
    P = (Z) => {
      (document.body.style.overflow = "hidden"),
        (v = Z.changedTouches[0].target),
        p();
    },
    x = (Z) => {
      (v = Z.target), (y.current = !0), p();
    },
    p = () => {
      if (v) {
        (v.style.left = "auto"),
          (v.style.top = "auto"),
          (v.style.position = "absolute");
        const Z = v.offsetLeft,
          k = v.offsetTop;
        (v.style.left = Z + "px"), (v.style.top = k + "px");
      }
    },
    m = (Z) => {
      const k = Z.changedTouches[0];
      S(k.clientY, k.clientX);
    },
    g = (Z) => {
      y.current && S(Z.pageY, Z.pageX);
    },
    S = (Z, k) => {
      if (v) {
        const _ = Z - h - v.offsetHeight / 2,
          I = k - c - v.offsetWidth / 2;
        _ > 14 && _ < 112 && (v.style.top = _ + "px"),
          I > 0 && I < 270 && (v.style.left = I + "px"),
          _ > 45 &&
            _ < 85 &&
            I > 60 &&
            I < 227 &&
            ((v.style.top = 59.5 + "px"), (v.style.left = "139px"));
      }
    },
    w = (Z) => {
      (document.body.style.overflow = "auto"), T(Z);
    },
    M = () => {
      (y.current = !1), v && ((v.style.position = "static"), v.style.top);
    },
    T = (Z) => {
      if (v && ((v.style.position = "static"), v.style.top !== "59.5px"))
        return;
      n(!0),
        o(i.map((_, I) => (I === Z ? (_.answer = !0) : (_.answer = !1), _))),
        u(i[Z]);
      const k = { arrAnswer: l, answerInfo: { answer: Z + "", correct: !1 } };
      Z === 1
        ? (t(G("true")), (k.answerInfo.correct = !0), f(!0), t(K(k)))
        : (t(G("false")), f(!1), t(K(k)));
    },
    N = (Z, k) => {
      y.current && Z.target === v && T(k);
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: o1.taskInfo,
      ref: d,
      children: [
        s && r.jsx(e1, {}),
        r.jsxs("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: [
            "Перетащи часть слова к первой букве так,",
            r.jsx("br", {}),
            " чтобы получилось название верного города",
          ],
        }),
        r.jsx("div", {
          className: o1.task,
          children: r.jsxs("div", {
            className: o1.taskAnswer,
            children: [
              r.jsx("span", { children: "Т" }),
              r.jsx("div", {
                className: o1.answer,
                children: r.jsx("div", {
                  className:
                    o1.zero +
                    " " +
                    (a.answer ? "" : o1.none) +
                    " " +
                    (s ? (C ? o1.success : o1.danger) : ""),
                  children: a.value,
                }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: o1.taskZeros,
          children: i.map((Z, k) =>
            r.jsx(
              "div",
              {
                children: r.jsx("div", {
                  onMouseOut: (_) => N(_, k),
                  onMouseDown: (_) => x(_),
                  onMouseMove: (_) => g(_),
                  onMouseUp: () => M(),
                  onTouchStart: (_) => P(_),
                  onTouchMove: (_) => m(_),
                  onTouchEnd: () => w(k),
                  className:
                    o1.zero +
                    " " +
                    (Z.answer ? o1.none : "") +
                    " " +
                    (s ? (C ? o1.success : o1.danger) : ""),
                  children: Z.value,
                }),
              },
              Z.value
            )
          ),
        }),
      ],
    }),
  });
}
const Xu = "_taskInfo_7n64m_1",
  Gu = "_task_7n64m_1",
  qu = "_map_7n64m_23",
  Ku = "_towns_7n64m_37",
  Ju = "_town_7n64m_37",
  ec = "_answer_7n64m_63",
  tc = "_name_7n64m_79",
  G1 = {
    taskInfo: Xu,
    task: Gu,
    map: qu,
    towns: Ku,
    town: Ju,
    answer: ec,
    name: tc,
  };
function nc(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    i = [
      { top: 0, left: 0 },
      { top: 0, left: 0 },
      { top: 0, left: 0 },
      { top: 0, left: 0 },
    ],
    o = L.useRef(null),
    a = L.useRef(null),
    u = L.useRef(null),
    C = L.useRef(null),
    f = L.useRef(null);
  L.useEffect(() => {
    if (o.current) {
      const F = o.current.getBoundingClientRect();
      if (((P = F.left), (x = F.top), a.current)) {
        const Q = a.current.getBoundingClientRect();
        (i[0].top = Q.top + Q.height / 2 - F.top - 21.5),
          (i[0].left = Math.ceil(Q.left + Q.width / 2 - F.left - 10));
      }
      if (u.current) {
        const Q = u.current.getBoundingClientRect();
        (i[1].top = Q.top + Q.height / 2 - F.top - 21.5),
          (i[1].left = Math.ceil(Q.left + Q.width / 2 - F.left - 10));
      }
      if (C.current) {
        const Q = C.current.getBoundingClientRect();
        (i[2].top = Q.top + Q.height / 2 - F.top - 21.5),
          (i[2].left = Math.ceil(Q.left + Q.width / 2 - F.left - 10));
      }
      if (f.current) {
        const Q = f.current.getBoundingClientRect();
        (i[3].top = Q.top + Q.height / 2 - F.top - 21.5),
          (i[3].left = Math.ceil(Q.left + Q.width / 2 - F.left - 10));
      }
    }
  });
  const [d, c] = L.useState([
      { name: "Санкт-Петербург", check: !1 },
      { name: "Москва", check: !1 },
      { name: "Ростов-на-Дону", check: !1 },
      { name: "Краснодар", check: !1 },
    ]),
    h = L.useRef("transparent"),
    [v, y] = L.useState(!1);
  let P = 0,
    x = 0,
    p = 0,
    m;
  const g = L.useRef(!1),
    S = (F) => {
      document.body.style.overflow = "hidden";
      const Q = F.changedTouches[0],
        X = F.changedTouches[0].target;
      M(X, Q.clientX, Q.clientY);
    },
    w = (F) => {
      const Q = F.target;
      (g.current = !0), M(Q, F.pageX, F.pageY);
    },
    M = (F, Q, X) => {
      if (((m = F.closest("svg")), (h.current = "transparent"), m)) {
        (m.style.position = "absolute"), (p = m.width.animVal.value);
        const R = X - x,
          V = Q - P - p / 2;
        (m.style.left = V + "px"), (m.style.top = R + "px");
      }
    },
    T = (F) => {
      const Q = F.changedTouches[0];
      Z(Q.clientX, Q.clientY);
    },
    N = (F) => {
      g.current && Z(F.pageX, F.pageY);
    },
    Z = (F, Q) => {
      const X = Q - x;
      let V = F - P - p / 2;
      V < 32 ? (V = 33) : V > 300 && (V = 299);
      let D = X;
      D < -15 ? (D = -15) : D > 112 && (D = 112),
        (h.current = "transparent"),
        m &&
          (V > 32 && V < 300
            ? (m.style.left = V + "px")
            : (m.style.left = "299px"),
          D > -15 && D < 112 && (m.style.top = D + "px"));
    },
    k = () => {
      (document.body.style.overflow = "auto"), B();
    },
    _ = () => {
      (g.current = !1), B();
    },
    I = () => {
      g.current && ((g.current = !1), B());
    },
    B = () => {
      if (m) {
        const F = parseInt(m.style.left),
          Q = parseInt(m.style.top);
        let X = -3;
        i.forEach((R, V) => {
          if (
            R.left + 4 >= F &&
            R.left - 4 <= F &&
            R.top + 19 >= Q &&
            R.top - 7 <= Q
          ) {
            n(!0), (h.current = "#fff"), (X = V);
            const D = {
              arrAnswer: l,
              answerInfo: { answer: X + "", correct: !1 },
            };
            X === 3
              ? (t(G("true")), y(!0), (D.answerInfo.correct = !0), t(K(D)))
              : (t(G("false")), y(!1), t(K(D))),
              m &&
                ((m.style.left = R.left + "px"), (m.style.top = R.top + "px"));
          }
        }),
          X === -3 && n(!1),
          c(d.map((R, V) => (X === V ? (R.check = !0) : (R.check = !1), R)));
      }
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: G1.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsxs("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: ["Перетащи кнопку ", r.jsx("br", {}), "на верный город"],
        }),
        r.jsxs("div", {
          className: G1.task,
          ref: o,
          children: [
            r.jsx("div", {
              className: G1.map,
              children: r.jsxs("svg", {
                onMouseLeave: () => I(),
                onMouseDown: (F) => w(F),
                onMouseMove: (F) => N(F),
                onMouseUp: () => _(),
                onTouchStart: (F) => S(F),
                onTouchMove: (F) => T(F),
                onTouchEnd: () => k(),
                width: "20",
                height: "43",
                viewBox: "0 0 20 43",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  r.jsx("path", {
                    d: "M10 42.4463C13.115 42.4463 15.6402 41.9333 15.6402 41.3005C15.6402 40.6677 13.115 40.1547 10 40.1547C6.885 40.1547 4.35979 40.6677 4.35979 41.3005C4.35979 41.9333 6.885 42.4463 10 42.4463Z",
                    fill: "white",
                    fillOpacity: 0.5,
                  }),
                  r.jsx("path", {
                    d: "M8.22972 39.5961L7.25865 15.434H12.7442L11.7731 39.5961C11.7359 40.5471 10.951 41.3005 9.99999 41.3005C9.04897 41.3005 8.26696 40.5471 8.22972 39.5961Z",
                    fill: s ? (v ? "#DEFF7B" : "#EEA7A7") : "#9CE4E8",
                  }),
                  r.jsx("path", {
                    d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
                    fill: "white",
                  }),
                ],
              }),
            }),
            r.jsx("div", {
              className: G1.towns,
              children: d.map((F, Q) =>
                r.jsxs(
                  "div",
                  {
                    className: G1.town,
                    children: [
                      r.jsx("span", {
                        style: {
                          background: F.check ? h.current : "transparent",
                        },
                        className: G1.answer,
                        ref: Q === 0 ? a : Q === 1 ? u : Q === 2 ? C : f,
                      }),
                      r.jsx("span", { className: G1.name, children: F.name }),
                    ],
                  },
                  Q
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
const rc = "_taskInfo_kqup8_1",
  sc = "_clock_kqup8_21",
  lc = "_numbers_kqup8_39",
  ic = "_check_kqup8_61",
  oc = "_arrows_kqup8_149",
  ac = "_minutes_kqup8_171",
  uc = "_hour_kqup8_187",
  V1 = {
    taskInfo: rc,
    clock: sc,
    numbers: lc,
    check: ic,
    arrows: oc,
    minutes: ac,
    hour: uc,
  },
  ps = "" + new URL("hour-d47865e3.svg", import.meta.url).href;
function cc(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    i = L.useRef(0),
    o = L.useRef(50),
    a = { transformOrigin: `${o.current}% 50%` },
    u = L.useRef([
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
    [C, f] = L.useState(0),
    [d, c] = L.useState(0),
    [h, v] = L.useState(0);
  let y;
  const P = L.useRef(!1),
    x = L.useRef(!1),
    p = (N) => {
      const Z = N.changedTouches[0],
        k = Z.target;
      m(k, Z.clientX, Z.clientY), (document.body.style.overflow = "hidden");
    },
    m = (N, Z, k) => {
      (y = N.closest(`.${V1.hour}`)), f(Z), c(k);
    },
    g = (N) => {
      const Z = N.changedTouches[0],
        k = Z.target;
      w(k, Z.clientX, Z.clientY);
    },
    S = (N) => {
      if (!P.current) return;
      const Z = N.target;
      w(Z, N.pageX, N.pageY);
    },
    w = (N, Z, k) => {
      y = N.closest(`.${V1.hour}`);
      const _ = Z,
        I = k;
      i.current > 180 ? (o.current = 55) : (o.current = 53);
      let B, F;
      i.current >= 0 ? (F = i.current % 360) : (F = 360 + (i.current % 360));
      const Q = Math.floor(F / 30);
      F % 30 > 15 ? (B = Q * 30 + 30) : (B = Q * 30),
        B === 360 && (B = 0),
        B !== h &&
          ((u.current = u.current.map(
            (D) => (D.deg === B ? (D.check = !0) : (D.check = !1), D)
          )),
          v(B));
      const X = F % 360,
        R = X >= 0 && X < 90 ? 1 : X >= 90 && X < 180 ? 2 : X >= 270 ? 4 : 3;
      (R === 1 && C <= _ && d >= I) ||
      (R === 2 && C <= _ && d <= I) ||
      (R === 3 && C >= _ && d <= I) ||
      (R === 4 && C >= _ && d >= I)
        ? (i.current = i.current + 2)
        : (i.current = i.current - 2),
        y && y.style.setProperty("--rotate", `${i.current}deg`);
      const V = { arrAnswer: l, answerInfo: { answer: h + "", correct: !1 } };
      h === 180
        ? (t(G("true")), (V.answerInfo.correct = !0), t(K(V)))
        : (t(G("false")), t(K(V))),
        f(_),
        c(I);
    },
    M = () => {
      (document.body.style.overflow = "auto"), n(!0);
    },
    T = (N) => {
      if (!x.current) {
        n(!0);
        const Z = N.target;
        m(Z, N.pageX, N.pageY), (P.current = !0), (x.current = !0);
      }
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: V1.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsxs("div", {
          className: V1.clock,
          children: [
            r.jsx("div", {
              className: V1.numbers,
              children: u.current.map((N, Z) =>
                r.jsx(
                  "span",
                  {
                    "data-value": N.value,
                    className: N.check ? V1.check : "",
                    children: N.value,
                  },
                  Z
                )
              ),
            }),
            r.jsx("div", {
              className: V1.arrows,
              style: a,
              children: r.jsx("div", {
                className: V1.hour,
                onMouseEnter: (N) => T(N),
                onMouseMove: (N) => S(N),
                onTouchStart: (N) => p(N),
                onTouchMove: (N) => g(N),
                onTouchEnd: () => M(),
                children: r.jsx("img", { src: ps, alt: "hour" }),
              }),
            }),
            r.jsx("div", {
              className: V1.minutes,
              children: r.jsxs("svg", {
                width: "63",
                height: "95",
                viewBox: "0 0 63 95",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  r.jsx("path", {
                    d: "M30.9235 83.1408C30.0093 83.1408 29.3999 82.5314 29.3999 81.6172C29.3999 80.7031 30.0093 80.0936 30.9235 80.0936C31.8376 80.0936 32.4471 80.7031 32.4471 81.6172C32.4471 82.5314 31.8376 83.1408 30.9235 83.1408Z",
                    fill: "#008C95",
                  }),
                  r.jsx("path", {
                    d: "M33.0875 78.4396C32.9139 78.6901 32.7019 78.7284 32.4898 78.7668C31.9406 78.7568 31.3146 78.3227 31.1126 77.8118C30.7855 77.2141 30.2463 76.6548 29.6586 76.4328C29.3214 76.3843 28.9842 76.3359 28.7722 76.3743C28.7722 76.3743 28.7338 76.1623 28.8206 76.0371L28.5474 17.0745C28.5574 16.5252 28.8663 15.8124 29.2136 15.3116C29.3004 15.1864 29.3872 15.0612 29.3872 15.0612L30.207 14.1464C30.4674 13.7708 31.0167 13.7808 31.3055 14.1665L32.2203 14.9862C32.6343 15.4587 33.125 16.3552 33.0281 17.0297L33.348 78.064C33.2612 78.1892 33.1743 78.3144 33.0875 78.4396Z",
                    fill: s ? "rgba(255, 255, 255, .3)" : "#299EA6",
                  }),
                  r.jsx("path", {
                    d: "M30.7579 0.197183L30.905 0.157751C31.386 0.186618 31.612 0.441517 31.7303 0.883015L31.7773 89.3583C31.7485 89.8392 31.4936 90.0652 31.0521 90.1835C30.5711 90.1547 30.3451 89.8998 30.2268 89.4583L30.1798 0.983019C30.2086 0.502087 30.4635 0.276049 30.7579 0.197183Z",
                    fill: "#66BABF",
                    fillOpacity: s ? ".3" : "1",
                  }),
                  r.jsx("path", {
                    d: "M30.5424 81.8026C30.6896 81.7632 30.8367 81.7238 30.9839 81.6843C31.7592 81.6343 32.5844 82.3596 32.4873 83.1743L32.4197 92.3409C32.4697 93.1161 31.7445 93.9414 30.9298 93.8442C30.1545 93.8942 29.3292 93.1689 29.4264 92.3543L29.4939 83.1877C29.2968 82.4518 29.9537 81.9603 30.5424 81.8026Z",
                    fill: "#66BABF",
                    fillOpacity: s ? ".3" : "1",
                  }),
                ],
              }),
            }),
          ],
        }),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Передвинь часовую стрелку в верное положение",
        }),
      ],
    }),
  });
}
const Cc = "_taskInfo_smbtj_1",
  fc = "_task_smbtj_1",
  dc = "_label_smbtj_21",
  pc = "_input_smbtj_41",
  hc = "_answer_smbtj_47",
  s2 = { taskInfo: Cc, task: fc, label: dc, input: pc, answer: hc },
  f8 = (e) => {
    const { value: t, color: n } = e;
    switch (t) {
      case 0:
        return r.jsx(r.Fragment, {
          children: r.jsxs("svg", {
            width: "21",
            height: "30",
            viewBox: "0 0 21 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              r.jsx("circle", { cx: "16", cy: "5", r: "5", fill: n }),
              r.jsx("path", {
                d: "M16 5.5L1 29",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          }),
        });
      case 1:
        return r.jsx(r.Fragment, {
          children: r.jsxs("svg", {
            width: "18",
            height: "68",
            viewBox: "0 0 18 68",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              r.jsx("circle", { cx: "5", cy: "5", r: "5", fill: n }),
              r.jsx("path", {
                d: "M5 5.5L16.5 67",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          }),
        });
      case 2:
        return r.jsx(r.Fragment, {
          children: r.jsxs("svg", {
            width: "21",
            height: "42",
            viewBox: "0 0 21 42",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              r.jsx("circle", { cx: "16", cy: "5", r: "5", fill: n }),
              r.jsx("path", {
                d: "M16 5.5L1 40.5",
                stroke: "white",
                strokeWidth: "2",
                strokeLinecap: "round",
              }),
            ],
          }),
        });
      case 3:
        return r.jsx(r.Fragment, {
          children: r.jsxs("svg", {
            width: "11",
            height: "36",
            viewBox: "0 0 11 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              r.jsx("circle", { cx: "6", cy: "5", r: "5", fill: n }),
              r.jsx("path", {
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
  hs =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABZCAYAAABsbDn0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaWSURBVHgB7Zx7iFVFHMd/u2qomW1oD8PyUamRSBa6mlrmo1IUNK0Ukgr9Q6kILMrsgYhl9KKHSSRkWUilZJnlHxo+iqw0LShFqdRKS420NN86fX47Z+3u3de59+6ZmePuB77MvWfP3TPnd+Z1fvObESkAY8w49Bs6gnagrehL9CoqkvoMBphrquY4erLeGogbb492m5rZhG6S+gQ33BgtNPH4B01HZ8jpDjfZCa03ufORpIzGcU/k5q4kmYhGoPMldw5KyqjROBikJ8kRNBxNQWdK/syTlFGhN4l6lxnoLHQhGiV1w27Upqio6KSkFYwzxSTDO5JmuIHJxo5PkuBWSSHFZPxiNJXPT6FGkgyDucZlkjbI9J3GDSfRGjTApGTkXERGl5EOEnccRlvQe2g12kBDfUBCBON8a/yyB81BnSQwtOQcIm0q/tHxVDdK0RYJhGJ0EXoC/SR+2ROSYZRTDSMlqD3JJvFXio6h3hjoGwmE4vIPZGobSW+0QvzQROzIPFwoQSONdTP4YC0aLYFQnH2AErQIteRjd7RU3NICbZO0wJNcFj1V7fLfQAdMMsxC50maMNYdOgo1jr6vMMlwnwRGzsN4bkKdVs2k7tmHSkMb5+RKUh69ErQY45dIIORjnO8lOXSsc7z8C4aaZOyrxSXigXyMsxj9LcmgvWSbjO8XoAloc9TW3YA6Ru1gO9Q2+twD9Q+iQScTC0xyHES3Rdd53OTGXjRUfGLsUzpqkmUV+szkziE0UuqAvJ1OZEAd8OukYjUIhR9Qr0L9RPm0OWVw4Z0kX0mYXIHGS4EU5K6k9PQg+ULiTw5qT/QJ6oo6SrLsR12ih+gHDNQnque1cQJNiH7TFH1ukmeV+IZMPGqsA70m7o/OLTW2tztm3DBOfEMmhqB91WTwYdQcPWbcsx9NNLYD8WqgDqZyaMorqAl62/jlF8mROp8/MnZOqlSsV08b6pWoM9og/ulBA71OQsPYCT3fvJ5LnvMe5+TBQvHPzRgotp/a2bQsmWpNskf8s5KqdX2cE52VHDL0J8lr4p9ePKhr45zoslops8WOXH2i83JTMVCt9+7UOJSe70hCmLS7TuzsSo04DwWJivSnkkOwZkL8ijrxwA5Xd4LraqV8jZaIfzRGYIapIT7aSxBRVN+1inUV/wyj9Hxc1R+8RVhhIK3zWsV09DxJ/LEN9anKteE9/MzY1w2d7vEZI3Q3xpmdfdBHm1MBMmVI/hC/jDHRjG4m3o0TCP1Q3+yDoRinlfjnjuwDQYS86uuy+GcrVbyCX9t7yTF2NY4rNFjhA3Q045iux9DghZnZJ/sepSoPijt0pkQjx2aJjV5dL9YJp6PlpKa488PYuW/XvIlihdD4Ljm9xT3alNyDgdS3tJR2Zld1J3ptkMlgO5KNqLn4QaeLB2GgKmduvTbIZGo7yUviDw3Q1DjHmeic7D+G8Pqg9T+E9Z86Sh+WGSTuw5+j4SE6C1kSXV+70gESBn+hvhhok7gGw4wwycf1FMrL5flNvOQYu6ZCF56oS0BdE4WsMHbFu2hSUssWy8Awt5C8L7bLvgalZVeCc1GjpMc52kXqHHU+i/R9oa8Ww2l31ibalXMBNcyNaLmkBy3dZVXfxTjnX9RF0kVZW+zCONretJX0oOOcNfrBhXE6SLqYUz6X1eAmrYg2AadWKrowTpq2ppqQuWrHhXFCcIHGQVdHf5h5IDHjMABsjfrz8XIJnxfEzpsfEhdgmEdMePyONLprevRdI01vr+4ekqxWOUdvJsxDqDulQ19nXkQ7xPpz3A8zjN0Rbp4Jg12oJeqXkT8NC9YNHwdWdw8u3sqnkUwW/wvqF6GzKTmnjEHeGvH9RHU/cNLNGhvBOR8NE/+0j9yzteJqEKi9wFWSHBp4vVfssEHblCFiQ3t1c7ZsQzwnIUHJGWqSY2ct177L2L3IxqKrUS8JDTLV01gv/48xb1o3HXoajUfzTeVFJ7qT7uro88Rarj1Nz5XQIZOd0fasG9UtIHSZ0RJjt4d4C3XL+E0rtC7LMIOjv6lPeitK1KvpBG6iJNLzWiWM3R+j1lV7nDMwwzjPZhzXdee6u26d+6Z9vJXPFTvLqU9+AVpN7/FzjN9tlv8jwDIDLXWDxmJJo4eBJ9oCPYM2oI2m8i4qsTcz4twx0W/GZB0Pr5GNAxkfnWWM5eheY5c+6mbSY3P4X02i/9FfTie4oUvRA6bAYCVjh/yl0kBlTIwFHQ00UBlKTrPTYkyTdv4DfNhw5wOwyIEAAAAASUVORK5CYII=",
  ms =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABBCAYAAAB2FzKyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQtSURBVHgB7ZuLddpQDIZFTgagE9QjkAnqbkAmaDIBdIKQCaATkE5AO4HZgHQCuxPQTPBX4l4Hx28bY8uY7xwdg/ELWdLVlWUixQAYszgsMxaPZY8jPotLLTGijhFF8GLCMmaRz59j34tYjEajZ+oL9s4/2Tu9tNYwjvy2sMspy85u1xSeVbh++EIfYn/et67i4egye3x0n6ZZw9yIMWnGKksDPss30gqMa+2gh8aUdUMNAWPu/1gC0sMLGhoZT1YUjBVt+KPPsmdxSRdrdB2zYALnOYNzU2zoRGrnUXzyKS+WVC7X0cAd51uvVJNTXG9G/VFSQCZ+1uY2+oWtZMxazz0gb/NARkEO9Yc//L8COoHb2Pc1K0KWv1nAB/8Z/ZF/W/PigfqHxNHJKa53iFEw+caczBwrSkDGZFcsUyt9RhQVpjDPVaxsxEoSBS1peARkAnyp2CXBfELDxGHxym4cup7s5FrRO0c6D79YHossK5FHsdIWvHiiYRGw3OcF+7Q8CjQ8HJYdcibR7xbFG0kCKaOaS8NF3O8ubTQc4ViKPXk+dCFsWVFf4yvF9cSK1nQlxE1becPak2SydsZ6gQRpKxsr3F0QqWlCqCjdxfh2+Zu28qqoJKlh6Op6SbZpK8MpzBCTzCw+pU1nwnqUmNs53W9M/XDvbdac76Ao/vGOzgwbraQhM9LNW9YPrcUovhlS99LeTBGQFmCaNbQiJWM9IYIvZg69zwNLF/NaAebhqQ+duPHr7bSRjC8orFo4pIvX+ADXacJpK4pS0ghIFxPYZrhwReetiYK1LIkNGnOtLct3LVOYL6Q3IXVZllqaXX1qjx/2fJLXOSW235KG/A+mx7MNJB1ZxM6dl9N5aLE9OxeYLuK22CAlmcSxlz0qqpLOLhpjffSlzVqwd81H85TN9vvxgBfGDZpGHmBWmUf6qGBdXaUHb9QsUkOSkanKEyWHxVdtXXxxL2iONSLBF8atq064d0XW1feauViSPMA9TjXM4/B7qobMDHyYXrFULkFRiV4B/r6lekmizO820DIyolnX2yEj70H9ZNZHLNnsyqKCCtsWvTZymFBnKOuR6lUmHDLvDXYLyg/jcmclOJdJTsWywjdFV5Fz1Qnubc49s4EpBRexwvHFyKp19n2N80XR0Z6JfAvxEIsPMPOxqq+3xY+xKrmfDmsSMhQlipjm7FPVhRax/csqW0+zL8yDhfc7CNMWWWY/D+XxUvYvmmPqsSaBL8iFrQ+hZEnD/smqjDOOk5We6GodR+QN9gr7FI18fsq6ecHxovvosqa6INvtxDLFQtNGNq/gmFHr6v+LCMh2u/fJLIyVpimx0HLRp2JeHhnWkijtRqzOh6kqzKCprHtukBzW5xnbORdjHVXBR7c7xCO6kiTidv5graUMVkGrQcWaqrBypFliQQr4D1tzcAMLLY9wAAAAAElFTkSuQmCC",
  xs =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAA+CAYAAADZAm74AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYgSURBVHgB7ZxrbBRVGIa/LaVAvRS8cFG8gw2IgrWNosYLQjUm3kkhGjWEH0ZDMcoPookBCZgIWE00QU1AY4hIFMF6ISgmBLyBgShKBYMiIoJiCxYrItDP9/VM7brZbmdmZy8zc57kyXR3Z3Y659uZM+c754yIC1T1TLgaThZLcYBg9IVb1dACzxdL4UEgntH/85BYCguCMAgeTgnMB7y0iaVwIAA1mp698GSx5B8U/FlwjXbNjWLJGaUdf6Cgy7F4EB6AC+E0eHWGbY+IJbcgKMfDN50z4QjcopnZBU8US25BIT+s3lgplpxS4iyvEG8MFUtOKcWv/yQsLxZvrHazklNvVcIEbIF7EonEYbF0C8+Y6+A54o39KPR6+BSsTP4Ar0uc5QgstsFNcCPcAQ/i/c/gXV19MT4rg7fBUyXOsBKHO9U/DTABh8ApsA3+DFszbLM1w/9zn7POHjgbjoZ9JW7wcqPmLssvG+Cz8JCHbZ6DiZT/4xq4HK5Is/52uAiOkriAg+0Jv9H8M007L3v3wH0utmESdaTEBRzsJM0/R+FG+KqatpNbZkkM6Gj5F6Kx2ANWObqF2YZXJAaU4Bd4FZZPSzjoCWORo+MZc4GYdkZYeAQ/Jp5tS9Am2isRhZXvaRIuBsIGyF7VsyWiMDDnSTipgOMlojAwNRJehiS/UNNYngEHSshhHdNLwksPBOFCLHkLzTs25vwYrFq8PybMeTmmUvZheYqEk2OOZWk+2wK/hvvhMrgWgfqbH+CY+2PRGzbjvTbJEnzfACwq8V1rJSAYmL8k3GeNGxS+CxfAS+D9kMFh4NhbuwIO5msU7kHxgJrU0jtwLBwXWHDUXSok6hxzll+oh3FzWHcAnAnbne0bYYUEACv/18TS0WHIPNxCFG5ZdxtgnWosPoYzpLMdeJM47SzYHz7K9aD3KxI2WqeWVF5S04jNVG6zM2z/Efwh6TXPpHLxAOuYl7G8VyyprIdT4SF4Jxwn5s7vF/gnnCCdZ5obXoRTIC+V5aiLPs+0MgNzPZYcXBGmtEy+4I0Rbxz6SDCsgleKKeubEZwPu1qRgWFj7CsJ7y1zWOG4iQkITku6D3kqsr/fjhHLP7y9Zl/UGek+ZGBqJX0DzZJ7WI3Up/uAgbHzXQpL2hFKDMwcuE5MRWfJPyNxOTsh9c0SVD5NYgaPzxdLIeCo1mUIzh2aNHLovz+cqE2HnPfCZB9zR+x2tndr+WMpnAvbMrZd1KTUn4eXiyVfsEppythyxWWO7ZsxYtLmlvzAO+Q1rlr7Tp7nAcjp5OyIKhVLrtgJazylYdRkXZk/mieWoGkXk59rwJXqDc/5MQSHeSP2eh4nlqD4UUxDc1VHd7iX7Oi/YENmWzeLxSsbxNxEvZ70HhOkjbAa5dqYPEbBb13xPRwt0eRLMen9agmOJbAeBd+MK842Zx83wPfh3MAGjeDLn9ToUuscYxWcDIfBfrAPHAHfgpy4xWcdNKkpCz5rZ552djEns0M9dpIRX30w2FGdmMZQ1PgOVuEX3CoeUTOlhJ1nF0FOtLpUzICPOfi+BeIRv4HhL+BbeLpEi5koxMclAJxA9XLqZM94rvwJdsau1cckeuyWgEAZtfsNCvEVGIfFMLABbkXCJikSfAcGvwbeudwuRXQwWcIRmbukSMjmjGFwmrGYBI9K8HwCf5X8oY5FQRA5r+1iMgGDJDhYQJzSt0hMf0U/eBm8RczQIfa6en02QXeUSpRygGoemLBbg+V3zfyQhmFOGyJIOKW+t0SJAAuJzwqYBQdrynMA0uyTj1vhuOGfNDu4z5XwWokaOKipap6IkS2NHnfNfQ9X0wr3A1vwo2BPiSpqRr4PhWPhYk2fnsgE168TH2C7+eqPiRIncMCcpv62y8LhZeRuOFx8oiavxcmyf6h7eIbHb1gwDnp8NwXDM4TPoAlk0pSaqQ8cCtTqMjC/SRzBgVeoyaymckDNpWeidjPVwed+l6o7lktcwcE/kaZANquPNLiHfbKu46O06rTruzZe9s6VuKLmOWYvqGmXdPCeupixFeD/wHbWrWr6VqbDT2HQjdPAyUvlh4Lg4EFOo2M+an02Wde48A+YayawA/FbIwAAAABJRU5ErkJggg==",
  vs =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABWCAYAAACARLW6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASBSURBVHgB3ZvhddpADIBFXv+XTlBnA3eCOhOETJBsEDJB3AmSTkA6AXQCkglIJrA7AXQCVeJk4hgTG5Bkp997x5mzsa3TnU6nOwA6BBGvKS0ojSkN4SNDAkT4ljtQ4BN0R1L5zlr6S3k2GAx+cQFrkLIVpd9UtpKyK84oPVGKKOV0LocuoZdK8H3mlLLSdz4e7vgdn0ugS6Tf7Muy4dy6D56AIxj6zS0dxrA/w4ZzYz5w6UNSe/zAW7DjK394GQUWZAz/A6SdK7SH+1DEz/PQUA62zCgN3Uw3bg+gmqTV53lYuQTsuK8WeDS5Q0x0WyakpRc+oCaXcu4hkKXTOZLETfszCXVj2uQKy+ME+4KZmYb45hC0swI/VkcJJBpgt59N5xObTgyOIg+kkVx2TJPL5T556V55KWdief4A2lSemN2U0oiTlA0ln1bMaIY6LOWZ7GHHDe+3xLbetgiT1TyMyw7xmNuQggVSO1YvvYsJWIGhiXmSoYJVPNkhTETZJfjxSOnMzB9z1k4KVmCwWpe4bb2smIMlGDSToR/2zRqDqV6iLXz/ORq4RnWewjnYOpTMuIi9mUG1FaPtZKzgHjzgB6Ft/8nQOyCIIWhuJUwEXYChs2qy9BTGI6Yw9gymb6wchqnBd9CNAeTm1mwXaOMdWAZI3hUmRn1S6ICiySWgyw01NZ/xpgLPw4sp9aJUznNzLotgP/h3FyTMI/QR3G/GOseu+kxbsP3KwWYFrbdgWHJvw+IjaOYW200hUugzGCI9d9iOBfQZPGxiN5XfDSXvT9PDEKk8FtsYQQtOpHZ5ELyG48nrCkV7kRwnaGkR6eYPqMdsxzMK1yqTfGolFE8feHTPQYeZaJxffL0ZSTRT9K1IcvbsU7AGj/e4lyVNRHJP7pt1M+EFGkz8qhO8l5prWIM/IYRruUl9o/QD6ima0TOlcwxGgnd41PVP1tocLWNzNTXJNT6quU4zOpRpCjWovGjhYefrk7JHrU4gyjLQ5bSzfW8YXCMtVPvSoUGSEegRa96vlUBUg5NKLb6ALr5TD3xrji2CKefgBQaLZr3WyvdX0dLgHUHW4wT4NIcVWbgvoMCuNdaEsin4tW2bYCSGGMIcfTE129zMEvAl1RxQNwJhcD88l/KZHJSHgHXkVFT+AP6ob/MvNDSGbtAeoDcC+Q1sb5mBMoVAZ9ANOShTtnI34E8EyqwF4o4pyx/P4EsEylTHoeYtjrqoeyJVgf6AL2ZGoSsSUKYqUC75A/iQgyUYwrSxHMfirGZowyN0ATb/AfBQTDbMtulDbMotrJ/J0kvjznqOzVFtcrQ0pfQZgiVkr/xYk9vJsn8tuB0oafpLZh0JGLC32cYw1ahqZ5e2ckqnsN1kZ73ay4DNlm+zVCnXl2PmGRpuNztUQ1HDZXx+VYqNl/OLzv+7XQXbrfpdljQ0lL7kPcVvB7ZfxpxUro+gT0i/aCvMZm0Jw+CsGeDXAV8Xf4uN5HXw7uKr3mmjDnz17Yq+keL2ONNVfGJ/MJjjtFKWSDNcYN/3/lT5CE3pH52K0SNl2+kcAAAAAElFTkSuQmCC";
function mc(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    { register: i, getValues: o } = P4(),
    a = () => {
      n(!0);
      const { name1: f } = o(),
        d = { arrAnswer: l, answerInfo: { answer: f, correct: !1 } };
      f === "2"
        ? (t(G("true")), (d.answerInfo.correct = !0), t(K(d)))
        : (t(G("false")), t(K(d)));
    },
    u = [hs, ms, xs, vs],
    C = [
      { nameRU: "Астрахань", nameEN: "Astrakhan" },
      { nameRU: "Казань", nameEN: "Kazan" },
      { nameRU: "Нижневартовск", nameEN: "Nizhnevartovsk" },
      { nameRU: "Комсомольск-на-Амуре", nameEN: "Komsomolsk-na-Amure" },
    ];
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: s2.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Выбери верный силуэт региона",
        }),
        r.jsx("form", {
          onChange: a,
          className: s2.task,
          children: C.map((f, d) =>
            r.jsxs(
              "label",
              {
                className: s2.label,
                children: [
                  r.jsx("input", {
                    type: "radio",
                    className: s2.input,
                    value: d,
                    ...i("name1"),
                  }),
                  r.jsxs("div", {
                    className: s2.answer,
                    children: [
                      r.jsx("img", { src: u[d], alt: f.nameEN }),
                      r.jsx("span", { children: f.nameRU }),
                      r.jsx(f8, {
                        value: d,
                        color: s
                          ? o().name1 === "2"
                            ? "#99CC00"
                            : "#CC0000"
                          : "#008C95",
                      }),
                    ],
                  }),
                ],
              },
              d
            )
          ),
        }),
      ],
    }),
  });
}
const xc = "_task__info_ejqpt_1",
  vc = "_form_ejqpt_9",
  jc = "_numbers_ejqpt_23",
  yc = "_numbersActive_ejqpt_23",
  gc = "_userAnswer_ejqpt_57",
  wc = "_range_ejqpt_65",
  kc = "_progress_ejqpt_207",
  l2 = {
    task__info: xc,
    form: vc,
    numbers: jc,
    numbersActive: yc,
    userAnswer: gc,
    range: wc,
    progress: kc,
  };
function Mc(e) {
  const [t, n] = L.useState(!0),
    s = T1(),
    { selectAnswer: l, checkClick: i, active: o } = e,
    [a, u] = L.useState("0%"),
    [C, f] = L.useState("0"),
    d = (c) => {
      const h = c.currentTarget;
      u(h.value + "%"), f(h.value), n(!1), l(!0);
      const v = { arrAnswer: o, answerInfo: { answer: h.value, correct: !1 } };
      h.value === "50"
        ? (s(G("true")), (v.answerInfo.correct = !0), s(K(v)))
        : (s(G("false")), s(K(v)));
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: l2.task__info,
      children: [
        i && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        r.jsxs("form", {
          className: l2.form,
          children: [
            r.jsxs("div", {
              className: t ? l2.numbers : l2.numbersActive,
              children: [
                r.jsx("span", {
                  style: t ? { display: "block" } : { display: "none" },
                  children: "0",
                }),
                r.jsx("span", {
                  style: t ? { display: "none" } : { display: "block" },
                  className: l2.userAnswer,
                  children: C,
                }),
                r.jsx("span", {
                  style: t ? { display: "block" } : { display: "none" },
                  children: "100",
                }),
              ],
            }),
            r.jsxs("div", {
              className: l2.progress,
              children: [
                r.jsx("input", {
                  type: "range",
                  className: l2.range,
                  min: "0",
                  max: "100",
                  step: "10",
                  defaultValue: "0",
                  onChange: d,
                }),
                r.jsx("span", { style: { width: a } }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Lc = "_taskInfo_ekrwu_1",
  Zc = "_task_ekrwu_1",
  Ac = "_taskAnswer_ekrwu_23",
  Sc = "_answer_ekrwu_45",
  _c = "_zero_ekrwu_63",
  Nc = "_taskZeros_ekrwu_75",
  Ec = "_none_ekrwu_113",
  Tc = "_success_ekrwu_119",
  Pc = "_danger_ekrwu_125",
  O1 = {
    taskInfo: Lc,
    task: Zc,
    taskAnswer: Ac,
    answer: Sc,
    zero: _c,
    taskZeros: Nc,
    none: Ec,
    success: Tc,
    danger: Pc,
  };
function Rc(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    i = [
      { value: "0", answer: !1 },
      { value: "00", answer: !1 },
      { value: "000", answer: !1 },
      { value: "0000", answer: !1 },
    ],
    [o, a] = L.useState(!1),
    u = L.useRef(null),
    C = L.useRef(null),
    f = { top: 0, left: 0, bottom: 0, right: 0 };
  let d = 0,
    c = 0;
  L.useEffect(() => {
    if (u.current) {
      const k = u.current.getBoundingClientRect();
      (d = k.left), (c = k.top);
    }
    if (C.current) {
      const k = C.current.getBoundingClientRect();
      (f.top = Math.round(k.top - c)),
        (f.left = Math.round(k.left - d)),
        (f.bottom = Math.round(f.top + k.height)),
        (f.right = Math.round(f.left + k.width));
    }
  });
  let h;
  const [v, y] = L.useState(null),
    P = L.useRef(!1),
    x = (k) => {
      (document.body.style.overflow = "hidden"),
        (h = k.changedTouches[0].target),
        m();
    },
    p = (k) => {
      (h = k.target), (P.current = !0), m();
    },
    m = () => {
      if (h) {
        if (h.style.position === "absolute") return;
        h.style.position = "absolute";
        const k = h.offsetLeft,
          _ = h.offsetTop;
        (h.style.left = k + "px"), (h.style.top = _ + "px");
      }
    },
    g = (k) => {
      const _ = k.changedTouches[0];
      w(_.clientY, _.clientX);
    },
    S = (k) => {
      P.current && w(k.pageY, k.pageX);
    },
    w = (k, _) => {
      if (h) {
        const I = k - c - h.offsetHeight / 2,
          B = _ - d - h.offsetWidth / 2;
        I > 14 && I < 112 && (h.style.top = I + "px"),
          B > 0 && B < 270 && (h.style.left = B + "px"),
          f.top - 10 < I &&
            f.bottom + 10 > I &&
            f.left - 30 < B &&
            f.right + 30 > B &&
            ((h.style.left = f.left + "px"),
            (h.style.top = f.top + "px"),
            v &&
              v !== h &&
              ((v.style.position = "static"),
              (v.style.left = "auto"),
              (v.style.top = "auto")));
      }
    },
    M = (k) => {
      (document.body.style.overflow = "auto"), N(k);
    },
    T = (k) => {
      (P.current = !1), N(k);
    },
    N = (k) => {
      if (h && (h.offsetTop !== f.top || h.offsetLeft !== f.left)) {
        (h.style.left = "auto"),
          (h.style.top = "auto"),
          (h.style.position = "static");
        return;
      }
      n(!0), h && y(h);
      const _ = { arrAnswer: l, answerInfo: { answer: k + "", correct: !1 } };
      k === 1
        ? (t(G("true")), a(!0), (_.answerInfo.correct = !0), t(K(_)))
        : (t(G("false")), a(!1), t(K(_)));
    },
    Z = (k) => {
      P.current && ((P.current = !1), N(k));
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: O1.taskInfo,
      ref: u,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Перетащи верное количество нулей в ячейку",
        }),
        r.jsx("div", {
          className: O1.task,
          children: r.jsxs("div", {
            className: O1.taskAnswer,
            children: [
              r.jsx("span", { children: "1" }),
              r.jsx("div", { className: O1.answer, ref: C }),
              r.jsx("span", { children: "+" }),
            ],
          }),
        }),
        r.jsx("div", {
          className: O1.taskZeros,
          children: i.map((k, _) =>
            r.jsx(
              "div",
              {
                children: r.jsx("div", {
                  onMouseLeave: () => Z(_),
                  onMouseDown: (I) => p(I),
                  onMouseMove: (I) => S(I),
                  onMouseUp: () => T(_),
                  onTouchStart: (I) => x(I),
                  onTouchMove: (I) => g(I),
                  onTouchEnd: () => M(_),
                  className:
                    O1.zero +
                    " " +
                    (k.answer ? O1.none : "") +
                    " " +
                    (s ? (o ? O1.success : O1.danger) : ""),
                  style: _ === 3 ? { width: "128px" } : { width: "auto" },
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
const Oc = "_taskInfo_4jowp_1",
  Ic = "_form_4jowp_11",
  zc = "_input_4jowp_25",
  Dc = "_value1_4jowp_41",
  Fc = "_value2_4jowp_47",
  Uc = "_value3_4jowp_53",
  Vc = "_value4_4jowp_59",
  Bc = "_label_4jowp_65",
  r1 = {
    taskInfo: Oc,
    form: Ic,
    input: zc,
    value1: Dc,
    value2: Fc,
    value3: Uc,
    value4: Vc,
    label: Bc,
  },
  C3 = (e) =>
    r.jsx(r.Fragment, {
      children: r.jsx("svg", {
        id: e.id,
        width: "89",
        height: "92",
        viewBox: "0 0 89 92",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: r.jsx("path", {
          d: "M38.5932 0.217043C37.2909 0.325565 36.0972 0.542609 34.9035 0.759652C32.4075 1.19374 30.02 1.95339 27.6325 2.93009C25.3535 3.79826 23.0746 4.992 21.0127 6.29426C19.9275 6.94539 18.9508 7.70504 17.8655 8.4647C16.8889 9.22435 15.9122 9.984 14.9355 10.7437C12.9821 12.3715 11.2457 14.1078 9.50938 15.9527C6.1452 19.6424 3.43216 23.9833 1.69581 28.6497C0.827637 31.0372 0.285028 33.5332 0.0679848 36.1377C-0.149059 38.7423 0.176507 41.3468 0.719115 43.8428C1.37025 46.4473 2.34694 48.8348 3.54068 51.0052C4.73442 53.1757 6.1452 55.2376 7.88155 57.0824C9.07529 58.4932 10.3775 59.687 11.6798 60.8807C12.765 62.183 13.8502 63.4852 15.044 64.679C15.9122 65.5471 16.8889 66.4153 17.8655 67.175C18.8422 67.9346 19.8189 68.8028 20.7956 69.5624C22.8575 71.0817 24.9195 72.384 27.1984 73.5777C29.4774 74.7715 31.7563 75.7482 34.2523 76.3993C35.4461 76.7249 36.7483 77.0504 37.9421 77.376C39.2443 77.593 40.4381 77.8101 41.7403 77.9186C43.0426 78.0271 44.2363 78.0271 45.5386 77.9186C46.7323 77.8101 48.0346 77.593 49.2283 77.2675C50.4221 76.9419 51.6158 76.5078 52.8095 76.0737C54.0033 75.5311 55.0885 74.9885 56.1737 74.4459C58.3442 73.2522 60.4061 71.7329 62.2509 70.105C63.2276 69.3454 64.2043 68.4772 65.0725 67.609C65.9407 66.7409 66.9174 65.7642 67.7855 64.896C68.3282 64.3534 68.7622 63.7023 69.3048 63.1597C69.4134 63.0511 69.4134 62.7256 69.3048 62.617C69.1963 62.5085 68.8708 62.5085 68.7622 62.617C67.3515 64.0278 65.9407 65.4386 64.5299 66.8494C63.8788 67.5005 63.1191 68.1516 62.3595 68.8028C61.5998 69.4539 60.8402 70.105 60.0805 70.6477C60.0805 70.6477 60.189 70.6477 60.189 70.5391C58.9953 71.4073 57.8015 72.2755 56.4993 73.1437C55.197 73.9033 53.8948 74.663 52.484 75.2056C51.5073 75.6397 50.6391 75.9652 49.6624 76.1823C48.6857 76.5078 47.6005 76.6163 46.5153 76.8334H46.6238C45.5386 76.9419 44.4534 77.0504 43.2596 77.0504C42.0659 77.0504 40.9807 76.9419 39.7869 76.8334C38.2676 76.6163 36.6398 76.2908 35.1205 75.8567C33.6012 75.4226 32.0819 74.88 30.5626 74.2289C28.8262 73.4692 27.0899 72.601 25.3535 71.6243C23.6172 70.5391 21.9894 69.4539 20.4701 68.2602C19.0593 67.175 17.757 66.0897 16.4548 64.896C17.4315 65.4386 18.4082 65.9812 19.3849 66.5238C20.4701 67.0664 21.6638 67.609 22.8575 68.0431C24.0513 68.4772 25.245 69.0198 26.4388 69.3454C27.6325 69.7795 28.9348 70.105 30.1285 70.4306C31.4308 70.7562 32.6245 71.0817 33.9268 71.2988C36.5313 71.7329 39.1358 71.9499 41.6318 71.9499C42.9341 71.9499 44.2363 71.9499 45.5386 71.8414C46.8409 71.7329 48.1431 71.5158 49.4454 71.4073C50.7476 71.1903 51.9414 70.9732 53.2436 70.7562C54.5459 70.4306 55.7396 70.105 56.9334 69.671C59.3209 68.8028 61.4913 67.7176 63.6617 66.4153C65.7236 65.113 67.7855 63.5937 69.5219 61.9659C71.3668 60.2296 72.9946 58.3847 74.4054 56.3228C75.8162 54.2609 77.1184 52.199 78.0951 49.92C79.0718 47.641 79.8315 45.2536 80.3741 42.7576C81.3508 37.657 81.3508 32.448 79.94 27.456C79.2888 25.0685 78.3122 22.681 77.0099 20.4021C76.4673 19.3169 75.8162 18.2317 75.0565 17.255C74.2969 16.2783 73.5372 15.3016 72.669 14.3249C71.8008 13.4567 70.9327 12.5885 69.956 11.8289C69.5219 10.4181 68.4367 9.65843 67.3515 9.0073C65.2895 7.59652 63.0106 6.5113 60.6231 5.42609C57.0419 4.0153 53.2436 2.93009 49.3369 2.38748C49.3369 2.27896 49.2283 2.17043 49.1198 2.17043C49.1198 2.17043 49.1198 2.17043 49.2283 2.17043C49.0113 2.06191 48.7942 1.84487 48.5772 1.73635C48.3602 1.62783 48.1431 1.41078 47.9261 1.30226C47.709 1.19374 47.3835 1.08522 47.1664 0.868174C46.8409 0.759652 46.6238 0.65113 46.2982 0.542609C45.7556 0.325565 45.1045 0.217043 44.5619 0.217043C43.6937 0.108522 43.0426 0 42.3915 0C42.2829 0 42.1744 0 42.0659 0C40.8722 0 39.6784 0.108522 38.5932 0.217043ZM40.8722 0.759652C41.9574 0.759652 43.0426 0.759652 44.1278 0.868174C44.8875 0.976696 45.7556 1.19374 46.5153 1.41078C46.9494 1.62783 47.492 1.84487 47.9261 2.17043C47.9261 2.17043 47.9261 2.17043 48.0346 2.17043C47.2749 2.06191 46.4068 1.95339 45.6471 1.95339C43.0426 1.73635 40.5466 1.73635 37.9421 1.95339C36.6398 2.06191 35.3375 2.27896 34.1438 2.496C32.9501 2.71304 31.6478 3.03861 30.4541 3.4727C29.2603 3.90678 28.0666 4.34087 26.8729 4.88348C25.6791 5.42609 24.5939 5.9687 23.5087 6.61983C21.3382 7.81356 19.1678 9.22435 17.2144 10.8522C15.261 12.48 13.5247 14.2163 12.0054 16.1697C10.4861 18.1231 9.07529 20.185 7.99007 22.464C6.79633 24.743 5.92816 27.1304 5.27703 29.5179C4.6259 32.0139 4.19181 34.5099 4.08329 37.1144C3.97477 39.719 4.19181 42.3235 4.6259 44.8195C4.95146 47.424 5.60259 49.92 6.57929 52.3075C7.23042 54.0438 8.09859 55.5631 9.07529 57.191C8.42416 56.4313 7.77303 55.6716 7.1219 54.912C5.49407 52.7416 4.08329 50.4626 3.10659 48.0751C2.23842 45.9047 1.58729 43.5172 1.26172 41.2383C0.936159 39.0678 0.936159 36.8974 1.26172 34.727V34.8355C1.58729 32.231 2.34694 29.735 3.32364 27.3475V27.456C4.6259 24.5259 6.25372 21.7043 8.20712 19.2083C9.6179 17.472 11.1372 15.7357 12.6565 14.2163C14.2843 12.5885 16.0207 11.1777 17.757 9.76696C17.757 9.76696 17.757 9.76696 17.6485 9.87548C19.1678 8.68174 20.7956 7.59652 22.4235 6.61983C24.0513 5.64313 25.6791 4.77496 27.4155 4.0153C30.6711 2.60452 34.2523 1.73635 37.725 1.19374H37.6165C38.7017 0.868174 39.7869 0.759652 40.8722 0.759652ZM47.709 3.79826C49.8795 4.12383 52.0499 4.55791 54.2203 5.10052C56.3908 5.64313 58.5612 6.40278 60.6231 7.27096C60.5146 7.27096 60.5146 7.16243 60.4061 7.16243C63.4447 8.46469 66.3748 10.0925 69.0878 12.1544C69.956 12.9141 70.8242 13.5652 71.6923 14.4334C72.452 15.193 73.2116 16.0612 73.8628 16.9294C74.6224 18.0146 75.3821 19.0998 76.0332 20.2936C76.6843 21.4873 77.3355 22.681 77.8781 23.9833C78.4207 25.177 78.8548 26.4793 79.1803 27.7816C79.5059 29.0838 79.8315 30.4946 80.0485 31.7969C80.3741 34.6184 80.3741 37.5485 80.0485 40.3701V40.2616C79.8315 41.7809 79.6144 43.1917 79.1803 44.6024C78.8548 46.0132 78.3122 47.424 77.7695 48.8348C76.5758 51.6563 75.0565 54.2609 73.1031 56.6483C71.2582 59.0358 69.1963 61.0977 66.8089 62.9426C64.2043 65.0045 61.2742 66.6323 58.2356 67.9346C57.476 68.2602 56.6078 68.5857 55.8482 68.8028C54.98 69.1283 54.1118 69.3454 53.2436 69.5624C51.5073 69.9965 49.7709 70.2136 48.0346 70.4306H48.1431C47.1664 70.5391 46.1897 70.6476 45.1045 70.7562C44.0193 70.8647 43.0426 70.8647 41.9574 70.8647C39.8955 70.8647 37.8335 70.7562 35.6631 70.4306C34.5779 70.3221 33.4927 70.105 32.2989 69.7795C31.2137 69.5624 30.1285 69.2369 28.9348 68.9113C27.8496 68.5857 26.7643 68.2602 25.6791 67.8261C24.5939 67.5005 23.5087 67.0664 22.532 66.6323H22.6405C19.3849 65.2216 16.3462 63.4852 13.5247 61.4233C13.5247 61.4233 13.5247 61.4233 13.4162 61.4233C12.8735 60.8807 12.4395 60.2296 12.0054 59.687C10.269 57.408 8.74972 54.8035 7.66451 52.199C6.47077 49.4859 5.71112 46.5558 5.27703 43.6257C4.84294 40.5871 4.84294 37.44 5.27703 34.4014C5.27703 34.4014 5.27703 34.4014 5.27703 34.2929C5.27703 34.2929 5.27703 34.2929 5.27703 34.4014C5.71112 31.3628 6.47077 28.4327 7.66451 25.6111C8.31564 24.2003 8.96677 22.7896 9.83494 21.4873C10.5946 20.0765 11.5713 18.7743 12.548 17.5805C13.4162 16.4953 14.3929 15.4101 15.3695 14.3249C16.3462 13.3482 17.4315 12.3715 18.6252 11.5033C20.036 10.4181 21.5553 9.44139 23.1831 8.4647C24.7024 7.59652 26.3302 6.72835 28.0666 6.07722C29.3689 5.53461 30.6711 5.10052 32.0819 4.66643C33.4927 4.34087 34.7949 4.0153 36.2057 3.79826C40.1125 3.25565 43.9108 3.25565 47.709 3.79826ZM12.765 17.472L12.6565 17.5805C12.6565 17.472 12.6565 17.472 12.765 17.472Z",
          fill: "none",
          strokeDasharray: "0",
          strokeDashoffset: "0",
          stroke: "white",
          strokeWidth: ".8",
          strokeLinecap: "round",
          children: r.jsx("animate", {
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
function $c(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    { register: i, getValues: o, setValue: a } = P4(),
    u = () => {
      const { name1: c } = o();
      n(!0);
      const h = { arrAnswer: l, answerInfo: { answer: c, correct: !1 } };
      c === "2"
        ? (t(G("true")), (h.answerInfo.correct = !0), t(K(h)))
        : (t(G("false")), t(K(h)));
    };
  let C = null;
  const f = (c) => {
      (C = c.target.closest("label")),
        (document.body.style.overflow = "hidden");
    },
    d = (c) => {
      var y;
      if (((document.body.style.overflow = "auto"), !C)) return;
      const h = c.target;
      h.closest("label") === C &&
        (a("name1", (y = h.getAttribute("id")) == null ? void 0 : y.slice(3)),
        u());
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: r1.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Обведи календарь с верным годом",
        }),
        r.jsxs("form", {
          className: r1.form,
          onMouseDown: (c) => f(c),
          onMouseUp: (c) => d(c),
          onChange: u,
          onTouchStart: f,
          onTouchEnd: d,
          children: [
            r.jsxs("label", {
              className: r1.label + " " + r1.value1,
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: r1.input,
                  value: 1,
                  ...i("name1"),
                }),
                r.jsx(C3, { id: "svg1" }),
              ],
            }),
            r.jsxs("label", {
              className: r1.label + " " + r1.value2,
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: r1.input,
                  value: 2,
                  ...i("name1"),
                }),
                r.jsx(C3, { id: "svg2" }),
              ],
            }),
            r.jsxs("label", {
              className: r1.label + " " + r1.value3,
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: r1.input,
                  value: 3,
                  ...i("name1"),
                }),
                r.jsx(C3, { id: "svg3" }),
              ],
            }),
            r.jsxs("label", {
              className: r1.label + " " + r1.value4,
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: r1.input,
                  value: 4,
                  ...i("name1"),
                }),
                r.jsx(C3, { id: "svg4" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Qc = "_taskInfo_1q1st_1",
  Wc = "_task_1q1st_1",
  bc = "_text_1q1st_21",
  Hc = "_number_1q1st_43",
  q1 = { taskInfo: Qc, task: Wc, text: bc, number: Hc },
  ft =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBrdKNDUAwEIbhixjACDdKR7ABG7CJEdjECEaoDYzwuUYlEvTneJNLCJ5cpEQJARjpjwRqcdTQlwSoZKzHNncfer+IeJ0M+2sH9aTcinHPbceUm3w04bk5FzIIZ3IwG8GWVKhFWn0M4oStzsJHRR4OyGsIbaWJn7BJic3an/6WuWIW37LOKb26+lEnTr0DRgkvV9c09WIAAAAASUVORK5CYII=",
  V6 = (e) => {
    const { value: t, click: n, className: s } = e,
      l = () => {
        const o = t + 1;
        o > 9 || (n && n(o));
      },
      i = () => {
        const o = t - 1;
        o < 0 || (n && n(o));
      };
    return r.jsxs("div", {
      className: s,
      children: [
        r.jsx("img", { src: ft, alt: "arrowUp", onClick: l }),
        t,
        r.jsx("img", { src: ft, alt: "arrowDown", onClick: i }),
      ],
    });
  },
  js =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7CAYAAADMzlLJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO4SURBVHgB7ZvvVdswFMWvc/ieZIKaCWgnwExAOgHpBGUDwgTABMAEtBMEJqAbxExAOoH6rv0Um5wkyLIhlk5/57woTmzFV3pS9Oc5QaAYY0aSpGKjDV+Ptnxu+ZUkyTJBT6mJo30RO9T0KyphS/2+KYciPt+beBVHoxgrbqjHqZ5GcX/EXsQWmuY01pzkwXOf0ZxC/AE+ELm5FFVNMR3WjmlWnE3/it1AxTn8hMs5W2klXsXVre6WPM5RiXvR9xS3ZMljzziLVzediB2LZajEWaO4J7F7lDWXI3QoWuxC7FVsLvZTa3zv8D6MH6lL5hS6EJtpzfcKrRgfMl5/sCXTVJJbPTzpqwtrjw9fBusfqPC52JNk3lvhnaNtaEE3RyAYP7JNGc1DEk6MHxmvHdQyuWAqbj5DIJhyhOfNgWaSSjIVO0FYtBJva34m9hhg53YGPzjMXv3VcdQWVK2ry2fwY8yXgWTCIWtQw1FTDrge0BK6fSb2G2FxBb95/Bso/gjlbKv3mHI4yxqfogMonm0nR88R0VOUCxcTdAQ7vFFX7d1UqzMp2sN87PrABLvX5LxovZKjoyXe3Cm6Ef1peIs31cwvQ3gUXjSAByKcgwu2vwxh4ide5wB3+IA2+NlQfG4cl6W0fc8QCU1r/hYR4Sxe/2dTRESTmr9AZDiJ1xlUishwrfkMcbH6q8vxfq0G/7e2RrGY4TXIiYX/4h3IESGu4oNY7GgKxXPvfLjrJJnv2z32qKB4RkOMHc69QWQ06fCuEVntO4vXGJlLxEHKF4pne3ba9pECYO3fIxKs+KMG15wjkt5/VfPGMeykiFxMkm+IoAMcaFtmAUybXCjX0QN+IOABkO3w2JGdoiFSAHdijJz8Dg1BQ0Cswk8ZlSHJpYh5RAtqGxfA+wHA20hr79kZH6PlXvwa3I6vdqW5OGnKeJxeTl+5oCJ2Z7rhedMPXOtGYG+R+zs37Vlsy3xuND6nr8j9TU07tornNvCz2BV6jGnnAYtdGbMA2L4WpidxtpswpZd2K76W+bkWwG0fC0HuaWL8WMAFU0Zl0gsYdf0gdmZaxr91hXroq2lOId75MRNTxdtzMGQfKMhRTnPtwwRLVPH35MMDnUw5PsnQDN7XofczNubt0002imKsaaqnpWq2UDYVlP3Mq6DolWgej8f5ydg7OKE2J3iXHQV1jFpBab+yKgy4FZTPAksxkOvdo2XmbVzPukfVv0v1kiU8htAJQcCseRRTLsSO9XiIqoDqhVYQunZvtHnhH6+KNoHFnA+mAAAAAElFTkSuQmCC",
  ys =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7CAYAAADMzlLJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN5SURBVHgB7VvhedowED369X+8QZQJygaFCUonqDNBuwF0AtoJCBO0TGA6AXQCiwkgE6h36FRUF7AsGVdW877vRSALR+8sy6c7eQAIpVSGxQQuQ145th0MBgfoIQb0B8ULLEpoji1S8GfJ3PG5dqYuVuOEih+jsDWPHMG8Rz4g3yBNPYEMRUYwxvlJ3/H3W/hHCBX/gJ2XdY3YOEPQxqgah+rJKMY4ZJQ9dGCcTsTXoWIcKslAwvoumcY45rsM+f9RiK8D98/mfeX7lrlGrhrNMXjyofKDgAjA/c+R35B75MK5b9hwpPyQQWQg0cgv3L+pyw+8xEPEYCMUyM2lUfAKEgXNRcgxflwhi3MGeA2JAw0w40FKBhjbE3Ty4gmWARbIsakPGvYqktneBWQAKrHPn0xd6D0/gX7hEfnRPKVCxb+DHoHv9yXy99WnoZArf4ygR6CrrrQjlLXxqJurCJ2dS2DXl1zhYRviaeExh36Bnv2Ttpwc41cL6Afoyr9t08Ojmb9AA3yA+CGRmVnS5qAdgDZPvgZtYYrctBHGonO0FhKjmfpWHp5A5nADYJ/N2v1zaCzBDPvezNagJ9gcWaom6/Yz6KN4GzlyY7usTZDCkpYu3NzHACmt5+eu3ibfKjK1YMaiibeZmngB9qKlBimGsZydrBTFU+By6NIw1QBmnXiaFw5GvIC0IGqO/yH+v8SL+ASxcWmUqvidS6MUxUvXDQ0pil86tBFg+fZ3kAYoyvPk2rjv6/kqvjpGd1rJ2MSE7yYf5wCB3KUifg06D+cK2gm2TkE8DfWxa1SX1/sj5LbP+XmJfKRNkNAMlF847tjqm3gJeogvPUQb0CalY8DjVuLJyfjBpYGE5jjAKeFxCE1YcHKGkpUru7JQ7aBQkaasld6dVf4V6ODKUHjFzruC0onU2bkDpQpDDhED+zdFbi4dLJU/ZhAxsH8Uz6esTnapQan84LNZuRMofY+T6Cd1LZYfID66XLzSe26mSu+7qZ+HPMXvIRLwVabdIQWLnimHzE3Ic94pYBACpXNq5lUVu7yD0177YyQW2PlBvnf1B4x4nyWthIbgq2Eo4LqgDE5vV5jSvJ/zDFrosd7X+QkRTx24Juie2wnoUFATmD05PnvnD5XPVUGSj0noUFATnLvnpVXavjUJoknuGU5Co31nzhk8W6YSynLGL75cYmu6HyVuAAAAAElFTkSuQmCC";
function Yc(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    [i, o] = L.useState(0),
    [a, u] = L.useState(!1),
    C = () => {
      a || (n(!0), u(!0)), f === -1 && (f = i), d === -1 && (d = h);
      const P = {
        arrAnswer: l,
        answerInfo: { answer: f + (d + ""), correct: !1 },
      };
      f === 3 && d === 7
        ? (t(G("true")), (P.answerInfo.correct = !0), t(K(P)))
        : (t(G("false")), t(K(P)));
    };
  let f = -1,
    d = -1;
  const c = (P) => {
      (f = P), o(P), C();
    },
    [h, v] = L.useState(0),
    y = (P) => {
      (d = P), v(P), C();
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: q1.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Собери верную цифру на кодовом замке",
        }),
        r.jsxs("div", {
          className: q1.task,
          children: [
            r.jsx("img", { src: js, alt: "code" }),
            r.jsx("div", { className: q1.number, children: "2" }),
            r.jsx(V6, { click: c, value: i, className: q1.number }),
            r.jsx(V6, { click: y, value: h, className: q1.number }),
            r.jsx("img", { src: ys, alt: "code", className: q1.code }),
            r.jsxs("p", {
              className: q1.text,
              children: ["МЛРД М", r.jsx("span", { children: "3" })],
            }),
          ],
        }),
      ],
    }),
  });
}
function Xc(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    { register: i, getValues: o } = P4(),
    a = () => {
      const { name1: u, name2: C, name3: f, name4: d } = o();
      if (!u && !C && !f && !d) {
        n(!1);
        return;
      }
      n(!0);
      const c = o();
      let h = "";
      for (const y in c) c[y] && (h += c[y]);
      const v = { arrAnswer: l, answerInfo: { answer: h, correct: !1 } };
      u && C && f && d
        ? (t(G("true")), (v.answerInfo.correct = !0), t(K(v)))
        : (t(G("false")), t(K(v)));
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: J.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Нажми на огоньки около верных вариантов ответа",
        }),
        r.jsxs("form", {
          className: J.form,
          onChange: a,
          children: [
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 1,
                  ...i("name1"),
                }),
                "Доступ в электронную библиотеку",
              ],
            }),
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 2,
                  ...i("name2"),
                }),
                "Скидки на авиабилеты и гостиницы",
              ],
            }),
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 3,
                  ...i("name3"),
                }),
                "Корпоративный спорт",
              ],
            }),
            r.jsxs("label", {
              className: J.label,
              children: [
                r.jsx("input", {
                  type: "checkbox",
                  className: J.input,
                  value: 4,
                  ...i("name4"),
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
const Gc = "_taskInfo_n0eaj_1",
  qc = "_task_n0eaj_1",
  Kc = "_taskAnswer_n0eaj_31",
  Jc = "_danger_n0eaj_71",
  eC = "_cart_n0eaj_77",
  f3 = { taskInfo: Gc, task: qc, taskAnswer: Kc, danger: Jc, cart: eC },
  tC = (e) => {
    const {
      index: t,
      color: n,
      onTouchStart: s,
      onTouchMove: l,
      onTouchEnd: i,
      onMouseDown: o,
      onMouseMove: a,
      onMouseUp: u,
      value: C,
      style: f,
    } = e;
    if (t === 0)
      return r.jsx("div", {
        "data-value": C,
        style: f,
        onMouseUp: u,
        onMouseDown: o,
        onMouseMove: a,
        children: r.jsxs("svg", {
          onTouchStart: s,
          onTouchMove: l,
          onTouchEnd: i,
          width: "65",
          height: "58",
          viewBox: "0 0 65 58",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M63.3012 38.2725L42.7196 37.8553L42.4415 39.9413L63.1622 41.8882L63.3012 38.2725Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M48.2968 39.3666L48.2968 39.3667C41.7913 48.2005 32.0507 52.3654 23.2086 54.386C16.4573 55.9288 10.3122 56.2099 6.53162 56.3829C5.66766 56.4225 4.92718 56.4563 4.33116 56.4983C4.65052 53.0107 5.49284 46.5886 7.8873 39.617C10.4247 32.2291 14.693 24.2593 21.894 18.4985L21.9006 18.4932L21.9071 18.4877C24.8107 15.9989 29.281 12.6283 35.4882 12.6283C39.6978 12.6283 44.4525 15.2173 48.388 18.078C52.0061 20.7078 54.8429 23.5005 55.7854 24.4955C54.3978 28.9808 52.074 34.2404 48.2968 39.3666Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M40.4945 42.0274C40.4945 42.0274 45.0837 38.4117 48.6994 41.7493L40.4945 42.0274Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M1.56431 41.5782L1.71469 40.4504L21.2207 40.8485V43.4251L1.56431 41.5782Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M41.386 41.7759L41.386 41.7759L41.3865 41.783C41.5459 44.1424 40.3947 46.0146 38.4888 47.367C36.5704 48.7281 33.911 49.5378 31.1795 49.716C28.4481 49.8941 25.7041 49.4367 23.6201 48.3285C21.5508 47.228 20.1553 45.5048 19.9949 43.1087C19.8701 40.9754 21.0276 39.2037 22.9636 37.8792C24.9055 36.5507 27.5807 35.7148 30.3152 35.4855C33.0509 35.2561 35.7852 35.6389 37.8483 36.6828C39.8931 37.7175 41.2585 39.3841 41.386 41.7759Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M23.8069 42.8617C24.2241 49.2587 39.9384 48.1462 39.5212 41.8883C39.104 35.6304 23.3897 37.1601 23.8069 42.8617Z",
              fill: n,
            }),
            r.jsxs("g", {
              opacity: "0.2",
              children: [
                r.jsx("path", {
                  d: "M35.3491 38.1335L27.7005 46.7555C26.3098 46.3383 25.1973 45.782 24.502 44.8086L30.6208 37.8553C32.2896 37.7163 33.9584 37.8553 35.3491 38.1335Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M39.3819 41.3321L34.6537 46.6165C33.9584 46.7556 33.2631 46.8947 32.4287 47.0337L38.6866 39.9414C39.1038 40.4977 39.2429 40.9149 39.3819 41.3321Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M29.6476 38.1335L24.224 44.2524C24.085 44.1133 24.085 43.9743 23.9459 43.6962L28.6741 38.2726C29.0913 38.2726 29.3694 38.1335 29.6476 38.1335Z",
                  fill: "white",
                }),
              ],
            }),
            r.jsx("path", {
              d: "M64.4962 41.1755L64.4962 41.1755L64.496 41.1696C64.3834 38.7686 63.1826 37.0114 61.4708 35.8959C59.7745 34.7906 57.5879 34.3188 55.4555 34.4182C53.3231 34.5176 51.1913 35.1906 49.6067 36.4393C48.0089 37.6984 46.9757 39.5409 47.0872 41.9081C47.1637 44.2793 48.3433 45.9726 50.0459 47.0167C51.7294 48.0491 53.9083 48.4416 56.0341 48.2974C58.1612 48.1532 60.2924 47.4682 61.8878 46.2786C63.4932 45.0815 64.5727 43.355 64.4962 41.1755Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M60.9371 41.332C60.659 35.9085 49.2557 36.4648 49.3947 41.7492C49.6729 47.1728 61.0762 46.1993 60.9371 41.332Z",
              fill: n,
            }),
            r.jsxs("g", {
              opacity: "0.2",
              children: [
                r.jsx("path", {
                  d: "M52.3148 45.0868L58.0165 37.9945C58.99 38.2726 59.8243 38.8289 60.3806 39.6633L55.7915 45.365C54.6789 45.504 53.4274 45.365 52.3148 45.0868Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M49.3945 42.1664L52.8711 37.7164C53.4274 37.5773 53.9837 37.4382 54.5399 37.4382L49.8117 43.279C49.6726 43.0008 49.5336 42.5836 49.3945 42.1664Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M56.626 45.2258L60.6589 40.2195C60.7979 40.3585 60.7979 40.4976 60.7979 40.6367L57.1823 45.0868C57.0432 45.0868 56.7651 45.2258 56.626 45.2258Z",
                  fill: "white",
                }),
              ],
            }),
            r.jsx("path", {
              d: "M56.2684 24.6766L57.171 25.1153L56.9776 24.1306C56.2093 20.2191 55.264 16.679 54.1734 13.7941C53.0881 10.9235 51.8389 8.6463 50.4338 7.31521L50.4339 7.31519L50.4293 7.31094C43.8899 1.26913 34.2252 -0.623434 25.2755 1.12071C16.3222 2.86554 7.99355 8.2678 4.15846 16.9322L4.15741 16.9346C2.44687 20.8546 1.57801 27.4053 1.45613 34.6658C1.33393 41.9455 1.96202 50.0108 3.29007 57.0006L4.2735 56.9951C6.68752 43.4767 13.5777 32.4125 22.9011 26.2254C32.2083 20.0491 43.9794 18.7038 56.2684 24.6766Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("mask", {
              id: "mask0_251_18439",
              style: { maskType: "alpha" },
              maskUnits: "userSpaceOnUse",
              x: "1",
              y: "1",
              width: "56",
              height: "56",
              children: r.jsx("path", {
                d: "M53.238 14.1477C54.2129 16.7265 55.0765 19.8634 55.7997 23.3495C43.5208 17.7198 31.7235 19.1707 22.3481 25.3922C13.3741 31.3474 6.65347 41.6479 3.81723 54.2049C2.81565 47.9336 2.34979 41.0089 2.45599 34.6826C2.57746 27.4464 3.44674 21.0645 5.07343 17.3358C8.74811 9.03498 16.7592 3.79919 25.4668 2.10224C34.1773 0.404727 43.4938 2.26626 49.7484 8.0433C50.9847 9.21581 52.1683 11.3184 53.238 14.1477Z",
                fill: "#C00000",
                stroke: "white",
              }),
            }),
            r.jsxs("g", {
              mask: "url(#mask0_251_18439)",
              children: [
                r.jsx("path", {
                  d: "M42.93 14.2412C42.93 14.2412 38.3372 13.2582 36.4428 14.9679C34.5483 16.6775 32.9528 19.9909 30.3022 20.8308C30.3022 20.8308 35.23 20.5662 37.9439 19.8056C40.6585 19.0569 41.0702 17.0367 41.8153 15.7198C42.5387 14.4396 42.93 14.2412 42.93 14.2412Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M42.2343 14.4915C40.1726 14.1883 38.3015 15.6721 36.7819 16.8769C35.2171 18.1196 33.6754 19.5738 31.8147 20.3713C31.7918 20.3843 31.7657 20.3384 31.7886 20.3254C33.7775 19.2728 35.4233 17.7774 37.1947 16.4173C38.6139 15.3243 40.3482 14.1553 42.2219 14.4803C42.2566 14.4666 42.2579 14.4902 42.2343 14.4915Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.7837 17.2059C39.8851 17.6443 38.9521 17.8836 37.9538 18.0081C36.7328 18.1683 35.5409 18.2086 34.386 18.7199C34.3631 18.733 34.337 18.6871 34.3599 18.674C35.2697 18.2232 36.2345 18.1359 37.2341 18.035C38.4334 17.9115 39.6891 17.7376 40.7837 17.2059Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.4617 17.8143C39.4191 18.2132 38.3602 18.5301 37.2584 18.7075C36.1094 18.8874 34.9328 18.7733 33.8312 19.1753C33.8194 19.1759 33.807 19.1648 33.8181 19.1523C34.6547 18.6582 35.7867 18.822 36.7266 18.7124C38.0072 18.5609 39.254 18.222 40.4617 17.8143C40.4735 17.8137 40.4729 17.8019 40.4617 17.8143Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.5411 18.5022C38.559 18.7086 37.582 19.0094 36.5831 19.1221C36.0893 19.1723 35.5948 19.2106 35.1095 19.2012C34.5529 19.1838 34.0533 19.1279 33.5368 19.4157C33.5138 19.4288 33.4883 19.3947 33.5113 19.3816C34.1722 18.9205 35.1783 19.1621 35.9446 19.1209C37.1707 19.0551 38.3475 18.7318 39.5404 18.4904C39.5398 18.4786 39.5522 18.4898 39.5411 18.5022Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M41.2134 15.7403C40.5343 16.0842 39.811 16.2649 39.074 16.4109C38.2315 16.5743 37.2084 16.6766 36.4401 17.1198C36.406 17.1453 36.3674 17.0882 36.4015 17.0627C37.0316 16.6861 37.8524 16.5592 38.5658 16.4145C39.4548 16.2367 40.3581 16.1055 41.1892 15.7298C41.2122 15.7167 41.2128 15.7285 41.2134 15.7403Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.5787 16.2473C39.0877 16.883 37.4141 16.7601 35.9628 17.4764C35.951 17.4771 35.9386 17.4659 35.9504 17.4653C37.3749 16.6912 39.0727 16.8247 40.5663 16.2361C40.5775 16.2237 40.5899 16.2349 40.5787 16.2473Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.1198 14.3094C38.5472 14.7486 37.0251 15.9062 36.1542 17.3008C36.1318 17.3256 36.0952 17.3039 36.1057 17.2797C36.986 15.8374 38.4851 14.6928 40.1198 14.3094Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.3697 14.5216C37.1705 15.3072 36.4077 16.294 35.8636 17.6119C35.8643 17.6237 35.8401 17.6132 35.8512 17.6008C36.3691 16.237 37.122 15.2862 38.3573 14.5104C38.3809 14.5092 38.3815 14.521 38.3697 14.5216Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.3021 14.8981C35.796 15.913 35.1722 17.5071 34.1741 18.9558C34.1636 18.98 34.1269 18.9583 34.1375 18.9341C35.0735 17.4296 35.7469 15.8801 37.3021 14.8981Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.5417 23.4017C29.5417 23.4017 32.8779 20.7988 35.9213 21.7704C38.9529 22.7426 39.3151 24.8632 39.3151 24.8632C39.3151 24.8632 38.6841 24.3414 37.6955 24.8674C36.7076 25.4051 34.528 26.2079 33.1856 24.7667C31.8431 23.3254 30.7667 22.8748 29.5417 23.4017Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M38.4111 23.8832C36.1779 22.1469 33.3111 22.7028 30.7525 23.053C30.7053 23.0555 30.6891 22.9736 30.7356 22.9593C33.2504 22.2331 36.2444 22.2852 38.4111 23.8832Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.301 22.8077C36.5753 22.5038 35.789 22.3924 35.0078 22.3752C34.2148 22.3587 33.538 22.5251 32.7787 22.6959C32.7433 22.6978 32.729 22.6513 32.7643 22.6494C33.6167 22.4499 34.3047 22.2711 35.1945 22.3297C35.9181 22.3736 36.6343 22.5007 37.3122 22.7953C37.3122 22.7953 37.3128 22.8071 37.301 22.8077Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.651 22.3696C35.1891 21.7861 33.6644 22.2344 32.2607 22.7354C32.2259 22.7491 32.2116 22.7026 32.2464 22.6889C33.6494 22.1761 35.199 21.7501 36.651 22.3696C36.6628 22.369 36.6622 22.3572 36.651 22.3696Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M33.7816 21.7789C33.1054 21.9571 32.599 22.4335 31.99 22.7618C31.9441 22.7879 31.9049 22.7191 31.9515 22.7048C32.5468 22.3417 33.0793 21.9112 33.7692 21.7677C33.781 21.7671 33.7816 21.7789 33.7816 21.7789Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.8204 24.9563C35.1711 24.7547 34.5646 24.468 34.0119 24.0839C33.3866 23.6682 32.8255 22.9062 32.1042 22.6848C32.0682 22.6749 32.0762 22.6035 32.1128 22.6252C32.677 22.7841 33.0449 23.2491 33.479 23.6277C34.1721 24.2053 34.9532 24.6599 35.8204 24.9563Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.2825 25.0678C34.7467 24.7774 34.1675 24.5602 33.6862 24.1841C33.0695 23.7088 32.5644 23.1093 31.8171 22.842C31.7811 22.8321 31.8015 22.7719 31.8381 22.7936C32.4408 23.0095 32.8893 23.4347 33.3496 23.8593C33.9334 24.3836 34.5896 24.7149 35.2825 25.0678C35.2943 25.0672 35.2936 25.0554 35.2825 25.0678Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M33.9545 24.9973C33.5075 24.8203 33.2075 24.5172 32.9043 24.1551C32.5005 23.6802 32.0116 23.1626 31.441 22.8859C31.3926 22.8648 31.436 22.7915 31.4844 22.8126C31.9097 23.0262 32.3078 23.395 32.6221 23.7446C33.0247 24.1959 33.3399 24.782 33.9545 24.9973C33.9663 24.9966 33.9656 24.9848 33.9545 24.9973Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.6691 24.5969C37.0032 24.5262 36.31 24.3861 35.7672 23.966C35.176 23.5248 34.605 22.7988 33.8961 22.5886C33.8601 22.5787 33.8681 22.5073 33.9048 22.529C34.4342 22.7016 34.8473 23.1286 35.2684 23.4844C35.5895 23.7391 35.8647 24.0199 36.2415 24.2124C36.6792 24.4372 37.1807 24.5285 37.6691 24.5969C37.6809 24.5962 37.692 24.5838 37.6691 24.5969Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.0538 24.4935C37.4207 24.3738 36.7746 24.2311 36.2022 23.919C35.5689 23.5747 35.111 22.9726 34.4554 22.6531C34.4069 22.6321 34.4509 22.5706 34.4876 22.5923C35.0941 22.879 35.5129 23.4121 36.0754 23.7603C36.6746 24.1301 37.3704 24.3174 38.0531 24.4817C38.0767 24.4804 38.0656 24.4928 38.0538 24.4935Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.3146 24.2903C37.4419 23.4504 36.303 23.1569 35.2352 22.6467C35.2227 22.6356 35.2339 22.6232 35.2457 22.6225C36.3141 23.1445 37.4655 23.4492 38.3146 24.2903C38.327 24.3015 38.3264 24.2897 38.3146 24.2903Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.28483 15.363C6.88654 15.4317 6.38657 15.5886 5.97483 15.8471C5.78075 15.9758 5.63509 16.1255 5.50375 16.3217C5.43808 16.4198 5.50019 16.4756 5.40967 16.5514C5.36442 16.5893 5.1981 16.5746 5.12864 16.6019C4.455 16.8273 3.95638 17.6698 4.07562 18.3492C3.70407 18.4755 3.53507 18.8511 3.49512 19.208C3.47178 19.4338 3.50358 19.5858 3.43182 19.7907C3.37058 19.9713 3.3205 20.1395 3.32936 20.3046C3.77789 19.6302 4.46111 20.2438 5.03268 20.3195C5.7594 20.4224 6.18839 20.0447 6.81804 19.8808C6.83204 20.8022 7.3802 22.2034 8.51803 22.0359C8.56923 22.3287 8.5625 22.4236 8.84061 22.5388C7.95731 22.8227 8.8911 23.9193 9.13471 24.2728C9.03612 23.7579 9.66981 23.8894 9.95717 23.9567C10.3643 24.0531 10.8527 24.1214 11.2714 23.9925C12.0853 23.736 13.0969 22.7595 13.2033 21.8789C13.6499 22.2687 14.2851 22.6484 14.8907 22.6986C15.5318 22.747 15.8435 22.3874 16.1247 21.8994C16.917 22.3416 17.8242 21.8436 18.0269 20.9933C18.2493 20.071 17.9772 19.187 17.5377 18.4894C18.312 18.3769 19.0477 18.2073 19.6453 17.6669C20.1977 17.1643 20.4664 16.6651 20.7238 15.9537C21.0313 15.0741 21.1143 13.7573 19.9785 13.5227C19.2368 13.3616 18.6731 13.652 18.0119 13.8884C18.0644 13.1053 17.8475 12.1475 18.5368 11.5548C18.337 11.5773 18.1638 11.4329 17.9844 11.3953C17.7933 11.3582 17.5922 11.3572 17.3813 11.3922C17.2404 11.4116 16.8845 11.608 16.764 11.5672C16.6436 11.5264 16.4956 11.1915 16.3962 11.1022C15.7359 10.4756 14.6491 10.7113 13.9359 11.0806C13.6146 10.6013 13.3579 10.2249 12.9238 9.84627C12.638 9.58968 11.8873 9.03884 11.5545 9.44687C11.4269 9.05174 10.8646 8.92823 10.5067 9.08933C9.99873 9.31759 10.1097 9.84366 9.89168 10.1864C9.70828 9.8534 9.48223 10.2675 9.44457 10.4469C9.06281 9.72253 8.57306 10.7301 8.38657 11.0003C8.07475 10.6978 7.68042 10.3997 7.22278 10.6844C7.21242 10.2712 6.67202 10.3357 6.40214 10.3738C6.48514 10.8186 5.96081 11.4024 5.79307 11.8016C5.57272 12.3218 5.58016 12.9008 5.71602 13.4491C5.94602 14.4299 6.61404 14.7606 7.28483 15.363C7.26125 15.3643 7.2861 15.3866 7.28483 15.363Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.28483 15.363C6.88654 15.4317 6.38657 15.5886 5.97483 15.8471C5.78075 15.9758 5.63509 16.1255 5.50375 16.3217C5.43808 16.4198 5.50019 16.4756 5.40967 16.5514C5.36442 16.5893 5.1981 16.5746 5.12864 16.6019C4.455 16.8273 3.95638 17.6698 4.07562 18.3492C3.70407 18.4755 3.53507 18.8511 3.49512 19.208C3.47178 19.4338 3.50358 19.5858 3.43182 19.7907C3.37058 19.9713 3.3205 20.1395 3.32936 20.3046C3.77789 19.6302 4.46111 20.2438 5.03268 20.3195C5.7594 20.4224 6.18839 20.0447 6.81804 19.8808C6.83204 20.8022 7.3802 22.2034 8.51803 22.0359C8.56923 22.3287 8.5625 22.4236 8.84061 22.5388C7.95731 22.8227 8.8911 23.9193 9.13471 24.2728C9.03612 23.7579 9.66981 23.8894 9.95717 23.9567C10.3643 24.0531 10.8527 24.1214 11.2714 23.9925C12.0853 23.736 13.0969 22.7595 13.2033 21.8789C13.6499 22.2687 14.2851 22.6484 14.8907 22.6986C15.5318 22.747 15.8435 22.3874 16.1247 21.8994C16.917 22.3416 17.8242 21.8436 18.0269 20.9933C18.2493 20.071 17.9772 19.187 17.5377 18.4894C18.312 18.3769 19.0477 18.2073 19.6453 17.6669C20.1977 17.1643 20.4664 16.6651 20.7238 15.9537C21.0313 15.0741 21.1143 13.7573 19.9785 13.5227C19.2368 13.3616 18.6731 13.652 18.0119 13.8884C18.0644 13.1053 17.8475 12.1475 18.5368 11.5548C18.337 11.5773 18.1638 11.4329 17.9844 11.3953C17.7933 11.3582 17.5922 11.3572 17.3813 11.3922C17.2404 11.4116 16.8845 11.608 16.764 11.5672C16.6436 11.5264 16.4956 11.1915 16.3962 11.1022C15.7359 10.4756 14.6491 10.7113 13.9359 11.0806C13.6146 10.6013 13.3579 10.2249 12.9238 9.84627C12.638 9.58968 11.8873 9.03884 11.5545 9.44687C11.4269 9.05174 10.8646 8.92823 10.5067 9.08933C9.99873 9.31759 10.1097 9.84366 9.89168 10.1864C9.70828 9.8534 9.48223 10.2675 9.44457 10.4469C9.06281 9.72253 8.57306 10.7301 8.38657 11.0003C8.07475 10.6978 7.68042 10.3997 7.22278 10.6844C7.21242 10.2712 6.67202 10.3357 6.40214 10.3738C6.48514 10.8186 5.96081 11.4024 5.79307 11.8016C5.57272 12.3218 5.58016 12.9008 5.71602 13.4491C5.94602 14.4299 6.61404 14.7606 7.28483 15.363ZM7.28483 15.363C7.2861 15.3866 7.26125 15.3643 7.28483 15.363Z",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M6.81793 19.8808C6.85424 19.0158 7.88874 17.3641 10.1544 17.5026Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.81793 19.8808C6.85424 19.0158 7.88874 17.3641 10.1544 17.5026",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M13.2151 21.8782C13.3894 20.722 13.5053 19.3562 12.353 18.153Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.2151 21.8782C13.3894 20.722 13.5053 19.3562 12.353 18.153",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M12.7147 18.0627C12.7147 18.0627 14.2808 18.6052 15.8414 17.5046C17.4139 16.4034 17.9907 15.0365 18.0112 13.8767",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.7147 18.0627C12.7147 18.0627 14.2808 18.6052 15.8414 17.5046C17.4139 16.4034 17.9907 15.0365 18.0112 13.8767",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M18.5362 11.543C18.5362 11.543 17.6584 11.7083 17.5778 12.4102C17.5778 12.4102 16.7147 12.4093 16.697 13.8408C16.6793 15.2723 16.3437 17.1702 15.4638 17.7377",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M18.5362 11.543C18.5362 11.543 17.6584 11.7083 17.5778 12.4102C17.5778 12.4102 16.7147 12.4093 16.697 13.8408C16.6793 15.2723 16.3437 17.1702 15.4638 17.7377",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M15.8413 17.5046C15.8413 17.5046 16.8988 17.6015 17.537 18.4776Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8413 17.5046C15.8413 17.5046 16.8988 17.6015 17.537 18.4776",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M12.6118 15.9283C12.6118 15.9283 13.8145 15.4262 14.0779 13.946C14.3406 12.4541 14.1275 11.567 13.8979 11.0354",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.6118 15.9283C12.6118 15.9283 13.8145 15.4262 14.0779 13.946C14.3406 12.4541 14.1275 11.567 13.8979 11.0354",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M8.37468 11.0009C8.17917 11.5434 7.8206 12.7923 8.47335 13.9395C9.1261 15.0868 10.318 16.1459 10.318 16.1459",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.37468 11.0009C8.17917 11.5434 7.8206 12.7923 8.47335 13.9395C9.1261 15.0868 10.318 16.1459 10.318 16.1459",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M7.28475 15.363C8.15651 15.3044 9.19441 15.6979 10.0728 16.6439Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.28475 15.363C8.15651 15.3044 9.19441 15.6979 10.0728 16.6439",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M6.39096 10.3862C6.39096 10.3862 7.02678 10.7777 6.85279 11.721C6.67818 12.6526 6.03896 13.7392 6.80288 14.9751",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.39096 10.3862C6.39096 10.3862 7.02678 10.7777 6.85279 11.721C6.67818 12.6526 6.03896 13.7392 6.80288 14.9751",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.3618 15.5461C11.0776 15.5377 10.6786 15.5946 10.5393 15.8622C10.5065 15.9113 10.5259 16.0521 10.4806 16.09C10.4583 16.1149 10.3633 16.1081 10.3404 16.1212C10.2939 16.1355 10.2486 16.1734 10.2145 16.1989C10.0676 16.325 9.9592 16.5082 10.0053 16.7067C10.0222 16.8004 10.0744 16.8921 10.1142 16.9728C10.154 17.0534 10.2521 17.1191 10.2801 17.2003C10.0153 17.3328 10.2433 17.6161 10.3675 17.7277C10.6154 17.939 10.9655 18.0739 11.2777 18.1635C11.9145 18.354 12.7261 18.2749 13.2331 17.8102C13.6386 17.4338 13.5511 16.9064 13.3149 16.4699C13.1582 16.1945 12.9308 15.923 12.5896 15.9531C12.5925 15.7874 12.2641 15.6159 12.1312 15.5639C11.8792 15.4947 11.6106 15.5564 11.3618 15.5461Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.9114 18.2951C12.2444 18.1117 12.4233 17.7001 12.4508 17.3321C12.4569 17.2254 12.4499 17.0957 12.4213 17.0026C12.3522 16.8172 12.3095 16.9022 12.1718 16.9806C12.0801 17.0328 11.9329 16.9343 11.9979 16.8244C12.0853 16.6896 12.257 16.5858 12.4048 16.6961C12.5278 16.7841 12.5392 16.9963 12.5468 17.1378C12.5833 17.5969 12.3623 18.1053 11.9114 18.2951Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.6247 18.2394C11.7541 18.0078 11.8594 17.7657 11.8808 17.5045C11.8955 17.3382 11.825 16.9045 11.5757 17.107C11.4511 17.2083 11.2976 16.9919 11.434 16.89C11.6957 16.6986 11.8957 16.9007 11.945 17.1582C12.0255 17.5558 11.88 17.9301 11.6247 18.2394Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.0883 18.1618C10.7666 17.8953 10.6253 17.4655 10.592 17.0653C10.5806 16.8531 10.5913 16.3914 10.9277 16.4916C11.0599 16.5318 11.0241 16.7465 10.8801 16.7069C10.7119 16.6569 10.749 17.1278 10.7547 17.2339C10.7954 17.5509 10.8975 17.912 11.0883 18.1618C11.1007 18.173 11.1119 18.1606 11.0883 18.1618Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.6297 17.9854C9.79751 17.9 8.84126 17.2657 9.25165 16.3214C9.31479 16.1762 9.54828 16.341 9.42366 16.4422C9.09634 16.7317 9.37556 17.3079 9.63579 17.5304C9.90844 17.764 10.2821 17.8977 10.6284 17.9618C10.652 17.9606 10.6533 17.9841 10.6297 17.9854Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.1114 17.363C9.52364 17.2054 9.2009 15.3784 9.94993 15.4564C10.0691 15.4736 10.0327 15.6766 9.91291 15.6476C9.61375 15.5809 9.62689 16.2659 9.65869 16.4179C9.71115 16.7343 9.81836 17.1896 10.1344 17.35C10.1226 17.3506 10.1114 17.363 10.1114 17.363Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5784 15.9655C12.6862 15.7706 12.6152 15.5497 12.4537 15.4047C12.3798 15.3496 12.2948 15.3068 12.1998 15.3001C12.1167 15.2927 12.036 15.3325 11.9628 15.2892C11.9261 15.2675 11.8988 15.198 11.9447 15.1719C12.1133 15.0092 12.435 15.2757 12.5487 15.4114C12.6878 15.5813 12.711 15.7929 12.5784 15.9655Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4864 16.8035C13.6066 16.6197 13.687 16.3553 13.7228 16.1406C13.74 16.0214 13.7535 15.8315 13.677 15.7292C13.6006 15.6269 13.4473 15.6352 13.348 15.5459C13.2859 15.4901 13.3273 15.3815 13.4098 15.3771C13.6804 15.3507 13.8414 15.7086 13.8423 15.945C13.8371 16.2881 13.6736 16.5452 13.4864 16.8035C13.4746 16.8042 13.4871 16.8153 13.4864 16.8035Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.6018 18.1634C12.9001 17.9936 13.0175 17.5381 13.0476 17.2172C13.0703 16.9796 12.9306 16.3604 12.5734 16.5333C12.458 16.5868 12.3647 16.3908 12.4801 16.3373C13.2274 15.9425 13.3567 17.91 12.6018 18.1634Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.0173 17.9756C13.2939 17.8425 13.5145 17.5469 13.642 17.28C13.7696 17.013 13.6955 16.7332 13.8112 16.4669C13.8217 16.4427 13.8689 16.4402 13.8708 16.4755C14.0283 16.9873 13.5924 17.8974 13.0173 17.9756Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.2619 16.3663C13.4621 16.1309 13.5616 15.7827 13.5576 15.4874C13.5523 15.1684 13.3784 15.0122 13.2118 14.7729C13.1478 14.6818 13.2587 14.5457 13.3569 14.6114C13.9666 14.957 13.5829 15.9589 13.2619 16.3663C13.2508 16.3787 13.2632 16.3899 13.2619 16.3663Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.53278 21.8697C9.42273 20.8288 9.06375 18.7672 10.6232 18.3052C10.6468 18.3039 10.6599 18.3268 10.6369 18.3399C9.09049 18.8249 9.52021 20.8827 8.53278 21.8697C8.53405 21.8933 8.53341 21.8815 8.53278 21.8697Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.0639 22.515C9.8358 21.9179 10.1407 20.9912 10.2682 20.0621C10.3631 19.4068 10.4114 18.7657 10.9172 18.2775C10.9284 18.2651 10.9532 18.2874 10.9421 18.2998C10.2323 18.9527 10.3842 20.0204 10.1468 20.8844C9.95891 21.5684 9.63246 22.0944 9.0639 22.515C9.05211 22.5157 9.06453 22.5268 9.0639 22.515Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.7796 18.3558C10.3576 18.8632 10.0547 19.3879 9.84068 20.026C9.66748 20.5437 9.5545 21.0818 9.3211 21.579C9.31057 21.6032 9.28573 21.5809 9.29689 21.5685C9.55996 20.9632 9.64367 20.3203 9.88316 19.7163C10.0917 19.1967 10.3997 18.7664 10.7796 18.3558C10.779 18.344 10.7908 18.3434 10.7796 18.3558Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.0965 19.1008C12.4585 20.5593 12.2486 22.1548 11.2589 23.3193C11.2366 23.3442 11.1993 23.3107 11.2217 23.2859C11.6169 22.7208 11.9682 22.2172 12.1084 21.5239C12.2664 20.7233 12.2692 19.8955 12.0965 19.1008C12.0723 19.0903 12.0958 19.089 12.0965 19.1008Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5781 20.3638C12.7622 21.3707 12.4445 22.4991 11.6777 23.1906C11.6553 23.2154 11.6063 23.1826 11.6404 23.1571C12.3719 22.4676 12.7138 21.3497 12.5781 20.3638C12.5775 20.352 12.5775 20.352 12.5781 20.3638Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.74071 18.1634C9.00053 18.2505 8.52273 18.82 8.16471 19.4185C8.14303 19.4552 8.09397 19.4223 8.11629 19.3975C8.45998 18.7524 8.97442 18.2046 9.73944 18.1399C9.76302 18.1386 9.76429 18.1622 9.74071 18.1634Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.13128 18.7045C8.89005 18.8357 8.71092 19.0227 8.55663 19.2319C8.54611 19.2562 8.50884 19.2227 8.53179 19.2096C8.69786 18.9997 8.88878 18.8121 9.13128 18.7045C9.13065 18.6927 9.13065 18.6927 9.13128 18.7045Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.9392 15.6043C9.98122 14.497 9.15828 12.6023 9.33788 11.1029C9.33661 11.0793 9.38377 11.0768 9.38567 11.1122C9.29366 12.7014 10.0785 14.3263 10.951 15.6036C10.951 15.6036 10.9399 15.616 10.9392 15.6043Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.0311 10.581C10.2226 12.1668 10.3612 14.0865 11.263 15.4686C11.2761 15.4916 11.242 15.5171 11.2289 15.4941C10.3029 14.1014 10.1885 12.1923 10.0311 10.581Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.6683 9.80735C11.8152 10.7808 12.0656 11.7013 12.0605 12.7066C12.0515 13.6411 11.9104 14.5354 11.8183 15.4625C11.8195 15.4861 11.7724 15.4886 11.7829 15.4644C11.8495 14.5032 11.9881 13.5617 11.984 12.6043C11.9793 11.635 11.7779 10.7473 11.6683 9.80735C11.6559 9.7962 11.6677 9.79556 11.6683 9.80735Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.9507 15.5028C11.9786 14.9219 12.0667 14.3615 12.0829 13.7813C12.0866 13.19 12.1027 12.6098 12.1182 12.0178C12.117 11.9942 12.1523 11.9923 12.1654 12.0153C12.2398 13.1817 12.0897 14.3485 11.9507 15.5028Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5739 15.883C12.9121 15.3565 12.9152 14.7533 12.9655 14.1477C13.0327 13.1982 12.9964 12.3016 12.8514 11.3636C12.8502 11.34 12.8855 11.3381 12.8986 11.361C13.0716 12.3803 13.0992 13.3365 13.024 14.3573C12.9693 14.8805 12.9787 15.4948 12.5739 15.883Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.31686 11.1169C7.33403 12.0973 7.31964 13.1503 7.70037 14.0757C7.93243 14.6544 8.34489 15.0697 8.86028 15.4203C9.27757 15.7053 9.80768 15.8897 10.1258 16.3101C10.1507 16.3324 10.1048 16.3585 10.0799 16.3362C9.64936 15.8036 8.86915 15.5854 8.35985 15.128C8.03751 14.8497 7.80568 14.4957 7.64269 14.1024C7.26069 13.1535 7.2993 12.111 7.31686 11.1169Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.7264 11.7467C15.7265 12.7226 15.4829 14.1308 14.7401 15.2702C14.4892 15.662 13.8561 16.6418 13.3174 16.5171C13.2814 16.5072 13.2906 16.4594 13.3266 16.4693C13.7332 16.5539 14.2171 15.8776 14.4383 15.5938C14.737 15.2113 14.9742 14.7847 15.1754 14.3483C15.5982 13.4152 15.9248 12.4518 16.7264 11.7467Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.4126 11.8463C15.603 12.6228 15.1735 13.6508 14.6949 14.646C14.4293 15.2041 13.965 16.2458 13.2751 16.3893C13.2398 16.3912 13.2254 16.3447 13.2602 16.331C13.7397 16.2343 14.1411 15.5625 14.3566 15.1726C14.5722 14.7826 14.7628 14.3704 14.9535 13.9582C15.3126 13.1586 15.7226 12.4272 16.4126 11.8463Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4228 17.5992C14.0891 17.457 14.7025 17.2112 15.1835 16.7007C15.5969 16.2528 15.8376 15.6724 16.0437 15.1057C16.0548 15.0932 16.079 15.1038 16.0797 15.1155C15.8545 15.7661 15.5952 16.4421 15.077 16.9192C14.6604 17.3081 14.0087 17.7214 13.4234 17.611C13.4123 17.6234 13.4116 17.6116 13.4228 17.5992Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.486 17.454C14.1826 17.2156 14.7174 16.6075 15.0866 15.9966C15.1089 15.9717 15.1455 15.9934 15.135 16.0176C14.777 16.6162 14.2131 17.344 13.486 17.454C13.4866 17.4658 13.4866 17.4658 13.486 17.454Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8743 17.4557C16.5196 17.3619 17.0658 16.9661 17.6034 16.6298C18.107 16.319 18.5856 15.9859 19.0513 15.6299C19.0742 15.6168 19.0997 15.6509 19.0767 15.664C18.5107 16.1318 17.8937 16.5315 17.2643 16.92C16.829 17.1798 16.3931 17.4278 15.875 17.4675C15.8638 17.4799 15.8625 17.4563 15.8743 17.4557Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8755 17.4792C16.2528 17.4589 16.6319 17.474 17.0184 17.406C17.4868 17.3217 17.8912 17.1463 18.3049 16.9231C18.3278 16.9101 18.3651 16.9435 18.331 16.969C17.9521 17.1785 17.5601 17.3651 17.1277 17.4592C16.7058 17.5292 16.2894 17.4806 15.8755 17.4792Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.788 15.2248C18.3298 14.7464 18.7926 14.1186 19.5128 13.8789C19.5357 13.8659 19.5618 13.9117 19.5389 13.9248C18.8716 14.268 18.3795 14.791 17.788 15.2248C17.7886 15.2366 17.7886 15.2366 17.788 15.2248Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.8326 14.9505C18.2982 14.5945 18.6371 14.0797 19.2183 13.8948C19.2412 13.8818 19.2555 13.9283 19.232 13.9296C18.6886 14.1597 18.3243 14.6404 17.845 14.9617C17.8338 14.9741 17.8208 14.9512 17.8326 14.9505Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.5248 18.0838C14.9358 18.2509 15.2609 18.8009 15.4586 19.1804C15.8012 19.836 15.9628 20.6431 16.1075 21.3565C16.1218 21.403 16.0517 21.4186 16.0492 21.3715C15.935 20.7864 15.7638 20.24 15.5684 19.6829C15.4003 19.1954 15.0122 18.3532 14.5149 18.1198C14.4672 18.1105 14.4888 18.0739 14.5248 18.0838Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.2902 18.1201C14.6957 18.4057 14.9062 18.5836 15.1326 19.0561C15.4261 19.6788 15.5584 20.3811 15.7012 21.0592C15.7025 21.0827 15.6678 21.0964 15.6665 21.0729C15.4947 20.5146 15.3929 19.9407 15.1981 19.3955C14.9791 18.8397 14.7355 18.4863 14.2902 18.1201C14.2666 18.1213 14.2778 18.1089 14.2902 18.1201Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.9446 17.9785C15.5158 18.2671 15.7708 18.8327 15.9905 19.4002C16.0041 19.435 15.9576 19.4493 15.9439 19.4146C15.7399 18.9171 15.4661 18.2224 14.9446 17.9785C14.9335 17.9909 14.9328 17.9792 14.9446 17.9785Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.6785 18.1766C13.7966 18.3949 13.8918 18.6262 13.8698 18.8757C13.8716 18.911 13.8121 18.9024 13.8102 18.867C13.7857 18.6319 13.7377 18.398 13.6438 18.1902C13.6307 18.1673 13.6655 18.1536 13.6785 18.1766Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.2703 17.2363C9.48983 16.7934 8.18213 17.1001 7.38997 17.32C6.38814 17.5984 5.57708 18.1267 4.69528 18.6588C4.64939 18.6849 4.61022 18.6161 4.64432 18.5906C5.64947 17.9337 6.5778 17.3873 7.75772 17.1229C8.48231 16.9658 9.5953 16.776 10.2795 17.1885C10.3162 17.2102 10.2951 17.2586 10.2703 17.2363Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.09241 18.1292C6.4714 17.1684 8.45416 16.2225 10.1384 16.9833C10.1744 16.9932 10.1422 17.0541 10.1174 17.0318C9.26935 16.6517 8.2494 16.8128 7.37345 17.0136C6.53287 17.2124 5.78685 17.6308 5.09241 18.1292Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.97843 19.2166C6.708 18.4917 7.46621 17.8599 8.53521 17.7315C8.55879 17.7303 8.56069 17.7656 8.53711 17.7669C7.52706 17.8921 6.66021 18.4825 5.97843 19.2166C5.96664 19.2173 5.97906 19.2284 5.97843 19.2166Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.89375 16.5374C6.63179 16.1904 7.60877 15.8896 8.39847 16.2847C8.42268 16.2952 8.40037 16.32 8.38795 16.3089C7.62309 15.9361 6.64484 16.2133 5.90617 16.5485C5.89438 16.5492 5.89375 16.5374 5.89375 16.5374Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.4155 10.5953C23.4155 10.5953 24.5382 7.28366 26.5635 6.69017C28.5888 6.09668 30.0308 5.4281 30.0308 5.4281C30.0308 5.4281 29.3362 6.36394 28.2861 7.28341C26.4343 8.90801 24.6402 8.08215 23.4155 10.5953Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M29.1306 6.05578C28.433 6.49522 27.7166 6.80561 26.9668 7.15327C26.0669 7.5681 25.323 8.24649 24.5269 8.83309C24.5157 8.84552 24.5026 8.82257 24.5138 8.81015C25.156 8.21998 25.8782 7.57823 26.674 7.20446C27.5044 6.817 28.3536 6.55859 29.1306 6.05578Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.9851 7.18139C27.1932 7.62589 26.2103 7.59591 25.4432 8.06272C25.4321 8.07515 25.419 8.0522 25.4302 8.03978C26.1836 7.53823 27.1665 7.56821 27.9851 7.18139Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.8956 6.70782C26.2215 7.14599 25.5296 7.69153 25.0811 8.36588C25.0699 8.3783 25.0457 8.36778 25.0569 8.35536C25.4892 7.59912 26.1626 7.14916 26.8956 6.70782C26.8949 6.69603 26.8949 6.69603 26.8956 6.70782Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.5253 6.54388C27.0992 6.75592 26.7371 7.05911 26.413 7.40756C26.3907 7.43241 26.3652 7.39831 26.3881 7.38525C26.6868 7.0027 27.0855 6.72119 27.5253 6.54388C27.5246 6.53209 27.5246 6.53209 27.5253 6.54388Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.4277 5.75901C23.4277 5.75901 24.5245 3.72568 24.0279 2.40452C23.532 1.09515 22.7018 0.607689 22.2973 -0.541065C22.2973 -0.541065 21.4612 0.402375 22.1597 1.96097C22.8582 3.51957 23.5109 4.00474 23.4962 4.83313C23.481 5.64974 23.4277 5.75901 23.4277 5.75901Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M22.3039 0.0260888C22.4419 0.834466 22.8683 1.50913 23.1917 2.24843C23.4878 2.91827 23.6319 3.61991 23.6469 4.3403C23.6482 4.36388 23.601 4.36642 23.5998 4.34284C23.5654 3.48161 23.3095 2.67956 22.9606 1.90616C22.6794 1.29463 22.3754 0.696163 22.2803 0.0273548C22.2791 0.00377679 22.3027 0.00251079 22.3039 0.0260888Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.6728 12.3076C23.6728 12.3076 24.2918 11.5059 25.9813 11.9236C27.6708 12.3412 28.7425 11.8226 29.8554 10.9707C30.9683 10.1188 31.7005 9.00358 32.7273 9.40954C32.7273 9.40954 30.9456 6.83321 28.3304 7.67119C25.7146 8.49738 23.6728 12.3076 23.6728 12.3076Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M31.5639 8.8807C30.134 8.67372 28.696 8.97558 27.378 9.53109C26.7193 9.81474 26.1234 10.166 25.5809 10.6325C25.1061 11.0364 24.6946 11.5196 24.1563 11.844C24.1334 11.8571 24.0961 11.8236 24.119 11.8106C25.1568 10.8799 26.1107 9.93018 27.4294 9.38646C28.725 8.85579 30.1787 8.62404 31.5744 8.85649C31.5751 8.86828 31.5763 8.89186 31.5639 8.8807Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.6467 11.1418C27.6921 10.3182 26.2267 10.5506 25.1649 11.0332C25.1184 11.0476 25.1028 10.9775 25.1376 10.9638C26.1305 10.5203 27.8483 10.1443 28.6467 11.1418Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.5885 10.4055C29.006 9.90477 28.1144 10.0354 27.4109 10.1441C26.6484 10.256 25.8047 10.3959 25.2189 10.9357C25.1848 10.9612 25.1351 10.9166 25.1692 10.8911C25.7661 10.3388 26.6217 10.1983 27.4071 10.0734C28.1342 9.9634 29.0258 9.83277 29.6115 10.3925C29.6239 10.4036 29.601 10.4167 29.5885 10.4055Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.2897 9.81216C29.0674 9.28665 27.3662 9.53169 26.2289 10.1484C26.183 10.1746 26.132 10.1064 26.1779 10.0802C27.3612 9.43738 29.0493 9.16939 30.3003 9.78795C30.3245 9.79847 30.3139 9.82269 30.2897 9.81216Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.9979 9.34848C29.577 8.86909 28.1207 9.49115 26.7528 9.77741C26.7174 9.77931 26.7031 9.73279 26.7385 9.73089C27.4866 9.57248 28.1702 9.31115 28.9326 9.19927C29.6486 9.10171 30.3113 9.11341 30.9979 9.34848C31.0103 9.35964 31.0096 9.34785 30.9979 9.34848Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.4302 8.24409C29.4511 8.28484 28.6802 8.68092 27.9188 9.25384C27.9077 9.26626 27.8946 9.24331 27.9058 9.23089C28.6516 8.58787 29.4368 8.23832 30.4289 8.22051C30.4414 8.23167 30.442 8.24346 30.4302 8.24409Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.2255 8.04864C28.1771 8.34139 26.9846 9.03204 26.4458 10.0068C26.4353 10.031 26.3986 10.0093 26.4092 9.98513C27.0273 8.94699 28.0443 8.28941 29.2242 8.02506C29.2242 8.02506 29.2373 8.04801 29.2255 8.04864Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.2262 8.68796C27.0588 8.87429 26.9281 9.0823 26.8105 9.31325C26.7145 9.50757 26.5832 9.70379 26.5232 9.908C26.5133 9.944 26.4655 9.93474 26.4754 9.89874C26.5699 9.45622 26.9113 8.98862 27.2262 8.68796C27.2255 8.67617 27.2373 8.67553 27.2262 8.68796Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.2631 11.5019C23.2631 11.5019 25.0771 7.63299 23.8562 4.93197C22.6464 2.21852 20.3038 2.62806 19.5217 1.27494C19.5217 1.27494 19.1145 2.27812 18.8086 4.06799C18.5028 5.85786 19.5686 7.4322 21.1874 8.51576C22.8069 9.6111 23.3325 10.8125 23.2631 11.5019Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.6935 1.83327C19.7658 2.73975 20.2619 3.61166 20.6828 4.40485C21.077 5.14035 21.4705 5.86407 21.8529 6.60021C22.5388 7.92303 23.1408 9.2267 23.4092 10.702C23.4248 10.7721 23.3187 10.7778 23.3031 10.7077C22.9966 8.96252 22.1932 7.43319 21.3644 5.86977C20.719 4.63936 19.7465 3.261 19.6699 1.83453C19.6686 1.81096 19.6922 1.80969 19.6935 1.83327Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.4311 3.54988C19.872 4.49569 20.8927 5.00839 21.4464 5.85356C21.4595 5.8765 21.4254 5.90198 21.4006 5.87967C20.8344 5.02335 19.8962 4.50622 19.4311 3.54988C19.4193 3.55052 19.4304 3.5381 19.4311 3.54988Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.3894 4.09597C19.5281 4.91613 20.3193 5.55938 20.9155 6.09487C21.4124 6.54111 21.9434 6.96187 22.2933 7.53423C22.3064 7.55718 22.2723 7.58265 22.2475 7.56034C21.452 6.39711 19.566 5.62347 19.3659 4.09723C19.377 4.08481 19.3888 4.08418 19.3894 4.09597Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.8219 5.76347C20.2295 6.30908 20.8262 6.63174 21.4117 6.96681C21.8388 7.2158 22.2412 7.44248 22.4787 7.90265C22.4911 7.9138 22.4682 7.92686 22.4557 7.9157C22.1163 7.31913 21.418 7.0847 20.8554 6.73657C20.4401 6.48695 20.0804 6.17521 19.8219 5.76347Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.5852 2.36469C21.5619 3.60095 22.1867 5.32902 22.0004 6.92331C21.9905 6.95931 21.9427 6.95005 21.9408 6.91469C22.0851 5.41724 21.5339 3.51969 20.5852 2.36469C20.5734 2.36532 20.5727 2.35353 20.5852 2.36469Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.5501 2.93954C22.4488 4.26275 22.9869 6.13736 22.3959 7.68243C22.3749 7.73085 22.3022 7.69928 22.3227 7.63907C22.8919 6.13063 22.3656 4.25539 21.5265 2.9408C21.5141 2.92965 21.537 2.91659 21.5501 2.93954Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.2197 3.51838C22.5339 4.30547 22.755 5.12121 22.8242 5.96875C22.8946 6.83987 22.6336 7.70514 22.7264 8.55141C22.727 8.5632 22.7034 8.56447 22.7028 8.55268C22.5332 7.81693 22.7986 7.03419 22.7699 6.27906C22.731 5.33531 22.5153 4.40105 22.2072 3.50722C22.2079 3.51901 22.2197 3.51838 22.2197 3.51838Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.8963 4.45157C23.9634 6.04949 23.5702 7.9741 23.1674 9.72188C23.1575 9.75788 23.1091 9.73684 23.1196 9.71263C23.5112 7.97727 23.8815 6.06571 22.8963 4.45157C22.8845 4.4522 22.8838 4.44041 22.8963 4.45157Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.7714 7.59233C21.495 8.29832 22.3959 8.78198 23.0966 9.50103C23.109 9.51219 23.0861 9.52524 23.0854 9.51345C22.3624 8.81925 21.4727 8.32316 20.7714 7.59233C20.7484 7.60538 20.7596 7.59296 20.7714 7.59233Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.4474 15.5602C21.4474 15.5602 22.4863 13.329 21.7878 11.7704C21.0893 10.2118 19.7418 10.4379 19.2861 9.65837C19.2861 9.65837 19.0454 10.2388 18.8758 11.2647C18.7063 12.2906 19.311 13.2039 20.243 13.8278C21.1757 14.4635 21.4731 15.1569 21.4474 15.5602Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.3858 9.97221C19.4979 10.9593 20.2368 11.9483 20.6975 12.8221C21.0799 13.5582 21.3903 14.2746 21.5407 15.0941C21.5563 15.1642 21.4502 15.1699 21.4346 15.0998C21.2349 14.0228 20.7362 13.1037 20.2351 12.1375C19.8794 11.459 19.4158 10.7509 19.3622 9.97348C19.3616 9.96169 19.3852 9.96042 19.3858 9.97221Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.2261 10.9621C19.4681 11.5048 20.087 11.8026 20.3972 12.2943C20.4102 12.3172 20.3761 12.3427 20.3513 12.3204C20.1717 12.0581 19.9003 11.8481 19.6754 11.6237C19.4996 11.4321 19.3461 11.2157 19.2261 10.9621Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.2079 11.2822C19.3837 12.1359 20.4583 12.5511 20.8866 13.2611C20.8996 13.2841 20.8655 13.3096 20.8407 13.2872C20.3671 12.6151 19.3031 12.1757 19.1843 11.2835C19.1954 11.2711 19.2072 11.2705 19.2079 11.2822Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.4484 12.2388C19.8548 12.7609 20.6765 12.8704 20.9805 13.4689C20.993 13.4801 20.97 13.4931 20.9576 13.482C20.7618 13.1378 20.3533 13.0178 20.0348 12.8103C19.8026 12.6691 19.6032 12.4788 19.4484 12.2388Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.8987 10.2757C20.4703 11.0135 20.8169 11.9643 20.7255 12.9033C20.7274 12.9386 20.6678 12.93 20.6659 12.8946C20.7264 12.0401 20.4324 10.9682 19.8987 10.2757C19.8751 10.2769 19.8869 10.2763 19.8987 10.2757Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.4487 10.6127C20.9751 11.3884 21.2796 12.4361 20.9505 13.3523C20.9295 13.4008 20.8457 13.3816 20.8667 13.3332C21.186 12.453 20.905 11.404 20.4258 10.6258C20.4251 10.614 20.4481 10.6009 20.4487 10.6127Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.8451 10.946C21.0348 11.3969 21.1656 11.851 21.204 12.3455C21.243 12.8518 21.1275 13.3427 21.1429 13.8503C21.1435 13.8621 21.12 13.8634 21.1193 13.8516C21.0264 13.4428 21.1588 13.0455 21.1484 12.6322C21.141 12.0533 21.0039 11.4813 20.8333 10.9466C20.8215 10.9473 20.8333 10.9466 20.8451 10.946Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.2284 11.4812C21.8462 12.4176 21.6327 13.5049 21.3917 14.5228C21.3819 14.5588 21.3334 14.5378 21.344 14.5135C21.5855 13.5074 21.765 12.4456 21.2284 11.4812Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.0017 13.2968C20.4253 13.6997 20.9369 13.9796 21.3494 14.3949C21.3618 14.4061 21.3389 14.4192 21.3382 14.4074C20.9153 14.0163 20.403 13.7246 20.0017 13.2968C19.9782 13.2981 19.9893 13.2857 20.0017 13.2968Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.3371 15.3941C22.3371 15.3941 23.8881 13.4546 25.5115 13.5211C27.123 13.5883 28.0157 14.5808 29.259 14.3958C29.259 14.3958 28.147 15.4841 26.1041 15.31C24.0494 15.1366 23.5531 14.7022 22.3371 15.3941Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M28.7481 14.565C27.8375 14.7794 26.9505 14.5551 26.047 14.4618C25.2023 14.3653 23.798 14.1924 23.1503 14.9011C23.128 14.9259 23.1025 14.8918 23.1254 14.8788C23.594 14.357 24.4664 14.3102 25.1297 14.3337C26.3124 14.3411 27.5383 14.7127 28.7481 14.565C28.7475 14.5532 28.7475 14.5532 28.7481 14.565Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.9772 14.9611C27.2189 14.9309 26.5349 14.743 25.8774 14.3882C25.8532 14.3776 25.8755 14.3528 25.8879 14.364C26.5429 14.6717 27.2505 14.8583 27.9766 14.9494C27.9884 14.9487 27.989 14.9605 27.9772 14.9611Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.2539 14.0424C27.0319 14.0898 26.8072 14.09 26.5851 14.1374C26.3401 14.1978 26.1218 14.316 25.8898 14.3994C25.878 14.4 25.865 14.377 25.8768 14.3764C26.1081 14.2812 26.3258 14.1513 26.5714 14.1027C26.8053 14.0546 27.0306 14.0662 27.2539 14.0424Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2988 13.869C25.8776 13.9507 25.2993 13.97 25.0242 14.3513C25.0019 14.3761 24.9528 14.3433 24.9869 14.3178C25.2974 13.9346 25.8527 13.9284 26.2988 13.869Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.0735 9.51401C23.0784 9.38369 23.1777 9.47294 23.2268 9.50578C23.4851 9.6929 23.4715 10.3202 23.4736 10.5802C23.4881 13.0505 21.7562 15.3662 20.503 17.3488C19.3917 19.111 18.402 20.9376 17.5707 22.8502C17.4964 23.0079 17.2537 22.8909 17.3274 22.7214C18.0863 21.0018 18.9669 19.3466 19.9568 17.7446C20.8481 16.2898 21.8618 14.9112 22.5458 13.3375C22.9469 12.4411 23.2828 11.4299 23.3239 10.4346C23.3349 10.1975 23.3216 9.94996 23.2618 9.71671C23.2481 9.68198 23.1354 9.34516 23.0958 9.48916C23.0853 9.51337 23.0735 9.51401 23.0735 9.51401Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.6566 10.4985C24.956 11.1036 24.281 11.7428 23.7047 12.4595C23.1507 13.1514 22.6973 13.956 22.0073 14.5369C21.985 14.5618 21.9471 14.5165 21.9576 14.4923C22.9742 12.948 24.1536 11.5723 25.6442 10.4873C25.6553 10.4749 25.6677 10.4861 25.6566 10.4985Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.5348 14.2712C23.8 14.6771 23.0104 14.9442 22.3662 15.499C21.7562 16.0283 21.1344 16.5582 20.5374 17.1105C20.504 17.1478 20.4543 17.1032 20.4878 17.0659C21.0312 16.3983 21.7697 15.8384 22.4144 15.2954C23.048 14.7648 23.7838 14.5952 24.5224 14.26C24.533 14.2358 24.546 14.2587 24.5348 14.2712Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.026 18.2928C28.189 18.024 28.9795 17.9933 29.2557 18.0731C29.5803 18.1739 29.779 18.3524 29.9593 18.6265C30.3573 18.3332 30.6678 17.95 31.1834 17.8632C31.6406 17.7913 32.3406 17.8365 32.6345 18.2464C32.99 17.6006 33.6545 18.0852 33.7872 18.5746C33.9348 19.1224 33.8868 19.5506 33.7974 20.0874C34.6347 20.2671 34.2894 21.7635 34.0567 22.2726C33.8127 22.7941 33.1577 23.5859 32.6007 23.7813C33.1049 24.1444 33.6763 24.6576 33.1192 25.2905C33.3109 25.3393 33.3329 25.5273 33.3299 25.693C34.164 25.1516 34.9161 26.3881 34.7654 27.1056C34.5851 27.931 33.4356 28.7613 32.611 28.8174C32.6118 30.1533 31.1683 30.5737 30.021 30.5644C28.685 30.5652 26.7407 29.1444 26.2448 27.835C26.2246 28.1199 25.9451 30.1803 25.8257 30.6005C25.5562 31.5253 25.1363 32.2927 24.2233 32.6846C22.9518 33.2258 21.1615 32.4707 21.1152 30.948C20.442 31.6226 19.6142 30.9576 19.5469 30.1455C19.215 30.1278 19.0091 30.2571 18.6813 30.0974C18.3895 29.9475 18.1019 29.6556 17.9334 29.3808C17.5077 28.718 17.536 27.9243 17.6749 27.2075C16.9353 27.3063 16.3104 26.6778 15.9375 26.1185C15.4627 25.4228 14.9605 24.6576 15.2444 23.7793C15.3254 23.5266 15.4462 23.3546 15.6378 23.1788C15.931 22.9148 15.8517 22.9782 15.7135 22.6072C15.4945 22.0515 15.6906 21.5208 16.3527 21.5207C16.2851 20.9213 15.973 20.3942 16.2342 19.7536C16.4428 19.234 16.982 18.7085 17.5218 18.6322C17.4935 17.6642 19.1897 17.987 19.6146 18.4134C19.5107 17.5796 19.5945 16.4992 20.1125 15.7975C20.6187 15.0964 21.0562 15.0965 21.7912 15.3526C21.6888 14.767 22.3258 14.52 22.7607 14.473C22.5899 13.7136 24.9442 12.6414 25.2864 13.5097C25.5407 13.4015 25.7931 13.2579 26.031 13.5052C26.2062 13.685 26.2873 14.0944 26.277 14.3433C26.2711 14.0125 26.4878 13.6462 26.8485 13.7569C27.1973 13.8682 27.5641 14.5343 27.7326 14.809C28.1981 15.5525 28.2361 18.0214 28.026 18.2928Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M26.4592 22.3613C27.1464 21.5086 28.5186 21.7423 28.993 22.6508C29.5245 22.4213 30.3452 22.7319 30.4928 23.2797C30.9421 23.2792 31.2758 23.7697 31.3445 24.168C30.8725 23.744 30.2768 24.3199 29.9383 24.6218C29.6674 24.861 29.1395 25.5987 28.6932 25.4335",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.4592 22.3613C27.1464 21.5086 28.5186 21.7423 28.993 22.6508C29.5245 22.4213 30.3452 22.7319 30.4928 23.2797C30.9421 23.2792 31.2758 23.7697 31.3445 24.168C30.8725 23.744 30.2768 24.3199 29.9383 24.6218C29.6674 24.861 29.1395 25.5987 28.6932 25.4335",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M31.3463 24.2033C31.1442 23.7413 30.3053 23.7509 29.8649 23.9164C29.3557 24.1211 28.997 24.7078 28.4474 24.8201",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.3463 24.2033C31.1442 23.7413 30.3053 23.7509 29.8649 23.9164C29.3557 24.1211 28.997 24.7078 28.4474 24.8201",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M26.2212 23.8756C26.8931 23.8395 27.4672 23.9623 28.0422 24.3216C28.226 24.4418 28.497 24.8647 28.6059 25.1308C28.8261 25.7101 28.7675 26.6 28.2592 27.0411C28.2004 26.6068 28.0191 26.5338 27.5835 26.569C27.0425 26.6217 26.5324 26.5899 26.0122 26.3696C25.5646 26.1808 25.1355 25.8965 24.9675 25.4089C24.8698 25.1304 24.7804 24.5677 24.9682 24.3212C25.0251 24.7201 25.0559 25.0731 25.2988 25.4148C25.5673 25.7905 25.9789 25.9694 26.4319 26.0397C26.754 26.0933 28.3312 25.9613 28.2585 27.0293",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2212 23.8756C26.8931 23.8395 27.4672 23.9623 28.0422 24.3216C28.226 24.4418 28.497 24.8647 28.6059 25.1308C28.8261 25.7101 28.7675 26.6 28.2592 27.0411C28.2004 26.6068 28.0191 26.5338 27.5835 26.569C27.0425 26.6217 26.5324 26.5899 26.0122 26.3696C25.5646 26.1808 25.1355 25.8965 24.9675 25.4089C24.8698 25.1304 24.7804 24.5677 24.9682 24.3212C25.0251 24.7201 25.0559 25.0731 25.2988 25.4148C25.5673 25.7905 25.9789 25.9694 26.4319 26.0397C26.754 26.0933 28.3312 25.9613 28.2585 27.0293",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.2436 24.9158C23.7565 24.8711 23.0222 24.6267 22.4831 23.6153C21.9441 22.6038 20.2042 21.4676 19.2163 22.0054C19.2163 22.0054 19.6786 22.0279 19.863 22.1598C20.6864 22.7422 21.0592 23.739 21.895 24.3326C22.3502 24.6628 22.914 25.0345 23.5035 25.0029C23.81 24.9864 24.1158 24.9582 24.4061 24.8598C24.8006 24.7204 24.904 24.4429 24.9734 24.4155",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.2436 24.9158C23.7565 24.8711 23.0222 24.6267 22.4831 23.6153C21.9441 22.6038 20.2042 21.4676 19.2163 22.0054C19.2163 22.0054 19.6786 22.0279 19.863 22.1598C20.6864 22.7422 21.0592 23.739 21.895 24.3326C22.3502 24.6628 22.914 25.0345 23.5035 25.0029C23.81 24.9864 24.1158 24.9582 24.4061 24.8598C24.8006 24.7204 24.904 24.4429 24.9734 24.4155",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.8721 21.4298C24.7378 21.1296 24.627 20.8281 24.355 20.6063C24.0823 20.3726 23.7905 20.2228 23.4337 20.1828C23.1718 20.1496 22.9255 20.1865 22.7098 20.3518C22.6416 20.4027 22.5628 20.4779 22.5077 20.5518C22.4749 20.6008 22.4551 20.6728 22.4092 20.6989C22.3445 20.596 22.1633 20.523 22.0546 20.4815C21.8734 20.4085 21.6927 20.3472 21.5029 20.3338C21.0759 20.3094 20.641 20.3564 20.2758 20.6007C19.8653 20.8828 19.2728 21.5176 19.2168 22.0172",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8721 21.4298C24.7378 21.1296 24.627 20.8281 24.355 20.6063C24.0823 20.3726 23.7905 20.2228 23.4337 20.1828C23.1718 20.1496 22.9255 20.1865 22.7098 20.3518C22.6416 20.4027 22.5628 20.4779 22.5077 20.5518C22.4749 20.6008 22.4551 20.6728 22.4092 20.6989C22.3445 20.596 22.1633 20.523 22.0546 20.4815C21.8734 20.4085 21.6927 20.3472 21.5029 20.3338C21.0759 20.3094 20.641 20.3564 20.2758 20.6007C19.8653 20.8828 19.2728 21.5176 19.2168 22.0172",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M28.026 18.2928C27.5065 18.7464 26.2582 19.4991 26.1398 21.9174Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.026 18.2928C27.5065 18.7464 26.2582 19.4991 26.1398 21.9174",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.6283 18.4481C20.113 19.1079 20.7026 20.4004 20.7026 20.4004Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.6283 18.4481C20.113 19.1079 20.7026 20.4004 20.7026 20.4004",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M17.6873 27.2187C18.2437 25.9119 20.1946 24.152 21.9807 24.3871Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.6873 27.2187C18.2437 25.9119 20.1946 24.152 21.9807 24.3871",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M26.2579 27.8579C26.0753 27.0992 25.9286 26.3505 25.9286 26.3505Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2579 27.8579C26.0753 27.0992 25.9286 26.3505 25.9286 26.3505",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M32.613 23.7925C32.0107 23.3637 31.0263 23.0855 30.4785 23.2332Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.613 23.7925C32.0107 23.3637 31.0263 23.0855 30.4785 23.2332",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M23.4298 24.0727C23.267 23.9041 23.1049 23.7472 22.9992 23.5401C22.7076 22.9528 22.8121 22.0368 23.3329 21.6069C23.6385 21.354 23.9766 21.2649 24.3595 21.3507C24.4551 21.3693 24.5736 21.3747 24.6593 21.4292C24.7084 21.4621 24.7096 21.4856 24.745 21.4837C24.7686 21.4825 24.8126 21.421 24.8237 21.4086C24.8696 21.3825 24.9273 21.3557 24.9862 21.3526C25.4336 21.3167 26.1319 21.5511 26.1951 22.068C26.4669 22.0652 26.6638 22.2083 26.7956 22.4613C26.9144 22.6914 26.8693 22.954 26.7995 23.1942C26.7092 23.4946 26.5457 23.7517 26.3095 23.9771C25.9264 24.3288 25.1645 24.4524 24.9151 24.4304C24.3807 24.3881 23.6043 24.2406 23.4298 24.0727Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M25.6881 24.2943C26.1938 24.2435 26.5792 23.7144 26.8425 23.3338C26.9745 23.1493 27.0822 22.9544 27.1769 22.7365C27.2512 22.5788 27.3013 22.4106 27.3396 22.243C27.42 21.9786 27.3713 21.7329 27.1694 21.4955C27.0292 21.5267 27.0172 21.3027 27.1606 21.3304C28.2441 21.4732 26.6332 24.279 25.6881 24.2943C25.677 24.3067 25.6764 24.2949 25.6881 24.2943Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.9802 24.2312C26.5659 24.1289 26.9077 23.4484 27.0449 22.9208C27.0943 22.7408 27.2161 21.7057 26.8327 21.8327C26.6584 21.8893 26.678 21.5927 26.8226 21.6441C27.3037 21.7956 27.2324 22.4497 27.159 22.8438C27.0367 23.4297 26.6516 24.1834 25.9933 24.2542C25.9697 24.2555 25.9684 24.2319 25.9802 24.2312Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.9078 24.1997C26.3905 24.162 26.9325 23.9082 27.3586 23.6962C27.6234 23.5637 27.8112 23.3172 28.0636 23.1736C28.3736 23.0032 28.0792 23.2437 28.0665 23.0079C28.0608 22.9018 28.1991 22.8353 28.2854 22.9016C28.4842 23.0801 27.9727 23.4622 27.8474 23.5517C27.3247 23.9463 26.573 24.2586 25.909 24.2233C25.8973 24.2239 25.8966 24.2121 25.9078 24.1997Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8804 24.444C24.1869 24.0792 24.0127 23.0364 24.5612 22.463C24.6622 22.363 24.789 22.5218 24.6873 22.61C24.0977 23.0791 24.2806 24.0624 24.8915 24.4316C24.904 24.4427 24.8928 24.4551 24.8804 24.444Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8326 24.4348C24.3225 24.4031 23.909 24.1889 23.6938 23.7039C23.4643 23.1723 23.5623 22.5759 24.0652 22.2533C24.1793 22.1763 24.2955 22.3592 24.1808 22.4245C23.1935 22.974 23.9055 24.3428 24.8326 24.4348C24.8444 24.4342 24.8438 24.4224 24.8326 24.4348Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.4031 24.3632C23.7726 24.2906 23.349 23.8878 23.2323 23.2556C23.1493 22.8108 23.2094 22.1691 23.6845 21.9899C23.8117 21.9358 23.8833 22.1684 23.7548 22.1989C23.2406 22.3093 23.219 23.008 23.3354 23.4156C23.4936 23.9391 23.8774 24.2614 24.4031 24.3632C24.4149 24.3626 24.4149 24.3626 24.4031 24.3632Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.1039 24.2966C22.8951 24.2433 21.5608 22.2932 22.9264 21.5223C23.0758 21.4433 23.1828 21.6741 23.0321 21.7294C22.3473 21.9672 22.4053 22.8272 22.7049 23.3431C23.0046 23.8591 23.5187 24.1861 24.1039 24.2966Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.9474 24.3695C25.2469 24.2234 25.3564 23.8391 25.3988 23.5295C25.4321 23.2676 25.4291 22.7712 25.1497 22.6325C25.0646 22.5898 25.1284 22.4563 25.2135 22.499C25.8318 22.785 25.592 24.2639 24.9487 24.3931C24.9369 24.3937 24.9362 24.3819 24.9474 24.3695Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.9591 24.3689C25.0839 23.8302 25.0994 23.2382 24.9642 22.7016C24.933 22.5614 25.1452 22.55 25.1292 22.6927C25.0771 23.2631 25.1304 23.8159 24.9709 24.3683C24.9715 24.3801 24.9597 24.3807 24.9591 24.3689Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.0192 24.3893C25.6613 24.2365 26.2352 23.0353 25.6657 22.5574C25.5788 22.4794 25.7139 22.3539 25.7897 22.4444C26.3327 23.0891 25.7308 24.2092 25.0192 24.3893Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.949 21.3191C24.8936 21.1684 24.8971 21.0145 24.9838 20.868C25.0483 20.7463 25.2169 20.5835 25.3577 20.5642C25.4861 20.5336 25.5552 20.7191 25.4274 20.7614C25.3691 20.7764 25.2984 20.7802 25.2407 20.8069C25.183 20.8336 25.126 20.8722 25.0813 20.9219C24.9809 21.0337 24.9532 21.177 24.9607 21.3185C24.9607 21.3185 24.9496 21.3309 24.949 21.3191Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.834 21.5081C25.8407 21.4131 25.8363 21.3306 25.8312 21.2363C25.8249 21.1184 25.8093 21.0483 25.7001 20.995C25.615 20.9523 25.6664 20.8077 25.7508 20.8386C26.0264 20.9066 25.8946 21.3156 25.834 21.5081Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.1497 21.8812C26.1179 21.7292 26.1096 21.5759 26.089 21.4115C26.0839 21.3172 26.0677 21.2353 26.0391 21.1423C26.0117 21.0728 25.9731 21.0158 25.9687 20.9332C25.9655 20.8743 26.0337 20.8233 26.0828 20.8562C26.2175 20.9435 26.2165 21.1446 26.2241 21.286C26.2231 21.4871 26.1978 21.6776 26.1726 21.8681C26.1739 21.8917 26.1503 21.893 26.1497 21.8812Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8615 21.2293C24.7488 20.2304 24.8562 19.1487 24.8849 18.1422C24.9143 17.1475 24.9083 16.1547 25.0208 15.1673C25.0201 15.1555 25.0437 15.1543 25.0443 15.1661C24.9933 16.1974 24.9652 17.2157 24.9496 18.2451C24.9402 18.7304 24.9432 19.2268 24.9337 19.712C24.9138 20.2215 24.8349 20.7341 24.8615 21.2293C24.8621 21.241 24.8739 21.2404 24.8615 21.2293Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.5298 15.0519C24.3943 16.0523 24.5567 17.0959 24.5876 18.111C24.6134 19.0318 24.6386 19.9408 24.629 20.8635C24.6296 20.8753 24.6061 20.8766 24.6054 20.8648C24.5876 19.8726 24.5704 18.8922 24.5526 17.9C24.5367 16.9432 24.4383 15.9909 24.5298 15.0519C24.5173 15.0408 24.5291 15.0401 24.5298 15.0519Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.4199 20.6746C21.8789 19.6278 21.6962 18.207 21.5864 17.0424C21.5845 17.0071 21.6434 17.0039 21.6453 17.0393C21.7918 18.2255 21.9576 19.5526 22.431 20.6622C22.4316 20.674 22.4199 20.6746 22.4199 20.6746Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.6523 16.0695C21.5768 16.8657 21.9264 17.6509 22.0742 18.4233C22.2171 19.1013 22.3133 19.7937 22.5957 20.4288C22.6088 20.4518 22.5623 20.4661 22.561 20.4425C22.227 19.7274 22.1126 18.9178 21.9412 18.1467C21.7859 17.4574 21.5959 16.7819 21.6523 16.0695C21.6399 16.0584 21.6516 16.0577 21.6523 16.0695Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.4847 16.4485C26.5 17.3935 26.4681 18.3411 26.3053 19.272C26.1887 19.964 26.0947 20.8558 25.738 21.4779C25.7157 21.5027 25.679 21.481 25.6895 21.4568C26.0613 20.893 26.1272 19.92 26.2339 19.264C26.3967 18.3331 26.4646 17.3954 26.4847 16.4485Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.1341 23.5931C19.6489 23.2354 18.0893 23.0354 16.9631 21.8781C16.9383 21.8558 16.9711 21.8067 16.9966 21.8408C17.6065 22.411 18.3249 22.7981 19.107 23.0517C19.7804 23.2638 20.4817 23.3325 21.1341 23.5931Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.4111 23.9091C20.4288 23.8909 19.4769 23.7765 18.5099 23.6038C17.7099 23.4576 16.8851 23.2891 16.2213 22.8163C16.1964 22.794 16.2293 22.745 16.2541 22.7673C17.6754 23.6959 19.748 23.762 21.4111 23.9091Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.3086 23.7611C19.9364 23.5274 18.4712 23.3223 17.2097 22.7279C17.1731 22.7063 17.2059 22.6572 17.2419 22.6671C18.5703 23.1869 19.9716 23.3008 21.3192 23.7369C21.3316 23.748 21.3322 23.7598 21.3086 23.7611Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.7196 24.9385C22.2152 25.0128 21.8044 25.5078 21.4436 25.8346C21.1169 26.1359 20.8504 26.4576 20.5852 26.8029C20.5635 26.8395 20.5138 26.7949 20.5361 26.77C20.7813 26.2721 21.2339 25.8931 21.6399 25.5285C21.9561 25.2514 22.2815 24.9265 22.7289 24.8907C22.7407 24.89 22.7432 24.9372 22.7196 24.9385Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.6314 24.8368C21.9295 24.7562 21.2564 25.4308 20.7834 25.87C20.1753 26.4347 19.6305 27.0788 19.426 27.8937C19.4161 27.9297 19.3683 27.9204 19.3664 27.8851C19.528 26.9306 20.2123 26.2435 20.9004 25.6273C21.3635 25.2241 21.9611 24.6836 22.6308 24.825C22.6419 24.8126 22.6432 24.8361 22.6314 24.8368Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8613 24.528C24.53 26.2837 24.1799 27.9105 23.1856 29.4299C23.1527 29.4789 23.0795 29.4356 23.1005 29.3872C23.5446 28.6303 23.9534 27.8753 24.2156 27.0336C24.479 26.2155 24.6463 25.3671 24.8613 24.528Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.912 25.0336C24.9019 26.6066 24.3549 28.0902 23.7223 29.5193C23.7019 29.5795 23.6168 29.5368 23.6372 29.4766C24.1861 28.0283 24.8187 26.5993 24.8884 25.0349C24.8878 25.0231 24.9114 25.0218 24.912 25.0336Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.1581 31.1767C20.113 30.7772 20.3323 30.458 20.5025 30.106C20.7589 29.5957 21.0643 29.1182 21.3449 28.6184C21.3771 28.5575 21.4627 28.612 21.4299 28.6611C21.2163 29.0864 20.9785 29.5011 20.7412 29.9277C20.5369 30.3051 20.2407 30.7348 20.2052 31.1742C20.1947 31.1984 20.1593 31.2003 20.1581 31.1767Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.1855 28.2959C20.8732 28.6437 20.6347 29.0467 20.4074 29.4372C20.1801 29.8278 19.905 30.2091 19.8105 30.6516C19.8013 30.6994 19.7181 30.692 19.7267 30.6324C19.9058 29.7834 20.6179 28.953 21.1855 28.2959C21.1849 28.2841 21.1973 28.2953 21.1855 28.2959Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.57 26.5342C28.1762 27.6958 29.3664 28.2822 30.5253 28.7283C30.5737 28.7494 30.5428 28.8338 30.495 28.8245C29.3032 28.4274 28.1068 27.7232 27.5582 26.5349L27.57 26.5342Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.4311 26.5891C28.0577 27.6904 29.0847 28.321 30.1464 28.9379C30.2073 28.9701 30.1528 29.0558 30.1037 29.023C29.0687 28.4637 27.848 27.749 27.3963 26.6027C27.3957 26.591 27.4187 26.5779 27.4311 26.5891Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2936 26.5437C26.597 27.1304 26.8278 27.6855 27.3247 28.1317C27.7967 28.5557 28.3567 28.8566 28.9056 29.17C28.9298 29.1806 28.9087 29.229 28.8845 29.2185C27.6919 28.5849 26.6518 27.9314 26.2936 26.5437C26.2818 26.5443 26.2929 26.5319 26.2936 26.5437Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.7653 25.4533C29.7935 26.1075 31.421 26.0319 32.5557 25.8055C32.614 25.7905 32.6427 25.8836 32.5837 25.8867C31.4503 26.1368 29.7397 26.205 28.7541 25.4657C28.7417 25.4546 28.7646 25.4415 28.7653 25.4533Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.9885 25.4294C29.9125 25.4626 30.7241 25.3835 31.6099 25.1468C31.6564 25.1325 31.6838 25.2019 31.6373 25.2163C30.7925 25.5572 29.8723 25.5948 28.9898 25.453C28.9662 25.4543 28.965 25.4307 28.9885 25.4294Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.7212 25.5148C29.2219 26.6939 30.6632 27.113 31.7811 27.455C31.8171 27.4649 31.8078 27.5127 31.7718 27.5028C30.6093 27.2105 29.1209 26.7939 28.7094 25.5154C28.7087 25.5036 28.7205 25.503 28.7212 25.5148Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.4179 22.067C28.7107 21.3537 29.171 20.6787 29.6717 20.0962C29.7052 20.0589 29.7431 20.1041 29.7214 20.1408C29.2462 20.7575 28.8193 21.3952 28.4304 22.0781C28.4316 22.1017 28.4192 22.0906 28.4179 22.067Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.2831 21.9795C28.4392 21.1436 28.884 20.3985 29.3424 19.6881C29.3641 19.6515 29.4131 19.6843 29.3908 19.7092C28.9448 20.4307 28.5355 21.1739 28.3067 21.9783C28.2962 22.0025 28.272 21.992 28.2831 21.9795Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.066 21.8967C28.0486 21.3538 28.2957 20.8912 28.518 20.4064C28.7619 19.8849 29.0065 19.3752 29.3969 18.9404C29.4192 18.9156 29.4683 18.9484 29.4342 18.9739C29.1008 19.3701 28.8878 19.8072 28.6643 20.2685C28.4086 20.7906 28.0926 21.2923 28.0889 21.8836C28.0902 21.9072 28.0666 21.9085 28.066 21.8967Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.9899 22.5919C29.4841 21.6669 30.1509 20.8744 30.9668 20.2158C31.0009 20.1903 31.0513 20.2467 31.0178 20.284C30.2503 20.9636 29.5344 21.7233 29.0266 22.6136C29.0043 22.6385 28.9676 22.6168 28.9899 22.5919Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.1213 22.744C31.0852 22.4203 31.8976 21.9156 32.5787 21.1697C32.6122 21.1324 32.6619 21.177 32.6284 21.2143C31.987 22.0409 31.1132 22.5016 30.1238 22.7912C30.1127 22.8036 30.0984 22.7571 30.1213 22.744Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.1866 22.8587C31.0912 22.751 31.8111 22.2867 32.5403 21.7747C32.5861 21.7485 32.6253 21.8174 32.5912 21.8429C31.978 22.3132 31.0388 23.0967 30.1878 22.8823C30.1754 22.8711 30.1748 22.8593 30.1866 22.8587Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.22783 35.4961C4.22783 35.4961 3.54881 34.7404 1.89883 35.2783C0.248841 35.8161 -0.862966 35.3674 -2.02786 34.5906C-3.20455 33.8143 -4.00676 32.746 -4.99783 33.2249C-4.99783 33.2249 -3.39295 30.5258 -0.732749 31.1869C1.92682 31.8363 4.22783 35.4961 4.22783 35.4961Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M-3.88387 32.6094C-2.51848 32.276 -1.04589 32.3979 0.278755 32.847C1.63876 33.2942 2.64368 34.1742 3.75407 35.0368C3.77891 35.0591 3.74481 35.0846 3.7206 35.074C3.21027 34.8177 2.79908 34.426 2.35505 34.0833C1.76259 33.6185 1.12994 33.286 0.418563 33.0286C-0.955768 32.5349 -2.44522 32.3193 -3.8826 32.633C-3.89439 32.6336 -3.89566 32.61 -3.88387 32.6094Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.817675 34.6675C-0.0934064 33.6237 1.65793 33.8725 2.68342 34.2549C2.73184 34.2759 2.69964 34.3368 2.65122 34.3157C1.55437 33.9253 0.0811347 33.7916 -0.817675 34.6675C-0.817042 34.6793 -0.817042 34.6793 -0.817675 34.6675Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-1.82299 34.0002C-1.29866 33.4164 -0.433631 33.4527 0.279406 33.5208C1.08676 33.5839 1.97789 33.6661 2.63246 34.1866C2.6691 34.2083 2.62447 34.258 2.58784 34.2363C1.99538 33.7715 1.21034 33.6836 0.473728 33.6168C-0.262887 33.5499 -1.23781 33.4486 -1.80993 34.0232C-1.82172 34.0238 -1.83415 34.0126 -1.82299 34.0002Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.9446 44.109C10.9446 44.109 11.6201 45.0186 11.3979 47.9271C11.1758 50.8357 12.0825 52.7496 13.9415 53.903C15.8006 55.0565 17.0029 55.4293 17.2958 56.0402C17.2958 56.0402 17.1635 55.338 17.4319 53.29C17.7002 51.242 17.1935 49.0702 14.9334 47.7136C12.6851 46.3565 11.7599 45.2002 10.9446 44.109Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M16.8018 54.9908C16.5906 54.1391 16.1237 53.372 15.7277 52.6012C15.3701 51.8873 14.9437 51.2127 14.5291 50.5374C13.6092 49.038 12.7252 47.5484 11.9318 45.9831C11.9188 45.9602 11.9529 45.9347 11.9659 45.9576C12.832 47.5545 13.7321 49.1259 14.69 50.6706C15.1301 51.38 15.5341 52.0795 15.9172 52.8274C16.2741 53.5295 16.6533 54.2067 16.8136 54.9902C16.826 55.0014 16.8025 55.0026 16.8018 54.9908Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.1779 54.2504C14.7711 53.9412 14.5997 53.1701 14.516 52.7135C14.3955 52.0106 14.3525 51.209 14.564 50.5237C14.5745 50.4995 14.5987 50.51 14.6 50.5336C14.4299 51.1102 14.5027 51.8039 14.5703 52.4032C14.6361 52.9672 14.8113 53.809 15.2015 54.2492C15.2015 54.2492 15.1903 54.2616 15.1779 54.2504Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.3099 53.7177C13.8564 53.1982 13.5782 52.421 13.495 51.7516C13.3904 50.9059 13.4421 49.8864 13.682 49.0695C13.6919 49.0335 13.7403 49.0546 13.7298 49.0788C13.5208 49.8112 13.4666 50.7836 13.5307 51.5368C13.5811 52.2553 13.8532 53.1393 14.3099 53.7177C14.3217 53.7171 14.3217 53.7171 14.3099 53.7177Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4625 52.9119C13.1967 52.1459 13.0495 51.3853 13.0176 50.5712C12.9813 49.6746 13.1776 48.7064 12.9644 47.8193C12.9632 47.7957 12.9861 47.7827 12.9992 47.8056C13.1818 48.5643 13.0356 49.3643 13.0296 50.1331C13.0212 51.0794 13.1197 52.0318 13.4625 52.9119C13.4631 52.9237 13.4749 52.9231 13.4625 52.9119Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.7218 51.8877C12.5672 51.2102 12.5213 50.5743 12.626 49.8829C12.711 49.2636 13.0618 48.3107 12.8639 47.7065C12.8626 47.683 12.8862 47.6817 12.8986 47.6929C13.0647 48.145 12.8593 48.7236 12.7891 49.1766C12.661 50.0939 12.5775 50.9614 12.7448 51.8746C12.7343 51.8988 12.7225 51.8995 12.7218 51.8877Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.9217 53.2582C16.3616 52.2951 15.6642 51.1976 14.6435 50.6849C14.6069 50.6632 14.6391 50.6024 14.6757 50.624C15.733 51.1584 16.395 52.2579 16.9217 53.2582C16.9223 53.27 16.9335 53.2576 16.9217 53.2582Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.0692 52.4818C16.5583 51.7762 16.1667 51.0878 15.4847 50.4978C14.9264 50.0076 14.1975 49.6447 13.6733 49.129C13.636 49.0956 13.6918 49.0335 13.7291 49.0669C13.967 49.3143 14.3438 49.5068 14.6146 49.7051C14.9959 49.9802 15.3424 50.269 15.6902 50.5814C16.3113 51.1392 16.6303 51.7959 17.0692 52.4818Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.6421 51.1333C16.3328 50.878 16.0681 50.573 15.7471 50.3183C15.3403 50.0091 14.9131 49.7601 14.4853 49.4993C14.0457 49.2392 13.5905 48.9089 13.3071 48.4749C13.281 48.429 13.3499 48.3898 13.3753 48.4239C13.7619 49.018 14.4175 49.3374 15.0043 49.6961C15.6519 50.0869 16.1178 50.6176 16.6421 51.1333C16.6539 51.1327 16.665 51.1203 16.6421 51.1333Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.5362 50.2641C16.0024 49.5716 15.3625 48.8847 14.6602 48.3549C13.9703 47.8363 13.2029 47.4164 12.4683 46.9474C12.4317 46.9258 12.4632 46.8531 12.5005 46.8866C13.2351 47.3555 14.0025 47.7754 14.6937 48.3176C15.3966 48.8592 16.0247 49.5467 16.5591 50.251C16.5833 50.2616 16.5492 50.287 16.5362 50.2641Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M3.34882 53.9162C3.34882 53.9162 5.07563 53.2678 7.16687 52.8008C9.25811 52.3338 11.8675 48.9661 9.97143 42.7189C9.97143 42.7189 10.2192 44.6919 9.26592 45.6534C8.3126 46.615 7.0416 45.8438 5.61474 47.8949C4.17546 49.9348 4.43989 51.7768 4.26883 52.5545C4.11439 53.2012 3.34882 53.9162 3.34882 53.9162Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M4.16062 53.3997C4.50685 52.8018 5.17226 52.4232 5.70545 52.0044C6.47609 51.3837 7.21998 50.7053 7.87692 49.9489C9.20195 48.4235 9.76109 46.7264 10.0457 44.7604C10.045 44.7486 10.0686 44.7473 10.0699 44.7709C9.89243 46.5302 9.41075 48.1285 8.30464 49.5476C7.74012 50.2636 7.08991 50.9251 6.40116 51.5296C6.085 51.8067 5.75578 52.0608 5.43898 52.3261C4.99566 52.6573 4.46666 52.934 4.16062 53.3997Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.69908 51.5383C5.03439 51.1775 5.51204 51.0454 5.96422 50.8793C6.62416 50.6192 7.27485 50.4069 7.86762 49.9967C7.86762 49.9967 7.87941 49.9961 7.86826 50.0085C7.55336 50.3092 7.13718 50.4852 6.73216 50.6489C6.09579 50.9077 5.21732 51.0612 4.69908 51.5383C4.69971 51.5501 4.71213 51.5613 4.69908 51.5383Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.8404 50.8687C5.27192 50.5381 5.77188 50.3812 6.27058 50.2007C6.97768 49.9381 7.83701 49.8683 8.38619 49.3068C8.39734 49.2944 8.40977 49.3055 8.39861 49.318C7.48002 50.2658 5.83478 50.0113 4.8404 50.8687C4.82861 50.8693 4.84103 50.8805 4.8404 50.8687Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.19645 50.2347C5.65408 49.95 6.277 49.8811 6.78939 49.7353C7.46429 49.5336 8.19813 49.3286 8.73995 48.8503C8.7511 48.8378 8.76353 48.849 8.75237 48.8614C8.43075 49.257 7.88426 49.4282 7.41966 49.5832C7.08284 49.6959 6.74539 49.7968 6.40794 49.8977C6.01218 50.0135 5.54125 50.0506 5.19645 50.2347C5.18529 50.2471 5.19708 50.2464 5.19645 50.2347Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.37973 48.5814C5.69755 48.115 6.56551 47.9857 7.06484 47.817C7.83152 47.563 9.16977 47.3847 9.66229 46.6489C9.67345 46.6365 9.69766 46.647 9.68651 46.6594C9.40468 47.1357 8.62558 47.3785 8.13803 47.5465C7.66165 47.7022 7.17094 47.8113 6.69519 47.9787C6.28954 48.1305 5.65609 48.2237 5.37973 48.5814C5.38036 48.5932 5.39278 48.6043 5.37973 48.5814Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.8284 48.5692C6.49214 48.3799 7.17084 48.2488 7.81899 47.9894C8.34 47.7841 9.34729 47.3871 9.61416 46.8526C9.62532 46.8402 9.63774 46.8513 9.63837 46.8631C9.40434 47.3486 8.73387 47.6329 8.27244 47.8468C7.47798 48.2442 6.6795 48.3462 5.8284 48.5692Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.37379 51.7193C8.80381 51.1405 9.16729 50.4235 9.33035 49.7171C9.40694 49.382 9.41153 49.027 9.40496 48.6845C9.40092 48.3892 9.44697 47.9256 9.31389 47.649C9.30083 47.6261 9.34735 47.6117 9.34862 47.6353C9.58005 48.2022 9.53575 49.1386 9.41414 49.7363C9.27592 50.4649 8.84044 51.1622 8.37379 51.7193C8.37442 51.7311 8.37442 51.7311 8.37379 51.7193Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.02248 51.5608C8.45503 51.0292 8.73852 50.3637 8.9519 49.7138C9.13372 49.1366 9.14923 48.5446 9.23483 47.937C9.23357 47.9134 9.26957 47.9233 9.2702 47.9351C9.19037 49.3109 8.99558 50.5273 8.02248 51.5608C8.02311 51.5726 8.03553 51.5838 8.02248 51.5608Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.07348 52.694C6.90432 52.0937 7.51387 51.1152 7.76784 50.1202C7.77836 50.096 7.80258 50.1065 7.80384 50.1301C7.61008 51.1455 6.92917 52.116 6.07348 52.694Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.5983 52.8733C6.33736 52.3252 7.11955 51.4793 7.34195 50.5569C7.35184 50.5209 7.39963 50.5302 7.38974 50.5662C7.16923 51.5239 6.39821 52.3574 5.5983 52.8733C5.58714 52.8857 5.58651 52.8739 5.5983 52.8733Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.8593 48.7783C10.0411 48.201 10.1044 47.6183 10.0721 47.017C10.0462 46.5337 9.91539 46.0796 9.90122 45.5956C9.89932 45.5603 9.95827 45.5571 9.96017 45.5925C10.1388 46.7179 10.2968 47.6789 9.88288 48.777C9.87236 48.8012 9.84878 48.8025 9.8593 48.7783Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.7574 42.9885C13.7574 42.9885 19.8544 42.9213 22.3883 44.9725C24.9215 47.0119 25.0234 48.9099 25.0782 50.8105C25.1323 52.6992 25.3486 53.6453 25.3486 53.6453C25.3486 53.6453 24.6367 52.2766 23.2584 52.1496C21.8808 52.0344 19.6239 51.3989 18.5898 49.3145C17.5681 47.2412 18.0496 44.3187 13.7574 42.9885Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.7634 52.4353C24.1846 50.2437 22.9608 48.3704 21.295 46.8519C20.4745 46.1038 19.576 45.4427 18.6123 44.8915C17.6729 44.3508 16.6959 43.9894 15.6927 43.5822C15.6443 43.5612 15.6758 43.4885 15.7236 43.4978C17.855 43.9981 19.9408 45.4113 21.498 46.8883C23.0669 48.3647 24.3875 50.2801 24.7634 52.4353C24.764 52.4471 24.787 52.434 24.7634 52.4353Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.1864 47.1932C22.4669 45.3347 19.826 44.1523 17.285 44.1705C17.2378 44.1731 17.2216 44.0912 17.2806 44.088C19.8196 44.0345 22.4892 45.3099 24.1864 47.1932Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.6019 44.8609C20.1642 44.2879 18.7962 43.912 17.2334 44.0905C17.1862 44.0931 17.183 44.0341 17.2296 44.0198C18.0051 43.9309 18.7647 43.9847 19.5398 44.1086C20.2796 44.2344 20.9135 44.5905 21.6019 44.8609C21.6137 44.8603 21.6131 44.8485 21.6019 44.8609Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.8748 47.7775C22.5208 46.5615 20.9664 45.3562 19.0978 45.1255C19.05 45.1163 19.0574 45.0331 19.117 45.0417C21.0209 45.2705 22.5412 46.5013 23.8748 47.7775C23.8873 47.7886 23.8984 47.7762 23.8748 47.7775Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.7306 50.0606C24.2766 49.0919 23.6403 48.2511 22.8564 47.5247C22.0726 46.7983 21.182 46.0658 20.1386 45.7908C20.1026 45.7809 20.1106 45.7095 20.1473 45.7312C21.2024 46.0056 22.1061 46.761 22.8905 47.4992C23.6632 48.2381 24.312 49.09 24.743 50.0718C24.7542 50.0593 24.7306 50.0606 24.7306 50.0606Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.7537 51.6855C23.4276 51.3365 23.2031 50.8993 22.9452 50.4994C22.5977 49.9742 22.2497 49.4372 21.9252 48.8989C21.3011 47.8447 20.5957 46.8185 20.0175 45.7382C19.992 45.7041 20.0491 45.6656 20.0745 45.6997C20.6136 46.7111 21.2804 47.6803 21.8772 48.665C22.1755 49.1574 22.4733 49.638 22.7716 50.1303C23.0942 50.6332 23.3623 51.2218 23.7537 51.6855C23.7655 51.6849 23.7655 51.6849 23.7537 51.6855Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.7319 51.3739C21.0793 49.4409 20.1386 47.115 18.8637 44.9489C18.8382 44.9148 18.8952 44.8763 18.9207 44.9104C20.1957 47.0765 21.1252 49.4148 22.7319 51.3739Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.4481 49.8831C18.9692 48.8921 18.5859 47.9195 18.5382 46.8107C18.4996 46.0916 18.4013 44.7018 17.6024 44.3545C17.5664 44.3446 17.5986 44.2838 17.6234 44.3061C18.2032 44.5351 18.4393 45.4091 18.5398 45.9594C18.6571 46.6034 18.6101 47.268 18.7628 47.91C18.918 48.5993 19.1768 49.2356 19.4481 49.8831Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.9527 49.5959C19.5901 48.7878 19.3435 47.938 19.0497 47.0907C18.7814 46.2775 18.6021 45.1403 18.0349 44.485C18.0094 44.4509 18.054 44.4012 18.0795 44.4353C18.5834 45.0112 18.7513 45.9362 18.9791 46.657C19.291 47.6216 19.5366 48.6725 19.9527 49.5959C19.9534 49.6077 19.9651 49.6071 19.9527 49.5959Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M3.37466 29.0749C3.37466 29.0749 1.11629 24.6679 -1.31596 23.6281C-3.73643 22.5876 -5.14431 23.2307 -6.5267 23.9079C-7.9091 24.5851 -8.66652 24.7912 -8.66652 24.7912C-8.66652 24.7912 -7.41372 24.7831 -6.8071 25.7318C-6.20048 26.6806 -4.8854 28.0524 -3.00779 28.0107C-1.11901 27.9565 0.789374 26.5062 3.37466 29.0749Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M-7.58202 24.7329C-5.85142 24.1552 -3.91019 24.4175 -2.21059 25.0238C-0.619627 25.5887 1.16906 26.533 2.26814 27.8455C2.30603 27.8907 2.2372 27.9299 2.20057 27.9082C1.52052 27.3536 0.886366 26.7729 0.140017 26.3045C-0.58212 25.8468 -1.3594 25.4629 -2.1552 25.1745C-3.90449 24.5236 -5.73455 24.35 -7.56897 24.7559C-7.58076 24.7565 -7.59381 24.7335 -7.58202 24.7329Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.0306414 14.1007C-0.0306414 14.1007 3.74873 16.889 3.72042 19.4443C3.69147 21.9878 2.26604 25.3866 3.38379 27.9276C3.38379 27.9276 0.326784 24.0601 -0.908856 21.5254C-2.1445 18.9907 -0.896527 17.3512 -0.405984 15.9179C0.07467 14.5207 -0.0306414 14.1007 -0.0306414 14.1007Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M0.253211 14.7592C1.61204 15.8449 1.9472 17.6831 2.09413 19.3187C2.30516 21.7074 2.20903 24.1008 2.77246 26.447C2.77436 26.4823 2.73963 26.496 2.72594 26.4613C2.03497 24.3821 2.17279 22.1047 2.03337 19.9485C1.92536 18.1572 1.71521 16.0049 0.242057 14.7717C0.218479 14.7729 0.240788 14.7481 0.253211 14.7592Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.832233 17.667C-0.522629 18.809 0.14737 19.8371 0.813571 20.7945C1.40271 21.6377 2.01353 22.4444 2.28017 23.4468C2.29385 23.4815 2.24733 23.4959 2.23364 23.4611C1.87688 22.3216 1.19217 21.4599 0.525334 20.4907C-0.0657017 19.6121 -0.551271 18.716 -0.832233 17.667Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-1.06989 18.3063C-0.607033 19.4401 -0.0622824 20.5577 0.630662 21.5727C1.18317 22.3943 2.12344 23.1714 2.31872 24.1659C2.31935 24.1777 2.2964 24.1907 2.29577 24.1789C1.85838 23.0793 0.986315 22.2512 0.354215 21.2683C-0.239987 20.3308 -0.707042 19.3391 -1.06989 18.3063C-1.08168 18.3069 -1.08232 18.2951 -1.06989 18.3063Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.961272 19.4472C-0.362006 20.4791 0.144214 21.5397 0.880516 22.4814C1.36331 23.1058 2.25999 23.7315 2.36388 24.5654C2.36515 24.589 2.32978 24.5909 2.32851 24.5673C2.1402 23.7025 1.17825 22.962 0.655019 22.2453C0.0168269 21.3692 -0.437804 20.3886 -0.961272 19.4472C-0.98485 19.4485 -0.973694 19.4361 -0.961272 19.4472Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.00340396 16.3691C0.483512 17.9509 1.84005 19.2141 2.16381 20.8401C2.17814 20.8866 2.10803 20.9022 2.1055 20.855C1.93088 20.025 1.39206 19.2381 0.951356 18.5169C0.547916 17.8292 0.179845 17.1396 -0.0269798 16.3704C-0.0151908 16.3698 -0.00340396 16.3691 -0.00340396 16.3691Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M0.0404104 17.1827C0.582473 18.6905 1.81605 19.8657 2.17329 21.4545C2.17392 21.4662 2.16213 21.4669 2.1615 21.4551C1.73416 19.8819 0.524793 18.7173 0.0286207 17.1833C0.0161987 17.1721 0.0279884 17.1715 0.0404104 17.1827Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M1.78662 16.2375C2.57562 17.7203 2.71163 19.5929 2.20701 21.2042C2.19712 21.2402 2.14869 21.2192 2.15922 21.195C2.63038 19.6209 2.49309 17.7247 1.78662 16.2375Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.78722 17.6972C3.01834 19.139 2.7987 20.3331 2.12309 21.6226C2.12373 21.6344 2.09951 21.6239 2.11067 21.6114C2.73976 20.3362 2.96928 19.1061 2.77543 17.6978C2.76301 17.6866 2.78658 17.6854 2.78722 17.6972Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M3.21035 18.7503C3.49709 20.5675 2.7752 22.0959 2.275 23.7898C2.26448 23.814 2.22848 23.8041 2.23901 23.7799C2.64426 22.0793 3.42636 20.5713 3.21035 18.7503Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.63101 29.575C4.63101 29.575 2.97943 25.6793 4.71525 22.9969C6.43928 20.3151 8.59019 20.5188 8.59019 20.5188C8.59019 20.5188 7.91805 20.9923 8.17734 22.078C8.43725 23.1754 8.64385 25.4816 6.90802 26.4024C5.1604 27.3238 4.44159 28.2492 4.63101 29.575Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M7.40563 21.1379C6.2803 21.9787 5.5948 23.3042 5.19287 24.6263C4.82062 25.8404 4.76792 27.061 4.6104 28.3109C4.60114 28.3587 4.51799 28.3513 4.51546 28.3041C4.45745 25.6825 5.32001 22.8105 7.40563 21.1379C7.40437 21.1143 7.41679 21.1255 7.40563 21.1379Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.07666 21.9305C5.59022 22.5596 5.28632 23.2853 5.06621 24.0302C4.83495 24.7874 4.82514 25.4855 4.79618 26.2674C4.79808 26.3027 4.75093 26.3053 4.74903 26.2699C4.77292 25.3937 4.79388 24.6832 5.06787 23.8409C5.30231 23.1426 5.61 22.4876 6.07666 21.9305C6.07539 21.9069 6.08781 21.9181 6.07666 21.9305Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.48906 22.4349C4.55156 23.6912 4.57807 25.2859 4.6932 26.7694C4.6951 26.8048 4.64794 26.8073 4.64604 26.7719C4.51913 25.2891 4.51556 23.6813 5.48906 22.4349Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.1638 25.0599C4.16578 25.7574 4.49469 26.3782 4.64866 27.0438C4.66298 27.0903 4.59351 27.1177 4.57919 27.0712C4.38985 26.4074 4.10747 25.7723 4.14085 25.073C4.15138 25.0488 4.17496 25.0475 4.1638 25.0599Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.76729 23.9087C7.39685 24.4961 6.94072 25.029 6.40943 25.4831C5.85519 25.9503 4.99863 26.2919 4.60651 26.9159C4.58483 26.9526 4.52398 26.9204 4.54566 26.8837C4.86032 26.3584 5.43901 26.1264 5.91706 25.7815C6.64687 25.2812 7.2754 24.6563 7.76729 23.9087Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.73749 24.4542C7.28999 24.9275 6.91575 25.4442 6.39244 25.827C5.78915 26.2613 5.11005 26.6052 4.68257 27.2311C4.66025 27.256 4.61183 27.2349 4.63415 27.2101C4.96376 26.7431 5.42013 26.4349 5.90007 26.1253C6.61936 25.6493 7.16854 25.0877 7.73749 24.4542Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.32051 25.718C6.65938 26.6166 5.37818 26.7563 4.61894 27.5892C4.58547 27.6265 4.52336 27.5707 4.55683 27.5334C4.88035 27.1732 5.32683 26.901 5.75226 26.6771C6.31726 26.4103 6.94754 26.2582 7.32051 25.718Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.90301 22.0334C7.67467 22.625 7.37686 23.244 6.86661 23.6497C6.26585 24.1312 5.39876 24.497 4.97318 25.1583C4.9515 25.1949 4.89065 25.1627 4.91233 25.1261C5.22889 24.6362 5.79199 24.334 6.25888 24.0015C7.02216 23.464 7.52418 22.905 7.8788 22.0229C7.90174 22.0098 7.91416 22.021 7.90301 22.0334Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.90511 21.6313C7.60667 22.2385 7.28528 22.8587 6.80304 23.3457C6.30901 23.8333 5.6497 24.1052 5.19357 24.6381C5.1601 24.6753 5.10978 24.6189 5.14389 24.5934C5.52192 24.1475 6.04103 23.9068 6.48245 23.5402C7.10552 23.0339 7.51742 22.3378 7.89395 21.6437C7.89205 21.6084 7.90448 21.6195 7.90511 21.6313Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.7825 21.3306C6.73946 21.9422 6.15666 22.9785 5.40058 23.8703C5.38943 23.8828 5.37637 23.8598 5.38816 23.8592C6.1436 22.9555 6.73882 21.9305 7.7825 21.3306Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.33736 24.0702C2.66264 25.9444 3.43273 27.7356 4.21081 29.4555C4.98826 31.1636 6.00314 32.6697 7.09003 34.1956C7.15404 34.2868 7.01827 34.4005 6.94311 34.3217C5.64299 33.0083 4.72407 31.3078 3.96094 29.6463C3.1456 27.8929 2.50076 26.0122 2.33736 24.0702C2.32558 24.0709 2.32558 24.0709 2.33736 24.0702Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M1.13921 26.8539C2.77488 28.0311 4.32724 29.6384 5.11418 31.5233C5.14219 31.6046 5.03799 31.6457 4.98767 31.5892C4.38991 30.8056 3.89381 29.9336 3.27247 29.1512C2.62566 28.3347 1.9218 27.5567 1.13921 26.8539C1.11627 26.8669 1.12742 26.8545 1.13921 26.8539Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.82264 25.8757C4.6637 27.5395 4.72747 29.1676 4.75778 30.833C4.76411 30.9509 4.58728 30.9604 4.58095 30.8425C4.33907 29.2003 4.46075 27.5031 4.82264 25.8757Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.0199 33.9261C22.0199 33.9261 23.0129 34.1447 24.0495 32.753C25.0862 31.3613 26.2413 31.0747 27.6454 31.0229C29.0496 30.9712 30.3239 31.3639 30.8515 30.4015C30.8515 30.4015 31.1136 33.5205 28.5675 34.544C26.0208 35.5556 22.0199 33.9261 22.0199 33.9261Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M30.287 31.5551C29.4411 32.5345 28.3081 33.2338 27.1023 33.6769C25.6416 34.2164 24.2044 34.0926 22.676 34.0328C22.6406 34.0347 22.6381 33.9875 22.6735 33.9856C23.3894 33.8881 24.1063 34.0269 24.8267 34.0119C25.5353 33.9975 26.2245 33.8422 26.8988 33.6287C28.1772 33.2172 29.371 32.5501 30.2752 31.5557C30.2851 31.5197 30.2982 31.5427 30.287 31.5551Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.592 31.6589C26.6126 32.9229 25.0485 33.7399 23.9878 34.0215C23.9412 34.0358 23.9139 33.9663 23.9604 33.952C25.0913 33.6548 26.3861 32.8877 26.592 31.6589C26.5914 31.6471 26.6032 31.6465 26.592 31.6589Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.8076 31.6173C27.7289 32.3545 27.0562 32.8163 26.4726 33.1786C25.7515 33.6193 24.9385 34.1123 24.0728 34.0642C24.0257 34.0667 24.0219 33.996 24.069 33.9934C24.8869 34.0323 25.6317 33.5903 26.307 33.1757C26.9023 32.8127 27.6575 32.3465 27.7833 31.6067C27.7945 31.5943 27.8069 31.6055 27.8076 31.6173Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.7309 31.6387C28.1601 32.899 26.6941 33.7816 25.3715 34.03C25.325 34.0443 25.297 33.9631 25.3435 33.9488C26.6308 33.7023 28.0961 32.8078 28.706 31.6164C28.7172 31.604 28.7414 31.6145 28.7309 31.6387Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.5529 31.5354C29.2041 32.0862 28.7764 32.4875 28.2276 32.8361C27.5195 33.2998 26.7646 33.5531 26.0173 33.948C25.9944 33.961 25.9571 33.9275 25.9912 33.9021C27.2216 33.2567 28.7699 32.807 29.5529 31.5354Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.8197 32.7625C29.0373 33.3839 28.2104 33.6175 27.2281 33.5993C27.2164 33.5999 27.2151 33.5763 27.2269 33.5757C28.1824 33.5362 29.0354 33.3485 29.8073 32.7514C29.8185 32.739 29.8315 32.7619 29.8197 32.7625Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.0062 33.6812C27.9239 34.224 26.7377 34.3705 25.593 33.9708C25.5688 33.9603 25.5787 33.9243 25.6029 33.9348C26.6408 34.3284 28.0126 34.1128 28.9937 33.67C29.0173 33.6687 29.0179 33.6805 29.0062 33.6812Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.0617 34.4594C26.6217 34.4121 26.0699 34.2644 25.7129 33.9998C25.688 33.9775 25.7215 33.9402 25.7463 33.9626C26.1139 34.2029 26.6316 34.3761 27.0617 34.4594Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.8898 33.7976C20.8898 33.7976 24.7476 35.624 25.5393 38.4781C26.3316 41.344 24.2665 42.519 24.5263 44.0538C24.5263 44.0538 23.5646 43.538 22.2007 42.358C20.8368 41.178 20.6406 39.285 21.202 37.4105C21.7405 35.549 21.3774 34.2916 20.8898 33.7976Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.2864 43.5467C23.3836 42.3656 23.2749 40.5625 22.9743 39.148C22.6251 37.4879 22.2666 35.8756 21.4186 34.396C21.3801 34.3389 21.4712 34.2749 21.5098 34.332C22.2807 35.6975 22.6434 37.1677 22.9614 38.6876C23.1348 39.4941 23.2839 40.2901 23.4573 41.0966C23.6313 41.9148 23.7992 42.8398 24.2976 43.5343C24.31 43.5454 24.287 43.5585 24.2864 43.5467Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.9945 42.3864C22.7614 41.3467 23.1339 40.3572 23.0428 39.3216C23.0409 39.2863 23.088 39.2837 23.0899 39.3191C23.1797 40.3311 22.7626 41.3702 22.9945 42.3864Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.6187 41.9928C21.8045 40.7005 22.7588 38.8758 22.6251 37.4879C22.6232 37.4525 22.6704 37.45 22.6723 37.4853C22.7686 38.1777 22.6062 38.8958 22.5126 39.5748C22.3992 40.3257 22.2265 41.2926 22.6299 41.9804C22.6305 41.9921 22.6194 42.0046 22.6187 41.9928Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.8842 40.4241C21.8471 39.9532 21.9174 39.5002 22.0584 39.0433C22.2718 38.3934 22.6534 37.7936 22.5447 37.0901C22.544 37.0783 22.5676 37.077 22.5682 37.0888C22.7829 38.2241 21.8458 39.2676 21.8842 40.4241Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.6353 42.5584C24.6401 41.766 24.4333 40.9968 24.0993 40.2817C23.764 39.543 23.3798 38.7715 22.7934 38.2C22.7685 38.1777 22.8014 38.1287 22.8269 38.1628C23.9853 39.2592 24.5989 40.9997 24.636 42.5702C24.6478 42.5696 24.636 42.5702 24.6353 42.5584Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.9929 41.5106C24.815 39.9595 24.0102 38.182 22.6076 37.3824C22.5592 37.3613 22.6019 37.2763 22.651 37.3091C24.0902 38.1304 24.8603 39.9216 25.0164 41.5093C25.0289 41.5205 25.0053 41.5217 24.9929 41.5106Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.1583 40.6268C24.8533 39.7919 24.4554 38.9857 23.9321 38.2689C23.4599 37.6203 22.6893 37.1415 22.3318 36.4277C22.3193 36.4165 22.3423 36.4035 22.3547 36.4146C22.8432 37.1451 23.6039 37.6599 24.1041 38.3897C24.5783 39.0736 24.9142 39.8241 25.1701 40.6261C25.1701 40.6261 25.1589 40.6386 25.1583 40.6268Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.0851 39.4839C24.8188 37.6065 23.3338 36.3739 21.9161 35.2914C21.8912 35.2691 21.9247 35.2318 21.9495 35.2541C23.3791 36.336 24.8994 37.5667 25.0851 39.4839Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.4329 38.4031C21.5323 37.3928 21.8838 36.4518 22.0074 35.452C22.0068 35.4402 22.0304 35.4389 22.0317 35.4625C21.9434 36.4604 21.569 37.4145 21.4571 38.4137C21.4571 38.4137 21.4335 38.4149 21.4329 38.4031Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.8663 31.9682C16.8663 31.9682 19.0902 33.0902 19.3531 34.684C19.616 36.2778 18.8341 37.3484 19.2641 38.5313C19.2641 38.5313 17.9645 37.6671 17.7135 35.6352C17.4737 33.5908 17.7976 33.0178 16.8663 31.9682Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.003 38.0724C18.6012 37.1954 18.6449 36.2472 18.5471 35.3067C18.4557 34.484 18.3363 33.1425 17.5416 32.6532C17.5173 32.6427 17.539 32.606 17.5632 32.6165C18.1487 32.9516 18.3686 33.7438 18.4965 34.3635C18.7156 35.5814 18.5848 36.8889 19.003 38.0724Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M18.4469 37.4048C18.3238 36.6547 18.3578 35.9672 18.5786 35.2341C18.5891 35.2099 18.6133 35.2204 18.6146 35.244C18.4397 35.9509 18.4082 36.6857 18.4704 37.4035C18.4711 37.4153 18.4593 37.4159 18.4469 37.4048Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.2023 36.5012C19.1084 36.2934 19.0722 36.0589 18.9665 35.8518C18.8601 35.6329 18.6967 35.4525 18.5786 35.2342C18.5662 35.223 18.5891 35.21 18.6016 35.2211C18.7302 35.4152 18.893 35.5838 18.9869 35.7916C19.0821 36.0229 19.1196 36.281 19.2023 36.5012C19.203 36.513 19.203 36.513 19.2023 36.5012Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.1741 35.5333C19.0105 35.1282 18.8746 34.5799 18.4382 34.3787C18.4022 34.3688 18.4344 34.3079 18.4593 34.3302C18.9094 34.5662 19.0328 35.1034 19.1741 35.5333C19.1865 35.5444 19.1859 35.5326 19.1741 35.5333Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8026 35.3254C24.8026 35.3254 26.9424 36.2036 27.4036 37.5267C27.8536 38.8622 27.535 39.7542 27.9507 40.8905C27.9507 40.8905 26.699 40.6976 26.2442 39.055C25.7895 37.4124 25.9835 36.6216 25.4529 35.988C24.9 35.3793 24.8026 35.3254 24.8026 35.3254Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M27.5619 40.474C27.1989 39.8787 27.0567 39.2124 26.8667 38.5369C26.6462 37.733 26.3215 36.9701 25.8126 36.2999C25.7995 36.2769 25.8336 36.2514 25.8467 36.2744C26.2909 36.8417 26.6199 37.4625 26.8222 38.1491C27.0533 38.9289 27.1441 39.7398 27.5724 40.4498C27.5855 40.4728 27.5749 40.497 27.5619 40.474Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.6054 35.6543C26.6054 35.6543 30.0443 36.2854 31.5499 34.8213C33.055 33.3454 34.3527 32.4126 34.3527 32.4126C34.3527 32.4126 33.19 32.5578 31.8794 33.0301C29.5354 33.8536 29.3805 35.8127 26.6054 35.6543Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M33.3507 32.9037C32.5339 33.3259 31.8929 33.9397 31.1408 34.4648C30.4234 34.9762 29.5067 35.2974 28.6817 35.5663C28.6699 35.5669 28.6568 35.544 28.6686 35.5434C29.5344 35.154 30.476 34.8552 31.2498 34.2934C31.9567 33.8062 32.604 33.3103 33.3507 32.9037C33.35 32.8919 33.3624 32.9031 33.3507 32.9037Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.8135 33.3409C31.0725 33.8536 30.6354 34.7402 29.8056 35.1394C29.7944 35.1519 29.7813 35.1289 29.7925 35.1165C30.5857 34.6956 31.0228 33.809 31.8135 33.3409Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.6888 34.5419C30.9546 34.9597 30.2165 35.3067 29.3547 35.3293C29.3429 35.33 29.3416 35.3064 29.3534 35.3058C30.1649 35.2267 30.9625 34.8883 31.6888 34.5419C31.6999 34.5295 31.6999 34.5295 31.6888 34.5419Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.1481 34.0678C31.7618 34.3605 31.3233 34.5614 30.8549 34.6456C30.8314 34.6469 30.8295 34.6115 30.853 34.6103C31.3078 34.4913 31.7481 34.3257 32.1481 34.0678C32.1475 34.056 32.1475 34.056 32.1481 34.0678Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.9567 38.0464C28.9567 38.0464 31.8122 38.6024 32.4135 40.9939C33.0142 43.3735 31.7691 45.9468 31.7691 45.9468C31.7691 45.9468 32.0404 45.4948 30.7943 44.7459C29.5363 43.9977 28.2796 42.6109 28.4648 40.5556C28.6382 38.5009 28.9567 38.0464 28.9567 38.0464Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M31.7741 45.3791C31.8099 44.0648 31.8291 42.8815 31.3252 41.6434C30.8213 40.4054 30.0837 39.4401 29.1464 38.4973C29.1091 38.4638 29.1655 38.4135 29.191 38.4476C29.6146 38.8505 29.9991 39.1845 30.3322 39.6632C30.7168 40.2219 31.0556 40.8067 31.3138 41.4312C31.557 41.9975 31.7419 42.5787 31.822 43.1892C31.932 43.9164 31.8409 44.6424 31.7741 45.3791Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.6019 43.2375C29.5205 42.6034 29.5144 42.048 29.6701 41.4249C29.8542 40.6701 30.0756 39.9489 29.8563 39.1685C29.8563 39.1685 29.8675 39.1561 29.8681 39.1679C30.04 39.7261 29.9866 40.2729 29.8755 40.8463C29.6945 41.66 29.4849 42.3807 29.6019 43.2375C29.6025 43.2492 29.6143 43.2486 29.6019 43.2375Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.1058 42.3655C28.888 41.1713 29.7996 40.0937 29.619 38.9329C29.6178 38.9094 29.6643 38.895 29.6656 38.9186C29.7629 39.41 29.6107 39.8792 29.4704 40.3479C29.2799 40.9847 29.0586 41.706 29.1176 42.3649C29.13 42.376 29.1064 42.3773 29.1058 42.3655Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.0695 40.3694C29.176 40.1509 29.2583 39.9218 29.3406 39.6928C29.4445 39.4271 29.5702 39.1248 29.5426 38.8307C29.5407 38.7953 29.5996 38.7921 29.6015 38.8275C29.7001 39.3424 29.3427 39.9528 29.0937 40.38C29.0832 40.4042 29.059 40.3936 29.0695 40.3694Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.2855 44.6486C30.7395 43.5074 31.5285 42.1291 31.0762 40.971C31.0756 40.9593 31.0873 40.9586 31.088 40.9704C31.2541 41.4226 31.2504 42.0139 31.2292 42.4998C31.1946 43.1756 30.9559 44.016 31.2855 44.6486C31.2861 44.6604 31.2979 44.6597 31.2855 44.6486Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.7679 43.8133C30.7463 43.4124 30.7118 42.9887 30.7728 42.5834C30.8603 42.0112 31.116 41.4891 30.9894 40.8929C30.9875 40.8575 31.0229 40.8556 31.0248 40.891C31.1245 41.867 30.7978 42.8303 30.7921 43.8238C30.7927 43.8356 30.7691 43.8368 30.7679 43.8133Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.3051 42.9386C32.1762 42.5199 32.0008 42.1155 31.7684 41.7496C31.5359 41.3838 31.2378 41.116 30.9601 40.7881C30.9476 40.7769 30.9699 40.7521 30.9824 40.7632C31.6624 41.3179 32.1168 42.0738 32.3163 42.9262C32.3175 42.9497 32.3057 42.9504 32.3051 42.9386Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.1567 41.717C31.9801 41.289 31.6979 40.8786 31.3495 40.5544C31.088 40.3083 30.7155 40.1983 30.477 39.9392C30.4646 39.928 30.4869 39.9032 30.4993 39.9143C30.6627 40.0947 30.8917 40.177 31.0886 40.3201C31.2482 40.4298 31.3972 40.5637 31.5352 40.71C31.811 41.0025 31.9956 41.3591 32.1567 41.717C32.1574 41.7288 32.1685 41.7164 32.1567 41.717Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.549 40.3072C31.1744 39.9372 30.6573 39.7758 30.1843 39.5529C30.1719 39.5417 30.183 39.5293 30.1948 39.5287C30.7026 39.7379 31.1837 39.8894 31.549 40.3072C31.5496 40.319 31.5607 40.3066 31.549 40.3072Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.7357 38.1518C30.7357 38.1518 31.5128 38.9732 34.414 39.2785C37.3146 39.572 39.0359 40.8038 39.8429 42.8413C40.6498 44.8788 40.7995 46.124 41.3528 46.5199C41.3528 46.5199 40.6892 46.2718 38.6265 46.1697C36.5638 46.0677 34.5065 45.185 33.5824 42.7282C32.6453 40.2483 31.6637 39.1424 30.7357 38.1518Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M40.4064 45.8495C39.718 45.5791 39.1504 45.1366 38.5703 44.683C37.8922 44.1637 37.2488 43.6308 36.6153 43.0618C35.2358 41.8117 33.8365 40.6336 32.379 39.4705C32.3541 39.4482 32.3882 39.4227 32.4013 39.4456C33.8308 40.5275 35.1692 41.6734 36.499 42.8789C37.1083 43.4373 37.7282 43.9716 38.3933 44.4679C39.0459 44.9531 39.6664 45.4991 40.4176 45.8371C40.4294 45.8364 40.4188 45.8606 40.4064 45.8495Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.959 44.1238C39.5794 43.6594 38.8052 43.3345 38.2528 43.175C37.6762 43.0049 37.004 42.8164 36.404 42.8722C36.3804 42.8735 36.3785 42.8381 36.4021 42.8369C37.1075 42.7635 37.8734 42.9352 38.5364 43.1716C38.9945 43.3361 39.745 43.6623 39.9701 44.1113C39.9826 44.1225 39.9708 44.1231 39.959 44.1238Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.6006 43.1735C39.0837 42.5746 38.222 42.1598 37.4791 41.975C36.7721 41.8002 35.8562 41.6957 35.1389 41.7696C35.1036 41.7715 35.101 41.7244 35.1364 41.7225C36.018 41.6278 37.0787 41.7837 37.921 42.0577C38.5225 42.25 39.1949 42.6632 39.6006 43.1735Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.9568 42.1913C38.1489 41.679 37.2247 41.4212 36.2944 41.2702C35.5429 41.145 34.7269 41.1415 34.0248 40.8364C34.0006 40.8259 34.0229 40.801 34.0353 40.8122C34.8467 41.1706 35.8153 41.154 36.6761 41.3325C37.5003 41.4892 38.2365 41.7689 38.9568 42.1913C38.9686 42.1907 38.9679 42.1789 38.9568 42.1913Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.0801 41.2806C37.1993 40.9496 36.3441 40.8773 35.4208 40.8559C34.9591 40.8452 34.3493 40.9371 33.9345 40.6993C33.9103 40.6887 33.9326 40.6639 33.945 40.6751C34.2859 40.8577 34.732 40.7983 35.0987 40.8023C35.4772 40.8056 35.8564 40.8207 36.2231 40.8247C36.8746 40.8488 37.4749 41.0176 38.0801 41.2806Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.6818 45.6584C37.7925 44.9494 36.8248 44.1028 36.4923 42.9739C36.478 42.9273 36.5481 42.9118 36.5506 42.9589C36.8812 44.0525 37.8384 44.9233 38.6818 45.6584Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.8901 45.6654C37.3044 45.1057 36.7139 44.6763 36.2744 43.9787C36.0805 43.6699 35.8984 43.3605 35.7267 43.0268C35.5277 42.6237 35.3833 42.1349 35.1272 41.7703C35.1011 41.7244 35.17 41.6853 35.1954 41.7194C35.6062 42.3239 35.8373 43.1037 36.2146 43.7455C36.6814 44.5126 37.2882 45.0238 37.8901 45.6654Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.6253 45.012C36.2505 44.4174 35.82 43.8848 35.5481 43.2255C35.288 42.5655 35.1067 41.8304 34.5595 41.3278C34.5222 41.2943 34.578 41.2322 34.6153 41.2657C34.9885 41.6121 35.2273 42.0959 35.3948 42.5716C35.5746 43.0585 35.742 43.5343 35.9913 43.9938C36.176 44.3504 36.4295 44.6679 36.6371 45.0114C36.6489 45.0108 36.6253 45.012 36.6253 45.012Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.7844 44.7617C35.1948 44.1312 34.6586 43.3915 34.2513 42.6331C33.831 41.8517 33.5484 40.992 33.2087 40.1708C33.1944 40.1242 33.2639 40.0969 33.2782 40.1434C33.6042 40.9298 33.8725 41.743 34.2562 42.5028C34.6535 43.2972 35.2153 44.071 35.8178 44.7244C35.8309 44.7473 35.7974 44.7846 35.7844 44.7617Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M41.7412 32.3942C41.7412 32.3942 40.7978 33.9818 39.9697 35.9534C39.1415 37.925 35.3579 39.9017 29.5586 36.9263C29.5586 36.9263 31.4586 37.5218 32.5759 36.7524C33.6933 35.983 33.1582 34.6048 35.4306 33.5488C37.703 32.4928 39.4609 33.0841 40.2514 33.0535C40.9004 33.0305 41.7412 32.3942 41.7412 32.3942Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M41.0823 33.1154C40.6203 33.3175 40.3098 33.7007 39.9372 34.0281C39.5758 34.3431 39.215 34.6699 38.8405 34.9619C38.1375 35.5199 37.3853 36.045 36.604 36.4653C35.0064 37.3196 33.3381 37.5156 31.5459 37.3872C31.5341 37.3878 31.5329 37.3642 31.5447 37.3636C33.5583 37.4328 35.3531 37.1709 37.1049 36.1074C37.9291 35.602 38.7016 35.0167 39.4356 34.3743C39.9446 33.945 40.4329 33.3513 41.0823 33.1154Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.1669 33.3364C38.6312 33.708 38.3534 34.4796 38.004 35.0186C37.7426 35.4346 37.4825 35.8742 37.0844 36.1675C37.0844 36.1675 37.0726 36.1681 37.0838 36.1557C37.5883 35.6439 37.9333 35.0224 38.3025 34.4114C38.5409 34.0084 38.7539 33.5714 39.1539 33.3134C39.1775 33.3122 39.1781 33.324 39.1669 33.3364Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.4814 33.3378C37.4497 34.1617 37.4087 35.8191 36.3137 36.5636C36.3019 36.5643 36.3012 36.5525 36.3012 36.5525C36.9511 36.1038 37.1785 35.2758 37.5576 34.6288C37.8283 34.165 38.0747 33.6907 38.4814 33.3378C38.4808 33.326 38.4932 33.3372 38.4814 33.3378Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.7965 33.5755C37.5635 33.8599 37.4553 34.2677 37.2956 34.5955C37.1253 34.9475 36.9551 35.2995 36.7606 35.641C36.5234 36.0675 36.2552 36.5785 35.8075 36.8272C35.7957 36.8278 35.7951 36.816 35.7951 36.816C36.3624 36.3718 36.6924 35.692 37.0131 35.0599C37.2472 34.5744 37.4271 33.9618 37.7965 33.5755C37.7959 33.5637 37.8083 33.5748 37.7965 33.5755Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.136 33.4756C35.7328 33.6745 35.5163 34.2655 35.3119 34.643C35.0636 35.0819 34.8748 35.5295 34.6382 35.9679C34.3911 36.4304 34.0165 37.1599 33.4831 37.3541C33.4713 37.3547 33.4582 37.3318 33.47 37.3311C34.2906 36.9797 34.6839 35.7171 35.0703 34.987C35.3285 34.512 35.6044 33.7051 36.1235 33.4644C36.1353 33.4638 36.1478 33.4749 36.136 33.4756Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.0409 33.9062C35.6898 34.6344 35.4685 35.3557 34.9964 36.0313C34.6779 36.4859 34.2424 37.1832 33.6724 37.3557C33.6606 37.3563 33.6475 37.3333 33.6593 37.3327C34.2641 37.1465 34.8395 36.1934 35.143 35.6806C35.5023 35.1056 35.7412 34.4898 36.0409 33.9062C36.0403 33.8944 36.0521 33.8938 36.0409 33.9062Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.6881 36.9681C38.045 37.3219 37.2927 37.6224 36.5487 37.6387C35.9462 37.6474 35.006 37.5324 34.4919 37.2053C34.4677 37.1947 34.4893 37.1581 34.5135 37.1686C34.747 37.3334 35.1268 37.3603 35.4018 37.4165C35.7723 37.4912 36.1546 37.5653 36.5436 37.5444C37.2752 37.5169 38.0431 37.2865 38.6881 36.9681Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.6095 36.6058C37.4084 37.356 36.1779 37.3393 34.8213 37.1757C34.7977 37.177 34.8076 37.141 34.8194 37.1403C35.4232 37.1552 36.0078 37.2539 36.6183 37.1738C37.2995 37.0899 37.9999 36.9223 38.5971 36.5946C38.6083 36.5822 38.6095 36.6058 38.6095 36.6058Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.0535 34.8732C39.3245 35.6099 38.2627 36.0925 37.2234 36.1128C37.1998 36.1141 37.1979 36.0787 37.2215 36.0775C38.2341 35.9995 39.299 35.5758 40.0535 34.8732Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.3254 34.4329C39.6536 35.131 38.7278 35.7246 37.7381 35.7895C37.7028 35.7914 37.7002 35.7443 37.7356 35.7424C38.6774 35.6682 39.6262 35.0615 40.3254 34.4329Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.5357 37.9295C34.3769 38.1454 33.4606 37.8163 32.3886 37.4482C32.3526 37.4384 32.3612 37.3788 32.3972 37.3887C32.864 37.4937 33.2893 37.7073 33.756 37.8123C34.3425 37.9463 34.924 37.986 35.5227 37.9066C35.5456 37.8935 35.5469 37.9171 35.5357 37.9295Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.43 39.5388C29.6251 37.0647 26.1096 36.1066 22.7139 34.7401C19.669 33.5203 16.5532 32.0797 14.0595 29.8963C12.9062 28.8942 11.9077 27.6945 11.3459 26.2586C11.2781 26.0968 11.5454 26.0115 11.6015 26.174C12.7152 29.0818 15.6194 30.983 18.2494 32.4024C21.1594 33.9723 24.2649 34.9997 27.3104 36.2313C29.2317 37.003 31.0465 37.9933 32.43 39.5388C32.4424 39.5499 32.4536 39.5375 32.43 39.5388Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.2881 39.7245C29.8245 39.0164 29.16 38.5318 28.5612 37.9492C28.0376 37.4453 27.4576 36.9917 27.1156 36.348C27.0895 36.3021 27.1465 36.2635 27.1727 36.3094C27.6344 36.9822 28.3721 37.5101 28.9467 38.0822C29.4697 38.5743 29.9573 39.0684 30.2881 39.7245Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M33.2597 37.3777C31.4213 37.4883 29.6314 37.1824 27.8642 36.6388C27.8282 36.629 27.8251 36.57 27.8722 36.5675C28.7713 36.5783 29.6286 36.9106 30.5012 37.0884C31.4099 37.2761 32.3351 37.3328 33.2584 37.3542C33.2709 37.3653 33.2715 37.3771 33.2597 37.3777Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.9861 35.2008C29.1822 35.4213 28.4789 35.7547 27.6269 35.7413C26.7867 35.7273 25.9019 35.763 25.0777 35.6063C25.0417 35.5964 25.0379 35.5256 25.0857 35.5349C25.8918 35.5744 26.7084 35.5896 27.5132 35.6055C28.3776 35.6301 29.1424 35.3407 29.9849 35.1772C29.9966 35.1766 30.0097 35.1996 29.9861 35.2008Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.4628 33.8767C25.6365 34.1221 24.7915 34.2384 23.9258 34.1903C23.546 34.1634 23.1762 34.1005 22.8069 34.0494C22.2471 33.973 21.7204 34.0723 21.1632 34.0431C21.1036 34.0344 21.0991 33.9519 21.1581 33.9488C21.9776 33.7983 22.6814 33.9143 23.5018 34.0003C24.4885 34.101 25.4807 34.0832 26.4628 33.8767Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.9322 38.8072C22.6123 37.914 22.3966 36.9797 22.0774 36.0983C21.8565 35.5072 21.55 34.4241 21.0104 34.063C20.9123 33.9973 20.9984 33.839 21.0965 33.9046C21.5995 34.2441 21.7777 34.9203 22.0066 35.4401C22.4787 36.5261 22.6698 37.6626 22.9912 38.804C22.98 38.8165 22.9341 38.8426 22.9322 38.8072Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M18.6272 36.5792C18.5988 34.9491 18.0375 32.8629 16.7258 31.7747C16.6637 31.7189 16.753 31.6196 16.8151 31.6754C18.164 32.797 18.7142 34.8956 18.6508 36.5779C18.6514 36.5897 18.6279 36.591 18.6272 36.5792Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3392C16.8896 29.9807 17.5911 29.612 18.2921 29.4561C18.6426 29.3782 18.9621 29.3846 19.3084 29.4488C19.4878 29.4865 19.4824 29.605 19.6586 29.5837C19.7411 29.5793 19.9196 29.3805 20.012 29.3401C20.9677 28.8632 22.4182 29.2345 23.0198 30.089C23.55 29.8359 24.1404 30.0406 24.5614 30.3963C24.8217 30.6188 24.9615 30.8005 25.2533 30.9503C25.4967 31.0792 25.7512 31.1955 25.9158 31.3995C24.7081 31.1451 24.6295 32.5445 24.1115 33.2462C23.4497 34.133 22.5898 34.191 21.7296 34.6864C22.7049 35.6745 23.61 37.7777 22.2118 38.8222C22.4796 39.1862 22.5797 39.2872 22.4014 39.7106C23.6436 39.0646 23.8314 41.2418 23.9488 41.8857C23.5112 41.2235 22.9642 42.045 22.7251 42.4362C22.3999 42.9857 21.9345 43.5663 21.3485 43.8815C20.2099 44.4747 18.0605 44.5192 17.0109 43.6888C16.9647 44.5899 16.6804 45.681 16.0793 46.3754C15.4447 47.107 14.7335 47.0743 13.8931 46.8356C13.5265 48.1558 12.0254 48.603 10.8761 47.8962C9.64169 47.1467 8.99567 45.9045 8.70521 44.6787C7.74975 45.3802 6.7787 46.0117 5.5638 46.0651C4.41963 46.1147 3.60342 45.8866 2.57161 45.3863C1.29768 44.7808 -0.192329 43.4539 0.75672 41.9724C1.39047 41.0043 2.29672 40.7074 3.26548 40.2534C2.37236 39.4737 1.57118 38.2044 0.20555 38.3132C0.443624 38.1231 0.473055 37.7904 0.625441 37.5458C0.788982 37.2887 1.01463 37.0874 1.27628 36.8961C1.45858 36.768 2.0398 36.5831 2.12588 36.4248C2.22312 36.2541 2.00601 35.7337 2.00704 35.5326C2.03971 34.1594 3.4566 33.2439 4.61905 32.8741C4.45431 32.008 4.32392 31.3411 4.37139 30.4637C4.39932 29.8828 4.60819 28.4883 5.41617 28.5632C5.12643 28.0112 5.60653 27.2643 6.16291 27.057C6.96242 26.754 7.40123 27.4398 8.01133 27.5726C7.85127 27.0137 8.52475 27.2258 8.76875 27.3664C8.38588 26.181 9.99979 26.7328 10.5019 26.8359C10.5136 26.1732 10.6047 25.4471 11.4099 25.2501C10.9719 24.8007 11.6186 24.2931 11.9596 24.0383C12.3331 24.6094 13.5308 24.6752 14.1348 24.9147C14.9325 25.2383 15.5332 25.8563 15.9869 26.6005C16.8024 27.9163 16.4462 28.9877 16.3769 30.3392C16.4017 30.3616 16.4116 30.3256 16.3769 30.3392Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3392C16.8896 29.9807 17.5911 29.612 18.2921 29.4561C18.6426 29.3782 18.9621 29.3846 19.3084 29.4488C19.4878 29.4865 19.4824 29.605 19.6586 29.5837C19.7411 29.5793 19.9196 29.3805 20.012 29.3401C20.9677 28.8632 22.4182 29.2345 23.0198 30.089C23.55 29.8359 24.1404 30.0406 24.5614 30.3963C24.8217 30.6188 24.9615 30.8005 25.2533 30.9503C25.4967 31.0792 25.7512 31.1955 25.9158 31.3995C24.7081 31.1451 24.6295 32.5445 24.1115 33.2462C23.4497 34.133 22.5898 34.191 21.7296 34.6864C22.7049 35.6745 23.61 37.7777 22.2118 38.8222C22.4796 39.1862 22.5797 39.2872 22.4014 39.7106C23.6436 39.0646 23.8314 41.2418 23.9488 41.8857C23.5112 41.2235 22.9642 42.045 22.7251 42.4362C22.3999 42.9857 21.9345 43.5663 21.3485 43.8815C20.2099 44.4747 18.0605 44.5192 17.0109 43.6888C16.9647 44.5899 16.6804 45.681 16.0793 46.3754C15.4447 47.107 14.7335 47.0743 13.8931 46.8356C13.5265 48.1558 12.0254 48.603 10.8761 47.8962C9.64169 47.1467 8.99567 45.9045 8.70521 44.6787C7.74975 45.3802 6.7787 46.0117 5.5638 46.0651C4.41963 46.1147 3.60342 45.8866 2.57161 45.3863C1.29768 44.7808 -0.192329 43.4539 0.75672 41.9724C1.39047 41.0043 2.29672 40.7074 3.26548 40.2534C2.37236 39.4737 1.57118 38.2044 0.20555 38.3132C0.443624 38.1231 0.473055 37.7904 0.625441 37.5458C0.788982 37.2887 1.01463 37.0874 1.27628 36.8961C1.45858 36.768 2.0398 36.5831 2.12588 36.4248C2.22312 36.2541 2.00601 35.7337 2.00704 35.5326C2.03971 34.1594 3.4566 33.2439 4.61905 32.8741C4.45431 32.008 4.32392 31.3411 4.37139 30.4637C4.39932 29.8828 4.60819 28.4883 5.41617 28.5632C5.12643 28.0112 5.60653 27.2643 6.16291 27.057C6.96242 26.754 7.40123 27.4398 8.01133 27.5726C7.85127 27.0137 8.52475 27.2258 8.76875 27.3664C8.38588 26.181 9.99979 26.7328 10.5019 26.8359C10.5136 26.1732 10.6047 25.4471 11.4099 25.2501C10.9719 24.8007 11.6186 24.2931 11.9596 24.0383C12.3331 24.6094 13.5308 24.6752 14.1348 24.9147C14.9325 25.2383 15.5332 25.8563 15.9869 26.6005C16.8024 27.9163 16.4462 28.9877 16.3769 30.3392ZM16.3769 30.3392C16.4116 30.3256 16.4017 30.3616 16.3769 30.3392Z",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M21.7179 34.6872C20.7477 33.7935 17.8753 33.1437 15.5896 35.7138Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.7179 34.6872C20.7477 33.7935 17.8753 33.1437 15.5896 35.7138",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M17.0115 43.7007C15.5715 42.6431 13.9983 41.3088 13.9454 38.7815Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.0115 43.7007C15.5715 42.6431 13.9983 41.3088 13.9454 38.7815",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M13.4524 39.068C13.4524 39.068 12.3558 41.3259 9.49768 41.8223C6.63952 42.3186 4.53759 41.4856 3.28969 40.2639",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4524 39.068C13.4524 39.068 12.3558 41.3259 9.49768 41.8223C6.63952 42.3186 4.53759 41.4856 3.28969 40.2639",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M0.217974 38.3245C0.217974 38.3245 1.33532 37.5551 2.17558 38.2312C2.17558 38.2312 3.10723 37.3063 4.65452 38.8193C6.21424 40.3435 8.60867 42.0002 10.1515 41.669",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M0.217974 38.3245C0.217974 38.3245 1.33532 37.5551 2.17558 38.2312C2.17558 38.2312 3.10723 37.3063 4.65452 38.8193C6.21424 40.3435 8.60867 42.0002 10.1515 41.669",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M9.49835 41.834C9.49835 41.834 8.46527 43.0718 8.71831 44.7016Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.49835 41.834C9.49835 41.834 8.46527 43.0718 8.71831 44.7016",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.2669 36.679C11.2669 36.679 9.43905 37.4274 7.56001 36.1213C5.68096 34.8153 4.95495 33.6247 4.62707 32.8029",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.2669 36.679C11.2669 36.679 9.43905 37.4274 7.56001 36.1213C5.68096 34.8153 4.95495 33.6247 4.62707 32.8029",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M10.5262 26.8464C11.3152 27.2297 13.045 28.1772 13.5738 30.0996C14.1033 32.0338 13.9613 34.4533 13.9613 34.4533",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.5262 26.8464C11.3152 27.2297 13.045 28.1772 13.5738 30.0996C14.1033 32.0338 13.9613 34.4533 13.9613 34.4533",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3394C15.3713 31.2091 14.6848 32.7357 14.7552 34.7064Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3394C15.3713 31.2091 14.6848 32.7357 14.7552 34.7064",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.9838 24.0489C11.9838 24.0489 11.7244 25.1624 12.9148 25.9734C14.1051 26.7844 15.9399 27.2652 16.4572 29.4128",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.9838 24.0489C11.9838 24.0489 11.7244 25.1624 12.9148 25.9734C14.1051 26.7844 15.9399 27.2652 16.4572 29.4128",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M12.2009 34.9144C12.5033 34.6026 12.9807 34.2459 13.4252 34.3758C13.5096 34.4067 13.6481 34.5648 13.7307 34.5604C13.7778 34.5578 13.8671 34.4585 13.9136 34.4441C13.983 34.4168 14.0649 34.4005 14.1357 34.3967C14.4298 34.3691 14.7302 34.4594 14.898 34.7223C14.9751 34.8364 15.0193 34.9996 15.0623 35.1391C15.1046 35.2669 15.0787 35.4456 15.1322 35.561C15.5614 35.4079 15.6265 35.9601 15.6057 36.2331C15.5734 36.7314 15.3412 37.2523 15.0929 37.6912C14.608 38.5685 13.6458 39.3651 12.6189 39.3965C11.7812 39.4297 11.3083 38.7694 11.0916 38.0362C10.9602 37.5703 10.9199 37.0404 11.3154 36.7C11.1285 36.5208 11.301 35.9913 11.3964 35.7852C11.5778 35.4208 11.9318 35.189 12.2009 34.9144Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M14.555 38.4649C13.8597 38.7269 13.0856 38.402 12.6302 37.8471C12.5158 37.6995 12.327 37.485 12.3516 37.2827C12.3861 37.0444 12.6423 36.9716 12.8458 37.0197C12.9532 37.0376 12.9751 37.2256 12.8585 37.2555C12.6829 37.2886 12.4695 37.2764 12.5535 37.5202C12.6095 37.6827 12.7598 37.8401 12.8847 37.9635C13.2965 38.367 13.9725 38.6263 14.555 38.4649C14.5668 38.4643 14.5662 38.4525 14.555 38.4649Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.7953 38.0974C14.2356 38.021 13.6558 37.792 13.3456 37.3003C13.1393 36.9803 13.1171 36.5677 13.5868 36.507C13.7512 36.4864 13.7651 36.7458 13.6007 36.7664C13.1422 36.8147 13.4549 37.3536 13.6418 37.5327C13.9648 37.8227 14.3751 37.9781 14.7953 38.0974C14.8071 38.0967 14.8065 38.0849 14.7953 38.0974Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.2681 37.4336C15.2421 36.9502 14.9909 36.4553 14.6989 36.0809C14.5976 35.9562 14.0677 35.3344 13.9172 35.6144C13.8528 35.7361 13.6467 35.6408 13.7222 35.5067C13.9359 35.0814 14.4079 35.5053 14.5968 35.7198C15.0111 36.1705 15.3289 36.8037 15.291 37.4205C15.2923 37.4441 15.2687 37.4454 15.2681 37.4336Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.5727 36.7196C15.8813 36.3011 16.1147 35.8038 16.193 35.2794C16.268 34.696 15.9816 33.7656 15.2587 33.7334C15.093 33.7305 15.138 33.468 15.2709 33.52C16.7637 34.0191 16.3505 35.7911 15.5976 36.7419C15.5864 36.7543 15.5616 36.732 15.5727 36.7196Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.4721 35.5073C15.6583 35.0125 15.2823 34.3943 15.0014 34.0074C14.8603 33.8022 14.0832 32.9808 13.823 33.4204C13.7468 33.5427 13.5866 33.4213 13.6634 33.3107C14.2806 32.4736 15.9037 34.7393 15.4845 35.5184L15.4721 35.5073Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.3494 36.6745C11.0155 36.6215 10.8365 36.371 10.807 36.0415C10.7813 35.7828 10.8478 35.259 11.1505 35.1718C11.2088 35.1569 11.2833 35.2238 11.2511 35.2846C11.1966 35.3703 11.1166 35.4219 11.0503 35.5082C10.9505 35.6318 10.888 35.7889 10.8851 35.9546C10.8439 36.2878 11.013 36.5743 11.3494 36.6745Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.2726 38.5467C10.8183 38.4529 10.3869 38.346 10.0385 38.0218C9.78939 37.7869 9.58407 37.2659 9.87602 36.9783C9.94359 36.9156 10.0529 36.9688 10.0461 37.0638C10.0097 37.2667 9.86344 37.4046 9.92263 37.6261C9.96812 37.8128 10.1302 37.9696 10.278 38.0799C10.537 38.2788 10.9374 38.4701 11.2726 38.5467C11.2732 38.5585 11.2844 38.5461 11.2726 38.5467Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.677 39.0679C13.1002 39.3353 12.2328 38.8144 11.8774 38.3605C11.5984 38.009 11.2011 37.2146 11.8419 37.0383C11.9815 36.9953 12.0518 37.2043 11.9122 37.2473C11.3887 37.4055 11.8103 38.2104 12.0475 38.446C12.4333 38.8036 13.1423 39.2385 13.677 39.0679Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.0394 39.3031C12.2618 39.7941 10.9923 39.2711 10.5064 38.5878C10.4815 38.5655 10.515 38.5283 10.551 38.5382C10.9763 38.7518 11.2447 39.1275 11.7134 39.2679C12.1342 39.399 12.6226 39.4673 13.0394 39.3031Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.046 37.8494C10.5334 37.7705 10.0753 37.6059 9.66661 37.2613C9.34427 36.9831 8.96465 36.5187 9.08269 36.0749C9.12289 35.9427 9.28983 35.9692 9.30859 36.0983C9.34356 36.3092 9.31895 36.5115 9.40045 36.7081C9.48258 36.9165 9.62301 37.11 9.79692 37.2662C10.1441 37.5667 10.5942 37.8027 11.046 37.8494C11.0578 37.8487 11.0572 37.8369 11.046 37.8494Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.0158 38.6909C19.9097 38.6621 18.1335 35.9672 15.9611 37.1243C15.9381 37.1374 15.9244 37.1026 15.948 37.1014C18.1074 35.9213 19.9401 38.5659 22.0152 38.6791C22.0263 38.6667 22.0276 38.6902 22.0158 38.6909Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.1412 39.9256C20.9555 40.0838 19.9221 39.7728 18.918 39.1292C17.8655 38.4645 16.9528 37.3194 15.6095 37.4033C15.5859 37.4046 15.584 37.3692 15.6076 37.368C16.6568 37.3116 17.4257 37.9797 18.2026 38.5764C19.3366 39.4377 20.6732 40.1108 22.1399 39.902C22.1523 39.9132 22.1529 39.925 22.1412 39.9256Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8395 37.2845C16.694 37.3451 17.5058 37.4906 18.293 37.8385C19.177 38.2285 19.9657 38.8246 20.8714 39.1779C20.8956 39.1885 20.8733 39.2133 20.8608 39.2022C20.0408 38.9033 19.328 38.3977 18.5395 38.0263C17.666 37.6121 16.8027 37.3865 15.8408 37.3081C15.8284 37.297 15.8277 37.2852 15.8395 37.2845Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.2375 39.5041C15.8218 40.4777 16.6455 41.2847 17.5558 41.9452C18.5153 42.6386 19.5096 42.8808 20.654 43.0558C20.69 43.0657 20.6807 43.1134 20.6454 43.1153C18.3524 42.9074 16.3956 41.4755 15.2264 39.5166C15.2251 39.493 15.2369 39.4923 15.2375 39.5041Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.071 41.3747C16.9522 42.5925 18.5472 43.4527 20.0673 43.3592C20.1027 43.3573 20.1058 43.4163 20.0705 43.4182C18.5162 43.5371 16.9311 42.6409 16.071 41.3747C16.0592 41.3754 16.0592 41.3754 16.071 41.3747Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.7261 35.9601C17.6201 35.2145 18.7457 35.2605 19.8028 35.5703C19.8388 35.5801 19.8302 35.6397 19.7942 35.6298C18.7508 35.3548 17.635 35.2728 16.7391 35.983C16.728 35.9955 16.7149 35.9725 16.7261 35.9601Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.9757 35.8929C18.359 35.7659 18.7611 35.768 19.1645 35.7936C19.1999 35.7917 19.1906 35.8395 19.1664 35.829C18.7624 35.7916 18.3597 35.7777 17.9757 35.8929C17.9645 35.9054 17.9639 35.8936 17.9757 35.8929Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.6999 34.521C12.3296 32.2472 11.3823 29.5788 9.57251 28.0208C9.54767 27.9985 9.58113 27.9612 9.60598 27.9835C10.4332 28.6367 11.0063 29.6227 11.4814 30.543C12.115 31.774 12.5892 33.12 12.7111 34.5086C12.7124 34.5322 12.7006 34.5328 12.6999 34.521Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.31498 28.1593C9.15066 29.1903 9.97328 30.1984 10.6843 31.3307C11.3426 32.3594 12.0418 33.4923 12.2845 34.7089C12.2858 34.7325 12.251 34.7462 12.2498 34.7226C11.9921 33.4477 11.219 32.2596 10.534 31.1732C9.85032 30.1104 9.08918 29.1463 8.31498 28.1593C8.30319 28.1599 8.30319 28.1599 8.31498 28.1593Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.71581 29.0791C6.1327 29.577 6.41319 30.1767 6.81892 30.6869C7.32593 31.3218 7.84346 31.9325 8.41804 32.5046C9.44107 33.5019 10.5738 34.3396 11.6408 35.2755C11.6656 35.2978 11.6315 35.3233 11.6185 35.3003C10.4788 34.3329 9.27413 33.4754 8.22372 32.4086C7.74852 31.9257 7.33036 31.4043 6.92399 30.8823C6.4791 30.3032 6.16008 29.6464 5.71581 29.0791Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.5115 35.507C10.8563 34.9747 10.1696 34.515 9.57014 33.9206C8.89682 33.271 8.19066 32.6705 7.57376 31.9706C7.5607 31.9476 7.58301 31.9228 7.59607 31.9457C8.2576 32.5959 8.94208 33.2331 9.60361 33.8833C10.2024 34.4659 10.9016 34.9368 11.5115 35.507C11.5233 35.5064 11.5233 35.5064 11.5115 35.507Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.2619 36.5845C10.2449 36.58 9.43661 35.6185 8.70624 35.0074C7.67901 34.1522 6.85576 33.1323 6.07649 32.051C6.06344 32.028 6.09753 32.0026 6.11059 32.0255C6.82585 33.0157 7.59752 33.9556 8.51548 34.7575C9.30922 35.448 10.1883 36.4057 11.2619 36.5845Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.7842 25.833C12.8451 26.8756 13.9905 27.9491 14.5976 29.3471C14.8675 29.971 14.9979 30.6379 14.9515 31.3143C14.8756 32.3233 14.2718 33.408 14.4075 34.3939C14.4094 34.4292 14.3622 34.4318 14.3603 34.3964C14.2366 33.6345 14.6199 32.8455 14.7693 32.1044C14.9464 31.22 14.9362 30.3693 14.6071 29.5239C14.0204 28.0657 12.8476 26.9227 11.7842 25.833C11.7724 25.8336 11.7835 25.8212 11.7842 25.833Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.3831 36.5883C4.13966 36.494 5.66329 37.3462 7.2772 37.898C7.87931 38.1021 8.50183 38.246 9.1435 38.3061C9.61886 38.3515 10.8222 38.5234 11.1028 38.0236C11.1133 37.9994 11.1617 38.0204 11.1512 38.0446C10.9573 38.3979 10.3772 38.3818 10.0346 38.3883C9.47929 38.3945 8.90962 38.3542 8.35973 38.2418C6.31659 37.8431 4.52007 36.5327 2.3831 36.5883C2.37194 36.6007 2.37131 36.5889 2.3831 36.5883Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.81966 36.3521C4.18591 36.2551 5.43539 36.6254 6.71351 37.0888C7.40067 37.3357 8.08911 37.6061 8.79605 37.781C9.37142 37.9274 10.5091 38.1974 11.0311 37.791C11.0652 37.7655 11.0913 37.8114 11.0572 37.8369C10.7274 38.0793 10.1335 38.0284 9.75437 38.0133C8.99544 37.9713 8.24743 37.6922 7.53669 37.4466C5.99478 36.9146 4.4838 36.2982 2.81966 36.3521Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.2031 39.3596C11.7421 40.0228 10.7037 40.2795 9.93865 40.3442C8.78586 40.4534 7.70878 39.991 6.69002 39.5137C6.66581 39.5032 6.68812 39.4783 6.70054 39.4895C7.68204 39.9334 8.72248 40.3741 9.82811 40.2674C10.7222 40.1839 11.4739 39.8716 12.1907 39.3484C12.2018 39.336 12.2142 39.3471 12.2031 39.3596Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.9734 39.2656C11.0371 39.8834 9.70468 39.7303 8.67374 39.4664C8.63774 39.4565 8.65878 39.4081 8.68299 39.4186C9.73752 39.6812 10.9836 39.768 11.9734 39.2656C11.9728 39.2538 11.9845 39.2532 11.9734 39.2656Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.4271 41.8261C8.80592 42.3678 8.02365 42.5517 7.24139 42.7356C6.19114 42.993 5.13836 43.2032 4.05693 43.3204C4.03336 43.3217 4.03146 43.2863 4.0544 43.2732C5.0874 43.135 6.10545 42.9385 7.10854 42.6836C7.91312 42.4749 8.7575 42.3468 9.41404 41.8031C9.42583 41.8025 9.43825 41.8137 9.4271 41.8261Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.43956 41.8372C8.96784 42.3 8.55823 42.8185 7.98651 43.1803C7.44888 43.5166 6.8565 43.7139 6.26349 43.8994C6.22876 43.9131 6.21444 43.8666 6.24917 43.8529C6.84218 43.6674 7.43393 43.4582 7.95976 43.1226C8.50791 42.7621 8.94236 42.2659 9.43956 41.8372C9.43892 41.8254 9.43892 41.8254 9.43956 41.8372Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.96342 41.4864C3.85905 41.6167 2.76813 41.557 1.70127 41.9454C1.66654 41.959 1.65221 41.9125 1.68695 41.8988C2.7258 41.4292 3.86767 41.5571 4.96342 41.4864C4.97521 41.4858 4.97457 41.474 4.96342 41.4864Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.63058 41.2324C3.76389 41.3853 2.85906 41.2684 2.02671 41.6205C2.00377 41.6335 1.98945 41.587 2.01302 41.5857C2.84284 41.1865 3.73841 41.3512 4.62994 41.2206C4.64173 41.2199 4.64237 41.2317 4.63058 41.2324Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.5844 41.048C11.408 41.5068 11.606 42.111 11.6909 42.5911C11.7783 43.1185 11.9257 43.4416 12.1527 43.926C12.5383 44.7211 12.9331 45.4684 13.4216 46.1988C13.4471 46.2329 13.39 46.2714 13.3646 46.2373C12.7735 45.3587 12.2638 44.4521 11.8333 43.482C11.6194 43.0206 11.5922 42.5137 11.5066 42.0217C11.4392 41.647 11.3893 41.3777 11.536 41.027C11.5577 40.9904 11.5949 41.0238 11.5844 41.048Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.8435 40.8095C11.7857 41.2737 11.6887 41.6691 11.8208 42.1467C11.9092 42.473 12.0448 42.7968 12.1916 43.1081C12.5548 43.9281 13.0905 44.656 13.5114 45.4491C13.5245 45.4721 13.4904 45.4976 13.4773 45.4746C12.9608 44.6629 12.4201 43.8407 12.0537 42.9618C11.905 42.6151 11.7799 42.2671 11.7249 41.9036C11.6563 41.5053 11.7825 41.2148 11.8442 40.8213C11.8311 40.7983 11.8435 40.8095 11.8435 40.8095Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.9871 41.3756C10.6902 42.231 11.0977 43.2141 11.4472 43.9993C11.4609 44.034 11.4144 44.0483 11.4007 44.0136C11.0244 43.1707 10.6574 42.2801 10.9871 41.3756C10.9747 41.3645 10.9865 41.3639 10.9871 41.3756Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5912 40.2019C12.715 40.5263 12.8978 40.8475 13.1364 41.1066C13.1612 41.1289 13.1284 41.178 13.1029 41.1439C12.8296 40.8984 12.6574 40.553 12.5558 40.2038C12.5434 40.1926 12.5782 40.1789 12.5912 40.2019Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.1309 35.5374C15.2439 34.9993 15.7261 34.5123 16.0956 34.1259C16.6447 33.5644 17.2573 33.0822 17.9326 32.6676C18.5849 32.2661 19.2752 31.9098 20.0059 31.6459C20.8643 31.3397 21.7676 31.2085 22.6672 31.0065C22.7137 30.9922 22.7417 31.0734 22.6952 31.0877C21.1666 31.4654 19.7398 31.7548 18.3519 32.5505C17.7095 32.9161 17.0937 33.3393 16.5296 33.8425C16.0448 34.2823 15.3449 34.8993 15.1911 35.5578C15.1688 35.5826 15.121 35.5734 15.1309 35.5374Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.696 30.9758C20.3112 31.1684 19.0197 31.557 17.8552 32.3289C16.7701 33.0374 15.5765 33.9291 15.1237 35.183C15.1138 35.219 15.0536 35.1986 15.0752 35.162C15.517 33.9205 16.6758 33.0425 17.7367 32.3234C18.9576 31.5012 20.2784 31.2174 21.7071 30.9634C21.6953 30.964 21.7078 30.9752 21.696 30.9758Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.9038 33.081C20.3984 33.0082 18.8058 33.2947 17.5919 34.2466C17.5807 34.259 17.5559 34.2367 17.5788 34.2236C18.8374 33.222 20.355 33.0814 21.9038 33.081C21.9156 33.0804 21.915 33.0686 21.9038 33.081Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.1208 30.1328C17.9969 30.5597 16.5953 31.3207 16.2113 32.5354C16.2007 32.5596 16.1765 32.5491 16.1753 32.5255C16.5568 31.2636 17.9596 30.5262 19.1195 30.1092C19.1313 30.1086 19.1326 30.1322 19.1208 30.1328Z",
                  fill: n,
                }),
              ],
            }),
          ],
        }),
      });
    if (t === 1)
      return r.jsx("div", {
        "data-value": C,
        style: f,
        onMouseDown: o,
        onMouseMove: a,
        children: r.jsxs("svg", {
          onTouchStart: s,
          onTouchMove: l,
          onTouchEnd: i,
          width: "60",
          height: "60",
          viewBox: "0 0 60 60",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M59.9998 29.9424C60.0574 46.5258 46.641 59.9422 30.0576 59.9998C13.4742 60.0574 0.0577506 46.641 0.000169397 30.0576C-0.0574118 13.4742 13.359 0.0577659 29.9424 0.000184656C46.5258 -0.0573966 59.9998 13.359 59.9998 29.9424Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M5.00978 27.4089C5.00978 27.4089 3.28234 30.8638 2.4762 35.3551C2.07313 37.6584 2.1883 38.5221 3.91573 40.9981C7.25544 45.7773 8.52223 47.1017 9.67385 46.8714C10.8255 46.6986 16.2381 45.4894 17.8504 45.0863C19.0596 44.7984 19.0596 44.5105 19.5202 42.4376C19.9809 40.3647 20.787 37.428 20.9598 35.8733C21.1325 34.2611 20.9022 34.3186 19.5202 32.5912C18.1383 30.8638 14.7986 26.43 14.1652 25.5663C13.4742 24.7602 13.1287 24.9905 11.574 25.2208C10.0193 25.4511 7.60093 26.0845 6.44931 26.3724C5.2401 26.7179 5.2401 27.0058 5.00978 27.4089Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M7.31298 11.1134C7.31298 11.1134 5.81587 13.0712 4.4915 15.3744C3.80053 16.7564 4.03085 18.7141 4.4915 22.3993C4.95215 26.1421 5.29764 26.1421 6.73717 25.8542C8.11912 25.5663 12.0922 24.7026 13.0711 24.4722C14.1076 24.2419 14.9137 22.4569 15.8926 20.9022C16.8715 19.3475 20.6718 14.3955 21.478 13.5894C22.2265 12.956 21.9962 12.265 21.7659 10.5376C21.5355 8.81015 21.0173 5.18254 20.5567 5.06737C20.096 4.95221 16.4108 4.95221 15.0289 4.83705C13.5893 4.77947 10.1345 7.60095 7.31298 11.1134Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M21.4203 36.046C21.4203 36.046 19.9808 41.8617 19.5202 44.1074C19.2898 45.4318 19.2323 45.7197 21.9386 47.5047C24.6449 49.2897 26.0268 50.3838 26.8906 50.8444C27.7543 51.305 28.5604 51.305 31.0364 50.7292C33.57 50.1534 36.046 49.6352 37.0824 49.1745C38.1189 48.7139 39.6736 45.2014 40.4221 42.8406C41.1707 40.4798 41.7465 38.5796 40.7101 37.7735C39.6736 36.9673 38.4644 35.7005 36.8521 34.5489C35.1823 33.4549 33.8003 31.9578 33.1669 32.2457C32.5335 32.5336 26.0268 34.1458 23.5509 34.8368C22.2841 35.2399 21.4779 35.5278 21.4203 36.046Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M26.4875 59.0786C26.4875 59.0786 27.6967 54.1266 27.8695 52.9174C28.0422 51.7082 28.5029 51.6506 30.2303 51.3627C31.9577 51.0748 36.5066 49.6928 37.3704 49.4049C38.1765 49.117 38.6947 48.9443 40.0767 50.0383C41.4586 51.0748 44.568 53.4356 45.6045 54.1266C46.353 54.6448 42.8406 57.236 38.2341 58.5027C32.8214 59.9423 26.4299 59.8847 26.4875 59.0786Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M22.3993 12.2649C22.3993 12.2649 21.7659 8.69491 21.5356 6.67957C21.3052 4.7218 21.5356 4.95213 24.1267 3.85809C26.6603 2.76404 32.8215 1.38209 34.1459 1.26693C35.4702 1.15177 37.0249 1.55484 40.3646 3.22469C43.7043 4.89455 44.5681 5.47036 44.7408 6.44924C44.9135 7.42812 45.3166 11.977 45.3742 14.05C45.3166 15.4895 44.7984 15.3167 42.38 16.3532C39.8464 17.3897 37.428 18.4261 36.8522 18.7716C36.046 19.1171 34.7217 18.311 32.476 16.8714C30.5182 15.5471 26.4876 13.8196 24.7601 13.3014C23.0327 12.7832 22.572 13.1287 22.3993 12.2649Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M36.3339 20.3839C36.3339 20.3839 35.1247 26.0268 34.4913 28.8483C33.9155 31.6122 34.0882 32.0153 35.7581 33.2821C37.4279 34.5488 39.3281 36.3339 40.307 37.0824C41.3435 37.831 41.9768 38.7523 45.1438 37.831C49.1745 36.6793 50.211 36.3914 51.4777 35.9884C52.7445 35.5853 52.9749 35.0671 53.4355 32.8214C53.8962 30.5757 54.2416 27.1209 54.472 25.2783C54.7023 23.4357 54.3568 23.1478 52.8597 21.6506C51.3626 20.1535 48.5987 17.7927 47.5046 16.6987C46.4106 15.6046 45.662 15.4895 44.3953 16.0077C43.0709 16.4683 39.5584 17.7927 38.2341 18.5413C36.9673 19.2322 36.5066 19.2898 36.3339 20.3839Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M57.9269 22.5145C57.9269 22.5145 55.9691 23.1479 55.3933 23.4358C54.8175 23.7237 54.8751 25.6239 54.6447 27.5816C54.4144 29.5394 53.7234 33.2822 53.2628 34.952C52.9749 35.7582 54.0689 36.3916 54.9902 37.8887C56.4298 40.1919 57.1783 41.4587 57.4662 41.0556C57.7541 40.595 59.827 36.1036 59.7119 28.6757C59.4816 25.2784 58.9057 21.9387 57.9269 22.5145Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M1.61244 38.9826C1.61244 38.9826 1.90035 38.1765 2.13067 38.5795C2.361 38.9826 5.18248 43.6467 7.48573 46.1803C8.29186 46.9864 8.52219 47.1591 8.63735 48.6562C8.75251 50.0958 8.57977 50.4988 7.71605 49.6351C6.90991 48.7714 2.76407 43.5891 1.61244 38.9826Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M36.1036 0.691169C36.1036 0.691169 35.7005 0.576006 35.5278 0.74875C35.355 0.921493 36.3339 1.2094 38.0614 1.95796C39.7888 2.70651 42.4951 4.03088 43.5892 4.83702C44.3377 5.29767 44.6832 5.41283 45.3742 5.12492C46.0652 4.77944 46.2379 4.66427 45.4893 4.2612C44.6832 3.85814 39.7312 1.2094 36.1036 0.691169Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M8.81009 9.90418C8.81009 9.90418 12.2074 6.33414 13.5893 5.58559C14.9713 4.83703 20.2112 5.35526 20.2112 5.35526C20.2112 5.35526 16.526 5.47043 14.7985 5.58559C13.1287 5.58559 8.81009 9.90418 8.81009 9.90418Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M20.2688 38.8098C20.2688 38.8098 19.5202 42.2647 19.0596 43.8194C18.6565 45.3741 17.1594 45.1437 13.359 45.9499C17.3321 44.7407 18.311 44.6255 18.6565 43.5315C19.0596 42.4374 20.2688 38.8098 20.2688 38.8098Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M34.6641 29.7121C34.6641 29.7121 35.9884 22.3417 36.4491 20.6142C36.8522 18.8868 39.9615 17.9079 43.1861 16.6411C43.1861 16.6411 39.5585 18.5413 38.1189 19.4626C36.6794 20.3839 36.7946 21.4779 34.6641 29.7121Z",
              fill: "white",
            }),
          ],
        }),
      });
    if (t === 2)
      return r.jsx("div", {
        "data-value": C,
        style: f,
        onMouseDown: o,
        onMouseMove: a,
        children: r.jsxs("svg", {
          onTouchStart: s,
          onTouchMove: l,
          onTouchEnd: i,
          width: "58",
          height: "59",
          viewBox: "0 0 58 59",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M57.5 29.5C57.5 45.5243 44.7321 58.5 29 58.5C13.2679 58.5 0.500004 45.5243 0.500004 29.5C0.500004 13.4756 13.2679 0.5 29 0.5C44.7321 0.5 57.5 13.4756 57.5 29.5Z",
              fill: n,
              stroke: n,
            }),
            r.jsx("path", {
              d: "M34.313 0.487603C41.3969 1.80038 47.5585 5.73872 51.8384 11.2524C46.1565 13.2028 18.7799 22.9924 14.7214 32.6319C13.7252 34.9949 13.1349 37.2454 12.9135 39.3833C11.327 39.0458 9.92494 38.6332 8.70738 38.2206C9.74046 20.8919 16.1972 11.74 21.4364 7.12651C25.6056 3.45073 31.3982 1.38779 34.313 0.487603ZM29.1107 42.2339C22.986 42.2339 18.0789 41.7839 14.1679 41.0337C14.1679 43.0966 14.6107 45.2346 15.7914 47.2225C18.6692 52.061 25.2366 54.9491 35.2723 55.7368C37.7074 55.9243 39.8473 56.0369 41.729 56.0744C50.8791 51.5359 57.3359 42.2339 58 31.3566C56.5611 34.9574 50.9898 42.2339 29.1107 42.2339ZM4.57507 36.4202C5.38677 36.8703 6.30916 37.3204 7.37914 37.733C8.5229 20.1418 15.201 10.8023 20.6247 6.03878C25.0522 2.17546 29.3321 0.637635 31.3613 0.112524C30.5865 0.0375079 29.8117 0 29.0369 0C19.8868 0 11.6959 4.31341 6.38296 11.0273C5.09161 14.2155 3.57888 21.3045 4.57507 36.4202ZM53.5356 34.9574C56.3397 32.6319 57.5573 28.3935 57.9262 26.8557C57.4466 21.4921 55.5649 16.5785 52.687 12.4151C48.2964 13.9154 19.8499 23.9301 15.9389 33.1945C15.1641 35.0324 14.4262 37.2829 14.2417 39.6459C18.1158 40.3961 22.986 40.8837 29.1476 40.8837C43.4262 40.8837 50.2888 37.658 53.5356 34.9574ZM3.20993 35.5575C2.5827 24.8303 3.20993 18.2289 4.20611 14.178C1.54962 18.679 3.8147e-06 23.8926 3.8147e-06 29.5188C3.8147e-06 30.6065 0.0737952 31.6567 0.184482 32.7069C0.701022 33.4571 1.62341 34.5073 3.20993 35.5575ZM7.34224 39.1958C6.34606 38.8207 5.46056 38.4456 4.68575 38.0331C4.90713 41.4463 5.1285 44.2219 5.31298 46.5474C7.52672 49.7355 10.3308 52.4361 13.5776 54.499C8.26464 48.2727 7.48983 41.0712 7.34224 39.1958ZM35.1616 57.0496C24.6463 56.2244 17.7468 53.1488 14.6476 47.8976C13.3931 45.7972 12.8028 43.3967 12.8397 40.7336C11.327 40.3961 9.96184 40.0585 8.74428 39.6459C9.00255 42.459 10.4046 50.8608 17.8944 56.7495C21.3257 58.2123 25.0891 59 29.0369 59C32.4682 59 35.7519 58.3999 38.8143 57.2746C37.6705 57.2371 36.4529 57.1621 35.1616 57.0496ZM3.80026 44.1093C3.65268 42.0464 3.4682 39.7584 3.32061 37.2829C2.17685 36.5702 1.25446 35.8951 0.553439 35.22C1.14377 38.4081 2.28754 41.3713 3.80026 44.1093Z",
              fill: "white",
            }),
          ],
        }),
      });
    if (t === 3)
      return r.jsx("div", {
        "data-value": C,
        style: f,
        onMouseDown: o,
        onMouseMove: a,
        children: r.jsxs("svg", {
          onTouchStart: s,
          onTouchMove: l,
          onTouchEnd: i,
          width: "86",
          height: "37",
          viewBox: "0 0 86 37",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M84.519 33.3202C84.517 33.3262 84.5151 33.332 84.5131 33.3375C79.5742 34.3537 75.437 34.6662 72.0644 34.921C71.3087 34.9781 70.5913 35.0323 69.9119 35.0908C61.1927 35.7958 25.9012 36.308 15.0845 35.284C10.7708 34.8686 6.46052 33.8663 3.65402 31.9412C2.26063 30.9854 1.2638 29.8201 0.798106 28.4083C0.365485 27.0968 0.373116 25.5177 1.02461 23.6097C2.29247 23.9375 4.3239 24.2073 6.89263 24.4347C9.82133 24.6939 13.499 24.9015 17.6484 25.0672C25.9482 25.3987 36.1551 25.5634 46.0725 25.6356C55.9908 25.7079 65.6236 25.6878 72.7765 25.6497C76.353 25.6306 79.3097 25.607 81.3724 25.5882C82.4037 25.5788 83.2116 25.5706 83.7616 25.5647L84.2608 25.5592C84.4434 26.0751 84.581 26.7431 84.674 27.4934C84.7852 28.3905 84.8286 29.3716 84.8208 30.2858C84.8129 31.2014 84.7536 32.0363 84.6636 32.6412C84.6182 32.9467 84.5676 33.1748 84.519 33.3202Z",
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M62.315 9.30586L62.315 9.30588L62.3196 9.30953C65.4208 11.784 68.0705 12.2597 70.1728 11.5351C72.2457 10.8206 73.6312 8.98966 74.3377 7.17301C75.0003 5.46922 76.1074 3.66527 77.3681 2.86101C77.9786 2.47156 78.59 2.3369 79.2077 2.51372C79.8416 2.69518 80.5753 3.23081 81.3585 4.38259C82.9351 6.70116 84.3173 11.0152 85.0115 15.388C85.3571 17.5646 85.5283 19.7326 85.4722 21.6457C85.4199 23.4297 85.1708 24.9527 84.7093 26.0511L50.7799 29.6795L50.7734 29.6797L50.6945 29.6818L50.3861 29.6897C50.1155 29.6967 49.7178 29.7069 49.2094 29.7196C48.1926 29.7452 46.7329 29.7814 44.9613 29.8235C41.418 29.9078 36.6277 30.0162 31.6388 30.1125C21.646 30.3054 10.8988 30.449 7.74495 30.2578C4.568 30.0653 2.91413 29.5204 2.03357 28.5367C1.15417 27.5542 0.92386 26.0007 1.02059 23.389C1.05866 22.3611 1.73919 21.5844 3.06373 20.9663C4.39218 20.3464 6.24607 19.9505 8.35519 19.6504C9.78689 19.4466 11.3036 19.2908 12.8234 19.1346C13.5394 19.061 14.256 18.9874 14.9647 18.9086C17.1588 18.6649 19.2732 18.3723 20.9575 17.8771C24.3348 16.8934 29.8656 13.9036 35.1743 10.837C37.4822 9.5037 39.7507 8.15445 41.8002 6.9354C44.5003 5.3294 46.8204 3.9494 48.3504 3.1297C49.6503 2.44171 50.7759 2.19428 51.8176 2.25518C52.8633 2.31632 53.8693 2.69072 54.9251 3.31881C55.9855 3.94962 57.0738 4.82249 58.286 5.85933C58.6724 6.18982 59.0719 6.53754 59.4861 6.89795C60.3599 7.65833 61.2986 8.4752 62.315 9.30586Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M59.9338 27.5455L42.8486 12.6441C43.9405 11.9376 44.904 11.1668 45.9317 10.2676L63.4023 25.4901C62.2461 26.1966 61.09 26.8389 59.9338 27.5455Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M65.7146 23.9486L47.9228 8.4691C48.8863 7.63411 49.914 6.79912 51.0059 6.09259L68.9903 21.829C67.8984 22.4713 66.8065 23.242 65.7146 23.9486Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M33.6637 16.819L49.0147 30.2431C47.7301 30.3073 45.7389 30.3073 43.3624 30.3716L29.7456 18.4248C31.0945 17.9752 32.3791 17.2686 33.6637 16.819Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M52.6115 29.7935L36.554 15.7913C37.1963 15.5344 37.7744 15.2775 38.4167 15.0206C39.1232 14.7636 39.7655 14.4425 40.4078 14.1213L56.2084 27.8666C54.988 28.3804 53.8319 29.2154 52.6115 29.7935Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M62.0534 23.6274C66.7422 20.2232 71.3668 16.0482 74.1929 10.9098C75.2848 8.91869 76.2482 6.73487 77.7898 5.06489C79.0744 3.5876 80.4232 3.33068 81.7078 3.90875C81.7078 3.97298 81.772 3.97298 81.772 4.03721C85.0478 8.85447 87.36 21.6362 85.0478 26.4535C85.0478 26.4535 68.0268 29.4723 50.7489 30.1146C50.7489 30.1789 58.5207 26.1966 62.0534 23.6274Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M82.2933 6.4227C82.4684 6.63099 82.6774 6.94782 82.9253 7.39934C84.0876 10.2677 84.9728 14.0295 85.329 17.5676C85.5075 19.3404 85.552 21.046 85.4354 22.5459C85.3278 23.9304 85.0849 25.1125 84.7022 26.006C84.6802 26.0098 84.6569 26.0138 84.6322 26.018C84.4154 26.0551 84.0943 26.1094 83.6779 26.178C82.845 26.3151 81.631 26.5094 80.1081 26.7379C77.6301 27.1096 74.3348 27.5715 70.5332 28.0244C76.2676 24.4139 78.6715 17.9469 80.0224 12.9842C80.3172 11.9012 80.5643 10.8796 80.7839 9.97213C80.85 9.69883 80.9136 9.43587 80.9752 9.18471C81.2456 8.0834 81.473 7.2328 81.7082 6.67967C81.8274 6.39942 81.9279 6.24732 81.999 6.17738C82.0041 6.17228 82.0087 6.16805 82.0128 6.16454C82.0545 6.18619 82.1479 6.24974 82.2933 6.4227Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M58.1353 5.06494C51.9692 9.56104 31.0302 22.3428 27.2407 20.6086C24.2861 19.2598 22.6161 18.1679 21.5884 17.2044C22.8088 16.7548 24.3503 16.1125 25.9561 15.3417C27.1764 16.0483 28.461 16.4979 29.5529 16.241C31.3514 15.7914 47.73 5.51455 53.1896 2.11035C54.8596 2.49573 56.4011 3.58764 58.1353 5.06494Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M50.9416 6.47804C51.1985 6.99188 52.1619 7.05611 52.9969 6.54227C53.8319 6.09266 54.2815 5.25767 54.0246 4.74383C53.7677 4.22999 52.8042 4.16576 51.9693 4.6796C51.1343 5.12921 50.6847 5.9642 50.9416 6.47804Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M46.1244 9.30409C46.3813 9.7537 47.152 9.81793 47.9228 9.43255C48.6936 9.04717 49.079 8.34064 48.822 7.89103C48.5651 7.44142 47.7943 7.37719 47.0236 7.76257C46.2528 8.14795 45.8675 8.85448 46.1244 9.30409Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M41.564 12.0661C41.8209 12.5157 42.5917 12.5799 43.3625 12.1945C44.1332 11.8091 44.5186 11.1026 44.2617 10.653C44.0048 10.2034 43.234 10.1392 42.4632 10.5245C41.6925 10.9099 41.3071 11.6164 41.564 12.0661Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M36.8109 14.6994C37.0678 15.149 37.8386 15.2133 38.6093 14.8279C39.3801 14.4425 39.7655 13.736 39.5086 13.2864C39.2517 12.8367 38.4809 12.7725 37.7101 13.1579C37.0036 13.6075 36.554 14.2498 36.8109 14.6994Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M31.6084 17.3329C31.8011 17.7825 32.6361 17.9109 33.3426 17.5256C34.1134 17.2044 34.563 16.4979 34.3703 16.0483C34.1776 15.5987 33.3426 15.4702 32.6361 15.8556C31.8653 16.1767 31.4157 16.819 31.6084 17.3329Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M43.812 3.52344C43.2339 3.90882 42.8485 4.10151 43.2339 4.61535L46.06 8.72608C46.4454 9.30415 47.2162 9.43261 47.73 9.04723C48.3081 8.66185 48.4366 7.89109 48.0512 7.37724L45.2251 3.26652C44.9039 2.75268 44.3901 3.20229 43.812 3.52344Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M48.822 0.504581C48.2439 0.889962 47.8586 1.08265 48.2439 1.59649L51.0701 5.70722C51.4554 6.28529 52.2262 6.41375 52.74 6.02837C53.3181 5.64299 53.4466 4.87223 53.0612 4.35839L50.2351 0.247661C49.9139 -0.266179 49.4001 0.119201 48.822 0.504581Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M39.316 6.15682C38.7379 6.47797 38.3525 6.67066 38.7379 7.24873L41.4356 11.4879C41.7567 12.066 42.5275 12.2587 43.1055 11.8733C43.6836 11.5521 43.8763 10.7814 43.4909 10.2033L40.7933 5.96413C40.4721 5.45029 39.894 5.83567 39.316 6.15682Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M34.8841 8.98296C34.3061 9.30411 33.9207 9.4968 34.3061 10.0749L36.6826 14.1214C37.0037 14.6994 37.7745 14.8921 38.3526 14.5067C38.9306 14.1856 39.1233 13.4148 38.7379 12.8368L36.3614 8.79027C35.976 8.21219 35.4622 8.59758 34.8841 8.98296Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M29.9383 11.9376C29.3603 12.2587 28.9749 12.4514 29.3603 13.0295L31.5441 16.7548C31.8652 17.3329 32.636 17.5256 33.2141 17.1402C33.7921 16.8191 33.9848 16.0483 33.5995 15.4702L31.4156 11.7449C31.0945 11.2311 30.5164 11.6164 29.9383 11.9376Z",
              fill: "white",
            }),
          ],
        }),
      });
  };
function nC(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    i = L.useRef(null);
  let o = 0,
    a = 0;
  L.useEffect(() => {
    if (i.current) {
      const M = i.current.getBoundingClientRect();
      (o = M.left), (a = M.top);
    }
  });
  const [u, C] = L.useState([!1, !1, !1, !1]),
    [f, d] = L.useState("-1");
  let c;
  const h = L.useRef(!1),
    v = (M) => {
      if (((c = M.closest("div")), c)) {
        if (c.style.position === "absolute") return;
        (c.style.left = "auto"),
          (c.style.top = "auto"),
          (c.style.transform = "none"),
          (c.style.position = "absolute");
        let T = c.offsetLeft - c.offsetWidth;
        T < 0 && (T = c.offsetLeft);
        let N = c.offsetTop - c.offsetHeight / 2;
        (N < 0 || N === 56) && (N = c.offsetTop),
          (c.style.zIndex = "1"),
          (c.style.left = T + "px"),
          (c.style.top = N + "px");
      }
    },
    y = (M) => {
      const T = M.target;
      (h.current = !0), v(T);
    },
    P = (M) => {
      document.body.style.overflow = "hidden";
      const T = M.changedTouches[0].target;
      v(T);
    },
    x = (M, T) => {
      if (c) {
        if (c.style.top === "30%") return;
        const N = M - a - c.offsetHeight / 2,
          Z = T - o - c.offsetWidth / 2;
        if (
          (N > 14 && N < 112 && (c.style.top = N + "px"),
          Z > 0 && Z < 270 && (c.style.left = Z + "px"),
          N > 20 && N < 70 && Z > 120 && Z < 145)
        ) {
          const k = c.getAttribute("data-value");
          if (
            ((c.style.top = "30%"),
            (c.style.left = "50%"),
            (c.style.transform = "translateX(-50%) translateY(-50%)"),
            (c.style.height = "18px"),
            (c.style.width = "65px"),
            (c.style.overflow = "hidden"),
            k)
          ) {
            if (u[+k]) return;
            if (
              (C(u.map((_, I) => (I + "" === k ? (_ = !0) : (_ = !1), _))),
              k !== "-1")
            ) {
              const _ = {
                arrAnswer: l,
                answerInfo: { answer: k, correct: !1 },
              };
              k === "0"
                ? (t(G("true")), (_.answerInfo.correct = !0), t(K(_)))
                : (t(G("false")), t(K(_))),
                n(!0),
                d(k);
            }
          }
        }
      }
    },
    p = (M) => {
      h && x(M.pageY, M.pageX);
    },
    m = (M) => {
      const T = M.changedTouches[0];
      x(T.clientY, T.clientX);
    },
    g = () => {
      if (c) {
        if (c.style.top !== "30%" && c.style.left !== "50%") {
          c.style.position = "static";
          return;
        }
        return;
      }
    },
    S = () => {
      c &&
        c.style.top !== "30%" &&
        c.style.left !== "50%" &&
        (c.style.position = "static");
    },
    w = () => {
      (document.body.style.overflow = "auto"), g();
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: f3.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Перетащи атрибут выбранного вида спорта в коробку",
        }),
        r.jsxs("div", {
          className: f3.task,
          ref: i,
          children: [
            u.map((M, T) =>
              r.jsx(
                "div",
                {
                  className: f3.taskAnswer,
                  children: r.jsx(tC, {
                    index: T,
                    color: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    onMouseUp: () => S(),
                    onMouseDown: (N) => y(N),
                    onMouseMove: (N) => p(N),
                    onTouchStart: (N) => P(N),
                    onTouchMove: (N) => m(N),
                    onTouchEnd: () => w(),
                    value: T,
                    style: {
                      position: M ? "absolute" : "static",
                      overflow: M ? "hidden" : "visible",
                      width: M ? "65px" : "auto",
                      height: M ? "18px" : "auto",
                      transform: M
                        ? " translateX(-50%) translateY(-50%)"
                        : "none",
                    },
                  }),
                },
                T
              )
            ),
            r.jsx("div", {
              className: f3.cart,
              children: r.jsxs("svg", {
                width: "93",
                height: "69",
                viewBox: "0 0 93 69",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  r.jsx("path", {
                    d: "M86.9938 3.99925L79.1882 13.431L35.337 9.95075L43.1426 0.518993L86.9938 3.99925Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  r.jsx("path", {
                    d: "M34.91 61.3474V9.8413L78.9793 13.3389V64.845L34.91 61.3474Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  r.jsx("path", {
                    d: "M11.1593 64.8053V13.3073L33.9101 9.88099V61.3789L11.1593 64.8053Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  r.jsx("path", {
                    d: "M24.7019 3.38559L33.8067 9.70838L11.4967 13.0683L2.39185 6.74553L24.7019 3.38559Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  r.jsx("path", {
                    d: "M55.2285 16.9158V68.4219L11.1593 64.9243V13.4182L55.2285 16.9158Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  r.jsx("path", {
                    d: "M54.5044 16.8583L44.899 25.2388L1.22406 21.7725L10.8294 13.392L54.5044 16.8583Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  r.jsx("path", {
                    d: "M78.9793 64.9559L56.2285 68.3822V16.8842L78.9793 13.4579V64.9559Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
                    stroke: "white",
                  }),
                  r.jsx("path", {
                    d: "M79.4643 13.3849L90.1933 15.6556L69.2643 18.8075L58.5352 16.5368L79.4643 13.3849Z",
                    fill: s ? (f === "0" ? "#99CC00" : "#C00000") : "#008C95",
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
const rC = "_taskInfo_sk5qx_1",
  sC = "_form_sk5qx_11",
  lC = "_label_sk5qx_23",
  iC = "_input_sk5qx_39",
  k1 = { taskInfo: rC, form: sC, label: lC, input: iC };
function oC(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    { register: i, setValue: o } = P4();
  let a, u;
  const C = (g) => {
      g.preventDefault();
    },
    f = L.useRef(!1),
    d = (g) => {
      const S = g.changedTouches[0].target;
      h(S);
    },
    c = (g) => {
      const S = g.target;
      (f.current = !0), h(S);
    },
    h = (g) => {
      (u = 0),
        (a = g.closest("label")),
        a && a.style.setProperty("--var-width", "0%");
    },
    v = () => {
      P();
    },
    y = () => {
      f.current && P();
    },
    P = () => {
      a &&
        (u === 0 && a && o("name1", a.id),
        (u += 3),
        u > 100 && (u = 100),
        a.style.setProperty("--var-width", `${u}%`));
    },
    x = () => {
      p();
    },
    p = () => {
      if (u < 5) {
        o("name1", ""), a && a.style.setProperty("--var-width", "0%"), n(!1);
        return;
      }
      if (a) {
        n(!0), a.style.setProperty("--var-width", "100%");
        const g = { arrAnswer: l, answerInfo: { answer: a.id, correct: !1 } };
        a.id === "2"
          ? (t(G("true")), (g.answerInfo.correct = !0), t(K(g)))
          : (t(G("false")), t(K(g)));
      }
    },
    m = () => {
      (f.current = !1), p();
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: k1.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Подчеркни верный ответ",
        }),
        r.jsxs("form", {
          className: k1.form,
          onClick: (g) => C(g),
          children: [
            r.jsxs("label", {
              className: k1.label,
              onMouseDown: (g) => c(g),
              onMouseMove: () => y(),
              onMouseLeave: () => m(),
              onTouchStart: (g) => d(g),
              onTouchMove: () => v(),
              onTouchEnd: () => x(),
              id: "1",
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: k1.input,
                  value: 1,
                  ...i("name1"),
                }),
                r.jsx("span", { children: "Юный инженер" }),
              ],
            }),
            r.jsxs("label", {
              className: k1.label,
              onMouseDown: (g) => c(g),
              onMouseMove: () => y(),
              onMouseLeave: () => m(),
              onTouchStart: (g) => d(g),
              onTouchMove: () => v(),
              onTouchEnd: () => x(),
              id: "2",
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: k1.input,
                  value: 2,
                  ...i("name1"),
                }),
                r.jsx("span", { children: "Молодой специалист" }),
              ],
            }),
            r.jsxs("label", {
              className: k1.label,
              onMouseDown: (g) => c(g),
              onMouseMove: () => y(),
              onMouseLeave: () => m(),
              onTouchStart: (g) => d(g),
              onTouchMove: () => v(),
              onTouchEnd: () => x(),
              id: "3",
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: k1.input,
                  value: 3,
                  ...i("name1"),
                }),
                r.jsx("span", { children: "Начинающий эксперт" }),
              ],
            }),
            r.jsxs("label", {
              className: k1.label,
              id: "4",
              onMouseDown: (g) => c(g),
              onMouseMove: () => y(),
              onMouseLeave: () => m(),
              onTouchStart: (g) => d(g),
              onTouchMove: () => v(),
              onTouchEnd: () => x(),
              children: [
                r.jsx("input", {
                  type: "radio",
                  className: k1.input,
                  value: 4,
                  ...i("name1"),
                }),
                r.jsx("span", { children: "Будущий профессионал" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const aC = "_taskInfo_slgdo_1",
  uC = "_task_slgdo_1",
  cC = "_taskAnswer_slgdo_27",
  CC = "_taskText_slgdo_41",
  fC = "_taskCheck_slgdo_59",
  dC = "_taskCups_slgdo_73",
  C1 = {
    taskInfo: aC,
    task: uC,
    taskAnswer: cC,
    taskText: CC,
    taskCheck: fC,
    taskCups: dC,
  },
  j4 = "" + new URL("cup-570ddd6d.svg", import.meta.url).href;
function pC(e) {
  const t = T1(),
    { selectAnswer: n, checkClick: s, active: l } = e,
    i = L.useRef(null),
    o = L.useRef(null),
    a = L.useRef(null),
    u = L.useRef(null),
    C = L.useRef(null);
  let f = 0,
    d = 0,
    c;
  const h = [
    { top: 0, left: 0 },
    { top: 0, left: 0 },
    { top: 0, left: 0 },
    { top: 0, left: 0 },
  ];
  L.useEffect(() => {
    if (i.current) {
      const k = i.current.getBoundingClientRect();
      (f = k.left), (d = k.top);
    }
    o.current &&
      ((h[0].top = o.current.offsetTop), (h[0].left = o.current.offsetLeft)),
      a.current &&
        ((h[1].top = a.current.offsetTop), (h[1].left = a.current.offsetLeft)),
      u.current &&
        ((h[2].top = u.current.offsetTop), (h[2].left = u.current.offsetLeft)),
      C.current &&
        ((h[3].top = C.current.offsetTop), (h[3].left = C.current.offsetLeft));
  });
  const v = L.useRef([!1, !1, !1, !1]),
    y = L.useRef(!1),
    P = (k) => {
      (document.body.style.overflow = "hidden"),
        (c = k.changedTouches[0].target),
        p();
    },
    x = (k) => {
      k.preventDefault(), (y.current = !0), (c = k.target), p();
    },
    p = () => {
      M.current = !1;
      const k = c.getAttribute("data-index");
      k && (v.current = v.current.map((B, F) => (F === +k ? !1 : B)));
      let _, I;
      c.style.position === "static"
        ? ((I = c.offsetTop),
          (_ = c.offsetLeft),
          (c.style.position = "absolute"))
        : ((c.style.position = "absolute"),
          (I = c.offsetTop),
          (_ = c.offsetLeft)),
        (c.style.zIndex = "1"),
        (c.style.left = _ + "px"),
        (c.style.top = I + "px");
    },
    m = (k) => {
      const _ = k.changedTouches[0];
      S(_.clientX, _.clientY);
    },
    g = (k) => {
      y.current && S(k.pageX, k.pageY);
    },
    S = (k, _) => {
      const I = _ - d - c.offsetHeight / 2,
        B = k - f - c.offsetWidth / 2;
      (c.style.position = "absolute"),
        (c.style.zIndex = "1"),
        B > 169 && B < 254 && (c.style.left = B + "px"),
        I > 0 && I < 112 && (c.style.top = I + "px");
    },
    w = () => {
      (document.body.style.overflow = "auto"), N();
    },
    M = L.useRef(!1),
    T = () => {
      M.current || ((M.current = !0), (y.current = !1), N());
    },
    N = () => {
      if (!c) return;
      const k = {
          top: parseFloat(c.style.top),
          left: parseFloat(c.style.left),
        },
        _ = h.findIndex(
          (B) =>
            B.top - 5 <= k.top && B.top + 20 >= k.top && B.left + 25 >= k.left
        );
      if (_ === -1 || v.current[_]) {
        (c.style.position = "static"),
          (c.style.left = "auto"),
          (c.style.top = "auto"),
          n(!1);
        return;
      }
      c.setAttribute("data-index", _ + ""),
        (c.style.top = h[_].top + 2 + "px"),
        (c.style.left = h[_].left + 3 + "px"),
        (v.current = v.current.map((B, F) => (F === _ ? !0 : B)));
      let I = 0;
      for (let B = 0; B < v.current.length; B++) {
        const F = v.current[B];
        if ((F && I++, I === 3)) {
          n(!0);
          const Q = {
            arrAnswer: l,
            answerInfo: { answer: v.current.join(" "), correct: !1 },
          };
          B === 3 && F
            ? (t(G("false")), t(K(Q)))
            : ((Q.answerInfo.correct = !0), t(K(Q)), t(G("true")));
        }
      }
    },
    Z = () => {
      M.current || ((M.current = !0), (y.current = !1), N());
    };
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: C1.taskInfo,
      children: [
        s && r.jsx(e1, {}),
        r.jsx("h4", {
          className: "task__subtitle " + (s ? "answer" : ""),
          children: "Перетяни кубок к выбранным премиям",
        }),
        r.jsxs("div", {
          className: C1.task,
          ref: i,
          children: [
            r.jsxs("div", {
              className: C1.taskAnswer,
              children: [
                r.jsxs("div", {
                  className: C1.taskText,
                  children: [
                    "Лучший работодатель ",
                    r.jsx("span", { children: "Headhunter" }),
                  ],
                }),
                r.jsx("div", { className: C1.taskCheck, ref: o }),
                r.jsxs("div", {
                  className: C1.taskText,
                  children: [
                    "Лучший работодатель ",
                    r.jsx("span", { children: "Forbes" }),
                  ],
                }),
                r.jsx("div", { className: C1.taskCheck, ref: a }),
                r.jsxs("div", {
                  className: C1.taskText,
                  children: [
                    "Лучший работодатель ",
                    r.jsx("span", { children: "FutureToday" }),
                  ],
                }),
                r.jsx("div", { className: C1.taskCheck, ref: u }),
                r.jsxs("div", {
                  className: C1.taskText,
                  children: [
                    "Лучший работодатель ",
                    r.jsx("span", { children: "IMDB" }),
                  ],
                }),
                r.jsx("div", { className: C1.taskCheck, ref: C }),
              ],
            }),
            r.jsxs("div", {
              className: C1.taskCups,
              children: [
                r.jsx("div", {
                  children: r.jsx("img", {
                    src: j4,
                    alt: "cup",
                    className: "taskCup",
                    onMouseOut: () => Z(),
                    onMouseUp: () => T(),
                    onMouseDown: (k) => x(k),
                    onMouseMove: (k) => g(k),
                    onTouchStart: (k) => P(k),
                    onTouchMove: (k) => m(k),
                    onTouchEnd: () => w(),
                    draggable: "true",
                  }),
                }),
                r.jsx("div", {
                  children: r.jsx("img", {
                    src: j4,
                    alt: "cup",
                    className: "taskCup",
                    onMouseOut: () => Z(),
                    onMouseUp: () => T(),
                    onMouseDown: (k) => x(k),
                    onMouseMove: (k) => g(k),
                    onTouchStart: (k) => P(k),
                    onTouchMove: (k) => m(k),
                    onTouchEnd: () => w(),
                  }),
                }),
                r.jsx("div", {
                  children: r.jsx("img", {
                    src: j4,
                    alt: "cup",
                    className: "taskCup",
                    onMouseOut: () => Z(),
                    onMouseUp: () => T(),
                    onMouseDown: (k) => x(k),
                    onMouseMove: (k) => g(k),
                    onTouchStart: (k) => P(k),
                    onTouchMove: (k) => m(k),
                    onTouchEnd: () => w(),
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
const hC = "_task__info_1e5cd_1",
  mC = "_subtitels_1e5cd_17",
  xC = "_points_1e5cd_31",
  fe = { task__info: hC, subtitels: mC, points: xC };
function gs() {
  const e = N2((t) => t.points).points;
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: fe.task__info,
      children: [
        r.jsx("h4", { className: fe.subtitels, children: "Баланс " }),
        r.jsx("p", { className: fe.points, children: e }),
      ],
    }),
  });
}
const vC = (e) => {
    switch (N2((n) => n.activeQuestion).activeQuestion.join("")) {
      case "00":
        return r.jsx(ru, { ...e });
      case "01":
        return r.jsx(uu, { ...e });
      case "02":
        return r.jsx(Pu, { ...e });
      case "03":
        return r.jsx(Du, { ...e });
      case "10":
        return r.jsx(Yu, { ...e });
      case "11":
        return r.jsx(nc, { ...e });
      case "12":
        return r.jsx(cc, { ...e });
      case "13":
        return r.jsx(mc, { ...e });
      case "20":
        return r.jsx(Mc, { ...e });
      case "21":
        return r.jsx(Rc, { ...e });
      case "22":
        return r.jsx($c, { ...e });
      case "23":
        return r.jsx(Yc, { ...e });
      case "30":
        return r.jsx(Xc, { ...e });
      case "31":
        return r.jsx(nC, { ...e });
      case "32":
        return r.jsx(oC, { ...e });
      case "33":
        return r.jsx(pC, { ...e });
      case "44":
        return r.jsx(gs, {});
    }
  },
  jC = (e) => {
    const t = +e.answer;
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: X1.task__info,
        children: [
          r.jsx(e1, {}),
          r.jsx("h4", {
            className: "task__subtitle answer",
            children: "Размести ползунок около верного ответае",
          }),
          r.jsxs("div", {
            className: X1.task,
            children: [
              r.jsx("input", {
                type: "range",
                min: "1",
                max: "4",
                step: "1",
                value: t + "",
                list: "list",
                onChange: (n) => n.target.value,
              }),
              r.jsxs("ul", {
                id: "list",
                className: X1.list,
                children: [
                  r.jsx("li", {
                    className: X1.item,
                    style: t === 1 ? { opacity: "1" } : { opacity: ".5" },
                    children: "Управление проектированием",
                  }),
                  r.jsx("li", {
                    className: X1.item,
                    style: t === 2 ? { opacity: "1" } : { opacity: ".5" },
                    children: "Управление выпуском продукции",
                  }),
                  r.jsx("li", {
                    className: X1.item,
                    style: t === 3 ? { opacity: "1" } : { opacity: ".5" },
                    children: "Управление строительством",
                  }),
                  r.jsx("li", {
                    className: X1.item,
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
  },
  yC = (e) => {
    const { answer: t, correct: n } = e,
      s = [
        { value: "EPC", check: !1 },
        { value: "САПР", check: !1 },
        { value: "UGC", check: !1 },
        { value: "BIM", check: !1 },
      ];
    return (
      (s[+t].check = !0),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: u3.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Перетащи выбранный вариант ответа в корзину",
            }),
            r.jsxs("div", {
              className: u3.task,
              children: [
                s.map((l, i) =>
                  r.jsx(
                    "div",
                    {
                      className: u3.taskAnswer,
                      children: r.jsx("span", {
                        style: {
                          color: l.check ? (n ? "#008C95" : "#C00000") : "#fff",
                          position: l.check ? "absolute" : "static",
                          fontSize: t === "1" && i === 1 ? "20px" : "25px",
                          top: +t === i ? "50%" : "",
                          left: +t === i ? "50%" : "",
                          transform:
                            +t === i ? "translateX(-50%) translateY(-50%)" : "",
                          zIndex: +t === i ? "2" : "",
                        },
                        children: l.value,
                      }),
                    },
                    i
                  )
                ),
                r.jsx("div", {
                  className: u3.cart,
                  children: r.jsx("img", { src: ls, alt: "cart" }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  gC = (e) => {
    const { answer: t } = e,
      n = [
        "Проектирование моделей в 3D",
        "VR-технологии для обучения сотрудников",
        "AR-очки для удаленной совместной работы",
        "Нейросети для создания проектной документации",
      ];
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: J.taskInfo,
        children: [
          r.jsx(e1, {}),
          r.jsx("h4", {
            className: "task__subtitle answer",
            children: "Нажми на огоньки около верных вариантов ответа",
          }),
          r.jsx("form", {
            className: J.form,
            children: n.map((s, l) =>
              t.includes(l + 1 + "")
                ? r.jsxs(
                    "label",
                    {
                      className: J.label,
                      children: [
                        r.jsx("input", {
                          type: "checkbox",
                          className: J.input,
                          defaultChecked: !0,
                          onChange: (i) => i.target.value,
                        }),
                        s,
                      ],
                    },
                    l
                  )
                : r.jsxs(
                    "label",
                    {
                      className: J.label,
                      children: [
                        r.jsx("input", {
                          type: "checkbox",
                          className: J.input,
                          onChange: (i) => i.target.value,
                        }),
                        s,
                      ],
                    },
                    l
                  )
            ),
          }),
        ],
      }),
    });
  },
  wC = (e) => {
    const { answer: t } = e,
      n = L.useRef(null),
      s = L.useRef(null),
      l = L.useRef(null),
      i = L.useRef(null);
    return (
      L.useEffect(() => {
        if (t === "1") {
          if (n.current) {
            n.current.style.setProperty("--var-width", "100%");
            const o = n.current.querySelector("input");
            o && o.setAttribute("checked", "true");
          }
          return;
        }
        if (t === "2") {
          if (s.current) {
            s.current.style.setProperty("--var-width", "100%");
            const o = s.current.querySelector("input");
            o && o.setAttribute("checked", "true");
          }
          return;
        }
        if (t === "3") {
          if (l.current) {
            l.current.style.setProperty("--var-width", "100%");
            const o = l.current.querySelector("input");
            o && o.setAttribute("checked", "true");
          }
          return;
        }
        if (i.current) {
          i.current.style.setProperty("--var-width", "100%");
          const o = i.current.querySelector("input");
          o && o.setAttribute("checked", "true");
        }
      }),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: w1.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Вычеркни выбранный ответ",
            }),
            r.jsxs("form", {
              className: w1.form,
              children: [
                r.jsxs("label", {
                  className: w1.label,
                  ref: n,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: w1.input,
                      value: 1,
                    }),
                    r.jsx("span", {
                      "data-value": "1",
                      children: "Водоснабжение и канализация",
                    }),
                  ],
                }),
                r.jsxs("label", {
                  className: w1.label,
                  ref: s,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: w1.input,
                      value: 2,
                    }),
                    r.jsx("span", {
                      "data-value": "2",
                      children: "Машиностроение и робототехника",
                    }),
                  ],
                }),
                r.jsxs("label", {
                  className: w1.label,
                  ref: l,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: w1.input,
                      value: 3,
                    }),
                    r.jsx("span", {
                      "data-value": "3",
                      children: "Генплан и транспорт",
                    }),
                  ],
                }),
                r.jsxs("label", {
                  className: w1.label,
                  ref: i,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: w1.input,
                      value: 4,
                    }),
                    r.jsx("span", {
                      "data-value": "4",
                      children: "Связь, безопасность и телекоммуникации",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  kC = (e) => {
    const { answer: t, correct: n } = e,
      s = [
        { value: "амбов", answer: !1 },
        { value: "юмень", answer: !1 },
        { value: "ольятти", answer: !1 },
        { value: "омск", answer: !1 },
      ];
    s[+t].answer = !0;
    const l = s[+t].value;
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: o1.taskInfo,
        children: [
          r.jsx(e1, {}),
          r.jsxs("h4", {
            className: "task__subtitle answer",
            children: [
              "Перетащи часть слова к первой букве так,",
              r.jsx("br", {}),
              " чтобы получилось название верного города",
            ],
          }),
          r.jsx("div", {
            className: o1.task,
            children: r.jsxs("div", {
              className: o1.taskAnswer,
              children: [
                r.jsx("span", { children: "Т" }),
                r.jsx("div", {
                  className: o1.answer,
                  children: r.jsx("div", {
                    className: o1.zero + " " + (n ? o1.success : o1.danger),
                    children: l,
                  }),
                }),
              ],
            }),
          }),
          r.jsx("div", {
            className: o1.taskZeros,
            children: s.map((i) =>
              r.jsx(
                "div",
                {
                  children: r.jsx("div", {
                    className:
                      o1.zero +
                      " " +
                      (i.answer ? o1.none : "") +
                      " " +
                      (n ? o1.success : o1.danger),
                    children: i.value,
                  }),
                },
                i.value
              )
            ),
          }),
        ],
      }),
    });
  },
  MC = (e) => {
    const { answer: t, correct: n } = e,
      s = L.useRef(null),
      l = L.useRef(null),
      i = L.useRef(null),
      o = L.useRef(null),
      a = L.useRef(null),
      u = L.useRef(null),
      C = { top: 0, left: 0 },
      f = [
        { name: "Санкт-Петербург", check: !1 },
        { name: "Москва", check: !1 },
        { name: "Ростов-на-Дону", check: !1 },
        { name: "Краснодар", check: !1 },
      ];
    return (
      (f[+t].check = !0),
      L.useEffect(() => {
        if (s.current) {
          const d = s.current.getBoundingClientRect();
          if (u.current) {
            if (
              ((u.current.style.position = "absolute"), t === "0" && l.current)
            ) {
              const c = l.current.getBoundingClientRect();
              (C.top = c.top + c.height / 2 - d.top - 21.5),
                (C.left = Math.ceil(c.left + c.width / 2 - d.left - 10));
            }
            if (i.current && t === "1") {
              const c = i.current.getBoundingClientRect();
              (C.top = c.top + c.height / 2 - d.top - 21.5),
                (C.left = Math.ceil(c.left + c.width / 2 - d.left - 10));
            }
            if (o.current && t === "2") {
              const c = o.current.getBoundingClientRect();
              (C.top = c.top + c.height / 2 - d.top - 21.5),
                (C.left = Math.ceil(c.left + c.width / 2 - d.left - 10));
            }
            if (a.current && t === "3") {
              const c = a.current.getBoundingClientRect();
              (C.top = c.top + c.height / 2 - d.top - 21.5),
                (C.left = Math.ceil(c.left + c.width / 2 - d.left - 10));
            }
            (u.current.style.top = C.top + "px"),
              (u.current.style.left = C.left + "px");
          }
        }
      }),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: G1.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsxs("h4", {
              className: "task__subtitle answer",
              children: [
                "Перетащи кнопку ",
                r.jsx("br", {}),
                "на верный город",
              ],
            }),
            r.jsxs("div", {
              className: G1.task,
              ref: s,
              children: [
                r.jsx("div", {
                  className: G1.map,
                  children: r.jsxs("svg", {
                    ref: u,
                    width: "20",
                    height: "43",
                    viewBox: "0 0 20 43",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      r.jsx("path", {
                        d: "M10 42.4463C13.115 42.4463 15.6402 41.9333 15.6402 41.3005C15.6402 40.6677 13.115 40.1547 10 40.1547C6.885 40.1547 4.35979 40.6677 4.35979 41.3005C4.35979 41.9333 6.885 42.4463 10 42.4463Z",
                        fill: "white",
                        fillOpacity: 0.5,
                      }),
                      r.jsx("path", {
                        d: "M8.22972 39.5961L7.25865 15.434H12.7442L11.7731 39.5961C11.7359 40.5471 10.951 41.3005 9.99999 41.3005C9.04897 41.3005 8.26696 40.5471 8.22972 39.5961Z",
                        fill: n ? "#DEFF7B" : "#EEA7A7",
                      }),
                      r.jsx("path", {
                        d: "M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",
                        fill: "white",
                      }),
                    ],
                  }),
                }),
                r.jsx("div", {
                  className: G1.towns,
                  children: f.map((d, c) =>
                    r.jsxs(
                      "div",
                      {
                        className: G1.town,
                        children: [
                          r.jsx("span", {
                            style: {
                              background: d.check ? "#fff" : "transparent",
                            },
                            className: G1.answer,
                            ref: c === 0 ? l : c === 1 ? i : c === 2 ? o : a,
                          }),
                          r.jsx("span", {
                            className: G1.name,
                            children: d.name,
                          }),
                        ],
                      },
                      c
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  LC = (e) => {
    const { answer: t } = e,
      n = [
        { value: 1, check: !1, deg: 120 },
        { value: 2, check: !1, deg: 150 },
        { value: 3, check: !1, deg: 180 },
        { value: 4, check: !1, deg: 210 },
        { value: 5, check: !1, deg: 240 },
        { value: 6, check: !1, deg: 270 },
        { value: 7, check: !1, deg: 300 },
        { value: 8, check: !1, deg: 330 },
        { value: 9, check: !1, deg: 0 },
        { value: 10, check: !1, deg: 30 },
        { value: 11, check: !1, deg: 60 },
        { value: 12, check: !1, deg: 90 },
      ],
      s = n.find((o) => o.deg + "" === t);
    s && (s.check = !0);
    const l = { transformOrigin: `${+t > 180 ? 55 : 53}% 50%` },
      i = L.useRef(null);
    return (
      L.useEffect(() => {
        i.current && i.current.style.setProperty("--rotate", `${t}deg`);
      }),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: V1.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsxs("div", {
              className: V1.clock,
              children: [
                r.jsx("div", {
                  className: V1.numbers,
                  children: n.map((o, a) =>
                    r.jsx(
                      "span",
                      {
                        "data-value": o.value,
                        className: o.check ? V1.check : "",
                        children: o.value,
                      },
                      a
                    )
                  ),
                }),
                r.jsx("div", {
                  className: V1.arrows,
                  style: l,
                  children: r.jsx("div", {
                    className: V1.hour,
                    ref: i,
                    children: r.jsx("img", { src: ps, alt: "hour" }),
                  }),
                }),
                r.jsx("div", {
                  className: V1.minutes,
                  children: r.jsxs("svg", {
                    width: "63",
                    height: "95",
                    viewBox: "0 0 63 95",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      r.jsx("path", {
                        d: "M30.9235 83.1408C30.0093 83.1408 29.3999 82.5314 29.3999 81.6172C29.3999 80.7031 30.0093 80.0936 30.9235 80.0936C31.8376 80.0936 32.4471 80.7031 32.4471 81.6172C32.4471 82.5314 31.8376 83.1408 30.9235 83.1408Z",
                        fill: "#008C95",
                      }),
                      r.jsx("path", {
                        d: "M33.0875 78.4396C32.9139 78.6901 32.7019 78.7284 32.4898 78.7668C31.9406 78.7568 31.3146 78.3227 31.1126 77.8118C30.7855 77.2141 30.2463 76.6548 29.6586 76.4328C29.3214 76.3843 28.9842 76.3359 28.7722 76.3743C28.7722 76.3743 28.7338 76.1623 28.8206 76.0371L28.5474 17.0745C28.5574 16.5252 28.8663 15.8124 29.2136 15.3116C29.3004 15.1864 29.3872 15.0612 29.3872 15.0612L30.207 14.1464C30.4674 13.7708 31.0167 13.7808 31.3055 14.1665L32.2203 14.9862C32.6343 15.4587 33.125 16.3552 33.0281 17.0297L33.348 78.064C33.2612 78.1892 33.1743 78.3144 33.0875 78.4396Z",
                        fill: "rgba(255, 255, 255, .3)",
                      }),
                      r.jsx("path", {
                        d: "M30.7579 0.197183L30.905 0.157751C31.386 0.186618 31.612 0.441517 31.7303 0.883015L31.7773 89.3583C31.7485 89.8392 31.4936 90.0652 31.0521 90.1835C30.5711 90.1547 30.3451 89.8998 30.2268 89.4583L30.1798 0.983019C30.2086 0.502087 30.4635 0.276049 30.7579 0.197183Z",
                        fill: "#66BABF",
                        fillOpacity: ".3",
                      }),
                      r.jsx("path", {
                        d: "M30.5424 81.8026C30.6896 81.7632 30.8367 81.7238 30.9839 81.6843C31.7592 81.6343 32.5844 82.3596 32.4873 83.1743L32.4197 92.3409C32.4697 93.1161 31.7445 93.9414 30.9298 93.8442C30.1545 93.8942 29.3292 93.1689 29.4264 92.3543L29.4939 83.1877C29.2968 82.4518 29.9537 81.9603 30.5424 81.8026Z",
                        fill: "#66BABF",
                        fillOpacity: ".3",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Передвинь часовую стрелку в верное положение",
            }),
          ],
        }),
      })
    );
  },
  ZC = (e) => {
    const { answer: t, correct: n } = e,
      s = [hs, ms, xs, vs],
      l = [
        { nameRU: "Астрахань", nameEN: "Astrakhan" },
        { nameRU: "Казань", nameEN: "Kazan" },
        { nameRU: "Нижневартовск", nameEN: "Nizhnevartovsk" },
        { nameRU: "Комсомольск-на-Амуре", nameEN: "Komsomolsk-na-Amure" },
      ];
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: s2.taskInfo,
        children: [
          r.jsx(e1, {}),
          r.jsx("h4", {
            className: "task__subtitle answer",
            children: "Выбери верный силуэт региона",
          }),
          r.jsx("form", {
            className: s2.task,
            children: l.map((i, o) =>
              o === +t
                ? r.jsxs(
                    "label",
                    {
                      className: s2.label,
                      children: [
                        r.jsx("input", {
                          type: "radio",
                          className: s2.input,
                          value: o,
                          checked: !0,
                          onChange: (a) => a.target.value,
                        }),
                        r.jsxs("div", {
                          className: s2.answer,
                          children: [
                            r.jsx("img", { src: s[o], alt: i.nameEN }),
                            r.jsx("span", { children: i.nameRU }),
                            r.jsx(f8, {
                              value: o,
                              color: n ? "#99CC00" : "#CC0000",
                            }),
                          ],
                        }),
                      ],
                    },
                    o
                  )
                : r.jsxs(
                    "label",
                    {
                      className: s2.label,
                      children: [
                        r.jsx("input", {
                          type: "radio",
                          className: s2.input,
                          value: o,
                        }),
                        r.jsxs("div", {
                          className: s2.answer,
                          children: [
                            r.jsx("img", { src: s[o], alt: i.nameEN }),
                            r.jsx("span", { children: i.nameRU }),
                            r.jsx(f8, {
                              value: o,
                              color: n ? "#99CC00" : "#CC0000",
                            }),
                          ],
                        }),
                      ],
                    },
                    o
                  )
            ),
          }),
        ],
      }),
    });
  },
  AC = (e) => {
    const { answer: t } = e,
      n = t + "%";
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: l2.task__info,
        children: [
          r.jsx(e1, {}),
          r.jsx("h4", {
            className: "task__subtitle answer",
            children: "Расположи полузнок на верной цифре",
          }),
          r.jsxs("form", {
            className: l2.form,
            children: [
              r.jsxs("div", {
                className: l2.numbersActive,
                children: [
                  r.jsx("span", { style: { display: "none" }, children: "0" }),
                  r.jsx("span", {
                    style: { display: "block" },
                    className: l2.userAnswer,
                    children: t,
                  }),
                  r.jsx("span", {
                    style: { display: "none" },
                    children: "100",
                  }),
                ],
              }),
              r.jsxs("div", {
                className: l2.progress,
                children: [
                  r.jsx("input", {
                    type: "range",
                    className: l2.range,
                    min: "0",
                    max: "100",
                    step: "10",
                    value: t,
                    onChange: (s) => s.target.value,
                  }),
                  r.jsx("span", { style: { width: n } }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  SC = (e) => {
    const { answer: t, correct: n } = e,
      s = [
        { value: "0", answer: !1 },
        { value: "00", answer: !1 },
        { value: "000", answer: !1 },
        { value: "0000", answer: !1 },
      ];
    s[+t].answer = !0;
    const l = L.useRef(null),
      i = L.useRef(null),
      o = L.useRef(null),
      a = L.useRef(null),
      u = { top: 0, left: 0 },
      C = L.useRef(null),
      f = L.useRef(null);
    return (
      L.useEffect(() => {
        let d = 0,
          c = 0;
        if (C.current) {
          const h = C.current.getBoundingClientRect();
          (d = h.left), (c = h.top);
        }
        if (f.current) {
          const h = f.current.getBoundingClientRect();
          (u.top = Math.round(h.top - c)), (u.left = Math.round(h.left - d));
        }
        l.current &&
          t === "0" &&
          ((l.current.style.position = "absolute"),
          (l.current.style.top = u.top + "px"),
          (l.current.style.left = u.left + "px")),
          i.current &&
            t === "1" &&
            ((i.current.style.position = "absolute"),
            (i.current.style.top = u.top + "px"),
            (i.current.style.left = u.left + "px")),
          o.current &&
            t === "2" &&
            ((o.current.style.position = "absolute"),
            (o.current.style.top = u.top + "px"),
            (o.current.style.left = u.left + "px")),
          a.current &&
            t === "3" &&
            ((a.current.style.position = "absolute"),
            (a.current.style.top = u.top + "px"),
            (a.current.style.left = u.left + "px"));
      }),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: O1.taskInfo,
          ref: C,
          children: [
            r.jsx(e1, {}),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Перетащи верное количество нулей в ячейку",
            }),
            r.jsx("div", {
              className: O1.task,
              children: r.jsxs("div", {
                className: O1.taskAnswer,
                children: [
                  r.jsx("span", { children: "1" }),
                  r.jsx("div", { className: O1.answer, ref: f }),
                  r.jsx("span", { children: "+" }),
                ],
              }),
            }),
            r.jsx("div", {
              className: O1.taskZeros,
              children: s.map((d, c) =>
                r.jsx(
                  "div",
                  {
                    children: r.jsx("div", {
                      ref: c === 0 ? l : c === 1 ? i : c === 2 ? o : a,
                      className: O1.zero + " " + (n ? O1.success : O1.danger),
                      style: { width: c === 3 ? "128px" : "auto" },
                      children: d.value,
                    }),
                  },
                  d.value
                )
              ),
            }),
          ],
        }),
      })
    );
  },
  _C = (e) => {
    const { answer: t } = e,
      n = L.useRef(null),
      s = L.useRef(null),
      l = L.useRef(null),
      i = L.useRef(null);
    return (
      L.useEffect(() => {
        n.current && t === "1" && n.current.setAttribute("checked", "true"),
          s.current && t === "2" && s.current.setAttribute("checked", "true"),
          l.current && t === "3" && l.current.setAttribute("checked", "true"),
          i.current && t === "4" && i.current.setAttribute("checked", "true");
      }),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: r1.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Обведи календарь с верным годом",
            }),
            r.jsxs("form", {
              className: r1.form,
              children: [
                r.jsxs("label", {
                  className: r1.label + " " + r1.value1,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: r1.input,
                      value: 1,
                      ref: n,
                    }),
                    r.jsx(C3, { id: "svg1" }),
                  ],
                }),
                r.jsxs("label", {
                  className: r1.label + " " + r1.value2,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: r1.input,
                      value: 2,
                      ref: s,
                    }),
                    r.jsx(C3, { id: "svg2" }),
                  ],
                }),
                r.jsxs("label", {
                  className: r1.label + " " + r1.value3,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: r1.input,
                      value: 3,
                      ref: l,
                    }),
                    r.jsx(C3, { id: "svg3" }),
                  ],
                }),
                r.jsxs("label", {
                  className: r1.label + " " + r1.value4,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: r1.input,
                      value: 4,
                      ref: i,
                    }),
                    r.jsx(C3, { id: "svg4" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  NC = (e) => {
    const { answer: t } = e,
      [n, s] = [...t.split("")];
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: q1.taskInfo,
        children: [
          r.jsx(e1, {}),
          r.jsx("h4", {
            className: "task__subtitle answer",
            children: "Собери верную цифру на кодовом замке",
          }),
          r.jsxs("div", {
            className: q1.task,
            children: [
              r.jsx("img", { src: js, alt: "code" }),
              r.jsx("div", { className: q1.number, children: "2" }),
              r.jsx(V6, { value: +n, className: q1.number }),
              r.jsx(V6, { value: +s, className: q1.number }),
              r.jsx("img", { src: ys, alt: "code", className: q1.code }),
              r.jsxs("p", {
                className: q1.text,
                children: ["МЛРД М", r.jsx("span", { children: "3" })],
              }),
            ],
          }),
        ],
      }),
    });
  },
  EC = (e) => {
    const { answer: t } = e,
      n = [
        "Доступ в электронную библиотеку",
        "Скидки на авиабилеты и гостиницы",
        "Корпоративный спорт",
        "Обучение за счет компании",
      ];
    return r.jsx(r.Fragment, {
      children: r.jsxs("div", {
        className: J.taskInfo,
        children: [
          r.jsx(e1, {}),
          r.jsx("h4", {
            className: "task__subtitle answer",
            children: "Нажми на огоньки около верных вариантов ответа",
          }),
          r.jsx("form", {
            className: J.form,
            children: n.map((s, l) =>
              t.includes(l + 1 + "")
                ? r.jsxs(
                    "label",
                    {
                      className: J.label,
                      children: [
                        r.jsx("input", {
                          type: "checkbox",
                          className: J.input,
                          defaultChecked: !0,
                          onChange: (i) => i.target.value,
                        }),
                        s,
                      ],
                    },
                    l
                  )
                : r.jsxs(
                    "label",
                    {
                      className: J.label,
                      children: [
                        r.jsx("input", {
                          type: "checkbox",
                          className: J.input,
                          onChange: (i) => i.target.value,
                        }),
                        s,
                      ],
                    },
                    l
                  )
            ),
          }),
        ],
      }),
    });
  },
  TC = (e) => {
    const { index: t, color: n, value: s, style: l } = e;
    if (t === 0)
      return r.jsx("div", {
        "data-value": s,
        style: l,
        children: r.jsxs("svg", {
          width: "65",
          height: "58",
          viewBox: "0 0 65 58",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M63.3012 38.2725L42.7196 37.8553L42.4415 39.9413L63.1622 41.8882L63.3012 38.2725Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M48.2968 39.3666L48.2968 39.3667C41.7913 48.2005 32.0507 52.3654 23.2086 54.386C16.4573 55.9288 10.3122 56.2099 6.53162 56.3829C5.66766 56.4225 4.92718 56.4563 4.33116 56.4983C4.65052 53.0107 5.49284 46.5886 7.8873 39.617C10.4247 32.2291 14.693 24.2593 21.894 18.4985L21.9006 18.4932L21.9071 18.4877C24.8107 15.9989 29.281 12.6283 35.4882 12.6283C39.6978 12.6283 44.4525 15.2173 48.388 18.078C52.0061 20.7078 54.8429 23.5005 55.7854 24.4955C54.3978 28.9808 52.074 34.2404 48.2968 39.3666Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M40.4945 42.0274C40.4945 42.0274 45.0837 38.4117 48.6994 41.7493L40.4945 42.0274Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M1.56431 41.5782L1.71469 40.4504L21.2207 40.8485V43.4251L1.56431 41.5782Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M41.386 41.7759L41.386 41.7759L41.3865 41.783C41.5459 44.1424 40.3947 46.0146 38.4888 47.367C36.5704 48.7281 33.911 49.5378 31.1795 49.716C28.4481 49.8941 25.7041 49.4367 23.6201 48.3285C21.5508 47.228 20.1553 45.5048 19.9949 43.1087C19.8701 40.9754 21.0276 39.2037 22.9636 37.8792C24.9055 36.5507 27.5807 35.7148 30.3152 35.4855C33.0509 35.2561 35.7852 35.6389 37.8483 36.6828C39.8931 37.7175 41.2585 39.3841 41.386 41.7759Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M23.8069 42.8617C24.2241 49.2587 39.9384 48.1462 39.5212 41.8883C39.104 35.6304 23.3897 37.1601 23.8069 42.8617Z",
              fill: n,
            }),
            r.jsxs("g", {
              opacity: "0.2",
              children: [
                r.jsx("path", {
                  d: "M35.3491 38.1335L27.7005 46.7555C26.3098 46.3383 25.1973 45.782 24.502 44.8086L30.6208 37.8553C32.2896 37.7163 33.9584 37.8553 35.3491 38.1335Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M39.3819 41.3321L34.6537 46.6165C33.9584 46.7556 33.2631 46.8947 32.4287 47.0337L38.6866 39.9414C39.1038 40.4977 39.2429 40.9149 39.3819 41.3321Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M29.6476 38.1335L24.224 44.2524C24.085 44.1133 24.085 43.9743 23.9459 43.6962L28.6741 38.2726C29.0913 38.2726 29.3694 38.1335 29.6476 38.1335Z",
                  fill: "white",
                }),
              ],
            }),
            r.jsx("path", {
              d: "M64.4962 41.1755L64.4962 41.1755L64.496 41.1696C64.3834 38.7686 63.1826 37.0114 61.4708 35.8959C59.7745 34.7906 57.5879 34.3188 55.4555 34.4182C53.3231 34.5176 51.1913 35.1906 49.6067 36.4393C48.0089 37.6984 46.9757 39.5409 47.0872 41.9081C47.1637 44.2793 48.3433 45.9726 50.0459 47.0167C51.7294 48.0491 53.9083 48.4416 56.0341 48.2974C58.1612 48.1532 60.2924 47.4682 61.8878 46.2786C63.4932 45.0815 64.5727 43.355 64.4962 41.1755Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M60.9371 41.332C60.659 35.9085 49.2557 36.4648 49.3947 41.7492C49.6729 47.1728 61.0762 46.1993 60.9371 41.332Z",
              fill: n,
            }),
            r.jsxs("g", {
              opacity: "0.2",
              children: [
                r.jsx("path", {
                  d: "M52.3148 45.0868L58.0165 37.9945C58.99 38.2726 59.8243 38.8289 60.3806 39.6633L55.7915 45.365C54.6789 45.504 53.4274 45.365 52.3148 45.0868Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M49.3945 42.1664L52.8711 37.7164C53.4274 37.5773 53.9837 37.4382 54.5399 37.4382L49.8117 43.279C49.6726 43.0008 49.5336 42.5836 49.3945 42.1664Z",
                  fill: "white",
                }),
                r.jsx("path", {
                  d: "M56.626 45.2258L60.6589 40.2195C60.7979 40.3585 60.7979 40.4976 60.7979 40.6367L57.1823 45.0868C57.0432 45.0868 56.7651 45.2258 56.626 45.2258Z",
                  fill: "white",
                }),
              ],
            }),
            r.jsx("path", {
              d: "M56.2684 24.6766L57.171 25.1153L56.9776 24.1306C56.2093 20.2191 55.264 16.679 54.1734 13.7941C53.0881 10.9235 51.8389 8.6463 50.4338 7.31521L50.4339 7.31519L50.4293 7.31094C43.8899 1.26913 34.2252 -0.623434 25.2755 1.12071C16.3222 2.86554 7.99355 8.2678 4.15846 16.9322L4.15741 16.9346C2.44687 20.8546 1.57801 27.4053 1.45613 34.6658C1.33393 41.9455 1.96202 50.0108 3.29007 57.0006L4.2735 56.9951C6.68752 43.4767 13.5777 32.4125 22.9011 26.2254C32.2083 20.0491 43.9794 18.7038 56.2684 24.6766Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("mask", {
              id: "mask0_251_18439",
              style: { maskType: "alpha" },
              maskUnits: "userSpaceOnUse",
              x: "1",
              y: "1",
              width: "56",
              height: "56",
              children: r.jsx("path", {
                d: "M53.238 14.1477C54.2129 16.7265 55.0765 19.8634 55.7997 23.3495C43.5208 17.7198 31.7235 19.1707 22.3481 25.3922C13.3741 31.3474 6.65347 41.6479 3.81723 54.2049C2.81565 47.9336 2.34979 41.0089 2.45599 34.6826C2.57746 27.4464 3.44674 21.0645 5.07343 17.3358C8.74811 9.03498 16.7592 3.79919 25.4668 2.10224C34.1773 0.404727 43.4938 2.26626 49.7484 8.0433C50.9847 9.21581 52.1683 11.3184 53.238 14.1477Z",
                fill: "#C00000",
                stroke: "white",
              }),
            }),
            r.jsxs("g", {
              mask: "url(#mask0_251_18439)",
              children: [
                r.jsx("path", {
                  d: "M42.93 14.2412C42.93 14.2412 38.3372 13.2582 36.4428 14.9679C34.5483 16.6775 32.9528 19.9909 30.3022 20.8308C30.3022 20.8308 35.23 20.5662 37.9439 19.8056C40.6585 19.0569 41.0702 17.0367 41.8153 15.7198C42.5387 14.4396 42.93 14.2412 42.93 14.2412Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M42.2343 14.4915C40.1726 14.1883 38.3015 15.6721 36.7819 16.8769C35.2171 18.1196 33.6754 19.5738 31.8147 20.3713C31.7918 20.3843 31.7657 20.3384 31.7886 20.3254C33.7775 19.2728 35.4233 17.7774 37.1947 16.4173C38.6139 15.3243 40.3482 14.1553 42.2219 14.4803C42.2566 14.4666 42.2579 14.4902 42.2343 14.4915Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.7837 17.2059C39.8851 17.6443 38.9521 17.8836 37.9538 18.0081C36.7328 18.1683 35.5409 18.2086 34.386 18.7199C34.3631 18.733 34.337 18.6871 34.3599 18.674C35.2697 18.2232 36.2345 18.1359 37.2341 18.035C38.4334 17.9115 39.6891 17.7376 40.7837 17.2059Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.4617 17.8143C39.4191 18.2132 38.3602 18.5301 37.2584 18.7075C36.1094 18.8874 34.9328 18.7733 33.8312 19.1753C33.8194 19.1759 33.807 19.1648 33.8181 19.1523C34.6547 18.6582 35.7867 18.822 36.7266 18.7124C38.0072 18.5609 39.254 18.222 40.4617 17.8143C40.4735 17.8137 40.4729 17.8019 40.4617 17.8143Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.5411 18.5022C38.559 18.7086 37.582 19.0094 36.5831 19.1221C36.0893 19.1723 35.5948 19.2106 35.1095 19.2012C34.5529 19.1838 34.0533 19.1279 33.5368 19.4157C33.5138 19.4288 33.4883 19.3947 33.5113 19.3816C34.1722 18.9205 35.1783 19.1621 35.9446 19.1209C37.1707 19.0551 38.3475 18.7318 39.5404 18.4904C39.5398 18.4786 39.5522 18.4898 39.5411 18.5022Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M41.2134 15.7403C40.5343 16.0842 39.811 16.2649 39.074 16.4109C38.2315 16.5743 37.2084 16.6766 36.4401 17.1198C36.406 17.1453 36.3674 17.0882 36.4015 17.0627C37.0316 16.6861 37.8524 16.5592 38.5658 16.4145C39.4548 16.2367 40.3581 16.1055 41.1892 15.7298C41.2122 15.7167 41.2128 15.7285 41.2134 15.7403Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.5787 16.2473C39.0877 16.883 37.4141 16.7601 35.9628 17.4764C35.951 17.4771 35.9386 17.4659 35.9504 17.4653C37.3749 16.6912 39.0727 16.8247 40.5663 16.2361C40.5775 16.2237 40.5899 16.2349 40.5787 16.2473Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.1198 14.3094C38.5472 14.7486 37.0251 15.9062 36.1542 17.3008C36.1318 17.3256 36.0952 17.3039 36.1057 17.2797C36.986 15.8374 38.4851 14.6928 40.1198 14.3094Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.3697 14.5216C37.1705 15.3072 36.4077 16.294 35.8636 17.6119C35.8643 17.6237 35.8401 17.6132 35.8512 17.6008C36.3691 16.237 37.122 15.2862 38.3573 14.5104C38.3809 14.5092 38.3815 14.521 38.3697 14.5216Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.3021 14.8981C35.796 15.913 35.1722 17.5071 34.1741 18.9558C34.1636 18.98 34.1269 18.9583 34.1375 18.9341C35.0735 17.4296 35.7469 15.8801 37.3021 14.8981Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.5417 23.4017C29.5417 23.4017 32.8779 20.7988 35.9213 21.7704C38.9529 22.7426 39.3151 24.8632 39.3151 24.8632C39.3151 24.8632 38.6841 24.3414 37.6955 24.8674C36.7076 25.4051 34.528 26.2079 33.1856 24.7667C31.8431 23.3254 30.7667 22.8748 29.5417 23.4017Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M38.4111 23.8832C36.1779 22.1469 33.3111 22.7028 30.7525 23.053C30.7053 23.0555 30.6891 22.9736 30.7356 22.9593C33.2504 22.2331 36.2444 22.2852 38.4111 23.8832Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.301 22.8077C36.5753 22.5038 35.789 22.3924 35.0078 22.3752C34.2148 22.3587 33.538 22.5251 32.7787 22.6959C32.7433 22.6978 32.729 22.6513 32.7643 22.6494C33.6167 22.4499 34.3047 22.2711 35.1945 22.3297C35.9181 22.3736 36.6343 22.5007 37.3122 22.7953C37.3122 22.7953 37.3128 22.8071 37.301 22.8077Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.651 22.3696C35.1891 21.7861 33.6644 22.2344 32.2607 22.7354C32.2259 22.7491 32.2116 22.7026 32.2464 22.6889C33.6494 22.1761 35.199 21.7501 36.651 22.3696C36.6628 22.369 36.6622 22.3572 36.651 22.3696Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M33.7816 21.7789C33.1054 21.9571 32.599 22.4335 31.99 22.7618C31.9441 22.7879 31.9049 22.7191 31.9515 22.7048C32.5468 22.3417 33.0793 21.9112 33.7692 21.7677C33.781 21.7671 33.7816 21.7789 33.7816 21.7789Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.8204 24.9563C35.1711 24.7547 34.5646 24.468 34.0119 24.0839C33.3866 23.6682 32.8255 22.9062 32.1042 22.6848C32.0682 22.6749 32.0762 22.6035 32.1128 22.6252C32.677 22.7841 33.0449 23.2491 33.479 23.6277C34.1721 24.2053 34.9532 24.6599 35.8204 24.9563Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.2825 25.0678C34.7467 24.7774 34.1675 24.5602 33.6862 24.1841C33.0695 23.7088 32.5644 23.1093 31.8171 22.842C31.7811 22.8321 31.8015 22.7719 31.8381 22.7936C32.4408 23.0095 32.8893 23.4347 33.3496 23.8593C33.9334 24.3836 34.5896 24.7149 35.2825 25.0678C35.2943 25.0672 35.2936 25.0554 35.2825 25.0678Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M33.9545 24.9973C33.5075 24.8203 33.2075 24.5172 32.9043 24.1551C32.5005 23.6802 32.0116 23.1626 31.441 22.8859C31.3926 22.8648 31.436 22.7915 31.4844 22.8126C31.9097 23.0262 32.3078 23.395 32.6221 23.7446C33.0247 24.1959 33.3399 24.782 33.9545 24.9973C33.9663 24.9966 33.9656 24.9848 33.9545 24.9973Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.6691 24.5969C37.0032 24.5262 36.31 24.3861 35.7672 23.966C35.176 23.5248 34.605 22.7988 33.8961 22.5886C33.8601 22.5787 33.8681 22.5073 33.9048 22.529C34.4342 22.7016 34.8473 23.1286 35.2684 23.4844C35.5895 23.7391 35.8647 24.0199 36.2415 24.2124C36.6792 24.4372 37.1807 24.5285 37.6691 24.5969C37.6809 24.5962 37.692 24.5838 37.6691 24.5969Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.0538 24.4935C37.4207 24.3738 36.7746 24.2311 36.2022 23.919C35.5689 23.5747 35.111 22.9726 34.4554 22.6531C34.4069 22.6321 34.4509 22.5706 34.4876 22.5923C35.0941 22.879 35.5129 23.4121 36.0754 23.7603C36.6746 24.1301 37.3704 24.3174 38.0531 24.4817C38.0767 24.4804 38.0656 24.4928 38.0538 24.4935Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.3146 24.2903C37.4419 23.4504 36.303 23.1569 35.2352 22.6467C35.2227 22.6356 35.2339 22.6232 35.2457 22.6225C36.3141 23.1445 37.4655 23.4492 38.3146 24.2903C38.327 24.3015 38.3264 24.2897 38.3146 24.2903Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.28483 15.363C6.88654 15.4317 6.38657 15.5886 5.97483 15.8471C5.78075 15.9758 5.63509 16.1255 5.50375 16.3217C5.43808 16.4198 5.50019 16.4756 5.40967 16.5514C5.36442 16.5893 5.1981 16.5746 5.12864 16.6019C4.455 16.8273 3.95638 17.6698 4.07562 18.3492C3.70407 18.4755 3.53507 18.8511 3.49512 19.208C3.47178 19.4338 3.50358 19.5858 3.43182 19.7907C3.37058 19.9713 3.3205 20.1395 3.32936 20.3046C3.77789 19.6302 4.46111 20.2438 5.03268 20.3195C5.7594 20.4224 6.18839 20.0447 6.81804 19.8808C6.83204 20.8022 7.3802 22.2034 8.51803 22.0359C8.56923 22.3287 8.5625 22.4236 8.84061 22.5388C7.95731 22.8227 8.8911 23.9193 9.13471 24.2728C9.03612 23.7579 9.66981 23.8894 9.95717 23.9567C10.3643 24.0531 10.8527 24.1214 11.2714 23.9925C12.0853 23.736 13.0969 22.7595 13.2033 21.8789C13.6499 22.2687 14.2851 22.6484 14.8907 22.6986C15.5318 22.747 15.8435 22.3874 16.1247 21.8994C16.917 22.3416 17.8242 21.8436 18.0269 20.9933C18.2493 20.071 17.9772 19.187 17.5377 18.4894C18.312 18.3769 19.0477 18.2073 19.6453 17.6669C20.1977 17.1643 20.4664 16.6651 20.7238 15.9537C21.0313 15.0741 21.1143 13.7573 19.9785 13.5227C19.2368 13.3616 18.6731 13.652 18.0119 13.8884C18.0644 13.1053 17.8475 12.1475 18.5368 11.5548C18.337 11.5773 18.1638 11.4329 17.9844 11.3953C17.7933 11.3582 17.5922 11.3572 17.3813 11.3922C17.2404 11.4116 16.8845 11.608 16.764 11.5672C16.6436 11.5264 16.4956 11.1915 16.3962 11.1022C15.7359 10.4756 14.6491 10.7113 13.9359 11.0806C13.6146 10.6013 13.3579 10.2249 12.9238 9.84627C12.638 9.58968 11.8873 9.03884 11.5545 9.44687C11.4269 9.05174 10.8646 8.92823 10.5067 9.08933C9.99873 9.31759 10.1097 9.84366 9.89168 10.1864C9.70828 9.8534 9.48223 10.2675 9.44457 10.4469C9.06281 9.72253 8.57306 10.7301 8.38657 11.0003C8.07475 10.6978 7.68042 10.3997 7.22278 10.6844C7.21242 10.2712 6.67202 10.3357 6.40214 10.3738C6.48514 10.8186 5.96081 11.4024 5.79307 11.8016C5.57272 12.3218 5.58016 12.9008 5.71602 13.4491C5.94602 14.4299 6.61404 14.7606 7.28483 15.363C7.26125 15.3643 7.2861 15.3866 7.28483 15.363Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.28483 15.363C6.88654 15.4317 6.38657 15.5886 5.97483 15.8471C5.78075 15.9758 5.63509 16.1255 5.50375 16.3217C5.43808 16.4198 5.50019 16.4756 5.40967 16.5514C5.36442 16.5893 5.1981 16.5746 5.12864 16.6019C4.455 16.8273 3.95638 17.6698 4.07562 18.3492C3.70407 18.4755 3.53507 18.8511 3.49512 19.208C3.47178 19.4338 3.50358 19.5858 3.43182 19.7907C3.37058 19.9713 3.3205 20.1395 3.32936 20.3046C3.77789 19.6302 4.46111 20.2438 5.03268 20.3195C5.7594 20.4224 6.18839 20.0447 6.81804 19.8808C6.83204 20.8022 7.3802 22.2034 8.51803 22.0359C8.56923 22.3287 8.5625 22.4236 8.84061 22.5388C7.95731 22.8227 8.8911 23.9193 9.13471 24.2728C9.03612 23.7579 9.66981 23.8894 9.95717 23.9567C10.3643 24.0531 10.8527 24.1214 11.2714 23.9925C12.0853 23.736 13.0969 22.7595 13.2033 21.8789C13.6499 22.2687 14.2851 22.6484 14.8907 22.6986C15.5318 22.747 15.8435 22.3874 16.1247 21.8994C16.917 22.3416 17.8242 21.8436 18.0269 20.9933C18.2493 20.071 17.9772 19.187 17.5377 18.4894C18.312 18.3769 19.0477 18.2073 19.6453 17.6669C20.1977 17.1643 20.4664 16.6651 20.7238 15.9537C21.0313 15.0741 21.1143 13.7573 19.9785 13.5227C19.2368 13.3616 18.6731 13.652 18.0119 13.8884C18.0644 13.1053 17.8475 12.1475 18.5368 11.5548C18.337 11.5773 18.1638 11.4329 17.9844 11.3953C17.7933 11.3582 17.5922 11.3572 17.3813 11.3922C17.2404 11.4116 16.8845 11.608 16.764 11.5672C16.6436 11.5264 16.4956 11.1915 16.3962 11.1022C15.7359 10.4756 14.6491 10.7113 13.9359 11.0806C13.6146 10.6013 13.3579 10.2249 12.9238 9.84627C12.638 9.58968 11.8873 9.03884 11.5545 9.44687C11.4269 9.05174 10.8646 8.92823 10.5067 9.08933C9.99873 9.31759 10.1097 9.84366 9.89168 10.1864C9.70828 9.8534 9.48223 10.2675 9.44457 10.4469C9.06281 9.72253 8.57306 10.7301 8.38657 11.0003C8.07475 10.6978 7.68042 10.3997 7.22278 10.6844C7.21242 10.2712 6.67202 10.3357 6.40214 10.3738C6.48514 10.8186 5.96081 11.4024 5.79307 11.8016C5.57272 12.3218 5.58016 12.9008 5.71602 13.4491C5.94602 14.4299 6.61404 14.7606 7.28483 15.363ZM7.28483 15.363C7.2861 15.3866 7.26125 15.3643 7.28483 15.363Z",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M6.81793 19.8808C6.85424 19.0158 7.88874 17.3641 10.1544 17.5026Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.81793 19.8808C6.85424 19.0158 7.88874 17.3641 10.1544 17.5026",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M13.2151 21.8782C13.3894 20.722 13.5053 19.3562 12.353 18.153Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.2151 21.8782C13.3894 20.722 13.5053 19.3562 12.353 18.153",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M12.7147 18.0627C12.7147 18.0627 14.2808 18.6052 15.8414 17.5046C17.4139 16.4034 17.9907 15.0365 18.0112 13.8767",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.7147 18.0627C12.7147 18.0627 14.2808 18.6052 15.8414 17.5046C17.4139 16.4034 17.9907 15.0365 18.0112 13.8767",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M18.5362 11.543C18.5362 11.543 17.6584 11.7083 17.5778 12.4102C17.5778 12.4102 16.7147 12.4093 16.697 13.8408C16.6793 15.2723 16.3437 17.1702 15.4638 17.7377",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M18.5362 11.543C18.5362 11.543 17.6584 11.7083 17.5778 12.4102C17.5778 12.4102 16.7147 12.4093 16.697 13.8408C16.6793 15.2723 16.3437 17.1702 15.4638 17.7377",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M15.8413 17.5046C15.8413 17.5046 16.8988 17.6015 17.537 18.4776Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8413 17.5046C15.8413 17.5046 16.8988 17.6015 17.537 18.4776",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M12.6118 15.9283C12.6118 15.9283 13.8145 15.4262 14.0779 13.946C14.3406 12.4541 14.1275 11.567 13.8979 11.0354",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.6118 15.9283C12.6118 15.9283 13.8145 15.4262 14.0779 13.946C14.3406 12.4541 14.1275 11.567 13.8979 11.0354",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M8.37468 11.0009C8.17917 11.5434 7.8206 12.7923 8.47335 13.9395C9.1261 15.0868 10.318 16.1459 10.318 16.1459",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.37468 11.0009C8.17917 11.5434 7.8206 12.7923 8.47335 13.9395C9.1261 15.0868 10.318 16.1459 10.318 16.1459",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M7.28475 15.363C8.15651 15.3044 9.19441 15.6979 10.0728 16.6439Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.28475 15.363C8.15651 15.3044 9.19441 15.6979 10.0728 16.6439",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M6.39096 10.3862C6.39096 10.3862 7.02678 10.7777 6.85279 11.721C6.67818 12.6526 6.03896 13.7392 6.80288 14.9751",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.39096 10.3862C6.39096 10.3862 7.02678 10.7777 6.85279 11.721C6.67818 12.6526 6.03896 13.7392 6.80288 14.9751",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.3618 15.5461C11.0776 15.5377 10.6786 15.5946 10.5393 15.8622C10.5065 15.9113 10.5259 16.0521 10.4806 16.09C10.4583 16.1149 10.3633 16.1081 10.3404 16.1212C10.2939 16.1355 10.2486 16.1734 10.2145 16.1989C10.0676 16.325 9.9592 16.5082 10.0053 16.7067C10.0222 16.8004 10.0744 16.8921 10.1142 16.9728C10.154 17.0534 10.2521 17.1191 10.2801 17.2003C10.0153 17.3328 10.2433 17.6161 10.3675 17.7277C10.6154 17.939 10.9655 18.0739 11.2777 18.1635C11.9145 18.354 12.7261 18.2749 13.2331 17.8102C13.6386 17.4338 13.5511 16.9064 13.3149 16.4699C13.1582 16.1945 12.9308 15.923 12.5896 15.9531C12.5925 15.7874 12.2641 15.6159 12.1312 15.5639C11.8792 15.4947 11.6106 15.5564 11.3618 15.5461Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.9114 18.2951C12.2444 18.1117 12.4233 17.7001 12.4508 17.3321C12.4569 17.2254 12.4499 17.0957 12.4213 17.0026C12.3522 16.8172 12.3095 16.9022 12.1718 16.9806C12.0801 17.0328 11.9329 16.9343 11.9979 16.8244C12.0853 16.6896 12.257 16.5858 12.4048 16.6961C12.5278 16.7841 12.5392 16.9963 12.5468 17.1378C12.5833 17.5969 12.3623 18.1053 11.9114 18.2951Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.6247 18.2394C11.7541 18.0078 11.8594 17.7657 11.8808 17.5045C11.8955 17.3382 11.825 16.9045 11.5757 17.107C11.4511 17.2083 11.2976 16.9919 11.434 16.89C11.6957 16.6986 11.8957 16.9007 11.945 17.1582C12.0255 17.5558 11.88 17.9301 11.6247 18.2394Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.0883 18.1618C10.7666 17.8953 10.6253 17.4655 10.592 17.0653C10.5806 16.8531 10.5913 16.3914 10.9277 16.4916C11.0599 16.5318 11.0241 16.7465 10.8801 16.7069C10.7119 16.6569 10.749 17.1278 10.7547 17.2339C10.7954 17.5509 10.8975 17.912 11.0883 18.1618C11.1007 18.173 11.1119 18.1606 11.0883 18.1618Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.6297 17.9854C9.79751 17.9 8.84126 17.2657 9.25165 16.3214C9.31479 16.1762 9.54828 16.341 9.42366 16.4422C9.09634 16.7317 9.37556 17.3079 9.63579 17.5304C9.90844 17.764 10.2821 17.8977 10.6284 17.9618C10.652 17.9606 10.6533 17.9841 10.6297 17.9854Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.1114 17.363C9.52364 17.2054 9.2009 15.3784 9.94993 15.4564C10.0691 15.4736 10.0327 15.6766 9.91291 15.6476C9.61375 15.5809 9.62689 16.2659 9.65869 16.4179C9.71115 16.7343 9.81836 17.1896 10.1344 17.35C10.1226 17.3506 10.1114 17.363 10.1114 17.363Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5784 15.9655C12.6862 15.7706 12.6152 15.5497 12.4537 15.4047C12.3798 15.3496 12.2948 15.3068 12.1998 15.3001C12.1167 15.2927 12.036 15.3325 11.9628 15.2892C11.9261 15.2675 11.8988 15.198 11.9447 15.1719C12.1133 15.0092 12.435 15.2757 12.5487 15.4114C12.6878 15.5813 12.711 15.7929 12.5784 15.9655Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4864 16.8035C13.6066 16.6197 13.687 16.3553 13.7228 16.1406C13.74 16.0214 13.7535 15.8315 13.677 15.7292C13.6006 15.6269 13.4473 15.6352 13.348 15.5459C13.2859 15.4901 13.3273 15.3815 13.4098 15.3771C13.6804 15.3507 13.8414 15.7086 13.8423 15.945C13.8371 16.2881 13.6736 16.5452 13.4864 16.8035C13.4746 16.8042 13.4871 16.8153 13.4864 16.8035Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.6018 18.1634C12.9001 17.9936 13.0175 17.5381 13.0476 17.2172C13.0703 16.9796 12.9306 16.3604 12.5734 16.5333C12.458 16.5868 12.3647 16.3908 12.4801 16.3373C13.2274 15.9425 13.3567 17.91 12.6018 18.1634Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.0173 17.9756C13.2939 17.8425 13.5145 17.5469 13.642 17.28C13.7696 17.013 13.6955 16.7332 13.8112 16.4669C13.8217 16.4427 13.8689 16.4402 13.8708 16.4755C14.0283 16.9873 13.5924 17.8974 13.0173 17.9756Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.2619 16.3663C13.4621 16.1309 13.5616 15.7827 13.5576 15.4874C13.5523 15.1684 13.3784 15.0122 13.2118 14.7729C13.1478 14.6818 13.2587 14.5457 13.3569 14.6114C13.9666 14.957 13.5829 15.9589 13.2619 16.3663C13.2508 16.3787 13.2632 16.3899 13.2619 16.3663Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.53278 21.8697C9.42273 20.8288 9.06375 18.7672 10.6232 18.3052C10.6468 18.3039 10.6599 18.3268 10.6369 18.3399C9.09049 18.8249 9.52021 20.8827 8.53278 21.8697C8.53405 21.8933 8.53341 21.8815 8.53278 21.8697Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.0639 22.515C9.8358 21.9179 10.1407 20.9912 10.2682 20.0621C10.3631 19.4068 10.4114 18.7657 10.9172 18.2775C10.9284 18.2651 10.9532 18.2874 10.9421 18.2998C10.2323 18.9527 10.3842 20.0204 10.1468 20.8844C9.95891 21.5684 9.63246 22.0944 9.0639 22.515C9.05211 22.5157 9.06453 22.5268 9.0639 22.515Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.7796 18.3558C10.3576 18.8632 10.0547 19.3879 9.84068 20.026C9.66748 20.5437 9.5545 21.0818 9.3211 21.579C9.31057 21.6032 9.28573 21.5809 9.29689 21.5685C9.55996 20.9632 9.64367 20.3203 9.88316 19.7163C10.0917 19.1967 10.3997 18.7664 10.7796 18.3558C10.779 18.344 10.7908 18.3434 10.7796 18.3558Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.0965 19.1008C12.4585 20.5593 12.2486 22.1548 11.2589 23.3193C11.2366 23.3442 11.1993 23.3107 11.2217 23.2859C11.6169 22.7208 11.9682 22.2172 12.1084 21.5239C12.2664 20.7233 12.2692 19.8955 12.0965 19.1008C12.0723 19.0903 12.0958 19.089 12.0965 19.1008Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5781 20.3638C12.7622 21.3707 12.4445 22.4991 11.6777 23.1906C11.6553 23.2154 11.6063 23.1826 11.6404 23.1571C12.3719 22.4676 12.7138 21.3497 12.5781 20.3638C12.5775 20.352 12.5775 20.352 12.5781 20.3638Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.74071 18.1634C9.00053 18.2505 8.52273 18.82 8.16471 19.4185C8.14303 19.4552 8.09397 19.4223 8.11629 19.3975C8.45998 18.7524 8.97442 18.2046 9.73944 18.1399C9.76302 18.1386 9.76429 18.1622 9.74071 18.1634Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.13128 18.7045C8.89005 18.8357 8.71092 19.0227 8.55663 19.2319C8.54611 19.2562 8.50884 19.2227 8.53179 19.2096C8.69786 18.9997 8.88878 18.8121 9.13128 18.7045C9.13065 18.6927 9.13065 18.6927 9.13128 18.7045Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.9392 15.6043C9.98122 14.497 9.15828 12.6023 9.33788 11.1029C9.33661 11.0793 9.38377 11.0768 9.38567 11.1122C9.29366 12.7014 10.0785 14.3263 10.951 15.6036C10.951 15.6036 10.9399 15.616 10.9392 15.6043Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.0311 10.581C10.2226 12.1668 10.3612 14.0865 11.263 15.4686C11.2761 15.4916 11.242 15.5171 11.2289 15.4941C10.3029 14.1014 10.1885 12.1923 10.0311 10.581Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.6683 9.80735C11.8152 10.7808 12.0656 11.7013 12.0605 12.7066C12.0515 13.6411 11.9104 14.5354 11.8183 15.4625C11.8195 15.4861 11.7724 15.4886 11.7829 15.4644C11.8495 14.5032 11.9881 13.5617 11.984 12.6043C11.9793 11.635 11.7779 10.7473 11.6683 9.80735C11.6559 9.7962 11.6677 9.79556 11.6683 9.80735Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.9507 15.5028C11.9786 14.9219 12.0667 14.3615 12.0829 13.7813C12.0866 13.19 12.1027 12.6098 12.1182 12.0178C12.117 11.9942 12.1523 11.9923 12.1654 12.0153C12.2398 13.1817 12.0897 14.3485 11.9507 15.5028Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5739 15.883C12.9121 15.3565 12.9152 14.7533 12.9655 14.1477C13.0327 13.1982 12.9964 12.3016 12.8514 11.3636C12.8502 11.34 12.8855 11.3381 12.8986 11.361C13.0716 12.3803 13.0992 13.3365 13.024 14.3573C12.9693 14.8805 12.9787 15.4948 12.5739 15.883Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.31686 11.1169C7.33403 12.0973 7.31964 13.1503 7.70037 14.0757C7.93243 14.6544 8.34489 15.0697 8.86028 15.4203C9.27757 15.7053 9.80768 15.8897 10.1258 16.3101C10.1507 16.3324 10.1048 16.3585 10.0799 16.3362C9.64936 15.8036 8.86915 15.5854 8.35985 15.128C8.03751 14.8497 7.80568 14.4957 7.64269 14.1024C7.26069 13.1535 7.2993 12.111 7.31686 11.1169Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.7264 11.7467C15.7265 12.7226 15.4829 14.1308 14.7401 15.2702C14.4892 15.662 13.8561 16.6418 13.3174 16.5171C13.2814 16.5072 13.2906 16.4594 13.3266 16.4693C13.7332 16.5539 14.2171 15.8776 14.4383 15.5938C14.737 15.2113 14.9742 14.7847 15.1754 14.3483C15.5982 13.4152 15.9248 12.4518 16.7264 11.7467Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.4126 11.8463C15.603 12.6228 15.1735 13.6508 14.6949 14.646C14.4293 15.2041 13.965 16.2458 13.2751 16.3893C13.2398 16.3912 13.2254 16.3447 13.2602 16.331C13.7397 16.2343 14.1411 15.5625 14.3566 15.1726C14.5722 14.7826 14.7628 14.3704 14.9535 13.9582C15.3126 13.1586 15.7226 12.4272 16.4126 11.8463Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4228 17.5992C14.0891 17.457 14.7025 17.2112 15.1835 16.7007C15.5969 16.2528 15.8376 15.6724 16.0437 15.1057C16.0548 15.0932 16.079 15.1038 16.0797 15.1155C15.8545 15.7661 15.5952 16.4421 15.077 16.9192C14.6604 17.3081 14.0087 17.7214 13.4234 17.611C13.4123 17.6234 13.4116 17.6116 13.4228 17.5992Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.486 17.454C14.1826 17.2156 14.7174 16.6075 15.0866 15.9966C15.1089 15.9717 15.1455 15.9934 15.135 16.0176C14.777 16.6162 14.2131 17.344 13.486 17.454C13.4866 17.4658 13.4866 17.4658 13.486 17.454Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8743 17.4557C16.5196 17.3619 17.0658 16.9661 17.6034 16.6298C18.107 16.319 18.5856 15.9859 19.0513 15.6299C19.0742 15.6168 19.0997 15.6509 19.0767 15.664C18.5107 16.1318 17.8937 16.5315 17.2643 16.92C16.829 17.1798 16.3931 17.4278 15.875 17.4675C15.8638 17.4799 15.8625 17.4563 15.8743 17.4557Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8755 17.4792C16.2528 17.4589 16.6319 17.474 17.0184 17.406C17.4868 17.3217 17.8912 17.1463 18.3049 16.9231C18.3278 16.9101 18.3651 16.9435 18.331 16.969C17.9521 17.1785 17.5601 17.3651 17.1277 17.4592C16.7058 17.5292 16.2894 17.4806 15.8755 17.4792Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.788 15.2248C18.3298 14.7464 18.7926 14.1186 19.5128 13.8789C19.5357 13.8659 19.5618 13.9117 19.5389 13.9248C18.8716 14.268 18.3795 14.791 17.788 15.2248C17.7886 15.2366 17.7886 15.2366 17.788 15.2248Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.8326 14.9505C18.2982 14.5945 18.6371 14.0797 19.2183 13.8948C19.2412 13.8818 19.2555 13.9283 19.232 13.9296C18.6886 14.1597 18.3243 14.6404 17.845 14.9617C17.8338 14.9741 17.8208 14.9512 17.8326 14.9505Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.5248 18.0838C14.9358 18.2509 15.2609 18.8009 15.4586 19.1804C15.8012 19.836 15.9628 20.6431 16.1075 21.3565C16.1218 21.403 16.0517 21.4186 16.0492 21.3715C15.935 20.7864 15.7638 20.24 15.5684 19.6829C15.4003 19.1954 15.0122 18.3532 14.5149 18.1198C14.4672 18.1105 14.4888 18.0739 14.5248 18.0838Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.2902 18.1201C14.6957 18.4057 14.9062 18.5836 15.1326 19.0561C15.4261 19.6788 15.5584 20.3811 15.7012 21.0592C15.7025 21.0827 15.6678 21.0964 15.6665 21.0729C15.4947 20.5146 15.3929 19.9407 15.1981 19.3955C14.9791 18.8397 14.7355 18.4863 14.2902 18.1201C14.2666 18.1213 14.2778 18.1089 14.2902 18.1201Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.9446 17.9785C15.5158 18.2671 15.7708 18.8327 15.9905 19.4002C16.0041 19.435 15.9576 19.4493 15.9439 19.4146C15.7399 18.9171 15.4661 18.2224 14.9446 17.9785C14.9335 17.9909 14.9328 17.9792 14.9446 17.9785Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.6785 18.1766C13.7966 18.3949 13.8918 18.6262 13.8698 18.8757C13.8716 18.911 13.8121 18.9024 13.8102 18.867C13.7857 18.6319 13.7377 18.398 13.6438 18.1902C13.6307 18.1673 13.6655 18.1536 13.6785 18.1766Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.2703 17.2363C9.48983 16.7934 8.18213 17.1001 7.38997 17.32C6.38814 17.5984 5.57708 18.1267 4.69528 18.6588C4.64939 18.6849 4.61022 18.6161 4.64432 18.5906C5.64947 17.9337 6.5778 17.3873 7.75772 17.1229C8.48231 16.9658 9.5953 16.776 10.2795 17.1885C10.3162 17.2102 10.2951 17.2586 10.2703 17.2363Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.09241 18.1292C6.4714 17.1684 8.45416 16.2225 10.1384 16.9833C10.1744 16.9932 10.1422 17.0541 10.1174 17.0318C9.26935 16.6517 8.2494 16.8128 7.37345 17.0136C6.53287 17.2124 5.78685 17.6308 5.09241 18.1292Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.97843 19.2166C6.708 18.4917 7.46621 17.8599 8.53521 17.7315C8.55879 17.7303 8.56069 17.7656 8.53711 17.7669C7.52706 17.8921 6.66021 18.4825 5.97843 19.2166C5.96664 19.2173 5.97906 19.2284 5.97843 19.2166Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.89375 16.5374C6.63179 16.1904 7.60877 15.8896 8.39847 16.2847C8.42268 16.2952 8.40037 16.32 8.38795 16.3089C7.62309 15.9361 6.64484 16.2133 5.90617 16.5485C5.89438 16.5492 5.89375 16.5374 5.89375 16.5374Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.4155 10.5953C23.4155 10.5953 24.5382 7.28366 26.5635 6.69017C28.5888 6.09668 30.0308 5.4281 30.0308 5.4281C30.0308 5.4281 29.3362 6.36394 28.2861 7.28341C26.4343 8.90801 24.6402 8.08215 23.4155 10.5953Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M29.1306 6.05578C28.433 6.49522 27.7166 6.80561 26.9668 7.15327C26.0669 7.5681 25.323 8.24649 24.5269 8.83309C24.5157 8.84552 24.5026 8.82257 24.5138 8.81015C25.156 8.21998 25.8782 7.57823 26.674 7.20446C27.5044 6.817 28.3536 6.55859 29.1306 6.05578Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.9851 7.18139C27.1932 7.62589 26.2103 7.59591 25.4432 8.06272C25.4321 8.07515 25.419 8.0522 25.4302 8.03978C26.1836 7.53823 27.1665 7.56821 27.9851 7.18139Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.8956 6.70782C26.2215 7.14599 25.5296 7.69153 25.0811 8.36588C25.0699 8.3783 25.0457 8.36778 25.0569 8.35536C25.4892 7.59912 26.1626 7.14916 26.8956 6.70782C26.8949 6.69603 26.8949 6.69603 26.8956 6.70782Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.5253 6.54388C27.0992 6.75592 26.7371 7.05911 26.413 7.40756C26.3907 7.43241 26.3652 7.39831 26.3881 7.38525C26.6868 7.0027 27.0855 6.72119 27.5253 6.54388C27.5246 6.53209 27.5246 6.53209 27.5253 6.54388Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.4277 5.75901C23.4277 5.75901 24.5245 3.72568 24.0279 2.40452C23.532 1.09515 22.7018 0.607689 22.2973 -0.541065C22.2973 -0.541065 21.4612 0.402375 22.1597 1.96097C22.8582 3.51957 23.5109 4.00474 23.4962 4.83313C23.481 5.64974 23.4277 5.75901 23.4277 5.75901Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M22.3039 0.0260888C22.4419 0.834466 22.8683 1.50913 23.1917 2.24843C23.4878 2.91827 23.6319 3.61991 23.6469 4.3403C23.6482 4.36388 23.601 4.36642 23.5998 4.34284C23.5654 3.48161 23.3095 2.67956 22.9606 1.90616C22.6794 1.29463 22.3754 0.696163 22.2803 0.0273548C22.2791 0.00377679 22.3027 0.00251079 22.3039 0.0260888Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.6728 12.3076C23.6728 12.3076 24.2918 11.5059 25.9813 11.9236C27.6708 12.3412 28.7425 11.8226 29.8554 10.9707C30.9683 10.1188 31.7005 9.00358 32.7273 9.40954C32.7273 9.40954 30.9456 6.83321 28.3304 7.67119C25.7146 8.49738 23.6728 12.3076 23.6728 12.3076Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M31.5639 8.8807C30.134 8.67372 28.696 8.97558 27.378 9.53109C26.7193 9.81474 26.1234 10.166 25.5809 10.6325C25.1061 11.0364 24.6946 11.5196 24.1563 11.844C24.1334 11.8571 24.0961 11.8236 24.119 11.8106C25.1568 10.8799 26.1107 9.93018 27.4294 9.38646C28.725 8.85579 30.1787 8.62404 31.5744 8.85649C31.5751 8.86828 31.5763 8.89186 31.5639 8.8807Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.6467 11.1418C27.6921 10.3182 26.2267 10.5506 25.1649 11.0332C25.1184 11.0476 25.1028 10.9775 25.1376 10.9638C26.1305 10.5203 27.8483 10.1443 28.6467 11.1418Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.5885 10.4055C29.006 9.90477 28.1144 10.0354 27.4109 10.1441C26.6484 10.256 25.8047 10.3959 25.2189 10.9357C25.1848 10.9612 25.1351 10.9166 25.1692 10.8911C25.7661 10.3388 26.6217 10.1983 27.4071 10.0734C28.1342 9.9634 29.0258 9.83277 29.6115 10.3925C29.6239 10.4036 29.601 10.4167 29.5885 10.4055Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.2897 9.81216C29.0674 9.28665 27.3662 9.53169 26.2289 10.1484C26.183 10.1746 26.132 10.1064 26.1779 10.0802C27.3612 9.43738 29.0493 9.16939 30.3003 9.78795C30.3245 9.79847 30.3139 9.82269 30.2897 9.81216Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.9979 9.34848C29.577 8.86909 28.1207 9.49115 26.7528 9.77741C26.7174 9.77931 26.7031 9.73279 26.7385 9.73089C27.4866 9.57248 28.1702 9.31115 28.9326 9.19927C29.6486 9.10171 30.3113 9.11341 30.9979 9.34848C31.0103 9.35964 31.0096 9.34785 30.9979 9.34848Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.4302 8.24409C29.4511 8.28484 28.6802 8.68092 27.9188 9.25384C27.9077 9.26626 27.8946 9.24331 27.9058 9.23089C28.6516 8.58787 29.4368 8.23832 30.4289 8.22051C30.4414 8.23167 30.442 8.24346 30.4302 8.24409Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.2255 8.04864C28.1771 8.34139 26.9846 9.03204 26.4458 10.0068C26.4353 10.031 26.3986 10.0093 26.4092 9.98513C27.0273 8.94699 28.0443 8.28941 29.2242 8.02506C29.2242 8.02506 29.2373 8.04801 29.2255 8.04864Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.2262 8.68796C27.0588 8.87429 26.9281 9.0823 26.8105 9.31325C26.7145 9.50757 26.5832 9.70379 26.5232 9.908C26.5133 9.944 26.4655 9.93474 26.4754 9.89874C26.5699 9.45622 26.9113 8.98862 27.2262 8.68796C27.2255 8.67617 27.2373 8.67553 27.2262 8.68796Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.2631 11.5019C23.2631 11.5019 25.0771 7.63299 23.8562 4.93197C22.6464 2.21852 20.3038 2.62806 19.5217 1.27494C19.5217 1.27494 19.1145 2.27812 18.8086 4.06799C18.5028 5.85786 19.5686 7.4322 21.1874 8.51576C22.8069 9.6111 23.3325 10.8125 23.2631 11.5019Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.6935 1.83327C19.7658 2.73975 20.2619 3.61166 20.6828 4.40485C21.077 5.14035 21.4705 5.86407 21.8529 6.60021C22.5388 7.92303 23.1408 9.2267 23.4092 10.702C23.4248 10.7721 23.3187 10.7778 23.3031 10.7077C22.9966 8.96252 22.1932 7.43319 21.3644 5.86977C20.719 4.63936 19.7465 3.261 19.6699 1.83453C19.6686 1.81096 19.6922 1.80969 19.6935 1.83327Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.4311 3.54988C19.872 4.49569 20.8927 5.00839 21.4464 5.85356C21.4595 5.8765 21.4254 5.90198 21.4006 5.87967C20.8344 5.02335 19.8962 4.50622 19.4311 3.54988C19.4193 3.55052 19.4304 3.5381 19.4311 3.54988Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.3894 4.09597C19.5281 4.91613 20.3193 5.55938 20.9155 6.09487C21.4124 6.54111 21.9434 6.96187 22.2933 7.53423C22.3064 7.55718 22.2723 7.58265 22.2475 7.56034C21.452 6.39711 19.566 5.62347 19.3659 4.09723C19.377 4.08481 19.3888 4.08418 19.3894 4.09597Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.8219 5.76347C20.2295 6.30908 20.8262 6.63174 21.4117 6.96681C21.8388 7.2158 22.2412 7.44248 22.4787 7.90265C22.4911 7.9138 22.4682 7.92686 22.4557 7.9157C22.1163 7.31913 21.418 7.0847 20.8554 6.73657C20.4401 6.48695 20.0804 6.17521 19.8219 5.76347Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.5852 2.36469C21.5619 3.60095 22.1867 5.32902 22.0004 6.92331C21.9905 6.95931 21.9427 6.95005 21.9408 6.91469C22.0851 5.41724 21.5339 3.51969 20.5852 2.36469C20.5734 2.36532 20.5727 2.35353 20.5852 2.36469Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.5501 2.93954C22.4488 4.26275 22.9869 6.13736 22.3959 7.68243C22.3749 7.73085 22.3022 7.69928 22.3227 7.63907C22.8919 6.13063 22.3656 4.25539 21.5265 2.9408C21.5141 2.92965 21.537 2.91659 21.5501 2.93954Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.2197 3.51838C22.5339 4.30547 22.755 5.12121 22.8242 5.96875C22.8946 6.83987 22.6336 7.70514 22.7264 8.55141C22.727 8.5632 22.7034 8.56447 22.7028 8.55268C22.5332 7.81693 22.7986 7.03419 22.7699 6.27906C22.731 5.33531 22.5153 4.40105 22.2072 3.50722C22.2079 3.51901 22.2197 3.51838 22.2197 3.51838Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.8963 4.45157C23.9634 6.04949 23.5702 7.9741 23.1674 9.72188C23.1575 9.75788 23.1091 9.73684 23.1196 9.71263C23.5112 7.97727 23.8815 6.06571 22.8963 4.45157C22.8845 4.4522 22.8838 4.44041 22.8963 4.45157Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.7714 7.59233C21.495 8.29832 22.3959 8.78198 23.0966 9.50103C23.109 9.51219 23.0861 9.52524 23.0854 9.51345C22.3624 8.81925 21.4727 8.32316 20.7714 7.59233C20.7484 7.60538 20.7596 7.59296 20.7714 7.59233Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.4474 15.5602C21.4474 15.5602 22.4863 13.329 21.7878 11.7704C21.0893 10.2118 19.7418 10.4379 19.2861 9.65837C19.2861 9.65837 19.0454 10.2388 18.8758 11.2647C18.7063 12.2906 19.311 13.2039 20.243 13.8278C21.1757 14.4635 21.4731 15.1569 21.4474 15.5602Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.3858 9.97221C19.4979 10.9593 20.2368 11.9483 20.6975 12.8221C21.0799 13.5582 21.3903 14.2746 21.5407 15.0941C21.5563 15.1642 21.4502 15.1699 21.4346 15.0998C21.2349 14.0228 20.7362 13.1037 20.2351 12.1375C19.8794 11.459 19.4158 10.7509 19.3622 9.97348C19.3616 9.96169 19.3852 9.96042 19.3858 9.97221Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.2261 10.9621C19.4681 11.5048 20.087 11.8026 20.3972 12.2943C20.4102 12.3172 20.3761 12.3427 20.3513 12.3204C20.1717 12.0581 19.9003 11.8481 19.6754 11.6237C19.4996 11.4321 19.3461 11.2157 19.2261 10.9621Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.2079 11.2822C19.3837 12.1359 20.4583 12.5511 20.8866 13.2611C20.8996 13.2841 20.8655 13.3096 20.8407 13.2872C20.3671 12.6151 19.3031 12.1757 19.1843 11.2835C19.1954 11.2711 19.2072 11.2705 19.2079 11.2822Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.4484 12.2388C19.8548 12.7609 20.6765 12.8704 20.9805 13.4689C20.993 13.4801 20.97 13.4931 20.9576 13.482C20.7618 13.1378 20.3533 13.0178 20.0348 12.8103C19.8026 12.6691 19.6032 12.4788 19.4484 12.2388Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.8987 10.2757C20.4703 11.0135 20.8169 11.9643 20.7255 12.9033C20.7274 12.9386 20.6678 12.93 20.6659 12.8946C20.7264 12.0401 20.4324 10.9682 19.8987 10.2757C19.8751 10.2769 19.8869 10.2763 19.8987 10.2757Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.4487 10.6127C20.9751 11.3884 21.2796 12.4361 20.9505 13.3523C20.9295 13.4008 20.8457 13.3816 20.8667 13.3332C21.186 12.453 20.905 11.404 20.4258 10.6258C20.4251 10.614 20.4481 10.6009 20.4487 10.6127Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.8451 10.946C21.0348 11.3969 21.1656 11.851 21.204 12.3455C21.243 12.8518 21.1275 13.3427 21.1429 13.8503C21.1435 13.8621 21.12 13.8634 21.1193 13.8516C21.0264 13.4428 21.1588 13.0455 21.1484 12.6322C21.141 12.0533 21.0039 11.4813 20.8333 10.9466C20.8215 10.9473 20.8333 10.9466 20.8451 10.946Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.2284 11.4812C21.8462 12.4176 21.6327 13.5049 21.3917 14.5228C21.3819 14.5588 21.3334 14.5378 21.344 14.5135C21.5855 13.5074 21.765 12.4456 21.2284 11.4812Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.0017 13.2968C20.4253 13.6997 20.9369 13.9796 21.3494 14.3949C21.3618 14.4061 21.3389 14.4192 21.3382 14.4074C20.9153 14.0163 20.403 13.7246 20.0017 13.2968C19.9782 13.2981 19.9893 13.2857 20.0017 13.2968Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.3371 15.3941C22.3371 15.3941 23.8881 13.4546 25.5115 13.5211C27.123 13.5883 28.0157 14.5808 29.259 14.3958C29.259 14.3958 28.147 15.4841 26.1041 15.31C24.0494 15.1366 23.5531 14.7022 22.3371 15.3941Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M28.7481 14.565C27.8375 14.7794 26.9505 14.5551 26.047 14.4618C25.2023 14.3653 23.798 14.1924 23.1503 14.9011C23.128 14.9259 23.1025 14.8918 23.1254 14.8788C23.594 14.357 24.4664 14.3102 25.1297 14.3337C26.3124 14.3411 27.5383 14.7127 28.7481 14.565C28.7475 14.5532 28.7475 14.5532 28.7481 14.565Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.9772 14.9611C27.2189 14.9309 26.5349 14.743 25.8774 14.3882C25.8532 14.3776 25.8755 14.3528 25.8879 14.364C26.5429 14.6717 27.2505 14.8583 27.9766 14.9494C27.9884 14.9487 27.989 14.9605 27.9772 14.9611Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.2539 14.0424C27.0319 14.0898 26.8072 14.09 26.5851 14.1374C26.3401 14.1978 26.1218 14.316 25.8898 14.3994C25.878 14.4 25.865 14.377 25.8768 14.3764C26.1081 14.2812 26.3258 14.1513 26.5714 14.1027C26.8053 14.0546 27.0306 14.0662 27.2539 14.0424Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2988 13.869C25.8776 13.9507 25.2993 13.97 25.0242 14.3513C25.0019 14.3761 24.9528 14.3433 24.9869 14.3178C25.2974 13.9346 25.8527 13.9284 26.2988 13.869Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.0735 9.51401C23.0784 9.38369 23.1777 9.47294 23.2268 9.50578C23.4851 9.6929 23.4715 10.3202 23.4736 10.5802C23.4881 13.0505 21.7562 15.3662 20.503 17.3488C19.3917 19.111 18.402 20.9376 17.5707 22.8502C17.4964 23.0079 17.2537 22.8909 17.3274 22.7214C18.0863 21.0018 18.9669 19.3466 19.9568 17.7446C20.8481 16.2898 21.8618 14.9112 22.5458 13.3375C22.9469 12.4411 23.2828 11.4299 23.3239 10.4346C23.3349 10.1975 23.3216 9.94996 23.2618 9.71671C23.2481 9.68198 23.1354 9.34516 23.0958 9.48916C23.0853 9.51337 23.0735 9.51401 23.0735 9.51401Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.6566 10.4985C24.956 11.1036 24.281 11.7428 23.7047 12.4595C23.1507 13.1514 22.6973 13.956 22.0073 14.5369C21.985 14.5618 21.9471 14.5165 21.9576 14.4923C22.9742 12.948 24.1536 11.5723 25.6442 10.4873C25.6553 10.4749 25.6677 10.4861 25.6566 10.4985Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.5348 14.2712C23.8 14.6771 23.0104 14.9442 22.3662 15.499C21.7562 16.0283 21.1344 16.5582 20.5374 17.1105C20.504 17.1478 20.4543 17.1032 20.4878 17.0659C21.0312 16.3983 21.7697 15.8384 22.4144 15.2954C23.048 14.7648 23.7838 14.5952 24.5224 14.26C24.533 14.2358 24.546 14.2587 24.5348 14.2712Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.026 18.2928C28.189 18.024 28.9795 17.9933 29.2557 18.0731C29.5803 18.1739 29.779 18.3524 29.9593 18.6265C30.3573 18.3332 30.6678 17.95 31.1834 17.8632C31.6406 17.7913 32.3406 17.8365 32.6345 18.2464C32.99 17.6006 33.6545 18.0852 33.7872 18.5746C33.9348 19.1224 33.8868 19.5506 33.7974 20.0874C34.6347 20.2671 34.2894 21.7635 34.0567 22.2726C33.8127 22.7941 33.1577 23.5859 32.6007 23.7813C33.1049 24.1444 33.6763 24.6576 33.1192 25.2905C33.3109 25.3393 33.3329 25.5273 33.3299 25.693C34.164 25.1516 34.9161 26.3881 34.7654 27.1056C34.5851 27.931 33.4356 28.7613 32.611 28.8174C32.6118 30.1533 31.1683 30.5737 30.021 30.5644C28.685 30.5652 26.7407 29.1444 26.2448 27.835C26.2246 28.1199 25.9451 30.1803 25.8257 30.6005C25.5562 31.5253 25.1363 32.2927 24.2233 32.6846C22.9518 33.2258 21.1615 32.4707 21.1152 30.948C20.442 31.6226 19.6142 30.9576 19.5469 30.1455C19.215 30.1278 19.0091 30.2571 18.6813 30.0974C18.3895 29.9475 18.1019 29.6556 17.9334 29.3808C17.5077 28.718 17.536 27.9243 17.6749 27.2075C16.9353 27.3063 16.3104 26.6778 15.9375 26.1185C15.4627 25.4228 14.9605 24.6576 15.2444 23.7793C15.3254 23.5266 15.4462 23.3546 15.6378 23.1788C15.931 22.9148 15.8517 22.9782 15.7135 22.6072C15.4945 22.0515 15.6906 21.5208 16.3527 21.5207C16.2851 20.9213 15.973 20.3942 16.2342 19.7536C16.4428 19.234 16.982 18.7085 17.5218 18.6322C17.4935 17.6642 19.1897 17.987 19.6146 18.4134C19.5107 17.5796 19.5945 16.4992 20.1125 15.7975C20.6187 15.0964 21.0562 15.0965 21.7912 15.3526C21.6888 14.767 22.3258 14.52 22.7607 14.473C22.5899 13.7136 24.9442 12.6414 25.2864 13.5097C25.5407 13.4015 25.7931 13.2579 26.031 13.5052C26.2062 13.685 26.2873 14.0944 26.277 14.3433C26.2711 14.0125 26.4878 13.6462 26.8485 13.7569C27.1973 13.8682 27.5641 14.5343 27.7326 14.809C28.1981 15.5525 28.2361 18.0214 28.026 18.2928Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M26.4592 22.3613C27.1464 21.5086 28.5186 21.7423 28.993 22.6508C29.5245 22.4213 30.3452 22.7319 30.4928 23.2797C30.9421 23.2792 31.2758 23.7697 31.3445 24.168C30.8725 23.744 30.2768 24.3199 29.9383 24.6218C29.6674 24.861 29.1395 25.5987 28.6932 25.4335",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.4592 22.3613C27.1464 21.5086 28.5186 21.7423 28.993 22.6508C29.5245 22.4213 30.3452 22.7319 30.4928 23.2797C30.9421 23.2792 31.2758 23.7697 31.3445 24.168C30.8725 23.744 30.2768 24.3199 29.9383 24.6218C29.6674 24.861 29.1395 25.5987 28.6932 25.4335",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M31.3463 24.2033C31.1442 23.7413 30.3053 23.7509 29.8649 23.9164C29.3557 24.1211 28.997 24.7078 28.4474 24.8201",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.3463 24.2033C31.1442 23.7413 30.3053 23.7509 29.8649 23.9164C29.3557 24.1211 28.997 24.7078 28.4474 24.8201",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M26.2212 23.8756C26.8931 23.8395 27.4672 23.9623 28.0422 24.3216C28.226 24.4418 28.497 24.8647 28.6059 25.1308C28.8261 25.7101 28.7675 26.6 28.2592 27.0411C28.2004 26.6068 28.0191 26.5338 27.5835 26.569C27.0425 26.6217 26.5324 26.5899 26.0122 26.3696C25.5646 26.1808 25.1355 25.8965 24.9675 25.4089C24.8698 25.1304 24.7804 24.5677 24.9682 24.3212C25.0251 24.7201 25.0559 25.0731 25.2988 25.4148C25.5673 25.7905 25.9789 25.9694 26.4319 26.0397C26.754 26.0933 28.3312 25.9613 28.2585 27.0293",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2212 23.8756C26.8931 23.8395 27.4672 23.9623 28.0422 24.3216C28.226 24.4418 28.497 24.8647 28.6059 25.1308C28.8261 25.7101 28.7675 26.6 28.2592 27.0411C28.2004 26.6068 28.0191 26.5338 27.5835 26.569C27.0425 26.6217 26.5324 26.5899 26.0122 26.3696C25.5646 26.1808 25.1355 25.8965 24.9675 25.4089C24.8698 25.1304 24.7804 24.5677 24.9682 24.3212C25.0251 24.7201 25.0559 25.0731 25.2988 25.4148C25.5673 25.7905 25.9789 25.9694 26.4319 26.0397C26.754 26.0933 28.3312 25.9613 28.2585 27.0293",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.2436 24.9158C23.7565 24.8711 23.0222 24.6267 22.4831 23.6153C21.9441 22.6038 20.2042 21.4676 19.2163 22.0054C19.2163 22.0054 19.6786 22.0279 19.863 22.1598C20.6864 22.7422 21.0592 23.739 21.895 24.3326C22.3502 24.6628 22.914 25.0345 23.5035 25.0029C23.81 24.9864 24.1158 24.9582 24.4061 24.8598C24.8006 24.7204 24.904 24.4429 24.9734 24.4155",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.2436 24.9158C23.7565 24.8711 23.0222 24.6267 22.4831 23.6153C21.9441 22.6038 20.2042 21.4676 19.2163 22.0054C19.2163 22.0054 19.6786 22.0279 19.863 22.1598C20.6864 22.7422 21.0592 23.739 21.895 24.3326C22.3502 24.6628 22.914 25.0345 23.5035 25.0029C23.81 24.9864 24.1158 24.9582 24.4061 24.8598C24.8006 24.7204 24.904 24.4429 24.9734 24.4155",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.8721 21.4298C24.7378 21.1296 24.627 20.8281 24.355 20.6063C24.0823 20.3726 23.7905 20.2228 23.4337 20.1828C23.1718 20.1496 22.9255 20.1865 22.7098 20.3518C22.6416 20.4027 22.5628 20.4779 22.5077 20.5518C22.4749 20.6008 22.4551 20.6728 22.4092 20.6989C22.3445 20.596 22.1633 20.523 22.0546 20.4815C21.8734 20.4085 21.6927 20.3472 21.5029 20.3338C21.0759 20.3094 20.641 20.3564 20.2758 20.6007C19.8653 20.8828 19.2728 21.5176 19.2168 22.0172",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8721 21.4298C24.7378 21.1296 24.627 20.8281 24.355 20.6063C24.0823 20.3726 23.7905 20.2228 23.4337 20.1828C23.1718 20.1496 22.9255 20.1865 22.7098 20.3518C22.6416 20.4027 22.5628 20.4779 22.5077 20.5518C22.4749 20.6008 22.4551 20.6728 22.4092 20.6989C22.3445 20.596 22.1633 20.523 22.0546 20.4815C21.8734 20.4085 21.6927 20.3472 21.5029 20.3338C21.0759 20.3094 20.641 20.3564 20.2758 20.6007C19.8653 20.8828 19.2728 21.5176 19.2168 22.0172",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M28.026 18.2928C27.5065 18.7464 26.2582 19.4991 26.1398 21.9174Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.026 18.2928C27.5065 18.7464 26.2582 19.4991 26.1398 21.9174",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.6283 18.4481C20.113 19.1079 20.7026 20.4004 20.7026 20.4004Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.6283 18.4481C20.113 19.1079 20.7026 20.4004 20.7026 20.4004",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M17.6873 27.2187C18.2437 25.9119 20.1946 24.152 21.9807 24.3871Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.6873 27.2187C18.2437 25.9119 20.1946 24.152 21.9807 24.3871",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M26.2579 27.8579C26.0753 27.0992 25.9286 26.3505 25.9286 26.3505Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2579 27.8579C26.0753 27.0992 25.9286 26.3505 25.9286 26.3505",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M32.613 23.7925C32.0107 23.3637 31.0263 23.0855 30.4785 23.2332Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.613 23.7925C32.0107 23.3637 31.0263 23.0855 30.4785 23.2332",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M23.4298 24.0727C23.267 23.9041 23.1049 23.7472 22.9992 23.5401C22.7076 22.9528 22.8121 22.0368 23.3329 21.6069C23.6385 21.354 23.9766 21.2649 24.3595 21.3507C24.4551 21.3693 24.5736 21.3747 24.6593 21.4292C24.7084 21.4621 24.7096 21.4856 24.745 21.4837C24.7686 21.4825 24.8126 21.421 24.8237 21.4086C24.8696 21.3825 24.9273 21.3557 24.9862 21.3526C25.4336 21.3167 26.1319 21.5511 26.1951 22.068C26.4669 22.0652 26.6638 22.2083 26.7956 22.4613C26.9144 22.6914 26.8693 22.954 26.7995 23.1942C26.7092 23.4946 26.5457 23.7517 26.3095 23.9771C25.9264 24.3288 25.1645 24.4524 24.9151 24.4304C24.3807 24.3881 23.6043 24.2406 23.4298 24.0727Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M25.6881 24.2943C26.1938 24.2435 26.5792 23.7144 26.8425 23.3338C26.9745 23.1493 27.0822 22.9544 27.1769 22.7365C27.2512 22.5788 27.3013 22.4106 27.3396 22.243C27.42 21.9786 27.3713 21.7329 27.1694 21.4955C27.0292 21.5267 27.0172 21.3027 27.1606 21.3304C28.2441 21.4732 26.6332 24.279 25.6881 24.2943C25.677 24.3067 25.6764 24.2949 25.6881 24.2943Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.9802 24.2312C26.5659 24.1289 26.9077 23.4484 27.0449 22.9208C27.0943 22.7408 27.2161 21.7057 26.8327 21.8327C26.6584 21.8893 26.678 21.5927 26.8226 21.6441C27.3037 21.7956 27.2324 22.4497 27.159 22.8438C27.0367 23.4297 26.6516 24.1834 25.9933 24.2542C25.9697 24.2555 25.9684 24.2319 25.9802 24.2312Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.9078 24.1997C26.3905 24.162 26.9325 23.9082 27.3586 23.6962C27.6234 23.5637 27.8112 23.3172 28.0636 23.1736C28.3736 23.0032 28.0792 23.2437 28.0665 23.0079C28.0608 22.9018 28.1991 22.8353 28.2854 22.9016C28.4842 23.0801 27.9727 23.4622 27.8474 23.5517C27.3247 23.9463 26.573 24.2586 25.909 24.2233C25.8973 24.2239 25.8966 24.2121 25.9078 24.1997Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8804 24.444C24.1869 24.0792 24.0127 23.0364 24.5612 22.463C24.6622 22.363 24.789 22.5218 24.6873 22.61C24.0977 23.0791 24.2806 24.0624 24.8915 24.4316C24.904 24.4427 24.8928 24.4551 24.8804 24.444Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8326 24.4348C24.3225 24.4031 23.909 24.1889 23.6938 23.7039C23.4643 23.1723 23.5623 22.5759 24.0652 22.2533C24.1793 22.1763 24.2955 22.3592 24.1808 22.4245C23.1935 22.974 23.9055 24.3428 24.8326 24.4348C24.8444 24.4342 24.8438 24.4224 24.8326 24.4348Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.4031 24.3632C23.7726 24.2906 23.349 23.8878 23.2323 23.2556C23.1493 22.8108 23.2094 22.1691 23.6845 21.9899C23.8117 21.9358 23.8833 22.1684 23.7548 22.1989C23.2406 22.3093 23.219 23.008 23.3354 23.4156C23.4936 23.9391 23.8774 24.2614 24.4031 24.3632C24.4149 24.3626 24.4149 24.3626 24.4031 24.3632Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.1039 24.2966C22.8951 24.2433 21.5608 22.2932 22.9264 21.5223C23.0758 21.4433 23.1828 21.6741 23.0321 21.7294C22.3473 21.9672 22.4053 22.8272 22.7049 23.3431C23.0046 23.8591 23.5187 24.1861 24.1039 24.2966Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.9474 24.3695C25.2469 24.2234 25.3564 23.8391 25.3988 23.5295C25.4321 23.2676 25.4291 22.7712 25.1497 22.6325C25.0646 22.5898 25.1284 22.4563 25.2135 22.499C25.8318 22.785 25.592 24.2639 24.9487 24.3931C24.9369 24.3937 24.9362 24.3819 24.9474 24.3695Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.9591 24.3689C25.0839 23.8302 25.0994 23.2382 24.9642 22.7016C24.933 22.5614 25.1452 22.55 25.1292 22.6927C25.0771 23.2631 25.1304 23.8159 24.9709 24.3683C24.9715 24.3801 24.9597 24.3807 24.9591 24.3689Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.0192 24.3893C25.6613 24.2365 26.2352 23.0353 25.6657 22.5574C25.5788 22.4794 25.7139 22.3539 25.7897 22.4444C26.3327 23.0891 25.7308 24.2092 25.0192 24.3893Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.949 21.3191C24.8936 21.1684 24.8971 21.0145 24.9838 20.868C25.0483 20.7463 25.2169 20.5835 25.3577 20.5642C25.4861 20.5336 25.5552 20.7191 25.4274 20.7614C25.3691 20.7764 25.2984 20.7802 25.2407 20.8069C25.183 20.8336 25.126 20.8722 25.0813 20.9219C24.9809 21.0337 24.9532 21.177 24.9607 21.3185C24.9607 21.3185 24.9496 21.3309 24.949 21.3191Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.834 21.5081C25.8407 21.4131 25.8363 21.3306 25.8312 21.2363C25.8249 21.1184 25.8093 21.0483 25.7001 20.995C25.615 20.9523 25.6664 20.8077 25.7508 20.8386C26.0264 20.9066 25.8946 21.3156 25.834 21.5081Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.1497 21.8812C26.1179 21.7292 26.1096 21.5759 26.089 21.4115C26.0839 21.3172 26.0677 21.2353 26.0391 21.1423C26.0117 21.0728 25.9731 21.0158 25.9687 20.9332C25.9655 20.8743 26.0337 20.8233 26.0828 20.8562C26.2175 20.9435 26.2165 21.1446 26.2241 21.286C26.2231 21.4871 26.1978 21.6776 26.1726 21.8681C26.1739 21.8917 26.1503 21.893 26.1497 21.8812Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8615 21.2293C24.7488 20.2304 24.8562 19.1487 24.8849 18.1422C24.9143 17.1475 24.9083 16.1547 25.0208 15.1673C25.0201 15.1555 25.0437 15.1543 25.0443 15.1661C24.9933 16.1974 24.9652 17.2157 24.9496 18.2451C24.9402 18.7304 24.9432 19.2268 24.9337 19.712C24.9138 20.2215 24.8349 20.7341 24.8615 21.2293C24.8621 21.241 24.8739 21.2404 24.8615 21.2293Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.5298 15.0519C24.3943 16.0523 24.5567 17.0959 24.5876 18.111C24.6134 19.0318 24.6386 19.9408 24.629 20.8635C24.6296 20.8753 24.6061 20.8766 24.6054 20.8648C24.5876 19.8726 24.5704 18.8922 24.5526 17.9C24.5367 16.9432 24.4383 15.9909 24.5298 15.0519C24.5173 15.0408 24.5291 15.0401 24.5298 15.0519Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.4199 20.6746C21.8789 19.6278 21.6962 18.207 21.5864 17.0424C21.5845 17.0071 21.6434 17.0039 21.6453 17.0393C21.7918 18.2255 21.9576 19.5526 22.431 20.6622C22.4316 20.674 22.4199 20.6746 22.4199 20.6746Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.6523 16.0695C21.5768 16.8657 21.9264 17.6509 22.0742 18.4233C22.2171 19.1013 22.3133 19.7937 22.5957 20.4288C22.6088 20.4518 22.5623 20.4661 22.561 20.4425C22.227 19.7274 22.1126 18.9178 21.9412 18.1467C21.7859 17.4574 21.5959 16.7819 21.6523 16.0695C21.6399 16.0584 21.6516 16.0577 21.6523 16.0695Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.4847 16.4485C26.5 17.3935 26.4681 18.3411 26.3053 19.272C26.1887 19.964 26.0947 20.8558 25.738 21.4779C25.7157 21.5027 25.679 21.481 25.6895 21.4568C26.0613 20.893 26.1272 19.92 26.2339 19.264C26.3967 18.3331 26.4646 17.3954 26.4847 16.4485Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.1341 23.5931C19.6489 23.2354 18.0893 23.0354 16.9631 21.8781C16.9383 21.8558 16.9711 21.8067 16.9966 21.8408C17.6065 22.411 18.3249 22.7981 19.107 23.0517C19.7804 23.2638 20.4817 23.3325 21.1341 23.5931Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.4111 23.9091C20.4288 23.8909 19.4769 23.7765 18.5099 23.6038C17.7099 23.4576 16.8851 23.2891 16.2213 22.8163C16.1964 22.794 16.2293 22.745 16.2541 22.7673C17.6754 23.6959 19.748 23.762 21.4111 23.9091Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.3086 23.7611C19.9364 23.5274 18.4712 23.3223 17.2097 22.7279C17.1731 22.7063 17.2059 22.6572 17.2419 22.6671C18.5703 23.1869 19.9716 23.3008 21.3192 23.7369C21.3316 23.748 21.3322 23.7598 21.3086 23.7611Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.7196 24.9385C22.2152 25.0128 21.8044 25.5078 21.4436 25.8346C21.1169 26.1359 20.8504 26.4576 20.5852 26.8029C20.5635 26.8395 20.5138 26.7949 20.5361 26.77C20.7813 26.2721 21.2339 25.8931 21.6399 25.5285C21.9561 25.2514 22.2815 24.9265 22.7289 24.8907C22.7407 24.89 22.7432 24.9372 22.7196 24.9385Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.6314 24.8368C21.9295 24.7562 21.2564 25.4308 20.7834 25.87C20.1753 26.4347 19.6305 27.0788 19.426 27.8937C19.4161 27.9297 19.3683 27.9204 19.3664 27.8851C19.528 26.9306 20.2123 26.2435 20.9004 25.6273C21.3635 25.2241 21.9611 24.6836 22.6308 24.825C22.6419 24.8126 22.6432 24.8361 22.6314 24.8368Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8613 24.528C24.53 26.2837 24.1799 27.9105 23.1856 29.4299C23.1527 29.4789 23.0795 29.4356 23.1005 29.3872C23.5446 28.6303 23.9534 27.8753 24.2156 27.0336C24.479 26.2155 24.6463 25.3671 24.8613 24.528Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.912 25.0336C24.9019 26.6066 24.3549 28.0902 23.7223 29.5193C23.7019 29.5795 23.6168 29.5368 23.6372 29.4766C24.1861 28.0283 24.8187 26.5993 24.8884 25.0349C24.8878 25.0231 24.9114 25.0218 24.912 25.0336Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.1581 31.1767C20.113 30.7772 20.3323 30.458 20.5025 30.106C20.7589 29.5957 21.0643 29.1182 21.3449 28.6184C21.3771 28.5575 21.4627 28.612 21.4299 28.6611C21.2163 29.0864 20.9785 29.5011 20.7412 29.9277C20.5369 30.3051 20.2407 30.7348 20.2052 31.1742C20.1947 31.1984 20.1593 31.2003 20.1581 31.1767Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.1855 28.2959C20.8732 28.6437 20.6347 29.0467 20.4074 29.4372C20.1801 29.8278 19.905 30.2091 19.8105 30.6516C19.8013 30.6994 19.7181 30.692 19.7267 30.6324C19.9058 29.7834 20.6179 28.953 21.1855 28.2959C21.1849 28.2841 21.1973 28.2953 21.1855 28.2959Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.57 26.5342C28.1762 27.6958 29.3664 28.2822 30.5253 28.7283C30.5737 28.7494 30.5428 28.8338 30.495 28.8245C29.3032 28.4274 28.1068 27.7232 27.5582 26.5349L27.57 26.5342Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.4311 26.5891C28.0577 27.6904 29.0847 28.321 30.1464 28.9379C30.2073 28.9701 30.1528 29.0558 30.1037 29.023C29.0687 28.4637 27.848 27.749 27.3963 26.6027C27.3957 26.591 27.4187 26.5779 27.4311 26.5891Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.2936 26.5437C26.597 27.1304 26.8278 27.6855 27.3247 28.1317C27.7967 28.5557 28.3567 28.8566 28.9056 29.17C28.9298 29.1806 28.9087 29.229 28.8845 29.2185C27.6919 28.5849 26.6518 27.9314 26.2936 26.5437C26.2818 26.5443 26.2929 26.5319 26.2936 26.5437Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.7653 25.4533C29.7935 26.1075 31.421 26.0319 32.5557 25.8055C32.614 25.7905 32.6427 25.8836 32.5837 25.8867C31.4503 26.1368 29.7397 26.205 28.7541 25.4657C28.7417 25.4546 28.7646 25.4415 28.7653 25.4533Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.9885 25.4294C29.9125 25.4626 30.7241 25.3835 31.6099 25.1468C31.6564 25.1325 31.6838 25.2019 31.6373 25.2163C30.7925 25.5572 29.8723 25.5948 28.9898 25.453C28.9662 25.4543 28.965 25.4307 28.9885 25.4294Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.7212 25.5148C29.2219 26.6939 30.6632 27.113 31.7811 27.455C31.8171 27.4649 31.8078 27.5127 31.7718 27.5028C30.6093 27.2105 29.1209 26.7939 28.7094 25.5154C28.7087 25.5036 28.7205 25.503 28.7212 25.5148Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.4179 22.067C28.7107 21.3537 29.171 20.6787 29.6717 20.0962C29.7052 20.0589 29.7431 20.1041 29.7214 20.1408C29.2462 20.7575 28.8193 21.3952 28.4304 22.0781C28.4316 22.1017 28.4192 22.0906 28.4179 22.067Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.2831 21.9795C28.4392 21.1436 28.884 20.3985 29.3424 19.6881C29.3641 19.6515 29.4131 19.6843 29.3908 19.7092C28.9448 20.4307 28.5355 21.1739 28.3067 21.9783C28.2962 22.0025 28.272 21.992 28.2831 21.9795Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.066 21.8967C28.0486 21.3538 28.2957 20.8912 28.518 20.4064C28.7619 19.8849 29.0065 19.3752 29.3969 18.9404C29.4192 18.9156 29.4683 18.9484 29.4342 18.9739C29.1008 19.3701 28.8878 19.8072 28.6643 20.2685C28.4086 20.7906 28.0926 21.2923 28.0889 21.8836C28.0902 21.9072 28.0666 21.9085 28.066 21.8967Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.9899 22.5919C29.4841 21.6669 30.1509 20.8744 30.9668 20.2158C31.0009 20.1903 31.0513 20.2467 31.0178 20.284C30.2503 20.9636 29.5344 21.7233 29.0266 22.6136C29.0043 22.6385 28.9676 22.6168 28.9899 22.5919Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.1213 22.744C31.0852 22.4203 31.8976 21.9156 32.5787 21.1697C32.6122 21.1324 32.6619 21.177 32.6284 21.2143C31.987 22.0409 31.1132 22.5016 30.1238 22.7912C30.1127 22.8036 30.0984 22.7571 30.1213 22.744Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.1866 22.8587C31.0912 22.751 31.8111 22.2867 32.5403 21.7747C32.5861 21.7485 32.6253 21.8174 32.5912 21.8429C31.978 22.3132 31.0388 23.0967 30.1878 22.8823C30.1754 22.8711 30.1748 22.8593 30.1866 22.8587Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.22783 35.4961C4.22783 35.4961 3.54881 34.7404 1.89883 35.2783C0.248841 35.8161 -0.862966 35.3674 -2.02786 34.5906C-3.20455 33.8143 -4.00676 32.746 -4.99783 33.2249C-4.99783 33.2249 -3.39295 30.5258 -0.732749 31.1869C1.92682 31.8363 4.22783 35.4961 4.22783 35.4961Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M-3.88387 32.6094C-2.51848 32.276 -1.04589 32.3979 0.278755 32.847C1.63876 33.2942 2.64368 34.1742 3.75407 35.0368C3.77891 35.0591 3.74481 35.0846 3.7206 35.074C3.21027 34.8177 2.79908 34.426 2.35505 34.0833C1.76259 33.6185 1.12994 33.286 0.418563 33.0286C-0.955768 32.5349 -2.44522 32.3193 -3.8826 32.633C-3.89439 32.6336 -3.89566 32.61 -3.88387 32.6094Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.817675 34.6675C-0.0934064 33.6237 1.65793 33.8725 2.68342 34.2549C2.73184 34.2759 2.69964 34.3368 2.65122 34.3157C1.55437 33.9253 0.0811347 33.7916 -0.817675 34.6675C-0.817042 34.6793 -0.817042 34.6793 -0.817675 34.6675Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-1.82299 34.0002C-1.29866 33.4164 -0.433631 33.4527 0.279406 33.5208C1.08676 33.5839 1.97789 33.6661 2.63246 34.1866C2.6691 34.2083 2.62447 34.258 2.58784 34.2363C1.99538 33.7715 1.21034 33.6836 0.473728 33.6168C-0.262887 33.5499 -1.23781 33.4486 -1.80993 34.0232C-1.82172 34.0238 -1.83415 34.0126 -1.82299 34.0002Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.9446 44.109C10.9446 44.109 11.6201 45.0186 11.3979 47.9271C11.1758 50.8357 12.0825 52.7496 13.9415 53.903C15.8006 55.0565 17.0029 55.4293 17.2958 56.0402C17.2958 56.0402 17.1635 55.338 17.4319 53.29C17.7002 51.242 17.1935 49.0702 14.9334 47.7136C12.6851 46.3565 11.7599 45.2002 10.9446 44.109Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M16.8018 54.9908C16.5906 54.1391 16.1237 53.372 15.7277 52.6012C15.3701 51.8873 14.9437 51.2127 14.5291 50.5374C13.6092 49.038 12.7252 47.5484 11.9318 45.9831C11.9188 45.9602 11.9529 45.9347 11.9659 45.9576C12.832 47.5545 13.7321 49.1259 14.69 50.6706C15.1301 51.38 15.5341 52.0795 15.9172 52.8274C16.2741 53.5295 16.6533 54.2067 16.8136 54.9902C16.826 55.0014 16.8025 55.0026 16.8018 54.9908Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.1779 54.2504C14.7711 53.9412 14.5997 53.1701 14.516 52.7135C14.3955 52.0106 14.3525 51.209 14.564 50.5237C14.5745 50.4995 14.5987 50.51 14.6 50.5336C14.4299 51.1102 14.5027 51.8039 14.5703 52.4032C14.6361 52.9672 14.8113 53.809 15.2015 54.2492C15.2015 54.2492 15.1903 54.2616 15.1779 54.2504Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.3099 53.7177C13.8564 53.1982 13.5782 52.421 13.495 51.7516C13.3904 50.9059 13.4421 49.8864 13.682 49.0695C13.6919 49.0335 13.7403 49.0546 13.7298 49.0788C13.5208 49.8112 13.4666 50.7836 13.5307 51.5368C13.5811 52.2553 13.8532 53.1393 14.3099 53.7177C14.3217 53.7171 14.3217 53.7171 14.3099 53.7177Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4625 52.9119C13.1967 52.1459 13.0495 51.3853 13.0176 50.5712C12.9813 49.6746 13.1776 48.7064 12.9644 47.8193C12.9632 47.7957 12.9861 47.7827 12.9992 47.8056C13.1818 48.5643 13.0356 49.3643 13.0296 50.1331C13.0212 51.0794 13.1197 52.0318 13.4625 52.9119C13.4631 52.9237 13.4749 52.9231 13.4625 52.9119Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.7218 51.8877C12.5672 51.2102 12.5213 50.5743 12.626 49.8829C12.711 49.2636 13.0618 48.3107 12.8639 47.7065C12.8626 47.683 12.8862 47.6817 12.8986 47.6929C13.0647 48.145 12.8593 48.7236 12.7891 49.1766C12.661 50.0939 12.5775 50.9614 12.7448 51.8746C12.7343 51.8988 12.7225 51.8995 12.7218 51.8877Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.9217 53.2582C16.3616 52.2951 15.6642 51.1976 14.6435 50.6849C14.6069 50.6632 14.6391 50.6024 14.6757 50.624C15.733 51.1584 16.395 52.2579 16.9217 53.2582C16.9223 53.27 16.9335 53.2576 16.9217 53.2582Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.0692 52.4818C16.5583 51.7762 16.1667 51.0878 15.4847 50.4978C14.9264 50.0076 14.1975 49.6447 13.6733 49.129C13.636 49.0956 13.6918 49.0335 13.7291 49.0669C13.967 49.3143 14.3438 49.5068 14.6146 49.7051C14.9959 49.9802 15.3424 50.269 15.6902 50.5814C16.3113 51.1392 16.6303 51.7959 17.0692 52.4818Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.6421 51.1333C16.3328 50.878 16.0681 50.573 15.7471 50.3183C15.3403 50.0091 14.9131 49.7601 14.4853 49.4993C14.0457 49.2392 13.5905 48.9089 13.3071 48.4749C13.281 48.429 13.3499 48.3898 13.3753 48.4239C13.7619 49.018 14.4175 49.3374 15.0043 49.6961C15.6519 50.0869 16.1178 50.6176 16.6421 51.1333C16.6539 51.1327 16.665 51.1203 16.6421 51.1333Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.5362 50.2641C16.0024 49.5716 15.3625 48.8847 14.6602 48.3549C13.9703 47.8363 13.2029 47.4164 12.4683 46.9474C12.4317 46.9258 12.4632 46.8531 12.5005 46.8866C13.2351 47.3555 14.0025 47.7754 14.6937 48.3176C15.3966 48.8592 16.0247 49.5467 16.5591 50.251C16.5833 50.2616 16.5492 50.287 16.5362 50.2641Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M3.34882 53.9162C3.34882 53.9162 5.07563 53.2678 7.16687 52.8008C9.25811 52.3338 11.8675 48.9661 9.97143 42.7189C9.97143 42.7189 10.2192 44.6919 9.26592 45.6534C8.3126 46.615 7.0416 45.8438 5.61474 47.8949C4.17546 49.9348 4.43989 51.7768 4.26883 52.5545C4.11439 53.2012 3.34882 53.9162 3.34882 53.9162Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M4.16062 53.3997C4.50685 52.8018 5.17226 52.4232 5.70545 52.0044C6.47609 51.3837 7.21998 50.7053 7.87692 49.9489C9.20195 48.4235 9.76109 46.7264 10.0457 44.7604C10.045 44.7486 10.0686 44.7473 10.0699 44.7709C9.89243 46.5302 9.41075 48.1285 8.30464 49.5476C7.74012 50.2636 7.08991 50.9251 6.40116 51.5296C6.085 51.8067 5.75578 52.0608 5.43898 52.3261C4.99566 52.6573 4.46666 52.934 4.16062 53.3997Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.69908 51.5383C5.03439 51.1775 5.51204 51.0454 5.96422 50.8793C6.62416 50.6192 7.27485 50.4069 7.86762 49.9967C7.86762 49.9967 7.87941 49.9961 7.86826 50.0085C7.55336 50.3092 7.13718 50.4852 6.73216 50.6489C6.09579 50.9077 5.21732 51.0612 4.69908 51.5383C4.69971 51.5501 4.71213 51.5613 4.69908 51.5383Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.8404 50.8687C5.27192 50.5381 5.77188 50.3812 6.27058 50.2007C6.97768 49.9381 7.83701 49.8683 8.38619 49.3068C8.39734 49.2944 8.40977 49.3055 8.39861 49.318C7.48002 50.2658 5.83478 50.0113 4.8404 50.8687C4.82861 50.8693 4.84103 50.8805 4.8404 50.8687Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.19645 50.2347C5.65408 49.95 6.277 49.8811 6.78939 49.7353C7.46429 49.5336 8.19813 49.3286 8.73995 48.8503C8.7511 48.8378 8.76353 48.849 8.75237 48.8614C8.43075 49.257 7.88426 49.4282 7.41966 49.5832C7.08284 49.6959 6.74539 49.7968 6.40794 49.8977C6.01218 50.0135 5.54125 50.0506 5.19645 50.2347C5.18529 50.2471 5.19708 50.2464 5.19645 50.2347Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.37973 48.5814C5.69755 48.115 6.56551 47.9857 7.06484 47.817C7.83152 47.563 9.16977 47.3847 9.66229 46.6489C9.67345 46.6365 9.69766 46.647 9.68651 46.6594C9.40468 47.1357 8.62558 47.3785 8.13803 47.5465C7.66165 47.7022 7.17094 47.8113 6.69519 47.9787C6.28954 48.1305 5.65609 48.2237 5.37973 48.5814C5.38036 48.5932 5.39278 48.6043 5.37973 48.5814Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.8284 48.5692C6.49214 48.3799 7.17084 48.2488 7.81899 47.9894C8.34 47.7841 9.34729 47.3871 9.61416 46.8526C9.62532 46.8402 9.63774 46.8513 9.63837 46.8631C9.40434 47.3486 8.73387 47.6329 8.27244 47.8468C7.47798 48.2442 6.6795 48.3462 5.8284 48.5692Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.37379 51.7193C8.80381 51.1405 9.16729 50.4235 9.33035 49.7171C9.40694 49.382 9.41153 49.027 9.40496 48.6845C9.40092 48.3892 9.44697 47.9256 9.31389 47.649C9.30083 47.6261 9.34735 47.6117 9.34862 47.6353C9.58005 48.2022 9.53575 49.1386 9.41414 49.7363C9.27592 50.4649 8.84044 51.1622 8.37379 51.7193C8.37442 51.7311 8.37442 51.7311 8.37379 51.7193Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.02248 51.5608C8.45503 51.0292 8.73852 50.3637 8.9519 49.7138C9.13372 49.1366 9.14923 48.5446 9.23483 47.937C9.23357 47.9134 9.26957 47.9233 9.2702 47.9351C9.19037 49.3109 8.99558 50.5273 8.02248 51.5608C8.02311 51.5726 8.03553 51.5838 8.02248 51.5608Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.07348 52.694C6.90432 52.0937 7.51387 51.1152 7.76784 50.1202C7.77836 50.096 7.80258 50.1065 7.80384 50.1301C7.61008 51.1455 6.92917 52.116 6.07348 52.694Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.5983 52.8733C6.33736 52.3252 7.11955 51.4793 7.34195 50.5569C7.35184 50.5209 7.39963 50.5302 7.38974 50.5662C7.16923 51.5239 6.39821 52.3574 5.5983 52.8733C5.58714 52.8857 5.58651 52.8739 5.5983 52.8733Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.8593 48.7783C10.0411 48.201 10.1044 47.6183 10.0721 47.017C10.0462 46.5337 9.91539 46.0796 9.90122 45.5956C9.89932 45.5603 9.95827 45.5571 9.96017 45.5925C10.1388 46.7179 10.2968 47.6789 9.88288 48.777C9.87236 48.8012 9.84878 48.8025 9.8593 48.7783Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.7574 42.9885C13.7574 42.9885 19.8544 42.9213 22.3883 44.9725C24.9215 47.0119 25.0234 48.9099 25.0782 50.8105C25.1323 52.6992 25.3486 53.6453 25.3486 53.6453C25.3486 53.6453 24.6367 52.2766 23.2584 52.1496C21.8808 52.0344 19.6239 51.3989 18.5898 49.3145C17.5681 47.2412 18.0496 44.3187 13.7574 42.9885Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.7634 52.4353C24.1846 50.2437 22.9608 48.3704 21.295 46.8519C20.4745 46.1038 19.576 45.4427 18.6123 44.8915C17.6729 44.3508 16.6959 43.9894 15.6927 43.5822C15.6443 43.5612 15.6758 43.4885 15.7236 43.4978C17.855 43.9981 19.9408 45.4113 21.498 46.8883C23.0669 48.3647 24.3875 50.2801 24.7634 52.4353C24.764 52.4471 24.787 52.434 24.7634 52.4353Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.1864 47.1932C22.4669 45.3347 19.826 44.1523 17.285 44.1705C17.2378 44.1731 17.2216 44.0912 17.2806 44.088C19.8196 44.0345 22.4892 45.3099 24.1864 47.1932Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.6019 44.8609C20.1642 44.2879 18.7962 43.912 17.2334 44.0905C17.1862 44.0931 17.183 44.0341 17.2296 44.0198C18.0051 43.9309 18.7647 43.9847 19.5398 44.1086C20.2796 44.2344 20.9135 44.5905 21.6019 44.8609C21.6137 44.8603 21.6131 44.8485 21.6019 44.8609Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.8748 47.7775C22.5208 46.5615 20.9664 45.3562 19.0978 45.1255C19.05 45.1163 19.0574 45.0331 19.117 45.0417C21.0209 45.2705 22.5412 46.5013 23.8748 47.7775C23.8873 47.7886 23.8984 47.7762 23.8748 47.7775Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.7306 50.0606C24.2766 49.0919 23.6403 48.2511 22.8564 47.5247C22.0726 46.7983 21.182 46.0658 20.1386 45.7908C20.1026 45.7809 20.1106 45.7095 20.1473 45.7312C21.2024 46.0056 22.1061 46.761 22.8905 47.4992C23.6632 48.2381 24.312 49.09 24.743 50.0718C24.7542 50.0593 24.7306 50.0606 24.7306 50.0606Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M23.7537 51.6855C23.4276 51.3365 23.2031 50.8993 22.9452 50.4994C22.5977 49.9742 22.2497 49.4372 21.9252 48.8989C21.3011 47.8447 20.5957 46.8185 20.0175 45.7382C19.992 45.7041 20.0491 45.6656 20.0745 45.6997C20.6136 46.7111 21.2804 47.6803 21.8772 48.665C22.1755 49.1574 22.4733 49.638 22.7716 50.1303C23.0942 50.6332 23.3623 51.2218 23.7537 51.6855C23.7655 51.6849 23.7655 51.6849 23.7537 51.6855Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.7319 51.3739C21.0793 49.4409 20.1386 47.115 18.8637 44.9489C18.8382 44.9148 18.8952 44.8763 18.9207 44.9104C20.1957 47.0765 21.1252 49.4148 22.7319 51.3739Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.4481 49.8831C18.9692 48.8921 18.5859 47.9195 18.5382 46.8107C18.4996 46.0916 18.4013 44.7018 17.6024 44.3545C17.5664 44.3446 17.5986 44.2838 17.6234 44.3061C18.2032 44.5351 18.4393 45.4091 18.5398 45.9594C18.6571 46.6034 18.6101 47.268 18.7628 47.91C18.918 48.5993 19.1768 49.2356 19.4481 49.8831Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.9527 49.5959C19.5901 48.7878 19.3435 47.938 19.0497 47.0907C18.7814 46.2775 18.6021 45.1403 18.0349 44.485C18.0094 44.4509 18.054 44.4012 18.0795 44.4353C18.5834 45.0112 18.7513 45.9362 18.9791 46.657C19.291 47.6216 19.5366 48.6725 19.9527 49.5959C19.9534 49.6077 19.9651 49.6071 19.9527 49.5959Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M3.37466 29.0749C3.37466 29.0749 1.11629 24.6679 -1.31596 23.6281C-3.73643 22.5876 -5.14431 23.2307 -6.5267 23.9079C-7.9091 24.5851 -8.66652 24.7912 -8.66652 24.7912C-8.66652 24.7912 -7.41372 24.7831 -6.8071 25.7318C-6.20048 26.6806 -4.8854 28.0524 -3.00779 28.0107C-1.11901 27.9565 0.789374 26.5062 3.37466 29.0749Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M-7.58202 24.7329C-5.85142 24.1552 -3.91019 24.4175 -2.21059 25.0238C-0.619627 25.5887 1.16906 26.533 2.26814 27.8455C2.30603 27.8907 2.2372 27.9299 2.20057 27.9082C1.52052 27.3536 0.886366 26.7729 0.140017 26.3045C-0.58212 25.8468 -1.3594 25.4629 -2.1552 25.1745C-3.90449 24.5236 -5.73455 24.35 -7.56897 24.7559C-7.58076 24.7565 -7.59381 24.7335 -7.58202 24.7329Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.0306414 14.1007C-0.0306414 14.1007 3.74873 16.889 3.72042 19.4443C3.69147 21.9878 2.26604 25.3866 3.38379 27.9276C3.38379 27.9276 0.326784 24.0601 -0.908856 21.5254C-2.1445 18.9907 -0.896527 17.3512 -0.405984 15.9179C0.07467 14.5207 -0.0306414 14.1007 -0.0306414 14.1007Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M0.253211 14.7592C1.61204 15.8449 1.9472 17.6831 2.09413 19.3187C2.30516 21.7074 2.20903 24.1008 2.77246 26.447C2.77436 26.4823 2.73963 26.496 2.72594 26.4613C2.03497 24.3821 2.17279 22.1047 2.03337 19.9485C1.92536 18.1572 1.71521 16.0049 0.242057 14.7717C0.218479 14.7729 0.240788 14.7481 0.253211 14.7592Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.832233 17.667C-0.522629 18.809 0.14737 19.8371 0.813571 20.7945C1.40271 21.6377 2.01353 22.4444 2.28017 23.4468C2.29385 23.4815 2.24733 23.4959 2.23364 23.4611C1.87688 22.3216 1.19217 21.4599 0.525334 20.4907C-0.0657017 19.6121 -0.551271 18.716 -0.832233 17.667Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-1.06989 18.3063C-0.607033 19.4401 -0.0622824 20.5577 0.630662 21.5727C1.18317 22.3943 2.12344 23.1714 2.31872 24.1659C2.31935 24.1777 2.2964 24.1907 2.29577 24.1789C1.85838 23.0793 0.986315 22.2512 0.354215 21.2683C-0.239987 20.3308 -0.707042 19.3391 -1.06989 18.3063C-1.08168 18.3069 -1.08232 18.2951 -1.06989 18.3063Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.961272 19.4472C-0.362006 20.4791 0.144214 21.5397 0.880516 22.4814C1.36331 23.1058 2.25999 23.7315 2.36388 24.5654C2.36515 24.589 2.32978 24.5909 2.32851 24.5673C2.1402 23.7025 1.17825 22.962 0.655019 22.2453C0.0168269 21.3692 -0.437804 20.3886 -0.961272 19.4472C-0.98485 19.4485 -0.973694 19.4361 -0.961272 19.4472Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M-0.00340396 16.3691C0.483512 17.9509 1.84005 19.2141 2.16381 20.8401C2.17814 20.8866 2.10803 20.9022 2.1055 20.855C1.93088 20.025 1.39206 19.2381 0.951356 18.5169C0.547916 17.8292 0.179845 17.1396 -0.0269798 16.3704C-0.0151908 16.3698 -0.00340396 16.3691 -0.00340396 16.3691Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M0.0404104 17.1827C0.582473 18.6905 1.81605 19.8657 2.17329 21.4545C2.17392 21.4662 2.16213 21.4669 2.1615 21.4551C1.73416 19.8819 0.524793 18.7173 0.0286207 17.1833C0.0161987 17.1721 0.0279884 17.1715 0.0404104 17.1827Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M1.78662 16.2375C2.57562 17.7203 2.71163 19.5929 2.20701 21.2042C2.19712 21.2402 2.14869 21.2192 2.15922 21.195C2.63038 19.6209 2.49309 17.7247 1.78662 16.2375Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.78722 17.6972C3.01834 19.139 2.7987 20.3331 2.12309 21.6226C2.12373 21.6344 2.09951 21.6239 2.11067 21.6114C2.73976 20.3362 2.96928 19.1061 2.77543 17.6978C2.76301 17.6866 2.78658 17.6854 2.78722 17.6972Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M3.21035 18.7503C3.49709 20.5675 2.7752 22.0959 2.275 23.7898C2.26448 23.814 2.22848 23.8041 2.23901 23.7799C2.64426 22.0793 3.42636 20.5713 3.21035 18.7503Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.63101 29.575C4.63101 29.575 2.97943 25.6793 4.71525 22.9969C6.43928 20.3151 8.59019 20.5188 8.59019 20.5188C8.59019 20.5188 7.91805 20.9923 8.17734 22.078C8.43725 23.1754 8.64385 25.4816 6.90802 26.4024C5.1604 27.3238 4.44159 28.2492 4.63101 29.575Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M7.40563 21.1379C6.2803 21.9787 5.5948 23.3042 5.19287 24.6263C4.82062 25.8404 4.76792 27.061 4.6104 28.3109C4.60114 28.3587 4.51799 28.3513 4.51546 28.3041C4.45745 25.6825 5.32001 22.8105 7.40563 21.1379C7.40437 21.1143 7.41679 21.1255 7.40563 21.1379Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M6.07666 21.9305C5.59022 22.5596 5.28632 23.2853 5.06621 24.0302C4.83495 24.7874 4.82514 25.4855 4.79618 26.2674C4.79808 26.3027 4.75093 26.3053 4.74903 26.2699C4.77292 25.3937 4.79388 24.6832 5.06787 23.8409C5.30231 23.1426 5.61 22.4876 6.07666 21.9305C6.07539 21.9069 6.08781 21.9181 6.07666 21.9305Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.48906 22.4349C4.55156 23.6912 4.57807 25.2859 4.6932 26.7694C4.6951 26.8048 4.64794 26.8073 4.64604 26.7719C4.51913 25.2891 4.51556 23.6813 5.48906 22.4349Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.1638 25.0599C4.16578 25.7574 4.49469 26.3782 4.64866 27.0438C4.66298 27.0903 4.59351 27.1177 4.57919 27.0712C4.38985 26.4074 4.10747 25.7723 4.14085 25.073C4.15138 25.0488 4.17496 25.0475 4.1638 25.0599Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.76729 23.9087C7.39685 24.4961 6.94072 25.029 6.40943 25.4831C5.85519 25.9503 4.99863 26.2919 4.60651 26.9159C4.58483 26.9526 4.52398 26.9204 4.54566 26.8837C4.86032 26.3584 5.43901 26.1264 5.91706 25.7815C6.64687 25.2812 7.2754 24.6563 7.76729 23.9087Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.73749 24.4542C7.28999 24.9275 6.91575 25.4442 6.39244 25.827C5.78915 26.2613 5.11005 26.6052 4.68257 27.2311C4.66025 27.256 4.61183 27.2349 4.63415 27.2101C4.96376 26.7431 5.42013 26.4349 5.90007 26.1253C6.61936 25.6493 7.16854 25.0877 7.73749 24.4542Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.32051 25.718C6.65938 26.6166 5.37818 26.7563 4.61894 27.5892C4.58547 27.6265 4.52336 27.5707 4.55683 27.5334C4.88035 27.1732 5.32683 26.901 5.75226 26.6771C6.31726 26.4103 6.94754 26.2582 7.32051 25.718Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.90301 22.0334C7.67467 22.625 7.37686 23.244 6.86661 23.6497C6.26585 24.1312 5.39876 24.497 4.97318 25.1583C4.9515 25.1949 4.89065 25.1627 4.91233 25.1261C5.22889 24.6362 5.79199 24.334 6.25888 24.0015C7.02216 23.464 7.52418 22.905 7.8788 22.0229C7.90174 22.0098 7.91416 22.021 7.90301 22.0334Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.90511 21.6313C7.60667 22.2385 7.28528 22.8587 6.80304 23.3457C6.30901 23.8333 5.6497 24.1052 5.19357 24.6381C5.1601 24.6753 5.10978 24.6189 5.14389 24.5934C5.52192 24.1475 6.04103 23.9068 6.48245 23.5402C7.10552 23.0339 7.51742 22.3378 7.89395 21.6437C7.89205 21.6084 7.90448 21.6195 7.90511 21.6313Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M7.7825 21.3306C6.73946 21.9422 6.15666 22.9785 5.40058 23.8703C5.38943 23.8828 5.37637 23.8598 5.38816 23.8592C6.1436 22.9555 6.73882 21.9305 7.7825 21.3306Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.33736 24.0702C2.66264 25.9444 3.43273 27.7356 4.21081 29.4555C4.98826 31.1636 6.00314 32.6697 7.09003 34.1956C7.15404 34.2868 7.01827 34.4005 6.94311 34.3217C5.64299 33.0083 4.72407 31.3078 3.96094 29.6463C3.1456 27.8929 2.50076 26.0122 2.33736 24.0702C2.32558 24.0709 2.32558 24.0709 2.33736 24.0702Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M1.13921 26.8539C2.77488 28.0311 4.32724 29.6384 5.11418 31.5233C5.14219 31.6046 5.03799 31.6457 4.98767 31.5892C4.38991 30.8056 3.89381 29.9336 3.27247 29.1512C2.62566 28.3347 1.9218 27.5567 1.13921 26.8539C1.11627 26.8669 1.12742 26.8545 1.13921 26.8539Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.82264 25.8757C4.6637 27.5395 4.72747 29.1676 4.75778 30.833C4.76411 30.9509 4.58728 30.9604 4.58095 30.8425C4.33907 29.2003 4.46075 27.5031 4.82264 25.8757Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.0199 33.9261C22.0199 33.9261 23.0129 34.1447 24.0495 32.753C25.0862 31.3613 26.2413 31.0747 27.6454 31.0229C29.0496 30.9712 30.3239 31.3639 30.8515 30.4015C30.8515 30.4015 31.1136 33.5205 28.5675 34.544C26.0208 35.5556 22.0199 33.9261 22.0199 33.9261Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M30.287 31.5551C29.4411 32.5345 28.3081 33.2338 27.1023 33.6769C25.6416 34.2164 24.2044 34.0926 22.676 34.0328C22.6406 34.0347 22.6381 33.9875 22.6735 33.9856C23.3894 33.8881 24.1063 34.0269 24.8267 34.0119C25.5353 33.9975 26.2245 33.8422 26.8988 33.6287C28.1772 33.2172 29.371 32.5501 30.2752 31.5557C30.2851 31.5197 30.2982 31.5427 30.287 31.5551Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.592 31.6589C26.6126 32.9229 25.0485 33.7399 23.9878 34.0215C23.9412 34.0358 23.9139 33.9663 23.9604 33.952C25.0913 33.6548 26.3861 32.8877 26.592 31.6589C26.5914 31.6471 26.6032 31.6465 26.592 31.6589Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.8076 31.6173C27.7289 32.3545 27.0562 32.8163 26.4726 33.1786C25.7515 33.6193 24.9385 34.1123 24.0728 34.0642C24.0257 34.0667 24.0219 33.996 24.069 33.9934C24.8869 34.0323 25.6317 33.5903 26.307 33.1757C26.9023 32.8127 27.6575 32.3465 27.7833 31.6067C27.7945 31.5943 27.8069 31.6055 27.8076 31.6173Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.7309 31.6387C28.1601 32.899 26.6941 33.7816 25.3715 34.03C25.325 34.0443 25.297 33.9631 25.3435 33.9488C26.6308 33.7023 28.0961 32.8078 28.706 31.6164C28.7172 31.604 28.7414 31.6145 28.7309 31.6387Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.5529 31.5354C29.2041 32.0862 28.7764 32.4875 28.2276 32.8361C27.5195 33.2998 26.7646 33.5531 26.0173 33.948C25.9944 33.961 25.9571 33.9275 25.9912 33.9021C27.2216 33.2567 28.7699 32.807 29.5529 31.5354Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.8197 32.7625C29.0373 33.3839 28.2104 33.6175 27.2281 33.5993C27.2164 33.5999 27.2151 33.5763 27.2269 33.5757C28.1824 33.5362 29.0354 33.3485 29.8073 32.7514C29.8185 32.739 29.8315 32.7619 29.8197 32.7625Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.0062 33.6812C27.9239 34.224 26.7377 34.3705 25.593 33.9708C25.5688 33.9603 25.5787 33.9243 25.6029 33.9348C26.6408 34.3284 28.0126 34.1128 28.9937 33.67C29.0173 33.6687 29.0179 33.6805 29.0062 33.6812Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M27.0617 34.4594C26.6217 34.4121 26.0699 34.2644 25.7129 33.9998C25.688 33.9775 25.7215 33.9402 25.7463 33.9626C26.1139 34.2029 26.6316 34.3761 27.0617 34.4594Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M20.8898 33.7976C20.8898 33.7976 24.7476 35.624 25.5393 38.4781C26.3316 41.344 24.2665 42.519 24.5263 44.0538C24.5263 44.0538 23.5646 43.538 22.2007 42.358C20.8368 41.178 20.6406 39.285 21.202 37.4105C21.7405 35.549 21.3774 34.2916 20.8898 33.7976Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M24.2864 43.5467C23.3836 42.3656 23.2749 40.5625 22.9743 39.148C22.6251 37.4879 22.2666 35.8756 21.4186 34.396C21.3801 34.3389 21.4712 34.2749 21.5098 34.332C22.2807 35.6975 22.6434 37.1677 22.9614 38.6876C23.1348 39.4941 23.2839 40.2901 23.4573 41.0966C23.6313 41.9148 23.7992 42.8398 24.2976 43.5343C24.31 43.5454 24.287 43.5585 24.2864 43.5467Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.9945 42.3864C22.7614 41.3467 23.1339 40.3572 23.0428 39.3216C23.0409 39.2863 23.088 39.2837 23.0899 39.3191C23.1797 40.3311 22.7626 41.3702 22.9945 42.3864Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.6187 41.9928C21.8045 40.7005 22.7588 38.8758 22.6251 37.4879C22.6232 37.4525 22.6704 37.45 22.6723 37.4853C22.7686 38.1777 22.6062 38.8958 22.5126 39.5748C22.3992 40.3257 22.2265 41.2926 22.6299 41.9804C22.6305 41.9921 22.6194 42.0046 22.6187 41.9928Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.8842 40.4241C21.8471 39.9532 21.9174 39.5002 22.0584 39.0433C22.2718 38.3934 22.6534 37.7936 22.5447 37.0901C22.544 37.0783 22.5676 37.077 22.5682 37.0888C22.7829 38.2241 21.8458 39.2676 21.8842 40.4241Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.6353 42.5584C24.6401 41.766 24.4333 40.9968 24.0993 40.2817C23.764 39.543 23.3798 38.7715 22.7934 38.2C22.7685 38.1777 22.8014 38.1287 22.8269 38.1628C23.9853 39.2592 24.5989 40.9997 24.636 42.5702C24.6478 42.5696 24.636 42.5702 24.6353 42.5584Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.9929 41.5106C24.815 39.9595 24.0102 38.182 22.6076 37.3824C22.5592 37.3613 22.6019 37.2763 22.651 37.3091C24.0902 38.1304 24.8603 39.9216 25.0164 41.5093C25.0289 41.5205 25.0053 41.5217 24.9929 41.5106Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.1583 40.6268C24.8533 39.7919 24.4554 38.9857 23.9321 38.2689C23.4599 37.6203 22.6893 37.1415 22.3318 36.4277C22.3193 36.4165 22.3423 36.4035 22.3547 36.4146C22.8432 37.1451 23.6039 37.6599 24.1041 38.3897C24.5783 39.0736 24.9142 39.8241 25.1701 40.6261C25.1701 40.6261 25.1589 40.6386 25.1583 40.6268Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M25.0851 39.4839C24.8188 37.6065 23.3338 36.3739 21.9161 35.2914C21.8912 35.2691 21.9247 35.2318 21.9495 35.2541C23.3791 36.336 24.8994 37.5667 25.0851 39.4839Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.4329 38.4031C21.5323 37.3928 21.8838 36.4518 22.0074 35.452C22.0068 35.4402 22.0304 35.4389 22.0317 35.4625C21.9434 36.4604 21.569 37.4145 21.4571 38.4137C21.4571 38.4137 21.4335 38.4149 21.4329 38.4031Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.8663 31.9682C16.8663 31.9682 19.0902 33.0902 19.3531 34.684C19.616 36.2778 18.8341 37.3484 19.2641 38.5313C19.2641 38.5313 17.9645 37.6671 17.7135 35.6352C17.4737 33.5908 17.7976 33.0178 16.8663 31.9682Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M19.003 38.0724C18.6012 37.1954 18.6449 36.2472 18.5471 35.3067C18.4557 34.484 18.3363 33.1425 17.5416 32.6532C17.5173 32.6427 17.539 32.606 17.5632 32.6165C18.1487 32.9516 18.3686 33.7438 18.4965 34.3635C18.7156 35.5814 18.5848 36.8889 19.003 38.0724Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M18.4469 37.4048C18.3238 36.6547 18.3578 35.9672 18.5786 35.2341C18.5891 35.2099 18.6133 35.2204 18.6146 35.244C18.4397 35.9509 18.4082 36.6857 18.4704 37.4035C18.4711 37.4153 18.4593 37.4159 18.4469 37.4048Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.2023 36.5012C19.1084 36.2934 19.0722 36.0589 18.9665 35.8518C18.8601 35.6329 18.6967 35.4525 18.5786 35.2342C18.5662 35.223 18.5891 35.21 18.6016 35.2211C18.7302 35.4152 18.893 35.5838 18.9869 35.7916C19.0821 36.0229 19.1196 36.281 19.2023 36.5012C19.203 36.513 19.203 36.513 19.2023 36.5012Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.1741 35.5333C19.0105 35.1282 18.8746 34.5799 18.4382 34.3787C18.4022 34.3688 18.4344 34.3079 18.4593 34.3302C18.9094 34.5662 19.0328 35.1034 19.1741 35.5333C19.1865 35.5444 19.1859 35.5326 19.1741 35.5333Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M24.8026 35.3254C24.8026 35.3254 26.9424 36.2036 27.4036 37.5267C27.8536 38.8622 27.535 39.7542 27.9507 40.8905C27.9507 40.8905 26.699 40.6976 26.2442 39.055C25.7895 37.4124 25.9835 36.6216 25.4529 35.988C24.9 35.3793 24.8026 35.3254 24.8026 35.3254Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M27.5619 40.474C27.1989 39.8787 27.0567 39.2124 26.8667 38.5369C26.6462 37.733 26.3215 36.9701 25.8126 36.2999C25.7995 36.2769 25.8336 36.2514 25.8467 36.2744C26.2909 36.8417 26.6199 37.4625 26.8222 38.1491C27.0533 38.9289 27.1441 39.7398 27.5724 40.4498C27.5855 40.4728 27.5749 40.497 27.5619 40.474Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.6054 35.6543C26.6054 35.6543 30.0443 36.2854 31.5499 34.8213C33.055 33.3454 34.3527 32.4126 34.3527 32.4126C34.3527 32.4126 33.19 32.5578 31.8794 33.0301C29.5354 33.8536 29.3805 35.8127 26.6054 35.6543Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M33.3507 32.9037C32.5339 33.3259 31.8929 33.9397 31.1408 34.4648C30.4234 34.9762 29.5067 35.2974 28.6817 35.5663C28.6699 35.5669 28.6568 35.544 28.6686 35.5434C29.5344 35.154 30.476 34.8552 31.2498 34.2934C31.9567 33.8062 32.604 33.3103 33.3507 32.9037C33.35 32.8919 33.3624 32.9031 33.3507 32.9037Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.8135 33.3409C31.0725 33.8536 30.6354 34.7402 29.8056 35.1394C29.7944 35.1519 29.7813 35.1289 29.7925 35.1165C30.5857 34.6956 31.0228 33.809 31.8135 33.3409Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.6888 34.5419C30.9546 34.9597 30.2165 35.3067 29.3547 35.3293C29.3429 35.33 29.3416 35.3064 29.3534 35.3058C30.1649 35.2267 30.9625 34.8883 31.6888 34.5419C31.6999 34.5295 31.6999 34.5295 31.6888 34.5419Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.1481 34.0678C31.7618 34.3605 31.3233 34.5614 30.8549 34.6456C30.8314 34.6469 30.8295 34.6115 30.853 34.6103C31.3078 34.4913 31.7481 34.3257 32.1481 34.0678C32.1475 34.056 32.1475 34.056 32.1481 34.0678Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M28.9567 38.0464C28.9567 38.0464 31.8122 38.6024 32.4135 40.9939C33.0142 43.3735 31.7691 45.9468 31.7691 45.9468C31.7691 45.9468 32.0404 45.4948 30.7943 44.7459C29.5363 43.9977 28.2796 42.6109 28.4648 40.5556C28.6382 38.5009 28.9567 38.0464 28.9567 38.0464Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M31.7741 45.3791C31.8099 44.0648 31.8291 42.8815 31.3252 41.6434C30.8213 40.4054 30.0837 39.4401 29.1464 38.4973C29.1091 38.4638 29.1655 38.4135 29.191 38.4476C29.6146 38.8505 29.9991 39.1845 30.3322 39.6632C30.7168 40.2219 31.0556 40.8067 31.3138 41.4312C31.557 41.9975 31.7419 42.5787 31.822 43.1892C31.932 43.9164 31.8409 44.6424 31.7741 45.3791Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.6019 43.2375C29.5205 42.6034 29.5144 42.048 29.6701 41.4249C29.8542 40.6701 30.0756 39.9489 29.8563 39.1685C29.8563 39.1685 29.8675 39.1561 29.8681 39.1679C30.04 39.7261 29.9866 40.2729 29.8755 40.8463C29.6945 41.66 29.4849 42.3807 29.6019 43.2375C29.6025 43.2492 29.6143 43.2486 29.6019 43.2375Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.1058 42.3655C28.888 41.1713 29.7996 40.0937 29.619 38.9329C29.6178 38.9094 29.6643 38.895 29.6656 38.9186C29.7629 39.41 29.6107 39.8792 29.4704 40.3479C29.2799 40.9847 29.0586 41.706 29.1176 42.3649C29.13 42.376 29.1064 42.3773 29.1058 42.3655Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.0695 40.3694C29.176 40.1509 29.2583 39.9218 29.3406 39.6928C29.4445 39.4271 29.5702 39.1248 29.5426 38.8307C29.5407 38.7953 29.5996 38.7921 29.6015 38.8275C29.7001 39.3424 29.3427 39.9528 29.0937 40.38C29.0832 40.4042 29.059 40.3936 29.0695 40.3694Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.2855 44.6486C30.7395 43.5074 31.5285 42.1291 31.0762 40.971C31.0756 40.9593 31.0873 40.9586 31.088 40.9704C31.2541 41.4226 31.2504 42.0139 31.2292 42.4998C31.1946 43.1756 30.9559 44.016 31.2855 44.6486C31.2861 44.6604 31.2979 44.6597 31.2855 44.6486Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.7679 43.8133C30.7463 43.4124 30.7118 42.9887 30.7728 42.5834C30.8603 42.0112 31.116 41.4891 30.9894 40.8929C30.9875 40.8575 31.0229 40.8556 31.0248 40.891C31.1245 41.867 30.7978 42.8303 30.7921 43.8238C30.7927 43.8356 30.7691 43.8368 30.7679 43.8133Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.3051 42.9386C32.1762 42.5199 32.0008 42.1155 31.7684 41.7496C31.5359 41.3838 31.2378 41.116 30.9601 40.7881C30.9476 40.7769 30.9699 40.7521 30.9824 40.7632C31.6624 41.3179 32.1168 42.0738 32.3163 42.9262C32.3175 42.9497 32.3057 42.9504 32.3051 42.9386Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.1567 41.717C31.9801 41.289 31.6979 40.8786 31.3495 40.5544C31.088 40.3083 30.7155 40.1983 30.477 39.9392C30.4646 39.928 30.4869 39.9032 30.4993 39.9143C30.6627 40.0947 30.8917 40.177 31.0886 40.3201C31.2482 40.4298 31.3972 40.5637 31.5352 40.71C31.811 41.0025 31.9956 41.3591 32.1567 41.717C32.1574 41.7288 32.1685 41.7164 32.1567 41.717Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M31.549 40.3072C31.1744 39.9372 30.6573 39.7758 30.1843 39.5529C30.1719 39.5417 30.183 39.5293 30.1948 39.5287C30.7026 39.7379 31.1837 39.8894 31.549 40.3072C31.5496 40.319 31.5607 40.3066 31.549 40.3072Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.7357 38.1518C30.7357 38.1518 31.5128 38.9732 34.414 39.2785C37.3146 39.572 39.0359 40.8038 39.8429 42.8413C40.6498 44.8788 40.7995 46.124 41.3528 46.5199C41.3528 46.5199 40.6892 46.2718 38.6265 46.1697C36.5638 46.0677 34.5065 45.185 33.5824 42.7282C32.6453 40.2483 31.6637 39.1424 30.7357 38.1518Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M40.4064 45.8495C39.718 45.5791 39.1504 45.1366 38.5703 44.683C37.8922 44.1637 37.2488 43.6308 36.6153 43.0618C35.2358 41.8117 33.8365 40.6336 32.379 39.4705C32.3541 39.4482 32.3882 39.4227 32.4013 39.4456C33.8308 40.5275 35.1692 41.6734 36.499 42.8789C37.1083 43.4373 37.7282 43.9716 38.3933 44.4679C39.0459 44.9531 39.6664 45.4991 40.4176 45.8371C40.4294 45.8364 40.4188 45.8606 40.4064 45.8495Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.959 44.1238C39.5794 43.6594 38.8052 43.3345 38.2528 43.175C37.6762 43.0049 37.004 42.8164 36.404 42.8722C36.3804 42.8735 36.3785 42.8381 36.4021 42.8369C37.1075 42.7635 37.8734 42.9352 38.5364 43.1716C38.9945 43.3361 39.745 43.6623 39.9701 44.1113C39.9826 44.1225 39.9708 44.1231 39.959 44.1238Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.6006 43.1735C39.0837 42.5746 38.222 42.1598 37.4791 41.975C36.7721 41.8002 35.8562 41.6957 35.1389 41.7696C35.1036 41.7715 35.101 41.7244 35.1364 41.7225C36.018 41.6278 37.0787 41.7837 37.921 42.0577C38.5225 42.25 39.1949 42.6632 39.6006 43.1735Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.9568 42.1913C38.1489 41.679 37.2247 41.4212 36.2944 41.2702C35.5429 41.145 34.7269 41.1415 34.0248 40.8364C34.0006 40.8259 34.0229 40.801 34.0353 40.8122C34.8467 41.1706 35.8153 41.154 36.6761 41.3325C37.5003 41.4892 38.2365 41.7689 38.9568 42.1913C38.9686 42.1907 38.9679 42.1789 38.9568 42.1913Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.0801 41.2806C37.1993 40.9496 36.3441 40.8773 35.4208 40.8559C34.9591 40.8452 34.3493 40.9371 33.9345 40.6993C33.9103 40.6887 33.9326 40.6639 33.945 40.6751C34.2859 40.8577 34.732 40.7983 35.0987 40.8023C35.4772 40.8056 35.8564 40.8207 36.2231 40.8247C36.8746 40.8488 37.4749 41.0176 38.0801 41.2806Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.6818 45.6584C37.7925 44.9494 36.8248 44.1028 36.4923 42.9739C36.478 42.9273 36.5481 42.9118 36.5506 42.9589C36.8812 44.0525 37.8384 44.9233 38.6818 45.6584Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.8901 45.6654C37.3044 45.1057 36.7139 44.6763 36.2744 43.9787C36.0805 43.6699 35.8984 43.3605 35.7267 43.0268C35.5277 42.6237 35.3833 42.1349 35.1272 41.7703C35.1011 41.7244 35.17 41.6853 35.1954 41.7194C35.6062 42.3239 35.8373 43.1037 36.2146 43.7455C36.6814 44.5126 37.2882 45.0238 37.8901 45.6654Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.6253 45.012C36.2505 44.4174 35.82 43.8848 35.5481 43.2255C35.288 42.5655 35.1067 41.8304 34.5595 41.3278C34.5222 41.2943 34.578 41.2322 34.6153 41.2657C34.9885 41.6121 35.2273 42.0959 35.3948 42.5716C35.5746 43.0585 35.742 43.5343 35.9913 43.9938C36.176 44.3504 36.4295 44.6679 36.6371 45.0114C36.6489 45.0108 36.6253 45.012 36.6253 45.012Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.7844 44.7617C35.1948 44.1312 34.6586 43.3915 34.2513 42.6331C33.831 41.8517 33.5484 40.992 33.2087 40.1708C33.1944 40.1242 33.2639 40.0969 33.2782 40.1434C33.6042 40.9298 33.8725 41.743 34.2562 42.5028C34.6535 43.2972 35.2153 44.071 35.8178 44.7244C35.8309 44.7473 35.7974 44.7846 35.7844 44.7617Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M41.7412 32.3942C41.7412 32.3942 40.7978 33.9818 39.9697 35.9534C39.1415 37.925 35.3579 39.9017 29.5586 36.9263C29.5586 36.9263 31.4586 37.5218 32.5759 36.7524C33.6933 35.983 33.1582 34.6048 35.4306 33.5488C37.703 32.4928 39.4609 33.0841 40.2514 33.0535C40.9004 33.0305 41.7412 32.3942 41.7412 32.3942Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M41.0823 33.1154C40.6203 33.3175 40.3098 33.7007 39.9372 34.0281C39.5758 34.3431 39.215 34.6699 38.8405 34.9619C38.1375 35.5199 37.3853 36.045 36.604 36.4653C35.0064 37.3196 33.3381 37.5156 31.5459 37.3872C31.5341 37.3878 31.5329 37.3642 31.5447 37.3636C33.5583 37.4328 35.3531 37.1709 37.1049 36.1074C37.9291 35.602 38.7016 35.0167 39.4356 34.3743C39.9446 33.945 40.4329 33.3513 41.0823 33.1154Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M39.1669 33.3364C38.6312 33.708 38.3534 34.4796 38.004 35.0186C37.7426 35.4346 37.4825 35.8742 37.0844 36.1675C37.0844 36.1675 37.0726 36.1681 37.0838 36.1557C37.5883 35.6439 37.9333 35.0224 38.3025 34.4114C38.5409 34.0084 38.7539 33.5714 39.1539 33.3134C39.1775 33.3122 39.1781 33.324 39.1669 33.3364Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.4814 33.3378C37.4497 34.1617 37.4087 35.8191 36.3137 36.5636C36.3019 36.5643 36.3012 36.5525 36.3012 36.5525C36.9511 36.1038 37.1785 35.2758 37.5576 34.6288C37.8283 34.165 38.0747 33.6907 38.4814 33.3378C38.4808 33.326 38.4932 33.3372 38.4814 33.3378Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M37.7965 33.5755C37.5635 33.8599 37.4553 34.2677 37.2956 34.5955C37.1253 34.9475 36.9551 35.2995 36.7606 35.641C36.5234 36.0675 36.2552 36.5785 35.8075 36.8272C35.7957 36.8278 35.7951 36.816 35.7951 36.816C36.3624 36.3718 36.6924 35.692 37.0131 35.0599C37.2472 34.5744 37.4271 33.9618 37.7965 33.5755C37.7959 33.5637 37.8083 33.5748 37.7965 33.5755Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.136 33.4756C35.7328 33.6745 35.5163 34.2655 35.3119 34.643C35.0636 35.0819 34.8748 35.5295 34.6382 35.9679C34.3911 36.4304 34.0165 37.1599 33.4831 37.3541C33.4713 37.3547 33.4582 37.3318 33.47 37.3311C34.2906 36.9797 34.6839 35.7171 35.0703 34.987C35.3285 34.512 35.6044 33.7051 36.1235 33.4644C36.1353 33.4638 36.1478 33.4749 36.136 33.4756Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M36.0409 33.9062C35.6898 34.6344 35.4685 35.3557 34.9964 36.0313C34.6779 36.4859 34.2424 37.1832 33.6724 37.3557C33.6606 37.3563 33.6475 37.3333 33.6593 37.3327C34.2641 37.1465 34.8395 36.1934 35.143 35.6806C35.5023 35.1056 35.7412 34.4898 36.0409 33.9062C36.0403 33.8944 36.0521 33.8938 36.0409 33.9062Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.6881 36.9681C38.045 37.3219 37.2927 37.6224 36.5487 37.6387C35.9462 37.6474 35.006 37.5324 34.4919 37.2053C34.4677 37.1947 34.4893 37.1581 34.5135 37.1686C34.747 37.3334 35.1268 37.3603 35.4018 37.4165C35.7723 37.4912 36.1546 37.5653 36.5436 37.5444C37.2752 37.5169 38.0431 37.2865 38.6881 36.9681Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M38.6095 36.6058C37.4084 37.356 36.1779 37.3393 34.8213 37.1757C34.7977 37.177 34.8076 37.141 34.8194 37.1403C35.4232 37.1552 36.0078 37.2539 36.6183 37.1738C37.2995 37.0899 37.9999 36.9223 38.5971 36.5946C38.6083 36.5822 38.6095 36.6058 38.6095 36.6058Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.0535 34.8732C39.3245 35.6099 38.2627 36.0925 37.2234 36.1128C37.1998 36.1141 37.1979 36.0787 37.2215 36.0775C38.2341 35.9995 39.299 35.5758 40.0535 34.8732Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M40.3254 34.4329C39.6536 35.131 38.7278 35.7246 37.7381 35.7895C37.7028 35.7914 37.7002 35.7443 37.7356 35.7424C38.6774 35.6682 39.6262 35.0615 40.3254 34.4329Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M35.5357 37.9295C34.3769 38.1454 33.4606 37.8163 32.3886 37.4482C32.3526 37.4384 32.3612 37.3788 32.3972 37.3887C32.864 37.4937 33.2893 37.7073 33.756 37.8123C34.3425 37.9463 34.924 37.986 35.5227 37.9066C35.5456 37.8935 35.5469 37.9171 35.5357 37.9295Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M32.43 39.5388C29.6251 37.0647 26.1096 36.1066 22.7139 34.7401C19.669 33.5203 16.5532 32.0797 14.0595 29.8963C12.9062 28.8942 11.9077 27.6945 11.3459 26.2586C11.2781 26.0968 11.5454 26.0115 11.6015 26.174C12.7152 29.0818 15.6194 30.983 18.2494 32.4024C21.1594 33.9723 24.2649 34.9997 27.3104 36.2313C29.2317 37.003 31.0465 37.9933 32.43 39.5388C32.4424 39.5499 32.4536 39.5375 32.43 39.5388Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M30.2881 39.7245C29.8245 39.0164 29.16 38.5318 28.5612 37.9492C28.0376 37.4453 27.4576 36.9917 27.1156 36.348C27.0895 36.3021 27.1465 36.2635 27.1727 36.3094C27.6344 36.9822 28.3721 37.5101 28.9467 38.0822C29.4697 38.5743 29.9573 39.0684 30.2881 39.7245Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M33.2597 37.3777C31.4213 37.4883 29.6314 37.1824 27.8642 36.6388C27.8282 36.629 27.8251 36.57 27.8722 36.5675C28.7713 36.5783 29.6286 36.9106 30.5012 37.0884C31.4099 37.2761 32.3351 37.3328 33.2584 37.3542C33.2709 37.3653 33.2715 37.3771 33.2597 37.3777Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M29.9861 35.2008C29.1822 35.4213 28.4789 35.7547 27.6269 35.7413C26.7867 35.7273 25.9019 35.763 25.0777 35.6063C25.0417 35.5964 25.0379 35.5256 25.0857 35.5349C25.8918 35.5744 26.7084 35.5896 27.5132 35.6055C28.3776 35.6301 29.1424 35.3407 29.9849 35.1772C29.9966 35.1766 30.0097 35.1996 29.9861 35.2008Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M26.4628 33.8767C25.6365 34.1221 24.7915 34.2384 23.9258 34.1903C23.546 34.1634 23.1762 34.1005 22.8069 34.0494C22.2471 33.973 21.7204 34.0723 21.1632 34.0431C21.1036 34.0344 21.0991 33.9519 21.1581 33.9488C21.9776 33.7983 22.6814 33.9143 23.5018 34.0003C24.4885 34.101 25.4807 34.0832 26.4628 33.8767Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.9322 38.8072C22.6123 37.914 22.3966 36.9797 22.0774 36.0983C21.8565 35.5072 21.55 34.4241 21.0104 34.063C20.9123 33.9973 20.9984 33.839 21.0965 33.9046C21.5995 34.2441 21.7777 34.9203 22.0066 35.4401C22.4787 36.5261 22.6698 37.6626 22.9912 38.804C22.98 38.8165 22.9341 38.8426 22.9322 38.8072Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M18.6272 36.5792C18.5988 34.9491 18.0375 32.8629 16.7258 31.7747C16.6637 31.7189 16.753 31.6196 16.8151 31.6754C18.164 32.797 18.7142 34.8956 18.6508 36.5779C18.6514 36.5897 18.6279 36.591 18.6272 36.5792Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3392C16.8896 29.9807 17.5911 29.612 18.2921 29.4561C18.6426 29.3782 18.9621 29.3846 19.3084 29.4488C19.4878 29.4865 19.4824 29.605 19.6586 29.5837C19.7411 29.5793 19.9196 29.3805 20.012 29.3401C20.9677 28.8632 22.4182 29.2345 23.0198 30.089C23.55 29.8359 24.1404 30.0406 24.5614 30.3963C24.8217 30.6188 24.9615 30.8005 25.2533 30.9503C25.4967 31.0792 25.7512 31.1955 25.9158 31.3995C24.7081 31.1451 24.6295 32.5445 24.1115 33.2462C23.4497 34.133 22.5898 34.191 21.7296 34.6864C22.7049 35.6745 23.61 37.7777 22.2118 38.8222C22.4796 39.1862 22.5797 39.2872 22.4014 39.7106C23.6436 39.0646 23.8314 41.2418 23.9488 41.8857C23.5112 41.2235 22.9642 42.045 22.7251 42.4362C22.3999 42.9857 21.9345 43.5663 21.3485 43.8815C20.2099 44.4747 18.0605 44.5192 17.0109 43.6888C16.9647 44.5899 16.6804 45.681 16.0793 46.3754C15.4447 47.107 14.7335 47.0743 13.8931 46.8356C13.5265 48.1558 12.0254 48.603 10.8761 47.8962C9.64169 47.1467 8.99567 45.9045 8.70521 44.6787C7.74975 45.3802 6.7787 46.0117 5.5638 46.0651C4.41963 46.1147 3.60342 45.8866 2.57161 45.3863C1.29768 44.7808 -0.192329 43.4539 0.75672 41.9724C1.39047 41.0043 2.29672 40.7074 3.26548 40.2534C2.37236 39.4737 1.57118 38.2044 0.20555 38.3132C0.443624 38.1231 0.473055 37.7904 0.625441 37.5458C0.788982 37.2887 1.01463 37.0874 1.27628 36.8961C1.45858 36.768 2.0398 36.5831 2.12588 36.4248C2.22312 36.2541 2.00601 35.7337 2.00704 35.5326C2.03971 34.1594 3.4566 33.2439 4.61905 32.8741C4.45431 32.008 4.32392 31.3411 4.37139 30.4637C4.39932 29.8828 4.60819 28.4883 5.41617 28.5632C5.12643 28.0112 5.60653 27.2643 6.16291 27.057C6.96242 26.754 7.40123 27.4398 8.01133 27.5726C7.85127 27.0137 8.52475 27.2258 8.76875 27.3664C8.38588 26.181 9.99979 26.7328 10.5019 26.8359C10.5136 26.1732 10.6047 25.4471 11.4099 25.2501C10.9719 24.8007 11.6186 24.2931 11.9596 24.0383C12.3331 24.6094 13.5308 24.6752 14.1348 24.9147C14.9325 25.2383 15.5332 25.8563 15.9869 26.6005C16.8024 27.9163 16.4462 28.9877 16.3769 30.3392C16.4017 30.3616 16.4116 30.3256 16.3769 30.3392Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3392C16.8896 29.9807 17.5911 29.612 18.2921 29.4561C18.6426 29.3782 18.9621 29.3846 19.3084 29.4488C19.4878 29.4865 19.4824 29.605 19.6586 29.5837C19.7411 29.5793 19.9196 29.3805 20.012 29.3401C20.9677 28.8632 22.4182 29.2345 23.0198 30.089C23.55 29.8359 24.1404 30.0406 24.5614 30.3963C24.8217 30.6188 24.9615 30.8005 25.2533 30.9503C25.4967 31.0792 25.7512 31.1955 25.9158 31.3995C24.7081 31.1451 24.6295 32.5445 24.1115 33.2462C23.4497 34.133 22.5898 34.191 21.7296 34.6864C22.7049 35.6745 23.61 37.7777 22.2118 38.8222C22.4796 39.1862 22.5797 39.2872 22.4014 39.7106C23.6436 39.0646 23.8314 41.2418 23.9488 41.8857C23.5112 41.2235 22.9642 42.045 22.7251 42.4362C22.3999 42.9857 21.9345 43.5663 21.3485 43.8815C20.2099 44.4747 18.0605 44.5192 17.0109 43.6888C16.9647 44.5899 16.6804 45.681 16.0793 46.3754C15.4447 47.107 14.7335 47.0743 13.8931 46.8356C13.5265 48.1558 12.0254 48.603 10.8761 47.8962C9.64169 47.1467 8.99567 45.9045 8.70521 44.6787C7.74975 45.3802 6.7787 46.0117 5.5638 46.0651C4.41963 46.1147 3.60342 45.8866 2.57161 45.3863C1.29768 44.7808 -0.192329 43.4539 0.75672 41.9724C1.39047 41.0043 2.29672 40.7074 3.26548 40.2534C2.37236 39.4737 1.57118 38.2044 0.20555 38.3132C0.443624 38.1231 0.473055 37.7904 0.625441 37.5458C0.788982 37.2887 1.01463 37.0874 1.27628 36.8961C1.45858 36.768 2.0398 36.5831 2.12588 36.4248C2.22312 36.2541 2.00601 35.7337 2.00704 35.5326C2.03971 34.1594 3.4566 33.2439 4.61905 32.8741C4.45431 32.008 4.32392 31.3411 4.37139 30.4637C4.39932 29.8828 4.60819 28.4883 5.41617 28.5632C5.12643 28.0112 5.60653 27.2643 6.16291 27.057C6.96242 26.754 7.40123 27.4398 8.01133 27.5726C7.85127 27.0137 8.52475 27.2258 8.76875 27.3664C8.38588 26.181 9.99979 26.7328 10.5019 26.8359C10.5136 26.1732 10.6047 25.4471 11.4099 25.2501C10.9719 24.8007 11.6186 24.2931 11.9596 24.0383C12.3331 24.6094 13.5308 24.6752 14.1348 24.9147C14.9325 25.2383 15.5332 25.8563 15.9869 26.6005C16.8024 27.9163 16.4462 28.9877 16.3769 30.3392ZM16.3769 30.3392C16.4116 30.3256 16.4017 30.3616 16.3769 30.3392Z",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M21.7179 34.6872C20.7477 33.7935 17.8753 33.1437 15.5896 35.7138Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.7179 34.6872C20.7477 33.7935 17.8753 33.1437 15.5896 35.7138",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M17.0115 43.7007C15.5715 42.6431 13.9983 41.3088 13.9454 38.7815Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.0115 43.7007C15.5715 42.6431 13.9983 41.3088 13.9454 38.7815",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M13.4524 39.068C13.4524 39.068 12.3558 41.3259 9.49768 41.8223C6.63952 42.3186 4.53759 41.4856 3.28969 40.2639",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.4524 39.068C13.4524 39.068 12.3558 41.3259 9.49768 41.8223C6.63952 42.3186 4.53759 41.4856 3.28969 40.2639",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M0.217974 38.3245C0.217974 38.3245 1.33532 37.5551 2.17558 38.2312C2.17558 38.2312 3.10723 37.3063 4.65452 38.8193C6.21424 40.3435 8.60867 42.0002 10.1515 41.669",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M0.217974 38.3245C0.217974 38.3245 1.33532 37.5551 2.17558 38.2312C2.17558 38.2312 3.10723 37.3063 4.65452 38.8193C6.21424 40.3435 8.60867 42.0002 10.1515 41.669",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M9.49835 41.834C9.49835 41.834 8.46527 43.0718 8.71831 44.7016Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.49835 41.834C9.49835 41.834 8.46527 43.0718 8.71831 44.7016",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.2669 36.679C11.2669 36.679 9.43905 37.4274 7.56001 36.1213C5.68096 34.8153 4.95495 33.6247 4.62707 32.8029",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.2669 36.679C11.2669 36.679 9.43905 37.4274 7.56001 36.1213C5.68096 34.8153 4.95495 33.6247 4.62707 32.8029",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M10.5262 26.8464C11.3152 27.2297 13.045 28.1772 13.5738 30.0996C14.1033 32.0338 13.9613 34.4533 13.9613 34.4533",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.5262 26.8464C11.3152 27.2297 13.045 28.1772 13.5738 30.0996C14.1033 32.0338 13.9613 34.4533 13.9613 34.4533",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3394C15.3713 31.2091 14.6848 32.7357 14.7552 34.7064Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.3769 30.3394C15.3713 31.2091 14.6848 32.7357 14.7552 34.7064",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M11.9838 24.0489C11.9838 24.0489 11.7244 25.1624 12.9148 25.9734C14.1051 26.7844 15.9399 27.2652 16.4572 29.4128",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.9838 24.0489C11.9838 24.0489 11.7244 25.1624 12.9148 25.9734C14.1051 26.7844 15.9399 27.2652 16.4572 29.4128",
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M12.2009 34.9144C12.5033 34.6026 12.9807 34.2459 13.4252 34.3758C13.5096 34.4067 13.6481 34.5648 13.7307 34.5604C13.7778 34.5578 13.8671 34.4585 13.9136 34.4441C13.983 34.4168 14.0649 34.4005 14.1357 34.3967C14.4298 34.3691 14.7302 34.4594 14.898 34.7223C14.9751 34.8364 15.0193 34.9996 15.0623 35.1391C15.1046 35.2669 15.0787 35.4456 15.1322 35.561C15.5614 35.4079 15.6265 35.9601 15.6057 36.2331C15.5734 36.7314 15.3412 37.2523 15.0929 37.6912C14.608 38.5685 13.6458 39.3651 12.6189 39.3965C11.7812 39.4297 11.3083 38.7694 11.0916 38.0362C10.9602 37.5703 10.9199 37.0404 11.3154 36.7C11.1285 36.5208 11.301 35.9913 11.3964 35.7852C11.5778 35.4208 11.9318 35.189 12.2009 34.9144Z",
                  fill: n,
                  stroke: "white",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                r.jsx("path", {
                  d: "M14.555 38.4649C13.8597 38.7269 13.0856 38.402 12.6302 37.8471C12.5158 37.6995 12.327 37.485 12.3516 37.2827C12.3861 37.0444 12.6423 36.9716 12.8458 37.0197C12.9532 37.0376 12.9751 37.2256 12.8585 37.2555C12.6829 37.2886 12.4695 37.2764 12.5535 37.5202C12.6095 37.6827 12.7598 37.8401 12.8847 37.9635C13.2965 38.367 13.9725 38.6263 14.555 38.4649C14.5668 38.4643 14.5662 38.4525 14.555 38.4649Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M14.7953 38.0974C14.2356 38.021 13.6558 37.792 13.3456 37.3003C13.1393 36.9803 13.1171 36.5677 13.5868 36.507C13.7512 36.4864 13.7651 36.7458 13.6007 36.7664C13.1422 36.8147 13.4549 37.3536 13.6418 37.5327C13.9648 37.8227 14.3751 37.9781 14.7953 38.0974C14.8071 38.0967 14.8065 38.0849 14.7953 38.0974Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.2681 37.4336C15.2421 36.9502 14.9909 36.4553 14.6989 36.0809C14.5976 35.9562 14.0677 35.3344 13.9172 35.6144C13.8528 35.7361 13.6467 35.6408 13.7222 35.5067C13.9359 35.0814 14.4079 35.5053 14.5968 35.7198C15.0111 36.1705 15.3289 36.8037 15.291 37.4205C15.2923 37.4441 15.2687 37.4454 15.2681 37.4336Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.5727 36.7196C15.8813 36.3011 16.1147 35.8038 16.193 35.2794C16.268 34.696 15.9816 33.7656 15.2587 33.7334C15.093 33.7305 15.138 33.468 15.2709 33.52C16.7637 34.0191 16.3505 35.7911 15.5976 36.7419C15.5864 36.7543 15.5616 36.732 15.5727 36.7196Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.4721 35.5073C15.6583 35.0125 15.2823 34.3943 15.0014 34.0074C14.8603 33.8022 14.0832 32.9808 13.823 33.4204C13.7468 33.5427 13.5866 33.4213 13.6634 33.3107C14.2806 32.4736 15.9037 34.7393 15.4845 35.5184L15.4721 35.5073Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.3494 36.6745C11.0155 36.6215 10.8365 36.371 10.807 36.0415C10.7813 35.7828 10.8478 35.259 11.1505 35.1718C11.2088 35.1569 11.2833 35.2238 11.2511 35.2846C11.1966 35.3703 11.1166 35.4219 11.0503 35.5082C10.9505 35.6318 10.888 35.7889 10.8851 35.9546C10.8439 36.2878 11.013 36.5743 11.3494 36.6745Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.2726 38.5467C10.8183 38.4529 10.3869 38.346 10.0385 38.0218C9.78939 37.7869 9.58407 37.2659 9.87602 36.9783C9.94359 36.9156 10.0529 36.9688 10.0461 37.0638C10.0097 37.2667 9.86344 37.4046 9.92263 37.6261C9.96812 37.8128 10.1302 37.9696 10.278 38.0799C10.537 38.2788 10.9374 38.4701 11.2726 38.5467C11.2732 38.5585 11.2844 38.5461 11.2726 38.5467Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.677 39.0679C13.1002 39.3353 12.2328 38.8144 11.8774 38.3605C11.5984 38.009 11.2011 37.2146 11.8419 37.0383C11.9815 36.9953 12.0518 37.2043 11.9122 37.2473C11.3887 37.4055 11.8103 38.2104 12.0475 38.446C12.4333 38.8036 13.1423 39.2385 13.677 39.0679Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M13.0394 39.3031C12.2618 39.7941 10.9923 39.2711 10.5064 38.5878C10.4815 38.5655 10.515 38.5283 10.551 38.5382C10.9763 38.7518 11.2447 39.1275 11.7134 39.2679C12.1342 39.399 12.6226 39.4673 13.0394 39.3031Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.046 37.8494C10.5334 37.7705 10.0753 37.6059 9.66661 37.2613C9.34427 36.9831 8.96465 36.5187 9.08269 36.0749C9.12289 35.9427 9.28983 35.9692 9.30859 36.0983C9.34356 36.3092 9.31895 36.5115 9.40045 36.7081C9.48258 36.9165 9.62301 37.11 9.79692 37.2662C10.1441 37.5667 10.5942 37.8027 11.046 37.8494C11.0578 37.8487 11.0572 37.8369 11.046 37.8494Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.0158 38.6909C19.9097 38.6621 18.1335 35.9672 15.9611 37.1243C15.9381 37.1374 15.9244 37.1026 15.948 37.1014C18.1074 35.9213 19.9401 38.5659 22.0152 38.6791C22.0263 38.6667 22.0276 38.6902 22.0158 38.6909Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M22.1412 39.9256C20.9555 40.0838 19.9221 39.7728 18.918 39.1292C17.8655 38.4645 16.9528 37.3194 15.6095 37.4033C15.5859 37.4046 15.584 37.3692 15.6076 37.368C16.6568 37.3116 17.4257 37.9797 18.2026 38.5764C19.3366 39.4377 20.6732 40.1108 22.1399 39.902C22.1523 39.9132 22.1529 39.925 22.1412 39.9256Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.8395 37.2845C16.694 37.3451 17.5058 37.4906 18.293 37.8385C19.177 38.2285 19.9657 38.8246 20.8714 39.1779C20.8956 39.1885 20.8733 39.2133 20.8608 39.2022C20.0408 38.9033 19.328 38.3977 18.5395 38.0263C17.666 37.6121 16.8027 37.3865 15.8408 37.3081C15.8284 37.297 15.8277 37.2852 15.8395 37.2845Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.2375 39.5041C15.8218 40.4777 16.6455 41.2847 17.5558 41.9452C18.5153 42.6386 19.5096 42.8808 20.654 43.0558C20.69 43.0657 20.6807 43.1134 20.6454 43.1153C18.3524 42.9074 16.3956 41.4755 15.2264 39.5166C15.2251 39.493 15.2369 39.4923 15.2375 39.5041Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.071 41.3747C16.9522 42.5925 18.5472 43.4527 20.0673 43.3592C20.1027 43.3573 20.1058 43.4163 20.0705 43.4182C18.5162 43.5371 16.9311 42.6409 16.071 41.3747C16.0592 41.3754 16.0592 41.3754 16.071 41.3747Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M16.7261 35.9601C17.6201 35.2145 18.7457 35.2605 19.8028 35.5703C19.8388 35.5801 19.8302 35.6397 19.7942 35.6298C18.7508 35.3548 17.635 35.2728 16.7391 35.983C16.728 35.9955 16.7149 35.9725 16.7261 35.9601Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M17.9757 35.8929C18.359 35.7659 18.7611 35.768 19.1645 35.7936C19.1999 35.7917 19.1906 35.8395 19.1664 35.829C18.7624 35.7916 18.3597 35.7777 17.9757 35.8929C17.9645 35.9054 17.9639 35.8936 17.9757 35.8929Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.6999 34.521C12.3296 32.2472 11.3823 29.5788 9.57251 28.0208C9.54767 27.9985 9.58113 27.9612 9.60598 27.9835C10.4332 28.6367 11.0063 29.6227 11.4814 30.543C12.115 31.774 12.5892 33.12 12.7111 34.5086C12.7124 34.5322 12.7006 34.5328 12.6999 34.521Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M8.31498 28.1593C9.15066 29.1903 9.97328 30.1984 10.6843 31.3307C11.3426 32.3594 12.0418 33.4923 12.2845 34.7089C12.2858 34.7325 12.251 34.7462 12.2498 34.7226C11.9921 33.4477 11.219 32.2596 10.534 31.1732C9.85032 30.1104 9.08918 29.1463 8.31498 28.1593C8.30319 28.1599 8.30319 28.1599 8.31498 28.1593Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M5.71581 29.0791C6.1327 29.577 6.41319 30.1767 6.81892 30.6869C7.32593 31.3218 7.84346 31.9325 8.41804 32.5046C9.44107 33.5019 10.5738 34.3396 11.6408 35.2755C11.6656 35.2978 11.6315 35.3233 11.6185 35.3003C10.4788 34.3329 9.27413 33.4754 8.22372 32.4086C7.74852 31.9257 7.33036 31.4043 6.92399 30.8823C6.4791 30.3032 6.16008 29.6464 5.71581 29.0791Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.5115 35.507C10.8563 34.9747 10.1696 34.515 9.57014 33.9206C8.89682 33.271 8.19066 32.6705 7.57376 31.9706C7.5607 31.9476 7.58301 31.9228 7.59607 31.9457C8.2576 32.5959 8.94208 33.2331 9.60361 33.8833C10.2024 34.4659 10.9016 34.9368 11.5115 35.507C11.5233 35.5064 11.5233 35.5064 11.5115 35.507Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.2619 36.5845C10.2449 36.58 9.43661 35.6185 8.70624 35.0074C7.67901 34.1522 6.85576 33.1323 6.07649 32.051C6.06344 32.028 6.09753 32.0026 6.11059 32.0255C6.82585 33.0157 7.59752 33.9556 8.51548 34.7575C9.30922 35.448 10.1883 36.4057 11.2619 36.5845Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.7842 25.833C12.8451 26.8756 13.9905 27.9491 14.5976 29.3471C14.8675 29.971 14.9979 30.6379 14.9515 31.3143C14.8756 32.3233 14.2718 33.408 14.4075 34.3939C14.4094 34.4292 14.3622 34.4318 14.3603 34.3964C14.2366 33.6345 14.6199 32.8455 14.7693 32.1044C14.9464 31.22 14.9362 30.3693 14.6071 29.5239C14.0204 28.0657 12.8476 26.9227 11.7842 25.833C11.7724 25.8336 11.7835 25.8212 11.7842 25.833Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.3831 36.5883C4.13966 36.494 5.66329 37.3462 7.2772 37.898C7.87931 38.1021 8.50183 38.246 9.1435 38.3061C9.61886 38.3515 10.8222 38.5234 11.1028 38.0236C11.1133 37.9994 11.1617 38.0204 11.1512 38.0446C10.9573 38.3979 10.3772 38.3818 10.0346 38.3883C9.47929 38.3945 8.90962 38.3542 8.35973 38.2418C6.31659 37.8431 4.52007 36.5327 2.3831 36.5883C2.37194 36.6007 2.37131 36.5889 2.3831 36.5883Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M2.81966 36.3521C4.18591 36.2551 5.43539 36.6254 6.71351 37.0888C7.40067 37.3357 8.08911 37.6061 8.79605 37.781C9.37142 37.9274 10.5091 38.1974 11.0311 37.791C11.0652 37.7655 11.0913 37.8114 11.0572 37.8369C10.7274 38.0793 10.1335 38.0284 9.75437 38.0133C8.99544 37.9713 8.24743 37.6922 7.53669 37.4466C5.99478 36.9146 4.4838 36.2982 2.81966 36.3521Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.2031 39.3596C11.7421 40.0228 10.7037 40.2795 9.93865 40.3442C8.78586 40.4534 7.70878 39.991 6.69002 39.5137C6.66581 39.5032 6.68812 39.4783 6.70054 39.4895C7.68204 39.9334 8.72248 40.3741 9.82811 40.2674C10.7222 40.1839 11.4739 39.8716 12.1907 39.3484C12.2018 39.336 12.2142 39.3471 12.2031 39.3596Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.9734 39.2656C11.0371 39.8834 9.70468 39.7303 8.67374 39.4664C8.63774 39.4565 8.65878 39.4081 8.68299 39.4186C9.73752 39.6812 10.9836 39.768 11.9734 39.2656C11.9728 39.2538 11.9845 39.2532 11.9734 39.2656Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.4271 41.8261C8.80592 42.3678 8.02365 42.5517 7.24139 42.7356C6.19114 42.993 5.13836 43.2032 4.05693 43.3204C4.03336 43.3217 4.03146 43.2863 4.0544 43.2732C5.0874 43.135 6.10545 42.9385 7.10854 42.6836C7.91312 42.4749 8.7575 42.3468 9.41404 41.8031C9.42583 41.8025 9.43825 41.8137 9.4271 41.8261Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M9.43956 41.8372C8.96784 42.3 8.55823 42.8185 7.98651 43.1803C7.44888 43.5166 6.8565 43.7139 6.26349 43.8994C6.22876 43.9131 6.21444 43.8666 6.24917 43.8529C6.84218 43.6674 7.43393 43.4582 7.95976 43.1226C8.50791 42.7621 8.94236 42.2659 9.43956 41.8372C9.43892 41.8254 9.43892 41.8254 9.43956 41.8372Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.96342 41.4864C3.85905 41.6167 2.76813 41.557 1.70127 41.9454C1.66654 41.959 1.65221 41.9125 1.68695 41.8988C2.7258 41.4292 3.86767 41.5571 4.96342 41.4864C4.97521 41.4858 4.97457 41.474 4.96342 41.4864Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M4.63058 41.2324C3.76389 41.3853 2.85906 41.2684 2.02671 41.6205C2.00377 41.6335 1.98945 41.587 2.01302 41.5857C2.84284 41.1865 3.73841 41.3512 4.62994 41.2206C4.64173 41.2199 4.64237 41.2317 4.63058 41.2324Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.5844 41.048C11.408 41.5068 11.606 42.111 11.6909 42.5911C11.7783 43.1185 11.9257 43.4416 12.1527 43.926C12.5383 44.7211 12.9331 45.4684 13.4216 46.1988C13.4471 46.2329 13.39 46.2714 13.3646 46.2373C12.7735 45.3587 12.2638 44.4521 11.8333 43.482C11.6194 43.0206 11.5922 42.5137 11.5066 42.0217C11.4392 41.647 11.3893 41.3777 11.536 41.027C11.5577 40.9904 11.5949 41.0238 11.5844 41.048Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M11.8435 40.8095C11.7857 41.2737 11.6887 41.6691 11.8208 42.1467C11.9092 42.473 12.0448 42.7968 12.1916 43.1081C12.5548 43.9281 13.0905 44.656 13.5114 45.4491C13.5245 45.4721 13.4904 45.4976 13.4773 45.4746C12.9608 44.6629 12.4201 43.8407 12.0537 42.9618C11.905 42.6151 11.7799 42.2671 11.7249 41.9036C11.6563 41.5053 11.7825 41.2148 11.8442 40.8213C11.8311 40.7983 11.8435 40.8095 11.8435 40.8095Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M10.9871 41.3756C10.6902 42.231 11.0977 43.2141 11.4472 43.9993C11.4609 44.034 11.4144 44.0483 11.4007 44.0136C11.0244 43.1707 10.6574 42.2801 10.9871 41.3756C10.9747 41.3645 10.9865 41.3639 10.9871 41.3756Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M12.5912 40.2019C12.715 40.5263 12.8978 40.8475 13.1364 41.1066C13.1612 41.1289 13.1284 41.178 13.1029 41.1439C12.8296 40.8984 12.6574 40.553 12.5558 40.2038C12.5434 40.1926 12.5782 40.1789 12.5912 40.2019Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M15.1309 35.5374C15.2439 34.9993 15.7261 34.5123 16.0956 34.1259C16.6447 33.5644 17.2573 33.0822 17.9326 32.6676C18.5849 32.2661 19.2752 31.9098 20.0059 31.6459C20.8643 31.3397 21.7676 31.2085 22.6672 31.0065C22.7137 30.9922 22.7417 31.0734 22.6952 31.0877C21.1666 31.4654 19.7398 31.7548 18.3519 32.5505C17.7095 32.9161 17.0937 33.3393 16.5296 33.8425C16.0448 34.2823 15.3449 34.8993 15.1911 35.5578C15.1688 35.5826 15.121 35.5734 15.1309 35.5374Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.696 30.9758C20.3112 31.1684 19.0197 31.557 17.8552 32.3289C16.7701 33.0374 15.5765 33.9291 15.1237 35.183C15.1138 35.219 15.0536 35.1986 15.0752 35.162C15.517 33.9205 16.6758 33.0425 17.7367 32.3234C18.9576 31.5012 20.2784 31.2174 21.7071 30.9634C21.6953 30.964 21.7078 30.9752 21.696 30.9758Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M21.9038 33.081C20.3984 33.0082 18.8058 33.2947 17.5919 34.2466C17.5807 34.259 17.5559 34.2367 17.5788 34.2236C18.8374 33.222 20.355 33.0814 21.9038 33.081C21.9156 33.0804 21.915 33.0686 21.9038 33.081Z",
                  fill: n,
                }),
                r.jsx("path", {
                  d: "M19.1208 30.1328C17.9969 30.5597 16.5953 31.3207 16.2113 32.5354C16.2007 32.5596 16.1765 32.5491 16.1753 32.5255C16.5568 31.2636 17.9596 30.5262 19.1195 30.1092C19.1313 30.1086 19.1326 30.1322 19.1208 30.1328Z",
                  fill: n,
                }),
              ],
            }),
          ],
        }),
      });
    if (t === 1)
      return r.jsx("div", {
        "data-value": s,
        style: l,
        children: r.jsxs("svg", {
          width: "60",
          height: "60",
          viewBox: "0 0 60 60",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M59.9998 29.9424C60.0574 46.5258 46.641 59.9422 30.0576 59.9998C13.4742 60.0574 0.0577506 46.641 0.000169397 30.0576C-0.0574118 13.4742 13.359 0.0577659 29.9424 0.000184656C46.5258 -0.0573966 59.9998 13.359 59.9998 29.9424Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M5.00978 27.4089C5.00978 27.4089 3.28234 30.8638 2.4762 35.3551C2.07313 37.6584 2.1883 38.5221 3.91573 40.9981C7.25544 45.7773 8.52223 47.1017 9.67385 46.8714C10.8255 46.6986 16.2381 45.4894 17.8504 45.0863C19.0596 44.7984 19.0596 44.5105 19.5202 42.4376C19.9809 40.3647 20.787 37.428 20.9598 35.8733C21.1325 34.2611 20.9022 34.3186 19.5202 32.5912C18.1383 30.8638 14.7986 26.43 14.1652 25.5663C13.4742 24.7602 13.1287 24.9905 11.574 25.2208C10.0193 25.4511 7.60093 26.0845 6.44931 26.3724C5.2401 26.7179 5.2401 27.0058 5.00978 27.4089Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M7.31298 11.1134C7.31298 11.1134 5.81587 13.0712 4.4915 15.3744C3.80053 16.7564 4.03085 18.7141 4.4915 22.3993C4.95215 26.1421 5.29764 26.1421 6.73717 25.8542C8.11912 25.5663 12.0922 24.7026 13.0711 24.4722C14.1076 24.2419 14.9137 22.4569 15.8926 20.9022C16.8715 19.3475 20.6718 14.3955 21.478 13.5894C22.2265 12.956 21.9962 12.265 21.7659 10.5376C21.5355 8.81015 21.0173 5.18254 20.5567 5.06737C20.096 4.95221 16.4108 4.95221 15.0289 4.83705C13.5893 4.77947 10.1345 7.60095 7.31298 11.1134Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M21.4203 36.046C21.4203 36.046 19.9808 41.8617 19.5202 44.1074C19.2898 45.4318 19.2323 45.7197 21.9386 47.5047C24.6449 49.2897 26.0268 50.3838 26.8906 50.8444C27.7543 51.305 28.5604 51.305 31.0364 50.7292C33.57 50.1534 36.046 49.6352 37.0824 49.1745C38.1189 48.7139 39.6736 45.2014 40.4221 42.8406C41.1707 40.4798 41.7465 38.5796 40.7101 37.7735C39.6736 36.9673 38.4644 35.7005 36.8521 34.5489C35.1823 33.4549 33.8003 31.9578 33.1669 32.2457C32.5335 32.5336 26.0268 34.1458 23.5509 34.8368C22.2841 35.2399 21.4779 35.5278 21.4203 36.046Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M26.4875 59.0786C26.4875 59.0786 27.6967 54.1266 27.8695 52.9174C28.0422 51.7082 28.5029 51.6506 30.2303 51.3627C31.9577 51.0748 36.5066 49.6928 37.3704 49.4049C38.1765 49.117 38.6947 48.9443 40.0767 50.0383C41.4586 51.0748 44.568 53.4356 45.6045 54.1266C46.353 54.6448 42.8406 57.236 38.2341 58.5027C32.8214 59.9423 26.4299 59.8847 26.4875 59.0786Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M22.3993 12.2649C22.3993 12.2649 21.7659 8.69491 21.5356 6.67957C21.3052 4.7218 21.5356 4.95213 24.1267 3.85809C26.6603 2.76404 32.8215 1.38209 34.1459 1.26693C35.4702 1.15177 37.0249 1.55484 40.3646 3.22469C43.7043 4.89455 44.5681 5.47036 44.7408 6.44924C44.9135 7.42812 45.3166 11.977 45.3742 14.05C45.3166 15.4895 44.7984 15.3167 42.38 16.3532C39.8464 17.3897 37.428 18.4261 36.8522 18.7716C36.046 19.1171 34.7217 18.311 32.476 16.8714C30.5182 15.5471 26.4876 13.8196 24.7601 13.3014C23.0327 12.7832 22.572 13.1287 22.3993 12.2649Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M36.3339 20.3839C36.3339 20.3839 35.1247 26.0268 34.4913 28.8483C33.9155 31.6122 34.0882 32.0153 35.7581 33.2821C37.4279 34.5488 39.3281 36.3339 40.307 37.0824C41.3435 37.831 41.9768 38.7523 45.1438 37.831C49.1745 36.6793 50.211 36.3914 51.4777 35.9884C52.7445 35.5853 52.9749 35.0671 53.4355 32.8214C53.8962 30.5757 54.2416 27.1209 54.472 25.2783C54.7023 23.4357 54.3568 23.1478 52.8597 21.6506C51.3626 20.1535 48.5987 17.7927 47.5046 16.6987C46.4106 15.6046 45.662 15.4895 44.3953 16.0077C43.0709 16.4683 39.5584 17.7927 38.2341 18.5413C36.9673 19.2322 36.5066 19.2898 36.3339 20.3839Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M57.9269 22.5145C57.9269 22.5145 55.9691 23.1479 55.3933 23.4358C54.8175 23.7237 54.8751 25.6239 54.6447 27.5816C54.4144 29.5394 53.7234 33.2822 53.2628 34.952C52.9749 35.7582 54.0689 36.3916 54.9902 37.8887C56.4298 40.1919 57.1783 41.4587 57.4662 41.0556C57.7541 40.595 59.827 36.1036 59.7119 28.6757C59.4816 25.2784 58.9057 21.9387 57.9269 22.5145Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M1.61244 38.9826C1.61244 38.9826 1.90035 38.1765 2.13067 38.5795C2.361 38.9826 5.18248 43.6467 7.48573 46.1803C8.29186 46.9864 8.52219 47.1591 8.63735 48.6562C8.75251 50.0958 8.57977 50.4988 7.71605 49.6351C6.90991 48.7714 2.76407 43.5891 1.61244 38.9826Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M36.1036 0.691169C36.1036 0.691169 35.7005 0.576006 35.5278 0.74875C35.355 0.921493 36.3339 1.2094 38.0614 1.95796C39.7888 2.70651 42.4951 4.03088 43.5892 4.83702C44.3377 5.29767 44.6832 5.41283 45.3742 5.12492C46.0652 4.77944 46.2379 4.66427 45.4893 4.2612C44.6832 3.85814 39.7312 1.2094 36.1036 0.691169Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M8.81009 9.90418C8.81009 9.90418 12.2074 6.33414 13.5893 5.58559C14.9713 4.83703 20.2112 5.35526 20.2112 5.35526C20.2112 5.35526 16.526 5.47043 14.7985 5.58559C13.1287 5.58559 8.81009 9.90418 8.81009 9.90418Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M20.2688 38.8098C20.2688 38.8098 19.5202 42.2647 19.0596 43.8194C18.6565 45.3741 17.1594 45.1437 13.359 45.9499C17.3321 44.7407 18.311 44.6255 18.6565 43.5315C19.0596 42.4374 20.2688 38.8098 20.2688 38.8098Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M34.6641 29.7121C34.6641 29.7121 35.9884 22.3417 36.4491 20.6142C36.8522 18.8868 39.9615 17.9079 43.1861 16.6411C43.1861 16.6411 39.5585 18.5413 38.1189 19.4626C36.6794 20.3839 36.7946 21.4779 34.6641 29.7121Z",
              fill: "white",
            }),
          ],
        }),
      });
    if (t === 2)
      return r.jsx("div", {
        "data-value": s,
        style: l,
        children: r.jsxs("svg", {
          width: "58",
          height: "59",
          viewBox: "0 0 58 59",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M57.5 29.5C57.5 45.5243 44.7321 58.5 29 58.5C13.2679 58.5 0.500004 45.5243 0.500004 29.5C0.500004 13.4756 13.2679 0.5 29 0.5C44.7321 0.5 57.5 13.4756 57.5 29.5Z",
              fill: n,
              stroke: n,
            }),
            r.jsx("path", {
              d: "M34.313 0.487603C41.3969 1.80038 47.5585 5.73872 51.8384 11.2524C46.1565 13.2028 18.7799 22.9924 14.7214 32.6319C13.7252 34.9949 13.1349 37.2454 12.9135 39.3833C11.327 39.0458 9.92494 38.6332 8.70738 38.2206C9.74046 20.8919 16.1972 11.74 21.4364 7.12651C25.6056 3.45073 31.3982 1.38779 34.313 0.487603ZM29.1107 42.2339C22.986 42.2339 18.0789 41.7839 14.1679 41.0337C14.1679 43.0966 14.6107 45.2346 15.7914 47.2225C18.6692 52.061 25.2366 54.9491 35.2723 55.7368C37.7074 55.9243 39.8473 56.0369 41.729 56.0744C50.8791 51.5359 57.3359 42.2339 58 31.3566C56.5611 34.9574 50.9898 42.2339 29.1107 42.2339ZM4.57507 36.4202C5.38677 36.8703 6.30916 37.3204 7.37914 37.733C8.5229 20.1418 15.201 10.8023 20.6247 6.03878C25.0522 2.17546 29.3321 0.637635 31.3613 0.112524C30.5865 0.0375079 29.8117 0 29.0369 0C19.8868 0 11.6959 4.31341 6.38296 11.0273C5.09161 14.2155 3.57888 21.3045 4.57507 36.4202ZM53.5356 34.9574C56.3397 32.6319 57.5573 28.3935 57.9262 26.8557C57.4466 21.4921 55.5649 16.5785 52.687 12.4151C48.2964 13.9154 19.8499 23.9301 15.9389 33.1945C15.1641 35.0324 14.4262 37.2829 14.2417 39.6459C18.1158 40.3961 22.986 40.8837 29.1476 40.8837C43.4262 40.8837 50.2888 37.658 53.5356 34.9574ZM3.20993 35.5575C2.5827 24.8303 3.20993 18.2289 4.20611 14.178C1.54962 18.679 3.8147e-06 23.8926 3.8147e-06 29.5188C3.8147e-06 30.6065 0.0737952 31.6567 0.184482 32.7069C0.701022 33.4571 1.62341 34.5073 3.20993 35.5575ZM7.34224 39.1958C6.34606 38.8207 5.46056 38.4456 4.68575 38.0331C4.90713 41.4463 5.1285 44.2219 5.31298 46.5474C7.52672 49.7355 10.3308 52.4361 13.5776 54.499C8.26464 48.2727 7.48983 41.0712 7.34224 39.1958ZM35.1616 57.0496C24.6463 56.2244 17.7468 53.1488 14.6476 47.8976C13.3931 45.7972 12.8028 43.3967 12.8397 40.7336C11.327 40.3961 9.96184 40.0585 8.74428 39.6459C9.00255 42.459 10.4046 50.8608 17.8944 56.7495C21.3257 58.2123 25.0891 59 29.0369 59C32.4682 59 35.7519 58.3999 38.8143 57.2746C37.6705 57.2371 36.4529 57.1621 35.1616 57.0496ZM3.80026 44.1093C3.65268 42.0464 3.4682 39.7584 3.32061 37.2829C2.17685 36.5702 1.25446 35.8951 0.553439 35.22C1.14377 38.4081 2.28754 41.3713 3.80026 44.1093Z",
              fill: "white",
            }),
          ],
        }),
      });
    if (t === 3)
      return r.jsx("div", {
        "data-value": s,
        style: l,
        children: r.jsxs("svg", {
          width: "86",
          height: "37",
          viewBox: "0 0 86 37",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M84.519 33.3202C84.517 33.3262 84.5151 33.332 84.5131 33.3375C79.5742 34.3537 75.437 34.6662 72.0644 34.921C71.3087 34.9781 70.5913 35.0323 69.9119 35.0908C61.1927 35.7958 25.9012 36.308 15.0845 35.284C10.7708 34.8686 6.46052 33.8663 3.65402 31.9412C2.26063 30.9854 1.2638 29.8201 0.798106 28.4083C0.365485 27.0968 0.373116 25.5177 1.02461 23.6097C2.29247 23.9375 4.3239 24.2073 6.89263 24.4347C9.82133 24.6939 13.499 24.9015 17.6484 25.0672C25.9482 25.3987 36.1551 25.5634 46.0725 25.6356C55.9908 25.7079 65.6236 25.6878 72.7765 25.6497C76.353 25.6306 79.3097 25.607 81.3724 25.5882C82.4037 25.5788 83.2116 25.5706 83.7616 25.5647L84.2608 25.5592C84.4434 26.0751 84.581 26.7431 84.674 27.4934C84.7852 28.3905 84.8286 29.3716 84.8208 30.2858C84.8129 31.2014 84.7536 32.0363 84.6636 32.6412C84.6182 32.9467 84.5676 33.1748 84.519 33.3202Z",
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M62.315 9.30586L62.315 9.30588L62.3196 9.30953C65.4208 11.784 68.0705 12.2597 70.1728 11.5351C72.2457 10.8206 73.6312 8.98966 74.3377 7.17301C75.0003 5.46922 76.1074 3.66527 77.3681 2.86101C77.9786 2.47156 78.59 2.3369 79.2077 2.51372C79.8416 2.69518 80.5753 3.23081 81.3585 4.38259C82.9351 6.70116 84.3173 11.0152 85.0115 15.388C85.3571 17.5646 85.5283 19.7326 85.4722 21.6457C85.4199 23.4297 85.1708 24.9527 84.7093 26.0511L50.7799 29.6795L50.7734 29.6797L50.6945 29.6818L50.3861 29.6897C50.1155 29.6967 49.7178 29.7069 49.2094 29.7196C48.1926 29.7452 46.7329 29.7814 44.9613 29.8235C41.418 29.9078 36.6277 30.0162 31.6388 30.1125C21.646 30.3054 10.8988 30.449 7.74495 30.2578C4.568 30.0653 2.91413 29.5204 2.03357 28.5367C1.15417 27.5542 0.92386 26.0007 1.02059 23.389C1.05866 22.3611 1.73919 21.5844 3.06373 20.9663C4.39218 20.3464 6.24607 19.9505 8.35519 19.6504C9.78689 19.4466 11.3036 19.2908 12.8234 19.1346C13.5394 19.061 14.256 18.9874 14.9647 18.9086C17.1588 18.6649 19.2732 18.3723 20.9575 17.8771C24.3348 16.8934 29.8656 13.9036 35.1743 10.837C37.4822 9.5037 39.7507 8.15445 41.8002 6.9354C44.5003 5.3294 46.8204 3.9494 48.3504 3.1297C49.6503 2.44171 50.7759 2.19428 51.8176 2.25518C52.8633 2.31632 53.8693 2.69072 54.9251 3.31881C55.9855 3.94962 57.0738 4.82249 58.286 5.85933C58.6724 6.18982 59.0719 6.53754 59.4861 6.89795C60.3599 7.65833 61.2986 8.4752 62.315 9.30586Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M59.9338 27.5455L42.8486 12.6441C43.9405 11.9376 44.904 11.1668 45.9317 10.2676L63.4023 25.4901C62.2461 26.1966 61.09 26.8389 59.9338 27.5455Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M65.7146 23.9486L47.9228 8.4691C48.8863 7.63411 49.914 6.79912 51.0059 6.09259L68.9903 21.829C67.8984 22.4713 66.8065 23.242 65.7146 23.9486Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M33.6637 16.819L49.0147 30.2431C47.7301 30.3073 45.7389 30.3073 43.3624 30.3716L29.7456 18.4248C31.0945 17.9752 32.3791 17.2686 33.6637 16.819Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M52.6115 29.7935L36.554 15.7913C37.1963 15.5344 37.7744 15.2775 38.4167 15.0206C39.1232 14.7636 39.7655 14.4425 40.4078 14.1213L56.2084 27.8666C54.988 28.3804 53.8319 29.2154 52.6115 29.7935Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M62.0534 23.6274C66.7422 20.2232 71.3668 16.0482 74.1929 10.9098C75.2848 8.91869 76.2482 6.73487 77.7898 5.06489C79.0744 3.5876 80.4232 3.33068 81.7078 3.90875C81.7078 3.97298 81.772 3.97298 81.772 4.03721C85.0478 8.85447 87.36 21.6362 85.0478 26.4535C85.0478 26.4535 68.0268 29.4723 50.7489 30.1146C50.7489 30.1789 58.5207 26.1966 62.0534 23.6274Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M82.2933 6.4227C82.4684 6.63099 82.6774 6.94782 82.9253 7.39934C84.0876 10.2677 84.9728 14.0295 85.329 17.5676C85.5075 19.3404 85.552 21.046 85.4354 22.5459C85.3278 23.9304 85.0849 25.1125 84.7022 26.006C84.6802 26.0098 84.6569 26.0138 84.6322 26.018C84.4154 26.0551 84.0943 26.1094 83.6779 26.178C82.845 26.3151 81.631 26.5094 80.1081 26.7379C77.6301 27.1096 74.3348 27.5715 70.5332 28.0244C76.2676 24.4139 78.6715 17.9469 80.0224 12.9842C80.3172 11.9012 80.5643 10.8796 80.7839 9.97213C80.85 9.69883 80.9136 9.43587 80.9752 9.18471C81.2456 8.0834 81.473 7.2328 81.7082 6.67967C81.8274 6.39942 81.9279 6.24732 81.999 6.17738C82.0041 6.17228 82.0087 6.16805 82.0128 6.16454C82.0545 6.18619 82.1479 6.24974 82.2933 6.4227Z",
              fill: n,
              stroke: "white",
            }),
            r.jsx("path", {
              d: "M58.1353 5.06494C51.9692 9.56104 31.0302 22.3428 27.2407 20.6086C24.2861 19.2598 22.6161 18.1679 21.5884 17.2044C22.8088 16.7548 24.3503 16.1125 25.9561 15.3417C27.1764 16.0483 28.461 16.4979 29.5529 16.241C31.3514 15.7914 47.73 5.51455 53.1896 2.11035C54.8596 2.49573 56.4011 3.58764 58.1353 5.06494Z",
              fill: n,
            }),
            r.jsx("path", {
              d: "M50.9416 6.47804C51.1985 6.99188 52.1619 7.05611 52.9969 6.54227C53.8319 6.09266 54.2815 5.25767 54.0246 4.74383C53.7677 4.22999 52.8042 4.16576 51.9693 4.6796C51.1343 5.12921 50.6847 5.9642 50.9416 6.47804Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M46.1244 9.30409C46.3813 9.7537 47.152 9.81793 47.9228 9.43255C48.6936 9.04717 49.079 8.34064 48.822 7.89103C48.5651 7.44142 47.7943 7.37719 47.0236 7.76257C46.2528 8.14795 45.8675 8.85448 46.1244 9.30409Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M41.564 12.0661C41.8209 12.5157 42.5917 12.5799 43.3625 12.1945C44.1332 11.8091 44.5186 11.1026 44.2617 10.653C44.0048 10.2034 43.234 10.1392 42.4632 10.5245C41.6925 10.9099 41.3071 11.6164 41.564 12.0661Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M36.8109 14.6994C37.0678 15.149 37.8386 15.2133 38.6093 14.8279C39.3801 14.4425 39.7655 13.736 39.5086 13.2864C39.2517 12.8367 38.4809 12.7725 37.7101 13.1579C37.0036 13.6075 36.554 14.2498 36.8109 14.6994Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M31.6084 17.3329C31.8011 17.7825 32.6361 17.9109 33.3426 17.5256C34.1134 17.2044 34.563 16.4979 34.3703 16.0483C34.1776 15.5987 33.3426 15.4702 32.6361 15.8556C31.8653 16.1767 31.4157 16.819 31.6084 17.3329Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M43.812 3.52344C43.2339 3.90882 42.8485 4.10151 43.2339 4.61535L46.06 8.72608C46.4454 9.30415 47.2162 9.43261 47.73 9.04723C48.3081 8.66185 48.4366 7.89109 48.0512 7.37724L45.2251 3.26652C44.9039 2.75268 44.3901 3.20229 43.812 3.52344Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M48.822 0.504581C48.2439 0.889962 47.8586 1.08265 48.2439 1.59649L51.0701 5.70722C51.4554 6.28529 52.2262 6.41375 52.74 6.02837C53.3181 5.64299 53.4466 4.87223 53.0612 4.35839L50.2351 0.247661C49.9139 -0.266179 49.4001 0.119201 48.822 0.504581Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M39.316 6.15682C38.7379 6.47797 38.3525 6.67066 38.7379 7.24873L41.4356 11.4879C41.7567 12.066 42.5275 12.2587 43.1055 11.8733C43.6836 11.5521 43.8763 10.7814 43.4909 10.2033L40.7933 5.96413C40.4721 5.45029 39.894 5.83567 39.316 6.15682Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M34.8841 8.98296C34.3061 9.30411 33.9207 9.4968 34.3061 10.0749L36.6826 14.1214C37.0037 14.6994 37.7745 14.8921 38.3526 14.5067C38.9306 14.1856 39.1233 13.4148 38.7379 12.8368L36.3614 8.79027C35.976 8.21219 35.4622 8.59758 34.8841 8.98296Z",
              fill: "white",
            }),
            r.jsx("path", {
              d: "M29.9383 11.9376C29.3603 12.2587 28.9749 12.4514 29.3603 13.0295L31.5441 16.7548C31.8652 17.3329 32.636 17.5256 33.2141 17.1402C33.7921 16.8191 33.9848 16.0483 33.5995 15.4702L31.4156 11.7449C31.0945 11.2311 30.5164 11.6164 29.9383 11.9376Z",
              fill: "white",
            }),
          ],
        }),
      });
  },
  PC = (e) => {
    const { answer: t, correct: n } = e,
      s = [!1, !1, !1, !1];
    return (
      (s[+t] = !0),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: f3.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Перетащи атрибут выбранного вида спорта в коробку",
            }),
            r.jsxs("div", {
              className: f3.task,
              children: [
                s.map((l, i) =>
                  r.jsx(
                    "div",
                    {
                      className: f3.taskAnswer,
                      children: r.jsx(TC, {
                        index: i,
                        color: n ? "#99CC00" : "#C00000",
                        value: i,
                        style: {
                          position: l ? "absolute" : "static",
                          overflow: l ? "hidden" : "visible",
                          width: l ? "65px" : "auto",
                          height: l ? "18px" : "auto",
                          transform: l
                            ? " translateX(-50%) translateY(-50%)"
                            : "none",
                          top: l ? "30%" : "auto",
                          left: l ? "50%" : "auto",
                        },
                      }),
                    },
                    i
                  )
                ),
                r.jsx("div", {
                  className: f3.cart,
                  children: r.jsxs("svg", {
                    width: "93",
                    height: "69",
                    viewBox: "0 0 93 69",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      r.jsx("path", {
                        d: "M86.9938 3.99925L79.1882 13.431L35.337 9.95075L43.1426 0.518993L86.9938 3.99925Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                      r.jsx("path", {
                        d: "M34.91 61.3474V9.8413L78.9793 13.3389V64.845L34.91 61.3474Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                      r.jsx("path", {
                        d: "M11.1593 64.8053V13.3073L33.9101 9.88099V61.3789L11.1593 64.8053Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                      r.jsx("path", {
                        d: "M24.7019 3.38559L33.8067 9.70838L11.4967 13.0683L2.39185 6.74553L24.7019 3.38559Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                      r.jsx("path", {
                        d: "M55.2285 16.9158V68.4219L11.1593 64.9243V13.4182L55.2285 16.9158Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                      r.jsx("path", {
                        d: "M54.5044 16.8583L44.899 25.2388L1.22406 21.7725L10.8294 13.392L54.5044 16.8583Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                      r.jsx("path", {
                        d: "M78.9793 64.9559L56.2285 68.3822V16.8842L78.9793 13.4579V64.9559Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                      r.jsx("path", {
                        d: "M79.4643 13.3849L90.1933 15.6556L69.2643 18.8075L58.5352 16.5368L79.4643 13.3849Z",
                        fill: n ? "#99CC00" : "#C00000",
                        stroke: "white",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  RC = (e) => {
    const { answer: t } = e,
      n = L.useRef(null),
      s = L.useRef(null),
      l = L.useRef(null),
      i = L.useRef(null);
    return (
      L.useEffect(() => {
        if (t === "1") {
          if (n.current) {
            n.current.style.setProperty("--var-width", "100%");
            const o = n.current.querySelector("input");
            o && o.setAttribute("checked", "true");
          }
          return;
        }
        if (t === "2") {
          if (s.current) {
            s.current.style.setProperty("--var-width", "100%");
            const o = s.current.querySelector("input");
            o && o.setAttribute("checked", "true");
          }
          return;
        }
        if (t === "3") {
          if (l.current) {
            l.current.style.setProperty("--var-width", "100%");
            const o = l.current.querySelector("input");
            o && o.setAttribute("checked", "true");
          }
          return;
        }
        if (i.current) {
          i.current.style.setProperty("--var-width", "100%");
          const o = i.current.querySelector("input");
          o && o.setAttribute("checked", "true");
        }
      }),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: k1.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Подчеркни верный ответ",
            }),
            r.jsxs("form", {
              className: k1.form,
              children: [
                r.jsxs("label", {
                  className: k1.label,
                  id: "1",
                  ref: n,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: k1.input,
                      value: 1,
                    }),
                    r.jsx("span", { children: "Юный инженер" }),
                  ],
                }),
                r.jsxs("label", {
                  className: k1.label,
                  id: "2",
                  ref: s,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: k1.input,
                      value: 2,
                    }),
                    r.jsx("span", { children: "Молодой специалист" }),
                  ],
                }),
                r.jsxs("label", {
                  className: k1.label,
                  id: "3",
                  ref: l,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: k1.input,
                      value: 3,
                    }),
                    r.jsx("span", { children: "Начинающий эксперт" }),
                  ],
                }),
                r.jsxs("label", {
                  className: k1.label,
                  id: "4",
                  ref: i,
                  children: [
                    r.jsx("input", {
                      type: "radio",
                      className: k1.input,
                      value: 4,
                    }),
                    r.jsx("span", { children: "Будущий профессионал" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  OC = (e) => {
    const { answer: t } = e,
      n = t.split(" ").map((d) => d === "true"),
      s = [
        { top: 0, left: 0 },
        { top: 0, left: 0 },
        { top: 0, left: 0 },
        { top: 0, left: 0 },
      ],
      l = L.useRef(null),
      i = L.useRef(null),
      o = L.useRef(null),
      a = L.useRef(null),
      u = L.useRef(null),
      C = L.useRef(null),
      f = L.useRef(null);
    return (
      L.useEffect(() => {
        l.current &&
          ((s[0].top = l.current.offsetTop),
          (s[0].left = l.current.offsetLeft)),
          i.current &&
            ((s[1].top = i.current.offsetTop),
            (s[1].left = i.current.offsetLeft)),
          o.current &&
            ((s[2].top = o.current.offsetTop),
            (s[2].left = o.current.offsetLeft)),
          a.current &&
            ((s[3].top = a.current.offsetTop),
            (s[3].left = a.current.offsetLeft));
        const d = s.filter((c, h) => !!n[h]);
        u.current &&
          ((u.current.style.position = "absolute"),
          (u.current.style.top = d[0].top + 2 + "px"),
          (u.current.style.left = d[0].left + 3 + "px")),
          C.current &&
            ((C.current.style.position = "absolute"),
            (C.current.style.top = d[1].top + 2 + "px"),
            (C.current.style.left = d[1].left + 3 + "px")),
          f.current &&
            ((f.current.style.position = "absolute"),
            (f.current.style.top = d[2].top + 2 + "px"),
            (f.current.style.left = d[2].left + 3 + "px"));
      }),
      r.jsx(r.Fragment, {
        children: r.jsxs("div", {
          className: C1.taskInfo,
          children: [
            r.jsx(e1, {}),
            r.jsx("h4", {
              className: "task__subtitle answer",
              children: "Перетяни кубок к выбранным премиям",
            }),
            r.jsxs("div", {
              className: C1.task,
              children: [
                r.jsxs("div", {
                  className: C1.taskAnswer,
                  children: [
                    r.jsxs("div", {
                      className: C1.taskText,
                      children: [
                        "Лучший работодатель ",
                        r.jsx("span", { children: "Headhunter" }),
                      ],
                    }),
                    r.jsx("div", { className: C1.taskCheck, ref: l }),
                    r.jsxs("div", {
                      className: C1.taskText,
                      children: [
                        "Лучший работодатель ",
                        r.jsx("span", { children: "Forbes" }),
                      ],
                    }),
                    r.jsx("div", { className: C1.taskCheck, ref: i }),
                    r.jsxs("div", {
                      className: C1.taskText,
                      children: [
                        "Лучший работодатель ",
                        r.jsx("span", { children: "FutureToday" }),
                      ],
                    }),
                    r.jsx("div", { className: C1.taskCheck, ref: o }),
                    r.jsxs("div", {
                      className: C1.taskText,
                      children: [
                        "Лучший работодатель ",
                        r.jsx("span", { children: "IMDB" }),
                      ],
                    }),
                    r.jsx("div", { className: C1.taskCheck, ref: a }),
                  ],
                }),
                r.jsxs("div", {
                  className: C1.taskCups,
                  children: [
                    r.jsx("div", {
                      children: r.jsx("img", {
                        src: j4,
                        alt: "cup",
                        className: "taskCup",
                        ref: u,
                      }),
                    }),
                    r.jsx("div", {
                      children: r.jsx("img", {
                        src: j4,
                        alt: "cup",
                        className: "taskCup",
                        ref: C,
                      }),
                    }),
                    r.jsx("div", {
                      children: r.jsx("img", {
                        src: j4,
                        alt: "cup",
                        className: "taskCup",
                        ref: f,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  ws = (e) => {
    const { correct: t } = e,
      n = N2((o) => o.activeQuestion).activeQuestion,
      s = n.join(""),
      l = N2((o) => o.answersReducer).arrAnswers;
    let i = "";
    switch ((n[0] !== 4 && (i = l[n[0]][n[1]].answer), s)) {
      case "00":
        return r.jsx(jC, { correct: t, answer: i });
      case "01":
        return r.jsx(yC, { correct: t, answer: i });
      case "02":
        return r.jsx(gC, { correct: t, answer: i });
      case "03":
        return r.jsx(wC, { correct: t, answer: i });
      case "10":
        return r.jsx(kC, { correct: t, answer: i });
      case "11":
        return r.jsx(MC, { correct: t, answer: i });
      case "12":
        return r.jsx(LC, { correct: t, answer: i });
      case "13":
        return r.jsx(ZC, { correct: t, answer: i });
      case "20":
        return r.jsx(AC, { correct: t, answer: i });
      case "21":
        return r.jsx(SC, { correct: t, answer: i });
      case "22":
        return r.jsx(_C, { correct: t, answer: i });
      case "23":
        return r.jsx(NC, { correct: t, answer: i });
      case "30":
        return r.jsx(EC, { correct: t, answer: i });
      case "31":
        return r.jsx(PC, { correct: t, answer: i });
      case "32":
        return r.jsx(RC, { correct: t, answer: i });
      case "33":
        return r.jsx(OC, { correct: t, answer: i });
      case "44":
        return r.jsx(gs, {});
    }
  },
  ks = [
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
        question: "В каком из перечисленных городов есть офис НИПИГАЗа?",
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
  Ms = (e) => {
    const t = e.check ? "#99CC00" : "#C00000";
    return r.jsx(r.Fragment, {
      children: r.jsxs("svg", {
        width: "26",
        height: "33",
        viewBox: "0 0 26 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          r.jsx("path", {
            d: "M12.9232 2.32848C12.7366 2.32848 12.588 2.1797 12.588 1.99287V0.335605C12.588 0.148773 12.7366 0 12.9232 0C13.1098 0 13.2584 0.148773 13.2584 0.335605V1.99287C13.2584 2.1797 13.1098 2.32848 12.9232 2.32848Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M20.6528 5.53585C20.5664 5.53585 20.48 5.50471 20.4143 5.43897C20.283 5.3075 20.283 5.09645 20.4143 4.96498L21.5857 3.79209C21.717 3.66061 21.9278 3.66061 22.0591 3.79209C22.1904 3.92356 22.1904 4.13461 22.0591 4.26609L20.8877 5.43897C20.8255 5.50471 20.7391 5.53585 20.6528 5.53585Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M4.02208 22.1881C3.9357 22.1881 3.84931 22.157 3.78366 22.0912C3.65235 21.9598 3.65235 21.7487 3.78366 21.6172L4.95503 20.4443C5.08633 20.3129 5.29711 20.3129 5.42842 20.4443C5.55972 20.5758 5.55972 20.7869 5.42842 20.9183L4.25704 22.0912C4.19485 22.1535 4.10846 22.1881 4.02208 22.1881Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M25.511 13.2755H23.8559C23.6693 13.2755 23.5207 13.1267 23.5207 12.9399C23.5207 12.753 23.6693 12.6042 23.8559 12.6042H25.511C25.6976 12.6042 25.8462 12.753 25.8462 12.9399C25.8462 13.1267 25.6941 13.2755 25.511 13.2755Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M1.99029 13.2755H0.335171C0.148581 13.2755 0 13.1267 0 12.9399C0 12.753 0.148581 12.6042 0.335171 12.6042H1.99029C2.17688 12.6042 2.32546 12.753 2.32546 12.9399C2.32546 13.1267 2.17688 13.2755 1.99029 13.2755Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M21.8241 22.1881C21.7377 22.1881 21.6514 22.157 21.5857 22.0912L20.4143 20.9183C20.283 20.7869 20.283 20.5758 20.4143 20.4443C20.5456 20.3129 20.7564 20.3129 20.8877 20.4443L22.0591 21.6172C22.1904 21.7487 22.1904 21.9598 22.0591 22.0912C21.9934 22.1535 21.9105 22.1881 21.8241 22.1881Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M5.19345 5.53585C5.10707 5.53585 5.02068 5.50471 4.95503 5.43897L3.78366 4.26609C3.65235 4.13461 3.65235 3.92356 3.78366 3.79209C3.91496 3.66061 4.12574 3.66061 4.25704 3.79209L5.42842 4.96498C5.55972 5.09645 5.55972 5.3075 5.42842 5.43897C5.36622 5.50471 5.27983 5.53585 5.19345 5.53585Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M17.1456 3.17965C17.1007 3.17965 17.0592 3.17273 17.0177 3.15197C16.8484 3.07931 16.7655 2.8821 16.8381 2.71257L17.4773 1.18332C17.5499 1.01379 17.7468 0.930749 17.9161 1.00341C18.0854 1.07606 18.1684 1.27327 18.0958 1.44281L17.4566 2.97206C17.4013 3.10353 17.2769 3.17965 17.1456 3.17965Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M23.037 9.12719C22.9057 9.12719 22.7813 9.04761 22.726 8.9196C22.6569 8.74661 22.7364 8.55286 22.9092 8.4802L24.4433 7.85051C24.6161 7.78131 24.8096 7.86089 24.8822 8.03388C24.9513 8.20687 24.8718 8.40062 24.699 8.47328L23.1649 9.09951C23.1234 9.11681 23.0819 9.12719 23.037 9.12719Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M1.27504 18.0535C1.14374 18.0535 1.01935 17.974 0.964061 17.8459C0.894954 17.673 0.974427 17.4792 1.1472 17.4065L2.68138 16.7803C2.85415 16.7111 3.04765 16.7907 3.12021 16.9637C3.18932 17.1367 3.10985 17.3304 2.93708 17.4031L1.40289 18.0328C1.36143 18.0466 1.31651 18.0535 1.27504 18.0535Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M24.5331 18.1435C24.4882 18.1435 24.4468 18.1366 24.4053 18.1158L22.878 17.4758C22.7087 17.4031 22.6258 17.2059 22.6983 17.0364C22.7709 16.8668 22.9679 16.7838 23.1372 16.8565L24.6645 17.4965C24.8338 17.5692 24.9167 17.7664 24.8441 17.9359C24.7888 18.064 24.6645 18.1435 24.5331 18.1435Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M2.8404 9.04755C2.79548 9.04755 2.75402 9.04063 2.71255 9.01987L1.18528 8.3798C1.01597 8.30714 0.933037 8.10993 1.0056 7.9404C1.07816 7.77087 1.27512 7.68783 1.44443 7.76049L2.9717 8.40056C3.14102 8.47321 3.22395 8.67043 3.15138 8.83996C3.0961 8.97143 2.9717 9.04755 2.8404 9.04755Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M8.7766 3.14854C8.6453 3.14854 8.5209 3.06896 8.46562 2.94095L7.83674 1.40478C7.76763 1.23178 7.84711 1.03803 8.01988 0.965375C8.19264 0.896178 8.38615 0.975755 8.45871 1.14875L9.08759 2.68492C9.15669 2.85791 9.07722 3.05166 8.90445 3.12432C8.86299 3.13816 8.82152 3.14854 8.7766 3.14854Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M15.8602 28.9174H10.1934C9.87201 28.9174 9.61285 28.6579 9.61285 28.3361C9.61285 28.0143 9.87201 27.7549 10.1934 27.7549H15.8602C16.1815 27.7549 16.4407 28.0143 16.4407 28.3361C16.4407 28.6579 16.1815 28.9174 15.8602 28.9174Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M15.8602 30.7373H10.1934C9.87201 30.7373 9.61285 30.4778 9.61285 30.1561C9.61285 29.8343 9.87201 29.5748 10.1934 29.5748H15.8602C16.1815 29.5748 16.4407 29.8343 16.4407 30.1561C16.4407 30.4778 16.1815 30.7373 15.8602 30.7373Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M11.655 31.4223C11.5133 31.4223 11.4096 31.5503 11.4338 31.6887C11.572 32.4361 12.2251 33 13.0129 33C13.8007 33 14.4538 32.4361 14.592 31.6887C14.6162 31.5503 14.5125 31.4223 14.3709 31.4223H11.655Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M15.2624 27.0283H10.7116C9.92382 27.0283 9.26039 26.4125 9.20165 25.6236C9.00814 23.0564 7.96117 21.4303 6.85545 19.7073C5.64607 17.8286 4.39868 15.8876 4.39868 12.7461C4.39868 8.50429 7.42904 4.93373 11.6031 4.25906C12.5775 4.09991 13.6072 4.11374 14.5782 4.29366C18.6348 5.05136 21.5788 8.60463 21.5788 12.7426C21.5788 15.8841 20.3279 17.8251 19.122 19.7038C18.0128 21.4268 16.9659 23.0529 16.7758 25.6202C16.7136 26.4125 16.0502 27.0283 15.2624 27.0283Z",
            fill: t,
          }),
          r.jsx("path", {
            d: "M8.82503 18.1331C8.65226 18.1331 8.48295 18.0535 8.37238 17.9012C5.26946 13.6318 7.55691 9.62529 7.65712 9.45922C7.81261 9.19281 8.15469 9.10286 8.42075 9.26201C8.68682 9.4177 8.77666 9.76023 8.62117 10.0266C8.53478 10.1754 6.61705 13.5868 9.27769 17.2439C9.46082 17.493 9.40553 17.8424 9.15329 18.0258C9.05309 18.0985 8.93906 18.1331 8.82503 18.1331Z",
            fill: "white",
          }),
        ],
      }),
    });
  };
function IC(e) {
  const { openFirework: t, openTask: n, closePoints: s } = e,
    [l, i] = L.useState(!1),
    [o, a] = L.useState(!1),
    u = T1(),
    C = N2((D) => D.activeQuestion).activeQuestion,
    f = N2((D) => D.arrQuestionsReducer).arrQuestions;
  let d = 0,
    c = "Отличный результат!",
    h = "",
    v = "20px",
    y = "0px",
    P = "0px",
    x = "26px";
  if (C[0] !== 4) {
    d = f[C[0]][C[1]];
    const D = ks[C[0]][C[1]];
    (h = D.question),
      (c = D.answer),
      (v = D.sizeAnswer),
      (y = D.paddingAnswer),
      (P = D.paddingQuestion),
      (x = D.paddingAnswerBtm ? D.paddingAnswerBtm : "26px");
  }
  const [p, m] = L.useState("15px"),
    g = { fontSize: p },
    [S, w] = L.useState(P),
    [M, T] = L.useState("26px"),
    N = { paddingRight: S, paddingBottom: M },
    Z = N2((D) => D.checkAnswerReducer).checkAnswer,
    [k, _] = L.useState("wait"),
    [I, B] = L.useState(!1),
    F = (D) => {
      B(D);
    },
    [Q, X] = L.useState(!1),
    R = () => {
      if (Q) {
        if (
          (G("wait"),
          _("wait"),
          t(!1),
          i(!1),
          m("15px"),
          n(!1),
          f.flat().filter((D) => D === 0).length === 16)
        ) {
          u(ts([4, 4])), m("20px"), i(!0), s(), a(!0), n(!0), t(!0);
          return;
        }
        return;
      }
      I &&
        (_(Z),
        Z === "true" && (t(!0), u($a(d))),
        u(Da(C)),
        B(!1),
        X(!0),
        i(!0),
        m(v),
        w(y),
        T(x));
    },
    V = () => {
      n(!1);
    };
  return r.jsx(r.Fragment, {
    children: r.jsx("div", {
      className:
        "main__task task " +
        (k === "wait" ? "" : k === "true" ? "success" : "danger") +
        (o ? "end" : ""),
      children: r.jsxs("div", {
        className: "task__wrapper",
        children: [
          r.jsx("div", {
            className: k === "wait" ? "task__head" : "task__head-answer",
            children: r.jsxs("div", {
              className: "task__heading",
              style: N,
              children: [
                k === "wait" &&
                  r.jsx("div", {
                    onClick: V,
                    className: "task__close",
                    children: r.jsx("span", {}),
                  }),
                r.jsx("div", {
                  className: "task__points",
                  children:
                    k === "wait"
                      ? (C[1] + 1) * 100
                      : r.jsx(Ms, { check: k === "true" }),
                }),
                r.jsx("h3", {
                  className: "task__title " + (l ? "answer" : ""),
                  style: g,
                  dangerouslySetInnerHTML: l ? { __html: c } : { __html: h },
                }),
              ],
            }),
          }),
          !l && r.jsx(vC, { selectAnswer: F, checkClick: l, active: C }),
          l && r.jsx(ws, { correct: Z === "true" }),
          r.jsx("button", {
            className: "btn task__btn",
            onClick: R,
            children: k === "wait" ? "ГОТОВО" : "ОГО",
          }),
        ],
      }),
    }),
  });
}
function zC() {
  return r.jsx(r.Fragment, {
    children: r.jsxs("div", {
      className: "main__firework active",
      children: [
        r.jsxs("svg", {
          width: "235",
          height: "374",
          viewBox: "0 0 235 374",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M15.3004 302.275L20.9001 302.297L20.8159 324.196L15.2162 324.174L15.3004 302.275Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M51.4064 317.769C53.3714 318.51 55.5618 317.519 56.3027 315.554C57.0436 313.589 56.0527 311.398 54.0878 310.658C52.1228 309.917 49.9324 310.908 49.1915 312.873C48.4506 314.837 49.4414 317.028 51.4064 317.769Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M10.902 283.473L8.51981 280.437C7.89856 280.951 2.33188 284.944 -4.0584 278.366L-6.79035 281.077C0.35922 288.475 7.95987 285.89 10.902 283.473Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M27.0499 292.139L40.1697 285.078L41.9706 288.424L28.8507 295.485L27.0499 292.139Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M20.3769 273.366C22.7162 274.248 25.2932 273.082 26.1752 270.743C27.0573 268.404 25.8915 265.827 23.5523 264.945C21.213 264.063 18.636 265.228 17.754 267.568C16.8719 269.907 18.0377 272.484 20.3769 273.366Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M19.3455 345.543C21.3105 346.284 23.5009 345.293 24.2419 343.328C24.9828 341.363 23.9919 339.173 22.0269 338.432C20.062 337.691 17.8715 338.682 17.1306 340.647C16.3897 342.612 17.3806 344.802 19.3455 345.543Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M36.5806 374.379L34.1984 371.343C33.5771 371.857 28.0105 375.849 21.6202 369.272L18.8882 371.982C26.0378 379.381 33.6385 376.796 36.5806 374.379Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M46.0555 364.272C48.3947 365.154 50.9717 363.988 51.8538 361.649C52.7358 359.309 51.5701 356.732 49.2308 355.85C46.8916 354.968 44.3146 356.134 43.4325 358.473C42.5505 360.813 43.7163 363.39 46.0555 364.272Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M8.81144 234.778L21.9322 227.719L23.7325 231.065L10.6118 238.124L8.81144 234.778Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M63.6906 268.751L63.6905 275.27C65.0833 275.261 76.7397 275.809 78.4437 291.413L84.8938 290.746C83.0411 273.268 70.2098 268.751 63.6906 268.751Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M91.2019 252.238L93.7469 249.416L104.811 259.395L102.266 262.217L91.2019 252.238Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M104.411 217.656L117.528 210.589L119.331 213.934L106.213 221.001L104.411 217.656Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M55.2608 225.067C57.6 225.95 60.177 224.784 61.0591 222.445C61.9411 220.105 60.7753 217.528 58.4361 216.646C56.0969 215.764 53.5199 216.93 52.6378 219.269C51.7911 221.515 52.9216 224.185 55.2608 225.067Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M64.7448 248.949L62.3626 245.914C61.7414 246.428 56.1747 250.42 49.7844 243.843L47.0525 246.553C54.1085 253.916 61.7091 251.331 64.7448 248.949Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M77.4703 111.18C79.8095 112.062 82.3865 110.896 83.2686 108.557C84.1506 106.217 82.9849 103.64 80.6456 102.758C78.3064 101.876 75.7294 103.042 74.8473 105.381C73.8717 107.685 75.1311 110.298 77.4703 111.18Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M65.9467 72.5771L79.0662 65.5125L80.8679 68.8584L67.7484 75.923L65.9467 72.5771Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M120.69 106.529L120.69 113.048C122.083 113.039 133.739 113.587 135.443 129.192L141.894 128.524C140.134 111.082 127.209 106.529 120.69 106.529Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M148.623 100.868L151.168 98.0461L162.232 108.025L159.687 110.847L148.623 100.868Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M139.247 86.0829L152.364 79.0159L154.166 82.3612L141.049 89.4283L139.247 86.0829Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M112.389 62.7875C114.728 63.6695 117.305 62.5037 118.187 60.1645C119.069 57.8253 117.904 55.2483 115.564 54.3662C113.225 53.4842 110.648 54.65 109.766 56.9892C108.884 59.3284 110.05 61.9054 112.389 62.7875Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M121.744 86.7274L119.362 83.6917C118.741 84.2056 113.174 88.1983 106.784 81.6208L104.052 84.3312C111.237 91.6359 118.709 89.1096 121.744 86.7274Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M6.71088 181.984L19.8304 174.919L21.6321 178.265L8.5126 185.33L6.71088 181.984Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M58.8079 23.7744L56.5146 29.8564C57.731 30.3151 68.5252 35.1333 64.4601 50.1657L70.7538 51.8976C75.2085 34.9815 64.8899 26.0677 58.8079 23.7744Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M189.981 112.497L195.581 112.52L195.494 134.42L189.894 134.397L189.981 112.497Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M133.385 244.906C135.35 245.647 137.541 244.657 138.281 242.692C139.022 240.727 138.031 238.536 136.066 237.795C134.102 237.054 131.911 238.045 131.17 240.01C130.336 241.94 131.42 244.166 133.385 244.906Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M194.6 94.7477L192.218 91.712C191.596 92.2258 186.03 96.2186 179.639 89.641L176.907 92.3515C184.092 99.6561 191.658 97.1651 194.6 94.7477Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M212.69 104.042L225.809 96.9766L227.61 100.322L214.492 107.387L212.69 104.042Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M127.816 159.339L127.816 165.858C129.116 165.814 140.865 166.397 142.569 182.002L149.02 181.334C147.167 163.857 134.371 159.246 127.816 159.339Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M164.2 133.977L169.8 133.999L169.713 155.899L164.113 155.877L164.2 133.977Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M144.31 219.447L146.855 216.625L157.92 226.605L155.374 229.427L144.31 219.447Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M165.299 199.256L178.416 192.188L180.218 195.534L167.101 202.601L165.299 199.256Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M15.0328 128.248L15.0327 134.768C16.4255 134.758 28.0818 135.306 29.7858 150.911L36.236 150.244C34.3832 132.766 21.552 128.248 15.0328 128.248Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M42.8921 122.678L45.438 119.857L56.4991 129.84L53.9531 132.661L42.8921 122.678Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M33.5284 107.728L46.6465 100.663L48.4484 104.008L35.3303 111.074L33.5284 107.728Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M16.087 108.447L13.7048 105.411C13.0835 105.925 7.51686 109.918 1.12658 103.34L-1.60538 106.051C5.54419 113.449 13.0513 110.829 16.087 108.447Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M70.5284 183.159L70.5283 189.678C71.9211 189.669 83.5774 190.217 85.2815 205.821L91.7316 205.154C89.9724 187.712 77.0828 183.065 70.5284 183.159Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M98.4365 177.489L100.982 174.668L112.044 184.65L109.498 187.471L98.4365 177.489Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M91.2532 134.971L104.37 127.904L106.173 131.249L93.0555 138.316L91.2532 134.971Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M71.6178 163.264L69.2356 160.228C68.6144 160.742 63.0477 164.735 56.6574 158.157L53.9255 160.868C61.075 168.266 68.5821 165.646 71.6178 163.264Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M78.6226 354.429L78.6225 360.948C80.0154 360.939 91.6717 361.486 93.3757 377.091L99.8259 376.424C98.0667 358.981 85.1418 354.429 78.6226 354.429Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M113.115 351.231L115.66 348.409L126.724 358.388L124.179 361.21L113.115 351.231Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M103.804 336.398L116.921 329.331L118.724 332.676L105.606 339.743L103.804 336.398Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M86.2616 337.003L83.8795 333.967C83.2582 334.481 77.6915 338.474 71.3013 331.896L68.5693 334.607C75.7189 342.005 83.2259 339.385 86.2616 337.003Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M115.715 301.406L115.715 307.925C117.108 307.916 128.764 308.463 130.468 324.068L136.918 323.401C135.159 305.958 122.234 301.406 115.715 301.406Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M148.06 294.743L150.606 291.922L161.667 301.905L159.121 304.726L148.06 294.743Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M138.769 279.89L151.886 272.823L153.688 276.168L140.571 283.235L138.769 279.89Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M121.242 280.512L118.86 277.476C118.239 277.99 112.672 281.983 106.282 275.405L103.55 278.116C110.699 285.514 118.206 282.894 121.242 280.512Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M35.2631 73.4628C39.2865 74.9799 43.7963 72.9398 45.3134 68.9163C46.8305 64.8928 44.7904 60.3831 40.767 58.866C36.7435 57.3489 32.2337 59.3889 30.7166 63.4124C29.1059 67.4006 31.146 71.9104 35.2631 73.4628Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M101.414 164.453C106.841 166.5 112.897 163.76 114.943 158.333C116.99 152.906 114.25 146.85 108.823 144.804C103.396 142.757 97.3402 145.497 95.2939 150.924C93.3411 156.386 96.0807 162.442 101.414 164.453Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M41.5766 206.655C47.0037 208.702 53.0596 205.962 55.106 200.535C57.1523 195.108 54.4128 189.052 48.9857 187.006C43.5587 184.959 37.5027 187.699 35.4564 193.126C33.4101 198.553 36.2432 204.644 41.5766 206.655Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M84.3194 239.551C88.3429 241.068 92.8526 239.028 94.3697 235.004C95.8868 230.981 93.8467 226.471 89.8233 224.954C85.7998 223.437 81.29 225.477 79.7729 229.501C78.2558 233.524 80.2959 238.034 84.3194 239.551Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M39.7451 345.861C43.7686 347.378 48.2783 345.338 49.7954 341.314C51.3125 337.291 49.2725 332.781 45.249 331.264C41.2255 329.747 36.7157 331.787 35.1986 335.811C33.6815 339.834 35.7216 344.344 39.7451 345.861Z",
              fill: "#008C95",
            }),
          ],
        }),
        r.jsxs("svg", {
          width: "411",
          height: "375",
          viewBox: "0 0 411 375",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            r.jsx("path", {
              d: "M375.368 247.631L369.769 247.653L369.858 269.553L375.457 269.53L375.368 247.631Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M353.586 268.608L351.04 265.788L339.979 275.772L342.526 278.593L353.586 268.608Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M339.317 263.238C337.352 263.979 335.162 262.988 334.421 261.023C333.68 259.058 334.671 256.867 336.636 256.126C338.601 255.385 340.791 256.376 341.532 258.341C342.273 260.306 341.282 262.497 339.317 263.238Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M420.193 231.758L417.647 228.937L406.584 238.919L409.13 241.74L420.193 231.758Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M379.822 228.942L382.204 225.906C382.825 226.42 388.392 230.412 394.782 223.835L397.514 226.545C390.364 233.944 382.857 231.324 379.822 228.942Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M363.706 237.628L350.586 230.563L348.785 233.909L361.904 240.974L363.706 237.628Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M370.346 218.835C368.007 219.717 365.43 218.551 364.548 216.212C363.666 213.872 364.832 211.295 367.171 210.413C369.51 209.531 372.087 210.697 372.969 213.036C373.851 215.376 372.686 217.953 370.346 218.835Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M403.638 190.744L401.091 187.923L390.031 197.907L392.577 200.728L403.638 190.744Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M324.328 224.639L318.728 224.66L318.812 246.559L324.412 246.537L324.328 224.639Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M307.423 360.334C305.458 361.075 303.268 360.084 302.527 358.119C301.786 356.154 302.777 353.963 304.742 353.223C306.707 352.482 308.897 353.473 309.638 355.437C310.379 357.402 309.388 359.593 307.423 360.334Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M388.289 328.85L385.743 326.028L374.68 336.01L377.226 338.832L388.289 328.85Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M347.928 326.038L350.31 323.003C350.931 323.516 356.498 327.509 362.888 320.932L365.62 323.642C358.47 331.04 350.87 328.456 347.928 326.038Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M331.793 334.714L318.673 327.649L316.872 330.995L329.991 338.059L331.793 334.714Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M338.452 315.931C336.113 316.813 333.536 315.647 332.654 313.308C331.772 310.969 332.938 308.392 335.277 307.51C337.616 306.628 340.193 307.793 341.075 310.132C341.957 312.472 340.792 315.049 338.452 315.931Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M371.726 287.837L369.179 285.017L358.119 295.001L360.665 297.822L371.726 287.837Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M397.597 313.99L384.478 306.925L382.676 310.271L395.796 317.336L397.597 313.99Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M409.752 269.489L409.752 276.008C408.359 275.999 396.703 276.547 394.999 292.151L388.549 291.484C390.402 274.007 403.233 269.489 409.752 269.489Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M292.42 321.809L286.82 321.831L286.907 343.731L292.507 343.709L292.42 321.809Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M274.414 306.52L276.796 303.484C277.417 303.998 282.984 307.991 289.374 301.413L292.106 304.123C284.957 311.522 277.356 308.937 274.414 306.52Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M258.175 315.127L245.057 308.062L243.255 311.408L256.373 318.473L258.175 315.127Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M264.939 296.413C262.599 297.295 260.022 296.129 259.14 293.79C258.258 291.451 259.424 288.874 261.763 287.991C264.103 287.109 266.68 288.275 267.562 290.614C268.444 292.954 267.278 295.531 264.939 296.413Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M298.239 268.294L295.694 265.472L284.63 275.451L287.175 278.273L298.239 268.294Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M324.081 294.47L310.96 287.408L309.159 290.754L322.279 297.817L324.081 294.47Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M274.723 244.397L269.123 244.419L269.21 266.319L274.81 266.297L274.723 244.397Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M240.53 254.638C238.565 255.378 236.375 254.388 235.634 252.423C234.893 250.458 235.884 248.267 237.849 247.526C239.814 246.785 242.004 247.776 242.745 249.741C243.486 251.706 242.495 253.897 240.53 254.638Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M218.897 302.275L213.297 302.297L213.381 324.196L218.981 324.174L218.897 302.275Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M182.791 317.769C180.826 318.51 178.635 317.519 177.895 315.554C177.154 313.589 178.145 311.398 180.109 310.658C182.074 309.917 184.265 310.908 185.006 312.873C185.747 314.837 184.756 317.028 182.791 317.769Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M223.295 283.473L225.677 280.437C226.299 280.951 231.865 284.944 238.256 278.366L240.988 281.077C233.838 288.475 226.237 285.89 223.295 283.473Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M207.147 292.139L194.028 285.078L192.227 288.424L205.347 295.485L207.147 292.139Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M213.82 273.366C211.481 274.248 208.904 273.082 208.022 270.743C207.14 268.404 208.306 265.827 210.645 264.945C212.984 264.063 215.561 265.228 216.443 267.568C217.325 269.907 216.16 272.484 213.82 273.366Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M272.577 359.205L270.032 356.384L258.968 366.364L261.514 369.186L272.577 359.205Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M249.08 335.259L243.48 335.282L243.567 357.182L249.167 357.16L249.08 335.259Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M214.852 345.543C212.887 346.284 210.696 345.293 209.955 343.328C209.214 341.363 210.205 339.173 212.17 338.432C214.135 337.691 216.326 338.682 217.067 340.647C217.808 342.612 216.817 344.802 214.852 345.543Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M197.617 374.379L199.999 371.343C200.62 371.857 206.187 375.849 212.577 369.272L215.309 371.982C208.159 379.381 200.559 376.796 197.617 374.379Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M188.142 364.272C185.803 365.154 183.226 363.988 182.343 361.649C181.461 359.309 182.627 356.732 184.966 355.85C187.306 354.968 189.883 356.134 190.765 358.473C191.647 360.813 190.481 363.39 188.142 364.272Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M336.29 173.555L330.69 173.579L330.784 195.479L336.384 195.455L336.29 173.555Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M318.553 205.407L316.008 202.585L304.943 212.564L307.489 215.386L318.553 205.407Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M241.45 226.183L243.832 223.148C244.454 223.661 250.02 227.654 256.411 221.077L259.143 223.787C252.087 231.15 244.486 228.565 241.45 226.183Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M225.386 234.778L212.265 227.719L210.465 231.065L223.585 238.124L225.386 234.778Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M291.194 214.089L278.074 207.024L276.273 210.37L289.392 217.435L291.194 214.089Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M170.507 268.751L170.507 275.27C169.114 275.261 157.458 275.809 155.754 291.413L149.303 290.746C151.156 273.268 163.987 268.751 170.507 268.751Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M142.995 252.238L140.45 249.416L129.386 259.395L131.931 262.217L142.995 252.238Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M129.786 217.656L116.669 210.589L114.867 213.934L127.984 221.001L129.786 217.656Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M178.937 225.067C176.597 225.95 174.02 224.784 173.138 222.445C172.256 220.105 173.422 217.528 175.761 216.646C178.1 215.764 180.677 216.93 181.559 219.269C182.406 221.515 181.276 224.185 178.937 225.067Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M169.452 248.949L171.835 245.914C172.456 246.428 178.023 250.42 184.413 243.843L187.145 246.553C180.089 253.916 172.488 251.331 169.452 248.949Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M285.905 188.474L288.287 185.439C288.908 185.953 294.475 189.945 300.865 183.368L303.597 186.078C296.448 193.476 288.847 190.892 285.905 188.474Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M249.175 213.224C246.836 214.107 244.259 212.941 243.377 210.602C242.495 208.262 243.66 205.685 246 204.803C248.339 203.921 250.916 205.087 251.798 207.426C252.774 209.73 251.514 212.342 249.175 213.224Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M156.727 111.18C154.388 112.062 151.811 110.896 150.929 108.557C150.047 106.217 151.212 103.64 153.552 102.758C155.891 101.876 158.468 103.042 159.35 105.381C160.326 107.685 159.066 110.298 156.727 111.18Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M168.25 72.5771L155.131 65.5125L153.329 68.8584L166.449 75.923L168.25 72.5771Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M113.507 106.529L113.507 113.048C112.114 113.039 100.458 113.587 98.7539 129.192L92.3038 128.524C94.063 111.082 106.988 106.529 113.507 106.529Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M85.5739 100.868L83.0289 98.0461L71.9648 108.025L74.5099 110.847L85.5739 100.868Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M94.9507 86.0829L81.8335 79.0159L80.0311 82.3612L93.1484 89.4283L94.9507 86.0829Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M121.808 62.7875C119.469 63.6695 116.892 62.5037 116.01 60.1645C115.128 57.8253 116.294 55.2483 118.633 54.3662C120.972 53.4842 123.549 54.65 124.431 56.9892C125.313 59.3284 124.148 61.9054 121.808 62.7875Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M112.453 86.7274L114.835 83.6917C115.456 84.2056 121.023 88.1983 127.413 81.6208L130.145 84.3312C122.961 91.6359 115.489 89.1096 112.453 86.7274Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M243.544 173.347L245.926 170.312C246.547 170.825 252.114 174.818 258.504 168.241L261.236 170.951C254.18 178.314 246.579 175.729 243.544 173.347Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M227.486 181.984L214.367 174.919L212.565 178.265L225.685 185.33L227.486 181.984Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M251.397 160.447C249.058 161.329 246.481 160.163 245.599 157.824C244.717 155.484 245.883 152.907 248.222 152.025C250.561 151.143 253.138 152.309 254.02 154.648C254.867 156.894 253.736 159.565 251.397 160.447Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M175.389 23.7744L177.683 29.8564C176.466 30.3151 165.672 35.1333 169.737 50.1657L163.443 51.8976C158.989 34.9815 169.307 26.0677 175.389 23.7744Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M44.216 112.497L38.616 112.52L38.7029 134.42L44.303 134.397L44.216 112.497Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M100.812 244.906C98.8472 245.647 96.6568 244.657 95.9159 242.692C95.1749 240.727 96.1658 238.536 98.1308 237.795C100.096 237.054 102.286 238.045 103.027 240.01C103.862 241.94 102.777 244.166 100.812 244.906Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M39.5975 94.7477L41.9797 91.712C42.6009 92.2258 48.1676 96.2186 54.5579 89.641L57.2899 92.3515C50.105 99.6561 42.5396 97.1651 39.5975 94.7477Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M21.5068 104.042L8.38873 96.9766L6.58687 100.322L19.705 107.387L21.5068 104.042Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M106.381 159.339L106.381 165.858C105.082 165.814 93.3318 166.397 91.6278 182.002L85.1776 181.334C87.0304 163.857 99.8264 159.246 106.381 159.339Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M69.9975 133.977L64.3975 133.999L64.4844 155.899L70.0845 155.877L69.9975 133.977Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M89.8869 219.447L87.3418 216.625L76.2778 226.605L78.8228 229.427L89.8869 219.447Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M68.8984 199.256L55.7811 192.188L53.9788 195.534L67.096 202.601L68.8984 199.256Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M219.165 128.248L219.165 134.768C217.772 134.758 206.115 135.306 204.411 150.911L197.961 150.244C199.814 132.766 212.645 128.248 219.165 128.248Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M191.305 122.678L188.759 119.857L177.698 129.84L180.244 132.661L191.305 122.678Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M200.669 107.728L187.551 100.663L185.749 104.008L198.867 111.074L200.669 107.728Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M218.11 108.447L220.492 105.411C221.114 105.925 226.68 109.918 233.071 103.34L235.803 106.051C228.653 113.449 221.146 110.829 218.11 108.447Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M163.669 183.159L163.669 189.678C162.276 189.669 150.62 190.217 148.916 205.821L142.466 205.154C144.225 187.712 157.114 183.065 163.669 183.159Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M135.761 177.489L133.215 174.668L122.154 184.65L124.699 187.471L135.761 177.489Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M142.944 134.971L129.827 127.904L128.025 131.249L141.142 138.316L142.944 134.971Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M162.579 163.264L164.962 160.228C165.583 160.742 171.15 164.735 177.54 158.157L180.272 160.868C173.122 168.266 165.615 165.646 162.579 163.264Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M155.575 354.429L155.575 360.948C154.182 360.939 142.526 361.486 140.822 377.091L134.371 376.424C136.131 358.981 149.055 354.429 155.575 354.429Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M121.082 351.231L118.537 348.409L107.473 358.388L110.018 361.21L121.082 351.231Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M130.393 336.398L117.276 329.331L115.474 332.676L128.591 339.743L130.393 336.398Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M147.936 337.003L150.318 333.967C150.939 334.481 156.506 338.474 162.896 331.896L165.628 334.607C158.478 342.005 150.971 339.385 147.936 337.003Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M118.482 301.406L118.482 307.925C117.089 307.916 105.433 308.463 103.729 324.068L97.2789 323.401C99.0381 305.958 111.963 301.406 118.482 301.406Z",
              fill: "#99CC00",
            }),
            r.jsx("path", {
              d: "M86.1373 294.743L83.5913 291.922L72.5302 301.905L75.0762 304.726L86.1373 294.743Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M95.4285 279.89L82.3112 272.823L80.5089 276.168L93.6261 283.235L95.4285 279.89Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M112.955 280.512L115.337 277.476C115.959 277.99 121.525 281.983 127.916 275.405L130.648 278.116C123.498 285.514 115.991 282.894 112.955 280.512Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M198.934 73.4628C194.911 74.9799 190.401 72.9398 188.884 68.9163C187.367 64.8928 189.407 60.3831 193.43 58.866C197.454 57.3489 201.964 59.3889 203.481 63.4124C205.091 67.4006 203.051 71.9104 198.934 73.4628Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M132.783 164.453C127.356 166.5 121.3 163.76 119.254 158.333C117.208 152.906 119.947 146.85 125.374 144.804C130.801 142.757 136.857 145.497 138.903 150.924C140.856 156.386 138.117 162.442 132.783 164.453Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M192.621 206.655C187.194 208.702 181.138 205.962 179.091 200.535C177.045 195.108 179.785 189.052 185.212 187.006C190.639 184.959 196.695 187.699 198.741 193.126C200.787 198.553 197.954 204.644 192.621 206.655Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M149.878 239.551C145.854 241.068 141.345 239.028 139.828 235.004C138.31 230.981 140.351 226.471 144.374 224.954C148.397 223.437 152.907 225.477 154.424 229.501C155.941 233.524 153.901 238.034 149.878 239.551Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M300.481 249.239C296.457 250.756 291.948 248.716 290.43 244.693C288.913 240.669 290.953 236.159 294.977 234.642C299 233.125 303.51 235.165 305.027 239.189C306.638 243.177 304.598 247.687 300.481 249.239Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M194.452 345.861C190.429 347.378 185.919 345.338 184.402 341.314C182.885 337.291 184.925 332.781 188.948 331.264C192.972 329.747 197.481 331.787 198.999 335.811C200.516 339.834 198.476 344.344 194.452 345.861Z",
              fill: "#008C95",
            }),
            r.jsx("path", {
              d: "M367.866 199.785C362.439 201.831 356.383 199.092 354.337 193.665C352.29 188.238 355.03 182.182 360.457 180.135C365.884 178.089 371.94 180.828 373.986 186.255C376.032 191.682 373.293 197.738 367.866 199.785Z",
              fill: "#008C95",
            }),
          ],
        }),
      ],
    }),
  });
}
function DC(e) {
  const { openAnswer: t } = e,
    n = N2((h) => h.activeQuestion).activeQuestion,
    s = N2((h) => h.answersReducer).arrAnswers,
    { correct: l } = s[n[0]][n[1]],
    i = ks[n[0]][n[1]],
    o = i.answer,
    a = i.sizeAnswer,
    u = i.paddingAnswer,
    C = i.paddingAnswerBtm ? i.paddingAnswerBtm : "26px",
    f = { fontSize: a },
    d = { paddingRight: u, paddingBottom: C },
    c = () => {
      t(!1);
    };
  return r.jsx(r.Fragment, {
    children: r.jsx("div", {
      className: "main__task task " + (l ? "success" : "danger"),
      children: r.jsxs("div", {
        className: "task__wrapper",
        children: [
          r.jsx("div", {
            className: "task__head-answer",
            children: r.jsxs("div", {
              className: "task__heading",
              style: d,
              children: [
                r.jsx("div", {
                  className: "task__points",
                  children: r.jsx(Ms, { check: l }),
                }),
                r.jsx("h3", {
                  className: "task__title answer",
                  style: f,
                  dangerouslySetInnerHTML: { __html: o },
                }),
              ],
            }),
          }),
          r.jsx(ws, { correct: l }),
          r.jsx("button", {
            className: "btn task__btn",
            onClick: c,
            children: "ОГО",
          }),
        ],
      }),
    }),
  });
}
function FC() {
  const [e, t] = L.useState(!1),
    [n, s] = L.useState(!1),
    [l, i] = L.useState(!1),
    o = () => {
      i(!0);
    },
    a = (c) => {
      t(c);
    },
    u = (c) => {
      s(c);
    },
    [C, f] = L.useState(!1),
    d = (c) => {
      f(c);
    };
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(Yo, {}),
      r.jsxs("main", {
        className: "main",
        children: [
          r.jsx(Ga, { openTask: a, openAnswer: d }),
          r.jsx(qa, { tasksEnd: l }),
          C && r.jsx(DC, { openAnswer: d }),
          e && r.jsx(IC, { openFirework: u, openTask: a, closePoints: o }),
          n && r.jsx(zC, {}),
          r.jsx("div", { className: "blur " + (e || C ? "active" : "") }),
        ],
      }),
    ],
  });
}
const UC = Xa();
de.createRoot(document.getElementById("root")).render(
  r.jsx($2.StrictMode, {
    children: r.jsx($o, { store: UC, children: r.jsx(FC, {}) }),
  })
);
