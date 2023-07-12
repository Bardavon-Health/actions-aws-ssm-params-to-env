import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribeMaintenanceWindowScheduleRequest, DescribeMaintenanceWindowScheduleResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowScheduleCommand}.
 */
export interface DescribeMaintenanceWindowScheduleCommandInput extends DescribeMaintenanceWindowScheduleRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowScheduleCommand}.
 */
export interface DescribeMaintenanceWindowScheduleCommandOutput extends DescribeMaintenanceWindowScheduleResult, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves information about upcoming executions of a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowScheduleCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowScheduleCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowScheduleRequest
 *   WindowId: "STRING_VALUE",
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ResourceType: "INSTANCE" || "RESOURCE_GROUP",
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowScheduleResult
 * //   ScheduledWindowExecutions: [ // ScheduledWindowExecutionList
 * //     { // ScheduledWindowExecution
 * //       WindowId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ExecutionTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowScheduleCommandInput - {@link DescribeMaintenanceWindowScheduleCommandInput}
 * @returns {@link DescribeMaintenanceWindowScheduleCommandOutput}
 * @see {@link DescribeMaintenanceWindowScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowScheduleCommandOutput} for command's `response` shape.
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
export declare class DescribeMaintenanceWindowScheduleCommand extends $Command<DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowScheduleCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeMaintenanceWindowScheduleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
