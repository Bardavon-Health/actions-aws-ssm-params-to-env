import { createPaginator } from "@smithy/core";
import { DescribeEffectiveInstanceAssociationsCommand, } from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeEffectiveInstanceAssociations = createPaginator(SSMClient, DescribeEffectiveInstanceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
