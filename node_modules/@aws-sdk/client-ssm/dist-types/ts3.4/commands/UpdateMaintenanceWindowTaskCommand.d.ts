import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateMaintenanceWindowTaskRequest,
  UpdateMaintenanceWindowTaskResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateMaintenanceWindowTaskCommandInput
  extends UpdateMaintenanceWindowTaskRequest {}
export interface UpdateMaintenanceWindowTaskCommandOutput
  extends UpdateMaintenanceWindowTaskResult,
    __MetadataBearer {}
export declare class UpdateMaintenanceWindowTaskCommand extends $Command<
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateMaintenanceWindowTaskCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateMaintenanceWindowTaskCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateMaintenanceWindowTaskCommandInput,
    UpdateMaintenanceWindowTaskCommandOutput
  >;
  private serialize;
  private deserialize;
}
