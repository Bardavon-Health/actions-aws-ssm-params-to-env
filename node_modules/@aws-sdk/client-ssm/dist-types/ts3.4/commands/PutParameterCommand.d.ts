import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { PutParameterRequest, PutParameterResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface PutParameterCommandInput extends PutParameterRequest {}
export interface PutParameterCommandOutput
  extends PutParameterResult,
    __MetadataBearer {}
export declare class PutParameterCommand extends $Command<
  PutParameterCommandInput,
  PutParameterCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: PutParameterCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutParameterCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutParameterCommandInput, PutParameterCommandOutput>;
  private serialize;
  private deserialize;
}
