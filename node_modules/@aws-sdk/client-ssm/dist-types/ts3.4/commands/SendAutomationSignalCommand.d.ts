import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SendAutomationSignalRequest,
  SendAutomationSignalResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface SendAutomationSignalCommandInput
  extends SendAutomationSignalRequest {}
export interface SendAutomationSignalCommandOutput
  extends SendAutomationSignalResult,
    __MetadataBearer {}
export declare class SendAutomationSignalCommand extends $Command<
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: SendAutomationSignalCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendAutomationSignalCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SendAutomationSignalCommandInput,
    SendAutomationSignalCommandOutput
  >;
  private serialize;
  private deserialize;
}
