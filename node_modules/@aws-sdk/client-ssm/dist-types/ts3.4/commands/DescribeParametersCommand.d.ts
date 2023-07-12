import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeParametersRequest,
  DescribeParametersResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeParametersCommandInput
  extends DescribeParametersRequest {}
export interface DescribeParametersCommandOutput
  extends DescribeParametersResult,
    __MetadataBearer {}
export declare class DescribeParametersCommand extends $Command<
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeParametersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeParametersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeParametersCommandInput, DescribeParametersCommandOutput>;
  private serialize;
  private deserialize;
}
