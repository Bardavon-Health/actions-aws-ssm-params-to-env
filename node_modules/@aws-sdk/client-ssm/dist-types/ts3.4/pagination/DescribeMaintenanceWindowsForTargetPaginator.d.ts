import { Paginator } from "@smithy/types";
import {
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "../commands/DescribeMaintenanceWindowsForTargetCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMaintenanceWindowsForTarget(
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMaintenanceWindowsForTargetCommandOutput>;
