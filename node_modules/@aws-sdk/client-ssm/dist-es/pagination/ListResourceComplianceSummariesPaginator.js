import { createPaginator } from "@smithy/core";
import { ListResourceComplianceSummariesCommand, } from "../commands/ListResourceComplianceSummariesCommand";
import { SSMClient } from "../SSMClient";
export const paginateListResourceComplianceSummaries = createPaginator(SSMClient, ListResourceComplianceSummariesCommand, "NextToken", "NextToken", "MaxResults");
