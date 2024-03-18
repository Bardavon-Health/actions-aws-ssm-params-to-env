import { createPaginator } from "@smithy/core";
import { DescribeAvailablePatchesCommand, } from "../commands/DescribeAvailablePatchesCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeAvailablePatches = createPaginator(SSMClient, DescribeAvailablePatchesCommand, "NextToken", "NextToken", "MaxResults");
