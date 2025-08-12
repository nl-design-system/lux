import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-C2ZycR1s.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-BfbgjdP5.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# NL Design System\n\n[nlds]: https://www.nldesignsystem.nl/\n[nlds-community]: https://www.nldesignsystem.nl/community\n[nlds-estafette]: https://www.nldesignsystem.nl/handboek/estafettemodel\n[design-tokens]: /docs/design-tokens-design-tokens\n[nlds-example]: https://github.com/nl-design-system/example\n[frameworks]: /docs/lux-architectuur-frameworks-support--docs\n[kwaliteit-componenten]: /docs/lux-architectuur-kwaliteitseisen-componenten--docs\n\nHet [NL Design System][nlds] helpt overheden om robuuste, toegankelijke, inclusieve en gebruikersvriendelijke websites te bouwen. Dat doet NL Design System door een actieve community te faciliteren en door middel van open discussies tot richtlijnen en componenten te komen.\nDaar naast hanteert het NL Design System een [estafettemodel][nlds-estafette] dat er per stap voor zorgt dat componenten steeds beter, vollediger en conreter gemaakt worden.\n\n## LUX als implementatie\n\nLUX is een implementatie van het NL Design System binnen Logius. LUX hanteert daarom de [NL Design System richtlijnen](https://www.nldesignsystem.nl/richtlijnen), we volgen het [NL Design System Handboek](https://www.nldesignsystem.nl/handboek/introductie/) en implementeren de [NL Design System architectuur](https://www.nldesignsystem.nl/handboek/developer/architectuur).\n\nIn de praktijk betekend dit voornamelijk dat:\n\n- Onze designs in Figma zijn uitgewerkt op basis van het voorbeeld van NL Design System\n- We werken met design tokens en deze zoveel als mogelijk hebben ingericht naar het voorbeeld van NL Design System\n- We actief in de [NL Design System Community][nlds-community] deelnemen en bijdragen\n- We community componenten zoveel mogelijk herbruiken\n- We open-source werken in de Github groep van het NL Design System\n\n### Design Tokens\n\nLees hier meer over onze [design tokens][design-tokens].\n\n### Repository\n\nNaast het gebruik van design tokens gebruikt LUX de [NL Design System example repository][nlds-example] als startpunt voor de LUX codebase.\nDe example repository biedt een monorepo van waaruit verschillende packages opgebouwd en beheerd kunnen worden. Daarbij biedt de example repository een Storybook inrichting die componenten uit meerdere frameworks kan laten zien.\n\n### Componenten\n\nLUX volgt de uitkomsten van community discussies voor het stijlen en bouwen van componenten. Waarbij LUX zoveel mogelijk techniek uit de community wilt herbruiken. Je ziet daarom op verschillende plekken het gebruik van deze community componenten terugkomen in LUX.\nBekijk hier de [kwaliteitscriteria voor componenten][kwaliteit-componenten] in LUX en welke [frameworks][frameworks] LUX ondersteund.\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/NL Design System"
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
