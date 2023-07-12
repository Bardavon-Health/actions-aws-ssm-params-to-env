import { Paginator } from "@smithy/types";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "../commands/ListOpsMetadataCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListOpsMetadata(config: SSMPaginationConfiguration, input: ListOpsMetadataCommandInput, ...additionalArguments: any): Paginator<ListOpsMetadataCommandOutput>;
