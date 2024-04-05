import * as O from "react";
import b, { createContext as Be, useMemo as se, useCallback as A, useContext as xt, useRef as I, createElement as T, Fragment as en, forwardRef as U, Children as Ae, isValidElement as ht, cloneElement as tn, useEffect as N, useState as W, useLayoutEffect as Xn, useReducer as uo, PureComponent as fo, memo as mo } from "react";
import { observe as B, useObserver as j, useObserverValue as w, set as It } from "react-observing";
import { v4 as qn } from "uuid";
import * as vo from "react-dom";
import po, { flushSync as Zn } from "react-dom";
const Qn = Be({}), ho = ({ children: e, configs: t, onGetNameSuggestions: n, onGetValueSuggestions: r, onGetValue: o, ...a }) => {
  const c = se(() => ({
    errorColor: (t == null ? void 0 : t.errorColor) || "red",
    warningColor: (t == null ? void 0 : t.warningColor) || "yellow",
    textDefaultColor: (t == null ? void 0 : t.textDefaultColor) || "white",
    borderDefaultColor: (t == null ? void 0 : t.borderDefaultColor) || "#3c3c3c",
    inputTextDefault: void 0,
    inputBorderError: `thin solid  ${(t == null ? void 0 : t.errorColor) || "red"}`,
    inputTextError: `underline wavy ${(t == null ? void 0 : t.errorColor) || "red"}`,
    inputBorderWarning: `thin solid  ${(t == null ? void 0 : t.warningColor) || "yellow"}`,
    inputTextWarning: `underline wavy ${(t == null ? void 0 : t.warningColor) || "yellow"}`,
    inputBorderDefault: `thin solid  ${(t == null ? void 0 : t.borderDefaultColor) || "#3c3c3c"}`
  }), [t]), i = A((f) => n ? n(f) : [], [n]), s = A((f) => r ? r(f) : [], [r]), u = se(() => {
    if (!!o)
      return (f) => o(f);
  }, [o]);
  return /* @__PURE__ */ b.createElement(
    Qn.Provider,
    {
      value: {
        onGetValue: u,
        configs: c,
        onGetNameSuggestions: i,
        onGetValueSuggestions: s,
        ...a
      }
    },
    e
  );
}, We = () => xt(Qn), le = () => We().configs;
var Jn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, bn = b.createContext && b.createContext(Jn), $e = globalThis && globalThis.__assign || function() {
  return $e = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, $e.apply(this, arguments);
}, go = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function er(e) {
  return e && e.map(function(t, n) {
    return b.createElement(t.tag, $e({
      key: n
    }, t.attr), er(t.child));
  });
}
function Le(e) {
  return function(t) {
    return b.createElement(bo, $e({
      attr: $e({}, e.attr)
    }, t), er(e.child));
  };
}
function bo(e) {
  var t = function(n) {
    var r = e.attr, o = e.size, a = e.title, c = go(e, ["attr", "size", "title"]), i = o || n.size || "1em", s;
    return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), b.createElement("svg", $e({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, c, {
      className: s,
      style: $e($e({
        color: e.color || n.color
      }, n.style), e.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && b.createElement("title", null, a), e.children);
  };
  return bn !== void 0 ? b.createElement(bn.Consumer, null, function(n) {
    return t(n);
  }) : t(Jn);
}
function tr(e) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z" } }] })(e);
}
function yo(e) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M8.024 5.928l-4.357 4.357-.62-.618L7.716 5h.618L13 9.667l-.619.618-4.357-4.357z" } }] })(e);
}
function wo(e) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z" } }] })(e);
}
function $o(e) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z" } }] })(e);
}
function Ye(e) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z" } }] })(e);
}
function Xe(e) {
  return Le({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" } }] })(e);
}
class gt {
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
var G = /* @__PURE__ */ ((e) => (e.stringWithSuggestions = "stringWithSuggestions", e.multiExpression = "multiExpression", e.yesNoSelection = "yesNoSelection", e.inputMultiTags = "inputMultiTags", e.fullBigString = "fullBigString", e.multiAssign = "multiAssign", e.colorPicker = "colorPicker", e.fieldsTree = "fieldsTree", e.expression = "expression", e.optionList = "optionList", e.stringList = "stringList", e.bigString = "bigString", e.selection = "selection", e.viewOnly = "viewOnly", e.boolean = "boolean", e.string = "string", e.number = "number", e.binary = "binary", e.assign = "assign", e.hidden = "hidden", e))(G || {});
const cl = (e) => ({
  description: e.description || B(""),
  disabled: e.disabled || B(!1),
  value: e.value || B(""),
  label: e.label || B(""),
  name: e.name || B("")
}), nr = (e) => ({
  id: e.id || B(qn()),
  value: e.value || B(""),
  name: e.name || B(void 0),
  order: e.order || B(void 0),
  group: e.group || B(void 0),
  type: e.type || B(G.string),
  information: e.information || B(void 0),
  fileMaxSize: e.fileMaxSize || B(void 0),
  nameHasError: e.nameHasError || B(void 0),
  propertyType: e.propertyType || B("default"),
  valueHasError: e.valueHasError || B(void 0),
  nameHasWarning: e.nameHasWarning || B(void 0),
  valueHasWarning: e.valueHasWarning || B(void 0),
  editNameDisabled: e.editNameDisabled || B(void 0),
  editValueDisabled: e.editValueDisabled || B(void 0),
  typeOfFilesToAccept: e.typeOfFilesToAccept || B(void 0),
  nameInputPickerDisabled: e.nameInputPickerDisabled || B(!0),
  valueInputPickerDisabled: e.valueInputPickerDisabled || B(!0)
}), Eo = B(gt.getInputsWidth()), xo = ({ oldWidth: e = 0, onChange: t, onResizeEnd: n }) => {
  const r = I(0), o = A((i) => {
    t(window.innerWidth - i.pageX - r.current);
  }, [t]), a = A((i) => {
    window.document.body.style.cursor = "unset", n && n(window.innerWidth - i.pageX - r.current), window.onmousemove = null, window.onmouseup = null;
  }, [n]), c = A((i) => {
    r.current = window.innerWidth - i.pageX - e, window.document.body.style.cursor = "col-resize", window.onmousemove = o, window.onmouseup = a;
  }, [e, o, a]);
  return /* @__PURE__ */ b.createElement(
    "div",
    {
      onMouseDown: c,
      className: "transition-all border-none cursor-col-resize rounded h-8 w-1 z-10 hover:bg-secondary"
    }
  );
};
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, R.apply(this, arguments);
}
function z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Co(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function nn(...e) {
  return (t) => e.forEach(
    (n) => Co(n, t)
  );
}
function Q(...e) {
  return A(nn(...e), e);
}
function Pe(e, t = []) {
  let n = [];
  function r(a, c) {
    const i = /* @__PURE__ */ Be(c), s = n.length;
    n = [
      ...n,
      c
    ];
    function u(d) {
      const { scope: p, children: m, ...v } = d, l = (p == null ? void 0 : p[e][s]) || i, g = se(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ T(l.Provider, {
        value: g
      }, m);
    }
    function f(d, p) {
      const m = (p == null ? void 0 : p[e][s]) || i, v = xt(m);
      if (v)
        return v;
      if (c !== void 0)
        return c;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return u.displayName = a + "Provider", [
      u,
      f
    ];
  }
  const o = () => {
    const a = n.map((c) => /* @__PURE__ */ Be(c));
    return function(i) {
      const s = (i == null ? void 0 : i[e]) || a;
      return se(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: s
          }
        }),
        [
          i,
          s
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    So(o, ...t)
  ];
}
function So(...e) {
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
      const c = r.reduce((i, { useScope: s, scopeName: u }) => {
        const d = s(a)[`__scope${u}`];
        return {
          ...i,
          ...d
        };
      }, {});
      return se(
        () => ({
          [`__scope${t.scopeName}`]: c
        }),
        [
          c
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Ue = /* @__PURE__ */ U((e, t) => {
  const { children: n, ...r } = e, o = Ae.toArray(n), a = o.find(To);
  if (a) {
    const c = a.props.children, i = o.map((s) => s === a ? Ae.count(c) > 1 ? Ae.only(null) : /* @__PURE__ */ ht(c) ? c.props.children : null : s);
    return /* @__PURE__ */ T(Vt, R({}, r, {
      ref: t
    }), /* @__PURE__ */ ht(c) ? /* @__PURE__ */ tn(c, void 0, i) : null);
  }
  return /* @__PURE__ */ T(Vt, R({}, r, {
    ref: t
  }), n);
});
Ue.displayName = "Slot";
const Vt = /* @__PURE__ */ U((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ht(n) ? /* @__PURE__ */ tn(n, {
    ...Po(r, n.props),
    ref: t ? nn(t, n.ref) : n.ref
  }) : Ae.count(n) > 1 ? Ae.only(null) : null;
});
Vt.displayName = "SlotClone";
const rr = ({ children: e }) => /* @__PURE__ */ T(en, null, e);
function To(e) {
  return /* @__PURE__ */ ht(e) && e.type === rr;
}
function Po(e, t) {
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
const Do = [
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
], ne = Do.reduce((e, t) => {
  const n = /* @__PURE__ */ U((r, o) => {
    const { asChild: a, ...c } = r, i = a ? Ue : t;
    return N(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ T(i, R({}, c, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function or(e, t) {
  e && Zn(
    () => e.dispatchEvent(t)
  );
}
function me(e) {
  const t = I(e);
  return N(() => {
    t.current = e;
  }), se(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Oo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = me(e);
  N(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Bt = "dismissableLayer.update", _o = "dismissableLayer.pointerDownOutside", Io = "dismissableLayer.focusOutside";
let yn;
const No = /* @__PURE__ */ Be({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ar = /* @__PURE__ */ U((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: c, onInteractOutside: i, onDismiss: s, ...u } = e, f = xt(No), [d, p] = W(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = W({}), l = Q(
    t,
    (D) => p(D)
  ), g = Array.from(f.layers), [h] = [
    ...f.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(h), x = d ? g.indexOf(d) : -1, E = f.layersWithOutsidePointerEventsDisabled.size > 0, $ = x >= y, C = Ao((D) => {
    const P = D.target, k = [
      ...f.branches
    ].some(
      (H) => H.contains(P)
    );
    !$ || k || (a == null || a(D), i == null || i(D), D.defaultPrevented || s == null || s());
  }, m), S = Ro((D) => {
    const P = D.target;
    [
      ...f.branches
    ].some(
      (H) => H.contains(P)
    ) || (c == null || c(D), i == null || i(D), D.defaultPrevented || s == null || s());
  }, m);
  return Oo((D) => {
    x === f.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && s && (D.preventDefault(), s()));
  }, m), N(() => {
    if (!!d)
      return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (yn = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), wn(), () => {
        r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = yn);
      };
  }, [
    d,
    m,
    r,
    f
  ]), N(() => () => {
    !d || (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), wn());
  }, [
    d,
    f
  ]), N(() => {
    const D = () => v({});
    return document.addEventListener(Bt, D), () => document.removeEventListener(Bt, D);
  }, []), /* @__PURE__ */ T(ne.div, R({}, u, {
    ref: l,
    style: {
      pointerEvents: E ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: z(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: z(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: z(e.onPointerDownCapture, C.onPointerDownCapture)
  }));
});
function Ao(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = me(e), r = I(!1), o = I(() => {
  });
  return N(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let u = function() {
          ir(_o, n, s, {
            discrete: !0
          });
        };
        const s = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
          once: !0
        })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    onPointerDownCapture: () => r.current = !0
  };
}
function Ro(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = me(e), r = I(!1);
  return N(() => {
    const o = (a) => {
      a.target && !r.current && ir(Io, n, {
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
function wn() {
  const e = new CustomEvent(Bt);
  document.dispatchEvent(e);
}
function ir(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? or(o, a) : o.dispatchEvent(a);
}
const ke = Boolean(globalThis == null ? void 0 : globalThis.document) ? Xn : () => {
}, Mo = O["useId".toString()] || (() => {
});
let ko = 0;
function bt(e) {
  const [t, n] = O.useState(Mo());
  return ke(() => {
    e || n(
      (r) => r != null ? r : String(ko++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Ho = ["top", "right", "bottom", "left"], xe = Math.min, ee = Math.max, yt = Math.round, at = Math.floor, Ce = (e) => ({
  x: e,
  y: e
}), Wo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Lo = {
  start: "end",
  end: "start"
};
function Ut(e, t, n) {
  return ee(e, xe(t, n));
}
function pe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e) {
  return e.split("-")[0];
}
function Fe(e) {
  return e.split("-")[1];
}
function rn(e) {
  return e === "x" ? "y" : "x";
}
function on(e) {
  return e === "y" ? "height" : "width";
}
function ze(e) {
  return ["top", "bottom"].includes(he(e)) ? "y" : "x";
}
function an(e) {
  return rn(ze(e));
}
function Fo(e, t, n) {
  n === void 0 && (n = !1);
  const r = Fe(e), o = an(e), a = on(o);
  let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = wt(c)), [c, wt(c)];
}
function zo(e) {
  const t = wt(e);
  return [Kt(e), t, Kt(t)];
}
function Kt(e) {
  return e.replace(/start|end/g, (t) => Lo[t]);
}
function Vo(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : c;
    default:
      return [];
  }
}
function Bo(e, t, n, r) {
  const o = Fe(e);
  let a = Vo(he(e), n === "start", r);
  return o && (a = a.map((c) => c + "-" + o), t && (a = a.concat(a.map(Kt)))), a;
}
function wt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Wo[t]);
}
function Uo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function cr(e) {
  return typeof e != "number" ? Uo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $t(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function $n(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ze(t), c = an(t), i = on(c), s = he(t), u = a === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let m;
  switch (s) {
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
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Fe(t)) {
    case "start":
      m[c] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      m[c] += p * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Ko = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: c
  } = n, i = a.filter(Boolean), s = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let u = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = $n(u, r, s), p = r, m = {}, v = 0;
  for (let l = 0; l < i.length; l++) {
    const {
      name: g,
      fn: h
    } = i[l], {
      x: y,
      y: x,
      data: E,
      reset: $
    } = await h({
      x: f,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y != null ? y : f, d = x != null ? x : d, m = {
      ...m,
      [g]: {
        ...m[g],
        ...E
      }
    }, $ && v <= 50 && (v++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (u = $.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: f,
      y: d
    } = $n(u, p, s)), l = -1);
  }
  return {
    x: f,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: m
  };
};
async function Ke(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: c,
    elements: i,
    strategy: s
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = pe(t, e), v = cr(m), g = i[p ? d === "floating" ? "reference" : "floating" : d], h = $t(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: s
  })), y = d === "floating" ? {
    ...c.floating,
    x: r,
    y: o
  } : c.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), E = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = $t(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: x,
    strategy: s
  }) : y);
  return {
    top: (h.top - $.top + v.top) / E.y,
    bottom: ($.bottom - h.bottom + v.bottom) / E.y,
    left: (h.left - $.left + v.left) / E.x,
    right: ($.right - h.right + v.right) / E.x
  };
}
const Go = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: c,
      elements: i,
      middlewareData: s
    } = t, {
      element: u,
      padding: f = 0
    } = pe(e, t) || {};
    if (u == null)
      return {};
    const d = cr(f), p = {
      x: n,
      y: r
    }, m = an(o), v = on(m), l = await c.getDimensions(u), g = m === "y", h = g ? "top" : "left", y = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", E = a.reference[v] + a.reference[m] - p[m] - a.floating[v], $ = p[m] - a.reference[m], C = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(u));
    let S = C ? C[x] : 0;
    (!S || !await (c.isElement == null ? void 0 : c.isElement(C))) && (S = i.floating[x] || a.floating[v]);
    const D = E / 2 - $ / 2, P = S / 2 - l[v] / 2 - 1, k = xe(d[h], P), H = xe(d[y], P), M = k, X = S - l[v] - H, F = S / 2 - l[v] / 2 + D, L = Ut(M, F, X), Y = !s.arrow && Fe(o) != null && F !== L && a.reference[v] / 2 - (F < M ? k : H) - l[v] / 2 < 0, V = Y ? F < M ? F - M : F - X : 0;
    return {
      [m]: p[m] + V,
      data: {
        [m]: L,
        centerOffset: F - L - V,
        ...Y && {
          alignmentOffset: V
        }
      },
      reset: Y
    };
  }
}), jo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: c,
        initialPlacement: i,
        platform: s,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: l = !0,
        ...g
      } = pe(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const h = he(o), y = he(i) === i, x = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)), E = p || (y || !l ? [wt(i)] : zo(i));
      !p && v !== "none" && E.push(...Bo(i, l, v, x));
      const $ = [i, ...E], C = await Ke(t, g), S = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && S.push(C[h]), d) {
        const M = Fo(o, c, x);
        S.push(C[M[0]], C[M[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: S
      }], !S.every((M) => M <= 0)) {
        var P, k;
        const M = (((P = a.flip) == null ? void 0 : P.index) || 0) + 1, X = $[M];
        if (X)
          return {
            data: {
              index: M,
              overflows: D
            },
            reset: {
              placement: X
            }
          };
        let F = (k = D.filter((L) => L.overflows[0] <= 0).sort((L, Y) => L.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!F)
          switch (m) {
            case "bestFit": {
              var H;
              const L = (H = D.map((Y) => [Y.placement, Y.overflows.filter((V) => V > 0).reduce((V, q) => V + q, 0)]).sort((Y, V) => Y[1] - V[1])[0]) == null ? void 0 : H[0];
              L && (F = L);
              break;
            }
            case "initialPlacement":
              F = i;
              break;
          }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function En(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xn(e) {
  return Ho.some((t) => e[t] >= 0);
}
const Yo = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = pe(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ke(t, {
            ...o,
            elementContext: "reference"
          }), c = En(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: xn(c)
            }
          };
        }
        case "escaped": {
          const a = await Ke(t, {
            ...o,
            altBoundary: !0
          }), c = En(a, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: xn(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Xo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), c = he(n), i = Fe(n), s = ze(n) === "y", u = ["left", "top"].includes(c) ? -1 : 1, f = a && s ? -1 : 1, d = pe(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), s ? {
    x: m * f,
    y: p * u
  } : {
    x: p * u,
    y: m * f
  };
}
const qo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: c,
        middlewareData: i
      } = t, s = await Xo(t, e);
      return c === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + s.x,
        y: a + s.y,
        data: {
          ...s,
          placement: c
        }
      };
    }
  };
}, Zo = function(e) {
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
        crossAxis: c = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x: h,
              y
            } = g;
            return {
              x: h,
              y
            };
          }
        },
        ...s
      } = pe(e, t), u = {
        x: n,
        y: r
      }, f = await Ke(t, s), d = ze(he(o)), p = rn(d);
      let m = u[p], v = u[d];
      if (a) {
        const g = p === "y" ? "top" : "left", h = p === "y" ? "bottom" : "right", y = m + f[g], x = m - f[h];
        m = Ut(y, m, x);
      }
      if (c) {
        const g = d === "y" ? "top" : "left", h = d === "y" ? "bottom" : "right", y = v + f[g], x = v - f[h];
        v = Ut(y, v, x);
      }
      const l = i.fn({
        ...t,
        [p]: m,
        [d]: v
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
}, Qo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: c
      } = t, {
        offset: i = 0,
        mainAxis: s = !0,
        crossAxis: u = !0
      } = pe(e, t), f = {
        x: n,
        y: r
      }, d = ze(o), p = rn(d);
      let m = f[p], v = f[d];
      const l = pe(i, t), g = typeof l == "number" ? {
        mainAxis: l,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...l
      };
      if (s) {
        const x = p === "y" ? "height" : "width", E = a.reference[p] - a.floating[x] + g.mainAxis, $ = a.reference[p] + a.reference[x] - g.mainAxis;
        m < E ? m = E : m > $ && (m = $);
      }
      if (u) {
        var h, y;
        const x = p === "y" ? "width" : "height", E = ["top", "left"].includes(he(o)), $ = a.reference[d] - a.floating[x] + (E && ((h = c.offset) == null ? void 0 : h[d]) || 0) + (E ? 0 : g.crossAxis), C = a.reference[d] + a.reference[x] + (E ? 0 : ((y = c.offset) == null ? void 0 : y[d]) || 0) - (E ? g.crossAxis : 0);
        v < $ ? v = $ : v > C && (v = C);
      }
      return {
        [p]: m,
        [d]: v
      };
    }
  };
}, Jo = function(e) {
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
        apply: c = () => {
        },
        ...i
      } = pe(e, t), s = await Ke(t, i), u = he(n), f = Fe(n), d = ze(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let v, l;
      u === "top" || u === "bottom" ? (v = u, l = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (l = u, v = f === "end" ? "top" : "bottom");
      const g = m - s[v], h = p - s[l], y = !t.middlewareData.shift;
      let x = g, E = h;
      if (d) {
        const C = p - s.left - s.right;
        E = f || y ? xe(h, C) : C;
      } else {
        const C = m - s.top - s.bottom;
        x = f || y ? xe(g, C) : C;
      }
      if (y && !f) {
        const C = ee(s.left, 0), S = ee(s.right, 0), D = ee(s.top, 0), P = ee(s.bottom, 0);
        d ? E = p - 2 * (C !== 0 || S !== 0 ? C + S : ee(s.left, s.right)) : x = m - 2 * (D !== 0 || P !== 0 ? D + P : ee(s.top, s.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: x
      });
      const $ = await o.getDimensions(a.floating);
      return p !== $.width || m !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Se(e) {
  return sr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function be(e) {
  var t;
  return (t = (sr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sr(e) {
  return e instanceof Node || e instanceof te(e).Node;
}
function ge(e) {
  return e instanceof Element || e instanceof te(e).Element;
}
function ve(e) {
  return e instanceof HTMLElement || e instanceof te(e).HTMLElement;
}
function Cn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
function qe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = re(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ea(e) {
  return ["table", "td", "th"].includes(Se(e));
}
function cn(e) {
  const t = sn(), n = re(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ta(e) {
  let t = He(e);
  for (; ve(t) && !Ct(t); ) {
    if (cn(t))
      return t;
    t = He(t);
  }
  return null;
}
function sn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(e) {
  return ["html", "body", "#document"].includes(Se(e));
}
function re(e) {
  return te(e).getComputedStyle(e);
}
function St(e) {
  return ge(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function He(e) {
  if (Se(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Cn(e) && e.host || be(e);
  return Cn(t) ? t.host : t;
}
function lr(e) {
  const t = He(e);
  return Ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && qe(t) ? t : lr(t);
}
function Ge(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = lr(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), c = te(o);
  return a ? t.concat(c, c.visualViewport || [], qe(o) ? o : [], c.frameElement && n ? Ge(c.frameElement) : []) : t.concat(o, Ge(o, [], n));
}
function ur(e) {
  const t = re(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ve(e), a = o ? e.offsetWidth : n, c = o ? e.offsetHeight : r, i = yt(n) !== a || yt(r) !== c;
  return i && (n = a, r = c), {
    width: n,
    height: r,
    $: i
  };
}
function ln(e) {
  return ge(e) ? e : e.contextElement;
}
function Re(e) {
  const t = ln(e);
  if (!ve(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ur(t);
  let c = (a ? yt(n.width) : n.width) / r, i = (a ? yt(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: c,
    y: i
  };
}
const na = /* @__PURE__ */ Ce(0);
function dr(e) {
  const t = te(e);
  return !sn() || !t.visualViewport ? na : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ra(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Te(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ln(e);
  let c = Ce(1);
  t && (r ? ge(r) && (c = Re(r)) : c = Re(e));
  const i = ra(a, n, r) ? dr(a) : Ce(0);
  let s = (o.left + i.x) / c.x, u = (o.top + i.y) / c.y, f = o.width / c.x, d = o.height / c.y;
  if (a) {
    const p = te(a), m = r && ge(r) ? te(r) : r;
    let v = p, l = v.frameElement;
    for (; l && r && m !== v; ) {
      const g = Re(l), h = l.getBoundingClientRect(), y = re(l), x = h.left + (l.clientLeft + parseFloat(y.paddingLeft)) * g.x, E = h.top + (l.clientTop + parseFloat(y.paddingTop)) * g.y;
      s *= g.x, u *= g.y, f *= g.x, d *= g.y, s += x, u += E, v = te(l), l = v.frameElement;
    }
  }
  return $t({
    width: f,
    height: d,
    x: s,
    y: u
  });
}
const oa = [":popover-open", ":modal"];
function fr(e) {
  return oa.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function aa(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", c = be(r), i = t ? fr(t.floating) : !1;
  if (r === c || i && a)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ce(1);
  const f = Ce(0), d = ve(r);
  if ((d || !d && !a) && ((Se(r) !== "body" || qe(c)) && (s = St(r)), ve(r))) {
    const p = Te(r);
    u = Re(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - s.scrollLeft * u.x + f.x,
    y: n.y * u.y - s.scrollTop * u.y + f.y
  };
}
function ia(e) {
  return Array.from(e.getClientRects());
}
function mr(e) {
  return Te(be(e)).left + St(e).scrollLeft;
}
function ca(e) {
  const t = be(e), n = St(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + mr(e);
  const i = -n.scrollTop;
  return re(r).direction === "rtl" && (c += ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: c,
    y: i
  };
}
function sa(e, t) {
  const n = te(e), r = be(e), o = n.visualViewport;
  let a = r.clientWidth, c = r.clientHeight, i = 0, s = 0;
  if (o) {
    a = o.width, c = o.height;
    const u = sn();
    (!u || u && t === "fixed") && (i = o.offsetLeft, s = o.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: i,
    y: s
  };
}
function la(e, t) {
  const n = Te(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ve(e) ? Re(e) : Ce(1), c = e.clientWidth * a.x, i = e.clientHeight * a.y, s = o * a.x, u = r * a.y;
  return {
    width: c,
    height: i,
    x: s,
    y: u
  };
}
function Sn(e, t, n) {
  let r;
  if (t === "viewport")
    r = sa(e, n);
  else if (t === "document")
    r = ca(be(e));
  else if (ge(t))
    r = la(t, n);
  else {
    const o = dr(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return $t(r);
}
function vr(e, t) {
  const n = He(e);
  return n === t || !ge(n) || Ct(n) ? !1 : re(n).position === "fixed" || vr(n, t);
}
function ua(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ge(e, [], !1).filter((i) => ge(i) && Se(i) !== "body"), o = null;
  const a = re(e).position === "fixed";
  let c = a ? He(e) : e;
  for (; ge(c) && !Ct(c); ) {
    const i = re(c), s = cn(c);
    !s && i.position === "fixed" && (o = null), (a ? !s && !o : !s && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || qe(c) && !s && vr(e, c)) ? r = r.filter((f) => f !== c) : o = i, c = He(c);
  }
  return t.set(e, r), r;
}
function da(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const c = [...n === "clippingAncestors" ? ua(t, this._c) : [].concat(n), r], i = c[0], s = c.reduce((u, f) => {
    const d = Sn(t, f, o);
    return u.top = ee(d.top, u.top), u.right = xe(d.right, u.right), u.bottom = xe(d.bottom, u.bottom), u.left = ee(d.left, u.left), u;
  }, Sn(t, i, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function fa(e) {
  const {
    width: t,
    height: n
  } = ur(e);
  return {
    width: t,
    height: n
  };
}
function ma(e, t, n) {
  const r = ve(t), o = be(t), a = n === "fixed", c = Te(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = Ce(0);
  if (r || !r && !a)
    if ((Se(t) !== "body" || qe(o)) && (i = St(t)), r) {
      const d = Te(t, !0, a, t);
      s.x = d.x + t.clientLeft, s.y = d.y + t.clientTop;
    } else
      o && (s.x = mr(o));
  const u = c.left + i.scrollLeft - s.x, f = c.top + i.scrollTop - s.y;
  return {
    x: u,
    y: f,
    width: c.width,
    height: c.height
  };
}
function Tn(e, t) {
  return !ve(e) || re(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function pr(e, t) {
  const n = te(e);
  if (!ve(e) || fr(e))
    return n;
  let r = Tn(e, t);
  for (; r && ea(r) && re(r).position === "static"; )
    r = Tn(r, t);
  return r && (Se(r) === "html" || Se(r) === "body" && re(r).position === "static" && !cn(r)) ? n : r || ta(e) || n;
}
const va = async function(e) {
  const t = this.getOffsetParent || pr, n = this.getDimensions;
  return {
    reference: ma(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function pa(e) {
  return re(e).direction === "rtl";
}
const ha = {
  convertOffsetParentRelativeRectToViewportRelativeRect: aa,
  getDocumentElement: be,
  getClippingRect: da,
  getOffsetParent: pr,
  getElementRects: va,
  getClientRects: ia,
  getDimensions: fa,
  getScale: Re,
  isElement: ge,
  isRTL: pa
};
function ga(e, t) {
  let n = null, r;
  const o = be(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function c(i, s) {
    i === void 0 && (i = !1), s === void 0 && (s = 1), a();
    const {
      left: u,
      top: f,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !d || !p)
      return;
    const m = at(f), v = at(o.clientWidth - (u + d)), l = at(o.clientHeight - (f + p)), g = at(u), y = {
      rootMargin: -m + "px " + -v + "px " + -l + "px " + -g + "px",
      threshold: ee(0, xe(1, s)) || 1
    };
    let x = !0;
    function E($) {
      const C = $[0].intersectionRatio;
      if (C !== s) {
        if (!x)
          return c();
        C ? c(!1, C) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...y,
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, y);
    }
    n.observe(e);
  }
  return c(!0), a;
}
function ba(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = r, u = ln(e), f = o || a ? [...u ? Ge(u) : [], ...Ge(t)] : [];
  f.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), a && h.addEventListener("resize", n);
  });
  const d = u && i ? ga(u, n) : null;
  let p = -1, m = null;
  c && (m = new ResizeObserver((h) => {
    let [y] = h;
    y && y.target === u && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = m) == null || x.observe(t);
    })), n();
  }), u && !s && m.observe(u), m.observe(t));
  let v, l = s ? Te(e) : null;
  s && g();
  function g() {
    const h = Te(e);
    l && (h.x !== l.x || h.y !== l.y || h.width !== l.width || h.height !== l.height) && n(), l = h, v = requestAnimationFrame(g);
  }
  return n(), () => {
    var h;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), d == null || d(), (h = m) == null || h.disconnect(), m = null, s && cancelAnimationFrame(v);
  };
}
const ya = Zo, wa = jo, $a = Jo, Ea = Yo, Pn = Go, xa = Qo, Ca = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ha,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Ko(e, t, {
    ...o,
    platform: a
  });
}, Sa = (e) => {
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
      return r && t(r) ? r.current != null ? Pn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Pn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var dt = typeof document < "u" ? Xn : N;
function Et(e, t) {
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
        if (!Et(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Et(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dn(e, t) {
  const n = hr(e);
  return Math.round(t * n) / n;
}
function On(e) {
  const t = O.useRef(e);
  return dt(() => {
    t.current = e;
  }), t;
}
function Ta(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: c
    } = {},
    transform: i = !0,
    whileElementsMounted: s,
    open: u
  } = e, [f, d] = O.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = O.useState(r);
  Et(p, r) || m(r);
  const [v, l] = O.useState(null), [g, h] = O.useState(null), y = O.useCallback((V) => {
    V !== C.current && (C.current = V, l(V));
  }, []), x = O.useCallback((V) => {
    V !== S.current && (S.current = V, h(V));
  }, []), E = a || v, $ = c || g, C = O.useRef(null), S = O.useRef(null), D = O.useRef(f), P = s != null, k = On(s), H = On(o), M = O.useCallback(() => {
    if (!C.current || !S.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: p
    };
    H.current && (V.platform = H.current), Ca(C.current, S.current, V).then((q) => {
      const _ = {
        ...q,
        isPositioned: !0
      };
      X.current && !Et(D.current, _) && (D.current = _, vo.flushSync(() => {
        d(_);
      }));
    });
  }, [p, t, n, H]);
  dt(() => {
    u === !1 && D.current.isPositioned && (D.current.isPositioned = !1, d((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [u]);
  const X = O.useRef(!1);
  dt(() => (X.current = !0, () => {
    X.current = !1;
  }), []), dt(() => {
    if (E && (C.current = E), $ && (S.current = $), E && $) {
      if (k.current)
        return k.current(E, $, M);
      M();
    }
  }, [E, $, M, k, P]);
  const F = O.useMemo(() => ({
    reference: C,
    floating: S,
    setReference: y,
    setFloating: x
  }), [y, x]), L = O.useMemo(() => ({
    reference: E,
    floating: $
  }), [E, $]), Y = O.useMemo(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return V;
    const q = Dn(L.floating, f.x), _ = Dn(L.floating, f.y);
    return i ? {
      ...V,
      transform: "translate(" + q + "px, " + _ + "px)",
      ...hr(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: q,
      top: _
    };
  }, [n, i, L.floating, f.x, f.y]);
  return O.useMemo(() => ({
    ...f,
    update: M,
    refs: F,
    elements: L,
    floatingStyles: Y
  }), [f, M, F, L, Y]);
}
function gr(e) {
  const [t, n] = W(void 0);
  return ke(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let c, i;
        if ("borderBoxSize" in a) {
          const s = a.borderBoxSize, u = Array.isArray(s) ? s[0] : s;
          c = u.inlineSize, i = u.blockSize;
        } else
          c = e.offsetWidth, i = e.offsetHeight;
        n({
          width: c,
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
const br = "Popper", [yr, Tt] = Pe(br), [Pa, wr] = yr(br), Da = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = W(null);
  return /* @__PURE__ */ T(Pa, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Oa = "PopperAnchor", _a = /* @__PURE__ */ U((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = wr(Oa, n), c = I(null), i = Q(t, c);
  return N(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || c.current);
  }), r ? null : /* @__PURE__ */ T(ne.div, R({}, o, {
    ref: i
  }));
}), $r = "PopperContent", [Ia, sl] = yr($r), Na = /* @__PURE__ */ U((e, t) => {
  var n, r, o, a, c, i, s, u;
  const { __scopePopper: f, side: d = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: v = 0, arrowPadding: l = 0, avoidCollisions: g = !0, collisionBoundary: h = [], collisionPadding: y = 0, sticky: x = "partial", hideWhenDetached: E = !1, updatePositionStrategy: $ = "optimized", onPlaced: C, ...S } = e, D = wr($r, f), [P, k] = W(null), H = Q(
    t,
    (Ve) => k(Ve)
  ), [M, X] = W(null), F = gr(M), L = (n = F == null ? void 0 : F.width) !== null && n !== void 0 ? n : 0, Y = (r = F == null ? void 0 : F.height) !== null && r !== void 0 ? r : 0, V = d + (m !== "center" ? "-" + m : ""), q = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, _ = Array.isArray(h) ? h : [
    h
  ], K = _.length > 0, Z = {
    padding: q,
    boundary: _.filter(Aa),
    altBoundary: K
  }, { refs: oe, floatingStyles: ae, placement: ie, isPositioned: de, middlewareData: ce } = Ta({
    strategy: "fixed",
    placement: V,
    whileElementsMounted: (...Ve) => ba(...Ve, {
      animationFrame: $ === "always"
    }),
    elements: {
      reference: D.anchor
    },
    middleware: [
      qo({
        mainAxis: p + Y,
        alignmentAxis: v
      }),
      g && ya({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? xa() : void 0,
        ...Z
      }),
      g && wa({
        ...Z
      }),
      $a({
        ...Z,
        apply: ({ elements: Ve, rects: gn, availableWidth: io, availableHeight: co }) => {
          const { width: so, height: lo } = gn.reference, ot = Ve.floating.style;
          ot.setProperty("--radix-popper-available-width", `${io}px`), ot.setProperty("--radix-popper-available-height", `${co}px`), ot.setProperty("--radix-popper-anchor-width", `${so}px`), ot.setProperty("--radix-popper-anchor-height", `${lo}px`);
        }
      }),
      M && Sa({
        element: M,
        padding: l
      }),
      Ra({
        arrowWidth: L,
        arrowHeight: Y
      }),
      E && Ea({
        strategy: "referenceHidden",
        ...Z
      })
    ]
  }), [ye, nt] = Er(ie), J = me(C);
  ke(() => {
    de && (J == null || J());
  }, [
    de,
    J
  ]);
  const rt = (o = ce.arrow) === null || o === void 0 ? void 0 : o.x, no = (a = ce.arrow) === null || a === void 0 ? void 0 : a.y, ro = ((c = ce.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [oo, ao] = W();
  return ke(() => {
    P && ao(window.getComputedStyle(P).zIndex);
  }, [
    P
  ]), /* @__PURE__ */ T("div", {
    ref: oe.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ae,
      transform: de ? ae.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: oo,
      ["--radix-popper-transform-origin"]: [
        (i = ce.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (s = ce.transformOrigin) === null || s === void 0 ? void 0 : s.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ T(Ia, {
    scope: f,
    placedSide: ye,
    onArrowChange: X,
    arrowX: rt,
    arrowY: no,
    shouldHideArrow: ro
  }, /* @__PURE__ */ T(ne.div, R({
    "data-side": ye,
    "data-align": nt
  }, S, {
    ref: H,
    style: {
      ...S.style,
      animation: de ? void 0 : "none",
      opacity: (u = ce.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
    }
  }))));
});
function Aa(e) {
  return e !== null;
}
const Ra = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, c;
    const { placement: i, rects: s, middlewareData: u } = t, d = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [v, l] = Er(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[l], h = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (c = u.arrow) === null || c === void 0 ? void 0 : c.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let x = "", E = "";
    return v === "bottom" ? (x = d ? g : `${h}px`, E = `${-m}px`) : v === "top" ? (x = d ? g : `${h}px`, E = `${s.floating.height + m}px`) : v === "right" ? (x = `${-m}px`, E = d ? g : `${y}px`) : v === "left" && (x = `${s.floating.width + m}px`, E = d ? g : `${y}px`), {
      data: {
        x,
        y: E
      }
    };
  }
});
function Er(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const xr = Da, Cr = _a, Sr = Na, Tr = /* @__PURE__ */ U((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ po.createPortal(/* @__PURE__ */ T(ne.div, R({}, o, {
    ref: t
  })), r) : null;
});
function Ma(e, t) {
  return uo((n, r) => {
    const o = t[n][r];
    return o != null ? o : n;
  }, e);
}
const Ze = (e) => {
  const { present: t, children: n } = e, r = ka(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ae.only(n), a = Q(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ tn(o, {
    ref: a
  }) : null;
};
Ze.displayName = "Presence";
function ka(e) {
  const [t, n] = W(), r = I({}), o = I(e), a = I("none"), c = e ? "mounted" : "unmounted", [i, s] = Ma(c, {
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
  return N(() => {
    const u = it(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [
    i
  ]), ke(() => {
    const u = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, m = it(u);
      e ? s("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(f && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    s
  ]), ke(() => {
    if (t) {
      const u = (d) => {
        const m = it(r.current).includes(d.animationName);
        d.target === t && m && Zn(
          () => s("ANIMATION_END")
        );
      }, f = (d) => {
        d.target === t && (a.current = it(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      s("ANIMATION_END");
  }, [
    t,
    s
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: A((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function it(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Pt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Ha({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : r, i = me(n), s = A((u) => {
    if (a) {
      const d = typeof u == "function" ? u(e) : u;
      d !== e && i(d);
    } else
      o(u);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    c,
    s
  ];
}
function Ha({ defaultProp: e, onChange: t }) {
  const n = W(e), [r] = n, o = I(r), a = me(t);
  return N(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Wa = /* @__PURE__ */ U((e, t) => /* @__PURE__ */ T(ne.span, R({}, e, {
  ref: t,
  style: {
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
}))), La = Wa, [Dt, ll] = Pe("Tooltip", [
  Tt
]), un = Tt(), Fa = "TooltipProvider", za = 700, Gt = "tooltip.open", [Va, dn] = Dt(Fa), Ba = (e) => {
  const { __scopeTooltip: t, delayDuration: n = za, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [c, i] = W(!0), s = I(!1), u = I(0);
  return N(() => {
    const f = u.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ T(Va, {
    scope: t,
    isOpenDelayed: c,
    delayDuration: n,
    onOpen: A(() => {
      window.clearTimeout(u.current), i(!1);
    }, []),
    onClose: A(() => {
      window.clearTimeout(u.current), u.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: s,
    onPointerInTransitChange: A((f) => {
      s.current = f;
    }, []),
    disableHoverableContent: o
  }, a);
}, fn = "Tooltip", [Ua, Qe] = Dt(fn), Ka = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: c, delayDuration: i } = e, s = dn(fn, e.__scopeTooltip), u = un(t), [f, d] = W(null), p = bt(), m = I(0), v = c != null ? c : s.disableHoverableContent, l = i != null ? i : s.delayDuration, g = I(!1), [h = !1, y] = Pt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (s.onOpen(), document.dispatchEvent(new CustomEvent(Gt))) : s.onClose(), a == null || a(S);
    }
  }), x = se(() => h ? g.current ? "delayed-open" : "instant-open" : "closed", [
    h
  ]), E = A(() => {
    window.clearTimeout(m.current), g.current = !1, y(!0);
  }, [
    y
  ]), $ = A(() => {
    window.clearTimeout(m.current), y(!1);
  }, [
    y
  ]), C = A(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, l);
  }, [
    l,
    y
  ]);
  return N(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ T(xr, u, /* @__PURE__ */ T(Ua, {
    scope: t,
    contentId: p,
    open: h,
    stateAttribute: x,
    trigger: f,
    onTriggerChange: d,
    onTriggerEnter: A(() => {
      s.isOpenDelayed ? C() : E();
    }, [
      s.isOpenDelayed,
      C,
      E
    ]),
    onTriggerLeave: A(() => {
      v ? $() : window.clearTimeout(m.current);
    }, [
      $,
      v
    ]),
    onOpen: E,
    onClose: $,
    disableHoverableContent: v
  }, n));
}, _n = "TooltipTrigger", Ga = /* @__PURE__ */ U((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Qe(_n, n), a = dn(_n, n), c = un(n), i = I(null), s = Q(t, i, o.onTriggerChange), u = I(!1), f = I(!1), d = A(
    () => u.current = !1,
    []
  );
  return N(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ T(Cr, R({
    asChild: !0
  }, c), /* @__PURE__ */ T(ne.button, R({
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: s,
    onPointerMove: z(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
    }),
    onPointerLeave: z(e.onPointerLeave, () => {
      o.onTriggerLeave(), f.current = !1;
    }),
    onPointerDown: z(e.onPointerDown, () => {
      u.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: z(e.onFocus, () => {
      u.current || o.onOpen();
    }),
    onBlur: z(e.onBlur, o.onClose),
    onClick: z(e.onClick, o.onClose)
  })));
}), Pr = "TooltipPortal", [ja, Ya] = Dt(Pr, {
  forceMount: void 0
}), Xa = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = Qe(Pr, t);
  return /* @__PURE__ */ T(ja, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ T(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ T(Tr, {
    asChild: !0,
    container: o
  }, r)));
}, je = "TooltipContent", qa = /* @__PURE__ */ U((e, t) => {
  const n = Ya(je, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, c = Qe(je, e.__scopeTooltip);
  return /* @__PURE__ */ T(Ze, {
    present: r || c.open
  }, c.disableHoverableContent ? /* @__PURE__ */ T(Dr, R({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ T(Za, R({
    side: o
  }, a, {
    ref: t
  })));
}), Za = /* @__PURE__ */ U((e, t) => {
  const n = Qe(je, e.__scopeTooltip), r = dn(je, e.__scopeTooltip), o = I(null), a = Q(t, o), [c, i] = W(null), { trigger: s, onClose: u } = n, f = o.current, { onPointerInTransitChange: d } = r, p = A(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = A((v, l) => {
    const g = v.currentTarget, h = {
      x: v.clientX,
      y: v.clientY
    }, y = Ja(h, g.getBoundingClientRect()), x = ei(h, y), E = ti(l.getBoundingClientRect()), $ = ri([
      ...x,
      ...E
    ]);
    i($), d(!0);
  }, [
    d
  ]);
  return N(() => () => p(), [
    p
  ]), N(() => {
    if (s && f) {
      const v = (g) => m(g, f), l = (g) => m(g, s);
      return s.addEventListener("pointerleave", v), f.addEventListener("pointerleave", l), () => {
        s.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", l);
      };
    }
  }, [
    s,
    f,
    m,
    p
  ]), N(() => {
    if (c) {
      const v = (l) => {
        const g = l.target, h = {
          x: l.clientX,
          y: l.clientY
        }, y = (s == null ? void 0 : s.contains(g)) || (f == null ? void 0 : f.contains(g)), x = !ni(h, c);
        y ? p() : x && (p(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    s,
    f,
    c,
    u,
    p
  ]), /* @__PURE__ */ T(Dr, R({}, e, {
    ref: a
  }));
}), [Qa, ul] = Dt(fn, {
  isInside: !1
}), Dr = /* @__PURE__ */ U((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: c, ...i } = e, s = Qe(je, n), u = un(n), { onClose: f } = s;
  return N(() => (document.addEventListener(Gt, f), () => document.removeEventListener(Gt, f)), [
    f
  ]), N(() => {
    if (s.trigger) {
      const d = (p) => {
        const m = p.target;
        m != null && m.contains(s.trigger) && f();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    s.trigger,
    f
  ]), /* @__PURE__ */ T(ar, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: c,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: f
  }, /* @__PURE__ */ T(Sr, R({
    "data-state": s.stateAttribute
  }, u, i, {
    ref: t,
    style: {
      ...i.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ T(rr, null, r), /* @__PURE__ */ T(Qa, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ T(La, {
    id: s.contentId,
    role: "tooltip"
  }, o || r))));
});
function Ja(e, t) {
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
function ei(e, t, n = 5) {
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
function ti(e) {
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
function ni(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, c = t.length - 1; a < t.length; c = a++) {
    const i = t[a].x, s = t[a].y, u = t[c].x, f = t[c].y;
    s > r != f > r && n < (u - i) * (r - s) / (f - s) + i && (o = !o);
  }
  return o;
}
function ri(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), oi(t);
}
function oi(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], c = t[t.length - 2];
      if ((a.x - c.x) * (o.y - c.y) >= (a.y - c.y) * (o.x - c.x))
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
      const a = n[n.length - 1], c = n[n.length - 2];
      if ((a.x - c.x) * (o.y - c.y) >= (a.y - c.y) * (o.x - c.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const ai = Ba, ii = Ka, ci = Ga, si = Xa, li = qa, Je = ({ text: e, children: t }) => /* @__PURE__ */ b.createElement(ai, null, /* @__PURE__ */ b.createElement(ii, { delayDuration: 0 }, /* @__PURE__ */ b.createElement(ci, { className: "p-0 m-0", tabIndex: -1 }, t), /* @__PURE__ */ b.createElement(si, null, /* @__PURE__ */ b.createElement(li, { className: "p-2 bg-paper z-20 shadow border rounded max-w-xs" }, e)))), ue = ({ children: e, subChildren: t, dividerPositionX: n = 0, id: r, name: o, information: a, minWidth: c, nameHasError: i, nameHasWarning: s, onDoubleClick: u }) => {
  const { inputTextError: f, inputTextWarning: d, inputTextDefault: p } = le(), [m, v] = j(Eo), l = I(null), [g, h] = W({ width: 200 });
  return N(() => {
    if (l.current) {
      h({ width: l.current.offsetWidth || 0 });
      const y = l.current, x = () => h({ width: l.current.offsetWidth || 0 });
      return y.addEventListener("resizer", x), () => y.removeEventListener("resizer", x);
    }
  }, []), /* @__PURE__ */ b.createElement("div", { className: "flex-1 flex flex-col" }, /* @__PURE__ */ b.createElement("div", { ref: l, className: "flex px-0 items-center justify-between relative" }, /* @__PURE__ */ b.createElement(
    "label",
    {
      htmlFor: r,
      onDoubleClick: u,
      className: "flex-1 overflow-hidden overflow-ellipsis inline-block whitespace-nowrap",
      style: {
        width: g.width - m,
        textDecoration: i ? f : s ? d : p
      }
    },
    /* @__PURE__ */ b.createElement("div", { className: "flex items-center gap-2" }, o, a !== "" && a !== void 0 && /* @__PURE__ */ b.createElement(Je, { text: a }, /* @__PURE__ */ b.createElement(Ye, { size: 15 })))
  ), /* @__PURE__ */ b.createElement(
    xo,
    {
      oldWidth: m,
      onChange: v,
      onResizeEnd: (y) => gt.setInputsWidth(y)
    }
  ), /* @__PURE__ */ b.createElement("div", { style: { width: m ? `${m - n}px` : "70%", minWidth: c, maxWidth: "90%" } }, e(r))), t == null ? void 0 : t(`${o}_${r}`));
}, ui = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), { onGetValueSuggestions: i } = We(), s = w(e.editValueDisabled), u = w(e.valueHasWarning), f = w(e.nameHasWarning), d = w(e.valueHasError), p = w(e.nameHasError), m = w(e.information), [v, l] = j(e.value), g = w(e.name), h = w(e.id), [y, x] = W(i(e));
  return N(() => {
    x(i(e));
  }, [e.propertyType.value, e.type.value, e.id.value, i]), /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: h || "",
      name: g || "",
      information: m,
      nameHasError: p,
      nameHasWarning: f
    },
    (E) => /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
      "input",
      {
        onChange: ($) => l($.currentTarget.value),
        className: "w-full bg-background py-0.5 disabled:opacity-50",
        disabled: s,
        list: "prop_data_id_" + h,
        autoComplete: "off",
        value: v,
        id: E,
        style: {
          textDecoration: d ? o : u ? a : c,
          border: d ? t : u ? n : r
        }
      }
    ), y && /* @__PURE__ */ b.createElement("datalist", { id: "prop_data_id_" + h }, y.map(($, C) => /* @__PURE__ */ b.createElement("option", { key: C, value: $.value.value }))))
  );
};
function Or(e) {
  const t = e + "CollectionProvider", [n, r] = Pe(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), c = (m) => {
    const { scope: v, children: l } = m, g = b.useRef(null), h = b.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ b.createElement(o, {
      scope: v,
      itemMap: h,
      collectionRef: g
    }, l);
  }, i = e + "CollectionSlot", s = /* @__PURE__ */ b.forwardRef((m, v) => {
    const { scope: l, children: g } = m, h = a(i, l), y = Q(v, h.collectionRef);
    return /* @__PURE__ */ b.createElement(Ue, {
      ref: y
    }, g);
  }), u = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ b.forwardRef((m, v) => {
    const { scope: l, children: g, ...h } = m, y = b.useRef(null), x = Q(v, y), E = a(u, l);
    return b.useEffect(() => (E.itemMap.set(y, {
      ref: y,
      ...h
    }), () => void E.itemMap.delete(y))), /* @__PURE__ */ b.createElement(Ue, {
      [f]: "",
      ref: x
    }, g);
  });
  function p(m) {
    const v = a(e + "CollectionConsumer", m);
    return b.useCallback(() => {
      const g = v.collectionRef.current;
      if (!g)
        return [];
      const h = Array.from(g.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, $) => h.indexOf(E.ref.current) - h.indexOf($.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
    ]);
  }
  return [
    {
      Provider: c,
      Slot: s,
      ItemSlot: d
    },
    p,
    r
  ];
}
const di = /* @__PURE__ */ Be(void 0);
function _r(e) {
  const t = xt(di);
  return e || t || "ltr";
}
let Nt = 0;
function fi() {
  N(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : In()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : In()), Nt++, () => {
      Nt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Nt--;
    };
  }, []);
}
function In() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const At = "focusScope.autoFocusOnMount", Rt = "focusScope.autoFocusOnUnmount", Nn = {
  bubbles: !1,
  cancelable: !0
}, mi = /* @__PURE__ */ U((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...c } = e, [i, s] = W(null), u = me(o), f = me(a), d = I(null), p = Q(
    t,
    (l) => s(l)
  ), m = I({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  N(() => {
    if (r) {
      let l = function(x) {
        if (m.paused || !i)
          return;
        const E = x.target;
        i.contains(E) ? d.current = E : we(d.current, {
          select: !0
        });
      }, g = function(x) {
        if (m.paused || !i)
          return;
        const E = x.relatedTarget;
        E !== null && (i.contains(E) || we(d.current, {
          select: !0
        }));
      }, h = function(x) {
        if (document.activeElement === document.body)
          for (const $ of x)
            $.removedNodes.length > 0 && we(i);
      };
      document.addEventListener("focusin", l), document.addEventListener("focusout", g);
      const y = new MutationObserver(h);
      return i && y.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", l), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), N(() => {
    if (i) {
      Rn.add(m);
      const l = document.activeElement;
      if (!i.contains(l)) {
        const h = new CustomEvent(At, Nn);
        i.addEventListener(At, u), i.dispatchEvent(h), h.defaultPrevented || (vi(yi(Ir(i)), {
          select: !0
        }), document.activeElement === l && we(i));
      }
      return () => {
        i.removeEventListener(At, u), setTimeout(() => {
          const h = new CustomEvent(Rt, Nn);
          i.addEventListener(Rt, f), i.dispatchEvent(h), h.defaultPrevented || we(l != null ? l : document.body, {
            select: !0
          }), i.removeEventListener(Rt, f), Rn.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    u,
    f,
    m
  ]);
  const v = A((l) => {
    if (!n && !r || m.paused)
      return;
    const g = l.key === "Tab" && !l.altKey && !l.ctrlKey && !l.metaKey, h = document.activeElement;
    if (g && h) {
      const y = l.currentTarget, [x, E] = pi(y);
      x && E ? !l.shiftKey && h === E ? (l.preventDefault(), n && we(x, {
        select: !0
      })) : l.shiftKey && h === x && (l.preventDefault(), n && we(E, {
        select: !0
      })) : h === y && l.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ T(ne.div, R({
    tabIndex: -1
  }, c, {
    ref: p,
    onKeyDown: v
  }));
});
function vi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (we(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function pi(e) {
  const t = Ir(e), n = An(t, e), r = An(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Ir(e) {
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
function An(e, t) {
  for (const n of e)
    if (!hi(n, {
      upTo: t
    }))
      return n;
}
function hi(e, { upTo: t }) {
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
function gi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function we(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && gi(e) && t && e.select();
  }
}
const Rn = bi();
function bi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Mn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Mn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Mn(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function yi(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Mt = "rovingFocusGroup.onEntryFocus", wi = {
  bubbles: !1,
  cancelable: !0
}, mn = "RovingFocusGroup", [jt, Nr, $i] = Or(mn), [Ei, Ar] = Pe(mn, [
  $i
]), [xi, Ci] = Ei(mn), Si = /* @__PURE__ */ U((e, t) => /* @__PURE__ */ T(jt.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ T(jt.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ T(Ti, R({}, e, {
  ref: t
}))))), Ti = /* @__PURE__ */ U((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: c, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: s, onEntryFocus: u, ...f } = e, d = I(null), p = Q(t, d), m = _r(a), [v = null, l] = Pt({
    prop: c,
    defaultProp: i,
    onChange: s
  }), [g, h] = W(!1), y = me(u), x = Nr(n), E = I(!1), [$, C] = W(0);
  return N(() => {
    const S = d.current;
    if (S)
      return S.addEventListener(Mt, y), () => S.removeEventListener(Mt, y);
  }, [
    y
  ]), /* @__PURE__ */ T(xi, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: v,
    onItemFocus: A(
      (S) => l(S),
      [
        l
      ]
    ),
    onItemShiftTab: A(
      () => h(!0),
      []
    ),
    onFocusableItemAdd: A(
      () => C(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: A(
      () => C(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ T(ne.div, R({
    tabIndex: g || $ === 0 ? -1 : 0,
    "data-orientation": r
  }, f, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: z(e.onMouseDown, () => {
      E.current = !0;
    }),
    onFocus: z(e.onFocus, (S) => {
      const D = !E.current;
      if (S.target === S.currentTarget && D && !g) {
        const P = new CustomEvent(Mt, wi);
        if (S.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
          const k = x().filter(
            (L) => L.focusable
          ), H = k.find(
            (L) => L.active
          ), M = k.find(
            (L) => L.id === v
          ), F = [
            H,
            M,
            ...k
          ].filter(Boolean).map(
            (L) => L.ref.current
          );
          Rr(F);
        }
      }
      E.current = !1;
    }),
    onBlur: z(
      e.onBlur,
      () => h(!1)
    )
  })));
}), Pi = "RovingFocusGroupItem", Di = /* @__PURE__ */ U((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...c } = e, i = bt(), s = a || i, u = Ci(Pi, n), f = u.currentTabStopId === s, d = Nr(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = u;
  return N(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ T(jt.ItemSlot, {
    scope: n,
    id: s,
    focusable: r,
    active: o
  }, /* @__PURE__ */ T(ne.span, R({
    tabIndex: f ? 0 : -1,
    "data-orientation": u.orientation
  }, c, {
    ref: t,
    onMouseDown: z(e.onMouseDown, (v) => {
      r ? u.onItemFocus(s) : v.preventDefault();
    }),
    onFocus: z(
      e.onFocus,
      () => u.onItemFocus(s)
    ),
    onKeyDown: z(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        u.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const l = Ii(v, u.orientation, u.dir);
      if (l !== void 0) {
        v.preventDefault();
        let h = d().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (l === "last")
          h.reverse();
        else if (l === "prev" || l === "next") {
          l === "prev" && h.reverse();
          const y = h.indexOf(v.currentTarget);
          h = u.loop ? Ni(h, y + 1) : h.slice(y + 1);
        }
        setTimeout(
          () => Rr(h)
        );
      }
    })
  })));
}), Oi = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _i(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ii(e, t, n) {
  const r = _i(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Oi[r];
}
function Rr(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Ni(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ai = Si, Ri = Di;
var Mi = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oe = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), st = {}, kt = 0, Mr = function(e) {
  return e && (e.host || Mr(e.parentNode));
}, ki = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Mr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Hi = function(e, t, n, r) {
  var o = ki(t, Array.isArray(e) ? e : [e]);
  st[n] || (st[n] = /* @__PURE__ */ new WeakMap());
  var a = st[n], c = [], i = /* @__PURE__ */ new Set(), s = new Set(o), u = function(d) {
    !d || i.has(d) || (i.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var f = function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var m = p.getAttribute(r), v = m !== null && m !== "false", l = (Oe.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          Oe.set(p, l), a.set(p, g), c.push(p), l === 1 && v && ct.set(p, !0), g === 1 && p.setAttribute(n, "true"), v || p.setAttribute(r, "true");
        } catch (h) {
          console.error("aria-hidden: cannot operate on ", p, h);
        }
    });
  };
  return f(t), i.clear(), kt++, function() {
    c.forEach(function(d) {
      var p = Oe.get(d) - 1, m = a.get(d) - 1;
      Oe.set(d, p), a.set(d, m), p || (ct.has(d) || d.removeAttribute(r), ct.delete(d)), m || d.removeAttribute(n);
    }), kt--, kt || (Oe = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), st = {});
  };
}, Wi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Mi(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Hi(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, fe = function() {
  return fe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, fe.apply(this, arguments);
};
function kr(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Li(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ft = "right-scroll-bar-position", mt = "width-before-scroll-bar", Fi = "with-scroll-bars-hidden", zi = "--removed-body-scroll-bar-size";
function Ht(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vi(e, t) {
  var n = W(function() {
    return {
      value: e,
      callback: t,
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
var Bi = typeof window < "u" ? O.useLayoutEffect : O.useEffect, kn = /* @__PURE__ */ new WeakMap();
function Ui(e, t) {
  var n = Vi(t || null, function(r) {
    return e.forEach(function(o) {
      return Ht(o, r);
    });
  });
  return Bi(function() {
    var r = kn.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(i) {
        a.has(i) || Ht(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Ht(i, c);
      });
    }
    kn.set(n, e);
  }, [e]), n;
}
function Ki(e) {
  return e;
}
function Gi(e, t) {
  t === void 0 && (t = Ki);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, r);
      return n.push(c), function() {
        n = n.filter(function(i) {
          return i !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
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
      var c = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), c = n;
      }
      var s = function() {
        var f = c;
        c = [], f.forEach(a);
      }, u = function() {
        return Promise.resolve().then(s);
      };
      u(), n = {
        push: function(f) {
          c.push(f), u();
        },
        filter: function(f) {
          return c = c.filter(f), n;
        }
      };
    }
  };
  return o;
}
function ji(e) {
  e === void 0 && (e = {});
  var t = Gi(null);
  return t.options = fe({ async: !0, ssr: !1 }, e), t;
}
var Hr = function(e) {
  var t = e.sideCar, n = kr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return O.createElement(r, fe({}, n));
};
Hr.isSideCarExport = !0;
function Yi(e, t) {
  return e.useMedium(t), Hr;
}
var Wr = ji(), Wt = function() {
}, Ot = O.forwardRef(function(e, t) {
  var n = O.useRef(null), r = O.useState({
    onScrollCapture: Wt,
    onWheelCapture: Wt,
    onTouchMoveCapture: Wt
  }), o = r[0], a = r[1], c = e.forwardProps, i = e.children, s = e.className, u = e.removeScrollBar, f = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, v = e.inert, l = e.allowPinchZoom, g = e.as, h = g === void 0 ? "div" : g, y = kr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = p, E = Ui([n, t]), $ = fe(fe({}, y), o);
  return O.createElement(
    O.Fragment,
    null,
    f && O.createElement(x, { sideCar: Wr, removeScrollBar: u, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!l, lockRef: n }),
    c ? O.cloneElement(O.Children.only(i), fe(fe({}, $), { ref: E })) : O.createElement(h, fe({}, $, { className: s, ref: E }), i)
  );
});
Ot.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ot.classNames = {
  fullWidth: mt,
  zeroRight: ft
};
var Xi = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function qi() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Xi();
  return t && e.setAttribute("nonce", t), e;
}
function Zi(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Qi(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ji = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = qi()) && (Zi(t, n), Qi(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ec = function() {
  var e = Ji();
  return function(t, n) {
    O.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Lr = function() {
  var e = ec(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, tc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Lt = function(e) {
  return parseInt(e || "", 10) || 0;
}, nc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Lt(n), Lt(r), Lt(o)];
}, rc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return tc;
  var t = nc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, oc = Lr(), Me = "data-scroll-locked", ac = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Fi, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Me, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ft, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(mt, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ft, " .").concat(ft, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(mt, " .").concat(mt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Me, `] {
    `).concat(zi, ": ").concat(i, `px;
  }
`);
}, Hn = function() {
  var e = parseInt(document.body.getAttribute(Me) || "0", 10);
  return isFinite(e) ? e : 0;
}, ic = function() {
  O.useEffect(function() {
    return document.body.setAttribute(Me, (Hn() + 1).toString()), function() {
      var e = Hn() - 1;
      e <= 0 ? document.body.removeAttribute(Me) : document.body.setAttribute(Me, e.toString());
    };
  }, []);
}, cc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  ic();
  var a = O.useMemo(function() {
    return rc(o);
  }, [o]);
  return O.createElement(oc, { styles: ac(a, !t, o, n ? "" : "!important") });
}, Yt = !1;
if (typeof window < "u")
  try {
    var lt = Object.defineProperty({}, "passive", {
      get: function() {
        return Yt = !0, !0;
      }
    });
    window.addEventListener("test", lt, lt), window.removeEventListener("test", lt, lt);
  } catch {
    Yt = !1;
  }
var _e = Yt ? { passive: !1 } : !1, sc = function(e) {
  return e.tagName === "TEXTAREA";
}, Fr = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !sc(e) && n[t] === "visible");
}, lc = function(e) {
  return Fr(e, "overflowY");
}, uc = function(e) {
  return Fr(e, "overflowX");
}, Wn = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = zr(e, n);
    if (r) {
      var o = Vr(e, n), a = o[1], c = o[2];
      if (a > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, dc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, fc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, zr = function(e, t) {
  return e === "v" ? lc(t) : uc(t);
}, Vr = function(e, t) {
  return e === "v" ? dc(t) : fc(t);
}, mc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, vc = function(e, t, n, r, o) {
  var a = mc(e, window.getComputedStyle(t).direction), c = a * r, i = n.target, s = t.contains(i), u = !1, f = c > 0, d = 0, p = 0;
  do {
    var m = Vr(e, i), v = m[0], l = m[1], g = m[2], h = l - g - a * v;
    (v || h) && zr(e, i) && (d += h, p += v), i = i.parentNode;
  } while (!s && i !== document.body || s && (t.contains(i) || t === i));
  return (f && (o && d === 0 || !o && c > d) || !f && (o && p === 0 || !o && -c > p)) && (u = !0), u;
}, ut = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ln = function(e) {
  return [e.deltaX, e.deltaY];
}, Fn = function(e) {
  return e && "current" in e ? e.current : e;
}, pc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, hc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, gc = 0, Ie = [];
function bc(e) {
  var t = O.useRef([]), n = O.useRef([0, 0]), r = O.useRef(), o = O.useState(gc++)[0], a = O.useState(function() {
    return Lr();
  })[0], c = O.useRef(e);
  O.useEffect(function() {
    c.current = e;
  }, [e]), O.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var l = Li([e.lockRef.current], (e.shards || []).map(Fn), !0).filter(Boolean);
      return l.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), l.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = O.useCallback(function(l, g) {
    if ("touches" in l && l.touches.length === 2)
      return !c.current.allowPinchZoom;
    var h = ut(l), y = n.current, x = "deltaX" in l ? l.deltaX : y[0] - h[0], E = "deltaY" in l ? l.deltaY : y[1] - h[1], $, C = l.target, S = Math.abs(x) > Math.abs(E) ? "h" : "v";
    if ("touches" in l && S === "h" && C.type === "range")
      return !1;
    var D = Wn(S, C);
    if (!D)
      return !0;
    if (D ? $ = S : ($ = S === "v" ? "h" : "v", D = Wn(S, C)), !D)
      return !1;
    if (!r.current && "changedTouches" in l && (x || E) && (r.current = $), !$)
      return !0;
    var P = r.current || $;
    return vc(P, g, l, P === "h" ? x : E, !0);
  }, []), s = O.useCallback(function(l) {
    var g = l;
    if (!(!Ie.length || Ie[Ie.length - 1] !== a)) {
      var h = "deltaY" in g ? Ln(g) : ut(g), y = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && pc($.delta, h);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (c.current.shards || []).map(Fn).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), E = x.length > 0 ? i(g, x[0]) : !c.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = O.useCallback(function(l, g, h, y) {
    var x = { name: l, delta: g, target: h, should: y };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== x;
      });
    }, 1);
  }, []), f = O.useCallback(function(l) {
    n.current = ut(l), r.current = void 0;
  }, []), d = O.useCallback(function(l) {
    u(l.type, Ln(l), l.target, i(l, e.lockRef.current));
  }, []), p = O.useCallback(function(l) {
    u(l.type, ut(l), l.target, i(l, e.lockRef.current));
  }, []);
  O.useEffect(function() {
    return Ie.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", s, _e), document.addEventListener("touchmove", s, _e), document.addEventListener("touchstart", f, _e), function() {
      Ie = Ie.filter(function(l) {
        return l !== a;
      }), document.removeEventListener("wheel", s, _e), document.removeEventListener("touchmove", s, _e), document.removeEventListener("touchstart", f, _e);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return O.createElement(
    O.Fragment,
    null,
    v ? O.createElement(a, { styles: hc(o) }) : null,
    m ? O.createElement(cc, { gapMode: "margin" }) : null
  );
}
const yc = Yi(Wr, bc);
var Br = O.forwardRef(function(e, t) {
  return O.createElement(Ot, fe({}, e, { ref: t, sideCar: yc }));
});
Br.classNames = Ot.classNames;
const wc = Br, $c = [
  "Enter",
  " "
], Ec = [
  "ArrowDown",
  "PageUp",
  "Home"
], Ur = [
  "ArrowUp",
  "PageDown",
  "End"
], xc = [
  ...Ec,
  ...Ur
], _t = "Menu", [Xt, Cc, Sc] = Or(_t), [De, Kr] = Pe(_t, [
  Sc,
  Tt,
  Ar
]), vn = Tt(), Gr = Ar(), [Tc, et] = De(_t), [Pc, pn] = De(_t), Dc = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: c = !0 } = e, i = vn(t), [s, u] = W(null), f = I(!1), d = me(a), p = _r(o);
  return N(() => {
    const m = () => {
      f.current = !0, document.addEventListener("pointerdown", v, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", v, {
        capture: !0,
        once: !0
      });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", m, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", m, {
        capture: !0
      }), document.removeEventListener("pointerdown", v, {
        capture: !0
      }), document.removeEventListener("pointermove", v, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ T(xr, i, /* @__PURE__ */ T(Tc, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: s,
    onContentChange: u
  }, /* @__PURE__ */ T(Pc, {
    scope: t,
    onClose: A(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: f,
    dir: p,
    modal: c
  }, r)));
}, Oc = /* @__PURE__ */ U((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = vn(n);
  return /* @__PURE__ */ T(Cr, R({}, o, r, {
    ref: t
  }));
}), jr = "MenuPortal", [_c, Ic] = De(jr, {
  forceMount: void 0
}), Nc = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = et(jr, t);
  return /* @__PURE__ */ T(_c, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ T(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ T(Tr, {
    asChild: !0,
    container: o
  }, r)));
}, Ee = "MenuContent", [Ac, Yr] = De(Ee), Rc = /* @__PURE__ */ U((e, t) => {
  const n = Ic(Ee, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = et(Ee, e.__scopeMenu), c = pn(Ee, e.__scopeMenu);
  return /* @__PURE__ */ T(Xt.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ T(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ T(Xt.Slot, {
    scope: e.__scopeMenu
  }, c.modal ? /* @__PURE__ */ T(Mc, R({}, o, {
    ref: t
  })) : /* @__PURE__ */ T(kc, R({}, o, {
    ref: t
  })))));
}), Mc = /* @__PURE__ */ U((e, t) => {
  const n = et(Ee, e.__scopeMenu), r = I(null), o = Q(t, r);
  return N(() => {
    const a = r.current;
    if (a)
      return Wi(a);
  }, []), /* @__PURE__ */ T(Xr, R({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: z(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), kc = /* @__PURE__ */ U((e, t) => {
  const n = et(Ee, e.__scopeMenu);
  return /* @__PURE__ */ T(Xr, R({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Xr = /* @__PURE__ */ U((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: c, disableOutsidePointerEvents: i, onEntryFocus: s, onEscapeKeyDown: u, onPointerDownOutside: f, onFocusOutside: d, onInteractOutside: p, onDismiss: m, disableOutsideScroll: v, ...l } = e, g = et(Ee, n), h = pn(Ee, n), y = vn(n), x = Gr(n), E = Cc(n), [$, C] = W(null), S = I(null), D = Q(t, S, g.onContentChange), P = I(0), k = I(""), H = I(0), M = I(null), X = I("right"), F = I(0), L = v ? wc : en, Y = v ? {
    as: Ue,
    allowPinchZoom: !0
  } : void 0, V = (_) => {
    var K, Z;
    const oe = k.current + _, ae = E().filter(
      (J) => !J.disabled
    ), ie = document.activeElement, de = (K = ae.find(
      (J) => J.ref.current === ie
    )) === null || K === void 0 ? void 0 : K.textValue, ce = ae.map(
      (J) => J.textValue
    ), ye = Kc(ce, oe, de), nt = (Z = ae.find(
      (J) => J.textValue === ye
    )) === null || Z === void 0 ? void 0 : Z.ref.current;
    (function J(rt) {
      k.current = rt, window.clearTimeout(P.current), rt !== "" && (P.current = window.setTimeout(
        () => J(""),
        1e3
      ));
    })(oe), nt && setTimeout(
      () => nt.focus()
    );
  };
  N(() => () => window.clearTimeout(P.current), []), fi();
  const q = A((_) => {
    var K, Z;
    return X.current === ((K = M.current) === null || K === void 0 ? void 0 : K.side) && jc(_, (Z = M.current) === null || Z === void 0 ? void 0 : Z.area);
  }, []);
  return /* @__PURE__ */ T(Ac, {
    scope: n,
    searchRef: k,
    onItemEnter: A((_) => {
      q(_) && _.preventDefault();
    }, [
      q
    ]),
    onItemLeave: A((_) => {
      var K;
      q(_) || ((K = S.current) === null || K === void 0 || K.focus(), C(null));
    }, [
      q
    ]),
    onTriggerLeave: A((_) => {
      q(_) && _.preventDefault();
    }, [
      q
    ]),
    pointerGraceTimerRef: H,
    onPointerGraceIntentChange: A((_) => {
      M.current = _;
    }, [])
  }, /* @__PURE__ */ T(L, Y, /* @__PURE__ */ T(mi, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: z(a, (_) => {
      var K;
      _.preventDefault(), (K = S.current) === null || K === void 0 || K.focus();
    }),
    onUnmountAutoFocus: c
  }, /* @__PURE__ */ T(ar, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: u,
    onPointerDownOutside: f,
    onFocusOutside: d,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ T(Ai, R({
    asChild: !0
  }, x, {
    dir: h.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: $,
    onCurrentTabStopIdChange: C,
    onEntryFocus: z(s, (_) => {
      h.isUsingKeyboardRef.current || _.preventDefault();
    })
  }), /* @__PURE__ */ T(Sr, R({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Vc(g.open),
    "data-radix-menu-content": "",
    dir: h.dir
  }, y, l, {
    ref: D,
    style: {
      outline: "none",
      ...l.style
    },
    onKeyDown: z(l.onKeyDown, (_) => {
      const Z = _.target.closest("[data-radix-menu-content]") === _.currentTarget, oe = _.ctrlKey || _.altKey || _.metaKey, ae = _.key.length === 1;
      Z && (_.key === "Tab" && _.preventDefault(), !oe && ae && V(_.key));
      const ie = S.current;
      if (_.target !== ie || !xc.includes(_.key))
        return;
      _.preventDefault();
      const ce = E().filter(
        (ye) => !ye.disabled
      ).map(
        (ye) => ye.ref.current
      );
      Ur.includes(_.key) && ce.reverse(), Bc(ce);
    }),
    onBlur: z(e.onBlur, (_) => {
      _.currentTarget.contains(_.target) || (window.clearTimeout(P.current), k.current = "");
    }),
    onPointerMove: z(e.onPointerMove, Zt((_) => {
      const K = _.target, Z = F.current !== _.clientX;
      if (_.currentTarget.contains(K) && Z) {
        const oe = _.clientX > F.current ? "right" : "left";
        X.current = oe, F.current = _.clientX;
      }
    }))
  })))))));
}), qt = "MenuItem", zn = "menu.itemSelect", Hc = /* @__PURE__ */ U((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = I(null), c = pn(qt, e.__scopeMenu), i = Yr(qt, e.__scopeMenu), s = Q(t, a), u = I(!1), f = () => {
    const d = a.current;
    if (!n && d) {
      const p = new CustomEvent(zn, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        zn,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), or(d, p), p.defaultPrevented ? u.current = !1 : c.onClose();
    }
  };
  return /* @__PURE__ */ T(Wc, R({}, o, {
    ref: s,
    disabled: n,
    onClick: z(e.onClick, f),
    onPointerDown: (d) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, d), u.current = !0;
    },
    onPointerUp: z(e.onPointerUp, (d) => {
      var p;
      u.current || (p = d.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: z(e.onKeyDown, (d) => {
      const p = i.searchRef.current !== "";
      n || p && d.key === " " || $c.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), Wc = /* @__PURE__ */ U((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, c = Yr(qt, n), i = Gr(n), s = I(null), u = Q(t, s), [f, d] = W(!1), [p, m] = W("");
  return N(() => {
    const v = s.current;
    if (v) {
      var l;
      m(((l = v.textContent) !== null && l !== void 0 ? l : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ T(Xt.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o != null ? o : p
  }, /* @__PURE__ */ T(Ri, R({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ T(ne.div, R({
    role: "menuitem",
    "data-highlighted": f ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: u,
    onPointerMove: z(e.onPointerMove, Zt((v) => {
      r ? c.onItemLeave(v) : (c.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: z(e.onPointerLeave, Zt(
      (v) => c.onItemLeave(v)
    )),
    onFocus: z(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: z(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), Lc = "MenuRadioGroup";
De(Lc, {
  value: void 0,
  onValueChange: () => {
  }
});
const Fc = "MenuItemIndicator";
De(Fc, {
  checked: !1
});
const zc = "MenuSub";
De(zc);
function Vc(e) {
  return e ? "open" : "closed";
}
function Bc(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Uc(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function Kc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (u) => u === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let c = Uc(e, Math.max(a, 0));
  o.length === 1 && (c = c.filter(
    (u) => u !== n
  ));
  const s = c.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function Gc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, c = t.length - 1; a < t.length; c = a++) {
    const i = t[a].x, s = t[a].y, u = t[c].x, f = t[c].y;
    s > r != f > r && n < (u - i) * (r - s) / (f - s) + i && (o = !o);
  }
  return o;
}
function jc(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Gc(n, t);
}
function Zt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Yc = Dc, Xc = Oc, qc = Nc, Zc = Rc, Qc = Hc, qr = "DropdownMenu", [Jc, dl] = Pe(qr, [
  Kr
]), tt = Kr(), [es, Zr] = Jc(qr), ts = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: c, modal: i = !0 } = e, s = tt(t), u = I(null), [f = !1, d] = Pt({
    prop: o,
    defaultProp: a,
    onChange: c
  });
  return /* @__PURE__ */ T(es, {
    scope: t,
    triggerId: bt(),
    triggerRef: u,
    contentId: bt(),
    open: f,
    onOpenChange: d,
    onOpenToggle: A(
      () => d(
        (p) => !p
      ),
      [
        d
      ]
    ),
    modal: i
  }, /* @__PURE__ */ T(Yc, R({}, s, {
    open: f,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, ns = "DropdownMenuTrigger", rs = /* @__PURE__ */ U((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Zr(ns, n), c = tt(n);
  return /* @__PURE__ */ T(Xc, R({
    asChild: !0
  }, c), /* @__PURE__ */ T(ne.button, R({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: nn(t, a.triggerRef),
    onPointerDown: z(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: z(e.onKeyDown, (i) => {
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
}), os = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = tt(t);
  return /* @__PURE__ */ T(qc, R({}, r, n));
}, as = "DropdownMenuContent", is = /* @__PURE__ */ U((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Zr(as, n), a = tt(n), c = I(!1);
  return /* @__PURE__ */ T(Zc, R({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: z(e.onCloseAutoFocus, (i) => {
      var s;
      c.current || (s = o.triggerRef.current) === null || s === void 0 || s.focus(), c.current = !1, i.preventDefault();
    }),
    onInteractOutside: z(e.onInteractOutside, (i) => {
      const s = i.detail.originalEvent, u = s.button === 0 && s.ctrlKey === !0, f = s.button === 2 || u;
      (!o.modal || f) && (c.current = !0);
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
}), cs = /* @__PURE__ */ U((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = tt(n);
  return /* @__PURE__ */ T(Qc, R({}, o, r, {
    ref: t
  }));
}), ss = ts, ls = rs, us = os, ds = is, fs = cs;
function Vn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qt(e, t) {
  return Qt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Qt(e, t);
}
function ms(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Qt(e, t);
}
var Bn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function vs(e, t) {
  return !!(e === t || Bn(e) && Bn(t));
}
function ps(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!vs(e[n], t[n]))
      return !1;
  return !0;
}
function Ft(e, t) {
  t === void 0 && (t = ps);
  var n, r = [], o, a = !1;
  function c() {
    for (var i = [], s = 0; s < arguments.length; s++)
      i[s] = arguments[s];
    return a && n === this && t(i, r) || (o = e.apply(this, i), a = !0, n = this, r = i), o;
  }
  return c;
}
var hs = typeof performance == "object" && typeof performance.now == "function", Un = hs ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function Kn(e) {
  cancelAnimationFrame(e.id);
}
function gs(e, t) {
  var n = Un();
  function r() {
    Un() - n >= t ? e.call(null) : o.id = requestAnimationFrame(r);
  }
  var o = {
    id: requestAnimationFrame(r)
  };
  return o;
}
var zt = -1;
function Gn(e) {
  if (e === void 0 && (e = !1), zt === -1 || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), zt = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return zt;
}
var Ne = null;
function jn(e) {
  if (e === void 0 && (e = !1), Ne === null || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    var r = document.createElement("div"), o = r.style;
    return o.width = "100px", o.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? Ne = "positive-descending" : (t.scrollLeft = 1, t.scrollLeft === 0 ? Ne = "negative" : Ne = "positive-ascending"), document.body.removeChild(t), Ne;
  }
  return Ne;
}
process.env.NODE_ENV;
var bs = 150, ys = function(t, n) {
  return t;
}, vt = null, pt = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (vt = /* @__PURE__ */ new WeakSet(), pt = /* @__PURE__ */ new WeakSet());
function ws(e) {
  var t, n = e.getItemOffset, r = e.getEstimatedTotalSize, o = e.getItemSize, a = e.getOffsetForIndexAndAlignment, c = e.getStartIndexForOffset, i = e.getStopIndexForStartIndex, s = e.initInstanceProps, u = e.shouldResetStyleCacheOnItemSizeChange, f = e.validateProps;
  return t = /* @__PURE__ */ function(d) {
    ms(p, d);
    function p(v) {
      var l;
      return l = d.call(this, v) || this, l._instanceProps = s(l.props, Vn(l)), l._outerRef = void 0, l._resetIsScrollingTimeoutId = null, l.state = {
        instance: Vn(l),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof l.props.initialScrollOffset == "number" ? l.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, l._callOnItemsRendered = void 0, l._callOnItemsRendered = Ft(function(g, h, y, x) {
        return l.props.onItemsRendered({
          overscanStartIndex: g,
          overscanStopIndex: h,
          visibleStartIndex: y,
          visibleStopIndex: x
        });
      }), l._callOnScroll = void 0, l._callOnScroll = Ft(function(g, h, y) {
        return l.props.onScroll({
          scrollDirection: g,
          scrollOffset: h,
          scrollUpdateWasRequested: y
        });
      }), l._getItemStyle = void 0, l._getItemStyle = function(g) {
        var h = l.props, y = h.direction, x = h.itemSize, E = h.layout, $ = l._getItemStyleCache(u && x, u && E, u && y), C;
        if ($.hasOwnProperty(g))
          C = $[g];
        else {
          var S = n(l.props, g, l._instanceProps), D = o(l.props, g, l._instanceProps), P = y === "horizontal" || E === "horizontal", k = y === "rtl", H = P ? S : 0;
          $[g] = C = {
            position: "absolute",
            left: k ? void 0 : H,
            right: k ? H : void 0,
            top: P ? 0 : S,
            height: P ? "100%" : D,
            width: P ? D : "100%"
          };
        }
        return C;
      }, l._getItemStyleCache = void 0, l._getItemStyleCache = Ft(function(g, h, y) {
        return {};
      }), l._onScrollHorizontal = function(g) {
        var h = g.currentTarget, y = h.clientWidth, x = h.scrollLeft, E = h.scrollWidth;
        l.setState(function($) {
          if ($.scrollOffset === x)
            return null;
          var C = l.props.direction, S = x;
          if (C === "rtl")
            switch (jn()) {
              case "negative":
                S = -x;
                break;
              case "positive-descending":
                S = E - y - x;
                break;
            }
          return S = Math.max(0, Math.min(S, E - y)), {
            isScrolling: !0,
            scrollDirection: $.scrollOffset < S ? "forward" : "backward",
            scrollOffset: S,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._onScrollVertical = function(g) {
        var h = g.currentTarget, y = h.clientHeight, x = h.scrollHeight, E = h.scrollTop;
        l.setState(function($) {
          if ($.scrollOffset === E)
            return null;
          var C = Math.max(0, Math.min(E, x - y));
          return {
            isScrolling: !0,
            scrollDirection: $.scrollOffset < C ? "forward" : "backward",
            scrollOffset: C,
            scrollUpdateWasRequested: !1
          };
        }, l._resetIsScrollingDebounced);
      }, l._outerRefSetter = function(g) {
        var h = l.props.outerRef;
        l._outerRef = g, typeof h == "function" ? h(g) : h != null && typeof h == "object" && h.hasOwnProperty("current") && (h.current = g);
      }, l._resetIsScrollingDebounced = function() {
        l._resetIsScrollingTimeoutId !== null && Kn(l._resetIsScrollingTimeoutId), l._resetIsScrollingTimeoutId = gs(l._resetIsScrolling, bs);
      }, l._resetIsScrolling = function() {
        l._resetIsScrollingTimeoutId = null, l.setState({
          isScrolling: !1
        }, function() {
          l._getItemStyleCache(-1, null);
        });
      }, l;
    }
    p.getDerivedStateFromProps = function(l, g) {
      return $s(l, g), f(l), null;
    };
    var m = p.prototype;
    return m.scrollTo = function(l) {
      l = Math.max(0, l), this.setState(function(g) {
        return g.scrollOffset === l ? null : {
          scrollDirection: g.scrollOffset < l ? "forward" : "backward",
          scrollOffset: l,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, m.scrollToItem = function(l, g) {
      g === void 0 && (g = "auto");
      var h = this.props, y = h.itemCount, x = h.layout, E = this.state.scrollOffset;
      l = Math.max(0, Math.min(l, y - 1));
      var $ = 0;
      if (this._outerRef) {
        var C = this._outerRef;
        x === "vertical" ? $ = C.scrollWidth > C.clientWidth ? Gn() : 0 : $ = C.scrollHeight > C.clientHeight ? Gn() : 0;
      }
      this.scrollTo(a(this.props, l, g, E, this._instanceProps, $));
    }, m.componentDidMount = function() {
      var l = this.props, g = l.direction, h = l.initialScrollOffset, y = l.layout;
      if (typeof h == "number" && this._outerRef != null) {
        var x = this._outerRef;
        g === "horizontal" || y === "horizontal" ? x.scrollLeft = h : x.scrollTop = h;
      }
      this._callPropsCallbacks();
    }, m.componentDidUpdate = function() {
      var l = this.props, g = l.direction, h = l.layout, y = this.state, x = y.scrollOffset, E = y.scrollUpdateWasRequested;
      if (E && this._outerRef != null) {
        var $ = this._outerRef;
        if (g === "horizontal" || h === "horizontal")
          if (g === "rtl")
            switch (jn()) {
              case "negative":
                $.scrollLeft = -x;
                break;
              case "positive-ascending":
                $.scrollLeft = x;
                break;
              default:
                var C = $.clientWidth, S = $.scrollWidth;
                $.scrollLeft = S - C - x;
                break;
            }
          else
            $.scrollLeft = x;
        else
          $.scrollTop = x;
      }
      this._callPropsCallbacks();
    }, m.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && Kn(this._resetIsScrollingTimeoutId);
    }, m.render = function() {
      var l = this.props, g = l.children, h = l.className, y = l.direction, x = l.height, E = l.innerRef, $ = l.innerElementType, C = l.innerTagName, S = l.itemCount, D = l.itemData, P = l.itemKey, k = P === void 0 ? ys : P, H = l.layout, M = l.outerElementType, X = l.outerTagName, F = l.style, L = l.useIsScrolling, Y = l.width, V = this.state.isScrolling, q = y === "horizontal" || H === "horizontal", _ = q ? this._onScrollHorizontal : this._onScrollVertical, K = this._getRangeToRender(), Z = K[0], oe = K[1], ae = [];
      if (S > 0)
        for (var ie = Z; ie <= oe; ie++)
          ae.push(T(g, {
            data: D,
            key: k(ie, D),
            index: ie,
            isScrolling: L ? V : void 0,
            style: this._getItemStyle(ie)
          }));
      var de = r(this.props, this._instanceProps);
      return T(M || X || "div", {
        className: h,
        onScroll: _,
        ref: this._outerRefSetter,
        style: R({
          position: "relative",
          height: x,
          width: Y,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: y
        }, F)
      }, T($ || C || "div", {
        children: ae,
        ref: E,
        style: {
          height: q ? "100%" : de,
          pointerEvents: V ? "none" : void 0,
          width: q ? de : "100%"
        }
      }));
    }, m._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var l = this.props.itemCount;
        if (l > 0) {
          var g = this._getRangeToRender(), h = g[0], y = g[1], x = g[2], E = g[3];
          this._callOnItemsRendered(h, y, x, E);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var $ = this.state, C = $.scrollDirection, S = $.scrollOffset, D = $.scrollUpdateWasRequested;
        this._callOnScroll(C, S, D);
      }
    }, m._getRangeToRender = function() {
      var l = this.props, g = l.itemCount, h = l.overscanCount, y = this.state, x = y.isScrolling, E = y.scrollDirection, $ = y.scrollOffset;
      if (g === 0)
        return [0, 0, 0, 0];
      var C = c(this.props, $, this._instanceProps), S = i(this.props, C, $, this._instanceProps), D = !x || E === "backward" ? Math.max(1, h) : 1, P = !x || E === "forward" ? Math.max(1, h) : 1;
      return [Math.max(0, C - D), Math.max(0, Math.min(g - 1, S + P)), C, S];
    }, p;
  }(fo), t.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, t;
}
var $s = function(t, n) {
  var r = t.children, o = t.direction, a = t.height, c = t.layout, i = t.innerTagName, s = t.outerTagName, u = t.width, f = n.instance;
  if (process.env.NODE_ENV !== "production") {
    (i != null || s != null) && pt && !pt.has(f) && (pt.add(f), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var d = o === "horizontal" || c === "horizontal";
    switch (o) {
      case "horizontal":
      case "vertical":
        vt && !vt.has(f) && (vt.add(f), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + o + '" was specified.'));
    }
    switch (c) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + c + '" was specified.'));
    }
    if (r == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
    if (d && typeof u != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (u === null ? "null" : typeof u) + '" was specified.'));
    if (!d && typeof a != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (a === null ? "null" : typeof a) + '" was specified.'));
  }
}, Es = /* @__PURE__ */ ws({
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
  getOffsetForIndexAndAlignment: function(t, n, r, o, a, c) {
    var i = t.direction, s = t.height, u = t.itemCount, f = t.itemSize, d = t.layout, p = t.width, m = i === "horizontal" || d === "horizontal", v = m ? p : s, l = Math.max(0, u * f - v), g = Math.min(l, n * f), h = Math.max(0, n * f - v + f + c);
    switch (r === "smart" && (o >= h - v && o <= g + v ? r = "auto" : r = "center"), r) {
      case "start":
        return g;
      case "end":
        return h;
      case "center": {
        var y = Math.round(h + (g - h) / 2);
        return y < Math.ceil(v / 2) ? 0 : y > l + Math.floor(v / 2) ? l : y;
      }
      case "auto":
      default:
        return o >= h && o <= g ? o : o < h ? h : g;
    }
  },
  getStartIndexForOffset: function(t, n) {
    var r = t.itemCount, o = t.itemSize;
    return Math.max(0, Math.min(r - 1, Math.floor(n / o)));
  },
  getStopIndexForStartIndex: function(t, n, r) {
    var o = t.direction, a = t.height, c = t.itemCount, i = t.itemSize, s = t.layout, u = t.width, f = o === "horizontal" || s === "horizontal", d = n * i, p = f ? u : a, m = Math.ceil((p + r - d) / i);
    return Math.max(0, Math.min(
      c - 1,
      n + m - 1
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
const xs = ({ children: e, options: t = [], selectedValue: n, show: r = !1, onSelect: o, onClose: a }) => {
  const c = I(null), i = I(null), [s, u] = W(""), f = se(() => t.filter(({ label: d }) => d.value.toLowerCase().indexOf(s.toLowerCase()) > -1), [t, s]);
  return N(() => {
    r && setTimeout(() => {
      var d;
      return (d = i.current) == null ? void 0 : d.focus();
    }, 0);
  }, [r]), /* @__PURE__ */ b.createElement(ss, { open: r, onOpenChange: (d) => d ? {} : a == null ? void 0 : a() }, /* @__PURE__ */ b.createElement(ls, { asChild: !0 }, e), /* @__PURE__ */ b.createElement(us, null, /* @__PURE__ */ b.createElement(
    ds,
    {
      align: "end",
      sideOffset: 32,
      onMouseUp: (d) => d.stopPropagation(),
      className: "z-20 h-60 w-60 p-1 flex flex-col gap-2 bg-paper shadow-xl rounded border"
    },
    /* @__PURE__ */ b.createElement(
      "input",
      {
        value: s,
        ref: i,
        placeholder: "Type to search...",
        onFocus: (d) => d.target.select(),
        className: "rounded p-1 px-2 bg-background",
        onChange: (d) => u(d.currentTarget.value),
        onKeyDown: (d) => {
          var p;
          return d.key === "ArrowDown" ? (p = c.current) == null ? void 0 : p.focus() : d.stopPropagation();
        }
      }
    ),
    /* @__PURE__ */ b.createElement("div", { className: "overflow-overlay overflow-track-transparent flex flex-col flex-1" }, /* @__PURE__ */ b.createElement(
      Es,
      {
        width: 230,
        itemSize: 34,
        itemData: f,
        itemCount: f.length,
        height: f.length === 0 ? 0 : 190
      },
      ({ style: d, data: p, index: m }) => /* @__PURE__ */ b.createElement(
        fs,
        {
          style: d,
          key: p[m].label.value,
          ref: m === 0 ? c : void 0,
          onClick: () => {
            o && o(p[m]), a && a();
          },
          className: `p-1 rounded cursor-pointer outline-none hover:bg-primary focus:bg-primary active:opacity-80 select-none ${n === p[m].value.value ? "font-bold" : ""}`
        },
        p[m].label.value
      )
    ), f.length === 0 && /* @__PURE__ */ b.createElement("span", { className: "self-center justify-self-center opacity-80" }, "No options"))
  )));
}, Jt = ({
  id: e,
  error: t,
  value: n,
  warning: r,
  disabled: o,
  autoFocus: a,
  placeholder: c,
  suggestions: i,
  disabledPicker: s,
  onBlur: u,
  onChange: f,
  onKeyDown: d,
  onPickerClick: p,
  onSelectSuggestion: m
}) => {
  const v = I(null);
  N(() => {
    v.current && a && (v.current.focus(), v.current.select());
  }, [a]);
  const [l, g] = W(!1), [h, y] = W(!1), [x, E] = W(n), [$, C] = W(n);
  N(() => {
    if (!i) {
      C(n);
      return;
    }
    const P = i == null ? void 0 : i.find((H) => H.value.value === n);
    C((P == null ? void 0 : P.label.value) || n);
    const k = [];
    return i.forEach((H) => {
      k.push(H.value.subscribe((M) => {
        M === n && P && C(P == null ? void 0 : P.label.value);
      })), k.push(H.label.subscribe((M) => {
        H.value.value === n && P && C(M);
      }));
    }), () => k.forEach((H) => H.unsubscribe());
  }, [i, n]), N(() => {
    h || E($);
  }, [$, h]);
  const S = A((P) => {
    if (E(P.target.value), !i) {
      f && f(P, P.target.value);
      return;
    }
    const k = P.target.value, H = i.find((M) => {
      const X = M.label.value === k, F = M.name.value === k, L = M.value.value === k;
      return X || F || L;
    });
    H ? m && m(H) : f && f(P, k);
  }, [i, f, m]), D = A((P) => {
    y(!1), u == null || u(P);
  }, [u]);
  return /* @__PURE__ */ b.createElement("div", { className: "flex w-full items-center relative" }, /* @__PURE__ */ b.createElement(
    "input",
    {
      "data-error": t,
      "data-warning": r,
      "data-has-suggestions": (i || []).length > 0,
      id: e,
      ref: v,
      autoComplete: "off",
      onBlur: D,
      disabled: o,
      autoFocus: a,
      onKeyDown: d,
      onChange: S,
      placeholder: c,
      onFocus: () => y(!0),
      ...h ? { value: x } : { value: $ },
      className: "bg-background flex-1 p-1 py-0.5 data-[warning=true]:border data-[warning=true]:border-yellow-500 data-[error=true]:border data-[error=true]:border-red-500 data-[has-suggestions=true]:pr-6 disabled:opacity-50"
    }
  ), !o && (i || []).length > 0 && /* @__PURE__ */ b.createElement(
    tr,
    {
      size: 24,
      onClick: () => g(!0),
      className: "h-full rounded cursor-pointer open-suggestions text-text p-1 -ml-6 outline-none"
    }
  ), /* @__PURE__ */ b.createElement(
    xs,
    {
      options: i,
      show: l,
      selectedValue: String(n || ""),
      onClose: () => g(!1),
      onSelect: (P) => !o && m(P)
    },
    /* @__PURE__ */ b.createElement("span", null)
  ), !o && !s && /* @__PURE__ */ b.createElement(
    "input",
    {
      type: "button",
      tabIndex: -1,
      onClick: !o && p,
      className: "h-5 cursor-pointer rounded-md ml-1 px-1.5 border bg-paper"
    }
  ));
}, hn = ({ dividerPositionX: e = 0, ...t }) => {
  const { onPickerValueClick: n, onGetValueSuggestions: r, onGetValue: o } = We(), [a, c] = j(o ? o(t) : t.value), i = w(t.valueInputPickerDisabled), s = w(t.editValueDisabled), u = w(t.valueHasWarning), f = w(t.nameHasWarning), d = w(t.valueHasError), p = w(t.nameHasError), m = w(t.information), v = w(t.name), l = w(t.id), [g, h] = W(r(t));
  return N(() => {
    h(r(t));
  }, [t.propertyType.value, t.type.value, t.id.value, r]), /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: l || "",
      name: v || "",
      information: m,
      nameHasError: p,
      nameHasWarning: f,
      dividerPositionX: e,
      children: (y) => /* @__PURE__ */ b.createElement(
        Jt,
        {
          onSelectSuggestion: (x) => c(x.value.value.toString()),
          onPickerClick: () => n == null ? void 0 : n(t),
          onChange: (x) => c(x.currentTarget.value),
          disabledPicker: i,
          disabled: s,
          suggestions: g,
          warning: u,
          error: d,
          value: a,
          id: y
        }
      )
    }
  );
}, Cs = ({ ...e }) => {
  const t = w(e.valueHasWarning), n = w(e.nameHasWarning), r = w(e.valueHasError), o = w(e.nameHasError), a = w(e.information), c = w(e.value), i = w(e.name), s = w(e.id);
  return /* @__PURE__ */ b.createElement("div", { className: `flex flex-col p-2 pt-1 gap-2 border rounded ${r || o ? "border border-red-500" : ""} ${t || n ? "border border-yellow-500" : ""}` }, /* @__PURE__ */ b.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ b.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ b.createElement("span", { className: "text-sm font-light" }, i), a !== "" && a !== void 0 && /* @__PURE__ */ b.createElement(Je, { text: a }, /* @__PURE__ */ b.createElement(Ye, { size: 15 })))), /* @__PURE__ */ b.createElement("div", { id: s, className: "flex flex-col gap-1" }, c.map((u) => /* @__PURE__ */ b.createElement(
    hn,
    {
      ...u,
      editValueDisabled: e.editValueDisabled
    }
  )), c.length === 0 && /* @__PURE__ */ b.createElement("span", { className: "font-light italic" }, "No options")));
}, Ss = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), i = w(e.editValueDisabled), s = w(e.valueHasWarning), u = w(e.nameHasWarning), f = w(e.valueHasError), d = w(e.nameHasError), p = w(e.information), [m, v] = j(e.value), l = w(e.name), g = w(e.id);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: g || "",
      name: l || "",
      information: p,
      nameHasError: d,
      nameHasWarning: u,
      onDoubleClick: () => v((h) => !h)
    },
    (h) => /* @__PURE__ */ b.createElement(
      "select",
      {
        onChange: (y) => v(y.currentTarget.value === "true"),
        className: "bg-background py-0.5",
        disabled: i,
        value: String(m),
        id: h,
        style: {
          textDecoration: f ? o : s ? a : c,
          border: f ? t : s ? n : r,
          width: "100%"
        }
      },
      /* @__PURE__ */ b.createElement("option", { children: "Yes", value: "true" }),
      /* @__PURE__ */ b.createElement("option", { children: "No", value: "false" })
    )
  );
}, Ts = {
  justifyContent: "space-between",
  height: "min-content",
  alignItems: "center",
  position: "relative"
}, Ps = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), i = w(e.editValueDisabled), s = w(e.valueHasWarning), u = w(e.valueHasError), [f, d] = j(e.value), p = w(e.id);
  return /* @__PURE__ */ b.createElement("div", { style: Ts }, /* @__PURE__ */ b.createElement(
    "textarea",
    {
      onChange: (m) => d(m.currentTarget.value),
      className: "w-full bg-background disabled:opacity-50",
      disabled: i,
      id: "prop_id_" + p,
      autoComplete: "off",
      value: f,
      style: {
        textDecoration: u ? o : s ? a : c,
        border: u ? t : s ? n : r,
        resize: "vertical",
        height: "100px"
      }
    }
  ));
}, Ds = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), i = w(e.editValueDisabled), s = w(e.valueHasWarning), u = w(e.nameHasWarning), f = w(e.valueHasError), d = w(e.nameHasError), p = w(e.information), [m, v] = j(e.value), l = w(e.name), g = w(e.id);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: g || "",
      name: l || "",
      information: p,
      nameHasError: d,
      nameHasWarning: u
    },
    (h) => /* @__PURE__ */ b.createElement(
      "input",
      {
        className: "w-full bg-background py-0.5 disabled:opacity-50",
        onChange: (y) => v(y.currentTarget.value),
        disabled: i,
        autoComplete: "off",
        value: m,
        id: h,
        style: {
          textDecoration: f ? o : s ? a : c,
          border: f ? t : s ? n : r
        }
      }
    )
  );
}, Os = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), i = w(e.editValueDisabled), s = w(e.valueHasWarning), u = w(e.nameHasWarning), f = w(e.valueHasError), d = w(e.nameHasError), p = w(e.information), [m, v] = j(e.value), l = w(e.name), g = w(e.id);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: g || "",
      name: l || "",
      information: p,
      nameHasError: d,
      nameHasWarning: u
    },
    (h) => /* @__PURE__ */ b.createElement(
      "input",
      {
        onChange: (y) => v(Number(y.currentTarget.value)),
        className: "w-full bg-background py-0.5 disabled:opacity-50",
        disabled: i,
        autoComplete: "off",
        type: "number",
        value: m,
        id: h,
        style: {
          textDecoration: f ? o : s ? a : c,
          border: f ? t : s ? n : r
        }
      }
    )
  );
}, _s = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), i = w(e.editValueDisabled), s = w(e.valueHasWarning), u = w(e.nameHasWarning), f = w(e.valueHasError), d = w(e.nameHasError), p = w(e.information), [m, v] = j(e.value), l = w(e.name), g = w(e.id);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      name: l || "",
      id: g || qn(),
      information: p,
      nameHasError: d,
      nameHasWarning: u
    },
    (h) => /* @__PURE__ */ b.createElement(
      "input",
      {
        onChange: (y) => v(y.currentTarget.value),
        className: "bg-background p-1 disabled:opacity-50",
        disabled: i,
        autoComplete: "off",
        value: m,
        type: "color",
        id: h,
        style: {
          textDecoration: f ? o : s ? a : c,
          border: f ? t : s ? n : r,
          marginLeft: "auto"
        }
      }
    )
  );
}, Qr = ({ inputClassName: e = "", ...t }) => {
  const { onPickerValueClick: n, onPickerNameClick: r, onGetNameSuggestions: o, onGetValueSuggestions: a } = We(), c = w(t.valueInputPickerDisabled), i = w(t.nameInputPickerDisabled), s = w(t.editValueDisabled), u = w(t.editNameDisabled), f = w(t.valueHasWarning), d = w(t.nameHasWarning), p = w(t.valueHasError), m = w(t.nameHasError), [v, l] = j(t.value), [g, h] = j(t.name), [y, x] = W(o(t)), [E, $] = W(a(t));
  return N(() => {
    x(o(t));
  }, [t.propertyType.value, t.type.value, t.id.value, o]), N(() => {
    $(a(t));
  }, [t.propertyType.value, t.type.value, t.id.value, a]), /* @__PURE__ */ b.createElement("div", { className: "flex flex-col gap-0.5 w-full" }, /* @__PURE__ */ b.createElement(
    Jt,
    {
      value: g,
      error: m,
      placeholder: "Property",
      warning: d,
      disabled: u,
      suggestions: y,
      id: "name_prop_id_" + t.id,
      key: "name_prop_key_" + t.id,
      disabledPicker: i,
      onChange: (C) => h(C.currentTarget.value),
      onPickerClick: () => r == null ? void 0 : r(t),
      onSelectSuggestion: (C) => h(C.value.value.toString())
    }
  ), /* @__PURE__ */ b.createElement("label", { className: "flex items-center gap-2" }, /* @__PURE__ */ b.createElement(
    "span",
    {
      children: "=",
      className: "cursor-pointer",
      onClick: () => n == null ? void 0 : n(t)
    }
  ), /* @__PURE__ */ b.createElement(
    Jt,
    {
      value: v,
      placeholder: "Value",
      error: p,
      warning: f,
      suggestions: E,
      disabled: s,
      id: "value_prop_id_" + t.id,
      key: "value_prop_key_" + t.id,
      disabledPicker: c,
      onChange: (C) => l(C.currentTarget.value),
      onPickerClick: () => n == null ? void 0 : n(t),
      onSelectSuggestion: (C) => l(C.value.value.toString())
    }
  )));
}, Is = ({ ...e }) => {
  const t = w(e.valueHasWarning), n = w(e.nameHasWarning), r = w(e.valueHasError), o = w(e.nameHasError), a = w(e.information), [c, i] = j(e.value), s = w(e.name), u = w(e.id), f = A(() => {
    i((p) => [...p, nr({})]);
  }, [i]), d = A((p) => {
    i((m) => (m.splice(p, 1), [...m]));
  }, [i]);
  return /* @__PURE__ */ b.createElement("div", { className: `flex flex-col p-2 pt-1 gap-2 border rounded ${r || o ? "border border-red-500" : ""} ${t || n ? "border border-yellow-500" : ""}` }, /* @__PURE__ */ b.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ b.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ b.createElement("span", { className: "text-sm font-light" }, s), a !== "" && a !== void 0 && /* @__PURE__ */ b.createElement(Je, { text: a }, /* @__PURE__ */ b.createElement(Ye, { size: 15 })))), /* @__PURE__ */ b.createElement("div", { id: u, className: "flex flex-col gap-1" }, c.map((p, m) => /* @__PURE__ */ b.createElement(en, { key: p.id.value }, /* @__PURE__ */ b.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ b.createElement(
    Qr,
    {
      ...p,
      inputClassName: "bg-background",
      editValueDisabled: e.editValueDisabled
    }
  ), /* @__PURE__ */ b.createElement(
    Xe,
    {
      onClick: () => d(m),
      style: { minWidth: 16, minHeight: 16 },
      className: "ml-1 cursor-pointer hover:text-red-400 active:opacity-80"
    }
  )), m + 1 < c.length && /* @__PURE__ */ b.createElement("hr", null))), c.length === 0 && /* @__PURE__ */ b.createElement("span", { className: "font-light italic" }, "No options")), /* @__PURE__ */ b.createElement("button", { className: "text-sm text-secondary", onClick: f }, "+ Add"));
}, Ns = ({ value: e, fileMaxSize: t, disabled: n, error: r, warning: o, typeOfFilesToAccept: a, onChange: c }) => {
  const i = I(null), s = I(null), u = A((m) => {
    var y;
    const v = (y = m.target.files) == null ? void 0 : y.item(0);
    if (!v || !v.name || t && v.size > t)
      return;
    const l = v.name.lastIndexOf(".") || 0, g = v.name.slice(l, v.name.length).toLowerCase();
    if (a && !a.includes(g))
      return;
    const h = new FileReader();
    h.addEventListener("load", (x) => {
      !x.target || c({
        name: v.name,
        size: v.size,
        type: v.type,
        lastModified: v.lastModified,
        content: x.target.result instanceof ArrayBuffer ? Buffer.from(x.target.result).toString("base64") : x.target.result
      });
    }), h.readAsDataURL(v);
  }, [t, a]), f = () => {
    if (n)
      return;
    const m = document.createElement("input");
    m.type = "file", m.onchange = u, a && (m.accept = a.join(",")), m.click();
  }, d = (m) => {
    var v;
    m.code === "Enter" || m.code === "Space" ? f() : m.code === "Delete" ? c(void 0) : m.code === "ArrowRight" && ((v = s.current) == null || v.focus());
  }, p = (m) => {
    var v, l;
    m.stopPropagation(), m.preventDefault(), m.code === "Enter" || m.code === "Space" ? ((v = i.current) == null || v.focus(), c(void 0)) : m.code === "ArrowLeft" && ((l = i.current) == null || l.focus());
  };
  return /* @__PURE__ */ b.createElement(
    "div",
    {
      ref: i,
      "data-error": r,
      "data-warning": o,
      onClick: f,
      "data-disabled": n,
      tabIndex: n ? -1 : 0,
      onKeyDown: d,
      className: "flex gap-2 bg-background p-1 rounded cursor-pointer focus:outline outline-primary ring-1 ring-transparent data-[warning=true]:ring-yellow-500 data-[error=true]:ring-red-500 data-[disabled=true]:opacity-50 data-[disabled=true]:focus:outline-none data-[disabled=true]:cursor-default"
    },
    e ? /* @__PURE__ */ b.createElement("div", { className: "flex-1 flex gap-1" }, /* @__PURE__ */ b.createElement("img", { draggable: !1, src: e.content || "", height: 24, width: 24, alt: e.name, className: "object-contain" }), /* @__PURE__ */ b.createElement("div", { "data-disabled": n, className: "flex-1 data-[disabled=true]:cursor-default data-[disabled=true]:select-text" }, e.name)) : /* @__PURE__ */ b.createElement("div", { className: "flex-1" }, "Select a file..."),
    /* @__PURE__ */ b.createElement(
      "div",
      {
        ref: s,
        "data-show": !!e,
        "data-disabled": n,
        onKeyDown: p,
        tabIndex: !!e || n ? -1 : 1,
        onClick: (m) => {
          m.stopPropagation(), m.preventDefault(), c(void 0);
        },
        className: "cursor-pointer text-white self-start rounded-full hover:bg-primary focus:outline outline-primary data-[show=false]:hidden data-[disabled=true]:hidden"
      },
      /* @__PURE__ */ b.createElement(Xe, { size: 24, className: "p-1" })
    )
  );
}, As = ({ ...e }) => {
  const t = w(e.typeOfFilesToAccept), n = w(e.editValueDisabled), r = w(e.valueHasWarning), o = w(e.nameHasWarning), a = w(e.valueHasError), c = w(e.nameHasError), i = w(e.fileMaxSize), s = w(e.information), [u, f] = j(e.value), d = w(e.name), p = w(e.id), m = A((v) => {
    f(v);
  }, [f]);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: p || "",
      name: d || "",
      information: s,
      nameHasError: c,
      nameHasWarning: o
    },
    () => /* @__PURE__ */ b.createElement(
      Ns,
      {
        value: u,
        error: a,
        onChange: m,
        fileMaxSize: i,
        warning: r,
        disabled: n,
        typeOfFilesToAccept: t
      }
    )
  );
}, Rs = ({ ...e }) => {
  const t = w(e.editValueDisabled), n = w(e.valueHasWarning), r = w(e.nameHasWarning), o = w(e.valueHasError), a = w(e.nameHasError), c = w(e.information), [i, s] = j(e.value), u = w(e.name), f = w(e.id), d = () => {
    s((m) => [
      ...m,
      {
        name: B(""),
        value: B("")
      }
    ]);
  }, p = A((m) => {
    s((v) => (v.splice(m, 1), [...v]));
  }, [s]);
  return /* @__PURE__ */ b.createElement("div", { className: `flex flex-col p-2 gap-2 bg-background rounded ${o || a ? "border border-red-500" : ""} ${n || r ? "border border-yellow-500" : ""}` }, /* @__PURE__ */ b.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ b.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ b.createElement("span", null, u), c !== "" && c !== void 0 && /* @__PURE__ */ b.createElement(Je, { text: c }, /* @__PURE__ */ b.createElement(Ye, { size: 15 })))), /* @__PURE__ */ b.createElement("div", { id: f, className: "flex flex-col gap-1" }, i.map((m, v) => /* @__PURE__ */ b.createElement(
    Ms,
    {
      name: m.name,
      value: m.value,
      key: m.value.id,
      disabled: !!t,
      onDelete: () => p(v)
    }
  )), i.length === 0 && /* @__PURE__ */ b.createElement("span", { className: "font-light italic" }, "No options")), /* @__PURE__ */ b.createElement("button", { className: "text-sm text-primary", onClick: d }, "+ Add"));
}, Ms = mo(({ name: e, value: t, disabled: n, onDelete: r }) => {
  const [o, a] = j(t), [c, i] = j(e);
  return /* @__PURE__ */ b.createElement("div", { className: "flex gap-0.5" }, /* @__PURE__ */ b.createElement(
    "input",
    {
      className: "w-full bg-paper p-1 rounded-r-none",
      onChange: (s) => i(s.target.value),
      autoComplete: "off",
      disabled: n,
      placeholder: "Name",
      value: c
    }
  ), /* @__PURE__ */ b.createElement(
    "input",
    {
      className: "w-full bg-paper p-1 rounded-l-none",
      onChange: (s) => a(s.target.value),
      autoComplete: "off",
      placeholder: "Value",
      disabled: n,
      value: o
    }
  ), /* @__PURE__ */ b.createElement("button", { className: "p-1", onClick: r }, /* @__PURE__ */ b.createElement(Xe, null)));
}), ks = ({ ...e }) => {
  const t = w(e.editValueDisabled), n = w(e.valueHasWarning), r = w(e.nameHasWarning), o = w(e.valueHasError), a = w(e.nameHasError), c = w(e.information), [i, s] = j(e.value), u = w(e.name), f = w(e.id), d = () => {
    s((p) => [...p, ""]);
  };
  return /* @__PURE__ */ b.createElement("div", { className: `flex flex-col p-2 pt-1 gap-2 border rounded ${o || a ? "border border-red-500" : ""} ${n || r ? "border border-yellow-500" : ""}` }, /* @__PURE__ */ b.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ b.createElement("span", { className: "text-sm font-light" }, u), c !== "" && c !== void 0 && /* @__PURE__ */ b.createElement(Je, { text: c }, /* @__PURE__ */ b.createElement(Ye, { size: 15 }))), /* @__PURE__ */ b.createElement("div", { id: f, className: "flex flex-col gap-1" }, i.map((p, m) => /* @__PURE__ */ b.createElement("div", { key: m, className: "flex gap-0.5" }, /* @__PURE__ */ b.createElement(
    "input",
    {
      className: "w-full bg-background p-1",
      disabled: t,
      autoComplete: "off",
      value: p,
      onChange: (v) => {
        i[m] = v.target.value, s([...i]);
      }
    }
  ), /* @__PURE__ */ b.createElement("button", { className: "p-1", disabled: t, onClick: () => s([...i.filter((v, l) => l !== m)]) }, /* @__PURE__ */ b.createElement(Xe, null)))), i.length === 0 && /* @__PURE__ */ b.createElement("span", { className: "font-light" }, "No options"), /* @__PURE__ */ b.createElement("button", { className: "text-sm text-secondary", onClick: d }, "+ Add")));
}, Hs = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), i = w(e.editValueDisabled), s = w(e.valueHasWarning), u = w(e.nameHasWarning), f = w(e.valueHasError), d = w(e.nameHasError), p = w(e.information), [m, v] = j(e.value), l = w(e.name), g = w(e.id);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: g || "",
      name: l || "",
      information: p,
      nameHasError: d,
      nameHasWarning: u
    },
    (h) => /* @__PURE__ */ b.createElement(
      "textarea",
      {
        onChange: (y) => v(y.currentTarget.value),
        className: "w-full bg-background disabled:opacity-50",
        disabled: i,
        autoComplete: "off",
        value: m,
        id: h,
        style: {
          textDecoration: f ? o : s ? a : c,
          border: f ? t : s ? n : r,
          resize: "vertical",
          height: "50px"
        }
      }
    )
  );
}, Ws = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), { onGetValueSuggestions: i } = We(), s = w(e.editValueDisabled), u = w(e.valueHasWarning), f = w(e.nameHasWarning), d = w(e.valueHasError), p = w(e.nameHasError), m = w(e.information), [v, l] = j(e.value), g = w(e.name), h = w(e.id), [y, x] = W(i(e));
  return N(() => {
    x(i(e));
  }, [e.propertyType.value, e.type.value, e.id.value, i]), /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: h || "",
      name: g || "",
      information: m,
      nameHasError: p,
      nameHasWarning: f
    },
    (E) => /* @__PURE__ */ b.createElement(
      "select",
      {
        onChange: ($) => l($.currentTarget.value),
        className: "bg-background py-0.5",
        disabled: s,
        value: v,
        id: E,
        style: {
          textDecoration: d ? o : u ? a : c,
          border: d ? t : u ? n : r,
          width: "100%"
        }
      },
      /* @__PURE__ */ b.createElement("option", { value: "" }, "Select"),
      y == null ? void 0 : y.map(($, C) => /* @__PURE__ */ b.createElement(Ls, { key: C, ...$ }))
    )
  );
}, Ls = ({ ...e }) => {
  const t = w(e.description), n = w(e.disabled), r = w(e.label), o = w(e.value);
  return /* @__PURE__ */ b.createElement(
    "option",
    {
      title: t,
      disabled: n,
      children: r,
      value: o
    }
  );
}, Fs = {
  alignItems: "flex-start",
  flexDirection: "column",
  height: "min-content",
  position: "relative",
  display: "flex"
}, zs = ({ ...e }) => {
  const { inputBorderError: t, inputBorderWarning: n, inputBorderDefault: r, inputTextError: o, inputTextWarning: a, inputTextDefault: c } = le(), { onGetValueSuggestions: i } = We(), s = w(e.editValueDisabled), u = w(e.valueHasWarning), f = w(e.valueHasError), [d, p] = j(e.value), [m] = j(e.name), v = w(e.id), [l, g] = W(i(e));
  N(() => {
    g(i(e));
  }, [e.propertyType.value, e.type.value, e.id.value, i]);
  const h = I(null), y = A((E) => {
    switch (E.code) {
      case "Comma":
        p(($) => {
          const C = E.currentTarget.value.trim().replaceAll(",", "");
          return C.length > 0 && !$.includes(C) ? [...$, C] : $;
        }), E.currentTarget.value = "";
        break;
      case "Space":
        p(($) => {
          const C = E.currentTarget.value.trim().replaceAll(" ", "");
          return C.length > 0 && !$.includes(C) ? [...$, C] : $;
        }), E.currentTarget.value = "";
        break;
      case "Enter":
        p(($) => {
          const C = E.currentTarget.value.trim();
          return C.length > 0 && !$.includes(C) ? [...$, C] : $;
        }), E.currentTarget.value = "";
        break;
      case "NumpadEnter":
        p(($) => {
          const C = E.currentTarget.value.trim();
          return C.length > 0 && !$.includes(C) ? [...$, C] : $;
        }), E.currentTarget.value = "";
        break;
      case "Slash":
        p(($) => {
          const C = E.currentTarget.value.trim().replaceAll(";", "");
          return C.length > 0 && !$.includes(C) ? [...$, C] : $;
        }), E.currentTarget.value = "";
        break;
    }
  }, [p]), x = A((E) => {
    E.preventDefault();
    const $ = E.clipboardData.getData("text").split(/,| |\n/g).map((C) => C.trim()).filter((C) => C.length > 0);
    p((C) => [
      ...C,
      ...$.filter((S) => !C.includes(S))
    ]);
  }, [p]);
  return /* @__PURE__ */ b.createElement("div", { style: Fs, "data-disabled": s, className: "p-2 gap-2 bg-background rounded data-[disabled=true]:opacity-50" }, /* @__PURE__ */ b.createElement("label", null, m), /* @__PURE__ */ b.createElement("div", { className: "flex flex-wrap justify-start items-center gap-1" }, d.map((E, $) => /* @__PURE__ */ b.createElement("span", { key: E, className: "flex gap-1 items-center justify-between border px-2 py-0.5 bg-paper rounded-lg" }, E, /* @__PURE__ */ b.createElement("div", { className: "flex gap-1" }, /* @__PURE__ */ b.createElement(
    $o,
    {
      style: { padding: 2, cursor: "pointer" },
      onClick: () => {
        p(d.filter((C, S) => S !== $)), h.current && (h.current.value = E, h.current.focus(), h.current.select());
      }
    }
  ), /* @__PURE__ */ b.createElement(
    wo,
    {
      style: { padding: 2, cursor: "pointer" },
      onClick: () => p(d.filter((C, S) => S !== $))
    }
  )))), /* @__PURE__ */ b.createElement(
    "input",
    {
      ref: h,
      autoComplete: "off",
      id: "prop_id_" + v,
      placeholder: "Add...",
      onPaste: x,
      onKeyDown: y,
      list: "prop_data_id_" + v,
      disabled: s,
      className: "w-full bg-paper px-2 mt-2",
      onKeyUp: (E) => E.currentTarget.value = E.currentTarget.value.trim().replace(/;|,| |\./g, ""),
      style: {
        textDecoration: f ? o : u ? a : c,
        border: f ? t : u ? n : r,
        height: 26
      }
    }
  ), l && /* @__PURE__ */ b.createElement("datalist", { id: "prop_data_id_" + v }, l.map((E, $) => /* @__PURE__ */ b.createElement("option", { key: $, value: E.value.value })))));
}, Vs = ({ ...e }) => {
  const { inputTextError: t, inputTextWarning: n, inputTextDefault: r } = le(), o = w(e.valueHasWarning), a = w(e.nameHasWarning), c = w(e.valueHasError), i = w(e.nameHasError), s = w(e.information), u = w(e.value), f = w(e.name), d = w(e.id);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: d || "",
      name: f || "",
      nameHasError: i,
      information: s,
      nameHasWarning: a
    },
    (p) => /* @__PURE__ */ b.createElement(
      "label",
      {
        style: {
          textDecoration: c ? t : o ? n : r,
          backgroundColor: "transparent",
          textOverflow: "ellipsis",
          display: "inline-block",
          whiteSpace: "nowrap",
          textAlign: "start",
          overflow: "hidden"
        },
        children: u,
        id: p
      }
    )
  );
};
function Bs(e) {
  const t = I({
    value: e,
    previous: e
  });
  return se(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Jr = "Switch", [Us, fl] = Pe(Jr), [Ks, Gs] = Us(Jr), js = /* @__PURE__ */ U((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: c, disabled: i, value: s = "on", onCheckedChange: u, ...f } = e, [d, p] = W(null), m = Q(
    t,
    (y) => p(y)
  ), v = I(!1), l = d ? Boolean(d.closest("form")) : !0, [g = !1, h] = Pt({
    prop: o,
    defaultProp: a,
    onChange: u
  });
  return /* @__PURE__ */ T(Ks, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ T(ne.button, R({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": c,
    "data-state": eo(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: s
  }, f, {
    ref: m,
    onClick: z(e.onClick, (y) => {
      h(
        (x) => !x
      ), l && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
    })
  })), l && /* @__PURE__ */ T(qs, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: s,
    checked: g,
    required: c,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), Ys = "SwitchThumb", Xs = /* @__PURE__ */ U((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = Gs(Ys, n);
  return /* @__PURE__ */ T(ne.span, R({
    "data-state": eo(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), qs = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = I(null), c = Bs(n), i = gr(t);
  return N(() => {
    const s = a.current, u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "checked").set;
    if (c !== n && d) {
      const p = new Event("click", {
        bubbles: r
      });
      d.call(s, n), s.dispatchEvent(p);
    }
  }, [
    c,
    n,
    r
  ]), /* @__PURE__ */ T("input", R({
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
function eo(e) {
  return e ? "checked" : "unchecked";
}
const Zs = js, Qs = Xs, Js = ({ id: e, checked: t = !1, autoFocus: n, onChange: r, onBlur: o, hasError: a = !1, disabled: c = !1, hasWarning: i }) => {
  const s = I(null);
  return N(() => {
    s.current && n && s.current.focus();
  }, [n]), /* @__PURE__ */ b.createElement(
    Zs,
    {
      id: e,
      ref: s,
      onBlur: o,
      checked: t,
      disabled: c,
      autoFocus: n,
      "data-error": a,
      "data-warning": i && !a,
      onCheckedChange: () => r(!t),
      className: "p-1 w-12 h-7 rounded-full bg-background cursor-pointer flex items-center justify-start hover:opacity-100 focus:ring-1 ring-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none data-[warning=true]:ring-yellow-500 data-[warning=true]:ring-1 data-[error=true]:ring-red-500 data-[error=true]:ring-1"
    },
    /* @__PURE__ */ b.createElement(
      Qs,
      {
        className: "w-[20px] h-[20px] bg-primary rounded-full transition-transform duration-100 translate-x-0 will-change-transform data-[state=unchecked]:bg-secondary data-[state=unchecked]:opacity-50 data-[state=checked]:translate-x-5"
      }
    )
  );
}, el = ({ ...e }) => {
  const t = w(e.editValueDisabled), n = w(e.valueHasWarning), r = w(e.nameHasWarning), o = w(e.valueHasError), a = w(e.nameHasError), c = w(e.information), [i, s] = j(e.value), u = w(e.name), f = w(e.id);
  return /* @__PURE__ */ b.createElement(
    ue,
    {
      minWidth: 60,
      id: f || "",
      name: u || "",
      information: c,
      nameHasError: a,
      nameHasWarning: r
    },
    (d) => /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("div", { className: "flex-1" }), /* @__PURE__ */ b.createElement(
      Js,
      {
        onChange: (p) => s(p),
        hasWarning: n,
        disabled: t,
        hasError: o,
        checked: i,
        id: d
      }
    ))
  );
}, tl = ({ value: e }) => {
  const { root: t, fields: n } = w(e), r = w(n), o = w(t);
  function a() {
    It(n, (i) => [
      ...i,
      nr({
        value: B(""),
        type: B(G.expression),
        name: B(`Param ${i.length}`)
      })
    ]);
  }
  function c(i = "") {
    It(n, (s) => [
      ...s.filter((u) => u.id.value !== i).map((u, f) => (It(u.name, `Param ${f}`), u))
    ]);
  }
  return /* @__PURE__ */ React.createElement("div", { className: "border rounded -m-0.5 pt-0.5 p-1" }, /* @__PURE__ */ React.createElement(to, { field: o }), /* @__PURE__ */ React.createElement("div", { className: "pl-2" }, r.map((i) => /* @__PURE__ */ React.createElement("div", { className: "flex", key: i.id.value }, /* @__PURE__ */ React.createElement(
    hn,
    {
      ...i,
      dividerPositionX: 24
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: () => c(i.id.value), className: "p-0 w-6 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Xe, { size: 14 }))))), /* @__PURE__ */ React.createElement("button", { className: "text-sm text-secondary w-full", onClick: a }, "+ Add"));
}, to = ({ field: e }) => {
  switch (w(e.type)) {
    case G.viewOnly:
      return /* @__PURE__ */ b.createElement(Vs, { ...e });
    case G.string:
      return /* @__PURE__ */ b.createElement(Ds, { ...e });
    case G.colorPicker:
      return /* @__PURE__ */ b.createElement(_s, { ...e });
    case G.boolean:
      return /* @__PURE__ */ b.createElement(el, { ...e });
    case G.number:
      return /* @__PURE__ */ b.createElement(Os, { ...e });
    case G.binary:
      return /* @__PURE__ */ b.createElement(As, { ...e });
    case G.bigString:
      return /* @__PURE__ */ b.createElement(Hs, { ...e });
    case G.fullBigString:
      return /* @__PURE__ */ b.createElement(Ps, { ...e });
    case G.selection:
      return /* @__PURE__ */ b.createElement(Ws, { ...e });
    case G.yesNoSelection:
      return /* @__PURE__ */ b.createElement(Ss, { ...e });
    case G.expression:
      return /* @__PURE__ */ b.createElement(hn, { ...e });
    case G.assign:
      return /* @__PURE__ */ b.createElement(Qr, { ...e });
    case G.inputMultiTags:
      return /* @__PURE__ */ b.createElement(zs, { ...e });
    case G.stringWithSuggestions:
      return /* @__PURE__ */ b.createElement(ui, { ...e });
    case G.optionList:
      return /* @__PURE__ */ b.createElement(Rs, { ...e });
    case G.stringList:
      return /* @__PURE__ */ b.createElement(ks, { ...e });
    case G.multiAssign:
      return /* @__PURE__ */ b.createElement(Is, { ...e });
    case G.multiExpression:
      return /* @__PURE__ */ b.createElement(Cs, { ...e });
    case G.fieldsTree:
      return /* @__PURE__ */ b.createElement(tl, { ...e });
    case G.hidden:
      return null;
    default:
      return null;
  }
}, Yn = ({ properties: e, group: t }) => {
  const [n, r] = W(t ? gt.getGroupsInOpen(t) : !0), [o, a] = W([]);
  N(() => {
    a(() => (e.sort((i, s) => (i.order.value || 0) - (s.order.value || 0)), e));
  }, [e]), N(() => {
    const i = [];
    return e.forEach((s) => {
      i.push(s.order.subscribe(() => {
        a(() => (e.sort((u, f) => (u.order.value || 0) - (f.order.value || 0)), e));
      }));
    }), () => i.forEach((s) => s.unsubscribe());
  }, [e]);
  const c = A(() => {
    r(!n), t && gt.setGroupsInOpen(t, !n);
  }, [n, t]);
  return /* @__PURE__ */ b.createElement("div", { className: "flex flex-col" }, t && /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("hr", { className: "mt-3" }), /* @__PURE__ */ b.createElement(
    "div",
    {
      onClick: c,
      className: "flex py-3 px-0 justify-between cursor-pointer items-center"
    },
    t.toUpperCase(),
    n ? /* @__PURE__ */ b.createElement(yo, null) : /* @__PURE__ */ b.createElement(tr, null)
  )), n && /* @__PURE__ */ b.createElement("div", { "data-animate": !!t, className: "flex flex-col gap-1 data-[animate=true]:animate-fade-in" }, o.map((i) => /* @__PURE__ */ b.createElement(
    to,
    {
      field: i,
      key: i.id.value
    }
  ))));
}, nl = ({ fields: e }) => {
  const t = w(e), n = se(() => t.filter((o) => o.group.value === void 0), [t]), r = se(() => {
    const o = [];
    return t.forEach((a) => {
      a.group.value && !o.some((c) => c === a.group.value) && o.push(a.group.value);
    }), o;
  }, [t]);
  return /* @__PURE__ */ b.createElement("div", { className: "flex-1 flex-col w-full h-full" }, /* @__PURE__ */ b.createElement(Yn, { properties: n }), r.map((o) => /* @__PURE__ */ b.createElement(
    Yn,
    {
      key: o,
      group: o,
      properties: t.filter((a) => a.group.value === o)
    }
  )));
};
const ml = ({ properties: e, configs: t, ...n }) => /* @__PURE__ */ b.createElement(ho, { configs: t, ...n }, /* @__PURE__ */ b.createElement(nl, { fields: e }));
export {
  ml as PropertiesEditor,
  G as TypeOfValues,
  nr as newEmptyProperty,
  cl as newEmptySuggestion
};
//# sourceMappingURL=index.es.js.map
