import { Paginator } from "@smithy/types";
import {
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "../commands/DescribeAssociationExecutionTargetsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeAssociationExecutionTargets: (
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAssociationExecutionTargetsCommandOutput>;
