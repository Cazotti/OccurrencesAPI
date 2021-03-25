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
const lodash_1 = require("lodash");
const occurrence_1 = require("../database/models/occurrence");
class OccurrenceRepository {
    constructor({ driver, occurrenceParser }) {
        this.driver = driver;
        this.occurrenceParser = occurrenceParser;
    }
    create(occurrence) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, code, registerAt } = occurrence;
            try {
                const createdOccurrence = yield occurrence_1.Occurrence.create({
                    description,
                    code,
                    registerAt
                });
                return this.parse(createdOccurrence);
            }
            catch (error) {
                throw error;
            }
        });
    }
    list({ filter = {}, limit, offset, order = { id: 'ASC' }, } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const findOptions = {
                where: lodash_1.omitBy(filter, lodash_1.isNil),
            };
            if (offset) {
                findOptions.offset = offset;
            }
            if (order) {
                findOptions.order = lodash_1.toPairs(order);
            }
            if (limit) {
                findOptions.limit = limit;
            }
            const dbModels = yield occurrence_1.Occurrence.findAll(findOptions);
            return dbModels.map(dbModel => this.occurrenceParser.parse(dbModel));
        });
    }
    parse(dbModel) {
        return this.occurrenceParser.parse(dbModel);
    }
}
exports.default = OccurrenceRepository;
//# sourceMappingURL=occurrence.repository.js.map