import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { UpdateDocumentMetadataRequest, UpdateDocumentMetadataResponse } from "../models/models_2";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDocumentMetadataCommand}.
 */
export interface UpdateDocumentMetadataCommandInput extends UpdateDocumentMetadataRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateDocumentMetadataCommand}.
 */
export interface UpdateDocumentMetadataCommandOutput extends UpdateDocumentMetadataResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Updates information related to approval reviews for a specific version of a change template
 *    in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateDocumentMetadataRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   DocumentReviews: { // DocumentReviews
 *     Action: "SendForReview" || "UpdateReview" || "Approve" || "Reject", // required
 *     Comment: [ // DocumentReviewCommentList
 *       { // DocumentReviewCommentSource
 *         Type: "Comment",
 *         Content: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateDocumentMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDocumentMetadataCommandInput - {@link UpdateDocumentMetadataCommandInput}
 * @returns {@link UpdateDocumentMetadataCommandOutput}
 * @see {@link UpdateDocumentMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentOperation} (client fault)
 *  <p>You attempted to delete a document while it is still shared. You must stop sharing the
 *    document before you can delete it.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class UpdateDocumentMetadataCommand extends $Command<UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateDocumentMetadataCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: UpdateDocumentMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
