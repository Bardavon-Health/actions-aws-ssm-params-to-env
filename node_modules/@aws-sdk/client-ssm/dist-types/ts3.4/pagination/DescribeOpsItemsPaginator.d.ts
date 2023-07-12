import { Paginator } from "@smithy/types";
import {
  DescribeOpsItemsCommandInput,
  DescribeOpsItemsCommandOutput,
} from "../commands/DescribeOpsItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeOpsItems(
  config: SSMPaginationConfiguration,
  input: DescribeOpsItemsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOpsItemsCommandOutput>;
