import { NextResponse } from 'next/server';
import { createProject, listProjects } from '@/lib/services/project-service';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const organizationId = searchParams.get('organizationId');
  if (!organizationId) {
    return NextResponse.json({ error: 'organizationId required' }, { status: 400 });
  }
  return NextResponse.json({ projects: await listProjects(organizationId) });
}

export async function POST(req: Request) {
  const project = await createProject(await req.json());
  return NextResponse.json({ project }, { status: 201 });
}
