import { Paginator } from "@smithy/types";
import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput } from "../commands/ListAssociationVersionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListAssociationVersions: (config: SSMPaginationConfiguration, input: ListAssociationVersionsCommandInput, ...rest: any[]) => Paginator<ListAssociationVersionsCommandOutput>;
