import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInventorySchemaCommand}.
 */
export interface GetInventorySchemaCommandInput extends GetInventorySchemaRequest {
}
/**
 * @public
 *
 * The output of {@link GetInventorySchemaCommand}.
 */
export interface GetInventorySchemaCommandOutput extends GetInventorySchemaResult, __MetadataBearer {
}
/**
 * @public
 * <p>Return a list of inventory type names for the account, or return a list of attribute names
 *    for a specific Inventory item type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventorySchemaCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventorySchemaCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetInventorySchemaRequest
 *   TypeName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Aggregator: true || false,
 *   SubType: true || false,
 * };
 * const command = new GetInventorySchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetInventorySchemaResult
 * //   Schemas: [ // InventoryItemSchemaResultList
 * //     { // InventoryItemSchema
 * //       TypeName: "STRING_VALUE", // required
 * //       Version: "STRING_VALUE",
 * //       Attributes: [ // InventoryItemAttributeList // required
 * //         { // InventoryItemAttribute
 * //           Name: "STRING_VALUE", // required
 * //           DataType: "string" || "number", // required
 * //         },
 * //       ],
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInventorySchemaCommandInput - {@link GetInventorySchemaCommandInput}
 * @returns {@link GetInventorySchemaCommandOutput}
 * @see {@link GetInventorySchemaCommandInput} for command's `input` shape.
 * @see {@link GetInventorySchemaCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class GetInventorySchemaCommand extends $Command<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetInventorySchemaCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetInventorySchemaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
