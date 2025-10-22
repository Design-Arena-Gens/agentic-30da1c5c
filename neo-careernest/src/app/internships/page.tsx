import InternshipCard from "@/components/InternshipCard";

const internships = [
  {
    title: "Digital Product Design Intern",
    duration: "6 Months",
    stipend: "₹25,000 / month",
    mode: "Hybrid" as const,
    focus: "Design intuitive experiences alongside Neo's design system guild.",
  },
  {
    title: "Cloud Platform Intern",
    duration: "3 Months",
    stipend: "₹22,000 / month",
    mode: "Remote" as const,
    focus: "Automate environments, infrastructure-as-code, and observability dashboards.",
  },
  {
    title: "AI Research Intern",
    duration: "6 Months",
    stipend: "₹30,000 / month",
    mode: "Onsite" as const,
    focus: "Experiment with multimodal LLM pipelines for customer intelligence solutions.",
  },
  {
    title: "Growth Analytics Intern",
    duration: "4 Months",
    stipend: "₹20,000 / month",
    mode: "Hybrid" as const,
    focus: "Discover growth levers via funnels, cohorts, and experimentation insights.",
  },
  {
    title: "People Programs Intern",
    duration: "3 Months",
    stipend: "₹18,000 / month",
    mode: "Remote" as const,
    focus: "Co-create engagement rituals, onboarding journeys, and culture narratives.",
  },
  {
    title: "Security Engineering Intern",
    duration: "5 Months",
    stipend: "₹24,000 / month",
    mode: "Onsite" as const,
    focus: "Safeguard Neo's platforms with threat simulations and zero trust frameworks.",
  },
];

export default function InternshipsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600">Internships</p>
        <h1 className="text-3xl font-semibold text-slate-900">Explore Neo Organization internship pathways</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Gain hands-on impact with mentors, sprints, and real product missions. From design to security, choose your launchpad.
        </p>
      </header>
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {internships.map((internship) => (
          <InternshipCard key={internship.title} {...internship} />
        ))}
      </section>
    </div>
  );
}
