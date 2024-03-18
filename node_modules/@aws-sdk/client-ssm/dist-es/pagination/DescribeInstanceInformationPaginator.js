import { createPaginator } from "@smithy/core";
import { DescribeInstanceInformationCommand, } from "../commands/DescribeInstanceInformationCommand";
import { SSMClient } from "../SSMClient";
export const paginateDescribeInstanceInformation = createPaginator(SSMClient, DescribeInstanceInformationCommand, "NextToken", "NextToken", "MaxResults");
