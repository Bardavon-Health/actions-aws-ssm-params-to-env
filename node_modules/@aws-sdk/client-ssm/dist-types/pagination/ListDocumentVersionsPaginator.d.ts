import { Paginator } from "@smithy/types";
import { ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput } from "../commands/ListDocumentVersionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListDocumentVersions(config: SSMPaginationConfiguration, input: ListDocumentVersionsCommandInput, ...additionalArguments: any): Paginator<ListDocumentVersionsCommandOutput>;
