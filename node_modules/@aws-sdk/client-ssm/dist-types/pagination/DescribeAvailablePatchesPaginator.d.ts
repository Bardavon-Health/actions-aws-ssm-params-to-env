import { Paginator } from "@smithy/types";
import { DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput } from "../commands/DescribeAvailablePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeAvailablePatches(config: SSMPaginationConfiguration, input: DescribeAvailablePatchesCommandInput, ...additionalArguments: any): Paginator<DescribeAvailablePatchesCommandOutput>;
