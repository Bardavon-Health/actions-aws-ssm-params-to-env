import { Paginator } from "@smithy/types";
import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput } from "../commands/ListAssociationVersionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListAssociationVersions(config: SSMPaginationConfiguration, input: ListAssociationVersionsCommandInput, ...additionalArguments: any): Paginator<ListAssociationVersionsCommandOutput>;
