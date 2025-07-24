var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { k as LuxIcon } from "./index-iJTiD4_v.js";
import { c as createReactComponent } from "./createReactComponent-9_R8Iz-X.js";
/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconBuildingLighthouse = createReactComponent("outline", "building-lighthouse", "IconBuildingLighthouse", [["path", { "d": "M12 3l2 3l2 15h-8l2 -15z", "key": "svg-0" }], ["path", { "d": "M8 9l8 0", "key": "svg-1" }], ["path", { "d": "M3 11l2 -2l-2 -2", "key": "svg-2" }], ["path", { "d": "M21 11l-2 -2l2 -2", "key": "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconBulb = createReactComponent("outline", "bulb", "IconBulb", [["path", { "d": "M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7", "key": "svg-0" }], ["path", { "d": "M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3", "key": "svg-1" }], ["path", { "d": "M9.7 17l4.6 0", "key": "svg-2" }]]);
/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconCandle = createReactComponent("outline", "candle", "IconCandle", [["path", { "d": "M9 21h6v-10a1 1 0 0 0 -1 -1h-4a1 1 0 0 0 -1 1z", "key": "svg-0" }], ["path", { "d": "M12 2l1.465 1.638a2 2 0 1 1 -3.015 .099z", "key": "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.26.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var IconLamp = createReactComponent("outline", "lamp", "IconLamp", [["path", { "d": "M9 20h6", "key": "svg-0" }], ["path", { "d": "M12 20v-8", "key": "svg-1" }], ["path", { "d": "M5 12h14l-4 -8h-6z", "key": "svg-2" }]]);
const meta = {
  title: "React Components/Icon",
  id: "react-components-icon",
  component: LuxIcon,
  decorators: [(Story, {
    args
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `:root {
            --utrecht-icon-color: ${args.color};
            --utrecht-icon-size: ${args.size}rem;
          }` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  ] })],
  args: {
    size: 4
  },
  argTypes: {
    color: {
      control: "color"
    },
    size: {
      control: "number"
    }
  },
  parameters: {}
};
const Playground = {
  name: "Playground",
  parameters: {
    docs: {
      sourceState: "shown"
    }
  },
  args: {
    icon: "fallback"
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["fallback", "candle", "bulb", "lamp", "building-lighthouse"],
      mapping: {
        fallback: void 0,
        candle: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCandle, {}),
        bulb: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBulb, {}),
        lamp: /* @__PURE__ */ jsxRuntimeExports.jsx(IconLamp, {}),
        "building-lighthouse": /* @__PURE__ */ jsxRuntimeExports.jsx(IconBuildingLighthouse, {})
      }
    }
  },
  tags: ["!autodocs"]
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_a = Playground.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  name: 'Playground',\n  parameters: {\n    docs: {\n      sourceState: 'shown'\n    }\n  },\n  args: {\n    icon: 'fallback'\n  },\n  argTypes: {\n    icon: {\n      control: 'select',\n      options: ['fallback', 'candle', 'bulb', 'lamp', 'building-lighthouse'],\n      mapping: {\n        fallback: undefined,\n        candle: <IconCandle />,\n        bulb: <IconBulb />,\n        lamp: <IconLamp />,\n        'building-lighthouse': <IconBuildingLighthouse />\n      }\n    }\n  },\n  tags: ['!autodocs']\n}",
      ...(_c = (_b = Playground.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Playground"];
const IconStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Playground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  IconStories as I,
  Playground as P
};
