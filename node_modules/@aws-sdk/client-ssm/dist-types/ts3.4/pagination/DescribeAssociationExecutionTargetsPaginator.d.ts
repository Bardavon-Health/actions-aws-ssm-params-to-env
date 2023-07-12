import { Paginator } from "@smithy/types";
import {
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "../commands/DescribeAssociationExecutionTargetsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeAssociationExecutionTargets(
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAssociationExecutionTargetsCommandOutput>;
