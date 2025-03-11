import { FileNaming } from "types";

export function generateFilename(
  name: string,
  extensionFile: string,
  fileNamingPattern: FileNaming
): string {
  function separateFirstItem(content: string[]): [string, string[]] {
    const [firstItem, ...items] = content;

    return [firstItem, items];
  }

  function toCamelCase(content: string): string {
    const [firstWord, wordList] = separateFirstItem(content.split(" "));

    const newContent = wordList.map((targetItem) => {
      const firstCharacter = targetItem[0].toUpperCase();
      return `${firstCharacter}${targetItem.slice(1).toLowerCase()}`;
    });

    return [firstWord.toLowerCase(), newContent.join("")].join("");
  }

  function toPascalCase(content: string): string {
    const [firstWord, wordList] = separateFirstItem(content.split(" "));

    const firstWordAsPascal = `${firstWord[0].toUpperCase()}${firstWord.slice(
      1
    )}`;

    const newContent = wordList.map((targetItem) => {
      const firstCharacter = targetItem[0].toUpperCase();
      return `${firstCharacter}${targetItem.slice(1).toLowerCase()}`;
    });

    return [firstWordAsPascal, newContent.join("")].join("");
  }

  const cases: Record<FileNaming, string> = {
    "kebab-case": `${name.toLowerCase().replaceAll(" ", "-")}.${extensionFile}`,
    "camel-case": `${toCamelCase(name)}.${extensionFile}`,
    "pascal-case": `${toPascalCase(name)}.${extensionFile}`,
  };

  return cases[fileNamingPattern];
}
