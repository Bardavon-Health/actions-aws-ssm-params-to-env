import { Paginator } from "@smithy/types";
import {
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "../commands/DescribePatchBaselinesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribePatchBaselines: (
  config: SSMPaginationConfiguration,
  input: DescribePatchBaselinesCommandInput,
  ...rest: any[]
) => Paginator<DescribePatchBaselinesCommandOutput>;
