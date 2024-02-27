const client = require('./db/db-connection')
const routes = require('./routes/books.route')
const swaggerUI = require("swagger-ui-express");
const getConfigSwagger = require("./middleware/swagger");
const express = require('express')
const server = express()
server.use(express.json());
server.set('json spaces', 2);

client.connect()

server.use('/doc', swaggerUI.serve)
server.get('/doc', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

server.use('/books', routes)


server.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});

module.exports = server