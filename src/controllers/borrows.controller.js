const { getAllBorrows, getBorrowById, createBorrow, updateBorrow, deleteBorrow } = require('../models/borrows.model')
const {borrowsConstructor} = require("../models/borrows.model");

const getAllBorrowsController = async (req, res) => {
    const dbRes = await getAllBorrows();
    res.json(dbRes.rows);
}

const getBorrowByIdController = async (req, res) => {
    const id = req.params.id;
    const dbRes = await getBorrowById(id);
    res.json(dbRes.rows[0]);
}

const createBorrowController = async (req, res) => {
    const dbRes = await createBorrow(new borrowsConstructor(req.body));
    res.json(dbRes.rows[0]);
}

const updateBorrowController = async (req, res) => {
    const id = req.params.id;
    const dbRes = await updateBorrow(id, req.body);
    res.json(dbRes.rows[0]);
}

const deleteBorrowController = async (req, res) => {
    const id = req.params.id;
    const dbRes = await deleteBorrow(id);
    res.json(dbRes.rows[0]);
}

module.exports = {
    getAllBorrowsController,
    getBorrowByIdController,
    createBorrowController,
    updateBorrowController,
    deleteBorrowController,
}