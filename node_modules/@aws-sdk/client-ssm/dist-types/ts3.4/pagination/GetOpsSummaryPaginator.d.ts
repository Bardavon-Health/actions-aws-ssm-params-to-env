import { Paginator } from "@smithy/types";
import {
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput,
} from "../commands/GetOpsSummaryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateGetOpsSummary: (
  config: SSMPaginationConfiguration,
  input: GetOpsSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetOpsSummaryCommandOutput>;
