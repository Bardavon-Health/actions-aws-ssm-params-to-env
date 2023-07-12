import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListDocumentVersionsRequest,
  ListDocumentVersionsResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListDocumentVersionsCommandInput
  extends ListDocumentVersionsRequest {}
export interface ListDocumentVersionsCommandOutput
  extends ListDocumentVersionsResult,
    __MetadataBearer {}
export declare class ListDocumentVersionsCommand extends $Command<
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListDocumentVersionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListDocumentVersionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListDocumentVersionsCommandInput,
    ListDocumentVersionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
