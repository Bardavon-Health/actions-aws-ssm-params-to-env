import { createPaginator } from "@smithy/core";
import { DescribePatchBaselinesCommand, } from "../commands/DescribePatchBaselinesCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribePatchBaselines = createPaginator(SSMClient, DescribePatchBaselinesCommand, "NextToken", "NextToken", "MaxResults");
