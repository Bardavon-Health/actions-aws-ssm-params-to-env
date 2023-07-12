import { Paginator } from "@smithy/types";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "../commands/DescribeSessionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeSessions(config: SSMPaginationConfiguration, input: DescribeSessionsCommandInput, ...additionalArguments: any): Paginator<DescribeSessionsCommandOutput>;
