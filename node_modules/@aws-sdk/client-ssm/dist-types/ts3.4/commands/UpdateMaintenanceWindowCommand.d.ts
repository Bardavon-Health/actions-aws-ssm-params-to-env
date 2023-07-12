import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateMaintenanceWindowRequest,
  UpdateMaintenanceWindowResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateMaintenanceWindowCommandInput
  extends UpdateMaintenanceWindowRequest {}
export interface UpdateMaintenanceWindowCommandOutput
  extends UpdateMaintenanceWindowResult,
    __MetadataBearer {}
export declare class UpdateMaintenanceWindowCommand extends $Command<
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateMaintenanceWindowCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateMaintenanceWindowCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateMaintenanceWindowCommandInput,
    UpdateMaintenanceWindowCommandOutput
  >;
  private serialize;
  private deserialize;
}
