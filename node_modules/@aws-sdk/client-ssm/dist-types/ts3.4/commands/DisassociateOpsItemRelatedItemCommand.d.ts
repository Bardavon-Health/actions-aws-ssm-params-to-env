import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DisassociateOpsItemRelatedItemRequest,
  DisassociateOpsItemRelatedItemResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DisassociateOpsItemRelatedItemCommandInput
  extends DisassociateOpsItemRelatedItemRequest {}
export interface DisassociateOpsItemRelatedItemCommandOutput
  extends DisassociateOpsItemRelatedItemResponse,
    __MetadataBearer {}
export declare class DisassociateOpsItemRelatedItemCommand extends $Command<
  DisassociateOpsItemRelatedItemCommandInput,
  DisassociateOpsItemRelatedItemCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DisassociateOpsItemRelatedItemCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DisassociateOpsItemRelatedItemCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateOpsItemRelatedItemCommandInput,
    DisassociateOpsItemRelatedItemCommandOutput
  >;
  private serialize;
  private deserialize;
}
