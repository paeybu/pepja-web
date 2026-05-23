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
  },
  {
    goal: "ลดน้ำหนัก (เลือกตัวที่แรงกว่า)",
    href: "/peptides/tirzepatide",
    label: "เทอร์เซพาไทด์ (Mounjaro) — dual agonist",
  },
  {
    goal: "ฟื้นตัวจากบาดเจ็บ / กล้ามเนื้อ",
    href: "/peptides/bpc-157",
    label: "BPC-157 — เปปไทด์เพื่อ healing",
  },
  {
    goal: "ยังไม่แน่ใจ อยากเข้าใจภาพรวมก่อน",
    href: "/guides/what-are-peptides",
    label: "เปปไทด์คืออะไร และทำไมคนถึงใช้กัน",
  },
  {
    goal: "อยากรู้ว่าในไทยซื้อยังไงได้บ้าง",
    href: "/guides/thailand-landscape",
    label: "เปปไทด์ในไทย — คลินิก ร้านยา หรือสั่งเอง",
  },
];

export default function StartPage() {
  return (
    <article>
      <header className="border-b border-[color:var(--color-rule)] pb-8">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          เริ่มที่นี่
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-[1.85] text-[color:var(--color-ink-muted)]">
          เลือกเป้าหมายของคุณ แล้วเราจะแนะนำว่าควรอ่านอะไรก่อน
        </p>
      </header>

      <ul className="mt-10 space-y-4">
        {PATHS.map((p) => (
          <li
            key={p.href + p.goal}
            className="border border-[color:var(--color-rule)] p-5"
          >
            <p className="text-xs uppercase tracking-widest text-[color:var(--color-ink-muted)]">
              ถ้าเป้าหมายคุณคือ
            </p>
            <p className="mt-1 text-lg font-semibold">{p.goal}</p>
            <Link
              href={p.href}
              className="mt-3 inline-block text-[color:var(--color-accent)] underline underline-offset-4"
            >
              {p.label} →
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
