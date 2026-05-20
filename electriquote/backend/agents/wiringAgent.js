import { anthropic, CLAUDE_MODEL, parseJsonResponse } from '../utils/anthropicClient.js';
const SYSTEM=`You are ElectriQuote's Wiring Route Planner... Return ONLY valid JSON.`;
export async function generateWiring(plan){
 const msg=await anthropic.messages.create({model:CLAUDE_MODEL,max_tokens:1500,system:SYSTEM,messages:[{role:'user',content:JSON.stringify(plan)}]});
 return parseJsonResponse(msg.content[0].text);
}
