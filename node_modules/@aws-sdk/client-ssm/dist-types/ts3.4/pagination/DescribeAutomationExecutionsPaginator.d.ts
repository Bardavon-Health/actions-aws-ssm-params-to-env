import { Paginator } from "@smithy/types";
import {
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "../commands/DescribeAutomationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeAutomationExecutions: (
  config: SSMPaginationConfiguration,
  input: DescribeAutomationExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAutomationExecutionsCommandOutput>;
