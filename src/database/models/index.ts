import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';

import {
  OCCURRENCE_DATABASE_DIALECT,
  OCCURRENCE_DATABASE_HOST,
  OCCURRENCE_DATABASE_NAME,
  OCCURRENCE_DATABASE_PASS,
  OCCURRENCE_DATABASE_PORT,
  OCCURRENCE_DATABASE_USER,
} from '../../env';

const basename = path.basename(__filename);
const sequelize = new Sequelize(
  OCCURRENCE_DATABASE_NAME,
  OCCURRENCE_DATABASE_USER,
  OCCURRENCE_DATABASE_PASS,
  {
    host: OCCURRENCE_DATABASE_HOST,
    port: OCCURRENCE_DATABASE_PORT,
    dialect: OCCURRENCE_DATABASE_DIALECT as any,
  },
);

const modelsModules = fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (['.js', '.ts'].includes(file.slice(-3))))
  .map((file) => require(path.join(__dirname, file)));

modelsModules.forEach(module => module.init(sequelize));
modelsModules.forEach(module => module.associate && module.associate(sequelize));

export default sequelize;
