import { createPaginator } from "@smithy/core";
import { DescribeInstancePropertiesCommand, } from "../commands/DescribeInstancePropertiesCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeInstanceProperties = createPaginator(SSMClient, DescribeInstancePropertiesCommand, "NextToken", "NextToken", "MaxResults");
