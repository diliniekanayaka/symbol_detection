import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import estimateRoute from './routes/estimate.js';
import planRoute from './routes/plan.js';
import pricingRoute from './routes/pricing.js';
import exportRoute from './routes/export.js';

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json({ limit: '5mb' }));
app.use('/api/estimate', estimateRoute);
app.use('/api/plan', planRoute);
app.use('/api/pricing', pricingRoute);
app.use('/api/export', exportRoute);
app.get('/api/health', (_, res) => res.json({ ok: true }));
app.listen(process.env.PORT || 3001);
