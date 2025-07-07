// routes/betterRoutes.js
import express from 'express';
import { requestCapital } from '../controllers/betterController.js';
import { isBetter } from '../middleware/auth.js';

const router = express.Router();
router.post('/capital-request', isBetter, requestCapital);

export default router;
