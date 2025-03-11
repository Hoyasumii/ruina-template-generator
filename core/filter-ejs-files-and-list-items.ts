export function filterEJSFilesAndListItems(
  items: Array<string>
): Array<string> {
  return items
    .filter((target) => target.endsWith(".ejs"))
    .map((target) => target.split(".")[0]);
}
