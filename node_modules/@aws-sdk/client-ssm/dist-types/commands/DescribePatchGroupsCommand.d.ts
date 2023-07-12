import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribePatchGroupsRequest, DescribePatchGroupsResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePatchGroupsCommand}.
 */
export interface DescribePatchGroupsCommandInput extends DescribePatchGroupsRequest {
}
/**
 * @public
 *
 * The output of {@link DescribePatchGroupsCommand}.
 */
export interface DescribePatchGroupsCommandOutput extends DescribePatchGroupsResult, __MetadataBearer {
}
/**
 * @public
 * <p>Lists all patch groups that have been registered with patch baselines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribePatchGroupsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribePatchGroupsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribePatchGroupsRequest
 *   MaxResults: Number("int"),
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePatchGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePatchGroupsResult
 * //   Mappings: [ // PatchGroupPatchBaselineMappingList
 * //     { // PatchGroupPatchBaselineMapping
 * //       PatchGroup: "STRING_VALUE",
 * //       BaselineIdentity: { // PatchBaselineIdentity
 * //         BaselineId: "STRING_VALUE",
 * //         BaselineName: "STRING_VALUE",
 * //         OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * //         BaselineDescription: "STRING_VALUE",
 * //         DefaultBaseline: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePatchGroupsCommandInput - {@link DescribePatchGroupsCommandInput}
 * @returns {@link DescribePatchGroupsCommandOutput}
 * @see {@link DescribePatchGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribePatchGroupsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DescribePatchGroupsCommand extends $Command<DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchGroupsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribePatchGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
