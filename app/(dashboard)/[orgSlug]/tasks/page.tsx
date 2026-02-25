import { DashboardShell } from '@/components/dashboard-shell';

export default function TasksPage({ params }: { params: { orgSlug: string } }) {
  return (
    <DashboardShell orgSlug={params.orgSlug} title="Task Operations">
      <section className="card p-4">
        <h2 className="text-lg font-semibold text-yellow-200">Task Management (MVP)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          <li>Create tasks with status and priority pipeline control.</li>
          <li>Estimate hours and assign to project scope.</li>
          <li>Retrieve project tasks via GET /api/tasks.</li>
        </ul>
      </section>
    </DashboardShell>
  );
}
