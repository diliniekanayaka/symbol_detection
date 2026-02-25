export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center p-6">
      <section className="card w-full p-6">
        <h1 className="text-2xl font-semibold text-yellow-300">Sign in to Electriquote</h1>
        <p className="mt-2 text-sm text-zinc-300">Use /api/auth/login for authentication requests.</p>
        <form className="mt-6 space-y-3">
          <input className="w-full rounded border border-yellow-400/30 bg-black/60 px-3 py-2" placeholder="Email" />
          <input className="w-full rounded border border-yellow-400/30 bg-black/60 px-3 py-2" placeholder="Password" type="password" />
          <button className="w-full rounded bg-yellow-400 px-3 py-2 font-semibold text-black" type="button">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
