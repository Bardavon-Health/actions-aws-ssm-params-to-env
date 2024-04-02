import { createPaginator } from "@smithy/core";
import { DescribeEffectivePatchesForPatchBaselineCommand, } from "../commands/DescribeEffectivePatchesForPatchBaselineCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeEffectivePatchesForPatchBaseline = createPaginator(SSMClient, DescribeEffectivePatchesForPatchBaselineCommand, "NextToken", "NextToken", "MaxResults");
