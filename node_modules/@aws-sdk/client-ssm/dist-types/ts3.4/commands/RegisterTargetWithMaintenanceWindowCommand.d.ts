import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  RegisterTargetWithMaintenanceWindowRequest,
  RegisterTargetWithMaintenanceWindowResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface RegisterTargetWithMaintenanceWindowCommandInput
  extends RegisterTargetWithMaintenanceWindowRequest {}
export interface RegisterTargetWithMaintenanceWindowCommandOutput
  extends RegisterTargetWithMaintenanceWindowResult,
    __MetadataBearer {}
export declare class RegisterTargetWithMaintenanceWindowCommand extends $Command<
  RegisterTargetWithMaintenanceWindowCommandInput,
  RegisterTargetWithMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: RegisterTargetWithMaintenanceWindowCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RegisterTargetWithMaintenanceWindowCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterTargetWithMaintenanceWindowCommandInput,
    RegisterTargetWithMaintenanceWindowCommandOutput
  >;
  private serialize;
  private deserialize;
}
