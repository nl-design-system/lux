import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { a as cloneDeepWith, i as isPlainObject, m as mapValues, o as omitBy } from "./createVisualRegressionStory-CMDMpfq0.js";
import { R as React, r as reactExports } from "./index-aC1ZMUrs.js";
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
const DesignTokensTable = ({ tokens: tokens2 }) => jsxRuntimeExports.jsxs("table", { children: [jsxRuntimeExports.jsx("thead", { children: jsxRuntimeExports.jsxs("tr", { children: [jsxRuntimeExports.jsx("th", { children: "CSS Variable" }), jsxRuntimeExports.jsx("th", { children: "CSS Value" })] }) }), jsxRuntimeExports.jsx("tbody", { children: tokens2.map((token) => {
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
const ComponentTokensTable = ({ component, tokens: tokens2 }) => {
  const componentPath = ["utrecht", component.replace(/^(example|denhaag|utrecht)-/, "")];
  const subset = tokens2.filter((token) => componentPath.every((name, index) => token.path[index] === name)).filter((token) => !isHiddenDesignToken(token));
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
const findDesignTokens = (tokens2, callback) => traverseDeep(tokens2, [], tokens2, isDesignTokenDefinition, callback);
const tokensToCSS = (tokens2) => {
  const lines = [];
  findDesignTokens(tokens2, (path, value) => {
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
const ComponentTokensSection = ({ component, tokens: tokens2, definition }) => jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [definition ? jsxRuntimeExports.jsx(ExampleTokensJSON, { definition }) : "", definition ? jsxRuntimeExports.jsx(ExampleTokensCSS, { definition }) : "", jsxRuntimeExports.jsx(ComponentTokensTable, { component, tokens: tokens2 })] });
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
      }
    },
    render: ({ tokens: tokens2, definition, component }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentTokensSection, { tokens: tokens2, definition, component });
    }
  };
  return designTokenStory;
};
const tokens = [
  {
    parent: "core/default",
    type: "spacing",
    value: "0",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "0"
    },
    name: "0",
    attributes: {},
    path: [
      "lux",
      "space",
      "0"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#fbfbfb",
      description: ""
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#ddeff8",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#ddeff8"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "lichtblauw",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#e5b3d0",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#e5b3d0"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "violet",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#c6b9cf"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "paars",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#b3d7ee",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#b3d7ee"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "hemelblauw",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#b3d2e1",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#b3d2e1"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerblauw",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#d6f2e9",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#d6f2e9"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "mintgroen",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#d6d7b3",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#d6d7b3"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "mosgroen",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#c4dbb6",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#c4dbb6"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "groen",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#becdc3",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#becdc3"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergroen",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#dfd4b6",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#dfd4b6"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "bruin",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#d1c2be",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#d1c2be"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerbruin",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#fdf6bc",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#fdf6bc"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "geel",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#ffe9b8",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#ffe9b8"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergeel",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f6d4b3",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f6d4b3"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "oranje",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f2bfbc",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f2bfbc"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "rood",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#fbdef0",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#fbdef0"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "roze",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#efb3ce",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#efb3ce"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "robijnrood",
      "100"
    ]
  },
  {
    value: "#b8c6d5",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#b8c6d5",
      type: "color"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "color",
      "lintblauw",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "0.5rem"
    },
    name: "100",
    attributes: {},
    path: [
      "lux",
      "space",
      "100"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "1.5 * 0.5rem"
    },
    name: "150",
    attributes: {},
    path: [
      "lux",
      "space",
      "150"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f3f3f3",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f3f3f3",
      description: ""
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "200"
    ]
  },
  {
    value: "#CCE7F4",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#CCE7F4",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "lichtblauw",
      "200"
    ]
  },
  {
    value: "#D88CB7",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#D88CB7",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "violet",
      "200"
    ]
  },
  {
    value: "#A995B7",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#A995B7",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "paars",
      "200"
    ]
  },
  {
    value: "#8CC3E6",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#8CC3E6",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "hemelblauw",
      "200"
    ]
  },
  {
    value: "#8CBBD2",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#8CBBD2",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerblauw",
      "200"
    ]
  },
  {
    value: "#C1EBDE",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#C1EBDE",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "mintgroen",
      "200"
    ]
  },
  {
    value: "#C1C38C",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#C1C38C",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "mosgroen",
      "200"
    ]
  },
  {
    value: "#A5C991",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#A5C991",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "groen",
      "200"
    ]
  },
  {
    value: "#9DB4A4",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#9DB4A4",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergroen",
      "200"
    ]
  },
  {
    value: "#CFBF90",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#CFBF90",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "bruin",
      "200"
    ]
  },
  {
    value: "#BAA39D",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#BAA39D",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerbruin",
      "200"
    ]
  },
  {
    value: "#FCF199",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#FCF199",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "geel",
      "200"
    ]
  },
  {
    value: "#FDDE94",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#FDDE94",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergeel",
      "200"
    ]
  },
  {
    value: "#F1BE8C",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#F1BE8C",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "oranje",
      "200"
    ]
  },
  {
    value: "#EC9F99",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#EC9F99",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "rood",
      "200"
    ]
  },
  {
    value: "#F8CEE8",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#F8CEE8",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "roze",
      "200"
    ]
  },
  {
    value: "#E78CB6",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#E78CB6",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "robijnrood",
      "200"
    ]
  },
  {
    value: "#95a9c0",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#95a9c0",
      type: "color"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "color",
      "lintblauw",
      "200"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "2 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "2 * 0.5rem"
    },
    name: "200",
    attributes: {},
    path: [
      "lux",
      "space",
      "200"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "0.25 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "0.25 * 0.5rem"
    },
    name: "25",
    attributes: {},
    path: [
      "lux",
      "space",
      "25"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#e6e6e6",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#e6e6e6",
      description: ""
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "300"
    ]
  },
  {
    value: "#BCDFF0",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#BCDFF0",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "lichtblauw",
      "300"
    ]
  },
  {
    value: "#CB66A0",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#CB66A0",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "violet",
      "300"
    ]
  },
  {
    value: "#8D729F",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#8D729F",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "paars",
      "300"
    ]
  },
  {
    value: "#66AFDD",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#66AFDD",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "hemelblauw",
      "300"
    ]
  },
  {
    value: "#66A4C3",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#66A4C3",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerblauw",
      "300"
    ]
  },
  {
    value: "#ACE4D3",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#ACE4D3",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "mintgroen",
      "300"
    ]
  },
  {
    value: "#ADAF66",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#ADAF66",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "mosgroen",
      "300"
    ]
  },
  {
    value: "#88B76D",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#88B76D",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "groen",
      "300"
    ]
  },
  {
    value: "#7D9B87",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#7D9B87",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergroen",
      "300"
    ]
  },
  {
    value: "#BFA96C",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#BFA96C",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "bruin",
      "300"
    ]
  },
  {
    value: "#A3847D",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#A3847D",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerbruin",
      "300"
    ]
  },
  {
    value: "#FBED78",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#FBED78",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "geel",
      "300"
    ]
  },
  {
    value: "#FDD370",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#FDD370",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergeel",
      "300"
    ]
  },
  {
    value: "#EDA966",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#EDA966",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "oranje",
      "300"
    ]
  },
  {
    value: "#E67F78",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#E67F78",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "rood",
      "300"
    ]
  },
  {
    value: "#F6BDE1",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#F6BDE1",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "roze",
      "300"
    ]
  },
  {
    value: "#DF669D",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#DF669D",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "robijnrood",
      "300"
    ]
  },
  {
    value: "#738eab",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#738eab",
      type: "color"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "color",
      "lintblauw",
      "300"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "3 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "3 * 0.5rem"
    },
    name: "300",
    attributes: {},
    path: [
      "lux",
      "space",
      "300"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#a7a7a7",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#a7a7a7",
      description: ""
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "400"
    ]
  },
  {
    value: "#ABD7ED",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#ABD7ED",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "lichtblauw",
      "400"
    ]
  },
  {
    value: "#BE4088",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#BE4088",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "violet",
      "400"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#714f87",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#714f87"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "paars",
      "400"
    ]
  },
  {
    value: "#409CD5",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#409CD5",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "hemelblauw",
      "400"
    ]
  },
  {
    value: "#408EB4",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#408EB4",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerblauw",
      "400"
    ]
  },
  {
    value: "#98DDC8",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#98DDC8",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "mintgroen",
      "400"
    ]
  },
  {
    value: "#999C40",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#999C40",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "mosgroen",
      "400"
    ]
  },
  {
    value: "#6AA549",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#6AA549",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "groen",
      "400"
    ]
  },
  {
    value: "#5D8269",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#5D8269",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergroen",
      "400"
    ]
  },
  {
    value: "#AF9447",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#AF9447",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "bruin",
      "400"
    ]
  },
  {
    value: "#8D665D",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#8D665D",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerbruin",
      "400"
    ]
  },
  {
    value: "#FAE856",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#FAE856",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "geel",
      "400"
    ]
  },
  {
    value: "#FDC84D",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#FDC84D",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergeel",
      "400"
    ]
  },
  {
    value: "#E89440",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#E89440",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "oranje",
      "400"
    ]
  },
  {
    value: "#DF6056",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#DF6056",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "rood",
      "400"
    ]
  },
  {
    value: "#F4ADD9",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#F4ADD9",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "roze",
      "400"
    ]
  },
  {
    value: "#D74085",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#D74085",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "robijnrood",
      "400"
    ]
  },
  {
    value: "#4f7196",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#4f7196",
      type: "color"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "color",
      "lintblauw",
      "400"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "4 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "4 * 0.5rem"
    },
    name: "400",
    attributes: {},
    path: [
      "lux",
      "space",
      "400"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#eef7fb",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#eef7fb"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "lichtblauw",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f2d9e7",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f2d9e7"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "violet",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#e3dce7",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#e3dce7"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "paars",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#d9ebf7",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#d9ebf7"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "hemelblauw",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#d9e8f0",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#d9e8f0"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerblauw",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#eaf8f4",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#eaf8f4"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "mintgroen",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#ebebd9",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#ebebd9"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "mosgroen",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#e1eddb",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#e1eddb"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "groen",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#dfe6e1",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#dfe6e1"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergroen",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#efeada",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#efeada"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "bruin",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#e8e0df",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#e8e0df"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerbruin",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#fefbdd",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#fefbdd"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "geel",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#fff4db",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#fff4db"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergeel",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#fbead9",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#fbead9"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "oranje",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f9dfdd",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f9dfdd"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "rood",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#fdeff8",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#fdeff8"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "roze",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f7d9e7",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f7d9e7"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "robijnrood",
      "50"
    ]
  },
  {
    value: "#dce3ea",
    type: "color",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      value: "#dce3ea",
      type: "color"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "color",
      "lintblauw",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "0.5 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "0.5 * 0.5rem"
    },
    name: "50",
    attributes: {},
    path: [
      "lux",
      "space",
      "50"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#696969",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#696969",
      description: ""
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#8fcae7",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#8fcae7"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "lichtblauw",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#a90061",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#a90061"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "violet",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#42145f",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#42145f"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "paars",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#007bc7",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#007bc7"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "hemelblauw",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#01689b",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#01689b"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerblauw",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#76d2b6",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#76d2b6"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "mintgroen",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#777b00",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#777b00"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "mosgroen",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#39870c",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#39870c"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "groen",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#275937",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#275937"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergroen",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#94710a",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#94710a"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "bruin",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#673327",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#673327"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerbruin",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f9e11e",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f9e11e"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "geel",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#ffb612",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#ffb612"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergeel",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#e17000",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#e17000"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "oranje",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#d52b1e",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#d52b1e"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "rood",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#f092cd",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#f092cd"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "roze",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#ca005d",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#ca005d"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "robijnrood",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#154273",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#154273"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "color",
      "lintblauw",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "5 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "5 * 0.5rem"
    },
    name: "500",
    attributes: {},
    path: [
      "lux",
      "space",
      "500"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#383838",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#383838",
      description: ""
    },
    name: "600",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "600"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "6 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "6 * 0.5rem"
    },
    name: "600",
    attributes: {},
    path: [
      "lux",
      "space",
      "600"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#282828",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#282828",
      description: ""
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#52002f",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#52002f"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "violet",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#00436c",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#00436c"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "hemelblauw",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#013f5e",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#013f5e"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkerblauw",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#004b17",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#004b17"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "groen",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#bf880d",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#bf880d"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "donkergeel",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#b35900",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#b35900"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "oranje",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#542621",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#542621"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "color",
      "rood",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "spacing",
    value: "7 * 0.5rem",
    filePath: "src/imported/core/spacing.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "spacing",
      value: "7 * 0.5rem"
    },
    name: "700",
    attributes: {},
    path: [
      "lux",
      "space",
      "700"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#1d1d1d",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#1d1d1d",
      description: ""
    },
    name: "800",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "800"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#171717",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#171717",
      description: ""
    },
    name: "900",
    attributes: {},
    path: [
      "lux",
      "color",
      "grijs",
      "900"
    ]
  },
  {
    type: "color",
    value: "#d9ebf7",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.info.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "alert",
      "info",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#e1eddb",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.success.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "alert",
      "success",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#f9dfdd",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.error.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "alert",
      "error",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#fff4db",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.warning.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "alert",
      "warning",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#462e87",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.brand.default}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#2c1d54",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.brand.hover}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "hover",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#462e87",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.brand.default}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#1d1d1d",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.background.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "disabled",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#383838",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.secondary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "hover",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#1d1d1d",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.background.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "disabled",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#383838",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.tertiary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "hover",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#1d1d1d",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.background.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "disabled",
      "background-color"
    ]
  },
  {
    parent: "mode/light",
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/icon-logo.json",
    isSource: false,
    original: {
      parent: "mode/light",
      type: "color",
      value: "{mode.icon-logo.eidas.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "icon-logo",
      "eidas",
      "background-color"
    ]
  },
  {
    value: "#ffffff00",
    type: "color",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      value: "{lux.color.none}",
      type: "color"
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "link",
      "focus",
      "background-color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#282828",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.background.default}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "background-color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#383838",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.background.hover}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "hover",
      "background-color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#696969",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{mode.login-link.active.background-color}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#1d1d1d",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.background.subdued}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#fff4db",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.warning.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "warning",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#f9dfdd",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.error.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "error",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#e1eddb",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.success.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "ok",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#d9ebf7",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.info.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "info",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.paars.100}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "disabled",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "focus",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#A995B7",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.paars.200}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "hover",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "pressed",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#462e87",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#462e87",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.active.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#1d1d1d",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.disabled.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "disabled",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#2c1d54",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "hover",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#462e87",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "focus",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#2c1d54",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "pressed",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.active.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#1d1d1d",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.disabled.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "disabled",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#383838",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "hover",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "focus",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#383838",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "pressed",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.active.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "active",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#1d1d1d",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.disabled.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "disabled",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#383838",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "hover",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "focus",
      "background-color"
    ]
  },
  {
    type: "color",
    value: "#383838",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.hover.background-color}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "pressed",
      "background-color"
    ]
  },
  {
    value: "#ffffff00",
    type: "color",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.focus.background-color}",
      type: "color"
    },
    name: "background-color",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "focus",
      "background-color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#ffffff00",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{lux.color.none}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "product",
      "button",
      "secondary",
      "background-color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#e3e0ed",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.color.brand.subdued}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "product",
      "button",
      "secondary",
      "hover",
      "background-color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#e3e0ed",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.color.brand.subdued}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "product",
      "button",
      "tertiary",
      "hover",
      "background-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#383838",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.background.hover}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "mode",
      "button",
      "tertiary",
      "hover",
      "background-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#383838",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.background.hover}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "mode",
      "button",
      "secondary",
      "hover",
      "background-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff00",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.none}",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "mode",
      "button",
      "secondary",
      "background-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff00",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "#ffffff00",
      description: ""
    },
    name: "background-color",
    attributes: {},
    path: [
      "mode",
      "icon-logo",
      "eidas",
      "background-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#696969",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.500}"
    },
    name: "background-color",
    attributes: {},
    path: [
      "mode",
      "login-link",
      "active",
      "background-color"
    ]
  },
  {
    type: "fontWeights",
    value: "Bold",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "Bold"
    },
    name: "bold",
    attributes: {},
    path: [
      "lux",
      "font-weight",
      "bold"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "alert",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "hover",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "disabled",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.secondary.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.secondary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "hover",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.secondary.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "disabled",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "hover",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.none}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "disabled",
      "border-color"
    ]
  },
  {
    parent: "mode/light",
    type: "color",
    value: "#d1d1d1",
    filePath: "src/imported/component/icon-logo.json",
    isSource: false,
    original: {
      parent: "mode/light",
      type: "color",
      value: "{mode.icon-logo.digid.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "icon-logo",
      "digid",
      "border-color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#696969",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.border.default}",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "border-color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#696969",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.border.default}",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "hover",
      "border-color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.border.strong}",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "warning",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "error",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "ok",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "info",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.paars.500}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "disabled",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "focus",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "hover",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "pressed",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.active.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.disabled.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "disabled",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "hover",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "focus",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "pressed",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.active.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.disabled.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "disabled",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "hover",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "focus",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#696969",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "pressed",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.active.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "active",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.disabled.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "disabled",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "hover",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "focus",
      "border-color"
    ]
  },
  {
    type: "color",
    value: "#ffffff00",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.hover.border-color}"
    },
    name: "border-color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "pressed",
      "border-color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#462e87",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.button.color}",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "product",
      "button",
      "secondary",
      "border-color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#2c1d54",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.color.brand.hover}",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "product",
      "button",
      "secondary",
      "hover",
      "border-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#696969",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.border.default}",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "mode",
      "button",
      "secondary",
      "hover",
      "border-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#696969",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.border.default}",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "mode",
      "button",
      "secondary",
      "border-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#d1d1d1",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "#d1d1d1",
      description: ""
    },
    name: "border-color",
    attributes: {},
    path: [
      "mode",
      "icon-logo",
      "digid",
      "border-color"
    ]
  },
  {
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "borderRadius",
      value: "{lux.border-radius.default}"
    },
    name: "border-radius",
    attributes: {},
    path: [
      "lux",
      "alert",
      "border-radius"
    ]
  },
  {
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "borderRadius",
      value: "{lux.border-radius.default}"
    },
    name: "border-radius",
    attributes: {},
    path: [
      "lux",
      "button",
      "border-radius"
    ]
  },
  {
    parent: "login link/default",
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "borderRadius",
      value: "{lux.border-radius.default}"
    },
    name: "border-radius",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "border-radius"
    ]
  },
  {
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "borderRadius",
      value: "{lux.alert.border-radius}"
    },
    name: "border-radius",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "border-radius"
    ]
  },
  {
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "borderRadius",
      value: "{lux.button.border-radius}"
    },
    name: "border-radius",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "border-radius"
    ]
  },
  {
    type: "other",
    value: "solid",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      type: "other",
      value: "solid"
    },
    name: "border-style",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "border-style"
    ]
  },
  {
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "borderWidth",
      value: "{lux.border-width.default}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "lux",
      "alert",
      "border-width"
    ]
  },
  {
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "borderWidth",
      value: "{lux.border-width.default}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "lux",
      "button",
      "border-width"
    ]
  },
  {
    parent: "login link/default",
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "borderWidth",
      value: "{lux.border-width.default}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "border-width"
    ]
  },
  {
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "borderWidth",
      value: "{lux.alert.border-width}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "border-width"
    ]
  },
  {
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "borderWidth",
      value: "{lux.button.border-width}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "border-width"
    ]
  },
  {
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "borderWidth",
      value: "{lux.button.border-width}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "border-width"
    ]
  },
  {
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "borderWidth",
      value: "{lux.button.border-width}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "border-width"
    ]
  },
  {
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "borderWidth",
      value: "{lux.button.border-width}"
    },
    name: "border-width",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "border-width"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#000000",
    description: "Gebruik deze kleur voor de achtergrond van de website, hierbovenop komen de background kleuren.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.zwart}",
      description: "Gebruik deze kleur voor de achtergrond van de website, hierbovenop komen de background kleuren."
    },
    name: "canvas",
    attributes: {},
    path: [
      "lux",
      "color",
      "canvas"
    ]
  },
  {
    parent: "core/default",
    type: "borderRadius",
    value: "999px",
    filePath: "src/imported/core/border.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "borderRadius",
      value: "999px"
    },
    name: "circle",
    attributes: {},
    path: [
      "lux",
      "border-radius",
      "circle"
    ]
  },
  {
    type: "sizing",
    value: "1rem",
    description: "Mist in utrecht alert, wat gaan we hiermee doen? ",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.size.icon}",
      description: "Mist in utrecht alert, wat gaan we hiermee doen? "
    },
    name: "close-button-size",
    attributes: {},
    path: [
      "lux",
      "alert",
      "close-button-size"
    ]
  },
  {
    type: "color",
    value: "#282828",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.grijs.700}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "alert",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.foreground.onEmphasis}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.foreground.onEmphasis}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.foreground.onEmphasis}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#a7a7a7",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.foreground.subdued}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "disabled",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.secondary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.secondary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.secondary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#a7a7a7",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.foreground.subdued}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "secondary",
      "disabled",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.tertiary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.tertiary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.button.tertiary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#a7a7a7",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.foreground.subdued}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "button",
      "tertiary",
      "disabled",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ddeff8",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.link.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "link",
      "color"
    ]
  },
  {
    type: "color",
    value: "#8fcae7",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.link.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "link",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.link.active.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "link",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{mode.link.visited.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "link",
      "visited",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ddeff8",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.foreground.link}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "link",
      "focus",
      "color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.foreground.default}"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.foreground.default}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "hover",
      "color"
    ]
  },
  {
    parent: "login link/default",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "color",
      value: "{lux.color.foreground.default}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "active",
      "color"
    ]
  },
  {
    value: "#fbfbfb",
    type: "color",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.color.foreground.default}",
      type: "color"
    },
    name: "color",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "color"
    ]
  },
  {
    type: "color",
    value: "#282828",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "color"
    ]
  },
  {
    type: "color",
    value: "#282828",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "warning",
      "color"
    ]
  },
  {
    type: "color",
    value: "#282828",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "error",
      "color"
    ]
  },
  {
    type: "color",
    value: "#282828",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "ok",
      "color"
    ]
  },
  {
    type: "color",
    value: "#282828",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.grijs.700}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "icon",
      "color"
    ]
  },
  {
    type: "color",
    value: "#d52b1e",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.error.default}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "icon",
      "error",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffb612",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.warning.default}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "icon",
      "warning",
      "color"
    ]
  },
  {
    type: "color",
    value: "#39870c",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.success.default}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "icon",
      "ok",
      "color"
    ]
  },
  {
    type: "color",
    value: "#007bc7",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.feedback.info.default}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "icon",
      "info",
      "color"
    ]
  },
  {
    type: "color",
    value: "#282828",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.alert.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "info",
      "color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.color.paars.500}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "disabled",
      "color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "focus",
      "color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#42145f",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{utrecht.button.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "pressed",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.active.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#a7a7a7",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.disabled.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "disabled",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "focus",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.primary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "pressed",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.active.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#a7a7a7",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.disabled.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "disabled",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "focus",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.secondary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "pressed",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.active.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#a7a7a7",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.disabled.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "disabled",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "focus",
      "color"
    ]
  },
  {
    type: "color",
    value: "#fbfbfb",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.button.tertiary.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "pressed",
      "color"
    ]
  },
  {
    value: "#fbfbfb",
    type: "color",
    filePath: "src/imported/nl/utrecht-document.json",
    isSource: false,
    original: {
      value: "{lux.color.foreground.default}",
      type: "color"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "document",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ddeff8",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.link.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.link.active.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "active",
      "color"
    ]
  },
  {
    type: "color",
    value: "#ddeff8",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.link.focus.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "focus",
      "color"
    ]
  },
  {
    type: "color",
    value: "#8fcae7",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.link.hover.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "hover",
      "color"
    ]
  },
  {
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.link.visited.color}"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "visited",
      "color"
    ]
  },
  {
    value: "#fbfbfb",
    type: "color",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.color}",
      type: "color"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "color"
    ]
  },
  {
    value: "#fbfbfb",
    type: "color",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.color}",
      type: "color"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "lead",
      "color"
    ]
  },
  {
    value: "#fbfbfb",
    type: "color",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.color}",
      type: "color"
    },
    name: "color",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "small",
      "color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#462e87",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.button.color}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "product",
      "button",
      "secondary",
      "color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#462e87",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.button.color}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "product",
      "button",
      "secondary",
      "hover",
      "color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#462e87",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.button.color}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "product",
      "button",
      "tertiary",
      "color"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#462e87",
    description: "",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.button.color}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "product",
      "button",
      "tertiary",
      "hover",
      "color"
    ]
  },
  {
    parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
    type: "color",
    value: "#462e87",
    description: "",
    filePath: "src/imported/NLdoc/Waterschap Hollandse Delta.json",
    isSource: true,
    original: {
      parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
      type: "color",
      value: "{nldoc.color.brand.default}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "nldoc",
      "button",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ddeff8",
    description: "Gebruik deze kleur voor link tekst",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.lichtblauw.100}",
      description: "Gebruik deze kleur voor link tekst"
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "link",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#c6b9cf",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.paars.100}"
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "link",
      "visited",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#8fcae7",
    description: "Gebruik deze kleur voor de hover van link tekst",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.lichtblauw.500}",
      description: "Gebruik deze kleur voor de hover van link tekst"
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "link",
      "hover",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#c6b9cf",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.paars.100}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "link",
      "active",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.foreground.default}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "button",
      "tertiary",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.foreground.default}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "button",
      "tertiary",
      "hover",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.foreground.default}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "button",
      "secondary",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.foreground.default}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "button",
      "secondary",
      "hover",
      "color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.wit}",
      description: ""
    },
    name: "color",
    attributes: {},
    path: [
      "mode",
      "rijkslogo",
      "color"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.100}"
    },
    name: "column-gap",
    attributes: {},
    path: [
      "lux",
      "alert",
      "column-gap"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.100}"
    },
    name: "column-gap",
    attributes: {},
    path: [
      "lux",
      "button",
      "column-gap"
    ]
  },
  {
    type: "spacing",
    value: "0.5 * 0.5rem",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.50}"
    },
    name: "column-gap",
    attributes: {},
    path: [
      "lux",
      "link",
      "column-gap"
    ]
  },
  {
    parent: "login link/default",
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "spacing",
      value: "{lux.space.100}"
    },
    name: "column-gap",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "column-gap"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.alert.column-gap}"
    },
    name: "column-gap",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "column-gap"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.button.column-gap}"
    },
    name: "column-gap",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "column-gap"
    ]
  },
  {
    value: "0.5 * 0.5rem",
    type: "spacing",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.column-gap}",
      type: "spacing"
    },
    name: "column-gap",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "column-gap"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "borderRadius",
      value: "0px"
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "border-radius",
      "default"
    ]
  },
  {
    parent: "core/default",
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/core/border.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "borderWidth",
      value: "1px"
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "border-width",
      "default"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#462e87",
    description: "kleur van het product",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.color.brand.default}",
      description: "kleur van het product"
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "brand",
      "default"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fbfbfb",
    description: "Standaard kleur voor teksten en iconen. Gebruik deze voor body content, titels en labels.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.100}",
      description: "Standaard kleur voor teksten en iconen. Gebruik deze voor body content, titels en labels."
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "foreground",
      "default"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#282828",
    description: "Gebruik deze kleur voor de achtergrond van de website, hierbovenop komen de background kleuren.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.700}",
      description: "Gebruik deze kleur voor de achtergrond van de website, hierbovenop komen de background kleuren."
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "background",
      "default"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#696969",
    description: "Border kleur",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.500}",
      description: "Border kleur"
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "border",
      "default"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#39870c",
    description: "Gebruik deze kleur om een positieve boodschap te benadrukken.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.groen.500}",
      description: "Gebruik deze kleur om een positieve boodschap te benadrukken."
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "success",
      "default"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#007bc7",
    description: "Gebruik deze kleur om een informatieve boodschap te benadrukken.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.hemelblauw.500}",
      description: "Gebruik deze kleur om een informatieve boodschap te benadrukken."
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "info",
      "default"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#d52b1e",
    description: "Gebruik deze kleur om een negatieve boodschap te benadrukken.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.rood.500}",
      description: "Gebruik deze kleur om een negatieve boodschap te benadrukken."
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "error",
      "default"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffb612",
    description: "Gebruik deze kleur om een waarschuwing te benadrukken.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.donkergeel.500}",
      description: "Gebruik deze kleur om een waarschuwing te benadrukken."
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "warning",
      "default"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1rem*1.5",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "{lux.font-size.body.default}*1.5"
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "body",
      "default"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1rem"
    },
    name: "default",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "body",
      "default"
    ]
  },
  {
    parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
    type: "color",
    value: "#462e87",
    description: "",
    filePath: "src/imported/NLdoc/Waterschap Hollandse Delta.json",
    isSource: true,
    original: {
      parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
      type: "color",
      value: "#462e87",
      description: ""
    },
    name: "default",
    attributes: {},
    path: [
      "nldoc",
      "color",
      "brand",
      "default"
    ]
  },
  {
    value: "1.5rem",
    type: "lineHeights",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      value: "{lux.line-height.small-scale.sm}",
      type: "lineHeights"
    },
    name: "default",
    attributes: {},
    path: [
      "viewport",
      "line-height",
      "body",
      "default"
    ]
  },
  {
    value: "1rem",
    type: "fontSizes",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      value: "{lux.font-size.small-scale.sm}",
      type: "fontSizes"
    },
    name: "default",
    attributes: {},
    path: [
      "viewport",
      "font-size",
      "body",
      "default"
    ]
  },
  {
    parent: "mode/light",
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/component/icon-logo.json",
    isSource: false,
    original: {
      parent: "mode/light",
      type: "color",
      value: "{mode.icon-logo.eherkenning.e-color}"
    },
    name: "e-color",
    attributes: {},
    path: [
      "lux",
      "icon-logo",
      "eherkenning",
      "e-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "#ffffff",
      description: ""
    },
    name: "e-color",
    attributes: {},
    path: [
      "mode",
      "icon-logo",
      "eherkenning",
      "e-color"
    ]
  },
  {
    type: "fontFamilies",
    value: "Verdana, Arial",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "fontFamilies",
      value: "{lux.font-family.primary}"
    },
    name: "font-family",
    attributes: {},
    path: [
      "lux",
      "button",
      "font-family"
    ]
  },
  {
    type: "fontFamilies",
    value: "Verdana, Arial",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "fontFamilies",
      value: "{lux.font-family.primary}"
    },
    name: "font-family",
    attributes: {},
    path: [
      "lux",
      "link",
      "font-family"
    ]
  },
  {
    type: "fontFamilies",
    value: "Verdana, Arial",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      type: "fontFamilies",
      value: "{lux.font-family.primary}"
    },
    name: "font-family",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "font-family"
    ]
  },
  {
    value: "Verdana, Arial",
    type: "fontFamilies",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.font-family.primary}",
      type: "fontFamilies"
    },
    name: "font-family",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "font-family"
    ]
  },
  {
    type: "fontFamilies",
    value: "Verdana, Arial",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "fontFamilies",
      value: "{lux.button.font-family}"
    },
    name: "font-family",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "font-family"
    ]
  },
  {
    value: "Verdana, Arial",
    type: "fontFamilies",
    filePath: "src/imported/nl/utrecht-document.json",
    isSource: false,
    original: {
      value: "{lux.font-family.primary}",
      type: "fontFamilies"
    },
    name: "font-family",
    attributes: {},
    path: [
      "utrecht",
      "document",
      "font-family"
    ]
  },
  {
    value: "Verdana, Arial",
    type: "fontFamilies",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.font-family}",
      type: "fontFamilies"
    },
    name: "font-family",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "font-family"
    ]
  },
  {
    value: "Verdana, Arial",
    type: "fontFamilies",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.font-family}",
      type: "fontFamilies"
    },
    name: "font-family",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "font-family"
    ]
  },
  {
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "fontSizes",
      value: "{product.button.font-size}"
    },
    name: "font-size",
    attributes: {},
    path: [
      "lux",
      "button",
      "font-size"
    ]
  },
  {
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "fontSizes",
      value: "{product.button.primary.font-size}"
    },
    name: "font-size",
    attributes: {},
    path: [
      "lux",
      "button",
      "primary",
      "font-size"
    ]
  },
  {
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "fontSizes",
      value: "{lux.font-size.body.default}"
    },
    name: "font-size",
    attributes: {},
    path: [
      "lux",
      "link",
      "font-size"
    ]
  },
  {
    parent: "login link/default",
    type: "fontSizes",
    value: "1.125rem",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "fontSizes",
      value: "{lux.font-size.large-scale.sm}"
    },
    name: "font-size",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "font-size"
    ]
  },
  {
    value: "1rem",
    type: "fontSizes",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.font-size.body.default}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "default",
      "font-size"
    ]
  },
  {
    value: "1.25rem",
    type: "fontSizes",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.font-size.body.large}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "lead",
      "font-size"
    ]
  },
  {
    value: "0.875rem",
    type: "fontSizes",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.font-size.body.small}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "small",
      "font-size"
    ]
  },
  {
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "fontSizes",
      value: "{lux.button.font-size}"
    },
    name: "font-size",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "font-size"
    ]
  },
  {
    value: "1rem",
    type: "fontSizes",
    filePath: "src/imported/nl/utrecht-document.json",
    isSource: false,
    original: {
      value: "{lux.font-size.body.default}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "utrecht",
      "document",
      "font-size"
    ]
  },
  {
    value: "1rem",
    type: "fontSizes",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.font-size}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "font-size"
    ]
  },
  {
    value: "1rem",
    type: "fontSizes",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.default.font-size}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "font-size"
    ]
  },
  {
    value: "1.25rem",
    type: "fontSizes",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.lead.font-size}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "lead",
      "font-size"
    ]
  },
  {
    value: "0.875rem",
    type: "fontSizes",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.small.font-size}",
      type: "fontSizes"
    },
    name: "font-size",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "small",
      "font-size"
    ]
  },
  {
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      type: "fontSizes",
      value: "1rem"
    },
    name: "font-size",
    attributes: {},
    path: [
      "product",
      "button",
      "font-size"
    ]
  },
  {
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      type: "fontSizes",
      value: "1rem"
    },
    name: "font-size",
    attributes: {},
    path: [
      "product",
      "button",
      "primary",
      "font-size"
    ]
  },
  {
    type: "fontWeights",
    value: "Bold",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.font-weight.bold}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "lux",
      "button",
      "font-weight"
    ]
  },
  {
    type: "fontWeights",
    value: "Regular",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.font-weight.regular}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "lux",
      "link",
      "font-weight"
    ]
  },
  {
    type: "fontWeights",
    value: "Regular",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.font-weight.regular}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "font-weight"
    ]
  },
  {
    value: "Regular",
    type: "fontWeights",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.font-weight.regular}",
      type: "fontWeights"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "font-weight"
    ]
  },
  {
    type: "fontWeights",
    value: "Bold",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.button.font-weight}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "font-weight"
    ]
  },
  {
    type: "fontWeights",
    value: "Bold",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.button.font-weight}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "font-weight"
    ]
  },
  {
    type: "fontWeights",
    value: "Bold",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.button.font-weight}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "font-weight"
    ]
  },
  {
    type: "fontWeights",
    value: "Bold",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.button.font-weight}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "font-weight"
    ]
  },
  {
    value: "Regular",
    type: "fontWeights",
    filePath: "src/imported/nl/utrecht-document.json",
    isSource: false,
    original: {
      value: "{lux.font-weight.regular}",
      type: "fontWeights"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "document",
      "font-weight"
    ]
  },
  {
    type: "fontWeights",
    value: "Regular",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "{lux.link.font-weight}"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "font-weight"
    ]
  },
  {
    value: "Regular",
    type: "fontWeights",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.font-weight}",
      type: "fontWeights"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "font-weight"
    ]
  },
  {
    value: "Regular",
    type: "fontWeights",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.font-weight}",
      type: "fontWeights"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "lead",
      "font-weight"
    ]
  },
  {
    value: "Regular",
    type: "fontWeights",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.font-weight}",
      type: "fontWeights"
    },
    name: "font-weight",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "small",
      "font-weight"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{utrecht.button.column-gap}"
    },
    name: "gap",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "icon",
      "gap"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "spacing",
    value: "0rem",
    description: "",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "spacing",
      value: "0rem",
      description: ""
    },
    name: "gutter",
    attributes: {},
    path: [
      "lux",
      "grid",
      "gutter"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#2c1d54",
    description: "Hover kleur van het product",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.color.brand.hover}",
      description: "Hover kleur van het product"
    },
    name: "hover",
    attributes: {},
    path: [
      "lux",
      "color",
      "brand",
      "hover"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#383838",
    description: "Kleur van elementen als je eroverheen gaat met je muis",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.600}",
      description: "Kleur van elementen als je eroverheen gaat met je muis"
    },
    name: "hover",
    attributes: {},
    path: [
      "lux",
      "color",
      "background",
      "hover"
    ]
  },
  {
    parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
    type: "color",
    value: "#2c1d54",
    description: "",
    filePath: "src/imported/NLdoc/Waterschap Hollandse Delta.json",
    isSource: true,
    original: {
      parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
      type: "color",
      value: "#2c1d54",
      description: ""
    },
    name: "hover",
    attributes: {},
    path: [
      "nldoc",
      "color",
      "brand",
      "hover"
    ]
  },
  {
    parent: "common/default",
    type: "sizing",
    value: "1rem",
    description: "",
    filePath: "src/imported/common/default.json",
    isSource: false,
    original: {
      parent: "common/default",
      type: "sizing",
      value: "1rem",
      description: ""
    },
    name: "icon",
    attributes: {},
    path: [
      "lux",
      "size",
      "icon"
    ]
  },
  {
    type: "sizing",
    value: "/* */",
    description: "Wat is dit voor token? Waarom zit deze in de button? ",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{no-token}",
      description: "Wat is dit voor token? Waarom zit deze in de button? "
    },
    name: "inline-size",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "inline-size"
    ]
  },
  {
    value: "0",
    type: "spacing",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      value: "{lux.space.0}",
      type: "spacing"
    },
    name: "inset-block-start",
    attributes: {},
    path: [
      "lux",
      "alert",
      "icon",
      "inset-block-start"
    ]
  },
  {
    value: "0",
    type: "spacing",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      value: "{lux.alert.icon.inset-block-start}",
      type: "spacing"
    },
    name: "inset-block-start",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "icon",
      "inset-block-start"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1.25rem*1.5",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "{lux.font-size.body.large}*1.5"
    },
    name: "large",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "body",
      "large"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1.25rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1.25rem"
    },
    name: "large",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "body",
      "large"
    ]
  },
  {
    value: "1.75rem",
    type: "lineHeights",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      value: "{lux.line-height.small-scale.md}",
      type: "lineHeights"
    },
    name: "large",
    attributes: {},
    path: [
      "viewport",
      "line-height",
      "body",
      "large"
    ]
  },
  {
    value: "1.25rem",
    type: "fontSizes",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      value: "{lux.font-size.small-scale.md}",
      type: "fontSizes"
    },
    name: "large",
    attributes: {},
    path: [
      "viewport",
      "font-size",
      "body",
      "large"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "2rem*1.5",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "{lux.font-size.heading.level-1}*1.5"
    },
    name: "level-1",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "heading",
      "level-1"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "2rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "2rem"
    },
    name: "level-1",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "heading",
      "level-1"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "3rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "{lux.line-height.small-scale.xl}"
    },
    name: "level-1",
    attributes: {},
    path: [
      "viewport",
      "line-height",
      "heading",
      "level-1"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "2.25rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "{lux.font-size.small-scale.xl}"
    },
    name: "level-1",
    attributes: {},
    path: [
      "viewport",
      "font-size",
      "heading",
      "level-1"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1.5rem*1.5",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "{lux.font-size.heading.level-2}*1.5"
    },
    name: "level-2",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "heading",
      "level-2"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1.5rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1.5rem"
    },
    name: "level-2",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "heading",
      "level-2"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "2rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "{lux.line-height.small-scale.lg}"
    },
    name: "level-2",
    attributes: {},
    path: [
      "viewport",
      "line-height",
      "heading",
      "level-2"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "1.5rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "{lux.font-size.small-scale.lg}"
    },
    name: "level-2",
    attributes: {},
    path: [
      "viewport",
      "font-size",
      "heading",
      "level-2"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1.25rem*1.5",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "{lux.font-size.heading.level-3}*1.5"
    },
    name: "level-3",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "heading",
      "level-3"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1.25rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1.25rem"
    },
    name: "level-3",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "heading",
      "level-3"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "1.75rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "{lux.line-height.small-scale.md}"
    },
    name: "level-3",
    attributes: {},
    path: [
      "viewport",
      "line-height",
      "heading",
      "level-3"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "1.25rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "{lux.font-size.small-scale.md}"
    },
    name: "level-3",
    attributes: {},
    path: [
      "viewport",
      "font-size",
      "heading",
      "level-3"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1rem*1.5",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "{lux.font-size.heading.level-4}*1.5"
    },
    name: "level-4",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "heading",
      "level-4"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1rem"
    },
    name: "level-4",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "heading",
      "level-4"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "1.5rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "{lux.line-height.small-scale.sm}"
    },
    name: "level-4",
    attributes: {},
    path: [
      "viewport",
      "line-height",
      "heading",
      "level-4"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "{lux.font-size.small-scale.sm}"
    },
    name: "level-4",
    attributes: {},
    path: [
      "viewport",
      "font-size",
      "heading",
      "level-4"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "2.25rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "2.25rem"
    },
    name: "lg",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "large-scale",
      "lg"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "2rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "2rem"
    },
    name: "lg",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "small-scale",
      "lg"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "1.625rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "1.625rem"
    },
    name: "lg",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "large-scale",
      "lg"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1.5rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1.5rem"
    },
    name: "lg",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "small-scale",
      "lg"
    ]
  },
  {
    type: "lineHeights",
    value: "1.75rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "lineHeights",
      value: "{lux.line-height.large-scale.sm}"
    },
    name: "line-height",
    attributes: {},
    path: [
      "lux",
      "button",
      "line-height"
    ]
  },
  {
    type: "lineHeights",
    value: "1rem*1.5",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "lineHeights",
      value: "{lux.line-height.body.default}"
    },
    name: "line-height",
    attributes: {},
    path: [
      "lux",
      "link",
      "line-height"
    ]
  },
  {
    type: "lineHeights",
    value: "1.75rem",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      type: "lineHeights",
      value: "{lux.line-height.large-scale.sm}"
    },
    name: "line-height",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "line-height"
    ]
  },
  {
    value: "1rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.line-height.body.default}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "default",
      "line-height"
    ]
  },
  {
    value: "1.25rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.line-height.body.large}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "lead",
      "line-height"
    ]
  },
  {
    value: "0.875rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/component/paragraph.json",
    isSource: false,
    original: {
      value: "{lux.line-height.body.small}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "lux",
      "paragraph",
      "small",
      "line-height"
    ]
  },
  {
    type: "lineHeights",
    value: "1.75rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "lineHeights",
      value: "{lux.button.line-height}"
    },
    name: "line-height",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "line-height"
    ]
  },
  {
    value: "1rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/nl/utrecht-document.json",
    isSource: false,
    original: {
      value: "{lux.line-height.body.default}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "utrecht",
      "document",
      "line-height"
    ]
  },
  {
    value: "1rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.line-height}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "line-height"
    ]
  },
  {
    value: "1rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.default.line-height}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "line-height"
    ]
  },
  {
    value: "1.25rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.lead.line-height}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "lead",
      "line-height"
    ]
  },
  {
    value: "0.875rem*1.5",
    type: "lineHeights",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.paragraph.small.line-height}",
      type: "lineHeights"
    },
    name: "line-height",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "small",
      "line-height"
    ]
  },
  {
    parent: "mode/light",
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/component/icon-logo.json",
    isSource: false,
    original: {
      parent: "mode/light",
      type: "color",
      value: "{mode.icon-logo.eidas.lines-color}"
    },
    name: "lines-color",
    attributes: {},
    path: [
      "lux",
      "icon-logo",
      "eidas",
      "lines-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "#ffffff",
      description: ""
    },
    name: "lines-color",
    attributes: {},
    path: [
      "mode",
      "icon-logo",
      "eidas",
      "lines-color"
    ]
  },
  {
    value: "#ddeff8",
    type: "color",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      value: "{lux.color.lichtblauw.100}",
      type: "color"
    },
    name: "link",
    attributes: {},
    path: [
      "lux",
      "color",
      "foreground",
      "link"
    ]
  },
  {
    parent: "mode/light",
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/component/icon-logo.json",
    isSource: false,
    original: {
      parent: "mode/light",
      type: "color",
      value: "{mode.icon-logo.eidas.lock-color}"
    },
    name: "lock-color",
    attributes: {},
    path: [
      "lux",
      "icon-logo",
      "eidas",
      "lock-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "#ffffff",
      description: ""
    },
    name: "lock-color",
    attributes: {},
    path: [
      "mode",
      "icon-logo",
      "eidas",
      "lock-color"
    ]
  },
  {
    parent: "core/default",
    type: "borderWidth",
    value: "2px",
    filePath: "src/imported/core/border.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "borderWidth",
      value: "2px"
    },
    name: "m",
    attributes: {},
    path: [
      "lux",
      "border-width",
      "m"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "spacing",
    value: "1rem",
    description: "",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "spacing",
      value: "1rem",
      description: ""
    },
    name: "margin",
    attributes: {},
    path: [
      "lux",
      "grid",
      "margin"
    ]
  },
  {
    value: "0",
    type: "spacing",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.space.0}",
      type: "spacing"
    },
    name: "margin-block-end",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "margin-block-end"
    ]
  },
  {
    value: "0",
    type: "spacing",
    filePath: "src/imported/nl/utrecht-paragraph.json",
    isSource: false,
    original: {
      value: "{lux.space.0}",
      type: "spacing"
    },
    name: "margin-block-start",
    attributes: {},
    path: [
      "utrecht",
      "paragraph",
      "margin-block-start"
    ]
  },
  {
    parent: "common/default",
    type: "sizing",
    value: "77.5rem",
    description: "",
    filePath: "src/imported/common/default.json",
    isSource: false,
    original: {
      parent: "common/default",
      type: "sizing",
      value: "77.5rem",
      description: ""
    },
    name: "max-inline",
    attributes: {},
    path: [
      "lux",
      "grid",
      "max-inline"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "2rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "2rem"
    },
    name: "md",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "large-scale",
      "md"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1.75rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "1.75rem"
    },
    name: "md",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "small-scale",
      "md"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "1.375rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "1.375rem"
    },
    name: "md",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "large-scale",
      "md"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1.25rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1.25rem"
    },
    name: "md",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "small-scale",
      "md"
    ]
  },
  {
    type: "sizing",
    value: "2.5rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.size.target}"
    },
    name: "min-block-size",
    attributes: {},
    path: [
      "lux",
      "button",
      "min-block-size"
    ]
  },
  {
    parent: "login link/default",
    type: "sizing",
    value: "48px",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "sizing",
      value: "48px"
    },
    name: "min-block-size",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "min-block-size"
    ]
  },
  {
    type: "sizing",
    value: "2.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.button.min-block-size}"
    },
    name: "min-block-size",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "min-block-size"
    ]
  },
  {
    type: "sizing",
    value: "2.5rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.size.target}"
    },
    name: "min-inline-size",
    attributes: {},
    path: [
      "lux",
      "button",
      "min-inline-size"
    ]
  },
  {
    parent: "login link/default",
    type: "sizing",
    value: "48px",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "sizing",
      value: "48px"
    },
    name: "min-inline-size",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "min-inline-size"
    ]
  },
  {
    type: "sizing",
    value: "2.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.button.min-inline-size}"
    },
    name: "min-inline-size",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "min-inline-size"
    ]
  },
  {
    type: "other",
    value: "/* */",
    description: "Discussie nodig",
    filePath: "src/imported/core/other.json",
    isSource: false,
    original: {
      type: "other",
      value: "/* */",
      description: "Discussie nodig"
    },
    name: "no-token",
    attributes: {},
    path: [
      "no-token"
    ]
  },
  {
    parent: "core/default",
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/core/border.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "borderRadius",
      value: "0px"
    },
    name: "none",
    attributes: {},
    path: [
      "lux",
      "border-radius",
      "none"
    ]
  },
  {
    parent: "core/default",
    type: "borderWidth",
    value: "0px",
    filePath: "src/imported/core/border.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "borderWidth",
      value: "0px"
    },
    name: "none",
    attributes: {},
    path: [
      "lux",
      "border-width",
      "none"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#ffffff00",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#ffffff00",
      description: ""
    },
    name: "none",
    attributes: {},
    path: [
      "lux",
      "color",
      "none"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff",
    description: "Tekst en iconen die op een sterke achtergrond staan. Zoals het label in de primaire button of links in de footer.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.wit}",
      description: "Tekst en iconen die op een sterke achtergrond staan. Zoals het label in de primaire button of links in de footer."
    },
    name: "onEmphasis",
    attributes: {},
    path: [
      "lux",
      "color",
      "foreground",
      "onEmphasis"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fbfbfb",
    description: "Outline kleur voor de focus state.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.border.strong}",
      description: "Outline kleur voor de focus state."
    },
    name: "outline",
    attributes: {},
    path: [
      "lux",
      "color",
      "focus",
      "outline"
    ]
  },
  {
    value: "#fbfbfb",
    type: "color",
    filePath: "src/imported/nl/utrecht-focus.json",
    isSource: false,
    original: {
      value: "{lux.color.focus.outline}",
      type: "color"
    },
    name: "outline-color",
    attributes: {},
    path: [
      "utrecht",
      "focus",
      "outline-color"
    ]
  },
  {
    value: "transparant",
    type: "color",
    filePath: "src/imported/nl/utrecht-focus.json",
    isSource: false,
    original: {
      value: "transparant",
      type: "color"
    },
    name: "outline-color",
    attributes: {},
    path: [
      "utrecht",
      "focus",
      "inverse",
      "outline-color"
    ]
  },
  {
    type: "spacing",
    value: "0.25 * 0.5rem",
    filePath: "src/imported/common/default.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.25}"
    },
    name: "outline-offset",
    attributes: {},
    path: [
      "lux",
      "focus",
      "outline-offset"
    ]
  },
  {
    value: "0.25 * 0.5rem",
    type: "spacing",
    filePath: "src/imported/nl/utrecht-focus.json",
    isSource: false,
    original: {
      value: "{lux.focus.outline-offset}",
      type: "spacing"
    },
    name: "outline-offset",
    attributes: {},
    path: [
      "utrecht",
      "focus",
      "outline-offset"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "borderRadius",
    value: "0px",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "borderRadius",
      value: "0px"
    },
    name: "outline-radius",
    attributes: {},
    path: [
      "figma",
      "focus",
      "outline-radius"
    ]
  },
  {
    value: "dotted",
    type: "other",
    filePath: "src/imported/nl/utrecht-focus.json",
    isSource: false,
    original: {
      value: "{lux.focus.outline.style}",
      type: "other"
    },
    name: "outline-style",
    attributes: {},
    path: [
      "utrecht",
      "focus",
      "outline-style"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "borderWidth",
    value: "1px",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "borderWidth",
      value: "1px"
    },
    name: "outline-width",
    attributes: {},
    path: [
      "lux",
      "focus",
      "outline-width"
    ]
  },
  {
    value: "1px",
    type: "borderWidth",
    filePath: "src/imported/nl/utrecht-focus.json",
    isSource: false,
    original: {
      value: "{lux.focus.outline-width}",
      type: "borderWidth"
    },
    name: "outline-width",
    attributes: {},
    path: [
      "utrecht",
      "focus",
      "outline-width"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.150}"
    },
    name: "padding-block-end",
    attributes: {},
    path: [
      "lux",
      "alert",
      "padding-block-end"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.100}"
    },
    name: "padding-block-end",
    attributes: {},
    path: [
      "lux",
      "button",
      "padding-block-end"
    ]
  },
  {
    parent: "login link/default",
    type: "spacing",
    value: "0.5 * 0.5rem",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "spacing",
      value: "{lux.space.50}",
      description: ""
    },
    name: "padding-block-end",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "padding-block-end"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.alert.padding-block-end}"
    },
    name: "padding-block-end",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "padding-block-end"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.button.padding-block-end}"
    },
    name: "padding-block-end",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "padding-block-end"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.150}"
    },
    name: "padding-block-start",
    attributes: {},
    path: [
      "lux",
      "alert",
      "padding-block-start"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.100}"
    },
    name: "padding-block-start",
    attributes: {},
    path: [
      "lux",
      "button",
      "padding-block-start"
    ]
  },
  {
    parent: "login link/default",
    type: "spacing",
    value: "0.5 * 0.5rem",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "spacing",
      value: "{lux.space.50}",
      description: ""
    },
    name: "padding-block-start",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "padding-block-start"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.alert.padding-block-start}"
    },
    name: "padding-block-start",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "padding-block-start"
    ]
  },
  {
    type: "spacing",
    value: "0.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.button.padding-block-start}"
    },
    name: "padding-block-start",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "padding-block-start"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "spacing",
    value: "1.25rem",
    description: "",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "spacing",
      value: "1.25rem",
      description: ""
    },
    name: "padding-block-start",
    attributes: {},
    path: [
      "viewport",
      "rijkslint",
      "wordmark",
      "75%",
      "padding-block-start"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "spacing",
    value: "1.25rem",
    description: "",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "spacing",
      value: "1.25rem",
      description: ""
    },
    name: "padding-block-start",
    attributes: {},
    path: [
      "viewport",
      "rijkslint",
      "wordmark",
      "default",
      "padding-block-start"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.150}"
    },
    name: "padding-inline-end",
    attributes: {},
    path: [
      "lux",
      "alert",
      "padding-inline-end"
    ]
  },
  {
    type: "spacing",
    value: "2 * 0.5rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.200}"
    },
    name: "padding-inline-end",
    attributes: {},
    path: [
      "lux",
      "button",
      "padding-inline-end"
    ]
  },
  {
    parent: "login link/default",
    type: "spacing",
    value: "2 * 0.5rem",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "spacing",
      value: "{lux.space.200}"
    },
    name: "padding-inline-end",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "padding-inline-end"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.alert.padding-inline-end}"
    },
    name: "padding-inline-end",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "padding-inline-end"
    ]
  },
  {
    type: "spacing",
    value: "2 * 0.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.button.padding-inline-end}"
    },
    name: "padding-inline-end",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "padding-inline-end"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.150}"
    },
    name: "padding-inline-start",
    attributes: {},
    path: [
      "lux",
      "alert",
      "padding-inline-start"
    ]
  },
  {
    type: "spacing",
    value: "2 * 0.5rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.200}"
    },
    name: "padding-inline-start",
    attributes: {},
    path: [
      "lux",
      "button",
      "padding-inline-start"
    ]
  },
  {
    parent: "login link/default",
    type: "spacing",
    value: "0.5 * 0.5rem",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "spacing",
      value: "{lux.space.50}"
    },
    name: "padding-inline-start",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "padding-inline-start"
    ]
  },
  {
    type: "spacing",
    value: "1.5 * 0.5rem",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.alert.padding-inline-start}"
    },
    name: "padding-inline-start",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "padding-inline-start"
    ]
  },
  {
    type: "spacing",
    value: "2 * 0.5rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.button.padding-inline-start}"
    },
    name: "padding-inline-start",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "padding-inline-start"
    ]
  },
  {
    type: "fontFamilies",
    value: "Verdana, Arial",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      type: "fontFamilies",
      value: "{nldoc.font-family.primary}"
    },
    name: "primary",
    attributes: {},
    path: [
      "lux",
      "font-family",
      "primary"
    ]
  },
  {
    type: "fontFamilies",
    value: "RijksoverheidSansWebText, Arial, Verdana, sans-serif",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      type: "fontFamilies",
      value: "RijksoverheidSansWebText, Arial, Verdana, sans-serif"
    },
    name: "primary",
    attributes: {},
    path: [
      "ro",
      "font-family",
      "primary"
    ]
  },
  {
    type: "fontFamilies",
    value: "Verdana, Arial",
    filePath: "src/imported/NLdoc/Waterschap Hollandse Delta.json",
    isSource: true,
    original: {
      type: "fontFamilies",
      value: "Verdana, Arial"
    },
    name: "primary",
    attributes: {},
    path: [
      "nldoc",
      "font-family",
      "primary"
    ]
  },
  {
    type: "fontWeights",
    value: "Regular",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      type: "fontWeights",
      value: "Regular"
    },
    name: "regular",
    attributes: {},
    path: [
      "lux",
      "font-weight",
      "regular"
    ]
  },
  {
    type: "spacing",
    value: "0",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "spacing",
      value: "{lux.space.0}"
    },
    name: "row-gap",
    attributes: {},
    path: [
      "lux",
      "alert",
      "message",
      "row-gap"
    ]
  },
  {
    value: "0",
    type: "spacing",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      value: "{lux.space.0}",
      type: "spacing"
    },
    name: "row-gap",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "message",
      "row-gap"
    ]
  },
  {
    type: "other",
    value: "/* */",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "other",
      value: "{no-token}"
    },
    name: "scale",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "focus",
      "scale"
    ]
  },
  {
    type: "other",
    value: "/* */",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "other",
      value: "{no-token}"
    },
    name: "scale",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "hover",
      "scale"
    ]
  },
  {
    type: "other",
    value: "/* */",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "other",
      value: "{no-token}"
    },
    name: "scale",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "primary-action",
      "hover",
      "scale"
    ]
  },
  {
    type: "other",
    value: "/* */",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "other",
      value: "{no-token}"
    },
    name: "scale",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "secondary-action",
      "hover",
      "scale"
    ]
  },
  {
    type: "other",
    value: "/* */",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "other",
      value: "{no-token}"
    },
    name: "scale",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "subtle",
      "hover",
      "scale"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "sizing",
    value: "23.4375rem",
    description: "",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "sizing",
      value: "23.4375rem",
      description: ""
    },
    name: "screen-size",
    attributes: {},
    path: [
      "figma",
      "screen-size"
    ]
  },
  {
    type: "fontFamilies",
    value: "RijksoverheidSerifWeb, 'Times New Roman', serif",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      type: "fontFamilies",
      value: "RijksoverheidSerifWeb, 'Times New Roman', serif"
    },
    name: "secondary",
    attributes: {},
    path: [
      "ro",
      "font-family",
      "secondary"
    ]
  },
  {
    type: "sizing",
    value: "24px",
    filePath: "src/imported/component/alert.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "24px"
    },
    name: "size",
    attributes: {},
    path: [
      "lux",
      "alert",
      "icon",
      "size"
    ]
  },
  {
    type: "sizing",
    value: "1rem",
    filePath: "src/imported/component/button.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.size.icon}"
    },
    name: "size",
    attributes: {},
    path: [
      "lux",
      "button",
      "icon",
      "size"
    ]
  },
  {
    type: "sizing",
    value: "1rem",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.size.icon}"
    },
    name: "size",
    attributes: {},
    path: [
      "lux",
      "link",
      "icon",
      "size"
    ]
  },
  {
    parent: "login link/default",
    type: "sizing",
    value: "2.5rem",
    description: "",
    filePath: "src/imported/component/login link.json",
    isSource: false,
    original: {
      parent: "login link/default",
      type: "sizing",
      value: "2.5rem",
      description: ""
    },
    name: "size",
    attributes: {},
    path: [
      "lux",
      "login-link",
      "icon",
      "size"
    ]
  },
  {
    value: "24px",
    type: "sizing",
    filePath: "src/imported/nl/utrecht-alert.json",
    isSource: false,
    original: {
      value: "{lux.alert.icon.size}",
      type: "sizing"
    },
    name: "size",
    attributes: {},
    path: [
      "utrecht",
      "alert",
      "icon",
      "size"
    ]
  },
  {
    type: "sizing",
    value: "1rem",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.button.icon.size}"
    },
    name: "size",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "icon",
      "size"
    ]
  },
  {
    type: "sizing",
    value: "1rem",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "sizing",
      value: "{lux.link.icon.size}"
    },
    name: "size",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "icon",
      "size"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "1.75rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "1.75rem"
    },
    name: "sm",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "large-scale",
      "sm"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1.5rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "1.5rem"
    },
    name: "sm",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "small-scale",
      "sm"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "1.125rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "1.125rem"
    },
    name: "sm",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "large-scale",
      "sm"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "1rem"
    },
    name: "sm",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "small-scale",
      "sm"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "0.875rem*1.5",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "{lux.font-size.body.small}*1.5"
    },
    name: "small",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "body",
      "small"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "0.875rem",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "0.875rem"
    },
    name: "small",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "body",
      "small"
    ]
  },
  {
    value: "1.5rem",
    type: "lineHeights",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      value: "{lux.line-height.small-scale.xs}",
      type: "lineHeights"
    },
    name: "small",
    attributes: {},
    path: [
      "viewport",
      "line-height",
      "body",
      "small"
    ]
  },
  {
    value: "0.875rem",
    type: "fontSizes",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      value: "{lux.font-size.small-scale.xs}",
      type: "fontSizes"
    },
    name: "small",
    attributes: {},
    path: [
      "viewport",
      "font-size",
      "body",
      "small"
    ]
  },
  {
    parent: "mode/light",
    type: "color",
    value: "#ffffff",
    filePath: "src/imported/component/icon-logo.json",
    isSource: false,
    original: {
      parent: "mode/light",
      type: "color",
      value: "{mode.icon-logo.eidas.stars-color}"
    },
    name: "stars-color",
    attributes: {},
    path: [
      "lux",
      "icon-logo",
      "eidas",
      "stars-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#ffffff",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "#ffffff",
      description: ""
    },
    name: "stars-color",
    attributes: {},
    path: [
      "mode",
      "icon-logo",
      "eidas",
      "stars-color"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fbfbfb",
    description: "",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.foreground.default}",
      description: ""
    },
    name: "strong",
    attributes: {},
    path: [
      "lux",
      "color",
      "border",
      "strong"
    ]
  },
  {
    type: "other",
    value: "dotted",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      type: "other",
      value: "dotted"
    },
    name: "style",
    attributes: {},
    path: [
      "lux",
      "focus",
      "outline",
      "style"
    ]
  },
  {
    parent: "product/NLdoc",
    type: "color",
    value: "#e3e0ed",
    description: "Subtiele kleur van het product",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      parent: "product/NLdoc",
      type: "color",
      value: "{nldoc.color.brand.subdued}",
      description: "Subtiele kleur van het product"
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "brand",
      "subdued"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#a7a7a7",
    description: "Gebruik voor content die extra context biedt, maar niet essentieel is om de interface te begrijpen.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.400}",
      description: "Gebruik voor content die extra context biedt, maar niet essentieel is om de interface te begrijpen."
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "foreground",
      "subdued"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#1d1d1d",
    description: "Subtiele achtergrond kleur",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.800}",
      description: "Subtiele achtergrond kleur"
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "background",
      "subdued"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#383838",
    description: "Subtiele border",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.grijs.600}",
      description: "Subtiele border"
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "border",
      "subdued"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#e1eddb",
    description: "Gebruik deze kleur om een positieve boodschap te highlighten.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.groen.50}",
      description: "Gebruik deze kleur om een positieve boodschap te highlighten."
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "success",
      "subdued"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#d9ebf7",
    description: "Gebruik deze kleur om een informatieve boodschap te highlighten.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.hemelblauw.50}",
      description: "Gebruik deze kleur om een informatieve boodschap te highlighten."
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "info",
      "subdued"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#f9dfdd",
    description: "Gebruik deze kleur om een negatieve boodschap te highlighten.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.rood.50}",
      description: "Gebruik deze kleur om een negatieve boodschap te highlighten."
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "error",
      "subdued"
    ]
  },
  {
    parent: "mode/dark (beta)",
    type: "color",
    value: "#fff4db",
    description: "Gebruik deze kleur om een waarschuwing te highlighten.",
    filePath: "src/imported/mode/dark.json",
    isSource: true,
    original: {
      parent: "mode/dark (beta)",
      type: "color",
      value: "{lux.color.donkergeel.50}",
      description: "Gebruik deze kleur om een waarschuwing te highlighten."
    },
    name: "subdued",
    attributes: {},
    path: [
      "lux",
      "color",
      "feedback",
      "warning",
      "subdued"
    ]
  },
  {
    parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
    type: "color",
    value: "#e3e0ed",
    description: "",
    filePath: "src/imported/NLdoc/Waterschap Hollandse Delta.json",
    isSource: true,
    original: {
      parent: "NLdoc / Organisatie/Waterschap Hollandse Delta",
      type: "color",
      value: "#e3e0ed",
      description: ""
    },
    name: "subdued",
    attributes: {},
    path: [
      "nldoc",
      "color",
      "brand",
      "subdued"
    ]
  },
  {
    type: "sizing",
    value: "2.5rem",
    description: "Gebruik deze als minimale hit erea. Bijvoorbeeld als min-height en min-width bij de button. ",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      type: "sizing",
      value: "2.5rem",
      description: "Gebruik deze als minimale hit erea. Bijvoorbeeld als min-height en min-width bij de button. "
    },
    name: "target",
    attributes: {},
    path: [
      "lux",
      "size",
      "target"
    ]
  },
  {
    value: "none",
    type: "textDecoration",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      value: "none",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "lux",
      "link",
      "hover",
      "text-decoration"
    ]
  },
  {
    value: "none",
    type: "textDecoration",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      value: "none",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "lux",
      "link",
      "active",
      "text-decoration"
    ]
  },
  {
    value: "underline",
    type: "textDecoration",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      value: "underline",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "lux",
      "link",
      "text-decoration"
    ]
  },
  {
    value: "none",
    type: "textDecoration",
    filePath: "src/imported/component/link.json",
    isSource: false,
    original: {
      value: "none",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "lux",
      "link",
      "focus",
      "text-decoration"
    ]
  },
  {
    value: "none",
    type: "textDecoration",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.active.text-decoration}",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "active",
      "text-decoration"
    ]
  },
  {
    value: "none",
    type: "textDecoration",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.focus.text-decoration}",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "focus",
      "text-decoration"
    ]
  },
  {
    value: "none",
    type: "textDecoration",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.hover.text-decoration}",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "hover",
      "text-decoration"
    ]
  },
  {
    value: "underline",
    type: "textDecoration",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      value: "{lux.link.text-decoration}",
      type: "textDecoration"
    },
    name: "text-decoration",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "text-decoration"
    ]
  },
  {
    type: "color",
    value: "#ddeff8",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "color",
      value: "{lux.link.color}"
    },
    name: "text-decoration-color",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "text-decoration-color"
    ]
  },
  {
    type: "other",
    value: "auto",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "other",
      value: "auto"
    },
    name: "text-decoration-thickness",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "text-decoration-thickness"
    ]
  },
  {
    type: "other",
    value: "auto",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "other",
      value: "auto"
    },
    name: "text-decoration-thickness",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "focus",
      "text-decoration-thickness"
    ]
  },
  {
    type: "other",
    value: "auto",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "other",
      value: "auto"
    },
    name: "text-decoration-thickness",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "hover",
      "text-decoration-thickness"
    ]
  },
  {
    type: "other",
    value: "/* */",
    filePath: "src/imported/nl/utrecht-button.json",
    isSource: false,
    original: {
      type: "other",
      value: "{no-token}"
    },
    name: "text-transform",
    attributes: {},
    path: [
      "utrecht",
      "button",
      "text-transform"
    ]
  },
  {
    type: "other",
    value: "auto",
    filePath: "src/imported/nl/utrecht-link.json",
    isSource: false,
    original: {
      type: "other",
      value: "auto"
    },
    name: "text-underline-offset",
    attributes: {},
    path: [
      "utrecht",
      "link",
      "text-underline-offset"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "text",
    value: "small",
    description: "",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "text",
      value: "small",
      description: ""
    },
    name: "variant",
    attributes: {},
    path: [
      "figma",
      "rijkslint",
      "variant"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#ffffff",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#ffffff",
      description: ""
    },
    name: "wit",
    attributes: {},
    path: [
      "lux",
      "color",
      "wit"
    ]
  },
  {
    value: "1.5rem",
    type: "sizing",
    filePath: "src/imported/product/NLdoc-mapping.json",
    isSource: true,
    original: {
      value: "1.5rem",
      type: "sizing"
    },
    name: "wrapper-height",
    attributes: {},
    path: [
      "figma",
      "size",
      "icon",
      "wrapper-height"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "sizing",
    value: "1.5rem",
    filePath: "src/imported/viewport/xs.json",
    isSource: true,
    original: {
      parent: "viewport (beta)/xs",
      type: "sizing",
      value: "1.5rem"
    },
    name: "wrapper-height",
    attributes: {},
    path: [
      "figma",
      "viewport",
      "size",
      "icon",
      "wrapper-height"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "3.5rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "3.5rem"
    },
    name: "xl",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "large-scale",
      "xl"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "3rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "3rem"
    },
    name: "xl",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "small-scale",
      "xl"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "2.5rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "2.5rem"
    },
    name: "xl",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "large-scale",
      "xl"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "2.25rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "2.25rem"
    },
    name: "xl",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "small-scale",
      "xl"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "lineHeights",
    value: "1.5rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "lineHeights",
      value: "1.5rem"
    },
    name: "xs",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "large-scale",
      "xs"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "lineHeights",
    value: "1.5rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "lineHeights",
      value: "1.5rem"
    },
    name: "xs",
    attributes: {},
    path: [
      "lux",
      "line-height",
      "small-scale",
      "xs"
    ]
  },
  {
    parent: "viewport (beta)/xl",
    type: "fontSizes",
    value: "1rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xl",
      type: "fontSizes",
      value: "1rem"
    },
    name: "xs",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "large-scale",
      "xs"
    ]
  },
  {
    parent: "viewport (beta)/xs",
    type: "fontSizes",
    value: "0.875rem",
    filePath: "src/imported/core/font.json",
    isSource: false,
    original: {
      parent: "viewport (beta)/xs",
      type: "fontSizes",
      value: "0.875rem"
    },
    name: "xs",
    attributes: {},
    path: [
      "lux",
      "font-size",
      "small-scale",
      "xs"
    ]
  },
  {
    parent: "core/default",
    type: "color",
    value: "#000000",
    description: "",
    filePath: "src/imported/core/color.json",
    isSource: false,
    original: {
      parent: "core/default",
      type: "color",
      value: "#000000",
      description: ""
    },
    name: "zwart",
    attributes: {},
    path: [
      "lux",
      "color",
      "zwart"
    ]
  }
];
const dashToPascalCase = (str) => str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);
const attachProps = (node, newProps, oldProps = {}) => {
  if (node instanceof Element) {
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") {
      node.className = className;
    }
    Object.keys(newProps).forEach((name) => {
      if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
        return;
      }
      if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};
const getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class;
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
  const finalClassNames = [];
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach((s) => finalClassNames.push(s));
  return finalClassNames.join(" ");
};
const transformReactEventName = (eventNameSuffix) => {
  switch (eventNameSuffix) {
    case "doubleclick":
      return "dblclick";
  }
  return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
  if (typeof document === "undefined") {
    return true;
  } else {
    const eventName = "on" + transformReactEventName(eventNameSuffix);
    let isSupported = eventName in document;
    if (!isSupported) {
      const element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    return isSupported;
  }
};
const syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName];
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }
  node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
    if (newEventHandler) {
      newEventHandler.call(this, e);
    }
  });
};
const arrayToMap = (arr) => {
  const map = /* @__PURE__ */ new Map();
  arr.forEach((s) => map.set(s, s));
  return map;
};
const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    ref.current = value;
  }
};
const mergeRefs = (...refs) => {
  return (value) => {
    refs.forEach((ref) => {
      setRef(ref, value);
    });
  };
};
const createForwardRef = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  return React.forwardRef(forwardRef);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component {
    constructor(props) {
      super(props);
      this.setComponentElRef = (element) => {
        this.componentEl = element;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(prevProps) {
      attachProps(this.componentEl, this.props, prevProps);
    }
    render() {
      const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        const value = cProps[name];
        if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();
          if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
            acc[name] = value;
          }
        } else {
          const type = typeof value;
          if (type === "string" || type === "boolean" || type === "number") {
            acc[camelToDashCase(name)] = value;
          }
        }
        return acc;
      }, {});
      const newProps = Object.assign(Object.assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style });
      return reactExports.createElement(tagName, newProps, children);
    }
    static get displayName() {
      return displayName;
    }
  };
  return createForwardRef(ReactComponent, displayName);
};
const LuxAlert = /* @__PURE__ */ createReactComponent("lux-alert");
const LuxButton = /* @__PURE__ */ createReactComponent("lux-button");
const LuxDocument = /* @__PURE__ */ createReactComponent("lux-document");
const LuxIconChevronLeft = /* @__PURE__ */ createReactComponent("lux-icon-chevron-left");
const LuxIconChevronRight = /* @__PURE__ */ createReactComponent("lux-icon-chevron-right");
const LuxLink = /* @__PURE__ */ createReactComponent("lux-link");
const LuxLoginLink = /* @__PURE__ */ createReactComponent("lux-login-link");
const LuxParagraph = /* @__PURE__ */ createReactComponent("lux-paragraph");
export {
  LuxDocument as L,
  LuxParagraph as a,
  LuxAlert as b,
  createDesignTokensStory as c,
  LuxButton as d,
  LuxLink as e,
  LuxIconChevronLeft as f,
  LuxLoginLink as g,
  LuxIconChevronRight as h,
  tokens as t
};
