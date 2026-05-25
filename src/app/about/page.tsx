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
    tint: "var(--color-cat-healing)",
  },
  {
    title: "เป็นข้อมูล ไม่ใช่คำแนะนำ",
    body: "เราแปลและจัดระเบียบสิ่งที่ชุมชนระดับโลกรู้กันอยู่แล้ว ไม่ได้สร้างข้ออ้างทางการแพทย์ขึ้นมาใหม่",
    tint: "var(--color-guide-concept)",
  },
  {
    title: "พูดถึง trade-off ตรงๆ",
    body: "ทุกเส้นทาง (คลินิก / ร้านยา / research-grade) มีต้นทุนและความเสี่ยงจริง เราระบุไว้ทุกครั้ง",
    tint: "var(--color-cat-growth)",
  },
];

export default function AboutPage() {
  return (
    <article>
      <header className="pb-10">
        <p className="eyebrow">เกี่ยวกับ</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          เกี่ยวกับเว็บนี้
        </h1>
      </header>

      <section className="dropcap text-lg leading-[1.95] text-[color:var(--color-ink)]">
        <p>
          เว็บไซต์นี้คือศูนย์ข้อมูลเปปไทด์ภาษาไทยแบบตรงไปตรงมา
          สำหรับคนไทยที่ตัดสินใจอยากศึกษาเรื่องนี้แล้ว
          ข้อมูลส่วนใหญ่มีอยู่แล้วในภาษาอังกฤษ (Reddit, gray.guide,
          Stairway to Gray, ฟอรัมต่างๆ) เราแปลและเรียบเรียงให้อ่านง่ายขึ้นในภาษาไทย
        </p>
      </section>

      <section className="mt-16 border-t border-[color:var(--color-rule-strong)] pt-10">
        <h2 className="text-xl font-medium text-[color:var(--color-ink)]">
          จุดยืนของเรา
        </h2>
        <ol className="mt-8">
          {PRINCIPLES.map((p, i) => (
            <li
              key={p.title}
              className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 border-t border-[color:var(--color-rule)] py-8 first:border-t-0 first:pt-0"
            >
              <span
                className="font-mono text-5xl font-semibold leading-none tabular-nums"
                style={{ color: p.tint }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="self-center">
                <h3 className="text-2xl font-semibold leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-[60ch] leading-[1.85] text-[color:var(--color-ink-muted)]">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <Disclaimer />
      </section>
    </article>
  );
}
