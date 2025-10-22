import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600">404</p>
      <h1 className="text-3xl font-semibold text-slate-900">The page you&apos;re looking for isn&apos;t available</h1>
      <p className="max-w-2xl text-sm text-slate-600">
        NeoCareerNest is constantly evolving. It&apos;s possible this route is coming soon or has been moved. Try navigating back to the career portal home.
      </p>
      <Link
        href="/"
        className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
