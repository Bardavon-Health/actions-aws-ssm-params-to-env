import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeMaintenanceWindowExecutionTaskInvocations(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;
