import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { StartAssociationsOnceRequest, StartAssociationsOnceResult } from "../models/models_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartAssociationsOnceCommand}.
 */
export interface StartAssociationsOnceCommandInput extends StartAssociationsOnceRequest {
}
/**
 * @public
 *
 * The output of {@link StartAssociationsOnceCommand}.
 */
export interface StartAssociationsOnceCommandOutput extends StartAssociationsOnceResult, __MetadataBearer {
}
/**
 * @public
 * <p>Runs an association immediately and only one time. This operation can be helpful when
 *    troubleshooting associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAssociationsOnceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // StartAssociationsOnceRequest
 *   AssociationIds: [ // AssociationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartAssociationsOnceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAssociationsOnceCommandInput - {@link StartAssociationsOnceCommandInput}
 * @returns {@link StartAssociationsOnceCommandOutput}
 * @see {@link StartAssociationsOnceCommandInput} for command's `input` shape.
 * @see {@link StartAssociationsOnceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link InvalidAssociation} (client fault)
 *  <p>The association isn't valid or doesn't exist. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class StartAssociationsOnceCommand extends $Command<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput, SSMClientResolvedConfig> {
    readonly input: StartAssociationsOnceCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: StartAssociationsOnceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
