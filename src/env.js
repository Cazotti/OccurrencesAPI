const packageJson = require('../package.json');

export const ENVIRONMENT = process.env.NODE_ENV || 'development';
export const GANDALF_API_HOST = process.env.GANDALF_API_HOST || 'https://ebb-hmg-gandalf-hibu25qtaa-ue.a.run.app';
export const OCCURRENCE_DATABASE_DIALECT = process.env.OCCURRENCE_DATABASE_DIALECT || 'mysql';
export const OCCURRENCE_DATABASE_HOST = process.env.OCCURRENCE_DATABASE_HOST || 'localhost';
export const OCCURRENCE_DATABASE_NAME = process.env.OCCURRENCE_DATABASE_NAME || 'occurrencesDB';
export const OCCURRENCE_DATABASE_PASS = process.env.OCCURRENCE_DATABASE_PASS || 'password';
export const OCCURRENCE_DATABASE_PORT = +process.env.OCCURRENCE_DATABASE_PORT || 3306;
export const OCCURRENCE_DATABASE_USER = process.env.OCCURRENCE_DATABASE_USER || 'root';
export const OCCURRENCE_PORT = process.env.OCCURRENCE_PORT || process.env.PORT || 3000;
export const SERVICE_NAME = packageJson.name;
