import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions,
} from "@smithy/smithy-client";
export { __ServiceException, __ServiceExceptionOptions };
export declare class SSMServiceException extends __ServiceException {
  constructor(options: __ServiceExceptionOptions);
}
