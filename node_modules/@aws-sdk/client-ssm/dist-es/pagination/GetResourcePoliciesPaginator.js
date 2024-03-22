import { createPaginator } from "@smithy/core";
import { GetResourcePoliciesCommand, } from "../commands/GetResourcePoliciesCommand";
import { SSMClient } from "../SSMClient";
export const paginateGetResourcePolicies = createPaginator(SSMClient, GetResourcePoliciesCommand, "NextToken", "NextToken", "MaxResults");
