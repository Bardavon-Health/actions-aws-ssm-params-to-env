import { Paginator } from "@smithy/types";
import {
  DescribeInstancePropertiesCommandInput,
  DescribeInstancePropertiesCommandOutput,
} from "../commands/DescribeInstancePropertiesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeInstanceProperties: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePropertiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePropertiesCommandOutput>;
