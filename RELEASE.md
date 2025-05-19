# LUX Packages

LUX bevat meerdere packages die released kunnen worden als NPM package. Onder andere alle packages in ./packages/ en sommige in ./proprietary/.

## Versioning

LUX werkt met changesets om alle packages te versioneren. Zie [SEMVER.md](SEMVER.md) voor meer informatie.

## Beschrijf de change met een changeset

`pnpm run changeset`.

In de CLI prompt geef je aan welke packages gewijzigd zijn en of de change major, minor of patch is. Je geeft de change een herkenbare beschrijving die later ook in de changelog van de packages terecht komt.

## Bereid de release voor

Nadat alle PR's in de main branch zijn doorgevoerd kan er vanaf de main branch een release gemaakt worden. Hier voor zetten we alle changesets door zodat de packages versions en changelogs worden bijgewerkt.

`pnpm run version`

Controleer alle bijgewerkte changelogs voor de zekerheid.

## Automatische releases (tijdelijk broken)

De github pipeline herkent automatisch wanneer er een changeset file in ./changeset staat. De pipeline voert de stappen die bij "Doe de release" staan beschreven automatisch uit.

## Doe de release

`pnpm run publish`

## Documentatie changesets

[Intro to using changesets](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)
