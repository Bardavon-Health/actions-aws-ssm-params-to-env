import { Paginator } from "@smithy/types";
import {
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "../commands/DescribeInstancePatchStatesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeInstancePatchStates: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchStatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePatchStatesCommandOutput>;
