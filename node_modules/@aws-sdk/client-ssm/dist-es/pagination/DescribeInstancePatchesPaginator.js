import { createPaginator } from "@smithy/core";
import { DescribeInstancePatchesCommand, } from "../commands/DescribeInstancePatchesCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeInstancePatches = createPaginator(SSMClient, DescribeInstancePatchesCommand, "NextToken", "NextToken", "MaxResults");
