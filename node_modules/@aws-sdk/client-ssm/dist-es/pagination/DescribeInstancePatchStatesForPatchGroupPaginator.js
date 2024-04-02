import { createPaginator } from "@smithy/core";
import { DescribeInstancePatchStatesForPatchGroupCommand, } from "../commands/DescribeInstancePatchStatesForPatchGroupCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeInstancePatchStatesForPatchGroup = createPaginator(SSMClient, DescribeInstancePatchStatesForPatchGroupCommand, "NextToken", "NextToken", "MaxResults");
