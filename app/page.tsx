import Link from 'next/link';
import { ElectriquoteLogo } from '@/components/electriquote-logo';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-6 p-8 text-center">
      <ElectriquoteLogo className="h-20 w-full max-w-3xl" />
      <h1 className="text-4xl font-bold text-yellow-300">Electriquote Platform Bootstrap</h1>
      <p className="max-w-2xl text-zinc-300">
        Production-grade scaffolding for auth, organizations, projects, tasks, and bill of quantity workflows.
      </p>
      <div className="flex gap-3">
        <Link className="rounded-md bg-yellow-400 px-4 py-2 font-semibold text-black" href="/login">
          Login
        </Link>
        <Link className="rounded-md border border-yellow-400 px-4 py-2 text-yellow-200" href="/acme/projects">
          Open Demo Workspace
        </Link>
      </div>
    </main>
  );
}
