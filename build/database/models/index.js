"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const env_1 = require("../../env");
const basename = path_1.default.basename(__filename);
const sequelize = new sequelize_1.Sequelize(env_1.OCCURRENCE_DATABASE_NAME, env_1.OCCURRENCE_DATABASE_USER, env_1.OCCURRENCE_DATABASE_PASS, {
    host: env_1.OCCURRENCE_DATABASE_HOST,
    port: env_1.OCCURRENCE_DATABASE_PORT,
    dialect: env_1.OCCURRENCE_DATABASE_DIALECT,
});
const modelsModules = fs_1.default
    .readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (['.js', '.ts'].includes(file.slice(-3))))
    .map((file) => require(path_1.default.join(__dirname, file)));
modelsModules.forEach(module => module.init(sequelize));
modelsModules.forEach(module => module.associate && module.associate(sequelize));
//export { Occurrence } from './occurrence';
exports.default = sequelize;
// npx sequelize-cli model:create --name Occurrence --attributes id:integer,description:string,code:string,registerAt:date
//# sourceMappingURL=index.js.map