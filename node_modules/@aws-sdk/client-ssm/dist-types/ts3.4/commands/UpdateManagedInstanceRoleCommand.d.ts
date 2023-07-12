import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateManagedInstanceRoleRequest,
  UpdateManagedInstanceRoleResult,
} from "../models/models_2";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface UpdateManagedInstanceRoleCommandInput
  extends UpdateManagedInstanceRoleRequest {}
export interface UpdateManagedInstanceRoleCommandOutput
  extends UpdateManagedInstanceRoleResult,
    __MetadataBearer {}
export declare class UpdateManagedInstanceRoleCommand extends $Command<
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: UpdateManagedInstanceRoleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateManagedInstanceRoleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateManagedInstanceRoleCommandInput,
    UpdateManagedInstanceRoleCommandOutput
  >;
  private serialize;
  private deserialize;
}
