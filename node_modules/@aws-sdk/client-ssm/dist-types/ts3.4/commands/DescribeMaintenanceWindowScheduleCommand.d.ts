import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeMaintenanceWindowScheduleRequest,
  DescribeMaintenanceWindowScheduleResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeMaintenanceWindowScheduleCommandInput
  extends DescribeMaintenanceWindowScheduleRequest {}
export interface DescribeMaintenanceWindowScheduleCommandOutput
  extends DescribeMaintenanceWindowScheduleResult,
    __MetadataBearer {}
export declare class DescribeMaintenanceWindowScheduleCommand extends $Command<
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeMaintenanceWindowScheduleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeMaintenanceWindowScheduleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeMaintenanceWindowScheduleCommandInput,
    DescribeMaintenanceWindowScheduleCommandOutput
  >;
  private serialize;
  private deserialize;
}
