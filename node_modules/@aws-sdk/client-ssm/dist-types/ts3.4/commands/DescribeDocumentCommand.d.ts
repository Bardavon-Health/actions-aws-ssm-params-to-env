import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeDocumentRequest,
  DescribeDocumentResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeDocumentCommandInput extends DescribeDocumentRequest {}
export interface DescribeDocumentCommandOutput
  extends DescribeDocumentResult,
    __MetadataBearer {}
export declare class DescribeDocumentCommand extends $Command<
  DescribeDocumentCommandInput,
  DescribeDocumentCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeDocumentCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeDocumentCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDocumentCommandInput, DescribeDocumentCommandOutput>;
  private serialize;
  private deserialize;
}
