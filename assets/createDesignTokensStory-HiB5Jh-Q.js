import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { a as cloneDeepWith, i as isPlainObject, m as mapValues, o as omitBy } from "./createVisualRegressionStory-Ckg-wQz5.js";
const ColorExample = ({ color }) => jsxRuntimeExports.jsx("div", { style: {
  backgroundColor: color,
  outline: "1px solid silver",
  display: "inline-block",
  height: "2em",
  width: "2em"
} });
const path2css = (path) => `var(--${path.join("-")})`;
const visualizeToken = (token) => {
  if (token["$extensions"] && token["$extensions"]["nl.nldesignsystem.css.property"] && token["$extensions"]["nl.nldesignsystem.css.property"].syntax === "<color>" && typeof token.value === "string") {
    return jsxRuntimeExports.jsx(ColorExample, { color: token.value });
  } else {
    return "";
  }
};
const serializeTokenValue = (value) => typeof value === "string" ? value : typeof value === "number" ? String(value) : JSON.stringify(value, null, 2);
const DesignTokensTable = ({ tokens }) => jsxRuntimeExports.jsxs("table", { children: [jsxRuntimeExports.jsx("thead", { children: jsxRuntimeExports.jsxs("tr", { children: [jsxRuntimeExports.jsx("th", { children: "CSS Variable" }), jsxRuntimeExports.jsx("th", { children: "CSS Value" })] }) }), jsxRuntimeExports.jsx("tbody", { children: tokens.map((token) => {
  const { name, path, value } = token;
  return jsxRuntimeExports.jsxs("tr", { children: [jsxRuntimeExports.jsx("td", { children: jsxRuntimeExports.jsx("code", { children: path2css(path) }) }), jsxRuntimeExports.jsx("td", { children: serializeTokenValue(value) }), jsxRuntimeExports.jsx("td", { children: visualizeToken(token) })] }, name);
}) })] });
const isHiddenDesignToken = (token) => !!token && !!token["$extensions"] && token["$extensions"]["nl.nldesignsystem.hidden"] === true;
const isDesignToken = (value) => Object.prototype.hasOwnProperty.call(value, "value") || Object.prototype.hasOwnProperty.call(value, "$value");
const isDesignTokenDefinition = (value) => isDesignToken(value) || Object.prototype.hasOwnProperty.call(value, "css") || Object.prototype.hasOwnProperty.call(value, "$extensions");
const createEmptyDesignTokenTree = (definition) => {
  const filter = (item) => isDesignTokenDefinition(item) || isDesignToken(item) ? {} : isPlainObject(item) ? mapValues(omitBy(item, (item2) => isHiddenDesignToken(item2)), (item2) => cloneDeepWith(item2, filter)) : void 0;
  return cloneDeepWith(definition, filter);
};
const ComponentTokensTable = ({ component, tokens }) => {
  const componentPath = ["utrecht", component.replace(/^(example|denhaag|utrecht)-/, "")];
  const subset = tokens.filter((token) => componentPath.every((name, index) => token.path[index] === name)).filter((token) => !isHiddenDesignToken(token));
  if (subset.length === 0) {
    return jsxRuntimeExports.jsxs("p", { children: ["This component has ", jsxRuntimeExports.jsx("strong", { children: "no documented design tokens" }), "."] });
  }
  return jsxRuntimeExports.jsx(DesignTokensTable, { tokens: subset });
};
const CopyButton = ({ value, textContent = "Copy" }) => {
  return jsxRuntimeExports.jsx("button", { className: "utrecht-button utrecht-button--secondary-action utrecht-button--html-button", style: { cursor: "copy" }, onClick: () => navigator.clipboard.writeText(value), type: "button", children: textContent });
};
const traverseDeep = (root, parents, current, valueTest, callback) => {
  if (valueTest(current)) {
    callback(parents, current);
  } else if (isPlainObject(current)) {
    Object.entries(current).forEach(([key, value]) => {
      traverseDeep(root, [...parents, key], value, valueTest, callback);
    });
  }
};
const findDesignTokens = (tokens, callback) => traverseDeep(tokens, [], tokens, isDesignTokenDefinition, callback);
const tokensToCSS = (tokens) => {
  const lines = [];
  findDesignTokens(tokens, (path, value) => {
    if (isHiddenDesignToken(value)) {
      return;
    }
    lines.push(`  /* --${path.join("-")}: ${value && value["$extensions"] && value["$extensions"]["nl.nldesignsystem.css.property"] && value["$extensions"]["nl.nldesignsystem.css.property"].syntax ? value["$extensions"]["nl.nldesignsystem.css.property"].syntax : "<value>"}; */`);
  });
  return `.your-theme {
  /* Uncomment each custom property you need */
${lines.join("\n")}
}`;
};
const ExampleTokensCSS = ({ definition }) => {
  const code = tokensToCSS(definition);
  return jsxRuntimeExports.jsxs("section", { children: [jsxRuntimeExports.jsxs("h2", { children: ["Template for ", jsxRuntimeExports.jsx("samp", { children: "your-theme.css" })] }), jsxRuntimeExports.jsx("p", { children: "If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point to see what parts of the component you can customize with design tokens." }), jsxRuntimeExports.jsxs("p", { children: ["Combine the design tokens CSS with our", " ", jsxRuntimeExports.jsx("a", { href: "https://npmjs.com/package/@utrecht/component-library-css", children: "CSS component library pacakge on npm" }), ", and you should be able to quickly and easily create a web page with our components and your own design."] }), jsxRuntimeExports.jsx("div", { children: jsxRuntimeExports.jsx(CopyButton, { value: code, textContent: "Copy CSS" }) }), jsxRuntimeExports.jsx("pre", { children: code })] });
};
const ExampleTokensJSON = ({ definition }) => {
  const emptyTree = createEmptyDesignTokenTree(definition);
  const code = JSON.stringify(emptyTree, null, "  ");
  return jsxRuntimeExports.jsxs("section", { children: [jsxRuntimeExports.jsxs("h2", { children: ["Template ", jsxRuntimeExports.jsx("samp", { children: "tokens.json" }), " for your theme"] }), jsxRuntimeExports.jsxs("p", { children: ["We use the ", jsxRuntimeExports.jsx("a", { href: "https://design-tokens.github.io/community-group/format/", children: "Design Tokens Format" }), " to store our design choices in JSON files. These ", jsxRuntimeExports.jsx("code", { children: "tokens.json" }), " files are translated into other formats such as CSS and SCSS variables, so the design choices can be imported automatically into projects with varying technical stacks."] }), jsxRuntimeExports.jsx("p", { children: "When we develop front-end components in CSS, we avoid putting design decisions in our CSS code directly. Instead we use CSS variables that reference the design tokens. This way we don't need to change the CSS components when over time we make different design decisions, we just include the latest export of the design tokens." }), jsxRuntimeExports.jsx("p", { children: "Because our CSS components are coded in such a way that design decisions —such as fonts, colors and sizes— are stored in an optional file that you don't have to use, you can reuse our CSS components and combine them with design decisions for your own project and brand." }), jsxRuntimeExports.jsxs("p", { children: ["Copy the JSON template below if you want to reuse this component, and replace the empty placeholder object with your own code:", jsxRuntimeExports.jsx("code", { children: `{ "value": "#123456", "comment": "my design choice" }` }), "."] }), jsxRuntimeExports.jsxs("p", { children: ["When you have a collection of design token JSON files, you can use", " ", jsxRuntimeExports.jsx("a", { href: "https://amzn.github.io/style-dictionary/#/", children: "Style Dictionary" }), " to translate them to CSS or any other format your developers need."] }), jsxRuntimeExports.jsx("div", { children: jsxRuntimeExports.jsx(CopyButton, { value: code, textContent: "Copy JSON" }) }), jsxRuntimeExports.jsx("pre", { children: code })] });
};
const ComponentTokensSection = ({ component, tokens, definition }) => jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [definition ? jsxRuntimeExports.jsx(ExampleTokensJSON, { definition }) : "", definition ? jsxRuntimeExports.jsx(ExampleTokensCSS, { definition }) : "", jsxRuntimeExports.jsx(ComponentTokensTable, { component, tokens })] });
const createDesignTokensStory = (meta) => {
  const designTokenStory = {
    args: {
      tokens: meta.parameters.tokens,
      definition: meta.parameters.tokensDefinition,
      component: meta.parameters.tokensPrefix
    },
    parameters: {
      chromatic: {
        disableSnapShot: true
      },
      docs: {
        source: {
          code: ""
        }
      },
      withDocument: true
    },
    render: ({ tokens, definition, component }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentTokensSection, { tokens, definition, component });
    }
  };
  return designTokenStory;
};
export {
  createDesignTokensStory as c
};
