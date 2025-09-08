#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Deep merge utility for token objects
 * @param {Object} target - The target object to merge into
 * @param {Object} source - The source object to merge from
 * @returns {Object} The merged object
 */
function deepMerge(target, source) {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key];
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * Check if an item is a plain object
 * @param {*} item - The item to check
 * @returns {boolean} True if the item is a plain object
 */
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Load community tokens from node_modules
 * @returns {Object} The community tokens object
 */
function loadCommunityTokens() {
  try {
    const packagePath = require.resolve('@rijkshuisstijl-community/design-tokens/package.json');
    const packageDir = path.dirname(packagePath);
    const tokensPath = path.join(packageDir, 'figma/figma.tokens.json');

    if (fs.existsSync(tokensPath)) {
      const content = fs.readFileSync(tokensPath, 'utf8');
      return JSON.parse(content);
    } else {
      console.warn('figma.tokens.json not found in @rijkshuisstijl-community/design-tokens');
      return {};
    }
  } catch (error) {
    console.error('Error loading community tokens:', error.message);
    return {};
  }
}

/**
 * Load your custom tokens
 * @returns {Object} The Koop-specific tokens object
 */
function loadKoopTokens() {
  try {
    const tokensPath = path.join(__dirname, '..', 'src', 'koop-tokens.json');
    const content = fs.readFileSync(tokensPath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error loading koop tokens:', error.message);
    return {};
  }
}

/**
 * Merge token sets in the correct order
 * @returns {Object} The merged tokens object
 */
function mergeTokens() {
  console.log('🔄 Loading community tokens...');
  const communityTokens = loadCommunityTokens();

  console.log('🔄 Loading Koop extensions...');
  const koopTokens = loadKoopTokens();

  console.log('🔄 Merging tokens...');

  // Merge the tokens, with Koop tokens taking precedence
  const merged = deepMerge(communityTokens, koopTokens);

  // Ensure proper token set order in metadata
  if (!merged.$metadata) {
    merged.$metadata = {};
  }

  // Combine token set orders, prioritizing Koop extensions
  const communityOrder = (communityTokens.$metadata && communityTokens.$metadata.tokenSetOrder) || [];
  const koopOrder = (koopTokens.$metadata && koopTokens.$metadata.tokenSetOrder) || [];
  const allSets = [...new Set([...communityOrder, ...koopOrder])];

  merged.$metadata.tokenSetOrder = allSets;

  return merged;
}

/**
 * Save merged tokens to figma.tokens.json
 * @param {Object} tokens - The merged tokens to save
 */
function saveMergedTokens(tokens) {
  const outputPath = path.join(__dirname, '..', 'figma.tokens.json');

  try {
    fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2), 'utf8');
    console.log('✅ Successfully created figma.tokens.json');
    console.log(`📁 Output: ${outputPath}`);

    // Log summary
    const tokenSets = Object.keys(tokens).filter((key) => !key.startsWith('$'));
    console.log(`📊 Token sets: ${tokenSets.join(', ')}`);
  } catch (error) {
    console.error('❌ Error saving merged tokens:', error.message);
    process.exit(1);
  }
}

// Main execution
if (require.main === module) {
  console.log('🚀 Starting token merge process...');

  try {
    const mergedTokens = mergeTokens();
    saveMergedTokens(mergedTokens);

    console.log('🎉 Token merge completed successfully!');
  } catch (error) {
    console.error('❌ Token merge failed:', error.message);
    process.exit(1);
  }
}

module.exports = {
  deepMerge,
  loadCommunityTokens,
  loadKoopTokens,
  mergeTokens,
  saveMergedTokens,
};
