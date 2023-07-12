import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateDocumentRequest,
  CreateDocumentResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreateDocumentCommandInput extends CreateDocumentRequest {}
export interface CreateDocumentCommandOutput
  extends CreateDocumentResult,
    __MetadataBearer {}
export declare class CreateDocumentCommand extends $Command<
  CreateDocumentCommandInput,
  CreateDocumentCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreateDocumentCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateDocumentCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDocumentCommandInput, CreateDocumentCommandOutput>;
  private serialize;
  private deserialize;
}
