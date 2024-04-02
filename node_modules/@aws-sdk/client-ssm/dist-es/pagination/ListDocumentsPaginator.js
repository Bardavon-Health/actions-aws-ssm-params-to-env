import { createPaginator } from "@smithy/core";
import { ListDocumentsCommand, } from "../commands/ListDocumentsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListDocuments = createPaginator(SSMClient, ListDocumentsCommand, "NextToken", "NextToken", "MaxResults");
