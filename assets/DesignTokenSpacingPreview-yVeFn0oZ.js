import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { r as reactExports } from "./index-aC1ZMUrs.js";
import "./createVisualRegressionStory-CMDMpfq0.js";
const pxToRem = (px, base = 16) => {
  const tempPx = `${px}`.replace("px", "");
  return 1 / base * parseInt(tempPx, 10) + "rem";
};
const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.padStart(2, "0");
};
const rgbaStringToRgbArray = (rgba) => {
  var _a;
  return ((_a = rgba.match(/\d+/g)) == null ? void 0 : _a.map(Number)) ?? [];
};
const rgbaToHex = (rgba) => {
  const [r, g, b, a] = rgbaStringToRgbArray(rgba);
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${a != null ? componentToHex(a) : ""}`;
};
const tokenToCssVar = (token) => `var(--${token.replace(/\./g, "-")})`;
const extractProperty = (token, group) => {
  const groupPrefix = `${group}-`;
  const borderPartIndex = token.indexOf(groupPrefix) + groupPrefix.length;
  const nextPeriodSeparator = token.indexOf(".", borderPartIndex);
  return token.substring(borderPartIndex, nextPeriodSeparator);
};
const DesignTokenBorderPreview = ({ token, value, set, group = "border" }) => {
  const bubbleElem = reactExports.useRef(null);
  const cssVar = tokenToCssVar(token);
  const property = extractProperty(token, group);
  const [tokenValue, setTokenValue] = reactExports.useState(cssVar);
  const previewStyle = {
    [`--dt-border-${property}`]: tokenValue
  };
  reactExports.useEffect(() => {
    const computedStyle = window.getComputedStyle(bubbleElem.current, "before");
    const borderProperty = `border${property.substring(0, 1).toUpperCase()}${property.substring(1)}`;
    const borderValue = computedStyle[borderProperty];
    setTokenValue(borderValue);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-preview lsb-dt-preview--border", ref: bubbleElem, style: previewStyle, children: token }) }),
    value ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-value", children: value }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-value", children: tokenValue }) }),
    set ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-set", children: set }) }) : null
  ] });
};
DesignTokenBorderPreview.__docgenInfo = { "description": "", "methods": [], "displayName": "DesignTokenBorderPreview", "props": { "token": { "required": true, "tsType": { "name": "string" }, "description": "" }, "group": { "required": false, "tsType": { "name": "union", "raw": "'border' | 'outline'", "elements": [{ "name": "literal", "value": "'border'" }, { "name": "literal", "value": "'outline'" }] }, "description": "", "defaultValue": { "value": "'border'", "computed": false } }, "value": { "required": false, "tsType": { "name": "string" }, "description": "" }, "set": { "required": false, "tsType": { "name": "union", "raw": "'product' | 'mode'", "elements": [{ "name": "literal", "value": "'product'" }, { "name": "literal", "value": "'mode'" }] }, "description": "" } } };
const DesignTokenColorPreview = ({ token, reference, set }) => {
  const bubbleElem = reactExports.useRef(null);
  const cssVar = tokenToCssVar(token);
  const [tokenValue, setTokenValue] = reactExports.useState(cssVar);
  reactExports.useEffect(() => {
    const rgbValue = window.getComputedStyle(bubbleElem.current, "before").backgroundColor;
    const hexValue = rgbaToHex(rgbValue);
    setTokenValue(hexValue);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "lsb-dt-preview",
        ref: bubbleElem,
        style: { "--dt-background-color": cssVar },
        children: token
      }
    ) }),
    reference ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dt-reference", children: reference }) }) : null,
    set ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dt-set", children: set }) }) : null,
    !reference ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dt-value", children: tokenValue }) }) : null
  ] });
};
DesignTokenColorPreview.__docgenInfo = { "description": "", "methods": [], "displayName": "DesignTokenColorPreview", "props": { "token": { "required": true, "tsType": { "name": "string" }, "description": "" }, "reference": { "required": true, "tsType": { "name": "string" }, "description": "" }, "set": { "required": true, "tsType": { "name": "union", "raw": "'product' | 'mode'", "elements": [{ "name": "literal", "value": "'product'" }, { "name": "literal", "value": "'mode'" }] }, "description": "" } } };
const getPropertyFromToken = (token) => {
  const matches = token.match(/(font-[^.]+|line-height)/i);
  if (!matches || !matches.length) {
    return "";
  }
  return matches[0];
};
const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
};
const DesignTokenFontPreview = ({ token, value, set, reference }) => {
  const bubbleElem = reactExports.useRef(null);
  const previewStyle = {};
  const property = getPropertyFromToken(token);
  const valueClassName = property === "font-size" ? "dt-value--line-height-reset" : "";
  const valueStyle = {
    [toCamelCase(property)]: tokenToCssVar(token)
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-preview lsb-dt-preview--font", ref: bubbleElem, style: previewStyle, children: token }) }),
    !reference && value ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: valueClassName, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-value dt-value--font", style: valueStyle, children: value }) }) : null,
    reference ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-reference", children: reference }) }) : null,
    set ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-set", children: set }) }) : null
  ] });
};
DesignTokenFontPreview.__docgenInfo = { "description": "", "methods": [], "displayName": "DesignTokenFontPreview", "props": { "token": { "required": true, "tsType": { "name": "string" }, "description": "" }, "reference": { "required": false, "tsType": { "name": "string" }, "description": "" }, "set": { "required": false, "tsType": { "name": "union", "raw": "'product' | 'viewport'", "elements": [{ "name": "literal", "value": "'product'" }, { "name": "literal", "value": "'viewport'" }] }, "description": "" }, "value": { "required": true, "tsType": { "name": "string" }, "description": "" } } };
const DesignTokenOverview = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "lux-theme--logius-light", children });
DesignTokenOverview.__docgenInfo = { "description": "", "methods": [], "displayName": "DesignTokenOverview" };
const EXCLUDED_TOKENS_FOR_PREVIEW = ["figma.screen-size", "lux.grid.max-inline"];
const DesignTokenSizingPreview = ({ token, value, set }) => {
  const bubbleElem = reactExports.useRef(null);
  const cssVar = tokenToCssVar(token);
  const style = {};
  if (!EXCLUDED_TOKENS_FOR_PREVIEW.includes(token)) {
    Object.assign(style, {
      "--dt-inline-size": cssVar
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-preview lsb-dt-preview--sizing", ref: bubbleElem, style, children: token }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-value", children: value }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-set", children: set }) })
  ] });
};
DesignTokenSizingPreview.__docgenInfo = { "description": "", "methods": [], "displayName": "DesignTokenSizingPreview", "props": { "token": { "required": true, "tsType": { "name": "string" }, "description": "" }, "set": { "required": true, "tsType": { "name": "union", "raw": "'common' | 'product' | 'viewport'", "elements": [{ "name": "literal", "value": "'common'" }, { "name": "literal", "value": "'product'" }, { "name": "literal", "value": "'viewport'" }] }, "description": "" }, "value": { "required": true, "tsType": { "name": "string" }, "description": "" } } };
const DesignTokenSpacingPreview = ({ token }) => {
  const bubbleElem = reactExports.useRef(null);
  const cssVar = tokenToCssVar(token);
  const [tokenValue, setTokenValue] = reactExports.useState(cssVar);
  const style = {
    "--dt-inline-size": cssVar
  };
  reactExports.useEffect(() => {
    const pxValue = window.getComputedStyle(bubbleElem.current, "before").inlineSize;
    const inlineSize = pxToRem(pxValue);
    setTokenValue(inlineSize);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-preview lsb-dt-preview--spacing", ref: bubbleElem, style, children: token }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "lsb-dt-value", children: tokenValue }) })
  ] });
};
DesignTokenSpacingPreview.__docgenInfo = { "description": "", "methods": [], "displayName": "DesignTokenSpacingPreview", "props": { "token": { "required": true, "tsType": { "name": "string" }, "description": "" } } };
export {
  DesignTokenOverview as D,
  DesignTokenBorderPreview as a,
  DesignTokenColorPreview as b,
  DesignTokenFontPreview as c,
  DesignTokenSizingPreview as d,
  DesignTokenSpacingPreview as e
};
