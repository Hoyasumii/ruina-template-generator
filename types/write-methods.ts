import { FileNaming } from "./file-naming.js";

export interface WriteMethods {
  replaceIfExists?: boolean;
  fileNamingPattern: FileNaming;
  fileType: string;
}
