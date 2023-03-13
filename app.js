const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const errorHandler = require('./error-exception');
const swaggerJSDoc = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/document', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

app.use(bodyParser.json());
app.use(router);
app.use(errorHandler)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}
start();