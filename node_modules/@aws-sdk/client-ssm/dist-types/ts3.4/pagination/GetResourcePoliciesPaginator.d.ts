import { Paginator } from "@smithy/types";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateGetResourcePolicies: (
  config: SSMPaginationConfiguration,
  input: GetResourcePoliciesCommandInput,
  ...rest: any[]
) => Paginator<GetResourcePoliciesCommandOutput>;
