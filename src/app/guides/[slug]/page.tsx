import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuideFrontmatter, listGuides, SITE_NAME } from "@/lib/content";

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

  return (
    <article>
      <header className="border-b border-[color:var(--color-rule)] pb-6">
        <p className="text-xs uppercase tracking-widest text-[color:var(--color-ink-muted)]">
          คู่มือ
        </p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
          {fm.title}
        </h1>
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
