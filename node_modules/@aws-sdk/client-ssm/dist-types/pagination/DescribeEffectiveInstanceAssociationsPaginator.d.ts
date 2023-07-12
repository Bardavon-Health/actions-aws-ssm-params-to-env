import { Paginator } from "@smithy/types";
import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput } from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeEffectiveInstanceAssociations(config: SSMPaginationConfiguration, input: DescribeEffectiveInstanceAssociationsCommandInput, ...additionalArguments: any): Paginator<DescribeEffectiveInstanceAssociationsCommandOutput>;
