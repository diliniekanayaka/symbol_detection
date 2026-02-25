import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { createSessionToken, hashPassword } from '@/lib/auth';
import { registerSchema } from '@/lib/validators';
import { createOrganization } from '@/lib/services/organization-service';

export async function POST(req: Request) {
  const payload = registerSchema.parse(await req.json());

  const existing = await db.user.findUnique({ where: { email: payload.email } });
  if (existing) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
  }

  const user = await db.user.create({
    data: {
      email: payload.email,
      passwordHash: await hashPassword(payload.password),
      fullName: payload.fullName,
      emailVerifiedAt: new Date()
    }
  });

  const org = await createOrganization({
    name: payload.organizationName,
    slug: payload.organizationSlug,
    ownerId: user.id
  });

  const token = await createSessionToken({ userId: user.id, orgId: org.id });

  return NextResponse.json({ token, userId: user.id, orgId: org.id });
}
