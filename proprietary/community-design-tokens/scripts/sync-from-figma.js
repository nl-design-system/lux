#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Extract only the Koop-specific token sets from the merged figma.tokens.json
 * This is used when designers make changes in Tokens Studio and we need to
 * save only our custom tokens back to koop-tokens.json
 * @param {Object} mergedTokens - The complete merged token object
 * @returns {Object} Extracted Koop-specific tokens
 */
function extractKoopTokens(mergedTokens) {
  const koopTokenSets = ['community-extensions'];
  const extracted = {
    $themes: mergedTokens.$themes || [],
    $metadata: {},
  };

  // Extract only Koop-specific metadata
  if (mergedTokens.$metadata) {
    const koopOrder = (mergedTokens.$metadata.tokenSetOrder || []).filter((set) => koopTokenSets.includes(set));

    if (koopOrder.length > 0) {
      extracted.$metadata.tokenSetOrder = koopOrder;
    }

    if (mergedTokens.$metadata.description) {
      extracted.$metadata.description = mergedTokens.$metadata.description;
    }
  }

  // Extract only Koop token sets
  koopTokenSets.forEach((setName) => {
    if (mergedTokens[setName]) {
      extracted[setName] = mergedTokens[setName];
    }
  });

  return extracted;
}

/**
 * Load the merged figma.tokens.json file
 * @returns {Object} The parsed token data
 */
function loadMergedTokens() {
  const tokensPath = path.join(__dirname, '..', 'figma.tokens.json');

  if (!fs.existsSync(tokensPath)) {
    console.error('❌ figma.tokens.json not found. Run "npm run build:merge" first.');
    process.exit(1);
  }

  try {
    const content = fs.readFileSync(tokensPath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('❌ Error loading merged tokens:', error.message);
    process.exit(1);
  }
  return {};
}

/**
 * Save extracted Koop tokens back to koop-tokens.json
 * @param {Object} tokens - The Koop-specific tokens to save
 */
function saveKoopTokens(tokens) {
  const outputPath = path.join(__dirname, '..', 'src', 'koop-tokens.json');

  try {
    fs.writeFileSync(outputPath, JSON.stringify(tokens, null, 2), 'utf8');
    console.log('✅ Successfully updated koop-tokens.json');
    console.log(`📁 Output: ${outputPath}`);

    // Log summary
    const tokenSets = Object.keys(tokens).filter((key) => !key.startsWith('$'));
    console.log(`📊 Updated token sets: ${tokenSets.join(', ')}`);
  } catch (error) {
    console.error('❌ Error saving Koop tokens:', error.message);
    process.exit(1);
  }
}

/**
 * Create a backup of the current koop-tokens.json before overwriting
 */
function createBackup() {
  const sourcePath = path.join(__dirname, '..', 'src', 'koop-tokens.json');
  const backupPath = path.join(__dirname, '..', 'src', `koop-tokens.backup.${Date.now()}.json`);

  if (fs.existsSync(sourcePath)) {
    try {
      fs.copyFileSync(sourcePath, backupPath);
      console.log(`💾 Created backup: ${path.basename(backupPath)}`);
    } catch (error) {
      console.warn('⚠️  Could not create backup:', error.message);
    }
  }
}

// Main execution
if (require.main === module) {
  console.log('🔄 Syncing changes from Figma back to Koop tokens...');

  try {
    console.log('📥 Loading merged tokens from figma.tokens.json...');
    const mergedTokens = loadMergedTokens();

    console.log('🔍 Extracting Koop-specific tokens...');
    const koopTokens = extractKoopTokens(mergedTokens);

    console.log('💾 Creating backup...');
    createBackup();

    console.log('💾 Saving extracted tokens to koop-tokens.json...');
    saveKoopTokens(koopTokens);

    console.log('🎉 Sync from Figma completed successfully!');
    console.log('📝 Your custom tokens have been updated. Review the changes and commit them.');
  } catch (error) {
    console.error('❌ Sync from Figma failed:', error.message);
    process.exit(1);
  }
}

module.exports = {
  extractKoopTokens,
  loadMergedTokens,
  saveKoopTokens,
  createBackup,
};
