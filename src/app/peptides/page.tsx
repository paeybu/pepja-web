import type { Metadata } from "next";
import Link from "next/link";
import { listPeptides } from "@/lib/content";

export const metadata: Metadata = {
  title: "เปปไทด์",
  description: "รายการเปปไทด์ทั้งหมดที่มีในเว็บนี้",
};

const CATEGORY_LABEL: Record<string, string> = {
  glp1: "GLP-1",
  healing: "ฟื้นตัว",
  growth: "ฮอร์โมนเติบโต",
  longevity: "อายุยืน",
  cosmetic: "ผิวพรรณ",
  other: "อื่นๆ",
};

export default function PeptidesIndexPage() {
  const peptides = listPeptides();

  return (
    <article>
      <header className="border-b border-[color:var(--color-rule)] pb-8">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          เปปไทด์ทั้งหมด
        </h1>
        <p className="mt-3 text-[color:var(--color-ink-muted)]">
          รายการเปปไทด์ที่เราเขียนถึง — เลือกตัวที่คุณสนใจ
        </p>
      </header>

      <ul className="mt-8 divide-y divide-[color:var(--color-rule)]">
        {peptides.map((p) => (
          <li key={p.slug} className="py-5">
            <Link
              href={`/peptides/${p.slug}`}
              className="group block"
            >
              <div className="flex items-baseline gap-3">
                <h2 className="text-lg font-semibold group-hover:text-[color:var(--color-accent)]">
                  {p.name_th}
                </h2>
                <span className="text-sm text-[color:var(--color-ink-muted)]">
                  ({p.name_en})
                </span>
              </div>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-wide text-[color:var(--color-ink-muted)]">
                <span>{CATEGORY_LABEL[p.category] ?? p.category}</span>
                <span>·</span>
                <span>{p.difficulty}</span>
              </div>
              <p className="mt-2 text-[color:var(--color-ink-muted)]">
                {p.short_desc}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
