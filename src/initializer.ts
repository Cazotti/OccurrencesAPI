import {
  ApiErrorHandler,
  GandalfAuthenticator,
  HttpClientAdapter,
  HttpClientSuperAgentAdapter,
  Logger,
  LoggerAdapter,
  LoggerGoogleBunyanAdapter,
  LoggerJsLogAdapter,
} from '@enviabybus/utility-belt';

import { GANDALF_API_HOST, SERVICE_NAME} from './env';
import environment from './environment';
import OccurrenceParser from './database/parsers/occurrence.parser';
import OccurrenceRepository from './repositories/occurrence.repository';
import OccurrenceService from './services/occurrence.service';
import sequelize from './database/models';

// #region Adapters
let httpClientAdapter: HttpClientAdapter;
export const getHttpClientAdapter = (): HttpClientAdapter => {
  httpClientAdapter = new HttpClientSuperAgentAdapter();

  return httpClientAdapter;
};
// #endregion Adapters

let gandalfAuthenticator: GandalfAuthenticator;
export const getGandalfAuthenticator = (): GandalfAuthenticator => {
  gandalfAuthenticator = new GandalfAuthenticator({ host: GANDALF_API_HOST, httpClientAdapter: getHttpClientAdapter() });
  return gandalfAuthenticator;
};

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
