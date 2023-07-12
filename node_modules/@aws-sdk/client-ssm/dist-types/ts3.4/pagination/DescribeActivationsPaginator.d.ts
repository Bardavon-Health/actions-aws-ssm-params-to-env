import { Paginator } from "@smithy/types";
import {
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "../commands/DescribeActivationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeActivations(
  config: SSMPaginationConfiguration,
  input: DescribeActivationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeActivationsCommandOutput>;
