import { createPaginator } from "@smithy/core";
import { DescribeActivationsCommand, } from "../commands/DescribeActivationsCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeActivations = createPaginator(SSMClient, DescribeActivationsCommand, "NextToken", "NextToken", "MaxResults");
