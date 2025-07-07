// routes/adminRoutes.js
import express from 'express';
import { triggerPayout, adminDashboard } from '../controllers/adminController.js';
import { isAdmin } from '../middleware/auth.js';

const router = express.Router();
router.post('/payouts', isAdmin, triggerPayout);
router.get('/dashboard', isAdmin, adminDashboard);

export default router;
