import * as A from "react";
import ce, { createContext as vt, useMemo as Ee, useCallback as L, useContext as Yt, useRef as N, createElement as _, Fragment as Mn, forwardRef as J, Children as et, isValidElement as Lt, cloneElement as kn, useEffect as M, useState as K, useLayoutEffect as Vr, useReducer as ha, PureComponent as ga, memo as ba } from "react";
import { observe as Z, useObserver as ie, useObserverValue as w, set as fn } from "react-observing";
import { v4 as Br } from "uuid";
import * as xa from "react-dom";
import ya, { flushSync as Ur } from "react-dom";
var En = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function wa() {
  if (lr)
    return ft;
  lr = 1;
  var e = ce, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, d) {
    var f, u = {}, v = null, m = null;
    d !== void 0 && (v = "" + d), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (f in c)
      r.call(c, f) && !a.hasOwnProperty(f) && (u[f] = c[f]);
    if (i && i.defaultProps)
      for (f in c = i.defaultProps, c)
        u[f] === void 0 && (u[f] = c[f]);
    return { $$typeof: t, type: i, key: v, ref: m, props: u, _owner: o.current };
  }
  return ft.Fragment = n, ft.jsx = s, ft.jsxs = s, ft;
}
var mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function $a() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, l = "@@iterator";
    function b(p) {
      if (p === null || typeof p != "object")
        return null;
      var T = h && p[h] || p[l];
      return typeof T == "function" ? T : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(p) {
      {
        for (var T = arguments.length, O = new Array(T > 1 ? T - 1 : 0), j = 1; j < T; j++)
          O[j - 1] = arguments[j];
        C("error", p, O);
      }
    }
    function C(p, T, O) {
      {
        var j = g.ReactDebugCurrentFrame, X = j.getStackAddendum();
        X !== "" && (T += "%s", O = O.concat([X]));
        var Q = O.map(function(G) {
          return String(G);
        });
        Q.unshift("Warning: " + T), Function.prototype.apply.call(console[p], console, Q);
      }
    }
    var E = !1, $ = !1, S = !1, P = !1, D = !1, R;
    R = Symbol.for("react.module.reference");
    function z(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === a || D || p === o || p === d || p === f || P || p === m || E || $ || S || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === u || p.$$typeof === s || p.$$typeof === i || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === R || p.getModuleId !== void 0));
    }
    function V(p, T, O) {
      var j = p.displayName;
      if (j)
        return j;
      var X = T.displayName || T.name || "";
      return X !== "" ? O + "(" + X + ")" : O;
    }
    function k(p) {
      return p.displayName || "Context";
    }
    function q(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case i:
            var T = p;
            return k(T) + ".Consumer";
          case s:
            var O = p;
            return k(O._context) + ".Provider";
          case c:
            return V(p, p.render, "ForwardRef");
          case u:
            var j = p.displayName || null;
            return j !== null ? j : q(p.type) || "Memo";
          case v: {
            var X = p, Q = X._payload, G = X._init;
            try {
              return q(G(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, ne, U, re, I, ee, oe, me;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function pe() {
      {
        if (H === 0) {
          ne = console.log, U = console.info, re = console.warn, I = console.error, ee = console.group, oe = console.groupCollapsed, me = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        H++;
      }
    }
    function xe() {
      {
        if (H--, H === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, p, {
              value: ne
            }),
            info: W({}, p, {
              value: U
            }),
            warn: W({}, p, {
              value: re
            }),
            error: W({}, p, {
              value: I
            }),
            group: W({}, p, {
              value: ee
            }),
            groupCollapsed: W({}, p, {
              value: oe
            }),
            groupEnd: W({}, p, {
              value: me
            })
          });
        }
        H < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = g.ReactCurrentDispatcher, ye;
    function Re(p, T, O) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (X) {
            var j = X.stack.trim().match(/\n( *(at )?)/);
            ye = j && j[1] || "";
          }
        return `
` + ye + p;
      }
    }
    var le = !1, De;
    {
      var nn = typeof WeakMap == "function" ? WeakMap : Map;
      De = new nn();
    }
    function St(p, T) {
      if (!p || le)
        return "";
      {
        var O = De.get(p);
        if (O !== void 0)
          return O;
      }
      var j;
      le = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = ue.current, ue.current = null, pe();
      try {
        if (T) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Ie) {
              j = Ie;
            }
            Reflect.construct(p, [], G);
          } else {
            try {
              G.call();
            } catch (Ie) {
              j = Ie;
            }
            p.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            j = Ie;
          }
          p();
        }
      } catch (Ie) {
        if (Ie && j && typeof Ie.stack == "string") {
          for (var B = Ie.stack.split(`
`), de = j.stack.split(`
`), ae = B.length - 1, se = de.length - 1; ae >= 1 && se >= 0 && B[ae] !== de[se]; )
            se--;
          for (; ae >= 1 && se >= 0; ae--, se--)
            if (B[ae] !== de[se]) {
              if (ae !== 1 || se !== 1)
                do
                  if (ae--, se--, se < 0 || B[ae] !== de[se]) {
                    var we = `
` + B[ae].replace(" at new ", " at ");
                    return p.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", p.displayName)), typeof p == "function" && De.set(p, we), we;
                  }
                while (ae >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        le = !1, ue.current = Q, xe(), Error.prepareStackTrace = X;
      }
      var Xe = p ? p.displayName || p.name : "", cr = Xe ? Re(Xe) : "";
      return typeof p == "function" && De.set(p, cr), cr;
    }
    function rn(p, T, O) {
      return St(p, !1);
    }
    function on(p) {
      var T = p.prototype;
      return !!(T && T.isReactComponent);
    }
    function Te(p, T, O) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return St(p, on(p));
      if (typeof p == "string")
        return Re(p);
      switch (p) {
        case d:
          return Re("Suspense");
        case f:
          return Re("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return rn(p.render);
          case u:
            return Te(p.type, T, O);
          case v: {
            var j = p, X = j._payload, Q = j._init;
            try {
              return Te(Q(X), T, O);
            } catch {
            }
          }
        }
      return "";
    }
    var ze = Object.prototype.hasOwnProperty, Tt = {}, Pt = g.ReactDebugCurrentFrame;
    function Ke(p) {
      if (p) {
        var T = p._owner, O = Te(p.type, p._source, T ? T.type : null);
        Pt.setExtraStackFrame(O);
      } else
        Pt.setExtraStackFrame(null);
    }
    function an(p, T, O, j, X) {
      {
        var Q = Function.call.bind(ze);
        for (var G in p)
          if (Q(p, G)) {
            var B = void 0;
            try {
              if (typeof p[G] != "function") {
                var de = Error((j || "React class") + ": " + O + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              B = p[G](T, G, j, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              B = ae;
            }
            B && !(B instanceof Error) && (Ke(X), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", O, G, typeof B), Ke(null)), B instanceof Error && !(B.message in Tt) && (Tt[B.message] = !0, Ke(X), y("Failed %s type: %s", O, B.message), Ke(null));
          }
      }
    }
    var Ge = Array.isArray;
    function sn(p) {
      return Ge(p);
    }
    function Jo(p) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, O = T && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return O;
      }
    }
    function Qo(p) {
      try {
        return Jn(p), !1;
      } catch {
        return !0;
      }
    }
    function Jn(p) {
      return "" + p;
    }
    function Qn(p) {
      if (Qo(p))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Jo(p)), Jn(p);
    }
    var dt = g.ReactCurrentOwner, ea = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, tr, cn;
    cn = {};
    function ta(p) {
      if (ze.call(p, "ref")) {
        var T = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function na(p) {
      if (ze.call(p, "key")) {
        var T = Object.getOwnPropertyDescriptor(p, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function ra(p, T) {
      if (typeof p.ref == "string" && dt.current && T && dt.current.stateNode !== T) {
        var O = q(dt.current.type);
        cn[O] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(dt.current.type), p.ref), cn[O] = !0);
      }
    }
    function oa(p, T) {
      {
        var O = function() {
          er || (er = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        O.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function aa(p, T) {
      {
        var O = function() {
          tr || (tr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        O.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var ia = function(p, T, O, j, X, Q, G) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: T,
        ref: O,
        props: G,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function sa(p, T, O, j, X) {
      {
        var Q, G = {}, B = null, de = null;
        O !== void 0 && (Qn(O), B = "" + O), na(T) && (Qn(T.key), B = "" + T.key), ta(T) && (de = T.ref, ra(T, X));
        for (Q in T)
          ze.call(T, Q) && !ea.hasOwnProperty(Q) && (G[Q] = T[Q]);
        if (p && p.defaultProps) {
          var ae = p.defaultProps;
          for (Q in ae)
            G[Q] === void 0 && (G[Q] = ae[Q]);
        }
        if (B || de) {
          var se = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          B && oa(G, se), de && aa(G, se);
        }
        return ia(p, B, de, X, j, dt.current, G);
      }
    }
    var ln = g.ReactCurrentOwner, nr = g.ReactDebugCurrentFrame;
    function Ye(p) {
      if (p) {
        var T = p._owner, O = Te(p.type, p._source, T ? T.type : null);
        nr.setExtraStackFrame(O);
      } else
        nr.setExtraStackFrame(null);
    }
    var un;
    un = !1;
    function dn(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function rr() {
      {
        if (ln.current) {
          var p = q(ln.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function ca(p) {
      {
        if (p !== void 0) {
          var T = p.fileName.replace(/^.*[\\\/]/, ""), O = p.lineNumber;
          return `

Check your code at ` + T + ":" + O + ".";
        }
        return "";
      }
    }
    var or = {};
    function la(p) {
      {
        var T = rr();
        if (!T) {
          var O = typeof p == "string" ? p : p.displayName || p.name;
          O && (T = `

Check the top-level render call using <` + O + ">.");
        }
        return T;
      }
    }
    function ar(p, T) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var O = la(T);
        if (or[O])
          return;
        or[O] = !0;
        var j = "";
        p && p._owner && p._owner !== ln.current && (j = " It was passed a child from " + q(p._owner.type) + "."), Ye(p), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, j), Ye(null);
      }
    }
    function ir(p, T) {
      {
        if (typeof p != "object")
          return;
        if (sn(p))
          for (var O = 0; O < p.length; O++) {
            var j = p[O];
            dn(j) && ar(j, T);
          }
        else if (dn(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var X = b(p);
          if (typeof X == "function" && X !== p.entries)
            for (var Q = X.call(p), G; !(G = Q.next()).done; )
              dn(G.value) && ar(G.value, T);
        }
      }
    }
    function ua(p) {
      {
        var T = p.type;
        if (T == null || typeof T == "string")
          return;
        var O;
        if (typeof T == "function")
          O = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === u))
          O = T.propTypes;
        else
          return;
        if (O) {
          var j = q(T);
          an(O, p.props, "prop", j, p);
        } else if (T.PropTypes !== void 0 && !un) {
          un = !0;
          var X = q(T);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function da(p) {
      {
        for (var T = Object.keys(p.props), O = 0; O < T.length; O++) {
          var j = T[O];
          if (j !== "children" && j !== "key") {
            Ye(p), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ye(null);
            break;
          }
        }
        p.ref !== null && (Ye(p), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
      }
    }
    function sr(p, T, O, j, X, Q) {
      {
        var G = z(p);
        if (!G) {
          var B = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = ca(X);
          de ? B += de : B += rr();
          var ae;
          p === null ? ae = "null" : sn(p) ? ae = "array" : p !== void 0 && p.$$typeof === t ? (ae = "<" + (q(p.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof p, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, B);
        }
        var se = sa(p, T, O, X, Q);
        if (se == null)
          return se;
        if (G) {
          var we = T.children;
          if (we !== void 0)
            if (j)
              if (sn(we)) {
                for (var Xe = 0; Xe < we.length; Xe++)
                  ir(we[Xe], p);
                Object.freeze && Object.freeze(we);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(we, p);
        }
        return p === r ? da(se) : ua(se), se;
      }
    }
    function fa(p, T, O) {
      return sr(p, T, O, !0);
    }
    function ma(p, T, O) {
      return sr(p, T, O, !1);
    }
    var va = ma, pa = fa;
    mt.Fragment = r, mt.jsx = va, mt.jsxs = pa;
  }()), mt;
}
process.env.NODE_ENV === "production" ? En.exports = wa() : En.exports = $a();
var x = En.exports;
const Kr = vt({}), Ea = ({ children: e, configs: t, onGetNameSuggestions: n, onGetValueSuggestions: r, onGetValue: o, ...a }) => {
  const s = Ee(() => ({
    // GENERAL
    errorColor: (t == null ? void 0 : t.errorColor) || "red",
    warningColor: (t == null ? void 0 : t.warningColor) || "yellow",
    textDefaultColor: (t == null ? void 0 : t.textDefaultColor) || "white",
    borderDefaultColor: (t == null ? void 0 : t.borderDefaultColor) || "#3c3c3c",
    // Inputs
    inputTextDefault: void 0,
    inputBorderError: `thin solid  ${(t == null ? void 0 : t.errorColor) || "red"}`,
    inputTextError: `underline wavy ${(t == null ? void 0 : t.errorColor) || "red"}`,
    inputBorderWarning: `thin solid  ${(t == null ? void 0 : t.warningColor) || "yellow"}`,
    inputTextWarning: `underline wavy ${(t == null ? void 0 : t.warningColor) || "yellow"}`,
    inputBorderDefault: `thin solid  ${(t == null ? void 0 : t.borderDefaultColor) || "#3c3c3c"}`
  }), [t]), i = L((f) => n ? n(f) : [], [n]), c = L((f) => r ? r(f) : [], [r]), d = Ee(() => {
    if (o)
      return (f) => o(f);
  }, [o]);
  return /* @__PURE__ */ x.jsx(
    Kr.Provider,
    {
      value: {
        onGetValue: d,
        configs: s,
        onGetNameSuggestions: i,
        onGetValueSuggestions: c,
        ...a
      },
      children: e
    }
  );
}, at = () => Yt(Kr), Ce = () => at().configs;
var Gr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, dr = ce.createContext && /* @__PURE__ */ ce.createContext(Gr), Ca = ["attr", "size", "title"];
function Sa(e, t) {
  if (e == null)
    return {};
  var n = Ta(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ta(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
function fr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fr(Object(n), !0).forEach(function(r) {
      Pa(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Pa(e, t, n) {
  return t = _a(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _a(e) {
  var t = Oa(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Oa(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yr(e) {
  return e && e.map((t, n) => /* @__PURE__ */ ce.createElement(t.tag, Ft({
    key: n
  }, t.attr), Yr(t.child)));
}
function it(e) {
  return (t) => /* @__PURE__ */ ce.createElement(Ra, Ht({
    attr: Ft({}, e.attr)
  }, t), Yr(e.child));
}
function Ra(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: a
    } = e, s = Sa(e, Ca), i = o || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ ce.createElement("svg", Ht({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: c,
      style: Ft(Ft({
        color: e.color || n.color
      }, n.style), e.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ ce.createElement("title", null, a), e.children);
  };
  return dr !== void 0 ? /* @__PURE__ */ ce.createElement(dr.Consumer, null, (n) => t(n)) : t(Gr);
}
function Xr(e) {
  return it({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z" }, child: [] }] })(e);
}
function Da(e) {
  return it({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M8.024 5.928l-4.357 4.357-.62-.618L7.716 5h.618L13 9.667l-.619.618-4.357-4.357z" }, child: [] }] })(e);
}
function Ia(e) {
  return it({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z" }, child: [] }] })(e);
}
function Aa(e) {
  return it({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z" }, child: [] }] })(e);
}
function st(e) {
  return it({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z" }, child: [] }] })(e);
}
function xt(e) {
  return it({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
class zt {
  static getInputsWidth() {
    const t = localStorage.getItem("INPUTS_WIDTH");
    return t ? Number(t) : 60;
  }
  static setInputsWidth(t) {
    return localStorage.setItem("INPUTS_WIDTH", String(t)), t;
  }
  static getGroupsInOpen(t) {
    const n = localStorage.getItem(t.toLocaleUpperCase() + "_GROUPS_OPEN");
    try {
      return n !== null ? JSON.parse(n) : !0;
    } catch {
      return !0;
    }
  }
  static setGroupsInOpen(t, n) {
    return localStorage.setItem(t.toLocaleUpperCase() + "_GROUPS_OPEN", String(n)), n;
  }
}
var te = /* @__PURE__ */ ((e) => (e.stringWithSuggestions = "stringWithSuggestions", e.multiExpression = "multiExpression", e.yesNoSelection = "yesNoSelection", e.inputMultiTags = "inputMultiTags", e.fullBigString = "fullBigString", e.multiAssign = "multiAssign", e.colorPicker = "colorPicker", e.fieldsTree = "fieldsTree", e.expression = "expression", e.optionList = "optionList", e.stringList = "stringList", e.bigString = "bigString", e.selection = "selection", e.recursive = "recursive", e.viewOnly = "viewOnly", e.boolean = "boolean", e.string = "string", e.number = "number", e.binary = "binary", e.assign = "assign", e.hidden = "hidden", e))(te || {});
const xu = (e) => ({
  description: e.description || Z(""),
  disabled: e.disabled || Z(!1),
  value: e.value || Z(""),
  label: e.label || Z(""),
  name: e.name || Z("")
}), qr = (e) => ({
  id: e.id || Z(Br()),
  value: e.value || Z(""),
  name: e.name || Z(void 0),
  order: e.order || Z(void 0),
  group: e.group || Z(void 0),
  type: e.type || Z(te.string),
  information: e.information || Z(void 0),
  fileMaxSize: e.fileMaxSize || Z(void 0),
  nameHasError: e.nameHasError || Z(void 0),
  propertyType: e.propertyType || Z("default"),
  valueHasError: e.valueHasError || Z(void 0),
  nameHasWarning: e.nameHasWarning || Z(void 0),
  valueHasWarning: e.valueHasWarning || Z(void 0),
  editNameDisabled: e.editNameDisabled || Z(void 0),
  editValueDisabled: e.editValueDisabled || Z(void 0),
  typeOfFilesToAccept: e.typeOfFilesToAccept || Z(void 0),
  nameInputPickerDisabled: e.nameInputPickerDisabled || Z(!0),
  valueInputPickerDisabled: e.valueInputPickerDisabled || Z(!0)
}), Na = Z(zt.getInputsWidth()), ja = ({ oldWidth: e = 0, onChange: t, onResizeEnd: n }) => {
  const r = N(0), o = L((i) => {
    t(window.innerWidth - i.pageX - r.current);
  }, [t]), a = L((i) => {
    window.document.body.style.cursor = "unset", n && n(window.innerWidth - i.pageX - r.current), window.onmousemove = null, window.onmouseup = null;
  }, [n]), s = L((i) => {
    r.current = window.innerWidth - i.pageX - e, window.document.body.style.cursor = "col-resize", window.onmousemove = o, window.onmouseup = a;
  }, [e, o, a]);
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      onMouseDown: s,
      className: "transition-all border-none cursor-col-resize rounded h-8 w-1 z-10 hover:bg-secondary"
    }
  );
};
function F() {
  return F = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, F.apply(this, arguments);
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ma(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Wn(...e) {
  return (t) => e.forEach(
    (n) => Ma(n, t)
  );
}
function fe(...e) {
  return L(Wn(...e), e);
}
function Be(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ vt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function d(u) {
      const { scope: v, children: m, ...h } = u, l = (v == null ? void 0 : v[e][c]) || i, b = Ee(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ _(l.Provider, {
        value: b
      }, m);
    }
    function f(u, v) {
      const m = (v == null ? void 0 : v[e][c]) || i, h = Yt(m);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return d.displayName = a + "Provider", [
      d,
      f
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ vt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Ee(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    ka(o, ...t)
  ];
}
function ka(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: d }) => {
        const u = c(a)[`__scope${d}`];
        return {
          ...i,
          ...u
        };
      }, {});
      return Ee(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const pt = /* @__PURE__ */ J((e, t) => {
  const { children: n, ...r } = e, o = et.toArray(n), a = o.find(Wa);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? et.count(s) > 1 ? et.only(null) : /* @__PURE__ */ Lt(s) ? s.props.children : null : c);
    return /* @__PURE__ */ _(Cn, F({}, r, {
      ref: t
    }), /* @__PURE__ */ Lt(s) ? /* @__PURE__ */ kn(s, void 0, i) : null);
  }
  return /* @__PURE__ */ _(Cn, F({}, r, {
    ref: t
  }), n);
});
pt.displayName = "Slot";
const Cn = /* @__PURE__ */ J((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Lt(n) ? /* @__PURE__ */ kn(n, {
    ...La(r, n.props),
    ref: t ? Wn(t, n.ref) : n.ref
  }) : et.count(n) > 1 ? et.only(null) : null;
});
Cn.displayName = "SlotClone";
const Zr = ({ children: e }) => /* @__PURE__ */ _(Mn, null, e);
function Wa(e) {
  return /* @__PURE__ */ Lt(e) && e.type === Zr;
}
function La(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      a(...i), o(...i);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const Ha = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], be = Ha.reduce((e, t) => {
  const n = /* @__PURE__ */ J((r, o) => {
    const { asChild: a, ...s } = r, i = a ? pt : t;
    return M(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ _(i, F({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Jr(e, t) {
  e && Ur(
    () => e.dispatchEvent(t)
  );
}
function _e(e) {
  const t = N(e);
  return M(() => {
    t.current = e;
  }), Ee(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Fa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e);
  M(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Sn = "dismissableLayer.update", za = "dismissableLayer.pointerDownOutside", Va = "dismissableLayer.focusOutside";
let mr;
const Ba = /* @__PURE__ */ vt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Qr = /* @__PURE__ */ J((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...d } = e, f = Yt(Ba), [u, v] = K(null), m = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = K({}), l = fe(
    t,
    (D) => v(D)
  ), b = Array.from(f.layers), [g] = [
    ...f.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = b.indexOf(g), C = u ? b.indexOf(u) : -1, E = f.layersWithOutsidePointerEventsDisabled.size > 0, $ = C >= y, S = Ua((D) => {
    const R = D.target, z = [
      ...f.branches
    ].some(
      (V) => V.contains(R)
    );
    !$ || z || (a == null || a(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, m), P = Ka((D) => {
    const R = D.target;
    [
      ...f.branches
    ].some(
      (V) => V.contains(R)
    ) || (s == null || s(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, m);
  return Fa((D) => {
    C === f.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && c && (D.preventDefault(), c()));
  }, m), M(() => {
    if (u)
      return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (mr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), vr(), () => {
        r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = mr);
      };
  }, [
    u,
    m,
    r,
    f
  ]), M(() => () => {
    u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), vr());
  }, [
    u,
    f
  ]), M(() => {
    const D = () => h({});
    return document.addEventListener(Sn, D), () => document.removeEventListener(Sn, D);
  }, []), /* @__PURE__ */ _(be.div, F({}, d, {
    ref: l,
    style: {
      pointerEvents: E ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Y(e.onFocusCapture, P.onFocusCapture),
    onBlurCapture: Y(e.onBlurCapture, P.onBlurCapture),
    onPointerDownCapture: Y(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function Ua(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e), r = N(!1), o = N(() => {
  });
  return M(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let d = function() {
          eo(za, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, {
          once: !0
        })) : d();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Ka(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = _e(e), r = N(!1);
  return M(() => {
    const o = (a) => {
      a.target && !r.current && eo(Va, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function vr() {
  const e = new CustomEvent(Sn);
  document.dispatchEvent(e);
}
function eo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Jr(o, a) : o.dispatchEvent(a);
}
const rt = globalThis != null && globalThis.document ? Vr : () => {
}, Ga = A.useId || (() => {
});
let Ya = 0;
function Vt(e) {
  const [t, n] = A.useState(Ga());
  return rt(() => {
    e || n(
      (r) => r ?? String(Ya++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Xa = ["top", "right", "bottom", "left"], Le = Math.min, he = Math.max, Bt = Math.round, _t = Math.floor, He = (e) => ({
  x: e,
  y: e
}), qa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Za = {
  start: "end",
  end: "start"
};
function Tn(e, t, n) {
  return he(e, Le(t, n));
}
function Ae(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ne(e) {
  return e.split("-")[0];
}
function ct(e) {
  return e.split("-")[1];
}
function Ln(e) {
  return e === "x" ? "y" : "x";
}
function Hn(e) {
  return e === "y" ? "height" : "width";
}
function lt(e) {
  return ["top", "bottom"].includes(Ne(e)) ? "y" : "x";
}
function Fn(e) {
  return Ln(lt(e));
}
function Ja(e, t, n) {
  n === void 0 && (n = !1);
  const r = ct(e), o = Fn(e), a = Hn(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ut(s)), [s, Ut(s)];
}
function Qa(e) {
  const t = Ut(e);
  return [Pn(e), t, Pn(t)];
}
function Pn(e) {
  return e.replace(/start|end/g, (t) => Za[t]);
}
function ei(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function ti(e, t, n, r) {
  const o = ct(e);
  let a = ei(Ne(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Pn)))), a;
}
function Ut(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qa[t]);
}
function ni(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function to(e) {
  return typeof e != "number" ? ni(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function pr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = lt(t), s = Fn(t), i = Hn(s), c = Ne(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, v = r[i] / 2 - o[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (ct(t)) {
    case "start":
      m[s] -= v * (n && d ? -1 : 1);
      break;
    case "end":
      m[s] += v * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const ri = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: u
  } = pr(d, r, c), v = r, m = {}, h = 0;
  for (let l = 0; l < i.length; l++) {
    const {
      name: b,
      fn: g
    } = i[l], {
      x: y,
      y: C,
      data: E,
      reset: $
    } = await g({
      x: f,
      y: u,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: m,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, u = C ?? u, m = {
      ...m,
      [b]: {
        ...m[b],
        ...E
      }
    }, $ && h <= 50 && (h++, typeof $ == "object" && ($.placement && (v = $.placement), $.rects && (d = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: f,
      y: u
    } = pr(d, v, c)), l = -1);
  }
  return {
    x: f,
    y: u,
    placement: v,
    strategy: o,
    middlewareData: m
  };
};
async function ht(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: v = !1,
    padding: m = 0
  } = Ae(t, e), h = to(m), b = i[v ? u === "floating" ? "reference" : "floating" : u], g = Kt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: c
  })), y = u === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), E = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Kt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: C,
    strategy: c
  }) : y);
  return {
    top: (g.top - $.top + h.top) / E.y,
    bottom: ($.bottom - g.bottom + h.bottom) / E.y,
    left: (g.left - $.left + h.left) / E.x,
    right: ($.right - g.right + h.right) / E.x
  };
}
const oi = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: d,
      padding: f = 0
    } = Ae(e, t) || {};
    if (d == null)
      return {};
    const u = to(f), v = {
      x: n,
      y: r
    }, m = Fn(o), h = Hn(m), l = await s.getDimensions(d), b = m === "y", g = b ? "top" : "left", y = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", E = a.reference[h] + a.reference[m] - v[m] - a.floating[h], $ = v[m] - a.reference[m], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let P = S ? S[C] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(S))) && (P = i.floating[C] || a.floating[h]);
    const D = E / 2 - $ / 2, R = P / 2 - l[h] / 2 - 1, z = Le(u[g], R), V = Le(u[y], R), k = z, q = P - l[h] - V, W = P / 2 - l[h] / 2 + D, H = Tn(k, W, q), ne = !c.arrow && ct(o) != null && W !== H && a.reference[h] / 2 - (W < k ? z : V) - l[h] / 2 < 0, U = ne ? W < k ? W - k : W - q : 0;
    return {
      [m]: v[m] + U,
      data: {
        [m]: H,
        centerOffset: W - H - U,
        ...ne && {
          alignmentOffset: U
        }
      },
      reset: ne
    };
  }
}), ai = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: v,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: l = !0,
        ...b
      } = Ae(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const g = Ne(o), y = Ne(i) === i, C = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), E = v || (y || !l ? [Ut(i)] : Qa(i));
      !v && h !== "none" && E.push(...ti(i, l, h, C));
      const $ = [i, ...E], S = await ht(t, b), P = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && P.push(S[g]), u) {
        const k = Ja(o, s, C);
        P.push(S[k[0]], S[k[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: P
      }], !P.every((k) => k <= 0)) {
        var R, z;
        const k = (((R = a.flip) == null ? void 0 : R.index) || 0) + 1, q = $[k];
        if (q)
          return {
            data: {
              index: k,
              overflows: D
            },
            reset: {
              placement: q
            }
          };
        let W = (z = D.filter((H) => H.overflows[0] <= 0).sort((H, ne) => H.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!W)
          switch (m) {
            case "bestFit": {
              var V;
              const H = (V = D.map((ne) => [ne.placement, ne.overflows.filter((U) => U > 0).reduce((U, re) => U + re, 0)]).sort((ne, U) => ne[1] - U[1])[0]) == null ? void 0 : V[0];
              H && (W = H);
              break;
            }
            case "initialPlacement":
              W = i;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function hr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function gr(e) {
  return Xa.some((t) => e[t] >= 0);
}
const ii = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ae(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await ht(t, {
            ...o,
            elementContext: "reference"
          }), s = hr(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: gr(s)
            }
          };
        }
        case "escaped": {
          const a = await ht(t, {
            ...o,
            altBoundary: !0
          }), s = hr(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: gr(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function si(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ne(n), i = ct(n), c = lt(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, f = a && c ? -1 : 1, u = Ae(t, e);
  let {
    mainAxis: v,
    crossAxis: m,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), c ? {
    x: m * f,
    y: v * d
  } : {
    x: v * d,
    y: m * f
  };
}
const ci = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await si(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, li = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: g,
              y
            } = b;
            return {
              x: g,
              y
            };
          }
        },
        ...c
      } = Ae(e, t), d = {
        x: n,
        y: r
      }, f = await ht(t, c), u = lt(Ne(o)), v = Ln(u);
      let m = d[v], h = d[u];
      if (a) {
        const b = v === "y" ? "top" : "left", g = v === "y" ? "bottom" : "right", y = m + f[b], C = m - f[g];
        m = Tn(y, m, C);
      }
      if (s) {
        const b = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", y = h + f[b], C = h - f[g];
        h = Tn(y, h, C);
      }
      const l = i.fn({
        ...t,
        [v]: m,
        [u]: h
      });
      return {
        ...l,
        data: {
          x: l.x - n,
          y: l.y - r
        }
      };
    }
  };
}, ui = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = Ae(e, t), f = {
        x: n,
        y: r
      }, u = lt(o), v = Ln(u);
      let m = f[v], h = f[u];
      const l = Ae(i, t), b = typeof l == "number" ? {
        mainAxis: l,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...l
      };
      if (c) {
        const C = v === "y" ? "height" : "width", E = a.reference[v] - a.floating[C] + b.mainAxis, $ = a.reference[v] + a.reference[C] - b.mainAxis;
        m < E ? m = E : m > $ && (m = $);
      }
      if (d) {
        var g, y;
        const C = v === "y" ? "width" : "height", E = ["top", "left"].includes(Ne(o)), $ = a.reference[u] - a.floating[C] + (E && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (E ? 0 : b.crossAxis), S = a.reference[u] + a.reference[C] + (E ? 0 : ((y = s.offset) == null ? void 0 : y[u]) || 0) - (E ? b.crossAxis : 0);
        h < $ ? h = $ : h > S && (h = S);
      }
      return {
        [v]: m,
        [u]: h
      };
    }
  };
}, di = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = Ae(e, t), c = await ht(t, i), d = Ne(n), f = ct(n), u = lt(n) === "y", {
        width: v,
        height: m
      } = r.floating;
      let h, l;
      d === "top" || d === "bottom" ? (h = d, l = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (l = d, h = f === "end" ? "top" : "bottom");
      const b = m - c[h], g = v - c[l], y = !t.middlewareData.shift;
      let C = b, E = g;
      if (u) {
        const S = v - c.left - c.right;
        E = f || y ? Le(g, S) : S;
      } else {
        const S = m - c.top - c.bottom;
        C = f || y ? Le(b, S) : S;
      }
      if (y && !f) {
        const S = he(c.left, 0), P = he(c.right, 0), D = he(c.top, 0), R = he(c.bottom, 0);
        u ? E = v - 2 * (S !== 0 || P !== 0 ? S + P : he(c.left, c.right)) : C = m - 2 * (D !== 0 || R !== 0 ? D + R : he(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: E,
        availableHeight: C
      });
      const $ = await o.getDimensions(a.floating);
      return v !== $.width || m !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Fe(e) {
  return no(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Me(e) {
  var t;
  return (t = (no(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function no(e) {
  return e instanceof Node || e instanceof ge(e).Node;
}
function je(e) {
  return e instanceof Element || e instanceof ge(e).Element;
}
function Oe(e) {
  return e instanceof HTMLElement || e instanceof ge(e).HTMLElement;
}
function br(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ge(e).ShadowRoot;
}
function yt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = $e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function fi(e) {
  return ["table", "td", "th"].includes(Fe(e));
}
function zn(e) {
  const t = Vn(), n = $e(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function mi(e) {
  let t = ot(e);
  for (; Oe(t) && !Xt(t); ) {
    if (zn(t))
      return t;
    t = ot(t);
  }
  return null;
}
function Vn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Xt(e) {
  return ["html", "body", "#document"].includes(Fe(e));
}
function $e(e) {
  return ge(e).getComputedStyle(e);
}
function qt(e) {
  return je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function ot(e) {
  if (Fe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    br(e) && e.host || // Fallback.
    Me(e)
  );
  return br(t) ? t.host : t;
}
function ro(e) {
  const t = ot(e);
  return Xt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Oe(t) && yt(t) ? t : ro(t);
}
function gt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ro(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ge(o);
  return a ? t.concat(s, s.visualViewport || [], yt(o) ? o : [], s.frameElement && n ? gt(s.frameElement) : []) : t.concat(o, gt(o, [], n));
}
function oo(e) {
  const t = $e(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Oe(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Bt(n) !== a || Bt(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Bn(e) {
  return je(e) ? e : e.contextElement;
}
function tt(e) {
  const t = Bn(e);
  if (!Oe(t))
    return He(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = oo(t);
  let s = (a ? Bt(n.width) : n.width) / r, i = (a ? Bt(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const vi = /* @__PURE__ */ He(0);
function ao(e) {
  const t = ge(e);
  return !Vn() || !t.visualViewport ? vi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ge(e) ? !1 : t;
}
function Ve(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Bn(e);
  let s = He(1);
  t && (r ? je(r) && (s = tt(r)) : s = tt(e));
  const i = pi(a, n, r) ? ao(a) : He(0);
  let c = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, f = o.width / s.x, u = o.height / s.y;
  if (a) {
    const v = ge(a), m = r && je(r) ? ge(r) : r;
    let h = v, l = h.frameElement;
    for (; l && r && m !== h; ) {
      const b = tt(l), g = l.getBoundingClientRect(), y = $e(l), C = g.left + (l.clientLeft + parseFloat(y.paddingLeft)) * b.x, E = g.top + (l.clientTop + parseFloat(y.paddingTop)) * b.y;
      c *= b.x, d *= b.y, f *= b.x, u *= b.y, c += C, d += E, h = ge(l), l = h.frameElement;
    }
  }
  return Kt({
    width: f,
    height: u,
    x: c,
    y: d
  });
}
const hi = [":popover-open", ":modal"];
function io(e) {
  return hi.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function gi(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Me(r), i = t ? io(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = He(1);
  const f = He(0), u = Oe(r);
  if ((u || !u && !a) && ((Fe(r) !== "body" || yt(s)) && (c = qt(r)), Oe(r))) {
    const v = Ve(r);
    d = tt(r), f.x = v.x + r.clientLeft, f.y = v.y + r.clientTop;
  }
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + f.x,
    y: n.y * d.y - c.scrollTop * d.y + f.y
  };
}
function bi(e) {
  return Array.from(e.getClientRects());
}
function so(e) {
  return Ve(Me(e)).left + qt(e).scrollLeft;
}
function xi(e) {
  const t = Me(e), n = qt(e), r = e.ownerDocument.body, o = he(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = he(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + so(e);
  const i = -n.scrollTop;
  return $e(r).direction === "rtl" && (s += he(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function yi(e, t) {
  const n = ge(e), r = Me(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const d = Vn();
    (!d || d && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function wi(e, t) {
  const n = Ve(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Oe(e) ? tt(e) : He(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: d
  };
}
function xr(e, t, n) {
  let r;
  if (t === "viewport")
    r = yi(e, n);
  else if (t === "document")
    r = xi(Me(e));
  else if (je(t))
    r = wi(t, n);
  else {
    const o = ao(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Kt(r);
}
function co(e, t) {
  const n = ot(e);
  return n === t || !je(n) || Xt(n) ? !1 : $e(n).position === "fixed" || co(n, t);
}
function $i(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = gt(e, [], !1).filter((i) => je(i) && Fe(i) !== "body"), o = null;
  const a = $e(e).position === "fixed";
  let s = a ? ot(e) : e;
  for (; je(s) && !Xt(s); ) {
    const i = $e(s), c = zn(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || yt(s) && !c && co(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = ot(s);
  }
  return t.set(e, r), r;
}
function Ei(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? $i(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((d, f) => {
    const u = xr(t, f, o);
    return d.top = he(u.top, d.top), d.right = Le(u.right, d.right), d.bottom = Le(u.bottom, d.bottom), d.left = he(u.left, d.left), d;
  }, xr(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ci(e) {
  const {
    width: t,
    height: n
  } = oo(e);
  return {
    width: t,
    height: n
  };
}
function Si(e, t, n) {
  const r = Oe(t), o = Me(t), a = n === "fixed", s = Ve(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = He(0);
  if (r || !r && !a)
    if ((Fe(t) !== "body" || yt(o)) && (i = qt(t)), r) {
      const u = Ve(t, !0, a, t);
      c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
    } else
      o && (c.x = so(o));
  const d = s.left + i.scrollLeft - c.x, f = s.top + i.scrollTop - c.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function yr(e, t) {
  return !Oe(e) || $e(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function lo(e, t) {
  const n = ge(e);
  if (!Oe(e) || io(e))
    return n;
  let r = yr(e, t);
  for (; r && fi(r) && $e(r).position === "static"; )
    r = yr(r, t);
  return r && (Fe(r) === "html" || Fe(r) === "body" && $e(r).position === "static" && !zn(r)) ? n : r || mi(e) || n;
}
const Ti = async function(e) {
  const t = this.getOffsetParent || lo, n = this.getDimensions;
  return {
    reference: Si(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function Pi(e) {
  return $e(e).direction === "rtl";
}
const _i = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gi,
  getDocumentElement: Me,
  getClippingRect: Ei,
  getOffsetParent: lo,
  getElementRects: Ti,
  getClientRects: bi,
  getDimensions: Ci,
  getScale: tt,
  isElement: je,
  isRTL: Pi
};
function Oi(e, t) {
  let n = null, r;
  const o = Me(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: d,
      top: f,
      width: u,
      height: v
    } = e.getBoundingClientRect();
    if (i || t(), !u || !v)
      return;
    const m = _t(f), h = _t(o.clientWidth - (d + u)), l = _t(o.clientHeight - (f + v)), b = _t(d), y = {
      rootMargin: -m + "px " + -h + "px " + -l + "px " + -b + "px",
      threshold: he(0, Le(1, c)) || 1
    };
    let C = !0;
    function E($) {
      const S = $[0].intersectionRatio;
      if (S !== c) {
        if (!C)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Ri(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = Bn(e), f = o || a ? [...d ? gt(d) : [], ...gt(t)] : [];
  f.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), a && g.addEventListener("resize", n);
  });
  const u = d && i ? Oi(d, n) : null;
  let v = -1, m = null;
  s && (m = new ResizeObserver((g) => {
    let [y] = g;
    y && y.target === d && m && (m.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var C;
      (C = m) == null || C.observe(t);
    })), n();
  }), d && !c && m.observe(d), m.observe(t));
  let h, l = c ? Ve(e) : null;
  c && b();
  function b() {
    const g = Ve(e);
    l && (g.x !== l.x || g.y !== l.y || g.width !== l.width || g.height !== l.height) && n(), l = g, h = requestAnimationFrame(b);
  }
  return n(), () => {
    var g;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), u == null || u(), (g = m) == null || g.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const Di = li, Ii = ai, Ai = di, Ni = ii, wr = oi, ji = ui, Mi = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: _i,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return ri(e, t, {
    ...o,
    platform: a
  });
}, ki = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? wr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? wr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Nt = typeof document < "u" ? Vr : M;
function Gt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Gt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Gt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function uo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $r(e, t) {
  const n = uo(e);
  return Math.round(t * n) / n;
}
function Er(e) {
  const t = A.useRef(e);
  return Nt(() => {
    t.current = e;
  }), t;
}
function Wi(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: d
  } = e, [f, u] = A.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, m] = A.useState(r);
  Gt(v, r) || m(r);
  const [h, l] = A.useState(null), [b, g] = A.useState(null), y = A.useCallback((U) => {
    U !== S.current && (S.current = U, l(U));
  }, []), C = A.useCallback((U) => {
    U !== P.current && (P.current = U, g(U));
  }, []), E = a || h, $ = s || b, S = A.useRef(null), P = A.useRef(null), D = A.useRef(f), R = c != null, z = Er(c), V = Er(o), k = A.useCallback(() => {
    if (!S.current || !P.current)
      return;
    const U = {
      placement: t,
      strategy: n,
      middleware: v
    };
    V.current && (U.platform = V.current), Mi(S.current, P.current, U).then((re) => {
      const I = {
        ...re,
        isPositioned: !0
      };
      q.current && !Gt(D.current, I) && (D.current = I, xa.flushSync(() => {
        u(I);
      }));
    });
  }, [v, t, n, V]);
  Nt(() => {
    d === !1 && D.current.isPositioned && (D.current.isPositioned = !1, u((U) => ({
      ...U,
      isPositioned: !1
    })));
  }, [d]);
  const q = A.useRef(!1);
  Nt(() => (q.current = !0, () => {
    q.current = !1;
  }), []), Nt(() => {
    if (E && (S.current = E), $ && (P.current = $), E && $) {
      if (z.current)
        return z.current(E, $, k);
      k();
    }
  }, [E, $, k, z, R]);
  const W = A.useMemo(() => ({
    reference: S,
    floating: P,
    setReference: y,
    setFloating: C
  }), [y, C]), H = A.useMemo(() => ({
    reference: E,
    floating: $
  }), [E, $]), ne = A.useMemo(() => {
    const U = {
      position: n,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return U;
    const re = $r(H.floating, f.x), I = $r(H.floating, f.y);
    return i ? {
      ...U,
      transform: "translate(" + re + "px, " + I + "px)",
      ...uo(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: re,
      top: I
    };
  }, [n, i, H.floating, f.x, f.y]);
  return A.useMemo(() => ({
    ...f,
    update: k,
    refs: W,
    elements: H,
    floatingStyles: ne
  }), [f, k, W, H, ne]);
}
function fo(e) {
  const [t, n] = K(void 0);
  return rt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          s = d.inlineSize, i = d.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({
          width: s,
          height: i
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const mo = "Popper", [vo, Zt] = Be(mo), [Li, po] = vo(mo), Hi = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = K(null);
  return /* @__PURE__ */ _(Li, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Fi = "PopperAnchor", zi = /* @__PURE__ */ J((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = po(Fi, n), s = N(null), i = fe(t, s);
  return M(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ _(be.div, F({}, o, {
    ref: i
  }));
}), ho = "PopperContent", [Vi, yu] = vo(ho), Bi = /* @__PURE__ */ J((e, t) => {
  var n, r, o, a, s, i, c, d;
  const { __scopePopper: f, side: u = "bottom", sideOffset: v = 0, align: m = "center", alignOffset: h = 0, arrowPadding: l = 0, avoidCollisions: b = !0, collisionBoundary: g = [], collisionPadding: y = 0, sticky: C = "partial", hideWhenDetached: E = !1, updatePositionStrategy: $ = "optimized", onPlaced: S, ...P } = e, D = po(ho, f), [R, z] = K(null), V = fe(
    t,
    (Te) => z(Te)
  ), [k, q] = K(null), W = fo(k), H = (n = W == null ? void 0 : W.width) !== null && n !== void 0 ? n : 0, ne = (r = W == null ? void 0 : W.height) !== null && r !== void 0 ? r : 0, U = u + (m !== "center" ? "-" + m : ""), re = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, I = Array.isArray(g) ? g : [
    g
  ], ee = I.length > 0, oe = {
    padding: re,
    boundary: I.filter(Ui),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: ee
  }, { refs: me, floatingStyles: ve, placement: pe, isPositioned: xe, middlewareData: ue } = Wi({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: U,
    whileElementsMounted: (...Te) => Ri(...Te, {
      animationFrame: $ === "always"
    }),
    elements: {
      reference: D.anchor
    },
    middleware: [
      ci({
        mainAxis: v + ne,
        alignmentAxis: h
      }),
      b && Di({
        mainAxis: !0,
        crossAxis: !1,
        limiter: C === "partial" ? ji() : void 0,
        ...oe
      }),
      b && Ii({
        ...oe
      }),
      Ai({
        ...oe,
        apply: ({ elements: Te, rects: ze, availableWidth: Tt, availableHeight: Pt }) => {
          const { width: Ke, height: an } = ze.reference, Ge = Te.floating.style;
          Ge.setProperty("--radix-popper-available-width", `${Tt}px`), Ge.setProperty("--radix-popper-available-height", `${Pt}px`), Ge.setProperty("--radix-popper-anchor-width", `${Ke}px`), Ge.setProperty("--radix-popper-anchor-height", `${an}px`);
        }
      }),
      k && ki({
        element: k,
        padding: l
      }),
      Ki({
        arrowWidth: H,
        arrowHeight: ne
      }),
      E && Ni({
        strategy: "referenceHidden",
        ...oe
      })
    ]
  }), [ye, Re] = go(pe), le = _e(S);
  rt(() => {
    xe && (le == null || le());
  }, [
    xe,
    le
  ]);
  const De = (o = ue.arrow) === null || o === void 0 ? void 0 : o.x, nn = (a = ue.arrow) === null || a === void 0 ? void 0 : a.y, St = ((s = ue.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [rn, on] = K();
  return rt(() => {
    R && on(window.getComputedStyle(R).zIndex);
  }, [
    R
  ]), /* @__PURE__ */ _("div", {
    ref: me.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ve,
      transform: xe ? ve.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: rn,
      "--radix-popper-transform-origin": [
        (i = ue.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ue.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ _(Vi, {
    scope: f,
    placedSide: ye,
    onArrowChange: q,
    arrowX: De,
    arrowY: nn,
    shouldHideArrow: St
  }, /* @__PURE__ */ _(be.div, F({
    "data-side": ye,
    "data-align": Re
  }, P, {
    ref: V,
    style: {
      ...P.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: xe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (d = ue.hide) !== null && d !== void 0 && d.referenceHidden ? 0 : void 0
    }
  }))));
});
function Ui(e) {
  return e !== null;
}
const Ki = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: d } = t, u = ((n = d.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, v = u ? 0 : e.arrowWidth, m = u ? 0 : e.arrowHeight, [h, l] = go(i), b = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[l], g = ((r = (o = d.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + v / 2, y = ((a = (s = d.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let C = "", E = "";
    return h === "bottom" ? (C = u ? b : `${g}px`, E = `${-m}px`) : h === "top" ? (C = u ? b : `${g}px`, E = `${c.floating.height + m}px`) : h === "right" ? (C = `${-m}px`, E = u ? b : `${y}px`) : h === "left" && (C = `${c.floating.width + m}px`, E = u ? b : `${y}px`), {
      data: {
        x: C,
        y: E
      }
    };
  }
});
function go(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const bo = Hi, xo = zi, yo = Bi, wo = /* @__PURE__ */ J((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ya.createPortal(/* @__PURE__ */ _(be.div, F({}, o, {
    ref: t
  })), r) : null;
});
function Gi(e, t) {
  return ha((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const wt = (e) => {
  const { present: t, children: n } = e, r = Yi(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : et.only(n), a = fe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ kn(o, {
    ref: a
  }) : null;
};
wt.displayName = "Presence";
function Yi(e) {
  const [t, n] = K(), r = N({}), o = N(e), a = N("none"), s = e ? "mounted" : "unmounted", [i, c] = Gi(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return M(() => {
    const d = Ot(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [
    i
  ]), rt(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const v = a.current, m = Ot(d);
      e ? c("MOUNT") : m === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(f && v !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), rt(() => {
    if (t) {
      const d = (u) => {
        const m = Ot(r.current).includes(u.animationName);
        u.target === t && m && Ur(
          () => c("ANIMATION_END")
        );
      }, f = (u) => {
        u.target === t && (a.current = Ot(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: L((d) => {
      d && (r.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function Ot(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Jt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Xi({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = _e(n), c = L((d) => {
    if (a) {
      const u = typeof d == "function" ? d(e) : d;
      u !== e && i(u);
    } else
      o(d);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function Xi({ defaultProp: e, onChange: t }) {
  const n = K(e), [r] = n, o = N(r), a = _e(t);
  return M(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const qi = /* @__PURE__ */ J((e, t) => /* @__PURE__ */ _(be.span, F({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Zi = qi, [Qt, wu] = Be("Tooltip", [
  Zt
]), Un = Zt(), Ji = "TooltipProvider", Qi = 700, _n = "tooltip.open", [es, Kn] = Qt(Ji), ts = (e) => {
  const { __scopeTooltip: t, delayDuration: n = Qi, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = K(!0), c = N(!1), d = N(0);
  return M(() => {
    const f = d.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ _(es, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: L(() => {
      window.clearTimeout(d.current), i(!1);
    }, []),
    onClose: L(() => {
      window.clearTimeout(d.current), d.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: L((f) => {
      c.current = f;
    }, []),
    disableHoverableContent: o
  }, a);
}, Gn = "Tooltip", [ns, $t] = Qt(Gn), rs = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Kn(Gn, e.__scopeTooltip), d = Un(t), [f, u] = K(null), v = Vt(), m = N(0), h = s ?? c.disableHoverableContent, l = i ?? c.delayDuration, b = N(!1), [g = !1, y] = Jt({
    prop: r,
    defaultProp: o,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(_n))) : c.onClose(), a == null || a(P);
    }
  }), C = Ee(() => g ? b.current ? "delayed-open" : "instant-open" : "closed", [
    g
  ]), E = L(() => {
    window.clearTimeout(m.current), b.current = !1, y(!0);
  }, [
    y
  ]), $ = L(() => {
    window.clearTimeout(m.current), y(!1);
  }, [
    y
  ]), S = L(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      b.current = !0, y(!0);
    }, l);
  }, [
    l,
    y
  ]);
  return M(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ _(bo, d, /* @__PURE__ */ _(ns, {
    scope: t,
    contentId: v,
    open: g,
    stateAttribute: C,
    trigger: f,
    onTriggerChange: u,
    onTriggerEnter: L(() => {
      c.isOpenDelayed ? S() : E();
    }, [
      c.isOpenDelayed,
      S,
      E
    ]),
    onTriggerLeave: L(() => {
      h ? $() : window.clearTimeout(m.current);
    }, [
      $,
      h
    ]),
    onOpen: E,
    onClose: $,
    disableHoverableContent: h
  }, n));
}, Cr = "TooltipTrigger", os = /* @__PURE__ */ J((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = $t(Cr, n), a = Kn(Cr, n), s = Un(n), i = N(null), c = fe(t, i, o.onTriggerChange), d = N(!1), f = N(!1), u = L(
    () => d.current = !1,
    []
  );
  return M(() => () => document.removeEventListener("pointerup", u), [
    u
  ]), /* @__PURE__ */ _(xo, F({
    asChild: !0
  }, s), /* @__PURE__ */ _(be.button, F({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: Y(e.onPointerMove, (v) => {
      v.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
    }),
    onPointerLeave: Y(e.onPointerLeave, () => {
      o.onTriggerLeave(), f.current = !1;
    }),
    onPointerDown: Y(e.onPointerDown, () => {
      d.current = !0, document.addEventListener("pointerup", u, {
        once: !0
      });
    }),
    onFocus: Y(e.onFocus, () => {
      d.current || o.onOpen();
    }),
    onBlur: Y(e.onBlur, o.onClose),
    onClick: Y(e.onClick, o.onClose)
  })));
}), $o = "TooltipPortal", [as, is] = Qt($o, {
  forceMount: void 0
}), ss = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = $t($o, t);
  return /* @__PURE__ */ _(as, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ _(wt, {
    present: n || a.open
  }, /* @__PURE__ */ _(wo, {
    asChild: !0,
    container: o
  }, r)));
}, bt = "TooltipContent", cs = /* @__PURE__ */ J((e, t) => {
  const n = is(bt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = $t(bt, e.__scopeTooltip);
  return /* @__PURE__ */ _(wt, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ _(Eo, F({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ _(ls, F({
    side: o
  }, a, {
    ref: t
  })));
}), ls = /* @__PURE__ */ J((e, t) => {
  const n = $t(bt, e.__scopeTooltip), r = Kn(bt, e.__scopeTooltip), o = N(null), a = fe(t, o), [s, i] = K(null), { trigger: c, onClose: d } = n, f = o.current, { onPointerInTransitChange: u } = r, v = L(() => {
    i(null), u(!1);
  }, [
    u
  ]), m = L((h, l) => {
    const b = h.currentTarget, g = {
      x: h.clientX,
      y: h.clientY
    }, y = ds(g, b.getBoundingClientRect()), C = fs(g, y), E = ms(l.getBoundingClientRect()), $ = ps([
      ...C,
      ...E
    ]);
    i($), u(!0);
  }, [
    u
  ]);
  return M(() => () => v(), [
    v
  ]), M(() => {
    if (c && f) {
      const h = (b) => m(b, f), l = (b) => m(b, c);
      return c.addEventListener("pointerleave", h), f.addEventListener("pointerleave", l), () => {
        c.removeEventListener("pointerleave", h), f.removeEventListener("pointerleave", l);
      };
    }
  }, [
    c,
    f,
    m,
    v
  ]), M(() => {
    if (s) {
      const h = (l) => {
        const b = l.target, g = {
          x: l.clientX,
          y: l.clientY
        }, y = (c == null ? void 0 : c.contains(b)) || (f == null ? void 0 : f.contains(b)), C = !vs(g, s);
        y ? v() : C && (v(), d());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    f,
    s,
    d,
    v
  ]), /* @__PURE__ */ _(Eo, F({}, e, {
    ref: a
  }));
}), [us, $u] = Qt(Gn, {
  isInside: !1
}), Eo = /* @__PURE__ */ J((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = $t(bt, n), d = Un(n), { onClose: f } = c;
  return M(() => (document.addEventListener(_n, f), () => document.removeEventListener(_n, f)), [
    f
  ]), M(() => {
    if (c.trigger) {
      const u = (v) => {
        const m = v.target;
        m != null && m.contains(c.trigger) && f();
      };
      return window.addEventListener("scroll", u, {
        capture: !0
      }), () => window.removeEventListener("scroll", u, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    f
  ]), /* @__PURE__ */ _(Qr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (u) => u.preventDefault(),
    onDismiss: f
  }, /* @__PURE__ */ _(yo, F({
    "data-state": c.stateAttribute
  }, d, i, {
    ref: t,
    style: {
      ...i.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ _(Zr, null, r), /* @__PURE__ */ _(us, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ _(Zi, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function ds(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function fs(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return r;
}
function ms(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function vs(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, f = t[s].y;
    c > r != f > r && n < (d - i) * (r - c) / (f - c) + i && (o = !o);
  }
  return o;
}
function ps(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), hs(t);
}
function hs(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        t.pop();
      else
        break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const gs = ts, bs = rs, xs = os, ys = ss, ws = cs, ut = ({ text: e, children: t }) => /* @__PURE__ */ x.jsx(gs, { children: /* @__PURE__ */ x.jsxs(bs, { delayDuration: 0, children: [
  /* @__PURE__ */ x.jsx(xs, { className: "p-0 m-0", tabIndex: -1, children: t }),
  /* @__PURE__ */ x.jsx(ys, { children: /* @__PURE__ */ x.jsx(ws, { className: "p-2 bg-paper z-20 shadow border rounded max-w-xs", children: e }) })
] }) }), Se = ({ children: e, subChildren: t, dividerPositionX: n = 0, id: r, name: o, information: a, minWidth: s, nameHasError: i, nameHasWarning: c, onDoubleClick: d }) => {
  const { inputTextError: f, inputTextWarning: u, inputTextDefault: v } = Ce(), [m, h] = ie(Na), l = N(null), [b, g] = K({ width: 200 });
  return M(() => {
    if (l.current) {
      g({ width: l.current.offsetWidth || 0 });
      const y = l.current, C = () => g({ width: l.current.offsetWidth || 0 });
      return y.addEventListener("resizer", C), () => y.removeEventListener("resizer", C);
    }
  }, []), /* @__PURE__ */ x.jsxs("div", { className: "flex-1 flex flex-col", children: [
    /* @__PURE__ */ x.jsxs("div", { ref: l, className: "flex px-0 items-center justify-between relative", children: [
      /* @__PURE__ */ x.jsx(
        "label",
        {
          htmlFor: r,
          onDoubleClick: d,
          className: "flex-1 overflow-hidden overflow-ellipsis inline-block whitespace-nowrap",
          style: {
            width: b.width - m,
            textDecoration: i ? f : c ? u : v
          },
          children: /* @__PURE__ */ x.jsxs("div", { className: "flex items-center gap-2", children: [
            o,
            a !== "" && a !== void 0 && /* @__PURE__ */ x.jsx(ut, { text: a, children: /* @__PURE__ */ x.jsx(st, { size: 15 }) })
          ] })
        }
      ),
      /* @__PURE__ */ x.jsx(
        ja,
        {
          oldWidth: m,
          onChange: h,
          onResizeEnd: (y) => zt.setInputsWidth(y)
        }
      ),
      /* @__PURE__ */ x.jsx("div", { style: { width: m ? `${m - n}px` : "70%", minWidth: s, maxWidth: "90%" }, children: e(r) })
    ] }),
    t == null ? void 0 : t(`${o}_${r}`)
  ] });
}, $s = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), { onGetValueSuggestions: i } = at(), c = w(e.editValueDisabled), d = w(e.valueHasWarning), f = w(e.nameHasWarning), u = w(e.valueHasError), v = w(e.nameHasError), m = w(e.information), [h, l] = ie(e.value), b = w(e.name), g = w(e.id), [y, C] = K(i(e));
  return M(() => {
    C(i(e));
  }, [e.propertyType.value, e.type.value, e.id.value, i]), /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: g || "",
      name: b || "",
      information: m,
      nameHasError: v,
      nameHasWarning: f,
      children: (E) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            onChange: ($) => l($.currentTarget.value),
            className: "w-full bg-background py-0.5 disabled:opacity-50",
            disabled: c,
            list: "prop_data_id_" + g,
            autoComplete: "off",
            value: h,
            id: E,
            style: {
              textDecoration: u ? o : d ? a : s,
              border: u ? t : d ? n : r
            }
          }
        ),
        y && /* @__PURE__ */ x.jsx("datalist", { id: "prop_data_id_" + g, children: y.map(($, S) => /* @__PURE__ */ x.jsx("option", { value: $.value.value }, S)) })
      ] })
    }
  );
};
function Co(e) {
  const t = e + "CollectionProvider", [n, r] = Be(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: l } = m, b = ce.useRef(null), g = ce.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ ce.createElement(o, {
      scope: h,
      itemMap: g,
      collectionRef: b
    }, l);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ ce.forwardRef((m, h) => {
    const { scope: l, children: b } = m, g = a(i, l), y = fe(h, g.collectionRef);
    return /* @__PURE__ */ ce.createElement(pt, {
      ref: y
    }, b);
  }), d = e + "CollectionItemSlot", f = "data-radix-collection-item", u = /* @__PURE__ */ ce.forwardRef((m, h) => {
    const { scope: l, children: b, ...g } = m, y = ce.useRef(null), C = fe(h, y), E = a(d, l);
    return ce.useEffect(() => (E.itemMap.set(y, {
      ref: y,
      ...g
    }), () => void E.itemMap.delete(y))), /* @__PURE__ */ ce.createElement(pt, {
      [f]: "",
      ref: C
    }, b);
  });
  function v(m) {
    const h = a(e + "CollectionConsumer", m);
    return ce.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b)
        return [];
      const g = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(h.itemMap.values()).sort(
        (E, $) => g.indexOf(E.ref.current) - g.indexOf($.ref.current)
      );
    }, [
      h.collectionRef,
      h.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: c,
      ItemSlot: u
    },
    v,
    r
  ];
}
const Es = /* @__PURE__ */ vt(void 0);
function So(e) {
  const t = Yt(Es);
  return e || t || "ltr";
}
let mn = 0;
function Cs() {
  M(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Sr()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Sr()), mn++, () => {
      mn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), mn--;
    };
  }, []);
}
function Sr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const vn = "focusScope.autoFocusOnMount", pn = "focusScope.autoFocusOnUnmount", Tr = {
  bubbles: !1,
  cancelable: !0
}, Ss = /* @__PURE__ */ J((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = K(null), d = _e(o), f = _e(a), u = N(null), v = fe(
    t,
    (l) => c(l)
  ), m = N({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  M(() => {
    if (r) {
      let l = function(C) {
        if (m.paused || !i)
          return;
        const E = C.target;
        i.contains(E) ? u.current = E : ke(u.current, {
          select: !0
        });
      }, b = function(C) {
        if (m.paused || !i)
          return;
        const E = C.relatedTarget;
        E !== null && (i.contains(E) || ke(u.current, {
          select: !0
        }));
      }, g = function(C) {
        if (document.activeElement === document.body)
          for (const $ of C)
            $.removedNodes.length > 0 && ke(i);
      };
      document.addEventListener("focusin", l), document.addEventListener("focusout", b);
      const y = new MutationObserver(g);
      return i && y.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", l), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), M(() => {
    if (i) {
      _r.add(m);
      const l = document.activeElement;
      if (!i.contains(l)) {
        const g = new CustomEvent(vn, Tr);
        i.addEventListener(vn, d), i.dispatchEvent(g), g.defaultPrevented || (Ts(Ds(To(i)), {
          select: !0
        }), document.activeElement === l && ke(i));
      }
      return () => {
        i.removeEventListener(vn, d), setTimeout(() => {
          const g = new CustomEvent(pn, Tr);
          i.addEventListener(pn, f), i.dispatchEvent(g), g.defaultPrevented || ke(l ?? document.body, {
            select: !0
          }), i.removeEventListener(pn, f), _r.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    d,
    f,
    m
  ]);
  const h = L((l) => {
    if (!n && !r || m.paused)
      return;
    const b = l.key === "Tab" && !l.altKey && !l.ctrlKey && !l.metaKey, g = document.activeElement;
    if (b && g) {
      const y = l.currentTarget, [C, E] = Ps(y);
      C && E ? !l.shiftKey && g === E ? (l.preventDefault(), n && ke(C, {
        select: !0
      })) : l.shiftKey && g === C && (l.preventDefault(), n && ke(E, {
        select: !0
      })) : g === y && l.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ _(be.div, F({
    tabIndex: -1
  }, s, {
    ref: v,
    onKeyDown: h
  }));
});
function Ts(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ke(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Ps(e) {
  const t = To(e), n = Pr(t, e), r = Pr(t.reverse(), e);
  return [
    n,
    r
  ];
}
function To(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Pr(e, t) {
  for (const n of e)
    if (!_s(n, {
      upTo: t
    }))
      return n;
}
function _s(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function Os(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ke(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Os(e) && t && e.select();
  }
}
const _r = Rs();
function Rs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Or(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Or(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Or(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ds(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const hn = "rovingFocusGroup.onEntryFocus", Is = {
  bubbles: !1,
  cancelable: !0
}, Yn = "RovingFocusGroup", [On, Po, As] = Co(Yn), [Ns, _o] = Be(Yn, [
  As
]), [js, Ms] = Ns(Yn), ks = /* @__PURE__ */ J((e, t) => /* @__PURE__ */ _(On.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ _(On.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ _(Ws, F({}, e, {
  ref: t
}))))), Ws = /* @__PURE__ */ J((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: d, ...f } = e, u = N(null), v = fe(t, u), m = So(a), [h = null, l] = Jt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [b, g] = K(!1), y = _e(d), C = Po(n), E = N(!1), [$, S] = K(0);
  return M(() => {
    const P = u.current;
    if (P)
      return P.addEventListener(hn, y), () => P.removeEventListener(hn, y);
  }, [
    y
  ]), /* @__PURE__ */ _(js, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: L(
      (P) => l(P),
      [
        l
      ]
    ),
    onItemShiftTab: L(
      () => g(!0),
      []
    ),
    onFocusableItemAdd: L(
      () => S(
        (P) => P + 1
      ),
      []
    ),
    onFocusableItemRemove: L(
      () => S(
        (P) => P - 1
      ),
      []
    )
  }, /* @__PURE__ */ _(be.div, F({
    tabIndex: b || $ === 0 ? -1 : 0,
    "data-orientation": r
  }, f, {
    ref: v,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: Y(e.onMouseDown, () => {
      E.current = !0;
    }),
    onFocus: Y(e.onFocus, (P) => {
      const D = !E.current;
      if (P.target === P.currentTarget && D && !b) {
        const R = new CustomEvent(hn, Is);
        if (P.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
          const z = C().filter(
            (H) => H.focusable
          ), V = z.find(
            (H) => H.active
          ), k = z.find(
            (H) => H.id === h
          ), W = [
            V,
            k,
            ...z
          ].filter(Boolean).map(
            (H) => H.ref.current
          );
          Oo(W);
        }
      }
      E.current = !1;
    }),
    onBlur: Y(
      e.onBlur,
      () => g(!1)
    )
  })));
}), Ls = "RovingFocusGroupItem", Hs = /* @__PURE__ */ J((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = Vt(), c = a || i, d = Ms(Ls, n), f = d.currentTabStopId === c, u = Po(n), { onFocusableItemAdd: v, onFocusableItemRemove: m } = d;
  return M(() => {
    if (r)
      return v(), () => m();
  }, [
    r,
    v,
    m
  ]), /* @__PURE__ */ _(On.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ _(be.span, F({
    tabIndex: f ? 0 : -1,
    "data-orientation": d.orientation
  }, s, {
    ref: t,
    onMouseDown: Y(e.onMouseDown, (h) => {
      r ? d.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: Y(
      e.onFocus,
      () => d.onItemFocus(c)
    ),
    onKeyDown: Y(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        d.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const l = Vs(h, d.orientation, d.dir);
      if (l !== void 0) {
        h.preventDefault();
        let g = u().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (l === "last")
          g.reverse();
        else if (l === "prev" || l === "next") {
          l === "prev" && g.reverse();
          const y = g.indexOf(h.currentTarget);
          g = d.loop ? Bs(g, y + 1) : g.slice(y + 1);
        }
        setTimeout(
          () => Oo(g)
        );
      }
    })
  })));
}), Fs = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zs(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Vs(e, t, n) {
  const r = zs(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Fs[r];
}
function Oo(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Bs(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Us = ks, Ks = Hs;
var Gs = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qe = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Dt = {}, gn = 0, Ro = function(e) {
  return e && (e.host || Ro(e.parentNode));
}, Ys = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ro(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Xs = function(e, t, n, r) {
  var o = Ys(t, Array.isArray(e) ? e : [e]);
  Dt[n] || (Dt[n] = /* @__PURE__ */ new WeakMap());
  var a = Dt[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(u) {
    !u || i.has(u) || (i.add(u), d(u.parentNode));
  };
  o.forEach(d);
  var f = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(v) {
      if (i.has(v))
        f(v);
      else
        try {
          var m = v.getAttribute(r), h = m !== null && m !== "false", l = (qe.get(v) || 0) + 1, b = (a.get(v) || 0) + 1;
          qe.set(v, l), a.set(v, b), s.push(v), l === 1 && h && Rt.set(v, !0), b === 1 && v.setAttribute(n, "true"), h || v.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", v, g);
        }
    });
  };
  return f(t), i.clear(), gn++, function() {
    s.forEach(function(u) {
      var v = qe.get(u) - 1, m = a.get(u) - 1;
      qe.set(u, v), a.set(u, m), v || (Rt.has(u) || u.removeAttribute(r), Rt.delete(u)), m || u.removeAttribute(n);
    }), gn--, gn || (qe = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Dt = {});
  };
}, qs = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Gs(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Xs(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Pe = function() {
  return Pe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Pe.apply(this, arguments);
};
function Do(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Zs(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var jt = "right-scroll-bar-position", Mt = "width-before-scroll-bar", Js = "with-scroll-bars-hidden", Qs = "--removed-body-scroll-bar-size";
function bn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ec(e, t) {
  var n = K(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var tc = typeof window < "u" ? A.useLayoutEffect : A.useEffect, Rr = /* @__PURE__ */ new WeakMap();
function nc(e, t) {
  var n = ec(t || null, function(r) {
    return e.forEach(function(o) {
      return bn(o, r);
    });
  });
  return tc(function() {
    var r = Rr.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || bn(i, null);
      }), a.forEach(function(i) {
        o.has(i) || bn(i, s);
      });
    }
    Rr.set(n, e);
  }, [e]), n;
}
function rc(e) {
  return e;
}
function oc(e, t) {
  t === void 0 && (t = rc);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var f = s;
        s = [], f.forEach(a);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(f) {
          s.push(f), d();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function ac(e) {
  e === void 0 && (e = {});
  var t = oc(null);
  return t.options = Pe({ async: !0, ssr: !1 }, e), t;
}
var Io = function(e) {
  var t = e.sideCar, n = Do(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return A.createElement(r, Pe({}, n));
};
Io.isSideCarExport = !0;
function ic(e, t) {
  return e.useMedium(t), Io;
}
var Ao = ac(), xn = function() {
}, en = A.forwardRef(function(e, t) {
  var n = A.useRef(null), r = A.useState({
    onScrollCapture: xn,
    onWheelCapture: xn,
    onTouchMoveCapture: xn
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, f = e.enabled, u = e.shards, v = e.sideCar, m = e.noIsolation, h = e.inert, l = e.allowPinchZoom, b = e.as, g = b === void 0 ? "div" : b, y = Do(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), C = v, E = nc([n, t]), $ = Pe(Pe({}, y), o);
  return A.createElement(
    A.Fragment,
    null,
    f && A.createElement(C, { sideCar: Ao, removeScrollBar: d, shards: u, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!l, lockRef: n }),
    s ? A.cloneElement(A.Children.only(i), Pe(Pe({}, $), { ref: E })) : A.createElement(g, Pe({}, $, { className: c, ref: E }), i)
  );
});
en.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
en.classNames = {
  fullWidth: Mt,
  zeroRight: jt
};
var sc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function cc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sc();
  return t && e.setAttribute("nonce", t), e;
}
function lc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function uc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var dc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = cc()) && (lc(t, n), uc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fc = function() {
  var e = dc();
  return function(t, n) {
    A.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, No = function() {
  var e = fc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, mc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yn = function(e) {
  return parseInt(e || "", 10) || 0;
}, vc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yn(n), yn(r), yn(o)];
}, pc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return mc;
  var t = vc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, hc = No(), nt = "data-scroll-locked", gc = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Js, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(nt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(jt, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Mt, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(jt, " .").concat(jt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mt, " .").concat(Mt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(nt, `] {
    `).concat(Qs, ": ").concat(i, `px;
  }
`);
}, Dr = function() {
  var e = parseInt(document.body.getAttribute(nt) || "0", 10);
  return isFinite(e) ? e : 0;
}, bc = function() {
  A.useEffect(function() {
    return document.body.setAttribute(nt, (Dr() + 1).toString()), function() {
      var e = Dr() - 1;
      e <= 0 ? document.body.removeAttribute(nt) : document.body.setAttribute(nt, e.toString());
    };
  }, []);
}, xc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  bc();
  var a = A.useMemo(function() {
    return pc(o);
  }, [o]);
  return A.createElement(hc, { styles: gc(a, !t, o, n ? "" : "!important") });
}, Rn = !1;
if (typeof window < "u")
  try {
    var It = Object.defineProperty({}, "passive", {
      get: function() {
        return Rn = !0, !0;
      }
    });
    window.addEventListener("test", It, It), window.removeEventListener("test", It, It);
  } catch {
    Rn = !1;
  }
var Ze = Rn ? { passive: !1 } : !1, yc = function(e) {
  return e.tagName === "TEXTAREA";
}, jo = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yc(e) && n[t] === "visible")
  );
}, wc = function(e) {
  return jo(e, "overflowY");
}, $c = function(e) {
  return jo(e, "overflowX");
}, Ir = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Mo(e, n);
    if (r) {
      var o = ko(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Ec = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Cc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Mo = function(e, t) {
  return e === "v" ? wc(t) : $c(t);
}, ko = function(e, t) {
  return e === "v" ? Ec(t) : Cc(t);
}, Sc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Tc = function(e, t, n, r, o) {
  var a = Sc(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), d = !1, f = s > 0, u = 0, v = 0;
  do {
    var m = ko(e, i), h = m[0], l = m[1], b = m[2], g = l - b - a * h;
    (h || g) && Mo(e, i) && (u += g, v += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && (o && u === 0 || !o && s > u) || !f && (o && v === 0 || !o && -s > v)) && (d = !0), d;
}, At = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ar = function(e) {
  return [e.deltaX, e.deltaY];
}, Nr = function(e) {
  return e && "current" in e ? e.current : e;
}, Pc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _c = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Oc = 0, Je = [];
function Rc(e) {
  var t = A.useRef([]), n = A.useRef([0, 0]), r = A.useRef(), o = A.useState(Oc++)[0], a = A.useState(function() {
    return No();
  })[0], s = A.useRef(e);
  A.useEffect(function() {
    s.current = e;
  }, [e]), A.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var l = Zs([e.lockRef.current], (e.shards || []).map(Nr), !0).filter(Boolean);
      return l.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), l.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = A.useCallback(function(l, b) {
    if ("touches" in l && l.touches.length === 2)
      return !s.current.allowPinchZoom;
    var g = At(l), y = n.current, C = "deltaX" in l ? l.deltaX : y[0] - g[0], E = "deltaY" in l ? l.deltaY : y[1] - g[1], $, S = l.target, P = Math.abs(C) > Math.abs(E) ? "h" : "v";
    if ("touches" in l && P === "h" && S.type === "range")
      return !1;
    var D = Ir(P, S);
    if (!D)
      return !0;
    if (D ? $ = P : ($ = P === "v" ? "h" : "v", D = Ir(P, S)), !D)
      return !1;
    if (!r.current && "changedTouches" in l && (C || E) && (r.current = $), !$)
      return !0;
    var R = r.current || $;
    return Tc(R, b, l, R === "h" ? C : E, !0);
  }, []), c = A.useCallback(function(l) {
    var b = l;
    if (!(!Je.length || Je[Je.length - 1] !== a)) {
      var g = "deltaY" in b ? Ar(b) : At(b), y = t.current.filter(function($) {
        return $.name === b.type && $.target === b.target && Pc($.delta, g);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var C = (s.current.shards || []).map(Nr).filter(Boolean).filter(function($) {
          return $.contains(b.target);
        }), E = C.length > 0 ? i(b, C[0]) : !s.current.noIsolation;
        E && b.cancelable && b.preventDefault();
      }
    }
  }, []), d = A.useCallback(function(l, b, g, y) {
    var C = { name: l, delta: b, target: g, should: y };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== C;
      });
    }, 1);
  }, []), f = A.useCallback(function(l) {
    n.current = At(l), r.current = void 0;
  }, []), u = A.useCallback(function(l) {
    d(l.type, Ar(l), l.target, i(l, e.lockRef.current));
  }, []), v = A.useCallback(function(l) {
    d(l.type, At(l), l.target, i(l, e.lockRef.current));
  }, []);
  A.useEffect(function() {
    return Je.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", c, Ze), document.addEventListener("touchmove", c, Ze), document.addEventListener("touchstart", f, Ze), function() {
      Je = Je.filter(function(l) {
        return l !== a;
      }), document.removeEventListener("wheel", c, Ze), document.removeEventListener("touchmove", c, Ze), document.removeEventListener("touchstart", f, Ze);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return A.createElement(
    A.Fragment,
    null,
    h ? A.createElement(a, { styles: _c(o) }) : null,
    m ? A.createElement(xc, { gapMode: "margin" }) : null
  );
}
const Dc = ic(Ao, Rc);
var Wo = A.forwardRef(function(e, t) {
  return A.createElement(en, Pe({}, e, { ref: t, sideCar: Dc }));
});
Wo.classNames = en.classNames;
const Ic = Wo, Ac = [
  "Enter",
  " "
], Nc = [
  "ArrowDown",
  "PageUp",
  "Home"
], Lo = [
  "ArrowUp",
  "PageDown",
  "End"
], jc = [
  ...Nc,
  ...Lo
], tn = "Menu", [Dn, Mc, kc] = Co(tn), [Ue, Ho] = Be(tn, [
  kc,
  Zt,
  _o
]), Xn = Zt(), Fo = _o(), [Wc, Et] = Ue(tn), [Lc, qn] = Ue(tn), Hc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Xn(t), [c, d] = K(null), f = N(!1), u = _e(a), v = So(o);
  return M(() => {
    const m = () => {
      f.current = !0, document.addEventListener("pointerdown", h, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", h, {
        capture: !0,
        once: !0
      });
    }, h = () => f.current = !1;
    return document.addEventListener("keydown", m, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", m, {
        capture: !0
      }), document.removeEventListener("pointerdown", h, {
        capture: !0
      }), document.removeEventListener("pointermove", h, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ _(bo, i, /* @__PURE__ */ _(Wc, {
    scope: t,
    open: n,
    onOpenChange: u,
    content: c,
    onContentChange: d
  }, /* @__PURE__ */ _(Lc, {
    scope: t,
    onClose: L(
      () => u(!1),
      [
        u
      ]
    ),
    isUsingKeyboardRef: f,
    dir: v,
    modal: s
  }, r)));
}, Fc = /* @__PURE__ */ J((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Xn(n);
  return /* @__PURE__ */ _(xo, F({}, o, r, {
    ref: t
  }));
}), zo = "MenuPortal", [zc, Vc] = Ue(zo, {
  forceMount: void 0
}), Bc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Et(zo, t);
  return /* @__PURE__ */ _(zc, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ _(wt, {
    present: n || a.open
  }, /* @__PURE__ */ _(wo, {
    asChild: !0,
    container: o
  }, r)));
}, We = "MenuContent", [Uc, Vo] = Ue(We), Kc = /* @__PURE__ */ J((e, t) => {
  const n = Vc(We, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Et(We, e.__scopeMenu), s = qn(We, e.__scopeMenu);
  return /* @__PURE__ */ _(Dn.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ _(wt, {
    present: r || a.open
  }, /* @__PURE__ */ _(Dn.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ _(Gc, F({}, o, {
    ref: t
  })) : /* @__PURE__ */ _(Yc, F({}, o, {
    ref: t
  })))));
}), Gc = /* @__PURE__ */ J((e, t) => {
  const n = Et(We, e.__scopeMenu), r = N(null), o = fe(t, r);
  return M(() => {
    const a = r.current;
    if (a)
      return qs(a);
  }, []), /* @__PURE__ */ _(Bo, F({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: Y(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Yc = /* @__PURE__ */ J((e, t) => {
  const n = Et(We, e.__scopeMenu);
  return /* @__PURE__ */ _(Bo, F({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Bo = /* @__PURE__ */ J((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: d, onPointerDownOutside: f, onFocusOutside: u, onInteractOutside: v, onDismiss: m, disableOutsideScroll: h, ...l } = e, b = Et(We, n), g = qn(We, n), y = Xn(n), C = Fo(n), E = Mc(n), [$, S] = K(null), P = N(null), D = fe(t, P, b.onContentChange), R = N(0), z = N(""), V = N(0), k = N(null), q = N("right"), W = N(0), H = h ? Ic : Mn, ne = h ? {
    as: pt,
    allowPinchZoom: !0
  } : void 0, U = (I) => {
    var ee, oe;
    const me = z.current + I, ve = E().filter(
      (le) => !le.disabled
    ), pe = document.activeElement, xe = (ee = ve.find(
      (le) => le.ref.current === pe
    )) === null || ee === void 0 ? void 0 : ee.textValue, ue = ve.map(
      (le) => le.textValue
    ), ye = rl(ue, me, xe), Re = (oe = ve.find(
      (le) => le.textValue === ye
    )) === null || oe === void 0 ? void 0 : oe.ref.current;
    (function le(De) {
      z.current = De, window.clearTimeout(R.current), De !== "" && (R.current = window.setTimeout(
        () => le(""),
        1e3
      ));
    })(me), Re && setTimeout(
      () => Re.focus()
    );
  };
  M(() => () => window.clearTimeout(R.current), []), Cs();
  const re = L((I) => {
    var ee, oe;
    return q.current === ((ee = k.current) === null || ee === void 0 ? void 0 : ee.side) && al(I, (oe = k.current) === null || oe === void 0 ? void 0 : oe.area);
  }, []);
  return /* @__PURE__ */ _(Uc, {
    scope: n,
    searchRef: z,
    onItemEnter: L((I) => {
      re(I) && I.preventDefault();
    }, [
      re
    ]),
    onItemLeave: L((I) => {
      var ee;
      re(I) || ((ee = P.current) === null || ee === void 0 || ee.focus(), S(null));
    }, [
      re
    ]),
    onTriggerLeave: L((I) => {
      re(I) && I.preventDefault();
    }, [
      re
    ]),
    pointerGraceTimerRef: V,
    onPointerGraceIntentChange: L((I) => {
      k.current = I;
    }, [])
  }, /* @__PURE__ */ _(H, ne, /* @__PURE__ */ _(Ss, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: Y(a, (I) => {
      var ee;
      I.preventDefault(), (ee = P.current) === null || ee === void 0 || ee.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ _(Qr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: d,
    onPointerDownOutside: f,
    onFocusOutside: u,
    onInteractOutside: v,
    onDismiss: m
  }, /* @__PURE__ */ _(Us, F({
    asChild: !0
  }, C, {
    dir: g.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: $,
    onCurrentTabStopIdChange: S,
    onEntryFocus: Y(c, (I) => {
      g.isUsingKeyboardRef.current || I.preventDefault();
    })
  }), /* @__PURE__ */ _(yo, F({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": el(b.open),
    "data-radix-menu-content": "",
    dir: g.dir
  }, y, l, {
    ref: D,
    style: {
      outline: "none",
      ...l.style
    },
    onKeyDown: Y(l.onKeyDown, (I) => {
      const oe = I.target.closest("[data-radix-menu-content]") === I.currentTarget, me = I.ctrlKey || I.altKey || I.metaKey, ve = I.key.length === 1;
      oe && (I.key === "Tab" && I.preventDefault(), !me && ve && U(I.key));
      const pe = P.current;
      if (I.target !== pe || !jc.includes(I.key))
        return;
      I.preventDefault();
      const ue = E().filter(
        (ye) => !ye.disabled
      ).map(
        (ye) => ye.ref.current
      );
      Lo.includes(I.key) && ue.reverse(), tl(ue);
    }),
    onBlur: Y(e.onBlur, (I) => {
      I.currentTarget.contains(I.target) || (window.clearTimeout(R.current), z.current = "");
    }),
    onPointerMove: Y(e.onPointerMove, An((I) => {
      const ee = I.target, oe = W.current !== I.clientX;
      if (I.currentTarget.contains(ee) && oe) {
        const me = I.clientX > W.current ? "right" : "left";
        q.current = me, W.current = I.clientX;
      }
    }))
  })))))));
}), In = "MenuItem", jr = "menu.itemSelect", Xc = /* @__PURE__ */ J((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = N(null), s = qn(In, e.__scopeMenu), i = Vo(In, e.__scopeMenu), c = fe(t, a), d = N(!1), f = () => {
    const u = a.current;
    if (!n && u) {
      const v = new CustomEvent(jr, {
        bubbles: !0,
        cancelable: !0
      });
      u.addEventListener(
        jr,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Jr(u, v), v.defaultPrevented ? d.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ _(qc, F({}, o, {
    ref: c,
    disabled: n,
    onClick: Y(e.onClick, f),
    onPointerDown: (u) => {
      var v;
      (v = e.onPointerDown) === null || v === void 0 || v.call(e, u), d.current = !0;
    },
    onPointerUp: Y(e.onPointerUp, (u) => {
      var v;
      d.current || (v = u.currentTarget) === null || v === void 0 || v.click();
    }),
    onKeyDown: Y(e.onKeyDown, (u) => {
      const v = i.searchRef.current !== "";
      n || v && u.key === " " || Ac.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
    })
  }));
}), qc = /* @__PURE__ */ J((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Vo(In, n), i = Fo(n), c = N(null), d = fe(t, c), [f, u] = K(!1), [v, m] = K("");
  return M(() => {
    const h = c.current;
    if (h) {
      var l;
      m(((l = h.textContent) !== null && l !== void 0 ? l : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ _(Dn.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? v
  }, /* @__PURE__ */ _(Ks, F({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ _(be.div, F({
    role: "menuitem",
    "data-highlighted": f ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: d,
    onPointerMove: Y(e.onPointerMove, An((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: Y(e.onPointerLeave, An(
      (h) => s.onItemLeave(h)
    )),
    onFocus: Y(
      e.onFocus,
      () => u(!0)
    ),
    onBlur: Y(
      e.onBlur,
      () => u(!1)
    )
  }))));
}), Zc = "MenuRadioGroup";
Ue(Zc, {
  value: void 0,
  onValueChange: () => {
  }
});
const Jc = "MenuItemIndicator";
Ue(Jc, {
  checked: !1
});
const Qc = "MenuSub";
Ue(Qc);
function el(e) {
  return e ? "open" : "closed";
}
function tl(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function nl(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function rl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (d) => d === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = nl(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (d) => d !== n
  ));
  const c = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function ol(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, d = t[s].x, f = t[s].y;
    c > r != f > r && n < (d - i) * (r - c) / (f - c) + i && (o = !o);
  }
  return o;
}
function al(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return ol(n, t);
}
function An(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const il = Hc, sl = Fc, cl = Bc, ll = Kc, ul = Xc, Uo = "DropdownMenu", [dl, Eu] = Be(Uo, [
  Ho
]), Ct = Ho(), [fl, Ko] = dl(Uo), ml = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Ct(t), d = N(null), [f = !1, u] = Jt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ _(fl, {
    scope: t,
    triggerId: Vt(),
    triggerRef: d,
    contentId: Vt(),
    open: f,
    onOpenChange: u,
    onOpenToggle: L(
      () => u(
        (v) => !v
      ),
      [
        u
      ]
    ),
    modal: i
  }, /* @__PURE__ */ _(il, F({}, c, {
    open: f,
    onOpenChange: u,
    dir: r,
    modal: i
  }), n));
}, vl = "DropdownMenuTrigger", pl = /* @__PURE__ */ J((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Ko(vl, n), s = Ct(n);
  return /* @__PURE__ */ _(sl, F({
    asChild: !0
  }, s), /* @__PURE__ */ _(be.button, F({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Wn(t, a.triggerRef),
    onPointerDown: Y(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: Y(e.onKeyDown, (i) => {
      r || ([
        "Enter",
        " "
      ].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(i.key) && i.preventDefault());
    })
  })));
}), hl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ct(t);
  return /* @__PURE__ */ _(cl, F({}, r, n));
}, gl = "DropdownMenuContent", bl = /* @__PURE__ */ J((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ko(gl, n), a = Ct(n), s = N(!1);
  return /* @__PURE__ */ _(ll, F({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: Y(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: Y(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, d = c.button === 0 && c.ctrlKey === !0, f = c.button === 2 || d;
      (!o.modal || f) && (s.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), xl = /* @__PURE__ */ J((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ _(ul, F({}, o, r, {
    ref: t
  }));
}), yl = ml, wl = pl, $l = hl, El = bl, Cl = xl;
function Mr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nn(e, t) {
  return Nn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Nn(e, t);
}
function Sl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Nn(e, t);
}
var kr = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Tl(e, t) {
  return !!(e === t || kr(e) && kr(t));
}
function Pl(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Tl(e[n], t[n]))
      return !1;
  return !0;
}
function wn(e, t) {
  t === void 0 && (t = Pl);
  var n, r = [], o, a = !1;
  function s() {
    for (var i = [], c = 0; c < arguments.length; c++)
      i[c] = arguments[c];
    return a && n === this && t(i, r) || (o = e.apply(this, i), a = !0, n = this, r = i), o;
  }
  return s;
}
var _l = typeof performance == "object" && typeof performance.now == "function", Wr = _l ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function Lr(e) {
  cancelAnimationFrame(e.id);
}
function Ol(e, t) {
  var n = Wr();
  function r() {
    Wr() - n >= t ? e.call(null) : o.id = requestAnimationFrame(r);
  }
  var o = {
    id: requestAnimationFrame(r)
  };
  return o;
}
var $n = -1;
function Hr(e) {
  if (e === void 0 && (e = !1), $n === -1 || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), $n = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return $n;
}
var Qe = null;
function Fr(e) {
  if (e === void 0 && (e = !1), Qe === null || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    var r = document.createElement("div"), o = r.style;
    return o.width = "100px", o.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? Qe = "positive-descending" : (t.scrollLeft = 1, t.scrollLeft === 0 ? Qe = "negative" : Qe = "positive-ascending"), document.body.removeChild(t), Qe;
  }
  return Qe;
}
process.env.NODE_ENV;
var Rl = 150, Dl = function(t, n) {
  return t;
}, kt = null, Wt = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (kt = /* @__PURE__ */ new WeakSet(), Wt = /* @__PURE__ */ new WeakSet());
function Il(e) {
  var t, n = e.getItemOffset, r = e.getEstimatedTotalSize, o = e.getItemSize, a = e.getOffsetForIndexAndAlignment, s = e.getStartIndexForOffset, i = e.getStopIndexForStartIndex, c = e.initInstanceProps, d = e.shouldResetStyleCacheOnItemSizeChange, f = e.validateProps;
  return t = /* @__PURE__ */ function(u) {
    Sl(v, u);
    function v(h) {
      var l;
      return l = u.call(this, h) || this, l._instanceProps = c(l.props, Mr(l)), l._outerRef = void 0, l._resetIsScrollingTimeoutId = null, l.state = {
        instance: Mr(l),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof l.props.initialScrollOffset == "number" ? l.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, l._callOnItemsRendered = void 0, l._callOnItemsRendered = wn(function(b, g, y, C) {
        return l.props.onItemsRendered({
          overscanStartIndex: b,
          overscanStopIndex: g,
          visibleStartIndex: y,
          visibleStopIndex: C
        });
      }), l._callOnScroll = void 0, l._callOnScroll = wn(function(b, g, y) {
        return l.props.onScroll({
          scrollDirection: b,
          scrollOffset: g,
          scrollUpdateWasRequested: y
        });
      }), l._getItemStyle = void 0, l._getItemStyle = function(b) {
        var g = l.props, y = g.direction, C = g.itemSize, E = g.layout, $ = l._getItemStyleCache(d && C, d && E, d && y), S;
        if ($.hasOwnProperty(b))
          S = $[b];
        else {
          var P = n(l.props, b, l._instanceProps), D = o(l.props, b, l._instanceProps), R = y === "horizontal" || E === "horizontal", z = y === "rtl", V = R ? P : 0;
          $[b] = S = {
            position: "absolute",
            left: z ? void 0 : V,
            right: z ? V : void 0,
            top: R ? 0 : P,
            height: R ? "100%" : D,
            width: R ? D : "100%"
          };
        }
        return S;
      }, l._getItemStyleCache = void 0, l._getItemStyleCache = wn(function(b, g, y) {
        return {};
      }), l._onScrollHorizontal = function(b) {
        var g = b.currentTarget, y = g.clientWidth, C = g.scrollLeft, E = g.scrollWidth;
        l.setState(function($) {
          if ($.scrollOffset === C)
            return null;
          var S = l.props.direction, P = C;
          if (S === "rtl")
            switch (Fr()) {
              case "negative":
                P = -C;
                break;
              case "positive-descending":
                P = E - y - C;
                break;
            }
          return P = Math.max(0, Math.min(P, E - y)), {
            isScrolling: !0,
            scrollDirection: $.scrollOffset < P ? "forward" : "backward",
            scrollOffset: P,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._onScrollVertical = function(b) {
        var g = b.currentTarget, y = g.clientHeight, C = g.scrollHeight, E = g.scrollTop;
        l.setState(function($) {
          if ($.scrollOffset === E)
            return null;
          var S = Math.max(0, Math.min(E, C - y));
          return {
            isScrolling: !0,
            scrollDirection: $.scrollOffset < S ? "forward" : "backward",
            scrollOffset: S,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._outerRefSetter = function(b) {
        var g = l.props.outerRef;
        l._outerRef = b, typeof g == "function" ? g(b) : g != null && typeof g == "object" && g.hasOwnProperty("current") && (g.current = b);
      }, l._resetIsScrollingDebounced = function() {
        l._resetIsScrollingTimeoutId !== null && Lr(l._resetIsScrollingTimeoutId), l._resetIsScrollingTimeoutId = Ol(l._resetIsScrolling, Rl);
      }, l._resetIsScrolling = function() {
        l._resetIsScrollingTimeoutId = null, l.setState({
          isScrolling: !1
        }, function() {
          l._getItemStyleCache(-1, null);
        });
      }, l;
    }
    v.getDerivedStateFromProps = function(l, b) {
      return Al(l, b), f(l), null;
    };
    var m = v.prototype;
    return m.scrollTo = function(l) {
      l = Math.max(0, l), this.setState(function(b) {
        return b.scrollOffset === l ? null : {
          scrollDirection: b.scrollOffset < l ? "forward" : "backward",
          scrollOffset: l,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, m.scrollToItem = function(l, b) {
      b === void 0 && (b = "auto");
      var g = this.props, y = g.itemCount, C = g.layout, E = this.state.scrollOffset;
      l = Math.max(0, Math.min(l, y - 1));
      var $ = 0;
      if (this._outerRef) {
        var S = this._outerRef;
        C === "vertical" ? $ = S.scrollWidth > S.clientWidth ? Hr() : 0 : $ = S.scrollHeight > S.clientHeight ? Hr() : 0;
      }
      this.scrollTo(a(this.props, l, b, E, this._instanceProps, $));
    }, m.componentDidMount = function() {
      var l = this.props, b = l.direction, g = l.initialScrollOffset, y = l.layout;
      if (typeof g == "number" && this._outerRef != null) {
        var C = this._outerRef;
        b === "horizontal" || y === "horizontal" ? C.scrollLeft = g : C.scrollTop = g;
      }
      this._callPropsCallbacks();
    }, m.componentDidUpdate = function() {
      var l = this.props, b = l.direction, g = l.layout, y = this.state, C = y.scrollOffset, E = y.scrollUpdateWasRequested;
      if (E && this._outerRef != null) {
        var $ = this._outerRef;
        if (b === "horizontal" || g === "horizontal")
          if (b === "rtl")
            switch (Fr()) {
              case "negative":
                $.scrollLeft = -C;
                break;
              case "positive-ascending":
                $.scrollLeft = C;
                break;
              default:
                var S = $.clientWidth, P = $.scrollWidth;
                $.scrollLeft = P - S - C;
                break;
            }
          else
            $.scrollLeft = C;
        else
          $.scrollTop = C;
      }
      this._callPropsCallbacks();
    }, m.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && Lr(this._resetIsScrollingTimeoutId);
    }, m.render = function() {
      var l = this.props, b = l.children, g = l.className, y = l.direction, C = l.height, E = l.innerRef, $ = l.innerElementType, S = l.innerTagName, P = l.itemCount, D = l.itemData, R = l.itemKey, z = R === void 0 ? Dl : R, V = l.layout, k = l.outerElementType, q = l.outerTagName, W = l.style, H = l.useIsScrolling, ne = l.width, U = this.state.isScrolling, re = y === "horizontal" || V === "horizontal", I = re ? this._onScrollHorizontal : this._onScrollVertical, ee = this._getRangeToRender(), oe = ee[0], me = ee[1], ve = [];
      if (P > 0)
        for (var pe = oe; pe <= me; pe++)
          ve.push(_(b, {
            data: D,
            key: z(pe, D),
            index: pe,
            isScrolling: H ? U : void 0,
            style: this._getItemStyle(pe)
          }));
      var xe = r(this.props, this._instanceProps);
      return _(k || q || "div", {
        className: g,
        onScroll: I,
        ref: this._outerRefSetter,
        style: F({
          position: "relative",
          height: C,
          width: ne,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: y
        }, W)
      }, _($ || S || "div", {
        children: ve,
        ref: E,
        style: {
          height: re ? "100%" : xe,
          pointerEvents: U ? "none" : void 0,
          width: re ? xe : "100%"
        }
      }));
    }, m._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var l = this.props.itemCount;
        if (l > 0) {
          var b = this._getRangeToRender(), g = b[0], y = b[1], C = b[2], E = b[3];
          this._callOnItemsRendered(g, y, C, E);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var $ = this.state, S = $.scrollDirection, P = $.scrollOffset, D = $.scrollUpdateWasRequested;
        this._callOnScroll(S, P, D);
      }
    }, m._getRangeToRender = function() {
      var l = this.props, b = l.itemCount, g = l.overscanCount, y = this.state, C = y.isScrolling, E = y.scrollDirection, $ = y.scrollOffset;
      if (b === 0)
        return [0, 0, 0, 0];
      var S = s(this.props, $, this._instanceProps), P = i(this.props, S, $, this._instanceProps), D = !C || E === "backward" ? Math.max(1, g) : 1, R = !C || E === "forward" ? Math.max(1, g) : 1;
      return [Math.max(0, S - D), Math.max(0, Math.min(b - 1, P + R)), S, P];
    }, v;
  }(ga), t.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, t;
}
var Al = function(t, n) {
  var r = t.children, o = t.direction, a = t.height, s = t.layout, i = t.innerTagName, c = t.outerTagName, d = t.width, f = n.instance;
  if (process.env.NODE_ENV !== "production") {
    (i != null || c != null) && Wt && !Wt.has(f) && (Wt.add(f), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var u = o === "horizontal" || s === "horizontal";
    switch (o) {
      case "horizontal":
      case "vertical":
        kt && !kt.has(f) && (kt.add(f), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + o + '" was specified.'));
    }
    switch (s) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + s + '" was specified.'));
    }
    if (r == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
    if (u && typeof d != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (d === null ? "null" : typeof d) + '" was specified.'));
    if (!u && typeof a != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (a === null ? "null" : typeof a) + '" was specified.'));
  }
}, Nl = /* @__PURE__ */ Il({
  getItemOffset: function(t, n) {
    var r = t.itemSize;
    return n * r;
  },
  getItemSize: function(t, n) {
    var r = t.itemSize;
    return r;
  },
  getEstimatedTotalSize: function(t) {
    var n = t.itemCount, r = t.itemSize;
    return r * n;
  },
  getOffsetForIndexAndAlignment: function(t, n, r, o, a, s) {
    var i = t.direction, c = t.height, d = t.itemCount, f = t.itemSize, u = t.layout, v = t.width, m = i === "horizontal" || u === "horizontal", h = m ? v : c, l = Math.max(0, d * f - h), b = Math.min(l, n * f), g = Math.max(0, n * f - h + f + s);
    switch (r === "smart" && (o >= g - h && o <= b + h ? r = "auto" : r = "center"), r) {
      case "start":
        return b;
      case "end":
        return g;
      case "center": {
        var y = Math.round(g + (b - g) / 2);
        return y < Math.ceil(h / 2) ? 0 : y > l + Math.floor(h / 2) ? l : y;
      }
      case "auto":
      default:
        return o >= g && o <= b ? o : o < g ? g : b;
    }
  },
  getStartIndexForOffset: function(t, n) {
    var r = t.itemCount, o = t.itemSize;
    return Math.max(0, Math.min(r - 1, Math.floor(n / o)));
  },
  getStopIndexForStartIndex: function(t, n, r) {
    var o = t.direction, a = t.height, s = t.itemCount, i = t.itemSize, c = t.layout, d = t.width, f = o === "horizontal" || c === "horizontal", u = n * i, v = f ? d : a, m = Math.ceil((v + r - u) / i);
    return Math.max(0, Math.min(
      s - 1,
      n + m - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function(t) {
  },
  shouldResetStyleCacheOnItemSizeChange: !0,
  validateProps: function(t) {
    var n = t.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof n != "number")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (n === null ? "null" : typeof n) + '" was specified.'));
  }
});
const jl = ({ children: e, options: t = [], selectedValue: n, show: r = !1, onSelect: o, onClose: a }) => {
  const s = N(null), i = N(null), [c, d] = K(""), f = Ee(() => t.filter(({ label: u }) => u.value.toLowerCase().indexOf(c.toLowerCase()) > -1), [t, c]);
  return M(() => {
    r && setTimeout(() => {
      var u;
      return (u = i.current) == null ? void 0 : u.focus();
    }, 0);
  }, [r]), /* @__PURE__ */ x.jsxs(yl, { open: r, onOpenChange: (u) => u ? {} : a == null ? void 0 : a(), children: [
    /* @__PURE__ */ x.jsx(wl, { asChild: !0, children: e }),
    /* @__PURE__ */ x.jsx($l, { children: /* @__PURE__ */ x.jsxs(
      El,
      {
        align: "end",
        sideOffset: 32,
        onMouseUp: (u) => u.stopPropagation(),
        className: "z-20 h-60 w-60 p-1 flex flex-col gap-2 bg-paper shadow-xl rounded border",
        children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              value: c,
              ref: i,
              placeholder: "Type to search...",
              onFocus: (u) => u.target.select(),
              className: "rounded p-1 px-2 bg-background",
              onChange: (u) => d(u.currentTarget.value),
              onKeyDown: (u) => {
                var v;
                return u.key === "ArrowDown" ? (v = s.current) == null ? void 0 : v.focus() : u.stopPropagation();
              }
            }
          ),
          /* @__PURE__ */ x.jsxs("div", { className: "overflow-overlay overflow-track-transparent flex flex-col flex-1", children: [
            /* @__PURE__ */ x.jsx(
              Nl,
              {
                width: 230,
                itemSize: 34,
                itemData: f,
                itemCount: f.length,
                height: f.length === 0 ? 0 : 190,
                children: ({ style: u, data: v, index: m }) => /* @__PURE__ */ x.jsx(
                  Cl,
                  {
                    style: u,
                    ref: m === 0 ? s : void 0,
                    onClick: () => {
                      o && o(v[m]), a && a();
                    },
                    className: `p-1 rounded cursor-pointer outline-none hover:bg-primary focus:bg-primary active:opacity-80 select-none ${n === v[m].value.value ? "font-bold" : ""}`,
                    children: v[m].label.value
                  },
                  v[m].label.value
                )
              }
            ),
            f.length === 0 && /* @__PURE__ */ x.jsx("span", { className: "self-center justify-self-center opacity-80", children: "No options" })
          ] })
        ]
      }
    ) })
  ] });
}, jn = ({
  id: e,
  error: t,
  value: n,
  warning: r,
  disabled: o,
  autoFocus: a,
  placeholder: s,
  suggestions: i,
  disabledPicker: c,
  onBlur: d,
  onChange: f,
  onKeyDown: u,
  onPickerClick: v,
  onSelectSuggestion: m
}) => {
  const h = N(null);
  M(() => {
    h.current && a && (h.current.focus(), h.current.select());
  }, [a]);
  const [l, b] = K(!1), [g, y] = K(!1), [C, E] = K(n), [$, S] = K(n);
  M(() => {
    if (!i) {
      S(n);
      return;
    }
    const R = i == null ? void 0 : i.find((V) => V.value.value === n);
    S((R == null ? void 0 : R.label.value) || n);
    const z = [];
    return i.forEach((V) => {
      z.push(V.value.subscribe((k) => {
        k === n && R && S(R == null ? void 0 : R.label.value);
      })), z.push(V.label.subscribe((k) => {
        V.value.value === n && R && S(k);
      }));
    }), () => z.forEach((V) => V.unsubscribe());
  }, [i, n]), M(() => {
    g || E($);
  }, [$, g]);
  const P = L((R) => {
    if (E(R.target.value), !i) {
      f && f(R, R.target.value);
      return;
    }
    const z = R.target.value, V = i.find((k) => {
      const q = k.label.value === z, W = k.name.value === z, H = k.value.value === z;
      return q || W || H;
    });
    V ? m && m(V) : f && f(R, z);
  }, [i, f, m]), D = L((R) => {
    y(!1), d == null || d(R);
  }, [d]);
  return /* @__PURE__ */ x.jsxs("div", { className: "flex w-full items-center relative", children: [
    /* @__PURE__ */ x.jsx(
      "input",
      {
        "data-error": t,
        "data-warning": r,
        "data-has-suggestions": (i || []).length > 0,
        id: e,
        ref: h,
        autoComplete: "off",
        onBlur: D,
        disabled: o,
        autoFocus: a,
        onKeyDown: u,
        onChange: P,
        placeholder: s,
        onFocus: () => y(!0),
        ...g ? { value: C } : { value: $ },
        className: "bg-background flex-1 p-1 py-0.5 data-[warning=true]:border data-[warning=true]:border-yellow-500 data-[error=true]:border data-[error=true]:border-red-500 data-[has-suggestions=true]:pr-6 disabled:opacity-50"
      }
    ),
    !o && (i || []).length > 0 && /* @__PURE__ */ x.jsx(
      Xr,
      {
        size: 24,
        onClick: () => b(!0),
        className: "h-full rounded cursor-pointer open-suggestions text-text p-1 -ml-6 outline-none"
      }
    ),
    /* @__PURE__ */ x.jsx(
      jl,
      {
        options: i,
        show: l,
        selectedValue: String(n || ""),
        onClose: () => b(!1),
        onSelect: (R) => !o && m(R),
        children: /* @__PURE__ */ x.jsx("span", {})
      }
    ),
    !o && !c && /* @__PURE__ */ x.jsx(
      "input",
      {
        type: "button",
        tabIndex: -1,
        onClick: !o && v,
        className: "h-5 cursor-pointer rounded-md ml-1 px-1.5 border bg-paper"
      }
    )
  ] });
}, Zn = ({ dividerPositionX: e = 0, ...t }) => {
  const { onPickerValueClick: n, onGetValueSuggestions: r, onGetValue: o } = at(), [a, s] = ie(o ? o(t) : t.value), i = w(t.valueInputPickerDisabled), c = w(t.editValueDisabled), d = w(t.valueHasWarning), f = w(t.nameHasWarning), u = w(t.valueHasError), v = w(t.nameHasError), m = w(t.information), h = w(t.name), l = w(t.id), [b, g] = K(r(t));
  return M(() => {
    g(r(t));
  }, [t.propertyType.value, t.type.value, t.id.value, r]), /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: l || "",
      name: h || "",
      information: m,
      nameHasError: v,
      nameHasWarning: f,
      dividerPositionX: e,
      children: (y) => /* @__PURE__ */ x.jsx(
        jn,
        {
          onSelectSuggestion: (C) => s(C.value.value.toString()),
          onPickerClick: () => n == null ? void 0 : n(t),
          onChange: (C) => s(C.currentTarget.value),
          disabledPicker: i,
          disabled: c,
          suggestions: b,
          warning: d,
          error: u,
          value: a,
          id: y
        }
      )
    }
  );
}, Ml = ({ ...e }) => {
  const t = w(e.valueHasWarning), n = w(e.nameHasWarning), r = w(e.valueHasError), o = w(e.nameHasError), a = w(e.information), s = w(e.value), i = w(e.name), c = w(e.id);
  return /* @__PURE__ */ x.jsxs("div", { className: `flex flex-col p-2 pt-1 gap-2 border rounded ${r || o ? "border border-red-500" : ""} ${t || n ? "border border-yellow-500" : ""}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ x.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ x.jsx("span", { className: "text-sm font-light", children: i }),
      a !== "" && a !== void 0 && /* @__PURE__ */ x.jsx(ut, { text: a, children: /* @__PURE__ */ x.jsx(st, { size: 15 }) })
    ] }) }),
    /* @__PURE__ */ x.jsxs("div", { id: c, className: "flex flex-col gap-1", children: [
      s.map((d) => /* @__PURE__ */ x.jsx(
        Zn,
        {
          ...d,
          editValueDisabled: e.editValueDisabled
        }
      )),
      s.length === 0 && /* @__PURE__ */ x.jsx("span", { className: "font-light italic", children: "No options" })
    ] })
  ] });
}, kl = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), i = w(e.editValueDisabled), c = w(e.valueHasWarning), d = w(e.nameHasWarning), f = w(e.valueHasError), u = w(e.nameHasError), v = w(e.information), [m, h] = ie(e.value), l = w(e.name), b = w(e.id);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: b || "",
      name: l || "",
      information: v,
      nameHasError: u,
      nameHasWarning: d,
      onDoubleClick: () => h((g) => !g),
      children: (g) => /* @__PURE__ */ x.jsxs(
        "select",
        {
          onChange: (y) => h(y.currentTarget.value === "true"),
          className: "bg-background py-0.5",
          disabled: i,
          value: String(m),
          id: g,
          style: {
            textDecoration: f ? o : c ? a : s,
            border: f ? t : c ? n : r,
            width: "100%"
          },
          children: [
            /* @__PURE__ */ x.jsx("option", { children: "Yes", value: "true" }),
            /* @__PURE__ */ x.jsx("option", { children: "No", value: "false" })
          ]
        }
      )
    }
  );
}, Wl = {
  justifyContent: "space-between",
  height: "min-content",
  alignItems: "center",
  position: "relative"
}, Ll = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), i = w(e.editValueDisabled), c = w(e.valueHasWarning), d = w(e.valueHasError), [f, u] = ie(e.value), v = w(e.id);
  return /* @__PURE__ */ x.jsx("div", { style: Wl, children: /* @__PURE__ */ x.jsx(
    "textarea",
    {
      onChange: (m) => u(m.currentTarget.value),
      className: "w-full bg-background disabled:opacity-50",
      disabled: i,
      id: "prop_id_" + v,
      autoComplete: "off",
      value: f,
      style: {
        textDecoration: d ? o : c ? a : s,
        border: d ? t : c ? n : r,
        resize: "vertical",
        height: "100px"
      }
    }
  ) });
}, Hl = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), i = w(e.editValueDisabled), c = w(e.valueHasWarning), d = w(e.nameHasWarning), f = w(e.valueHasError), u = w(e.nameHasError), v = w(e.information), [m, h] = ie(e.value), l = w(e.name), b = w(e.id);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: b || "",
      name: l || "",
      information: v,
      nameHasError: u,
      nameHasWarning: d,
      children: (g) => /* @__PURE__ */ x.jsx(
        "input",
        {
          className: "w-full bg-background py-0.5 disabled:opacity-50",
          onChange: (y) => h(y.currentTarget.value),
          disabled: i,
          autoComplete: "off",
          value: m,
          id: g,
          style: {
            textDecoration: f ? o : c ? a : s,
            border: f ? t : c ? n : r
          }
        }
      )
    }
  );
}, Fl = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), i = w(e.editValueDisabled), c = w(e.valueHasWarning), d = w(e.nameHasWarning), f = w(e.valueHasError), u = w(e.nameHasError), v = w(e.information), [m, h] = ie(e.value), l = w(e.name), b = w(e.id);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: b || "",
      name: l || "",
      information: v,
      nameHasError: u,
      nameHasWarning: d,
      children: (g) => /* @__PURE__ */ x.jsx(
        "input",
        {
          onChange: (y) => h(Number(y.currentTarget.value)),
          className: "w-full bg-background py-0.5 disabled:opacity-50",
          disabled: i,
          autoComplete: "off",
          type: "number",
          value: m,
          id: g,
          style: {
            textDecoration: f ? o : c ? a : s,
            border: f ? t : c ? n : r
          }
        }
      )
    }
  );
}, zl = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), i = w(e.editValueDisabled), c = w(e.valueHasWarning), d = w(e.nameHasWarning), f = w(e.valueHasError), u = w(e.nameHasError), v = w(e.information), [m, h] = ie(e.value), l = w(e.name), b = w(e.id);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      name: l || "",
      id: b || Br(),
      information: v,
      nameHasError: u,
      nameHasWarning: d,
      children: (g) => /* @__PURE__ */ x.jsx(
        "input",
        {
          onChange: (y) => h(y.currentTarget.value),
          className: "bg-background p-1 disabled:opacity-50",
          disabled: i,
          autoComplete: "off",
          value: m,
          type: "color",
          id: g,
          style: {
            textDecoration: f ? o : c ? a : s,
            border: f ? t : c ? n : r,
            marginLeft: "auto"
          }
        }
      )
    }
  );
}, Go = ({ inputClassName: e = "", ...t }) => {
  const { onPickerValueClick: n, onPickerNameClick: r, onGetNameSuggestions: o, onGetValueSuggestions: a } = at(), s = w(t.valueInputPickerDisabled), i = w(t.nameInputPickerDisabled), c = w(t.editValueDisabled), d = w(t.editNameDisabled), f = w(t.valueHasWarning), u = w(t.nameHasWarning), v = w(t.valueHasError), m = w(t.nameHasError), [h, l] = ie(t.value), [b, g] = ie(t.name), [y, C] = K(o(t)), [E, $] = K(a(t));
  return M(() => {
    C(o(t));
  }, [t.propertyType.value, t.type.value, t.id.value, o]), M(() => {
    $(a(t));
  }, [t.propertyType.value, t.type.value, t.id.value, a]), /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-0.5 w-full", children: [
    /* @__PURE__ */ x.jsx(
      jn,
      {
        value: b,
        error: m,
        placeholder: "Property",
        warning: u,
        disabled: d,
        suggestions: y,
        id: "name_prop_id_" + t.id,
        disabledPicker: i,
        onChange: (S) => g(S.currentTarget.value),
        onPickerClick: () => r == null ? void 0 : r(t),
        onSelectSuggestion: (S) => g(S.value.value.toString())
      },
      "name_prop_key_" + t.id
    ),
    /* @__PURE__ */ x.jsxs("label", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ x.jsx(
        "span",
        {
          children: "=",
          className: "cursor-pointer",
          onClick: () => n == null ? void 0 : n(t)
        }
      ),
      /* @__PURE__ */ x.jsx(
        jn,
        {
          value: h,
          placeholder: "Value",
          error: v,
          warning: f,
          suggestions: E,
          disabled: c,
          id: "value_prop_id_" + t.id,
          disabledPicker: s,
          onChange: (S) => l(S.currentTarget.value),
          onPickerClick: () => n == null ? void 0 : n(t),
          onSelectSuggestion: (S) => l(S.value.value.toString())
        },
        "value_prop_key_" + t.id
      )
    ] })
  ] });
}, Vl = ({ ...e }) => {
  const t = w(e.valueHasWarning), n = w(e.nameHasWarning), r = w(e.valueHasError), o = w(e.nameHasError), a = w(e.information), [s, i] = ie(e.value), c = w(e.name), d = w(e.id), f = L(() => {
    i((v) => [...v, qr({})]);
  }, [i]), u = L((v) => {
    i((m) => (m.splice(v, 1), [...m]));
  }, [i]);
  return /* @__PURE__ */ x.jsxs("div", { className: `flex flex-col p-2 pt-1 gap-2 border rounded ${r || o ? "border border-red-500" : ""} ${t || n ? "border border-yellow-500" : ""}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ x.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ x.jsx("span", { className: "text-sm font-light pr-2", children: c }),
      a !== "" && a !== void 0 && /* @__PURE__ */ x.jsx(ut, { text: a, children: /* @__PURE__ */ x.jsx(st, { size: 15 }) })
    ] }) }),
    /* @__PURE__ */ x.jsxs("div", { id: d, className: "flex flex-col gap-1", children: [
      s.map((v, m) => /* @__PURE__ */ x.jsxs(Mn, { children: [
        /* @__PURE__ */ x.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ x.jsx(
            Go,
            {
              ...v,
              inputClassName: "bg-background",
              editValueDisabled: e.editValueDisabled
            }
          ),
          /* @__PURE__ */ x.jsx(
            xt,
            {
              onClick: () => u(m),
              style: { minWidth: 16, minHeight: 16 },
              className: "ml-1 cursor-pointer hover:text-red-400 active:opacity-80"
            }
          )
        ] }),
        m + 1 < s.length && /* @__PURE__ */ x.jsx("hr", {})
      ] }, v.id.value)),
      s.length === 0 && /* @__PURE__ */ x.jsx("span", { className: "font-light italic", children: "No options" })
    ] }),
    /* @__PURE__ */ x.jsx("button", { className: "text-sm text-secondary", onClick: f, children: "+ Add" })
  ] });
}, Bl = ({ value: e, fileMaxSize: t, disabled: n, error: r, warning: o, typeOfFilesToAccept: a, onChange: s }) => {
  const i = N(null), c = N(null), d = L((m) => {
    var y;
    const h = (y = m.target.files) == null ? void 0 : y.item(0);
    if (!h || !h.name || t && h.size > t)
      return;
    const l = h.name.lastIndexOf(".") || 0, b = h.name.slice(l, h.name.length).toLowerCase();
    if (a && !a.includes(b))
      return;
    const g = new FileReader();
    g.addEventListener("load", (C) => {
      C.target && s({
        name: h.name,
        size: h.size,
        type: h.type,
        lastModified: h.lastModified,
        content: C.target.result instanceof ArrayBuffer ? Buffer.from(C.target.result).toString("base64") : C.target.result
      });
    }), g.readAsDataURL(h);
  }, [t, a]), f = () => {
    if (n)
      return;
    const m = document.createElement("input");
    m.type = "file", m.onchange = d, a && (m.accept = a.join(",")), m.click();
  }, u = (m) => {
    var h;
    m.code === "Enter" || m.code === "Space" ? f() : m.code === "Delete" ? s(void 0) : m.code === "ArrowRight" && ((h = c.current) == null || h.focus());
  }, v = (m) => {
    var h, l;
    m.stopPropagation(), m.preventDefault(), m.code === "Enter" || m.code === "Space" ? ((h = i.current) == null || h.focus(), s(void 0)) : m.code === "ArrowLeft" && ((l = i.current) == null || l.focus());
  };
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      ref: i,
      "data-error": r,
      "data-warning": o,
      onClick: f,
      "data-disabled": n,
      tabIndex: n ? -1 : 0,
      onKeyDown: u,
      className: "flex gap-2 bg-background p-1 rounded cursor-pointer focus:outline outline-primary ring-1 ring-transparent data-[warning=true]:ring-yellow-500 data-[error=true]:ring-red-500 data-[disabled=true]:opacity-50 data-[disabled=true]:focus:outline-none data-[disabled=true]:cursor-default",
      children: [
        e ? /* @__PURE__ */ x.jsxs("div", { className: "flex-1 flex gap-1", children: [
          /* @__PURE__ */ x.jsx("img", { draggable: !1, src: e.content || "", height: 24, width: 24, alt: e.name, className: "object-contain" }),
          /* @__PURE__ */ x.jsx("div", { "data-disabled": n, className: "flex-1 data-[disabled=true]:cursor-default data-[disabled=true]:select-text", children: e.name })
        ] }) : /* @__PURE__ */ x.jsx("div", { className: "flex-1", children: "Select a file..." }),
        /* @__PURE__ */ x.jsx(
          "div",
          {
            ref: c,
            "data-show": !!e,
            "data-disabled": n,
            onKeyDown: v,
            tabIndex: e || n ? -1 : 1,
            onClick: (m) => {
              m.stopPropagation(), m.preventDefault(), s(void 0);
            },
            className: "cursor-pointer text-white self-start rounded-full hover:bg-primary focus:outline outline-primary data-[show=false]:hidden data-[disabled=true]:hidden",
            children: /* @__PURE__ */ x.jsx(xt, { size: 24, className: "p-1" })
          }
        )
      ]
    }
  );
}, Ul = ({ ...e }) => {
  const t = w(e.typeOfFilesToAccept), n = w(e.editValueDisabled), r = w(e.valueHasWarning), o = w(e.nameHasWarning), a = w(e.valueHasError), s = w(e.nameHasError), i = w(e.fileMaxSize), c = w(e.information), [d, f] = ie(e.value), u = w(e.name), v = w(e.id), m = L((h) => {
    f(h);
  }, [f]);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: v || "",
      name: u || "",
      information: c,
      nameHasError: s,
      nameHasWarning: o,
      children: () => /* @__PURE__ */ x.jsx(
        Bl,
        {
          value: d,
          error: a,
          onChange: m,
          fileMaxSize: i,
          warning: r,
          disabled: n,
          typeOfFilesToAccept: t
        }
      )
    }
  );
}, Kl = ({ ...e }) => {
  const t = w(e.editValueDisabled), n = w(e.valueHasWarning), r = w(e.nameHasWarning), o = w(e.valueHasError), a = w(e.nameHasError), s = w(e.information), [i, c] = ie(e.value), d = w(e.name), f = w(e.id), u = () => {
    c((m) => [
      ...m,
      {
        name: Z(""),
        value: Z("")
      }
    ]);
  }, v = L((m) => {
    c((h) => (h.splice(m, 1), [...h]));
  }, [c]);
  return /* @__PURE__ */ x.jsxs("div", { className: `flex flex-col p-2 gap-2 bg-background rounded ${o || a ? "border border-red-500" : ""} ${n || r ? "border border-yellow-500" : ""}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ x.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ x.jsx("span", { children: d }),
      s !== "" && s !== void 0 && /* @__PURE__ */ x.jsx(ut, { text: s, children: /* @__PURE__ */ x.jsx(st, { size: 15 }) })
    ] }) }),
    /* @__PURE__ */ x.jsxs("div", { id: f, className: "flex flex-col gap-1", children: [
      i.map((m, h) => /* @__PURE__ */ x.jsx(
        Gl,
        {
          name: m.name,
          value: m.value,
          disabled: !!t,
          onDelete: () => v(h)
        },
        m.value.id
      )),
      i.length === 0 && /* @__PURE__ */ x.jsx("span", { className: "font-light italic", children: "No options" })
    ] }),
    /* @__PURE__ */ x.jsx("button", { className: "text-sm text-primary", onClick: u, children: "+ Add" })
  ] });
}, Gl = ba(({ name: e, value: t, disabled: n, onDelete: r }) => {
  const [o, a] = ie(t), [s, i] = ie(e);
  return /* @__PURE__ */ x.jsxs("div", { className: "flex gap-0.5", children: [
    /* @__PURE__ */ x.jsx(
      "input",
      {
        className: "w-full bg-paper p-1 rounded-r-none",
        onChange: (c) => i(c.target.value),
        autoComplete: "off",
        disabled: n,
        placeholder: "Name",
        value: s
      }
    ),
    /* @__PURE__ */ x.jsx(
      "input",
      {
        className: "w-full bg-paper p-1 rounded-l-none",
        onChange: (c) => a(c.target.value),
        autoComplete: "off",
        placeholder: "Value",
        disabled: n,
        value: o
      }
    ),
    /* @__PURE__ */ x.jsx("button", { className: "p-1", onClick: r, children: /* @__PURE__ */ x.jsx(xt, {}) })
  ] });
}), Yl = ({ ...e }) => {
  const t = w(e.editValueDisabled), n = w(e.valueHasWarning), r = w(e.nameHasWarning), o = w(e.valueHasError), a = w(e.nameHasError), s = w(e.information), [i, c] = ie(e.value), d = w(e.name), f = w(e.id), u = () => {
    c((v) => [...v, ""]);
  };
  return /* @__PURE__ */ x.jsxs("div", { className: `flex flex-col p-2 pt-1 gap-2 border rounded ${o || a ? "border border-red-500" : ""} ${n || r ? "border border-yellow-500" : ""}`, children: [
    /* @__PURE__ */ x.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ x.jsx("span", { className: "text-sm font-light", children: d }),
      s !== "" && s !== void 0 && /* @__PURE__ */ x.jsx(ut, { text: s, children: /* @__PURE__ */ x.jsx(st, { size: 15 }) })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { id: f, className: "flex flex-col gap-1", children: [
      i.map((v, m) => /* @__PURE__ */ x.jsxs("div", { className: "flex gap-0.5", children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            className: "w-full bg-background p-1",
            disabled: t,
            autoComplete: "off",
            value: v,
            onChange: (h) => {
              i[m] = h.target.value, c([...i]);
            }
          }
        ),
        /* @__PURE__ */ x.jsx("button", { className: "p-1", disabled: t, onClick: () => c([...i.filter((h, l) => l !== m)]), children: /* @__PURE__ */ x.jsx(xt, {}) })
      ] }, m)),
      i.length === 0 && /* @__PURE__ */ x.jsx("span", { className: "font-light", children: "No options" }),
      /* @__PURE__ */ x.jsx("button", { className: "text-sm text-secondary", onClick: u, children: "+ Add" })
    ] })
  ] });
}, Xl = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), i = w(e.editValueDisabled), c = w(e.valueHasWarning), d = w(e.nameHasWarning), f = w(e.valueHasError), u = w(e.nameHasError), v = w(e.information), [m, h] = ie(e.value), l = w(e.name), b = w(e.id);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: b || "",
      name: l || "",
      information: v,
      nameHasError: u,
      nameHasWarning: d,
      children: (g) => /* @__PURE__ */ x.jsx(
        "textarea",
        {
          onChange: (y) => h(y.currentTarget.value),
          className: "w-full bg-background disabled:opacity-50",
          disabled: i,
          autoComplete: "off",
          value: m,
          id: g,
          style: {
            textDecoration: f ? o : c ? a : s,
            border: f ? t : c ? n : r,
            resize: "vertical",
            height: "50px"
          }
        }
      )
    }
  );
}, ql = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), { onGetValueSuggestions: i } = at(), c = w(e.editValueDisabled), d = w(e.valueHasWarning), f = w(e.nameHasWarning), u = w(e.valueHasError), v = w(e.nameHasError), m = w(e.information), [h, l] = ie(e.value), b = w(e.name), g = w(e.id), [y, C] = K(i(e));
  return M(() => {
    C(i(e));
  }, [e.propertyType.value, e.type.value, e.id.value, i]), /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: g || "",
      name: b || "",
      information: m,
      nameHasError: v,
      nameHasWarning: f,
      children: (E) => /* @__PURE__ */ x.jsxs(
        "select",
        {
          onChange: ($) => l($.currentTarget.value),
          className: "bg-background py-0.5",
          disabled: c,
          value: h,
          id: E,
          style: {
            textDecoration: u ? o : d ? a : s,
            border: u ? t : d ? n : r,
            width: "100%"
          },
          children: [
            /* @__PURE__ */ x.jsx("option", { value: "", children: "Select" }),
            y == null ? void 0 : y.map(($, S) => /* @__PURE__ */ x.jsx(Zl, { ...$ }, S))
          ]
        }
      )
    }
  );
}, Zl = ({ ...e }) => {
  const t = w(e.description), n = w(e.disabled), r = w(e.label), o = w(e.value);
  return /* @__PURE__ */ x.jsx(
    "option",
    {
      title: t,
      disabled: n,
      children: r,
      value: o
    }
  );
}, Jl = {
  alignItems: "flex-start",
  flexDirection: "column",
  height: "min-content",
  position: "relative",
  display: "flex"
}, Ql = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: s } = Ce(), { onGetValueSuggestions: i } = at(), c = w(e.editValueDisabled), d = w(e.valueHasWarning), f = w(e.valueHasError), [u, v] = ie(e.value), [m] = ie(e.name), h = w(e.id), [l, b] = K(i(e));
  M(() => {
    b(i(e));
  }, [e.propertyType.value, e.type.value, e.id.value, i]);
  const g = N(null), y = L((E) => {
    switch (E.code) {
      case "Comma":
        v(($) => {
          const S = E.currentTarget.value.trim().replaceAll(",", "");
          return S.length > 0 && !$.includes(S) ? [...$, S] : $;
        }), E.currentTarget.value = "";
        break;
      case "Space":
        v(($) => {
          const S = E.currentTarget.value.trim().replaceAll(" ", "");
          return S.length > 0 && !$.includes(S) ? [...$, S] : $;
        }), E.currentTarget.value = "";
        break;
      case "Enter":
        v(($) => {
          const S = E.currentTarget.value.trim();
          return S.length > 0 && !$.includes(S) ? [...$, S] : $;
        }), E.currentTarget.value = "";
        break;
      case "NumpadEnter":
        v(($) => {
          const S = E.currentTarget.value.trim();
          return S.length > 0 && !$.includes(S) ? [...$, S] : $;
        }), E.currentTarget.value = "";
        break;
      case "Slash":
        v(($) => {
          const S = E.currentTarget.value.trim().replaceAll(";", "");
          return S.length > 0 && !$.includes(S) ? [...$, S] : $;
        }), E.currentTarget.value = "";
        break;
    }
  }, [v]), C = L((E) => {
    E.preventDefault();
    const $ = E.clipboardData.getData("text").split(/,| |\n/g).map((S) => S.trim()).filter((S) => S.length > 0);
    v((S) => [
      ...S,
      ...$.filter((P) => !S.includes(P))
    ]);
  }, [v]);
  return /* @__PURE__ */ x.jsxs("div", { style: Jl, "data-disabled": c, className: "p-2 gap-2 bg-background rounded data-[disabled=true]:opacity-50", children: [
    /* @__PURE__ */ x.jsx("label", { children: m }),
    /* @__PURE__ */ x.jsxs("div", { className: "flex flex-wrap justify-start items-center gap-1", children: [
      u.map((E, $) => /* @__PURE__ */ x.jsxs("span", { className: "flex gap-1 items-center justify-between border px-2 py-0.5 bg-paper rounded-lg", children: [
        E,
        /* @__PURE__ */ x.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ x.jsx(
            Aa,
            {
              style: { padding: 2, cursor: "pointer" },
              onClick: () => {
                v(u.filter((S, P) => P !== $)), g.current && (g.current.value = E, g.current.focus(), g.current.select());
              }
            }
          ),
          /* @__PURE__ */ x.jsx(
            Ia,
            {
              style: { padding: 2, cursor: "pointer" },
              onClick: () => v(u.filter((S, P) => P !== $))
            }
          )
        ] })
      ] }, E)),
      /* @__PURE__ */ x.jsx(
        "input",
        {
          ref: g,
          autoComplete: "off",
          id: "prop_id_" + h,
          placeholder: "Add...",
          onPaste: C,
          onKeyDown: y,
          list: "prop_data_id_" + h,
          disabled: c,
          className: "w-full bg-paper px-2 mt-2",
          onKeyUp: (E) => E.currentTarget.value = E.currentTarget.value.trim().replace(/;|,| |\./g, ""),
          style: {
            textDecoration: f ? o : d ? a : s,
            border: f ? t : d ? n : r,
            height: 26
          }
        }
      ),
      l && /* @__PURE__ */ x.jsx("datalist", { id: "prop_data_id_" + h, children: l.map((E, $) => /* @__PURE__ */ x.jsx("option", { value: E.value.value }, $)) })
    ] })
  ] });
}, eu = ({ ...e }) => {
  const t = w(e.valueHasWarning), n = w(e.nameHasWarning), r = w(e.valueHasError), o = w(e.nameHasError), a = w(e.information), s = w(e.name), i = w(e.id);
  return /* @__PURE__ */ x.jsxs("div", { className: `flex flex-col p-2 pt-1 gap-2 border rounded ${r || o ? "border border-red-500" : ""} ${t || n ? "border border-yellow-500" : ""}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ x.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ x.jsx("span", { className: "text-sm font-light pr-2", children: s }),
      a !== "" && a !== void 0 && /* @__PURE__ */ x.jsx(ut, { text: a, children: /* @__PURE__ */ x.jsx(st, { size: 15 }) })
    ] }) }),
    /* @__PURE__ */ x.jsx("div", { id: i, className: "flex flex-col gap-1", children: /* @__PURE__ */ x.jsx(Zo, { fields: e.value }) })
  ] });
}, tu = ({ ...e }) => {
  const { inputTextError: t, inputTextWarning: n, inputTextDefault: r } = Ce(), o = w(e.valueHasWarning), a = w(e.nameHasWarning), s = w(e.valueHasError), i = w(e.nameHasError), c = w(e.information), d = w(e.value), f = w(e.name), u = w(e.id);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: u || "",
      name: f || "",
      nameHasError: i,
      information: c,
      nameHasWarning: a,
      children: (v) => /* @__PURE__ */ x.jsx(
        "label",
        {
          style: {
            textDecoration: s ? t : o ? n : r,
            backgroundColor: "transparent",
            textOverflow: "ellipsis",
            display: "inline-block",
            whiteSpace: "nowrap",
            textAlign: "start",
            overflow: "hidden"
          },
          children: d,
          id: v
        }
      )
    }
  );
};
function nu(e) {
  const t = N({
    value: e,
    previous: e
  });
  return Ee(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Yo = "Switch", [ru, Cu] = Be(Yo), [ou, au] = ru(Yo), iu = /* @__PURE__ */ J((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: d, ...f } = e, [u, v] = K(null), m = fe(
    t,
    (y) => v(y)
  ), h = N(!1), l = u ? !!u.closest("form") : !0, [b = !1, g] = Jt({
    prop: o,
    defaultProp: a,
    onChange: d
  });
  return /* @__PURE__ */ _(ou, {
    scope: n,
    checked: b,
    disabled: i
  }, /* @__PURE__ */ _(be.button, F({
    type: "button",
    role: "switch",
    "aria-checked": b,
    "aria-required": s,
    "data-state": Xo(b),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, f, {
    ref: m,
    onClick: Y(e.onClick, (y) => {
      g(
        (C) => !C
      ), l && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), l && /* @__PURE__ */ _(lu, {
    control: u,
    bubbles: !h.current,
    name: r,
    value: c,
    checked: b,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), su = "SwitchThumb", cu = /* @__PURE__ */ J((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = au(su, n);
  return /* @__PURE__ */ _(be.span, F({
    "data-state": Xo(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), lu = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = N(null), s = nu(n), i = fo(t);
  return M(() => {
    const c = a.current, d = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (s !== n && u) {
      const v = new Event("click", {
        bubbles: r
      });
      u.call(c, n), c.dispatchEvent(v);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ _("input", F({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Xo(e) {
  return e ? "checked" : "unchecked";
}
const uu = iu, du = cu, fu = ({ id: e, checked: t = !1, autoFocus: n, onChange: r, onBlur: o, hasError: a = !1, disabled: s = !1, hasWarning: i }) => {
  const c = N(null);
  return M(() => {
    c.current && n && c.current.focus();
  }, [n]), /* @__PURE__ */ x.jsx(
    uu,
    {
      id: e,
      ref: c,
      onBlur: o,
      checked: t,
      disabled: s,
      autoFocus: n,
      "data-error": a,
      "data-warning": i && !a,
      onCheckedChange: () => r(!t),
      className: "p-1 w-12 h-7 rounded-full bg-background cursor-pointer flex items-center justify-start hover:opacity-100 focus:ring-1 ring-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none data-[warning=true]:ring-yellow-500 data-[warning=true]:ring-1 data-[error=true]:ring-red-500 data-[error=true]:ring-1",
      children: /* @__PURE__ */ x.jsx(
        du,
        {
          className: "w-[20px] h-[20px] bg-primary rounded-full transition-transform duration-100 translate-x-0 will-change-transform data-[state=unchecked]:bg-secondary data-[state=unchecked]:opacity-50 data-[state=checked]:translate-x-5"
        }
      )
    }
  );
}, mu = ({ ...e }) => {
  const t = w(e.editValueDisabled), n = w(e.valueHasWarning), r = w(e.nameHasWarning), o = w(e.valueHasError), a = w(e.nameHasError), s = w(e.information), [i, c] = ie(e.value), d = w(e.name), f = w(e.id);
  return /* @__PURE__ */ x.jsx(
    Se,
    {
      minWidth: 60,
      id: f || "",
      name: d || "",
      information: s,
      nameHasError: a,
      nameHasWarning: r,
      children: (u) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx("div", { className: "flex-1" }),
        /* @__PURE__ */ x.jsx(
          fu,
          {
            onChange: (v) => c(v),
            hasWarning: n,
            disabled: t,
            hasError: o,
            checked: i,
            id: u
          }
        )
      ] })
    }
  );
}, vu = ({ value: e }) => {
  const { root: t, fields: n } = w(e), r = w(n), o = w(t);
  function a() {
    fn(n, (i) => [
      ...i,
      qr({
        value: Z(""),
        type: Z(te.expression),
        name: Z(`Param ${i.length}`)
      })
    ]);
  }
  function s(i = "") {
    fn(n, (c) => [
      ...c.filter((d) => d.id.value !== i).map((d, f) => (fn(d.name, `Param ${f}`), d))
    ]);
  }
  return /* @__PURE__ */ x.jsxs("div", { className: "border rounded -m-0.5 pt-0.5 p-1", children: [
    /* @__PURE__ */ x.jsx(qo, { field: o }),
    /* @__PURE__ */ x.jsx("div", { className: "pl-2", children: r.map((i) => /* @__PURE__ */ x.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ x.jsx(
        Zn,
        {
          ...i,
          dividerPositionX: 24
        }
      ),
      /* @__PURE__ */ x.jsx("button", { onClick: () => s(i.id.value), className: "p-0 w-6 flex items-center justify-center", children: /* @__PURE__ */ x.jsx(xt, { size: 14 }) })
    ] }, i.id.value)) }),
    /* @__PURE__ */ x.jsx("button", { className: "text-sm text-secondary w-full", onClick: a, children: "+ Add" })
  ] });
}, qo = ({ field: e }) => {
  switch (w(e.type)) {
    case te.viewOnly:
      return /* @__PURE__ */ x.jsx(tu, { ...e });
    case te.string:
      return /* @__PURE__ */ x.jsx(Hl, { ...e });
    case te.colorPicker:
      return /* @__PURE__ */ x.jsx(zl, { ...e });
    case te.boolean:
      return /* @__PURE__ */ x.jsx(mu, { ...e });
    case te.number:
      return /* @__PURE__ */ x.jsx(Fl, { ...e });
    case te.binary:
      return /* @__PURE__ */ x.jsx(Ul, { ...e });
    case te.bigString:
      return /* @__PURE__ */ x.jsx(Xl, { ...e });
    case te.fullBigString:
      return /* @__PURE__ */ x.jsx(Ll, { ...e });
    case te.selection:
      return /* @__PURE__ */ x.jsx(ql, { ...e });
    case te.yesNoSelection:
      return /* @__PURE__ */ x.jsx(kl, { ...e });
    case te.expression:
      return /* @__PURE__ */ x.jsx(Zn, { ...e });
    case te.assign:
      return /* @__PURE__ */ x.jsx(Go, { ...e });
    case te.inputMultiTags:
      return /* @__PURE__ */ x.jsx(Ql, { ...e });
    case te.stringWithSuggestions:
      return /* @__PURE__ */ x.jsx($s, { ...e });
    case te.optionList:
      return /* @__PURE__ */ x.jsx(Kl, { ...e });
    case te.stringList:
      return /* @__PURE__ */ x.jsx(Yl, { ...e });
    case te.multiAssign:
      return /* @__PURE__ */ x.jsx(Vl, { ...e });
    case te.multiExpression:
      return /* @__PURE__ */ x.jsx(Ml, { ...e });
    case te.recursive:
      return /* @__PURE__ */ x.jsx(eu, { ...e });
    case te.fieldsTree:
      return /* @__PURE__ */ x.jsx(vu, { ...e });
    case te.hidden:
      return null;
    default:
      return null;
  }
}, zr = ({ properties: e, group: t }) => {
  const [n, r] = K(t ? zt.getGroupsInOpen(t) : !0), [o, a] = K([]);
  M(() => {
    a(() => (e.sort((i, c) => (i.order.value || 0) - (c.order.value || 0)), e));
  }, [e]), M(() => {
    const i = [];
    return e.forEach((c) => {
      i.push(c.order.subscribe(() => {
        a(() => (e.sort((d, f) => (d.order.value || 0) - (f.order.value || 0)), e));
      }));
    }), () => i.forEach((c) => c.unsubscribe());
  }, [e]);
  const s = L(() => {
    r(!n), t && zt.setGroupsInOpen(t, !n);
  }, [n, t]);
  return /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col", children: [
    t && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsx("hr", { className: "mt-3" }),
      /* @__PURE__ */ x.jsxs(
        "div",
        {
          onClick: s,
          className: "flex py-3 px-0 justify-between cursor-pointer items-center",
          children: [
            t.toUpperCase(),
            n ? /* @__PURE__ */ x.jsx(Da, {}) : /* @__PURE__ */ x.jsx(Xr, {})
          ]
        }
      )
    ] }),
    n && /* @__PURE__ */ x.jsx("div", { "data-animate": !!t, className: "flex flex-col gap-1 data-[animate=true]:animate-fade-in", children: o.map((i) => /* @__PURE__ */ x.jsx(
      qo,
      {
        field: i
      },
      i.id.value
    )) })
  ] });
}, Zo = ({ fields: e }) => {
  const t = w(e), n = Ee(() => t.filter((o) => o.group.value === void 0), [t]), r = Ee(() => {
    const o = [];
    return t.forEach((a) => {
      a.group.value && !o.some((s) => s === a.group.value) && o.push(a.group.value);
    }), o;
  }, [t]);
  return /* @__PURE__ */ x.jsxs("div", { className: "flex-1 flex-col w-full h-full", children: [
    /* @__PURE__ */ x.jsx(zr, { properties: n }),
    r.map((o) => /* @__PURE__ */ x.jsx(
      zr,
      {
        group: o,
        properties: t.filter((a) => a.group.value === o)
      },
      o
    )),
    t.length === 0 && /* @__PURE__ */ x.jsx("span", { className: "font-light italic", children: "Nothing here..." })
  ] });
}, Su = ({ properties: e, configs: t, ...n }) => /* @__PURE__ */ x.jsx(Ea, { configs: t, ...n, children: /* @__PURE__ */ x.jsx(Zo, { fields: e }) });
export {
  Su as PropertiesEditor,
  te as TypeOfValues,
  qr as newEmptyProperty,
  xu as newEmptySuggestion
};
//# sourceMappingURL=index.es.js.map
