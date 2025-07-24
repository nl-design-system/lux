var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { j as LuxAccordionProvider, k as LuxIcon } from "./index-iJTiD4_v.js";
import { t as tokens } from "./index-DB79t5Cy.js";
import { B as BADGES } from "./preview-C1IhLkuu.js";
import { c as createReactComponent } from "./createReactComponent-9_R8Iz-X.js";
/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconChevronDown = createReactComponent("outline", "chevron-down", "IconChevronDown", [["path", { "d": "M6 9l6 6l6 -6", "key": "svg-0" }]]);
const meta = {
  title: "React Components/Accordion",
  id: "react-components-accordion",
  component: LuxAccordionProvider,
  parameters: {
    badges: [BADGES.WIP, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-accordion"
  },
  argTypes: {
    sections: {
      label: {
        name: "label",
        type: {
          name: "string",
          required: true
        },
        defaultValue: {
          summary: ""
        }
      },
      body: {
        name: "body",
        type: {
          name: "string",
          required: true
        },
        defaultValue: {
          summary: ""
        }
      },
      expanded: {
        name: "expanded",
        type: {
          name: "boolean",
          required: false
        },
        defaultValue: {
          summary: ""
        }
      },
      icon: {
        name: "icon",
        description: "Icon at the start",
        control: {
          type: "select"
        },
        options: ["", null, "chevron-down"],
        mapping: {
          "": void 0,
          null: null,
          "chevron-down": /* @__PURE__ */ jsxRuntimeExports.jsx(LuxIcon, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronDown, {}) })
        }
      }
    }
  }
};
const Default = {
  args: {
    sections: [{
      label: "Lorem ipsum 3",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum.`,
      expanded: true
    }]
  }
};
const AccordionWithMultipleSections = {
  args: {
    sections: [{
      label: "Lorem ipsum 1",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
      expanded: true
    }, {
      label: "Lorem ipsum 2",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
      expanded: true
    }, {
      label: "Lorem ipsum 3",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,
      expanded: true
    }]
  },
  name: "Accordion with sections"
};
const Hover = {
  ...Default,
  name: "Hover",
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
const Active = {
  ...Default,
  name: "Active",
  parameters: {
    pseudo: {
      active: true
    }
  }
};
const Focus = {
  ...Default,
  name: "Focus",
  parameters: {
    pseudo: {
      focus: true
    }
  }
};
const FocusVisible = {
  ...Default,
  name: "Focus Visible",
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    sections: [{\n      label: 'Lorem ipsum 3',\n      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n    laborum.`,\n      expanded: true\n    }]\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
AccordionWithMultipleSections.parameters = {
  ...AccordionWithMultipleSections.parameters,
  docs: {
    ...(_d = AccordionWithMultipleSections.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    sections: [{\n      label: 'Lorem ipsum 1',\n      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.`,\n      expanded: true\n    }, {\n      label: 'Lorem ipsum 2',\n      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.`,\n      expanded: true\n    }, {\n      label: 'Lorem ipsum 3',\n      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.`,\n      expanded: true\n    }]\n  },\n  name: 'Accordion with sections'\n}",
      ...(_f = (_e = AccordionWithMultipleSections.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_g = Hover.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...Default,\n  name: 'Hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_i = (_h = Hover.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...(_j = Active.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...Default,\n  name: 'Active',\n  parameters: {\n    pseudo: {\n      active: true\n    }\n  }\n}",
      ...(_l = (_k = Active.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_m = Focus.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...Default,\n  name: 'Focus',\n  parameters: {\n    pseudo: {\n      focus: true\n    }\n  }\n}",
      ...(_o = (_n = Focus.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
FocusVisible.parameters = {
  ...FocusVisible.parameters,
  docs: {
    ...(_p = FocusVisible.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...Default,\n  name: 'Focus Visible',\n  parameters: {\n    pseudo: {\n      focusVisible: true\n    }\n  }\n}",
      ...(_r = (_q = FocusVisible.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Default", "AccordionWithMultipleSections", "Hover", "Active", "Focus", "FocusVisible"];
const AccordionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AccordionWithMultipleSections,
  Active,
  Default,
  Focus,
  FocusVisible,
  Hover,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AccordionStories as A,
  Default as D,
  Focus as F,
  Hover as H,
  AccordionWithMultipleSections as a,
  Active as b,
  FocusVisible as c
};
