import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetParameterHistoryRequest,
  GetParameterHistoryResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetParameterHistoryCommandInput
  extends GetParameterHistoryRequest {}
export interface GetParameterHistoryCommandOutput
  extends GetParameterHistoryResult,
    __MetadataBearer {}
export declare class GetParameterHistoryCommand extends $Command<
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetParameterHistoryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetParameterHistoryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput>;
  private serialize;
  private deserialize;
}
