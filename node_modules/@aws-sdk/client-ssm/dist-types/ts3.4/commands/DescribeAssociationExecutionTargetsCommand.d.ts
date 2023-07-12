import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeAssociationExecutionTargetsRequest,
  DescribeAssociationExecutionTargetsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeAssociationExecutionTargetsCommandInput
  extends DescribeAssociationExecutionTargetsRequest {}
export interface DescribeAssociationExecutionTargetsCommandOutput
  extends DescribeAssociationExecutionTargetsResult,
    __MetadataBearer {}
export declare class DescribeAssociationExecutionTargetsCommand extends $Command<
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeAssociationExecutionTargetsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeAssociationExecutionTargetsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAssociationExecutionTargetsCommandInput,
    DescribeAssociationExecutionTargetsCommandOutput
  >;
  private serialize;
  private deserialize;
}
