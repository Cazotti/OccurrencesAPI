"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Occurrence = void 0;
class Occurrence {
    constructor(attr) {
        this.id = attr.id;
        this.description = attr.description;
        this.code = attr.code;
        this.registerAt = attr.registerAt;
    }
    toJSON() {
        return {
            id: this.id,
            description: this.description,
            code: this.code,
            registerAt: this.registerAt.toISOString()
        };
    }
}
exports.Occurrence = Occurrence;
exports.default = Occurrence;
//# sourceMappingURL=occurrence.model.js.map