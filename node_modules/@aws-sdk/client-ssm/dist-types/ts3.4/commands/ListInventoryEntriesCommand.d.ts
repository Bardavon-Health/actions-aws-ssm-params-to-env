import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListInventoryEntriesRequest,
  ListInventoryEntriesResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListInventoryEntriesCommandInput
  extends ListInventoryEntriesRequest {}
export interface ListInventoryEntriesCommandOutput
  extends ListInventoryEntriesResult,
    __MetadataBearer {}
export declare class ListInventoryEntriesCommand extends $Command<
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListInventoryEntriesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListInventoryEntriesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListInventoryEntriesCommandInput,
    ListInventoryEntriesCommandOutput
  >;
  private serialize;
  private deserialize;
}
