import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribeInstancePatchStatesRequest, DescribeInstancePatchStatesResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancePatchStatesCommand}.
 */
export interface DescribeInstancePatchStatesCommandInput extends DescribeInstancePatchStatesRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeInstancePatchStatesCommand}.
 */
export interface DescribeInstancePatchStatesCommandOutput extends DescribeInstancePatchStatesResult, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves the high-level patch state of one or more managed nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeInstancePatchStatesRequest
 *   InstanceIds: [ // InstanceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInstancePatchStatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancePatchStatesResult
 * //   InstancePatchStates: [ // InstancePatchStateList
 * //     { // InstancePatchState
 * //       InstanceId: "STRING_VALUE", // required
 * //       PatchGroup: "STRING_VALUE", // required
 * //       BaselineId: "STRING_VALUE", // required
 * //       SnapshotId: "STRING_VALUE",
 * //       InstallOverrideList: "STRING_VALUE",
 * //       OwnerInformation: "STRING_VALUE",
 * //       InstalledCount: Number("int"),
 * //       InstalledOtherCount: Number("int"),
 * //       InstalledPendingRebootCount: Number("int"),
 * //       InstalledRejectedCount: Number("int"),
 * //       MissingCount: Number("int"),
 * //       FailedCount: Number("int"),
 * //       UnreportedNotApplicableCount: Number("int"),
 * //       NotApplicableCount: Number("int"),
 * //       OperationStartTime: new Date("TIMESTAMP"), // required
 * //       OperationEndTime: new Date("TIMESTAMP"), // required
 * //       Operation: "Scan" || "Install", // required
 * //       LastNoRebootInstallOperationTime: new Date("TIMESTAMP"),
 * //       RebootOption: "RebootIfNeeded" || "NoReboot",
 * //       CriticalNonCompliantCount: Number("int"),
 * //       SecurityNonCompliantCount: Number("int"),
 * //       OtherNonCompliantCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstancePatchStatesCommandInput - {@link DescribeInstancePatchStatesCommandInput}
 * @returns {@link DescribeInstancePatchStatesCommandOutput}
 * @see {@link DescribeInstancePatchStatesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesCommandOutput} for command's `response` shape.
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
export declare class DescribeInstancePatchStatesCommand extends $Command<DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstancePatchStatesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeInstancePatchStatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
