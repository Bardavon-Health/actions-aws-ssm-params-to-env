import { Paginator } from "@smithy/types";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "../commands/DescribeParametersCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeParameters(config: SSMPaginationConfiguration, input: DescribeParametersCommandInput, ...additionalArguments: any): Paginator<DescribeParametersCommandOutput>;
