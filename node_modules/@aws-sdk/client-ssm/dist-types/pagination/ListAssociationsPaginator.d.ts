import { Paginator } from "@smithy/types";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListAssociations: (config: SSMPaginationConfiguration, input: ListAssociationsCommandInput, ...rest: any[]) => Paginator<ListAssociationsCommandOutput>;
