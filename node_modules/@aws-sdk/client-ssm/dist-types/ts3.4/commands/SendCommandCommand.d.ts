import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { SendCommandRequest, SendCommandResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface SendCommandCommandInput extends SendCommandRequest {}
export interface SendCommandCommandOutput
  extends SendCommandResult,
    __MetadataBearer {}
export declare class SendCommandCommand extends $Command<
  SendCommandCommandInput,
  SendCommandCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: SendCommandCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendCommandCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendCommandCommandInput, SendCommandCommandOutput>;
  private serialize;
  private deserialize;
}
