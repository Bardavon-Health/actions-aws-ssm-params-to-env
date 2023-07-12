import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeInstanceAssociationsStatusRequest,
  DescribeInstanceAssociationsStatusResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeInstanceAssociationsStatusCommandInput
  extends DescribeInstanceAssociationsStatusRequest {}
export interface DescribeInstanceAssociationsStatusCommandOutput
  extends DescribeInstanceAssociationsStatusResult,
    __MetadataBearer {}
export declare class DescribeInstanceAssociationsStatusCommand extends $Command<
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeInstanceAssociationsStatusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeInstanceAssociationsStatusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInstanceAssociationsStatusCommandInput,
    DescribeInstanceAssociationsStatusCommandOutput
  >;
  private serialize;
  private deserialize;
}
