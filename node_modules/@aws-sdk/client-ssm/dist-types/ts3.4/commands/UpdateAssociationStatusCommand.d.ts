import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateAssociationStatusRequest,
  UpdateAssociationStatusResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateAssociationStatusCommandInput
  extends UpdateAssociationStatusRequest {}
export interface UpdateAssociationStatusCommandOutput
  extends UpdateAssociationStatusResult,
    __MetadataBearer {}
export declare class UpdateAssociationStatusCommand extends $Command<
  UpdateAssociationStatusCommandInput,
  UpdateAssociationStatusCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateAssociationStatusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateAssociationStatusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateAssociationStatusCommandInput,
    UpdateAssociationStatusCommandOutput
  >;
  private serialize;
  private deserialize;
}
