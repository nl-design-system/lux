import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-C8muavV0.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-9blm6m3u.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Toegankelijkheid\n\n[storybook]: https://storybook.js.org/\n[storybook-a11y]: https://storybook.js.org/addons/@storybook/addon-a11y\n[axe-core]: https://github.com/dequelabs/axe-core\n[wcag-22]: https://www.w3.org/TR/WCAG22/\n[estafettemodel]: https://www.nldesignsystem.nl/handboek/estafettemodel\n[community]: https://www.nldesignsystem.nl/community\n[nlds]: https://www.nldesignsystem.nl/\n\nLUX ontwerpt en bouwt componenten met gebruikersvriendelijkheid en toegankelijkheid als grootste focus. Het ontwerpen van een component gebeurd aan de hand van marktonderzoek, gebruikerstests en praktijkervaring. Deze kennis vindt je onder andere terug in de pagina's van elk component bij het [NL Design System][nlds]. Deze informatie is volgens het [estafettemodel][estafettemodel], open [community][community] discussies en praktijkgebruik tot stand gekomen.\n\n## WCAG 2.2\n\nAlle componenten die LUX aanbiedt voldoen aan de [WCAG 2.2][wcag-22] AA richtlijnen. Hier mee voldoet LUX aan de verplichting om de WCAG 2.1 AA richtlijnen te hanteren. Door gebruik te maken van [Storybook][storybook] in combinatie met de [a11y plugin][storybook-a11y] is het mogelijk om alle componenten op de WCAG 2.2 richtlijnen te testen. De a11y plugin gebruikt onderwater [Axe-Core][axe-core] wat de open source marktstandaard is op het gebied van geautomatiseerde WCAG controles.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Toegankelijkheid"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
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
