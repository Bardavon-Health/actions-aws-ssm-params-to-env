import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UnlabelParameterVersionRequest,
  UnlabelParameterVersionResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UnlabelParameterVersionCommandInput
  extends UnlabelParameterVersionRequest {}
export interface UnlabelParameterVersionCommandOutput
  extends UnlabelParameterVersionResult,
    __MetadataBearer {}
export declare class UnlabelParameterVersionCommand extends $Command<
  UnlabelParameterVersionCommandInput,
  UnlabelParameterVersionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UnlabelParameterVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UnlabelParameterVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UnlabelParameterVersionCommandInput,
    UnlabelParameterVersionCommandOutput
  >;
  private serialize;
  private deserialize;
}
