"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryInterface.createTable('Occurrences', {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: sequelize_1.DataTypes.INTEGER
                },
                description: {
                    allowNull: false,
                    type: sequelize_1.DataTypes.STRING
                },
                code: {
                    allowNull: false,
                    type: sequelize_1.DataTypes.STRING
                },
                registerAt: {
                    allowNull: false,
                    type: sequelize_1.DataTypes.DATE
                },
                createdAt: {
                    allowNull: false,
                    type: sequelize_1.DataTypes.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: sequelize_1.DataTypes.DATE
                }
            });
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryInterface.dropTable('Occurrences');
        });
    },
};
//# sourceMappingURL=20210324132622-create-occurrence.js.map