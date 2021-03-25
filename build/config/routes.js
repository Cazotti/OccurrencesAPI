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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utility_belt_1 = require("@enviabybus/utility-belt");
const occurrences_api_1 = __importDefault(require("../api/occurrences.api"));
const configRoutes = (app) => {
    app.express.get('/ping', (_, res) => __awaiter(void 0, void 0, void 0, function* () { res.send('pong'); }));
    app.mount(occurrences_api_1.default());
    app.use(utility_belt_1.DocsApi(app));
};
exports.default = configRoutes;
//# sourceMappingURL=routes.js.map