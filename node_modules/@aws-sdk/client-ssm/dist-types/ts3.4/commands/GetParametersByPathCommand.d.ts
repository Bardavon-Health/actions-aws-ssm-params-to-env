import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetParametersByPathRequest,
  GetParametersByPathResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetParametersByPathCommandInput
  extends GetParametersByPathRequest {}
export interface GetParametersByPathCommandOutput
  extends GetParametersByPathResult,
    __MetadataBearer {}
export declare class GetParametersByPathCommand extends $Command<
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetParametersByPathCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetParametersByPathCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParametersByPathCommandInput, GetParametersByPathCommandOutput>;
  private serialize;
  private deserialize;
}
