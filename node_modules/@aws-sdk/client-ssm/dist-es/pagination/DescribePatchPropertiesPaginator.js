import { DescribePatchPropertiesCommand, } from "../commands/DescribePatchPropertiesCommand";
import { SSMClient } from "../SSMClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribePatchPropertiesCommand(input), ...args);
};
export async function* paginateDescribePatchProperties(config, input, ...additionalArguments) {
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
