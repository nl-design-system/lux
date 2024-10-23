var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { t as tokens } from "./index-CzSAAJks.js";
import { d as LuxLink$1, L as LuxDocument, e as LuxIconChevronLeft, a as LuxParagraph } from "./components-Cp22cNJ4.js";
import { c as createDesignTokensStory } from "./createDesignTokensStory-HiB5Jh-Q.js";
import { c as createVisualRegressionStory, V as VisualRegressionWrapper } from "./createVisualRegressionStory-Ckg-wQz5.js";
const lux = {
  link: {
    color: {
      $extensions: {
        "$nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      }
    },
    "column-gap": {
      $extensions: {
        "$nl.nldesignsystem.css.property": {
          syntax: "<color>",
          inherits: true
        }
      }
    },
    icon: {
      size: {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "<length>",
            inherits: true
          }
        }
      }
    },
    hover: {
      color: {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      },
      "text-decoration": {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "none | underline",
            inherits: true
          }
        }
      }
    },
    active: {
      color: {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      },
      "tex-decoration": {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "none | underline",
            inherits: true
          }
        }
      }
    },
    visited: {
      color: {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      }
    },
    "font-family": {
      $extensions: {
        "$nl.nldesignsystem.css.property": {
          syntax: "<string>",
          inherits: true
        }
      }
    },
    "font-weight": {
      $extensions: {
        "$nl.nldesignsystem.css.property": {
          syntax: "<light| normal | bold>",
          inherits: true
        }
      }
    },
    "line-height": {
      $extensions: {
        "$nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "font-size": {
      $extensions: {
        "$nl.nldesignsystem.css.property": {
          syntax: "<length>",
          inherits: true
        }
      }
    },
    "text-decoration": {
      $extensions: {
        "$nl.nldesignsystem.css.property": {
          syntax: "none | underline",
          inherits: true
        }
      }
    },
    focus: {
      "text-decoration": {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "none | underline",
            inherits: true
          }
        }
      },
      color: {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      },
      "background-color": {
        $extensions: {
          "$nl.nldesignsystem.css.property": {
            syntax: "<color>",
            inherits: true
          }
        }
      }
    }
  }
};
const tokensDefinition = {
  lux
};
const VisualStates = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink$1, { href: "#", children: "Link" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink$1, { href: "#", forceState: "hover", children: "Hover link" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink$1, { href: "#", forceState: "active", children: "Active link" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink$1, { href: "#", forceState: "focus", children: "Focus link" })
] });
VisualStates.__docgenInfo = { "description": "", "methods": [], "displayName": "VisualStates" };
const href = "http://logius.nl/";
const LuxLink = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink$1, { ...props });
const meta = {
  title: "Web Components/Link",
  id: "web-components-link",
  component: LuxLink,
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx(LuxDocument, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })],
  parameters: {
    tokens,
    tokensPrefix: "lux-link",
    tokensDefinition
  },
  tags: ["!autodocs"],
  argTypes: {
    children: {
      name: "content (label)",
      description: "Link text",
      control: "text"
    },
    href: {
      type: "string"
    },
    download: {
      type: "string"
    },
    target: {
      type: "string"
    },
    forceState: {
      table: {
        disable: true
      }
    }
  }
};
const Playground = {
  name: "Playground",
  args: {
    href,
    download: void 0,
    target: void 0,
    children: "Logius"
  },
  parameters: {
    docs: {
      sourceState: "shown"
    }
  }
};
const Hover = {
  name: "Hover",
  args: {
    href,
    children: "Hover Link",
    forceState: "hover"
  }
};
const Active = {
  name: "Active",
  args: {
    href,
    children: "Active Link",
    forceState: "active"
  }
};
const Focus = {
  name: "Focus",
  args: {
    href,
    children: "Focus Link",
    forceState: "focus"
  }
};
const Download = {
  name: "Download",
  args: {
    href: "/?path=/docs/web-components-link--docs",
    children: "Download Link",
    download: "link-docs.html"
  },
  parameters: {
    docs: {
      description: {
        story: "Laat de browser de href als download aanbieden. Geef een string op om een bestandsnaam te suggereren"
      }
    }
  }
};
const Target = {
  name: "Target",
  args: {
    href: "/?path=/docs/web-components-link--docs",
    children: "Link with target",
    target: "_parent"
  },
  parameters: {
    docs: {
      description: {
        story: 'Wees voorzichtig met `target="_blank"`. Zie ook de documentatie hierboven.'
      }
    }
  }
};
const Icon = {
  name: "Icon",
  args: {
    href,
    children: "Icon Link"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxLink, { ...args, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxIconChevronLeft, {}),
    args.children
  ] })
};
const InText = {
  name: "In Text",
  args: {
    href,
    children: "Logius"
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsxs(LuxParagraph, { children: [
    `Lorem ipsum `,
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink, { ...args }),
    ` sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu `,
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink, { href: "#focus", forceState: "focus", children: "focus" }),
    ` faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum `,
    /* @__PURE__ */ jsxRuntimeExports.jsx(LuxLink, { href: "#hover", forceState: "hover", children: "hoverium" }),
    ` arturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`
  ] })
};
const DesignTokens = createDesignTokensStory(meta);
const Visual = createVisualRegressionStory(() => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "lux-heading-3", children: "Light" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(VisualRegressionWrapper, { className: `lux-theme--logius-light`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(VisualStates, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "lux-heading-3", children: "Dark" }),
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
      originalSource: "{\n  name: 'Playground',\n  args: {\n    href,\n    download: undefined,\n    target: undefined,\n    children: 'Logius'\n  },\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  }\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Hover.parameters = {
  ...Hover.parameters,
  docs: {
    ...(_d = Hover.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  name: 'Hover',\n  args: {\n    href,\n    children: 'Hover Link',\n    forceState: 'hover'\n  }\n}",
      ...(_f = (_e = Hover.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Active.parameters = {
  ...Active.parameters,
  docs: {
    ...(_g = Active.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  name: 'Active',\n  args: {\n    href,\n    children: 'Active Link',\n    forceState: 'active'\n  }\n}",
      ...(_i = (_h = Active.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Focus.parameters = {
  ...Focus.parameters,
  docs: {
    ...(_j = Focus.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  name: 'Focus',\n  args: {\n    href,\n    children: 'Focus Link',\n    forceState: 'focus'\n  }\n}",
      ...(_l = (_k = Focus.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Download.parameters = {
  ...Download.parameters,
  docs: {
    ...(_m = Download.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  name: 'Download',\n  args: {\n    href: '/?path=/docs/web-components-link--docs',\n    children: 'Download Link',\n    download: 'link-docs.html'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Laat de browser de href als download aanbieden. Geef een string op om een bestandsnaam te suggereren'\n      }\n    }\n  }\n}",
      ...(_o = (_n = Download.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Target.parameters = {
  ...Target.parameters,
  docs: {
    ...(_p = Target.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  name: 'Target',\n  args: {\n    href: '/?path=/docs/web-components-link--docs',\n    children: 'Link with target',\n    target: '_parent'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Wees voorzichtig met `target=\"_blank\"`. Zie ook de documentatie hierboven.'\n      }\n    }\n  }\n}",
      ...(_r = (_q = Target.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Icon.parameters = {
  ...Icon.parameters,
  docs: {
    ...(_s = Icon.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  name: 'Icon',\n  args: {\n    href,\n    children: 'Icon Link'\n  },\n  render: args => <LuxLink {...args}>\n      <LuxIconChevronLeft />\n      {args.children}\n    </LuxLink>\n}",
      ...(_u = (_t = Icon.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
InText.parameters = {
  ...InText.parameters,
  docs: {
    ...(_v = InText.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  name: \'In Text\',\n  args: {\n    href,\n    children: \'Logius\'\n  },\n  render: args => <LuxParagraph>\n      {`Lorem ipsum `}\n      <LuxLink {...args} />\n      {` sit amet, consectetuer adipiscing elit. Dolor ante id varius, aenean eu `}\n      <LuxLink href="#focus" forceState="focus">\n        focus\n      </LuxLink>\n      {` faucibus vitae malesuada. Viverra malesuada aliquam et placerat justo porta ipsum `}\n      <LuxLink href="#hover" forceState="hover">\n        hoverium\n      </LuxLink>\n      {` arturient. Cursus nostra varius efficitur lobortis aliquam lectus bibendum.`}\n    </LuxParagraph>\n}',
      ...(_x = (_w = InText.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
DesignTokens.parameters = {
  ...DesignTokens.parameters,
  docs: {
    ...(_y = DesignTokens.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "createDesignTokensStory(meta)",
      ...(_A = (_z = DesignTokens.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
Visual.parameters = {
  ...Visual.parameters,
  docs: {
    ...(_B = Visual.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: 'createVisualRegressionStory(() => <>\n    <h4 className="lux-heading-3">Light</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-light`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n    <h4 className="lux-heading-3">Dark</h4>\n    <VisualRegressionWrapper className={`lux-theme--logius-dark`}>\n      <VisualStates />\n    </VisualRegressionWrapper>\n  </>)',
      ...(_D = (_C = Visual.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
const __namedExportsOrder = ["Playground", "Hover", "Active", "Focus", "Download", "Target", "Icon", "InText", "DesignTokens", "Visual"];
const LinkStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Active,
  DesignTokens,
  Download,
  Focus,
  Hover,
  Icon,
  InText,
  Playground,
  Target,
  Visual,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Active as A,
  Download as D,
  Focus as F,
  Hover as H,
  Icon as I,
  LinkStories as L,
  Playground as P,
  Target as T,
  InText as a
};
