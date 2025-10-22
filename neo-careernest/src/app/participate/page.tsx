import ContestCard from "@/components/ContestCard";

const programs = [
  {
    name: "Neo Innovate Championship",
    category: "Hackathon • Product + Engineering",
    schedule: "June 12 - June 15",
    difficulty: "Advanced" as const,
    description: "Prototype solutions for real Neo customer scenarios with mentorship from principal engineers.",
  },
  {
    name: "Velocity Mock Test",
    category: "Coding Assessment • Algorithms",
    schedule: "Weekly • Every Saturday",
    difficulty: "Intermediate" as const,
    description: "Benchmark problem solving with curated DS/Algo sets mapped to full stack roles.",
  },
  {
    name: "Elevate Pitch Sprint",
    category: "Contest • Idea Storytelling",
    schedule: "July 03 - July 05",
    difficulty: "Beginner" as const,
    description: "Showcase product thinking by pitching bold ideas to Neo venture leaders.",
  },
  {
    name: "Circuit Labs",
    category: "Hackathon • Hardware + IoT",
    schedule: "August 22 - August 25",
    difficulty: "Advanced" as const,
    description: "Collaborate on smart edge-tech prototypes with access to lab grade toolkits and mentors.",
  },
  {
    name: "Flow Build Challenge",
    category: "Contest • No-Code Automation",
    schedule: "Open • On-demand",
    difficulty: "Beginner" as const,
    description: "Automate manual workflows using Neo Flow Studio and unlock special recognition badges.",
  },
  {
    name: "Catalyst Mock Interview",
    category: "Simulation • Behavioral + Leadership",
    schedule: "By Appointment",
    difficulty: "Intermediate" as const,
    description: "Practice Neo&apos;s leadership principles with coaches and receive actionable feedback.",
  },
];

export default function ParticipatePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="space-y-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600">Participate & Grow</p>
        <h1 className="text-3xl font-semibold text-slate-900">Engage with flagship programs and mock experiences</h1>
        <p className="mx-auto max-w-3xl text-sm text-slate-600">
          Unlock exclusive Neo Organization challenges from coding sprints to leadership showcases. Gain badges, feedback, and fast-track access to hiring pods.
        </p>
      </header>
      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <ContestCard key={program.name} {...program} />
        ))}
      </section>
    </div>
  );
}
