# actions-aws-ssm-params-to-env

This is a github action to convert SSM parameters to environment variables. It will handle
simple JSON structures, or literal values. If you utilize the AWS action for setting
your credentials or assume a role, you will not need to explicitly include the AWS environment
variables in this action's step.

**Note**: this is a fork of this unmaintained repository: https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env


## Usage:

```yaml
- uses: IP-Sentinel/actions-aws-ssm-params-to-env@v1.2.1
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }} # required
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }} # required
    AWS_DEFAULT_REGION: ap-northeast-2 # required
  with:
    ssm-path: /path/to/parameter # required
    get-children: true # optional, default false
    prefix: SSM_ # optional
    decryption: true # optional, default false
    mask-values: true # optional, default false
```
---
## Options:

### ssm-path(required)
AWS Systems Manager Parameter Store path to the parameter
(e.g. `/path/to/parameter`)

### get-children(optional)
Boolean wich imposes to get parameters by path, retrieving all children values

### prefix(optional)
Add prefix in front of environment variable name
(e.g. `prefix: SSM_VAR_` will export `SSM_VAR_ENV_VAR="value"`)

### decryption(optional)
Boolean which indicates whether the parameter should be decrypted or not

### mask-values(optional)
Boolean which indicates if extracted values should be masked in
GitHub action logs

### **Note on decryption:**
You should take care in utilizing encrypted values, as GitHub actions will not automatically redact
the value of such parameters from your logs.

---
## Example output:

### JSON data as the parameter value
If you have an ssm parameter path of `/application/staging/parameter` with the following value:
``` JSON
{
  "APPLICATION_URL": "https://api.com",
  "DB_NAME": "somedbname"
}
```
the action will set environment variables for you for each key/value pair of the JSON.
`$APPLICATION_URL` will be set to `https://api.com` and
`$DB_NAME` will be set to `somedbname`.

### String data
If you have an ssm parameter path of `/application/staging/parameter` with the value:
`ParameterValue`, the action will set an environment variable for you such that `echo $parameter`
will output `ParameterValue`.

---
### License
MIT