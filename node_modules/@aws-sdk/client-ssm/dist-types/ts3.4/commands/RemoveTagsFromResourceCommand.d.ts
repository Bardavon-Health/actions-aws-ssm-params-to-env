import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface RemoveTagsFromResourceCommandInput
  extends RemoveTagsFromResourceRequest {}
export interface RemoveTagsFromResourceCommandOutput
  extends RemoveTagsFromResourceResult,
    __MetadataBearer {}
export declare class RemoveTagsFromResourceCommand extends $Command<
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: RemoveTagsFromResourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RemoveTagsFromResourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RemoveTagsFromResourceCommandInput,
    RemoveTagsFromResourceCommandOutput
  >;
  private serialize;
  private deserialize;
}
