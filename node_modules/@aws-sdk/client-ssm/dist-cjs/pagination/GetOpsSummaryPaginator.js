"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetOpsSummary = void 0;
const GetOpsSummaryCommand_1 = require("../commands/GetOpsSummaryCommand");
const SSMClient_1 = require("../SSMClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new GetOpsSummaryCommand_1.GetOpsSummaryCommand(input), ...args);
};
async function* paginateGetOpsSummary(config, input, ...additionalArguments) {
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
exports.paginateGetOpsSummary = paginateGetOpsSummary;
