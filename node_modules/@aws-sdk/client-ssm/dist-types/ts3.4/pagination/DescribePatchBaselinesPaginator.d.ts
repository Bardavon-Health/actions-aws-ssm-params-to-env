import { Paginator } from "@smithy/types";
import {
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "../commands/DescribePatchBaselinesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribePatchBaselines(
  config: SSMPaginationConfiguration,
  input: DescribePatchBaselinesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePatchBaselinesCommandOutput>;
