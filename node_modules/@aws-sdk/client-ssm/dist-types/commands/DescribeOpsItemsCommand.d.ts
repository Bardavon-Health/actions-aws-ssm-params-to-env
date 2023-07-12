import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribeOpsItemsRequest, DescribeOpsItemsResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOpsItemsCommand}.
 */
export interface DescribeOpsItemsCommandInput extends DescribeOpsItemsRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeOpsItemsCommand}.
 */
export interface DescribeOpsItemsCommandOutput extends DescribeOpsItemsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeOpsItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeOpsItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeOpsItemsRequest
 *   OpsItemFilters: [ // OpsItemFilters
 *     { // OpsItemFilter
 *       Key: "Status" || "CreatedBy" || "Source" || "Priority" || "Title" || "OpsItemId" || "CreatedTime" || "LastModifiedTime" || "ActualStartTime" || "ActualEndTime" || "PlannedStartTime" || "PlannedEndTime" || "OperationalData" || "OperationalDataKey" || "OperationalDataValue" || "ResourceId" || "AutomationId" || "Category" || "Severity" || "OpsItemType" || "ChangeRequestByRequesterArn" || "ChangeRequestByRequesterName" || "ChangeRequestByApproverArn" || "ChangeRequestByApproverName" || "ChangeRequestByTemplate" || "ChangeRequestByTargetsResourceGroup" || "InsightByType" || "AccountId", // required
 *       Values: [ // OpsItemFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equal" || "Contains" || "GreaterThan" || "LessThan", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOpsItemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOpsItemsResponse
 * //   NextToken: "STRING_VALUE",
 * //   OpsItemSummaries: [ // OpsItemSummaries
 * //     { // OpsItemSummary
 * //       CreatedBy: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       Priority: Number("int"),
 * //       Source: "STRING_VALUE",
 * //       Status: "Open" || "InProgress" || "Resolved" || "Pending" || "TimedOut" || "Cancelling" || "Cancelled" || "Failed" || "CompletedWithSuccess" || "CompletedWithFailure" || "Scheduled" || "RunbookInProgress" || "PendingChangeCalendarOverride" || "ChangeCalendarOverrideApproved" || "ChangeCalendarOverrideRejected" || "PendingApproval" || "Approved" || "Rejected" || "Closed",
 * //       OpsItemId: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       OperationalData: { // OpsItemOperationalData
 * //         "<keys>": { // OpsItemDataValue
 * //           Value: "STRING_VALUE",
 * //           Type: "SearchableString" || "String",
 * //         },
 * //       },
 * //       Category: "STRING_VALUE",
 * //       Severity: "STRING_VALUE",
 * //       OpsItemType: "STRING_VALUE",
 * //       ActualStartTime: new Date("TIMESTAMP"),
 * //       ActualEndTime: new Date("TIMESTAMP"),
 * //       PlannedStartTime: new Date("TIMESTAMP"),
 * //       PlannedEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOpsItemsCommandInput - {@link DescribeOpsItemsCommandInput}
 * @returns {@link DescribeOpsItemsCommandOutput}
 * @see {@link DescribeOpsItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeOpsItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DescribeOpsItemsCommand extends $Command<DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeOpsItemsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeOpsItemsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
