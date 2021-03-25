import { ENVIRONMENT } from './env';

interface Environment {
  name: string;
  isDevelopment(): boolean;
  isHomolog(): boolean;
  isProduction(): boolean;
  shortEnv(): string;
}

const environment: Environment = {
  name: ENVIRONMENT,

  isDevelopment() {
    return ENVIRONMENT === 'development';
  },

  isHomolog() {
    return ENVIRONMENT === 'homolog';
  },

  isProduction() {
    return ENVIRONMENT === 'production';
  },

  shortEnv(): string {
    if (ENVIRONMENT === 'production') {
      return 'prod';
    }
    if (ENVIRONMENT === 'homolog') {
      return 'hmg';
    }
    return 'dev';
  },
};

export default environment;
