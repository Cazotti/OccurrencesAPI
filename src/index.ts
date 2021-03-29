import express from 'express';
import { Application } from '@enviabybus/utility-belt';

import { configAfterMiddlewares, configBeforeMiddlewares } from './config/middlewares';
import { getApiErrorHandler, getLoggerAdapter, getLogger} from './initializer';
import configRoutes from './config/routes';

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
