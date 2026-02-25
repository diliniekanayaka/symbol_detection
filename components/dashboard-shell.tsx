import { Sidebar } from './sidebar';

export function DashboardShell({ orgSlug, title, children }: { orgSlug: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl gap-6 p-6">
      <Sidebar orgSlug={orgSlug} />
      <main className="flex-1 space-y-4">
        <header className="card p-4">
          <h1 className="text-2xl font-semibold text-yellow-300">{title}</h1>
          <p className="text-sm text-zinc-300">Production-focused MVP workspace for estimations, execution, and controls.</p>
        </header>
        {children}
      </main>
    </div>
  );
}
