import { createPaginator } from "@smithy/core";
import { DescribeAssociationExecutionTargetsCommand, } from "../commands/DescribeAssociationExecutionTargetsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeAssociationExecutionTargets = createPaginator(SSMClient, DescribeAssociationExecutionTargetsCommand, "NextToken", "NextToken", "MaxResults");
