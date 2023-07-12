import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeAutomationExecutionsRequest,
  DescribeAutomationExecutionsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeAutomationExecutionsCommandInput
  extends DescribeAutomationExecutionsRequest {}
export interface DescribeAutomationExecutionsCommandOutput
  extends DescribeAutomationExecutionsResult,
    __MetadataBearer {}
export declare class DescribeAutomationExecutionsCommand extends $Command<
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeAutomationExecutionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeAutomationExecutionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAutomationExecutionsCommandInput,
    DescribeAutomationExecutionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
