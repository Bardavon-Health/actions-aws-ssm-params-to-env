import { Paginator } from "@smithy/types";
import {
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
} from "../commands/GetInventoryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateGetInventory(
  config: SSMPaginationConfiguration,
  input: GetInventoryCommandInput,
  ...additionalArguments: any
): Paginator<GetInventoryCommandOutput>;
