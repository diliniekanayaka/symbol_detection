import { anthropic, CLAUDE_MODEL, parseJsonResponse } from '../utils/anthropicClient.js';
const SYSTEM=`You are ElectriQuote's House Plan Generator... Output ONLY valid JSON.`;
export async function generateHousePlan(payload){
 const msg=await anthropic.messages.create({model:CLAUDE_MODEL,max_tokens:1500,system:SYSTEM,messages:[{role:'user',content:JSON.stringify(payload)}]});
 return parseJsonResponse(msg.content[0].text);
}
