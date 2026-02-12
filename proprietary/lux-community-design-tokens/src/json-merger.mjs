#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Reads and parses a JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Promise<Object>} - Parsed JSON object
 */
async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Writes an object to a JSON file
 * @param {string} filePath - Output file path
 * @param {Object} data - Data to write
 */
async function writeJsonFile(filePath, data) {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonString, 'utf8');
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Merges multiple JSON files into a single JSON object
 * @param {string[]} inputFiles - Array of input file paths
 * @param {string} outputFile - Output file path
 * @param {Object} options - Merge options
 */
async function mergeJsonFiles(inputFiles, outputFile, options = {}) {
  const { createOutputDir = true } = options;
  let mergedData = {};

  // Create output directory if it doesn't exist
  if (createOutputDir) {
    const outputDir = path.dirname(outputFile);
    await fs.mkdir(outputDir, { recursive: true });
  }

  // Process each input file
  for (const inputFile of inputFiles) {
    const absolutePath = path.isAbsolute(inputFile) ? inputFile : path.resolve(process.cwd(), inputFile);

    try {
      const jsonData = await readJsonFile(absolutePath);

      // Simple override merge - later files override earlier ones
      mergedData = { ...mergedData, ...jsonData };
    } catch (error) {
      console.error(`Failed to process: ${inputFile}`);
      if (options.continueOnError) {
        console.warn('Continuing due to continueOnError option...');
        continue;
      } else {
        throw error;
      }
    }
  }

  // Write the merged result
  await writeJsonFile(outputFile, mergedData);
  console.log('JSON merge completed successfully!');

  return mergedData;
}

/**
 * CLI interface for the JSON merger
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
        JSON Merger Tool

        Usage: node json-merger.mjs [options] <output-file> <input-file-1> [input-file-2] [...]

        Options:
        --continue-on-error Continue processing even if a file fails to load

        Examples:
        # Merge two files (later files override earlier ones)
        node json-merger.mjs output.json file1.json file2.json

        # Merge with error handling
        node json-merger.mjs --continue-on-error output.json *.json
    `);
    process.exit(1);
  }

  const options = { continueOnError: args.includes('--continue-on-error') };

  // Filter out option flags to get file arguments
  const fileArgs = args.filter((arg) => !arg.startsWith('--'));
  const outputFile = fileArgs[0];
  const inputFiles = fileArgs.slice(1);

  if (inputFiles.length === 0) {
    console.error('Error: At least one input file must be specified');
    process.exit(1);
  }

  try {
    await mergeJsonFiles(inputFiles, outputFile, options);
  } catch (error) {
    console.error('Error during merge process:', error.message);
    process.exit(1);
  }
}

// Export functions for programmatic use
export { mergeJsonFiles, readJsonFile, writeJsonFile };

// Run CLI if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
