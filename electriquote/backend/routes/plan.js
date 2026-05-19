import { Router } from 'express';
import { generateHousePlan } from '../agents/housePlanAgent.js';
import { generateWiring } from '../agents/wiringAgent.js';
const r=Router();
const autoPlaceSymbols=(rooms=[])=>rooms.flatMap(room=>[{id:`${room.id}_light`,type:'light_ceiling',room_id:room.id,x_m:room.x_m+room.w_m/2,y_m:room.y_m+room.h_m/2}]);
r.post('/generate', async (req,res)=>{ const plan=await generateHousePlan(req.body); res.json({...plan,symbols:autoPlaceSymbols(plan.rooms)}); });
r.post('/wiring', async (req,res)=>res.json(await generateWiring(req.body)));
export default r;
