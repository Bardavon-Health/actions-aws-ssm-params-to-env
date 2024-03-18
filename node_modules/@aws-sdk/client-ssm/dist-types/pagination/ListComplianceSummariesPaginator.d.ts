import { Paginator } from "@smithy/types";
import { ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput } from "../commands/ListComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListComplianceSummaries: (config: SSMPaginationConfiguration, input: ListComplianceSummariesCommandInput, ...rest: any[]) => Paginator<ListComplianceSummariesCommandOutput>;
