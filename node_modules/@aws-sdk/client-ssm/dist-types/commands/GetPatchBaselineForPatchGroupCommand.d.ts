import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetPatchBaselineForPatchGroupRequest, GetPatchBaselineForPatchGroupResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPatchBaselineForPatchGroupCommand}.
 */
export interface GetPatchBaselineForPatchGroupCommandInput extends GetPatchBaselineForPatchGroupRequest {
}
/**
 * @public
 *
 * The output of {@link GetPatchBaselineForPatchGroupCommand}.
 */
export interface GetPatchBaselineForPatchGroupCommandOutput extends GetPatchBaselineForPatchGroupResult, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves the patch baseline that should be used for the specified patch group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetPatchBaselineForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetPatchBaselineForPatchGroupRequest
 *   PatchGroup: "STRING_VALUE", // required
 *   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * };
 * const command = new GetPatchBaselineForPatchGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetPatchBaselineForPatchGroupResult
 * //   BaselineId: "STRING_VALUE",
 * //   PatchGroup: "STRING_VALUE",
 * //   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * // };
 *
 * ```
 *
 * @param GetPatchBaselineForPatchGroupCommandInput - {@link GetPatchBaselineForPatchGroupCommandInput}
 * @returns {@link GetPatchBaselineForPatchGroupCommandOutput}
 * @see {@link GetPatchBaselineForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link GetPatchBaselineForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class GetPatchBaselineForPatchGroupCommand extends $Command<GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetPatchBaselineForPatchGroupCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetPatchBaselineForPatchGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
