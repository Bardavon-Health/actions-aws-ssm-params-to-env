import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetMaintenanceWindowExecutionTaskRequest,
  GetMaintenanceWindowExecutionTaskResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetMaintenanceWindowExecutionTaskCommandInput
  extends GetMaintenanceWindowExecutionTaskRequest {}
export interface GetMaintenanceWindowExecutionTaskCommandOutput
  extends GetMaintenanceWindowExecutionTaskResult,
    __MetadataBearer {}
export declare class GetMaintenanceWindowExecutionTaskCommand extends $Command<
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetMaintenanceWindowExecutionTaskCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetMaintenanceWindowExecutionTaskCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetMaintenanceWindowExecutionTaskCommandInput,
    GetMaintenanceWindowExecutionTaskCommandOutput
  >;
  private serialize;
  private deserialize;
}
