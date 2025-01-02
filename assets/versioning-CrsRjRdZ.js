import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-vExcF883.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-NIvnQ-PN.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = '# Semantic versioning\n\n## De standaard\n\nLUX gebruikt Semantic versioning (SemVer)[^1] voor de versies van releases.\nDit is een veelgebruikt versienummeringssysteem, dat in de basis uit drie versienummers bestaat, namelijk:\n\n> MAJOR.MINOR.PATCH\n\nDeze kunnen uitgebreid worden met optionele pre-release- en build-metadata labels.\n\nDe verschillende elementen worden, volgens het officiele schema[^2], verhoogd als volgt:\n\n> 1. MAJOR wordt verhoogd bij incompatibele API-wijzigingen,\n> 1. MINOR wordt verhoogd bij het toevoegen van functionaliteit die compatibel is met de vorige versie, en\n> 1. PATCH wordt verhoogd bij compatibele bugfixes.\n\n## Hoe LUX uitbreidt op de standaard\n\nBinnen LUX hebben we dit uitgebreidt en worden de versienummer als volgt verhoogd:\n\n<dl>\n<dt>MAJOR</dt>\n<dd>wordt verhoogd bij incompatibele én impactvolle (visuele) wijzigingen die bij gebruikers van LUX toegankelijkheids- of regressieproblemen kunnen veroorzaken,</dd>\n</dl>\n\n### Voorbeeld\n\nMocht het hele design van LUX op grote schaal veranderen dan zal dit veel impact hebben. SemVer beschrijft voornamelijk breaking changes in een API en niet op visueel vlak. Wij zullen dit soort veranderingen wel beschouwen als een `MAJOR` change waardoor het voor de gebruiker duidelijk is dat ze extra moeten opletten bij het updateten van LUX.\nHet is niet uitgesloten dat een Minor versie ook (visuele) regressietesten breekt, maar hiervoor zouden geen wijzigingen in een design of andere code-aanpassingen voor nodig hoeven zijn, alleen een update van de test of accorderen van een nieuwe baseline.\n\nHet artikel ["Visual Breaking Change in Design Systems"](https://medium.com/eightshapes-llc/visual-breaking-change-in-design-systems-1e9109fac9c4) van Nathan Curtis ([EightShapes op Medium](https://medium.com/eightshapes-llc)) beschrijft dit uitgebreid met duidelijke voorbeelden.\n\n### Canary releases\n\nBij elke merge naar de `main`-branch wordt er een release naar NPM gedaan onder de tag `canary`. Wil je de versie met de laatste, maar misschien niet stabiele, versie installeer het package met bijv `npm install @lux-design-system/<package>@canary`.  \nVoor de stabiele semver-versies kan je de `latest`-tag gebruiken (de default van NPM).\n\n## Contact\n\nMochten er nog vragen zijn, neem contact op met het LUX-team via ons [Slack #support-kanaal](https://logius-ux.slack.com/archives/C072WMXCC3H).\n\n### [Join Lux on Slack](https://join.slack.com/t/logius-ux/shared_invite/zt-2isbt3hue-A6ksce6Qz5g~eYxez_DF5g)\n\n[logius-ux.slack.com](https://logius-ux.slack.com/)\n\n[^1]: <https://en.wikipedia.org/wiki/Software_versioning#Semantic_versioning>\n\n[^2]: <https://semver.org/lang/nl/>\n';
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Developer/Versioning"
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
