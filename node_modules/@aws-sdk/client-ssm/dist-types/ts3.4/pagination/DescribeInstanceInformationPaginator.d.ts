import { Paginator } from "@smithy/types";
import {
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "../commands/DescribeInstanceInformationCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeInstanceInformation: (
  config: SSMPaginationConfiguration,
  input: DescribeInstanceInformationCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceInformationCommandOutput>;
