"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_NAME = exports.ENVIRONMENT = exports.OCCURRENCE_PORT = exports.OCCURRENCE_DATABASE_USER = exports.OCCURRENCE_DATABASE_PORT = exports.OCCURRENCE_DATABASE_PASS = exports.OCCURRENCE_DATABASE_NAME = exports.OCCURRENCE_DATABASE_HOST = exports.OCCURRENCE_DATABASE_DIALECT = void 0;
const packageJson = require('../package.json');
exports.OCCURRENCE_DATABASE_DIALECT = process.env.OCCURRENCE_DATABASE_DIALECT || 'mysql';
exports.OCCURRENCE_DATABASE_HOST = process.env.OCCURRENCE_DATABASE_HOST || 'localhost';
exports.OCCURRENCE_DATABASE_NAME = process.env.OCCURRENCE_DATABASE_NAME || 'occurrencesDB';
exports.OCCURRENCE_DATABASE_PASS = process.env.OCCURRENCE_DATABASE_PASS || 'password';
exports.OCCURRENCE_DATABASE_PORT = +process.env.OCCURRENCE_DATABASE_PORT || 3306;
exports.OCCURRENCE_DATABASE_USER = process.env.OCCURRENCE_DATABASE_USER || 'root';
exports.OCCURRENCE_PORT = process.env.OCCURRENCE_PORT || process.env.PORT || 3000;
exports.ENVIRONMENT = process.env.NODE_ENV || 'development';
exports.SERVICE_NAME = packageJson.name;
//# sourceMappingURL=env.js.map