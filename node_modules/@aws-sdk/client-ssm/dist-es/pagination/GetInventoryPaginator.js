import { createPaginator } from "@smithy/core";
import { GetInventoryCommand, } from "../commands/GetInventoryCommand";
import { SSMClient } from "../SSMClient";
export const paginateGetInventory = createPaginator(SSMClient, GetInventoryCommand, "NextToken", "NextToken", "MaxResults");
