import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListOpsItemRelatedItemsRequest,
  ListOpsItemRelatedItemsResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListOpsItemRelatedItemsCommandInput
  extends ListOpsItemRelatedItemsRequest {}
export interface ListOpsItemRelatedItemsCommandOutput
  extends ListOpsItemRelatedItemsResponse,
    __MetadataBearer {}
export declare class ListOpsItemRelatedItemsCommand extends $Command<
  ListOpsItemRelatedItemsCommandInput,
  ListOpsItemRelatedItemsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListOpsItemRelatedItemsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListOpsItemRelatedItemsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListOpsItemRelatedItemsCommandInput,
    ListOpsItemRelatedItemsCommandOutput
  >;
  private serialize;
  private deserialize;
}
