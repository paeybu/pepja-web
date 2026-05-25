import type { Metadata } from "next";
import { Disclaimer } from "@/components/mdx/Disclaimer";

export const metadata: Metadata = {
  title: "เกี่ยวกับ",
  description: "จุดยืนและแนวทางการเขียนของเว็บไซต์นี้",
};

const PRINCIPLES = [
  {
    title: "ลด harm มากกว่า gatekeep",
    body: "คุณเป็นผู้ใหญ่ คุณอ่าน คุณตัดสินใจ คุณรับผิดชอบเอง เราไม่บล็อกข้อมูล",
    color: "var(--color-cat-healing)",
    soft: "var(--color-cat-healing-soft)",
  },
  {
    title: "เป็นข้อมูล ไม่ใช่คำแนะนำ",
    body: "เราแปลและจัดระเบียบสิ่งที่ชุมชนระดับโลกรู้กันอยู่แล้ว ไม่ได้สร้างข้ออ้างทางการแพทย์ขึ้นมาใหม่",
    color: "var(--color-guide-concept)",
    soft: "var(--color-guide-concept-soft)",
  },
  {
    title: "พูดถึง trade-off ตรงๆ",
    body: "ทุกเส้นทาง (คลินิก / ร้านยา / research-grade) มีต้นทุนและความเสี่ยงจริง เราระบุไว้ทุกครั้ง",
    color: "var(--color-cat-growth)",
    soft: "var(--color-cat-growth-soft)",
  },
];

export default function AboutPage() {
  return (
    <article className="space-y-8">
      <header className="pb-2">
        <span
          className="chip text-[color:var(--color-brand-ink)]"
          style={{ background: "var(--color-brand-soft)" }}
        >
          เกี่ยวกับ
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          เกี่ยวกับเว็บนี้
        </h1>
      </header>

      <section className="space-y-4 leading-[1.85] text-[color:var(--color-ink-muted)]">
        <p>
          <span className="text-[color:var(--color-ink)]">
            เว็บไซต์นี้คือศูนย์ข้อมูลเปปไทด์ภาษาไทยแบบตรงไปตรงมา
          </span>{" "}
          สำหรับคนไทยที่ตัดสินใจอยากศึกษาเรื่องนี้แล้ว
          ข้อมูลส่วนใหญ่มีอยู่แล้วในภาษาอังกฤษ (Reddit, gray.guide, Stairway to Gray, ฟอรัมต่างๆ)
          เราแปลและเรียบเรียงให้อ่านง่ายขึ้นในภาษาไทย
        </p>
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <div
            key={p.title}
            className="card-surface overflow-hidden p-5"
          >
            <div
              className="h-1 -mx-5 -mt-5 mb-4"
              style={{
                background: `linear-gradient(90deg, ${p.color}, color-mix(in oklab, ${p.color} 30%, transparent))`,
              }}
            />
            <div
              aria-hidden
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: p.soft, color: p.color }}
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="mt-3 text-base font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm leading-[1.75] text-[color:var(--color-ink-muted)]">
              {p.body}
            </p>
          </div>
        ))}
      </section>

      <Disclaimer />
    </article>
  );
}
