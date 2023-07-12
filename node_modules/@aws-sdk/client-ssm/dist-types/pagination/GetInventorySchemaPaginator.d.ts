import { Paginator } from "@smithy/types";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "../commands/GetInventorySchemaCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateGetInventorySchema(config: SSMPaginationConfiguration, input: GetInventorySchemaCommandInput, ...additionalArguments: any): Paginator<GetInventorySchemaCommandOutput>;
