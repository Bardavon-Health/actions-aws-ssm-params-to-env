import { Paginator } from "@smithy/types";
import {
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "../commands/DescribeMaintenanceWindowExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeMaintenanceWindowExecutions: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowExecutionsCommandOutput>;
