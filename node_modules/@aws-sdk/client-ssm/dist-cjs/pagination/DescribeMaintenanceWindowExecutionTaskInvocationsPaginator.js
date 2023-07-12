"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeMaintenanceWindowExecutionTaskInvocations = void 0;
const DescribeMaintenanceWindowExecutionTaskInvocationsCommand_1 = require("../commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand");
const SSMClient_1 = require("../SSMClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeMaintenanceWindowExecutionTaskInvocationsCommand_1.DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input), ...args);
};
async function* paginateDescribeMaintenanceWindowExecutionTaskInvocations(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SSMClient_1.SSMClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SSM | SSMClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateDescribeMaintenanceWindowExecutionTaskInvocations = paginateDescribeMaintenanceWindowExecutionTaskInvocations;
