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
        <h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
          {fm.title}
        </h1>
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
