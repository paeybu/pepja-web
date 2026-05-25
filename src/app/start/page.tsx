import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เริ่มที่นี่",
  description:
    "คู่มือเปปไทด์สำหรับมือใหม่ เลือกเส้นทางตามเป้าหมายของคุณ",
};

const PATHS = [
  {
    goal: "ลดน้ำหนัก",
    href: "/peptides/semaglutide",
    label: "เริ่มที่ GLP-1: เซมากลูไทด์ (Ozempic, Wegovy)",
    tint: "var(--color-cat-glp1)",
  },
  {
    goal: "ลดน้ำหนัก (เลือกตัวที่แรงกว่า)",
    href: "/peptides/tirzepatide",
    label: "เทอร์เซพาไทด์ (Mounjaro): dual agonist",
    tint: "var(--color-cat-glp1)",
  },
  {
    goal: "ฟื้นตัวจากบาดเจ็บ / กล้ามเนื้อ",
    href: "/peptides/bpc-157",
    label: "BPC-157: เปปไทด์เพื่อ healing",
    tint: "var(--color-cat-healing)",
  },
  {
    goal: "ยังไม่แน่ใจ อยากเข้าใจภาพรวมก่อน",
    href: "/guides/what-are-peptides",
    label: "เปปไทด์คืออะไร และทำไมคนถึงใช้กัน",
    tint: "var(--color-guide-concept)",
  },
  {
    goal: "อยากรู้ว่าในไทยซื้อยังไงได้บ้าง",
    href: "/guides/thailand-landscape",
    label: "เปปไทด์ในไทย: คลินิก ร้านยา หรือสั่งเอง",
    tint: "var(--color-guide-sourcing)",
  },
];

export default function StartPage() {
  return (
    <article>
      <header className="pb-10">
        <p className="eyebrow">เริ่มที่นี่</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          เริ่มจาก{" "}
          <span className="text-[color:var(--color-brand)]">เป้าหมาย</span>{" "}
          ของคุณ
        </h1>
        <p className="mt-4 max-w-[58ch] text-lg leading-[1.85] text-[color:var(--color-ink-muted)]">
          เลือกเป้าหมายของคุณ แล้วเราจะแนะนำว่าควรอ่านอะไรก่อน
        </p>
      </header>

      <ul>
        {PATHS.map((p) => (
          <li key={p.href + p.goal}>
            <Link href={p.href} className="index-row group">
              <div>
                <p className="text-xs text-[color:var(--color-ink-soft)]">
                  ถ้าเป้าหมายคุณคือ
                </p>
                <h2 className="mt-1 text-xl font-semibold leading-snug">
                  {p.goal}
                </h2>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">
                  อ่าน:{" "}
                  <span style={{ color: p.tint }} className="font-medium">
                    {p.label}
                  </span>{" "}
                  →
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
