import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as r,d as a}from"./index-YGM3t6__.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DF5BiqNe.js";import"../sb-preview/runtime.js";import"./index-CqS9fqXy.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";const s=`# Semantic versioning

## De standaard

LUX gebruikt Semantic versioning (SemVer)[^1] voor de versies van releases.
Dit is een veelgebruikt versienummeringssysteem, dat in de basis uit drie versienummers bestaat, namelijk:

> MAJOR.MINOR.PATCH

Deze kunnen uitgebreid worden met optionele pre-release- en build-metadata labels.

De verschillende elementen worden, volgens het officiele schema[^2], verhoogd als volgt:

> 1. MAJOR wordt verhoogd bij incompatibele API-wijzigingen,
> 1. MINOR wordt verhoogd bij het toevoegen van functionaliteit die compatibel is met de vorige versie, en
> 1. PATCH wordt verhoogd bij compatibele bugfixes.

## Hoe LUX uitbreidt op de standaard

Binnen LUX hebben we dit uitgebreidt en worden de versienummer als volgt verhoogd:

<dl>
<dt>MAJOR</dt>
<dd>wordt verhoogd bij incompatibele én impactvolle (visuele) wijzigingen die bij gebruikers van LUX toegankelijkheids- of regressieproblemen kunnen veroorzaken,</dd>
</dl>

### Voorbeeld

Mocht het hele design van LUX op grote schaal veranderen dan zal dit veel impact hebben. SemVer beschrijft voornamelijk breaking changes in een API en niet op visueel vlak. Wij zullen dit soort veranderingen wel beschouwen als een \`MAJOR\` change waardoor het voor de gebruiker duidelijk is dat ze extra moeten opletten bij het updateten van LUX.
Het is niet uitgesloten dat een Minor versie ook (visuele) regressietesten breekt, maar hiervoor zouden geen wijzigingen in een design of andere code-aanpassingen voor nodig hoeven zijn, alleen een update van de test of accorderen van een nieuwe baseline.

Het artikel ["Visual Breaking Change in Design Systems"](https://medium.com/eightshapes-llc/visual-breaking-change-in-design-systems-1e9109fac9c4) van Nathan Curtis ([EightShapes op Medium](https://medium.com/eightshapes-llc)) beschrijft dit uitgebreid met duidelijke voorbeelden.

## Contact

Mochten er nog vragen zijn, neem contact op met het LUX-team via ons [Slack #support-kanaal](https://logius-ux.slack.com/archives/C072WMXCC3H).

### [Join Lux on Slack](https://join.slack.com/t/logius-ux/shared_invite/zt-2isbt3hue-A6ksce6Qz5g~eYxez_DF5g)

[logius-ux.slack.com](https://logius-ux.slack.com/)

[^1]: <https://en.wikipedia.org/wiki/Software_versioning#Semantic_versioning>
[^2]: <https://semver.org/lang/nl/>
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Developer/Versioning"}),`
`,e.jsx(a,{children:s})]})}function j(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t()}export{j as default};
