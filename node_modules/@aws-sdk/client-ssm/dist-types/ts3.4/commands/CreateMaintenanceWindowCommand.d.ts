import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateMaintenanceWindowRequest,
  CreateMaintenanceWindowResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CreateMaintenanceWindowCommandInput
  extends CreateMaintenanceWindowRequest {}
export interface CreateMaintenanceWindowCommandOutput
  extends CreateMaintenanceWindowResult,
    __MetadataBearer {}
export declare class CreateMaintenanceWindowCommand extends $Command<
  CreateMaintenanceWindowCommandInput,
  CreateMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CreateMaintenanceWindowCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateMaintenanceWindowCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateMaintenanceWindowCommandInput,
    CreateMaintenanceWindowCommandOutput
  >;
  private serialize;
  private deserialize;
}
