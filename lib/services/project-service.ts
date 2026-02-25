import { db } from '@/lib/db';
import type { z } from 'zod';
import { projectSchema } from '@/lib/validators';

export async function createProject(input: z.infer<typeof projectSchema>) {
  const data = projectSchema.parse(input);
  return db.project.create({
    data
  });
}

export async function listProjects(organizationId: string) {
  return db.project.findMany({
    where: { organizationId },
    orderBy: { createdAt: 'desc' }
  });
}
