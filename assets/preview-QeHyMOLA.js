const { STORY_CHANGED, STORY_RENDERED, GLOBALS_UPDATED, FORCE_RE_RENDER, FORCE_REMOUNT, DOCS_RENDERED, UPDATE_GLOBALS } = __STORYBOOK_MODULE_CORE_EVENTS__;
const { addons, useMemo, useEffect } = __STORYBOOK_MODULE_PREVIEW_API__;
var g = "pseudo", R = ["::-(webkit|moz|ms)-[a-z-]+", "::part\\([^)]+\\)"], u = { hover: "hover", active: "active", focusVisible: "focus-visible", focusWithin: "focus-within", focus: "focus", visited: "visited", link: "link", target: "target" };
var k = (e) => e.indexOf("@") === 0, y = (e) => {
  if (k(e)) return [e];
  let o = [], t = 0, s = 0, n = "";
  for (let r = 0, c = e.length; r < c; r++) {
    let a = e[r];
    if (a === "(") t += 1;
    else if (a === ")") t -= 1;
    else if (a === "[") s += 1;
    else if (a === "]") s -= 1;
    else if (a === "," && !t && !s) {
      o.push(n.trim()), n = "";
      continue;
    }
    n += a;
  }
  return o.push(n.trim()), o;
};
var A = Object.values(u), O = `:(${A.join("|")})`, h = new RegExp(O), j = new RegExp(O, "g"), P = /* @__PURE__ */ new Set(), w = (e) => {
  P.has(e) || (console.warn(e), P.add(e));
}, d = (e, o) => {
  let t = `(?<!(?:${R.join("|")})\\S*)`;
  return A.reduce((s, n) => s.replace(new RegExp(`${t}:${n}`, "g"), `.pseudo-${n}${o ? "-all" : ""}`), e);
}, m = (e, o, t) => {
  let { states: s, withoutPseudoStates: n } = U(e);
  if (s.length === 0 && !t) return e;
  let r = `${t ?? ""}${s.map((c) => `.pseudo-${c}-all`).join("")}`;
  return n = n.replace(":host-context(*)", "").trimStart(), n.startsWith(":host-context(") ? n.replace(new RegExp("(?<=:host-context\\(\\S+)\\)"), `)${r}`) : o ? `:host(${r}) ${n}` : `${r} ${n}`;
}, U = (e) => {
  let o = /* @__PURE__ */ new Set(), t = e.replace(j, (s, n) => (o.add(n), "")).replaceAll("()", "(*)").replace(new RegExp("(?<=[\\s(]),\\s+|(,\\s+)+(?=\\))", "g"), "") || "*";
  return { states: Array.from(o), withoutPseudoStates: t };
}, _ = (e, o) => [...e.matchAll(/:not\(([^)]+)\)/g)].reduce((t, s) => {
  let n = s[0], r = s[1], c = q(r, o);
  return t.replace(n, c);
}, e), q = (e, o) => {
  let t = [];
  for (let s of e.split(/,\s*/)) t.push(m(s, o));
  return `:not(${t.join(", ")})`;
}, v = ({ cssText: e, selectorText: o }, t) => e.replace(o, y(o).flatMap((s) => {
  if (s.includes(".pseudo-")) return [];
  let n = [s];
  if (!h.test(s)) return n;
  let r = d(s);
  r !== s && n.push(r);
  let c = "";
  if (s.startsWith(":host(")) {
    let a = s.match(/^:host\((\S+)\)\s+(.+)$/);
    if (a && h.test(a[2])) {
      let l = a[1], i = a[2];
      l = d(l, true), i = _(i, true), c = m(i, true, l);
    } else c = d(s, true);
  } else {
    let a = _(s, t);
    c = m(a, t);
  }
  return n.push(c), n;
}).join(", ")), b = (e, o = false) => {
  try {
    let s = x(e, 1e3, o);
    return s >= 1e3 && w("Reached maximum of 1000 pseudo selectors per sheet, skipping the rest."), s > 0;
  } catch (t) {
    return String(t).includes("cssRules") ? w(`Can't access cssRules, likely due to CORS restrictions: ${e.href}`) : console.error(t, e.href), false;
  }
}, x = (e, o, t) => {
  let s = 0, n = -1;
  for (let r of e.cssRules) {
    n++;
    let c = 0;
    if (r.__processed) c = r.__pseudoStatesRewrittenCount;
    else {
      if ("cssRules" in r && r.cssRules.length) c = x(r, o - s, t);
      else {
        if (!("selectorText" in r)) continue;
        let a = r;
        if (h.test(a.selectorText)) {
          let l = v(a, t);
          e.deleteRule(n), e.insertRule(l, n), c = 1;
        }
      }
      r.__processed = true, r.__pseudoStatesRewrittenCount = c;
    }
    if (s += c, s >= o) break;
  }
  return s;
};
var S = addons.getChannel(), f = /* @__PURE__ */ new Set(), C = (e, o) => {
  Object.values(u).forEach((t) => {
    e.classList.remove(`pseudo-${t}`), e.classList.remove(`pseudo-${t}-all`);
  }), o.forEach((t) => e.classList.add(t));
};
function E(e, o) {
  let t = [];
  return e.querySelectorAll("*").forEach((s) => {
    s.shadowRoot && t.push(...E(s.shadowRoot, o));
  }), t.push(...e.querySelectorAll(o).values()), t;
}
var K = (e, o = {}) => {
  let t = /* @__PURE__ */ new Map([[e, /* @__PURE__ */ new Set()]]), s = (n, r) => t.set(n, /* @__PURE__ */ new Set([...t.get(n) || [], r]));
  Object.entries(o || {}).forEach(([n, r]) => {
    typeof r == "boolean" ? r && s(e, `${n}-all`) : typeof r == "string" ? E(e, r).forEach((c) => s(c, n)) : Array.isArray(r) && r.forEach((c) => E(e, c).forEach((a) => s(a, n)));
  }), t.forEach((n, r) => {
    let c = /* @__PURE__ */ new Set();
    n.forEach((a) => {
      let l = a.replace("-all", "");
      u[a] ? c.add(`pseudo-${u[a]}`) : u[l] && c.add(`pseudo-${u[l]}-all`);
    }), C(r, c);
  });
}, D = (e) => {
  let o = /* @__PURE__ */ new Set();
  e.className.split(" ").filter((t) => t.match(/^pseudo-(.(?!-all))+$/)).forEach((t) => o.add(t));
  for (let t = e.parentNode; t; ) {
    if (t instanceof ShadowRoot) {
      t = t.host;
      continue;
    }
    if (t instanceof Element) {
      let s = t;
      s.className && s.className.split(" ").filter((n) => n.match(/^pseudo-.+-all$/) !== null).forEach((n) => o.add(n));
    }
    t = t.parentNode;
  }
  C(e, o);
}, $ = (e) => {
  let { rootSelector: o, ...t } = e || {};
  return t;
}, X = (e = {}, o = {}) => e !== null && o !== null && Object.keys(e).length === Object.keys(o).length && Object.keys(e).every((t) => JSON.stringify(e[t]) === JSON.stringify(o[t])), N = (e, { viewMode: o, parameters: t, id: s, globals: n }) => {
  let { pseudo: r } = t, { pseudo: c } = n, { rootSelector: a } = r || {}, l = useMemo(() => a ? document.querySelector(a) : o === "docs" ? document.getElementById(`story--${s}`) : document.getElementById("storybook-root") || document.getElementById("root"), [a, o, s]);
  return useEffect(() => {
    let i = $(r);
    o === "story" && !X(i, c) && S.emit(UPDATE_GLOBALS, { globals: { pseudo: i } });
  }, [r, o]), useEffect(() => {
    if (!l) return;
    let i = setTimeout(() => {
      K(l, c || $(r)), f.forEach(D);
    }, 0);
    return () => clearTimeout(i);
  }, [l, c, r]), e();
}, p = (e) => {
  var _a;
  let o = Array.from(e ? e.styleSheets : document.styleSheets);
  ((_a = e == null ? void 0 : e.adoptedStyleSheets) == null ? void 0 : _a.length) && (o = e.adoptedStyleSheets), o.forEach((t) => b(t, !!e)), e && f && f.add(e.host);
};
S.on(STORY_CHANGED, () => f.clear());
S.on(STORY_RENDERED, () => p());
S.on(GLOBALS_UPDATED, () => p());
S.on(FORCE_RE_RENDER, () => p());
S.on(FORCE_REMOUNT, () => p());
S.on(DOCS_RENDERED, () => p());
Element.prototype.attachShadow && (Element.prototype._attachShadow = Element.prototype.attachShadow, Element.prototype.attachShadow = function(o) {
  let t = this._attachShadow({ ...o, mode: "open" });
  return requestAnimationFrame(() => {
    p(t), f.has(t.host) && D(t.host);
  }), t;
});
var ue = [N], Se = { [g]: false };
export {
  ue as decorators,
  Se as initialGlobals
};