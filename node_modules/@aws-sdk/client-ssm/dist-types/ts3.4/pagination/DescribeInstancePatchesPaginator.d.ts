import { Paginator } from "@smithy/types";
import {
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "../commands/DescribeInstancePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeInstancePatches: (
  config: SSMPaginationConfiguration,
  input: DescribeInstancePatchesCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstancePatchesCommandOutput>;
