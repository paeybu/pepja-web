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
      <header className="pb-10">
        <p className="eyebrow">ดัชนี</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          คู่มือทั้งหมด
        </h1>
        <p className="mt-4 max-w-[58ch] text-base leading-[1.85] text-[color:var(--color-ink-muted)]">
          วิธีผสม วิธีฉีด วิธีคำนวณโดส และเรื่องอื่นๆ ที่ต้องรู้ก่อนเริ่ม
        </p>
      </header>

      <ul>
        {guides.map((g) => {
          const theme = getGuideTheme(g.category);
          return (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="index-row group">
                <div>
                  <h2 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-[color:var(--color-brand)]">
                    {g.title}
                  </h2>
                  <p className="mt-2 text-xs text-[color:var(--color-ink-soft)]">
                    {DIFFICULTY_LABEL[g.difficulty] ?? g.difficulty}
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
