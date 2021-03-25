import Occurrence from '../models/occurrence.model';
import OccurrenceRepository, { QueryOptions } from '../repositories/occurrence.repository';

interface OccurrenceServiceOpt {
  occurrenceRepository: OccurrenceRepository;
}

class OccurrenceService {
  private occurrenceRepository: OccurrenceRepository;

  constructor({ occurrenceRepository }: OccurrenceServiceOpt) {
    this.occurrenceRepository = occurrenceRepository;
  }

  async create({
    description,
    code,
    registerAt
  }:{
    description: string;
    code: string;
    registerAt: Date;
  }): Promise<Occurrence> {
    return this.occurrenceRepository.create({
      description,
      code,
      registerAt
    })
  }

  async list({
    description,
    code,
    registerAt
  }:{
    description?: string;
    code?: string;
    registerAt?: Date;
  } = {}, {
    limit,
    offset,
    order
  }: QueryOptions = {}): Promise<Occurrence[]> {
    return this.occurrenceRepository.list({
      filter: {
        description,
        code,
        registerAt
      },
      limit,
      offset,
      order
    });
  }

}

export default OccurrenceService;