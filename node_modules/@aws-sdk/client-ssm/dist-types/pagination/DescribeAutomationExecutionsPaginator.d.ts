import { Paginator } from "@smithy/types";
import { DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput } from "../commands/DescribeAutomationExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeAutomationExecutions(config: SSMPaginationConfiguration, input: DescribeAutomationExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeAutomationExecutionsCommandOutput>;
