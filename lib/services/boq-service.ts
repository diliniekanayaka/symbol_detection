import { db } from '@/lib/db';
import type { z } from 'zod';
import { boqSchema } from '@/lib/validators';

export async function createBoQ(input: z.infer<typeof boqSchema>) {
  const data = boqSchema.parse(input);
  return db.boQVersion.create({
    data: {
      projectId: data.projectId,
      name: data.name,
      versionLabel: data.versionLabel,
      state: 'DRAFT'
    }
  });
}

export async function addBoQLineItem(versionId: string, item: { description: string; quantity: number; rate: number; unit: string }) {
  return db.boQLineItem.create({
    data: {
      boQVersionId: versionId,
      description: item.description,
      quantity: item.quantity,
      rate: item.rate,
      unit: item.unit,
      total: item.quantity * item.rate
    }
  });
}

export async function listBoQ(projectId: string) {
  return db.boQVersion.findMany({ where: { projectId }, include: { lineItems: true } });
}
