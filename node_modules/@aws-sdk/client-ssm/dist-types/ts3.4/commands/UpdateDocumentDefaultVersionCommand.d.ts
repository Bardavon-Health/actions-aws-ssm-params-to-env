import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateDocumentDefaultVersionRequest,
  UpdateDocumentDefaultVersionResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateDocumentDefaultVersionCommandInput
  extends UpdateDocumentDefaultVersionRequest {}
export interface UpdateDocumentDefaultVersionCommandOutput
  extends UpdateDocumentDefaultVersionResult,
    __MetadataBearer {}
export declare class UpdateDocumentDefaultVersionCommand extends $Command<
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateDocumentDefaultVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateDocumentDefaultVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateDocumentDefaultVersionCommandInput,
    UpdateDocumentDefaultVersionCommandOutput
  >;
  private serialize;
  private deserialize;
}
