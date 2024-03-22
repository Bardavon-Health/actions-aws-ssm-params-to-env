import { createPaginator } from "@smithy/core";
import { DescribeAutomationStepExecutionsCommand, } from "../commands/DescribeAutomationStepExecutionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeAutomationStepExecutions = createPaginator(SSMClient, DescribeAutomationStepExecutionsCommand, "NextToken", "NextToken", "MaxResults");
