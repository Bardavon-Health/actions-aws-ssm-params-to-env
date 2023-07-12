import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreatePatchBaselineRequest,
  CreatePatchBaselineResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreatePatchBaselineCommandInput
  extends CreatePatchBaselineRequest {}
export interface CreatePatchBaselineCommandOutput
  extends CreatePatchBaselineResult,
    __MetadataBearer {}
export declare class CreatePatchBaselineCommand extends $Command<
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreatePatchBaselineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreatePatchBaselineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput>;
  private serialize;
  private deserialize;
}
