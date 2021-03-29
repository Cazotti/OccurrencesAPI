import Occurrence from '../models/occurrence.model';
import OccurrenceRepository from '../repositories/occurrence.repository';

interface OccurrenceServiceDependencies {
  occurrenceRepository: OccurrenceRepository;
}

class OccurrenceService {
  private occurrenceRepository: OccurrenceRepository;

  constructor({ occurrenceRepository }: OccurrenceServiceDependencies) {
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
}

export default OccurrenceService;
