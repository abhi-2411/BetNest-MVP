import express from 'express';
import { createInvestor, getInvestorStats } from '../controllers/investorController.js';
import { isInvestor } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', createInvestor);
router.get('/:id', isInvestor, getInvestorStats);

export default router;
