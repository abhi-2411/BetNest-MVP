// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import betterRoutes from './routes/betterRoutes.js';
import betRoutes from './routes/betRoutes.js';
import investorRoutes from './routes/investorRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/better', betterRoutes);
app.use('/api/bets', betRoutes);
app.use('/api/investor', investorRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
