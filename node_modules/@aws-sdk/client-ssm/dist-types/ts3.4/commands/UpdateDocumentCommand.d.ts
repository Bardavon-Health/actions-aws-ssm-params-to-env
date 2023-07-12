import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateDocumentRequest,
  UpdateDocumentResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {}
export interface UpdateDocumentCommandOutput
  extends UpdateDocumentResult,
    __MetadataBearer {}
export declare class UpdateDocumentCommand extends $Command<
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateDocumentCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateDocumentCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentCommandInput, UpdateDocumentCommandOutput>;
  private serialize;
  private deserialize;
}
