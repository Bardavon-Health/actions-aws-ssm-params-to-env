import { Paginator } from "@smithy/types";
import {
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "../commands/DescribeActivationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeActivations: (
  config: SSMPaginationConfiguration,
  input: DescribeActivationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeActivationsCommandOutput>;
