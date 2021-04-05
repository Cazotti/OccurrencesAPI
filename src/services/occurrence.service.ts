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
  }: {
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

  async list(): Promise<Occurrence[]> {
    return this.occurrenceRepository.list();
  }

  async findById(id: number): Promise<Occurrence> {
    return this.occurrenceRepository.findById(id);
  }

  async update(id: number, {
    description,
    code,
    registerAt
  }: {
    description?: string;
    code?: string;
    registerAt?: Date;
  }): Promise<boolean> {
    return this.occurrenceRepository.update(id, {
      description,
      code,
      registerAt
    });
  }

  async destroy(id: number): Promise<void> {
    await this.occurrenceRepository.destroy(id);
  }
}

export default OccurrenceService;
