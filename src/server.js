const client = require('./db/db-connection')
const routesBooks = require('./routes/books.route')
const routesBorrows = require('./routes/borrows.route')
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./middleware/swagger-doc.json");
const getConfigSwagger = require("./middleware/swagger");
const express = require('express')
const server = express()
server.use(express.json());
server.set('json spaces', 2);

client.connect()

server.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile))

server.use('/books', routesBooks)
server.use('/borrows', routesBorrows)

server.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});

module.exports = server