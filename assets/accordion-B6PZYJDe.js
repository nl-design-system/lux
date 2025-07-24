import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, af as Markdown2, ag as Canvas, ah as Controls3, ai as DescriptionContainer } from "./index-BswnHOH4.js";
import { A as AccordionStories, D as Default, a as AccordionWithMultipleSections, H as Hover, b as Active, F as Focus, c as FocusVisible } from "./accordion.stories-DUkyL-ea.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-DyVLveE8.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-vKye6HrD.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-iJTiD4_v.js";
import "./index-DB79t5Cy.js";
import "./preview-C1IhLkuu.js";
import "./createReactComponent-9_R8Iz-X.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Accordion\n\nJe kunt een accordion gebruiken lange pagina\'s korter te maken zodat de gebruiker niet lang moet scrollen om de relevante informatie te vinden.\n\nDe inhoud verbergen heeft als nadeel dat "zoeken in pagina" geen resultaten oplevert de inhoud die verborgen is. Als je weet op welke zoekterm de gebruiker heeft gezocht om op de pagina met accordion te komen, dan kun je de sections die de zoekterm bevatten automatisch _expanded_ maken.\n\n## Tekst\n\nHet is belangrijk duidelijke koppen te hebben, omdat de gebruiker niet de verborgen inhoud kan "scannen" om relevante informatie te vinden.\n\n## HTML\n\nGebruik een `<button>` element waarmee je de inhoud van de section kunt weergeven en verbergen. Gebruik altijd het `aria-expanded` attribuut zodat duidelijk wat het effect is van de button activeren. Gebruik `aria-expanded="true"` wanneer de inhoud beschikbaar is, gebruik `aria-expanded="false"` wanneer de inhoud verborgen is.\n\nPlaats de button in de heading, zodat gebruikers die via een overzicht van headings door de pagina navigeren de informatie makkelijk kunnen vinden.\n\nPlaats de inhoud van de _expandable region_ in een `<section>` element, zodat gebruikers die via een overzicht van _landmarks_ door de pagina navigeren de informatie makkelijk kunnen vinden (het `section` element maakt een `region` landmark). Gebruik `aria-labelledby` om de `section` te koppelen aan de heading, omdat het is belangrijk dat de landmark een duidelijk label heeft. Zonder label is de _landmark navigation_ onduidelijk omdat er meerdere regions zijn zonder naam, waarvan niet duidelijk is wat de inhoud is.\n\nZelfs de inhoud van een verborgen _expandable region_ moet in de HTML-code staan, wanneer je _server-side rendering_ gebruikt zodat zoekmachines dan toch toegang hebben tot de volledige inhoud. De inhoud van een verborgen _expandable region_ kan met CSS onzichtbaar gemaakt worden.\n\nWanneer je accordion heel veel onderdelen heeft, dan kunnen gebruikers van _landmark navigation_ moeilijker andere landmarks in de pagina vinden. Om bij de `contentinfo` landmark te komen (de page footer), moet de gebruiker eerst alle accordion onderdelen overslaan. Gebruik voor een accordion met heel veel onderdelen een `<div>` of `<section role="presentation">` element in plaats van het `<section>` element zodat het geen landmark wordt. Gebruikers kunnen de informatie dan nog wel vinden via _heading navigation_.\n\n### Zo moet het niet\n\nVerwijder het `aria-expanded` attribuut niet, want `aria-expanded="false"` is niet hetzelfde als geen `aria-expanded` attribuut hebben. "_Boolean attributes_" van ARIA werken niet hetzelfde als _boolean attributes_ van HTML. ([Boolean attributes in HTML and ARIA: what\'s the difference? — Hidde de Vries](https://hidde.blog/boolean-attributes-in-html-and-aria-whats-the-difference/)).\n\nPlaats niet de heading in de button in plaats van andersom, omdat de heading dan niet toegankelijk is voor hulpmiddelen die een overzicht maken van alle headings op een pagina.\n\nWacht niet met het plaatsen van de inhoud van de _expandable region_ tot de gebruiker de button activeert, want zoekmachines gebruiken alleen de initiële inhoud van de pagina zonder op buttons te gebruiken.\n\n## Visueel ontwerp\n\nDe icoon plaatsen vóór de heading is meest duidelijk. Als het icoon voor _expanded_ of _not expanded_ uitgelijnd is aan het eind van de regel, dan is het minder duidelijk dat de heading een button is die voor inklappen en uitklappen zorgt. Sommige gebruikers met een beperkt gezichtsveld kunnen het icoon bijvoorbeeld niet zien wanneer ze naar naar de heading kijken, als er grote afstand zit tussen de heading en het icoon.\n\n## Relevante WCAG eisen\n\nDe WCAG eisen voor de button component en de heading component gelden ook voor de accordion header.\n\nLet extra op voor deze onderdelen:\n\n- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de _heading level_ van de accordion sections is afhankelijk van waar in de pagina de accordion is geplaatst, dit kan per pagina verschillen.\n- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): gebruik `aria-controls` voor de button, en gebruik een `region` landmark voor de _expandable region_ (gebruik daarvoor het HTML-element `<section>`)\n- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast tussen tekst en achtergrond en tussen icoon en achtergrond is voldoende in alle varianten, alle interactieve statussen en alle mogelijke combinaties.\n- [WCAG eis 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): maak de accordion niet automatisch _expanded_ als de button focus krijgt.\n- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): ondersteun ook de optionele toetsen: `Down Arrow`, `Up Arrow`, `Home` en `End`. `Space` moet de button activeren, niet de pagina scrollen (gebruik `keypressEvt.preventDefault()`).\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst die zowel wordt gebruikt als heading en als label voor de button moet duidelijk zijn, omdat de inhoud niet altijd zichtbaar is.\n- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions die onderdeel vormen van de lopende tekst moeten section headings gebruiken.\n\n## Relevante info\n\n- [Accordion (Sections With Show/Hide Functionality) - W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)\n';
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: AccordionStories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "accordion",
      children: "Accordion"
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Accordion",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-accordion--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Default
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants",
      children: "Variants"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "with-sections",
      children: "With Sections"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: AccordionWithMultipleSections
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: AccordionWithMultipleSections
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "states",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus-visible",
      children: "Focus Visible"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: FocusVisible
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
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
