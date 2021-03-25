import {
  ApiErrorHandler,
  Logger,
  LoggerAdapter,
  LoggerGoogleBunyanAdapter,
  LoggerJsLogAdapter,
} from '@enviabybus/utility-belt';

import { SERVICE_NAME } from './env';

import OccurrenceParser from './database/parsers/occurrence.parser';
import OccurrenceRepository from './repositories/occurrence.repository';
import OccurrenceService from './services/occurrence.service';
import environment from './environment';
import sequelize from './database/models';

export const getApiErrorHandler = ({ logger }: { logger: Logger }): ApiErrorHandler => {
  return new ApiErrorHandler({ logger });
};

let loggerAdapter: LoggerAdapter;
export function getLoggerAdapter(): LoggerAdapter {
  if (loggerAdapter) { return loggerAdapter; }

  loggerAdapter = environment.isDevelopment()
    ? getLoggerJsLogAdapter()
    : getLoggerGoogleBunyanAdapter();

  return loggerAdapter;
}

let loggerGoogleBunyanAdapter: LoggerGoogleBunyanAdapter;
export function getLoggerGoogleBunyanAdapter(): LoggerGoogleBunyanAdapter {
  if (loggerGoogleBunyanAdapter) { return loggerGoogleBunyanAdapter; }

  loggerGoogleBunyanAdapter = new LoggerGoogleBunyanAdapter(SERVICE_NAME);
  return loggerGoogleBunyanAdapter;
}

let loggerJsLogAdapter: LoggerJsLogAdapter;
export function getLoggerJsLogAdapter(): LoggerJsLogAdapter {
  if (loggerJsLogAdapter) { return loggerJsLogAdapter; }

  loggerJsLogAdapter = new LoggerJsLogAdapter();
  return loggerJsLogAdapter;
}

export function getLogger({ traceKey }: { traceKey?: string } = {}): Logger {
  const adapter = getLoggerAdapter();
  return new Logger({ adapter, traceKey });
}

// #region Services
export function getOccurrenceService(): OccurrenceService {
  return new OccurrenceService({
    occurrenceRepository: getOccurrenceRepository(),
  });
}
// #endregion

// #region Parsers
let occurrenceParser: OccurrenceParser;
export function getOccurrenceParser(): OccurrenceParser {
  if (occurrenceParser) { return occurrenceParser; }

  occurrenceParser = new OccurrenceParser();
  return occurrenceParser;
}
// #endregion

// #region Repositories
let occurrenceRepository: OccurrenceRepository;
export function getOccurrenceRepository(): OccurrenceRepository {
  if (occurrenceRepository) { return occurrenceRepository; }

  occurrenceRepository = new OccurrenceRepository({
    driver: sequelize,
    occurrenceParser: getOccurrenceParser(),
  });
  return occurrenceRepository;
}
// #endregion