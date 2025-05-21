var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { r as LuxFormFieldSelect } from "./index-B0rW5TGL.js";
import { t as tokens } from "./index-DdOurD3B.js";
import { B as BADGES } from "./preview-CqoMgBqn.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
import { m as meta$2 } from "./form-field-description.stories-CIJh4irU.js";
import { m as meta$3 } from "./form-field-error-message.stories-D9TXa-kz.js";
import { m as meta$1 } from "./select.stories-DpjCoIHJ.js";
const VisualStates = ({ options: options2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldSelect, { label: "Label", options: options2 }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldSelect, { label: "Label", options: options2, description: "Description" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Hover & Focus" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-hover-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldSelect, { label: "Label", options: options2 }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pseudo-focus-all pseudo-focus-visible-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldSelect, { label: "Label", options: options2 }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Invalid" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldSelect, { label: "Label", options: options2, errorMessage: "Error Message", invalid: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    LuxFormFieldSelect,
    {
      label: "Label",
      options: options2,
      description: "Description",
      errorMessage: "Error Message",
      invalid: true
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "utrecht-heading-4", children: "Disabled" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldSelect, { label: "Label", options: options2, disabled: true }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldSelect, { label: "Label", options: options2, description: "Description", disabled: true })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const options = [{
  value: "1",
  label: "Option 1",
  disabled: true
}, {
  value: "2",
  label: "Option 2",
  selected: true
}, {
  value: "3",
  label: "Option 3"
}];
const meta = {
  title: "React Components/Form Field/Form Field Select",
  id: "react-components-form-field-form-field-select",
  component: LuxFormFieldSelect,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-form-field-select"
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
    label: "Label",
    options,
    description: "Description",
    errorMessage: "Error Message",
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
const Disabled = {
  ...Playground,
  name: "Disabled",
  args: {
    ...Playground.args,
    disabled: true
  }
};
const Invalid = {
  ...Playground,
  name: "Invalid",
  args: {
    ...Playground.args,
    invalid: true
  }
};
const Hover = {
  ...Playground,
  name: "Hover",
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
const Focus = {
  ...Playground,
  name: "Focus",
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, { options }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "utrecht-heading-3", children: "Dark" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-dark`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, { options }) })
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
      originalSource: "{\n  name: 'Playground',\n  args: {\n    label: 'Label',\n    options,\n    description: 'Description',\n    errorMessage: 'Error Message',\n    invalid: false,\n    appearance: undefined\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_d = Disabled.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...Playground,\n  name: 'Disabled',\n  args: {\n    ...Playground.args,\n    disabled: true\n  }\n}",
      ...(_f = (_e = Disabled.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Invalid.parameters = {
  ...Invalid.parameters,
  docs: {
    ...(_g = Invalid.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...Playground,\n  name: 'Invalid',\n  args: {\n    ...Playground.args,\n    invalid: true\n  }\n}",
      ...(_i = (_h = Invalid.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_j = Hover.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...Playground,\n  name: 'Hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_l = (_k = Hover.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_m = Focus.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...Playground,\n  name: 'Focus',\n  parameters: {\n    pseudo: {\n      focus: true,\n      focusVisible: true\n    }\n  }\n}",
      ...(_o = (_n = Focus.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_p = DesignTokens.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_r = (_q = DesignTokens.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_s = Visual.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates options={options} />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates options={options} />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_u = (_t = Visual.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Disabled", "Invalid", "Hover", "Focus", "DesignTokens", "Visual"];
const FormFieldSelectStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesignTokens,
  Disabled,
  Focus,
  Hover,
  Invalid,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Disabled as D,
  FormFieldSelectStories as F,
  Hover as H,
  Invalid as I,
  Playground as P,
  Focus as a
};
