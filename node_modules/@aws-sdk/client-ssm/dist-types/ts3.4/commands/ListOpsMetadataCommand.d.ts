import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListOpsMetadataRequest,
  ListOpsMetadataResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListOpsMetadataCommandInput extends ListOpsMetadataRequest {}
export interface ListOpsMetadataCommandOutput
  extends ListOpsMetadataResult,
    __MetadataBearer {}
export declare class ListOpsMetadataCommand extends $Command<
  ListOpsMetadataCommandInput,
  ListOpsMetadataCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListOpsMetadataCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListOpsMetadataCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput>;
  private serialize;
  private deserialize;
}
