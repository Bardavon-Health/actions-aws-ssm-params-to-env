import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListDocumentMetadataHistoryRequest,
  ListDocumentMetadataHistoryResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListDocumentMetadataHistoryCommandInput
  extends ListDocumentMetadataHistoryRequest {}
export interface ListDocumentMetadataHistoryCommandOutput
  extends ListDocumentMetadataHistoryResponse,
    __MetadataBearer {}
export declare class ListDocumentMetadataHistoryCommand extends $Command<
  ListDocumentMetadataHistoryCommandInput,
  ListDocumentMetadataHistoryCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListDocumentMetadataHistoryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListDocumentMetadataHistoryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListDocumentMetadataHistoryCommandInput,
    ListDocumentMetadataHistoryCommandOutput
  >;
  private serialize;
  private deserialize;
}
