import Fastify, { FastifyInstance } from 'fastify';
import fstatic from '@fastify/static';
import { injectable } from 'inversify';
import { Constants } from '../constants';
import { LoggerFactory } from '../logger/logger';
import path from 'path';

@injectable()
export class WebService {
    private logger = LoggerFactory.createLogger('WebService');
    private readonly fastify: FastifyInstance;

    public constructor() {
        this.fastify = Fastify();
        this.initMiddleware();
        console.log(path.resolve(__dirname, '../../frontend/index.html'))
    }

    private initMiddleware() {
        this.fastify.register((instance, opts, next) => {
            instance.register(fstatic, {
                prefix: '/',
                root: path.resolve(__dirname, '../../frontend')
            });

            next();
        });

        this.fastify.register((instance, opts, next) => {
            instance.register(fstatic, {
                prefix: '/cdn',
                root: path.resolve(__dirname, '../../../cdn')
            });

            next();
        });

        this.fastify.setNotFoundHandler((req, res) => {
            res.sendFile('index.html', path.resolve(__dirname, '../../frontend'));
        });
    }

    public async start() {
        await this.fastify.listen({ port: Constants.PORT, host: '0.0.0.0' });
        this.logger.info('Listening on port {0}', Constants.PORT);
    }
}