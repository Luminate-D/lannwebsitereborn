import Fastify from 'fastify';
import fstatic from '@fastify/static';
import * as path from 'path';

const fastify = Fastify({
    logger: true
});

fastify.register((instance, opts, next) => {
    instance.register(fstatic, {
        prefix: '/',
        root: path.resolve('build/frontend')
    });

    next();
});

fastify.register((instance, opts, next) => {
    instance.register(fstatic, {
        prefix: '/cdn',
        root: path.resolve('cdn')
    });

    next();
});

fastify.listen({ port: 2022 }).then(() => {
    console.log('Listening on port 2022');
});