import { createPaginator } from "@smithy/core";
import { ListDocumentVersionsCommand, } from "../commands/ListDocumentVersionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListDocumentVersions = createPaginator(SSMClient, ListDocumentVersionsCommand, "NextToken", "NextToken", "MaxResults");
