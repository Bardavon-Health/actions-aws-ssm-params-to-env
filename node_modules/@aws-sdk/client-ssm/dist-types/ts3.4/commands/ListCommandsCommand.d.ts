import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { ListCommandsRequest, ListCommandsResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListCommandsCommandInput extends ListCommandsRequest {}
export interface ListCommandsCommandOutput
  extends ListCommandsResult,
    __MetadataBearer {}
export declare class ListCommandsCommand extends $Command<
  ListCommandsCommandInput,
  ListCommandsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListCommandsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListCommandsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCommandsCommandInput, ListCommandsCommandOutput>;
  private serialize;
  private deserialize;
}
