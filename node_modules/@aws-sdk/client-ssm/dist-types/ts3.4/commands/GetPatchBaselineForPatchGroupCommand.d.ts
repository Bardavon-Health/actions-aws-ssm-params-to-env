import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetPatchBaselineForPatchGroupRequest,
  GetPatchBaselineForPatchGroupResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetPatchBaselineForPatchGroupCommandInput
  extends GetPatchBaselineForPatchGroupRequest {}
export interface GetPatchBaselineForPatchGroupCommandOutput
  extends GetPatchBaselineForPatchGroupResult,
    __MetadataBearer {}
export declare class GetPatchBaselineForPatchGroupCommand extends $Command<
  GetPatchBaselineForPatchGroupCommandInput,
  GetPatchBaselineForPatchGroupCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetPatchBaselineForPatchGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetPatchBaselineForPatchGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetPatchBaselineForPatchGroupCommandInput,
    GetPatchBaselineForPatchGroupCommandOutput
  >;
  private serialize;
  private deserialize;
}
