'use strict';

require('dotenv').config();
const Knex = require('knex');
const { Model } = require('objection');
const Hapi = require('hapi');
const knex = Knex(require('./knexfile')[`${process.env.POSTGRES_CONFIGURATION_ENVIRONMENT}`]);
const credentials = `redis://${process.env.REDIS_URL}:6379`;
Model.knex(knex);

const server = Hapi.server({
    port: process.env.PORT,
    routes: {
        cors: true
    }
});


const validate = async (decoded, request, h) => {
    try {
        const client = request.redis.client;

        let res = await client.get(decoded.id);

        let session;
        if (res) {
            session = JSON.parse(res);
        }
        else {
            return { isValid: false }
        }
        if (session.valid === false || new Date().getTime() * 60 * 1000 <= session.exp) { // ensure that the token hasn't expired
            return { isValid: false }
        } else {
            session.exp = new Date().getTime()+30 *60*1000; // time + 30 minutes
            await client.set(decoded.id, JSON.stringify(session));
            return { isValid: true }
        }

    } catch (err) {
        throw Boom.badRequest(err)
    }
}



const init = async () => {
    await server.register(require('hapi-auth-jwt2'))
    await server.register(
        {
            plugin: require('hapi-redis2'),
            options: {
                settings: credentials,
                decorate:true
            }
        });

    server.auth.strategy('jwt', 'jwt', {
            key: process.env.SECRET,
            verifyOptions: { algorithms: ['HS256'] },
            validate: validate
        });

    server.route(require('./routes/users_routes'))

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

module.exports = {
    server: server.listener
}