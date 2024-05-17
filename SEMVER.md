# Semantic versioning

LUX gebruikt Semantic versioning (SemVer)[^1] voor de versies van releases.
Dit is een wijd gebruikt versienummeringssysteem, dat in de basis uit drie versienummers bestaat, namelijk:

> MAJOR.MINOR.PATCH

Deze kunnen uitgebreid worden met optionele pre-release- en build-metadata labels.

De verschillende elementen worden, volgens het officiele schema[^2], verhoogd als volgt:

> 1. MAJOR wordt verhoogd bij incompatibele API-wijzigingen,
> 1. MINOR wordt verhoogd bij het toevoegen van functionaliteit die compatibel is met de vorige versie, en
> 1. PATCH wordt verhoogd bij compatibele bugfixes.

Binnen LUX hebben we dit uitgebreidt en worden de versienummer als volgt verhoogd:

<dl>
<dt>MAJOR</dt>
<dd>wordt verhoogd bij incompatibele én impactvolle (visuele) wijzigingen die bij gebruikers van LUX toegankelijkheids- of regressieproblemen kunnen veroorzaken,</dd>
<dt>MINOR</dt>
<dd>wordt verhoogd bij het toevoegen van functionaliteit die compatibel is met de vorige versie, en</dd>
<dt>PATCH</dt>
<dd>wordt verhoogd wordt verhoogd bij compatibele bugfixes.</dd>
</dl>

### Voorbeeld

Mocht het hele design van LUX op grote schaal veranderen dan zal dit veel impact hebben. Volgens (SemVer)[^1] is die geen breaking change en dus geen `MAJOR` bump. Volgens LUX is dat wel het geval. Wij zullen dit beschouwen als een `MAJOR` change waardoor het voor de gebruiker duidelijk is dat ze extra moeten opletten bij het updateten van LUX.
Het is niet uitgesloten dat een Minor versie ook (visuele) regressietesten breekt, maar hiervoor zouden geen wijzigingen in een design of andere code-aanpassingen voor nodig hoeven zijn, alleen een update van de test of accorderen van een nieuwe baseline.

Op dit moment is dit de basis van onze versionering, in de loop van de tijd zullen we deze aanscherpen en aanvullen met voorbeelden uit de praktijk.

Mochten er nog vragen zijn, neem contact op met het LUX-team via ons [Slack #support-kanaal](https://logius-ux.slack.com/archives/C072WMXCC3H).

## [Join Lux on Slack](https://join.slack.com/t/logius-ux/shared_invite/zt-2isbt3hue-A6ksce6Qz5g~eYxez_DF5g)

[logius-ux.slack.com](https://logius-ux.slack.com/)

[^1]: <https://en.wikipedia.org/wiki/Software_versioning#Semantic_versioning>
[^2]: <https://semver.org/lang/nl/>
