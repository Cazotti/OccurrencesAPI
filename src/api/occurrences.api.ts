import { AppRequest, AppRouter, InvalidParamsError, Logger } from '@enviabybus/utility-belt';
import express from 'express';
import Joi from 'joi';

import { OccurrenceRepositoryNotFoundError } from '../errors/repositories/occurrence.repository';
import { getApiErrorHandler, getGandalfAuthenticator, getOccurrenceService } from '../initializer';

const OccurrenceApi = (): AppRouter => {
  const appRouter = new AppRouter(express.Router());
  const userAuthenticator = getGandalfAuthenticator();
  const ROUTE = '/occurrences';

  const occurrenceSchema = Joi.object({
    id: Joi.number().integer().positive(),
    description: Joi.string(),
    code: Joi.string(),
    registerAt: Joi.date()
  });

  appRouter.post(ROUTE, {
    auth: userAuthenticator,
    summary: 'Criação de ocorrência',
    requestSchema: {
      body: Joi.object({
        description: Joi.string().required(),
        code: Joi.string().required(),
        registerAt: Joi.date().required(),
      }),
    },
    responseSchema: {
      201: occurrenceSchema.description('Created'),
    },
  }, async (req: AppRequest, res: any) => {
    const logger = getLogger(req);
    const apiErrorHandler = getApiErrorHandler({ logger });
    const occurrenceService = getOccurrenceService();

    try {
      const { body } = req;
      const { description, code, registerAt } = body;

      const occurrence = await occurrenceService.create({ description, code, registerAt });

      res.status(201).json(occurrence);
    } catch (error) {
      if (error instanceof InvalidParamsError) {
        apiErrorHandler.handle(error, res, 400);
      } else {
        apiErrorHandler.handle(error, res);
      }
    }
  });

  appRouter.get(ROUTE, {
    auth: userAuthenticator,
    summary: 'Listagem de ocorrências',
    responseSchema: {
      200: Joi.array().items(occurrenceSchema).description('OK'),
    },
  }, async (req: AppRequest, res: any) => {
    const logger = getLogger(req);
    const apiErrorHandler = getApiErrorHandler({ logger });
    const occurrenceService =  getOccurrenceService();

    try {
      const occurrences = await occurrenceService.list();

      res.json(occurrences);
    } catch (error) {
      apiErrorHandler.handle(error, res);
    }
  });

  appRouter.get(`${ROUTE}/:id`, {
    auth: userAuthenticator,
    summary: 'Busca de ocorrência por ID',
    requestSchema: {
      params: Joi.object({
        id: Joi.number().positive().required(),
      }),
    },
    responseSchema: {
      200: occurrenceSchema.description('OK'),
    },
  }, async (req: AppRequest, res: any) => {
    const logger = getLogger(req);
    const apiErrorHandler = getApiErrorHandler({ logger });
    const occurrenceService =  getOccurrenceService();

    try {
      const { params } = req;
      const id = Number(params.id);

      const occurrence = await occurrenceService.findById(id);
      res.json(occurrence);
    } catch (error) {
      if (error instanceof OccurrenceRepositoryNotFoundError) {
        apiErrorHandler.handle(error, res, 404);
      } else {
        apiErrorHandler.handle(error, res);
      }
    }
  });

  return appRouter;
}

// #region private functions
const getLogger = (req: AppRequest): Logger => {
  const { logger } = req;
  if (!logger) { throw new Error('Missing logger on request'); }
  return logger;
};
// #endregion private functions

export default OccurrenceApi;
