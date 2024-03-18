import { createPaginator } from "@smithy/core";
import { GetInventorySchemaCommand, } from "../commands/GetInventorySchemaCommand";
import { SSMClient } from "../SSMClient";
export const paginateGetInventorySchema = createPaginator(SSMClient, GetInventorySchemaCommand, "NextToken", "NextToken", "MaxResults");
