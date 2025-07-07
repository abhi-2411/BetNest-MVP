// routes/betRoutes.js
import express from 'express';
import { submitBet, getBetsByBetter } from '../controllers/betController.js';
import { isBetter } from '../middleware/auth.js';

const router = express.Router();
router.post('/', isBetter, submitBet);
router.get('/:betterId', getBetsByBetter);

export default router;
