import JobCard from "@/components/JobCard";

const jobs = [
  {
    title: "Full Stack Engineer",
    openings: 6,
    salary: "₹12-18 LPA",
    description: "Build scalable micro frontends and cloud-native APIs powering Neo Organization's fintech platform.",
  },
  {
    title: "Data Scientist",
    openings: 4,
    salary: "₹14-22 LPA",
    description: "Leverage predictive modeling to architect intelligent decision systems across talent and product analytics.",
  },
  {
    title: "Product Manager",
    openings: 3,
    salary: "₹16-24 LPA",
    description: "Define product north star metrics, orchestrate roadmaps, and ship experiences loved by millions.",
  },
  {
    title: "Site Reliability Engineer",
    openings: 5,
    salary: "₹15-21 LPA",
    description: "Scale observability, resilience, and automated recovery workflows for mission-critical services.",
  },
  {
    title: "UX Researcher",
    openings: 2,
    salary: "₹10-14 LPA",
    description: "Reveal human-centered insights through discovery sprints and inform design iterations.",
  },
  {
    title: "AI Prompt Engineer",
    openings: 3,
    salary: "₹12-17 LPA",
    description: "Design trustworthy conversational flows for Neo's AI copilots embedded across business functions.",
  },
  {
    title: "Cybersecurity Analyst",
    openings: 4,
    salary: "₹13-19 LPA",
    description: "Strengthen application and infrastructure security posture with continuous monitoring and threat modeling.",
  },
  {
    title: "People Experience Partner",
    openings: 2,
    salary: "₹9-12 LPA",
    description: "Lead onboarding, culture programs, and engagement insights to craft memorable Neo experiences.",
  },
];

export default function JobApplyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600">Job Openings</p>
        <h1 className="text-3xl font-semibold text-slate-900">Join Neo Organization&apos;s high-impact teams</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Select a role to begin your application. Tailor your resume, align with core competencies, and get ready for the Neo journey.
        </p>
      </header>
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job.title} {...job} />
        ))}
      </section>
    </div>
  );
}
