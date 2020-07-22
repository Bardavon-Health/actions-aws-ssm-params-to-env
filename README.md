# actions-aws-ssm-params-to-env
A github action to Convert SSM parameters to environment variables with support for JSON parameters


## Usage:

```yaml
- uses: Bardavon-Health/actions-aws-ssm-params-to-env@v1.0
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }} # required
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }} # required
    AWS_DEFAULT_REGION: ap-northeast-2 # required
  with:
    ssm-path: /opensource/action-aws-ssm-to-dotenv # required
    prefix: SSM_ # optional
    decryption: true # optional, default false
```
---
## Options:

### ssm-path(required)
AWS Systems Manager Parameter Store path to the parameter
(e.g. `/path/to/parameter`)

### prefix(optional)
add prefix in front of environment variable name
(e.g. `prefix: SSM_VAR_` will export `SSM_VAR_ENV_VAR="value"`)

### decryption(optional)
Boolean which indicates whether the parameter should be decrypted or not

---
## Example output:

### JSON data as the parameter value
if you have an ssm parameter path of `/application/staging/parameter` with the following value:
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
if you have an ssm parameter path of `/application/staging/parameter` with the value:
`ParameterValue`, the action will set an environment variable you such that `echo $parameter`
will output `ParameterValue`.

---
### License
MIT