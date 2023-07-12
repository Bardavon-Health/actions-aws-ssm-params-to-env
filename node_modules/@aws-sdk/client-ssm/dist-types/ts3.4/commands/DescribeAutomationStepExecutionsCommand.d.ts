import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeAutomationStepExecutionsRequest,
  DescribeAutomationStepExecutionsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeAutomationStepExecutionsCommandInput
  extends DescribeAutomationStepExecutionsRequest {}
export interface DescribeAutomationStepExecutionsCommandOutput
  extends DescribeAutomationStepExecutionsResult,
    __MetadataBearer {}
export declare class DescribeAutomationStepExecutionsCommand extends $Command<
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeAutomationStepExecutionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeAutomationStepExecutionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAutomationStepExecutionsCommandInput,
    DescribeAutomationStepExecutionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
