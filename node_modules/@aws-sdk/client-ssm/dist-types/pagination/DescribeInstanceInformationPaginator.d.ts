import { Paginator } from "@smithy/types";
import { DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput } from "../commands/DescribeInstanceInformationCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeInstanceInformation(config: SSMPaginationConfiguration, input: DescribeInstanceInformationCommandInput, ...additionalArguments: any): Paginator<DescribeInstanceInformationCommandOutput>;
