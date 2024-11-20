var _a, _b, _c;
import { g as LuxFormFieldTextbox } from "./index-CLsfO9S4.js";
import { t as tokens } from "./index-BLZ711uc.js";
import { B as BADGES } from "./preview-B52J-ax5.js";
import { m as meta$2 } from "./form-field-description.stories-Yjw3vAuQ.js";
import { m as meta$3 } from "./form-field-error-message.stories-8DiWD9w8.js";
import { m as meta$1 } from "./textbox.stories-BEK_Kr9G.js";
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
