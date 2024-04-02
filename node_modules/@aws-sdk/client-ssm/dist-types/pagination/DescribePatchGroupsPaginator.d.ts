import { Paginator } from "@smithy/types";
import { DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput } from "../commands/DescribePatchGroupsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribePatchGroups: (config: SSMPaginationConfiguration, input: DescribePatchGroupsCommandInput, ...rest: any[]) => Paginator<DescribePatchGroupsCommandOutput>;
