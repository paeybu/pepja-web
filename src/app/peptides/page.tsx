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
      <header className="pb-10">
        <p className="eyebrow">ดัชนี</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          เปปไทด์ทั้งหมด
        </h1>
        <p className="mt-4 max-w-[58ch] text-base leading-[1.85] text-[color:var(--color-ink-muted)]">
          รายการเปปไทด์ที่เราเขียนถึง เลือกตัวที่คุณสนใจ
          แต่ละหน้ามีกลไก โดส ผลข้างเคียง และหมายเหตุเรื่องการสั่งซื้อในไทย
        </p>
      </header>

      <ul>
        {peptides.map((p) => {
          const theme = getPeptideTheme(p.category);
          return (
            <li key={p.slug}>
              <Link
                href={`/peptides/${p.slug}`}
                className="index-row group"
              >
                <div>
                  <h2 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-[color:var(--color-brand)]">
                    {p.name_th}{" "}
                    <span className="text-base font-normal italic text-[color:var(--color-ink-soft)]">
                      {p.name_en}
                    </span>
                  </h2>
                  <p className="mt-2 max-w-[60ch] text-sm leading-[1.75] text-[color:var(--color-ink-muted)]">
                    {p.short_desc}
                  </p>
                  <p className="mt-2 text-xs text-[color:var(--color-ink-soft)]">
                    {DIFFICULTY_LABEL[p.difficulty] ?? p.difficulty}
                  </p>
                </div>
                <span
                  className="cat-tag self-start"
                  style={{ ["--cat-tag-color" as string]: theme.color }}
                >
                  {theme.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
