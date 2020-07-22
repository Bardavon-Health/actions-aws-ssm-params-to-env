const execSync = require('child_process').execSync;
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
        if (typeof(parsedValue) === 'object') // Assume JSON object
        {
            core.debug(`parsedValue: ${JSON.stringify(parsedValue)}`);
            // Assume basic JSON structure
            for (var key in parsedValue)
            {
                setEnvironmentVar(prefix + key, parsedValue[key])
            }
        }
        else
        {
            core.debug(`parsedValue: ${parsedValue}`);
            // Set environment variable with ssmPath name as the env variable
            var split = ssmPath.split('/');
            var envVarName = prefix + split[split.length - 1];
            core.debug(`Using prefix + end of ssmPath for env var name: ${envVarName}`);
            setEnvironmentVar(envVarName, parsedValue);
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

function setEnvironmentVar(key, value)
{
    cmdString = `echo "::set-env name=${key}::${value}"`;
    core.debug(`Running cmd: ${cmdString}`);
    execSync(cmdString, {stdio: 'inherit'});
}

run_action();