import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandInput extends DescribePatchGroupStateRequest {
}
/**
 * @public
 *
 * The output of {@link DescribePatchGroupStateCommand}.
 */
export interface DescribePatchGroupStateCommandOutput extends DescribePatchGroupStateResult, __MetadataBearer {
}
/**
 * @public
 * <p>Returns high-level aggregated patch compliance state information for a patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupStateCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribePatchGroupStateRequest
 *   PatchGroup: "STRING_VALUE", // required
 * };
 * const command = new DescribePatchGroupStateCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchGroupStateResult
 * //   Instances: Number("int"),
 * //   InstancesWithInstalledPatches: Number("int"),
 * //   InstancesWithInstalledOtherPatches: Number("int"),
 * //   InstancesWithInstalledPendingRebootPatches: Number("int"),
 * //   InstancesWithInstalledRejectedPatches: Number("int"),
 * //   InstancesWithMissingPatches: Number("int"),
 * //   InstancesWithFailedPatches: Number("int"),
 * //   InstancesWithNotApplicablePatches: Number("int"),
 * //   InstancesWithUnreportedNotApplicablePatches: Number("int"),
 * //   InstancesWithCriticalNonCompliantPatches: Number("int"),
 * //   InstancesWithSecurityNonCompliantPatches: Number("int"),
 * //   InstancesWithOtherNonCompliantPatches: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribePatchGroupStateCommandInput - {@link DescribePatchGroupStateCommandInput}
 * @returns {@link DescribePatchGroupStateCommandOutput}
 * @see {@link DescribePatchGroupStateCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupStateCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DescribePatchGroupStateCommand extends $Command<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchGroupStateCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribePatchGroupStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
