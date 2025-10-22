type JobCardProps = {
  title: string;
  openings: number;
  salary: string;
  description: string;
};

export default function JobCard({ title, openings, salary, description }: JobCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <header className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">
          Openings: <span className="font-medium text-slate-700">{openings}</span>
        </p>
      </header>
      <p className="flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <footer className="mt-6 flex items-center justify-between text-sm">
        <span className="font-semibold text-indigo-600">{salary}</span>
        <button className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-500">
          Apply Now
        </button>
      </footer>
    </article>
  );
}
