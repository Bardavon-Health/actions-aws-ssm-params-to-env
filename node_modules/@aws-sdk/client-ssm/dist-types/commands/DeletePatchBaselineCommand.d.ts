import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeletePatchBaselineRequest, DeletePatchBaselineResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePatchBaselineCommand}.
 */
export interface DeletePatchBaselineCommandInput extends DeletePatchBaselineRequest {
}
/**
 * @public
 *
 * The output of {@link DeletePatchBaselineCommand}.
 */
export interface DeletePatchBaselineCommandOutput extends DeletePatchBaselineResult, __MetadataBearer {
}
/**
 * @public
 * <p>Deletes a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeletePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeletePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeletePatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 * };
 * const command = new DeletePatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // DeletePatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePatchBaselineCommandInput - {@link DeletePatchBaselineCommandInput}
 * @returns {@link DeletePatchBaselineCommandOutput}
 * @see {@link DeletePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DeletePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>Error returned if an attempt is made to delete a patch baseline that is registered for a
 *    patch group.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DeletePatchBaselineCommand extends $Command<DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeletePatchBaselineCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeletePatchBaselineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
