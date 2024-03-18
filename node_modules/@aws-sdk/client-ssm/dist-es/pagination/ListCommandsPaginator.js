import { createPaginator } from "@smithy/core";
import { ListCommandsCommand, } from "../commands/ListCommandsCommand";
import { SSMClient } from "../SSMClient";
export const paginateListCommands = createPaginator(SSMClient, ListCommandsCommand, "NextToken", "NextToken", "MaxResults");
