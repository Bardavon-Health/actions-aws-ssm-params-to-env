import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowTasksCommand, } from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindowTasks = createPaginator(SSMClient, DescribeMaintenanceWindowTasksCommand, "NextToken", "NextToken", "MaxResults");
