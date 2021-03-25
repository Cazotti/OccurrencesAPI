"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configAfterMiddlewares = exports.configBeforeMiddlewares = void 0;
const utility_belt_1 = require("@enviabybus/utility-belt");
const express_1 = __importDefault(require("express"));
const configBeforeMiddlewares = ({ app, loggerAdapter, }) => {
    app.use(express_1.default.json());
    app.use(express_1.default.text());
    app.use(express_1.default.raw());
    app.use(utility_belt_1.LoggerMiddleware(loggerAdapter));
    app.use(utility_belt_1.RequestResponseLogMiddleware());
};
exports.configBeforeMiddlewares = configBeforeMiddlewares;
const configAfterMiddlewares = ({ app, errorHandler, }) => {
    app.use((err, _req, res, _next) => {
        return errorHandler.handle(err, res);
    });
};
exports.configAfterMiddlewares = configAfterMiddlewares;
//# sourceMappingURL=middlewares.js.map