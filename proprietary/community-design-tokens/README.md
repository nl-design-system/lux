# Community Design Tokens Wrapper

This package extends `@rijkshuisstijl-community/design-tokens` with custom Koop-specific tokens and provides a seamless workflow for designers using Tokens Studio for Figma.

## Overview

This wrapper package:

1. **Imports** the community design tokens from `@rijkshuisstijl-community/design-tokens`
2. **Extends** them with custom Koop tokens defined in `src/koop-tokens.json`
3. **Merges** both into a single `figma.tokens.json` file for Tokens Studio
4. **Syncs** changes bidirectionally between the merged file and your custom tokens

## Installation

```bash
pnpm install
```

## File Structure

```txt
├── src/
│   └── koop-tokens.json          # Your custom token extensions
├── scripts/
│   ├── merge-tokens.js           # Merges community + custom tokens
│   ├── sync-from-figma.js        # Extracts changes back to koop-tokens.json
│   └── sync-to-figma.js          # Updates figma.tokens.json with your changes
├── figma.tokens.json             # Generated merged file for Tokens Studio
├── dist/                         # Built CSS/JS/JSON output
└── style-dictionary.config.json  # Style Dictionary configuration
```

## Workflow

### For Developers

#### 1. Adding Custom Tokens

Edit `src/koop-tokens.json` to add your custom tokens:

```json
{
  "koop-extensions": {
    "color": {
      "koop": {
        "primary": {
          "$type": "color",
          "$value": "#0072CE",
          "$description": "Koop primary brand color"
        }
      }
    }
  }
}
```

#### 2. Generate Merged Tokens

```bash
npm run build:merge
```

This creates `figma.tokens.json` that designers will use.

#### 3. Build Output Formats

```bash
npm run build
```

This generates CSS, JS, and JSON files in the `dist/` folder.

#### 4. Development Mode

```bash
npm run dev
```

Watches for changes in `src/` and automatically regenerates `figma.tokens.json`.

### For Designers

#### 1. Setup Tokens Studio

1. Install [Tokens Studio for Figma](https://www.figma.com/community/plugin/843461159747178946/Tokens-Studio-for-Figma)
2. In Tokens Studio, go to Settings → Sync
3. Choose your preferred sync method (GitHub, JSONBin, etc.)
4. Point to the `figma.tokens.json` file in this repository

#### 2. Working with Tokens

- The merged file contains both community tokens and Koop extensions
- Make changes in Tokens Studio as normal
- Token sets are organized with `koop-extensions` and `koop-overrides` for your custom tokens

#### 3. Syncing Changes Back

When designers make changes in Tokens Studio:

```bash
npm run sync:from-figma
```

This extracts only the Koop-specific changes and updates `src/koop-tokens.json`.

### For Both

#### Keeping Everything in Sync

**When developers change custom tokens:**

```bash
npm run sync:to-figma
```

**When designers change tokens in Figma:**

```bash
npm run sync:from-figma
```

## Token Set Organization

The merged `figma.tokens.json` contains:

- **Community tokens**: From `@rijkshuisstijl-community/design-tokens`
- **koop-extensions**: Your additional tokens
- **koop-overrides**: Overrides for community tokens

Token sets are ordered so that Koop tokens take precedence over community tokens.

## Scripts Reference

| Script                    | Purpose                                               |
| ------------------------- | ----------------------------------------------------- |
| `npm run build`           | Full build: merge tokens + generate output files      |
| `npm run build:merge`     | Merge community + custom tokens → `figma.tokens.json` |
| `npm run build:tokens`    | Generate CSS/JS/JSON from `figma.tokens.json`         |
| `npm run dev`             | Watch mode for development                            |
| `npm run sync:from-figma` | Extract designer changes → `koop-tokens.json`         |
| `npm run sync:to-figma`   | Push developer changes → `figma.tokens.json`          |
| `npm run lint`            | Check code quality of scripts                         |
| `npm run lint:fix`        | Auto-fix linting issues in scripts                    |

## Best Practices

1. **Version Control**: Commit both `src/koop-tokens.json` and `figma.tokens.json`
2. **Backups**: The sync scripts automatically create backups before overwriting
3. **Communication**: Coordinate with designers when making breaking changes
4. **Token Naming**: Use the `koop` namespace for custom tokens to avoid conflicts
5. **Testing**: Always run `npm run build` after syncing to ensure everything works

## Troubleshooting

### Community Tokens Not Found

If you get errors about missing community tokens:

```bash
pnpm install @rijkshuisstijl-community/design-tokens
```

### Figma Sync Issues

- Ensure `figma.tokens.json` exists (run `npm run build:merge` first)
- Check that Tokens Studio is properly connected to the file
- Verify token set names match the configuration

### Build Errors

- Check that `figma.tokens.json` is valid JSON
- Ensure all token references exist
- Run `npm run clean` and rebuild if needed

## Contributing

1. Make changes to `src/koop-tokens.json`
2. Run `npm run build` to test
3. Commit both source and generated files
4. Coordinate with designers for Tokens Studio updates
