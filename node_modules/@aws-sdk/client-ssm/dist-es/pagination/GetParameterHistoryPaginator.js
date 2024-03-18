import { createPaginator } from "@smithy/core";
import { GetParameterHistoryCommand, } from "../commands/GetParameterHistoryCommand";
import { SSMClient } from "../SSMClient";
export const paginateGetParameterHistory = createPaginator(SSMClient, GetParameterHistoryCommand, "NextToken", "NextToken", "MaxResults");
