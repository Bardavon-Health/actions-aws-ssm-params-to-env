import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteMaintenanceWindowRequest, DeleteMaintenanceWindowResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMaintenanceWindowCommand}.
 */
export interface DeleteMaintenanceWindowCommandInput extends DeleteMaintenanceWindowRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteMaintenanceWindowCommand}.
 */
export interface DeleteMaintenanceWindowCommandOutput extends DeleteMaintenanceWindowResult, __MetadataBearer {
}
/**
 * @public
 * <p>Deletes a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMaintenanceWindowCommandInput - {@link DeleteMaintenanceWindowCommandInput}
 * @returns {@link DeleteMaintenanceWindowCommandOutput}
 * @see {@link DeleteMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeleteMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class DeleteMaintenanceWindowCommand extends $Command<DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteMaintenanceWindowCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteMaintenanceWindowCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
