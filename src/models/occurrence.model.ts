import { JSONSchema4Object } from 'json-schema';

export interface OccurrenceAttributes {
  id: number;
  description: string;
  code: string;
  registerAt: Date;
}

export class Occurrence implements OccurrenceAttributes {
  id: number;
  description: string;
  code: string;
  registerAt: Date;

  constructor(attr: OccurrenceAttributes) {
    this.id = attr.id;
    this.description = attr.description;
    this.code = attr.code;
    this.registerAt = attr.registerAt;
  }

  toJSON(): JSONSchema4Object {
    return {
      id: this.id,
      description: this.description,
      code: this.code,
      registerAt: this.registerAt.toISOString()
    };
  }
}

export default Occurrence;
