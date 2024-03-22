import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowsForTargetCommand, } from "../commands/DescribeMaintenanceWindowsForTargetCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindowsForTarget = createPaginator(SSMClient, DescribeMaintenanceWindowsForTargetCommand, "NextToken", "NextToken", "MaxResults");
