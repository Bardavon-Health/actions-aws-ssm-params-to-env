import { Paginator } from "@smithy/types";
import { ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput } from "../commands/ListOpsItemEventsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListOpsItemEvents: (config: SSMPaginationConfiguration, input: ListOpsItemEventsCommandInput, ...rest: any[]) => Paginator<ListOpsItemEventsCommandOutput>;
