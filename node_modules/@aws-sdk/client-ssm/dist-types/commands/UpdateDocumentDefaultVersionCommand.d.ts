import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDocumentDefaultVersionCommand}.
 */
export interface UpdateDocumentDefaultVersionCommandInput extends UpdateDocumentDefaultVersionRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateDocumentDefaultVersionCommand}.
 */
export interface UpdateDocumentDefaultVersionCommandOutput extends UpdateDocumentDefaultVersionResult, __MetadataBearer {
}
/**
 * @public
 * <p>Set the default version of a document. </p>
 *          <note>
 *             <p>If you change a document version for a State Manager association, Systems Manager immediately runs
 *     the association unless you previously specifed the <code>apply-only-at-cron-interval</code>
 *     parameter.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentDefaultVersionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateDocumentDefaultVersionRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateDocumentDefaultVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDocumentDefaultVersionResult
 * //   Description: { // DocumentDefaultVersionDescription
 * //     Name: "STRING_VALUE",
 * //     DefaultVersion: "STRING_VALUE",
 * //     DefaultVersionName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDocumentDefaultVersionCommandInput - {@link UpdateDocumentDefaultVersionCommandInput}
 * @returns {@link UpdateDocumentDefaultVersionCommandOutput}
 * @see {@link UpdateDocumentDefaultVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentDefaultVersionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentSchemaVersion} (client fault)
 *  <p>The version of the document schema isn't supported.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class UpdateDocumentDefaultVersionCommand extends $Command<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateDocumentDefaultVersionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: UpdateDocumentDefaultVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
