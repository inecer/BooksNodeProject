const router = require('express').Router()
const swaggerUI = require('swagger-ui-express')
const express = require('express')
const app = express()
const getConfigSwagger = require('./middleware/swagger.js')
const client = require('./db/db-connection')
const booksController = require('./controllers/booksController')

client.connect()

app.use('/doc', swaggerUI.serve)
app.get('/doc', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))



app.get('/books', booksController.getBooks)

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});

module.exports = router