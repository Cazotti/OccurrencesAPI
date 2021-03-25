"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../env");
const dbEnvironmentConfig = {
    username: env_1.OCCURRENCE_DATABASE_USER,
    password: env_1.OCCURRENCE_DATABASE_PASS,
    database: env_1.OCCURRENCE_DATABASE_NAME,
    host: env_1.OCCURRENCE_DATABASE_HOST,
    port: env_1.OCCURRENCE_DATABASE_PORT,
    dialect: env_1.OCCURRENCE_DATABASE_DIALECT,
    seederStorage: 'sequelize',
};
const config = {
    local: dbEnvironmentConfig,
    development: dbEnvironmentConfig,
    homolog: dbEnvironmentConfig,
    production: dbEnvironmentConfig,
};
exports.default = config;
module.exports = config;
//# sourceMappingURL=config.js.map