import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  DescribeMaintenanceWindowExecutionTaskInvocationsResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput
  extends DescribeMaintenanceWindowExecutionTaskInvocationsRequest {}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput
  extends DescribeMaintenanceWindowExecutionTaskInvocationsResult,
    __MetadataBearer {}
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsCommand extends $Command<
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(
    input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput
  );
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput
  >;
  private serialize;
  private deserialize;
}
