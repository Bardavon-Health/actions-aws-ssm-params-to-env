import { Paginator } from "@smithy/types";
import { DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput } from "../commands/DescribeAutomationStepExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeAutomationStepExecutions(config: SSMPaginationConfiguration, input: DescribeAutomationStepExecutionsCommandInput, ...additionalArguments: any): Paginator<DescribeAutomationStepExecutionsCommandOutput>;
