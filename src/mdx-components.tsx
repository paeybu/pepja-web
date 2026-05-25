import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { Disclaimer } from "@/components/mdx/Disclaimer";
import { DoseTable } from "@/components/mdx/DoseTable";
import { SourceBox } from "@/components/mdx/SourceBox";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-6 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 mb-4 border-t border-[color:var(--color-rule)] pt-8 text-2xl font-semibold leading-snug tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold leading-snug">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-5 max-w-[68ch] leading-[1.85]">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-5 max-w-[68ch] list-disc space-y-2 pl-6 leading-[1.85] marker:text-[color:var(--color-brand)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 max-w-[68ch] list-decimal space-y-2 pl-6 leading-[1.85] marker:font-mono marker:font-medium marker:text-[color:var(--color-brand)]">
      {children}
    </ol>
  ),
  a: ({ href, children }) => (
    <a href={href} className="editorial-link text-[color:var(--color-brand)]">
      {children}
    </a>
  ),
  hr: () => (
    <hr className="my-12 border-0 border-t border-[color:var(--color-rule-strong)]" />
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-y border-[color:var(--color-rule-strong)] py-4 text-lg leading-[1.85] italic text-[color:var(--color-ink-muted)]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-sm bg-[color:var(--color-paper-muted)] px-1.5 py-0.5 font-mono text-[0.9em] text-[color:var(--color-brand-ink)]">
      {children}
    </code>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[color:var(--color-ink)]">
      {children}
    </strong>
  ),
  Callout,
  Disclaimer,
  DoseTable,
  SourceBox,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
