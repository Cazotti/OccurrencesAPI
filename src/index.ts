import express from 'express';
import configRoutes from './config/routes';

import { Application } from '@enviabybus/utility-belt';

import { configBeforeMiddlewares, configAfterMiddlewares } from './config/middlewares';
import { getApiErrorHandler, getLogger, getLoggerAdapter } from './initializer';

const app = new Application({ express: express(), name: 'Occurrences' });
export const logger = getLogger();
const apiErrorHandler = getApiErrorHandler({ logger });

configBeforeMiddlewares({
  app,
  loggerAdapter: getLoggerAdapter(),
});
configRoutes(app);
configAfterMiddlewares({ app, errorHandler: apiErrorHandler });

export default app;