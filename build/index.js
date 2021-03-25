"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./config/routes"));
const utility_belt_1 = require("@enviabybus/utility-belt");
const middlewares_1 = require("./config/middlewares");
const initializer_1 = require("./initializer");
const app = new utility_belt_1.Application({ express: express_1.default(), name: 'Occurrences' });
exports.logger = initializer_1.getLogger();
const apiErrorHandler = initializer_1.getApiErrorHandler({ logger: exports.logger });
middlewares_1.configBeforeMiddlewares({
    app,
    loggerAdapter: initializer_1.getLoggerAdapter(),
});
routes_1.default(app);
middlewares_1.configAfterMiddlewares({ app, errorHandler: apiErrorHandler });
exports.default = app;
//# sourceMappingURL=index.js.map