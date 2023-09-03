(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
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
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function o0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var rf = { exports: {} },
  Ti = {},
  lf = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pl = Symbol.for("react.element"),
  s0 = Symbol.for("react.portal"),
  u0 = Symbol.for("react.fragment"),
  a0 = Symbol.for("react.strict_mode"),
  c0 = Symbol.for("react.profiler"),
  f0 = Symbol.for("react.provider"),
  d0 = Symbol.for("react.context"),
  p0 = Symbol.for("react.forward_ref"),
  h0 = Symbol.for("react.suspense"),
  v0 = Symbol.for("react.memo"),
  m0 = Symbol.for("react.lazy"),
  wa = Symbol.iterator;
function y0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wa && e[wa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var of = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sf = Object.assign,
  uf = {};
function Cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uf),
    (this.updater = n || of);
}
Cr.prototype.isReactComponent = {};
Cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function af() {}
af.prototype = Cr.prototype;
function lu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uf),
    (this.updater = n || of);
}
var iu = (lu.prototype = new af());
iu.constructor = lu;
sf(iu, Cr.prototype);
iu.isPureReactComponent = !0;
var ka = Array.isArray,
  cf = Object.prototype.hasOwnProperty,
  ou = { current: null },
  ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      cf.call(t, r) && !ff.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: pl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ou.current,
  };
}
function g0(e, t) {
  return {
    $$typeof: pl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pl;
}
function C0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sa = /\/+/g;
function Co(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? C0("" + e.key)
    : t.toString(36);
}
function Vl(e, t, n, r, l) {
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
          case pl:
          case s0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Co(o, 0) : r),
      ka(l)
        ? ((n = ""),
          e != null && (n = e.replace(Sa, "$&/") + "/"),
          Vl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (su(l) &&
            (l = g0(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Sa, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ka(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + Co(i, u);
      o += Vl(i, t, n, a, l);
    }
  else if (((a = y0(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Co(i, u++)), (o += Vl(i, t, n, a, l));
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
function wl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Vl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function x0(e) {
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
var De = { current: null },
  Ul = { transition: null },
  w0 = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Ul,
    ReactCurrentOwner: ou,
  };
W.Children = {
  map: wl,
  forEach: function (e, t, n) {
    wl(
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
      wl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!su(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = Cr;
W.Fragment = u0;
W.Profiler = c0;
W.PureComponent = lu;
W.StrictMode = a0;
W.Suspense = h0;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w0;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = sf({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = ou.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      cf.call(t, a) &&
        !ff.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: pl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: d0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: f0, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = df;
W.createFactory = function (e) {
  var t = df.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: p0, render: e };
};
W.isValidElement = su;
W.lazy = function (e) {
  return { $$typeof: m0, _payload: { _status: -1, _result: e }, _init: x0 };
};
W.memo = function (e, t) {
  return { $$typeof: v0, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Ul.transition;
  Ul.transition = {};
  try {
    e();
  } finally {
    Ul.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
W.useContext = function (e) {
  return De.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
W.useId = function () {
  return De.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return De.current.useRef(e);
};
W.useState = function (e) {
  return De.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return De.current.useTransition();
};
W.version = "18.2.0";
lf.exports = W;
var I = lf.exports;
const Tt = o0(I);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k0 = I,
  S0 = Symbol.for("react.element"),
  _0 = Symbol.for("react.fragment"),
  j0 = Object.prototype.hasOwnProperty,
  L0 = k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  E0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function pf(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) j0.call(t, r) && !E0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: S0,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: L0.current,
  };
}
Ti.Fragment = _0;
Ti.jsx = pf;
Ti.jsxs = pf;
rf.exports = Ti;
var s = rf.exports,
  is = {},
  hf = { exports: {} },
  Je = {},
  vf = { exports: {} },
  mf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, O) {
    var V = N.length;
    N.push(O);
    e: for (; 0 < V; ) {
      var te = (V - 1) >>> 1,
        ce = N[te];
      if (0 < l(ce, O)) (N[te] = O), (N[V] = ce), (V = te);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      V = N.pop();
    if (V !== O) {
      N[0] = V;
      e: for (var te = 0, ce = N.length, Dn = ce >>> 1; te < Dn; ) {
        var Ct = 2 * (te + 1) - 1,
          Sr = N[Ct],
          at = Ct + 1,
          Zt = N[at];
        if (0 > l(Sr, V))
          at < ce && 0 > l(Zt, Sr)
            ? ((N[te] = Zt), (N[at] = V), (te = at))
            : ((N[te] = Sr), (N[Ct] = V), (te = Ct));
        else if (at < ce && 0 > l(Zt, V)) (N[te] = Zt), (N[at] = V), (te = at);
        else break e;
      }
    }
    return O;
  }
  function l(N, O) {
    var V = N.sortIndex - O.sortIndex;
    return V !== 0 ? V : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
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
    m = 1,
    d = null,
    p = 3,
    g = !1,
    C = !1,
    x = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= N)
        r(c), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(c);
    }
  }
  function w(N) {
    if (((x = !1), v(N), !C))
      if (n(a) !== null) (C = !0), xe(_);
      else {
        var O = n(c);
        O !== null && Pe(w, O.startTime - N);
      }
  }
  function _(N, O) {
    (C = !1), x && ((x = !1), h(z), (z = -1)), (g = !0);
    var V = p;
    try {
      for (
        v(O), d = n(a);
        d !== null && (!(d.expirationTime > O) || (N && !K()));

      ) {
        var te = d.callback;
        if (typeof te == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var ce = te(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof ce == "function" ? (d.callback = ce) : d === n(a) && r(a),
            v(O);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Dn = !0;
      else {
        var Ct = n(c);
        Ct !== null && Pe(w, Ct.startTime - O), (Dn = !1);
      }
      return Dn;
    } finally {
      (d = null), (p = V), (g = !1);
    }
  }
  var P = !1,
    M = null,
    z = -1,
    Z = 5,
    R = -1;
  function K() {
    return !(e.unstable_now() - R < Z);
  }
  function B() {
    if (M !== null) {
      var N = e.unstable_now();
      R = N;
      var O = !0;
      try {
        O = M(!0, N);
      } finally {
        O ? U() : ((P = !1), (M = null));
      }
    } else P = !1;
  }
  var U;
  if (typeof f == "function")
    U = function () {
      f(B);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      Ce = q.port2;
    (q.port1.onmessage = B),
      (U = function () {
        Ce.postMessage(null);
      });
  } else
    U = function () {
      E(B, 0);
    };
  function xe(N) {
    (M = N), P || ((P = !0), U());
  }
  function Pe(N, O) {
    z = E(function () {
      N(e.unstable_now());
    }, O);
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
      C || g || ((C = !0), xe(_));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Z = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = p;
      }
      var V = p;
      p = O;
      try {
        return N();
      } finally {
        p = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, O) {
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
      var V = p;
      p = N;
      try {
        return O();
      } finally {
        p = V;
      }
    }),
    (e.unstable_scheduleCallback = function (N, O, V) {
      var te = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? te + V : te))
          : (V = te),
        N)
      ) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return (
        (ce = V + ce),
        (N = {
          id: m++,
          callback: O,
          priorityLevel: N,
          startTime: V,
          expirationTime: ce,
          sortIndex: -1,
        }),
        V > te
          ? ((N.sortIndex = V),
            t(c, N),
            n(a) === null &&
              N === n(c) &&
              (x ? (h(z), (z = -1)) : (x = !0), Pe(w, V - te)))
          : ((N.sortIndex = ce), t(a, N), C || g || ((C = !0), xe(_))),
        N
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (N) {
      var O = p;
      return function () {
        var V = p;
        p = O;
        try {
          return N.apply(this, arguments);
        } finally {
          p = V;
        }
      };
    });
})(mf);
vf.exports = mf;
var N0 = vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yf = I,
  Xe = N0;
function j(e) {
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
var gf = new Set(),
  Kr = {};
function Rn(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) gf.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  os = Object.prototype.hasOwnProperty,
  P0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _a = {},
  ja = {};
function M0(e) {
  return os.call(ja, e)
    ? !0
    : os.call(_a, e)
    ? !1
    : P0.test(e)
    ? (ja[e] = !0)
    : ((_a[e] = !0), !1);
}
function A0(e, t, n, r) {
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
function T0(e, t, n, r) {
  if (t === null || typeof t > "u" || A0(e, t, n, r)) return !0;
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
function Ie(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uu = /[\-:]([a-z])/g;
function au(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uu, au);
    Ne[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uu, au);
    Ne[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(uu, au);
  Ne[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (T0(t, n, l, r) && (n = null),
    r || l === null
      ? M0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ut = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kl = Symbol.for("react.element"),
  Zn = Symbol.for("react.portal"),
  Bn = Symbol.for("react.fragment"),
  fu = Symbol.for("react.strict_mode"),
  ss = Symbol.for("react.profiler"),
  Cf = Symbol.for("react.provider"),
  xf = Symbol.for("react.context"),
  du = Symbol.for("react.forward_ref"),
  us = Symbol.for("react.suspense"),
  as = Symbol.for("react.suspense_list"),
  pu = Symbol.for("react.memo"),
  Qt = Symbol.for("react.lazy"),
  wf = Symbol.for("react.offscreen"),
  La = Symbol.iterator;
function _r(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (La && e[La]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  xo;
function Or(e) {
  if (xo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xo = (t && t[1]) || "";
    }
  return (
    `
` +
    xo +
    e
  );
}
var wo = !1;
function ko(e, t) {
  if (!e || wo) return "";
  wo = !0;
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
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
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
    (wo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Or(e) : "";
}
function O0(e) {
  switch (e.tag) {
    case 5:
      return Or(e.type);
    case 16:
      return Or("Lazy");
    case 13:
      return Or("Suspense");
    case 19:
      return Or("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ko(e.type, !1)), e;
    case 11:
      return (e = ko(e.type.render, !1)), e;
    case 1:
      return (e = ko(e.type, !0)), e;
    default:
      return "";
  }
}
function cs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case Zn:
      return "Portal";
    case ss:
      return "Profiler";
    case fu:
      return "StrictMode";
    case us:
      return "Suspense";
    case as:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case xf:
        return (e.displayName || "Context") + ".Consumer";
      case Cf:
        return (e._context.displayName || "Context") + ".Provider";
      case du:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pu:
        return (
          (t = e.displayName || null), t !== null ? t : cs(e.type) || "Memo"
        );
      case Qt:
        (t = e._payload), (e = e._init);
        try {
          return cs(e(t));
        } catch {}
    }
  return null;
}
function z0(e) {
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
      return cs(t);
    case 8:
      return t === fu ? "StrictMode" : "Mode";
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
function cn(e) {
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
function kf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $0(e) {
  var t = kf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
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
          (r = "" + o), i.call(this, o);
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
function Sl(e) {
  e._valueTracker || (e._valueTracker = $0(e));
}
function Sf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = kf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fs(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ea(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _f(e, t) {
  (t = t.checked), t != null && cu(e, "checked", t, !1);
}
function ds(e, t) {
  _f(e, t);
  var n = cn(t.value),
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
    ? ps(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ps(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Na(e, t, n) {
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
function ps(e, t, n) {
  (t !== "number" || bl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function hs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function jf(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _l,
  Ef = (function (e) {
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
        _l = _l || document.createElement("div"),
          _l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _l.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
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
  R0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  R0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function Nf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Pf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Nf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var F0 = se(
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
function ms(e, t) {
  if (t) {
    if (F0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function ys(e, t) {
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
var gs = null;
function hu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Cs = null,
  nr = null,
  rr = null;
function Aa(e) {
  if ((e = ml(e))) {
    if (typeof Cs != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Fi(t)), Cs(e.stateNode, e.type, t));
  }
}
function Mf(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function Af() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), Aa(e), t)) for (e = 0; e < t.length; e++) Aa(t[e]);
  }
}
function Tf(e, t) {
  return e(t);
}
function Of() {}
var So = !1;
function zf(e, t, n) {
  if (So) return e(t, n);
  So = !0;
  try {
    return Tf(e, t, n);
  } finally {
    (So = !1), (nr !== null || rr !== null) && (Of(), Af());
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fi(n);
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var xs = !1;
if (Rt)
  try {
    var jr = {};
    Object.defineProperty(jr, "passive", {
      get: function () {
        xs = !0;
      },
    }),
      window.addEventListener("test", jr, jr),
      window.removeEventListener("test", jr, jr);
  } catch {
    xs = !1;
  }
function D0(e, t, n, r, l, i, o, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Ir = !1,
  ei = null,
  ti = !1,
  ws = null,
  I0 = {
    onError: function (e) {
      (Ir = !0), (ei = e);
    },
  };
function V0(e, t, n, r, l, i, o, u, a) {
  (Ir = !1), (ei = null), D0.apply(I0, arguments);
}
function U0(e, t, n, r, l, i, o, u, a) {
  if ((V0.apply(this, arguments), Ir)) {
    if (Ir) {
      var c = ei;
      (Ir = !1), (ei = null);
    } else throw Error(j(198));
    ti || ((ti = !0), (ws = c));
  }
}
function Fn(e) {
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
function $f(e) {
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
function Ta(e) {
  if (Fn(e) !== e) throw Error(j(188));
}
function Z0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ta(l), e;
        if (i === r) return Ta(l), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Rf(e) {
  return (e = Z0(e)), e !== null ? Ff(e) : null;
}
function Ff(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ff(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Df = Xe.unstable_scheduleCallback,
  Oa = Xe.unstable_cancelCallback,
  B0 = Xe.unstable_shouldYield,
  W0 = Xe.unstable_requestPaint,
  de = Xe.unstable_now,
  Q0 = Xe.unstable_getCurrentPriorityLevel,
  vu = Xe.unstable_ImmediatePriority,
  If = Xe.unstable_UserBlockingPriority,
  ni = Xe.unstable_NormalPriority,
  H0 = Xe.unstable_LowPriority,
  Vf = Xe.unstable_IdlePriority,
  Oi = null,
  Lt = null;
function K0(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function")
    try {
      Lt.onCommitFiberRoot(Oi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : X0,
  G0 = Math.log,
  Y0 = Math.LN2;
function X0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((G0(e) / Y0) | 0)) | 0;
}
var jl = 64,
  Ll = 4194304;
function $r(e) {
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
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = $r(u)) : ((i &= o), i !== 0 && (r = $r(i)));
  } else (o = n & ~l), o !== 0 ? (r = $r(o)) : i !== 0 && (r = $r(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function q0(e, t) {
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
function J0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - mt(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = q0(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function ks(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Uf() {
  var e = jl;
  return (jl <<= 1), !(jl & 4194240) && (jl = 64), e;
}
function _o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function b0(e, t) {
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
    var l = 31 - mt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function mu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var G = 0;
function Zf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Bf,
  yu,
  Wf,
  Qf,
  Hf,
  Ss = !1,
  El = [],
  bt = null,
  en = null,
  tn = null,
  Xr = new Map(),
  qr = new Map(),
  Kt = [],
  e2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function za(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qr.delete(t.pointerId);
  }
}
function Lr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ml(t)), t !== null && yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function t2(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (bt = Lr(bt, e, t, n, r, l)), !0;
    case "dragenter":
      return (en = Lr(en, e, t, n, r, l)), !0;
    case "mouseover":
      return (tn = Lr(tn, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Xr.set(i, Lr(Xr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), qr.set(i, Lr(qr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Kf(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $f(n)), t !== null)) {
          (e.blockedOn = t),
            Hf(e.priority, function () {
              Wf(n);
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
function Zl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _s(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (gs = r), n.target.dispatchEvent(r), (gs = null);
    } else return (t = ml(n)), t !== null && yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $a(e, t, n) {
  Zl(e) && n.delete(t);
}
function n2() {
  (Ss = !1),
    bt !== null && Zl(bt) && (bt = null),
    en !== null && Zl(en) && (en = null),
    tn !== null && Zl(tn) && (tn = null),
    Xr.forEach($a),
    qr.forEach($a);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ss ||
      ((Ss = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, n2)));
}
function Jr(e) {
  function t(l) {
    return Er(l, e);
  }
  if (0 < El.length) {
    Er(El[0], e);
    for (var n = 1; n < El.length; n++) {
      var r = El[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bt !== null && Er(bt, e),
      en !== null && Er(en, e),
      tn !== null && Er(tn, e),
      Xr.forEach(t),
      qr.forEach(t),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    Kf(n), n.blockedOn === null && Kt.shift();
}
var lr = Ut.ReactCurrentBatchConfig,
  li = !0;
function r2(e, t, n, r) {
  var l = G,
    i = lr.transition;
  lr.transition = null;
  try {
    (G = 1), gu(e, t, n, r);
  } finally {
    (G = l), (lr.transition = i);
  }
}
function l2(e, t, n, r) {
  var l = G,
    i = lr.transition;
  lr.transition = null;
  try {
    (G = 4), gu(e, t, n, r);
  } finally {
    (G = l), (lr.transition = i);
  }
}
function gu(e, t, n, r) {
  if (li) {
    var l = _s(e, t, n, r);
    if (l === null) zo(e, t, r, ii, n), za(e, r);
    else if (t2(l, e, t, n, r)) r.stopPropagation();
    else if ((za(e, r), t & 4 && -1 < e2.indexOf(e))) {
      for (; l !== null; ) {
        var i = ml(l);
        if (
          (i !== null && Bf(i),
          (i = _s(e, t, n, r)),
          i === null && zo(e, t, r, ii, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else zo(e, t, r, null, n);
  }
}
var ii = null;
function _s(e, t, n, r) {
  if (((ii = null), (e = hu(r)), (e = Sn(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $f(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ii = e), null;
}
function Gf(e) {
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
      switch (Q0()) {
        case vu:
          return 1;
        case If:
          return 4;
        case ni:
        case H0:
          return 16;
        case Vf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Cu = null,
  Bl = null;
function Yf() {
  if (Bl) return Bl;
  var e,
    t = Cu,
    n = t.length,
    r,
    l = "value" in Xt ? Xt.value : Xt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Bl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Wl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nl() {
  return !0;
}
function Ra() {
  return !1;
}
function be(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Nl
        : Ra),
      (this.isPropagationStopped = Ra),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nl));
      },
      persist: function () {},
      isPersistent: Nl,
    }),
    t
  );
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xu = be(xr),
  vl = se({}, xr, { view: 0, detail: 0 }),
  i2 = be(vl),
  jo,
  Lo,
  Nr,
  zi = se({}, vl, {
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
    getModifierState: wu,
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
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((jo = e.screenX - Nr.screenX), (Lo = e.screenY - Nr.screenY))
              : (Lo = jo = 0),
            (Nr = e)),
          jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Lo;
    },
  }),
  Fa = be(zi),
  o2 = se({}, zi, { dataTransfer: 0 }),
  s2 = be(o2),
  u2 = se({}, vl, { relatedTarget: 0 }),
  Eo = be(u2),
  a2 = se({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c2 = be(a2),
  f2 = se({}, xr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  d2 = be(f2),
  p2 = se({}, xr, { data: 0 }),
  Da = be(p2),
  h2 = {
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
  v2 = {
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
  m2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function y2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = m2[e]) ? !!t[e] : !1;
}
function wu() {
  return y2;
}
var g2 = se({}, vl, {
    key: function (e) {
      if (e.key) {
        var t = h2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? v2[e.keyCode] || "Unidentified"
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
    getModifierState: wu,
    charCode: function (e) {
      return e.type === "keypress" ? Wl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  C2 = be(g2),
  x2 = se({}, zi, {
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
  Ia = be(x2),
  w2 = se({}, vl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wu,
  }),
  k2 = be(w2),
  S2 = se({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _2 = be(S2),
  j2 = se({}, zi, {
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
  L2 = be(j2),
  E2 = [9, 13, 27, 32],
  ku = Rt && "CompositionEvent" in window,
  Vr = null;
Rt && "documentMode" in document && (Vr = document.documentMode);
var N2 = Rt && "TextEvent" in window && !Vr,
  Xf = Rt && (!ku || (Vr && 8 < Vr && 11 >= Vr)),
  Va = String.fromCharCode(32),
  Ua = !1;
function qf(e, t) {
  switch (e) {
    case "keyup":
      return E2.indexOf(t.keyCode) !== -1;
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
function Jf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function P2(e, t) {
  switch (e) {
    case "compositionend":
      return Jf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ua = !0), Va);
    case "textInput":
      return (e = t.data), e === Va && Ua ? null : e;
    default:
      return null;
  }
}
function M2(e, t) {
  if (Wn)
    return e === "compositionend" || (!ku && qf(e, t))
      ? ((e = Yf()), (Bl = Cu = Xt = null), (Wn = !1), e)
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
      return Xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var A2 = {
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
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!A2[e.type] : t === "textarea";
}
function bf(e, t, n, r) {
  Mf(r),
    (t = oi(t, "onChange")),
    0 < t.length &&
      ((n = new xu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ur = null,
  br = null;
function T2(e) {
  c1(e, 0);
}
function $i(e) {
  var t = Kn(e);
  if (Sf(t)) return e;
}
function O2(e, t) {
  if (e === "change") return t;
}
var e1 = !1;
if (Rt) {
  var No;
  if (Rt) {
    var Po = "oninput" in document;
    if (!Po) {
      var Ba = document.createElement("div");
      Ba.setAttribute("oninput", "return;"),
        (Po = typeof Ba.oninput == "function");
    }
    No = Po;
  } else No = !1;
  e1 = No && (!document.documentMode || 9 < document.documentMode);
}
function Wa() {
  Ur && (Ur.detachEvent("onpropertychange", t1), (br = Ur = null));
}
function t1(e) {
  if (e.propertyName === "value" && $i(br)) {
    var t = [];
    bf(t, br, e, hu(e)), zf(T2, t);
  }
}
function z2(e, t, n) {
  e === "focusin"
    ? (Wa(), (Ur = t), (br = n), Ur.attachEvent("onpropertychange", t1))
    : e === "focusout" && Wa();
}
function $2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $i(br);
}
function R2(e, t) {
  if (e === "click") return $i(t);
}
function F2(e, t) {
  if (e === "input" || e === "change") return $i(t);
}
function D2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == "function" ? Object.is : D2;
function el(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!os.call(t, l) || !gt(e[l], t[l])) return !1;
  }
  return !0;
}
function Qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ha(e, t) {
  var n = Qa(e);
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
    n = Qa(n);
  }
}
function n1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? n1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function r1() {
  for (var e = window, t = bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bl(e.document);
  }
  return t;
}
function Su(e) {
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
function I2(e) {
  var t = r1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    n1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Su(n)) {
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
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ha(n, i));
        var o = Ha(n, r);
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
          i > r
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
var V2 = Rt && "documentMode" in document && 11 >= document.documentMode,
  Qn = null,
  js = null,
  Zr = null,
  Ls = !1;
function Ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ls ||
    Qn == null ||
    Qn !== bl(r) ||
    ((r = Qn),
    "selectionStart" in r && Su(r)
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
    (Zr && el(Zr, r)) ||
      ((Zr = r),
      (r = oi(js, "onSelect")),
      0 < r.length &&
        ((t = new xu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qn))));
}
function Pl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Hn = {
    animationend: Pl("Animation", "AnimationEnd"),
    animationiteration: Pl("Animation", "AnimationIteration"),
    animationstart: Pl("Animation", "AnimationStart"),
    transitionend: Pl("Transition", "TransitionEnd"),
  },
  Mo = {},
  l1 = {};
Rt &&
  ((l1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hn.animationend.animation,
    delete Hn.animationiteration.animation,
    delete Hn.animationstart.animation),
  "TransitionEvent" in window || delete Hn.transitionend.transition);
function Ri(e) {
  if (Mo[e]) return Mo[e];
  if (!Hn[e]) return e;
  var t = Hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in l1) return (Mo[e] = t[n]);
  return e;
}
var i1 = Ri("animationend"),
  o1 = Ri("animationiteration"),
  s1 = Ri("animationstart"),
  u1 = Ri("transitionend"),
  a1 = new Map(),
  Ga =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, t) {
  a1.set(e, t), Rn(t, [e]);
}
for (var Ao = 0; Ao < Ga.length; Ao++) {
  var To = Ga[Ao],
    U2 = To.toLowerCase(),
    Z2 = To[0].toUpperCase() + To.slice(1);
  hn(U2, "on" + Z2);
}
hn(i1, "onAnimationEnd");
hn(o1, "onAnimationIteration");
hn(s1, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(u1, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  B2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function Ya(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), U0(r, t, void 0, e), (e.currentTarget = null);
}
function c1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          Ya(l, u, c), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          Ya(l, u, c), (i = a);
        }
    }
  }
  if (ti) throw ((e = ws), (ti = !1), (ws = null), e);
}
function b(e, t) {
  var n = t[As];
  n === void 0 && (n = t[As] = new Set());
  var r = e + "__bubble";
  n.has(r) || (f1(t, e, 2, !1), n.add(r));
}
function Oo(e, t, n) {
  var r = 0;
  t && (r |= 4), f1(n, e, r, t);
}
var Ml = "_reactListening" + Math.random().toString(36).slice(2);
function tl(e) {
  if (!e[Ml]) {
    (e[Ml] = !0),
      gf.forEach(function (n) {
        n !== "selectionchange" && (B2.has(n) || Oo(n, !1, e), Oo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ml] || ((t[Ml] = !0), Oo("selectionchange", !1, t));
  }
}
function f1(e, t, n, r) {
  switch (Gf(t)) {
    case 1:
      var l = r2;
      break;
    case 4:
      l = l2;
      break;
    default:
      l = gu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !xs ||
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
function zo(e, t, n, r, l) {
  var i = r;
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
          if (((o = Sn(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  zf(function () {
    var c = i,
      m = hu(n),
      d = [];
    e: {
      var p = a1.get(e);
      if (p !== void 0) {
        var g = xu,
          C = e;
        switch (e) {
          case "keypress":
            if (Wl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = C2;
            break;
          case "focusin":
            (C = "focus"), (g = Eo);
            break;
          case "focusout":
            (C = "blur"), (g = Eo);
            break;
          case "beforeblur":
          case "afterblur":
            g = Eo;
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
            g = Fa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = s2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = k2;
            break;
          case i1:
          case o1:
          case s1:
            g = c2;
            break;
          case u1:
            g = _2;
            break;
          case "scroll":
            g = i2;
            break;
          case "wheel":
            g = L2;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = d2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ia;
        }
        var x = (t & 4) !== 0,
          E = !x && e === "scroll",
          h = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var f = c, v; f !== null; ) {
          v = f;
          var w = v.stateNode;
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              h !== null && ((w = Yr(f, h)), w != null && x.push(nl(f, w, v)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < x.length &&
          ((p = new g(p, C, null, n, m)), d.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== gs &&
            (C = n.relatedTarget || n.fromElement) &&
            (Sn(C) || C[Ft]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((C = n.relatedTarget || n.toElement),
              (g = c),
              (C = C ? Sn(C) : null),
              C !== null &&
                ((E = Fn(C)), C !== E || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((g = null), (C = c)),
          g !== C)
        ) {
          if (
            ((x = Fa),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ia),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (E = g == null ? p : Kn(g)),
            (v = C == null ? p : Kn(C)),
            (p = new x(w, f + "leave", g, n, m)),
            (p.target = E),
            (p.relatedTarget = v),
            (w = null),
            Sn(m) === c &&
              ((x = new x(h, f + "enter", C, n, m)),
              (x.target = v),
              (x.relatedTarget = E),
              (w = x)),
            (E = w),
            g && C)
          )
            t: {
              for (x = g, h = C, f = 0, v = x; v; v = Vn(v)) f++;
              for (v = 0, w = h; w; w = Vn(w)) v++;
              for (; 0 < f - v; ) (x = Vn(x)), f--;
              for (; 0 < v - f; ) (h = Vn(h)), v--;
              for (; f--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = Vn(x)), (h = Vn(h));
              }
              x = null;
            }
          else x = null;
          g !== null && Xa(d, p, g, x, !1),
            C !== null && E !== null && Xa(d, E, C, x, !0);
        }
      }
      e: {
        if (
          ((p = c ? Kn(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var _ = O2;
        else if (Za(p))
          if (e1) _ = F2;
          else {
            _ = $2;
            var P = z2;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (_ = R2);
        if (_ && (_ = _(e, c))) {
          bf(d, _, n, m);
          break e;
        }
        P && P(e, p, c),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            ps(p, "number", p.value);
      }
      switch (((P = c ? Kn(c) : window), e)) {
        case "focusin":
          (Za(P) || P.contentEditable === "true") &&
            ((Qn = P), (js = c), (Zr = null));
          break;
        case "focusout":
          Zr = js = Qn = null;
          break;
        case "mousedown":
          Ls = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ls = !1), Ka(d, n, m);
          break;
        case "selectionchange":
          if (V2) break;
        case "keydown":
        case "keyup":
          Ka(d, n, m);
      }
      var M;
      if (ku)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        Wn
          ? qf(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (Xf &&
          n.locale !== "ko" &&
          (Wn || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && Wn && (M = Yf())
            : ((Xt = m),
              (Cu = "value" in Xt ? Xt.value : Xt.textContent),
              (Wn = !0))),
        (P = oi(c, z)),
        0 < P.length &&
          ((z = new Da(z, e, null, n, m)),
          d.push({ event: z, listeners: P }),
          M ? (z.data = M) : ((M = Jf(n)), M !== null && (z.data = M)))),
        (M = N2 ? P2(e, n) : M2(e, n)) &&
          ((c = oi(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new Da("onBeforeInput", "beforeinput", null, n, m)),
            d.push({ event: m, listeners: c }),
            (m.data = M)));
    }
    c1(d, t);
  });
}
function nl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Yr(e, n)),
      i != null && r.unshift(nl(e, i, l)),
      (i = Yr(e, t)),
      i != null && r.push(nl(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xa(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((a = Yr(n, i)), a != null && o.unshift(nl(n, a, u)))
        : l || ((a = Yr(n, i)), a != null && o.push(nl(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var W2 = /\r\n?/g,
  Q2 = /\u0000|\uFFFD/g;
function qa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      W2,
      `
`
    )
    .replace(Q2, "");
}
function Al(e, t, n) {
  if (((t = qa(t)), qa(e) !== t && n)) throw Error(j(425));
}
function si() {}
var Es = null,
  Ns = null;
function Ps(e, t) {
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
var Ms = typeof setTimeout == "function" ? setTimeout : void 0,
  H2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ja = typeof Promise == "function" ? Promise : void 0,
  K2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ja < "u"
      ? function (e) {
          return Ja.resolve(null).then(e).catch(G2);
        }
      : Ms;
function G2(e) {
  setTimeout(function () {
    throw e;
  });
}
function $o(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jr(t);
}
function nn(e) {
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
function ba(e) {
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
var wr = Math.random().toString(36).slice(2),
  _t = "__reactFiber$" + wr,
  rl = "__reactProps$" + wr,
  Ft = "__reactContainer$" + wr,
  As = "__reactEvents$" + wr,
  Y2 = "__reactListeners$" + wr,
  X2 = "__reactHandles$" + wr;
function Sn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[_t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ba(e); e !== null; ) {
          if ((n = e[_t])) return n;
          e = ba(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ml(e) {
  return (
    (e = e[_t] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Fi(e) {
  return e[rl] || null;
}
var Ts = [],
  Gn = -1;
function vn(e) {
  return { current: e };
}
function ee(e) {
  0 > Gn || ((e.current = Ts[Gn]), (Ts[Gn] = null), Gn--);
}
function J(e, t) {
  Gn++, (Ts[Gn] = e.current), (e.current = t);
}
var fn = {},
  ze = vn(fn),
  Be = vn(!1),
  Mn = fn;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function We(e) {
  return (e = e.childContextTypes), e != null;
}
function ui() {
  ee(Be), ee(ze);
}
function ec(e, t, n) {
  if (ze.current !== fn) throw Error(j(168));
  J(ze, t), J(Be, n);
}
function d1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, z0(e) || "Unknown", l));
  return se({}, n, r);
}
function ai(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (Mn = ze.current),
    J(ze, e),
    J(Be, Be.current),
    !0
  );
}
function tc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = d1(e, t, Mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(Be),
      ee(ze),
      J(ze, e))
    : ee(Be),
    J(Be, n);
}
var At = null,
  Di = !1,
  Ro = !1;
function p1(e) {
  At === null ? (At = [e]) : At.push(e);
}
function q2(e) {
  (Di = !0), p1(e);
}
function mn() {
  if (!Ro && At !== null) {
    Ro = !0;
    var e = 0,
      t = G;
    try {
      var n = At;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (At = null), (Di = !1);
    } catch (l) {
      throw (At !== null && (At = At.slice(e + 1)), Df(vu, mn), l);
    } finally {
      (G = t), (Ro = !1);
    }
  }
  return null;
}
var Yn = [],
  Xn = 0,
  ci = null,
  fi = 0,
  nt = [],
  rt = 0,
  An = null,
  Ot = 1,
  zt = "";
function xn(e, t) {
  (Yn[Xn++] = fi), (Yn[Xn++] = ci), (ci = e), (fi = t);
}
function h1(e, t, n) {
  (nt[rt++] = Ot), (nt[rt++] = zt), (nt[rt++] = An), (An = e);
  var r = Ot;
  e = zt;
  var l = 32 - mt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - mt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ot = (1 << (32 - mt(t) + l)) | (n << l) | r),
      (zt = i + e);
  } else (Ot = (1 << i) | (n << l) | r), (zt = e);
}
function _u(e) {
  e.return !== null && (xn(e, 1), h1(e, 1, 0));
}
function ju(e) {
  for (; e === ci; )
    (ci = Yn[--Xn]), (Yn[Xn] = null), (fi = Yn[--Xn]), (Yn[Xn] = null);
  for (; e === An; )
    (An = nt[--rt]),
      (nt[rt] = null),
      (zt = nt[--rt]),
      (nt[rt] = null),
      (Ot = nt[--rt]),
      (nt[rt] = null);
}
var Ye = null,
  Ge = null,
  le = !1,
  pt = null;
function v1(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ge = nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = An !== null ? { id: Ot, overflow: zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Os(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zs(e) {
  if (le) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!nc(e, t)) {
        if (Os(e)) throw Error(j(418));
        t = nn(n.nextSibling);
        var r = Ye;
        t && nc(e, t)
          ? v1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (Os(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Tl(e) {
  if (e !== Ye) return !1;
  if (!le) return rc(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ps(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Os(e)) throw (m1(), Error(j(418)));
    for (; t; ) v1(e, t), (t = nn(t.nextSibling));
  }
  if ((rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ye ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function m1() {
  for (var e = Ge; e; ) e = nn(e.nextSibling);
}
function dr() {
  (Ge = Ye = null), (le = !1);
}
function Lu(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var J2 = Ut.ReactCurrentBatchConfig;
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var di = vn(null),
  pi = null,
  qn = null,
  Eu = null;
function Nu() {
  Eu = qn = pi = null;
}
function Pu(e) {
  var t = di.current;
  ee(di), (e._currentValue = t);
}
function $s(e, t, n) {
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
function ir(e, t) {
  (pi = e),
    (Eu = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (Eu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (pi === null) throw Error(j(308));
      (qn = e), (pi.dependencies = { lanes: 0, firstContext: e });
    } else qn = qn.next = e;
  return t;
}
var _n = null;
function Mu(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
function y1(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Mu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
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
var Ht = !1;
function Au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function g1(e, t) {
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
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Mu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function Ql(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mu(e, n);
  }
}
function lc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
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
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
function hi(e, t, n, r) {
  var l = e.updateQueue;
  Ht = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      c = a.next;
    (a.next = null), o === null ? (i = c) : (o.next = c), (o = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (m = c = a = null), (u = i);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var C = e,
            x = u;
          switch (((p = t), (g = n), x.tag)) {
            case 1:
              if (((C = x.payload), typeof C == "function")) {
                d = C.call(g, d, p);
                break e;
              }
              d = C;
              break e;
            case 3:
              C.flags = (C.flags & -65537) | 128;
            case 0:
              if (
                ((C = x.payload),
                (p = typeof C == "function" ? C.call(g, d, p) : C),
                p == null)
              )
                break e;
              d = se({}, d, p);
              break e;
            case 2:
              Ht = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = g), (a = d)) : (m = m.next = g),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (a = d),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (On |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function ic(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(j(191, l));
        l.call(r);
      }
    }
}
var C1 = new yf.Component().refs;
function Rs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ii = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = on(e),
      i = $t(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = rn(e, i, l)),
      t !== null && (yt(t, e, l, r), Ql(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = on(e),
      i = $t(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = rn(e, i, l)),
      t !== null && (yt(t, e, l, r), Ql(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = on(e),
      l = $t(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = rn(e, l, r)),
      t !== null && (yt(t, e, r, n), Ql(t, e, r));
  },
};
function oc(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !el(n, r) || !el(l, i)
      : !0
  );
}
function x1(e, t, n) {
  var r = !1,
    l = fn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ot(i))
      : ((l = We(t) ? Mn : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fr(e, l) : fn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ii),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function sc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ii.enqueueReplaceState(t, t.state, null);
}
function Fs(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = C1), Au(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = ot(i))
    : ((i = We(t) ? Mn : ze.current), (l.context = fr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Rs(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ii.enqueueReplaceState(l, l.state, null),
      hi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === C1 && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Ol(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function uc(e) {
  var t = e._init;
  return t(e._payload);
}
function w1(e) {
  function t(h, f) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [f]), (h.flags |= 16)) : v.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function l(h, f) {
    return (h = sn(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((h.flags |= 2), f) : v)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, f, v, w) {
    return f === null || f.tag !== 6
      ? ((f = Bo(v, h.mode, w)), (f.return = h), f)
      : ((f = l(f, v)), (f.return = h), f);
  }
  function a(h, f, v, w) {
    var _ = v.type;
    return _ === Bn
      ? m(h, f, v.props.children, w, v.key)
      : f !== null &&
        (f.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === Qt &&
            uc(_) === f.type))
      ? ((w = l(f, v.props)), (w.ref = Pr(h, f, v)), (w.return = h), w)
      : ((w = ql(v.type, v.key, v.props, null, h.mode, w)),
        (w.ref = Pr(h, f, v)),
        (w.return = h),
        w);
  }
  function c(h, f, v, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Wo(v, h.mode, w)), (f.return = h), f)
      : ((f = l(f, v.children || [])), (f.return = h), f);
  }
  function m(h, f, v, w, _) {
    return f === null || f.tag !== 7
      ? ((f = Nn(v, h.mode, w, _)), (f.return = h), f)
      : ((f = l(f, v)), (f.return = h), f);
  }
  function d(h, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Bo("" + f, h.mode, v)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kl:
          return (
            (v = ql(f.type, f.key, f.props, null, h.mode, v)),
            (v.ref = Pr(h, null, f)),
            (v.return = h),
            v
          );
        case Zn:
          return (f = Wo(f, h.mode, v)), (f.return = h), f;
        case Qt:
          var w = f._init;
          return d(h, w(f._payload), v);
      }
      if (zr(f) || _r(f))
        return (f = Nn(f, h.mode, v, null)), (f.return = h), f;
      Ol(h, f);
    }
    return null;
  }
  function p(h, f, v, w) {
    var _ = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return _ !== null ? null : u(h, f, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case kl:
          return v.key === _ ? a(h, f, v, w) : null;
        case Zn:
          return v.key === _ ? c(h, f, v, w) : null;
        case Qt:
          return (_ = v._init), p(h, f, _(v._payload), w);
      }
      if (zr(v) || _r(v)) return _ !== null ? null : m(h, f, v, w, null);
      Ol(h, v);
    }
    return null;
  }
  function g(h, f, v, w, _) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(v) || null), u(f, h, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case kl:
          return (h = h.get(w.key === null ? v : w.key) || null), a(f, h, w, _);
        case Zn:
          return (h = h.get(w.key === null ? v : w.key) || null), c(f, h, w, _);
        case Qt:
          var P = w._init;
          return g(h, f, v, P(w._payload), _);
      }
      if (zr(w) || _r(w)) return (h = h.get(v) || null), m(f, h, w, _, null);
      Ol(f, w);
    }
    return null;
  }
  function C(h, f, v, w) {
    for (
      var _ = null, P = null, M = f, z = (f = 0), Z = null;
      M !== null && z < v.length;
      z++
    ) {
      M.index > z ? ((Z = M), (M = null)) : (Z = M.sibling);
      var R = p(h, M, v[z], w);
      if (R === null) {
        M === null && (M = Z);
        break;
      }
      e && M && R.alternate === null && t(h, M),
        (f = i(R, f, z)),
        P === null ? (_ = R) : (P.sibling = R),
        (P = R),
        (M = Z);
    }
    if (z === v.length) return n(h, M), le && xn(h, z), _;
    if (M === null) {
      for (; z < v.length; z++)
        (M = d(h, v[z], w)),
          M !== null &&
            ((f = i(M, f, z)), P === null ? (_ = M) : (P.sibling = M), (P = M));
      return le && xn(h, z), _;
    }
    for (M = r(h, M); z < v.length; z++)
      (Z = g(M, h, z, v[z], w)),
        Z !== null &&
          (e && Z.alternate !== null && M.delete(Z.key === null ? z : Z.key),
          (f = i(Z, f, z)),
          P === null ? (_ = Z) : (P.sibling = Z),
          (P = Z));
    return (
      e &&
        M.forEach(function (K) {
          return t(h, K);
        }),
      le && xn(h, z),
      _
    );
  }
  function x(h, f, v, w) {
    var _ = _r(v);
    if (typeof _ != "function") throw Error(j(150));
    if (((v = _.call(v)), v == null)) throw Error(j(151));
    for (
      var P = (_ = null), M = f, z = (f = 0), Z = null, R = v.next();
      M !== null && !R.done;
      z++, R = v.next()
    ) {
      M.index > z ? ((Z = M), (M = null)) : (Z = M.sibling);
      var K = p(h, M, R.value, w);
      if (K === null) {
        M === null && (M = Z);
        break;
      }
      e && M && K.alternate === null && t(h, M),
        (f = i(K, f, z)),
        P === null ? (_ = K) : (P.sibling = K),
        (P = K),
        (M = Z);
    }
    if (R.done) return n(h, M), le && xn(h, z), _;
    if (M === null) {
      for (; !R.done; z++, R = v.next())
        (R = d(h, R.value, w)),
          R !== null &&
            ((f = i(R, f, z)), P === null ? (_ = R) : (P.sibling = R), (P = R));
      return le && xn(h, z), _;
    }
    for (M = r(h, M); !R.done; z++, R = v.next())
      (R = g(M, h, z, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && M.delete(R.key === null ? z : R.key),
          (f = i(R, f, z)),
          P === null ? (_ = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        M.forEach(function (B) {
          return t(h, B);
        }),
      le && xn(h, z),
      _
    );
  }
  function E(h, f, v, w) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Bn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case kl:
          e: {
            for (var _ = v.key, P = f; P !== null; ) {
              if (P.key === _) {
                if (((_ = v.type), _ === Bn)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (f = l(P, v.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  P.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Qt &&
                    uc(_) === P.type)
                ) {
                  n(h, P.sibling),
                    (f = l(P, v.props)),
                    (f.ref = Pr(h, P, v)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            v.type === Bn
              ? ((f = Nn(v.props.children, h.mode, w, v.key)),
                (f.return = h),
                (h = f))
              : ((w = ql(v.type, v.key, v.props, null, h.mode, w)),
                (w.ref = Pr(h, f, v)),
                (w.return = h),
                (h = w));
          }
          return o(h);
        case Zn:
          e: {
            for (P = v.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = Wo(v, h.mode, w)), (f.return = h), (h = f);
          }
          return o(h);
        case Qt:
          return (P = v._init), E(h, f, P(v._payload), w);
      }
      if (zr(v)) return C(h, f, v, w);
      if (_r(v)) return x(h, f, v, w);
      Ol(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, v)), (f.return = h), (h = f))
          : (n(h, f), (f = Bo(v, h.mode, w)), (f.return = h), (h = f)),
        o(h))
      : n(h, f);
  }
  return E;
}
var pr = w1(!0),
  k1 = w1(!1),
  yl = {},
  Et = vn(yl),
  ll = vn(yl),
  il = vn(yl);
function jn(e) {
  if (e === yl) throw Error(j(174));
  return e;
}
function Tu(e, t) {
  switch ((J(il, t), J(ll, e), J(Et, yl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vs(t, e));
  }
  ee(Et), J(Et, t);
}
function hr() {
  ee(Et), ee(ll), ee(il);
}
function S1(e) {
  jn(il.current);
  var t = jn(Et.current),
    n = vs(t, e.type);
  t !== n && (J(ll, e), J(Et, n));
}
function Ou(e) {
  ll.current === e && (ee(Et), ee(ll));
}
var ie = vn(0);
function vi(e) {
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
var Fo = [];
function zu() {
  for (var e = 0; e < Fo.length; e++)
    Fo[e]._workInProgressVersionPrimary = null;
  Fo.length = 0;
}
var Hl = Ut.ReactCurrentDispatcher,
  Do = Ut.ReactCurrentBatchConfig,
  Tn = 0,
  oe = null,
  me = null,
  we = null,
  mi = !1,
  Br = !1,
  ol = 0,
  b2 = 0;
function Me() {
  throw Error(j(321));
}
function $u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function Ru(e, t, n, r, l, i) {
  if (
    ((Tn = i),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hl.current = e === null || e.memoizedState === null ? rp : lp),
    (e = n(r, l)),
    Br)
  ) {
    i = 0;
    do {
      if (((Br = !1), (ol = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (we = me = null),
        (t.updateQueue = null),
        (Hl.current = ip),
        (e = n(r, l));
    } while (Br);
  }
  if (
    ((Hl.current = yi),
    (t = me !== null && me.next !== null),
    (Tn = 0),
    (we = me = oe = null),
    (mi = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Fu() {
  var e = ol !== 0;
  return (ol = 0), e;
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (oe.memoizedState = we = e) : (we = we.next = e), we;
}
function st() {
  if (me === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = we === null ? oe.memoizedState : we.next;
  if (t !== null) (we = t), (me = e);
  else {
    if (e === null) throw Error(j(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      we === null ? (oe.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function sl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Io(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = me,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      c = i;
    do {
      var m = c.lane;
      if ((Tn & m) === m)
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
        var d = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((u = a = d), (o = r)) : (a = a.next = d),
          (oe.lanes |= m),
          (On |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? (o = r) : (a.next = u),
      gt(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (oe.lanes |= i), (On |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vo(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    gt(i, t.memoizedState) || (Ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function _1() {}
function j1(e, t) {
  var n = oe,
    r = st(),
    l = t(),
    i = !gt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ze = !0)),
    (r = r.queue),
    Du(N1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ul(9, E1.bind(null, n, r, l, t), void 0, null),
      ke === null)
    )
      throw Error(j(349));
    Tn & 30 || L1(n, t, l);
  }
  return l;
}
function L1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function E1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), P1(t) && M1(e);
}
function N1(e, t, n) {
  return n(function () {
    P1(t) && M1(e);
  });
}
function P1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function M1(e) {
  var t = Dt(e, 1);
  t !== null && yt(t, e, 1, -1);
}
function ac(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = np.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function ul(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function A1() {
  return st().memoizedState;
}
function Kl(e, t, n, r) {
  var l = St();
  (oe.flags |= e),
    (l.memoizedState = ul(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vi(e, t, n, r) {
  var l = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var o = me.memoizedState;
    if (((i = o.destroy), r !== null && $u(r, o.deps))) {
      l.memoizedState = ul(t, n, i, r);
      return;
    }
  }
  (oe.flags |= e), (l.memoizedState = ul(1 | t, n, i, r));
}
function cc(e, t) {
  return Kl(8390656, 8, e, t);
}
function Du(e, t) {
  return Vi(2048, 8, e, t);
}
function T1(e, t) {
  return Vi(4, 2, e, t);
}
function O1(e, t) {
  return Vi(4, 4, e, t);
}
function z1(e, t) {
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
function $1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vi(4, 4, z1.bind(null, t, e), n)
  );
}
function Iu() {}
function R1(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function F1(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function D1(e, t, n) {
  return Tn & 21
    ? (gt(n, t) || ((n = Uf()), (oe.lanes |= n), (On |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function ep(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Do.transition;
  Do.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Do.transition = r);
  }
}
function I1() {
  return st().memoizedState;
}
function tp(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    V1(e))
  )
    U1(t, n);
  else if (((n = y1(e, t, n, r)), n !== null)) {
    var l = Fe();
    yt(n, e, r, l), Z1(n, t, r);
  }
}
function np(e, t, n) {
  var r = on(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (V1(e)) U1(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), gt(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Mu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = y1(e, t, l, r)),
      n !== null && ((l = Fe()), yt(n, e, r, l), Z1(n, t, r));
  }
}
function V1(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function U1(e, t) {
  Br = mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Z1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mu(e, n);
  }
}
var yi = {
    readContext: ot,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: ot,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: cc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Kl(4194308, 4, z1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Kl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Kl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
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
        (e = e.dispatch = tp.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ac,
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = ac(!1),
        t = e[0];
      return (e = ep.bind(null, e[1])), (St().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        l = St();
      if (le) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(j(349));
        Tn & 30 || L1(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        cc(N1.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ul(9, E1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = ke.identifierPrefix;
      if (le) {
        var n = zt,
          r = Ot;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ol++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = b2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: ot,
    useCallback: R1,
    useContext: ot,
    useEffect: Du,
    useImperativeHandle: $1,
    useInsertionEffect: T1,
    useLayoutEffect: O1,
    useMemo: F1,
    useReducer: Io,
    useRef: A1,
    useState: function () {
      return Io(sl);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = st();
      return D1(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = Io(sl)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: _1,
    useSyncExternalStore: j1,
    useId: I1,
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: ot,
    useCallback: R1,
    useContext: ot,
    useEffect: Du,
    useImperativeHandle: $1,
    useInsertionEffect: T1,
    useLayoutEffect: O1,
    useMemo: F1,
    useReducer: Vo,
    useRef: A1,
    useState: function () {
      return Vo(sl);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = st();
      return me === null ? (t.memoizedState = e) : D1(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = Vo(sl)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: _1,
    useSyncExternalStore: j1,
    useId: I1,
    unstable_isNewReconciler: !1,
  };
function vr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += O0(r)), (r = r.return);
    while (r);
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
function Uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ds(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var op = typeof WeakMap == "function" ? WeakMap : Map;
function B1(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ci || ((Ci = !0), (Gs = r)), Ds(e, t);
    }),
    n
  );
}
function W1(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ds(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ds(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function fc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new op();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = xp.bind(null, e, t, n)), t.then(e, e));
}
function dc(e) {
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
function pc(e, t, n, r, l) {
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
              : ((t = $t(-1, 1)), (t.tag = 2), rn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sp = Ut.ReactCurrentOwner,
  Ze = !1;
function $e(e, t, n, r) {
  t.child = e === null ? k1(t, null, n, r) : pr(t, e.child, n, r);
}
function hc(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    ir(t, l),
    (r = Ru(e, t, n, r, i, l)),
    (n = Fu()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        It(e, t, l))
      : (le && n && _u(t), (t.flags |= 1), $e(e, t, r, l), t.child)
  );
}
function vc(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ku(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Q1(e, t, i, r, l))
      : ((e = ql(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : el), n(o, r) && e.ref === t.ref)
    )
      return It(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = sn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Q1(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (el(i, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return (t.lanes = e.lanes), It(e, t, l);
  }
  return Is(e, t, n, r, l);
}
function H1(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(bn, Ke),
        (Ke |= n);
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
          J(bn, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        J(bn, Ke),
        (Ke |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(bn, Ke),
      (Ke |= r);
  return $e(e, t, l, n), t.child;
}
function K1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Is(e, t, n, r, l) {
  var i = We(n) ? Mn : ze.current;
  return (
    (i = fr(t, i)),
    ir(t, l),
    (n = Ru(e, t, n, r, i, l)),
    (r = Fu()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        It(e, t, l))
      : (le && r && _u(t), (t.flags |= 1), $e(e, t, n, l), t.child)
  );
}
function mc(e, t, n, r, l) {
  if (We(n)) {
    var i = !0;
    ai(t);
  } else i = !1;
  if ((ir(t, l), t.stateNode === null))
    Gl(e, t), x1(t, n, r), Fs(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ot(c))
      : ((c = We(n) ? Mn : ze.current), (c = fr(t, c)));
    var m = n.getDerivedStateFromProps,
      d =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== c) && sc(t, o, r, c)),
      (Ht = !1);
    var p = t.memoizedState;
    (o.state = p),
      hi(t, r, o, l),
      (a = t.memoizedState),
      u !== r || p !== a || Be.current || Ht
        ? (typeof m == "function" && (Rs(t, n, m, r), (a = t.memoizedState)),
          (u = Ht || oc(t, n, u, r, p, a, c))
            ? (d ||
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
      g1(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ft(t.type, u)),
      (o.props = c),
      (d = t.pendingProps),
      (p = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ot(a))
        : ((a = We(n) ? Mn : ze.current), (a = fr(t, a)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== d || p !== a) && sc(t, o, r, a)),
      (Ht = !1),
      (p = t.memoizedState),
      (o.state = p),
      hi(t, r, o, l);
    var C = t.memoizedState;
    u !== d || p !== C || Be.current || Ht
      ? (typeof g == "function" && (Rs(t, n, g, r), (C = t.memoizedState)),
        (c = Ht || oc(t, n, c, r, p, C, a) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, C, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, C, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (o.props = r),
        (o.state = C),
        (o.context = a),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vs(e, t, n, r, i, l);
}
function Vs(e, t, n, r, l, i) {
  K1(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && tc(t, n, !1), It(e, t, i);
  (r = t.stateNode), (sp.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pr(t, e.child, null, i)), (t.child = pr(t, null, u, i)))
      : $e(e, t, u, i),
    (t.memoizedState = r.state),
    l && tc(t, n, !0),
    t.child
  );
}
function G1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ec(e, t.context, !1),
    Tu(e, t.containerInfo);
}
function yc(e, t, n, r, l) {
  return dr(), Lu(l), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Us = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Y1(e, t, n) {
  var r = t.pendingProps,
    l = ie.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    J(ie, l & 1),
    e === null)
  )
    return (
      zs(t),
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
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Bi(o, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Zs(n)),
              (t.memoizedState = Us),
              e)
            : Vu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return up(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = sn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = sn(u, i)) : ((i = Nn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Zs(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Us),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = sn(i, { mode: "visible", children: r.children })),
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
function Vu(e, t) {
  return (
    (t = Bi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zl(e, t, n, r) {
  return (
    r !== null && Lu(r),
    pr(t, e.child, null, n),
    (e = Vu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function up(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Uo(Error(j(422)))), zl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Bi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Nn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && pr(t, e.child, null, o),
        (t.child.memoizedState = Zs(o)),
        (t.memoizedState = Us),
        i);
  if (!(t.mode & 1)) return zl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(j(419))), (r = Uo(i, r, void 0)), zl(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), Ze || u)) {
    if (((r = ke), r !== null)) {
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
          l !== i.retryLane &&
          ((i.retryLane = l), Dt(e, l), yt(r, e, l, -1));
    }
    return Hu(), (r = Uo(Error(j(421)))), zl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ge = nn(l.nextSibling)),
      (Ye = t),
      (le = !0),
      (pt = null),
      e !== null &&
        ((nt[rt++] = Ot),
        (nt[rt++] = zt),
        (nt[rt++] = An),
        (Ot = e.id),
        (zt = e.overflow),
        (An = t)),
      (t = Vu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $s(e.return, t, n);
}
function Zo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function X1(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if (($e(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gc(e, n, t);
        else if (e.tag === 19) gc(e, n, t);
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
  if ((J(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && vi(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Zo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && vi(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Zo(t, !0, n, null, i);
        break;
      case "together":
        Zo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ap(e, t, n) {
  switch (t.tag) {
    case 3:
      G1(t), dr();
      break;
    case 5:
      S1(t);
      break;
    case 1:
      We(t.type) && ai(t);
      break;
    case 4:
      Tu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      J(di, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Y1(e, t, n)
          : (J(ie, ie.current & 1),
            (e = It(e, t, n)),
            e !== null ? e.sibling : null);
      J(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return X1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        J(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), H1(e, t, n);
  }
  return It(e, t, n);
}
var q1, Bs, J1, b1;
q1 = function (e, t) {
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
Bs = function () {};
J1 = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), jn(Et.current);
    var i = null;
    switch (n) {
      case "input":
        (l = fs(e, l)), (r = fs(e, r)), (i = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = hs(e, l)), (r = hs(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = si);
    }
    ms(n, r);
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
            (Kr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
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
          } else n || (i || (i = []), i.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Kr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && b("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
b1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!le)
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
function Ae(e) {
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
function cp(e, t, n) {
  var r = t.pendingProps;
  switch ((ju(t), t.tag)) {
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
      return Ae(t), null;
    case 1:
      return We(t.type) && ui(), Ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hr(),
        ee(Be),
        ee(ze),
        zu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (qs(pt), (pt = null)))),
        Bs(e, t),
        Ae(t),
        null
      );
    case 5:
      Ou(t);
      var l = jn(il.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        J1(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Ae(t), null;
        }
        if (((e = jn(Et.current)), Tl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[_t] = t), (r[rl] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              b("cancel", r), b("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              b("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Rr.length; l++) b(Rr[l], r);
              break;
            case "source":
              b("error", r);
              break;
            case "img":
            case "image":
            case "link":
              b("error", r), b("load", r);
              break;
            case "details":
              b("toggle", r);
              break;
            case "input":
              Ea(r, i), b("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                b("invalid", r);
              break;
            case "textarea":
              Pa(r, i), b("invalid", r);
          }
          ms(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Al(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Al(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Kr.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  b("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), Na(r, i, !0);
              break;
            case "textarea":
              Sl(r), Ma(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = si);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lf(n)),
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
            (e[_t] = t),
            (e[rl] = r),
            q1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ys(n, r)), n)) {
              case "dialog":
                b("cancel", e), b("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                b("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Rr.length; l++) b(Rr[l], e);
                l = r;
                break;
              case "source":
                b("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                b("error", e), b("load", e), (l = r);
                break;
              case "details":
                b("toggle", e), (l = r);
                break;
              case "input":
                Ea(e, r), (l = fs(e, r)), b("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  b("invalid", e);
                break;
              case "textarea":
                Pa(e, r), (l = hs(e, r)), b("invalid", e);
                break;
              default:
                l = r;
            }
            ms(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Pf(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ef(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Gr(e, a)
                    : typeof a == "number" && Gr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Kr.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && b("scroll", e)
                      : a != null && cu(e, i, a, o));
              }
            switch (n) {
              case "input":
                Sl(e), Na(e, r, !1);
                break;
              case "textarea":
                Sl(e), Ma(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? tr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = si);
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
      return Ae(t), null;
    case 6:
      if (e && t.stateNode != null) b1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = jn(il.current)), jn(Et.current), Tl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_t] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_t] = t),
            (t.stateNode = r);
      }
      return Ae(t), null;
    case 13:
      if (
        (ee(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ge !== null && t.mode & 1 && !(t.flags & 128))
          m1(), dr(), (t.flags |= 98560), (i = !1);
        else if (((i = Tl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[_t] = t;
          } else
            dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ae(t), (i = !1);
        } else pt !== null && (qs(pt), (pt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? ye === 0 && (ye = 3) : Hu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ae(t),
          null);
    case 4:
      return (
        hr(), Bs(e, t), e === null && tl(t.stateNode.containerInfo), Ae(t), null
      );
    case 10:
      return Pu(t.type._context), Ae(t), null;
    case 17:
      return We(t.type) && ui(), Ae(t), null;
    case 19:
      if ((ee(ie), (i = t.memoizedState), i === null)) return Ae(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Mr(i, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = vi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Mr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
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
                return J(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            de() > mr &&
            ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !le)
            )
              return Ae(t), null;
          } else
            2 * de() - i.renderingStartTime > mr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mr(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = de()),
          (t.sibling = null),
          (n = ie.current),
          J(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ae(t), null);
    case 22:
    case 23:
      return (
        Qu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function fp(e, t) {
  switch ((ju(t), t.tag)) {
    case 1:
      return (
        We(t.type) && ui(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hr(),
        ee(Be),
        ee(ze),
        zu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ou(t), null;
    case 13:
      if (
        (ee(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(ie), null;
    case 4:
      return hr(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $l = !1,
  Oe = !1,
  dp = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else n.current = null;
}
function Ws(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var Cc = !1;
function pp(e, t) {
  if (((Es = li), (e = r1()), Su(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            c = 0,
            m = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (l !== 0 && d.nodeType !== 3) || (u = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (p = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++m === r && (a = o),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = g;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ns = { focusedElem: e, selectionRange: n }, li = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var C = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (C !== null) {
                  var x = C.memoizedProps,
                    E = C.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ft(t.type, x),
                      E
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (w) {
          ae(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (C = Cc), (Cc = !1), C;
}
function Wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ws(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ui(e, t) {
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
function Qs(e) {
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
function ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_t], delete t[rl], delete t[As], delete t[Y2], delete t[X2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function td(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || td(e.return)) return null;
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
function Hs(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = si));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hs(e, t, n), e = e.sibling; e !== null; ) Hs(e, t, n), (e = e.sibling);
}
function Ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ks(e, t, n), e = e.sibling; e !== null; ) Ks(e, t, n), (e = e.sibling);
}
var Le = null,
  dt = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) nd(e, t, n), (n = n.sibling);
}
function nd(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function")
    try {
      Lt.onCommitFiberUnmount(Oi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || Jn(n, t);
    case 6:
      var r = Le,
        l = dt;
      (Le = null),
        Bt(e, t, n),
        (Le = r),
        (dt = l),
        Le !== null &&
          (dt
            ? ((e = Le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Le.removeChild(n.stateNode));
      break;
    case 18:
      Le !== null &&
        (dt
          ? ((e = Le),
            (n = n.stateNode),
            e.nodeType === 8
              ? $o(e.parentNode, n)
              : e.nodeType === 1 && $o(e, n),
            Jr(e))
          : $o(Le, n.stateNode));
      break;
    case 4:
      (r = Le),
        (l = dt),
        (Le = n.stateNode.containerInfo),
        (dt = !0),
        Bt(e, t, n),
        (Le = r),
        (dt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ws(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (Jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ae(n, t, u);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), Bt(e, t, n), (Oe = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dp()),
      t.forEach(function (r) {
        var l = kp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Le = u.stateNode), (dt = !1);
              break e;
            case 3:
              (Le = u.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (Le = u.stateNode.containerInfo), (dt = !0);
              break e;
          }
          u = u.return;
        }
        if (Le === null) throw Error(j(160));
        nd(i, o, l), (Le = null), (dt = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        ae(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rd(t, e), (t = t.sibling);
}
function rd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), xt(e), r & 4)) {
        try {
          Wr(3, e, e.return), Ui(3, e);
        } catch (x) {
          ae(e, e.return, x);
        }
        try {
          Wr(5, e, e.return);
        } catch (x) {
          ae(e, e.return, x);
        }
      }
      break;
    case 1:
      ct(t, e), xt(e), r & 512 && n !== null && Jn(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        xt(e),
        r & 512 && n !== null && Jn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Gr(l, "");
        } catch (x) {
          ae(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && _f(l, i),
              ys(u, o);
            var c = ys(u, i);
            for (o = 0; o < a.length; o += 2) {
              var m = a[o],
                d = a[o + 1];
              m === "style"
                ? Pf(l, d)
                : m === "dangerouslySetInnerHTML"
                ? Ef(l, d)
                : m === "children"
                ? Gr(l, d)
                : cu(l, m, d, c);
            }
            switch (u) {
              case "input":
                ds(l, i);
                break;
              case "textarea":
                jf(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? tr(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? tr(l, !!i.multiple, i.defaultValue, !0)
                      : tr(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[rl] = i;
          } catch (x) {
            ae(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ct(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          ae(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (x) {
          ae(e, e.return, x);
        }
      break;
    case 4:
      ct(t, e), xt(e);
      break;
    case 13:
      ct(t, e),
        xt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Bu = de())),
        r & 4 && wc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (c = Oe) || m), ct(t, e), (Oe = c)) : ct(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (T = e, m = e.child; m !== null; ) {
            for (d = T = m; T !== null; ) {
              switch (((p = T), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wr(4, p, p.return);
                  break;
                case 1:
                  Jn(p, p.return);
                  var C = p.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (C.props = t.memoizedProps),
                        (C.state = t.memoizedState),
                        C.componentWillUnmount();
                    } catch (x) {
                      ae(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Jn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Sc(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (T = g)) : Sc(d);
            }
            m = m.sibling;
          }
        e: for (m = null, d = e; ; ) {
          if (d.tag === 5) {
            if (m === null) {
              m = d;
              try {
                (l = d.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Nf("display", o)));
              } catch (x) {
                ae(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (m === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (x) {
                ae(e, e.return, x);
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
            m === d && (m = null), (d = d.return);
          }
          m === d && (m = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), xt(e), r & 4 && wc(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (td(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gr(l, ""), (r.flags &= -33));
          var i = xc(e);
          Ks(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = xc(e);
          Hs(e, u, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      ae(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hp(e, t, n) {
  (T = e), ld(e);
}
function ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || $l;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Oe;
        u = $l;
        var c = Oe;
        if ((($l = o), (Oe = a) && !c))
          for (T = l; T !== null; )
            (o = T),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? _c(l)
                : a !== null
                ? ((a.return = o), (T = a))
                : _c(l);
        for (; i !== null; ) (T = i), ld(i), (i = i.sibling);
        (T = l), ($l = u), (Oe = c);
      }
      kc(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (T = i)) : kc(e);
  }
}
function kc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || Ui(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ic(t, i, r);
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
                ic(t, o, n);
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
                  var m = c.memoizedState;
                  if (m !== null) {
                    var d = m.dehydrated;
                    d !== null && Jr(d);
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
              throw Error(j(163));
          }
        Oe || (t.flags & 512 && Qs(t));
      } catch (p) {
        ae(t, t.return, p);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Sc(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function _c(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ui(4, t);
          } catch (a) {
            ae(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ae(t, l, a);
            }
          }
          var i = t.return;
          try {
            Qs(t);
          } catch (a) {
            ae(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Qs(t);
          } catch (a) {
            ae(t, o, a);
          }
      }
    } catch (a) {
      ae(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (T = u);
      break;
    }
    T = t.return;
  }
}
var vp = Math.ceil,
  gi = Ut.ReactCurrentDispatcher,
  Uu = Ut.ReactCurrentOwner,
  it = Ut.ReactCurrentBatchConfig,
  Q = 0,
  ke = null,
  ve = null,
  Ee = 0,
  Ke = 0,
  bn = vn(0),
  ye = 0,
  al = null,
  On = 0,
  Zi = 0,
  Zu = 0,
  Qr = null,
  Ue = null,
  Bu = 0,
  mr = 1 / 0,
  Mt = null,
  Ci = !1,
  Gs = null,
  ln = null,
  Rl = !1,
  qt = null,
  xi = 0,
  Hr = 0,
  Ys = null,
  Yl = -1,
  Xl = 0;
function Fe() {
  return Q & 6 ? de() : Yl !== -1 ? Yl : (Yl = de());
}
function on(e) {
  return e.mode & 1
    ? Q & 2 && Ee !== 0
      ? Ee & -Ee
      : J2.transition !== null
      ? (Xl === 0 && (Xl = Uf()), Xl)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gf(e.type))),
        e)
    : 1;
}
function yt(e, t, n, r) {
  if (50 < Hr) throw ((Hr = 0), (Ys = null), Error(j(185)));
  hl(e, n, r),
    (!(Q & 2) || e !== ke) &&
      (e === ke && (!(Q & 2) && (Zi |= n), ye === 4 && Gt(e, Ee)),
      Qe(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((mr = de() + 500), Di && mn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  J0(e, t);
  var r = ri(e, e === ke ? Ee : 0);
  if (r === 0)
    n !== null && Oa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oa(n), t === 1))
      e.tag === 0 ? q2(jc.bind(null, e)) : p1(jc.bind(null, e)),
        K2(function () {
          !(Q & 6) && mn();
        }),
        (n = null);
    else {
      switch (Zf(r)) {
        case 1:
          n = vu;
          break;
        case 4:
          n = If;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = Vf;
          break;
        default:
          n = ni;
      }
      n = dd(n, id.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function id(e, t) {
  if (((Yl = -1), (Xl = 0), Q & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = ri(e, e === ke ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wi(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var i = sd();
    (ke !== e || Ee !== t) && ((Mt = null), (mr = de() + 500), En(e, t));
    do
      try {
        gp();
        break;
      } catch (u) {
        od(e, u);
      }
    while (1);
    Nu(),
      (gi.current = i),
      (Q = l),
      ve !== null ? (t = 0) : ((ke = null), (Ee = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ks(e)), l !== 0 && ((r = l), (t = Xs(e, l)))), t === 1)
    )
      throw ((n = al), En(e, 0), Gt(e, r), Qe(e, de()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !mp(l) &&
          ((t = wi(e, r)),
          t === 2 && ((i = ks(e)), i !== 0 && ((r = i), (t = Xs(e, i)))),
          t === 1))
      )
        throw ((n = al), En(e, 0), Gt(e, r), Qe(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          wn(e, Ue, Mt);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = Bu + 500 - de()), 10 < t))
          ) {
            if (ri(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ms(wn.bind(null, e, Ue, Mt), t);
            break;
          }
          wn(e, Ue, Mt);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - mt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = de() - r),
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
                : 1960 * vp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ms(wn.bind(null, e, Ue, Mt), r);
            break;
          }
          wn(e, Ue, Mt);
          break;
        case 5:
          wn(e, Ue, Mt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Qe(e, de()), e.callbackNode === n ? id.bind(null, e) : null;
}
function Xs(e, t) {
  var n = Qr;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = wi(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && qs(t)),
    e
  );
}
function qs(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function mp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!gt(i(), l)) return !1;
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
function Gt(e, t) {
  for (
    t &= ~Zu,
      t &= ~Zi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function jc(e) {
  if (Q & 6) throw Error(j(327));
  or();
  var t = ri(e, 0);
  if (!(t & 1)) return Qe(e, de()), null;
  var n = wi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ks(e);
    r !== 0 && ((t = r), (n = Xs(e, r)));
  }
  if (n === 1) throw ((n = al), En(e, 0), Gt(e, t), Qe(e, de()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, Ue, Mt),
    Qe(e, de()),
    null
  );
}
function Wu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((mr = de() + 500), Di && mn());
  }
}
function zn(e) {
  qt !== null && qt.tag === 0 && !(Q & 6) && or();
  var t = Q;
  Q |= 1;
  var n = it.transition,
    r = G;
  try {
    if (((it.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (it.transition = n), (Q = t), !(Q & 6) && mn();
  }
}
function Qu() {
  (Ke = bn.current), ee(bn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), H2(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((ju(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ui();
          break;
        case 3:
          hr(), ee(Be), ee(ze), zu();
          break;
        case 5:
          Ou(r);
          break;
        case 4:
          hr();
          break;
        case 13:
          ee(ie);
          break;
        case 19:
          ee(ie);
          break;
        case 10:
          Pu(r.type._context);
          break;
        case 22:
        case 23:
          Qu();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (ve = e = sn(e.current, null)),
    (Ee = Ke = t),
    (ye = 0),
    (al = null),
    (Zu = Zi = On = 0),
    (Ue = Qr = null),
    _n !== null)
  ) {
    for (t = 0; t < _n.length; t++)
      if (((n = _n[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function od(e, t) {
  do {
    var n = ve;
    try {
      if ((Nu(), (Hl.current = yi), mi)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        mi = !1;
      }
      if (
        ((Tn = 0),
        (we = me = oe = null),
        (Br = !1),
        (ol = 0),
        (Uu.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (al = t), (ve = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = Ee),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            m = u,
            d = m.tag;
          if (!(m.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = dc(o);
          if (g !== null) {
            (g.flags &= -257),
              pc(g, o, u, i, t),
              g.mode & 1 && fc(i, c, t),
              (t = g),
              (a = c);
            var C = t.updateQueue;
            if (C === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else C.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              fc(i, c, t), Hu();
              break e;
            }
            a = Error(j(426));
          }
        } else if (le && u.mode & 1) {
          var E = dc(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              pc(E, o, u, i, t),
              Lu(vr(a, u));
            break e;
          }
        }
        (i = a = vr(a, u)),
          ye !== 4 && (ye = 2),
          Qr === null ? (Qr = [i]) : Qr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = B1(i, a, t);
              lc(i, h);
              break e;
            case 1:
              u = a;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (ln === null || !ln.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = W1(i, u, t);
                lc(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ad(n);
    } catch (_) {
      (t = _), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function sd() {
  var e = gi.current;
  return (gi.current = yi), e === null ? yi : e;
}
function Hu() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    ke === null || (!(On & 268435455) && !(Zi & 268435455)) || Gt(ke, Ee);
}
function wi(e, t) {
  var n = Q;
  Q |= 2;
  var r = sd();
  (ke !== e || Ee !== t) && ((Mt = null), En(e, t));
  do
    try {
      yp();
      break;
    } catch (l) {
      od(e, l);
    }
  while (1);
  if ((Nu(), (Q = n), (gi.current = r), ve !== null)) throw Error(j(261));
  return (ke = null), (Ee = 0), ye;
}
function yp() {
  for (; ve !== null; ) ud(ve);
}
function gp() {
  for (; ve !== null && !B0(); ) ud(ve);
}
function ud(e) {
  var t = fd(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? ad(e) : (ve = t),
    (Uu.current = null);
}
function ad(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fp(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (ve = null);
        return;
      }
    } else if (((n = cp(n, t, Ke)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function wn(e, t, n) {
  var r = G,
    l = it.transition;
  try {
    (it.transition = null), (G = 1), Cp(e, t, n, r);
  } finally {
    (it.transition = l), (G = r);
  }
  return null;
}
function Cp(e, t, n, r) {
  do or();
  while (qt !== null);
  if (Q & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (b0(e, i),
    e === ke && ((ve = ke = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rl ||
      ((Rl = !0),
      dd(ni, function () {
        return or(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = it.transition), (it.transition = null);
    var o = G;
    G = 1;
    var u = Q;
    (Q |= 4),
      (Uu.current = null),
      pp(e, n),
      rd(n, e),
      I2(Ns),
      (li = !!Es),
      (Ns = Es = null),
      (e.current = n),
      hp(n),
      W0(),
      (Q = u),
      (G = o),
      (it.transition = i);
  } else e.current = n;
  if (
    (Rl && ((Rl = !1), (qt = e), (xi = l)),
    (i = e.pendingLanes),
    i === 0 && (ln = null),
    K0(n.stateNode),
    Qe(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ci) throw ((Ci = !1), (e = Gs), (Gs = null), e);
  return (
    xi & 1 && e.tag !== 0 && or(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ys ? Hr++ : ((Hr = 0), (Ys = e))) : (Hr = 0),
    mn(),
    null
  );
}
function or() {
  if (qt !== null) {
    var e = Zf(xi),
      t = it.transition,
      n = G;
    try {
      if (((it.transition = null), (G = 16 > e ? 16 : e), qt === null))
        var r = !1;
      else {
        if (((e = qt), (qt = null), (xi = 0), Q & 6)) throw Error(j(331));
        var l = Q;
        for (Q |= 4, T = e.current; T !== null; ) {
          var i = T,
            o = i.child;
          if (T.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (T = c; T !== null; ) {
                  var m = T;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, m, i);
                  }
                  var d = m.child;
                  if (d !== null) (d.return = m), (T = d);
                  else
                    for (; T !== null; ) {
                      m = T;
                      var p = m.sibling,
                        g = m.return;
                      if ((ed(m), m === c)) {
                        T = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (T = p);
                        break;
                      }
                      T = g;
                    }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var x = C.child;
                if (x !== null) {
                  C.child = null;
                  do {
                    var E = x.sibling;
                    (x.sibling = null), (x = E);
                  } while (x !== null);
                }
              }
              T = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (T = o);
          else
            e: for (; T !== null; ) {
              if (((i = T), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (T = h);
                break e;
              }
              T = i.return;
            }
        }
        var f = e.current;
        for (T = f; T !== null; ) {
          o = T;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (T = v);
          else
            e: for (o = f; T !== null; ) {
              if (((u = T), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ui(9, u);
                  }
                } catch (_) {
                  ae(u, u.return, _);
                }
              if (u === o) {
                T = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (T = w);
                break e;
              }
              T = u.return;
            }
        }
        if (
          ((Q = l), mn(), Lt && typeof Lt.onPostCommitFiberRoot == "function")
        )
          try {
            Lt.onPostCommitFiberRoot(Oi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (it.transition = t);
    }
  }
  return !1;
}
function Lc(e, t, n) {
  (t = vr(n, t)),
    (t = B1(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = Fe()),
    e !== null && (hl(e, 1, t), Qe(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) Lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          (e = vr(n, e)),
            (e = W1(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = Fe()),
            t !== null && (hl(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Ee & n) === n &&
      (ye === 4 || (ye === 3 && (Ee & 130023424) === Ee && 500 > de() - Bu)
        ? En(e, 0)
        : (Zu |= n)),
    Qe(e, t);
}
function cd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ll), (Ll <<= 1), !(Ll & 130023424) && (Ll = 4194304))
      : (t = 1));
  var n = Fe();
  (e = Dt(e, t)), e !== null && (hl(e, t, n), Qe(e, n));
}
function wp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), cd(e, n);
}
function kp(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), cd(e, n);
}
var fd;
fd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), ap(e, t, n);
      Ze = !!(e.flags & 131072);
    }
  else (Ze = !1), le && t.flags & 1048576 && h1(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Gl(e, t), (e = t.pendingProps);
      var l = fr(t, ze.current);
      ir(t, n), (l = Ru(null, t, r, e, l, n));
      var i = Fu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(r) ? ((i = !0), ai(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Au(t),
            (l.updater = Ii),
            (t.stateNode = l),
            (l._reactInternals = t),
            Fs(t, r, e, n),
            (t = Vs(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && _u(t), $e(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _p(r)),
          (e = ft(r, e)),
          l)
        ) {
          case 0:
            t = Is(null, t, r, e, n);
            break e;
          case 1:
            t = mc(null, t, r, e, n);
            break e;
          case 11:
            t = hc(null, t, r, e, n);
            break e;
          case 14:
            t = vc(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        Is(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        mc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((G1(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          g1(e, t),
          hi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = vr(Error(j(423)), t)), (t = yc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = vr(Error(j(424)), t)), (t = yc(e, t, r, n, l));
            break e;
          } else
            for (
              Ge = nn(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                pt = null,
                n = k1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dr(), r === l)) {
            t = It(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        S1(t),
        e === null && zs(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ps(r, l) ? (o = null) : i !== null && Ps(r, i) && (t.flags |= 32),
        K1(e, t),
        $e(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && zs(t), null;
    case 13:
      return Y1(e, t, n);
    case 4:
      return (
        Tu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        hc(e, t, r, l, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          J(di, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (gt(i.value, o)) {
            if (i.children === l.children && !Be.current) {
              t = It(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = $t(-1, n & -n)), (a.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (c.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      $s(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(j(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  $s(o, n, t),
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
        $e(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ir(t, n),
        (l = ot(l)),
        (r = r(l)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ft(r, t.pendingProps)),
        (l = ft(r.type, l)),
        vc(e, t, r, l, n)
      );
    case 15:
      return Q1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        Gl(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), ai(t)) : (e = !1),
        ir(t, n),
        x1(t, r, l),
        Fs(t, r, l, n),
        Vs(null, t, r, !0, e, n)
      );
    case 19:
      return X1(e, t, n);
    case 22:
      return H1(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function dd(e, t) {
  return Df(e, t);
}
function Sp(e, t, n, r) {
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
function lt(e, t, n, r) {
  return new Sp(e, t, n, r);
}
function Ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _p(e) {
  if (typeof e == "function") return Ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === du)) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
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
function ql(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ku(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Bn:
        return Nn(n.children, l, i, t);
      case fu:
        (o = 8), (l |= 8);
        break;
      case ss:
        return (
          (e = lt(12, n, t, l | 2)), (e.elementType = ss), (e.lanes = i), e
        );
      case us:
        return (e = lt(13, n, t, l)), (e.elementType = us), (e.lanes = i), e;
      case as:
        return (e = lt(19, n, t, l)), (e.elementType = as), (e.lanes = i), e;
      case wf:
        return Bi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cf:
              o = 10;
              break e;
            case xf:
              o = 9;
              break e;
            case du:
              o = 11;
              break e;
            case pu:
              o = 14;
              break e;
            case Qt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Nn(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function Bi(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = wf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bo(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function Wo(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jp(e, t, n, r, l) {
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
    (this.eventTimes = _o(0)),
    (this.expirationTimes = _o(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _o(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new jp(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Au(i),
    e
  );
}
function Lp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function pd(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return d1(e, n, t);
  }
  return t;
}
function hd(e, t, n, r, l, i, o, u, a) {
  return (
    (e = Gu(n, r, !0, e, l, i, o, u, a)),
    (e.context = pd(null)),
    (n = e.current),
    (r = Fe()),
    (l = on(n)),
    (i = $t(r, l)),
    (i.callback = t ?? null),
    rn(n, i, l),
    (e.current.lanes = l),
    hl(e, l, r),
    Qe(e, r),
    e
  );
}
function Wi(e, t, n, r) {
  var l = t.current,
    i = Fe(),
    o = on(l);
  return (
    (n = pd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rn(l, t, o)),
    e !== null && (yt(e, l, o, i), Ql(e, l, o)),
    o
  );
}
function ki(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ec(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yu(e, t) {
  Ec(e, t), (e = e.alternate) && Ec(e, t);
}
function Ep() {
  return null;
}
var vd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xu(e) {
  this._internalRoot = e;
}
Qi.prototype.render = Xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Wi(e, t, null, null);
};
Qi.prototype.unmount = Xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zn(function () {
      Wi(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function Qi(e) {
  this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && Kf(e);
  }
};
function qu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nc() {}
function Np(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ki(o);
        i.call(c);
      };
    }
    var o = hd(t, r, e, 0, null, !1, !1, "", Nc);
    return (
      (e._reactRootContainer = o),
      (e[Ft] = o.current),
      tl(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ki(a);
      u.call(c);
    };
  }
  var a = Gu(e, 0, !1, null, null, !1, !1, "", Nc);
  return (
    (e._reactRootContainer = a),
    (e[Ft] = a.current),
    tl(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      Wi(t, a, n, r);
    }),
    a
  );
}
function Ki(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = ki(o);
        u.call(a);
      };
    }
    Wi(t, o, e, l);
  } else o = Np(n, t, e, l, r);
  return ki(o);
}
Bf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 &&
          (mu(t, n | 1), Qe(t, de()), !(Q & 6) && ((mr = de() + 500), mn()));
      }
      break;
    case 13:
      zn(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var l = Fe();
          yt(r, e, 1, l);
        }
      }),
        Yu(e, 1);
  }
};
yu = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      yt(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
Wf = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = Fe();
      yt(n, e, t, r);
    }
    Yu(e, t);
  }
};
Qf = function () {
  return G;
};
Hf = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Cs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ds(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Fi(r);
            if (!l) throw Error(j(90));
            Sf(r), ds(r, l);
          }
        }
      }
      break;
    case "textarea":
      jf(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
Tf = Wu;
Of = zn;
var Pp = { usingClientEntryPoint: !1, Events: [ml, Kn, Fi, Mf, Af, Wu] },
  Ar = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Mp = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || Ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fl.isDisabled && Fl.supportsFiber)
    try {
      (Oi = Fl.inject(Mp)), (Lt = Fl);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qu(t)) throw Error(j(200));
  return Lp(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!qu(e)) throw Error(j(299));
  var n = !1,
    r = "",
    l = vd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Gu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ft] = t.current),
    tl(e.nodeType === 8 ? e.parentNode : e),
    new Xu(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = Rf(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return zn(e);
};
Je.hydrate = function (e, t, n) {
  if (!Hi(t)) throw Error(j(200));
  return Ki(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!qu(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = vd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = hd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ft] = t.current),
    tl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Qi(t);
};
Je.render = function (e, t, n) {
  if (!Hi(t)) throw Error(j(200));
  return Ki(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Hi(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (zn(function () {
        Ki(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = Wu;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hi(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Ki(e, t, n, !1, r);
};
Je.version = "18.2.0-next-9e3b772b8-20220608";
function md() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md);
    } catch (e) {
      console.error(e);
    }
}
md(), (hf.exports = Je);
var yd = hf.exports,
  Pc = yd;
(is.createRoot = Pc.createRoot), (is.hydrateRoot = Pc.hydrateRoot);
var gd = { exports: {} },
  Cd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yr = I;
function Ap(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Tp = typeof Object.is == "function" ? Object.is : Ap,
  Op = yr.useState,
  zp = yr.useEffect,
  $p = yr.useLayoutEffect,
  Rp = yr.useDebugValue;
function Fp(e, t) {
  var n = t(),
    r = Op({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    i = r[1];
  return (
    $p(
      function () {
        (l.value = n), (l.getSnapshot = t), Qo(l) && i({ inst: l });
      },
      [e, n, t]
    ),
    zp(
      function () {
        return (
          Qo(l) && i({ inst: l }),
          e(function () {
            Qo(l) && i({ inst: l });
          })
        );
      },
      [e]
    ),
    Rp(n),
    n
  );
}
function Qo(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tp(e, n);
  } catch {
    return !0;
  }
}
function Dp(e, t) {
  return t();
}
var Ip =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Dp
    : Fp;
Cd.useSyncExternalStore =
  yr.useSyncExternalStore !== void 0 ? yr.useSyncExternalStore : Ip;
gd.exports = Cd;
var Vp = gd.exports,
  xd = { exports: {} },
  wd = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gi = I,
  Up = Vp;
function Zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bp = typeof Object.is == "function" ? Object.is : Zp,
  Wp = Up.useSyncExternalStore,
  Qp = Gi.useRef,
  Hp = Gi.useEffect,
  Kp = Gi.useMemo,
  Gp = Gi.useDebugValue;
wd.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var i = Qp(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Kp(
    function () {
      function a(g) {
        if (!c) {
          if (((c = !0), (m = g), (g = r(g)), l !== void 0 && o.hasValue)) {
            var C = o.value;
            if (l(C, g)) return (d = C);
          }
          return (d = g);
        }
        if (((C = d), Bp(m, g))) return C;
        var x = r(g);
        return l !== void 0 && l(C, x) ? C : ((m = g), (d = x));
      }
      var c = !1,
        m,
        d,
        p = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        p === null
          ? void 0
          : function () {
              return a(p());
            },
      ];
    },
    [t, n, r, l]
  );
  var u = Wp(e, i[0], i[1]);
  return (
    Hp(
      function () {
        (o.hasValue = !0), (o.value = u);
      },
      [u]
    ),
    Gp(u),
    u
  );
};
xd.exports = wd;
var Yp = xd.exports;
function Xp(e) {
  e();
}
let kd = Xp;
const qp = (e) => (kd = e),
  Jp = () => kd,
  Mc = Symbol.for("react-redux-context"),
  Ac = typeof globalThis < "u" ? globalThis : {};
function bp() {
  var e;
  if (!I.createContext) return {};
  const t = (e = Ac[Mc]) != null ? e : (Ac[Mc] = new Map());
  let n = t.get(I.createContext);
  return n || ((n = I.createContext(null)), t.set(I.createContext, n)), n;
}
const dn = bp();
function Ju(e = dn) {
  return function () {
    return I.useContext(e);
  };
}
const Sd = Ju(),
  e3 = () => {
    throw new Error("uSES not initialized!");
  };
let _d = e3;
const t3 = (e) => {
    _d = e;
  },
  n3 = (e, t) => e === t;
function r3(e = dn) {
  const t = e === dn ? Sd : Ju(e);
  return function (r, l = {}) {
    const {
        equalityFn: i = n3,
        stabilityCheck: o = void 0,
        noopCheck: u = void 0,
      } = typeof l == "function" ? { equalityFn: l } : l,
      {
        store: a,
        subscription: c,
        getServerState: m,
        stabilityCheck: d,
        noopCheck: p,
      } = t();
    I.useRef(!0);
    const g = I.useCallback(
        {
          [r.name](x) {
            return r(x);
          },
        }[r.name],
        [r, d, o]
      ),
      C = _d(c.addNestedSub, a.getState, m || a.getState, g, i);
    return I.useDebugValue(C), C;
  };
}
const l3 = r3();
var jd = { exports: {} },
  Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Se = typeof Symbol == "function" && Symbol.for,
  bu = Se ? Symbol.for("react.element") : 60103,
  ea = Se ? Symbol.for("react.portal") : 60106,
  Yi = Se ? Symbol.for("react.fragment") : 60107,
  Xi = Se ? Symbol.for("react.strict_mode") : 60108,
  qi = Se ? Symbol.for("react.profiler") : 60114,
  Ji = Se ? Symbol.for("react.provider") : 60109,
  bi = Se ? Symbol.for("react.context") : 60110,
  ta = Se ? Symbol.for("react.async_mode") : 60111,
  eo = Se ? Symbol.for("react.concurrent_mode") : 60111,
  to = Se ? Symbol.for("react.forward_ref") : 60112,
  no = Se ? Symbol.for("react.suspense") : 60113,
  i3 = Se ? Symbol.for("react.suspense_list") : 60120,
  ro = Se ? Symbol.for("react.memo") : 60115,
  lo = Se ? Symbol.for("react.lazy") : 60116,
  o3 = Se ? Symbol.for("react.block") : 60121,
  s3 = Se ? Symbol.for("react.fundamental") : 60117,
  u3 = Se ? Symbol.for("react.responder") : 60118,
  a3 = Se ? Symbol.for("react.scope") : 60119;
function et(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case bu:
        switch (((e = e.type), e)) {
          case ta:
          case eo:
          case Yi:
          case qi:
          case Xi:
          case no:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case bi:
              case to:
              case lo:
              case ro:
              case Ji:
                return e;
              default:
                return t;
            }
        }
      case ea:
        return t;
    }
  }
}
function Ld(e) {
  return et(e) === eo;
}
Y.AsyncMode = ta;
Y.ConcurrentMode = eo;
Y.ContextConsumer = bi;
Y.ContextProvider = Ji;
Y.Element = bu;
Y.ForwardRef = to;
Y.Fragment = Yi;
Y.Lazy = lo;
Y.Memo = ro;
Y.Portal = ea;
Y.Profiler = qi;
Y.StrictMode = Xi;
Y.Suspense = no;
Y.isAsyncMode = function (e) {
  return Ld(e) || et(e) === ta;
};
Y.isConcurrentMode = Ld;
Y.isContextConsumer = function (e) {
  return et(e) === bi;
};
Y.isContextProvider = function (e) {
  return et(e) === Ji;
};
Y.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === bu;
};
Y.isForwardRef = function (e) {
  return et(e) === to;
};
Y.isFragment = function (e) {
  return et(e) === Yi;
};
Y.isLazy = function (e) {
  return et(e) === lo;
};
Y.isMemo = function (e) {
  return et(e) === ro;
};
Y.isPortal = function (e) {
  return et(e) === ea;
};
Y.isProfiler = function (e) {
  return et(e) === qi;
};
Y.isStrictMode = function (e) {
  return et(e) === Xi;
};
Y.isSuspense = function (e) {
  return et(e) === no;
};
Y.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Yi ||
    e === eo ||
    e === qi ||
    e === Xi ||
    e === no ||
    e === i3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === lo ||
        e.$$typeof === ro ||
        e.$$typeof === Ji ||
        e.$$typeof === bi ||
        e.$$typeof === to ||
        e.$$typeof === s3 ||
        e.$$typeof === u3 ||
        e.$$typeof === a3 ||
        e.$$typeof === o3))
  );
};
Y.typeOf = et;
jd.exports = Y;
var c3 = jd.exports,
  Ed = c3,
  f3 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  d3 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Nd = {};
Nd[Ed.ForwardRef] = f3;
Nd[Ed.Memo] = d3;
var X = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var na = Symbol.for("react.element"),
  ra = Symbol.for("react.portal"),
  io = Symbol.for("react.fragment"),
  oo = Symbol.for("react.strict_mode"),
  so = Symbol.for("react.profiler"),
  uo = Symbol.for("react.provider"),
  ao = Symbol.for("react.context"),
  p3 = Symbol.for("react.server_context"),
  co = Symbol.for("react.forward_ref"),
  fo = Symbol.for("react.suspense"),
  po = Symbol.for("react.suspense_list"),
  ho = Symbol.for("react.memo"),
  vo = Symbol.for("react.lazy"),
  h3 = Symbol.for("react.offscreen"),
  Pd;
Pd = Symbol.for("react.module.reference");
function ut(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case na:
        switch (((e = e.type), e)) {
          case io:
          case so:
          case oo:
          case fo:
          case po:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case p3:
              case ao:
              case co:
              case vo:
              case ho:
              case uo:
                return e;
              default:
                return t;
            }
        }
      case ra:
        return t;
    }
  }
}
X.ContextConsumer = ao;
X.ContextProvider = uo;
X.Element = na;
X.ForwardRef = co;
X.Fragment = io;
X.Lazy = vo;
X.Memo = ho;
X.Portal = ra;
X.Profiler = so;
X.StrictMode = oo;
X.Suspense = fo;
X.SuspenseList = po;
X.isAsyncMode = function () {
  return !1;
};
X.isConcurrentMode = function () {
  return !1;
};
X.isContextConsumer = function (e) {
  return ut(e) === ao;
};
X.isContextProvider = function (e) {
  return ut(e) === uo;
};
X.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === na;
};
X.isForwardRef = function (e) {
  return ut(e) === co;
};
X.isFragment = function (e) {
  return ut(e) === io;
};
X.isLazy = function (e) {
  return ut(e) === vo;
};
X.isMemo = function (e) {
  return ut(e) === ho;
};
X.isPortal = function (e) {
  return ut(e) === ra;
};
X.isProfiler = function (e) {
  return ut(e) === so;
};
X.isStrictMode = function (e) {
  return ut(e) === oo;
};
X.isSuspense = function (e) {
  return ut(e) === fo;
};
X.isSuspenseList = function (e) {
  return ut(e) === po;
};
X.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === io ||
    e === so ||
    e === oo ||
    e === fo ||
    e === po ||
    e === h3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === vo ||
        e.$$typeof === ho ||
        e.$$typeof === uo ||
        e.$$typeof === ao ||
        e.$$typeof === co ||
        e.$$typeof === Pd ||
        e.getModuleId !== void 0))
  );
};
X.typeOf = ut;
function v3() {
  const e = Jp();
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
        i = (n = { callback: r, next: null, prev: n });
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
const Tc = { notify() {}, get: () => [] };
function m3(e, t) {
  let n,
    r = Tc;
  function l(d) {
    return a(), r.subscribe(d);
  }
  function i() {
    r.notify();
  }
  function o() {
    m.onStateChange && m.onStateChange();
  }
  function u() {
    return !!n;
  }
  function a() {
    n || ((n = t ? t.addNestedSub(o) : e.subscribe(o)), (r = v3()));
  }
  function c() {
    n && (n(), (n = void 0), r.clear(), (r = Tc));
  }
  const m = {
    addNestedSub: l,
    notifyNestedSubs: i,
    handleChangeWrapper: o,
    isSubscribed: u,
    trySubscribe: a,
    tryUnsubscribe: c,
    getListeners: () => r,
  };
  return m;
}
const y3 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  g3 = y3 ? I.useLayoutEffect : I.useEffect;
function C3({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  noopCheck: i = "once",
}) {
  const o = I.useMemo(() => {
      const c = m3(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: i,
      };
    }, [e, r, l, i]),
    u = I.useMemo(() => e.getState(), [e]);
  g3(() => {
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
  const a = t || dn;
  return I.createElement(a.Provider, { value: o }, n);
}
function Md(e = dn) {
  const t = e === dn ? Sd : Ju(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const x3 = Md();
function w3(e = dn) {
  const t = e === dn ? x3 : Md(e);
  return function () {
    return t().dispatch;
  };
}
const k3 = w3();
t3(Yp.useSyncExternalStoreWithSelector);
qp(yd.unstable_batchedUpdates);
const Ad = "./logo-2083e589.svg",
  S3 = "./orientation-232b6c72.svg";
s;
function _3() {
  const [e, t] = I.useState(!1),
    n = () => {
      t(!0);
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "orientation " + (e ? "active" : "no-active"),
      children: [
        s.jsx("div", {
          className: "orientation__logo",
          children: s.jsx("img", {
            src: Ad,
            alt: "logo",
            className: "main__logo-img",
          }),
        }),
        s.jsxs("div", {
          className: "orientation__vertical",
          children: [
            s.jsx("img", {
              src: S3,
              alt: "orientation",
              className: "orientation__img",
            }),
            s.jsxs("h2", {
              className: "orientation__title",
              children: [
                "Поверни телефон, чтобы ",
                e ? "продолжить" : "начать",
                " игру",
              ],
            }),
          ],
        }),
        s.jsx("button", {
          className: "main__btn btn",
          onClick: n,
          children: "НАЧАТЬ",
        }),
      ],
    }),
  });
}
function ht(e) {
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
function pn(e) {
  return !!e && !!e[re];
}
function Vt(e) {
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
        (typeof l == "function" && Function.toString.call(l) === O3)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Ic] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Ic]) ||
      la(e) ||
      ia(e))
  );
}
function $n(e, t, n) {
  n === void 0 && (n = !1),
    kr(e) === 0
      ? (n ? Object.keys : ur)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, l) {
          return t(l, r, e);
        });
}
function kr(e) {
  var t = e[re];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : la(e)
    ? 2
    : ia(e)
    ? 3
    : 0;
}
function sr(e, t) {
  return kr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function j3(e, t) {
  return kr(e) === 2 ? e.get(t) : e[t];
}
function Td(e, t, n) {
  var r = kr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Od(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function la(e) {
  return A3 && e instanceof Map;
}
function ia(e) {
  return T3 && e instanceof Set;
}
function kn(e) {
  return e.o || e.t;
}
function oa(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = $d(e);
  delete t[re];
  for (var n = ur(t), r = 0; r < n.length; r++) {
    var l = n[r],
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
function sa(e, t) {
  return (
    t === void 0 && (t = !1),
    ua(e) ||
      pn(e) ||
      !Vt(e) ||
      (kr(e) > 1 && (e.set = e.add = e.clear = e.delete = L3),
      Object.freeze(e),
      t &&
        $n(
          e,
          function (n, r) {
            return sa(r, !0);
          },
          !0
        )),
    e
  );
}
function L3() {
  ht(2);
}
function ua(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Nt(e) {
  var t = tu[e];
  return t || ht(18, e), t;
}
function E3(e, t) {
  tu[e] || (tu[e] = t);
}
function Js() {
  return cl;
}
function Ho(e, t) {
  t && (Nt("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Si(e) {
  bs(e), e.p.forEach(N3), (e.p = null);
}
function bs(e) {
  e === cl && (cl = e.l);
}
function Oc(e) {
  return (cl = { p: [], l: cl, h: e, m: !0, _: 0 });
}
function N3(e) {
  var t = e[re];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function Ko(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || Nt("ES5").S(t, e, r),
    r
      ? (n[re].P && (Si(t), ht(4)),
        Vt(e) && ((e = _i(t, e)), t.l || ji(t, e)),
        t.u && Nt("Patches").M(n[re].t, e, t.u, t.s))
      : (e = _i(t, n, [])),
    Si(t),
    t.u && t.v(t.u, t.s),
    e !== zd ? e : void 0
  );
}
function _i(e, t, n) {
  if (ua(t)) return t;
  var r = t[re];
  if (!r)
    return (
      $n(
        t,
        function (u, a) {
          return zc(e, r, t, u, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return ji(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var l = r.i === 4 || r.i === 5 ? (r.o = oa(r.k)) : r.o,
      i = l,
      o = !1;
    r.i === 3 && ((i = new Set(l)), l.clear(), (o = !0)),
      $n(i, function (u, a) {
        return zc(e, r, l, u, a, n, o);
      }),
      ji(e, l, !1),
      n && e.u && Nt("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function zc(e, t, n, r, l, i, o) {
  if (pn(l)) {
    var u = _i(e, l, i && t && t.i !== 3 && !sr(t.R, r) ? i.concat(r) : void 0);
    if ((Td(n, r, u), !pn(u))) return;
    e.m = !1;
  } else o && n.add(l);
  if (Vt(l) && !ua(l)) {
    if (!e.h.D && e._ < 1) return;
    _i(e, l), (t && t.A.l) || ji(e, l);
  }
}
function ji(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && sa(t, n);
}
function Go(e, t) {
  var n = e[re];
  return (n ? kn(n) : e)[t];
}
function $c(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Yt(e) {
  e.P || ((e.P = !0), e.l && Yt(e.l));
}
function Yo(e) {
  e.o || (e.o = oa(e.t));
}
function eu(e, t, n) {
  var r = la(t)
    ? Nt("MapSet").F(t, n)
    : ia(t)
    ? Nt("MapSet").T(t, n)
    : e.O
    ? (function (l, i) {
        var o = Array.isArray(l),
          u = {
            i: o ? 1 : 0,
            A: i ? i.A : Js(),
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
          a = u,
          c = fl;
        o && ((a = [u]), (c = Fr));
        var m = Proxy.revocable(a, c),
          d = m.revoke,
          p = m.proxy;
        return (u.k = p), (u.j = d), p;
      })(t, n)
    : Nt("ES5").J(t, n);
  return (n ? n.A : Js()).p.push(r), r;
}
function P3(e) {
  return (
    pn(e) || ht(22, e),
    (function t(n) {
      if (!Vt(n)) return n;
      var r,
        l = n[re],
        i = kr(n);
      if (l) {
        if (!l.P && (l.i < 4 || !Nt("ES5").K(l))) return l.t;
        (l.I = !0), (r = Rc(n, i)), (l.I = !1);
      } else r = Rc(n, i);
      return (
        $n(r, function (o, u) {
          (l && j3(l.t, o) === u) || Td(r, o, t(u));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Rc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return oa(e);
}
function M3() {
  function e(i, o) {
    var u = l[i];
    return (
      u
        ? (u.enumerable = o)
        : (l[i] = u =
            {
              configurable: !0,
              enumerable: o,
              get: function () {
                var a = this[re];
                return fl.get(a, i);
              },
              set: function (a) {
                var c = this[re];
                fl.set(c, i, a);
              },
            }),
      u
    );
  }
  function t(i) {
    for (var o = i.length - 1; o >= 0; o--) {
      var u = i[o][re];
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && Yt(u);
            break;
          case 4:
            n(u) && Yt(u);
        }
    }
  }
  function n(i) {
    for (var o = i.t, u = i.k, a = ur(u), c = a.length - 1; c >= 0; c--) {
      var m = a[c];
      if (m !== re) {
        var d = o[m];
        if (d === void 0 && !sr(o, m)) return !0;
        var p = u[m],
          g = p && p[re];
        if (g ? g.t !== d : !Od(p, d)) return !0;
      }
    }
    var C = !!o[re];
    return a.length !== ur(o).length + (C ? 0 : 1);
  }
  function r(i) {
    var o = i.k;
    if (o.length !== i.t.length) return !0;
    var u = Object.getOwnPropertyDescriptor(o, o.length - 1);
    if (u && !u.get) return !0;
    for (var a = 0; a < o.length; a++) if (!o.hasOwnProperty(a)) return !0;
    return !1;
  }
  var l = {};
  E3("ES5", {
    J: function (i, o) {
      var u = Array.isArray(i),
        a = (function (m, d) {
          if (m) {
            for (var p = Array(d.length), g = 0; g < d.length; g++)
              Object.defineProperty(p, "" + g, e(g, !0));
            return p;
          }
          var C = $d(d);
          delete C[re];
          for (var x = ur(C), E = 0; E < x.length; E++) {
            var h = x[E];
            C[h] = e(h, m || !!C[h].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), C);
        })(u, i),
        c = {
          i: u ? 5 : 4,
          A: o ? o.A : Js(),
          P: !1,
          I: !1,
          R: {},
          l: o,
          t: i,
          k: a,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(a, re, { value: c, writable: !0 }), a;
    },
    S: function (i, o, u) {
      u
        ? pn(o) && o[re].A === i && t(i.p)
        : (i.u &&
            (function a(c) {
              if (c && typeof c == "object") {
                var m = c[re];
                if (m) {
                  var d = m.t,
                    p = m.k,
                    g = m.R,
                    C = m.i;
                  if (C === 4)
                    $n(p, function (v) {
                      v !== re &&
                        (d[v] !== void 0 || sr(d, v)
                          ? g[v] || a(p[v])
                          : ((g[v] = !0), Yt(m)));
                    }),
                      $n(d, function (v) {
                        p[v] !== void 0 || sr(p, v) || ((g[v] = !1), Yt(m));
                      });
                  else if (C === 5) {
                    if ((r(m) && (Yt(m), (g.length = !0)), p.length < d.length))
                      for (var x = p.length; x < d.length; x++) g[x] = !1;
                    else for (var E = d.length; E < p.length; E++) g[E] = !0;
                    for (
                      var h = Math.min(p.length, d.length), f = 0;
                      f < h;
                      f++
                    )
                      p.hasOwnProperty(f) || (g[f] = !0),
                        g[f] === void 0 && a(p[f]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
var Fc,
  cl,
  aa = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  A3 = typeof Map < "u",
  T3 = typeof Set < "u",
  Dc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  zd = aa
    ? Symbol.for("immer-nothing")
    : (((Fc = {})["immer-nothing"] = !0), Fc),
  Ic = aa ? Symbol.for("immer-draftable") : "__$immer_draftable",
  re = aa ? Symbol.for("immer-state") : "__$immer_state",
  O3 = "" + Object.prototype.constructor,
  ur =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  $d =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        ur(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  tu = {},
  fl = {
    get: function (e, t) {
      if (t === re) return e;
      var n = kn(e);
      if (!sr(n, t))
        return (function (l, i, o) {
          var u,
            a = $c(i, o);
          return a
            ? "value" in a
              ? a.value
              : (u = a.get) === null || u === void 0
              ? void 0
              : u.call(l.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !Vt(r)
        ? r
        : r === Go(e.t, t)
        ? (Yo(e), (e.o[t] = eu(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in kn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(kn(e));
    },
    set: function (e, t, n) {
      var r = $c(kn(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var l = Go(kn(e), t),
          i = l == null ? void 0 : l[re];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (Od(n, l) && (n !== void 0 || sr(e.t, t))) return !0;
        Yo(e), Yt(e);
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
        Go(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), Yo(e), Yt(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = kn(e),
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
      ht(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      ht(12);
    },
  },
  Fr = {};
$n(fl, function (e, t) {
  Fr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Fr.deleteProperty = function (e, t) {
    return Fr.set.call(this, e, t, void 0);
  }),
  (Fr.set = function (e, t, n) {
    return fl.set.call(this, e[0], t, n, e[0]);
  });
var z3 = (function () {
    function e(n) {
      var r = this;
      (this.O = Dc),
        (this.D = !0),
        (this.produce = function (l, i, o) {
          if (typeof l == "function" && typeof i != "function") {
            var u = i;
            i = l;
            var a = r;
            return function (x) {
              var E = this;
              x === void 0 && (x = u);
              for (
                var h = arguments.length, f = Array(h > 1 ? h - 1 : 0), v = 1;
                v < h;
                v++
              )
                f[v - 1] = arguments[v];
              return a.produce(x, function (w) {
                var _;
                return (_ = i).call.apply(_, [E, w].concat(f));
              });
            };
          }
          var c;
          if (
            (typeof i != "function" && ht(6),
            o !== void 0 && typeof o != "function" && ht(7),
            Vt(l))
          ) {
            var m = Oc(r),
              d = eu(r, l, void 0),
              p = !0;
            try {
              (c = i(d)), (p = !1);
            } finally {
              p ? Si(m) : bs(m);
            }
            return typeof Promise < "u" && c instanceof Promise
              ? c.then(
                  function (x) {
                    return Ho(m, o), Ko(x, m);
                  },
                  function (x) {
                    throw (Si(m), x);
                  }
                )
              : (Ho(m, o), Ko(c, m));
          }
          if (!l || typeof l != "object") {
            if (
              ((c = i(l)) === void 0 && (c = l),
              c === zd && (c = void 0),
              r.D && sa(c, !0),
              o)
            ) {
              var g = [],
                C = [];
              Nt("Patches").M(l, c, g, C), o(g, C);
            }
            return c;
          }
          ht(21, l);
        }),
        (this.produceWithPatches = function (l, i) {
          if (typeof l == "function")
            return function (c) {
              for (
                var m = arguments.length, d = Array(m > 1 ? m - 1 : 0), p = 1;
                p < m;
                p++
              )
                d[p - 1] = arguments[p];
              return r.produceWithPatches(c, function (g) {
                return l.apply(void 0, [g].concat(d));
              });
            };
          var o,
            u,
            a = r.produce(l, i, function (c, m) {
              (o = c), (u = m);
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
        Vt(n) || ht(8), pn(n) && (n = P3(n));
        var r = Oc(this),
          l = eu(this, n, void 0);
        return (l[re].C = !0), bs(r), l;
      }),
      (t.finishDraft = function (n, r) {
        var l = n && n[re],
          i = l.A;
        return Ho(i, r), Ko(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Dc && ht(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var l;
        for (l = r.length - 1; l >= 0; l--) {
          var i = r[l];
          if (i.path.length === 0 && i.op === "replace") {
            n = i.value;
            break;
          }
        }
        l > -1 && (r = r.slice(l + 1));
        var o = Nt("Patches").$;
        return pn(n)
          ? o(n, r)
          : this.produce(n, function (u) {
              return o(u, r);
            });
      }),
      e
    );
  })(),
  qe = new z3(),
  Rd = qe.produce;
qe.produceWithPatches.bind(qe);
qe.setAutoFreeze.bind(qe);
qe.setUseProxies.bind(qe);
qe.applyPatches.bind(qe);
qe.createDraft.bind(qe);
qe.finishDraft.bind(qe);
function dl(e) {
  "@babel/helpers - typeof";
  return (
    (dl =
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
    dl(e)
  );
}
function $3(e, t) {
  if (dl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (dl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function R3(e) {
  var t = $3(e, "string");
  return dl(t) === "symbol" ? t : String(t);
}
function F3(e, t, n) {
  return (
    (t = R3(t)),
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
function Vc(e, t) {
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
function Uc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vc(Object(n), !0).forEach(function (r) {
          F3(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Vc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Te(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Zc = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Xo = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Li = {
    INIT: "@@redux/INIT" + Xo(),
    REPLACE: "@@redux/REPLACE" + Xo(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Xo();
    },
  };
function D3(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Fd(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Te(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Te(1));
    return n(Fd)(e, t);
  }
  if (typeof e != "function") throw new Error(Te(2));
  var l = e,
    i = t,
    o = [],
    u = o,
    a = !1;
  function c() {
    u === o && (u = o.slice());
  }
  function m() {
    if (a) throw new Error(Te(3));
    return i;
  }
  function d(x) {
    if (typeof x != "function") throw new Error(Te(4));
    if (a) throw new Error(Te(5));
    var E = !0;
    return (
      c(),
      u.push(x),
      function () {
        if (E) {
          if (a) throw new Error(Te(6));
          (E = !1), c();
          var f = u.indexOf(x);
          u.splice(f, 1), (o = null);
        }
      }
    );
  }
  function p(x) {
    if (!D3(x)) throw new Error(Te(7));
    if (typeof x.type > "u") throw new Error(Te(8));
    if (a) throw new Error(Te(9));
    try {
      (a = !0), (i = l(i, x));
    } finally {
      a = !1;
    }
    for (var E = (o = u), h = 0; h < E.length; h++) {
      var f = E[h];
      f();
    }
    return x;
  }
  function g(x) {
    if (typeof x != "function") throw new Error(Te(10));
    (l = x), p({ type: Li.REPLACE });
  }
  function C() {
    var x,
      E = d;
    return (
      (x = {
        subscribe: function (f) {
          if (typeof f != "object" || f === null) throw new Error(Te(11));
          function v() {
            f.next && f.next(m());
          }
          v();
          var w = E(v);
          return { unsubscribe: w };
        },
      }),
      (x[Zc] = function () {
        return this;
      }),
      x
    );
  }
  return (
    p({ type: Li.INIT }),
    (r = { dispatch: p, subscribe: d, getState: m, replaceReducer: g }),
    (r[Zc] = C),
    r
  );
}
function I3(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Li.INIT });
    if (typeof r > "u") throw new Error(Te(12));
    if (typeof n(void 0, { type: Li.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Te(13));
  });
}
function Dd(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var i = Object.keys(n),
    o;
  try {
    I3(n);
  } catch (u) {
    o = u;
  }
  return function (a, c) {
    if ((a === void 0 && (a = {}), o)) throw o;
    for (var m = !1, d = {}, p = 0; p < i.length; p++) {
      var g = i[p],
        C = n[g],
        x = a[g],
        E = C(x, c);
      if (typeof E > "u") throw (c && c.type, new Error(Te(14)));
      (d[g] = E), (m = m || E !== x);
    }
    return (m = m || i.length !== Object.keys(a).length), m ? d : a;
  };
}
function Ei() {
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
function V3() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        i = function () {
          throw new Error(Te(15));
        },
        o = {
          getState: l.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        u = t.map(function (a) {
          return a(o);
        });
      return (
        (i = Ei.apply(void 0, u)(l.dispatch)),
        Uc(Uc({}, l), {}, { dispatch: i })
      );
    };
  };
}
function Id(e) {
  var t = function (r) {
    var l = r.dispatch,
      i = r.getState;
    return function (o) {
      return function (u) {
        return typeof u == "function" ? u(l, i, e) : o(u);
      };
    };
  };
  return t;
}
var Vd = Id();
Vd.withExtraArgument = Id;
const Bc = Vd;
var Ud =
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
              for (var i in l)
                Object.prototype.hasOwnProperty.call(l, i) && (r[i] = l[i]);
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
  U3 =
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
        r,
        l,
        i,
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
        return function (m) {
          return a([c, m]);
        };
      }
      function a(c) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              l &&
                (i =
                  c[0] & 2
                    ? l.return
                    : c[0]
                    ? l.throw || ((i = l.return) && i.call(l), 0)
                    : l.next) &&
                !(i = i.call(l, c[1])).done)
            )
              return i;
            switch (((l = 0), i && (c = [c[0] & 2, i.value]), c[0])) {
              case 0:
              case 1:
                i = c;
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
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (c[0] === 6 || c[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                  n.label = c[1];
                  break;
                }
                if (c[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = c);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(c);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            c = t.call(e, n);
          } catch (m) {
            (c = [6, m]), (l = 0);
          } finally {
            r = i = 0;
          }
        if (c[0] & 5) throw c[1];
        return { value: c[0] ? c[1] : void 0, done: !0 };
      }
    },
  gr =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, l = e.length; n < r; n++, l++) e[l] = t[n];
      return e;
    },
  Z3 = Object.defineProperty,
  B3 = Object.defineProperties,
  W3 = Object.getOwnPropertyDescriptors,
  Wc = Object.getOwnPropertySymbols,
  Q3 = Object.prototype.hasOwnProperty,
  H3 = Object.prototype.propertyIsEnumerable,
  Qc = function (e, t, n) {
    return t in e
      ? Z3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  un = function (e, t) {
    for (var n in t || (t = {})) Q3.call(t, n) && Qc(e, n, t[n]);
    if (Wc)
      for (var r = 0, l = Wc(t); r < l.length; r++) {
        var n = l[r];
        H3.call(t, n) && Qc(e, n, t[n]);
      }
    return e;
  },
  qo = function (e, t) {
    return B3(e, W3(t));
  },
  K3 = function (e, t, n) {
    return new Promise(function (r, l) {
      var i = function (a) {
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
          return a.done ? r(a.value) : Promise.resolve(a.value).then(i, o);
        };
      u((n = n.apply(e, t)).next());
    });
  },
  G3 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Ei
              : Ei.apply(null, arguments);
        };
function Y3(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var X3 = (function (e) {
    Ud(t, e);
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
          ? new (t.bind.apply(t, gr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, gr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  q3 = (function (e) {
    Ud(t, e);
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
          ? new (t.bind.apply(t, gr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, gr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function nu(e) {
  return Vt(e) ? Rd(e, function () {}) : e;
}
function J3(e) {
  return typeof e == "boolean";
}
function b3() {
  return function (t) {
    return e4(t);
  };
}
function e4(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new X3();
  return (
    n && (J3(n) ? r.push(Bc) : r.push(Bc.withExtraArgument(n.extraArgument))), r
  );
}
var t4 = !0;
function n4(e) {
  var t = b3(),
    n = e || {},
    r = n.reducer,
    l = r === void 0 ? void 0 : r,
    i = n.middleware,
    o = i === void 0 ? t() : i,
    u = n.devTools,
    a = u === void 0 ? !0 : u,
    c = n.preloadedState,
    m = c === void 0 ? void 0 : c,
    d = n.enhancers,
    p = d === void 0 ? void 0 : d,
    g;
  if (typeof l == "function") g = l;
  else if (Y3(l)) g = Dd(l);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var C = o;
  typeof C == "function" && (C = C(t));
  var x = V3.apply(void 0, C),
    E = Ei;
  a && (E = G3(un({ trace: !t4 }, typeof a == "object" && a)));
  var h = new q3(x),
    f = h;
  Array.isArray(p) ? (f = gr([x], p)) : typeof p == "function" && (f = p(h));
  var v = E.apply(void 0, f);
  return Fd(g, m, v);
}
function an(e, t) {
  function n() {
    for (var r = [], l = 0; l < arguments.length; l++) r[l] = arguments[l];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error("prepareAction did not return an object");
      return un(
        un({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
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
function Zd(e) {
  var t = {},
    n = [],
    r,
    l = {
      addCase: function (i, o) {
        var u = typeof i == "string" ? i : i.type;
        if (u in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[u] = o), l;
      },
      addMatcher: function (i, o) {
        return n.push({ matcher: i, reducer: o }), l;
      },
      addDefaultCase: function (i) {
        return (r = i), l;
      },
    };
  return e(l), [t, n, r];
}
function r4(e) {
  return typeof e == "function";
}
function l4(e, t, n, r) {
  n === void 0 && (n = []);
  var l = typeof t == "function" ? Zd(t) : [t, n, r],
    i = l[0],
    o = l[1],
    u = l[2],
    a;
  if (r4(e))
    a = function () {
      return nu(e());
    };
  else {
    var c = nu(e);
    a = function () {
      return c;
    };
  }
  function m(d, p) {
    d === void 0 && (d = a());
    var g = gr(
      [i[p.type]],
      o
        .filter(function (C) {
          var x = C.matcher;
          return x(p);
        })
        .map(function (C) {
          var x = C.reducer;
          return x;
        })
    );
    return (
      g.filter(function (C) {
        return !!C;
      }).length === 0 && (g = [u]),
      g.reduce(function (C, x) {
        if (x)
          if (pn(C)) {
            var E = C,
              h = x(E, p);
            return h === void 0 ? C : h;
          } else {
            if (Vt(C))
              return Rd(C, function (f) {
                return x(f, p);
              });
            var h = x(C, p);
            if (h === void 0) {
              if (C === null) return C;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return h;
          }
        return C;
      }, d)
    );
  }
  return (m.getInitialState = a), m;
}
function i4(e, t) {
  return e + "/" + t;
}
function mo(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : nu(e.initialState),
    r = e.reducers || {},
    l = Object.keys(r),
    i = {},
    o = {},
    u = {};
  l.forEach(function (m) {
    var d = r[m],
      p = i4(t, m),
      g,
      C;
    "reducer" in d ? ((g = d.reducer), (C = d.prepare)) : (g = d),
      (i[m] = g),
      (o[p] = g),
      (u[m] = C ? an(p, C) : an(p));
  });
  function a() {
    var m =
        typeof e.extraReducers == "function"
          ? Zd(e.extraReducers)
          : [e.extraReducers],
      d = m[0],
      p = d === void 0 ? {} : d,
      g = m[1],
      C = g === void 0 ? [] : g,
      x = m[2],
      E = x === void 0 ? void 0 : x,
      h = un(un({}, p), o);
    return l4(n, function (f) {
      for (var v in h) f.addCase(v, h[v]);
      for (var w = 0, _ = C; w < _.length; w++) {
        var P = _[w];
        f.addMatcher(P.matcher, P.reducer);
      }
      E && f.addDefaultCase(E);
    });
  }
  var c;
  return {
    name: t,
    reducer: function (m, d) {
      return c || (c = a()), c(m, d);
    },
    actions: u,
    caseReducers: i,
    getInitialState: function () {
      return c || (c = a()), c.getInitialState();
    },
  };
}
var o4 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  s4 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += o4[(Math.random() * 64) | 0];
    return t;
  },
  u4 = ["name", "message", "stack", "code"],
  Jo = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Hc = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  a4 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = u4; n < r.length; n++) {
        var l = r[n];
        typeof e[l] == "string" && (t[l] = e[l]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, n, r) {
    var l = an(t + "/fulfilled", function (c, m, d, p) {
        return {
          payload: c,
          meta: qo(un({}, p || {}), {
            arg: d,
            requestId: m,
            requestStatus: "fulfilled",
          }),
        };
      }),
      i = an(t + "/pending", function (c, m, d) {
        return {
          payload: void 0,
          meta: qo(un({}, d || {}), {
            arg: m,
            requestId: c,
            requestStatus: "pending",
          }),
        };
      }),
      o = an(t + "/rejected", function (c, m, d, p, g) {
        return {
          payload: p,
          error: ((r && r.serializeError) || a4)(c || "Rejected"),
          meta: qo(un({}, g || {}), {
            arg: d,
            requestId: m,
            rejectedWithValue: !!p,
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
      return function (m, d, p) {
        var g = r != null && r.idGenerator ? r.idGenerator(c) : s4(),
          C = new u(),
          x;
        function E(f) {
          (x = f), C.abort();
        }
        var h = (function () {
          return K3(this, null, function () {
            var f, v, w, _, P, M, z;
            return U3(this, function (Z) {
              switch (Z.label) {
                case 0:
                  return (
                    Z.trys.push([0, 4, , 5]),
                    (_ =
                      (f = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : f.call(r, c, { getState: d, extra: p })),
                    f4(_) ? [4, _] : [3, 2]
                  );
                case 1:
                  (_ = Z.sent()), (Z.label = 2);
                case 2:
                  if (_ === !1 || C.signal.aborted)
                    throw {
                      name: "ConditionError",
                      message:
                        "Aborted due to condition callback returning false.",
                    };
                  return (
                    (P = new Promise(function (R, K) {
                      return C.signal.addEventListener("abort", function () {
                        return K({
                          name: "AbortError",
                          message: x || "Aborted",
                        });
                      });
                    })),
                    m(
                      i(
                        g,
                        c,
                        (v = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : v.call(
                              r,
                              { requestId: g, arg: c },
                              { getState: d, extra: p }
                            )
                      )
                    ),
                    [
                      4,
                      Promise.race([
                        P,
                        Promise.resolve(
                          n(c, {
                            dispatch: m,
                            getState: d,
                            extra: p,
                            requestId: g,
                            signal: C.signal,
                            abort: E,
                            rejectWithValue: function (R, K) {
                              return new Jo(R, K);
                            },
                            fulfillWithValue: function (R, K) {
                              return new Hc(R, K);
                            },
                          })
                        ).then(function (R) {
                          if (R instanceof Jo) throw R;
                          return R instanceof Hc
                            ? l(R.payload, g, c, R.meta)
                            : l(R, g, c);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (w = Z.sent()), [3, 5];
                case 4:
                  return (
                    (M = Z.sent()),
                    (w =
                      M instanceof Jo
                        ? o(null, g, c, M.payload, M.meta)
                        : o(M, g, c)),
                    [3, 5]
                  );
                case 5:
                  return (
                    (z =
                      r &&
                      !r.dispatchConditionRejection &&
                      o.match(w) &&
                      w.meta.condition),
                    z || m(w),
                    [2, w]
                  );
              }
            });
          });
        })();
        return Object.assign(h, {
          abort: E,
          requestId: g,
          arg: c,
          unwrap: function () {
            return h.then(c4);
          },
        });
      };
    }
    return Object.assign(a, {
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
function c4(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function f4(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var ca = "listenerMiddleware";
an(ca + "/add");
an(ca + "/removeAll");
an(ca + "/remove");
var Kc;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
M3();
const d4 = {
    arrQuestions: [
      [100, 200, 300, 400],
      [100, 200, 300, 400],
      [100, 200, 300, 400],
      [100, 200, 300, 400],
    ],
  },
  Bd = mo({
    name: "questions",
    initialState: d4,
    reducers: {
      removePoints(e, t) {
        e.arrQuestions[t.payload[0]][t.payload[1]] = 0;
      },
    },
  }),
  p4 = Bd.reducer,
  { removePoints: h4 } = Bd.actions,
  v4 = { activeQuestion: [0, 0] },
  Wd = mo({
    name: "active",
    initialState: v4,
    reducers: {
      saveActive(e, t) {
        e.activeQuestion = t.payload;
      },
    },
  }),
  m4 = Wd.reducer,
  { saveActive: Qd } = Wd.actions,
  y4 = { points: 0 },
  Hd = mo({
    name: "points",
    initialState: y4,
    reducers: {
      setPoints(e, t) {
        e.points += t.payload;
      },
    },
  }),
  g4 = Hd.reducer,
  { setPoints: C4 } = Hd.actions,
  x4 = { checkAnswer: "wait" },
  Kd = mo({
    name: "checkAnswer",
    initialState: x4,
    reducers: {
      setCheckAnswer(e, t) {
        e.checkAnswer = t.payload;
      },
    },
  }),
  w4 = Kd.reducer,
  { setCheckAnswer: H } = Kd.actions,
  k4 = Dd({
    arrQuestionsReducer: p4,
    activeQuestion: m4,
    points: g4,
    checkAnswerReducer: w4,
  }),
  S4 = () => n4({ reducer: k4 }),
  _e = () => k3(),
  Pn = l3;
function _4(e) {
  const { arrQuestions: t } = Pn((i) => i.arrQuestionsReducer),
    n = _e(),
    r = ["деятельность", "география", "цифры", "работа у нас"],
    l = (i) => {
      t[i[0]][i[1]] !== 0 && (e.openTask(!0), n(Qd(i)));
    };
  return s.jsx(s.Fragment, {
    children: s.jsx("div", {
      className: "main__game game",
      children: t.map((i, o) =>
        i.map((u, a) =>
          a === 0
            ? s.jsxs(s.Fragment, {
                children: [
                  s.jsx(
                    "div",
                    { className: "game__category", children: r[o] },
                    a * o
                  ),
                  s.jsx(
                    "div",
                    {
                      className: "game__item" + (u === 0 ? " disable" : ""),
                      onClick: () => l([o, a]),
                      children: (a + 1) * 100,
                    },
                    o + " " + a
                  ),
                ],
              })
            : s.jsx(
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
function j4(e) {
  const { tasksEnd: t } = e,
    { points: n } = Pn((r) => r.points);
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "main__points points",
      children: [
        s.jsx("img", { src: Ad, alt: "logo", className: "points__logo" }),
        s.jsxs("div", {
          className: "points__balance " + (t ? "end" : ""),
          children: [
            s.jsx("p", { className: "points__title", children: "БАЛАНС" }),
            s.jsx("span", { className: "points__num", children: n }),
          ],
        }),
      ],
    }),
  });
}
const L4 = "_task__info_1g95i_1",
  E4 = "_task_1g95i_1",
  N4 = "_list_1g95i_95",
  gn = { task__info: L4, task: E4, list: N4 },
  P4 = "_opacityTask_1tf2z_1",
  M4 = { opacityTask: P4 },
  yn = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("div", { className: M4.opacityTask }),
    });
function A4(e) {
  const [t, n] = I.useState(1),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.currentTarget;
      n(+a.value), l(), a.value === "2" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: gn.task__info,
      children: [
        i && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Размести ползунок около верного ответае",
        }),
        s.jsxs("div", {
          className: gn.task,
          children: [
            s.jsx("input", {
              type: "range",
              min: "1",
              max: "4",
              step: "1",
              defaultValue: "1",
              list: "list",
              onChange: o,
            }),
            s.jsxs("datalist", {
              id: "list",
              className: gn.list,
              children: [
                s.jsx("option", {
                  value: "1",
                  className: gn.item,
                  style: t === 1 ? { opacity: 1 } : { opacity: 0.5 },
                  children: "Управление проектированием",
                }),
                s.jsx("option", {
                  value: "2",
                  className: gn.item,
                  style: t === 2 ? { opacity: 1 } : { opacity: 0.5 },
                  children: "Управление выпуском продукции",
                }),
                s.jsx("option", {
                  value: "3",
                  className: gn.item,
                  style: t === 3 ? { opacity: 1 } : { opacity: 0.5 },
                  children: "Управление строительством",
                }),
                s.jsx("option", {
                  value: "4",
                  className: gn.item,
                  style: t === 4 ? { opacity: 1 } : { opacity: 0.5 },
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
const T4 = "_taskInfo_1xio4_1",
  O4 = "_task_1xio4_1",
  z4 = "_taskAnswer_1xio4_29",
  $4 = "_danger_1xio4_69",
  R4 = "_cart_1xio4_75",
  Dl = { taskInfo: T4, task: O4, taskAnswer: z4, danger: $4, cart: R4 },
  F4 = "./cart-4b20c114.png";
function D4(e) {
  const t = _e(),
    { selectAnswer: n, checkClick: r } = e,
    l = I.useRef(null);
  let i = 0,
    o = 0;
  I.useEffect(() => {
    if (l.current) {
      const E = l.current.getBoundingClientRect();
      (i = E.left), (o = E.top);
    }
  });
  const [u, a] = I.useState([
      { value: "EPC", check: !1 },
      { value: "САПР", check: !1 },
      { value: "UGC", check: !1 },
      { value: "BIM", check: !1 },
    ]),
    [c, m] = I.useState("-1");
  let d,
    p = "";
  const g = (E) => {
      const h = E.changedTouches[0];
      if (((d = E.changedTouches[0].target), d.style.position === "absolute"))
        return;
      const f = h.pageY - o - d.offsetHeight / 2,
        v = h.pageX - i - d.offsetWidth / 2;
      (d.style.position = "absolute"),
        (d.style.zIndex = "1"),
        (d.style.left = v + "px"),
        (d.style.top = f + "px");
    },
    C = (E) => {
      const h = E.changedTouches[0];
      if (d) {
        if (d.style.top === "36px") return;
        const f = h.pageY - o - d.offsetHeight / 2,
          v = h.pageX - i - d.offsetWidth / 2;
        f > 14 && f < 112 && (d.style.top = f + "px"),
          v > 0 && v < 270 && (d.style.left = v + "px"),
          f > 14 && f < 140 && v > 90 && v < 170
            ? (d.getAttribute("data-value") === "1" &&
                (d.style.fontSize = "20px"),
              (d.style.color = "#008C95"),
              (d.style.top = "36px"),
              (p = i + (66 - d.offsetWidth) / 2 + "px"),
              (d.style.left = p))
            : ((d.style.color = "#fff"), (d.style.fontSize = "25px"));
      }
    },
    x = (E) => {
      if ((E.preventDefault(), d)) {
        if (d.style.top !== "36px" && d.style.left !== p) {
          d.style.position = "static";
          return;
        }
        const h = d.getAttribute("data-value");
        h &&
          (a(
            u.map((f, v) => (v + "" === h ? (f.check = !0) : (f.check = !1), f))
          ),
          t(H(h === "2" ? "true" : "false")),
          m(h)),
          n();
      }
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: Dl.taskInfo,
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Перетащи выбранный вариант ответа в корзину",
        }),
        s.jsxs("div", {
          className: Dl.task,
          ref: l,
          children: [
            u.map((E, h) =>
              s.jsx(
                "div",
                {
                  className: Dl.taskAnswer,
                  children: s.jsx("span", {
                    onTouchStart: (f) => g(f),
                    onTouchMove: (f) => C(f),
                    onTouchEnd: (f) => x(f),
                    "data-value": h,
                    style: {
                      color: E.check
                        ? r
                          ? c === "2"
                            ? "#008C95"
                            : "#C00000"
                          : "#008C95"
                        : "#fff",
                      position: E.check ? "absolute" : "static",
                    },
                    children: E.value,
                  }),
                },
                h
              )
            ),
            s.jsx("div", {
              className: Dl.cart,
              children: s.jsx("img", { src: F4, alt: "cart" }),
            }),
          ],
        }),
      ],
    }),
  });
}
var gl = (e) => e.type === "checkbox",
  er = (e) => e instanceof Date,
  Re = (e) => e == null;
const Gd = (e) => typeof e == "object";
var ge = (e) => !Re(e) && !Array.isArray(e) && Gd(e) && !er(e),
  I4 = (e) =>
    ge(e) && e.target ? (gl(e.target) ? e.target.checked : e.target.value) : e,
  V4 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  U4 = (e, t) => e.has(V4(t)),
  Z4 = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return ge(t) && t.hasOwnProperty("isPrototypeOf");
  },
  fa =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Wt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(fa && (e instanceof Blob || e instanceof FileList)) &&
    (n || ge(e))
  )
    if (((t = n ? [] : {}), !n && !Z4(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Wt(e[r]));
  else return e;
  return t;
}
var Cl = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  he = (e) => e === void 0,
  $ = (e, t, n) => {
    if (!t || !ge(e)) return n;
    const r = Cl(t.split(/[,[\].]+?/)).reduce((l, i) => (Re(l) ? l : l[i]), e);
    return he(r) || r === e ? (he(e[t]) ? n : e[t]) : r;
  };
const Gc = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  vt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Pt = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
Tt.createContext(null);
var B4 = (e, t, n, r = !0) => {
    const l = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(l, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== vt.all &&
              (t._proxyFormState[o] = !r || vt.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return l;
  },
  tt = (e) => ge(e) && !Object.keys(e).length,
  W4 = (e, t, n, r) => {
    n(e);
    const { name: l, ...i } = e;
    return (
      tt(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!r || vt.all))
    );
  },
  bo = (e) => (Array.isArray(e) ? e : [e]);
function Q4(e) {
  const t = Tt.useRef(e);
  (t.current = e),
    Tt.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var jt = (e) => typeof e == "string",
  H4 = (e, t, n, r, l) =>
    jt(e)
      ? (r && t.watch.add(e), $(n, e, l))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), $(n, i)))
      : (r && (t.watchAll = !0), n),
  da = (e) => /^\w*$/.test(e),
  Yd = (e) => Cl(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function ne(e, t, n) {
  let r = -1;
  const l = da(t) ? [t] : Yd(t),
    i = l.length,
    o = i - 1;
  for (; ++r < i; ) {
    const u = l[r];
    let a = n;
    if (r !== o) {
      const c = e[u];
      a = ge(c) || Array.isArray(c) ? c : isNaN(+l[r + 1]) ? {} : [];
    }
    (e[u] = a), (e = e[u]);
  }
  return e;
}
var K4 = (e, t, n, r, l) =>
  t
    ? {
        ...n[e],
        types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: l || !0 },
      }
    : {};
const ru = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const l = $(e, r);
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
      } else ge(o) && ru(o, t);
    }
  }
};
var Yc = (e) => ({
    isOnSubmit: !e || e === vt.onSubmit,
    isOnBlur: e === vt.onBlur,
    isOnChange: e === vt.onChange,
    isOnAll: e === vt.all,
    isOnTouch: e === vt.onTouched,
  }),
  Xc = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      )),
  G4 = (e, t, n) => {
    const r = Cl($(e, n));
    return ne(r, "root", t[n]), ne(e, n, r), e;
  },
  ar = (e) => typeof e == "boolean",
  pa = (e) => e.type === "file",
  Jt = (e) => typeof e == "function",
  Ni = (e) => {
    if (!fa) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Jl = (e) => jt(e),
  ha = (e) => e.type === "radio",
  Pi = (e) => e instanceof RegExp;
const qc = { value: !1, isValid: !1 },
  Jc = { value: !0, isValid: !0 };
var Xd = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !he(e[0].attributes.value)
        ? he(e[0].value) || e[0].value === ""
          ? Jc
          : { value: e[0].value, isValid: !0 }
        : Jc
      : qc;
  }
  return qc;
};
const bc = { isValid: !1, value: null };
var qd = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        bc
      )
    : bc;
function ef(e, t, n = "validate") {
  if (Jl(e) || (Array.isArray(e) && e.every(Jl)) || (ar(e) && !e))
    return { type: n, message: Jl(e) ? e : "", ref: t };
}
var Un = (e) => (ge(e) && !Pi(e) ? e : { value: e, message: "" }),
  tf = async (e, t, n, r, l) => {
    const {
        ref: i,
        refs: o,
        required: u,
        maxLength: a,
        minLength: c,
        min: m,
        max: d,
        pattern: p,
        validate: g,
        name: C,
        valueAsNumber: x,
        mount: E,
        disabled: h,
      } = e._f,
      f = $(t, C);
    if (!E || h) return {};
    const v = o ? o[0] : i,
      w = (B) => {
        r &&
          v.reportValidity &&
          (v.setCustomValidity(ar(B) ? "" : B || ""), v.reportValidity());
      },
      _ = {},
      P = ha(i),
      M = gl(i),
      z = P || M,
      Z =
        ((x || pa(i)) && he(i.value) && he(f)) ||
        (Ni(i) && i.value === "") ||
        f === "" ||
        (Array.isArray(f) && !f.length),
      R = K4.bind(null, C, n, _),
      K = (B, U, q, Ce = Pt.maxLength, xe = Pt.minLength) => {
        const Pe = B ? U : q;
        _[C] = {
          type: B ? Ce : xe,
          message: Pe,
          ref: i,
          ...R(B ? Ce : xe, Pe),
        };
      };
    if (
      l
        ? !Array.isArray(f) || !f.length
        : u &&
          ((!z && (Z || Re(f))) ||
            (ar(f) && !f) ||
            (M && !Xd(o).isValid) ||
            (P && !qd(o).isValid))
    ) {
      const { value: B, message: U } = Jl(u)
        ? { value: !!u, message: u }
        : Un(u);
      if (
        B &&
        ((_[C] = {
          type: Pt.required,
          message: U,
          ref: v,
          ...R(Pt.required, U),
        }),
        !n)
      )
        return w(U), _;
    }
    if (!Z && (!Re(m) || !Re(d))) {
      let B, U;
      const q = Un(d),
        Ce = Un(m);
      if (!Re(f) && !isNaN(f)) {
        const xe = i.valueAsNumber || (f && +f);
        Re(q.value) || (B = xe > q.value), Re(Ce.value) || (U = xe < Ce.value);
      } else {
        const xe = i.valueAsDate || new Date(f),
          Pe = (V) => new Date(new Date().toDateString() + " " + V),
          N = i.type == "time",
          O = i.type == "week";
        jt(q.value) &&
          f &&
          (B = N
            ? Pe(f) > Pe(q.value)
            : O
            ? f > q.value
            : xe > new Date(q.value)),
          jt(Ce.value) &&
            f &&
            (U = N
              ? Pe(f) < Pe(Ce.value)
              : O
              ? f < Ce.value
              : xe < new Date(Ce.value));
      }
      if ((B || U) && (K(!!B, q.message, Ce.message, Pt.max, Pt.min), !n))
        return w(_[C].message), _;
    }
    if ((a || c) && !Z && (jt(f) || (l && Array.isArray(f)))) {
      const B = Un(a),
        U = Un(c),
        q = !Re(B.value) && f.length > +B.value,
        Ce = !Re(U.value) && f.length < +U.value;
      if ((q || Ce) && (K(q, B.message, U.message), !n))
        return w(_[C].message), _;
    }
    if (p && !Z && jt(f)) {
      const { value: B, message: U } = Un(p);
      if (
        Pi(B) &&
        !f.match(B) &&
        ((_[C] = { type: Pt.pattern, message: U, ref: i, ...R(Pt.pattern, U) }),
        !n)
      )
        return w(U), _;
    }
    if (g) {
      if (Jt(g)) {
        const B = await g(f, t),
          U = ef(B, v);
        if (U && ((_[C] = { ...U, ...R(Pt.validate, U.message) }), !n))
          return w(U.message), _;
      } else if (ge(g)) {
        let B = {};
        for (const U in g) {
          if (!tt(B) && !n) break;
          const q = ef(await g[U](f, t), v, U);
          q &&
            ((B = { ...q, ...R(U, q.message) }), w(q.message), n && (_[C] = B));
        }
        if (!tt(B) && ((_[C] = { ref: v, ...B }), !n)) return _;
      }
    }
    return w(!0), _;
  };
function Y4(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = he(e) ? r++ : e[t[r++]];
  return e;
}
function X4(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !he(e[t])) return !1;
  return !0;
}
function je(e, t) {
  const n = Array.isArray(t) ? t : da(t) ? [t] : Yd(t),
    r = n.length === 1 ? e : Y4(e, n),
    l = n.length - 1,
    i = n[l];
  return (
    r && delete r[i],
    l !== 0 &&
      ((ge(r) && tt(r)) || (Array.isArray(r) && X4(r))) &&
      je(e, n.slice(0, -1)),
    e
  );
}
function es() {
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
var Mi = (e) => Re(e) || !Gd(e);
function Ln(e, t) {
  if (Mi(e) || Mi(t)) return e === t;
  if (er(e) && er(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const l of n) {
    const i = e[l];
    if (!r.includes(l)) return !1;
    if (l !== "ref") {
      const o = t[l];
      if (
        (er(i) && er(o)) ||
        (ge(i) && ge(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !Ln(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var Jd = (e) => e.type === "select-multiple",
  q4 = (e) => ha(e) || gl(e),
  ts = (e) => Ni(e) && e.isConnected,
  bd = (e) => {
    for (const t in e) if (Jt(e[t])) return !0;
    return !1;
  };
function Ai(e, t = {}) {
  const n = Array.isArray(e);
  if (ge(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (ge(e[r]) && !bd(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Ai(e[r], t[r]))
        : Re(e[r]) || (t[r] = !0);
  return t;
}
function e0(e, t, n) {
  const r = Array.isArray(e);
  if (ge(e) || r)
    for (const l in e)
      Array.isArray(e[l]) || (ge(e[l]) && !bd(e[l]))
        ? he(t) || Mi(n[l])
          ? (n[l] = Array.isArray(e[l]) ? Ai(e[l], []) : { ...Ai(e[l]) })
          : e0(e[l], Re(t) ? {} : t[l], n[l])
        : (n[l] = !Ln(e[l], t[l]));
  return n;
}
var ns = (e, t) => e0(e, t, Ai(t)),
  t0 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    he(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && jt(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function rs(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return pa(t)
      ? t.files
      : ha(t)
      ? qd(e.refs).value
      : Jd(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : gl(t)
      ? Xd(e.refs).value
      : t0(he(t.value) ? e.ref.value : t.value, e);
}
var J4 = (e, t, n, r) => {
    const l = {};
    for (const i of e) {
      const o = $(t, i);
      o && ne(l, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: l,
      shouldUseNativeValidation: r,
    };
  },
  Tr = (e) =>
    he(e)
      ? e
      : Pi(e)
      ? e.source
      : ge(e)
      ? Pi(e.value)
        ? e.value.source
        : e.value
      : e,
  b4 = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function nf(e, t, n) {
  const r = $(e, n);
  if (r || da(n)) return { error: r, name: n };
  const l = n.split(".");
  for (; l.length; ) {
    const i = l.join("."),
      o = $(t, i),
      u = $(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (u && u.type) return { name: i, error: u };
    l.pop();
  }
  return { name: n };
}
var e5 = (e, t, n, r, l) =>
    l.isOnAll
      ? !1
      : !n && l.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : l.isOnBlur)
      ? !e
      : (n ? r.isOnChange : l.isOnChange)
      ? e
      : !0,
  t5 = (e, t) => !Cl($(e, t)).length && je(e, t);
const n5 = {
  mode: vt.onSubmit,
  reValidateMode: vt.onChange,
  shouldFocusError: !0,
};
function r5(e = {}, t) {
  let n = { ...n5, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Jt(n.defaultValues),
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
      ge(n.defaultValues) || ge(n.values)
        ? Wt(n.defaultValues || n.values) || {}
        : {},
    o = n.shouldUnregister ? {} : Wt(i),
    u = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    m = 0;
  const d = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    p = { values: es(), array: es(), state: es() },
    g = e.resetOptions && e.resetOptions.keepDirtyValues,
    C = Yc(n.mode),
    x = Yc(n.reValidateMode),
    E = n.criteriaMode === vt.all,
    h = (y) => (k) => {
      clearTimeout(m), (m = setTimeout(y, k));
    },
    f = async (y) => {
      if (d.isValid || y) {
        const k = n.resolver ? tt((await Z()).errors) : await K(l, !0);
        k !== r.isValid && p.state.next({ isValid: k });
      }
    },
    v = (y) => d.isValidating && p.state.next({ isValidating: y }),
    w = (y, k = [], S, F, A = !0, L = !0) => {
      if (F && S) {
        if (((u.action = !0), L && Array.isArray($(l, y)))) {
          const D = S($(l, y), F.argA, F.argB);
          A && ne(l, y, D);
        }
        if (L && Array.isArray($(r.errors, y))) {
          const D = S($(r.errors, y), F.argA, F.argB);
          A && ne(r.errors, y, D), t5(r.errors, y);
        }
        if (d.touchedFields && L && Array.isArray($(r.touchedFields, y))) {
          const D = S($(r.touchedFields, y), F.argA, F.argB);
          A && ne(r.touchedFields, y, D);
        }
        d.dirtyFields && (r.dirtyFields = ns(i, o)),
          p.state.next({
            name: y,
            isDirty: U(y, k),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else ne(o, y, k);
    },
    _ = (y, k) => {
      ne(r.errors, y, k), p.state.next({ errors: r.errors });
    },
    P = (y, k, S, F) => {
      const A = $(l, y);
      if (A) {
        const L = $(o, y, he(S) ? $(i, y) : S);
        he(L) || (F && F.defaultChecked) || k
          ? ne(o, y, k ? L : rs(A._f))
          : xe(y, L),
          u.mount && f();
      }
    },
    M = (y, k, S, F, A) => {
      let L = !1,
        D = !1;
      const ue = { name: y };
      if (!S || F) {
        d.isDirty &&
          ((D = r.isDirty),
          (r.isDirty = ue.isDirty = U()),
          (L = D !== ue.isDirty));
        const fe = Ln($(i, y), k);
        (D = $(r.dirtyFields, y)),
          fe ? je(r.dirtyFields, y) : ne(r.dirtyFields, y, !0),
          (ue.dirtyFields = r.dirtyFields),
          (L = L || (d.dirtyFields && D !== !fe));
      }
      if (S) {
        const fe = $(r.touchedFields, y);
        fe ||
          (ne(r.touchedFields, y, S),
          (ue.touchedFields = r.touchedFields),
          (L = L || (d.touchedFields && fe !== S)));
      }
      return L && A && p.state.next(ue), L ? ue : {};
    },
    z = (y, k, S, F) => {
      const A = $(r.errors, y),
        L = d.isValid && ar(k) && r.isValid !== k;
      if (
        (e.delayError && S
          ? ((c = h(() => _(y, S))), c(e.delayError))
          : (clearTimeout(m),
            (c = null),
            S ? ne(r.errors, y, S) : je(r.errors, y)),
        (S ? !Ln(A, S) : A) || !tt(F) || L)
      ) {
        const D = {
          ...F,
          ...(L && ar(k) ? { isValid: k } : {}),
          errors: r.errors,
          name: y,
        };
        (r = { ...r, ...D }), p.state.next(D);
      }
      v(!1);
    },
    Z = async (y) =>
      n.resolver(
        o,
        n.context,
        J4(y || a.mount, l, n.criteriaMode, n.shouldUseNativeValidation)
      ),
    R = async (y) => {
      const { errors: k } = await Z();
      if (y)
        for (const S of y) {
          const F = $(k, S);
          F ? ne(r.errors, S, F) : je(r.errors, S);
        }
      else r.errors = k;
      return k;
    },
    K = async (y, k, S = { valid: !0 }) => {
      for (const F in y) {
        const A = y[F];
        if (A) {
          const { _f: L, ...D } = A;
          if (L) {
            const ue = a.array.has(L.name),
              fe = await tf(A, o, E, n.shouldUseNativeValidation && !k, ue);
            if (fe[L.name] && ((S.valid = !1), k)) break;
            !k &&
              ($(fe, L.name)
                ? ue
                  ? G4(r.errors, fe, L.name)
                  : ne(r.errors, L.name, fe[L.name])
                : je(r.errors, L.name));
          }
          D && (await K(D, k, S));
        }
      }
      return S.valid;
    },
    B = () => {
      for (const y of a.unMount) {
        const k = $(l, y);
        k &&
          (k._f.refs ? k._f.refs.every((S) => !ts(S)) : !ts(k._f.ref)) &&
          at(y);
      }
      a.unMount = new Set();
    },
    U = (y, k) => (y && k && ne(o, y, k), !Ln(te(), i)),
    q = (y, k, S) =>
      H4(y, a, { ...(u.mount ? o : he(k) ? i : jt(y) ? { [y]: k } : k) }, S, k),
    Ce = (y) =>
      Cl($(u.mount ? o : i, y, e.shouldUnregister ? $(i, y, []) : [])),
    xe = (y, k, S = {}) => {
      const F = $(l, y);
      let A = k;
      if (F) {
        const L = F._f;
        L &&
          (!L.disabled && ne(o, y, t0(k, L)),
          (A = Ni(L.ref) && Re(k) ? "" : k),
          Jd(L.ref)
            ? [...L.ref.options].forEach(
                (D) => (D.selected = A.includes(D.value))
              )
            : L.refs
            ? gl(L.ref)
              ? L.refs.length > 1
                ? L.refs.forEach(
                    (D) =>
                      (!D.defaultChecked || !D.disabled) &&
                      (D.checked = Array.isArray(A)
                        ? !!A.find((ue) => ue === D.value)
                        : A === D.value)
                  )
                : L.refs[0] && (L.refs[0].checked = !!A)
              : L.refs.forEach((D) => (D.checked = D.value === A))
            : pa(L.ref)
            ? (L.ref.value = "")
            : ((L.ref.value = A),
              L.ref.type || p.values.next({ name: y, values: { ...o } })));
      }
      (S.shouldDirty || S.shouldTouch) &&
        M(y, A, S.shouldTouch, S.shouldDirty, !0),
        S.shouldValidate && V(y);
    },
    Pe = (y, k, S) => {
      for (const F in k) {
        const A = k[F],
          L = `${y}.${F}`,
          D = $(l, L);
        (a.array.has(y) || !Mi(A) || (D && !D._f)) && !er(A)
          ? Pe(L, A, S)
          : xe(L, A, S);
      }
    },
    N = (y, k, S = {}) => {
      const F = $(l, y),
        A = a.array.has(y),
        L = Wt(k);
      ne(o, y, L),
        A
          ? (p.array.next({ name: y, values: { ...o } }),
            (d.isDirty || d.dirtyFields) &&
              S.shouldDirty &&
              p.state.next({
                name: y,
                dirtyFields: ns(i, o),
                isDirty: U(y, L),
              }))
          : F && !F._f && !Re(L)
          ? Pe(y, L, S)
          : xe(y, L, S),
        Xc(y, a) && p.state.next({ ...r }),
        p.values.next({ name: y, values: { ...o } }),
        !u.mount && t();
    },
    O = async (y) => {
      const k = y.target;
      let S = k.name,
        F = !0;
      const A = $(l, S),
        L = () => (k.type ? rs(A._f) : I4(y));
      if (A) {
        let D, ue;
        const fe = L(),
          In = y.type === Gc.BLUR || y.type === Gc.FOCUS_OUT,
          r0 =
            (!b4(A._f) && !n.resolver && !$(r.errors, S) && !A._f.deps) ||
            e5(In, $(r.touchedFields, S), r.isSubmitted, x, C),
          yo = Xc(S, a, In);
        ne(o, S, fe),
          In
            ? (A._f.onBlur && A._f.onBlur(y), c && c(0))
            : A._f.onChange && A._f.onChange(y);
        const go = M(S, fe, In, !1),
          l0 = !tt(go) || yo;
        if (
          (!In && p.values.next({ name: S, type: y.type, values: { ...o } }),
          r0)
        )
          return (
            d.isValid && f(), l0 && p.state.next({ name: S, ...(yo ? {} : go) })
          );
        if ((!In && yo && p.state.next({ ...r }), v(!0), n.resolver)) {
          const { errors: Ca } = await Z([S]),
            i0 = nf(r.errors, l, S),
            xa = nf(Ca, l, i0.name || S);
          (D = xa.error), (S = xa.name), (ue = tt(Ca));
        } else
          (D = (await tf(A, o, E, n.shouldUseNativeValidation))[S]),
            (F = isNaN(fe) || fe === $(o, S, fe)),
            F && (D ? (ue = !1) : d.isValid && (ue = await K(l, !0)));
        F && (A._f.deps && V(A._f.deps), z(S, ue, D, go));
      }
    },
    V = async (y, k = {}) => {
      let S, F;
      const A = bo(y);
      if ((v(!0), n.resolver)) {
        const L = await R(he(y) ? y : A);
        (S = tt(L)), (F = y ? !A.some((D) => $(L, D)) : S);
      } else
        y
          ? ((F = (
              await Promise.all(
                A.map(async (L) => {
                  const D = $(l, L);
                  return await K(D && D._f ? { [L]: D } : D);
                })
              )
            ).every(Boolean)),
            !(!F && !r.isValid) && f())
          : (F = S = await K(l));
      return (
        p.state.next({
          ...(!jt(y) || (d.isValid && S !== r.isValid) ? {} : { name: y }),
          ...(n.resolver || !y ? { isValid: S } : {}),
          errors: r.errors,
          isValidating: !1,
        }),
        k.shouldFocus &&
          !F &&
          ru(l, (L) => L && $(r.errors, L), y ? A : a.mount),
        F
      );
    },
    te = (y) => {
      const k = { ...i, ...(u.mount ? o : {}) };
      return he(y) ? k : jt(y) ? $(k, y) : y.map((S) => $(k, S));
    },
    ce = (y, k) => ({
      invalid: !!$((k || r).errors, y),
      isDirty: !!$((k || r).dirtyFields, y),
      isTouched: !!$((k || r).touchedFields, y),
      error: $((k || r).errors, y),
    }),
    Dn = (y) => {
      y && bo(y).forEach((k) => je(r.errors, k)),
        p.state.next({ errors: y ? r.errors : {} });
    },
    Ct = (y, k, S) => {
      const F = ($(l, y, { _f: {} })._f || {}).ref;
      ne(r.errors, y, { ...k, ref: F }),
        p.state.next({ name: y, errors: r.errors, isValid: !1 }),
        S && S.shouldFocus && F && F.focus && F.focus();
    },
    Sr = (y, k) =>
      Jt(y)
        ? p.values.subscribe({ next: (S) => y(q(void 0, k), S) })
        : q(y, k, !0),
    at = (y, k = {}) => {
      for (const S of y ? bo(y) : a.mount)
        a.mount.delete(S),
          a.array.delete(S),
          k.keepValue || (je(l, S), je(o, S)),
          !k.keepError && je(r.errors, S),
          !k.keepDirty && je(r.dirtyFields, S),
          !k.keepTouched && je(r.touchedFields, S),
          !n.shouldUnregister && !k.keepDefaultValue && je(i, S);
      p.values.next({ values: { ...o } }),
        p.state.next({ ...r, ...(k.keepDirty ? { isDirty: U() } : {}) }),
        !k.keepIsValid && f();
    },
    Zt = (y, k = {}) => {
      let S = $(l, y);
      const F = ar(k.disabled);
      return (
        ne(l, y, {
          ...(S || {}),
          _f: {
            ...(S && S._f ? S._f : { ref: { name: y } }),
            name: y,
            mount: !0,
            ...k,
          },
        }),
        a.mount.add(y),
        S
          ? F && ne(o, y, k.disabled ? void 0 : $(o, y, rs(S._f)))
          : P(y, !0, k.value),
        {
          ...(F ? { disabled: k.disabled } : {}),
          ...(n.progressive
            ? {
                required: !!k.required,
                min: Tr(k.min),
                max: Tr(k.max),
                minLength: Tr(k.minLength),
                maxLength: Tr(k.maxLength),
                pattern: Tr(k.pattern),
              }
            : {}),
          name: y,
          onChange: O,
          onBlur: O,
          ref: (A) => {
            if (A) {
              Zt(y, k), (S = $(l, y));
              const L =
                  (he(A.value) &&
                    A.querySelectorAll &&
                    A.querySelectorAll("input,select,textarea")[0]) ||
                  A,
                D = q4(L),
                ue = S._f.refs || [];
              if (D ? ue.find((fe) => fe === L) : L === S._f.ref) return;
              ne(l, y, {
                _f: {
                  ...S._f,
                  ...(D
                    ? {
                        refs: [
                          ...ue.filter(ts),
                          L,
                          ...(Array.isArray($(i, y)) ? [{}] : []),
                        ],
                        ref: { type: L.type, name: y },
                      }
                    : { ref: L }),
                },
              }),
                P(y, !1, void 0, L);
            } else
              (S = $(l, y, {})),
                S._f && (S._f.mount = !1),
                (n.shouldUnregister || k.shouldUnregister) &&
                  !(U4(a.array, y) && u.action) &&
                  a.unMount.add(y);
          },
        }
      );
    },
    va = () => n.shouldFocusError && ru(l, (y) => y && $(r.errors, y), a.mount),
    ma = (y, k) => async (S) => {
      S && (S.preventDefault && S.preventDefault(), S.persist && S.persist());
      let F = Wt(o);
      if ((p.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: A, values: L } = await Z();
        (r.errors = A), (F = L);
      } else await K(l);
      je(r.errors, "root"),
        tt(r.errors)
          ? (p.state.next({ errors: {} }), await y(F, S))
          : (k && (await k({ ...r.errors }, S)), va(), setTimeout(va)),
        p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: tt(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors,
        });
    },
    n0 = (y, k = {}) => {
      $(l, y) &&
        (he(k.defaultValue)
          ? N(y, $(i, y))
          : (N(y, k.defaultValue), ne(i, y, k.defaultValue)),
        k.keepTouched || je(r.touchedFields, y),
        k.keepDirty ||
          (je(r.dirtyFields, y),
          (r.isDirty = k.defaultValue ? U(y, $(i, y)) : U())),
        k.keepError || (je(r.errors, y), d.isValid && f()),
        p.state.next({ ...r }));
    },
    ya = (y, k = {}) => {
      const S = y || i,
        F = Wt(S),
        A = y && !tt(y) ? F : i;
      if ((k.keepDefaultValues || (i = S), !k.keepValues)) {
        if (k.keepDirtyValues || g)
          for (const L of a.mount)
            $(r.dirtyFields, L) ? ne(A, L, $(o, L)) : N(L, $(A, L));
        else {
          if (fa && he(y))
            for (const L of a.mount) {
              const D = $(l, L);
              if (D && D._f) {
                const ue = Array.isArray(D._f.refs) ? D._f.refs[0] : D._f.ref;
                if (Ni(ue)) {
                  const fe = ue.closest("form");
                  if (fe) {
                    fe.reset();
                    break;
                  }
                }
              }
            }
          l = {};
        }
        (o = e.shouldUnregister ? (k.keepDefaultValues ? Wt(i) : {}) : Wt(A)),
          p.array.next({ values: { ...A } }),
          p.values.next({ values: { ...A } });
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
        (u.mount = !d.isValid || !!k.keepIsValid),
        (u.watch = !!e.shouldUnregister),
        p.state.next({
          submitCount: k.keepSubmitCount ? r.submitCount : 0,
          isDirty: k.keepDirty
            ? r.isDirty
            : !!(k.keepDefaultValues && !Ln(y, i)),
          isSubmitted: k.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: k.keepDirtyValues
            ? r.dirtyFields
            : k.keepDefaultValues && y
            ? ns(i, y)
            : {},
          touchedFields: k.keepTouched ? r.touchedFields : {},
          errors: k.keepErrors ? r.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1,
        });
    },
    ga = (y, k) => ya(Jt(y) ? y(o) : y, k);
  return {
    control: {
      register: Zt,
      unregister: at,
      getFieldState: ce,
      handleSubmit: ma,
      setError: Ct,
      _executeSchema: Z,
      _getWatch: q,
      _getDirty: U,
      _updateValid: f,
      _removeUnmounted: B,
      _updateFieldArray: w,
      _getFieldArray: Ce,
      _reset: ya,
      _resetDefaultValues: () =>
        Jt(n.defaultValues) &&
        n.defaultValues().then((y) => {
          ga(y, n.resetOptions), p.state.next({ isLoading: !1 });
        }),
      _updateFormState: (y) => {
        r = { ...r, ...y };
      },
      _subjects: p,
      _proxyFormState: d,
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
        return i;
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
    trigger: V,
    register: Zt,
    handleSubmit: ma,
    watch: Sr,
    setValue: N,
    getValues: te,
    reset: ga,
    resetField: n0,
    clearErrors: Dn,
    unregister: at,
    setError: Ct,
    setFocus: (y, k = {}) => {
      const S = $(l, y),
        F = S && S._f;
      if (F) {
        const A = F.refs ? F.refs[0] : F.ref;
        A.focus && (A.focus(), k.shouldSelect && A.select());
      }
    },
    getFieldState: ce,
  };
}
function xl(e = {}) {
  const t = Tt.useRef(),
    n = Tt.useRef(),
    [r, l] = Tt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Jt(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: Jt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current ||
    (t.current = { ...r5(e, () => l((o) => ({ ...o }))), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    Q4({
      subject: i._subjects.state,
      next: (o) => {
        W4(o, i._proxyFormState, i._updateFormState, !0) &&
          l({ ...i._formState });
      },
    }),
    Tt.useEffect(() => {
      e.values && !Ln(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions), (n.current = e.values))
        : i._resetDefaultValues();
    }, [e.values, i]),
    Tt.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    (t.current.formState = B4(r, i)),
    t.current
  );
}
const l5 = "_taskInfo_1cod8_1",
  i5 = "_form_1cod8_9",
  o5 = "_label_1cod8_21",
  s5 = "_input_1cod8_41",
  pe = { taskInfo: l5, form: i5, label: o5, input: s5 };
function u5(e) {
  const t = _e(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: i } = xl(),
    o = () => {
      const { name1: u, name2: a, name3: c, name4: m } = i();
      n(), t(H(u && a && c && !m ? "true" : "false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: pe.taskInfo,
      children: [
        r && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Нажми на огоньки около верных вариантов ответа",
        }),
        s.jsxs("form", {
          className: pe.form,
          onChange: o,
          children: [
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
                  value: 1,
                  ...l("name1"),
                }),
                "Проектирование моделей в 3D",
              ],
            }),
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
                  value: 2,
                  ...l("name2"),
                }),
                "VR-технологии для обучения сотрудников",
              ],
            }),
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
                  value: 3,
                  ...l("name3"),
                }),
                "AR-очки для удаленной совместной работы",
              ],
            }),
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
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
const a5 = "_taskInfo_7kujf_1",
  c5 = "_form_7kujf_9",
  f5 = "_label_7kujf_21",
  d5 = "_input_7kujf_39",
  wt = { taskInfo: a5, form: c5, label: f5, input: d5 };
function p5(e) {
  const t = _e(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: i, setValue: o } = xl(),
    u = () => {
      const { name1: d } = i();
      n(), t(H(d === "2" ? "true" : "false"));
    };
  let a = null;
  const c = (d) => {
      a = d.target;
    },
    m = (d) => {
      if (!a) return;
      const p = d.target;
      p === a && (o("name1", p.getAttribute("data-value")), u());
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: wt.taskInfo,
      children: [
        r && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Вычеркни выбранный ответ",
        }),
        s.jsxs("form", {
          className: wt.form,
          onChange: u,
          onTouchStart: c,
          onTouchEnd: m,
          children: [
            s.jsxs("label", {
              className: wt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: wt.input,
                  value: 1,
                  ...l("name1"),
                }),
                s.jsx("span", {
                  "data-value": "1",
                  children: "Водоснабжение и канализация",
                }),
              ],
            }),
            s.jsxs("label", {
              className: wt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: wt.input,
                  value: 2,
                  ...l("name1"),
                }),
                s.jsx("span", {
                  "data-value": "2",
                  children: "Машиностроение и робототехника",
                }),
              ],
            }),
            s.jsxs("label", {
              className: wt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: wt.input,
                  value: 3,
                  ...l("name1"),
                }),
                s.jsx("span", {
                  "data-value": "3",
                  children: "Генплан и транспорт",
                }),
              ],
            }),
            s.jsxs("label", {
              className: wt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: wt.input,
                  value: 4,
                  ...l("name1"),
                }),
                s.jsx("span", {
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
function h5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.target;
      l(), a.value === "dzen" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "task__info",
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          onChange: o,
          children: [
            s.jsx("p", {
              children: s.jsx("b", {
                children: "Какое у вас состояние разума?",
              }),
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", {
                  name: "dzen",
                  type: "radio",
                  value: "nedzen",
                  defaultChecked: !0,
                  onChange: () => n(!t),
                }),
                " Не дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "dzen" }),
                " Дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "pdzen" }),
                " Полный дзен",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function v5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.target;
      l(), a.value === "dzen" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "task__info",
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          onChange: o,
          children: [
            s.jsx("p", {
              children: s.jsx("b", {
                children: "Какое у вас состояние разума?",
              }),
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", {
                  name: "dzen",
                  type: "radio",
                  value: "nedzen",
                  defaultChecked: !0,
                  onChange: () => n(!t),
                }),
                " Не дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "dzen" }),
                " Дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "pdzen" }),
                " Полный дзен",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function m5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.target;
      l(), a.value === "dzen" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "task__info",
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          onChange: o,
          children: [
            s.jsx("p", {
              children: s.jsx("b", {
                children: "Какое у вас состояние разума?",
              }),
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", {
                  name: "dzen",
                  type: "radio",
                  value: "nedzen",
                  defaultChecked: !0,
                  onChange: () => n(!t),
                }),
                " Не дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "dzen" }),
                " Дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "pdzen" }),
                " Полный дзен",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function y5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.target;
      l(), a.value === "dzen" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "task__info",
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          onChange: o,
          children: [
            s.jsx("p", {
              children: s.jsx("b", {
                children: "Какое у вас состояние разума?",
              }),
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", {
                  name: "dzen",
                  type: "radio",
                  value: "nedzen",
                  defaultChecked: !0,
                  onChange: () => n(!t),
                }),
                " Не дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "dzen" }),
                " Дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "pdzen" }),
                " Полный дзен",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const g5 = "_task__info_4nodj_1",
  C5 = "_form_4nodj_9",
  x5 = "_numbers_4nodj_23",
  w5 = "_numbersActive_4nodj_23",
  k5 = "_userAnswer_4nodj_57",
  S5 = "_range_4nodj_65",
  _5 = "_progress_4nodj_207",
  Cn = {
    task__info: g5,
    form: C5,
    numbers: x5,
    numbersActive: w5,
    userAnswer: k5,
    range: S5,
    progress: _5,
  };
function j5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    [o, u] = I.useState("0%"),
    [a, c] = I.useState("0"),
    m = (d) => {
      const p = d.currentTarget;
      u(p.value + "%"),
        c(p.value),
        n(!1),
        l(),
        p.value === "50" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: Cn.task__info,
      children: [
        i && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          className: Cn.form,
          children: [
            s.jsxs("div", {
              className: t ? Cn.numbers : Cn.numbersActive,
              children: [
                s.jsx("span", {
                  style: t ? { display: "block" } : { display: "none" },
                  children: "0",
                }),
                s.jsx("span", {
                  style: t ? { display: "none" } : { display: "block" },
                  className: Cn.userAnswer,
                  children: a,
                }),
                s.jsx("span", {
                  style: t ? { display: "block" } : { display: "none" },
                  children: "100",
                }),
              ],
            }),
            s.jsxs("div", {
              className: Cn.progress,
              children: [
                s.jsx("input", {
                  type: "range",
                  className: Cn.range,
                  min: "0",
                  max: "100",
                  step: "10",
                  defaultValue: "0",
                  onChange: m,
                }),
                s.jsx("span", { style: { width: o } }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const L5 = "_taskInfo_1ghr2_1",
  E5 = "_task_1ghr2_1",
  N5 = "_taskAnswer_1ghr2_23",
  P5 = "_answer_1ghr2_43",
  M5 = "_zero_1ghr2_61",
  A5 = "_taskZeros_1ghr2_73",
  T5 = "_none_1ghr2_109",
  O5 = "_success_1ghr2_115",
  z5 = "_danger_1ghr2_121",
  He = {
    taskInfo: L5,
    task: E5,
    taskAnswer: N5,
    answer: P5,
    zero: M5,
    taskZeros: A5,
    none: T5,
    success: O5,
    danger: z5,
  };
function $5(e) {
  const t = _e(),
    { selectAnswer: n, checkClick: r } = e,
    [l, i] = I.useState([
      { value: "0", answer: !1 },
      { value: "00", answer: !1 },
      { value: "000", answer: !1 },
      { value: "0000", answer: !1 },
    ]),
    [o, u] = I.useState({ value: "", answer: !1 }),
    [a, c] = I.useState(!1),
    m = I.useRef(null);
  let d = 0,
    p = 0;
  I.useEffect(() => {
    if (m.current) {
      const h = m.current.getBoundingClientRect();
      (d = h.left), (p = h.top);
    }
  });
  let g;
  const C = (h) => {
      const f = h.changedTouches[0];
      g = h.changedTouches[0].target;
      const v = f.pageY - p - g.offsetHeight / 2,
        w = f.pageX - d - g.offsetWidth / 2;
      (g.style.position = "absolute"),
        (g.style.left = w + "px"),
        (g.style.top = v + "px");
    },
    x = (h) => {
      const f = h.changedTouches[0];
      if (g) {
        const v = f.pageY - p - g.offsetHeight / 2,
          w = f.pageX - d - g.offsetWidth / 2;
        v > 14 && v < 112 && (g.style.top = v + "px"),
          w > 0 && w < 270 && (g.style.left = w + "px"),
          v > 40 &&
            v < 80 &&
            w > 40 &&
            w < 227 &&
            ((g.style.top = "40px"), (g.style.left = "114px"));
      }
    },
    E = (h, f) => {
      h.preventDefault(),
        !(g && ((g.style.position = "static"), g.style.top !== "40px")) &&
          (n(),
          i(l.map((v, w) => (w === f ? (v.answer = !0) : (v.answer = !1), v))),
          u(l[f]),
          f === 1 ? (t(H("true")), c(!0)) : (t(H("false")), c(!1)));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: He.taskInfo,
      ref: m,
      children: [
        r && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Перетащи верное количество нулей в ячейку",
        }),
        s.jsx("div", {
          className: He.task,
          children: s.jsxs("div", {
            className: He.taskAnswer,
            children: [
              s.jsx("span", { children: "1" }),
              s.jsx("div", {
                className: He.answer,
                children: s.jsx("div", {
                  className:
                    He.zero +
                    " " +
                    (o.answer ? "" : He.none) +
                    " " +
                    (r ? (a ? He.success : He.danger) : ""),
                  children: o.value,
                }),
              }),
              s.jsx("span", { children: "+" }),
            ],
          }),
        }),
        s.jsx("div", {
          className: He.taskZeros,
          children: l.map((h, f) =>
            s.jsx(
              "div",
              {
                children: s.jsx("div", {
                  onTouchStart: (v) => C(v),
                  onTouchMove: (v) => x(v),
                  onTouchEnd: (v) => E(v, f),
                  className:
                    He.zero +
                    " " +
                    (h.answer ? He.none : "") +
                    " " +
                    (r ? (a ? He.success : He.danger) : ""),
                  children: h.value,
                }),
              },
              h.value
            )
          ),
        }),
      ],
    }),
  });
}
const R5 = "_taskInfo_2a2jb_1",
  F5 = "_form_2a2jb_11",
  D5 = "_input_2a2jb_25",
  I5 = "_value1_2a2jb_39",
  V5 = "_value2_2a2jb_45",
  U5 = "_value3_2a2jb_51",
  Z5 = "_value4_2a2jb_57",
  B5 = "_label_2a2jb_63",
  Ve = {
    taskInfo: R5,
    form: F5,
    input: D5,
    value1: I5,
    value2: V5,
    value3: U5,
    value4: Z5,
    label: B5,
  },
  Il = (e) =>
    s.jsx(s.Fragment, {
      children: s.jsx("svg", {
        id: e.id,
        width: "89",
        height: "92",
        viewBox: "0 0 89 92",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: s.jsx("path", {
          d: "M38.5932 0.217043C37.2909 0.325565 36.0972 0.542609 34.9035 0.759652C32.4075 1.19374 30.02 1.95339 27.6325 2.93009C25.3535 3.79826 23.0746 4.992 21.0127 6.29426C19.9275 6.94539 18.9508 7.70504 17.8655 8.4647C16.8889 9.22435 15.9122 9.984 14.9355 10.7437C12.9821 12.3715 11.2457 14.1078 9.50938 15.9527C6.1452 19.6424 3.43216 23.9833 1.69581 28.6497C0.827637 31.0372 0.285028 33.5332 0.0679848 36.1377C-0.149059 38.7423 0.176507 41.3468 0.719115 43.8428C1.37025 46.4473 2.34694 48.8348 3.54068 51.0052C4.73442 53.1757 6.1452 55.2376 7.88155 57.0824C9.07529 58.4932 10.3775 59.687 11.6798 60.8807C12.765 62.183 13.8502 63.4852 15.044 64.679C15.9122 65.5471 16.8889 66.4153 17.8655 67.175C18.8422 67.9346 19.8189 68.8028 20.7956 69.5624C22.8575 71.0817 24.9195 72.384 27.1984 73.5777C29.4774 74.7715 31.7563 75.7482 34.2523 76.3993C35.4461 76.7249 36.7483 77.0504 37.9421 77.376C39.2443 77.593 40.4381 77.8101 41.7403 77.9186C43.0426 78.0271 44.2363 78.0271 45.5386 77.9186C46.7323 77.8101 48.0346 77.593 49.2283 77.2675C50.4221 76.9419 51.6158 76.5078 52.8095 76.0737C54.0033 75.5311 55.0885 74.9885 56.1737 74.4459C58.3442 73.2522 60.4061 71.7329 62.2509 70.105C63.2276 69.3454 64.2043 68.4772 65.0725 67.609C65.9407 66.7409 66.9174 65.7642 67.7855 64.896C68.3282 64.3534 68.7622 63.7023 69.3048 63.1597C69.4134 63.0511 69.4134 62.7256 69.3048 62.617C69.1963 62.5085 68.8708 62.5085 68.7622 62.617C67.3515 64.0278 65.9407 65.4386 64.5299 66.8494C63.8788 67.5005 63.1191 68.1516 62.3595 68.8028C61.5998 69.4539 60.8402 70.105 60.0805 70.6477C60.0805 70.6477 60.189 70.6477 60.189 70.5391C58.9953 71.4073 57.8015 72.2755 56.4993 73.1437C55.197 73.9033 53.8948 74.663 52.484 75.2056C51.5073 75.6397 50.6391 75.9652 49.6624 76.1823C48.6857 76.5078 47.6005 76.6163 46.5153 76.8334H46.6238C45.5386 76.9419 44.4534 77.0504 43.2596 77.0504C42.0659 77.0504 40.9807 76.9419 39.7869 76.8334C38.2676 76.6163 36.6398 76.2908 35.1205 75.8567C33.6012 75.4226 32.0819 74.88 30.5626 74.2289C28.8262 73.4692 27.0899 72.601 25.3535 71.6243C23.6172 70.5391 21.9894 69.4539 20.4701 68.2602C19.0593 67.175 17.757 66.0897 16.4548 64.896C17.4315 65.4386 18.4082 65.9812 19.3849 66.5238C20.4701 67.0664 21.6638 67.609 22.8575 68.0431C24.0513 68.4772 25.245 69.0198 26.4388 69.3454C27.6325 69.7795 28.9348 70.105 30.1285 70.4306C31.4308 70.7562 32.6245 71.0817 33.9268 71.2988C36.5313 71.7329 39.1358 71.9499 41.6318 71.9499C42.9341 71.9499 44.2363 71.9499 45.5386 71.8414C46.8409 71.7329 48.1431 71.5158 49.4454 71.4073C50.7476 71.1903 51.9414 70.9732 53.2436 70.7562C54.5459 70.4306 55.7396 70.105 56.9334 69.671C59.3209 68.8028 61.4913 67.7176 63.6617 66.4153C65.7236 65.113 67.7855 63.5937 69.5219 61.9659C71.3668 60.2296 72.9946 58.3847 74.4054 56.3228C75.8162 54.2609 77.1184 52.199 78.0951 49.92C79.0718 47.641 79.8315 45.2536 80.3741 42.7576C81.3508 37.657 81.3508 32.448 79.94 27.456C79.2888 25.0685 78.3122 22.681 77.0099 20.4021C76.4673 19.3169 75.8162 18.2317 75.0565 17.255C74.2969 16.2783 73.5372 15.3016 72.669 14.3249C71.8008 13.4567 70.9327 12.5885 69.956 11.8289C69.5219 10.4181 68.4367 9.65843 67.3515 9.0073C65.2895 7.59652 63.0106 6.5113 60.6231 5.42609C57.0419 4.0153 53.2436 2.93009 49.3369 2.38748C49.3369 2.27896 49.2283 2.17043 49.1198 2.17043C49.1198 2.17043 49.1198 2.17043 49.2283 2.17043C49.0113 2.06191 48.7942 1.84487 48.5772 1.73635C48.3602 1.62783 48.1431 1.41078 47.9261 1.30226C47.709 1.19374 47.3835 1.08522 47.1664 0.868174C46.8409 0.759652 46.6238 0.65113 46.2982 0.542609C45.7556 0.325565 45.1045 0.217043 44.5619 0.217043C43.6937 0.108522 43.0426 0 42.3915 0C42.2829 0 42.1744 0 42.0659 0C40.8722 0 39.6784 0.108522 38.5932 0.217043ZM40.8722 0.759652C41.9574 0.759652 43.0426 0.759652 44.1278 0.868174C44.8875 0.976696 45.7556 1.19374 46.5153 1.41078C46.9494 1.62783 47.492 1.84487 47.9261 2.17043C47.9261 2.17043 47.9261 2.17043 48.0346 2.17043C47.2749 2.06191 46.4068 1.95339 45.6471 1.95339C43.0426 1.73635 40.5466 1.73635 37.9421 1.95339C36.6398 2.06191 35.3375 2.27896 34.1438 2.496C32.9501 2.71304 31.6478 3.03861 30.4541 3.4727C29.2603 3.90678 28.0666 4.34087 26.8729 4.88348C25.6791 5.42609 24.5939 5.9687 23.5087 6.61983C21.3382 7.81356 19.1678 9.22435 17.2144 10.8522C15.261 12.48 13.5247 14.2163 12.0054 16.1697C10.4861 18.1231 9.07529 20.185 7.99007 22.464C6.79633 24.743 5.92816 27.1304 5.27703 29.5179C4.6259 32.0139 4.19181 34.5099 4.08329 37.1144C3.97477 39.719 4.19181 42.3235 4.6259 44.8195C4.95146 47.424 5.60259 49.92 6.57929 52.3075C7.23042 54.0438 8.09859 55.5631 9.07529 57.191C8.42416 56.4313 7.77303 55.6716 7.1219 54.912C5.49407 52.7416 4.08329 50.4626 3.10659 48.0751C2.23842 45.9047 1.58729 43.5172 1.26172 41.2383C0.936159 39.0678 0.936159 36.8974 1.26172 34.727V34.8355C1.58729 32.231 2.34694 29.735 3.32364 27.3475V27.456C4.6259 24.5259 6.25372 21.7043 8.20712 19.2083C9.6179 17.472 11.1372 15.7357 12.6565 14.2163C14.2843 12.5885 16.0207 11.1777 17.757 9.76696C17.757 9.76696 17.757 9.76696 17.6485 9.87548C19.1678 8.68174 20.7956 7.59652 22.4235 6.61983C24.0513 5.64313 25.6791 4.77496 27.4155 4.0153C30.6711 2.60452 34.2523 1.73635 37.725 1.19374H37.6165C38.7017 0.868174 39.7869 0.759652 40.8722 0.759652ZM47.709 3.79826C49.8795 4.12383 52.0499 4.55791 54.2203 5.10052C56.3908 5.64313 58.5612 6.40278 60.6231 7.27096C60.5146 7.27096 60.5146 7.16243 60.4061 7.16243C63.4447 8.46469 66.3748 10.0925 69.0878 12.1544C69.956 12.9141 70.8242 13.5652 71.6923 14.4334C72.452 15.193 73.2116 16.0612 73.8628 16.9294C74.6224 18.0146 75.3821 19.0998 76.0332 20.2936C76.6843 21.4873 77.3355 22.681 77.8781 23.9833C78.4207 25.177 78.8548 26.4793 79.1803 27.7816C79.5059 29.0838 79.8315 30.4946 80.0485 31.7969C80.3741 34.6184 80.3741 37.5485 80.0485 40.3701V40.2616C79.8315 41.7809 79.6144 43.1917 79.1803 44.6024C78.8548 46.0132 78.3122 47.424 77.7695 48.8348C76.5758 51.6563 75.0565 54.2609 73.1031 56.6483C71.2582 59.0358 69.1963 61.0977 66.8089 62.9426C64.2043 65.0045 61.2742 66.6323 58.2356 67.9346C57.476 68.2602 56.6078 68.5857 55.8482 68.8028C54.98 69.1283 54.1118 69.3454 53.2436 69.5624C51.5073 69.9965 49.7709 70.2136 48.0346 70.4306H48.1431C47.1664 70.5391 46.1897 70.6476 45.1045 70.7562C44.0193 70.8647 43.0426 70.8647 41.9574 70.8647C39.8955 70.8647 37.8335 70.7562 35.6631 70.4306C34.5779 70.3221 33.4927 70.105 32.2989 69.7795C31.2137 69.5624 30.1285 69.2369 28.9348 68.9113C27.8496 68.5857 26.7643 68.2602 25.6791 67.8261C24.5939 67.5005 23.5087 67.0664 22.532 66.6323H22.6405C19.3849 65.2216 16.3462 63.4852 13.5247 61.4233C13.5247 61.4233 13.5247 61.4233 13.4162 61.4233C12.8735 60.8807 12.4395 60.2296 12.0054 59.687C10.269 57.408 8.74972 54.8035 7.66451 52.199C6.47077 49.4859 5.71112 46.5558 5.27703 43.6257C4.84294 40.5871 4.84294 37.44 5.27703 34.4014C5.27703 34.4014 5.27703 34.4014 5.27703 34.2929C5.27703 34.2929 5.27703 34.2929 5.27703 34.4014C5.71112 31.3628 6.47077 28.4327 7.66451 25.6111C8.31564 24.2003 8.96677 22.7896 9.83494 21.4873C10.5946 20.0765 11.5713 18.7743 12.548 17.5805C13.4162 16.4953 14.3929 15.4101 15.3695 14.3249C16.3462 13.3482 17.4315 12.3715 18.6252 11.5033C20.036 10.4181 21.5553 9.44139 23.1831 8.4647C24.7024 7.59652 26.3302 6.72835 28.0666 6.07722C29.3689 5.53461 30.6711 5.10052 32.0819 4.66643C33.4927 4.34087 34.7949 4.0153 36.2057 3.79826C40.1125 3.25565 43.9108 3.25565 47.709 3.79826ZM12.765 17.472L12.6565 17.5805C12.6565 17.472 12.6565 17.472 12.765 17.472Z",
          fill: "none",
          strokeDasharray: "0",
          strokeDashoffset: "0",
          stroke: "white",
          strokeWidth: ".8",
          strokeLinecap: "round",
          children: s.jsx("animate", {
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
function W5(e) {
  const t = _e(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: i, setValue: o } = xl(),
    u = () => {
      const { name1: d } = i();
      n(), t(H(d === "2" ? "true" : "false"));
    };
  let a;
  const c = (d) => {
      a = d.target;
    },
    m = (d) => {
      var g;
      if (!a) return;
      const p = d.target;
      p === a &&
        (o("name1", (g = p.getAttribute("id")) == null ? void 0 : g.slice(3)),
        u());
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: Ve.taskInfo,
      children: [
        r && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Обведи календарь с верным годом",
        }),
        s.jsxs("form", {
          className: Ve.form,
          onChange: u,
          onTouchStart: c,
          onTouchEnd: m,
          children: [
            s.jsxs("label", {
              className: Ve.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: Ve.input + " " + Ve.value1,
                  value: 1,
                  ...l("name1"),
                }),
                s.jsx(Il, { id: "svg1" }),
              ],
            }),
            s.jsxs("label", {
              className: Ve.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: Ve.input + " " + Ve.value2,
                  value: 2,
                  ...l("name1"),
                }),
                s.jsx(Il, { id: "svg2" }),
              ],
            }),
            s.jsxs("label", {
              className: Ve.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: Ve.input + " " + Ve.value3,
                  value: 3,
                  ...l("name1"),
                }),
                s.jsx(Il, { id: "svg3" }),
              ],
            }),
            s.jsxs("label", {
              className: Ve.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: Ve.input + " " + Ve.value4,
                  value: 4,
                  ...l("name1"),
                }),
                s.jsx(Il, { id: "svg4" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Q5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.target;
      l(), a.value === "dzen" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "task__info",
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          onChange: o,
          children: [
            s.jsx("p", {
              children: s.jsx("b", {
                children: "Какое у вас состояние разума?",
              }),
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", {
                  name: "dzen",
                  type: "radio",
                  value: "nedzen",
                  defaultChecked: !0,
                  onChange: () => n(!t),
                }),
                " Не дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "dzen" }),
                " Дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "pdzen" }),
                " Полный дзен",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function H5(e) {
  const t = _e(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: i } = xl(),
    o = () => {
      const { name1: u, name2: a, name3: c, name4: m } = i();
      n(), t(H(u && a && c && m ? "true" : "false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: pe.taskInfo,
      children: [
        r && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Нажми на огоньки около верных вариантов ответа",
        }),
        s.jsxs("form", {
          className: pe.form,
          onChange: o,
          children: [
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
                  value: 1,
                  ...l("name1"),
                }),
                "Доступ в электронную библиотеку",
              ],
            }),
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
                  value: 2,
                  ...l("name2"),
                }),
                "Скидки на авиабилеты и гостиницы",
              ],
            }),
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
                  value: 3,
                  ...l("name3"),
                }),
                "Корпоративный спорт",
              ],
            }),
            s.jsxs("label", {
              className: pe.label,
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  className: pe.input,
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
function K5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.target;
      l(), a.value === "dzen" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "task__info",
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          onChange: o,
          children: [
            s.jsx("p", {
              children: s.jsx("b", {
                children: "Какое у вас состояние разума?",
              }),
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", {
                  name: "dzen",
                  type: "radio",
                  value: "nedzen",
                  defaultChecked: !0,
                  onChange: () => n(!t),
                }),
                " Не дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "dzen" }),
                " Дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "pdzen" }),
                " Полный дзен",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const G5 = "_taskInfo_1lv38_1",
  Y5 = "_form_1lv38_9",
  X5 = "_label_1lv38_21",
  q5 = "_input_1lv38_41",
  kt = { taskInfo: G5, form: Y5, label: X5, input: q5 };
function J5(e) {
  const t = _e(),
    { selectAnswer: n, checkClick: r } = e,
    { register: l, getValues: i } = xl(),
    o = () => {
      const { name1: u } = i();
      n(), t(H(u === "2" ? "true" : "false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: kt.taskInfo,
      children: [
        r && s.jsx(yn, {}),
        s.jsx("h4", {
          className: "task__subtitle " + (r ? "answer" : ""),
          children: "Вычеркни выбранный ответ",
        }),
        s.jsxs("form", {
          className: kt.form,
          onChange: o,
          children: [
            s.jsxs("label", {
              className: kt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: kt.input,
                  value: 1,
                  ...l("name1"),
                }),
                s.jsx("span", { children: "Юный инженер" }),
              ],
            }),
            s.jsxs("label", {
              className: kt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: kt.input,
                  value: 2,
                  ...l("name1"),
                }),
                s.jsx("span", { children: "Молодой специалист" }),
              ],
            }),
            s.jsxs("label", {
              className: kt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: kt.input,
                  value: 3,
                  ...l("name1"),
                }),
                s.jsx("span", { children: "Начинающий эксперт" }),
              ],
            }),
            s.jsxs("label", {
              className: kt.label,
              children: [
                s.jsx("input", {
                  type: "radio",
                  className: kt.input,
                  value: 4,
                  ...l("name1"),
                }),
                s.jsx("span", { children: "Будущий профессионал" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function b5(e) {
  const [t, n] = I.useState(!0),
    r = _e(),
    { selectAnswer: l, checkClick: i } = e,
    o = (u) => {
      const a = u.target;
      l(), a.value === "dzen" ? r(H("true")) : r(H("false"));
    };
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "task__info",
      children: [
        s.jsx("h4", {
          className: "task__subtitle " + (i ? "answer" : ""),
          children: "Расположи полузнок на верной цифре",
        }),
        s.jsxs("form", {
          onChange: o,
          children: [
            s.jsx("p", {
              children: s.jsx("b", {
                children: "Какое у вас состояние разума?",
              }),
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", {
                  name: "dzen",
                  type: "radio",
                  value: "nedzen",
                  defaultChecked: !0,
                  onChange: () => n(!t),
                }),
                " Не дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "dzen" }),
                " Дзен",
              ],
            }),
            s.jsxs("p", {
              children: [
                s.jsx("input", { name: "dzen", type: "radio", value: "pdzen" }),
                " Полный дзен",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const e8 = "_task__info_1e5cd_1",
  t8 = "_subtitels_1e5cd_17",
  n8 = "_points_1e5cd_31",
  ls = { task__info: e8, subtitels: t8, points: n8 };
function r8() {
  const e = Pn((t) => t.points).points;
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: ls.task__info,
      children: [
        s.jsx("h4", { className: ls.subtitels, children: "Баланс " }),
        s.jsx("p", { className: ls.points, children: e }),
      ],
    }),
  });
}
const l8 = (e) => {
    const t = Pn((n) => n.activeQuestion).activeQuestion.join("");
    switch ((console.log(t), t)) {
      case "00":
        return s.jsx(A4, { ...e });
      case "01":
        return s.jsx(D4, { ...e });
      case "02":
        return s.jsx(u5, { ...e });
      case "03":
        return s.jsx(p5, { ...e });
      case "10":
        return s.jsx(h5, { ...e });
      case "11":
        return s.jsx(v5, { ...e });
      case "12":
        return s.jsx(m5, { ...e });
      case "13":
        return s.jsx(y5, { ...e });
      case "20":
        return s.jsx(j5, { ...e });
      case "21":
        return s.jsx($5, { ...e });
      case "22":
        return s.jsx(W5, { ...e });
      case "23":
        return s.jsx(Q5, { ...e });
      case "30":
        return s.jsx(H5, { ...e });
      case "31":
        return s.jsx(K5, { ...e });
      case "32":
        return s.jsx(J5, { ...e });
      case "33":
        return s.jsx(b5, { ...e });
      case "44":
        return s.jsx(r8, {});
    }
  },
  i8 = [
    [
      {
        question:
          "Что из перечисленного не относится к услугам, оказываемым НИПИГАЗом?",
        answer:
          "НИПИГАЗ управляет проектированием, поставками, логистикой и строительством масштабных объектов, а их дальнейшее функционирование (в т.ч. выпуск продукции) осуществляют сами Заказчики",
        sizeAnswer: "12.5px",
        paddingQuestion: "56px",
        paddingAnswer: "0px",
      },
      {
        question: "Какая из аббревиатур не связана с деятельностью НИПИГАЗа?",
        answer:
          "Хотелось бы получить премию UCG, но пока что такой не существует, а аббревиатура расшифровывается как User Genereted Content :)",
        sizeAnswer: "15px",
        paddingQuestion: "80px",
        paddingAnswer: "10px",
      },
      {
        question: "Какие из перечисленных технологий используют в НИПИГАЗе?",
        answer:
          "Engineering, procurement, and construction (EPC), Система автоматизированного проектирования (САПР) и Building Information Model (BIM) – это про нас, а вот User Genereted Content (UGC) – это что-то из области маркетинга :)",
        sizeAnswer: "12px",
        paddingQuestion: "10px",
        paddingAnswer: "10px",
        paddingAnswerBtm: "20px",
      },
      {
        question: "Какого отдела нет в Инжиниринговом центре НИПИГАЗа?",
        answer:
          "НИПИГАЗ проектирует масштабные объекты в области нефтегазопереработки и нефтегазохимии, а авто и роботы – не наш профиль",
        sizeAnswer: "14px",
        paddingQuestion: "0px",
        paddingAnswer: "40px",
      },
    ],
    [
      {
        question: "В каком из перечисленных регионов есть офис НИПИГАЗа?",
        answer:
          "Офисы объединенного Инжинирингового центра НИПИГАЗа располагаются в Краснодаре, Ростове-на-Дону, Москве и Тюмени! Присоединяйся к команде!",
        sizeAnswer: "11.6px",
        paddingQuestion: "56px",
        paddingAnswer: "0px",
      },
      {
        question: "В каком городе началась история НИПИГАЗа?",
        answer:
          'Наши истоки – в Краснодаре. Именно здесь был основан головной институт в сфере переработки нефтяного газа "НИПИгазпереработка"',
        sizeAnswer: "13.3px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
      },
      {
        question:
          "В московском офисе НИПИГАЗа 9 утра. Сколько времени в офисе НИПИГАЗа в Свободном (Амурская область)?",
        answer:
          "Разница во времени между Москвой и Свободным – 6 часов, но это не мешает команде эффективно коммуницировать",
        sizeAnswer: "15px",
        paddingQuestion: "10px",
        paddingAnswer: "10px",
      },
      {
        question:
          "Где находится один из первых спроектированных НИПИГАЗом объектов – крупный ГПЗ, запущенный в 1974 году?",
        answer:
          "В 1974 году был запущен ГПЗ в Нижневартовске, административном центре Ханты-Мансийского автономного округа — Югры",
        sizeAnswer: "13.7px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
      },
    ],
    [
      {
        question: "Какую круглую дату отпраздновал НИПИГАЗ в 2022 году?",
        answer:
          "НИПИГАЗ был основан более 50 лет назад, в 1972 году, но до сих пор удерживает лидерские позиции в отрасли!",
        sizeAnswer: "15px",
        paddingQuestion: "56px",
        paddingAnswer: "20px",
      },
      {
        question: "Какая цифра отражает общее количество проектов НИПИГАЗа?",
        answer:
          "За свою историю НИПИГАЗ принял участие в реализации более 100 масштабных проектов в области нефтегазопереработки и нефтегазохимии в разных регионах нашей страны и за её пределами",
        sizeAnswer: "12.6px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
      },
      {
        question:
          "В каком году на Сахалине начал работать первый в России завод по производству сжиженного природного газа (СПГ), спроектированный НИПИГАЗом?",
        answer:
          "18 февраля 2009 года на Сахалине, близ города Корсакова был запущен завод по производству сжиженного природного газа, спроектированный НИПИГАЗом",
        sizeAnswer: "15px",
        paddingQuestion: "10px",
        paddingAnswer: "10px",
      },
      {
        question:
          "Какова общая мощность объектов по подготовке и переработке нефтяного и природного газа, спроектированных при участии НИПИГАЗа?",
        answer:
          "Это целых 237 КМ3, что равно почти половине объема Черного моря!",
        sizeAnswer: "15px",
        paddingQuestion: "40px",
        paddingAnswer: "40px",
      },
    ],
    [
      {
        question: "Какие из этих льгот есть у сотрудников НИПИГАЗа?",
        answer:
          "Компания заботится о своих сотрудниках и готова поддержать их и в профессиональном развитии, и в хобби, и в отдыхе",
        sizeAnswer: "14px",
        paddingQuestion: "0px",
        paddingAnswer: "13px",
      },
      {
        question: "Какой спортивной секции нет в НИПИГАЗе?",
        answer:
          "В НИПИГАЗе очень много спортивных команд, а если какой-то пока нет — с легкостью можно найти коллег по интересам",
        sizeAnswer: "14px",
        paddingQuestion: "0px",
        paddingAnswer: "10px",
      },
      {
        question:
          "Как называется программа развития выпускников технических вузов НИПИГАЗа?",
        answer:
          "Программа “Молодой специалист” — это возможность начать карьеру в одной из ведущих инжиниринговых компаний мира, включиться в крупные проекты и обменяться опытом в компании, которая заботится о своих сотрудниках",
        sizeAnswer: "12px",
        paddingQuestion: "0px",
        paddingAnswer: "0px",
        paddingAnswerBtm: "20px",
      },
      {
        question: "В какие рейтинги входит НИПИГАЗ?",
        answer: "IMDB — рейтинг кинолент, которых у нас пока что нет :)",
        sizeAnswer: "15px",
        paddingQuestion: "0px",
        paddingAnswer: "30px",
      },
    ],
  ];
function o8(e) {
  const { openFirework: t, openTask: n, closePoints: r } = e,
    [l, i] = I.useState(!1),
    [o, u] = I.useState(!1),
    a = _e(),
    c = Pn((O) => O.activeQuestion).activeQuestion,
    m = Pn((O) => O.arrQuestionsReducer).arrQuestions;
  let d = 0,
    p = "Отличный результат!",
    g = "",
    C = "20px",
    x = "0px",
    E = "0px",
    h = "29px";
  if (c[0] !== 4) {
    d = m[c[0]][c[1]];
    const O = i8[c[0]][c[1]];
    (g = O.question),
      (p = O.answer),
      (C = O.sizeAnswer),
      (x = O.paddingAnswer),
      (E = O.paddingQuestion),
      (h = O.paddingAnswerBtm ? O.paddingAnswerBtm : "29px");
  }
  const [f, v] = I.useState("15px"),
    w = { fontSize: f },
    [_, P] = I.useState(E),
    [M, z] = I.useState("29px"),
    Z = { paddingRight: _, paddingBottom: M },
    R = Pn((O) => O.checkAnswerReducer).checkAnswer,
    [K, B] = I.useState("wait"),
    [U, q] = I.useState(!1),
    Ce = () => {
      q(!0);
    },
    [xe, Pe] = I.useState(!1),
    N = () => {
      if (xe) {
        if (
          (H("wait"),
          B("wait"),
          t(!1),
          i(!1),
          v("15px"),
          n(!1),
          m.flat().filter((O) => O === 0).length === 16)
        ) {
          a(Qd([4, 4])), v("20px"), i(!0), r(), u(!0), n(!0), t(!0);
          return;
        }
        return;
      }
      U &&
        (B(R),
        R === "true" && (t(!0), a(C4(d))),
        a(h4(c)),
        q(!1),
        Pe(!0),
        i(!0),
        v(C),
        P(x),
        z(h));
    };
  return s.jsx(s.Fragment, {
    children: s.jsx("div", {
      className:
        "main__task task " +
        (K === "wait" ? "" : K === "true" ? "success" : "danger") +
        (o ? "end" : ""),
      children: s.jsxs("div", {
        className: "task__wrapper",
        children: [
          s.jsx("div", {
            className: "task__head",
            children: s.jsxs("div", {
              className: "task__heading",
              style: Z,
              children: [
                s.jsx("div", {
                  className: "task__points",
                  children: (c[1] + 1) * 100,
                }),
                s.jsx("h3", {
                  className: "task__title " + (l ? "answer" : ""),
                  style: w,
                  children: l ? p : g,
                }),
              ],
            }),
          }),
          s.jsx(l8, { selectAnswer: Ce, checkClick: l }),
          s.jsx("button", {
            className: "btn task__btn",
            onClick: N,
            children: K === "wait" ? "ГОТОВО" : "ОГО",
          }),
        ],
      }),
    }),
  });
}
function s8() {
  return s.jsx(s.Fragment, {
    children: s.jsxs("div", {
      className: "main__firework active",
      children: [
        s.jsxs("svg", {
          width: "235",
          height: "374",
          viewBox: "0 0 235 374",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            s.jsx("path", {
              d: "M15.3004 302.275L20.9001 302.297L20.8159 324.196L15.2162 324.174L15.3004 302.275Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M51.4064 317.769C53.3714 318.51 55.5618 317.519 56.3027 315.554C57.0436 313.589 56.0527 311.398 54.0878 310.658C52.1228 309.917 49.9324 310.908 49.1915 312.873C48.4506 314.837 49.4414 317.028 51.4064 317.769Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M10.902 283.473L8.51981 280.437C7.89856 280.951 2.33188 284.944 -4.0584 278.366L-6.79035 281.077C0.35922 288.475 7.95987 285.89 10.902 283.473Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M27.0499 292.139L40.1697 285.078L41.9706 288.424L28.8507 295.485L27.0499 292.139Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M20.3769 273.366C22.7162 274.248 25.2932 273.082 26.1752 270.743C27.0573 268.404 25.8915 265.827 23.5523 264.945C21.213 264.063 18.636 265.228 17.754 267.568C16.8719 269.907 18.0377 272.484 20.3769 273.366Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M19.3455 345.543C21.3105 346.284 23.5009 345.293 24.2419 343.328C24.9828 341.363 23.9919 339.173 22.0269 338.432C20.062 337.691 17.8715 338.682 17.1306 340.647C16.3897 342.612 17.3806 344.802 19.3455 345.543Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M36.5806 374.379L34.1984 371.343C33.5771 371.857 28.0105 375.849 21.6202 369.272L18.8882 371.982C26.0378 379.381 33.6385 376.796 36.5806 374.379Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M46.0555 364.272C48.3947 365.154 50.9717 363.988 51.8538 361.649C52.7358 359.309 51.5701 356.732 49.2308 355.85C46.8916 354.968 44.3146 356.134 43.4325 358.473C42.5505 360.813 43.7163 363.39 46.0555 364.272Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M8.81144 234.778L21.9322 227.719L23.7325 231.065L10.6118 238.124L8.81144 234.778Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M63.6906 268.751L63.6905 275.27C65.0833 275.261 76.7397 275.809 78.4437 291.413L84.8938 290.746C83.0411 273.268 70.2098 268.751 63.6906 268.751Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M91.2019 252.238L93.7469 249.416L104.811 259.395L102.266 262.217L91.2019 252.238Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M104.411 217.656L117.528 210.589L119.331 213.934L106.213 221.001L104.411 217.656Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M55.2608 225.067C57.6 225.95 60.177 224.784 61.0591 222.445C61.9411 220.105 60.7753 217.528 58.4361 216.646C56.0969 215.764 53.5199 216.93 52.6378 219.269C51.7911 221.515 52.9216 224.185 55.2608 225.067Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M64.7448 248.949L62.3626 245.914C61.7414 246.428 56.1747 250.42 49.7844 243.843L47.0525 246.553C54.1085 253.916 61.7091 251.331 64.7448 248.949Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M77.4703 111.18C79.8095 112.062 82.3865 110.896 83.2686 108.557C84.1506 106.217 82.9849 103.64 80.6456 102.758C78.3064 101.876 75.7294 103.042 74.8473 105.381C73.8717 107.685 75.1311 110.298 77.4703 111.18Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M65.9467 72.5771L79.0662 65.5125L80.8679 68.8584L67.7484 75.923L65.9467 72.5771Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M120.69 106.529L120.69 113.048C122.083 113.039 133.739 113.587 135.443 129.192L141.894 128.524C140.134 111.082 127.209 106.529 120.69 106.529Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M148.623 100.868L151.168 98.0461L162.232 108.025L159.687 110.847L148.623 100.868Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M139.247 86.0829L152.364 79.0159L154.166 82.3612L141.049 89.4283L139.247 86.0829Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M112.389 62.7875C114.728 63.6695 117.305 62.5037 118.187 60.1645C119.069 57.8253 117.904 55.2483 115.564 54.3662C113.225 53.4842 110.648 54.65 109.766 56.9892C108.884 59.3284 110.05 61.9054 112.389 62.7875Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M121.744 86.7274L119.362 83.6917C118.741 84.2056 113.174 88.1983 106.784 81.6208L104.052 84.3312C111.237 91.6359 118.709 89.1096 121.744 86.7274Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M6.71088 181.984L19.8304 174.919L21.6321 178.265L8.5126 185.33L6.71088 181.984Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M58.8079 23.7744L56.5146 29.8564C57.731 30.3151 68.5252 35.1333 64.4601 50.1657L70.7538 51.8976C75.2085 34.9815 64.8899 26.0677 58.8079 23.7744Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M189.981 112.497L195.581 112.52L195.494 134.42L189.894 134.397L189.981 112.497Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M133.385 244.906C135.35 245.647 137.541 244.657 138.281 242.692C139.022 240.727 138.031 238.536 136.066 237.795C134.102 237.054 131.911 238.045 131.17 240.01C130.336 241.94 131.42 244.166 133.385 244.906Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M194.6 94.7477L192.218 91.712C191.596 92.2258 186.03 96.2186 179.639 89.641L176.907 92.3515C184.092 99.6561 191.658 97.1651 194.6 94.7477Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M212.69 104.042L225.809 96.9766L227.61 100.322L214.492 107.387L212.69 104.042Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M127.816 159.339L127.816 165.858C129.116 165.814 140.865 166.397 142.569 182.002L149.02 181.334C147.167 163.857 134.371 159.246 127.816 159.339Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M164.2 133.977L169.8 133.999L169.713 155.899L164.113 155.877L164.2 133.977Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M144.31 219.447L146.855 216.625L157.92 226.605L155.374 229.427L144.31 219.447Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M165.299 199.256L178.416 192.188L180.218 195.534L167.101 202.601L165.299 199.256Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M15.0328 128.248L15.0327 134.768C16.4255 134.758 28.0818 135.306 29.7858 150.911L36.236 150.244C34.3832 132.766 21.552 128.248 15.0328 128.248Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M42.8921 122.678L45.438 119.857L56.4991 129.84L53.9531 132.661L42.8921 122.678Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M33.5284 107.728L46.6465 100.663L48.4484 104.008L35.3303 111.074L33.5284 107.728Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M16.087 108.447L13.7048 105.411C13.0835 105.925 7.51686 109.918 1.12658 103.34L-1.60538 106.051C5.54419 113.449 13.0513 110.829 16.087 108.447Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M70.5284 183.159L70.5283 189.678C71.9211 189.669 83.5774 190.217 85.2815 205.821L91.7316 205.154C89.9724 187.712 77.0828 183.065 70.5284 183.159Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M98.4365 177.489L100.982 174.668L112.044 184.65L109.498 187.471L98.4365 177.489Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M91.2532 134.971L104.37 127.904L106.173 131.249L93.0555 138.316L91.2532 134.971Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M71.6178 163.264L69.2356 160.228C68.6144 160.742 63.0477 164.735 56.6574 158.157L53.9255 160.868C61.075 168.266 68.5821 165.646 71.6178 163.264Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M78.6226 354.429L78.6225 360.948C80.0154 360.939 91.6717 361.486 93.3757 377.091L99.8259 376.424C98.0667 358.981 85.1418 354.429 78.6226 354.429Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M113.115 351.231L115.66 348.409L126.724 358.388L124.179 361.21L113.115 351.231Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M103.804 336.398L116.921 329.331L118.724 332.676L105.606 339.743L103.804 336.398Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M86.2616 337.003L83.8795 333.967C83.2582 334.481 77.6915 338.474 71.3013 331.896L68.5693 334.607C75.7189 342.005 83.2259 339.385 86.2616 337.003Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M115.715 301.406L115.715 307.925C117.108 307.916 128.764 308.463 130.468 324.068L136.918 323.401C135.159 305.958 122.234 301.406 115.715 301.406Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M148.06 294.743L150.606 291.922L161.667 301.905L159.121 304.726L148.06 294.743Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M138.769 279.89L151.886 272.823L153.688 276.168L140.571 283.235L138.769 279.89Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M121.242 280.512L118.86 277.476C118.239 277.99 112.672 281.983 106.282 275.405L103.55 278.116C110.699 285.514 118.206 282.894 121.242 280.512Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M35.2631 73.4628C39.2865 74.9799 43.7963 72.9398 45.3134 68.9163C46.8305 64.8928 44.7904 60.3831 40.767 58.866C36.7435 57.3489 32.2337 59.3889 30.7166 63.4124C29.1059 67.4006 31.146 71.9104 35.2631 73.4628Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M101.414 164.453C106.841 166.5 112.897 163.76 114.943 158.333C116.99 152.906 114.25 146.85 108.823 144.804C103.396 142.757 97.3402 145.497 95.2939 150.924C93.3411 156.386 96.0807 162.442 101.414 164.453Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M41.5766 206.655C47.0037 208.702 53.0596 205.962 55.106 200.535C57.1523 195.108 54.4128 189.052 48.9857 187.006C43.5587 184.959 37.5027 187.699 35.4564 193.126C33.4101 198.553 36.2432 204.644 41.5766 206.655Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M84.3194 239.551C88.3429 241.068 92.8526 239.028 94.3697 235.004C95.8868 230.981 93.8467 226.471 89.8233 224.954C85.7998 223.437 81.29 225.477 79.7729 229.501C78.2558 233.524 80.2959 238.034 84.3194 239.551Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M39.7451 345.861C43.7686 347.378 48.2783 345.338 49.7954 341.314C51.3125 337.291 49.2725 332.781 45.249 331.264C41.2255 329.747 36.7157 331.787 35.1986 335.811C33.6815 339.834 35.7216 344.344 39.7451 345.861Z",
              fill: "#008C95",
            }),
          ],
        }),
        s.jsxs("svg", {
          width: "411",
          height: "375",
          viewBox: "0 0 411 375",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            s.jsx("path", {
              d: "M375.368 247.631L369.769 247.653L369.858 269.553L375.457 269.53L375.368 247.631Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M353.586 268.608L351.04 265.788L339.979 275.772L342.526 278.593L353.586 268.608Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M339.317 263.238C337.352 263.979 335.162 262.988 334.421 261.023C333.68 259.058 334.671 256.867 336.636 256.126C338.601 255.385 340.791 256.376 341.532 258.341C342.273 260.306 341.282 262.497 339.317 263.238Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M420.193 231.758L417.647 228.937L406.584 238.919L409.13 241.74L420.193 231.758Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M379.822 228.942L382.204 225.906C382.825 226.42 388.392 230.412 394.782 223.835L397.514 226.545C390.364 233.944 382.857 231.324 379.822 228.942Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M363.706 237.628L350.586 230.563L348.785 233.909L361.904 240.974L363.706 237.628Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M370.346 218.835C368.007 219.717 365.43 218.551 364.548 216.212C363.666 213.872 364.832 211.295 367.171 210.413C369.51 209.531 372.087 210.697 372.969 213.036C373.851 215.376 372.686 217.953 370.346 218.835Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M403.638 190.744L401.091 187.923L390.031 197.907L392.577 200.728L403.638 190.744Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M324.328 224.639L318.728 224.66L318.812 246.559L324.412 246.537L324.328 224.639Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M307.423 360.334C305.458 361.075 303.268 360.084 302.527 358.119C301.786 356.154 302.777 353.963 304.742 353.223C306.707 352.482 308.897 353.473 309.638 355.437C310.379 357.402 309.388 359.593 307.423 360.334Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M388.289 328.85L385.743 326.028L374.68 336.01L377.226 338.832L388.289 328.85Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M347.928 326.038L350.31 323.003C350.931 323.516 356.498 327.509 362.888 320.932L365.62 323.642C358.47 331.04 350.87 328.456 347.928 326.038Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M331.793 334.714L318.673 327.649L316.872 330.995L329.991 338.059L331.793 334.714Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M338.452 315.931C336.113 316.813 333.536 315.647 332.654 313.308C331.772 310.969 332.938 308.392 335.277 307.51C337.616 306.628 340.193 307.793 341.075 310.132C341.957 312.472 340.792 315.049 338.452 315.931Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M371.726 287.837L369.179 285.017L358.119 295.001L360.665 297.822L371.726 287.837Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M397.597 313.99L384.478 306.925L382.676 310.271L395.796 317.336L397.597 313.99Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M409.752 269.489L409.752 276.008C408.359 275.999 396.703 276.547 394.999 292.151L388.549 291.484C390.402 274.007 403.233 269.489 409.752 269.489Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M292.42 321.809L286.82 321.831L286.907 343.731L292.507 343.709L292.42 321.809Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M274.414 306.52L276.796 303.484C277.417 303.998 282.984 307.991 289.374 301.413L292.106 304.123C284.957 311.522 277.356 308.937 274.414 306.52Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M258.175 315.127L245.057 308.062L243.255 311.408L256.373 318.473L258.175 315.127Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M264.939 296.413C262.599 297.295 260.022 296.129 259.14 293.79C258.258 291.451 259.424 288.874 261.763 287.991C264.103 287.109 266.68 288.275 267.562 290.614C268.444 292.954 267.278 295.531 264.939 296.413Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M298.239 268.294L295.694 265.472L284.63 275.451L287.175 278.273L298.239 268.294Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M324.081 294.47L310.96 287.408L309.159 290.754L322.279 297.817L324.081 294.47Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M274.723 244.397L269.123 244.419L269.21 266.319L274.81 266.297L274.723 244.397Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M240.53 254.638C238.565 255.378 236.375 254.388 235.634 252.423C234.893 250.458 235.884 248.267 237.849 247.526C239.814 246.785 242.004 247.776 242.745 249.741C243.486 251.706 242.495 253.897 240.53 254.638Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M218.897 302.275L213.297 302.297L213.381 324.196L218.981 324.174L218.897 302.275Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M182.791 317.769C180.826 318.51 178.635 317.519 177.895 315.554C177.154 313.589 178.145 311.398 180.109 310.658C182.074 309.917 184.265 310.908 185.006 312.873C185.747 314.837 184.756 317.028 182.791 317.769Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M223.295 283.473L225.677 280.437C226.299 280.951 231.865 284.944 238.256 278.366L240.988 281.077C233.838 288.475 226.237 285.89 223.295 283.473Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M207.147 292.139L194.028 285.078L192.227 288.424L205.347 295.485L207.147 292.139Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M213.82 273.366C211.481 274.248 208.904 273.082 208.022 270.743C207.14 268.404 208.306 265.827 210.645 264.945C212.984 264.063 215.561 265.228 216.443 267.568C217.325 269.907 216.16 272.484 213.82 273.366Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M272.577 359.205L270.032 356.384L258.968 366.364L261.514 369.186L272.577 359.205Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M249.08 335.259L243.48 335.282L243.567 357.182L249.167 357.16L249.08 335.259Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M214.852 345.543C212.887 346.284 210.696 345.293 209.955 343.328C209.214 341.363 210.205 339.173 212.17 338.432C214.135 337.691 216.326 338.682 217.067 340.647C217.808 342.612 216.817 344.802 214.852 345.543Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M197.617 374.379L199.999 371.343C200.62 371.857 206.187 375.849 212.577 369.272L215.309 371.982C208.159 379.381 200.559 376.796 197.617 374.379Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M188.142 364.272C185.803 365.154 183.226 363.988 182.343 361.649C181.461 359.309 182.627 356.732 184.966 355.85C187.306 354.968 189.883 356.134 190.765 358.473C191.647 360.813 190.481 363.39 188.142 364.272Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M336.29 173.555L330.69 173.579L330.784 195.479L336.384 195.455L336.29 173.555Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M318.553 205.407L316.008 202.585L304.943 212.564L307.489 215.386L318.553 205.407Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M241.45 226.183L243.832 223.148C244.454 223.661 250.02 227.654 256.411 221.077L259.143 223.787C252.087 231.15 244.486 228.565 241.45 226.183Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M225.386 234.778L212.265 227.719L210.465 231.065L223.585 238.124L225.386 234.778Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M291.194 214.089L278.074 207.024L276.273 210.37L289.392 217.435L291.194 214.089Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M170.507 268.751L170.507 275.27C169.114 275.261 157.458 275.809 155.754 291.413L149.303 290.746C151.156 273.268 163.987 268.751 170.507 268.751Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M142.995 252.238L140.45 249.416L129.386 259.395L131.931 262.217L142.995 252.238Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M129.786 217.656L116.669 210.589L114.867 213.934L127.984 221.001L129.786 217.656Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M178.937 225.067C176.597 225.95 174.02 224.784 173.138 222.445C172.256 220.105 173.422 217.528 175.761 216.646C178.1 215.764 180.677 216.93 181.559 219.269C182.406 221.515 181.276 224.185 178.937 225.067Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M169.452 248.949L171.835 245.914C172.456 246.428 178.023 250.42 184.413 243.843L187.145 246.553C180.089 253.916 172.488 251.331 169.452 248.949Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M285.905 188.474L288.287 185.439C288.908 185.953 294.475 189.945 300.865 183.368L303.597 186.078C296.448 193.476 288.847 190.892 285.905 188.474Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M249.175 213.224C246.836 214.107 244.259 212.941 243.377 210.602C242.495 208.262 243.66 205.685 246 204.803C248.339 203.921 250.916 205.087 251.798 207.426C252.774 209.73 251.514 212.342 249.175 213.224Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M156.727 111.18C154.388 112.062 151.811 110.896 150.929 108.557C150.047 106.217 151.212 103.64 153.552 102.758C155.891 101.876 158.468 103.042 159.35 105.381C160.326 107.685 159.066 110.298 156.727 111.18Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M168.25 72.5771L155.131 65.5125L153.329 68.8584L166.449 75.923L168.25 72.5771Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M113.507 106.529L113.507 113.048C112.114 113.039 100.458 113.587 98.7539 129.192L92.3038 128.524C94.063 111.082 106.988 106.529 113.507 106.529Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M85.5739 100.868L83.0289 98.0461L71.9648 108.025L74.5099 110.847L85.5739 100.868Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M94.9507 86.0829L81.8335 79.0159L80.0311 82.3612L93.1484 89.4283L94.9507 86.0829Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M121.808 62.7875C119.469 63.6695 116.892 62.5037 116.01 60.1645C115.128 57.8253 116.294 55.2483 118.633 54.3662C120.972 53.4842 123.549 54.65 124.431 56.9892C125.313 59.3284 124.148 61.9054 121.808 62.7875Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M112.453 86.7274L114.835 83.6917C115.456 84.2056 121.023 88.1983 127.413 81.6208L130.145 84.3312C122.961 91.6359 115.489 89.1096 112.453 86.7274Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M243.544 173.347L245.926 170.312C246.547 170.825 252.114 174.818 258.504 168.241L261.236 170.951C254.18 178.314 246.579 175.729 243.544 173.347Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M227.486 181.984L214.367 174.919L212.565 178.265L225.685 185.33L227.486 181.984Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M251.397 160.447C249.058 161.329 246.481 160.163 245.599 157.824C244.717 155.484 245.883 152.907 248.222 152.025C250.561 151.143 253.138 152.309 254.02 154.648C254.867 156.894 253.736 159.565 251.397 160.447Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M175.389 23.7744L177.683 29.8564C176.466 30.3151 165.672 35.1333 169.737 50.1657L163.443 51.8976C158.989 34.9815 169.307 26.0677 175.389 23.7744Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M44.216 112.497L38.616 112.52L38.7029 134.42L44.303 134.397L44.216 112.497Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M100.812 244.906C98.8472 245.647 96.6568 244.657 95.9159 242.692C95.1749 240.727 96.1658 238.536 98.1308 237.795C100.096 237.054 102.286 238.045 103.027 240.01C103.862 241.94 102.777 244.166 100.812 244.906Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M39.5975 94.7477L41.9797 91.712C42.6009 92.2258 48.1676 96.2186 54.5579 89.641L57.2899 92.3515C50.105 99.6561 42.5396 97.1651 39.5975 94.7477Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M21.5068 104.042L8.38873 96.9766L6.58687 100.322L19.705 107.387L21.5068 104.042Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M106.381 159.339L106.381 165.858C105.082 165.814 93.3318 166.397 91.6278 182.002L85.1776 181.334C87.0304 163.857 99.8264 159.246 106.381 159.339Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M69.9975 133.977L64.3975 133.999L64.4844 155.899L70.0845 155.877L69.9975 133.977Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M89.8869 219.447L87.3418 216.625L76.2778 226.605L78.8228 229.427L89.8869 219.447Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M68.8984 199.256L55.7811 192.188L53.9788 195.534L67.096 202.601L68.8984 199.256Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M219.165 128.248L219.165 134.768C217.772 134.758 206.115 135.306 204.411 150.911L197.961 150.244C199.814 132.766 212.645 128.248 219.165 128.248Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M191.305 122.678L188.759 119.857L177.698 129.84L180.244 132.661L191.305 122.678Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M200.669 107.728L187.551 100.663L185.749 104.008L198.867 111.074L200.669 107.728Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M218.11 108.447L220.492 105.411C221.114 105.925 226.68 109.918 233.071 103.34L235.803 106.051C228.653 113.449 221.146 110.829 218.11 108.447Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M163.669 183.159L163.669 189.678C162.276 189.669 150.62 190.217 148.916 205.821L142.466 205.154C144.225 187.712 157.114 183.065 163.669 183.159Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M135.761 177.489L133.215 174.668L122.154 184.65L124.699 187.471L135.761 177.489Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M142.944 134.971L129.827 127.904L128.025 131.249L141.142 138.316L142.944 134.971Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M162.579 163.264L164.962 160.228C165.583 160.742 171.15 164.735 177.54 158.157L180.272 160.868C173.122 168.266 165.615 165.646 162.579 163.264Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M155.575 354.429L155.575 360.948C154.182 360.939 142.526 361.486 140.822 377.091L134.371 376.424C136.131 358.981 149.055 354.429 155.575 354.429Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M121.082 351.231L118.537 348.409L107.473 358.388L110.018 361.21L121.082 351.231Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M130.393 336.398L117.276 329.331L115.474 332.676L128.591 339.743L130.393 336.398Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M147.936 337.003L150.318 333.967C150.939 334.481 156.506 338.474 162.896 331.896L165.628 334.607C158.478 342.005 150.971 339.385 147.936 337.003Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M118.482 301.406L118.482 307.925C117.089 307.916 105.433 308.463 103.729 324.068L97.2789 323.401C99.0381 305.958 111.963 301.406 118.482 301.406Z",
              fill: "#99CC00",
            }),
            s.jsx("path", {
              d: "M86.1373 294.743L83.5913 291.922L72.5302 301.905L75.0762 304.726L86.1373 294.743Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M95.4285 279.89L82.3112 272.823L80.5089 276.168L93.6261 283.235L95.4285 279.89Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M112.955 280.512L115.337 277.476C115.959 277.99 121.525 281.983 127.916 275.405L130.648 278.116C123.498 285.514 115.991 282.894 112.955 280.512Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M198.934 73.4628C194.911 74.9799 190.401 72.9398 188.884 68.9163C187.367 64.8928 189.407 60.3831 193.43 58.866C197.454 57.3489 201.964 59.3889 203.481 63.4124C205.091 67.4006 203.051 71.9104 198.934 73.4628Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M132.783 164.453C127.356 166.5 121.3 163.76 119.254 158.333C117.208 152.906 119.947 146.85 125.374 144.804C130.801 142.757 136.857 145.497 138.903 150.924C140.856 156.386 138.117 162.442 132.783 164.453Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M192.621 206.655C187.194 208.702 181.138 205.962 179.091 200.535C177.045 195.108 179.785 189.052 185.212 187.006C190.639 184.959 196.695 187.699 198.741 193.126C200.787 198.553 197.954 204.644 192.621 206.655Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M149.878 239.551C145.854 241.068 141.345 239.028 139.828 235.004C138.31 230.981 140.351 226.471 144.374 224.954C148.397 223.437 152.907 225.477 154.424 229.501C155.941 233.524 153.901 238.034 149.878 239.551Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M300.481 249.239C296.457 250.756 291.948 248.716 290.43 244.693C288.913 240.669 290.953 236.159 294.977 234.642C299 233.125 303.51 235.165 305.027 239.189C306.638 243.177 304.598 247.687 300.481 249.239Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M194.452 345.861C190.429 347.378 185.919 345.338 184.402 341.314C182.885 337.291 184.925 332.781 188.948 331.264C192.972 329.747 197.481 331.787 198.999 335.811C200.516 339.834 198.476 344.344 194.452 345.861Z",
              fill: "#008C95",
            }),
            s.jsx("path", {
              d: "M367.866 199.785C362.439 201.831 356.383 199.092 354.337 193.665C352.29 188.238 355.03 182.182 360.457 180.135C365.884 178.089 371.94 180.828 373.986 186.255C376.032 191.682 373.293 197.738 367.866 199.785Z",
              fill: "#008C95",
            }),
          ],
        }),
      ],
    }),
  });
}
function u8() {
  const [e, t] = I.useState(!1),
    [n, r] = I.useState(!1),
    [l, i] = I.useState(!1),
    o = () => {
      i(!0);
    },
    u = (c) => {
      t(c);
    },
    a = (c) => {
      r(c);
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(_3, {}),
      s.jsxs("main", {
        className: "main",
        children: [
          s.jsx(_4, { openTask: u }),
          s.jsx(j4, { tasksEnd: l }),
          e && s.jsx(o8, { openFirework: a, openTask: u, closePoints: o }),
          n && s.jsx(s8, {}),
          s.jsx("div", { className: "blur " + (e ? "active" : "") }),
        ],
      }),
    ],
  });
}
const a8 = S4();
is.createRoot(document.getElementById("root")).render(
  s.jsx(Tt.StrictMode, {
    children: s.jsx(C3, { store: a8, children: s.jsx(u8, {}) }),
  })
);
