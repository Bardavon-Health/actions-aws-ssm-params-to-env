import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  TerminateSessionRequest,
  TerminateSessionResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface TerminateSessionCommandInput extends TerminateSessionRequest {}
export interface TerminateSessionCommandOutput
  extends TerminateSessionResponse,
    __MetadataBearer {}
export declare class TerminateSessionCommand extends $Command<
  TerminateSessionCommandInput,
  TerminateSessionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: TerminateSessionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: TerminateSessionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateSessionCommandInput, TerminateSessionCommandOutput>;
  private serialize;
  private deserialize;
}
