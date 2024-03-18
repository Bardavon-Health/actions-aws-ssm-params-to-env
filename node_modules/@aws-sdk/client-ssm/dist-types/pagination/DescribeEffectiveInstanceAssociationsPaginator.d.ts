import { Paginator } from "@smithy/types";
import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput } from "../commands/DescribeEffectiveInstanceAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeEffectiveInstanceAssociations: (config: SSMPaginationConfiguration, input: DescribeEffectiveInstanceAssociationsCommandInput, ...rest: any[]) => Paginator<DescribeEffectiveInstanceAssociationsCommandOutput>;
