import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface PutResourcePolicyCommandInput
  extends PutResourcePolicyRequest {}
export interface PutResourcePolicyCommandOutput
  extends PutResourcePolicyResponse,
    __MetadataBearer {}
export declare class PutResourcePolicyCommand extends $Command<
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: PutResourcePolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutResourcePolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>;
  private serialize;
  private deserialize;
}
