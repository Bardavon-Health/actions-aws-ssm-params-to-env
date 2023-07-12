import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetMaintenanceWindowRequest,
  GetMaintenanceWindowResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetMaintenanceWindowCommandInput
  extends GetMaintenanceWindowRequest {}
export interface GetMaintenanceWindowCommandOutput
  extends GetMaintenanceWindowResult,
    __MetadataBearer {}
export declare class GetMaintenanceWindowCommand extends $Command<
  GetMaintenanceWindowCommandInput,
  GetMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetMaintenanceWindowCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetMaintenanceWindowCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetMaintenanceWindowCommandInput,
    GetMaintenanceWindowCommandOutput
  >;
  private serialize;
  private deserialize;
}
