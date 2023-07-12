import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopAutomationExecutionCommand}.
 */
export interface StopAutomationExecutionCommandInput extends StopAutomationExecutionRequest {
}
/**
 * @public
 *
 * The output of {@link StopAutomationExecutionCommand}.
 */
export interface StopAutomationExecutionCommandOutput extends StopAutomationExecutionResult, __MetadataBearer {
}
/**
 * @public
 * <p>Stop an Automation that is currently running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StopAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StopAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // StopAutomationExecutionRequest
 *   AutomationExecutionId: "STRING_VALUE", // required
 *   Type: "Complete" || "Cancel",
 * };
 * const command = new StopAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAutomationExecutionCommandInput - {@link StopAutomationExecutionCommandInput}
 * @returns {@link StopAutomationExecutionCommandOutput}
 * @see {@link StopAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationExecutionNotFoundException} (client fault)
 *  <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAutomationStatusUpdateException} (client fault)
 *  <p>The specified update status operation isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class StopAutomationExecutionCommand extends $Command<StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: StopAutomationExecutionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: StopAutomationExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
