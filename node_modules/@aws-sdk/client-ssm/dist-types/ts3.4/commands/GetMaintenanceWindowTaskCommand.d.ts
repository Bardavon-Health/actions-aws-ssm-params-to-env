import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetMaintenanceWindowTaskRequest,
  GetMaintenanceWindowTaskResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetMaintenanceWindowTaskCommandInput
  extends GetMaintenanceWindowTaskRequest {}
export interface GetMaintenanceWindowTaskCommandOutput
  extends GetMaintenanceWindowTaskResult,
    __MetadataBearer {}
export declare class GetMaintenanceWindowTaskCommand extends $Command<
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetMaintenanceWindowTaskCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetMaintenanceWindowTaskCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetMaintenanceWindowTaskCommandInput,
    GetMaintenanceWindowTaskCommandOutput
  >;
  private serialize;
  private deserialize;
}
