import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { GetCommandInvocationCommand } from "../commands/GetCommandInvocationCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new GetCommandInvocationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Pending") {
                return { state: WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "InProgress") {
                return { state: WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Delayed") {
                return { state: WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Success") {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Cancelled") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "TimedOut") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Failed") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Cancelling") {
                return { state: WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "InvocationDoesNotExist") {
            return { state: WaiterState.RETRY, reason };
        }
    }
    return { state: WaiterState.RETRY, reason };
};
export const waitForCommandExecuted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilCommandExecuted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
