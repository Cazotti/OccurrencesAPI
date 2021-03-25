"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const environment = {
    name: env_1.ENVIRONMENT,
    isDevelopment() {
        return env_1.ENVIRONMENT === 'development';
    },
    isHomolog() {
        return env_1.ENVIRONMENT === 'homolog';
    },
    isProduction() {
        return env_1.ENVIRONMENT === 'production';
    },
    shortEnv() {
        if (env_1.ENVIRONMENT === 'production') {
            return 'prod';
        }
        if (env_1.ENVIRONMENT === 'homolog') {
            return 'hmg';
        }
        return 'dev';
    },
};
exports.default = environment;
//# sourceMappingURL=environment.js.map