import { Paginator } from "@smithy/types";
import {
  ListOpsItemEventsCommandInput,
  ListOpsItemEventsCommandOutput,
} from "../commands/ListOpsItemEventsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListOpsItemEvents(
  config: SSMPaginationConfiguration,
  input: ListOpsItemEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListOpsItemEventsCommandOutput>;
