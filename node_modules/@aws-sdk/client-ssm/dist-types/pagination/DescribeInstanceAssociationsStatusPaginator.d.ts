import { Paginator } from "@smithy/types";
import { DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput } from "../commands/DescribeInstanceAssociationsStatusCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstanceAssociationsStatus: (config: SSMPaginationConfiguration, input: DescribeInstanceAssociationsStatusCommandInput, ...rest: any[]) => Paginator<DescribeInstanceAssociationsStatusCommandOutput>;
