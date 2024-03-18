import { createPaginator } from "@smithy/core";
import { ListOpsItemRelatedItemsCommand, } from "../commands/ListOpsItemRelatedItemsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListOpsItemRelatedItems = createPaginator(SSMClient, ListOpsItemRelatedItemsCommand, "NextToken", "NextToken", "MaxResults");
