import { Router } from 'express';
const r=Router();
r.post('/:type',(req,res)=>res.json({ok:true,type:req.params.type,payload:req.body}));
export default r;
