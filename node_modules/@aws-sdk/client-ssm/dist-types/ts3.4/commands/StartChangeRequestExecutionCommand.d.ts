import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  StartChangeRequestExecutionRequest,
  StartChangeRequestExecutionResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface StartChangeRequestExecutionCommandInput
  extends StartChangeRequestExecutionRequest {}
export interface StartChangeRequestExecutionCommandOutput
  extends StartChangeRequestExecutionResult,
    __MetadataBearer {}
export declare class StartChangeRequestExecutionCommand extends $Command<
  StartChangeRequestExecutionCommandInput,
  StartChangeRequestExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: StartChangeRequestExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StartChangeRequestExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartChangeRequestExecutionCommandInput,
    StartChangeRequestExecutionCommandOutput
  >;
  private serialize;
  private deserialize;
}
