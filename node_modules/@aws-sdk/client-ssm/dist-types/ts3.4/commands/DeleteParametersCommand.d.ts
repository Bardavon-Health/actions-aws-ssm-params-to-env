import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteParametersRequest,
  DeleteParametersResult,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface DeleteParametersCommandInput extends DeleteParametersRequest {}
export interface DeleteParametersCommandOutput
  extends DeleteParametersResult,
    __MetadataBearer {}
export declare class DeleteParametersCommand extends $Command<
  DeleteParametersCommandInput,
  DeleteParametersCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: DeleteParametersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteParametersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteParametersCommandInput, DeleteParametersCommandOutput>;
  private serialize;
  private deserialize;
}
