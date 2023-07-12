import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { GetOpsItemRequest, GetOpsItemResponse } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetOpsItemCommandInput extends GetOpsItemRequest {}
export interface GetOpsItemCommandOutput
  extends GetOpsItemResponse,
    __MetadataBearer {}
export declare class GetOpsItemCommand extends $Command<
  GetOpsItemCommandInput,
  GetOpsItemCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetOpsItemCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetOpsItemCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOpsItemCommandInput, GetOpsItemCommandOutput>;
  private serialize;
  private deserialize;
}
