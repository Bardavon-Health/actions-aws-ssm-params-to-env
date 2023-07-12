import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetCalendarStateRequest,
  GetCalendarStateResponse,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetCalendarStateCommandInput extends GetCalendarStateRequest {}
export interface GetCalendarStateCommandOutput
  extends GetCalendarStateResponse,
    __MetadataBearer {}
export declare class GetCalendarStateCommand extends $Command<
  GetCalendarStateCommandInput,
  GetCalendarStateCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetCalendarStateCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetCalendarStateCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCalendarStateCommandInput, GetCalendarStateCommandOutput>;
  private serialize;
  private deserialize;
}
