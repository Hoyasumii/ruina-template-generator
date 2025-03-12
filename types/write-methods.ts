import { FileNaming } from "ruina-nominator";

export interface WriteMethods {
  replaceIfExists?: boolean;
  fileNamingPattern: FileNaming;
  fileType: string;
}
