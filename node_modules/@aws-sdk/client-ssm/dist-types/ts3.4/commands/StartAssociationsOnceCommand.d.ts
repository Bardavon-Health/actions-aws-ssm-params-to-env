import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  StartAssociationsOnceRequest,
  StartAssociationsOnceResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface StartAssociationsOnceCommandInput
  extends StartAssociationsOnceRequest {}
export interface StartAssociationsOnceCommandOutput
  extends StartAssociationsOnceResult,
    __MetadataBearer {}
export declare class StartAssociationsOnceCommand extends $Command<
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: StartAssociationsOnceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StartAssociationsOnceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartAssociationsOnceCommandInput,
    StartAssociationsOnceCommandOutput
  >;
  private serialize;
  private deserialize;
}
