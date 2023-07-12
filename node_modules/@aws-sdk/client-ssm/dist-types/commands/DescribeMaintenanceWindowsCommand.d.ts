import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribeMaintenanceWindowsRequest, DescribeMaintenanceWindowsResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowsCommand}.
 */
export interface DescribeMaintenanceWindowsCommandInput extends DescribeMaintenanceWindowsRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowsCommand}.
 */
export interface DescribeMaintenanceWindowsCommandOutput extends DescribeMaintenanceWindowsResult, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves the maintenance windows in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowsRequest
 *   Filters: [ // MaintenanceWindowFilterList
 *     { // MaintenanceWindowFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // MaintenanceWindowFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowsResult
 * //   WindowIdentities: [ // MaintenanceWindowIdentityList
 * //     { // MaintenanceWindowIdentity
 * //       WindowId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       Duration: Number("int"),
 * //       Cutoff: Number("int"),
 * //       Schedule: "STRING_VALUE",
 * //       ScheduleTimezone: "STRING_VALUE",
 * //       ScheduleOffset: Number("int"),
 * //       EndDate: "STRING_VALUE",
 * //       StartDate: "STRING_VALUE",
 * //       NextExecutionTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowsCommandInput - {@link DescribeMaintenanceWindowsCommandInput}
 * @returns {@link DescribeMaintenanceWindowsCommandOutput}
 * @see {@link DescribeMaintenanceWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DescribeMaintenanceWindowsCommand extends $Command<DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeMaintenanceWindowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
