import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListDocumentsCommandInput extends ListDocumentsRequest {}
export interface ListDocumentsCommandOutput
  extends ListDocumentsResult,
    __MetadataBearer {}
export declare class ListDocumentsCommand extends $Command<
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListDocumentsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListDocumentsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDocumentsCommandInput, ListDocumentsCommandOutput>;
  private serialize;
  private deserialize;
}
