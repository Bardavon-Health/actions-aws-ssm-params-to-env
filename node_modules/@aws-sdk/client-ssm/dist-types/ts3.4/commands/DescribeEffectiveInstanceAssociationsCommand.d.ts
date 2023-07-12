import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeEffectiveInstanceAssociationsRequest,
  DescribeEffectiveInstanceAssociationsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeEffectiveInstanceAssociationsCommandInput
  extends DescribeEffectiveInstanceAssociationsRequest {}
export interface DescribeEffectiveInstanceAssociationsCommandOutput
  extends DescribeEffectiveInstanceAssociationsResult,
    __MetadataBearer {}
export declare class DescribeEffectiveInstanceAssociationsCommand extends $Command<
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeEffectiveInstanceAssociationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeEffectiveInstanceAssociationsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeEffectiveInstanceAssociationsCommandInput,
    DescribeEffectiveInstanceAssociationsCommandOutput
  >;
  private serialize;
  private deserialize;
}
