import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateResourceDataSyncRequest,
  CreateResourceDataSyncResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreateResourceDataSyncCommandInput
  extends CreateResourceDataSyncRequest {}
export interface CreateResourceDataSyncCommandOutput
  extends CreateResourceDataSyncResult,
    __MetadataBearer {}
export declare class CreateResourceDataSyncCommand extends $Command<
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreateResourceDataSyncCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateResourceDataSyncCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateResourceDataSyncCommandInput,
    CreateResourceDataSyncCommandOutput
  >;
  private serialize;
  private deserialize;
}
