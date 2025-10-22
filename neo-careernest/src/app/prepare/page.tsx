import PrepareCard from "@/components/PrepareCard";

const resources = [
  {
    title: "Career Guidance",
    description: "Align your ambitions with Neo Organization's growth tracks through curated playbooks and mentorship prompts.",
    highlights: ["Roadmap sessions with Neo guides", "Skill-gap assessments", "Role-based success frameworks"],
    cta: "Download Playbook",
  },
  {
    title: "Expert Speak",
    description: "Learn from Neo leaders sharing insights on innovation, culture, and future-ready competencies.",
    highlights: ["Monthly live masterclasses", "Ask-me-anything forums", "Innovation case studies"],
    cta: "Watch Session",
  },
  {
    title: "Resume Maker",
    description: "Craft ATS-friendly submissions tailored to Neo's expectations with dynamic templates and metrics guidance.",
    highlights: ["Neo-aligned templates", "Impact statement generator", "Auto keyword suggestions"],
    cta: "Build Resume",
  },
  {
    title: "Interview Experiences",
    description: "Study real stories from Neo hires across engineering, design, and leadership tracks.",
    highlights: ["Round-by-round recaps", "Preparation checklists", "Recommended learning capsules"],
    cta: "Read Narratives",
  },
  {
    title: "Personalised Interview Q/A",
    description: "Train with adaptive Q/A sets calibrated to your profile, past experience, and desired roles.",
    highlights: ["AI-curated interviews", "Structured feedback loops", "Replay your responses"],
    cta: "Start Mock Interview",
  },
];

export default function PreparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600">Preparation Hub</p>
        <h1 className="text-3xl font-semibold text-slate-900">Accelerate readiness with Neo&apos;s learning ecosystem</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Discover resources that pair expertly with open roles. Build confidence, sharpen craft, and walk into interviews with clarity.
        </p>
      </header>
      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <PrepareCard key={resource.title} {...resource} />
        ))}
      </section>
    </div>
  );
}
