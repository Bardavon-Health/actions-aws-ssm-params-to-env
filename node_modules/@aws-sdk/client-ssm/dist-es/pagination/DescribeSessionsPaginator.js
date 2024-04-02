import { createPaginator } from "@smithy/core";
import { DescribeSessionsCommand, } from "../commands/DescribeSessionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeSessions = createPaginator(SSMClient, DescribeSessionsCommand, "NextToken", "NextToken", "MaxResults");
