import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateMaintenanceWindowTargetRequest,
  UpdateMaintenanceWindowTargetResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateMaintenanceWindowTargetCommandInput
  extends UpdateMaintenanceWindowTargetRequest {}
export interface UpdateMaintenanceWindowTargetCommandOutput
  extends UpdateMaintenanceWindowTargetResult,
    __MetadataBearer {}
export declare class UpdateMaintenanceWindowTargetCommand extends $Command<
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateMaintenanceWindowTargetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateMaintenanceWindowTargetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateMaintenanceWindowTargetCommandInput,
    UpdateMaintenanceWindowTargetCommandOutput
  >;
  private serialize;
  private deserialize;
}
