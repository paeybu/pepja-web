import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { Disclaimer } from "@/components/mdx/Disclaimer";
import { DoseTable } from "@/components/mdx/DoseTable";
import { SourceBox } from "@/components/mdx/SourceBox";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold leading-snug tracking-tight">
      <span className="bg-gradient-to-r from-[color:var(--color-ink)] to-[color:var(--color-ink-muted)] bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold leading-snug">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="my-4 leading-[1.85]">{children}</p>,
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-1 pl-6 leading-[1.85] marker:text-[color:var(--color-brand)]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-1 pl-6 leading-[1.85] marker:font-semibold marker:text-[color:var(--color-brand)]">
      {children}
    </ol>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-[color:var(--color-brand)] underline decoration-[color:var(--color-brand-soft)] decoration-2 underline-offset-4 transition-colors hover:decoration-[color:var(--color-brand)]"
    >
      {children}
    </a>
  ),
  hr: () => (
    <hr
      className="my-10 h-px border-0"
      style={{
        background:
          "linear-gradient(90deg, transparent, var(--color-rule-strong), transparent)",
      }}
    />
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 rounded-r-lg border-l-4 border-[color:var(--color-brand)] bg-[color:var(--color-paper-muted)] py-3 pl-5 pr-4 text-[color:var(--color-ink-muted)] italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-[color:var(--color-paper-muted)] px-1.5 py-0.5 font-mono text-[0.9em] text-[color:var(--color-brand-ink)]">
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
