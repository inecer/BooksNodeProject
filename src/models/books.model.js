const client = require('../db/db-connection');

const booksConstructor = function (book) {
    this.title = book.title;
    this.author = book.author;
    this.year = book.year;
    this.type = book.type;
    this.num = book.num;
}

const getAllBooks = async () => {
    const query = {
        text: 'SELECT * FROM "borrow_books"."books"'
    }
    return await client.query(query);
}

const getBookById = async (id) => {
    const query = {
        text: 'SELECT * FROM "borrow_books"."books" WHERE id = $1',
        values: [id],
    };
    return await client.query(query);
}

const createBook = async (book) => {
    const query = {
        text: 'INSERT INTO "borrow_books"."books" (title, author, year, type, num) VALUES ($1, $2, $3, $4, $5) ',
        values: [book.title, book.author, book.year, book.type, book.num],
    };
    return await client.query(query);
}

const updateBook = async (id, book) => {
    const query = {
        text: 'UPDATE "borrow_books"."books" SET title = $1, author = $2, year = $3, type = $4, num = $5 WHERE id = $6 RETURNING *',
        values: [book.title, book.author, book.year, book.type, book.num, id],
    };
    return await client.query(query);
}

const deleteBook = async (id) => {
    const query = {
        text: 'DELETE FROM "borrow_books"."books" WHERE id = $1 RETURNING *',
        values: [id],
    };
    return await client.query(query);
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    booksConstructor
}