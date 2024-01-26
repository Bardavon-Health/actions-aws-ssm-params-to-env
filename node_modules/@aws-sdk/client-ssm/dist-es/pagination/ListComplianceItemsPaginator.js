import { createPaginator } from "@smithy/core";
import { ListComplianceItemsCommand, } from "../commands/ListComplianceItemsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListComplianceItems = createPaginator(SSMClient, ListComplianceItemsCommand, "NextToken", "NextToken", "MaxResults");
