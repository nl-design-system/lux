var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { i as LuxLinkList } from "./index-BJfiFLmy.js";
import { t as tokens } from "./index-DB79t5Cy.js";
import { B as BADGES } from "./preview-D2d5B-Ve.js";
const ExampleIcon = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { height: "18", width: "18", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "11", height: "11", y: "7", x: "1", fill: "currentColor" }) });
const ExampleIcon2 = /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { height: "18", width: "18", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "6", cx: "7", cy: "12", fill: "currentColor" }) });
const meta = {
  title: "React Components/Link List",
  id: "react-components-link-list",
  component: LuxLinkList,
  parameters: {
    badges: [BADGES.BETA, BADGES.LATEST],
    tokens,
    tokensPrefix: "utrecht-link"
  },
  argTypes: {
    links: {
      description: "Link items to be displayed in the list",
      control: "object",
      table: {
        type: {
          summary: "HTML Content"
        }
      }
    },
    icon: {
      name: "icon",
      description: "Icon Node",
      control: {
        type: "select"
      },
      options: ["", null, "rectangle", "circle"],
      mapping: {
        "": void 0,
        null: null,
        rectangle: () => ExampleIcon,
        circle: () => ExampleIcon2
      }
    }
  }
};
const LinkListTemplate = {
  args: {
    icon: () => ExampleIcon,
    links: [{
      href: "#",
      children: "Link 1 with so much content wow look how long!"
    }, {
      href: "#",
      children: "Link 2"
    }, {
      href: "#",
      children: "Link 3"
    }]
  },
  render: ({
    ...args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLinkList, { ...args })
};
const LinkListWithOneItemTemplate = {
  render: ({
    ...args
  }, context) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLinkList, { ...args, icon: () => ExampleIcon, links: [{
    href: `#${context.name}`,
    children: "Link 1!"
  }] })
};
const Playground = {
  ...LinkListTemplate,
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  tags: ["!autodocs"]
};
const ListItemWithDifferentIcon = {
  ...LinkListTemplate,
  name: "ListItem with different icon",
  args: {
    ...LinkListTemplate == null ? void 0 : LinkListTemplate.args,
    links: [...((_a = LinkListTemplate == null ? void 0 : LinkListTemplate.args) == null ? void 0 : _a.links) || [], {
      href: "#",
      children: "Link 4",
      icon: ExampleIcon2
    }]
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const Active = {
  ...LinkListWithOneItemTemplate,
  name: "Active",
  parameters: {
    pseudo: {
      active: true
    }
  }
};
const Hover = {
  ...LinkListWithOneItemTemplate,
  name: "Hover",
  parameters: {
    pseudo: {
      hover: true
    }
  }
};
const Focus = {
  ...LinkListWithOneItemTemplate,
  name: "Focus",
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
};
const Visited = {
  ...LinkListWithOneItemTemplate,
  name: "Visited",
  parameters: {
    pseudo: {
      visited: true
    }
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_b = Playground.parameters) == null ? void 0 : _b.docs,
    source: {
      originalSource: "{\n  ...LinkListTemplate,\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_d = (_c = Playground.parameters) == null ? void 0 : _c.docs) == null ? void 0 : _d.source
    }
  }
};
ListItemWithDifferentIcon.parameters = {
  ...ListItemWithDifferentIcon.parameters,
  docs: {
    ...(_e = ListItemWithDifferentIcon.parameters) == null ? void 0 : _e.docs,
    source: {
      originalSource: "{\n  ...LinkListTemplate,\n  name: 'ListItem with different icon',\n  args: {\n    ...LinkListTemplate?.args,\n    links: [...(LinkListTemplate?.args?.links || []), {\n      href: '#',\n      children: 'Link 4',\n      icon: ExampleIcon2\n    }]\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_g = (_f = ListItemWithDifferentIcon.parameters) == null ? void 0 : _f.docs) == null ? void 0 : _g.source
    }
  }
};
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...(_h = Active.parameters) == null ? void 0 : _h.docs,
    source: {
      originalSource: "{\n  ...LinkListWithOneItemTemplate,\n  name: 'Active',\n  parameters: {\n    pseudo: {\n      active: true\n    }\n  }\n}",
      ...(_j = (_i = Active.parameters) == null ? void 0 : _i.docs) == null ? void 0 : _j.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_k = Hover.parameters) == null ? void 0 : _k.docs,
    source: {
      originalSource: "{\n  ...LinkListWithOneItemTemplate,\n  name: 'Hover',\n  parameters: {\n    pseudo: {\n      hover: true\n    }\n  }\n}",
      ...(_m = (_l = Hover.parameters) == null ? void 0 : _l.docs) == null ? void 0 : _m.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_n = Focus.parameters) == null ? void 0 : _n.docs,
    source: {
      originalSource: "{\n  ...LinkListWithOneItemTemplate,\n  name: 'Focus',\n  parameters: {\n    pseudo: {\n      focus: true,\n      focusVisible: true\n    }\n  }\n}",
      ...(_p = (_o = Focus.parameters) == null ? void 0 : _o.docs) == null ? void 0 : _p.source
    }
  }
};
Visited.parameters = {
  ...Visited.parameters,
  docs: {
    ...(_q = Visited.parameters) == null ? void 0 : _q.docs,
    source: {
      originalSource: "{\n  ...LinkListWithOneItemTemplate,\n  name: 'Visited',\n  parameters: {\n    pseudo: {\n      visited: true\n    }\n  }\n}",
      ...(_s = (_r = Visited.parameters) == null ? void 0 : _r.docs) == null ? void 0 : _s.source
    }
  }
};
const __namedExportsOrder = ["Playground", "ListItemWithDifferentIcon", "Active", "Hover", "Focus", "Visited"];
const LinkListStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Active,
  Focus,
  Hover,
  ListItemWithDifferentIcon,
  Playground,
  Visited,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Active as A,
  Focus as F,
  Hover as H,
  LinkListStories as L,
  Playground as P,
  Visited as V,
  ListItemWithDifferentIcon as a
};
