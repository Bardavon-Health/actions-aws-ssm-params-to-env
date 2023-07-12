import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateAssociationBatchRequest,
  CreateAssociationBatchResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreateAssociationBatchCommandInput
  extends CreateAssociationBatchRequest {}
export interface CreateAssociationBatchCommandOutput
  extends CreateAssociationBatchResult,
    __MetadataBearer {}
export declare class CreateAssociationBatchCommand extends $Command<
  CreateAssociationBatchCommandInput,
  CreateAssociationBatchCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreateAssociationBatchCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateAssociationBatchCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateAssociationBatchCommandInput,
    CreateAssociationBatchCommandOutput
  >;
  private serialize;
  private deserialize;
}
