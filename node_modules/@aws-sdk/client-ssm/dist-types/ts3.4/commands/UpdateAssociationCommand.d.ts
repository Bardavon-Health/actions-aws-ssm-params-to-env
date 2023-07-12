import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateAssociationRequest,
  UpdateAssociationResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateAssociationCommandInput
  extends UpdateAssociationRequest {}
export interface UpdateAssociationCommandOutput
  extends UpdateAssociationResult,
    __MetadataBearer {}
export declare class UpdateAssociationCommand extends $Command<
  UpdateAssociationCommandInput,
  UpdateAssociationCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateAssociationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateAssociationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssociationCommandInput, UpdateAssociationCommandOutput>;
  private serialize;
  private deserialize;
}
