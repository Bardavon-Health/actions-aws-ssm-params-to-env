import { Paginator } from "@smithy/types";
import {
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "../commands/ListComplianceItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListComplianceItems: (
  config: SSMPaginationConfiguration,
  input: ListComplianceItemsCommandInput,
  ...rest: any[]
) => Paginator<ListComplianceItemsCommandOutput>;
