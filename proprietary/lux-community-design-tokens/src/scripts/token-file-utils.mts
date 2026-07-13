import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export type JsonMap = Record<string, unknown>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const packageRootPath = path.resolve(__dirname, "..", "..");
export const mergedPath = path.resolve(packageRootPath, "merged");

export const validTokenFileNameRegex = /^([a-z]+)\.tokens\.json$/;

export const readJsonFile = (filePath: string): JsonMap =>
  JSON.parse(fs.readFileSync(filePath, "utf-8")) as JsonMap;

export const writeJsonFile = (filePath: string, data: JsonMap): void =>
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);

export const getTokenSetNames = (tokens: JsonMap): string[] =>
  Object.keys(tokens).filter((key) => key !== "$metadata" && key !== "$themes");

export const collectTokenFiles = (dir: string): string[] =>
  fs
    .readdirSync(dir)
    .filter((file) => validTokenFileNameRegex.test(file))
    .map((file) => path.join(dir, file));
