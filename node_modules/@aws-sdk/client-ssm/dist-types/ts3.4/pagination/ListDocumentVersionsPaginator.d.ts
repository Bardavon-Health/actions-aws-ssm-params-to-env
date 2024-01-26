import { Paginator } from "@smithy/types";
import {
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "../commands/ListDocumentVersionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListDocumentVersions: (
  config: SSMPaginationConfiguration,
  input: ListDocumentVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentVersionsCommandOutput>;
