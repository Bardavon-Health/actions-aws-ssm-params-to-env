import { createPaginator } from "@smithy/core";
import { ListOpsMetadataCommand, } from "../commands/ListOpsMetadataCommand";
import { SSMClient } from "../SSMClient";
export const paginateListOpsMetadata = createPaginator(SSMClient, ListOpsMetadataCommand, "NextToken", "NextToken", "MaxResults");
