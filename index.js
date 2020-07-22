const { exec } = require('child_process');
const core = require('@actions/core');
const ssm = require('./ssm-helper');

async function run_action()
{
    try
    {
        const ssmPath = core.getInput('ssm-path', { required: true });
        const prefix = core.getInput('prefix');
        const region = process.env.AWS_DEFAULT_REGION;
        const decryption = core.getInput('decryption') === 'true';

        paramValue = await ssm.getParameter(ssmPath, decryption, region);
        parsedValue = parseValue(paramValue);
        if (typeof(parsedValue) === 'string')
        {
            // Set environment variable with ssmPath name as the env variable
            var split = ssmPath.split('/');
            var envVarName = prefix + split[split.length - 1];
            setEnvironmentVar(envVarName, parsedValue);
        }
        else
        {
            // Assume basic JSON structure
            for (var key in parsedValue)
            {
                setEnvironmentVar(prefix + key, parsedValue[key])
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
        return val;
    }
}

function setEnvironmentVar(key, value)
{
    cmdString = `echo "::set-env name=${key}::${value}`;
    exec(cmdString);
}

run_action();