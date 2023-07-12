import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteResourceDataSyncRequest,
  DeleteResourceDataSyncResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeleteResourceDataSyncCommandInput
  extends DeleteResourceDataSyncRequest {}
export interface DeleteResourceDataSyncCommandOutput
  extends DeleteResourceDataSyncResult,
    __MetadataBearer {}
export declare class DeleteResourceDataSyncCommand extends $Command<
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeleteResourceDataSyncCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteResourceDataSyncCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteResourceDataSyncCommandInput,
    DeleteResourceDataSyncCommandOutput
  >;
  private serialize;
  private deserialize;
}
