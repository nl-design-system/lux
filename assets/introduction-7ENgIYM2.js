import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-Bk6iONnr.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BG8Mc6yL.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const mdIntroduction = '<!-- @license CC0-1.0 -->\n\n[design-tokens]: /docs/design-tokens-design-tokens--docs\n[web-components]: /docs/web-components-alert--docs\n[react-components]: /docs/react-components-alert--docs\n[nlds]: https://www.nldesignsystem.nl/\n\n# LUX: Hét Logius Design System\n\nLUX helpt je om Logius producten te bouwen zonder dat jij hoeft na te denken over hoe het er uit ziet. Jij kan je focussen op hoe het werkt. LUX staat voor "Logius UX", ofwel "Logius User eXperience" en is het design system dat Logius-breed ingezet wordt.\n\n## Wat biedt LUX\n\nMomenteel biedt LUX een UI kit in Figma, een scala aan [Design Tokens][design-tokens], [React Componenten][react-components] en [Web Componenten][web-components]. En het aantal componenten wordt doorlopend uitgebreid. Wij werken nauw samen met het [NL Design System][nlds] (NLDS), waarmee we samen met andere betrokken partijen kennis delen en eenheid creëeren voor de Nederlandse digitale overheid.\n\n## Onze code en packages\n\n<ul className="lsb-list--inline sb-unstyled">\n  <li>[<img src="github.png" height="18" alt="Github" /> Code op Github](https://github.com/nl-design-system/lux)</li>\n  <li>[<img src="storybook.png" height="18" alt="Storybook" /> Storybook](https://nl-design-system.github.io/lux/)</li>\n  <li>[<img src="npm.png" height="18" alt="NPM" /> Packages op NPM](https://www.npmjs.com/org/lux-design-system)</li>\n  <li>[<img src="figma.png" height="18" alt="NPM" /> UI Kit op Figma](https://www.figma.com/design/515tboh6xpSNziwQu6WyAy/LUX---UI-kit?node-id=265-14201)</li>\n</ul>\n\n## Neem contact met ons op\n\nZit je na het lezen van deze documentatie nog met vragen? Stuur ons dan een berichtje op Slack of stuur ons een mail. We reageren meestal dezelfde werkdag nog.\n\n<ul className="lsb-list--inline sb-unstyled">\n  <li>[<img src="slack.png" height="18" alt="Slack" /> Join us on Slack](https://join.slack.com/t/logius-ux/shared_invite/zt-2isbt3hue-A6ksce6Qz5g~eYxez_DF5g)</li>\n  <li>[Stuur een e-mail](mailto:lux.design.system@logius.nl)</li>\n</ul>\n';
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Start"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: mdIntroduction
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
export {
  MDXContent as default
};
