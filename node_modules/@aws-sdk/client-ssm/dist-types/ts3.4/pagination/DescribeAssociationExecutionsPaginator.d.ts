import { Paginator } from "@smithy/types";
import {
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "../commands/DescribeAssociationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeAssociationExecutions: (
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAssociationExecutionsCommandOutput>;
