import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { GetCommandInvocationCommandInput } from "../commands/GetCommandInvocationCommand";
import { SSMClient } from "../SSMClient";
export declare const waitForCommandExecuted: (
  params: WaiterConfiguration<SSMClient>,
  input: GetCommandInvocationCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilCommandExecuted: (
  params: WaiterConfiguration<SSMClient>,
  input: GetCommandInvocationCommandInput
) => Promise<WaiterResult>;
