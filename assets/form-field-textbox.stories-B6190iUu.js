var _a, _b, _c;
import { g as LuxFormFieldTextbox } from "./index-25q23o6t.js";
import { t as tokens } from "./index-CU1ZqQVd.js";
import { B as BADGES } from "./preview-BmF_s965.js";
import { m as meta$2 } from "./form-field-description.stories-BQWJqPyL.js";
import { m as meta$3 } from "./form-field-error-message.stories-CfP7itEs.js";
import { m as meta$1 } from "./textbox.stories-3WZbw7E6.js";
const meta = {
  title: "React Components/Form Field/Form Field Textbox",
  id: "react-components-form-field-form-field-textbox",
  component: LuxFormFieldTextbox,
  parameters: {
    badges: [BADGES.WIP, BADGES.CANARY],
    tokens,
    tokensPrefix: "utrecht-form-field-textbox"
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
    label: "Form Field Textbox",
    description: "Textbox in een FormField",
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
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  name: 'Playground',\n  args: {\n    label: 'Form Field Textbox',\n    description: 'Textbox in een FormField',\n    errorMessage: 'Zo kan het ook een ErrorMessage hebben',\n    invalid: false,\n    appearance: undefined\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Playground"];
const FormFieldTextboxStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  FormFieldTextboxStories as F,
  Playground as P,
  meta as m
};
