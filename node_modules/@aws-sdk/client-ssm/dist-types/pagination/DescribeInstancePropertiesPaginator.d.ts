import { Paginator } from "@smithy/types";
import { DescribeInstancePropertiesCommandInput, DescribeInstancePropertiesCommandOutput } from "../commands/DescribeInstancePropertiesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstanceProperties: (config: SSMPaginationConfiguration, input: DescribeInstancePropertiesCommandInput, ...rest: any[]) => Paginator<DescribeInstancePropertiesCommandOutput>;
