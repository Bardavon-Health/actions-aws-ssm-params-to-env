import { Paginator } from "@smithy/types";
import {
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeEffectivePatchesForPatchBaseline(
  config: SSMPaginationConfiguration,
  input: DescribeEffectivePatchesForPatchBaselineCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput>;
