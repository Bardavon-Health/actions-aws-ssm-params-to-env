import { createPaginator } from "@smithy/core";
import { DescribeParametersCommand, } from "../commands/DescribeParametersCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeParameters = createPaginator(SSMClient, DescribeParametersCommand, "NextToken", "NextToken", "MaxResults");
