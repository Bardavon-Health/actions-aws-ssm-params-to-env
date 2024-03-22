import { Paginator } from "@smithy/types";
import {
  ListOpsMetadataCommandInput,
  ListOpsMetadataCommandOutput,
} from "../commands/ListOpsMetadataCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListOpsMetadata: (
  config: SSMPaginationConfiguration,
  input: ListOpsMetadataCommandInput,
  ...rest: any[]
) => Paginator<ListOpsMetadataCommandOutput>;
