import { createPaginator } from "@smithy/core";
import { ListComplianceSummariesCommand, } from "../commands/ListComplianceSummariesCommand";
import { SSMClient } from "../SSMClient";
export const paginateListComplianceSummaries = createPaginator(SSMClient, ListComplianceSummariesCommand, "NextToken", "NextToken", "MaxResults");
