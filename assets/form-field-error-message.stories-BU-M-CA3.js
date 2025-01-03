var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { m as LuxFormFieldErrorMessage } from "./index-DzCBCR8w.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { r as reactExports } from "./index-aC1ZMUrs.js";
import { B as BADGES } from "./preview-CPpl9nLY.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldErrorMessage, { children: "Error Message" }) });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const WrappedLuxFormFieldErrorMessage = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxFormFieldErrorMessage, { ...props, ref }));
WrappedLuxFormFieldErrorMessage.displayName = "WrappedLuxFormFieldErrorMessage";
const meta = {
  title: "React Components/Form Field/Form Field Error Message",
  id: "react-components-form-field-error-message",
  component: WrappedLuxFormFieldErrorMessage,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-form-field-error-message"
  },
  argTypes: {
    children: {
      control: "text",
      description: "The content of the form field error message"
    },
    distanced: {
      control: "boolean",
      description: "Whether the error message should be distanced from the form field"
    },
    id: {
      control: "text",
      description: "Unique identifier to associate it with a form input"
    }
  }
};
const FormFieldErrorMessageTemplate = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(WrappedLuxFormFieldErrorMessage, { ...args })
};
const Playground = {
  ...FormFieldErrorMessageTemplate,
  args: {
    children: "Your password must contain at least 16 characters.",
    id: "error-message-1"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const Default = {
  ...FormFieldErrorMessageTemplate,
  args: {
    children: "Your password must contain at least 16 characters.",
    id: "error-message-2"
  }
};
const Distanced = {
  ...FormFieldErrorMessageTemplate,
  args: {
    children: "Your password must contain at least 16 characters.",
    id: "error-message-3",
    distanced: true
  }
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
      originalSource: "{\n  ...FormFieldErrorMessageTemplate,\n  args: {\n    children: 'Your password must contain at least 16 characters.',\n    id: 'error-message-1'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_d = Default.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...FormFieldErrorMessageTemplate,\n  args: {\n    children: 'Your password must contain at least 16 characters.',\n    id: 'error-message-2'\n  }\n}",
      ...(_f = (_e = Default.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Distanced.parameters = {
  ...Distanced.parameters,
  docs: {
    ...(_g = Distanced.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...FormFieldErrorMessageTemplate,\n  args: {\n    children: 'Your password must contain at least 16 characters.',\n    id: 'error-message-3',\n    distanced: true\n  }\n}",
      ...(_i = (_h = Distanced.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_j = DesignTokens.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_l = (_k = DesignTokens.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_m = Visual.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="utrecht-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="utrecht-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_o = (_n = Visual.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Default", "Distanced", "DesignTokens", "Visual"];
const FormFieldErrorMessageStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Default,
  DesignTokens,
  Distanced,
  Playground,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Default as D,
  FormFieldErrorMessageStories as F,
  Playground as P,
  Distanced as a,
  meta as m
};
