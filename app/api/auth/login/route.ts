import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { createSessionToken, verifyPassword } from '@/lib/auth';
import { loginSchema } from '@/lib/validators';

export async function POST(req: Request) {
  const payload = loginSchema.parse(await req.json());
  const user = await db.user.findUnique({ where: { email: payload.email }, include: { memberships: true } });

  if (!user || !user.passwordHash) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const valid = await verifyPassword(payload.password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const firstOrg = user.memberships[0]?.organizationId;
  if (!firstOrg) {
    return NextResponse.json({ error: 'No organization linked' }, { status: 400 });
  }

  const token = await createSessionToken({ userId: user.id, orgId: firstOrg });
  return NextResponse.json({ token, userId: user.id, orgId: firstOrg });
}
