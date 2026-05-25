import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuideFrontmatter, listGuides, SITE_NAME } from "@/lib/content";
import { DIFFICULTY_LABEL, getGuideTheme } from "@/lib/category-theme";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return listGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const fm = getGuideFrontmatter(slug);
    return {
      title: fm.title,
      openGraph: {
        title: `${fm.title} | ${SITE_NAME}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  let fm;
  let Mdx;
  try {
    fm = getGuideFrontmatter(slug);
    Mdx = (await import(`@/../content/guides/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  const theme = getGuideTheme(fm.category);

  return (
    <article>
      <header className="relative overflow-hidden rounded-3xl border border-[color:var(--color-rule)] bg-[color:var(--color-surface)] p-6 md:p-8">
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
            {fm.title}
          </h1>
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
