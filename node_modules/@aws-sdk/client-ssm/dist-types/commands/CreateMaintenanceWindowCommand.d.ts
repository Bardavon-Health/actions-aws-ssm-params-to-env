import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CreateMaintenanceWindowRequest, CreateMaintenanceWindowResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMaintenanceWindowCommand}.
 */
export interface CreateMaintenanceWindowCommandInput extends CreateMaintenanceWindowRequest {
}
/**
 * @public
 *
 * The output of {@link CreateMaintenanceWindowCommand}.
 */
export interface CreateMaintenanceWindowCommandOutput extends CreateMaintenanceWindowResult, __MetadataBearer {
}
/**
 * @public
 * <p>Creates a new maintenance window.</p>
 *          <note>
 *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
 *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
 *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
 *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
 *     after 5 PM.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreateMaintenanceWindowRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Schedule: "STRING_VALUE", // required
 *   ScheduleTimezone: "STRING_VALUE",
 *   ScheduleOffset: Number("int"),
 *   Duration: Number("int"), // required
 *   Cutoff: Number("int"), // required
 *   AllowUnassociatedTargets: true || false, // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // CreateMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMaintenanceWindowCommandInput - {@link CreateMaintenanceWindowCommandInput}
 * @returns {@link CreateMaintenanceWindowCommandOutput}
 * @see {@link CreateMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link CreateMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class CreateMaintenanceWindowCommand extends $Command<CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateMaintenanceWindowCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: CreateMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
