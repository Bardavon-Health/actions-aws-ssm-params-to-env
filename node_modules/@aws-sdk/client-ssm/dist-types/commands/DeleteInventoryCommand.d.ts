import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandInput extends DeleteInventoryRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandOutput extends DeleteInventoryResult, __MetadataBearer {
}
/**
 * @public
 * <p>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
 *    a custom inventory type is also referred to as deleting a custom inventory schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteInventoryRequest
 *   TypeName: "STRING_VALUE", // required
 *   SchemaDeleteOption: "DisableSchema" || "DeleteSchema",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteInventoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInventoryResult
 * //   DeletionId: "STRING_VALUE",
 * //   TypeName: "STRING_VALUE",
 * //   DeletionSummary: { // InventoryDeletionSummary
 * //     TotalCount: Number("int"),
 * //     RemainingCount: Number("int"),
 * //     SummaryItems: [ // InventoryDeletionSummaryItems
 * //       { // InventoryDeletionSummaryItem
 * //         Version: "STRING_VALUE",
 * //         Count: Number("int"),
 * //         RemainingCount: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInventoryCommandInput - {@link DeleteInventoryCommandInput}
 * @returns {@link DeleteInventoryCommandOutput}
 * @see {@link DeleteInventoryCommandInput} for command's `input` shape.
 * @see {@link DeleteInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDeleteInventoryParametersException} (client fault)
 *  <p>One or more of the parameters specified for the delete operation isn't valid. Verify all
 *    parameters and try again.</p>
 *
 * @throws {@link InvalidInventoryRequestException} (client fault)
 *  <p>The request isn't valid.</p>
 *
 * @throws {@link InvalidOptionException} (client fault)
 *  <p>The delete inventory option specified isn't valid. Verify the option and try again.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DeleteInventoryCommand extends $Command<DeleteInventoryCommandInput, DeleteInventoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteInventoryCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteInventoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInventoryCommandInput, DeleteInventoryCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
