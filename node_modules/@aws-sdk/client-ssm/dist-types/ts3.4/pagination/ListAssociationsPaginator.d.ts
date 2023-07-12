import { Paginator } from "@smithy/types";
import {
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "../commands/ListAssociationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateListAssociations(
  config: SSMPaginationConfiguration,
  input: ListAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociationsCommandOutput>;
