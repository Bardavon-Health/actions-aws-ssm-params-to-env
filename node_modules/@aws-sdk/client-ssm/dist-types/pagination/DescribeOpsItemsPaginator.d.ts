import { Paginator } from "@smithy/types";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "../commands/DescribeOpsItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeOpsItems: (config: SSMPaginationConfiguration, input: DescribeOpsItemsCommandInput, ...rest: any[]) => Paginator<DescribeOpsItemsCommandOutput>;
