export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-medium text-slate-700">© {new Date().getFullYear()} Neo Organization. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#privacy" className="transition hover:text-indigo-600">
            Privacy Policy
          </a>
          <a href="#terms" className="transition hover:text-indigo-600">
            Terms of Service
          </a>
          <a href="#contact" className="transition hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
