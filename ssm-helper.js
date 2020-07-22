const AWS = require('aws-sdk');

const getParameter = async (ssmPath, decryption, region) => {
    AWS.config.update({region: region});
    const ssm = new AWS.SSM();
    const params =
    {
        Name: ssmPath,
        WithDecryption: decryption
    };
    const result = await ssm.getParameter(params).promise();
    return result.Parameter.Value;
}

module.exports = {getParameter};