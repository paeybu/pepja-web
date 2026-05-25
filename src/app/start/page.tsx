import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เริ่มที่นี่",
  description:
    "คู่มือเปปไทด์สำหรับมือใหม่ — เลือกเส้นทางตามเป้าหมายของคุณ",
};

const PATHS = [
  {
    goal: "ลดน้ำหนัก",
    href: "/peptides/semaglutide",
    label: "เริ่มที่ GLP-1 — เซมากลูไทด์ (Ozempic, Wegovy)",
    tint: "var(--color-cat-glp1)",
    tintSoft: "var(--color-cat-glp1-soft)",
  },
  {
    goal: "ลดน้ำหนัก (เลือกตัวที่แรงกว่า)",
    href: "/peptides/tirzepatide",
    label: "เทอร์เซพาไทด์ (Mounjaro) — dual agonist",
    tint: "var(--color-cat-glp1)",
    tintSoft: "var(--color-cat-glp1-soft)",
  },
  {
    goal: "ฟื้นตัวจากบาดเจ็บ / กล้ามเนื้อ",
    href: "/peptides/bpc-157",
    label: "BPC-157 — เปปไทด์เพื่อ healing",
    tint: "var(--color-cat-healing)",
    tintSoft: "var(--color-cat-healing-soft)",
  },
  {
    goal: "ยังไม่แน่ใจ อยากเข้าใจภาพรวมก่อน",
    href: "/guides/what-are-peptides",
    label: "เปปไทด์คืออะไร และทำไมคนถึงใช้กัน",
    tint: "var(--color-guide-concept)",
    tintSoft: "var(--color-guide-concept-soft)",
  },
  {
    goal: "อยากรู้ว่าในไทยซื้อยังไงได้บ้าง",
    href: "/guides/thailand-landscape",
    label: "เปปไทด์ในไทย — คลินิก ร้านยา หรือสั่งเอง",
    tint: "var(--color-guide-sourcing)",
    tintSoft: "var(--color-guide-sourcing-soft)",
  },
];

export default function StartPage() {
  return (
    <article>
      <header className="pb-8">
        <span
          className="chip text-[color:var(--color-brand-ink)]"
          style={{ background: "var(--color-brand-soft)" }}
        >
          เริ่มที่นี่
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          เริ่มจาก<span className="gradient-text">เป้าหมาย</span>ของคุณ
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-[1.85] text-[color:var(--color-ink-muted)]">
          เลือกเป้าหมายของคุณ แล้วเราจะแนะนำว่าควรอ่านอะไรก่อน
        </p>
      </header>

      <ol className="mt-6 space-y-3">
        {PATHS.map((p, i) => (
          <li key={p.href + p.goal}>
            <Link
              href={p.href}
              className="card-surface group flex items-start gap-4 overflow-hidden p-5"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold"
                style={{ background: p.tintSoft, color: p.tint }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-ink-soft)]">
                  ถ้าเป้าหมายคุณคือ
                </p>
                <p className="mt-0.5 text-lg font-semibold">{p.goal}</p>
                <p
                  className="mt-2 text-sm font-medium"
                  style={{ color: p.tint }}
                >
                  {p.label} <span aria-hidden>→</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
