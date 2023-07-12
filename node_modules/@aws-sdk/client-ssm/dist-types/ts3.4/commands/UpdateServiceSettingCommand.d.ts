import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateServiceSettingRequest,
  UpdateServiceSettingResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateServiceSettingCommandInput
  extends UpdateServiceSettingRequest {}
export interface UpdateServiceSettingCommandOutput
  extends UpdateServiceSettingResult,
    __MetadataBearer {}
export declare class UpdateServiceSettingCommand extends $Command<
  UpdateServiceSettingCommandInput,
  UpdateServiceSettingCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateServiceSettingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateServiceSettingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateServiceSettingCommandInput,
    UpdateServiceSettingCommandOutput
  >;
  private serialize;
  private deserialize;
}
