import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListAssociationsRequest,
  ListAssociationsResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListAssociationsCommandInput extends ListAssociationsRequest {}
export interface ListAssociationsCommandOutput
  extends ListAssociationsResult,
    __MetadataBearer {}
export declare class ListAssociationsCommand extends $Command<
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListAssociationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListAssociationsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociationsCommandInput, ListAssociationsCommandOutput>;
  private serialize;
  private deserialize;
}
