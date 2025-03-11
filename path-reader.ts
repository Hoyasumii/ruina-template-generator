import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";
import { renderFile } from "ejs";
import {
  filterEJSFilesAndListItems,
  generateFilename,
  selectEJSFile,
} from "core";
import { IOManager, WriteMethods } from "types";

export async function templateGenerator<Args extends object>(
  input: IOManager,
  out: IOManager,
  args: Args,
  options: WriteMethods
): Promise<boolean> {
  if (!existsSync(input.path)) return false;
  if (!existsSync(out.path)) return false;

  const inputItems = filterEJSFilesAndListItems(await readdir(input.path));

  const targetEJSilePath = selectEJSFile(inputItems, input.path, input.name);

  if (!targetEJSilePath) return false;

  const renderedFile = await renderFile(targetEJSilePath, args);

  const fileName = generateFilename(
    out.name,
    options.fileType,
    options.fileNamingPattern
  );

  if (existsSync(path.join(out.path, fileName)) && !options.replaceIfExists)
    return false;

  await writeFile(path.join(out.path, fileName), renderedFile, {
    encoding: "utf-8",
  });

  return true;
}

await templateGenerator<{ message: string }>(
  {
    name: "testing",
    path: "templates",
  },
  {
    name: "hello world",
    path: "out",
  },
  {
    message: "hello world",
  },
  {
    fileNamingPattern: "pascal-case",
    fileType: "ts",
  }
);
