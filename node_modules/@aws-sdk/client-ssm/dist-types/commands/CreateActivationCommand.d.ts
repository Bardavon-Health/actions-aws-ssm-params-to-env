import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CreateActivationRequest, CreateActivationResult } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateActivationCommand}.
 */
export interface CreateActivationCommandInput extends CreateActivationRequest {
}
/**
 * @public
 *
 * The output of {@link CreateActivationCommand}.
 */
export interface CreateActivationCommandOutput extends CreateActivationResult, __MetadataBearer {
}
/**
 * @public
 * <p>Generates an activation code and activation ID you can use to register your on-premises
 *    servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with
 *    Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and
 *    ID when installing SSM Agent on machines in your hybrid environment. For more information about
 *    requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up
 *     Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 *          <note>
 *             <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are
 *     configured for Systems Manager are all called <i>managed nodes</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreateActivationRequest
 *   Description: "STRING_VALUE",
 *   DefaultInstanceName: "STRING_VALUE",
 *   IamRole: "STRING_VALUE", // required
 *   RegistrationLimit: Number("int"),
 *   ExpirationDate: new Date("TIMESTAMP"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   RegistrationMetadata: [ // RegistrationMetadataList
 *     { // RegistrationMetadataItem
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateActivationCommand(input);
 * const response = await client.send(command);
 * // { // CreateActivationResult
 * //   ActivationId: "STRING_VALUE",
 * //   ActivationCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateActivationCommandInput - {@link CreateActivationCommandInput}
 * @returns {@link CreateActivationCommandOutput}
 * @see {@link CreateActivationCommandInput} for command's `input` shape.
 * @see {@link CreateActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidParameters} (client fault)
 *  <p>You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM
 *    document). You can only supply values to parameters defined in the SSM document.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export declare class CreateActivationCommand extends $Command<CreateActivationCommandInput, CreateActivationCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateActivationCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: CreateActivationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateActivationCommandInput, CreateActivationCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
