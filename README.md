# actions-aws-ssm-params-to-env

This GitHub Action retrieves one or more AWS Systems Manager Parameters from a given path, and sets the value(s) of the parameter(s) as environment variables within the calling job. It will handle both simple JSON structures, as well as literal values. There are a number of options for customizing the behavior of this action detailed below.

## Prerequisites

​To use this action, you first need to configure AWS credentials and set the AWS Region in your GitHub environment by using the `configure-aws-credentials` step. *Note that the `configure-aws-credentials` action will also set the AWS Region in your job's environment, so you will not need to pass it to the `actions-aws-ssm-params-to-env` when using this authentication method.* Follow the instructions in [Configure AWS Credentials Action For GitHub Actions](https://github.com/aws-actions/configure-aws-credentials) to **Assume a role directly using GitHub OIDC provider**. This allows you to use short-lived credentials and avoid storing additional access keys outside of Secrets Manager. The IAM role that the action assumes must have the following permissions:

  - `ssm:GetParameter`
  - `ssm:GetParameters`       - Optional, only required when using the `get-children` option.
  - `ssm:GetParametersByPath` - Optional, only required when using the `get-children` option.
  - `kms:Decrypt`             - Optional, only required when the `decryption` option is set to `true`.

---
## Usage:
​ To use the action, add a step to your workflow using the following syntax:

```yaml
- uses: Bardavon-Health/actions-aws-ssm-params-to-env@v1.3.2
  with:
    ssm-path: /path/to/parameter # required
    get-children: true           # optional, default false
    decryption: true             # optional, default false
    mask-values: true            # optional, default false
    prefix: SSM_                 # optional, allows any string value
```

---
## Parameters:

#### `ssm-path` (*required*)
AWS Systems Manager Parameter Store path to the parameter.  
(e.g. `ssm-path: /path/to/parameter`)

#### `get-children` (optional)
Boolean wich imposes to get parameters by path, retrieving all children values. Defaults to false.  
(e.g. `get-children: true`)

#### `decryption` (optional)
Boolean which indicates whether the parameter should be decrypted or not. Defaults to false.  
(e.g. `decryption: true`)  

*Note: You should take care in utilizing encrypted values, as GitHub actions will not automatically redact
the value of such parameters from your logs. With this, it is reccomended to also use the [mask-values](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/edit/main/README.md#mask-values-optional) option.*

#### `mask-values` (optional)
Boolean which indicates if extracted values should be masked in GitHub action logs or not. Defaults to false.  
(e.g. `mask-values: true`)

#### `prefix` (optional)
Add prefix in front of environment variable names to be set.
(e.g. `prefix: TF_VAR_` will export `TF_VAR_ENV_VAR="value"`)

---
## Examples

#### Example 1
Assume an IAM role using OIDC, then set an SSM param to env vars using no options.
```yaml
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::123456789100:role/my-github-actions-role
    aws-region: us-east-2

- name: Set SSM Params as Env Vars
  uses: Bardavon-Health/actions-aws-ssm-params-to-env@v1.3.2
  with:
    ssm-path: /path/to/parameter
```

#### Example 2
Assume an IAM role using OIDC, then set an encrypted SSM param (and its children) to env vars. Will also prefix the env vars with `TF_VAR_` and mask all extracted values in the GitHub logs.
```yaml
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::123456789100:role/my-github-actions-role
    aws-region: us-east-2

- name: Set SSM Params as Env Vars
  uses: Bardavon-Health/actions-aws-ssm-params-to-env@v1.3.2
  with:
    ssm-path: /path/to/parameter
    get-children: true
    decryption: true
    mask-values: true
    prefix: TF_VAR_
```


#### Example 3
Set SSM param to env vars using an AWS Access Key, rather than OIDC (not reccomended).
```yaml
- name: Set SSM Params as Env Vars
  uses: Bardavon-Health/actions-aws-ssm-params-to-env@v1.3.2
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    AWS_DEFAULT_REGION: us-east-2
  with:
    ssm-path: /path/to/parameter
```
---
## Example Outputs:

#### Example 1
Using an SSM parameter, `/path/to/parameter`, with the following value:
``` JSON
{
  "APPLICATION_URL": "https://api.com",
  "DB_NAME": "somedbname"
}
```
the action will set environment variables for you for each key/value pair of the JSON:
``` bash
echo $APPLICATION_URL
=> https://api.com
echo $DB_NAME
=> somedbname
```

#### Example 2
Using the `prefix: TF_VAR_` option, and an SSM parameter, `/path/to/parameter`, with the following value:
``` JSON
{
  "APPLICATION_URL": "https://api.com",
  "DB_NAME": "somedbname"
}
```
the action will set environment variables for you for each key/value pair of the JSON, and will prefix each env var name with `TF_VAR_`:
``` bash
echo $TF_VAR_APPLICATION_URL
=> https://api.com
echo $TF_VAR_DB_NAME
=> somedbname
```

#### Example 3
Using an SSM parameter, `/path/to/parameter`, with the following literal value:
``` 
some_value
```
the action will set an environment variable for you using the last value of the path of the parameter as the env var name:
``` bash
echo $parameter
=> some_value
```

---
### License
This library is licensed under the MIT License. See the [LICENSE](https://github.com/Bardavon-Health/actions-aws-ssm-params-to-env/blob/main/LICENSE) file.
