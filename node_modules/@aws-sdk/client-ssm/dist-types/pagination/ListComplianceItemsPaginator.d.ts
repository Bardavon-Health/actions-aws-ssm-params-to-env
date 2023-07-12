import { Paginator } from "@smithy/types";
import { ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput } from "../commands/ListComplianceItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListComplianceItems(config: SSMPaginationConfiguration, input: ListComplianceItemsCommandInput, ...additionalArguments: any): Paginator<ListComplianceItemsCommandOutput>;
