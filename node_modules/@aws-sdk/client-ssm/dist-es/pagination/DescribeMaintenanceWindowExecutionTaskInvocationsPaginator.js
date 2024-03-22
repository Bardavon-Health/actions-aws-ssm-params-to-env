import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommand, } from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindowExecutionTaskInvocations = createPaginator(SSMClient, DescribeMaintenanceWindowExecutionTaskInvocationsCommand, "NextToken", "NextToken", "MaxResults");
