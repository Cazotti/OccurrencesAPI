import { Sequelize, UniqueConstraintError } from 'sequelize';

import { Occurrence as OccurrenceDbModel } from '../database/models/occurrence';
import Occurrence, { OccurrenceAttributes } from '../models/occurrence.model';
import BadRequestError from "../errors/repositories/occurrence.repository"
import OccurrenceParser from '../database/parsers/occurrence.parser';

interface OccurrenceRepositoryDependencies {
  driver: Sequelize;
  occurrenceParser: OccurrenceParser;
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

  async create(occurrence: Omit<OccurrenceAttributes, 'id'>): Promise<Occurrence>{
    const { description, code, registerAt } = occurrence;
    try {
      const createdOccurrence = await OccurrenceDbModel.create({
        description,
        code,
        registerAt
      });
      return this.parse(createdOccurrence);
    } catch (error) {
      if (error instanceof BadRequestError) {
        throw new BadRequestError(occurrence);
      }
      throw error;
    }
  }

  private parse(dbModel: OccurrenceDbModel): Occurrence {
    return this.occurrenceParser.parse(dbModel);
  }
}

export default OccurrenceRepository;
