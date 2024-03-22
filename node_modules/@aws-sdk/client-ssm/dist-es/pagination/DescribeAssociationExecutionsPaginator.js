import { createPaginator } from "@smithy/core";
import { DescribeAssociationExecutionsCommand, } from "../commands/DescribeAssociationExecutionsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeAssociationExecutions = createPaginator(SSMClient, DescribeAssociationExecutionsCommand, "NextToken", "NextToken", "MaxResults");
