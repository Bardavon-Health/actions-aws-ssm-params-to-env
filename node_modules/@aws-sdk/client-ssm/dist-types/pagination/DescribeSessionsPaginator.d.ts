import { Paginator } from "@smithy/types";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "../commands/DescribeSessionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeSessions: (config: SSMPaginationConfiguration, input: DescribeSessionsCommandInput, ...rest: any[]) => Paginator<DescribeSessionsCommandOutput>;
