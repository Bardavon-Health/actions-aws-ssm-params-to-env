import { Paginator } from "@smithy/types";
import { DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput } from "../commands/DescribePatchGroupsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribePatchGroups(config: SSMPaginationConfiguration, input: DescribePatchGroupsCommandInput, ...additionalArguments: any): Paginator<DescribePatchGroupsCommandOutput>;
