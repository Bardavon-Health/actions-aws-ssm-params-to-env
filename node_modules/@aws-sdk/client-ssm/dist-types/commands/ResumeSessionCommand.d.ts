import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { ResumeSessionRequest, ResumeSessionResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResumeSessionCommand}.
 */
export interface ResumeSessionCommandInput extends ResumeSessionRequest {
}
/**
 * @public
 *
 * The output of {@link ResumeSessionCommand}.
 */
export interface ResumeSessionCommandOutput extends ResumeSessionResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Reconnects a session to a managed node after it has been disconnected. Connections can be
 *    resumed for disconnected sessions, but not terminated sessions.</p>
 *          <note>
 *             <p>This command is primarily for use by client machines to automatically reconnect during
 *     intermittent network issues. It isn't intended for any other use.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResumeSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResumeSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ResumeSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new ResumeSessionCommand(input);
 * const response = await client.send(command);
 * // { // ResumeSessionResponse
 * //   SessionId: "STRING_VALUE",
 * //   TokenValue: "STRING_VALUE",
 * //   StreamUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResumeSessionCommandInput - {@link ResumeSessionCommandInput}
 * @returns {@link ResumeSessionCommandOutput}
 * @see {@link ResumeSessionCommandInput} for command's `input` shape.
 * @see {@link ResumeSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class ResumeSessionCommand extends $Command<ResumeSessionCommandInput, ResumeSessionCommandOutput, SSMClientResolvedConfig> {
    readonly input: ResumeSessionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ResumeSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeSessionCommandInput, ResumeSessionCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
