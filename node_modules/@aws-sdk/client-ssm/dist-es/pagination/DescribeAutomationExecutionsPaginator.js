import { createPaginator } from "@smithy/core";
import { DescribeAutomationExecutionsCommand, } from "../commands/DescribeAutomationExecutionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeAutomationExecutions = createPaginator(SSMClient, DescribeAutomationExecutionsCommand, "NextToken", "NextToken", "MaxResults");
