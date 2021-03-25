import {
  DataTypes,
  Model,
  Optional,
  Sequelize,
} from 'sequelize';

interface OccurrenceAttributes {
  id: number;
  description: string;
  code: string;
  registerAt: Date;
}

type OccurrenceCreationAttributes = Optional<OccurrenceAttributes, 'id'>;

export class Occurrence extends Model < OccurrenceAttributes, OccurrenceCreationAttributes > 
  implements OccurrenceAttributes {
    id!: number;
    description!: string;
    code!: string;
    registerAt!: Date;

    readonly createdAt!: Date;
    readonly updatedAt!: Date;
}

export const init = (sequelize: Sequelize): void => {
  Occurrence.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    code: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    registerAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  },
  { sequelize, tableName: 'Occurrences' });
};

export default Occurrence;
