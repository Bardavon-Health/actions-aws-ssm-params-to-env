import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowExecutionsCommand, } from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindowExecutions = createPaginator(SSMClient, DescribeMaintenanceWindowExecutionsCommand, "NextToken", "NextToken", "MaxResults");
