import { Paginator } from "@smithy/types";
import { DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput } from "../commands/DescribeInstancePatchStatesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeInstancePatchStates(config: SSMPaginationConfiguration, input: DescribeInstancePatchStatesCommandInput, ...additionalArguments: any): Paginator<DescribeInstancePatchStatesCommandOutput>;
