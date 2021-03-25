import { Sequelize, FindOptions } from 'sequelize';

import { isNil, omitBy, toPairs } from 'lodash';

import { Occurrence as OccurrenceDbModel } from '../database/models/occurrence';
import Occurrence, { OccurrenceAttributes } from '../models/occurrence.model';
import OccurrenceParser from '../database/parsers/occurrence.parser';

export interface OccurrenceFilter {
  description?: string;
  code?: string;
  registerAt?: Date;
}

interface OccurrenceRepositoryDependencies {
  driver: Sequelize;
  occurrenceParser: OccurrenceParser;
}

export interface QueryOptions {
  limit?: number;
  offset?: number;
  order?: Record<string, 'ASC' | 'DESC'>;
}

class OccurrenceRepository {
  private driver: Sequelize;
  private occurrenceParser: OccurrenceParser;

  constructor({
    driver,
    occurrenceParser
  }: OccurrenceRepositoryDependencies) {
    this.driver = driver;
    this.occurrenceParser = occurrenceParser;
  }

  async create(occurrence: Omit<OccurrenceAttributes, 'id'>): Promise<Occurrence | never>{
    const { description, code, registerAt } = occurrence;
    try {
      const createdOccurrence = await OccurrenceDbModel.create({
        description,
        code,
        registerAt
      });
      return this.parse(createdOccurrence);
    } catch (error) {
      throw error;
    }
  }

  async list(
    {
      filter = {}, limit, offset, order = { id: 'ASC'},
    }: 
    {
      filter?: OccurrenceFilter,
    } & QueryOptions = {},
  ): Promise<Occurrence[]> {
    const findOptions: FindOptions<OccurrenceDbModel> = {
      where: omitBy(filter, isNil),
    };
    if (offset) { findOptions.offset = offset; }
    if (order) { findOptions.order = toPairs(order); }
    if (limit) { findOptions.limit = limit; }

    const dbModels = await OccurrenceDbModel.findAll(findOptions);
    return dbModels.map(dbModel => this.occurrenceParser.parse(dbModel));
  }

  private parse(dbModel: OccurrenceDbModel): Occurrence {
    return this.occurrenceParser.parse(dbModel);
  }
}

export default OccurrenceRepository;