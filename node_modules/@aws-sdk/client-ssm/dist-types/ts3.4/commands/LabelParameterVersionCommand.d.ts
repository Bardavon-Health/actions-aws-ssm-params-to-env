import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  LabelParameterVersionRequest,
  LabelParameterVersionResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface LabelParameterVersionCommandInput
  extends LabelParameterVersionRequest {}
export interface LabelParameterVersionCommandOutput
  extends LabelParameterVersionResult,
    __MetadataBearer {}
export declare class LabelParameterVersionCommand extends $Command<
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: LabelParameterVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: LabelParameterVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    LabelParameterVersionCommandInput,
    LabelParameterVersionCommandOutput
  >;
  private serialize;
  private deserialize;
}
