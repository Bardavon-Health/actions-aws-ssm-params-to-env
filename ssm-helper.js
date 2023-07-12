const { SSMClient, GetParametersCommand, GetParametersByPathCommand } = require("@aws-sdk/client-ssm");

const getParameters = async (ssmPath, getChildren, decryption, region) => {
    const client = new SSMClient({ region: region });
    let promise;
    if (getChildren) {
        const input = { // GetParametersByPathRequest
            Path: ssmPath,
            WithDecryption: decryption
        };
        const command = new GetParametersByPathCommand(input);
        promise = client.send(command);
    }
    else {
        const input = { // GetParametersRequest
            Names: [ // ParameterNameList // required
                ssmPath,
            ],
            WithDecryption: decryption
        };
        const command = new GetParametersCommand(input);
        promise = client.send(command);
    }
    const response = await promise;
    return response.Parameters;
}

module.exports = { getParameters };
