import { AppRequest, AppRouter, Logger } from '@enviabybus/utility-belt';
import express from 'express';
import Joi from 'joi';

import { getOccurrenceService } from '../initializer';

const OccurrenceApi = (): AppRouter => {
  const appRouter = new AppRouter(express.Router());
  const ROUTE = '/occurrences';

  appRouter.post(ROUTE, {
    auth: null,
    requestSchema: {
      body: Joi.object({
        description: Joi.string().required(),
        code: Joi.string().required(),
        registerAt: Joi.date().required()
      }),
    },
    summary: ""
  }, async (req: AppRequest, res) => {
    const occurrenceService = getOccurrenceService();

    try {
      const { body } = req;
      const { description, code, registerAt } = body;

      const occurrence = await occurrenceService.create({
        description, code, registerAt
      });

      res.status(201).json(occurrence);
    } catch (error) {
      console.log(error);
    }
  })

  appRouter.get(ROUTE, {
    auth: null, 
    summary: ""
  }, async () => {});

  appRouter.get(`${ROUTE}/:id`, {
    auth: null, 
    summary: ""
  }, async () => {});

  appRouter.patch(`${ROUTE}/:id`, {
    auth: null, 
    summary: ""
  }, async () => {});

  appRouter.delete(`${ROUTE}/:id`, {
    auth: null, 
    summary: ""
  }, async () => {});

  return appRouter;
}

export default OccurrenceApi;