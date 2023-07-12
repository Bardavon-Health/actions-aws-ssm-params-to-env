import { Paginator } from "@smithy/types";
import {
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "../commands/DescribeInstanceAssociationsStatusCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeInstanceAssociationsStatus(
  config: SSMPaginationConfiguration,
  input: DescribeInstanceAssociationsStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceAssociationsStatusCommandOutput>;
