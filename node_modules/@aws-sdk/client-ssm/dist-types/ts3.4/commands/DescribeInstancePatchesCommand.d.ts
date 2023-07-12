import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeInstancePatchesRequest,
  DescribeInstancePatchesResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeInstancePatchesCommandInput
  extends DescribeInstancePatchesRequest {}
export interface DescribeInstancePatchesCommandOutput
  extends DescribeInstancePatchesResult,
    __MetadataBearer {}
export declare class DescribeInstancePatchesCommand extends $Command<
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeInstancePatchesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeInstancePatchesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeInstancePatchesCommandInput,
    DescribeInstancePatchesCommandOutput
  >;
  private serialize;
  private deserialize;
}
