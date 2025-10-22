type ContestCardProps = {
  name: string;
  category: string;
  schedule: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
};

const difficultyColors: Record<ContestCardProps["difficulty"], string> = {
  Beginner: "bg-emerald-100 text-emerald-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-rose-100 text-rose-700",
};

export default function ContestCard({ name, category, schedule, difficulty, description }: ContestCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <header className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-500">{category}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyColors[difficulty]}`}>{difficulty}</span>
      </header>
      <p className="flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <footer className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{schedule}</span>
        <button className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700">
          Register
        </button>
      </footer>
    </article>
  );
}
