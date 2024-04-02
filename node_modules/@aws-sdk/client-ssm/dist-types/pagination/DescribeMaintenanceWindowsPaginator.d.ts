import { Paginator } from "@smithy/types";
import { DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput } from "../commands/DescribeMaintenanceWindowsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMaintenanceWindows: (config: SSMPaginationConfiguration, input: DescribeMaintenanceWindowsCommandInput, ...rest: any[]) => Paginator<DescribeMaintenanceWindowsCommandOutput>;
