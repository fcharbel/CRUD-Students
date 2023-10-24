require('dotenv').config();
const express = require('express');
const route = require('./routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express();

const corsOptions = {
    origin: 'https://tame-pear-squirrel.cyclic.app/api-docs',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Se você estiver usando credenciais (por exemplo, cookies)
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(route);

app.listen(process.env.PORT)