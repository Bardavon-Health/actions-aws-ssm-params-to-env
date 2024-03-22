import { Paginator } from "@smithy/types";
import {
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
} from "../commands/ListOpsItemRelatedItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListOpsItemRelatedItems: (
  config: SSMPaginationConfiguration,
  input: ListOpsItemRelatedItemsCommandInput,
  ...rest: any[]
) => Paginator<ListOpsItemRelatedItemsCommandOutput>;
