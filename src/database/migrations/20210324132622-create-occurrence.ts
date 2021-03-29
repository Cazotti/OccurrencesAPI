import { DataTypes, QueryInterface } from 'sequelize';

export default {
  async up (queryInterface: QueryInterface): Promise<void> {
    return await queryInterface.createTable('occurrences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      code: {
        allowNull: false,
        type: DataTypes.STRING
      },
      registerAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  async down (queryInterface: QueryInterface): Promise<void> {
    return await queryInterface.dropTable('occurrences');
  },
};
