import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetConnectionStatusRequest,
  GetConnectionStatusResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetConnectionStatusCommandInput
  extends GetConnectionStatusRequest {}
export interface GetConnectionStatusCommandOutput
  extends GetConnectionStatusResponse,
    __MetadataBearer {}
export declare class GetConnectionStatusCommand extends $Command<
  GetConnectionStatusCommandInput,
  GetConnectionStatusCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetConnectionStatusCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetConnectionStatusCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput>;
  private serialize;
  private deserialize;
}
