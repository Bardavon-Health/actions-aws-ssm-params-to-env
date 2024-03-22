import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowExecutionTasksCommand, } from "../commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindowExecutionTasks = createPaginator(SSMClient, DescribeMaintenanceWindowExecutionTasksCommand, "NextToken", "NextToken", "MaxResults");
