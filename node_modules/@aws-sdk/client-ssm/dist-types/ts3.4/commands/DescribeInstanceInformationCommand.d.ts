import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeInstanceInformationRequest,
  DescribeInstanceInformationResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeInstanceInformationCommandInput
  extends DescribeInstanceInformationRequest {}
export interface DescribeInstanceInformationCommandOutput
  extends DescribeInstanceInformationResult,
    __MetadataBearer {}
export declare class DescribeInstanceInformationCommand extends $Command<
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeInstanceInformationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeInstanceInformationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInstanceInformationCommandInput,
    DescribeInstanceInformationCommandOutput
  >;
  private serialize;
  private deserialize;
}
