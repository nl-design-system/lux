import { j as jsxRuntimeExports } from "./jsx-runtime-DnIIMar6.js";
import { useMDXComponents } from "./index-DXHhUSGJ.js";
import { ae as Meta, ai as Markdown2, af as Canvas, ag as Controls3, ah as DescriptionContainer } from "./index-BczCEKAy.js";
import { L as LinkStories, P as Playground, A as Active, H as Hover, F as Focus, D as Download, T as Target, I as Icon, a as InText } from "./link.stories-D5jmEp4z.js";
import "./index-aC1ZMUrs.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./iframe-t1uDzmrr.js";
import "../sb-preview/runtime.js";
import "./index-B63kQkss.js";
import "./index-DLlB04eo.js";
import "./index-DtSuK_9N.js";
import "./index-BdOSk9or.js";
import "./index-CSNacGed.js";
import "./createVisualRegressionStory-Ckg-wQz5.js";
import "./components-Cp22cNJ4.js";
const markdown = '<!-- @license CC0-1.0 -->\n\n# Link\n\nMet de link maak je navigatie mogelijk naar een gerelateerde pagina.\n\n## Activeren met _touch_\n\nVeel gebruikers activeren de link door te klikken op een _touch screen_. Deze gebruikers zien niet de _hover_ state van een link, dus een link moet ook duidelijk herkenbaar zijn zonder ooit het design van de _hover_ state te zien.\n\n## Activeren met toetsenbord\n\nSommige gebruikers gebruiken het toetsenbord om telkens met één druk op de knop naar de volgende link te gaan. De `focus-visible` variant moet daarom opvallend zijn, zodat je weet welke link je kunt activeren met `Enter`. Links moet je kunnen activeren met `Enter`, maar niet met `Space`.\n\n## Activeren met een muis\n\nGebuikers met een muis kunnen de _hover_ state zien wanneer de muisaanwezer over de link heen beweegt. Links met een `title` attribuut kunnen dan een tooltip tonen die in de weg zit (gebruik daarom geen `title` attribuut).\n\nGebruikers die zowel toetsenbord als muis gebruiken moeten kunnen onderscheiden welke link focus heeft, en welke de _hover_ state heeft.\n\n## Activeren met een _screen reader_\n\nSommige gebruikers gebruiken een lijst van alle links op een pagina, en kiezen een link uit op basis van de link-tekst. Deze gebruikers bekijken niet de hele pagina, en zien niet altijd de link in de context van de omliggende tekst. Daarom is het belangrijk dat de link-tekst op zichzelf duidelijk maakt welke pagina je opent. Om de juiste link te kunnen kiezen, is het ook belangrijk dat niet dezelfde link-tekst wordt gebruikt voor verschillende links. Gebruik dus niet "Lees meer" als link-tekst, die tekst is meestal niet uniek op een pagina en is onduidelijk zonder context.\n\n## Terug met de _Back button_\n\nNa het activeren van een link, moet een gebruiker weer terug kunnen naar de vorige pagina. Gebruikers doen dat met bijvoorbeeld de _back button_ van de browser, of met een _swipe gesture_ op een _touch screen_.\n\nAls je gewoon `<a href="...">` in HTML gebruikt dan werkt de back button zoals het hoort. Met extra code kun je de back button onbedoeld kapot maken. Als je het `target` attribuut gebruikt, dan werkt de _back button_ niet (bijvoorbeeld: `target="_blank"`).\n\nAls je een _single page app_ maakt moet je goed testen dat de back button nog goed werkt. Wanneer je de `click` event van de link stopt met `event.preventDefault()` en met script een eigen navigatie maakt, dan moet je de [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) gebruiken om een even goede ervaring te bieden als gewone links in HTML.\n\n## Er zijn veel soorten links\n\nJe kunt links groeperen in de navigatie-regio van de pagina, zodat gebruikers snel vinden welke informatie er nog meer is. Je kunt links plaatsen in de lopende tekst. Je kunt overzichtelijke lijstjes met links plaatsen in de tekst. Je kunt links plaatsen naar dezelfde informatie in een ander formaat of in een andere taal. Je kunt van hele blokken een link maken, om die informatie in detail te openen.\n\n## Link versus button\n\nLinks worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin.\n\nButtons worden gebruikt voor acties, zoals \'toevoegen\', \'sluiten\' of \'opslaan\'.\n\n## Design\n\n### Onderstreep de link\n\nLinks zijn het meest herkenbaar als je de tekst van de link onderstreept, want dat is gebruikelijk sinds het begin van het web. Gebruik een kleur met voldoende contrast voor de streep, zodat iedereen die de tekst kan zien ook de streep kan zien. De kleur van de streep kan minder contrast hebben als de streep dikker is.\n\nEen streep die door de letters gaat maakt de tekst minder leesbaar. Gebruikers met dyslexie kunnen woorden beter herkennen als het woordbeeld niet wordt aangetast. Maak het woordbeeld van links rustiger met de volgende twee CSS properties. Je kunt met `text-decoration-skip-ink` in CSS de streep automatisch laten onderbreken, zodat je voorkomt dat woorden een beetje doorstreept worden. Met `text-underline-offset` kun je de afstand tussen de streep en de letters iets groter maken, zodat een onderbroken streep minder vaak nodig is.\n\nLinks die staan op een herkenbare plek zoals de hoofdnavigatie, zijn vaak al herkenbaar als link wanneer ze niet onderstreept zijn. Je kunt extra duidelijk maken dat het een link is door de tekst alsnog onderstrepen als `hover` of `focus` effect, zodat een gebruiker zeker weet dat de browser mogelijkheden heeft zoals "Openen deze link in een nieuwe tab" of "Deel deze link".\n\nHeeft de link een icoon én tekst, onderstreep dan alleen de tekst.\n\n### Geen icoon voor externe links\n\nGebruik geen speciaal icoon bij links naar een externe website. Door [onderzoek naar externe links van GOV.UK](https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/) weten we dat gebruikers hier weinig voordeel van hebben.\n\n### `hover` en `focus`\n\nWanneer een gebruiker met de muis over een link gaat (`hover`), of met het toetsenbord een link selecteert (`focus`), dan is het belangrijk dat er geen onvoorspelbare wijzigingen in de layout zijn.\n\nGebruik voor `hover` en `focus` geen effecten waardoor de tekst van de link over meer regels wordt verdeeld, of waardoor de tekst na de link verschuift. Gebruik daarom geen andere `font-size` of `font-weight` als effect.\n\nGebruik voor `hover` en `focus` geen effect waardoor de positie van de link verschuift, waardoor het moeilijk wordt de link aan te klikken.\n\n### Contrast met elke achtergrondkleur\n\nLinks kunnen staan in componenten die een speciale achtergrondkleur hebben, zoals componenten met een signaalkleur als achtergrond. De linkkleur moet voldoende contrast hebben met die achtergrondkleuren. Controleer alle mogelijke varianten, want misschien moet je in die situaties een bijpassende link-kleur kiezen.\n\n## Content\n\n### Gebruik van links in tekst\n\nLinks moeten duidelijk zijn: gebruikers begrijpen dat je de link gebruikt om naar een andere pagina te gaan, en het is voorspelbaar naar welke pagina je toe gaat.\n\nGebruikers met ondersteunende technologie, zoals een schermlezer of braillebalk, horen/voelen vaak als eerste alle links in de content om hen te helpen snel te kunnen navigeren door de content. Er kan ook behoefte zijn om de de content vergroot te willen bekijken, zodat de gebruikers alleen de linktekst en een paar woorden eromheen tegelijkertijd kan zien.\n\nMaak geen links met een onduidelijke tekst, zoals "hier" of "lees meer".\n\n### Links in een zin\n\nLinks moeten nooit een hele zin in beslag nemen, maar alleen de tekst die beschrijft waar de gebruikers naar toe gaan als ze op de link klikken.\n\n### Do\'s\n\n- Plaats links aan het einde van een zin als dat mogelijk is.\n- Maak duidelijk waar de link je naar toe brengt.\n- Gebruik het meest relevante woord van de link aan het begin van de link tekst. Bezoekers lezen niet verder dan de eerste twee woorden van een link.\n- Zorg dat de link ook begrijpelijk is zonder dat je de zinnen er omheen gelezen hebt.\n\n### Don\'ts\n\n- Gebruik geen buttons waar je een link kan gebruiken.\n- Gebruik geen vage of te algemene termen voor de link tekst. Help de gebruiker met voorspellen waar hij naar toe gaat.\n- Open interne links niet in een nieuwe tab. Hiermee schakel je één navigatiemanier uit om terug te gaan naar eerdere pagina\'s, de terug knop van de brower.\n\n## States\n\nWe beschrijven de volgende states van een link:\n\n- **normal**: geen van de onderstaande states is van toepassing op de link. Deze state is gewoon de `utrecht-link` class in de code, maar we beschrijven hem hier om aan te geven dat de link \'normaal\' is zonder een andere state.\n- **active**: de gebruiker activeert de link op dit moment. Bijvoorbeeld door er op te klikken. De `active` state duurt maar heel kort.\n- **hover**: de gebruiker heeft de aanwijzer boven de link. Bijvoorbeeld door met de muiscursor er over te \'zweven\'.\n- **focus**: de link heeft de focus doordat er op geklikt of getapt is. Denk ook aan voice of eye-tracking.\n- **focus-visible**: de link heeft de focus door de \'tab\' knop van het keyboard.\n- **visited**: de link is eerder gebruikt door de gebruiker.\n- **busy**: de button is geactiveerd en de actie wordt nu nog uitgevoerd.\n\n## Link in plaats van `<a>`\n\nVoor de component naam hebben we voor "`link`" gekozen, en niet voor "`a`" zoals de [`<a>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) in HTML. Buiten de context van HTML-code (bijvoorbeeld in Figma) is `a`niet duidelijk genoeg, en we verwachten niet dat er grote verwarring ontstaat met het [`<link>`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) element van HTML.\n\n## HTML\n\n- Gebruik het `<a>` element om links aan te maken.\n- Gebuik niet het `title` attribuut. Sommige browsers gebruiken een tooltip om de tekst uit het `title` attribuut te tonen, die tooltip kan over de tekst heenstaan waardoor het niet leesbaar is.\n- Gebruik nooit een `<button>` of een ander element met een `click` event om zelf een link na te maken.\n- Gebruik `aria-current="page"` wanneer de link verwijst naar de huidige pagina. Voor consistente navigatie ([WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)) is het beter om links in de navigatie te laten staan dan om geen `<a>` te gebruiken voor de huidige pagina.\n- Vermijd het gebruik van `href="#"`. Dit brengt de focus naar het begin van de pagina en dat is nooit wensbaar.\n- Gebruik nooit `tabindex="0"` bij het `<a>` element. Links kunnen al standaard focus ontvangen.\n- Vermijd onnodig gebruik van `tabindex="-1"`, er zijn weinig situaties waar het nodig is.\n- Gebruik `aria-label` en niet `title` voor het volledige label van de link. Soms is de inhoud van het `a` element niet een goed label, bijvoorbeeld wanneer er een icoon in staat of het zichtbare label een algemene tekst is zoals "Lees meer". Zie ook [WCAG Technique ARIA8](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)\n\n### `tabindex="-1"`\n\nGebruik `tabindex="-1"` in zeldzame gevallen dat het gebruiksvriendelijker is om een link weg te halen uit tabvolgorde. Toetsenbordgebruikers moeten toegang hebben tot dezelfde links als gebruikers van een muis.\n\nAls het nodig is twee identieke links kort na elkaar te plaatsen, dan is het onnodig en onhandig dat dezelfde link twee keer na elkaar focus krijgt. In dat geval is het beter om één van de links uit de tabvolgorde te verwijderen.\n\nBijvoorbeeld:\n\n```html\n<article>\n  <h2 id="heading-puppy-geboren"><a href="/nieuws/monster-puppy">Puppy met zes poten</a></h2>\n  <p>\n    In de gemeente Monster is een puppy geboren met zes poten.\n    <a href="/nieuws/monster-puppy" tabindex="-1" aria-labelledby="heading-puppy-geboren">Lees verder...</a>\n  </p>\n</article>\n```\n\n## Privacy\n\nAls de `visited` een ander visueel ontwerp heeft dan een normale link, dan kunnen anderen zien welke pagina\'s zijn bekeken. Gebruik daarom liever geen `visited` design tokens voor websites waar de privacy van de gebruiker in gevaar komt.\n\nAls je een linkt maakt naar een externe website, dan kan die website zien op welke pagina de bezoeker op dat moment was. Dit is slecht voor de privacy, gebruik daarom altijd gebruik van de "externe link" code om deze informatie af te schermen.\n\n## Hoe het niet moet\n\n### Geen zichtbaar verschil tussen hover en focus state\n\nAls toetsenbordgebruiker is het belangrijk dat je weet welke link je activeert als je op `Enter` drukt. Als de hover-variant van de link (bijna) hetzelfde is als de focus-variant, dan weet je niet zeker welke link je zult activeren.\n\n### Link-tekst betekent verschillende dingen\n\nNiet goed: "contact" linkt eerst naar de contact-pagina, verder op linkt "contact" naar een telefoonnummer.\n\n```html\n<nav>\n  <a href="/contact/">contact</a>\n</nav>\n<!-- ...op een andere plek in dezelfde pagina -->\n<p>Neem <a href="tel:555-1234">contact</a> op met de klantenservice, vandaag tot 6 uur bereikbaar.</p>\n```\n\nBeter:\n\n```html\n<nav>\n  <a href="/contact/">contact</a>\n</nav>\n<!-- ...op een andere plek in dezelfde pagina -->\n<p><a href="tel:555-1234">Bel de klantenservice</a>, vandaag tot 6 uur bereikbaar.</p>\n```\n\n### Verkeerde taal\n\nAls je linkt naar een pagina waarvan de beschrijving in een andere taal is dan de context waarin de link staat, dan moet je de taal instellen op de link zelf (WCAG 3.1.2).\n\nNiet:\n\n```html\n<a href="/nl/">Nederlands</a>\n<a href="/en/">English</a>\n<a href="/fr/">François</a>\n```\n\nWel:\n\n```html\n<a href="/nl/">Nederlands</a>\n<a href="/en/" lang="en">English</a>\n<a href="/fr/" lang="fr">François</a>\n```\n\nNiet:\n\n```html\n<p>\n  In de presentatie\n  <a href="https://www.slideshare.net/stubbornella/object-oriented-css"\n    >Object Oriented CSS for high performance web applications and sites</a\n  >\n  vertelt Nicole Sullivan over een aanpak om CSS te schrijven.\n</p>\n```\n\n```html\n<p>\n  In de presentatie\n  <a href="https://www.slideshare.net/stubbornella/object-oriented-css" lang="en"\n    >Object Oriented CSS for high performance web applications and sites</a\n  >\n  vertelt Nicole Sullivan over een aanpak om CSS te schrijven.\n</p>\n```\n\n### Link naar huidige pagina niet opmaken\n\nGebruik niet _alleen_ een class name om duidelijk te maken dat de link verwijst naar de huidige pagina.\n\n```html\n<a href="/">Home</a> › <a href="/nieuws/">Nieuws</a> ›\n<a href="/nieuws/burgemeester" class="current">Nieuwe burgemeester</a>\n```\n\nGebruik altijd `aria-current` om de informatie beschikbaar te maken aan de browser en tools:\n\n```html\n<a href="/">Home</a> › <a href="/nieuws/">Nieuws</a> ›\n<a href="/nieuws/burgemeester" class="current" aria-current="page">Nieuwe burgemeester</a>\n```\n\n### Onnodige link naar huidige pagina\n\nNiet goed: een link naar de homepage plaatsen op de homepage zelf. Op andere pagina\'s is het natuurlijk wel handig om het logo een link te maken.\n\n```html\n<header>\n  <a href="/">\n    <img class="utrecht-logo" src="/logo.svg" alt="Keuringsdienst van waarde" />\n  </a>\n</header>\n<h1>Home</h1>\n```\n\nWel goed: logo zonder link op de homepage.\n\n```html\n<header>\n  <img class="utrecht-logo" src="/logo.svg" alt="Keuringsdienst van waarde" />\n</header>\n<h1>Home</h1>\n```\n\n### Link zonder `href` attribuut\n\nNiet goed: een link zonder `href` attribuut is niet _focusable_, waardoor je de link niet kan activeren.\n\n```html\n<a onclick="navigate(\'/step-1\')">Vorige</a>\n```\n\n## Referenties\n\n- [_Tips for Better Hyperlink UX_, door de Interaction Design Foundation](https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux): waarom \'klik hier\' niet werkt.\n- [_A comprehensive guide to designing perfect links in UX_, op Prototypr](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730): best practices rondom links.\n- [_Do’s and Don’ts of Web Design_ van UX Planet](https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6): interessante do\'s en don\'ts over Web Design, onder andere over links.\n- [_Writing Hyperlinks: Salient, Descriptive, Start with Keyword_ door Norman Nielsen Group](https://www.nngroup.com/articles/writing-links/): hoe schrijf je goede links? Een uitgebreid artikel over links.\n- [_Hover, focus, active_, door Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/): goede uitleg over de states die elementen zoals de link en button hebben in browsers.\n- [_Guidelines for Visualizing Links_, door Nielsen Normal Group](https://www.nngroup.com/articles/guidelines-for-visualizing-links/): richtlijnen voor het design van links.\n- [MDN: `<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): uitgebreid overzicht van alle mogelijkheden van links in HTML.\n\n### Relevante WCAG regels\n\n- [WCAG 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): een link is niet voor iedereen duidelijk herkenbaar wanneer je alleen kleur gebruikt. Gebruik ook onderstreping om de link duidelijk te maken.\n- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)\n- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)\n- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)\n- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)\n';
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: LinkStories
    }), "\n", jsxRuntimeExports.jsxs("p", {
      className: "lsb-citation",
      children: [`Documentatie afkomstig van `, jsxRuntimeExports.jsx("cite", {
        children: jsxRuntimeExports.jsx("a", {
          href: "https://nl-design-system.github.io/utrecht/storybook-css/index.html?path=/docs/css-link--docs",
          children: "Utrecht Link"
        })
      }), `.`]
    }), "\n", jsxRuntimeExports.jsx(Markdown2, {
      children: markdown
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "playground",
      children: "Playground"
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Playground
    }), "\n", jsxRuntimeExports.jsx(Controls3, {
      of: Playground
    }), "\n", "\n", jsxRuntimeExports.jsx("h2", {
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
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "attributes",
      children: "Attributes"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "download",
      children: "Download"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Download
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Download,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "target",
      children: "Target"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Target
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Target,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "gebruik",
      children: "Gebruik"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "icon",
      children: "Icon"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: Icon
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: Icon,
      sourceState: "hidden"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "in-tekst",
      children: "In Tekst"
    }), "\n", jsxRuntimeExports.jsx(DescriptionContainer, {
      of: InText
    }), "\n", jsxRuntimeExports.jsx(Canvas, {
      of: InText,
      sourceState: "none"
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
