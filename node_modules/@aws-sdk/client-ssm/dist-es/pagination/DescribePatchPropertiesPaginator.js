import { createPaginator } from "@smithy/core";
import { DescribePatchPropertiesCommand, } from "../commands/DescribePatchPropertiesCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribePatchProperties = createPaginator(SSMClient, DescribePatchPropertiesCommand, "NextToken", "NextToken", "MaxResults");
