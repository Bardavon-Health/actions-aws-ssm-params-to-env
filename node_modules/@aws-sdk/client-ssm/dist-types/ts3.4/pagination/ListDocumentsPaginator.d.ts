import { Paginator } from "@smithy/types";
import {
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "../commands/ListDocumentsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListDocuments(
  config: SSMPaginationConfiguration,
  input: ListDocumentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDocumentsCommandOutput>;
