import path from "node:path";

export function selectEJSFile(
  collection: Array<string>,
  targetPath: string,
  target: string
): string | false {
  const targetIndex = collection.findIndex((fragment) => fragment === target);

  if (targetIndex === -1) return false;

  return path.join(targetPath, `${collection[targetIndex]}.ejs`);
}
