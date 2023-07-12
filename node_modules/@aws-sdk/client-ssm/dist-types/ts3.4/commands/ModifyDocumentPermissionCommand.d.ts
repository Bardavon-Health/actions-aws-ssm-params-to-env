import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ModifyDocumentPermissionRequest,
  ModifyDocumentPermissionResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ModifyDocumentPermissionCommandInput
  extends ModifyDocumentPermissionRequest {}
export interface ModifyDocumentPermissionCommandOutput
  extends ModifyDocumentPermissionResponse,
    __MetadataBearer {}
export declare class ModifyDocumentPermissionCommand extends $Command<
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ModifyDocumentPermissionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ModifyDocumentPermissionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyDocumentPermissionCommandInput,
    ModifyDocumentPermissionCommandOutput
  >;
  private serialize;
  private deserialize;
}
