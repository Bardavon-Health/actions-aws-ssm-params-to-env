import { createPaginator } from "@smithy/core";
import { ListCommandInvocationsCommand, } from "../commands/ListCommandInvocationsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListCommandInvocations = createPaginator(SSMClient, ListCommandInvocationsCommand, "NextToken", "NextToken", "MaxResults");
