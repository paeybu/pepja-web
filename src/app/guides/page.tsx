import type { Metadata } from "next";
import Link from "next/link";
import { listGuides } from "@/lib/content";
import { DIFFICULTY_LABEL, getGuideTheme } from "@/lib/category-theme";

export const metadata: Metadata = {
  title: "คู่มือ",
  description: "คู่มือการใช้งานเปปไทด์ภาคปฏิบัติ",
};

export default function GuidesIndexPage() {
  const guides = listGuides();

  return (
    <article>
      <header className="pb-8">
        <span
          className="chip"
          style={{
            color: "var(--color-guide-howto)",
            background: "var(--color-guide-howto-soft)",
          }}
        >
          คู่มือ
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          คู่มือ
        </h1>
        <p className="mt-3 text-[color:var(--color-ink-muted)]">
          วิธีผสม วิธีฉีด วิธีคำนวณโดส และเรื่องอื่นๆ ที่ต้องรู้ก่อนเริ่ม
        </p>
      </header>

      <ul className="mt-4 space-y-3">
        {guides.map((g) => {
          const theme = getGuideTheme(g.category);
          return (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="card-surface group flex items-center gap-5 overflow-hidden p-5"
              >
                <div
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold"
                  style={{ background: theme.soft, color: theme.color }}
                >
                  {iconForCategory(g.category)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="chip"
                      style={{ color: theme.color, background: theme.soft }}
                    >
                      {theme.label}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-[color:var(--color-ink-soft)]">
                      {DIFFICULTY_LABEL[g.difficulty] ?? g.difficulty}
                    </span>
                  </div>
                  <h2
                    className="mt-1.5 text-lg font-semibold leading-snug"
                    style={{ ["--hover-color" as string]: theme.color }}
                  >
                    <span className="group-hover:text-[color:var(--hover-color)]">
                      {g.title}
                    </span>
                  </h2>
                </div>
                <span
                  aria-hidden
                  className="shrink-0 text-xl transition-transform group-hover:translate-x-1"
                  style={{ color: theme.color }}
                >
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function iconForCategory(category: string): string {
  switch (category) {
    case "how-to":
      return "🔧";
    case "concept":
      return "💡";
    case "safety":
      return "⚠";
    case "sourcing":
      return "🛒";
    default:
      return "•";
  }
}
