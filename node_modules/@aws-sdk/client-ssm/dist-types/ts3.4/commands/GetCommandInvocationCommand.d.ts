import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetCommandInvocationRequest,
  GetCommandInvocationResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetCommandInvocationCommandInput
  extends GetCommandInvocationRequest {}
export interface GetCommandInvocationCommandOutput
  extends GetCommandInvocationResult,
    __MetadataBearer {}
export declare class GetCommandInvocationCommand extends $Command<
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetCommandInvocationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetCommandInvocationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCommandInvocationCommandInput,
    GetCommandInvocationCommandOutput
  >;
  private serialize;
  private deserialize;
}
