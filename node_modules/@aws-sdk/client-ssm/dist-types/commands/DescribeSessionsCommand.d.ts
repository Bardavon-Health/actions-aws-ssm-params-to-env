import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribeSessionsRequest, DescribeSessionsResponse } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandInput extends DescribeSessionsRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandOutput extends DescribeSessionsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves a list of all active sessions (both connected and disconnected) or terminated
 *    sessions from the past 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeSessionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeSessionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeSessionsRequest
 *   State: "Active" || "History", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // SessionFilterList
 *     { // SessionFilter
 *       key: "InvokedAfter" || "InvokedBefore" || "Target" || "Owner" || "Status" || "SessionId", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DescribeSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSessionsResponse
 * //   Sessions: [ // SessionList
 * //     { // Session
 * //       SessionId: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       Status: "Connected" || "Connecting" || "Disconnected" || "Terminated" || "Terminating" || "Failed",
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       DocumentName: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //       Details: "STRING_VALUE",
 * //       OutputUrl: { // SessionManagerOutputUrl
 * //         S3OutputUrl: "STRING_VALUE",
 * //         CloudWatchOutputUrl: "STRING_VALUE",
 * //       },
 * //       MaxSessionDuration: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSessionsCommandInput - {@link DescribeSessionsCommandInput}
 * @returns {@link DescribeSessionsCommandOutput}
 * @see {@link DescribeSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSessionsCommandOutput} for command's `response` shape.
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
export declare class DescribeSessionsCommand extends $Command<DescribeSessionsCommandInput, DescribeSessionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeSessionsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeSessionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSessionsCommandInput, DescribeSessionsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
