import {
  ApiErrorHandler,
  Application,
  LoggerAdapter,
  LoggerMiddleware,
  RequestResponseLogMiddleware,
} from '@enviabybus/utility-belt';
import express from 'express';

export const configBeforeMiddlewares = ({
  app,
  loggerAdapter,
}: {
  app: Application,
  loggerAdapter: LoggerAdapter
}): void => {
  app.use(express.json());
  app.use(express.text());
  app.use(express.raw());
  app.use(LoggerMiddleware(loggerAdapter));
  app.use(RequestResponseLogMiddleware());
};

export const configAfterMiddlewares = ({
  app,
  errorHandler,
}: { app: Application, errorHandler: ApiErrorHandler }): void => {
  app.use((err: Error, _req: any, res: express.Response, _next: any) => {
    return errorHandler.handle(err, res);
  });
};
