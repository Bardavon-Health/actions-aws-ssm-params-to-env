import { createPaginator } from "@smithy/core";
import { ListAssociationVersionsCommand, } from "../commands/ListAssociationVersionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListAssociationVersions = createPaginator(SSMClient, ListAssociationVersionsCommand, "NextToken", "NextToken", "MaxResults");
