const { SSMClient, GetParametersCommand, paginateGetParametersByPath } = require("@aws-sdk/client-ssm");

const getParameters = async (ssmPath, getChildren, decryption, region) => {
    const client = new SSMClient({ region: region });
    let parameters = [];

    if (getChildren) {
        const paginatorConfig = {
            client: client,
            pageSize: 10, // Adjust as needed
        };

        const input = { // GetParametersByPathRequest
            Path: ssmPath,
            WithDecryption: decryption
        };

        const paginator = paginateGetParametersByPath(paginatorConfig, input);

        for await (const page of paginator) {
            parameters = [...parameters, ...page.Parameters];
        }
    }
    else {
        const input = { // GetParametersRequest
            Names: [ // ParameterNameList // required
                ssmPath,
            ],
            WithDecryption: decryption
        };
        const command = new GetParametersCommand(input);
        const response = await client.send(command);
        parameters = response.Parameters;
    }

    return parameters;
}

module.exports = { getParameters };
