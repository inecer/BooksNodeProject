const express = require('express');
const router = express.Router();
const {
    getAllBorrowsController,
    getBorrowByIdController,
    createBorrowController,
    updateBorrowController,
    deleteBorrowController
} = require('../controllers/borrows.controller');

router.get('/', getAllBorrowsController);
router.get('/:id', getBorrowByIdController);
router.post('/', createBorrowController);
router.patch('/:id', updateBorrowController);
router.delete('/:id', deleteBorrowController);

module.exports = router;