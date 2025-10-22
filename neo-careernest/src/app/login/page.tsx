import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600">Welcome Back</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">Access NeoCareerNest</h1>
          <p className="mt-2 text-sm text-slate-600">Login as a Job Seeker or Neo HR partner to continue your journey.</p>
        </div>
        <form className="space-y-6">
          <div className="flex gap-4">
            <label className="flex flex-1 cursor-pointer flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 hover:border-indigo-500">
              <span className="font-semibold text-slate-900">Job Seeker</span>
              <span className="mt-2 text-xs text-slate-500">Apply for roles, track applications, and explore programs.</span>
              <input type="radio" name="role" defaultChecked className="sr-only" />
            </label>
            <label className="flex flex-1 cursor-pointer flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 hover:border-indigo-500">
              <span className="font-semibold text-slate-900">Neo HR</span>
              <span className="mt-2 text-xs text-slate-500">Manage openings, review applicants, and update pipelines.</span>
              <input type="radio" name="role" className="sr-only" />
            </label>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@neo.org"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
              Remember me
            </label>
            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          New to NeoCareerNest?{" "}
          <Link href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
