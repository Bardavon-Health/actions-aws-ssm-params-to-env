import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetOpsMetadataRequest,
  GetOpsMetadataResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetOpsMetadataCommandInput extends GetOpsMetadataRequest {}
export interface GetOpsMetadataCommandOutput
  extends GetOpsMetadataResult,
    __MetadataBearer {}
export declare class GetOpsMetadataCommand extends $Command<
  GetOpsMetadataCommandInput,
  GetOpsMetadataCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetOpsMetadataCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetOpsMetadataCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput>;
  private serialize;
  private deserialize;
}
