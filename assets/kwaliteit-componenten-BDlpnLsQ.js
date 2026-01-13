import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2 } from "./index-DvxV4eF3.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-CsY5d8EV.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
const markdown = "# Kwaliteitseisen componenten\n\nAlle componenten die aan LUX worden toegevoegd moeten voldoen aan dezelfde kwaliteitseisen. Dit noemen we ook wel de Component Definition of Done. Dat houdt in dat ze alle onderstaande fases hebben doorlopen en alle vragen beantwoord zijn.\n\n## A. Onderzoeksfase\n\n### Onboarding\n\n- Is het een nieuw te ontwikkelen component?\n- Is het een bestaand component dat in LUX opgenomen kan worden?\n- Gaat het om nieuwe features aan een bestaand component?\n- Gaat het om wijzigingen aan bestaand LUX component?\n\n### Geinventariseerd\n\n- Voorziening wilt dit component ontwikkelen?\n- Voorziening wilt een bestaand component onboarden?\n- Component lijkt geschikt voor LUX?\n\n### Vooronderzoek uitgevoerd\n\n- Hoe wordt het nu gebruikt/opgelost?\n- Welk patroon is nodig?\n- Best practice onderzoek is uitgevoerd?\n- Onderzoek naar NLDS componenten uitgevoerd?\n- Component is te gebruiken in meerdere contexten?\n- Onderzocht naar NLDS oplossing (tools, code, standaarden enz) uitgevoerd?\n\n### Component is geschikt\n\n- Rationale is vastgelegd?\n- Wat het moet kunnen is vastgelegd?\n- Hoe het er uit moet zien is vastgelegd?\n- Hoe het zich moet gedragen is vastgelegd?\n- Het component is voldoende opgeknipt?\n\n## B. Realisatiefase\n\n### Component is ready\n\n- UX community approved?\n- FE community approved?\n- Verschillende voorzieningen kunnen het component gebruiken?\n\n### Component is uitgewerkt\n\n- Gebruikt design tokens?\n- Alle varianten zijn uitgewerkt?\n\n### Ondersteunt alle modes\n\n- Heeft een light mode?\n- Heeft een dark mode?\n- Ondersteund andere leesrichtingen?\n- Ondersteund verschillende huisstijlen/themas\n\n### Tests geslaagd\n\n- Linted?\n- 80% unit test covered? (Community component? Dan is de wrapper getest)?\n- 100% WCAG 2.2 AA tested?\n- Visual regression tested?\n- Integration tested?\n\n### Is gedocumenteerd\n\n- Alle varianten en configs staan in Figma?\n- Alle varianten en configs staan in Storybook?\n- Afwijkingen zijn gedocumenteerd?\n- Hoe het component gebruikt hoort te worden is gedocumenteerd?\n- De API is 100% gedocumenteerd?\n\n## C. Publicatiefase\n\n### Is in gebruik bij een Logius voorziening\n\n- Voorziening werkt met LUX Figma?\n- Voorziening maakt gebruik van LUX component in eigen code?\n\n### Aangedragen bij NLDS als community componenten\n\n- Is in de community bekend gemaakt?\n\n### Component is done\n";
function _createMdxContent(props) {
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "LUX/Kwaliteitseisen componenten"
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
