const AWS = require('aws-sdk');

const getParameters = async (ssmPath, getChildren, decryption, region) => {
    AWS.config.update({region: region});
    const ssm = new AWS.SSM();
    let params;
    let promise;
    if (getChildren)
    {
        params =
        {
            Path: ssmPath,
            WithDecryption: decryption
        };
        promise = ssm.getParametersByPath(params).promise();
    }
    else
    {
        params =
        {
            Names: [ssmPath],
            WithDecryption: decryption
        };
        promise = ssm.getParameters(params).promise();;
    }
    const result = await promise;
    return result.Parameters;
}

module.exports = {getParameters};