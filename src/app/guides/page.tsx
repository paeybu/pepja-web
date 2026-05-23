import type { Metadata } from "next";
import Link from "next/link";
import { listGuides } from "@/lib/content";

export const metadata: Metadata = {
  title: "คู่มือ",
  description: "คู่มือการใช้งานเปปไทด์ภาคปฏิบัติ",
};

const CATEGORY_LABEL: Record<string, string> = {
  "how-to": "วิธีทำ",
  concept: "ทำความเข้าใจ",
  safety: "ความปลอดภัย",
  sourcing: "แหล่งซื้อ",
};

export default function GuidesIndexPage() {
  const guides = listGuides();

  return (
    <article>
      <header className="border-b border-[color:var(--color-rule)] pb-8">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          คู่มือ
        </h1>
        <p className="mt-3 text-[color:var(--color-ink-muted)]">
          วิธีผสม วิธีฉีด วิธีคำนวณโดส และเรื่องอื่นๆ ที่ต้องรู้ก่อนเริ่ม
        </p>
      </header>

      <ul className="mt-8 divide-y divide-[color:var(--color-rule)]">
        {guides.map((g) => (
          <li key={g.slug} className="py-5">
            <Link href={`/guides/${g.slug}`} className="group block">
              <h2 className="text-lg font-semibold group-hover:text-[color:var(--color-accent)]">
                {g.title}
              </h2>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs uppercase tracking-wide text-[color:var(--color-ink-muted)]">
                <span>{CATEGORY_LABEL[g.category] ?? g.category}</span>
                <span>·</span>
                <span>{g.difficulty}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
