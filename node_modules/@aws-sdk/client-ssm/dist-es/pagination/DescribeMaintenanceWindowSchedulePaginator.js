import { createPaginator } from "@smithy/core";
import { DescribeMaintenanceWindowScheduleCommand, } from "../commands/DescribeMaintenanceWindowScheduleCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeMaintenanceWindowSchedule = createPaginator(SSMClient, DescribeMaintenanceWindowScheduleCommand, "NextToken", "NextToken", "MaxResults");
