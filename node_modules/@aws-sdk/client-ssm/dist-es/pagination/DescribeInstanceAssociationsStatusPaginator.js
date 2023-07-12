import { DescribeInstanceAssociationsStatusCommand, } from "../commands/DescribeInstanceAssociationsStatusCommand";
import { SSMClient } from "../SSMClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeInstanceAssociationsStatusCommand(input), ...args);
};
export async function* paginateDescribeInstanceAssociationsStatus(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SSMClient) {
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
