const startupTime = process.hrtime.bigint();

import 'source-map-support/register';
import 'reflect-metadata';

import { LoggerFactory } from './logger/logger';
import { Kernel } from './kernel';
import { App } from './app';

const logger = LoggerFactory.createLogger('Bootstrap');
logger.fatal('Ohayou, baka!');

(async () => {
    const app = Kernel.getService<App>(App);
    await app.start();

    logger.info('Started in {0}ms', Math.floor(Number(process.hrtime.bigint() - startupTime) / 1e6));
})();