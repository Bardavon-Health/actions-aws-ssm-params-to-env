import { Paginator } from "@smithy/types";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "../commands/ListCommandsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListCommands: (config: SSMPaginationConfiguration, input: ListCommandsCommandInput, ...rest: any[]) => Paginator<ListCommandsCommandOutput>;
