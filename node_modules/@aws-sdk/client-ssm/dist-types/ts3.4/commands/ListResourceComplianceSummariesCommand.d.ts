import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListResourceComplianceSummariesRequest,
  ListResourceComplianceSummariesResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListResourceComplianceSummariesCommandInput
  extends ListResourceComplianceSummariesRequest {}
export interface ListResourceComplianceSummariesCommandOutput
  extends ListResourceComplianceSummariesResult,
    __MetadataBearer {}
export declare class ListResourceComplianceSummariesCommand extends $Command<
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListResourceComplianceSummariesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListResourceComplianceSummariesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListResourceComplianceSummariesCommandInput,
    ListResourceComplianceSummariesCommandOutput
  >;
  private serialize;
  private deserialize;
}
