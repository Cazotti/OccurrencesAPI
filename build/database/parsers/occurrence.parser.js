"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OccurrenceParser = void 0;
const occurrence_model_1 = __importDefault(require("../../models/occurrence.model"));
class OccurrenceParser {
    parse(dbModel) {
        const { id, description, code, registerAt } = dbModel;
        return new occurrence_model_1.default({
            id,
            description,
            code,
            registerAt
        });
    }
}
exports.OccurrenceParser = OccurrenceParser;
exports.default = OccurrenceParser;
//# sourceMappingURL=occurrence.parser.js.map