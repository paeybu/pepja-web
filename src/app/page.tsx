import Link from "next/link";

export default function HomePage() {
  return (
    <article>
      <header className="border-b border-[color:var(--color-rule)] pb-10">
        <p className="text-sm uppercase tracking-widest text-[color:var(--color-ink-muted)]">
          เปปไทด์ในไทย
        </p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
          เขียนเพื่อให้คุณตัดสินใจเองได้
          <br />
          ไม่ใช่เพื่อขายของหรือกันคุณออกจากข้อมูล
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[1.85] text-[color:var(--color-ink-muted)]">
          ข้อมูลเปปไทด์ภาษาไทยแบบตรงไปตรงมา สำหรับผู้ใหญ่ที่ตัดสินใจอยากศึกษาเรื่องนี้แล้ว
          ไม่ใช่หน้าขายของคลินิก ไม่ใช่หน้าข่มขู่ และไม่ปิดบังข้อมูลที่หาได้ในภาษาอังกฤษอยู่แล้ว
        </p>
      </header>

      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-ink-muted)]">
          เริ่มจากตรงไหนดี
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <EntryCard
            href="/peptides/semaglutide"
            eyebrow="ลดน้ำหนัก / GLP-1"
            title="เซมากลูไทด์ (Ozempic, Wegovy)"
            body="ตัวยายอดนิยมสำหรับลดน้ำหนัก กลไก โดสเริ่มต้น ผลข้างเคียง เทียบกับเทอร์เซพาไทด์"
          />
          <EntryCard
            href="/guides/what-are-peptides"
            eyebrow="ทำความเข้าใจก่อน"
            title="เปปไทด์คืออะไร และทำไมคนถึงใช้กัน"
            body="ภาพรวมเปปไทด์ทั้งหมด แตกต่างจากยาและอาหารเสริมยังไง เกรดทั้งสามคืออะไร"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-ink-muted)]">
          ดูทั้งหมด
        </h2>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <Link href="/peptides" className="underline underline-offset-4">
              รายการเปปไทด์ทั้งหมด →
            </Link>
          </li>
          <li>
            <Link href="/guides" className="underline underline-offset-4">
              คู่มือการใช้งาน →
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline underline-offset-4">
              เกี่ยวกับเว็บนี้ →
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}

function EntryCard({
  href,
  eyebrow,
  title,
  body,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group block border border-[color:var(--color-rule)] p-5 transition-colors hover:border-[color:var(--color-accent)]"
    >
      <p className="text-xs uppercase tracking-widest text-[color:var(--color-ink-muted)]">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-[color:var(--color-accent)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-[1.75] text-[color:var(--color-ink-muted)]">
        {body}
      </p>
    </Link>
  );
}
