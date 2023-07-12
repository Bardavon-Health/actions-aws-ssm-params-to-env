import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDeployablePatchSnapshotForInstanceResult,
} from "../models/models_1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig,
} from "../SSMClient";
export { __MetadataBearer, $Command };
export interface GetDeployablePatchSnapshotForInstanceCommandInput
  extends GetDeployablePatchSnapshotForInstanceRequest {}
export interface GetDeployablePatchSnapshotForInstanceCommandOutput
  extends GetDeployablePatchSnapshotForInstanceResult,
    __MetadataBearer {}
export declare class GetDeployablePatchSnapshotForInstanceCommand extends $Command<
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
  SSMClientResolvedConfig
> {
  readonly input: GetDeployablePatchSnapshotForInstanceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetDeployablePatchSnapshotForInstanceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetDeployablePatchSnapshotForInstanceCommandInput,
    GetDeployablePatchSnapshotForInstanceCommandOutput
  >;
  private serialize;
  private deserialize;
}
