import { Paginator } from "@smithy/types";
import {
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "../commands/GetParameterHistoryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateGetParameterHistory(
  config: SSMPaginationConfiguration,
  input: GetParameterHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetParameterHistoryCommandOutput>;
