import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { GetParameterRequest, GetParameterResult } from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetParameterCommandInput extends GetParameterRequest {}
export interface GetParameterCommandOutput
  extends GetParameterResult,
    __MetadataBearer {}
export declare class GetParameterCommand extends $Command<
  GetParameterCommandInput,
  GetParameterCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetParameterCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetParameterCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParameterCommandInput, GetParameterCommandOutput>;
  private serialize;
  private deserialize;
}
