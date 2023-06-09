import express from 'express';
import {
    getAllTradesController,
    getTradeByIdController,
    createTradeController,
    updateTradeController,
    deleteTradeController
} from '../controllers/TradeController';

const router = express.Router();

// Get all trades
router.get('/', getAllTradesController);

// Get a specific trade
router.get('/:id', getTradeByIdController);

// Create a new trade
router.post('/', createTradeController);

// Update a trade
router.put('/:id', updateTradeController);

// Delete a trade
router.delete('/:id', deleteTradeController);

export default router;
