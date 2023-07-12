import { Paginator } from "@smithy/types";
import {
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "../commands/ListResourceDataSyncCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListResourceDataSync(
  config: SSMPaginationConfiguration,
  input: ListResourceDataSyncCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceDataSyncCommandOutput>;
