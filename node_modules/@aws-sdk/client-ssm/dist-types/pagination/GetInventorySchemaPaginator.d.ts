import { Paginator } from "@smithy/types";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "../commands/GetInventorySchemaCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetInventorySchema: (config: SSMPaginationConfiguration, input: GetInventorySchemaCommandInput, ...rest: any[]) => Paginator<GetInventorySchemaCommandOutput>;
