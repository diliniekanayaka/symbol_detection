import { db } from '@/lib/db';

export async function createOrganization(data: { name: string; slug: string; ownerId: string }) {
  return db.organization.create({
    data: {
      name: data.name,
      slug: data.slug,
      memberships: {
        create: {
          userId: data.ownerId,
          role: 'OWNER'
        }
      }
    }
  });
}

export async function listOrganizationsForUser(userId: string) {
  return db.organization.findMany({
    where: { memberships: { some: { userId } } },
    include: { memberships: true }
  });
}
