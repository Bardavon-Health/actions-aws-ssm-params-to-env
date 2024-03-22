import { createPaginator } from "@smithy/core";
import { DescribePatchGroupsCommand, } from "../commands/DescribePatchGroupsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribePatchGroups = createPaginator(SSMClient, DescribePatchGroupsCommand, "NextToken", "NextToken", "MaxResults");
