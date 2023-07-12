import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeInstancePatchStatesRequest,
  DescribeInstancePatchStatesResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeInstancePatchStatesCommandInput
  extends DescribeInstancePatchStatesRequest {}
export interface DescribeInstancePatchStatesCommandOutput
  extends DescribeInstancePatchStatesResult,
    __MetadataBearer {}
export declare class DescribeInstancePatchStatesCommand extends $Command<
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeInstancePatchStatesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeInstancePatchStatesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInstancePatchStatesCommandInput,
    DescribeInstancePatchStatesCommandOutput
  >;
  private serialize;
  private deserialize;
}
