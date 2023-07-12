import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteOpsMetadataRequest, DeleteOpsMetadataResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteOpsMetadataCommand}.
 */
export interface DeleteOpsMetadataCommandInput extends DeleteOpsMetadataRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteOpsMetadataCommand}.
 */
export interface DeleteOpsMetadataCommandOutput extends DeleteOpsMetadataResult, __MetadataBearer {
}
/**
 * @public
 * <p>Delete OpsMetadata related to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteOpsMetadataRequest
 *   OpsMetadataArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOpsMetadataCommandInput - {@link DeleteOpsMetadataCommandInput}
 * @returns {@link DeleteOpsMetadataCommandOutput}
 * @see {@link DeleteOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataNotFoundException} (client fault)
 *  <p>The OpsMetadata object doesn't exist. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DeleteOpsMetadataCommand extends $Command<DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteOpsMetadataCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteOpsMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
