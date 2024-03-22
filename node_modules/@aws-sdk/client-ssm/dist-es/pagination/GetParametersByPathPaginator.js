import { createPaginator } from "@smithy/core";
import { GetParametersByPathCommand, } from "../commands/GetParametersByPathCommand";
import { SSMClient } from "../SSMClient";
export const paginateGetParametersByPath = createPaginator(SSMClient, GetParametersByPathCommand, "NextToken", "NextToken", "MaxResults");
