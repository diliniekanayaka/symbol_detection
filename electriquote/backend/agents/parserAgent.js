import { anthropic, CLAUDE_MODEL, parseJsonResponse } from '../utils/anthropicClient.js';
const SYSTEM = `Extract electrical project features and land details. Output JSON only. Include inferred flags. Convert 1 perch=25.29m2, 1 acre=4047m2.`;
export async function parseRequirements(text){
  const msg = await anthropic.messages.create({ model: CLAUDE_MODEL, max_tokens: 1500, system: SYSTEM, messages:[{role:'user',content:text}]});
  return parseJsonResponse(msg.content[0].text);
}
