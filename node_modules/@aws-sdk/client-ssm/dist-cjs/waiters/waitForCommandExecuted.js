"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilCommandExecuted = exports.waitForCommandExecuted = void 0;
const util_waiter_1 = require("@smithy/util-waiter");
const GetCommandInvocationCommand_1 = require("../commands/GetCommandInvocationCommand");
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new GetCommandInvocationCommand_1.GetCommandInvocationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Pending") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "InProgress") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Delayed") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Success") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Cancelled") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "TimedOut") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Status;
            };
            if (returnComparator() === "Cancelling") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "InvocationDoesNotExist") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
const waitForCommandExecuted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForCommandExecuted = waitForCommandExecuted;
const waitUntilCommandExecuted = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilCommandExecuted = waitUntilCommandExecuted;
