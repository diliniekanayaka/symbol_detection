import { db } from '@/lib/db';
import type { z } from 'zod';
import { taskSchema } from '@/lib/validators';

export async function createTask(input: z.infer<typeof taskSchema>) {
  const data = taskSchema.parse(input);
  return db.task.create({ data });
}

export async function listTasks(projectId: string) {
  return db.task.findMany({ where: { projectId }, orderBy: { createdAt: 'desc' } });
}
