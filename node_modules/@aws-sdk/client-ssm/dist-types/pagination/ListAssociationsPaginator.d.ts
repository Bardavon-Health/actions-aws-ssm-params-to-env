import { Paginator } from "@smithy/types";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListAssociations(config: SSMPaginationConfiguration, input: ListAssociationsCommandInput, ...additionalArguments: any): Paginator<ListAssociationsCommandOutput>;
