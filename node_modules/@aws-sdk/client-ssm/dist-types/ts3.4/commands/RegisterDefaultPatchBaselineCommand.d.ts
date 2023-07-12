import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  RegisterDefaultPatchBaselineRequest,
  RegisterDefaultPatchBaselineResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface RegisterDefaultPatchBaselineCommandInput
  extends RegisterDefaultPatchBaselineRequest {}
export interface RegisterDefaultPatchBaselineCommandOutput
  extends RegisterDefaultPatchBaselineResult,
    __MetadataBearer {}
export declare class RegisterDefaultPatchBaselineCommand extends $Command<
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: RegisterDefaultPatchBaselineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RegisterDefaultPatchBaselineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterDefaultPatchBaselineCommandInput,
    RegisterDefaultPatchBaselineCommandOutput
  >;
  private serialize;
  private deserialize;
}
