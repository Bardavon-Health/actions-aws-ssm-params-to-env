import { createPaginator } from "@smithy/core";
import { DescribeInstanceAssociationsStatusCommand, } from "../commands/DescribeInstanceAssociationsStatusCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeInstanceAssociationsStatus = createPaginator(SSMClient, DescribeInstanceAssociationsStatusCommand, "NextToken", "NextToken", "MaxResults");
