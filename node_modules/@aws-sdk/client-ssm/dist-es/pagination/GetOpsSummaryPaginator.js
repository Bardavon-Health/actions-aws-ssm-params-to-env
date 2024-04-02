import { createPaginator } from "@smithy/core";
import { GetOpsSummaryCommand, } from "../commands/GetOpsSummaryCommand";
import { SSMClient } from "../SSMClient";
export const paginateGetOpsSummary = createPaginator(SSMClient, GetOpsSummaryCommand, "NextToken", "NextToken", "MaxResults");
