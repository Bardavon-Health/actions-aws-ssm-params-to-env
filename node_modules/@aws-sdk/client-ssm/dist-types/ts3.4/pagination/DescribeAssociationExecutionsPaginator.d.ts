import { Paginator } from "@smithy/types";
import {
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "../commands/DescribeAssociationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeAssociationExecutions(
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAssociationExecutionsCommandOutput>;
