import { BaseError } from '@enviabybus/utility-belt';
import { JSONSchema4 } from 'json-schema';

export class OccurrenceRepositoryError extends BaseError { };

export class OccurrenceRepositoryCreationError extends OccurrenceRepositoryError {
  details?: JSONSchema4;

  constructor(params: JSONSchema4) {
    super({
      code: 'occurrence_creation_error',
      message: 'Could not create occurrence with these params'
    });

    this.details = {
      params
    }
  }
}

export class OccurrenceRepositoryNotFoundError extends OccurrenceRepositoryError {
  constructor(property: string, value?: string) {
    super({
      code: 'occurrence_not_found',
      message: `Occurrence not found by ${property}: ${value}`,
    });
  }
}

export class OccurrenceRepositoryUnexpectedError extends OccurrenceRepositoryError {
  constructor (message: string) {
    super ({
      code: 'unexpected_error',
      message
    })
  }
}
