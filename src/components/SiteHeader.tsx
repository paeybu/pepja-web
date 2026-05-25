import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/start", label: "เริ่มที่นี่" },
  { href: "/peptides", label: "เปปไทด์" },
  { href: "/guides", label: "คู่มือ" },
  { href: "/about", label: "เกี่ยวกับ" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[color:var(--color-rule-strong)]">
      <div className="mx-auto flex max-w-3xl items-baseline justify-between gap-6 px-6 py-6">
        <Link
          href="/"
          className="font-semibold tracking-tight text-[color:var(--color-ink)] hover:text-[color:var(--color-brand)]"
        >
          เปปจาพอร์ทัล
        </Link>
        <nav className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-sm">
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
            className="text-xs text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-brand)]"
            title="เครื่องคำนวณโดส"
          >
            ↗ คำนวณโดส
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
