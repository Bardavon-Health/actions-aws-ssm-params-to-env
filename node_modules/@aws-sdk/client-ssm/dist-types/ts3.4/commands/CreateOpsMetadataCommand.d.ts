import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateOpsMetadataRequest,
  CreateOpsMetadataResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreateOpsMetadataCommandInput
  extends CreateOpsMetadataRequest {}
export interface CreateOpsMetadataCommandOutput
  extends CreateOpsMetadataResult,
    __MetadataBearer {}
export declare class CreateOpsMetadataCommand extends $Command<
  CreateOpsMetadataCommandInput,
  CreateOpsMetadataCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreateOpsMetadataCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateOpsMetadataCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput>;
  private serialize;
  private deserialize;
}
