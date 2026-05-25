import Link from "next/link";
import { getPeptideTheme, getGuideTheme } from "@/lib/category-theme";

export default function HomePage() {
  return (
    <article>
      <section className="relative overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] px-6 py-12 md:px-10 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-brand) 40%, transparent), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--color-cat-longevity) 35%, transparent), transparent 70%)",
          }}
        />

        <div className="relative">
          <span className="chip text-[color:var(--color-brand-ink)]" style={{ background: "var(--color-brand-soft)" }}>
            เปปไทด์ในไทย
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
            เขียนเพื่อให้คุณ
            <br />
            <span className="gradient-text">ตัดสินใจเองได้</span>
            <br />
            <span className="text-[color:var(--color-ink-muted)]">
              ไม่ใช่เพื่อขายของ
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.85] text-[color:var(--color-ink-muted)]">
            ข้อมูลเปปไทด์ภาษาไทยแบบตรงไปตรงมา สำหรับผู้ใหญ่ที่ตัดสินใจอยากศึกษาเรื่องนี้แล้ว
            ไม่ใช่หน้าขายของคลินิก ไม่ใช่หน้าข่มขู่ และไม่ปิดบังข้อมูลที่หาได้ในภาษาอังกฤษอยู่แล้ว
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              เริ่มที่นี่
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/peptides"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-rule-strong)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              ดูเปปไทด์ทั้งหมด
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)]">
            เริ่มจากตรงไหนดี
          </h2>
          <Link
            href="/start"
            className="text-xs font-medium text-[color:var(--color-brand)] hover:underline"
          >
            ดูเส้นทางทั้งหมด →
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <EntryCard
            href="/peptides/semaglutide"
            theme={getPeptideTheme("glp1")}
            eyebrow="ลดน้ำหนัก / GLP-1"
            title="เซมากลูไทด์ (Ozempic, Wegovy)"
            body="ตัวยายอดนิยมสำหรับลดน้ำหนัก กลไก โดสเริ่มต้น ผลข้างเคียง เทียบกับเทอร์เซพาไทด์"
          />
          <EntryCard
            href="/guides/what-are-peptides"
            theme={getGuideTheme("concept")}
            eyebrow="ทำความเข้าใจก่อน"
            title="เปปไทด์คืออะไร และทำไมคนถึงใช้กัน"
            body="ภาพรวมเปปไทด์ทั้งหมด แตกต่างจากยาและอาหารเสริมยังไง เกรดทั้งสามคืออะไร"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink-soft)]">
          ดูทั้งหมด
        </h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <NavTile
            href="/peptides"
            title="รายการเปปไทด์"
            body="ทุกตัวที่เขียนถึง"
            tint="var(--color-cat-healing)"
          />
          <NavTile
            href="/guides"
            title="คู่มือการใช้งาน"
            body="ผสม ฉีด คำนวณ"
            tint="var(--color-guide-howto)"
          />
          <NavTile
            href="/about"
            title="เกี่ยวกับเว็บนี้"
            body="จุดยืนของเรา"
            tint="var(--color-cat-longevity)"
          />
        </div>
      </section>
    </article>
  );
}

function EntryCard({
  href,
  eyebrow,
  title,
  body,
  theme,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  theme: { color: string; soft: string };
}) {
  return (
    <Link href={href} className="card-surface group block overflow-hidden p-6">
      <div
        className="h-1 -mx-6 -mt-6 mb-5"
        style={{
          background: `linear-gradient(90deg, ${theme.color}, color-mix(in oklab, ${theme.color} 50%, transparent))`,
        }}
      />
      <span
        className="chip"
        style={{ color: theme.color, background: theme.soft }}
      >
        {eyebrow}
      </span>
      <h3
        className="mt-3 text-lg font-semibold leading-snug transition-colors"
        style={{ ["--hover-color" as string]: theme.color }}
      >
        <span className="group-hover:text-[color:var(--hover-color)]">
          {title}
        </span>
      </h3>
      <p className="mt-2 text-sm leading-[1.75] text-[color:var(--color-ink-muted)]">
        {body}
      </p>
      <div
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-0.5"
        style={{ color: theme.color }}
      >
        อ่านต่อ <span aria-hidden>→</span>
      </div>
    </Link>
  );
}

function NavTile({
  href,
  title,
  body,
  tint,
}: {
  href: string;
  title: string;
  body: string;
  tint: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-5 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-rule-strong)] hover:shadow-[var(--shadow-card-hover)]"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 opacity-60 transition-opacity group-hover:opacity-100"
        style={{ background: tint }}
      />
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">{body}</p>
      <span
        className="mt-3 inline-block text-sm font-medium"
        style={{ color: tint }}
      >
        เปิด →
      </span>
    </Link>
  );
}
