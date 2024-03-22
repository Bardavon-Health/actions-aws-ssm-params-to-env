import { createPaginator } from "@smithy/core";
import { DescribeInstancePatchStatesCommand, } from "../commands/DescribeInstancePatchStatesCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeInstancePatchStates = createPaginator(SSMClient, DescribeInstancePatchStatesCommand, "NextToken", "NextToken", "MaxResults");
