import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetInventorySchemaRequest,
  GetInventorySchemaResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetInventorySchemaCommandInput
  extends GetInventorySchemaRequest {}
export interface GetInventorySchemaCommandOutput
  extends GetInventorySchemaResult,
    __MetadataBearer {}
export declare class GetInventorySchemaCommand extends $Command<
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetInventorySchemaCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetInventorySchemaCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput>;
  private serialize;
  private deserialize;
}
