import { Paginator } from "@smithy/types";
import {
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeInstancePatchStatesForPatchGroup: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesForPatchGroupCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePatchStatesForPatchGroupCommandOutput>;
