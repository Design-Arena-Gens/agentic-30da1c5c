type InternshipCardProps = {
  title: string;
  duration: string;
  stipend: string;
  mode: "Remote" | "Hybrid" | "Onsite";
  focus: string;
};

export default function InternshipCard({ title, duration, stipend, mode, focus }: InternshipCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <header className="mb-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">{mode}</p>
      </header>
      <p className="flex-1 text-sm leading-relaxed text-slate-600">{focus}</p>
      <dl className="mt-4 space-y-1 text-sm text-slate-500">
        <div className="flex justify-between">
          <dt>Duration</dt>
          <dd className="font-medium text-slate-700">{duration}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Stipend</dt>
          <dd className="font-medium text-slate-700">{stipend}</dd>
        </div>
      </dl>
    </article>
  );
}
