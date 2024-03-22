import { Paginator } from "@smithy/types";
import { DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput } from "../commands/DescribeAutomationStepExecutionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAutomationStepExecutions: (config: SSMPaginationConfiguration, input: DescribeAutomationStepExecutionsCommandInput, ...rest: any[]) => Paginator<DescribeAutomationStepExecutionsCommandOutput>;
