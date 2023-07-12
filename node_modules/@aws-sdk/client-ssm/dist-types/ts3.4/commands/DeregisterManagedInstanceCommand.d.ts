import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeregisterManagedInstanceRequest,
  DeregisterManagedInstanceResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeregisterManagedInstanceCommandInput
  extends DeregisterManagedInstanceRequest {}
export interface DeregisterManagedInstanceCommandOutput
  extends DeregisterManagedInstanceResult,
    __MetadataBearer {}
export declare class DeregisterManagedInstanceCommand extends $Command<
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeregisterManagedInstanceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeregisterManagedInstanceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeregisterManagedInstanceCommandInput,
    DeregisterManagedInstanceCommandOutput
  >;
  private serialize;
  private deserialize;
}
