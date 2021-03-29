import { Application, DocsApi } from '@enviabybus/utility-belt';

import OccurrenceApi from '../api/occurrences.api';

const configRoutes = (
  app: Application,
): void => {
  app.express.get('/ping', async (_, res) => { res.send('pong'); });
  app.mount(OccurrenceApi())
  app.use(DocsApi(app));
};

export default configRoutes;
