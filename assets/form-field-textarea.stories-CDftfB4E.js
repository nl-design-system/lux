var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { v as LuxFormFieldTextarea } from "./index-BJfiFLmy.js";
import { t as tokens } from "./index-DB79t5Cy.js";
import { B as BADGES } from "./preview-D2d5B-Ve.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
import { m as meta$2 } from "./form-field-description.stories-BcveYFQB.js";
import { m as meta$3 } from "./form-field-error-message.stories-DgREIIm3.js";
import { m as meta$1 } from "./textarea.stories-BIcucoct.js";
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label", description: "Description" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Hover & Focus" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-hover-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-focus-all pseudo-focus-visible-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Invalid" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label", errorMessage: "Error Message", invalid: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label", description: "Description", errorMessage: "Error Message", invalid: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Disabled" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label", disabled: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldTextarea, { label: "Label", description: "Description", disabled: true })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const meta = {
  title: "React Components/Form Field/Form Field Textarea",
  id: "react-components-form-field-form-field-textarea",
  component: LuxFormFieldTextarea,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-form-field-textarea"
  },
  argTypes: {
    ...meta$1.argTypes,
    appearance: {
      ...meta$2.argTypes.appearance
    },
    distanced: {
      ...meta$3.argTypes.distanced
    },
    disabled: {
      type: "boolean"
    },
    errorMessage: {
      if: {
        arg: "invalid",
        truthy: true
      }
    }
  }
};
const Playground = {
  name: "Playground",
  args: {
    label: "Form Field Textarea",
    description: "Textarea in een FormField",
    errorMessage: "Zo kan het ook een ErrorMessage hebben",
    invalid: false,
    appearance: void 0
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) })
] }));
Visual.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Visual"
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  name: 'Playground',\n  args: {\n    label: 'Form Field Textarea',\n    description: 'Textarea in een FormField',\n    errorMessage: 'Zo kan het ook een ErrorMessage hebben',\n    invalid: false,\n    appearance: undefined\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_d = DesignTokens.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_f = (_e = DesignTokens.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_g = Visual.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_i = (_h = Visual.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Playground", "DesignTokens", "Visual"];
const FormFieldTextareaStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  FormFieldTextareaStories as F,
  Playground as P
};
