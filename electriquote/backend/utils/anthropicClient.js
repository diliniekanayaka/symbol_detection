import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
dotenv.config();
export const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
export const CLAUDE_MODEL = 'claude-sonnet-4-20250514';
export const parseJsonResponse = (text) => JSON.parse(text.replace(/```json|```/g, '').trim());
