import { Paginator } from "@smithy/types";
import { DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput } from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeEffectivePatchesForPatchBaseline: (config: SSMPaginationConfiguration, input: DescribeEffectivePatchesForPatchBaselineCommandInput, ...rest: any[]) => Paginator<DescribeEffectivePatchesForPatchBaselineCommandOutput>;
