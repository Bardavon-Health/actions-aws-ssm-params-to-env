import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeleteResourcePolicyCommandInput
  extends DeleteResourcePolicyRequest {}
export interface DeleteResourcePolicyCommandOutput
  extends DeleteResourcePolicyResponse,
    __MetadataBearer {}
export declare class DeleteResourcePolicyCommand extends $Command<
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeleteResourcePolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteResourcePolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteResourcePolicyCommandInput,
    DeleteResourcePolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
