import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateDocumentMetadataRequest,
  UpdateDocumentMetadataResponse,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateDocumentMetadataCommandInput
  extends UpdateDocumentMetadataRequest {}
export interface UpdateDocumentMetadataCommandOutput
  extends UpdateDocumentMetadataResponse,
    __MetadataBearer {}
export declare class UpdateDocumentMetadataCommand extends $Command<
  UpdateDocumentMetadataCommandInput,
  UpdateDocumentMetadataCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateDocumentMetadataCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateDocumentMetadataCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateDocumentMetadataCommandInput,
    UpdateDocumentMetadataCommandOutput
  >;
  private serialize;
  private deserialize;
}
