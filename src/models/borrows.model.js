const client = require('../db/db-connection');

const borrowsConstructor = function (borrow) {
    this.id_books = borrow.id_books;
    this.name = borrow.name;
    this.borrow_date = borrow.borrow_date;
    this.return_date = borrow.return_date;
    this.status = borrow.status;
}

const getAllBorrows = async () => {
    const query = {
        text: 'SELECT * FROM "borrow_books"."borrows"'
    }
    return await client.query(query);
}

const getBorrowById = async (id) => {
    const query = {
        text: 'SELECT * FROM "borrow_books"."borrows" WHERE id = $1',
        values: [id],
    };
    return await client.query(query);
}

const createBorrow = async (borrow) => {
    const query = {
        text: 'INSERT INTO "borrow_books"."borrows" (id_books, name, borrow_date, return_date, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        values: [borrow.id_books, borrow.name, borrow.borrow_date, borrow.return_date, borrow.status],
    };
    return await client.query(query);
}

const updateBorrow = async (id, borrow) => {
    const query = {
        text: 'UPDATE "borrow_books"."borrows" SET id_books = $1, name = $2, borrow_date = $3, return_date = $4, status = $5 WHERE id = $6 RETURNING *',
        values: [borrow.id_books, borrow.name, borrow.borrow_date, borrow.return_date, borrow.status, id],
    };
    return await client.query(query);
}

const deleteBorrow = async (id) => {
    const query = {
        text: 'DELETE FROM "borrow_books"."borrows" WHERE id = $1 RETURNING *',
        values: [id],
    };
    return await client.query(query);
}

module.exports = {
    getAllBorrows,
    getBorrowById,
    createBorrow,
    updateBorrow,
    deleteBorrow,
    borrowsConstructor,
}