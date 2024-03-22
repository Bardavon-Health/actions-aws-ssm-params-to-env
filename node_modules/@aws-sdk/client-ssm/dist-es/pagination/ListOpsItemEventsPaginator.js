import { createPaginator } from "@smithy/core";
import { ListOpsItemEventsCommand, } from "../commands/ListOpsItemEventsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListOpsItemEvents = createPaginator(SSMClient, ListOpsItemEventsCommand, "NextToken", "NextToken", "MaxResults");
