import { Paginator } from "@smithy/types";
import {
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
} from "../commands/DescribeMaintenanceWindowTargetsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeMaintenanceWindowTargets: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowTargetsCommandOutput>;
