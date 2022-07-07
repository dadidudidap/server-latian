const Hapi = require('@hapi/hapi');
const routes = require('./routes.js');

const init = async () => {
    const server = Hapi.Server({
        port : 5000,
        host : '0.0.0.0'
    });

    server.route(routes);
    

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init()