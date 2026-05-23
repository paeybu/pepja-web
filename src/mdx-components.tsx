import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/Callout";
import { Disclaimer } from "@/components/mdx/Disclaimer";
import { DoseTable } from "@/components/mdx/DoseTable";
import { SourceBox } from "@/components/mdx/SourceBox";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-6 text-3xl font-semibold leading-tight md:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold leading-snug">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold leading-snug">{children}</h3>
  ),
  p: ({ children }) => <p className="my-4 leading-[1.85]">{children}</p>,
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-1 pl-6 leading-[1.85]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-1 pl-6 leading-[1.85]">
      {children}
    </ol>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[color:var(--color-accent)] underline underline-offset-4"
    >
      {children}
    </a>
  ),
  hr: () => (
    <hr className="my-10 border-0 border-t border-[color:var(--color-rule)]" />
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-[color:var(--color-rule)] pl-4 text-[color:var(--color-ink-muted)] italic">
      {children}
    </blockquote>
  ),
  Callout,
  Disclaimer,
  DoseTable,
  SourceBox,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
