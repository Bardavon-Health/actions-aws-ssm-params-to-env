import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeletePatchBaselineRequest,
  DeletePatchBaselineResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeletePatchBaselineCommandInput
  extends DeletePatchBaselineRequest {}
export interface DeletePatchBaselineCommandOutput
  extends DeletePatchBaselineResult,
    __MetadataBearer {}
export declare class DeletePatchBaselineCommand extends $Command<
  DeletePatchBaselineCommandInput,
  DeletePatchBaselineCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeletePatchBaselineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeletePatchBaselineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput>;
  private serialize;
  private deserialize;
}
