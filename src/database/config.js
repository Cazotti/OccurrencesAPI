import {
  OCCURRENCE_DATABASE_USER,
  OCCURRENCE_DATABASE_PASS,
  OCCURRENCE_DATABASE_NAME,
  OCCURRENCE_DATABASE_HOST,
  OCCURRENCE_DATABASE_PORT,
  OCCURRENCE_DATABASE_DIALECT,
} from '../env';

const dbEnvironmentConfig = {
  username: OCCURRENCE_DATABASE_USER,
  password: OCCURRENCE_DATABASE_PASS,
  database: OCCURRENCE_DATABASE_NAME,
  host: OCCURRENCE_DATABASE_HOST,
  port: OCCURRENCE_DATABASE_PORT,
  dialect: OCCURRENCE_DATABASE_DIALECT,
  seederStorage: 'sequelize',
};

const config = {
  local: dbEnvironmentConfig,
  development: dbEnvironmentConfig,
  homolog: dbEnvironmentConfig,
  production: dbEnvironmentConfig,
};

export default config;
module.exports = config;
