import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDocumentsCommand}.
 */
export interface ListDocumentsCommandInput extends ListDocumentsRequest {
}
/**
 * @public
 *
 * The output of {@link ListDocumentsCommand}.
 */
export interface ListDocumentsCommandOutput extends ListDocumentsResult, __MetadataBearer {
}
/**
 * @public
 * <p>Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can
 *    limit the results of this request by using a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // ListDocumentsRequest
 *   DocumentFilterList: [ // DocumentFilterList
 *     { // DocumentFilter
 *       key: "Name" || "Owner" || "PlatformTypes" || "DocumentType", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Filters: [ // DocumentKeyValuesFilterList
 *     { // DocumentKeyValuesFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // DocumentKeyValuesFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDocumentsResult
 * //   DocumentIdentifiers: [ // DocumentIdentifierList
 * //     { // DocumentIdentifier
 * //       Name: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       DisplayName: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       VersionName: "STRING_VALUE",
 * //       PlatformTypes: [ // PlatformTypeList
 * //         "Windows" || "Linux" || "MacOS",
 * //       ],
 * //       DocumentVersion: "STRING_VALUE",
 * //       DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup",
 * //       SchemaVersion: "STRING_VALUE",
 * //       DocumentFormat: "YAML" || "JSON" || "TEXT",
 * //       TargetType: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Requires: [ // DocumentRequiresList
 * //         { // DocumentRequires
 * //           Name: "STRING_VALUE", // required
 * //           Version: "STRING_VALUE",
 * //           RequireType: "STRING_VALUE",
 * //           VersionName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //       Author: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDocumentsCommandInput - {@link ListDocumentsCommandInput}
 * @returns {@link ListDocumentsCommandOutput}
 * @see {@link ListDocumentsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class ListDocumentsCommand extends $Command<ListDocumentsCommandInput, ListDocumentsCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListDocumentsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListDocumentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDocumentsCommandInput, ListDocumentsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
