"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeInstanceAssociationsStatus = void 0;
const DescribeInstanceAssociationsStatusCommand_1 = require("../commands/DescribeInstanceAssociationsStatusCommand");
const SSMClient_1 = require("../SSMClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeInstanceAssociationsStatusCommand_1.DescribeInstanceAssociationsStatusCommand(input), ...args);
};
async function* paginateDescribeInstanceAssociationsStatus(config, input, ...additionalArguments) {
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
exports.paginateDescribeInstanceAssociationsStatus = paginateDescribeInstanceAssociationsStatus;
