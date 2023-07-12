import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { GetDocumentRequest, GetDocumentResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetDocumentCommandInput extends GetDocumentRequest {}
export interface GetDocumentCommandOutput
  extends GetDocumentResult,
    __MetadataBearer {}
export declare class GetDocumentCommand extends $Command<
  GetDocumentCommandInput,
  GetDocumentCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetDocumentCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetDocumentCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentCommandInput, GetDocumentCommandOutput>;
  private serialize;
  private deserialize;
}
