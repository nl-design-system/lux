import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ah as Markdown2, af as Canvas, ag as Controls3, am as DescriptionContainer } from "./index-ChTriOZ2.js";
import { B as ButtonStories, P as Playground, a as Primary, S as Secondary, T as Tertiary, A as Active, H as Hover, F as Focus, b as Busy, c as Toggle, W as WithStartIcon, d as WithEndIcon } from "./button.stories-bYLG5bTM.js";
import { C as CitationDocumentation } from "./CitationDocumentation-B3Shsstx.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-qSd8NSvo.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./components-DtBZFJGV.js";
import "./createVisualRegressionStory-CMDMpfq0.js";
import "./index-DbgQBs_-.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Button\n\nDe button component gebruik je zodat de gebruiker acties kan uit te voeren en de _user interface_ kan bedienen.\n\nVaak gebruik je een button in combinatie met de _button group_ component: plaats de button in een _button group_ als je ruimte tussen de button en andere componenten wilt.\n\n## Toepassing\n\n### Gebruik je een button of link?\n\nSommige ontwerpen hebben een button om naar een andere pagina te gaan. Sommige ontwerpen hebben link in een formulier om naar de vorige pagina te gaan, terwijl de gegevens wel tussentijds verstuurd en opgeslagen worden. Het is belangrijk dat je het goede HTML-element gebruikt dat past bij de actie, in plaats van het HTML-element kiest dat past bij het ontwerp.\n\nOm deze patronen te gebruiken zijn er vier componenten nodig:\n\n- link\n- link die eruit ziet als button\n- button\n- button die eruit ziet als link\n\nGebruik alleen een `<a>` element wanneer er geen gevolgen zijn. Gebruik een `<button>` element als je niet de browser back button kan gebruiken om het effect ongedaan te maken.\n\nEnkele voorbeelden waar je een link gebruikt:\n\n- een _call to action_ om te registreren: een link.\n- een knop om naar het loginformulier te gaan: een link\n- dezelfde pagina in een andere taal bekijken: een link.\n\nEnkele voorbeelden waar je een button gebruikt:\n\n- "Volgende stap" of "vorige stap" in een formulier. Gebruik een submit button wanneer gegevens tussendoor opgeslagen worden of verstuurd worden.\n- Uitloggen: button. Log niet uit met een link! Je navigatie moet het ondersteunen om zowel links als button dezelfde stijl te geven.\n- de voorkeurstaal aanpassen en dezelfde pagina in een andere taal bekijken: een button.\n\n## Anatomie\n\n### Terminologie\n\n- **button**: van het `<button>` HTML element, `role="button"` in ARIA.\n- **appearance**: van de [CSS `appearance` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: `appearance: push-button`).\n\n### States\n\n- `normal`\n- `active`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De `active` state duurt maar heel kort.\n- `pressed`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd `pressed` zijn, in tegenstelling tot `active`.\n- `hover`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te \'zweven\'.\n- `focus`\n- `focus` en `focus-visible`: de link heeft de focus door de `Tab` knop van het keyboard.\n- `disabled`\n- `disabled` en `focus-visible`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.\n\n## Design\n\nMaak elke button 44×44px of groter ([WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size)).\n\n## HTML\n\nGebruik het `<button type="button">` element in HTML om een button te maken.\n\nEen alternatief op `<button>` is bijvoorbeeld `<input type="button">`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is `<div role="button" tabindex="0">`, maar `<button>` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.\n\n### Formulieren verzenden\n\nVoor formulieren verzenden gebruik je `<button type="submit">`. Gebruik ook de `submit` event van een formulier en niet alleen de `click` event van de button, zodat je ook vanuit een formulierveld op `Enter` kan drukken om het formulier te verzenden.\n\n## Hoe het niet moet\n\n### Geen koppeling met uitleg over button\n\nNiet:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" />\n</p>\n<p>Je mag een JPG of een PDF uploaden.</p>\n```\n\nWel:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" aria-describedby="upload-description" />\n</p>\n<p id="upload-description">Je mag een JPG of een PDF uploaden.</p>\n```\n\n---\n\nNiet:\n\n```html\n<p>\n  <button type="submit">Verzenden</button>\n</p>\n<p>Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>\n```\n\nWel:\n\n```html\n<p>\n  <button type="submit" aria-describedby="submit-description">Verzenden</button>\n</p>\n<p id="submit-description">Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>\n```\n\n### Geen koppeling met foutmelding bij een button\n\nNiet:\n\n```html\n<p>\n  <button type="submit">Opslaan</button>\n</p>\n<p class="error">Je bent uitgelogd. Log opnieuw in om je wijzigingen op te slaan.</p>\n```\n\nWel:\n\n```html\n<p>\n  <label for="upload">Bijlage:</label>\n  <input type="file" id="upload" aria-describedby="upload-description" />\n</p>\n<p id="upload-description" class="error">Je mag een JPG of een PDF uploaden.</p>\n```\n\n## Relevante WCAG regels\n\n- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met `Enter` of `Space`, en het is mogelijk met `Tab` de button te focussen. `Space` gebruiken heeft dan niet het effect dat de pagina scrollt.\n- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn\n- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):\n  - gebruik niet de `mousedown` event om de button te activeren, gebruik liever de `click` event\n  - `mousedown` mag alleen gebruikt worden als `mouseup` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.\n- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.\n';
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: ButtonStories
    }), "\n", jsxRuntimeExports.jsx(CitationDocumentation, {
      component: "Utrecht Button",
      url: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-button--docs"
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "variants-appearance",
      children: "Variants (appearance)"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Voor Lux zijn er drie varianten van de button. In de community komen ook andere varianten voor. Kies je een variant die\nniet bestaat in onze tokens dan zal je een paarse styling zien, als visuele waarschuwing."
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "primary--primary-action-button",
      children: "Primary / primary action Button"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Primary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Primary
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "secondary--secondary-action-button",
      children: "Secondary / secondary action button"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Secondary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Secondary
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "tertiary--subtle-button",
      children: "Tertiary / subtle button"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Tertiary
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Tertiary
    }), "\n", jsxRuntimeExports.jsx("h2", {
      id: "states_examples",
      children: "States"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "active",
      children: "Active"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Active
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Active,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "hover",
      children: "Hover"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Hover
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Hover,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Focus
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Focus,
      sourceState: "none"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "busy",
      children: "Busy"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Busy
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Busy,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "toggle--pressed",
      children: "Toggle / Pressed"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Toggle
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Toggle,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "icons",
      children: "Icons"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "start-icon",
      children: "Start Icon"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: WithStartIcon
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithStartIcon,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "end-icon",
      children: "End Icon"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: WithEndIcon
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: WithEndIcon,
      sourceState: "hidden"
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
