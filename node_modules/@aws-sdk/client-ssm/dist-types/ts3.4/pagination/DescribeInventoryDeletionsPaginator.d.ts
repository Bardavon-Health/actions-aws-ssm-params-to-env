import { Paginator } from "@smithy/types";
import {
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "../commands/DescribeInventoryDeletionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeInventoryDeletions: (
  config: SSMPaginationConfiguration,
  input: DescribeInventoryDeletionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInventoryDeletionsCommandOutput>;
