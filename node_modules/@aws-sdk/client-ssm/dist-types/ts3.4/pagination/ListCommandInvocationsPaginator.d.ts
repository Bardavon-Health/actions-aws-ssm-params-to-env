import { Paginator } from "@smithy/types";
import {
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "../commands/ListCommandInvocationsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
export declare const paginateListCommandInvocations: (
  config: SSMPaginationConfiguration,
  input: ListCommandInvocationsCommandInput,
  ...rest: any[]
) => Paginator<ListCommandInvocationsCommandOutput>;
