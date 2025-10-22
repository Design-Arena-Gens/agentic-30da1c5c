"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/job-apply", label: "Job Apply" },
  { href: "/prepare", label: "Prepare" },
  { href: "/participate", label: "Participate" },
  { href: "/internships", label: "Internships" },
  { href: "/hr", label: "HR" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-slate-900">
          <span className="rounded bg-gradient-to-r from-blue-500 to-indigo-600 px-2 py-1 text-white">
            Neo
          </span>
          CareerNest
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-indigo-600 ${isActive ? "text-indigo-600" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg border border-indigo-500 px-4 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200 md:hidden">
        <nav className="flex flex-wrap items-center justify-center gap-4 px-4 py-3 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-indigo-600 ${isActive ? "text-indigo-600" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
