import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetAutomationExecutionRequest,
  GetAutomationExecutionResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetAutomationExecutionCommandInput
  extends GetAutomationExecutionRequest {}
export interface GetAutomationExecutionCommandOutput
  extends GetAutomationExecutionResult,
    __MetadataBearer {}
export declare class GetAutomationExecutionCommand extends $Command<
  GetAutomationExecutionCommandInput,
  GetAutomationExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetAutomationExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAutomationExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAutomationExecutionCommandInput,
    GetAutomationExecutionCommandOutput
  >;
  private serialize;
  private deserialize;
}
