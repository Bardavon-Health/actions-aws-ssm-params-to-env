import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  RegisterTaskWithMaintenanceWindowRequest,
  RegisterTaskWithMaintenanceWindowResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface RegisterTaskWithMaintenanceWindowCommandInput
  extends RegisterTaskWithMaintenanceWindowRequest {}
export interface RegisterTaskWithMaintenanceWindowCommandOutput
  extends RegisterTaskWithMaintenanceWindowResult,
    __MetadataBearer {}
export declare class RegisterTaskWithMaintenanceWindowCommand extends $Command<
  RegisterTaskWithMaintenanceWindowCommandInput,
  RegisterTaskWithMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: RegisterTaskWithMaintenanceWindowCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RegisterTaskWithMaintenanceWindowCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterTaskWithMaintenanceWindowCommandInput,
    RegisterTaskWithMaintenanceWindowCommandOutput
  >;
  private serialize;
  private deserialize;
}
