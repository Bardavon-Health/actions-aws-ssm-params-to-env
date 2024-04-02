import { Paginator } from "@smithy/types";
import { ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput } from "../commands/ListResourceComplianceSummariesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListResourceComplianceSummaries: (config: SSMPaginationConfiguration, input: ListResourceComplianceSummariesCommandInput, ...rest: any[]) => Paginator<ListResourceComplianceSummariesCommandOutput>;
