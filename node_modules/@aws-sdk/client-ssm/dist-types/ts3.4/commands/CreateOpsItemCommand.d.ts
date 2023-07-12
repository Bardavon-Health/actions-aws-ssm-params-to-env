import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateOpsItemRequest,
  CreateOpsItemResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreateOpsItemCommandInput extends CreateOpsItemRequest {}
export interface CreateOpsItemCommandOutput
  extends CreateOpsItemResponse,
    __MetadataBearer {}
export declare class CreateOpsItemCommand extends $Command<
  CreateOpsItemCommandInput,
  CreateOpsItemCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreateOpsItemCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateOpsItemCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOpsItemCommandInput, CreateOpsItemCommandOutput>;
  private serialize;
  private deserialize;
}
