import { DashboardShell } from '@/components/dashboard-shell';

export default function BoQPage({ params }: { params: { orgSlug: string } }) {
  return (
    <DashboardShell orgSlug={params.orgSlug} title="BoQ Estimation">
      <section className="card p-4">
        <h2 className="text-lg font-semibold text-yellow-200">Bill of Quantity Core</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          <li>Create versioned BoQ estimates (v1/v2).</li>
          <li>Add line items with quantity × rate auto total.</li>
          <li>Draft/submitted/approved state machine in schema.</li>
        </ul>
      </section>
    </DashboardShell>
  );
}
