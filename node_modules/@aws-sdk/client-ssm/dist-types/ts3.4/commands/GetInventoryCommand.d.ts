import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { GetInventoryResult } from "../models/models_1";
import { GetInventoryRequest } from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetInventoryCommandInput extends GetInventoryRequest {}
export interface GetInventoryCommandOutput
  extends GetInventoryResult,
    __MetadataBearer {}
export declare class GetInventoryCommand extends $Command<
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetInventoryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetInventoryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInventoryCommandInput, GetInventoryCommandOutput>;
  private serialize;
  private deserialize;
}
