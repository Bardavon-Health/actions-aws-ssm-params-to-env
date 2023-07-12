import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ResetServiceSettingRequest,
  ResetServiceSettingResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ResetServiceSettingCommandInput
  extends ResetServiceSettingRequest {}
export interface ResetServiceSettingCommandOutput
  extends ResetServiceSettingResult,
    __MetadataBearer {}
export declare class ResetServiceSettingCommand extends $Command<
  ResetServiceSettingCommandInput,
  ResetServiceSettingCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ResetServiceSettingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ResetServiceSettingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput>;
  private serialize;
  private deserialize;
}
