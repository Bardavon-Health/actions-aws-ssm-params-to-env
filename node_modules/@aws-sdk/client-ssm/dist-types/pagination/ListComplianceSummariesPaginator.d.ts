import { Paginator } from "@smithy/types";
import { ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput } from "../commands/ListComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListComplianceSummaries(config: SSMPaginationConfiguration, input: ListComplianceSummariesCommandInput, ...additionalArguments: any): Paginator<ListComplianceSummariesCommandOutput>;
