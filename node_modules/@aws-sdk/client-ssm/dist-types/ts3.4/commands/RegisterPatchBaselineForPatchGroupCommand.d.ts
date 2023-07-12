import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  RegisterPatchBaselineForPatchGroupRequest,
  RegisterPatchBaselineForPatchGroupResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface RegisterPatchBaselineForPatchGroupCommandInput
  extends RegisterPatchBaselineForPatchGroupRequest {}
export interface RegisterPatchBaselineForPatchGroupCommandOutput
  extends RegisterPatchBaselineForPatchGroupResult,
    __MetadataBearer {}
export declare class RegisterPatchBaselineForPatchGroupCommand extends $Command<
  RegisterPatchBaselineForPatchGroupCommandInput,
  RegisterPatchBaselineForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: RegisterPatchBaselineForPatchGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RegisterPatchBaselineForPatchGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterPatchBaselineForPatchGroupCommandInput,
    RegisterPatchBaselineForPatchGroupCommandOutput
  >;
  private serialize;
  private deserialize;
}
