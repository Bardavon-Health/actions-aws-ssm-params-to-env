import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateOpsMetadataRequest,
  UpdateOpsMetadataResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateOpsMetadataCommandInput
  extends UpdateOpsMetadataRequest {}
export interface UpdateOpsMetadataCommandOutput
  extends UpdateOpsMetadataResult,
    __MetadataBearer {}
export declare class UpdateOpsMetadataCommand extends $Command<
  UpdateOpsMetadataCommandInput,
  UpdateOpsMetadataCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateOpsMetadataCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateOpsMetadataCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput>;
  private serialize;
  private deserialize;
}
