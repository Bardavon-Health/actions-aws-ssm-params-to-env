import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribePatchPropertiesRequest,
  DescribePatchPropertiesResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DescribePatchPropertiesCommandInput
  extends DescribePatchPropertiesRequest {}
export interface DescribePatchPropertiesCommandOutput
  extends DescribePatchPropertiesResult,
    __MetadataBearer {}
export declare class DescribePatchPropertiesCommand extends $Command<
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DescribePatchPropertiesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribePatchPropertiesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribePatchPropertiesCommandInput,
    DescribePatchPropertiesCommandOutput
  >;
  private serialize;
  private deserialize;
}
