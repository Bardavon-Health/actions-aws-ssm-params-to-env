import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { CancelCommandRequest, CancelCommandResult } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CancelCommandCommandInput extends CancelCommandRequest {}
export interface CancelCommandCommandOutput
  extends CancelCommandResult,
    __MetadataBearer {}
export declare class CancelCommandCommand extends $Command<
  CancelCommandCommandInput,
  CancelCommandCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CancelCommandCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CancelCommandCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelCommandCommandInput, CancelCommandCommandOutput>;
  private serialize;
  private deserialize;
}
