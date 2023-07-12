import { Paginator } from "@smithy/types";
import { ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput } from "../commands/ListResourceComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListResourceComplianceSummaries(config: SSMPaginationConfiguration, input: ListResourceComplianceSummariesCommandInput, ...additionalArguments: any): Paginator<ListResourceComplianceSummariesCommandOutput>;
