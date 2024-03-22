import { Paginator } from "@smithy/types";
import { GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput } from "../commands/GetParameterHistoryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetParameterHistory: (config: SSMPaginationConfiguration, input: GetParameterHistoryCommandInput, ...rest: any[]) => Paginator<GetParameterHistoryCommandOutput>;
