import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteResourceDataSyncRequest, DeleteResourceDataSyncResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourceDataSyncCommand}.
 */
export interface DeleteResourceDataSyncCommandInput extends DeleteResourceDataSyncRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteResourceDataSyncCommand}.
 */
export interface DeleteResourceDataSyncCommandOutput extends DeleteResourceDataSyncResult, __MetadataBearer {
}
/**
 * @public
 * <p>Deletes a resource data sync configuration. After the configuration is deleted, changes to
 *    data on managed nodes are no longer synced to or from the target. Deleting a sync configuration
 *    doesn't delete data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteResourceDataSyncRequest
 *   SyncName: "STRING_VALUE", // required
 *   SyncType: "STRING_VALUE",
 * };
 * const command = new DeleteResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceDataSyncCommandInput - {@link DeleteResourceDataSyncCommandInput}
 * @returns {@link DeleteResourceDataSyncCommandOutput}
 * @see {@link DeleteResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceDataSyncInvalidConfigurationException} (client fault)
 *  <p>The specified sync configuration is invalid.</p>
 *
 * @throws {@link ResourceDataSyncNotFoundException} (client fault)
 *  <p>The specified sync name wasn't found.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DeleteResourceDataSyncCommand extends $Command<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteResourceDataSyncCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteResourceDataSyncCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
