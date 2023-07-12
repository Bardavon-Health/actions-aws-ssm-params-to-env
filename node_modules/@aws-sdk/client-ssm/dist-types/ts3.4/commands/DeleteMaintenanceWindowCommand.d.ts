import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteMaintenanceWindowRequest,
  DeleteMaintenanceWindowResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeleteMaintenanceWindowCommandInput
  extends DeleteMaintenanceWindowRequest {}
export interface DeleteMaintenanceWindowCommandOutput
  extends DeleteMaintenanceWindowResult,
    __MetadataBearer {}
export declare class DeleteMaintenanceWindowCommand extends $Command<
  DeleteMaintenanceWindowCommandInput,
  DeleteMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeleteMaintenanceWindowCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteMaintenanceWindowCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteMaintenanceWindowCommandInput,
    DeleteMaintenanceWindowCommandOutput
  >;
  private serialize;
  private deserialize;
}
