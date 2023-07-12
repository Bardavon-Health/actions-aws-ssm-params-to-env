import { Paginator } from "@smithy/types";
import { ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput } from "../commands/ListOpsItemRelatedItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListOpsItemRelatedItems(config: SSMPaginationConfiguration, input: ListOpsItemRelatedItemsCommandInput, ...additionalArguments: any): Paginator<ListOpsItemRelatedItemsCommandOutput>;
