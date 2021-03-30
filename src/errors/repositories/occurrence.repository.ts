import { BaseError } from '@enviabybus/utility-belt';
import { JSONSchema4 } from 'json-schema';

export class OccurrenceErrorAttributes extends BaseError { };

export class OccurrenceRepositorryCreatedError extends OccurrenceErrorAttributes {
  details?: JSONSchema4;

  constructor(params: JSONSchema4) {
    super({
      code: 'occurrence_created_error',
      message: 'Could not create occurrence with these params'
    });

    this.details = {
      params
    }
  }
}
