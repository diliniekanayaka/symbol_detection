import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(2),
  organizationName: z.string().min(2),
  organizationSlug: z.string().min(2).regex(/^[a-z0-9-]+$/)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const projectSchema = z.object({
  organizationId: z.string().uuid(),
  clientName: z.string().min(2),
  name: z.string().min(2),
  contractValue: z.number().nonnegative().default(0),
  budgetBaseline: z.number().nonnegative().default(0)
});

export const taskSchema = z.object({
  projectId: z.string().uuid(),
  title: z.string().min(2),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']).default('TODO'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']).default('MEDIUM'),
  estimateHours: z.number().nonnegative().optional()
});

export const boqSchema = z.object({
  projectId: z.string().uuid(),
  name: z.string().min(2),
  versionLabel: z.string().min(1).default('v1')
});
