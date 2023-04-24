import * as dotenv from 'dotenv';

export interface AppConfig {
  appName: string;
  appDescription: string;
  appVersion: string;
  appTag: string;
  port: number;
  swaggerPath: string;
}

export function loadConfig(): AppConfig {
  dotenv.config();

  return {
    appName: process.env.APP_NAME || 'Studio',
    appDescription: process.env.APP_DESCRIPTION || 'The Studio Api description',
    appVersion: process.env.APP_VERSION || '1.0',
    appTag: process.env.APP_TAG || 'SK',
    port: process.env.PORT == null ? 3000 : Number(process.env.PORT),
    swaggerPath: process.env.SWAGGER_PATH || 'api',
  };
}
