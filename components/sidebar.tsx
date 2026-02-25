import Link from 'next/link';
import { ElectriquoteLogo } from './electriquote-logo';

export function Sidebar({ orgSlug }: { orgSlug: string }) {
  const nav = [
    { href: `/${orgSlug}/projects`, label: 'Projects' },
    { href: `/${orgSlug}/tasks`, label: 'Tasks' },
    { href: `/${orgSlug}/boq`, label: 'BoQ' }
  ];

  return (
    <aside className="card w-72 p-4">
      <ElectriquoteLogo className="h-14 w-full" />
      <p className="mt-2 text-xs uppercase tracking-widest text-yellow-300">Black + Yellow Control Center</p>
      <nav className="mt-6 space-y-2">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-md border border-yellow-500/20 px-3 py-2 text-sm hover:bg-yellow-400/10">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
