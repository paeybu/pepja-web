import Link from "next/link";
import { listGuides, listPeptides } from "@/lib/content";
import {
  DIFFICULTY_LABEL,
  getGuideTheme,
  getPeptideTheme,
} from "@/lib/category-theme";

export default function HomePage() {
  const peptides = listPeptides();
  const guides = listGuides();
  const latestPeptide = peptides[0];
  const latestGuide = guides[0];

  return (
    <article>
      <header className="pb-16">
        <p className="eyebrow">เปปไทด์ในไทย ฉบับภาษาไทย</p>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          เขียนเพื่อให้คุณ
          <br />
          <span className="text-[color:var(--color-brand)]">
            ตัดสินใจเองได้.
          </span>
        </h1>
        <p className="mt-8 max-w-[58ch] text-lg leading-[1.85] text-[color:var(--color-ink-muted)]">
          ข้อมูลเปปไทด์ภาษาไทยแบบตรงไปตรงมา สำหรับผู้ใหญ่ที่ตัดสินใจอยากศึกษาเรื่องนี้แล้ว
          ไม่ใช่หน้าขายของคลินิก ไม่ใช่หน้าข่มขู่ และไม่ปิดบังข้อมูลที่หาได้ในภาษาอังกฤษอยู่แล้ว
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-base">
          <Link
            href="/start"
            className="font-medium text-[color:var(--color-brand)] underline decoration-2 underline-offset-4 transition-colors hover:text-[color:var(--color-brand-ink)]"
          >
            เริ่มที่นี่ →
          </Link>
          <Link
            href="/peptides"
            className="editorial-link text-[color:var(--color-ink-muted)]"
          >
            ดูเปปไทด์ทั้งหมด →
          </Link>
          <Link
            href="/guides"
            className="editorial-link text-[color:var(--color-ink-muted)]"
          >
            ดูคู่มือ →
          </Link>
        </div>
      </header>

      <section className="border-t border-[color:var(--color-rule-strong)] py-10">
        <header className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-medium text-[color:var(--color-ink)]">
            เริ่มจากตรงไหนดี
          </h2>
          <Link
            href="/start"
            className="text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-brand)]"
          >
            เส้นทางทั้งหมด →
          </Link>
        </header>

        <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-2">
          <PrimerEntry
            href="/peptides/semaglutide"
            category={getPeptideTheme("glp1")}
            title="เซมากลูไทด์"
            en="Semaglutide"
            body="ตัวยายอดนิยมสำหรับลดน้ำหนัก กลไก โดสเริ่มต้น ผลข้างเคียง เทียบกับเทอร์เซพาไทด์"
          />
          <PrimerEntry
            href="/guides/what-are-peptides"
            category={getGuideTheme("concept")}
            title="เปปไทด์คืออะไร"
            en="What are peptides?"
            body="ภาพรวมเปปไทด์ทั้งหมด แตกต่างจากยาและอาหารเสริมยังไง เกรดทั้งสามคืออะไร"
          />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-rule-strong)] py-10">
        <header className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-medium text-[color:var(--color-ink)]">
            ล่าสุดในเว็บ
          </h2>
          <span className="text-sm text-[color:var(--color-ink-soft)]">
            {peptides.length + guides.length} เรื่อง
          </span>
        </header>

        <div className="mt-6">
          {latestPeptide && (
            <Link
              href={`/peptides/${latestPeptide.slug}`}
              className="index-row group"
            >
              <div>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-[color:var(--color-brand)]">
                  {latestPeptide.name_th}{" "}
                  <span className="font-normal italic text-[color:var(--color-ink-soft)]">
                    {latestPeptide.name_en}
                  </span>
                </h3>
                <p className="mt-2 max-w-[60ch] text-sm text-[color:var(--color-ink-muted)]">
                  {latestPeptide.short_desc}
                </p>
              </div>
              <span
                className="cat-tag self-start"
                style={{
                  ["--cat-tag-color" as string]: getPeptideTheme(
                    latestPeptide.category
                  ).color,
                }}
              >
                {getPeptideTheme(latestPeptide.category).label}
              </span>
            </Link>
          )}
          {latestGuide && (
            <Link
              href={`/guides/${latestGuide.slug}`}
              className="index-row group"
            >
              <div>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-[color:var(--color-brand)]">
                  {latestGuide.title}
                </h3>
                <p className="mt-2 max-w-[60ch] text-sm text-[color:var(--color-ink-muted)]">
                  {DIFFICULTY_LABEL[latestGuide.difficulty] ??
                    latestGuide.difficulty}
                </p>
              </div>
              <span
                className="cat-tag self-start"
                style={{
                  ["--cat-tag-color" as string]: getGuideTheme(
                    latestGuide.category
                  ).color,
                }}
              >
                {getGuideTheme(latestGuide.category).label}
              </span>
            </Link>
          )}
        </div>
      </section>

      <section className="border-t border-[color:var(--color-rule-strong)] py-10">
        <h2 className="text-xl font-medium text-[color:var(--color-ink)]">
          สำรวจต่อ
        </h2>
        <ul className="mt-6 space-y-4 text-lg">
          <li>
            <Link href="/peptides" className="editorial-link">
              รายการเปปไทด์ทั้งหมด ({peptides.length})
            </Link>
          </li>
          <li>
            <Link href="/guides" className="editorial-link">
              คู่มือการใช้งาน ({guides.length})
            </Link>
          </li>
          <li>
            <Link href="/about" className="editorial-link">
              เกี่ยวกับเว็บนี้
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}

function PrimerEntry({
  href,
  category,
  title,
  en,
  body,
}: {
  href: string;
  category: { label: string; color: string };
  title: string;
  en: string;
  body: string;
}) {
  return (
    <Link href={href} className="group block">
      <span
        className="cat-tag"
        style={{ ["--cat-tag-color" as string]: category.color }}
      >
        {category.label}
      </span>
      <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight group-hover:text-[color:var(--color-brand)]">
        {title}
        <br />
        <span className="text-xl font-normal italic text-[color:var(--color-ink-soft)]">
          {en}
        </span>
      </h3>
      <p className="mt-4 text-base leading-[1.85] text-[color:var(--color-ink-muted)]">
        {body}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand)] transition-transform group-hover:translate-x-1">
        อ่านต่อ →
      </span>
    </Link>
  );
}
