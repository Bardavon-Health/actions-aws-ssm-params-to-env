import { createPaginator } from "@smithy/core";
import { DescribeOpsItemsCommand, } from "../commands/DescribeOpsItemsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeOpsItems = createPaginator(SSMClient, DescribeOpsItemsCommand, "NextToken", "NextToken", "MaxResults");
