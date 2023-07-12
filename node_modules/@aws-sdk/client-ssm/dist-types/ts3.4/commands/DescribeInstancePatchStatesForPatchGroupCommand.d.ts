import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeInstancePatchStatesForPatchGroupRequest,
  DescribeInstancePatchStatesForPatchGroupResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeInstancePatchStatesForPatchGroupCommandInput
  extends DescribeInstancePatchStatesForPatchGroupRequest {}
export interface DescribeInstancePatchStatesForPatchGroupCommandOutput
  extends DescribeInstancePatchStatesForPatchGroupResult,
    __MetadataBearer {}
export declare class DescribeInstancePatchStatesForPatchGroupCommand extends $Command<
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeInstancePatchStatesForPatchGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeInstancePatchStatesForPatchGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInstancePatchStatesForPatchGroupCommandInput,
    DescribeInstancePatchStatesForPatchGroupCommandOutput
  >;
  private serialize;
  private deserialize;
}
