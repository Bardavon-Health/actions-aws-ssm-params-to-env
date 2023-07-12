import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeSessionsRequest,
  DescribeSessionsResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeSessionsCommandInput extends DescribeSessionsRequest {}
export interface DescribeSessionsCommandOutput
  extends DescribeSessionsResponse,
    __MetadataBearer {}
export declare class DescribeSessionsCommand extends $Command<
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeSessionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeSessionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSessionsCommandInput, DescribeSessionsCommandOutput>;
  private serialize;
  private deserialize;
}
