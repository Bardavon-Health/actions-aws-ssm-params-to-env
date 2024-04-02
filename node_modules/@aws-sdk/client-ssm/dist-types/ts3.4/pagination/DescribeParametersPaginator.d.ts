import { Paginator } from "@smithy/types";
import {
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "../commands/DescribeParametersCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeParameters: (
  config: SSMPaginationConfiguration,
  input: DescribeParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeParametersCommandOutput>;
