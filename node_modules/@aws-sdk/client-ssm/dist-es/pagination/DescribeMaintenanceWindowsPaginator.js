import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowsCommand, } from "../commands/DescribeMaintenanceWindowsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindows = createPaginator(SSMClient, DescribeMaintenanceWindowsCommand, "NextToken", "NextToken", "MaxResults");
