import { FileNaming } from "./file-naming";

export interface WriteMethods {
  replaceIfExists?: boolean;
  fileNamingPattern: FileNaming;
  fileType: string;
}
