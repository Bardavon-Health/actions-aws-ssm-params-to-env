import { Paginator } from "@smithy/types";
import { DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput } from "../commands/DescribeInventoryDeletionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeInventoryDeletions(config: SSMPaginationConfiguration, input: DescribeInventoryDeletionsCommandInput, ...additionalArguments: any): Paginator<DescribeInventoryDeletionsCommandOutput>;
