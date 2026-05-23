import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPeptideFrontmatter,
  listPeptides,
  SITE_NAME,
} from "@/lib/content";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return listPeptides().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const fm = getPeptideFrontmatter(slug);
    return {
      title: `${fm.name_th} (${fm.name_en}) — ข้อมูล โดส วิธีใช้`,
      description: fm.short_desc,
      openGraph: {
        title: `${fm.name_th} (${fm.name_en}) — ข้อมูล โดส วิธีใช้ | ${SITE_NAME}`,
        description: fm.short_desc,
      },
    };
  } catch {
    return {};
  }
}

export default async function PeptidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  let fm;
  let Mdx;
  try {
    fm = getPeptideFrontmatter(slug);
    Mdx = (await import(`@/../content/peptides/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  return (
    <article>
      <header className="border-b border-[color:var(--color-rule)] pb-6">
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-ink-muted)]">
          เปปไทด์
        </p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
          {fm.name_th}{" "}
          <span className="text-[color:var(--color-ink-muted)]">
            ({fm.name_en})
          </span>
        </h1>
        {fm.brand_names.length > 0 && (
          <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
            ชื่อทางการค้า: {fm.brand_names.join(", ")}
          </p>
        )}
        <p className="mt-4 text-[color:var(--color-ink-muted)]">{fm.short_desc}</p>
      </header>

      <div className="mt-8">
        <Mdx />
      </div>

      <footer className="mt-12 border-t border-[color:var(--color-rule)] pt-4 text-xs text-[color:var(--color-ink-muted)]">
        อัปเดตล่าสุด: {fm.updated}
      </footer>
    </article>
  );
}
