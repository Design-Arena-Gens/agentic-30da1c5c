import Link from "next/link";

const highlights = [
  {
    title: "Curated Roles",
    description: "Explore exclusive positions crafted for innovators across engineering, product, and operations.",
  },
  {
    title: "Guided Preparation",
    description: "Accelerate readiness with expert resources, interview simulators, and resume insights.",
  },
  {
    title: "Continuous Upskilling",
    description: "Participate in hackathons, coding challenges, and learning paths designed by Neo Organization.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative isolate flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-500 to-slate-900 px-4 pb-24 pt-28 text-center text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="inline-flex items-center rounded-full border border-white/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/80">
            Neo Organization Careers
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Build your future with Neo Organization&apos;s opportunities
          </h1>
          <p className="text-lg text-white/80 sm:text-xl">
            Discover high-impact roles, prepare with personalized guidance, and unlock growth via NeoCareerNest—the official talent gateway for Neo Organization.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/job-apply"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-indigo-700 transition hover:scale-105 hover:bg-slate-100"
          >
            Apply for Jobs
          </Link>
          <Link
            href="/prepare"
            className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
          >
            Start Preparing
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-slate-900">Two tailored pathways. One vision.</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Neo Organization empowers both ambitious job seekers and strategic HR leaders. Experience an integrated talent ecosystem where applications, evaluations, and team building happen seamlessly.
            </p>
            <div className="mt-8 grid gap-5 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Job Seekers</h3>
                <p className="mt-2">
                  Access live openings, track application status, and get personalized interview preparation integrated with Neo Organization workflows.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">Neo HR Partners</h3>
                <p className="mt-2">
                  Manage requisitions, review candidate pipelines, and collaborate across teams with streamlined CRUD controls accessible anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-indigo-50 to-white p-10 text-slate-700 lg:w-1/2">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-indigo-600">What&apos;s inside</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span>Exclusive job boards and internship showcases from Neo Organization&apos;s innovation hubs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span>Guided preparation modules featuring experts, resume builders, and tailored interview Q/A.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-indigo-500" />
                  <span>Participation suite with contests, coding mock tests, and flagship Neo hackathons.</span>
                </li>
              </ul>
            </div>
            <Link
              href="/participate"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
