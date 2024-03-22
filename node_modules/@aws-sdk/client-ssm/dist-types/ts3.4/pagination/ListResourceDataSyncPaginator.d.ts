import { Paginator } from "@smithy/types";
import {
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "../commands/ListResourceDataSyncCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListResourceDataSync: (
  config: SSMPaginationConfiguration,
  input: ListResourceDataSyncCommandInput,
  ...rest: any[]
) => Paginator<ListResourceDataSyncCommandOutput>;
