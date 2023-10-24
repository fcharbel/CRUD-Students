const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/index.js'];

const doc = {
    info: {
        version: '3.0.1',
        title: 'CRUD-Students',
        description: 'A CRUD for storing and managing student data',
    },
    host: 'tame-pear-squirrel.cyclic.app',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [],
    securityDefinitions: {},
    definitions: {},
    components: {}
};

swaggerAutogen(outputFile, endpointsFiles, doc);