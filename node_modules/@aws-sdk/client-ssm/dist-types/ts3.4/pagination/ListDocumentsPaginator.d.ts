import { Paginator } from "@smithy/types";
import {
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "../commands/ListDocumentsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListDocuments: (
  config: SSMPaginationConfiguration,
  input: ListDocumentsCommandInput,
  ...rest: any[]
) => Paginator<ListDocumentsCommandOutput>;
