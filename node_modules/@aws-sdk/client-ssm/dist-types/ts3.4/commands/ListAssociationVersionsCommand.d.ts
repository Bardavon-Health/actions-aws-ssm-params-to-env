import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListAssociationVersionsRequest,
  ListAssociationVersionsResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ListAssociationVersionsCommandInput
  extends ListAssociationVersionsRequest {}
export interface ListAssociationVersionsCommandOutput
  extends ListAssociationVersionsResult,
    __MetadataBearer {}
export declare class ListAssociationVersionsCommand extends $Command<
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ListAssociationVersionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListAssociationVersionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListAssociationVersionsCommandInput,
    ListAssociationVersionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
