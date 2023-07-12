import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribePatchGroupStateRequest,
  DescribePatchGroupStateResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribePatchGroupStateCommandInput
  extends DescribePatchGroupStateRequest {}
export interface DescribePatchGroupStateCommandOutput
  extends DescribePatchGroupStateResult,
    __MetadataBearer {}
export declare class DescribePatchGroupStateCommand extends $Command<
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribePatchGroupStateCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribePatchGroupStateCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribePatchGroupStateCommandInput,
    DescribePatchGroupStateCommandOutput
  >;
  private serialize;
  private deserialize;
}
