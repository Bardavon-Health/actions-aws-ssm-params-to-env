import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindowExecutionTasks: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionTasksCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowExecutionTasksCommandOutput>;
