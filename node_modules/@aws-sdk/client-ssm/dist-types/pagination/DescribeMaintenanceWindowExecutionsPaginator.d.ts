import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput } from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeMaintenanceWindowExecutions(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowExecutionsCommandOutput>;
