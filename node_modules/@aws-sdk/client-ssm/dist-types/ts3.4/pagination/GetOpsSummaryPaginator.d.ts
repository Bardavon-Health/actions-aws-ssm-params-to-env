import { Paginator } from "@smithy/types";
import {
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput,
} from "../commands/GetOpsSummaryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateGetOpsSummary(
  config: SSMPaginationConfiguration,
  input: GetOpsSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetOpsSummaryCommandOutput>;
