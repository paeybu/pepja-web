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
    <header className="border-b border-[color:var(--color-rule)]">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="font-semibold tracking-tight">
          เปปจาพอร์ทัล
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[color:var(--color-ink-muted)] transition-colors hover:text-[color:var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://cal.pepja.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-[color:var(--color-rule)] px-2.5 py-1 text-xs text-[color:var(--color-ink-muted)] transition-colors hover:text-[color:var(--color-ink)]"
            title="เครื่องคำนวณโดส"
          >
            คำนวณโดส
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
