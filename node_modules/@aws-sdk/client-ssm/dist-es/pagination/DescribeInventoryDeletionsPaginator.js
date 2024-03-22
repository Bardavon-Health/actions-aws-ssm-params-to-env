import { createPaginator } from "@smithy/core";
import { DescribeInventoryDeletionsCommand, } from "../commands/DescribeInventoryDeletionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeInventoryDeletions = createPaginator(SSMClient, DescribeInventoryDeletionsCommand, "NextToken", "NextToken", "MaxResults");
