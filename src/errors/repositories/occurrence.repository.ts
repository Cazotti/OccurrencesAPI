import { BaseError, BaseErrorAttributes } from '@enviabybus/utility-belt';

export type BadRequestErrorAttributes = BaseErrorAttributes;

export class BadRequestError extends BaseError implements BadRequestErrorAttributes {
  constructor({ code = 'bad_request', message = 'bad request'}: BadRequestErrorAttributes) {
    super({ code, message });
  }
}

export default BadRequestError;
