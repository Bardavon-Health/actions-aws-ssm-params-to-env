import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateActivationRequest,
  CreateActivationResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreateActivationCommandInput extends CreateActivationRequest {}
export interface CreateActivationCommandOutput
  extends CreateActivationResult,
    __MetadataBearer {}
export declare class CreateActivationCommand extends $Command<
  CreateActivationCommandInput,
  CreateActivationCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreateActivationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateActivationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateActivationCommandInput, CreateActivationCommandOutput>;
  private serialize;
  private deserialize;
}
