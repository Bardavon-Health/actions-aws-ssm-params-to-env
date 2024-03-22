import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowTargetsCommand, } from "../commands/DescribeMaintenanceWindowTargetsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindowTargets = createPaginator(SSMClient, DescribeMaintenanceWindowTargetsCommand, "NextToken", "NextToken", "MaxResults");
