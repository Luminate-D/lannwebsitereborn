import Fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import fstatic from '@fastify/static';
import { injectable } from 'inversify';
import { Constants } from '../constants';
import { LoggerFactory } from '../logger/logger';
import cors from '@fastify/cors';
import path from 'path';

// import DiscordOauth2 from 'discord-oauth2';
import { Kernel } from '../kernel';
import { ScamCounter } from './scam';
import { DateTime } from 'luxon';
// const oauth = new DiscordOauth2({
//     clientId: Constants.CLIENT_ID,
//     clientSecret: Constants.CLIENT_SECRET,
//     redirectUri: 'http://localhost:2024/authorize'
// });

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
            instance.register(cors, {
                origin: '*'
            });

            next();
        });

        this.fastify.register((instance, opts, next) => {
            instance.register(fstatic, {
                prefix: '/',
                root: path.resolve(__dirname, '../../frontend')
            });

            next();
        });
        //
        // this.fastify.get('/api/authorize/:code', async (req: FastifyRequest<{ Params: { code: string } }>, res) => {
        //     const code = req.params['code'];
        //
        //     const result = await oauth.tokenRequest({
        //         code: code,
        //         scope: 'identify',
        //         grantType: 'authorization_code'
        //     });
        //
        //     res.status(200).send(result);
        // });

        this.fastify.get('/api/dates', (req, res) => {
            res.status(200).send([
                { name: 'University', color: 'purple.500',
                    start: DateTime.fromISO('2024-09-01T21:00:00.000Z'),
                    end: DateTime.fromISO('2028-07-01T21:00:00.000Z') },
                { name: 'University Enroll Campaign', color: 'yellow.500',
                    start: DateTime.fromISO('2024-07-18T21:00:00.000Z'),
                    end: DateTime.fromISO('2024-07-31T15:00:00.000Z') },
                { name: 'School', color: 'purple.500',
                    start: DateTime.fromISO('2013-08-31T21:00:00.000Z'),
                    end: DateTime.fromISO('2024-06-26T21:00:00.000Z') },
                { name: 'Birth', color: 'purple.500',
                    start: DateTime.fromISO('2007-02-08T22:00:00.000Z'),
                    end: DateTime.fromISO('2007-02-08T22:00:00.001Z') },
            ]);
        });

        const scam = Kernel.getService<ScamCounter>(ScamCounter);
        this.fastify.post('/kekw', async (req, res) => {
            res.status(200).send({
                count: await scam.scam((req.headers['x-forwarded-for']! as string || '127.0.0.1').split(',')[0], 'moonlight'),
                total: await scam.total('moonlight')
            });
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