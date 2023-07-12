import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteOpsMetadataRequest,
  DeleteOpsMetadataResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeleteOpsMetadataCommandInput
  extends DeleteOpsMetadataRequest {}
export interface DeleteOpsMetadataCommandOutput
  extends DeleteOpsMetadataResult,
    __MetadataBearer {}
export declare class DeleteOpsMetadataCommand extends $Command<
  DeleteOpsMetadataCommandInput,
  DeleteOpsMetadataCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeleteOpsMetadataCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteOpsMetadataCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput>;
  private serialize;
  private deserialize;
}
