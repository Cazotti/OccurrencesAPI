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
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
const initializer_1 = require("../initializer");
const OccurrenceApi = () => {
    const appRouter = new utility_belt_1.AppRouter(express_1.default.Router());
    const ROUTE = '/occurrences';
    appRouter.post(ROUTE, {
        auth: null,
        requestSchema: {
            body: joi_1.default.object({
                description: joi_1.default.string().required(),
                code: joi_1.default.string().required(),
                registerAt: joi_1.default.date().required()
            }),
        },
        summary: ""
    }, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const occurrenceService = initializer_1.getOccurrenceService();
        try {
            const { body } = req;
            const { description, code, registerAt } = body;
            const occurrence = yield occurrenceService.create({
                description, code, registerAt
            });
            res.status(201).json(occurrence);
        }
        catch (error) {
            console.log(error);
        }
    }));
    appRouter.get(ROUTE, {
        auth: null,
        summary: ""
    }, () => __awaiter(void 0, void 0, void 0, function* () { }));
    appRouter.get(`${ROUTE}/:id`, {
        auth: null,
        summary: ""
    }, () => __awaiter(void 0, void 0, void 0, function* () { }));
    appRouter.patch(`${ROUTE}/:id`, {
        auth: null,
        summary: ""
    }, () => __awaiter(void 0, void 0, void 0, function* () { }));
    appRouter.delete(`${ROUTE}/:id`, {
        auth: null,
        summary: ""
    }, () => __awaiter(void 0, void 0, void 0, function* () { }));
    return appRouter;
};
exports.default = OccurrenceApi;
//# sourceMappingURL=occurrences.api.js.map