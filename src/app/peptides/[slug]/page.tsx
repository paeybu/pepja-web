import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPeptideFrontmatter,
  listPeptides,
  SITE_NAME,
} from "@/lib/content";
import { DIFFICULTY_LABEL, getPeptideTheme } from "@/lib/category-theme";

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
      title: `${fm.name_th} (${fm.name_en}): ข้อมูล โดส วิธีใช้`,
      description: fm.short_desc,
      openGraph: {
        title: `${fm.name_th} (${fm.name_en}): ข้อมูล โดส วิธีใช้ | ${SITE_NAME}`,
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

  const theme = getPeptideTheme(fm.category);

  return (
    <article>
      <header className="border-b border-[color:var(--color-rule-strong)] pb-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span
            className="cat-tag"
            style={{ ["--cat-tag-color" as string]: theme.color }}
          >
            {theme.label}
          </span>
          <span className="text-xs text-[color:var(--color-ink-soft)]">
            {DIFFICULTY_LABEL[fm.difficulty] ?? fm.difficulty}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          {fm.name_th}
        </h1>
        <p className="mt-2 text-2xl font-normal italic leading-snug text-[color:var(--color-ink-soft)]">
          {fm.name_en}
        </p>
        {fm.brand_names.length > 0 && (
          <p className="mt-4 text-sm text-[color:var(--color-ink-muted)]">
            ชื่อทางการค้า:{" "}
            <span className="text-base text-[color:var(--color-ink)]">
              {fm.brand_names.join(", ")}
            </span>
          </p>
        )}
        <p className="mt-6 max-w-[60ch] text-lg leading-[1.85] text-[color:var(--color-ink-muted)]">
          {fm.short_desc}
        </p>
      </header>

      <div className="mt-12">
        <Mdx />
      </div>

      <footer className="mt-16 border-t border-[color:var(--color-rule)] pt-4 text-xs text-[color:var(--color-ink-soft)]">
        อัปเดตล่าสุด {fm.updated}
      </footer>
    </article>
  );
}
