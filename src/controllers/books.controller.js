const booksModel = require('../models/books.model')
const {booksConstructor} = require("../models/books.model");

const getAllBooksController = async (req, res) => {
    const dbRes = await booksModel.getAllBooks();
    res.json(dbRes.rows);
}

const getBookByIdController = async (req, res) => {
    const id = req.params.id;
    const dbRes = await booksModel.getBookById(id);
    res.json(dbRes.rows[0]);
}

const createBookController = async (req, res) => {
    const dbRes = await booksModel.createBook(new booksConstructor(req.body));
    res.json(dbRes.rows[0]);
}

const updateBookController = async (req, res) => {
    const id = req.params.id;
    const dbRes = await booksModel.updateBook(id, req.body);
    res.json(dbRes.rows[0]);
}

const deleteBookController = async (req, res) => {
    const id = req.params.id;
    const dbRes = await booksModel.deleteBook(id);
    res.json(dbRes.rows[0]);
}

module.exports = {
    getAllBooksController,
    getBookByIdController,
    createBookController,
    updateBookController,
    deleteBookController,
}