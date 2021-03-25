"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.Occurrence = void 0;
const sequelize_1 = require("sequelize");
class Occurrence extends sequelize_1.Model {
}
exports.Occurrence = Occurrence;
const init = (sequelize) => {
    Occurrence.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        description: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING,
        },
        code: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING,
        },
        registerAt: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE,
        }
    }, { sequelize, tableName: 'Occurrences' });
};
exports.init = init;
exports.default = Occurrence;
//# sourceMappingURL=occurrence.js.map