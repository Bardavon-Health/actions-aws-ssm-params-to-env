import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeregisterPatchBaselineForPatchGroupRequest,
  DeregisterPatchBaselineForPatchGroupResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeregisterPatchBaselineForPatchGroupCommandInput
  extends DeregisterPatchBaselineForPatchGroupRequest {}
export interface DeregisterPatchBaselineForPatchGroupCommandOutput
  extends DeregisterPatchBaselineForPatchGroupResult,
    __MetadataBearer {}
export declare class DeregisterPatchBaselineForPatchGroupCommand extends $Command<
  DeregisterPatchBaselineForPatchGroupCommandInput,
  DeregisterPatchBaselineForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeregisterPatchBaselineForPatchGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeregisterPatchBaselineForPatchGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeregisterPatchBaselineForPatchGroupCommandInput,
    DeregisterPatchBaselineForPatchGroupCommandOutput
  >;
  private serialize;
  private deserialize;
}
