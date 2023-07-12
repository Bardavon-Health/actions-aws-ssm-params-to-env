import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateResourceDataSyncRequest,
  UpdateResourceDataSyncResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateResourceDataSyncCommandInput
  extends UpdateResourceDataSyncRequest {}
export interface UpdateResourceDataSyncCommandOutput
  extends UpdateResourceDataSyncResult,
    __MetadataBearer {}
export declare class UpdateResourceDataSyncCommand extends $Command<
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateResourceDataSyncCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateResourceDataSyncCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateResourceDataSyncCommandInput,
    UpdateResourceDataSyncCommandOutput
  >;
  private serialize;
  private deserialize;
}
