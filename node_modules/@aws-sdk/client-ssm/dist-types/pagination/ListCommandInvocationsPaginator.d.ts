import { Paginator } from "@smithy/types";
import { ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput } from "../commands/ListCommandInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListCommandInvocations(config: SSMPaginationConfiguration, input: ListCommandInvocationsCommandInput, ...additionalArguments: any): Paginator<ListCommandInvocationsCommandOutput>;
