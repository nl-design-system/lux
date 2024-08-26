import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
const CitationDocumentation = ({ component, url }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "lsb-citation", children: [
    `Documentatie afkomstig van `,
    /* @__PURE__ */ jsxRuntimeExports.jsx("cite", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: url, children: component }) }),
    `.`
  ] });
};
CitationDocumentation.__docgenInfo = { "description": "", "methods": [], "displayName": "CitationDocumentation", "props": { "component": { "required": true, "tsType": { "name": "string" }, "description": "" }, "url": { "required": true, "tsType": { "name": "string" }, "description": "" } } };
export {
  CitationDocumentation as C
};
