import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeMaintenanceWindowExecutionTasks(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionTasksCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowExecutionTasksCommandOutput>;
