import { Paginator } from "@smithy/types";
import {
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "../commands/DescribeMaintenanceWindowsForTargetCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeMaintenanceWindowsForTarget: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowsForTargetCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowsForTargetCommandOutput>;
