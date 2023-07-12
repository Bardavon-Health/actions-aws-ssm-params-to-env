import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribeMaintenanceWindowsForTargetRequest, DescribeMaintenanceWindowsForTargetResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowsForTargetCommand}.
 */
export interface DescribeMaintenanceWindowsForTargetCommandInput extends DescribeMaintenanceWindowsForTargetRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowsForTargetCommand}.
 */
export interface DescribeMaintenanceWindowsForTargetCommandOutput extends DescribeMaintenanceWindowsForTargetResult, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves information about the maintenance window targets or tasks that a managed node is
 *    associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsForTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsForTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowsForTargetRequest
 *   Targets: [ // Targets // required
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ResourceType: "INSTANCE" || "RESOURCE_GROUP", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowsForTargetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowsForTargetResult
 * //   WindowIdentities: [ // MaintenanceWindowsForTargetList
 * //     { // MaintenanceWindowIdentityForTarget
 * //       WindowId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowsForTargetCommandInput - {@link DescribeMaintenanceWindowsForTargetCommandInput}
 * @returns {@link DescribeMaintenanceWindowsForTargetCommandOutput}
 * @see {@link DescribeMaintenanceWindowsForTargetCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsForTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DescribeMaintenanceWindowsForTargetCommand extends $Command<DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowsForTargetCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeMaintenanceWindowsForTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
