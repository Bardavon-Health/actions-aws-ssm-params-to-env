import { PaginationConfiguration } from "@smithy/types";
import { SSMClient } from "../SSMClient";
export interface SSMPaginationConfiguration extends PaginationConfiguration {
  client: SSMClient;
}
