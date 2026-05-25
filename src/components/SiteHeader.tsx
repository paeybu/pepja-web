import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/start", label: "เริ่มที่นี่" },
  { href: "/peptides", label: "เปปไทด์" },
  { href: "/guides", label: "คู่มือ" },
  { href: "/sources", label: "แหล่งซื้อ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--color-rule)] bg-[color:color-mix(in_oklab,var(--color-paper)_85%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-sm transition-transform group-hover:rotate-6"
            style={{
              background:
                "linear-gradient(135deg, var(--color-brand), var(--color-cat-longevity))",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <circle cx="7" cy="17" r="3" />
              <circle cx="17" cy="7" r="3" />
            </svg>
          </span>
          <span>เปปจาพอร์ทัล</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[color:var(--color-ink-muted)] transition-colors hover:text-[color:var(--color-brand)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://cal.pepja.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-brand)] px-3 py-1 text-xs font-medium text-[color:var(--color-brand)] transition-colors hover:bg-[color:var(--color-brand)] hover:text-white"
            title="เครื่องคำนวณโดส"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="8" y2="10" />
              <line x1="12" y1="10" x2="12" y2="10" />
              <line x1="16" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="8" y2="14" />
              <line x1="12" y1="14" x2="12" y2="14" />
              <line x1="16" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="12" y2="18" />
            </svg>
            คำนวณโดส
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
