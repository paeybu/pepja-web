import Link from "next/link";
import { Disclaimer } from "@/components/mdx/Disclaimer";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-[color:var(--color-rule-strong)]">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-12 text-sm">
        <Disclaimer />
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[color:var(--color-ink-muted)]">
            <Link
              href="/"
              className="transition-colors hover:text-[color:var(--color-brand)]"
            >
              หน้าแรก
            </Link>
            <Link
              href="/start"
              className="transition-colors hover:text-[color:var(--color-brand)]"
            >
              เริ่มที่นี่
            </Link>
            <Link
              href="/peptides"
              className="transition-colors hover:text-[color:var(--color-brand)]"
            >
              เปปไทด์
            </Link>
            <Link
              href="/guides"
              className="transition-colors hover:text-[color:var(--color-brand)]"
            >
              คู่มือ
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-[color:var(--color-brand)]"
            >
              เกี่ยวกับ
            </Link>
          </nav>
          <p className="m-0 text-xs text-[color:var(--color-ink-soft)]">
            © {new Date().getFullYear()} เปปจาพอร์ทัล
          </p>
        </div>
      </div>
    </footer>
  );
}
