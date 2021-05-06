const AWS = require('aws-sdk');

const getParameters = async (ssmPath, decryption, region) => {
    AWS.config.update({region: region});
    const ssm = new AWS.SSM();
    const params =
    {
        Names: [ssmPath],
        WithDecryption: decryption
    };
    const result = await ssm.getParameters(params).promise();
    return result.Parameters;
}

module.exports = {getParameters};