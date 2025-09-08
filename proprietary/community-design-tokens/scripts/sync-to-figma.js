#!/usr/bin/env node

const { mergeTokens, saveMergedTokens } = require('./merge-tokens');

/**
 * This script re-merges the tokens and updates figma.tokens.json
 * Use this when you've made changes to koop-tokens.json and want to
 * update the file that designers work with in Tokens Studio
 */

// Main execution
if (require.main === module) {
  console.log('🔄 Syncing Koop tokens to Figma...');

  try {
    console.log('🔄 Re-merging tokens...');
    const mergedTokens = mergeTokens();

    console.log('💾 Updating figma.tokens.json...');
    saveMergedTokens(mergedTokens);

    console.log('🎉 Sync to Figma completed successfully!');
    console.log('📝 Designers can now see the updated tokens in Tokens Studio.');
  } catch (error) {
    console.error('❌ Sync to Figma failed:', error.message);
    process.exit(1);
  }
}

module.exports = {
  // Re-export functions from merge-tokens for consistency
  mergeTokens,
  saveMergedTokens,
};
