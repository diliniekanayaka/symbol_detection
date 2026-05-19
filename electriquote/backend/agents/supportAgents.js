import { anthropic, CLAUDE_MODEL, parseJsonResponse } from '../utils/anthropicClient.js';
async function ask(system, payload){ const msg=await anthropic.messages.create({model:CLAUDE_MODEL,max_tokens:1500,system,messages:[{role:'user',content:JSON.stringify(payload)}]}); return parseJsonResponse(msg.content[0].text); }
export const marketPricingAgent=(p)=>ask('Return JSON with lkr_usd_rate and notes.',p);
export const timelineAgent=(p)=>ask('Return JSON with 5 phases and percentages.',p);
export const docsAgent=(p)=>ask('Return JSON with NRM2 docs fields.',p);
