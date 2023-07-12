import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeMaintenanceWindowTargetsRequest,
  DescribeMaintenanceWindowTargetsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeMaintenanceWindowTargetsCommandInput
  extends DescribeMaintenanceWindowTargetsRequest {}
export interface DescribeMaintenanceWindowTargetsCommandOutput
  extends DescribeMaintenanceWindowTargetsResult,
    __MetadataBearer {}
export declare class DescribeMaintenanceWindowTargetsCommand extends $Command<
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeMaintenanceWindowTargetsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeMaintenanceWindowTargetsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeMaintenanceWindowTargetsCommandInput,
    DescribeMaintenanceWindowTargetsCommandOutput
  >;
  private serialize;
  private deserialize;
}
