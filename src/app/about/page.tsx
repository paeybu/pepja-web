import type { Metadata } from "next";
import { Disclaimer } from "@/components/mdx/Disclaimer";

export const metadata: Metadata = {
  title: "เกี่ยวกับ",
  description: "จุดยืนและแนวทางการเขียนของเว็บไซต์นี้",
};

export default function AboutPage() {
  return (
    <article className="space-y-6">
      <header className="border-b border-[color:var(--color-rule)] pb-6">
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
          เกี่ยวกับเว็บนี้
        </h1>
      </header>

      <section className="space-y-4 leading-[1.85]">
        <p>
          เว็บไซต์นี้คือศูนย์ข้อมูลเปปไทด์ภาษาไทยแบบตรงไปตรงมา
          สำหรับคนไทยที่ตัดสินใจอยากศึกษาเรื่องนี้แล้ว
          ข้อมูลส่วนใหญ่มีอยู่แล้วในภาษาอังกฤษ (Reddit, gray.guide, Stairway to Gray, ฟอรัมต่างๆ)
          เราแปลและเรียบเรียงให้อ่านง่ายขึ้นในภาษาไทย
        </p>
        <p>
          <strong>ลด harm มากกว่า gatekeep</strong> — คุณเป็นผู้ใหญ่ คุณอ่าน
          คุณตัดสินใจ คุณรับผิดชอบเอง เราไม่บล็อกข้อมูล
        </p>
        <p>
          <strong>เป็นข้อมูล ไม่ใช่คำแนะนำ</strong> — เราแปลและจัดระเบียบสิ่งที่ชุมชนระดับโลกรู้กันอยู่แล้ว
          ไม่ได้สร้างข้ออ้างทางการแพทย์ขึ้นมาใหม่
        </p>
        <p>
          <strong>พูดถึง trade-off ตรงๆ</strong> — ทุกเส้นทาง (คลินิก / ร้านยา /
          research-grade) มีต้นทุนและความเสี่ยงจริง เราระบุไว้ทุกครั้ง
        </p>
      </section>

      <Disclaimer />
    </article>
  );
}
