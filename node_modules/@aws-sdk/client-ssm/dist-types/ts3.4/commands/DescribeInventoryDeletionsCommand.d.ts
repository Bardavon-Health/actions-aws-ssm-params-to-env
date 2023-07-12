import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeInventoryDeletionsRequest,
  DescribeInventoryDeletionsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeInventoryDeletionsCommandInput
  extends DescribeInventoryDeletionsRequest {}
export interface DescribeInventoryDeletionsCommandOutput
  extends DescribeInventoryDeletionsResult,
    __MetadataBearer {}
export declare class DescribeInventoryDeletionsCommand extends $Command<
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeInventoryDeletionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeInventoryDeletionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInventoryDeletionsCommandInput,
    DescribeInventoryDeletionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
