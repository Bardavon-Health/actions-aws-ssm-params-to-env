const core = require('@actions/core');
const ssm = require('./ssm-helper');

async function run_action()
{
    try
    {
        const ssmPath = core.getInput('ssm-path', { required: true });
        const getChildren = core.getInput('get-children') === 'true';
        const prefix = core.getInput('prefix');
        const region = process.env.AWS_DEFAULT_REGION;
        const decryption = core.getInput('decryption') === 'true';
        const maskValues = core.getInput('mask-values') === 'true';

        const params = await ssm.getParameters(ssmPath, getChildren, decryption, region);
        for (let param of params)
        {
            const parsedValue = parseValue(param.Value);
            if (typeof(parsedValue) === 'object') // Assume JSON object
            {
                core.debug(`parsedValue: ${JSON.stringify(parsedValue)}`);
                // Assume basic JSON structure
                for (var key in parsedValue)
                {
                    setEnvironmentVar(prefix + key, parsedValue[key], maskValues);
                }
            }
            else
            {
                core.debug(`parsedValue: ${parsedValue}`);
                // Set environment variable with ssmPath name as the env variable
                var split = param.Name.split('/');
                var envVarName = prefix + split[split.length - 1].toUpperCase().replace(/-/g, '_');
                core.debug(`Using prefix + end of ssmPath for env var name: ${envVarName}`);
                setEnvironmentVar(envVarName, parsedValue, maskValues);
            }
        }
    }
    catch (e)
    {
        core.setFailed(e.message);
    }
}


function parseValue(val)
{
    try
    {
        return JSON.parse(val);
    }
    catch
    {
        core.debug('JSON parse failed - assuming parameter is to be taken as a string literal');
        return val;
    }
}

function setEnvironmentVar(key, value, maskValue)
{
    if (maskValue) {
        core.setSecret(value);
    }
    core.exportVariable(key, value);
}

run_action();