import Link from "next/link";
import { Disclaimer } from "@/components/mdx/Disclaimer";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper-muted)]">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-10 text-sm">
        <Disclaimer />
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[color:var(--color-ink-muted)]">
          <Link
            href="/"
            className="transition-colors hover:text-[color:var(--color-brand)]"
          >
            หน้าแรก
          </Link>
          <Link
            href="/start"
            className="transition-colors hover:text-[color:var(--color-brand)]"
          >
            เริ่มที่นี่
          </Link>
          <Link
            href="/peptides"
            className="transition-colors hover:text-[color:var(--color-brand)]"
          >
            เปปไทด์
          </Link>
          <Link
            href="/guides"
            className="transition-colors hover:text-[color:var(--color-brand)]"
          >
            คู่มือ
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-[color:var(--color-brand)]"
          >
            เกี่ยวกับ
          </Link>
        </nav>
        <p className="m-0 text-xs text-[color:var(--color-ink-soft)]">
          © {new Date().getFullYear()} เปปจาพอร์ทัล · ข้อมูลเป็นภาษาไทย
          สำหรับผู้ใหญ่ที่ตัดสินใจค้นคว้าด้วยตัวเอง
        </p>
      </div>
    </footer>
  );
}
