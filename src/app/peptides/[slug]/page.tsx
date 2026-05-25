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

  const theme = getPeptideTheme(fm.category);

  return (
    <article>
      <header
        className="relative overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-6 md:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-50 blur-3xl"
          style={{
            background: `radial-gradient(circle, color-mix(in oklab, ${theme.color} 45%, transparent), transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${theme.color}, color-mix(in oklab, ${theme.color} 30%, transparent))`,
          }}
        />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="chip"
              style={{ color: theme.color, background: theme.soft }}
            >
              {theme.label}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-[color:var(--color-ink-soft)]">
              {DIFFICULTY_LABEL[fm.difficulty] ?? fm.difficulty}
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {fm.name_th}{" "}
            <span className="text-[color:var(--color-ink-muted)]">
              ({fm.name_en})
            </span>
          </h1>
          {fm.brand_names.length > 0 && (
            <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">
              ชื่อทางการค้า:{" "}
              <span className="font-medium text-[color:var(--color-ink)]">
                {fm.brand_names.join(", ")}
              </span>
            </p>
          )}
          <p className="mt-4 text-[color:var(--color-ink-muted)] leading-[1.85]">
            {fm.short_desc}
          </p>
        </div>
      </header>

      <div className="mt-10">
        <Mdx />
      </div>

      <footer className="mt-12 border-t border-[color:var(--color-rule)] pt-4 text-xs text-[color:var(--color-ink-soft)]">
        อัปเดตล่าสุด: {fm.updated}
      </footer>
    </article>
  );
}
