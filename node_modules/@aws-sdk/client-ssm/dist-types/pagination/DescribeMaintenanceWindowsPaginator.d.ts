import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput } from "../commands/DescribeMaintenanceWindowsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeMaintenanceWindows(config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowsCommandInput, ...additionalArguments: any): Paginator<DescribeMaintenanceWindowsCommandOutput>;
