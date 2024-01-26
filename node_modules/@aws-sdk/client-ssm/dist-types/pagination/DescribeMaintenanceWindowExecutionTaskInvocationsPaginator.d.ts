import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindowExecutionTaskInvocations: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;
