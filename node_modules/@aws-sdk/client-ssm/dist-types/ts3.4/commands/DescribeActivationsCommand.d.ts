import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeActivationsRequest,
  DescribeActivationsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeActivationsCommandInput
  extends DescribeActivationsRequest {}
export interface DescribeActivationsCommandOutput
  extends DescribeActivationsResult,
    __MetadataBearer {}
export declare class DescribeActivationsCommand extends $Command<
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeActivationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeActivationsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeActivationsCommandInput, DescribeActivationsCommandOutput>;
  private serialize;
  private deserialize;
}
