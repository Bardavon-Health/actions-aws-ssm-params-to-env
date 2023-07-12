import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetDefaultPatchBaselineRequest,
  GetDefaultPatchBaselineResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetDefaultPatchBaselineCommandInput
  extends GetDefaultPatchBaselineRequest {}
export interface GetDefaultPatchBaselineCommandOutput
  extends GetDefaultPatchBaselineResult,
    __MetadataBearer {}
export declare class GetDefaultPatchBaselineCommand extends $Command<
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetDefaultPatchBaselineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetDefaultPatchBaselineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetDefaultPatchBaselineCommandInput,
    GetDefaultPatchBaselineCommandOutput
  >;
  private serialize;
  private deserialize;
}
