"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOccurrenceRepository = exports.getOccurrenceParser = exports.getOccurrenceService = exports.getLogger = exports.getLoggerJsLogAdapter = exports.getLoggerGoogleBunyanAdapter = exports.getLoggerAdapter = exports.getApiErrorHandler = void 0;
const utility_belt_1 = require("@enviabybus/utility-belt");
const env_1 = require("./env");
const occurrence_parser_1 = __importDefault(require("./database/parsers/occurrence.parser"));
const occurrence_repository_1 = __importDefault(require("./repositories/occurrence.repository"));
const occurrence_service_1 = __importDefault(require("./services/occurrence.service"));
const environment_1 = __importDefault(require("./environment"));
const models_1 = __importDefault(require("./database/models"));
const getApiErrorHandler = ({ logger }) => {
    return new utility_belt_1.ApiErrorHandler({ logger });
};
exports.getApiErrorHandler = getApiErrorHandler;
let loggerAdapter;
function getLoggerAdapter() {
    if (loggerAdapter) {
        return loggerAdapter;
    }
    loggerAdapter = environment_1.default.isDevelopment()
        ? getLoggerJsLogAdapter()
        : getLoggerGoogleBunyanAdapter();
    return loggerAdapter;
}
exports.getLoggerAdapter = getLoggerAdapter;
let loggerGoogleBunyanAdapter;
function getLoggerGoogleBunyanAdapter() {
    if (loggerGoogleBunyanAdapter) {
        return loggerGoogleBunyanAdapter;
    }
    loggerGoogleBunyanAdapter = new utility_belt_1.LoggerGoogleBunyanAdapter(env_1.SERVICE_NAME);
    return loggerGoogleBunyanAdapter;
}
exports.getLoggerGoogleBunyanAdapter = getLoggerGoogleBunyanAdapter;
let loggerJsLogAdapter;
function getLoggerJsLogAdapter() {
    if (loggerJsLogAdapter) {
        return loggerJsLogAdapter;
    }
    loggerJsLogAdapter = new utility_belt_1.LoggerJsLogAdapter();
    return loggerJsLogAdapter;
}
exports.getLoggerJsLogAdapter = getLoggerJsLogAdapter;
function getLogger({ traceKey } = {}) {
    const adapter = getLoggerAdapter();
    return new utility_belt_1.Logger({ adapter, traceKey });
}
exports.getLogger = getLogger;
// #region Services
function getOccurrenceService() {
    return new occurrence_service_1.default({
        occurrenceRepository: getOccurrenceRepository(),
    });
}
exports.getOccurrenceService = getOccurrenceService;
// #endregion
// #region Parsers
let occurrenceParser;
function getOccurrenceParser() {
    if (occurrenceParser) {
        return occurrenceParser;
    }
    occurrenceParser = new occurrence_parser_1.default();
    return occurrenceParser;
}
exports.getOccurrenceParser = getOccurrenceParser;
// #endregion
// #region Repositories
let occurrenceRepository;
function getOccurrenceRepository() {
    if (occurrenceRepository) {
        return occurrenceRepository;
    }
    occurrenceRepository = new occurrence_repository_1.default({
        driver: models_1.default,
        occurrenceParser: getOccurrenceParser(),
    });
    return occurrenceRepository;
}
exports.getOccurrenceRepository = getOccurrenceRepository;
// #endregion
//# sourceMappingURL=initializer.js.map