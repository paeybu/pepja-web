import type { Metadata } from "next";
import Link from "next/link";
import { listPeptides } from "@/lib/content";
import { DIFFICULTY_LABEL, getPeptideTheme } from "@/lib/category-theme";

export const metadata: Metadata = {
  title: "เปปไทด์",
  description: "รายการเปปไทด์ทั้งหมดที่มีในเว็บนี้",
};

export default function PeptidesIndexPage() {
  const peptides = listPeptides();

  return (
    <article>
      <header className="pb-8">
        <span
          className="chip text-[color:var(--color-brand-ink)]"
          style={{ background: "var(--color-brand-soft)" }}
        >
          เปปไทด์
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          เปปไทด์ทั้งหมด
        </h1>
        <p className="mt-3 text-[color:var(--color-ink-muted)]">
          รายการเปปไทด์ที่เราเขียนถึง — เลือกตัวที่คุณสนใจ
        </p>
      </header>

      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {peptides.map((p) => {
          const theme = getPeptideTheme(p.category);
          return (
            <li key={p.slug}>
              <Link
                href={`/peptides/${p.slug}`}
                className="card-surface group block h-full overflow-hidden p-5"
              >
                <div
                  className="h-1 -mx-5 -mt-5 mb-4"
                  style={{
                    background: `linear-gradient(90deg, ${theme.color}, color-mix(in oklab, ${theme.color} 30%, transparent))`,
                  }}
                />
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="chip"
                    style={{ color: theme.color, background: theme.soft }}
                  >
                    {theme.label}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[color:var(--color-ink-soft)]">
                    {DIFFICULTY_LABEL[p.difficulty] ?? p.difficulty}
                  </span>
                </div>
                <h2
                  className="mt-3 text-lg font-semibold leading-snug"
                  style={{ ["--hover-color" as string]: theme.color }}
                >
                  <span className="group-hover:text-[color:var(--hover-color)]">
                    {p.name_th}
                  </span>{" "}
                  <span className="text-sm font-normal text-[color:var(--color-ink-soft)]">
                    ({p.name_en})
                  </span>
                </h2>
                <p className="mt-2 text-sm leading-[1.75] text-[color:var(--color-ink-muted)]">
                  {p.short_desc}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
