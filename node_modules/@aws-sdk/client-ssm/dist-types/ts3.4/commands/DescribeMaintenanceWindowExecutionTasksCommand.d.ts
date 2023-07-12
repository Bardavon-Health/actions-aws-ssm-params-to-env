import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeMaintenanceWindowExecutionTasksRequest,
  DescribeMaintenanceWindowExecutionTasksResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeMaintenanceWindowExecutionTasksCommandInput
  extends DescribeMaintenanceWindowExecutionTasksRequest {}
export interface DescribeMaintenanceWindowExecutionTasksCommandOutput
  extends DescribeMaintenanceWindowExecutionTasksResult,
    __MetadataBearer {}
export declare class DescribeMaintenanceWindowExecutionTasksCommand extends $Command<
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeMaintenanceWindowExecutionTasksCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeMaintenanceWindowExecutionTasksCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeMaintenanceWindowExecutionTasksCommandInput,
    DescribeMaintenanceWindowExecutionTasksCommandOutput
  >;
  private serialize;
  private deserialize;
}
