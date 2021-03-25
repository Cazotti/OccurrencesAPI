import { OCCURRENCE_PORT } from './env';
import app, { logger } from './index';

app.express.listen(OCCURRENCE_PORT, () => {
  logger.info(`[OCCURRENCES] listening on port ${OCCURRENCE_PORT}.`);
});