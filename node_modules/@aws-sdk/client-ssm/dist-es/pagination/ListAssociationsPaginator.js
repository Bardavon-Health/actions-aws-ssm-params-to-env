import { createPaginator } from "@smithy/core";
import { ListAssociationsCommand, } from "../commands/ListAssociationsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListAssociations = createPaginator(SSMClient, ListAssociationsCommand, "NextToken", "NextToken", "MaxResults");
