import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput } from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeMaintenanceWindowTasks(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowTasksCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowTasksCommandOutput>;
