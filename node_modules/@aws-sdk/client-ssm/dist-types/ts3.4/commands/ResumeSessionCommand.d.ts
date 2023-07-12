import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ResumeSessionRequest,
  ResumeSessionResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface ResumeSessionCommandInput extends ResumeSessionRequest {}
export interface ResumeSessionCommandOutput
  extends ResumeSessionResponse,
    __MetadataBearer {}
export declare class ResumeSessionCommand extends $Command<
  ResumeSessionCommandInput,
  ResumeSessionCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: ResumeSessionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ResumeSessionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResumeSessionCommandInput, ResumeSessionCommandOutput>;
  private serialize;
  private deserialize;
}
