const client = require('../db/db-connection')

const getBooks = async (req, res) => {
    const query = {
        text: 'SELECT * FROM "borrow_books"."books"'
    }
    const dbRes = await client.query(query);
    res.json(dbRes.rows);
}

module.exports = {
    getBooks
}