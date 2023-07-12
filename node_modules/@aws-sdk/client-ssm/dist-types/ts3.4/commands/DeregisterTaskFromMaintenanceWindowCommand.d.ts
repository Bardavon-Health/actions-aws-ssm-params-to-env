import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeregisterTaskFromMaintenanceWindowRequest,
  DeregisterTaskFromMaintenanceWindowResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeregisterTaskFromMaintenanceWindowCommandInput
  extends DeregisterTaskFromMaintenanceWindowRequest {}
export interface DeregisterTaskFromMaintenanceWindowCommandOutput
  extends DeregisterTaskFromMaintenanceWindowResult,
    __MetadataBearer {}
export declare class DeregisterTaskFromMaintenanceWindowCommand extends $Command<
  DeregisterTaskFromMaintenanceWindowCommandInput,
  DeregisterTaskFromMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeregisterTaskFromMaintenanceWindowCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeregisterTaskFromMaintenanceWindowCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeregisterTaskFromMaintenanceWindowCommandInput,
    DeregisterTaskFromMaintenanceWindowCommandOutput
  >;
  private serialize;
  private deserialize;
}
