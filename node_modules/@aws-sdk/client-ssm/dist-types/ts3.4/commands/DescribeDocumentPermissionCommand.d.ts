import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeDocumentPermissionRequest,
  DescribeDocumentPermissionResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeDocumentPermissionCommandInput
  extends DescribeDocumentPermissionRequest {}
export interface DescribeDocumentPermissionCommandOutput
  extends DescribeDocumentPermissionResponse,
    __MetadataBearer {}
export declare class DescribeDocumentPermissionCommand extends $Command<
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeDocumentPermissionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeDocumentPermissionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDocumentPermissionCommandInput,
    DescribeDocumentPermissionCommandOutput
  >;
  private serialize;
  private deserialize;
}
