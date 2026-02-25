import { NextResponse } from 'next/server';
import { createBoQ, listBoQ } from '@/lib/services/boq-service';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('projectId');
  if (!projectId) {
    return NextResponse.json({ error: 'projectId required' }, { status: 400 });
  }

  return NextResponse.json({ boqVersions: await listBoQ(projectId) });
}

export async function POST(req: Request) {
  const boqVersion = await createBoQ(await req.json());
  return NextResponse.json({ boqVersion }, { status: 201 });
}
