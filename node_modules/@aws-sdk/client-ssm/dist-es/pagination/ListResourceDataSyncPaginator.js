import { createPaginator } from "@smithy/core";
import { ListResourceDataSyncCommand, } from "../commands/ListResourceDataSyncCommand";
import { SSMClient } from "../SSMClient";
export const paginateListResourceDataSync = createPaginator(SSMClient, ListResourceDataSyncCommand, "NextToken", "NextToken", "MaxResults");
