const jobPipeline = [
  { role: "Full Stack Engineer", applicants: 26, status: "Screening" },
  { role: "Data Scientist", applicants: 18, status: "Technical Round" },
  { role: "Product Manager", applicants: 12, status: "Final Interviews" },
];

const actions = [
  { name: "Create New Job", description: "Publish openings with skill tags, responsibilities, and compensation bands." },
  { name: "Update Role Details", description: "Refresh JD highlights, adjust hiring stage requirements, or modify deadlines." },
  { name: "Review Applicants", description: "Evaluate candidate profiles, share feedback with panel, and advance stages." },
  { name: "Archive Role", description: "Close filled requisitions and export reports to the central ATS." },
];

export default function HRPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600">Neo HR Command Center</p>
        <h1 className="text-3xl font-semibold text-slate-900">Manage Neo Organization&apos;s talent pipelines</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Add new openings, edit job details, review candidate status, and streamline onboarding flows from a single control hub.
        </p>
      </header>
      <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-lg font-semibold text-slate-900">Open Roles</h2>
          <p className="mt-2 text-sm text-slate-600">Instant snapshot of candidate traction across active requisitions.</p>
          <div className="mt-6 space-y-4">
            {jobPipeline.map((job) => (
              <div key={job.role} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{job.role}</p>
                  <p className="text-xs text-slate-500">{job.applicants} applicants</p>
                </div>
                <span className="rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600">{job.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
            <p className="mt-2 text-sm text-slate-600">Complete CRUD flows built for agility.</p>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              {actions.map((action) => (
                <li key={action.name} className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                  <p className="font-semibold text-slate-900">{action.name}</p>
                  <p className="mt-1 text-xs">{action.description}</p>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-indigo-500">
              Launch HR Workspace
            </button>
          </div>
          <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8 shadow-lg">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Integrations</h3>
            <p className="mt-3 text-sm text-indigo-900">
              Connect to Neo&apos;s Spring Boot services and MySQL talent store via secured APIs. Manage stages, interviews, and offers in sync with ATS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
