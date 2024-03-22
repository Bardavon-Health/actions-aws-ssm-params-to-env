import { Paginator } from "@smithy/types";
import { GetParametersByPathCommandInput, GetParametersByPathCommandOutput } from "../commands/GetParametersByPathCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetParametersByPath: (config: SSMPaginationConfiguration, input: GetParametersByPathCommandInput, ...rest: any[]) => Paginator<GetParametersByPathCommandOutput>;
