import { Router } from 'express';
import { parseRequirements } from '../agents/parserAgent.js';
import { estimateCost } from '../agents/estimatorAgent.js';
const r=Router();
r.post('/', async (req,res)=>{ const parsed=await parseRequirements(req.body.text||''); const estimate=estimateCost(req.body.features||{}); res.json({parsed,estimate}); });
export default r;
