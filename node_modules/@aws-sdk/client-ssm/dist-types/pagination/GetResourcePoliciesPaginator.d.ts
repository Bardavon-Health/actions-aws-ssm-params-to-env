import { Paginator } from "@smithy/types";
import { GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput } from "../commands/GetResourcePoliciesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateGetResourcePolicies(config: SSMPaginationConfiguration, input: GetResourcePoliciesCommandInput, ...additionalArguments: any): Paginator<GetResourcePoliciesCommandOutput>;
