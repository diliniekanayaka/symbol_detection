import { DashboardShell } from '@/components/dashboard-shell';

export default function ProjectsPage({ params }: { params: { orgSlug: string } }) {
  return (
    <DashboardShell orgSlug={params.orgSlug} title="Projects & Portfolio">
      <section className="card p-4">
        <h2 className="text-lg font-semibold text-yellow-200">Project Core (MVP)</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          <li>Create project via POST /api/projects.</li>
          <li>Includes client association, contract value, and budget baseline fields.</li>
          <li>Supports organization isolation with organizationId filter on GET.</li>
        </ul>
      </section>
    </DashboardShell>
  );
}
