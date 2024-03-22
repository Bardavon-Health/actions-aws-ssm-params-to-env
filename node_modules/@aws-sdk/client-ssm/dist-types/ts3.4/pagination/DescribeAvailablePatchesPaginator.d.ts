import { Paginator } from "@smithy/types";
import {
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "../commands/DescribeAvailablePatchesCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeAvailablePatches: (
  config: SSMPaginationConfiguration,
  input: DescribeAvailablePatchesCommandInput,
  ...rest: any[]
) => Paginator<DescribeAvailablePatchesCommandOutput>;
