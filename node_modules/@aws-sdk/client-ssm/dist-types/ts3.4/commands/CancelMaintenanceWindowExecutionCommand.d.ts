import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CancelMaintenanceWindowExecutionRequest,
  CancelMaintenanceWindowExecutionResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface CancelMaintenanceWindowExecutionCommandInput
  extends CancelMaintenanceWindowExecutionRequest {}
export interface CancelMaintenanceWindowExecutionCommandOutput
  extends CancelMaintenanceWindowExecutionResult,
    __MetadataBearer {}
export declare class CancelMaintenanceWindowExecutionCommand extends $Command<
  CancelMaintenanceWindowExecutionCommandInput,
  CancelMaintenanceWindowExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: CancelMaintenanceWindowExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CancelMaintenanceWindowExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CancelMaintenanceWindowExecutionCommandInput,
    CancelMaintenanceWindowExecutionCommandOutput
  >;
  private serialize;
  private deserialize;
}
