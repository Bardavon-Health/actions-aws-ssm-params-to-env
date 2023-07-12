import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CancelCommandRequest, CancelCommandResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelCommandCommand}.
 */
export interface CancelCommandCommandInput extends CancelCommandRequest {
}
/**
 * @public
 *
 * The output of {@link CancelCommandCommand}.
 */
export interface CancelCommandCommandOutput extends CancelCommandResult, __MetadataBearer {
}
/**
 * @public
 * <p>Attempts to cancel the command specified by the Command ID. There is no guarantee that the
 *    command will be terminated and the underlying process stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CancelCommandCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CancelCommandCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CancelCommandRequest
 *   CommandId: "STRING_VALUE", // required
 *   InstanceIds: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CancelCommandCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelCommandCommandInput - {@link CancelCommandCommandInput}
 * @returns {@link CancelCommandCommandOutput}
 * @see {@link CancelCommandCommandInput} for command's `input` shape.
 * @see {@link CancelCommandCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DuplicateInstanceId} (client fault)
 *  <p>You can't specify a managed node ID in more than one association.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidCommandId} (client fault)
 *  <p>The specified command ID isn't valid. Verify the ID and try again.</p>
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
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class CancelCommandCommand extends $Command<CancelCommandCommandInput, CancelCommandCommandOutput, SSMClientResolvedConfig> {
    readonly input: CancelCommandCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: CancelCommandCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelCommandCommandInput, CancelCommandCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
