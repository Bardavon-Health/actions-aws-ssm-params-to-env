import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetPatchBaselineRequest,
  GetPatchBaselineResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetPatchBaselineCommandInput extends GetPatchBaselineRequest {}
export interface GetPatchBaselineCommandOutput
  extends GetPatchBaselineResult,
    __MetadataBearer {}
export declare class GetPatchBaselineCommand extends $Command<
  GetPatchBaselineCommandInput,
  GetPatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetPatchBaselineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetPatchBaselineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput>;
  private serialize;
  private deserialize;
}
