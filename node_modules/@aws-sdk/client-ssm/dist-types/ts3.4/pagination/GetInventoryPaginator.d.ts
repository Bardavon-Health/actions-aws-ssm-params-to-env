import { Paginator } from "@smithy/types";
import {
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
} from "../commands/GetInventoryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateGetInventory: (
  config: SSMPaginationConfiguration,
  input: GetInventoryCommandInput,
  ...rest: any[]
) => Paginator<GetInventoryCommandOutput>;
