import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput } from "../commands/DescribeMaintenanceWindowScheduleCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindowSchedule: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowScheduleCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowScheduleCommandOutput>;
