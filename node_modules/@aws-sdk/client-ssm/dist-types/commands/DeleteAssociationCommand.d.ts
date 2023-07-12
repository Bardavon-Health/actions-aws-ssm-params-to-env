import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteAssociationRequest, DeleteAssociationResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssociationCommand}.
 */
export interface DeleteAssociationCommandInput extends DeleteAssociationRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteAssociationCommand}.
 */
export interface DeleteAssociationCommandOutput extends DeleteAssociationResult, __MetadataBearer {
}
/**
 * @public
 * <p>Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed
 *    node. If you created the association by using the <code>Targets</code> parameter, then you must
 *    delete the association by using the association ID.</p>
 *          <p>When you disassociate a document from a managed node, it doesn't change the configuration of
 *    the node. To change the configuration state of a managed node after you disassociate a document,
 *    you must create a new document with the desired configuration and associate it with the
 *    node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteAssociationRequest
 *   Name: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   AssociationId: "STRING_VALUE",
 * };
 * const command = new DeleteAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssociationCommandInput - {@link DeleteAssociationCommandInput}
 * @returns {@link DeleteAssociationCommandOutput}
 * @see {@link DeleteAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DeleteAssociationCommand extends $Command<DeleteAssociationCommandInput, DeleteAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteAssociationCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssociationCommandInput, DeleteAssociationCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
