import { Paginator } from "@smithy/types";
import {
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "../commands/DescribeMaintenanceWindowTasksCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeMaintenanceWindowTasks: (
  config: SSMPaginationConfiguration,
  input: DescribeMaintenanceWindowTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeMaintenanceWindowTasksCommandOutput>;
