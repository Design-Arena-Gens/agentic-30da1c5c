type PrepareCardProps = {
  title: string;
  description: string;
  highlights: string[];
  cta: string;
};

export default function PrepareCard({ title, description, highlights, cta }: PrepareCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-500">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="mt-5 w-full rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50">
        {cta}
      </button>
    </article>
  );
}
