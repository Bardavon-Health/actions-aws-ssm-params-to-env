import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { PutInventoryRequest, PutInventoryResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface PutInventoryCommandInput extends PutInventoryRequest {}
export interface PutInventoryCommandOutput
  extends PutInventoryResult,
    __MetadataBearer {}
export declare class PutInventoryCommand extends $Command<
  PutInventoryCommandInput,
  PutInventoryCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: PutInventoryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutInventoryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInventoryCommandInput, PutInventoryCommandOutput>;
  private serialize;
  private deserialize;
}
