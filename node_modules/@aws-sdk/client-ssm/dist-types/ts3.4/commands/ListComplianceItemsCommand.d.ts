import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListComplianceItemsRequest,
  ListComplianceItemsResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListComplianceItemsCommandInput
  extends ListComplianceItemsRequest {}
export interface ListComplianceItemsCommandOutput
  extends ListComplianceItemsResult,
    __MetadataBearer {}
export declare class ListComplianceItemsCommand extends $Command<
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListComplianceItemsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListComplianceItemsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput>;
  private serialize;
  private deserialize;
}
