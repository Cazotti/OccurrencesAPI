import { Occurrence as OccurrenceDbModel } from '../models/occurrence';
import Occurrence from '../../models/occurrence.model';

export class OccurrenceParser {
  parse(dbModel: OccurrenceDbModel): Occurrence {
    const {
      id,
      description,
      code,
      registerAt,
    } = dbModel;

    return new Occurrence({
      id,
      description,
      code,
      registerAt,
    });
  }
}

export default OccurrenceParser;
