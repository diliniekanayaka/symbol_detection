import { NextResponse } from 'next/server';
import { createTask, listTasks } from '@/lib/services/task-service';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('projectId');
  if (!projectId) {
    return NextResponse.json({ error: 'projectId required' }, { status: 400 });
  }
  return NextResponse.json({ tasks: await listTasks(projectId) });
}

export async function POST(req: Request) {
  const task = await createTask(await req.json());
  return NextResponse.json({ task }, { status: 201 });
}
