import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  PutComplianceItemsRequest,
  PutComplianceItemsResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface PutComplianceItemsCommandInput
  extends PutComplianceItemsRequest {}
export interface PutComplianceItemsCommandOutput
  extends PutComplianceItemsResult,
    __MetadataBearer {}
export declare class PutComplianceItemsCommand extends $Command<
  PutComplianceItemsCommandInput,
  PutComplianceItemsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: PutComplianceItemsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutComplianceItemsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput>;
  private serialize;
  private deserialize;
}
